import { useEffect, useMemo, useState } from "react";
import { getMenu, getRingSchedule } from "../api/trpc";
import { formatHHMM, formatYYYYMMDD, getDayBucketKey, nowLocal } from "../utils/time";

/* =========================
   Allergen dictionary
   ========================= */

const ALLERGEN_MAP = {
  A: "Gluten içeren tahıllar: buğday (ör. kılçıksız buğday ve kamut), çavdar, arpa, yulaf veya bunların hibrit türleri ve bunların ürünleri",
  B: "Kabuklular (Crustacea) ve bunların ürünleri",
  C: "Yumurta ve yumurta ürünleri",
  D: "Süt ve süt ürünleri (laktoz dahil)",
  E: "Balık ve balık ürünleri",
  F: "Hardal ve hardal ürünleri",
  G: "Yerfıstığı ve yerfıstığı ürünleri",
  H: "Soya fasulyesi ve soya fasulyesi ürünleri",
  "İ": "Kereviz ve kereviz ürünleri",
  J: "Acı bakla ve acı bakla ürünleri",
  K: "Sert kabuklu meyveler: Badem, fındık, ceviz, kaju fıstığı, pikan cevizi, brezilya fındığı, antep fıstığı, macadamia fındığı ve Queensland fındığı ve bunların ürünleri",
  L: "Kükürt dioksit ve sülfitler (tüketime hazır veya üreticilerin talimatlarına göre hazırlanan ürünler için, toplam SO2 cinsinden hesaplanan konsantrasyonu 10 mg/kg veya 10 mg/L’den daha fazla olanlar)",
  M: "Yumuşakçalar ve ürünleri",
  N: "Susam tohumu ve susam tohumu ürünleri",
};

function parseAllergenCodes(allergensStr) {
  if (!allergensStr) return [];
  const raw = String(allergensStr).trim();
  if (!raw) return [];
  return raw
    .split("*")
    .map((x) => x.trim())
    .filter(Boolean);
}

/* =========================
   Menu parser
   ========================= */

function getMenuDays(payload) {
  if (!payload) return [];
  if (Array.isArray(payload.allMenus)) return payload.allMenus;
  if (Array.isArray(payload.menus)) return payload.menus;
  if (Array.isArray(payload.data?.allMenus)) return payload.data.allMenus;
  return [];
}

function findMenuByDate(days, dateStr) {
  if (!Array.isArray(days)) return null;
  return days.find((d) => d?.date === dateStr) || null;
}

function formatMenuLine(item) {
  const name = item?.name ? String(item.name).trim() : "";
  if (!name) return "";

  const category = item?.category ? String(item.category).trim() : "";
  const calories = typeof item?.calories === "number" && item.calories > 0 ? item.calories : null;
  const allergens = item?.allergens ? String(item.allergens).trim() : "";

  const parts = [];
  if (category) parts.push(category);
  if (calories !== null) parts.push(`${calories} kcal`);
  if (allergens) parts.push(`alerjen ${allergens}`);

  return parts.length ? `${name} (${parts.join(" | ")})` : name;
}

/* =========================
   Ring parser
   ========================= */

function pickRingItemsByDate(payload, dateStr) {
  if (!payload) return [];
  const d = dateStr ? new Date(`${dateStr}T00:00:00`) : new Date();
  const key = getDayBucketKey(d);

  if (key === "weekday" && Array.isArray(payload.weekdayTimes)) return payload.weekdayTimes;
  if (key === "saturday" && Array.isArray(payload.saturdayTimes)) return payload.saturdayTimes;
  if (key === "sunday" && Array.isArray(payload.sundayTimes)) return payload.sundayTimes;

  if (Array.isArray(payload.allTimes)) return payload.allTimes;
  return [];
}

function normalizeRingItems(list) {
  if (!Array.isArray(list)) return [];

  return list
    .map((x) => {
      if (typeof x === "string") {
        return { time: x.padStart(5, "0"), note: "" };
      }
      if (x && typeof x === "object") {
        const time = x.time || x.saat || x.departure || x.clock || "";
        const note = x.note || x.not || x.aciklama || "";
        if (!time) return null;
        return {
          time: String(time).padStart(5, "0"),
          note: note ? String(note).trim() : "",
        };
      }
      return null;
    })
    .filter(Boolean)
    .filter((x) => /^\d{2}:\d{2}$/.test(x.time));
}

function hhmmToTodayDate(hhmm) {
  const [h, m] = String(hhmm).split(":").map(Number);
  const d = new Date();
  d.setHours(h, m, 0, 0);
  return d;
}

function getNextRingItems(items, count = 3) {
  const now = nowLocal();
  return items
    .map((it) => ({ ...it, d: hhmmToTodayDate(it.time) }))
    .filter((x) => x.d.getTime() >= now.getTime())
    .sort((a, b) => a.d - b.d)
    .slice(0, count)
    .map(({ time, note }) => ({ time, note }));
}

function normalizeNote(note) {
  const n = (note || "").trim();
  if (!n) return "TEKNOKENT";
  return n;
}

function isStrongRingNote(note) {
  const n = (note || "").toUpperCase();
  return n.includes("KÖPRÜDEN") || n.includes("DURAKTAN");
}

/* =========================
   Modal: Alerjen
   ========================= */

function AllergenModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    function onKeyDown(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const entries = Object.entries(ALLERGEN_MAP);

  return (
    <div className="modalOverlay" onMouseDown={onClose}>
      <div className="modal" onMouseDown={(e) => e.stopPropagation()}>
        <div className="modalHeader">
          <div>
            <div className="modalTitle">Alerjen Maddeler veya Ürünler</div>
            <div className="muted" style={{ marginTop: 6 }}>
              Menü satırlarında gördüğün kodlar (A, B, C...) bu listeye karşılık gelir.
            </div>
          </div>

          <button className="iconBtn" onClick={onClose} aria-label="Kapat" type="button">
            X
          </button>
        </div>

        <div className="modalBody">
          <div className="allergenGrid">
            {entries.map(([code, desc]) => (
              <div className="allergenRow" key={code}>
                <div className="allergenCode">{code}</div>
                <div className="allergenDesc">{desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="modalFooter">
          <button className="btnPrimary" onClick={onClose} type="button">
            Kapat
          </button>
        </div>
      </div>
    </div>
  );
}

/* =========================
   Modal: Kaynak gizli
   (Header'dan tetikleyeceğiz)
   ========================= */

export function SourceHiddenModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return;
    function onKeyDown(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="modalOverlay" onMouseDown={onClose}>
      <div className="modal" onMouseDown={(e) => e.stopPropagation()} style={{ width: "min(560px, 100%)" }}>
        <div className="modalHeader">
          <div>
            <div className="modalTitle">Kaynak</div>
            <div className="muted" style={{ marginTop: 6 }}>
              Yalnızca öğretim sorumlusuyla paylaşılmaktadır.
            </div>
          </div>

          <button className="iconBtn" onClick={onClose} aria-label="Kapat" type="button">
            X
          </button>
        </div>

        <div className="modalBody">
          <div className="alert" style={{ marginTop: 0 }}>
            Bu projede kullanılan API bağlantısı gizlenmiştir.
          </div>
        </div>

        <div className="modalFooter">
          <button className="btnPrimary" onClick={onClose} type="button">
            Tamam
          </button>
        </div>
      </div>
    </div>
  );
}

/* =========================
   Component
   ========================= */

export default function Content({ onThemeChange, onOpenSource }) {
  const [tab, setTab] = useState("menu"); // menu | ring
  const [date, setDate] = useState(() => formatYYYYMMDD(nowLocal()));

  const [menuPayload, setMenuPayload] = useState(null);
  const [ringPayload, setRingPayload] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [clock, setClock] = useState(() => formatHHMM(nowLocal()));
  const [showRaw, setShowRaw] = useState(false);

  const [allergenOpen, setAllergenOpen] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setClock(formatHHMM(nowLocal())), 30000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    onThemeChange(tab === "menu" ? "meal" : "ring");
  }, [tab, onThemeChange]);

  async function loadAll({ silent = false } = {}) {
    try {
      if (!silent) setLoading(true);
      setError("");

      const [m, r] = await Promise.all([
        getMenu({ date }).catch(() => getMenu()),
        getRingSchedule({ date }).catch(() => getRingSchedule()),
      ]);

      setMenuPayload(m);
      setRingPayload(r);
    } catch (e) {
      setError(e?.message || "Bir hata oluştu");
    } finally {
      if (!silent) setLoading(false);
    }
  }

  useEffect(() => {
    loadAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    loadAll({ silent: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  const menuDays = useMemo(() => getMenuDays(menuPayload), [menuPayload]);
  const selectedMenuDay = useMemo(() => findMenuByDate(menuDays, date), [menuDays, date]);

  const menuItems = useMemo(() => {
    const items = selectedMenuDay?.items;
    if (!Array.isArray(items)) return [];
    return items
      .map((it) => ({
        line: formatMenuLine(it),
        allergenCodes: parseAllergenCodes(it?.allergens),
      }))
      .filter((x) => typeof x.line === "string" && x.line.trim() !== "");
  }, [selectedMenuDay]);

  const totalCalories = useMemo(() => {
    const c = selectedMenuDay?.calories;
    return typeof c === "number" ? c : null;
  }, [selectedMenuDay]);

  const ringItems = useMemo(() => {
    const raw = pickRingItemsByDate(ringPayload, date);
    return normalizeRingItems(raw).map((x) => ({
      ...x,
      note: normalizeNote(x.note),
    }));
  }, [ringPayload, date]);

  const nextRing = useMemo(() => getNextRingItems(ringItems, 3), [ringItems]);
  const ringCount = useMemo(() => ringItems.length, [ringItems]);

  return (
    <main className="content">
      <AllergenModal open={allergenOpen} onClose={() => setAllergenOpen(false)} />

      <div className="topRow">
        <div className="glass">
          <div className="tabs">
            <button className={`tab ${tab === "menu" ? "active" : ""}`} onClick={() => setTab("menu")}>
              Yemekhane
            </button>
            <button className={`tab ${tab === "ring" ? "active" : ""}`} onClick={() => setTab("ring")}>
              Ring
            </button>

            {/* Content içinde KAYNAK YOK. Header'daki Kaynak'a bağlayacağız.
                İstersen debug için burada gizli kalsın diye aşağıdaki satırı açabilirsin:
                <button className="ghostBtn" onClick={onOpenSource} type="button">Kaynak</button>
            */}
          </div>

          <div className="controls">
            <div className="pill">
              Lokal saat <b>{clock}</b>
            </div>

            <label className="field">
              <span>Tarih</span>
              <input value={date} onChange={(e) => setDate(e.target.value)} placeholder="YYYY-MM-DD" />
            </label>

            <button className="btnPrimary" onClick={() => loadAll()} disabled={loading} type="button">
              {loading ? "Yükleniyor" : "Yenile"}
            </button>

            <label className="pill" style={{ cursor: "pointer" }}>
              <input
                type="checkbox"
                checked={showRaw}
                onChange={(e) => setShowRaw(e.target.checked)}
                style={{ marginRight: 8 }}
              />
              Debug JSON
            </label>
          </div>
        </div>

        <div className="stats">
          <div className="statCard">
            <div className="statTitle">Menü item</div>
            <div className="statValue">{menuItems.length}</div>
          </div>
          <div className="statCard">
            <div className="statTitle">Ring sefer</div>
            <div className="statValue">{ringCount}</div>
          </div>
        </div>
      </div>

      {error && (
        <div className="alert error">
          <b>Hata:</b> {error}
        </div>
      )}

      {tab === "menu" ? (
        <section className="card">
          <div className="cardHeader cardHeaderRow">
            <div>
              <h2 style={{ margin: 0 }}>Yemekhane Menüsü</h2>
              <div className="muted">
                Seçili tarih: <b>{date}</b>
                {totalCalories !== null ? ` | Toplam ${totalCalories} kcal` : ""}
              </div>
            </div>

            <button
              className="infoIconBtn"
              onClick={() => setAllergenOpen(true)}
              type="button"
              aria-label="Alerjen listesi"
              title="Alerjen listesi"
            >
              i
            </button>
          </div>

          {loading && !menuPayload ? (
            <div className="skeletonList">
              <div className="skeletonLine" />
              <div className="skeletonLine" />
              <div className="skeletonLine" />
              <div className="skeletonLine" />
            </div>
          ) : menuItems.length ? (
            <ul className="menuList">
              {menuItems.map((x, i) => (
                <li key={i} className="menuItem">
                  <div className="menuLine">{x.line}</div>

                  {x.allergenCodes.length ? (
                    <div className="menuMeta">
                      <span className="metaChip">Kodlar: {x.allergenCodes.join(", ")}</span>
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>
          ) : (
            <div className="muted">Menü verisi bulunamadı.</div>
          )}
        </section>
      ) : (
        <section className="card">
          <div className="cardHeader">
            <h2>Ring Saatleri</h2>
            <div className="muted">
              Seçili tarih: <b>{date}</b> | Lokal saate göre sıradaki seferler
            </div>
          </div>

          <div className="nextHero">
            <div className="nextHeroTitle">Sıradaki ring</div>

            {nextRing.length ? (
              <div className="nextHeroMain">
                <div className="nextBigTime">{nextRing[0].time}</div>

                <div
                  className={`nextBigNote ${
                    isStrongRingNote(nextRing[0].note) ? "ringNoteStrong" : "ringNoteNormal"
                  }`}
                >
                  {normalizeNote(nextRing[0].note)}
                </div>
              </div>
            ) : (
              <div className="muted" style={{ marginTop: 8 }}>
                Sıradaki sefer bulunamadı.
              </div>
            )}

            {nextRing.length > 1 && (
              <div className="nextSmallRow">
                {nextRing.slice(1).map((x, idx) => (
                  <div className="nextMini" key={idx}>
                    <div className="nextMiniTime">{x.time}</div>
                    <div className={`nextMiniNote ${isStrongRingNote(x.note) ? "ringNoteStrong" : "ringNoteNormal"}`}>
                      {normalizeNote(x.note)}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {loading && !ringPayload ? (
            <div className="skeletonGrid">
              {Array.from({ length: 12 }).map((_, i) => (
                <div className="skeletonBox" key={i} />
              ))}
            </div>
          ) : ringItems.length ? (
            <div className="timeGrid">
              {ringItems.map((it, idx) => (
                <div key={`${it.time}-${idx}`} className="timeChip">
                  <div className="timeChipTime">{it.time}</div>
                  <div className={`timeChipNote ${isStrongRingNote(it.note) ? "ringNoteStrong" : "ringNoteNormal"}`}>
                    {normalizeNote(it.note)}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="muted">Ring verisi bulunamadı.</div>
          )}
        </section>
      )}

      {showRaw && (
        <section className="card" style={{ marginTop: 14 }}>
          <div className="cardHeader">
            <h2>Debug</h2>
            <div className="muted">Ham API çıktıları</div>
          </div>

          <div className="muted" style={{ marginTop: 10 }}>
            menuPayload
          </div>
          <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
            {JSON.stringify(menuPayload, null, 2)}
          </pre>

          <div className="muted" style={{ marginTop: 10 }}>
            ringPayload
          </div>
          <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
            {JSON.stringify(ringPayload, null, 2)}
          </pre>
        </section>
      )}
    </main>
  );
}
