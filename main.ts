import { mkdirSync as k, readdirSync as d, readFileSync as f, statSync as s, writeFileSync as w } from 'node:fs';
import { join as j } from 'node:path';
function run(p, g) {
  const n = p.length, t = new Int32Array(256);
  let a = 0;
  const c = new Int32Array(64);
  let q = 0;
  const m = new Int32Array(256), o = new Uint8Array(65536);
  let l = 0, u = 0, x = 0, z = 0;
  const e = (v) => ({ b: o.subarray(0, l), x: v });
  for (;;) {
    if (z === 1e6) return e(10);
    if (x < 0 || x >= n) return e(9);
    const h = p[x];
    let y = 0;
    if (h === 1) y = 1;
    else if (h === 2) y = 4;
    else if (h >= 48 && h <= 51) y = 2;
    else if (h !== 0 && !(h >= 3 && h <= 7) && !(h >= 16 && h <= 30) && !(h >= 32 && h <= 34) && h !== 52 && h !== 64 && h !== 65 && !(h >= 80 && h <= 83)) return e(5);
    if (x + y >= n) return e(9);
    z++;
    const v = x + 1 + y;
    x = v;
    switch (h) {
      case 0: return e(0);
      case 1:
        if (a >= 256) return e(3);
        t[a++] = (p[v - 1] << 24) >> 24;
        break;
      case 2:
        if (a >= 256) return e(3);
        t[a++] = p[v - 4] | (p[v - 3] << 8) | (p[v - 2] << 16) | (p[v - 1] << 24);
        break;
      case 3:
        if (a < 1) return e(2);
        a--;
        break;
      case 4:
        if (a < 1) return e(2);
        if (a >= 256) return e(3);
        t[a] = t[a - 1];
        a++;
        break;
      case 5: {
        if (a < 2) return e(2);
        const T = t[a - 1];
        t[a - 1] = t[a - 2];
        t[a - 2] = T;
        break;
      }
      case 6:
        if (a < 2) return e(2);
        if (a >= 256) return e(3);
        t[a] = t[a - 2];
        a++;
        break;
      case 7: {
        if (a < 3) return e(2);
        const T = t[a - 3];
        t[a - 3] = t[a - 2];
        t[a - 2] = t[a - 1];
        t[a - 1] = T;
        break;
      }
      case 23:
        if (a < 1) return e(2);
        t[a - 1] = (-t[a - 1]) | 0;
        break;
      case 27:
        if (a < 1) return e(2);
        t[a - 1] = ~t[a - 1];
        break;
      case 16: case 17: case 18: case 19: case 20: case 21: case 22:
      case 24: case 25: case 26: case 28: case 29: case 30:
      case 32: case 33: case 34: {
        if (a < 2) return e(2);
        const B = t[a - 1], A = t[a - 2];
        let r;
        switch (h) {
          case 16: r = (A + B) | 0; break;
          case 17: r = (A - B) | 0; break;
          case 18: r = Math.imul(A, B); break;
          case 19:
            if (B === 0) return e(4);
            r = A === -2147483648 && B === -1 ? A : (A / B) | 0;
            break;
          case 20:
            if (B === 0) return e(4);
            r = B === -1 ? 0 : (A % B) | 0;
            break;
          case 21:
            if (B === 0) return e(4);
            r = Math.floor((A >>> 0) / (B >>> 0)) | 0;
            break;
          case 22:
            if (B === 0) return e(4);
            r = ((A >>> 0) % (B >>> 0)) | 0;
            break;
          case 24: r = A & B; break;
          case 25: r = A | B; break;
          case 26: r = A ^ B; break;
          case 28: r = A << (B & 31); break;
          case 29: r = A >> (B & 31); break;
          case 30: r = (A >>> (B & 31)) | 0; break;
          case 32: r = A === B ? 1 : 0; break;
          case 33: r = A < B ? 1 : 0; break;
          default: r = (A >>> 0) < (B >>> 0) ? 1 : 0;
        }
        a -= 2;
        t[a++] = r;
        break;
      }
      case 48: case 49: case 50: {
        const R = ((p[v - 2] | (p[v - 1] << 8)) << 16) >> 16;
        let T = true;
        if (h !== 48) {
          if (a < 1) return e(2);
          const V = t[--a];
          T = h === 49 ? V === 0 : V !== 0;
        }
        if (T) x = v + R;
        break;
      }
      case 51:
        if (q >= 64) return e(7);
        c[q++] = v;
        x = p[v - 2] | (p[v - 1] << 8);
        break;
      case 52:
        if (q === 0) return e(8);
        x = c[--q];
        break;
      case 64: {
        if (a < 1) return e(2);
        const A = t[a - 1];
        if (A < 0 || A > 255) return e(6);
        t[a - 1] = m[A];
        break;
      }
      case 65: {
        if (a < 2) return e(2);
        const A = t[a - 1], V = t[a - 2];
        if (A < 0 || A > 255) return e(6);
        a -= 2;
        m[A] = V;
        break;
      }
      case 80: {
        if (a < 1) return e(2);
        const S = String(t[a - 1]);
        if (l + S.length > 65536) return e(11);
        a--;
        for (let i = 0; i < S.length; i++) o[l++] = S.charCodeAt(i);
        break;
      }
      case 81:
        if (a < 1) return e(2);
        if (l + 1 > 65536) return e(11);
        o[l++] = t[--a] & 255;
        break;
      case 82:
        if (a >= 256) return e(3);
        t[a++] = u < g.length ? g[u++] : -1;
        break;
      case 83:
        if (a < 1) return e(2);
        return e(t[--a] & 255);
    }
  }
}
const I = process.env.MAKEFUN_INPUT_DIR ?? '/input';
const O = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
for (const id of d(I).filter((y) => {
  try { return s(j(I, y)).isDirectory(); } catch { return false; }
}).sort()) {
  const D = j(O, id);
  try {
    const r = run(f(j(I, id, 'program.bin')), f(j(I, id, 'input.bin')));
    k(D, { recursive: true });
    w(j(D, 'stdout.bin'), r.b);
    w(j(D, 'exit.txt'), r.x + '\n');
  } catch {
    try {
      k(D, { recursive: true });
      w(j(D, 'stdout.bin'), new Uint8Array(0));
      w(j(D, 'exit.txt'), '9\n');
    } catch { /* /output itself unusable; nothing more to do */ }
  }
}
