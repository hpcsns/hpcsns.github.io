var Br = Object.defineProperty;
var Or = (e, n, o) => n in e ? Br(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o;
var ee = (e, n, o) => (Or(e, typeof n != "symbol" ? n + "" : n, o), o);
function ne() {
}
function Mt(e) {
  return e();
}
function At() {
  return /* @__PURE__ */ Object.create(null);
}
function Te(e) {
  e.forEach(Mt);
}
function Ht(e) {
  return typeof e == "function";
}
function Ft(e, n) {
  return e != e ? n == n : e !== n || e && typeof e == "object" || typeof e == "function";
}
function Tr(e) {
  return Object.keys(e).length === 0;
}
function jt(e, ...n) {
  if (e == null) {
    for (const c of n)
      c(void 0);
    return ne;
  }
  const o = e.subscribe(...n);
  return o.unsubscribe ? () => o.unsubscribe() : o;
}
function Rr(e) {
  let n;
  return jt(e, (o) => n = o)(), n;
}
function K(e, n) {
  e.appendChild(n);
}
function Nr(e, n, o) {
  const c = Cr(e);
  if (!c.getElementById(n)) {
    const f = q("style");
    f.id = n, f.textContent = o, Dr(c, f);
  }
}
function Cr(e) {
  if (!e)
    return document;
  const n = e.getRootNode ? e.getRootNode() : e.ownerDocument;
  return n && /** @type {ShadowRoot} */
  n.host ? (
    /** @type {ShadowRoot} */
    n
  ) : e.ownerDocument;
}
function Dr(e, n) {
  return K(
    /** @type {Document} */
    e.head || e,
    n
  ), n.sheet;
}
function te(e, n, o) {
  e.insertBefore(n, o || null);
}
function J(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function kr(e, n) {
  for (let o = 0; o < e.length; o += 1)
    e[o] && e[o].d(n);
}
function q(e) {
  return document.createElement(e);
}
function we(e) {
  return document.createTextNode(e);
}
function ue() {
  return we(" ");
}
function Pr() {
  return we("");
}
function Qe(e, n, o, c) {
  return e.addEventListener(n, o, c), () => e.removeEventListener(n, o, c);
}
function Ur(e) {
  return function(n) {
    return n.preventDefault(), e.call(this, n);
  };
}
function X(e, n, o) {
  o == null ? e.removeAttribute(n) : e.getAttribute(n) !== o && e.setAttribute(n, o);
}
function Mr(e) {
  return Array.from(e.childNodes);
}
function Me(e, n) {
  n = "" + n, e.data !== n && (e.data = /** @type {string} */
  n);
}
function Lt(e, n) {
  e.value = n ?? "";
}
function De(e, n, o) {
  e.classList.toggle(n, !!o);
}
function Hr(e) {
  const n = {};
  return e.childNodes.forEach(
    /** @param {Element} node */
    (o) => {
      n[o.slot || "default"] = !0;
    }
  ), n;
}
let Be;
function Ae(e) {
  Be = e;
}
function Fr() {
  if (!Be)
    throw new Error("Function called outside component initialization");
  return Be;
}
function jr(e) {
  Fr().$$.on_mount.push(e);
}
const ye = [], xt = [];
let be = [];
const Bt = [], Wr = /* @__PURE__ */ Promise.resolve();
let Ze = !1;
function Yr() {
  Ze || (Ze = !0, Wr.then(Wt));
}
function et(e) {
  be.push(e);
}
const Je = /* @__PURE__ */ new Set();
let pe = 0;
function Wt() {
  if (pe !== 0)
    return;
  const e = Be;
  do {
    try {
      for (; pe < ye.length; ) {
        const n = ye[pe];
        pe++, Ae(n), zr(n.$$);
      }
    } catch (n) {
      throw ye.length = 0, pe = 0, n;
    }
    for (Ae(null), ye.length = 0, pe = 0; xt.length; )
      xt.pop()();
    for (let n = 0; n < be.length; n += 1) {
      const o = be[n];
      Je.has(o) || (Je.add(o), o());
    }
    be.length = 0;
  } while (ye.length);
  for (; Bt.length; )
    Bt.pop()();
  Ze = !1, Je.clear(), Ae(e);
}
function zr(e) {
  if (e.fragment !== null) {
    e.update(), Te(e.before_update);
    const n = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, n), e.after_update.forEach(et);
  }
}
function Vr(e) {
  const n = [], o = [];
  be.forEach((c) => e.indexOf(c) === -1 ? n.push(c) : o.push(c)), o.forEach((c) => c()), be = n;
}
const Kr = /* @__PURE__ */ new Set();
function Xr(e, n) {
  e && e.i && (Kr.delete(e), e.i(n));
}
function Ot(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function qr(e, n, o) {
  const { fragment: c, after_update: f } = e.$$;
  c && c.m(n, o), et(() => {
    const d = e.$$.on_mount.map(Mt).filter(Ht);
    e.$$.on_destroy ? e.$$.on_destroy.push(...d) : Te(d), e.$$.on_mount = [];
  }), f.forEach(et);
}
function Gr(e, n) {
  const o = e.$$;
  o.fragment !== null && (Vr(o.after_update), Te(o.on_destroy), o.fragment && o.fragment.d(n), o.on_destroy = o.fragment = null, o.ctx = []);
}
function Jr(e, n) {
  e.$$.dirty[0] === -1 && (ye.push(e), Yr(), e.$$.dirty.fill(0)), e.$$.dirty[n / 31 | 0] |= 1 << n % 31;
}
function Qr(e, n, o, c, f, d, h = null, p = [-1]) {
  const E = Be;
  Ae(e);
  const w = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: d,
    update: ne,
    not_equal: f,
    bound: At(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(n.context || (E ? E.$$.context : [])),
    // everything else
    callbacks: At(),
    dirty: p,
    skip_bound: !1,
    root: n.target || E.$$.root
  };
  h && h(w.root);
  let O = !1;
  if (w.ctx = o ? o(e, n.props || {}, (g, S, ...I) => {
    const R = I.length ? I[0] : S;
    return w.ctx && f(w.ctx[g], w.ctx[g] = R) && (!w.skip_bound && w.bound[g] && w.bound[g](R), O && Jr(e, g)), S;
  }) : [], w.update(), O = !0, Te(w.before_update), w.fragment = c ? c(w.ctx) : !1, n.target) {
    if (n.hydrate) {
      const g = Mr(n.target);
      w.fragment && w.fragment.l(g), g.forEach(J);
    } else
      w.fragment && w.fragment.c();
    n.intro && Xr(e.$$.fragment), qr(e, n.target, n.anchor), Wt();
  }
  Ae(E);
}
let Yt;
typeof HTMLElement == "function" && (Yt = class extends HTMLElement {
  constructor(n, o, c) {
    super();
    /** The Svelte component constructor */
    ee(this, "$$ctor");
    /** Slots */
    ee(this, "$$s");
    /** The Svelte component instance */
    ee(this, "$$c");
    /** Whether or not the custom element is connected */
    ee(this, "$$cn", !1);
    /** Component props data */
    ee(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    ee(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    ee(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    ee(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    ee(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = n, this.$$s = o, c && this.attachShadow({ mode: "open" });
  }
  addEventListener(n, o, c) {
    if (this.$$l[n] = this.$$l[n] || [], this.$$l[n].push(o), this.$$c) {
      const f = this.$$c.$on(n, o);
      this.$$l_u.set(o, f);
    }
    super.addEventListener(n, o, c);
  }
  removeEventListener(n, o, c) {
    if (super.removeEventListener(n, o, c), this.$$c) {
      const f = this.$$l_u.get(o);
      f && (f(), this.$$l_u.delete(o));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let n = function(d) {
        return () => {
          let h;
          return {
            c: function() {
              h = q("slot"), d !== "default" && X(h, "name", d);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(w, O) {
              te(w, h, O);
            },
            d: function(w) {
              w && J(h);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn)
        return;
      const o = {}, c = Hr(this);
      for (const d of this.$$s)
        d in c && (o[d] = [n(d)]);
      for (const d of this.attributes) {
        const h = this.$$g_p(d.name);
        h in this.$$d || (this.$$d[h] = Ue(h, d.value, this.$$p_d, "toProp"));
      }
      for (const d in this.$$p_d)
        !(d in this.$$d) && this[d] !== void 0 && (this.$$d[d] = this[d], delete this[d]);
      this.$$c = new this.$$ctor({
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: o,
          $$scope: {
            ctx: []
          }
        }
      });
      const f = () => {
        this.$$r = !0;
        for (const d in this.$$p_d)
          if (this.$$d[d] = this.$$c.$$.ctx[this.$$c.$$.props[d]], this.$$p_d[d].reflect) {
            const h = Ue(
              d,
              this.$$d[d],
              this.$$p_d,
              "toAttribute"
            );
            h == null ? this.removeAttribute(this.$$p_d[d].attribute || d) : this.setAttribute(this.$$p_d[d].attribute || d, h);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(f), f();
      for (const d in this.$$l)
        for (const h of this.$$l[d]) {
          const p = this.$$c.$on(d, h);
          this.$$l_u.set(h, p);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(n, o, c) {
    var f;
    this.$$r || (n = this.$$g_p(n), this.$$d[n] = Ue(n, c, this.$$p_d, "toProp"), (f = this.$$c) == null || f.$set({ [n]: this.$$d[n] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      this.$$cn || (this.$$c.$destroy(), this.$$c = void 0);
    });
  }
  $$g_p(n) {
    return Object.keys(this.$$p_d).find(
      (o) => this.$$p_d[o].attribute === n || !this.$$p_d[o].attribute && o.toLowerCase() === n
    ) || n;
  }
});
function Ue(e, n, o, c) {
  var d;
  const f = (d = o[e]) == null ? void 0 : d.type;
  if (n = f === "Boolean" && typeof n != "boolean" ? n != null : n, !c || !o[e])
    return n;
  if (c === "toAttribute")
    switch (f) {
      case "Object":
      case "Array":
        return n == null ? null : JSON.stringify(n);
      case "Boolean":
        return n ? "" : null;
      case "Number":
        return n ?? null;
      default:
        return n;
    }
  else
    switch (f) {
      case "Object":
      case "Array":
        return n && JSON.parse(n);
      case "Boolean":
        return n;
      case "Number":
        return n != null ? +n : n;
      default:
        return n;
    }
}
function Zr(e, n, o, c, f, d) {
  let h = class extends Yt {
    constructor() {
      super(e, o, f), this.$$p_d = n;
    }
    static get observedAttributes() {
      return Object.keys(n).map(
        (p) => (n[p].attribute || p).toLowerCase()
      );
    }
  };
  return Object.keys(n).forEach((p) => {
    Object.defineProperty(h.prototype, p, {
      get() {
        return this.$$c && p in this.$$c ? this.$$c[p] : this.$$d[p];
      },
      set(E) {
        var w;
        E = Ue(p, E, n), this.$$d[p] = E, (w = this.$$c) == null || w.$set({ [p]: E });
      }
    });
  }), c.forEach((p) => {
    Object.defineProperty(h.prototype, p, {
      get() {
        var E;
        return (E = this.$$c) == null ? void 0 : E[p];
      }
    });
  }), d && (h = d(h)), e.element = /** @type {any} */
  h, h;
}
class eo {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ee(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ee(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Gr(this, 1), this.$destroy = ne;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(n, o) {
    if (!Ht(o))
      return ne;
    const c = this.$$.callbacks[n] || (this.$$.callbacks[n] = []);
    return c.push(o), () => {
      const f = c.indexOf(o);
      f !== -1 && c.splice(f, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(n) {
    this.$$set && !Tr(n) && (this.$$.skip_bound = !0, this.$$set(n), this.$$.skip_bound = !1);
  }
}
const to = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(to);
var _e = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function no(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function ke(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var zt = { exports: {} };
/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/
(function(e, n) {
  (function(o) {
    e.exports = o();
  })(function() {
    return function o(c, f, d) {
      function h(w, O) {
        if (!f[w]) {
          if (!c[w]) {
            var g = typeof ke == "function" && ke;
            if (!O && g)
              return g(w, !0);
            if (p)
              return p(w, !0);
            var S = new Error("Cannot find module '" + w + "'");
            throw S.code = "MODULE_NOT_FOUND", S;
          }
          var I = f[w] = { exports: {} };
          c[w][0].call(I.exports, function(R) {
            var N = c[w][1][R];
            return h(N || R);
          }, I, I.exports, o, c, f, d);
        }
        return f[w].exports;
      }
      for (var p = typeof ke == "function" && ke, E = 0; E < d.length; E++)
        h(d[E]);
      return h;
    }({ 1: [function(o, c, f) {
      (function(d) {
        var h = d.MutationObserver || d.WebKitMutationObserver, p;
        if (h) {
          var E = 0, w = new h(R), O = d.document.createTextNode("");
          w.observe(O, {
            characterData: !0
          }), p = function() {
            O.data = E = ++E % 2;
          };
        } else if (!d.setImmediate && typeof d.MessageChannel < "u") {
          var g = new d.MessageChannel();
          g.port1.onmessage = R, p = function() {
            g.port2.postMessage(0);
          };
        } else
          "document" in d && "onreadystatechange" in d.document.createElement("script") ? p = function() {
            var P = d.document.createElement("script");
            P.onreadystatechange = function() {
              R(), P.onreadystatechange = null, P.parentNode.removeChild(P), P = null;
            }, d.document.documentElement.appendChild(P);
          } : p = function() {
            setTimeout(R, 0);
          };
        var S, I = [];
        function R() {
          S = !0;
          for (var P, V, j = I.length; j; ) {
            for (V = I, I = [], P = -1; ++P < j; )
              V[P]();
            j = I.length;
          }
          S = !1;
        }
        c.exports = N;
        function N(P) {
          I.push(P) === 1 && !S && p();
        }
      }).call(this, typeof _e < "u" ? _e : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 2: [function(o, c, f) {
      var d = o(1);
      function h() {
      }
      var p = {}, E = ["REJECTED"], w = ["FULFILLED"], O = ["PENDING"];
      c.exports = g;
      function g(b) {
        if (typeof b != "function")
          throw new TypeError("resolver must be a function");
        this.state = O, this.queue = [], this.outcome = void 0, b !== h && N(this, b);
      }
      g.prototype.catch = function(b) {
        return this.then(null, b);
      }, g.prototype.then = function(b, L) {
        if (typeof b != "function" && this.state === w || typeof L != "function" && this.state === E)
          return this;
        var B = new this.constructor(h);
        if (this.state !== O) {
          var v = this.state === w ? b : L;
          I(B, v, this.outcome);
        } else
          this.queue.push(new S(B, b, L));
        return B;
      };
      function S(b, L, B) {
        this.promise = b, typeof L == "function" && (this.onFulfilled = L, this.callFulfilled = this.otherCallFulfilled), typeof B == "function" && (this.onRejected = B, this.callRejected = this.otherCallRejected);
      }
      S.prototype.callFulfilled = function(b) {
        p.resolve(this.promise, b);
      }, S.prototype.otherCallFulfilled = function(b) {
        I(this.promise, this.onFulfilled, b);
      }, S.prototype.callRejected = function(b) {
        p.reject(this.promise, b);
      }, S.prototype.otherCallRejected = function(b) {
        I(this.promise, this.onRejected, b);
      };
      function I(b, L, B) {
        d(function() {
          var v;
          try {
            v = L(B);
          } catch (x) {
            return p.reject(b, x);
          }
          v === b ? p.reject(b, new TypeError("Cannot resolve promise with itself")) : p.resolve(b, v);
        });
      }
      p.resolve = function(b, L) {
        var B = P(R, L);
        if (B.status === "error")
          return p.reject(b, B.value);
        var v = B.value;
        if (v)
          N(b, v);
        else {
          b.state = w, b.outcome = L;
          for (var x = -1, k = b.queue.length; ++x < k; )
            b.queue[x].callFulfilled(L);
        }
        return b;
      }, p.reject = function(b, L) {
        b.state = E, b.outcome = L;
        for (var B = -1, v = b.queue.length; ++B < v; )
          b.queue[B].callRejected(L);
        return b;
      };
      function R(b) {
        var L = b && b.then;
        if (b && (typeof b == "object" || typeof b == "function") && typeof L == "function")
          return function() {
            L.apply(b, arguments);
          };
      }
      function N(b, L) {
        var B = !1;
        function v(U) {
          B || (B = !0, p.reject(b, U));
        }
        function x(U) {
          B || (B = !0, p.resolve(b, U));
        }
        function k() {
          L(x, v);
        }
        var D = P(k);
        D.status === "error" && v(D.value);
      }
      function P(b, L) {
        var B = {};
        try {
          B.value = b(L), B.status = "success";
        } catch (v) {
          B.status = "error", B.value = v;
        }
        return B;
      }
      g.resolve = V;
      function V(b) {
        return b instanceof this ? b : p.resolve(new this(h), b);
      }
      g.reject = j;
      function j(b) {
        var L = new this(h);
        return p.reject(L, b);
      }
      g.all = re;
      function re(b) {
        var L = this;
        if (Object.prototype.toString.call(b) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var B = b.length, v = !1;
        if (!B)
          return this.resolve([]);
        for (var x = new Array(B), k = 0, D = -1, U = new this(h); ++D < B; )
          W(b[D], D);
        return U;
        function W(ie, le) {
          L.resolve(ie).then($e, function(he) {
            v || (v = !0, p.reject(U, he));
          });
          function $e(he) {
            x[le] = he, ++k === B && !v && (v = !0, p.resolve(U, x));
          }
        }
      }
      g.race = Q;
      function Q(b) {
        var L = this;
        if (Object.prototype.toString.call(b) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var B = b.length, v = !1;
        if (!B)
          return this.resolve([]);
        for (var x = -1, k = new this(h); ++x < B; )
          D(b[x]);
        return k;
        function D(U) {
          L.resolve(U).then(function(W) {
            v || (v = !0, p.resolve(k, W));
          }, function(W) {
            v || (v = !0, p.reject(k, W));
          });
        }
      }
    }, { 1: 1 }], 3: [function(o, c, f) {
      (function(d) {
        typeof d.Promise != "function" && (d.Promise = o(2));
      }).call(this, typeof _e < "u" ? _e : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, { 2: 2 }], 4: [function(o, c, f) {
      var d = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t;
      } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      };
      function h(t, i) {
        if (!(t instanceof i))
          throw new TypeError("Cannot call a class as a function");
      }
      function p() {
        try {
          if (typeof indexedDB < "u")
            return indexedDB;
          if (typeof webkitIndexedDB < "u")
            return webkitIndexedDB;
          if (typeof mozIndexedDB < "u")
            return mozIndexedDB;
          if (typeof OIndexedDB < "u")
            return OIndexedDB;
          if (typeof msIndexedDB < "u")
            return msIndexedDB;
        } catch {
          return;
        }
      }
      var E = p();
      function w() {
        try {
          if (!E || !E.open)
            return !1;
          var t = typeof openDatabase < "u" && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform), i = typeof fetch == "function" && fetch.toString().indexOf("[native code") !== -1;
          return (!t || i) && typeof indexedDB < "u" && // some outdated implementations of IDB that appear on Samsung
          // and HTC Android devices <4.4 are missing IDBKeyRange
          // See: https://github.com/mozilla/localForage/issues/128
          // See: https://github.com/mozilla/localForage/issues/272
          typeof IDBKeyRange < "u";
        } catch {
          return !1;
        }
      }
      function O(t, i) {
        t = t || [], i = i || {};
        try {
          return new Blob(t, i);
        } catch (s) {
          if (s.name !== "TypeError")
            throw s;
          for (var r = typeof BlobBuilder < "u" ? BlobBuilder : typeof MSBlobBuilder < "u" ? MSBlobBuilder : typeof MozBlobBuilder < "u" ? MozBlobBuilder : WebKitBlobBuilder, a = new r(), u = 0; u < t.length; u += 1)
            a.append(t[u]);
          return a.getBlob(i.type);
        }
      }
      typeof Promise > "u" && o(3);
      var g = Promise;
      function S(t, i) {
        i && t.then(function(r) {
          i(null, r);
        }, function(r) {
          i(r);
        });
      }
      function I(t, i, r) {
        typeof i == "function" && t.then(i), typeof r == "function" && t.catch(r);
      }
      function R(t) {
        return typeof t != "string" && (console.warn(t + " used as a key, but it is not a string."), t = String(t)), t;
      }
      function N() {
        if (arguments.length && typeof arguments[arguments.length - 1] == "function")
          return arguments[arguments.length - 1];
      }
      var P = "local-forage-detect-blob-support", V = void 0, j = {}, re = Object.prototype.toString, Q = "readonly", b = "readwrite";
      function L(t) {
        for (var i = t.length, r = new ArrayBuffer(i), a = new Uint8Array(r), u = 0; u < i; u++)
          a[u] = t.charCodeAt(u);
        return r;
      }
      function B(t) {
        return new g(function(i) {
          var r = t.transaction(P, b), a = O([""]);
          r.objectStore(P).put(a, "key"), r.onabort = function(u) {
            u.preventDefault(), u.stopPropagation(), i(!1);
          }, r.oncomplete = function() {
            var u = navigator.userAgent.match(/Chrome\/(\d+)/), s = navigator.userAgent.match(/Edge\//);
            i(s || !u || parseInt(u[1], 10) >= 43);
          };
        }).catch(function() {
          return !1;
        });
      }
      function v(t) {
        return typeof V == "boolean" ? g.resolve(V) : B(t).then(function(i) {
          return V = i, V;
        });
      }
      function x(t) {
        var i = j[t.name], r = {};
        r.promise = new g(function(a, u) {
          r.resolve = a, r.reject = u;
        }), i.deferredOperations.push(r), i.dbReady ? i.dbReady = i.dbReady.then(function() {
          return r.promise;
        }) : i.dbReady = r.promise;
      }
      function k(t) {
        var i = j[t.name], r = i.deferredOperations.pop();
        if (r)
          return r.resolve(), r.promise;
      }
      function D(t, i) {
        var r = j[t.name], a = r.deferredOperations.pop();
        if (a)
          return a.reject(i), a.promise;
      }
      function U(t, i) {
        return new g(function(r, a) {
          if (j[t.name] = j[t.name] || st(), t.db)
            if (i)
              x(t), t.db.close();
            else
              return r(t.db);
          var u = [t.name];
          i && u.push(t.version);
          var s = E.open.apply(E, u);
          i && (s.onupgradeneeded = function(l) {
            var m = s.result;
            try {
              m.createObjectStore(t.storeName), l.oldVersion <= 1 && m.createObjectStore(P);
            } catch (y) {
              if (y.name === "ConstraintError")
                console.warn('The database "' + t.name + '" has been upgraded from version ' + l.oldVersion + " to version " + l.newVersion + ', but the storage "' + t.storeName + '" already exists.');
              else
                throw y;
            }
          }), s.onerror = function(l) {
            l.preventDefault(), a(s.error);
          }, s.onsuccess = function() {
            var l = s.result;
            l.onversionchange = function(m) {
              m.target.close();
            }, r(l), k(t);
          };
        });
      }
      function W(t) {
        return U(t, !1);
      }
      function ie(t) {
        return U(t, !0);
      }
      function le(t, i) {
        if (!t.db)
          return !0;
        var r = !t.db.objectStoreNames.contains(t.storeName), a = t.version < t.db.version, u = t.version > t.db.version;
        if (a && (t.version !== i && console.warn('The database "' + t.name + `" can't be downgraded from version ` + t.db.version + " to version " + t.version + "."), t.version = t.db.version), u || r) {
          if (r) {
            var s = t.db.version + 1;
            s > t.version && (t.version = s);
          }
          return !0;
        }
        return !1;
      }
      function $e(t) {
        return new g(function(i, r) {
          var a = new FileReader();
          a.onerror = r, a.onloadend = function(u) {
            var s = btoa(u.target.result || "");
            i({
              __local_forage_encoded_blob: !0,
              data: s,
              type: t.type
            });
          }, a.readAsBinaryString(t);
        });
      }
      function he(t) {
        var i = L(atob(t.data));
        return O([i], { type: t.type });
      }
      function it(t) {
        return t && t.__local_forage_encoded_blob;
      }
      function On(t) {
        var i = this, r = i._initReady().then(function() {
          var a = j[i._dbInfo.name];
          if (a && a.dbReady)
            return a.dbReady;
        });
        return I(r, t, t), r;
      }
      function Tn(t) {
        x(t);
        for (var i = j[t.name], r = i.forages, a = 0; a < r.length; a++) {
          var u = r[a];
          u._dbInfo.db && (u._dbInfo.db.close(), u._dbInfo.db = null);
        }
        return t.db = null, W(t).then(function(s) {
          return t.db = s, le(t) ? ie(t) : s;
        }).then(function(s) {
          t.db = i.db = s;
          for (var l = 0; l < r.length; l++)
            r[l]._dbInfo.db = s;
        }).catch(function(s) {
          throw D(t, s), s;
        });
      }
      function oe(t, i, r, a) {
        a === void 0 && (a = 1);
        try {
          var u = t.db.transaction(t.storeName, i);
          r(null, u);
        } catch (s) {
          if (a > 0 && (!t.db || s.name === "InvalidStateError" || s.name === "NotFoundError"))
            return g.resolve().then(function() {
              if (!t.db || s.name === "NotFoundError" && !t.db.objectStoreNames.contains(t.storeName) && t.version <= t.db.version)
                return t.db && (t.version = t.db.version + 1), ie(t);
            }).then(function() {
              return Tn(t).then(function() {
                oe(t, i, r, a - 1);
              });
            }).catch(r);
          r(s);
        }
      }
      function st() {
        return {
          // Running localForages sharing a database.
          forages: [],
          // Shared database.
          db: null,
          // Database readiness (promise).
          dbReady: null,
          // Deferred operations on the database.
          deferredOperations: []
        };
      }
      function Rn(t) {
        var i = this, r = {
          db: null
        };
        if (t)
          for (var a in t)
            r[a] = t[a];
        var u = j[r.name];
        u || (u = st(), j[r.name] = u), u.forages.push(i), i._initReady || (i._initReady = i.ready, i.ready = On);
        var s = [];
        function l() {
          return g.resolve();
        }
        for (var m = 0; m < u.forages.length; m++) {
          var y = u.forages[m];
          y !== i && s.push(y._initReady().catch(l));
        }
        var _ = u.forages.slice(0);
        return g.all(s).then(function() {
          return r.db = u.db, W(r);
        }).then(function($) {
          return r.db = $, le(r, i._defaultConfig.version) ? ie(r) : $;
        }).then(function($) {
          r.db = u.db = $, i._dbInfo = r;
          for (var A = 0; A < _.length; A++) {
            var C = _[A];
            C !== i && (C._dbInfo.db = r.db, C._dbInfo.version = r.version);
          }
        });
      }
      function Nn(t, i) {
        var r = this;
        t = R(t);
        var a = new g(function(u, s) {
          r.ready().then(function() {
            oe(r._dbInfo, Q, function(l, m) {
              if (l)
                return s(l);
              try {
                var y = m.objectStore(r._dbInfo.storeName), _ = y.get(t);
                _.onsuccess = function() {
                  var $ = _.result;
                  $ === void 0 && ($ = null), it($) && ($ = he($)), u($);
                }, _.onerror = function() {
                  s(_.error);
                };
              } catch ($) {
                s($);
              }
            });
          }).catch(s);
        });
        return S(a, i), a;
      }
      function Cn(t, i) {
        var r = this, a = new g(function(u, s) {
          r.ready().then(function() {
            oe(r._dbInfo, Q, function(l, m) {
              if (l)
                return s(l);
              try {
                var y = m.objectStore(r._dbInfo.storeName), _ = y.openCursor(), $ = 1;
                _.onsuccess = function() {
                  var A = _.result;
                  if (A) {
                    var C = A.value;
                    it(C) && (C = he(C));
                    var M = t(C, A.key, $++);
                    M !== void 0 ? u(M) : A.continue();
                  } else
                    u();
                }, _.onerror = function() {
                  s(_.error);
                };
              } catch (A) {
                s(A);
              }
            });
          }).catch(s);
        });
        return S(a, i), a;
      }
      function Dn(t, i, r) {
        var a = this;
        t = R(t);
        var u = new g(function(s, l) {
          var m;
          a.ready().then(function() {
            return m = a._dbInfo, re.call(i) === "[object Blob]" ? v(m.db).then(function(y) {
              return y ? i : $e(i);
            }) : i;
          }).then(function(y) {
            oe(a._dbInfo, b, function(_, $) {
              if (_)
                return l(_);
              try {
                var A = $.objectStore(a._dbInfo.storeName);
                y === null && (y = void 0);
                var C = A.put(y, t);
                $.oncomplete = function() {
                  y === void 0 && (y = null), s(y);
                }, $.onabort = $.onerror = function() {
                  var M = C.error ? C.error : C.transaction.error;
                  l(M);
                };
              } catch (M) {
                l(M);
              }
            });
          }).catch(l);
        });
        return S(u, r), u;
      }
      function kn(t, i) {
        var r = this;
        t = R(t);
        var a = new g(function(u, s) {
          r.ready().then(function() {
            oe(r._dbInfo, b, function(l, m) {
              if (l)
                return s(l);
              try {
                var y = m.objectStore(r._dbInfo.storeName), _ = y.delete(t);
                m.oncomplete = function() {
                  u();
                }, m.onerror = function() {
                  s(_.error);
                }, m.onabort = function() {
                  var $ = _.error ? _.error : _.transaction.error;
                  s($);
                };
              } catch ($) {
                s($);
              }
            });
          }).catch(s);
        });
        return S(a, i), a;
      }
      function Pn(t) {
        var i = this, r = new g(function(a, u) {
          i.ready().then(function() {
            oe(i._dbInfo, b, function(s, l) {
              if (s)
                return u(s);
              try {
                var m = l.objectStore(i._dbInfo.storeName), y = m.clear();
                l.oncomplete = function() {
                  a();
                }, l.onabort = l.onerror = function() {
                  var _ = y.error ? y.error : y.transaction.error;
                  u(_);
                };
              } catch (_) {
                u(_);
              }
            });
          }).catch(u);
        });
        return S(r, t), r;
      }
      function Un(t) {
        var i = this, r = new g(function(a, u) {
          i.ready().then(function() {
            oe(i._dbInfo, Q, function(s, l) {
              if (s)
                return u(s);
              try {
                var m = l.objectStore(i._dbInfo.storeName), y = m.count();
                y.onsuccess = function() {
                  a(y.result);
                }, y.onerror = function() {
                  u(y.error);
                };
              } catch (_) {
                u(_);
              }
            });
          }).catch(u);
        });
        return S(r, t), r;
      }
      function Mn(t, i) {
        var r = this, a = new g(function(u, s) {
          if (t < 0) {
            u(null);
            return;
          }
          r.ready().then(function() {
            oe(r._dbInfo, Q, function(l, m) {
              if (l)
                return s(l);
              try {
                var y = m.objectStore(r._dbInfo.storeName), _ = !1, $ = y.openKeyCursor();
                $.onsuccess = function() {
                  var A = $.result;
                  if (!A) {
                    u(null);
                    return;
                  }
                  t === 0 || _ ? u(A.key) : (_ = !0, A.advance(t));
                }, $.onerror = function() {
                  s($.error);
                };
              } catch (A) {
                s(A);
              }
            });
          }).catch(s);
        });
        return S(a, i), a;
      }
      function Hn(t) {
        var i = this, r = new g(function(a, u) {
          i.ready().then(function() {
            oe(i._dbInfo, Q, function(s, l) {
              if (s)
                return u(s);
              try {
                var m = l.objectStore(i._dbInfo.storeName), y = m.openKeyCursor(), _ = [];
                y.onsuccess = function() {
                  var $ = y.result;
                  if (!$) {
                    a(_);
                    return;
                  }
                  _.push($.key), $.continue();
                }, y.onerror = function() {
                  u(y.error);
                };
              } catch ($) {
                u($);
              }
            });
          }).catch(u);
        });
        return S(r, t), r;
      }
      function Fn(t, i) {
        i = N.apply(this, arguments);
        var r = this.config();
        t = typeof t != "function" && t || {}, t.name || (t.name = t.name || r.name, t.storeName = t.storeName || r.storeName);
        var a = this, u;
        if (!t.name)
          u = g.reject("Invalid arguments");
        else {
          var s = t.name === r.name && a._dbInfo.db, l = s ? g.resolve(a._dbInfo.db) : W(t).then(function(m) {
            var y = j[t.name], _ = y.forages;
            y.db = m;
            for (var $ = 0; $ < _.length; $++)
              _[$]._dbInfo.db = m;
            return m;
          });
          t.storeName ? u = l.then(function(m) {
            if (m.objectStoreNames.contains(t.storeName)) {
              var y = m.version + 1;
              x(t);
              var _ = j[t.name], $ = _.forages;
              m.close();
              for (var A = 0; A < $.length; A++) {
                var C = $[A];
                C._dbInfo.db = null, C._dbInfo.version = y;
              }
              var M = new g(function(H, z) {
                var Y = E.open(t.name, y);
                Y.onerror = function(Z) {
                  var Ee = Y.result;
                  Ee.close(), z(Z);
                }, Y.onupgradeneeded = function() {
                  var Z = Y.result;
                  Z.deleteObjectStore(t.storeName);
                }, Y.onsuccess = function() {
                  var Z = Y.result;
                  Z.close(), H(Z);
                };
              });
              return M.then(function(H) {
                _.db = H;
                for (var z = 0; z < $.length; z++) {
                  var Y = $[z];
                  Y._dbInfo.db = H, k(Y._dbInfo);
                }
              }).catch(function(H) {
                throw (D(t, H) || g.resolve()).catch(function() {
                }), H;
              });
            }
          }) : u = l.then(function(m) {
            x(t);
            var y = j[t.name], _ = y.forages;
            m.close();
            for (var $ = 0; $ < _.length; $++) {
              var A = _[$];
              A._dbInfo.db = null;
            }
            var C = new g(function(M, H) {
              var z = E.deleteDatabase(t.name);
              z.onerror = function() {
                var Y = z.result;
                Y && Y.close(), H(z.error);
              }, z.onblocked = function() {
                console.warn('dropInstance blocked for database "' + t.name + '" until all open connections are closed');
              }, z.onsuccess = function() {
                var Y = z.result;
                Y && Y.close(), M(Y);
              };
            });
            return C.then(function(M) {
              y.db = M;
              for (var H = 0; H < _.length; H++) {
                var z = _[H];
                k(z._dbInfo);
              }
            }).catch(function(M) {
              throw (D(t, M) || g.resolve()).catch(function() {
              }), M;
            });
          });
        }
        return S(u, i), u;
      }
      var jn = {
        _driver: "asyncStorage",
        _initStorage: Rn,
        _support: w(),
        iterate: Cn,
        getItem: Nn,
        setItem: Dn,
        removeItem: kn,
        clear: Pn,
        length: Un,
        key: Mn,
        keys: Hn,
        dropInstance: Fn
      };
      function Wn() {
        return typeof openDatabase == "function";
      }
      var se = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Yn = "~~local_forage_type~", at = /^~~local_forage_type~([^~]+)~/, Ne = "__lfsc__:", je = Ne.length, We = "arbf", Ye = "blob", ut = "si08", ct = "ui08", ft = "uic8", lt = "si16", dt = "si32", ht = "ur16", vt = "ui32", pt = "fl32", mt = "fl64", gt = je + We.length, yt = Object.prototype.toString;
      function _t(t) {
        var i = t.length * 0.75, r = t.length, a, u = 0, s, l, m, y;
        t[t.length - 1] === "=" && (i--, t[t.length - 2] === "=" && i--);
        var _ = new ArrayBuffer(i), $ = new Uint8Array(_);
        for (a = 0; a < r; a += 4)
          s = se.indexOf(t[a]), l = se.indexOf(t[a + 1]), m = se.indexOf(t[a + 2]), y = se.indexOf(t[a + 3]), $[u++] = s << 2 | l >> 4, $[u++] = (l & 15) << 4 | m >> 2, $[u++] = (m & 3) << 6 | y & 63;
        return _;
      }
      function ze(t) {
        var i = new Uint8Array(t), r = "", a;
        for (a = 0; a < i.length; a += 3)
          r += se[i[a] >> 2], r += se[(i[a] & 3) << 4 | i[a + 1] >> 4], r += se[(i[a + 1] & 15) << 2 | i[a + 2] >> 6], r += se[i[a + 2] & 63];
        return i.length % 3 === 2 ? r = r.substring(0, r.length - 1) + "=" : i.length % 3 === 1 && (r = r.substring(0, r.length - 2) + "=="), r;
      }
      function zn(t, i) {
        var r = "";
        if (t && (r = yt.call(t)), t && (r === "[object ArrayBuffer]" || t.buffer && yt.call(t.buffer) === "[object ArrayBuffer]")) {
          var a, u = Ne;
          t instanceof ArrayBuffer ? (a = t, u += We) : (a = t.buffer, r === "[object Int8Array]" ? u += ut : r === "[object Uint8Array]" ? u += ct : r === "[object Uint8ClampedArray]" ? u += ft : r === "[object Int16Array]" ? u += lt : r === "[object Uint16Array]" ? u += ht : r === "[object Int32Array]" ? u += dt : r === "[object Uint32Array]" ? u += vt : r === "[object Float32Array]" ? u += pt : r === "[object Float64Array]" ? u += mt : i(new Error("Failed to get type for BinaryArray"))), i(u + ze(a));
        } else if (r === "[object Blob]") {
          var s = new FileReader();
          s.onload = function() {
            var l = Yn + t.type + "~" + ze(this.result);
            i(Ne + Ye + l);
          }, s.readAsArrayBuffer(t);
        } else
          try {
            i(JSON.stringify(t));
          } catch (l) {
            console.error("Couldn't convert value into a JSON string: ", t), i(null, l);
          }
      }
      function Vn(t) {
        if (t.substring(0, je) !== Ne)
          return JSON.parse(t);
        var i = t.substring(gt), r = t.substring(je, gt), a;
        if (r === Ye && at.test(i)) {
          var u = i.match(at);
          a = u[1], i = i.substring(u[0].length);
        }
        var s = _t(i);
        switch (r) {
          case We:
            return s;
          case Ye:
            return O([s], { type: a });
          case ut:
            return new Int8Array(s);
          case ct:
            return new Uint8Array(s);
          case ft:
            return new Uint8ClampedArray(s);
          case lt:
            return new Int16Array(s);
          case ht:
            return new Uint16Array(s);
          case dt:
            return new Int32Array(s);
          case vt:
            return new Uint32Array(s);
          case pt:
            return new Float32Array(s);
          case mt:
            return new Float64Array(s);
          default:
            throw new Error("Unkown type: " + r);
        }
      }
      var Ve = {
        serialize: zn,
        deserialize: Vn,
        stringToBuffer: _t,
        bufferToString: ze
      };
      function bt(t, i, r, a) {
        t.executeSql("CREATE TABLE IF NOT EXISTS " + i.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], r, a);
      }
      function Kn(t) {
        var i = this, r = {
          db: null
        };
        if (t)
          for (var a in t)
            r[a] = typeof t[a] != "string" ? t[a].toString() : t[a];
        var u = new g(function(s, l) {
          try {
            r.db = openDatabase(r.name, String(r.version), r.description, r.size);
          } catch (m) {
            return l(m);
          }
          r.db.transaction(function(m) {
            bt(m, r, function() {
              i._dbInfo = r, s();
            }, function(y, _) {
              l(_);
            });
          }, l);
        });
        return r.serializer = Ve, u;
      }
      function ae(t, i, r, a, u, s) {
        t.executeSql(r, a, u, function(l, m) {
          m.code === m.SYNTAX_ERR ? l.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [i.storeName], function(y, _) {
            _.rows.length ? s(y, m) : bt(y, i, function() {
              y.executeSql(r, a, u, s);
            }, s);
          }, s) : s(l, m);
        }, s);
      }
      function Xn(t, i) {
        var r = this;
        t = R(t);
        var a = new g(function(u, s) {
          r.ready().then(function() {
            var l = r._dbInfo;
            l.db.transaction(function(m) {
              ae(m, l, "SELECT * FROM " + l.storeName + " WHERE key = ? LIMIT 1", [t], function(y, _) {
                var $ = _.rows.length ? _.rows.item(0).value : null;
                $ && ($ = l.serializer.deserialize($)), u($);
              }, function(y, _) {
                s(_);
              });
            });
          }).catch(s);
        });
        return S(a, i), a;
      }
      function qn(t, i) {
        var r = this, a = new g(function(u, s) {
          r.ready().then(function() {
            var l = r._dbInfo;
            l.db.transaction(function(m) {
              ae(m, l, "SELECT * FROM " + l.storeName, [], function(y, _) {
                for (var $ = _.rows, A = $.length, C = 0; C < A; C++) {
                  var M = $.item(C), H = M.value;
                  if (H && (H = l.serializer.deserialize(H)), H = t(H, M.key, C + 1), H !== void 0) {
                    u(H);
                    return;
                  }
                }
                u();
              }, function(y, _) {
                s(_);
              });
            });
          }).catch(s);
        });
        return S(a, i), a;
      }
      function wt(t, i, r, a) {
        var u = this;
        t = R(t);
        var s = new g(function(l, m) {
          u.ready().then(function() {
            i === void 0 && (i = null);
            var y = i, _ = u._dbInfo;
            _.serializer.serialize(i, function($, A) {
              A ? m(A) : _.db.transaction(function(C) {
                ae(C, _, "INSERT OR REPLACE INTO " + _.storeName + " (key, value) VALUES (?, ?)", [t, $], function() {
                  l(y);
                }, function(M, H) {
                  m(H);
                });
              }, function(C) {
                if (C.code === C.QUOTA_ERR) {
                  if (a > 0) {
                    l(wt.apply(u, [t, y, r, a - 1]));
                    return;
                  }
                  m(C);
                }
              });
            });
          }).catch(m);
        });
        return S(s, r), s;
      }
      function Gn(t, i, r) {
        return wt.apply(this, [t, i, r, 1]);
      }
      function Jn(t, i) {
        var r = this;
        t = R(t);
        var a = new g(function(u, s) {
          r.ready().then(function() {
            var l = r._dbInfo;
            l.db.transaction(function(m) {
              ae(m, l, "DELETE FROM " + l.storeName + " WHERE key = ?", [t], function() {
                u();
              }, function(y, _) {
                s(_);
              });
            });
          }).catch(s);
        });
        return S(a, i), a;
      }
      function Qn(t) {
        var i = this, r = new g(function(a, u) {
          i.ready().then(function() {
            var s = i._dbInfo;
            s.db.transaction(function(l) {
              ae(l, s, "DELETE FROM " + s.storeName, [], function() {
                a();
              }, function(m, y) {
                u(y);
              });
            });
          }).catch(u);
        });
        return S(r, t), r;
      }
      function Zn(t) {
        var i = this, r = new g(function(a, u) {
          i.ready().then(function() {
            var s = i._dbInfo;
            s.db.transaction(function(l) {
              ae(l, s, "SELECT COUNT(key) as c FROM " + s.storeName, [], function(m, y) {
                var _ = y.rows.item(0).c;
                a(_);
              }, function(m, y) {
                u(y);
              });
            });
          }).catch(u);
        });
        return S(r, t), r;
      }
      function er(t, i) {
        var r = this, a = new g(function(u, s) {
          r.ready().then(function() {
            var l = r._dbInfo;
            l.db.transaction(function(m) {
              ae(m, l, "SELECT key FROM " + l.storeName + " WHERE id = ? LIMIT 1", [t + 1], function(y, _) {
                var $ = _.rows.length ? _.rows.item(0).key : null;
                u($);
              }, function(y, _) {
                s(_);
              });
            });
          }).catch(s);
        });
        return S(a, i), a;
      }
      function tr(t) {
        var i = this, r = new g(function(a, u) {
          i.ready().then(function() {
            var s = i._dbInfo;
            s.db.transaction(function(l) {
              ae(l, s, "SELECT key FROM " + s.storeName, [], function(m, y) {
                for (var _ = [], $ = 0; $ < y.rows.length; $++)
                  _.push(y.rows.item($).key);
                a(_);
              }, function(m, y) {
                u(y);
              });
            });
          }).catch(u);
        });
        return S(r, t), r;
      }
      function nr(t) {
        return new g(function(i, r) {
          t.transaction(function(a) {
            a.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(u, s) {
              for (var l = [], m = 0; m < s.rows.length; m++)
                l.push(s.rows.item(m).name);
              i({
                db: t,
                storeNames: l
              });
            }, function(u, s) {
              r(s);
            });
          }, function(a) {
            r(a);
          });
        });
      }
      function rr(t, i) {
        i = N.apply(this, arguments);
        var r = this.config();
        t = typeof t != "function" && t || {}, t.name || (t.name = t.name || r.name, t.storeName = t.storeName || r.storeName);
        var a = this, u;
        return t.name ? u = new g(function(s) {
          var l;
          t.name === r.name ? l = a._dbInfo.db : l = openDatabase(t.name, "", "", 0), t.storeName ? s({
            db: l,
            storeNames: [t.storeName]
          }) : s(nr(l));
        }).then(function(s) {
          return new g(function(l, m) {
            s.db.transaction(function(y) {
              function _(M) {
                return new g(function(H, z) {
                  y.executeSql("DROP TABLE IF EXISTS " + M, [], function() {
                    H();
                  }, function(Y, Z) {
                    z(Z);
                  });
                });
              }
              for (var $ = [], A = 0, C = s.storeNames.length; A < C; A++)
                $.push(_(s.storeNames[A]));
              g.all($).then(function() {
                l();
              }).catch(function(M) {
                m(M);
              });
            }, function(y) {
              m(y);
            });
          });
        }) : u = g.reject("Invalid arguments"), S(u, i), u;
      }
      var or = {
        _driver: "webSQLStorage",
        _initStorage: Kn,
        _support: Wn(),
        iterate: qn,
        getItem: Xn,
        setItem: Gn,
        removeItem: Jn,
        clear: Qn,
        length: Zn,
        key: er,
        keys: tr,
        dropInstance: rr
      };
      function ir() {
        try {
          return typeof localStorage < "u" && "setItem" in localStorage && // in IE8 typeof localStorage.setItem === 'object'
          !!localStorage.setItem;
        } catch {
          return !1;
        }
      }
      function $t(t, i) {
        var r = t.name + "/";
        return t.storeName !== i.storeName && (r += t.storeName + "/"), r;
      }
      function sr() {
        var t = "_localforage_support_test";
        try {
          return localStorage.setItem(t, !0), localStorage.removeItem(t), !1;
        } catch {
          return !0;
        }
      }
      function ar() {
        return !sr() || localStorage.length > 0;
      }
      function ur(t) {
        var i = this, r = {};
        if (t)
          for (var a in t)
            r[a] = t[a];
        return r.keyPrefix = $t(t, i._defaultConfig), ar() ? (i._dbInfo = r, r.serializer = Ve, g.resolve()) : g.reject();
      }
      function cr(t) {
        var i = this, r = i.ready().then(function() {
          for (var a = i._dbInfo.keyPrefix, u = localStorage.length - 1; u >= 0; u--) {
            var s = localStorage.key(u);
            s.indexOf(a) === 0 && localStorage.removeItem(s);
          }
        });
        return S(r, t), r;
      }
      function fr(t, i) {
        var r = this;
        t = R(t);
        var a = r.ready().then(function() {
          var u = r._dbInfo, s = localStorage.getItem(u.keyPrefix + t);
          return s && (s = u.serializer.deserialize(s)), s;
        });
        return S(a, i), a;
      }
      function lr(t, i) {
        var r = this, a = r.ready().then(function() {
          for (var u = r._dbInfo, s = u.keyPrefix, l = s.length, m = localStorage.length, y = 1, _ = 0; _ < m; _++) {
            var $ = localStorage.key(_);
            if ($.indexOf(s) === 0) {
              var A = localStorage.getItem($);
              if (A && (A = u.serializer.deserialize(A)), A = t(A, $.substring(l), y++), A !== void 0)
                return A;
            }
          }
        });
        return S(a, i), a;
      }
      function dr(t, i) {
        var r = this, a = r.ready().then(function() {
          var u = r._dbInfo, s;
          try {
            s = localStorage.key(t);
          } catch {
            s = null;
          }
          return s && (s = s.substring(u.keyPrefix.length)), s;
        });
        return S(a, i), a;
      }
      function hr(t) {
        var i = this, r = i.ready().then(function() {
          for (var a = i._dbInfo, u = localStorage.length, s = [], l = 0; l < u; l++) {
            var m = localStorage.key(l);
            m.indexOf(a.keyPrefix) === 0 && s.push(m.substring(a.keyPrefix.length));
          }
          return s;
        });
        return S(r, t), r;
      }
      function vr(t) {
        var i = this, r = i.keys().then(function(a) {
          return a.length;
        });
        return S(r, t), r;
      }
      function pr(t, i) {
        var r = this;
        t = R(t);
        var a = r.ready().then(function() {
          var u = r._dbInfo;
          localStorage.removeItem(u.keyPrefix + t);
        });
        return S(a, i), a;
      }
      function mr(t, i, r) {
        var a = this;
        t = R(t);
        var u = a.ready().then(function() {
          i === void 0 && (i = null);
          var s = i;
          return new g(function(l, m) {
            var y = a._dbInfo;
            y.serializer.serialize(i, function(_, $) {
              if ($)
                m($);
              else
                try {
                  localStorage.setItem(y.keyPrefix + t, _), l(s);
                } catch (A) {
                  (A.name === "QuotaExceededError" || A.name === "NS_ERROR_DOM_QUOTA_REACHED") && m(A), m(A);
                }
            });
          });
        });
        return S(u, r), u;
      }
      function gr(t, i) {
        if (i = N.apply(this, arguments), t = typeof t != "function" && t || {}, !t.name) {
          var r = this.config();
          t.name = t.name || r.name, t.storeName = t.storeName || r.storeName;
        }
        var a = this, u;
        return t.name ? u = new g(function(s) {
          t.storeName ? s($t(t, a._defaultConfig)) : s(t.name + "/");
        }).then(function(s) {
          for (var l = localStorage.length - 1; l >= 0; l--) {
            var m = localStorage.key(l);
            m.indexOf(s) === 0 && localStorage.removeItem(m);
          }
        }) : u = g.reject("Invalid arguments"), S(u, i), u;
      }
      var yr = {
        _driver: "localStorageWrapper",
        _initStorage: ur,
        _support: ir(),
        iterate: lr,
        getItem: fr,
        setItem: mr,
        removeItem: pr,
        clear: cr,
        length: vr,
        key: dr,
        keys: hr,
        dropInstance: gr
      }, _r = function(i, r) {
        return i === r || typeof i == "number" && typeof r == "number" && isNaN(i) && isNaN(r);
      }, br = function(i, r) {
        for (var a = i.length, u = 0; u < a; ) {
          if (_r(i[u], r))
            return !0;
          u++;
        }
        return !1;
      }, St = Array.isArray || function(t) {
        return Object.prototype.toString.call(t) === "[object Array]";
      }, Se = {}, Et = {}, ve = {
        INDEXEDDB: jn,
        WEBSQL: or,
        LOCALSTORAGE: yr
      }, wr = [ve.INDEXEDDB._driver, ve.WEBSQL._driver, ve.LOCALSTORAGE._driver], Ce = ["dropInstance"], Ke = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(Ce), $r = {
        description: "",
        driver: wr.slice(),
        name: "localforage",
        // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
        // we can use without a prompt.
        size: 4980736,
        storeName: "keyvaluepairs",
        version: 1
      };
      function Sr(t, i) {
        t[i] = function() {
          var r = arguments;
          return t.ready().then(function() {
            return t[i].apply(t, r);
          });
        };
      }
      function Xe() {
        for (var t = 1; t < arguments.length; t++) {
          var i = arguments[t];
          if (i)
            for (var r in i)
              i.hasOwnProperty(r) && (St(i[r]) ? arguments[0][r] = i[r].slice() : arguments[0][r] = i[r]);
        }
        return arguments[0];
      }
      var Er = function() {
        function t(i) {
          h(this, t);
          for (var r in ve)
            if (ve.hasOwnProperty(r)) {
              var a = ve[r], u = a._driver;
              this[r] = u, Se[u] || this.defineDriver(a);
            }
          this._defaultConfig = Xe({}, $r), this._config = Xe({}, this._defaultConfig, i), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch(function() {
          });
        }
        return t.prototype.config = function(r) {
          if ((typeof r > "u" ? "undefined" : d(r)) === "object") {
            if (this._ready)
              return new Error("Can't call config() after localforage has been used.");
            for (var a in r) {
              if (a === "storeName" && (r[a] = r[a].replace(/\W/g, "_")), a === "version" && typeof r[a] != "number")
                return new Error("Database version must be a number.");
              this._config[a] = r[a];
            }
            return "driver" in r && r.driver ? this.setDriver(this._config.driver) : !0;
          } else
            return typeof r == "string" ? this._config[r] : this._config;
        }, t.prototype.defineDriver = function(r, a, u) {
          var s = new g(function(l, m) {
            try {
              var y = r._driver, _ = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
              if (!r._driver) {
                m(_);
                return;
              }
              for (var $ = Ke.concat("_initStorage"), A = 0, C = $.length; A < C; A++) {
                var M = $[A], H = !br(Ce, M);
                if ((H || r[M]) && typeof r[M] != "function") {
                  m(_);
                  return;
                }
              }
              var z = function() {
                for (var Ee = function(Lr) {
                  return function() {
                    var xr = new Error("Method " + Lr + " is not implemented by the current driver"), It = g.reject(xr);
                    return S(It, arguments[arguments.length - 1]), It;
                  };
                }, qe = 0, Ar = Ce.length; qe < Ar; qe++) {
                  var Ge = Ce[qe];
                  r[Ge] || (r[Ge] = Ee(Ge));
                }
              };
              z();
              var Y = function(Ee) {
                Se[y] && console.info("Redefining LocalForage driver: " + y), Se[y] = r, Et[y] = Ee, l();
              };
              "_support" in r ? r._support && typeof r._support == "function" ? r._support().then(Y, m) : Y(!!r._support) : Y(!0);
            } catch (Z) {
              m(Z);
            }
          });
          return I(s, a, u), s;
        }, t.prototype.driver = function() {
          return this._driver || null;
        }, t.prototype.getDriver = function(r, a, u) {
          var s = Se[r] ? g.resolve(Se[r]) : g.reject(new Error("Driver not found."));
          return I(s, a, u), s;
        }, t.prototype.getSerializer = function(r) {
          var a = g.resolve(Ve);
          return I(a, r), a;
        }, t.prototype.ready = function(r) {
          var a = this, u = a._driverSet.then(function() {
            return a._ready === null && (a._ready = a._initDriver()), a._ready;
          });
          return I(u, r, r), u;
        }, t.prototype.setDriver = function(r, a, u) {
          var s = this;
          St(r) || (r = [r]);
          var l = this._getSupportedDrivers(r);
          function m() {
            s._config.driver = s.driver();
          }
          function y(A) {
            return s._extend(A), m(), s._ready = s._initStorage(s._config), s._ready;
          }
          function _(A) {
            return function() {
              var C = 0;
              function M() {
                for (; C < A.length; ) {
                  var H = A[C];
                  return C++, s._dbInfo = null, s._ready = null, s.getDriver(H).then(y).catch(M);
                }
                m();
                var z = new Error("No available storage method found.");
                return s._driverSet = g.reject(z), s._driverSet;
              }
              return M();
            };
          }
          var $ = this._driverSet !== null ? this._driverSet.catch(function() {
            return g.resolve();
          }) : g.resolve();
          return this._driverSet = $.then(function() {
            var A = l[0];
            return s._dbInfo = null, s._ready = null, s.getDriver(A).then(function(C) {
              s._driver = C._driver, m(), s._wrapLibraryMethodsWithReady(), s._initDriver = _(l);
            });
          }).catch(function() {
            m();
            var A = new Error("No available storage method found.");
            return s._driverSet = g.reject(A), s._driverSet;
          }), I(this._driverSet, a, u), this._driverSet;
        }, t.prototype.supports = function(r) {
          return !!Et[r];
        }, t.prototype._extend = function(r) {
          Xe(this, r);
        }, t.prototype._getSupportedDrivers = function(r) {
          for (var a = [], u = 0, s = r.length; u < s; u++) {
            var l = r[u];
            this.supports(l) && a.push(l);
          }
          return a;
        }, t.prototype._wrapLibraryMethodsWithReady = function() {
          for (var r = 0, a = Ke.length; r < a; r++)
            Sr(this, Ke[r]);
        }, t.prototype.createInstance = function(r) {
          return new t(r);
        }, t;
      }(), Ir = new Er();
      c.exports = Ir;
    }, { 3: 3 }] }, {}, [4])(4);
  });
})(zt);
var ro = zt.exports;
const oo = /* @__PURE__ */ no(ro), me = [];
function io(e, n = ne) {
  let o;
  const c = /* @__PURE__ */ new Set();
  function f(p) {
    if (Ft(e, p) && (e = p, o)) {
      const E = !me.length;
      for (const w of c)
        w[1](), me.push(w, e);
      if (E) {
        for (let w = 0; w < me.length; w += 2)
          me[w][0](me[w + 1]);
        me.length = 0;
      }
    }
  }
  function d(p) {
    f(p(e));
  }
  function h(p, E = ne) {
    const w = [p, E];
    return c.add(w), c.size === 1 && (o = n(f, d) || ne), p(e), () => {
      c.delete(w), c.size === 0 && o && (o(), o = null);
    };
  }
  return { set: f, update: d, subscribe: h };
}
oo.config({
  name: "SNS HPC AI Assitant"
});
const de = {
  Unknown: { slug: "unknown", description: "Checking the AI server status...", icon: "⏳" },
  Error: { slug: "error", description: "The AI server is currently unavailable", icon: "🔴" },
  OK: { slug: "ok", description: "The AI server is fully functional", icon: "🟢" },
  Running: { slug: "running", description: "The AI server is working to answer", icon: "🔵" },
  Degraded: { slug: "degraded", description: "The AI server is currently degraded", icon: "🟡" }
};
class so {
  constructor(n) {
    this.baseURL = n, this.status = io(de.Unknown);
  }
  // list available models on the backend
  async getBestModel(n, o) {
    o = o || {};
    try {
      const c = await fetch(`${this.baseURL}/api/tags`, { method: "GET", ...o });
      if (c.status === 200) {
        const d = (await c.json()).models.map((h) => h.model);
        for (const h of n)
          if (d.includes(h.model))
            return this.status.set(h.premium ? de.OK : de.Degraded), h.model;
      }
    } catch (c) {
      console.error(c);
    }
    this.status.set(de.Error);
  }
  // perform an empty model request to preload it
  async preloadModel(n, o) {
    o = o || {};
    try {
      if ((await fetch(`${this.baseURL}/api/generate`, {
        method: "POST",
        body: JSON.stringify({ model: n }),
        ...o
      })).status === 200)
        return null;
    } catch (c) {
      console.error(c);
    }
    this.status.set(de.Error);
  }
  async chat(n, o) {
    o = o || {};
    const c = Rr(this.status);
    try {
      this.status.set(de.Running);
      const f = await fetch(`${this.baseURL}/api/chat`, {
        method: "POST",
        body: JSON.stringify(n),
        ...o
      });
      if (f.status === 200)
        return this.status.set(c), await f.json();
    } catch (f) {
      console.error(f);
    }
    this.status.set(de.Error);
  }
}
var ce = {}, F = {}, G = {};
Object.defineProperty(G, "__esModule", { value: !0 });
G.output = G.exists = G.hash = G.bytes = G.bool = G.number = void 0;
function He(e) {
  if (!Number.isSafeInteger(e) || e < 0)
    throw new Error(`Wrong positive integer: ${e}`);
}
G.number = He;
function Vt(e) {
  if (typeof e != "boolean")
    throw new Error(`Expected boolean, not ${e}`);
}
G.bool = Vt;
function ao(e) {
  return e instanceof Uint8Array || e != null && typeof e == "object" && e.constructor.name === "Uint8Array";
}
function rt(e, ...n) {
  if (!ao(e))
    throw new Error("Expected Uint8Array");
  if (n.length > 0 && !n.includes(e.length))
    throw new Error(`Expected Uint8Array of length ${n}, not of length=${e.length}`);
}
G.bytes = rt;
function Kt(e) {
  if (typeof e != "function" || typeof e.create != "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  He(e.outputLen), He(e.blockLen);
}
G.hash = Kt;
function Xt(e, n = !0) {
  if (e.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (n && e.finished)
    throw new Error("Hash#digest() has already been called");
}
G.exists = Xt;
function qt(e, n) {
  rt(e);
  const o = n.outputLen;
  if (e.length < o)
    throw new Error(`digestInto() expects output buffer of length at least ${o}`);
}
G.output = qt;
const uo = { number: He, bool: Vt, bytes: rt, hash: Kt, exists: Xt, output: qt };
G.default = uo;
var T = {};
Object.defineProperty(T, "__esModule", { value: !0 });
T.add5L = T.add5H = T.add4H = T.add4L = T.add3H = T.add3L = T.add = T.rotlBL = T.rotlBH = T.rotlSL = T.rotlSH = T.rotr32L = T.rotr32H = T.rotrBL = T.rotrBH = T.rotrSL = T.rotrSH = T.shrSL = T.shrSH = T.toBig = T.split = T.fromBig = void 0;
const Pe = /* @__PURE__ */ BigInt(2 ** 32 - 1), tt = /* @__PURE__ */ BigInt(32);
function ot(e, n = !1) {
  return n ? { h: Number(e & Pe), l: Number(e >> tt & Pe) } : { h: Number(e >> tt & Pe) | 0, l: Number(e & Pe) | 0 };
}
T.fromBig = ot;
function Gt(e, n = !1) {
  let o = new Uint32Array(e.length), c = new Uint32Array(e.length);
  for (let f = 0; f < e.length; f++) {
    const { h: d, l: h } = ot(e[f], n);
    [o[f], c[f]] = [d, h];
  }
  return [o, c];
}
T.split = Gt;
const Jt = (e, n) => BigInt(e >>> 0) << tt | BigInt(n >>> 0);
T.toBig = Jt;
const Qt = (e, n, o) => e >>> o;
T.shrSH = Qt;
const Zt = (e, n, o) => e << 32 - o | n >>> o;
T.shrSL = Zt;
const en = (e, n, o) => e >>> o | n << 32 - o;
T.rotrSH = en;
const tn = (e, n, o) => e << 32 - o | n >>> o;
T.rotrSL = tn;
const nn = (e, n, o) => e << 64 - o | n >>> o - 32;
T.rotrBH = nn;
const rn = (e, n, o) => e >>> o - 32 | n << 64 - o;
T.rotrBL = rn;
const on = (e, n) => n;
T.rotr32H = on;
const sn = (e, n) => e;
T.rotr32L = sn;
const an = (e, n, o) => e << o | n >>> 32 - o;
T.rotlSH = an;
const un = (e, n, o) => n << o | e >>> 32 - o;
T.rotlSL = un;
const cn = (e, n, o) => n << o - 32 | e >>> 64 - o;
T.rotlBH = cn;
const fn = (e, n, o) => e << o - 32 | n >>> 64 - o;
T.rotlBL = fn;
function ln(e, n, o, c) {
  const f = (n >>> 0) + (c >>> 0);
  return { h: e + o + (f / 2 ** 32 | 0) | 0, l: f | 0 };
}
T.add = ln;
const dn = (e, n, o) => (e >>> 0) + (n >>> 0) + (o >>> 0);
T.add3L = dn;
const hn = (e, n, o, c) => n + o + c + (e / 2 ** 32 | 0) | 0;
T.add3H = hn;
const vn = (e, n, o, c) => (e >>> 0) + (n >>> 0) + (o >>> 0) + (c >>> 0);
T.add4L = vn;
const pn = (e, n, o, c, f) => n + o + c + f + (e / 2 ** 32 | 0) | 0;
T.add4H = pn;
const mn = (e, n, o, c, f) => (e >>> 0) + (n >>> 0) + (o >>> 0) + (c >>> 0) + (f >>> 0);
T.add5L = mn;
const gn = (e, n, o, c, f, d) => n + o + c + f + d + (e / 2 ** 32 | 0) | 0;
T.add5H = gn;
const co = {
  fromBig: ot,
  split: Gt,
  toBig: Jt,
  shrSH: Qt,
  shrSL: Zt,
  rotrSH: en,
  rotrSL: tn,
  rotrBH: nn,
  rotrBL: rn,
  rotr32H: on,
  rotr32L: sn,
  rotlSH: an,
  rotlSL: un,
  rotlBH: cn,
  rotlBL: fn,
  add: ln,
  add3L: dn,
  add3H: hn,
  add4L: vn,
  add4H: pn,
  add5H: gn,
  add5L: mn
};
T.default = co;
var yn = {}, Fe = {};
Object.defineProperty(Fe, "__esModule", { value: !0 });
Fe.crypto = void 0;
Fe.crypto = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
(function(e) {
  /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
  Object.defineProperty(e, "__esModule", { value: !0 }), e.randomBytes = e.wrapXOFConstructorWithOpts = e.wrapConstructorWithOpts = e.wrapConstructor = e.checkOpts = e.Hash = e.concatBytes = e.toBytes = e.utf8ToBytes = e.asyncLoop = e.nextTick = e.hexToBytes = e.bytesToHex = e.isLE = e.rotr = e.createView = e.u32 = e.u8 = void 0;
  const n = Fe, o = (v) => new Uint8Array(v.buffer, v.byteOffset, v.byteLength);
  e.u8 = o;
  const c = (v) => new Uint32Array(v.buffer, v.byteOffset, Math.floor(v.byteLength / 4));
  e.u32 = c;
  function f(v) {
    return v instanceof Uint8Array || v != null && typeof v == "object" && v.constructor.name === "Uint8Array";
  }
  const d = (v) => new DataView(v.buffer, v.byteOffset, v.byteLength);
  e.createView = d;
  const h = (v, x) => v << 32 - x | v >>> x;
  if (e.rotr = h, e.isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68, !e.isLE)
    throw new Error("Non little-endian hardware is not supported");
  const p = /* @__PURE__ */ Array.from({ length: 256 }, (v, x) => x.toString(16).padStart(2, "0"));
  function E(v) {
    if (!f(v))
      throw new Error("Uint8Array expected");
    let x = "";
    for (let k = 0; k < v.length; k++)
      x += p[v[k]];
    return x;
  }
  e.bytesToHex = E;
  const w = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
  function O(v) {
    if (v >= w._0 && v <= w._9)
      return v - w._0;
    if (v >= w._A && v <= w._F)
      return v - (w._A - 10);
    if (v >= w._a && v <= w._f)
      return v - (w._a - 10);
  }
  function g(v) {
    if (typeof v != "string")
      throw new Error("hex string expected, got " + typeof v);
    const x = v.length, k = x / 2;
    if (x % 2)
      throw new Error("padded hex string expected, got unpadded hex of length " + x);
    const D = new Uint8Array(k);
    for (let U = 0, W = 0; U < k; U++, W += 2) {
      const ie = O(v.charCodeAt(W)), le = O(v.charCodeAt(W + 1));
      if (ie === void 0 || le === void 0) {
        const $e = v[W] + v[W + 1];
        throw new Error('hex string expected, got non-hex character "' + $e + '" at index ' + W);
      }
      D[U] = ie * 16 + le;
    }
    return D;
  }
  e.hexToBytes = g;
  const S = async () => {
  };
  e.nextTick = S;
  async function I(v, x, k) {
    let D = Date.now();
    for (let U = 0; U < v; U++) {
      k(U);
      const W = Date.now() - D;
      W >= 0 && W < x || (await (0, e.nextTick)(), D += W);
    }
  }
  e.asyncLoop = I;
  function R(v) {
    if (typeof v != "string")
      throw new Error(`utf8ToBytes expected string, got ${typeof v}`);
    return new Uint8Array(new TextEncoder().encode(v));
  }
  e.utf8ToBytes = R;
  function N(v) {
    if (typeof v == "string" && (v = R(v)), !f(v))
      throw new Error(`expected Uint8Array, got ${typeof v}`);
    return v;
  }
  e.toBytes = N;
  function P(...v) {
    let x = 0;
    for (let D = 0; D < v.length; D++) {
      const U = v[D];
      if (!f(U))
        throw new Error("Uint8Array expected");
      x += U.length;
    }
    const k = new Uint8Array(x);
    for (let D = 0, U = 0; D < v.length; D++) {
      const W = v[D];
      k.set(W, U), U += W.length;
    }
    return k;
  }
  e.concatBytes = P;
  class V {
    // Safe version that clones internal state
    clone() {
      return this._cloneInto();
    }
  }
  e.Hash = V;
  const j = {}.toString;
  function re(v, x) {
    if (x !== void 0 && j.call(x) !== "[object Object]")
      throw new Error("Options should be object or undefined");
    return Object.assign(v, x);
  }
  e.checkOpts = re;
  function Q(v) {
    const x = (D) => v().update(N(D)).digest(), k = v();
    return x.outputLen = k.outputLen, x.blockLen = k.blockLen, x.create = () => v(), x;
  }
  e.wrapConstructor = Q;
  function b(v) {
    const x = (D, U) => v(U).update(N(D)).digest(), k = v({});
    return x.outputLen = k.outputLen, x.blockLen = k.blockLen, x.create = (D) => v(D), x;
  }
  e.wrapConstructorWithOpts = b;
  function L(v) {
    const x = (D, U) => v(U).update(N(D)).digest(), k = v({});
    return x.outputLen = k.outputLen, x.blockLen = k.blockLen, x.create = (D) => v(D), x;
  }
  e.wrapXOFConstructorWithOpts = L;
  function B(v = 32) {
    if (n.crypto && typeof n.crypto.getRandomValues == "function")
      return n.crypto.getRandomValues(new Uint8Array(v));
    throw new Error("crypto.getRandomValues must be defined");
  }
  e.randomBytes = B;
})(yn);
Object.defineProperty(F, "__esModule", { value: !0 });
F.shake256 = F.shake128 = F.keccak_512 = F.keccak_384 = F.keccak_256 = F.keccak_224 = F.sha3_512 = F.sha3_384 = F.sha3_256 = F.sha3_224 = F.Keccak = F.keccakP = void 0;
const ge = G, Oe = T, Le = yn, [_n, bn, wn] = [[], [], []], fo = /* @__PURE__ */ BigInt(0), Ie = /* @__PURE__ */ BigInt(1), lo = /* @__PURE__ */ BigInt(2), ho = /* @__PURE__ */ BigInt(7), vo = /* @__PURE__ */ BigInt(256), po = /* @__PURE__ */ BigInt(113);
for (let e = 0, n = Ie, o = 1, c = 0; e < 24; e++) {
  [o, c] = [c, (2 * o + 3 * c) % 5], _n.push(2 * (5 * c + o)), bn.push((e + 1) * (e + 2) / 2 % 64);
  let f = fo;
  for (let d = 0; d < 7; d++)
    n = (n << Ie ^ (n >> ho) * po) % vo, n & lo && (f ^= Ie << (Ie << /* @__PURE__ */ BigInt(d)) - Ie);
  wn.push(f);
}
const [mo, go] = /* @__PURE__ */ (0, Oe.split)(wn, !0), Tt = (e, n, o) => o > 32 ? (0, Oe.rotlBH)(e, n, o) : (0, Oe.rotlSH)(e, n, o), Rt = (e, n, o) => o > 32 ? (0, Oe.rotlBL)(e, n, o) : (0, Oe.rotlSL)(e, n, o);
function $n(e, n = 24) {
  const o = new Uint32Array(10);
  for (let c = 24 - n; c < 24; c++) {
    for (let h = 0; h < 10; h++)
      o[h] = e[h] ^ e[h + 10] ^ e[h + 20] ^ e[h + 30] ^ e[h + 40];
    for (let h = 0; h < 10; h += 2) {
      const p = (h + 8) % 10, E = (h + 2) % 10, w = o[E], O = o[E + 1], g = Tt(w, O, 1) ^ o[p], S = Rt(w, O, 1) ^ o[p + 1];
      for (let I = 0; I < 50; I += 10)
        e[h + I] ^= g, e[h + I + 1] ^= S;
    }
    let f = e[2], d = e[3];
    for (let h = 0; h < 24; h++) {
      const p = bn[h], E = Tt(f, d, p), w = Rt(f, d, p), O = _n[h];
      f = e[O], d = e[O + 1], e[O] = E, e[O + 1] = w;
    }
    for (let h = 0; h < 50; h += 10) {
      for (let p = 0; p < 10; p++)
        o[p] = e[h + p];
      for (let p = 0; p < 10; p++)
        e[h + p] ^= ~o[(p + 2) % 10] & o[(p + 4) % 10];
    }
    e[0] ^= mo[c], e[1] ^= go[c];
  }
  o.fill(0);
}
F.keccakP = $n;
class Re extends Le.Hash {
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(n, o, c, f = !1, d = 24) {
    if (super(), this.blockLen = n, this.suffix = o, this.outputLen = c, this.enableXOF = f, this.rounds = d, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, (0, ge.number)(c), 0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = (0, Le.u32)(this.state);
  }
  keccak() {
    $n(this.state32, this.rounds), this.posOut = 0, this.pos = 0;
  }
  update(n) {
    (0, ge.exists)(this);
    const { blockLen: o, state: c } = this;
    n = (0, Le.toBytes)(n);
    const f = n.length;
    for (let d = 0; d < f; ) {
      const h = Math.min(o - this.pos, f - d);
      for (let p = 0; p < h; p++)
        c[this.pos++] ^= n[d++];
      this.pos === o && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished)
      return;
    this.finished = !0;
    const { state: n, suffix: o, pos: c, blockLen: f } = this;
    n[c] ^= o, o & 128 && c === f - 1 && this.keccak(), n[f - 1] ^= 128, this.keccak();
  }
  writeInto(n) {
    (0, ge.exists)(this, !1), (0, ge.bytes)(n), this.finish();
    const o = this.state, { blockLen: c } = this;
    for (let f = 0, d = n.length; f < d; ) {
      this.posOut >= c && this.keccak();
      const h = Math.min(c - this.posOut, d - f);
      n.set(o.subarray(this.posOut, this.posOut + h), f), this.posOut += h, f += h;
    }
    return n;
  }
  xofInto(n) {
    if (!this.enableXOF)
      throw new Error("XOF is not possible for this instance");
    return this.writeInto(n);
  }
  xof(n) {
    return (0, ge.number)(n), this.xofInto(new Uint8Array(n));
  }
  digestInto(n) {
    if ((0, ge.output)(n, this), this.finished)
      throw new Error("digest() was already called");
    return this.writeInto(n), this.destroy(), n;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = !0, this.state.fill(0);
  }
  _cloneInto(n) {
    const { blockLen: o, suffix: c, outputLen: f, rounds: d, enableXOF: h } = this;
    return n || (n = new Re(o, c, f, h, d)), n.state32.set(this.state32), n.pos = this.pos, n.posOut = this.posOut, n.finished = this.finished, n.rounds = d, n.suffix = c, n.outputLen = f, n.enableXOF = h, n.destroyed = this.destroyed, n;
  }
}
F.Keccak = Re;
const fe = (e, n, o) => (0, Le.wrapConstructor)(() => new Re(n, e, o));
F.sha3_224 = fe(6, 144, 224 / 8);
F.sha3_256 = fe(6, 136, 256 / 8);
F.sha3_384 = fe(6, 104, 384 / 8);
F.sha3_512 = fe(6, 72, 512 / 8);
F.keccak_224 = fe(1, 144, 224 / 8);
F.keccak_256 = fe(1, 136, 256 / 8);
F.keccak_384 = fe(1, 104, 384 / 8);
F.keccak_512 = fe(1, 72, 512 / 8);
const Sn = (e, n, o) => (0, Le.wrapXOFConstructorWithOpts)((c = {}) => new Re(n, e, c.dkLen === void 0 ? o : c.dkLen, !0));
F.shake128 = Sn(31, 168, 128 / 8);
F.shake256 = Sn(31, 136, 256 / 8);
const { sha3_512: yo } = F, En = 24, xe = 32, nt = (e = 4, n = Math.random) => {
  let o = "";
  for (; o.length < e; )
    o = o + Math.floor(n() * 36).toString(36);
  return o;
};
function In(e) {
  let n = 8n, o = 0n;
  for (const c of e.values()) {
    const f = BigInt(c);
    o = (o << n) + f;
  }
  return o;
}
const An = (e = "") => In(yo(e)).toString(36).slice(1), Nt = Array.from(
  { length: 26 },
  (e, n) => String.fromCharCode(n + 97)
), _o = (e) => Nt[Math.floor(e() * Nt.length)], Ln = ({
  globalObj: e = typeof _e < "u" ? _e : typeof window < "u" ? window : {},
  random: n = Math.random
} = {}) => {
  const o = Object.keys(e).toString(), c = o.length ? o + nt(xe, n) : nt(xe, n);
  return An(c).substring(0, xe);
}, xn = (e) => () => e++, bo = 476782367, Bn = ({
  // Fallback if the user does not pass in a CSPRNG. This should be OK
  // because we don't rely solely on the random number generator for entropy.
  // We also use the host fingerprint, current time, and a session counter.
  random: e = Math.random,
  counter: n = xn(Math.floor(e() * bo)),
  length: o = En,
  fingerprint: c = Ln({ random: e })
} = {}) => function() {
  const d = _o(e), h = Date.now().toString(36), p = n().toString(36), E = nt(o, e), w = `${h + E + p + c}`;
  return `${d + An(w).substring(1, o)}`;
}, wo = Bn(), $o = (e, { minLength: n = 2, maxLength: o = xe } = {}) => {
  const c = e.length, f = /^[0-9a-z]+$/;
  try {
    if (typeof e == "string" && c >= n && c <= o && f.test(e))
      return !0;
  } finally {
  }
  return !1;
};
ce.getConstants = () => ({ defaultLength: En, bigLength: xe });
ce.init = Bn;
ce.createId = wo;
ce.bufToBigInt = In;
ce.createCounter = xn;
ce.createFingerprint = Ln;
ce.isCuid = $o;
const { createId: So, init: Ro, getConstants: No, isCuid: Co } = ce;
var Eo = So;
class Io {
  // TODO: Implement message tree with branches
  constructor(n, o, c) {
    if (this.updated = n, this.ollama = o, c)
      this._ = c;
    else {
      const f = (/* @__PURE__ */ new Date()).toISOString();
      this._ = {
        chatId: Eo(),
        created: f,
        lastUpdated: f,
        title: null,
        tags: [],
        starred: !1,
        messages: [],
        options: {}
      };
    }
  }
  async save({ untouched: n }) {
    n && (this._.lastUpdated = (/* @__PURE__ */ new Date()).toISOString()), await localForage.setItem(`chat/${this._.chatId}`, JSON.stringify(this._));
  }
  addMessage(n) {
    this._.messages.push(n), this.updated();
  }
  async complete(n) {
    const o = await this.ollama.chat({
      model: n,
      messages: this._.messages,
      stream: !1
    });
    this.addMessage(o.message);
  }
}
const Ct = {
  // prompt to use as the initial one 
  systemPrompt: { role: "system", content: "You are LucIAno, an helpful AI assistant, expert in High Performance Computing, Linux System Administration, and Python and FORTRAN programming. You always answer to users very precisely and to-the-point, helping them to clarify their question when they are vaguely expressed. You politely refuse to answer questions not related to your expertise area. Write output in Markdown." },
  // AI models to use in order of preference
  modelList: [
    { model: "notux:8x7b-v1-q3_K_L", premium: !0 },
    { model: "nous-hermes2-mixtral:8x7b-dpo-q3_K_L", premium: !0 },
    { model: "solar:10.7b-instruct-v1-q3_K_L", premium: !0 },
    { model: "mistral:7b-instruct-v0.2-q3_K_L", premium: !1 },
    { model: "stablelm2:1.6b-zephyr-q3_K_L", premium: !1 }
  ]
};
function Ao(e) {
  Nr(e, "svelte-wejxm", ".mb-10.svelte-wejxm{margin-bottom:10px}.text-bold.svelte-wejxm{font-weight:700}.mt-10.svelte-wejxm{margin-top:10px}.text-small.svelte-wejxm{font-size:80%}.hidden.svelte-wejxm{visibility:hidden}.text.svelte-wejxm{display:block;border-radius:10px;font-size:120%;padding:8px 8px;width:100%}.chat-bot.svelte-wejxm{background-color:white;min-width:25%;border:1px solid grey;border-radius:5px;position:absolute;bottom:10px;right:10px;padding:10px 10px;display:flex;flex-direction:column;align-items:stretch}.bot-opener.svelte-wejxm{border:0;background-color:#9a0eea;color:white;font-weight:700;font-size:120%;border-radius:5px;position:absolute;bottom:10px;right:10px;padding:10px 16px}");
}
function Dt(e, n, o) {
  const c = e.slice();
  return c[11] = n[o], c;
}
function kt(e) {
  let n, o, c, f, d, h, p, E, w, O, g = Ot(
    /*chat*/
    e[2]._.messages
  ), S = [];
  for (let I = 0; I < g.length; I += 1)
    S[I] = Ut(Dt(e, g, I));
  return {
    c() {
      for (let I = 0; I < S.length; I += 1)
        S[I].c();
      n = ue(), o = q("form"), c = q("input"), d = ue(), h = q("div"), h.textContent = "The assistant makes mistakes, always check important information", p = ue(), E = q("div"), E.textContent = "Also, the assistant cannot read the documentation yet", c.disabled = f = /*status*/
      e[0] && /*$status*/
      e[5].slug == "running", X(c, "class", "text svelte-wejxm"), X(c, "type", "text"), X(c, "placeholder", "What do you want help with?"), X(o, "action", "#"), X(h, "class", "mt-10 text-small svelte-wejxm"), X(E, "class", "text-small svelte-wejxm");
    },
    m(I, R) {
      for (let N = 0; N < S.length; N += 1)
        S[N] && S[N].m(I, R);
      te(I, n, R), te(I, o, R), K(o, c), Lt(
        c,
        /*text*/
        e[3]
      ), te(I, d, R), te(I, h, R), te(I, p, R), te(I, E, R), w || (O = [
        Qe(
          c,
          "input",
          /*input_input_handler*/
          e[9]
        ),
        Qe(o, "submit", Ur(
          /*handleUserMessage*/
          e[7]
        ))
      ], w = !0);
    },
    p(I, R) {
      if (R & /*chat, roleIcons*/
      68) {
        g = Ot(
          /*chat*/
          I[2]._.messages
        );
        let N;
        for (N = 0; N < g.length; N += 1) {
          const P = Dt(I, g, N);
          S[N] ? S[N].p(P, R) : (S[N] = Ut(P), S[N].c(), S[N].m(n.parentNode, n));
        }
        for (; N < S.length; N += 1)
          S[N].d(1);
        S.length = g.length;
      }
      R & /*status, $status*/
      33 && f !== (f = /*status*/
      I[0] && /*$status*/
      I[5].slug == "running") && (c.disabled = f), R & /*text*/
      8 && c.value !== /*text*/
      I[3] && Lt(
        c,
        /*text*/
        I[3]
      );
    },
    d(I) {
      I && (J(n), J(o), J(d), J(h), J(p), J(E)), kr(S, I), w = !1, Te(O);
    }
  };
}
function Pt(e) {
  let n, o = (
    /*roleIcons*/
    e[6][
      /*message*/
      e[11].role
    ] + ""
  ), c, f, d = (
    /*message*/
    e[11].content + ""
  ), h;
  return {
    c() {
      n = q("div"), c = we(o), f = ue(), h = we(d), X(n, "class", "message");
    },
    m(p, E) {
      te(p, n, E), K(n, c), K(n, f), K(n, h);
    },
    p(p, E) {
      E & /*chat*/
      4 && o !== (o = /*roleIcons*/
      p[6][
        /*message*/
        p[11].role
      ] + "") && Me(c, o), E & /*chat*/
      4 && d !== (d = /*message*/
      p[11].content + "") && Me(h, d);
    },
    d(p) {
      p && J(n);
    }
  };
}
function Ut(e) {
  let n, o = (
    /*message*/
    e[11].role != "system" && Pt(e)
  );
  return {
    c() {
      o && o.c(), n = Pr();
    },
    m(c, f) {
      o && o.m(c, f), te(c, n, f);
    },
    p(c, f) {
      /*message*/
      c[11].role != "system" ? o ? o.p(c, f) : (o = Pt(c), o.c(), o.m(n.parentNode, n)) : o && (o.d(1), o = null);
    },
    d(c) {
      c && J(n), o && o.d(c);
    }
  };
}
function Lo(e) {
  let n, o, c, f, d, h = (
    /*status*/
    (e[0] ? (
      /*$status*/
      e[5].icon
    ) : "") + ""
  ), p, E, w, O, g, S, I, R, N = (
    /*status*/
    (e[0] ? (
      /*$status*/
      e[5].icon
    ) : "") + ""
  ), P, V, j, re, Q, b = (
    /*model*/
    e[1] && /*chat*/
    e[2] && kt(e)
  );
  return {
    c() {
      n = q("button"), o = q("div"), c = q("span"), c.textContent = "✨ Need Help?", f = ue(), d = q("span"), p = we(h), w = ue(), O = q("content"), g = q("div"), S = q("span"), S.textContent = "🤖 HPC Assistant", I = ue(), R = q("span"), P = we(N), j = ue(), b && b.c(), X(d, "title", E = /*status*/
      e[0] ? (
        /*$status*/
        e[5].description
      ) : ""), X(o, "class", "text-bold svelte-wejxm"), X(n, "class", "bot-opener svelte-wejxm"), De(
        n,
        "hidden",
        /*chatBotOpen*/
        e[4]
      ), X(R, "title", V = /*status*/
      e[0] ? (
        /*$status*/
        e[5].description
      ) : ""), X(g, "class", "mb-10 text-bold svelte-wejxm"), X(O, "class", "chat-bot svelte-wejxm"), De(O, "hidden", !/*chatBotOpen*/
      e[4]);
    },
    m(L, B) {
      te(L, n, B), K(n, o), K(o, c), K(o, f), K(o, d), K(d, p), te(L, w, B), te(L, O, B), K(O, g), K(g, S), K(g, I), K(g, R), K(R, P), K(O, j), b && b.m(O, null), re || (Q = Qe(
        n,
        "click",
        /*click_handler*/
        e[8]
      ), re = !0);
    },
    p(L, [B]) {
      B & /*status, $status*/
      33 && h !== (h = /*status*/
      (L[0] ? (
        /*$status*/
        L[5].icon
      ) : "") + "") && Me(p, h), B & /*status, $status*/
      33 && E !== (E = /*status*/
      L[0] ? (
        /*$status*/
        L[5].description
      ) : "") && X(d, "title", E), B & /*chatBotOpen*/
      16 && De(
        n,
        "hidden",
        /*chatBotOpen*/
        L[4]
      ), B & /*status, $status*/
      33 && N !== (N = /*status*/
      (L[0] ? (
        /*$status*/
        L[5].icon
      ) : "") + "") && Me(P, N), B & /*status, $status*/
      33 && V !== (V = /*status*/
      L[0] ? (
        /*$status*/
        L[5].description
      ) : "") && X(R, "title", V), /*model*/
      L[1] && /*chat*/
      L[2] ? b ? b.p(L, B) : (b = kt(L), b.c(), b.m(O, null)) : b && (b.d(1), b = null), B & /*chatBotOpen*/
      16 && De(O, "hidden", !/*chatBotOpen*/
      L[4]);
    },
    i: ne,
    o: ne,
    d(L) {
      L && (J(n), J(w), J(O)), b && b.d(), re = !1, Q();
    }
  };
}
function xo(e, n, o) {
  let c, f = ne, d = () => (f(), f = jt(p, (P) => o(5, c = P)), p);
  e.$$.on_destroy.push(() => f());
  let h, p, E, w;
  jr(async () => {
    const P = `${window.location.protocol}//${window.location.hostname}:${window.location.port}`;
    h = new so(P), d(o(0, p = h.status)), o(1, E = await h.getBestModel(Ct.modelList)), E && (await h.preloadModel(E), o(2, w = new Io(() => o(2, w), h)), w.addMessage(Ct.systemPrompt));
  });
  let O, g = !1;
  const S = { user: "👤", assistant: "🤖" };
  async function I() {
    w.addMessage({ role: "user", content: O }), o(3, O = ""), await w.complete(E);
  }
  const R = () => o(4, g = !0);
  function N() {
    O = this.value, o(3, O);
  }
  return [
    p,
    E,
    w,
    O,
    g,
    c,
    S,
    I,
    R,
    N
  ];
}
class Bo extends eo {
  constructor(n) {
    super(), Qr(this, n, xo, Lo, Ft, {}, Ao);
  }
}
customElements.define("hpc-chatbot", Zr(Bo, {}, [], [], !0));
export {
  Bo as ChatBot
};
//# sourceMappingURL=components.js.map
