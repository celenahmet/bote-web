// Statik birleştirme (çizim çağrısı bütçesi): hareket etmeyen meshler, malzeme özellikleri aynıysa, tek geometride toplanır;
// çizim çağrısı sayısı "mesh sayısından" "farklı malzeme sayısına" iner. Dünya matrisi geometriye pişirilir; birleşik meshler kök
// grubun çocuğu olur (kök matrisi birim kalmalıdır).
//
// Birleşmeyenler: userData.dinamik olan mesh ya da dinamik bir atanın altındakiler (hareket eden fare, tuş geometrisi, kablo
// renkleri, ışıklar, kâğıt), InstancedMesh, gizli (visible=false) meshler, userData.statik === false olanlar ve malzemesi
// userData.dinamik olan meshler (malzemesi sonradan değiştirilenler kendi başına kalır).
// Gölge bayrakları (castShadow, receiveShadow) birleşik meshe aynen geçer: bayrakları farklı meshler ayrı kümeye girer.
import { Mesh } from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

const hex = (c) => (c && c.getHex ? c.getHex() : 0);
function malzemeAnahtari(m) {
  if (m.userData && m.userData.dinamik) return 'u:' + m.uuid;
  return [m.type, hex(m.color), m.roughness, m.metalness, hex(m.emissive), m.emissiveIntensity, m.map ? m.map.uuid : '-', m.normalMap ? m.normalMap.uuid : '-',
    m.normalScale ? m.normalScale.x + ',' + m.normalScale.y : '-', m.vertexColors ? 1 : 0, m.side, m.transparent ? 1 : 0, m.opacity, m.toneMapped ? 1 : 0,
    m.depthWrite ? 1 : 0, m.depthTest ? 1 : 0, m.blending].join('|');
}
const IZINLI = ['position', 'normal', 'uv', 'color'];

export function statikBirlestir(kok) {
  kok.updateMatrixWorld(true);
  const adaylar = [];
  kok.traverse((o) => {
    if (!o.isMesh || o.isInstancedMesh || o.userData.dinamik || o.userData.statik === false || !o.visible || o.children.length) return;
    const m = o.material;
    if (!m || Array.isArray(m) || m.visible === false) return;
    for (let a = o.parent; a && a !== kok; a = a.parent) if (a.userData.dinamik || !a.visible) return;
    adaylar.push(o);
  });
  const kumeler = new Map();
  for (const o of adaylar) {
    const g = o.geometry, ad = IZINLI.filter((n) => g.attributes[n]).join(',');
    const anahtar = [malzemeAnahtari(o.material), o.castShadow ? 1 : 0, o.receiveShadow ? 1 : 0, o.renderOrder, ad].join('#');
    if (!kumeler.has(anahtar)) kumeler.set(anahtar, { liste: [], ad });
    kumeler.get(anahtar).liste.push(o);
  }
  let once = adaylar.length, sonra = 0, birlesen = 0;
  for (const { liste, ad } of kumeler.values()) {
    if (liste.length < 2) { sonra++; continue; }
    const adlar = ad.split(',');
    const geolar = liste.map((o) => {
      let g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone();
      for (const n of Object.keys(g.attributes)) if (!adlar.includes(n)) g.deleteAttribute(n);
      g.applyMatrix4(o.matrixWorld);
      return g;
    });
    const bg = mergeGeometries(geolar, false);
    for (const g of geolar) g.dispose();
    if (!bg) { sonra += liste.length; console.error('statik birleştirme başarısız, meshler olduğu gibi kaldı'); continue; }
    const ilk = liste[0], mesh = new Mesh(bg, ilk.material);
    mesh.name = 'birlesik'; mesh.castShadow = ilk.castShadow; mesh.receiveShadow = ilk.receiveShadow; mesh.renderOrder = ilk.renderOrder;
    mesh.matrixAutoUpdate = false;
    for (const o of liste) { if (o.parent) o.parent.remove(o); o.geometry.dispose(); }
    kok.add(mesh);
    sonra++; birlesen += liste.length;
  }
  kok.updateMatrixWorld(true);
  return { once, sonra, birlesen };
}
