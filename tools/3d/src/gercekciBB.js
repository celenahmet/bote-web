// Fiziksel görünüm: yarım boy breadboard derisi (400 nokta). Sanal breadboard'un (modeller.js breadboardYap)
// çocuk grubudur; üst yüz BB_UST = 8,5'te (seçim kareleri ve vekiller bu yüksekliğe bağlı, üstüne çıkılmaz).
// Delik, ray çizgisi, harf ve numaralar Sanal'ın tablolarıyla aynı yerde dokuya çizilir (gercekciDoku.js).
import { Group, Mesh, BoxGeometry, MeshStandardMaterial, Vector2 } from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { BB, BB_UST, RAY_Z, sutunX } from './modeller.js';
import { bbDokulari } from './gercekciDoku.js';

const kutu = (w, h, d, x, y, z) => { const g = new BoxGeometry(w, h, d); g.translate(x, y, z); return g; };

export function bbDerisiYap(sag) {
  const g = new Group(); g.name = 'breadboard-fiziksel';
  const D = bbDokulari(sag.duzey);
  for (const t of Object.values(D)) sag.kayit(t);
  // kırık beyaz ABS, hafif saten
  const ust = new MeshStandardMaterial({ map: D.albedo, roughness: 0.58 });
  if (D.normal) { ust.normalMap = D.normal; ust.normalScale = new Vector2(0.9, 0.9); }
  const yan = new MeshStandardMaterial({ color: 0xece8df, roughness: 0.62 });
  sag.kayitMat(ust); sag.kayitMat(yan);
  const govdeMat = [yan, yan, ust, yan, yan, yan];
  const govde = new Mesh(new RoundedBoxGeometry(BB.w, BB.h, BB.d, 3, 1.1), govdeMat);
  govde.position.set(BB.x, BB.h / 2, BB.z); govde.castShadow = govde.receiveShadow = true; g.add(govde);
  // Röntgen: içteki fosfor-bronz klips şeritleri (Sanal ile aynı yer), yalnız Röntgen açıkken görünür
  const seritler = [];
  for (let cc = 1; cc <= 30; cc++) for (const yn of [1, -1]) seritler.push(kutu(1.5, 1.1, 11.4, sutunX(cc), BB_UST - 2.3, BB.z + yn * 8.89));
  for (const z of Object.values(RAY_Z)) seritler.push(kutu(sutunX(30) - sutunX(2) + 1.6, 1.1, 1.5, BB.x, BB_UST - 2.3, BB.z + z));
  const serit = new Mesh(mergeGeometries(seritler.map((x) => x.toNonIndexed())), sag.mat('klips'));
  serit.visible = false; g.add(serit);
  return {
    grup: g,
    kanca: {
      rontgen(acik) {
        serit.visible = acik;
        for (const m of [ust, yan]) { m.transparent = acik; m.opacity = acik ? 0.3 : 1; m.depthWrite = !acik; m.needsUpdate = true; }
        govde.castShadow = !acik;
      },
    },
  };
}
