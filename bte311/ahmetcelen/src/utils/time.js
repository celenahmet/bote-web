export function nowLocal() {
  return new Date();
}

export function formatHHMM(d) {
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  return `${hh}:${mm}`;
}

export function formatYYYYMMDD(d) {
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

export function hhmmToTodayDate(hhmm) {
  const [h, m] = String(hhmm).split(":").map(Number);
  const d = new Date();
  d.setHours(h, m, 0, 0);
  return d;
}

export function normalizeTimes(list) {
  if (!Array.isArray(list)) return [];
  return list
    .map((x) => {
      if (typeof x === "string") return x;
      if (x && typeof x === "object") {
        return x.time || x.saat || x.departure || x.clock || null;
      }
      return null;
    })
    .filter(Boolean)
    .filter((t) => /^\d{1,2}:\d{2}$/.test(t))
    .map((t) => t.padStart(5, "0"));
}

export function getNextDepartures(times, count = 3) {
  const now = nowLocal();
  return times
    .map((t) => ({ t, d: hhmmToTodayDate(t) }))
    .filter((x) => x.d.getTime() >= now.getTime())
    .sort((a, b) => a.d - b.d)
    .slice(0, count)
    .map((x) => x.t);
}

export function getDayBucketKey(d) {
  const day = d.getDay(); // 0 Sunday, 6 Saturday
  if (day === 6) return "saturday";
  if (day === 0) return "sunday";
  return "weekday";
}
