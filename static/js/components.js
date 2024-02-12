var oi = Object.defineProperty;
var ii = (e, t, r) => t in e ? oi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var re = (e, t, r) => (ii(e, typeof t != "symbol" ? t + "" : t, r), r);
function ue() {
}
function Zr(e) {
  return e();
}
function or() {
  return /* @__PURE__ */ Object.create(null);
}
function He(e) {
  e.forEach(Zr);
}
function en(e) {
  return typeof e == "function";
}
function tn(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function ai(e) {
  return Object.keys(e).length === 0;
}
function kt(e, ...t) {
  if (e == null) {
    for (const n of t)
      n(void 0);
    return ue;
  }
  const r = e.subscribe(...t);
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
function si(e) {
  let t;
  return kt(e, (r) => t = r)(), t;
}
function ui(e, t, r) {
  e.$$.on_destroy.push(kt(t, r));
}
function W(e, t) {
  e.appendChild(t);
}
function fi(e, t, r) {
  const n = li(e);
  if (!n.getElementById(t)) {
    const i = G("style");
    i.id = t, i.textContent = r, ci(n, i);
  }
}
function li(e) {
  if (!e)
    return document;
  const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
  return t && /** @type {ShadowRoot} */
  t.host ? (
    /** @type {ShadowRoot} */
    t
  ) : e.ownerDocument;
}
function ci(e, t) {
  return W(
    /** @type {Document} */
    e.head || e,
    t
  ), t.sheet;
}
function ee(e, t, r) {
  e.insertBefore(t, r || null);
}
function Q(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function di(e, t) {
  for (let r = 0; r < e.length; r += 1)
    e[r] && e[r].d(t);
}
function G(e) {
  return document.createElement(e);
}
function me(e) {
  return document.createTextNode(e);
}
function ae() {
  return me(" ");
}
function hi() {
  return me("");
}
function mt(e, t, r, n) {
  return e.addEventListener(t, r, n), () => e.removeEventListener(t, r, n);
}
function mi(e) {
  return function(t) {
    return t.preventDefault(), e.call(this, t);
  };
}
function H(e, t, r) {
  r == null ? e.removeAttribute(t) : e.getAttribute(t) !== r && e.setAttribute(t, r);
}
function pi(e) {
  return Array.from(e.childNodes);
}
function Je(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
function ir(e, t) {
  e.value = t ?? "";
}
function ne(e, t, r) {
  e.classList.toggle(t, !!r);
}
function yi(e) {
  const t = {};
  return e.childNodes.forEach(
    /** @param {Element} node */
    (r) => {
      t[r.slot || "default"] = !0;
    }
  ), t;
}
let Fe;
function Be(e) {
  Fe = e;
}
function gi() {
  if (!Fe)
    throw new Error("Function called outside component initialization");
  return Fe;
}
function vi(e) {
  gi().$$.on_mount.push(e);
}
const Ee = [], ar = [];
let Le = [];
const sr = [], bi = /* @__PURE__ */ Promise.resolve();
let pt = !1;
function wi() {
  pt || (pt = !0, bi.then(rn));
}
function yt(e) {
  Le.push(e);
}
const dt = /* @__PURE__ */ new Set();
let $e = 0;
function rn() {
  if ($e !== 0)
    return;
  const e = Fe;
  do {
    try {
      for (; $e < Ee.length; ) {
        const t = Ee[$e];
        $e++, Be(t), _i(t.$$);
      }
    } catch (t) {
      throw Ee.length = 0, $e = 0, t;
    }
    for (Be(null), Ee.length = 0, $e = 0; ar.length; )
      ar.pop()();
    for (let t = 0; t < Le.length; t += 1) {
      const r = Le[t];
      dt.has(r) || (dt.add(r), r());
    }
    Le.length = 0;
  } while (Ee.length);
  for (; sr.length; )
    sr.pop()();
  pt = !1, dt.clear(), Be(e);
}
function _i(e) {
  if (e.fragment !== null) {
    e.update(), He(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(yt);
  }
}
function Si(e) {
  const t = [], r = [];
  Le.forEach((n) => e.indexOf(n) === -1 ? t.push(n) : r.push(n)), r.forEach((n) => n()), Le = t;
}
const Oi = /* @__PURE__ */ new Set();
function $i(e, t) {
  e && e.i && (Oi.delete(e), e.i(t));
}
function ur(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function xi(e, t, r) {
  const { fragment: n, after_update: i } = e.$$;
  n && n.m(t, r), yt(() => {
    const s = e.$$.on_mount.map(Zr).filter(en);
    e.$$.on_destroy ? e.$$.on_destroy.push(...s) : He(s), e.$$.on_mount = [];
  }), i.forEach(yt);
}
function Ai(e, t) {
  const r = e.$$;
  r.fragment !== null && (Si(r.after_update), He(r.on_destroy), r.fragment && r.fragment.d(t), r.on_destroy = r.fragment = null, r.ctx = []);
}
function Ei(e, t) {
  e.$$.dirty[0] === -1 && (Ee.push(e), wi(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function Ii(e, t, r, n, i, s, l = null, f = [-1]) {
  const g = Fe;
  Be(e);
  const p = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: ue,
    not_equal: i,
    bound: or(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (g ? g.$$.context : [])),
    // everything else
    callbacks: or(),
    dirty: f,
    skip_bound: !1,
    root: t.target || g.$$.root
  };
  l && l(p.root);
  let I = !1;
  if (p.ctx = r ? r(e, t.props || {}, (y, O, ...x) => {
    const T = x.length ? x[0] : O;
    return p.ctx && i(p.ctx[y], p.ctx[y] = T) && (!p.skip_bound && p.bound[y] && p.bound[y](T), I && Ei(e, y)), O;
  }) : [], p.update(), I = !0, He(p.before_update), p.fragment = n ? n(p.ctx) : !1, t.target) {
    if (t.hydrate) {
      const y = pi(t.target);
      p.fragment && p.fragment.l(y), y.forEach(Q);
    } else
      p.fragment && p.fragment.c();
    t.intro && $i(e.$$.fragment), xi(e, t.target, t.anchor), rn();
  }
  Be(g);
}
let nn;
typeof HTMLElement == "function" && (nn = class extends HTMLElement {
  constructor(t, r, n) {
    super();
    /** The Svelte component constructor */
    re(this, "$$ctor");
    /** Slots */
    re(this, "$$s");
    /** The Svelte component instance */
    re(this, "$$c");
    /** Whether or not the custom element is connected */
    re(this, "$$cn", !1);
    /** Component props data */
    re(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    re(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    re(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    re(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    re(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = t, this.$$s = r, n && this.attachShadow({ mode: "open" });
  }
  addEventListener(t, r, n) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(r), this.$$c) {
      const i = this.$$c.$on(t, r);
      this.$$l_u.set(r, i);
    }
    super.addEventListener(t, r, n);
  }
  removeEventListener(t, r, n) {
    if (super.removeEventListener(t, r, n), this.$$c) {
      const i = this.$$l_u.get(r);
      i && (i(), this.$$l_u.delete(r));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(s) {
        return () => {
          let l;
          return {
            c: function() {
              l = G("slot"), s !== "default" && H(l, "name", s);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(p, I) {
              ee(p, l, I);
            },
            d: function(p) {
              p && Q(l);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn)
        return;
      const r = {}, n = yi(this);
      for (const s of this.$$s)
        s in n && (r[s] = [t(s)]);
      for (const s of this.attributes) {
        const l = this.$$g_p(s.name);
        l in this.$$d || (this.$$d[l] = Ge(l, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = new this.$$ctor({
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: r,
          $$scope: {
            ctx: []
          }
        }
      });
      const i = () => {
        this.$$r = !0;
        for (const s in this.$$p_d)
          if (this.$$d[s] = this.$$c.$$.ctx[this.$$c.$$.props[s]], this.$$p_d[s].reflect) {
            const l = Ge(
              s,
              this.$$d[s],
              this.$$p_d,
              "toAttribute"
            );
            l == null ? this.removeAttribute(this.$$p_d[s].attribute || s) : this.setAttribute(this.$$p_d[s].attribute || s, l);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(i), i();
      for (const s in this.$$l)
        for (const l of this.$$l[s]) {
          const f = this.$$c.$on(s, l);
          this.$$l_u.set(l, f);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(t, r, n) {
    var i;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Ge(t, n, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      this.$$cn || (this.$$c.$destroy(), this.$$c = void 0);
    });
  }
  $$g_p(t) {
    return Object.keys(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function Ge(e, t, r, n) {
  var s;
  const i = (s = r[e]) == null ? void 0 : s.type;
  if (t = i === "Boolean" && typeof t != "boolean" ? t != null : t, !n || !r[e])
    return t;
  if (n === "toAttribute")
    switch (i) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (i) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function Ti(e, t, r, n, i, s) {
  let l = class extends nn {
    constructor() {
      super(e, r, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Object.keys(t).map(
        (f) => (t[f].attribute || f).toLowerCase()
      );
    }
  };
  return Object.keys(t).forEach((f) => {
    Object.defineProperty(l.prototype, f, {
      get() {
        return this.$$c && f in this.$$c ? this.$$c[f] : this.$$d[f];
      },
      set(g) {
        var p;
        g = Ge(f, g, t), this.$$d[f] = g, (p = this.$$c) == null || p.$set({ [f]: g });
      }
    });
  }), n.forEach((f) => {
    Object.defineProperty(l.prototype, f, {
      get() {
        var g;
        return (g = this.$$c) == null ? void 0 : g[f];
      }
    });
  }), s && (l = s(l)), e.element = /** @type {any} */
  l, l;
}
class Li {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    re(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    re(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Ai(this, 1), this.$destroy = ue;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, r) {
    if (!en(r))
      return ue;
    const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return n.push(r), () => {
      const i = n.indexOf(r);
      i !== -1 && n.splice(i, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !ai(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const Pi = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Pi);
var Ie = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ki(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Ke(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var on = { exports: {} };
/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/
(function(e, t) {
  (function(r) {
    e.exports = r();
  })(function() {
    return function r(n, i, s) {
      function l(p, I) {
        if (!i[p]) {
          if (!n[p]) {
            var y = typeof Ke == "function" && Ke;
            if (!I && y)
              return y(p, !0);
            if (f)
              return f(p, !0);
            var O = new Error("Cannot find module '" + p + "'");
            throw O.code = "MODULE_NOT_FOUND", O;
          }
          var x = i[p] = { exports: {} };
          n[p][0].call(x.exports, function(T) {
            var E = n[p][1][T];
            return l(E || T);
          }, x, x.exports, r, n, i, s);
        }
        return i[p].exports;
      }
      for (var f = typeof Ke == "function" && Ke, g = 0; g < s.length; g++)
        l(s[g]);
      return l;
    }({ 1: [function(r, n, i) {
      (function(s) {
        var l = s.MutationObserver || s.WebKitMutationObserver, f;
        if (l) {
          var g = 0, p = new l(T), I = s.document.createTextNode("");
          p.observe(I, {
            characterData: !0
          }), f = function() {
            I.data = g = ++g % 2;
          };
        } else if (!s.setImmediate && typeof s.MessageChannel < "u") {
          var y = new s.MessageChannel();
          y.port1.onmessage = T, f = function() {
            y.port2.postMessage(0);
          };
        } else
          "document" in s && "onreadystatechange" in s.document.createElement("script") ? f = function() {
            var R = s.document.createElement("script");
            R.onreadystatechange = function() {
              T(), R.onreadystatechange = null, R.parentNode.removeChild(R), R = null;
            }, s.document.documentElement.appendChild(R);
          } : f = function() {
            setTimeout(T, 0);
          };
        var O, x = [];
        function T() {
          O = !0;
          for (var R, K, U = x.length; U; ) {
            for (K = x, x = [], R = -1; ++R < U; )
              K[R]();
            U = x.length;
          }
          O = !1;
        }
        n.exports = E;
        function E(R) {
          x.push(R) === 1 && !O && f();
        }
      }).call(this, typeof Ie < "u" ? Ie : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 2: [function(r, n, i) {
      var s = r(1);
      function l() {
      }
      var f = {}, g = ["REJECTED"], p = ["FULFILLED"], I = ["PENDING"];
      n.exports = y;
      function y(A) {
        if (typeof A != "function")
          throw new TypeError("resolver must be a function");
        this.state = I, this.queue = [], this.outcome = void 0, A !== l && E(this, A);
      }
      y.prototype.catch = function(A) {
        return this.then(null, A);
      }, y.prototype.then = function(A, N) {
        if (typeof A != "function" && this.state === p || typeof N != "function" && this.state === g)
          return this;
        var L = new this.constructor(l);
        if (this.state !== I) {
          var v = this.state === p ? A : N;
          x(L, v, this.outcome);
        } else
          this.queue.push(new O(L, A, N));
        return L;
      };
      function O(A, N, L) {
        this.promise = A, typeof N == "function" && (this.onFulfilled = N, this.callFulfilled = this.otherCallFulfilled), typeof L == "function" && (this.onRejected = L, this.callRejected = this.otherCallRejected);
      }
      O.prototype.callFulfilled = function(A) {
        f.resolve(this.promise, A);
      }, O.prototype.otherCallFulfilled = function(A) {
        x(this.promise, this.onFulfilled, A);
      }, O.prototype.callRejected = function(A) {
        f.reject(this.promise, A);
      }, O.prototype.otherCallRejected = function(A) {
        x(this.promise, this.onRejected, A);
      };
      function x(A, N, L) {
        s(function() {
          var v;
          try {
            v = N(L);
          } catch (k) {
            return f.reject(A, k);
          }
          v === A ? f.reject(A, new TypeError("Cannot resolve promise with itself")) : f.resolve(A, v);
        });
      }
      f.resolve = function(A, N) {
        var L = R(T, N);
        if (L.status === "error")
          return f.reject(A, L.value);
        var v = L.value;
        if (v)
          E(A, v);
        else {
          A.state = p, A.outcome = N;
          for (var k = -1, j = A.queue.length; ++k < j; )
            A.queue[k].callFulfilled(N);
        }
        return A;
      }, f.reject = function(A, N) {
        A.state = g, A.outcome = N;
        for (var L = -1, v = A.queue.length; ++L < v; )
          A.queue[L].callRejected(N);
        return A;
      };
      function T(A) {
        var N = A && A.then;
        if (A && (typeof A == "object" || typeof A == "function") && typeof N == "function")
          return function() {
            N.apply(A, arguments);
          };
      }
      function E(A, N) {
        var L = !1;
        function v(F) {
          L || (L = !0, f.reject(A, F));
        }
        function k(F) {
          L || (L = !0, f.resolve(A, F));
        }
        function j() {
          N(k, v);
        }
        var C = R(j);
        C.status === "error" && v(C.value);
      }
      function R(A, N) {
        var L = {};
        try {
          L.value = A(N), L.status = "success";
        } catch (v) {
          L.status = "error", L.value = v;
        }
        return L;
      }
      y.resolve = K;
      function K(A) {
        return A instanceof this ? A : f.resolve(new this(l), A);
      }
      y.reject = U;
      function U(A) {
        var N = new this(l);
        return f.reject(N, A);
      }
      y.all = oe;
      function oe(A) {
        var N = this;
        if (Object.prototype.toString.call(A) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var L = A.length, v = !1;
        if (!L)
          return this.resolve([]);
        for (var k = new Array(L), j = 0, C = -1, F = new this(l); ++C < L; )
          q(A[C], C);
        return F;
        function q(ce, ve) {
          N.resolve(ce).then(ke, function(Se) {
            v || (v = !0, f.reject(F, Se));
          });
          function ke(Se) {
            k[ve] = Se, ++j === L && !v && (v = !0, f.resolve(F, k));
          }
        }
      }
      y.race = J;
      function J(A) {
        var N = this;
        if (Object.prototype.toString.call(A) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var L = A.length, v = !1;
        if (!L)
          return this.resolve([]);
        for (var k = -1, j = new this(l); ++k < L; )
          C(A[k]);
        return j;
        function C(F) {
          N.resolve(F).then(function(q) {
            v || (v = !0, f.resolve(j, q));
          }, function(q) {
            v || (v = !0, f.reject(j, q));
          });
        }
      }
    }, { 1: 1 }], 3: [function(r, n, i) {
      (function(s) {
        typeof s.Promise != "function" && (s.Promise = r(2));
      }).call(this, typeof Ie < "u" ? Ie : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, { 2: 2 }], 4: [function(r, n, i) {
      var s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
        return typeof o;
      } : function(o) {
        return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
      };
      function l(o, u) {
        if (!(o instanceof u))
          throw new TypeError("Cannot call a class as a function");
      }
      function f() {
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
      var g = f();
      function p() {
        try {
          if (!g || !g.open)
            return !1;
          var o = typeof openDatabase < "u" && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform), u = typeof fetch == "function" && fetch.toString().indexOf("[native code") !== -1;
          return (!o || u) && typeof indexedDB < "u" && // some outdated implementations of IDB that appear on Samsung
          // and HTC Android devices <4.4 are missing IDBKeyRange
          // See: https://github.com/mozilla/localForage/issues/128
          // See: https://github.com/mozilla/localForage/issues/272
          typeof IDBKeyRange < "u";
        } catch {
          return !1;
        }
      }
      function I(o, u) {
        o = o || [], u = u || {};
        try {
          return new Blob(o, u);
        } catch (c) {
          if (c.name !== "TypeError")
            throw c;
          for (var a = typeof BlobBuilder < "u" ? BlobBuilder : typeof MSBlobBuilder < "u" ? MSBlobBuilder : typeof MozBlobBuilder < "u" ? MozBlobBuilder : WebKitBlobBuilder, d = new a(), m = 0; m < o.length; m += 1)
            d.append(o[m]);
          return d.getBlob(u.type);
        }
      }
      typeof Promise > "u" && r(3);
      var y = Promise;
      function O(o, u) {
        u && o.then(function(a) {
          u(null, a);
        }, function(a) {
          u(a);
        });
      }
      function x(o, u, a) {
        typeof u == "function" && o.then(u), typeof a == "function" && o.catch(a);
      }
      function T(o) {
        return typeof o != "string" && (console.warn(o + " used as a key, but it is not a string."), o = String(o)), o;
      }
      function E() {
        if (arguments.length && typeof arguments[arguments.length - 1] == "function")
          return arguments[arguments.length - 1];
      }
      var R = "local-forage-detect-blob-support", K = void 0, U = {}, oe = Object.prototype.toString, J = "readonly", A = "readwrite";
      function N(o) {
        for (var u = o.length, a = new ArrayBuffer(u), d = new Uint8Array(a), m = 0; m < u; m++)
          d[m] = o.charCodeAt(m);
        return a;
      }
      function L(o) {
        return new y(function(u) {
          var a = o.transaction(R, A), d = I([""]);
          a.objectStore(R).put(d, "key"), a.onabort = function(m) {
            m.preventDefault(), m.stopPropagation(), u(!1);
          }, a.oncomplete = function() {
            var m = navigator.userAgent.match(/Chrome\/(\d+)/), c = navigator.userAgent.match(/Edge\//);
            u(c || !m || parseInt(m[1], 10) >= 43);
          };
        }).catch(function() {
          return !1;
        });
      }
      function v(o) {
        return typeof K == "boolean" ? y.resolve(K) : L(o).then(function(u) {
          return K = u, K;
        });
      }
      function k(o) {
        var u = U[o.name], a = {};
        a.promise = new y(function(d, m) {
          a.resolve = d, a.reject = m;
        }), u.deferredOperations.push(a), u.dbReady ? u.dbReady = u.dbReady.then(function() {
          return a.promise;
        }) : u.dbReady = a.promise;
      }
      function j(o) {
        var u = U[o.name], a = u.deferredOperations.pop();
        if (a)
          return a.resolve(), a.promise;
      }
      function C(o, u) {
        var a = U[o.name], d = a.deferredOperations.pop();
        if (d)
          return d.reject(u), d.promise;
      }
      function F(o, u) {
        return new y(function(a, d) {
          if (U[o.name] = U[o.name] || jt(), o.db)
            if (u)
              k(o), o.db.close();
            else
              return a(o.db);
          var m = [o.name];
          u && m.push(o.version);
          var c = g.open.apply(g, m);
          u && (c.onupgradeneeded = function(b) {
            var w = c.result;
            try {
              w.createObjectStore(o.storeName), b.oldVersion <= 1 && w.createObjectStore(R);
            } catch (_) {
              if (_.name === "ConstraintError")
                console.warn('The database "' + o.name + '" has been upgraded from version ' + b.oldVersion + " to version " + b.newVersion + ', but the storage "' + o.storeName + '" already exists.');
              else
                throw _;
            }
          }), c.onerror = function(b) {
            b.preventDefault(), d(c.error);
          }, c.onsuccess = function() {
            var b = c.result;
            b.onversionchange = function(w) {
              w.target.close();
            }, a(b), j(o);
          };
        });
      }
      function q(o) {
        return F(o, !1);
      }
      function ce(o) {
        return F(o, !0);
      }
      function ve(o, u) {
        if (!o.db)
          return !0;
        var a = !o.db.objectStoreNames.contains(o.storeName), d = o.version < o.db.version, m = o.version > o.db.version;
        if (d && (o.version !== u && console.warn('The database "' + o.name + `" can't be downgraded from version ` + o.db.version + " to version " + o.version + "."), o.version = o.db.version), m || a) {
          if (a) {
            var c = o.db.version + 1;
            c > o.version && (o.version = c);
          }
          return !0;
        }
        return !1;
      }
      function ke(o) {
        return new y(function(u, a) {
          var d = new FileReader();
          d.onerror = a, d.onloadend = function(m) {
            var c = btoa(m.target.result || "");
            u({
              __local_forage_encoded_blob: !0,
              data: c,
              type: o.type
            });
          }, d.readAsBinaryString(o);
        });
      }
      function Se(o) {
        var u = N(atob(o.data));
        return I([u], { type: o.type });
      }
      function Ct(o) {
        return o && o.__local_forage_encoded_blob;
      }
      function oo(o) {
        var u = this, a = u._initReady().then(function() {
          var d = U[u._dbInfo.name];
          if (d && d.dbReady)
            return d.dbReady;
        });
        return x(a, o, o), a;
      }
      function io(o) {
        k(o);
        for (var u = U[o.name], a = u.forages, d = 0; d < a.length; d++) {
          var m = a[d];
          m._dbInfo.db && (m._dbInfo.db.close(), m._dbInfo.db = null);
        }
        return o.db = null, q(o).then(function(c) {
          return o.db = c, ve(o) ? ce(o) : c;
        }).then(function(c) {
          o.db = u.db = c;
          for (var b = 0; b < a.length; b++)
            a[b]._dbInfo.db = c;
        }).catch(function(c) {
          throw C(o, c), c;
        });
      }
      function fe(o, u, a, d) {
        d === void 0 && (d = 1);
        try {
          var m = o.db.transaction(o.storeName, u);
          a(null, m);
        } catch (c) {
          if (d > 0 && (!o.db || c.name === "InvalidStateError" || c.name === "NotFoundError"))
            return y.resolve().then(function() {
              if (!o.db || c.name === "NotFoundError" && !o.db.objectStoreNames.contains(o.storeName) && o.version <= o.db.version)
                return o.db && (o.version = o.db.version + 1), ce(o);
            }).then(function() {
              return io(o).then(function() {
                fe(o, u, a, d - 1);
              });
            }).catch(a);
          a(c);
        }
      }
      function jt() {
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
      function ao(o) {
        var u = this, a = {
          db: null
        };
        if (o)
          for (var d in o)
            a[d] = o[d];
        var m = U[a.name];
        m || (m = jt(), U[a.name] = m), m.forages.push(u), u._initReady || (u._initReady = u.ready, u.ready = oo);
        var c = [];
        function b() {
          return y.resolve();
        }
        for (var w = 0; w < m.forages.length; w++) {
          var _ = m.forages[w];
          _ !== u && c.push(_._initReady().catch(b));
        }
        var S = m.forages.slice(0);
        return y.all(c).then(function() {
          return a.db = m.db, q(a);
        }).then(function($) {
          return a.db = $, ve(a, u._defaultConfig.version) ? ce(a) : $;
        }).then(function($) {
          a.db = m.db = $, u._dbInfo = a;
          for (var P = 0; P < S.length; P++) {
            var B = S[P];
            B !== u && (B._dbInfo.db = a.db, B._dbInfo.version = a.version);
          }
        });
      }
      function so(o, u) {
        var a = this;
        o = T(o);
        var d = new y(function(m, c) {
          a.ready().then(function() {
            fe(a._dbInfo, J, function(b, w) {
              if (b)
                return c(b);
              try {
                var _ = w.objectStore(a._dbInfo.storeName), S = _.get(o);
                S.onsuccess = function() {
                  var $ = S.result;
                  $ === void 0 && ($ = null), Ct($) && ($ = Se($)), m($);
                }, S.onerror = function() {
                  c(S.error);
                };
              } catch ($) {
                c($);
              }
            });
          }).catch(c);
        });
        return O(d, u), d;
      }
      function uo(o, u) {
        var a = this, d = new y(function(m, c) {
          a.ready().then(function() {
            fe(a._dbInfo, J, function(b, w) {
              if (b)
                return c(b);
              try {
                var _ = w.objectStore(a._dbInfo.storeName), S = _.openCursor(), $ = 1;
                S.onsuccess = function() {
                  var P = S.result;
                  if (P) {
                    var B = P.value;
                    Ct(B) && (B = Se(B));
                    var M = o(B, P.key, $++);
                    M !== void 0 ? m(M) : P.continue();
                  } else
                    m();
                }, S.onerror = function() {
                  c(S.error);
                };
              } catch (P) {
                c(P);
              }
            });
          }).catch(c);
        });
        return O(d, u), d;
      }
      function fo(o, u, a) {
        var d = this;
        o = T(o);
        var m = new y(function(c, b) {
          var w;
          d.ready().then(function() {
            return w = d._dbInfo, oe.call(u) === "[object Blob]" ? v(w.db).then(function(_) {
              return _ ? u : ke(u);
            }) : u;
          }).then(function(_) {
            fe(d._dbInfo, A, function(S, $) {
              if (S)
                return b(S);
              try {
                var P = $.objectStore(d._dbInfo.storeName);
                _ === null && (_ = void 0);
                var B = P.put(_, o);
                $.oncomplete = function() {
                  _ === void 0 && (_ = null), c(_);
                }, $.onabort = $.onerror = function() {
                  var M = B.error ? B.error : B.transaction.error;
                  b(M);
                };
              } catch (M) {
                b(M);
              }
            });
          }).catch(b);
        });
        return O(m, a), m;
      }
      function lo(o, u) {
        var a = this;
        o = T(o);
        var d = new y(function(m, c) {
          a.ready().then(function() {
            fe(a._dbInfo, A, function(b, w) {
              if (b)
                return c(b);
              try {
                var _ = w.objectStore(a._dbInfo.storeName), S = _.delete(o);
                w.oncomplete = function() {
                  m();
                }, w.onerror = function() {
                  c(S.error);
                }, w.onabort = function() {
                  var $ = S.error ? S.error : S.transaction.error;
                  c($);
                };
              } catch ($) {
                c($);
              }
            });
          }).catch(c);
        });
        return O(d, u), d;
      }
      function co(o) {
        var u = this, a = new y(function(d, m) {
          u.ready().then(function() {
            fe(u._dbInfo, A, function(c, b) {
              if (c)
                return m(c);
              try {
                var w = b.objectStore(u._dbInfo.storeName), _ = w.clear();
                b.oncomplete = function() {
                  d();
                }, b.onabort = b.onerror = function() {
                  var S = _.error ? _.error : _.transaction.error;
                  m(S);
                };
              } catch (S) {
                m(S);
              }
            });
          }).catch(m);
        });
        return O(a, o), a;
      }
      function ho(o) {
        var u = this, a = new y(function(d, m) {
          u.ready().then(function() {
            fe(u._dbInfo, J, function(c, b) {
              if (c)
                return m(c);
              try {
                var w = b.objectStore(u._dbInfo.storeName), _ = w.count();
                _.onsuccess = function() {
                  d(_.result);
                }, _.onerror = function() {
                  m(_.error);
                };
              } catch (S) {
                m(S);
              }
            });
          }).catch(m);
        });
        return O(a, o), a;
      }
      function mo(o, u) {
        var a = this, d = new y(function(m, c) {
          if (o < 0) {
            m(null);
            return;
          }
          a.ready().then(function() {
            fe(a._dbInfo, J, function(b, w) {
              if (b)
                return c(b);
              try {
                var _ = w.objectStore(a._dbInfo.storeName), S = !1, $ = _.openKeyCursor();
                $.onsuccess = function() {
                  var P = $.result;
                  if (!P) {
                    m(null);
                    return;
                  }
                  o === 0 || S ? m(P.key) : (S = !0, P.advance(o));
                }, $.onerror = function() {
                  c($.error);
                };
              } catch (P) {
                c(P);
              }
            });
          }).catch(c);
        });
        return O(d, u), d;
      }
      function po(o) {
        var u = this, a = new y(function(d, m) {
          u.ready().then(function() {
            fe(u._dbInfo, J, function(c, b) {
              if (c)
                return m(c);
              try {
                var w = b.objectStore(u._dbInfo.storeName), _ = w.openKeyCursor(), S = [];
                _.onsuccess = function() {
                  var $ = _.result;
                  if (!$) {
                    d(S);
                    return;
                  }
                  S.push($.key), $.continue();
                }, _.onerror = function() {
                  m(_.error);
                };
              } catch ($) {
                m($);
              }
            });
          }).catch(m);
        });
        return O(a, o), a;
      }
      function yo(o, u) {
        u = E.apply(this, arguments);
        var a = this.config();
        o = typeof o != "function" && o || {}, o.name || (o.name = o.name || a.name, o.storeName = o.storeName || a.storeName);
        var d = this, m;
        if (!o.name)
          m = y.reject("Invalid arguments");
        else {
          var c = o.name === a.name && d._dbInfo.db, b = c ? y.resolve(d._dbInfo.db) : q(o).then(function(w) {
            var _ = U[o.name], S = _.forages;
            _.db = w;
            for (var $ = 0; $ < S.length; $++)
              S[$]._dbInfo.db = w;
            return w;
          });
          o.storeName ? m = b.then(function(w) {
            if (w.objectStoreNames.contains(o.storeName)) {
              var _ = w.version + 1;
              k(o);
              var S = U[o.name], $ = S.forages;
              w.close();
              for (var P = 0; P < $.length; P++) {
                var B = $[P];
                B._dbInfo.db = null, B._dbInfo.version = _;
              }
              var M = new y(function(z, X) {
                var V = g.open(o.name, _);
                V.onerror = function(te) {
                  var Re = V.result;
                  Re.close(), X(te);
                }, V.onupgradeneeded = function() {
                  var te = V.result;
                  te.deleteObjectStore(o.storeName);
                }, V.onsuccess = function() {
                  var te = V.result;
                  te.close(), z(te);
                };
              });
              return M.then(function(z) {
                S.db = z;
                for (var X = 0; X < $.length; X++) {
                  var V = $[X];
                  V._dbInfo.db = z, j(V._dbInfo);
                }
              }).catch(function(z) {
                throw (C(o, z) || y.resolve()).catch(function() {
                }), z;
              });
            }
          }) : m = b.then(function(w) {
            k(o);
            var _ = U[o.name], S = _.forages;
            w.close();
            for (var $ = 0; $ < S.length; $++) {
              var P = S[$];
              P._dbInfo.db = null;
            }
            var B = new y(function(M, z) {
              var X = g.deleteDatabase(o.name);
              X.onerror = function() {
                var V = X.result;
                V && V.close(), z(X.error);
              }, X.onblocked = function() {
                console.warn('dropInstance blocked for database "' + o.name + '" until all open connections are closed');
              }, X.onsuccess = function() {
                var V = X.result;
                V && V.close(), M(V);
              };
            });
            return B.then(function(M) {
              _.db = M;
              for (var z = 0; z < S.length; z++) {
                var X = S[z];
                j(X._dbInfo);
              }
            }).catch(function(M) {
              throw (C(o, M) || y.resolve()).catch(function() {
              }), M;
            });
          });
        }
        return O(m, u), m;
      }
      var go = {
        _driver: "asyncStorage",
        _initStorage: ao,
        _support: p(),
        iterate: uo,
        getItem: so,
        setItem: fo,
        removeItem: lo,
        clear: co,
        length: ho,
        key: mo,
        keys: po,
        dropInstance: yo
      };
      function vo() {
        return typeof openDatabase == "function";
      }
      var de = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bo = "~~local_forage_type~", Ft = /^~~local_forage_type~([^~]+)~/, qe = "__lfsc__:", nt = qe.length, ot = "arbf", it = "blob", Mt = "si08", Ut = "ui08", zt = "uic8", Ht = "si16", Yt = "si32", qt = "ur16", Wt = "ui32", Kt = "fl32", Vt = "fl64", Xt = nt + ot.length, Gt = Object.prototype.toString;
      function Jt(o) {
        var u = o.length * 0.75, a = o.length, d, m = 0, c, b, w, _;
        o[o.length - 1] === "=" && (u--, o[o.length - 2] === "=" && u--);
        var S = new ArrayBuffer(u), $ = new Uint8Array(S);
        for (d = 0; d < a; d += 4)
          c = de.indexOf(o[d]), b = de.indexOf(o[d + 1]), w = de.indexOf(o[d + 2]), _ = de.indexOf(o[d + 3]), $[m++] = c << 2 | b >> 4, $[m++] = (b & 15) << 4 | w >> 2, $[m++] = (w & 3) << 6 | _ & 63;
        return S;
      }
      function at(o) {
        var u = new Uint8Array(o), a = "", d;
        for (d = 0; d < u.length; d += 3)
          a += de[u[d] >> 2], a += de[(u[d] & 3) << 4 | u[d + 1] >> 4], a += de[(u[d + 1] & 15) << 2 | u[d + 2] >> 6], a += de[u[d + 2] & 63];
        return u.length % 3 === 2 ? a = a.substring(0, a.length - 1) + "=" : u.length % 3 === 1 && (a = a.substring(0, a.length - 2) + "=="), a;
      }
      function wo(o, u) {
        var a = "";
        if (o && (a = Gt.call(o)), o && (a === "[object ArrayBuffer]" || o.buffer && Gt.call(o.buffer) === "[object ArrayBuffer]")) {
          var d, m = qe;
          o instanceof ArrayBuffer ? (d = o, m += ot) : (d = o.buffer, a === "[object Int8Array]" ? m += Mt : a === "[object Uint8Array]" ? m += Ut : a === "[object Uint8ClampedArray]" ? m += zt : a === "[object Int16Array]" ? m += Ht : a === "[object Uint16Array]" ? m += qt : a === "[object Int32Array]" ? m += Yt : a === "[object Uint32Array]" ? m += Wt : a === "[object Float32Array]" ? m += Kt : a === "[object Float64Array]" ? m += Vt : u(new Error("Failed to get type for BinaryArray"))), u(m + at(d));
        } else if (a === "[object Blob]") {
          var c = new FileReader();
          c.onload = function() {
            var b = bo + o.type + "~" + at(this.result);
            u(qe + it + b);
          }, c.readAsArrayBuffer(o);
        } else
          try {
            u(JSON.stringify(o));
          } catch (b) {
            console.error("Couldn't convert value into a JSON string: ", o), u(null, b);
          }
      }
      function _o(o) {
        if (o.substring(0, nt) !== qe)
          return JSON.parse(o);
        var u = o.substring(Xt), a = o.substring(nt, Xt), d;
        if (a === it && Ft.test(u)) {
          var m = u.match(Ft);
          d = m[1], u = u.substring(m[0].length);
        }
        var c = Jt(u);
        switch (a) {
          case ot:
            return c;
          case it:
            return I([c], { type: d });
          case Mt:
            return new Int8Array(c);
          case Ut:
            return new Uint8Array(c);
          case zt:
            return new Uint8ClampedArray(c);
          case Ht:
            return new Int16Array(c);
          case qt:
            return new Uint16Array(c);
          case Yt:
            return new Int32Array(c);
          case Wt:
            return new Uint32Array(c);
          case Kt:
            return new Float32Array(c);
          case Vt:
            return new Float64Array(c);
          default:
            throw new Error("Unkown type: " + a);
        }
      }
      var st = {
        serialize: wo,
        deserialize: _o,
        stringToBuffer: Jt,
        bufferToString: at
      };
      function Qt(o, u, a, d) {
        o.executeSql("CREATE TABLE IF NOT EXISTS " + u.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], a, d);
      }
      function So(o) {
        var u = this, a = {
          db: null
        };
        if (o)
          for (var d in o)
            a[d] = typeof o[d] != "string" ? o[d].toString() : o[d];
        var m = new y(function(c, b) {
          try {
            a.db = openDatabase(a.name, String(a.version), a.description, a.size);
          } catch (w) {
            return b(w);
          }
          a.db.transaction(function(w) {
            Qt(w, a, function() {
              u._dbInfo = a, c();
            }, function(_, S) {
              b(S);
            });
          }, b);
        });
        return a.serializer = st, m;
      }
      function he(o, u, a, d, m, c) {
        o.executeSql(a, d, m, function(b, w) {
          w.code === w.SYNTAX_ERR ? b.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [u.storeName], function(_, S) {
            S.rows.length ? c(_, w) : Qt(_, u, function() {
              _.executeSql(a, d, m, c);
            }, c);
          }, c) : c(b, w);
        }, c);
      }
      function Oo(o, u) {
        var a = this;
        o = T(o);
        var d = new y(function(m, c) {
          a.ready().then(function() {
            var b = a._dbInfo;
            b.db.transaction(function(w) {
              he(w, b, "SELECT * FROM " + b.storeName + " WHERE key = ? LIMIT 1", [o], function(_, S) {
                var $ = S.rows.length ? S.rows.item(0).value : null;
                $ && ($ = b.serializer.deserialize($)), m($);
              }, function(_, S) {
                c(S);
              });
            });
          }).catch(c);
        });
        return O(d, u), d;
      }
      function $o(o, u) {
        var a = this, d = new y(function(m, c) {
          a.ready().then(function() {
            var b = a._dbInfo;
            b.db.transaction(function(w) {
              he(w, b, "SELECT * FROM " + b.storeName, [], function(_, S) {
                for (var $ = S.rows, P = $.length, B = 0; B < P; B++) {
                  var M = $.item(B), z = M.value;
                  if (z && (z = b.serializer.deserialize(z)), z = o(z, M.key, B + 1), z !== void 0) {
                    m(z);
                    return;
                  }
                }
                m();
              }, function(_, S) {
                c(S);
              });
            });
          }).catch(c);
        });
        return O(d, u), d;
      }
      function Zt(o, u, a, d) {
        var m = this;
        o = T(o);
        var c = new y(function(b, w) {
          m.ready().then(function() {
            u === void 0 && (u = null);
            var _ = u, S = m._dbInfo;
            S.serializer.serialize(u, function($, P) {
              P ? w(P) : S.db.transaction(function(B) {
                he(B, S, "INSERT OR REPLACE INTO " + S.storeName + " (key, value) VALUES (?, ?)", [o, $], function() {
                  b(_);
                }, function(M, z) {
                  w(z);
                });
              }, function(B) {
                if (B.code === B.QUOTA_ERR) {
                  if (d > 0) {
                    b(Zt.apply(m, [o, _, a, d - 1]));
                    return;
                  }
                  w(B);
                }
              });
            });
          }).catch(w);
        });
        return O(c, a), c;
      }
      function xo(o, u, a) {
        return Zt.apply(this, [o, u, a, 1]);
      }
      function Ao(o, u) {
        var a = this;
        o = T(o);
        var d = new y(function(m, c) {
          a.ready().then(function() {
            var b = a._dbInfo;
            b.db.transaction(function(w) {
              he(w, b, "DELETE FROM " + b.storeName + " WHERE key = ?", [o], function() {
                m();
              }, function(_, S) {
                c(S);
              });
            });
          }).catch(c);
        });
        return O(d, u), d;
      }
      function Eo(o) {
        var u = this, a = new y(function(d, m) {
          u.ready().then(function() {
            var c = u._dbInfo;
            c.db.transaction(function(b) {
              he(b, c, "DELETE FROM " + c.storeName, [], function() {
                d();
              }, function(w, _) {
                m(_);
              });
            });
          }).catch(m);
        });
        return O(a, o), a;
      }
      function Io(o) {
        var u = this, a = new y(function(d, m) {
          u.ready().then(function() {
            var c = u._dbInfo;
            c.db.transaction(function(b) {
              he(b, c, "SELECT COUNT(key) as c FROM " + c.storeName, [], function(w, _) {
                var S = _.rows.item(0).c;
                d(S);
              }, function(w, _) {
                m(_);
              });
            });
          }).catch(m);
        });
        return O(a, o), a;
      }
      function To(o, u) {
        var a = this, d = new y(function(m, c) {
          a.ready().then(function() {
            var b = a._dbInfo;
            b.db.transaction(function(w) {
              he(w, b, "SELECT key FROM " + b.storeName + " WHERE id = ? LIMIT 1", [o + 1], function(_, S) {
                var $ = S.rows.length ? S.rows.item(0).key : null;
                m($);
              }, function(_, S) {
                c(S);
              });
            });
          }).catch(c);
        });
        return O(d, u), d;
      }
      function Lo(o) {
        var u = this, a = new y(function(d, m) {
          u.ready().then(function() {
            var c = u._dbInfo;
            c.db.transaction(function(b) {
              he(b, c, "SELECT key FROM " + c.storeName, [], function(w, _) {
                for (var S = [], $ = 0; $ < _.rows.length; $++)
                  S.push(_.rows.item($).key);
                d(S);
              }, function(w, _) {
                m(_);
              });
            });
          }).catch(m);
        });
        return O(a, o), a;
      }
      function Po(o) {
        return new y(function(u, a) {
          o.transaction(function(d) {
            d.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(m, c) {
              for (var b = [], w = 0; w < c.rows.length; w++)
                b.push(c.rows.item(w).name);
              u({
                db: o,
                storeNames: b
              });
            }, function(m, c) {
              a(c);
            });
          }, function(d) {
            a(d);
          });
        });
      }
      function ko(o, u) {
        u = E.apply(this, arguments);
        var a = this.config();
        o = typeof o != "function" && o || {}, o.name || (o.name = o.name || a.name, o.storeName = o.storeName || a.storeName);
        var d = this, m;
        return o.name ? m = new y(function(c) {
          var b;
          o.name === a.name ? b = d._dbInfo.db : b = openDatabase(o.name, "", "", 0), o.storeName ? c({
            db: b,
            storeNames: [o.storeName]
          }) : c(Po(b));
        }).then(function(c) {
          return new y(function(b, w) {
            c.db.transaction(function(_) {
              function S(M) {
                return new y(function(z, X) {
                  _.executeSql("DROP TABLE IF EXISTS " + M, [], function() {
                    z();
                  }, function(V, te) {
                    X(te);
                  });
                });
              }
              for (var $ = [], P = 0, B = c.storeNames.length; P < B; P++)
                $.push(S(c.storeNames[P]));
              y.all($).then(function() {
                b();
              }).catch(function(M) {
                w(M);
              });
            }, function(_) {
              w(_);
            });
          });
        }) : m = y.reject("Invalid arguments"), O(m, u), m;
      }
      var No = {
        _driver: "webSQLStorage",
        _initStorage: So,
        _support: vo(),
        iterate: $o,
        getItem: Oo,
        setItem: xo,
        removeItem: Ao,
        clear: Eo,
        length: Io,
        key: To,
        keys: Lo,
        dropInstance: ko
      };
      function Ro() {
        try {
          return typeof localStorage < "u" && "setItem" in localStorage && // in IE8 typeof localStorage.setItem === 'object'
          !!localStorage.setItem;
        } catch {
          return !1;
        }
      }
      function er(o, u) {
        var a = o.name + "/";
        return o.storeName !== u.storeName && (a += o.storeName + "/"), a;
      }
      function Do() {
        var o = "_localforage_support_test";
        try {
          return localStorage.setItem(o, !0), localStorage.removeItem(o), !1;
        } catch {
          return !0;
        }
      }
      function Bo() {
        return !Do() || localStorage.length > 0;
      }
      function Co(o) {
        var u = this, a = {};
        if (o)
          for (var d in o)
            a[d] = o[d];
        return a.keyPrefix = er(o, u._defaultConfig), Bo() ? (u._dbInfo = a, a.serializer = st, y.resolve()) : y.reject();
      }
      function jo(o) {
        var u = this, a = u.ready().then(function() {
          for (var d = u._dbInfo.keyPrefix, m = localStorage.length - 1; m >= 0; m--) {
            var c = localStorage.key(m);
            c.indexOf(d) === 0 && localStorage.removeItem(c);
          }
        });
        return O(a, o), a;
      }
      function Fo(o, u) {
        var a = this;
        o = T(o);
        var d = a.ready().then(function() {
          var m = a._dbInfo, c = localStorage.getItem(m.keyPrefix + o);
          return c && (c = m.serializer.deserialize(c)), c;
        });
        return O(d, u), d;
      }
      function Mo(o, u) {
        var a = this, d = a.ready().then(function() {
          for (var m = a._dbInfo, c = m.keyPrefix, b = c.length, w = localStorage.length, _ = 1, S = 0; S < w; S++) {
            var $ = localStorage.key(S);
            if ($.indexOf(c) === 0) {
              var P = localStorage.getItem($);
              if (P && (P = m.serializer.deserialize(P)), P = o(P, $.substring(b), _++), P !== void 0)
                return P;
            }
          }
        });
        return O(d, u), d;
      }
      function Uo(o, u) {
        var a = this, d = a.ready().then(function() {
          var m = a._dbInfo, c;
          try {
            c = localStorage.key(o);
          } catch {
            c = null;
          }
          return c && (c = c.substring(m.keyPrefix.length)), c;
        });
        return O(d, u), d;
      }
      function zo(o) {
        var u = this, a = u.ready().then(function() {
          for (var d = u._dbInfo, m = localStorage.length, c = [], b = 0; b < m; b++) {
            var w = localStorage.key(b);
            w.indexOf(d.keyPrefix) === 0 && c.push(w.substring(d.keyPrefix.length));
          }
          return c;
        });
        return O(a, o), a;
      }
      function Ho(o) {
        var u = this, a = u.keys().then(function(d) {
          return d.length;
        });
        return O(a, o), a;
      }
      function Yo(o, u) {
        var a = this;
        o = T(o);
        var d = a.ready().then(function() {
          var m = a._dbInfo;
          localStorage.removeItem(m.keyPrefix + o);
        });
        return O(d, u), d;
      }
      function qo(o, u, a) {
        var d = this;
        o = T(o);
        var m = d.ready().then(function() {
          u === void 0 && (u = null);
          var c = u;
          return new y(function(b, w) {
            var _ = d._dbInfo;
            _.serializer.serialize(u, function(S, $) {
              if ($)
                w($);
              else
                try {
                  localStorage.setItem(_.keyPrefix + o, S), b(c);
                } catch (P) {
                  (P.name === "QuotaExceededError" || P.name === "NS_ERROR_DOM_QUOTA_REACHED") && w(P), w(P);
                }
            });
          });
        });
        return O(m, a), m;
      }
      function Wo(o, u) {
        if (u = E.apply(this, arguments), o = typeof o != "function" && o || {}, !o.name) {
          var a = this.config();
          o.name = o.name || a.name, o.storeName = o.storeName || a.storeName;
        }
        var d = this, m;
        return o.name ? m = new y(function(c) {
          o.storeName ? c(er(o, d._defaultConfig)) : c(o.name + "/");
        }).then(function(c) {
          for (var b = localStorage.length - 1; b >= 0; b--) {
            var w = localStorage.key(b);
            w.indexOf(c) === 0 && localStorage.removeItem(w);
          }
        }) : m = y.reject("Invalid arguments"), O(m, u), m;
      }
      var Ko = {
        _driver: "localStorageWrapper",
        _initStorage: Co,
        _support: Ro(),
        iterate: Mo,
        getItem: Fo,
        setItem: qo,
        removeItem: Yo,
        clear: jo,
        length: Ho,
        key: Uo,
        keys: zo,
        dropInstance: Wo
      }, Vo = function(u, a) {
        return u === a || typeof u == "number" && typeof a == "number" && isNaN(u) && isNaN(a);
      }, Xo = function(u, a) {
        for (var d = u.length, m = 0; m < d; ) {
          if (Vo(u[m], a))
            return !0;
          m++;
        }
        return !1;
      }, tr = Array.isArray || function(o) {
        return Object.prototype.toString.call(o) === "[object Array]";
      }, Ne = {}, rr = {}, Oe = {
        INDEXEDDB: go,
        WEBSQL: No,
        LOCALSTORAGE: Ko
      }, Go = [Oe.INDEXEDDB._driver, Oe.WEBSQL._driver, Oe.LOCALSTORAGE._driver], We = ["dropInstance"], ut = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(We), Jo = {
        description: "",
        driver: Go.slice(),
        name: "localforage",
        // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
        // we can use without a prompt.
        size: 4980736,
        storeName: "keyvaluepairs",
        version: 1
      };
      function Qo(o, u) {
        o[u] = function() {
          var a = arguments;
          return o.ready().then(function() {
            return o[u].apply(o, a);
          });
        };
      }
      function ft() {
        for (var o = 1; o < arguments.length; o++) {
          var u = arguments[o];
          if (u)
            for (var a in u)
              u.hasOwnProperty(a) && (tr(u[a]) ? arguments[0][a] = u[a].slice() : arguments[0][a] = u[a]);
        }
        return arguments[0];
      }
      var Zo = function() {
        function o(u) {
          l(this, o);
          for (var a in Oe)
            if (Oe.hasOwnProperty(a)) {
              var d = Oe[a], m = d._driver;
              this[a] = m, Ne[m] || this.defineDriver(d);
            }
          this._defaultConfig = ft({}, Jo), this._config = ft({}, this._defaultConfig, u), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch(function() {
          });
        }
        return o.prototype.config = function(a) {
          if ((typeof a > "u" ? "undefined" : s(a)) === "object") {
            if (this._ready)
              return new Error("Can't call config() after localforage has been used.");
            for (var d in a) {
              if (d === "storeName" && (a[d] = a[d].replace(/\W/g, "_")), d === "version" && typeof a[d] != "number")
                return new Error("Database version must be a number.");
              this._config[d] = a[d];
            }
            return "driver" in a && a.driver ? this.setDriver(this._config.driver) : !0;
          } else
            return typeof a == "string" ? this._config[a] : this._config;
        }, o.prototype.defineDriver = function(a, d, m) {
          var c = new y(function(b, w) {
            try {
              var _ = a._driver, S = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
              if (!a._driver) {
                w(S);
                return;
              }
              for (var $ = ut.concat("_initStorage"), P = 0, B = $.length; P < B; P++) {
                var M = $[P], z = !Xo(We, M);
                if ((z || a[M]) && typeof a[M] != "function") {
                  w(S);
                  return;
                }
              }
              var X = function() {
                for (var Re = function(ri) {
                  return function() {
                    var ni = new Error("Method " + ri + " is not implemented by the current driver"), nr = y.reject(ni);
                    return O(nr, arguments[arguments.length - 1]), nr;
                  };
                }, lt = 0, ti = We.length; lt < ti; lt++) {
                  var ct = We[lt];
                  a[ct] || (a[ct] = Re(ct));
                }
              };
              X();
              var V = function(Re) {
                Ne[_] && console.info("Redefining LocalForage driver: " + _), Ne[_] = a, rr[_] = Re, b();
              };
              "_support" in a ? a._support && typeof a._support == "function" ? a._support().then(V, w) : V(!!a._support) : V(!0);
            } catch (te) {
              w(te);
            }
          });
          return x(c, d, m), c;
        }, o.prototype.driver = function() {
          return this._driver || null;
        }, o.prototype.getDriver = function(a, d, m) {
          var c = Ne[a] ? y.resolve(Ne[a]) : y.reject(new Error("Driver not found."));
          return x(c, d, m), c;
        }, o.prototype.getSerializer = function(a) {
          var d = y.resolve(st);
          return x(d, a), d;
        }, o.prototype.ready = function(a) {
          var d = this, m = d._driverSet.then(function() {
            return d._ready === null && (d._ready = d._initDriver()), d._ready;
          });
          return x(m, a, a), m;
        }, o.prototype.setDriver = function(a, d, m) {
          var c = this;
          tr(a) || (a = [a]);
          var b = this._getSupportedDrivers(a);
          function w() {
            c._config.driver = c.driver();
          }
          function _(P) {
            return c._extend(P), w(), c._ready = c._initStorage(c._config), c._ready;
          }
          function S(P) {
            return function() {
              var B = 0;
              function M() {
                for (; B < P.length; ) {
                  var z = P[B];
                  return B++, c._dbInfo = null, c._ready = null, c.getDriver(z).then(_).catch(M);
                }
                w();
                var X = new Error("No available storage method found.");
                return c._driverSet = y.reject(X), c._driverSet;
              }
              return M();
            };
          }
          var $ = this._driverSet !== null ? this._driverSet.catch(function() {
            return y.resolve();
          }) : y.resolve();
          return this._driverSet = $.then(function() {
            var P = b[0];
            return c._dbInfo = null, c._ready = null, c.getDriver(P).then(function(B) {
              c._driver = B._driver, w(), c._wrapLibraryMethodsWithReady(), c._initDriver = S(b);
            });
          }).catch(function() {
            w();
            var P = new Error("No available storage method found.");
            return c._driverSet = y.reject(P), c._driverSet;
          }), x(this._driverSet, d, m), this._driverSet;
        }, o.prototype.supports = function(a) {
          return !!rr[a];
        }, o.prototype._extend = function(a) {
          ft(this, a);
        }, o.prototype._getSupportedDrivers = function(a) {
          for (var d = [], m = 0, c = a.length; m < c; m++) {
            var b = a[m];
            this.supports(b) && d.push(b);
          }
          return d;
        }, o.prototype._wrapLibraryMethodsWithReady = function() {
          for (var a = 0, d = ut.length; a < d; a++)
            Qo(this, ut[a]);
        }, o.prototype.createInstance = function(a) {
          return new o(a);
        }, o;
      }(), ei = new Zo();
      n.exports = ei;
    }, { 3: 3 }] }, {}, [4])(4);
  });
})(on);
var Ni = on.exports;
const Ri = /* @__PURE__ */ ki(Ni), xe = [];
function Di(e, t) {
  return {
    subscribe: an(e, t).subscribe
  };
}
function an(e, t = ue) {
  let r;
  const n = /* @__PURE__ */ new Set();
  function i(f) {
    if (tn(e, f) && (e = f, r)) {
      const g = !xe.length;
      for (const p of n)
        p[1](), xe.push(p, e);
      if (g) {
        for (let p = 0; p < xe.length; p += 2)
          xe[p][0](xe[p + 1]);
        xe.length = 0;
      }
    }
  }
  function s(f) {
    i(f(e));
  }
  function l(f, g = ue) {
    const p = [f, g];
    return n.add(p), n.size === 1 && (r = t(i, s) || ue), f(e), () => {
      n.delete(p), n.size === 0 && r && (r(), r = null);
    };
  }
  return { set: i, update: s, subscribe: l };
}
Ri.config({
  name: "SNS HPC AI Assitant"
});
const be = {
  Unknown: { slug: "unknown", description: "Checking the AI server status...", icon: "⏳" },
  Error: { slug: "error", description: "The AI server is currently unavailable", icon: "🔴" },
  OK: { slug: "ok", description: "The AI server is fully functional", icon: "🟢" },
  Running: { slug: "running", description: "The AI server is working to answer", icon: "🔵" },
  Degraded: { slug: "degraded", description: "The AI server is currently degraded", icon: "🟡" }
};
class Bi {
  constructor(t) {
    this.baseURL = t, this.status = an(be.Unknown);
  }
  // list available models on the backend
  async getBestModel(t, r) {
    r = r || {};
    try {
      const n = await fetch(`${this.baseURL}/api/tags`, { method: "GET", ...r });
      if (n.status === 200) {
        const s = (await n.json()).models.map((l) => l.model);
        for (const l of t)
          if (s.includes(l.model))
            return this.status.set(l.premium ? be.OK : be.Degraded), l.model;
      }
    } catch (n) {
      console.error(n);
    }
    this.status.set(be.Error);
  }
  // perform an empty model request to preload it
  async preloadModel(t, r) {
    r = r || {};
    try {
      if ((await fetch(`${this.baseURL}/api/generate`, {
        method: "POST",
        body: JSON.stringify({ model: t }),
        ...r
      })).status === 200)
        return null;
    } catch (n) {
      console.error(n);
    }
    this.status.set(be.Error);
  }
  async chat(t, r) {
    r = r || {};
    const n = si(this.status);
    try {
      this.status.set(be.Running);
      const i = await fetch(`${this.baseURL}/api/chat`, {
        method: "POST",
        body: JSON.stringify(t),
        ...r
      });
      if (i.status === 200)
        return this.status.set(n), await i.json();
    } catch (i) {
      console.error(i);
    }
    this.status.set(be.Error);
  }
}
var ye = {}, Y = {}, Z = {};
Object.defineProperty(Z, "__esModule", { value: !0 });
Z.output = Z.exists = Z.hash = Z.bytes = Z.bool = Z.number = void 0;
function Qe(e) {
  if (!Number.isSafeInteger(e) || e < 0)
    throw new Error(`Wrong positive integer: ${e}`);
}
Z.number = Qe;
function sn(e) {
  if (typeof e != "boolean")
    throw new Error(`Expected boolean, not ${e}`);
}
Z.bool = sn;
function Ci(e) {
  return e instanceof Uint8Array || e != null && typeof e == "object" && e.constructor.name === "Uint8Array";
}
function Nt(e, ...t) {
  if (!Ci(e))
    throw new Error("Expected Uint8Array");
  if (t.length > 0 && !t.includes(e.length))
    throw new Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`);
}
Z.bytes = Nt;
function un(e) {
  if (typeof e != "function" || typeof e.create != "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  Qe(e.outputLen), Qe(e.blockLen);
}
Z.hash = un;
function fn(e, t = !0) {
  if (e.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (t && e.finished)
    throw new Error("Hash#digest() has already been called");
}
Z.exists = fn;
function ln(e, t) {
  Nt(e);
  const r = t.outputLen;
  if (e.length < r)
    throw new Error(`digestInto() expects output buffer of length at least ${r}`);
}
Z.output = ln;
const ji = { number: Qe, bool: sn, bytes: Nt, hash: un, exists: fn, output: ln };
Z.default = ji;
var D = {};
Object.defineProperty(D, "__esModule", { value: !0 });
D.add5L = D.add5H = D.add4H = D.add4L = D.add3H = D.add3L = D.add = D.rotlBL = D.rotlBH = D.rotlSL = D.rotlSH = D.rotr32L = D.rotr32H = D.rotrBL = D.rotrBH = D.rotrSL = D.rotrSH = D.shrSL = D.shrSH = D.toBig = D.split = D.fromBig = void 0;
const Ve = /* @__PURE__ */ BigInt(2 ** 32 - 1), gt = /* @__PURE__ */ BigInt(32);
function Rt(e, t = !1) {
  return t ? { h: Number(e & Ve), l: Number(e >> gt & Ve) } : { h: Number(e >> gt & Ve) | 0, l: Number(e & Ve) | 0 };
}
D.fromBig = Rt;
function cn(e, t = !1) {
  let r = new Uint32Array(e.length), n = new Uint32Array(e.length);
  for (let i = 0; i < e.length; i++) {
    const { h: s, l } = Rt(e[i], t);
    [r[i], n[i]] = [s, l];
  }
  return [r, n];
}
D.split = cn;
const dn = (e, t) => BigInt(e >>> 0) << gt | BigInt(t >>> 0);
D.toBig = dn;
const hn = (e, t, r) => e >>> r;
D.shrSH = hn;
const mn = (e, t, r) => e << 32 - r | t >>> r;
D.shrSL = mn;
const pn = (e, t, r) => e >>> r | t << 32 - r;
D.rotrSH = pn;
const yn = (e, t, r) => e << 32 - r | t >>> r;
D.rotrSL = yn;
const gn = (e, t, r) => e << 64 - r | t >>> r - 32;
D.rotrBH = gn;
const vn = (e, t, r) => e >>> r - 32 | t << 64 - r;
D.rotrBL = vn;
const bn = (e, t) => t;
D.rotr32H = bn;
const wn = (e, t) => e;
D.rotr32L = wn;
const _n = (e, t, r) => e << r | t >>> 32 - r;
D.rotlSH = _n;
const Sn = (e, t, r) => t << r | e >>> 32 - r;
D.rotlSL = Sn;
const On = (e, t, r) => t << r - 32 | e >>> 64 - r;
D.rotlBH = On;
const $n = (e, t, r) => e << r - 32 | t >>> 64 - r;
D.rotlBL = $n;
function xn(e, t, r, n) {
  const i = (t >>> 0) + (n >>> 0);
  return { h: e + r + (i / 2 ** 32 | 0) | 0, l: i | 0 };
}
D.add = xn;
const An = (e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0);
D.add3L = An;
const En = (e, t, r, n) => t + r + n + (e / 2 ** 32 | 0) | 0;
D.add3H = En;
const In = (e, t, r, n) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0);
D.add4L = In;
const Tn = (e, t, r, n, i) => t + r + n + i + (e / 2 ** 32 | 0) | 0;
D.add4H = Tn;
const Ln = (e, t, r, n, i) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0) + (i >>> 0);
D.add5L = Ln;
const Pn = (e, t, r, n, i, s) => t + r + n + i + s + (e / 2 ** 32 | 0) | 0;
D.add5H = Pn;
const Fi = {
  fromBig: Rt,
  split: cn,
  toBig: dn,
  shrSH: hn,
  shrSL: mn,
  rotrSH: pn,
  rotrSL: yn,
  rotrBH: gn,
  rotrBL: vn,
  rotr32H: bn,
  rotr32L: wn,
  rotlSH: _n,
  rotlSL: Sn,
  rotlBH: On,
  rotlBL: $n,
  add: xn,
  add3L: An,
  add3H: En,
  add4L: In,
  add4H: Tn,
  add5H: Pn,
  add5L: Ln
};
D.default = Fi;
var kn = {}, rt = {};
Object.defineProperty(rt, "__esModule", { value: !0 });
rt.crypto = void 0;
rt.crypto = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
(function(e) {
  /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
  Object.defineProperty(e, "__esModule", { value: !0 }), e.randomBytes = e.wrapXOFConstructorWithOpts = e.wrapConstructorWithOpts = e.wrapConstructor = e.checkOpts = e.Hash = e.concatBytes = e.toBytes = e.utf8ToBytes = e.asyncLoop = e.nextTick = e.hexToBytes = e.bytesToHex = e.isLE = e.rotr = e.createView = e.u32 = e.u8 = void 0;
  const t = rt, r = (v) => new Uint8Array(v.buffer, v.byteOffset, v.byteLength);
  e.u8 = r;
  const n = (v) => new Uint32Array(v.buffer, v.byteOffset, Math.floor(v.byteLength / 4));
  e.u32 = n;
  function i(v) {
    return v instanceof Uint8Array || v != null && typeof v == "object" && v.constructor.name === "Uint8Array";
  }
  const s = (v) => new DataView(v.buffer, v.byteOffset, v.byteLength);
  e.createView = s;
  const l = (v, k) => v << 32 - k | v >>> k;
  if (e.rotr = l, e.isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68, !e.isLE)
    throw new Error("Non little-endian hardware is not supported");
  const f = /* @__PURE__ */ Array.from({ length: 256 }, (v, k) => k.toString(16).padStart(2, "0"));
  function g(v) {
    if (!i(v))
      throw new Error("Uint8Array expected");
    let k = "";
    for (let j = 0; j < v.length; j++)
      k += f[v[j]];
    return k;
  }
  e.bytesToHex = g;
  const p = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
  function I(v) {
    if (v >= p._0 && v <= p._9)
      return v - p._0;
    if (v >= p._A && v <= p._F)
      return v - (p._A - 10);
    if (v >= p._a && v <= p._f)
      return v - (p._a - 10);
  }
  function y(v) {
    if (typeof v != "string")
      throw new Error("hex string expected, got " + typeof v);
    const k = v.length, j = k / 2;
    if (k % 2)
      throw new Error("padded hex string expected, got unpadded hex of length " + k);
    const C = new Uint8Array(j);
    for (let F = 0, q = 0; F < j; F++, q += 2) {
      const ce = I(v.charCodeAt(q)), ve = I(v.charCodeAt(q + 1));
      if (ce === void 0 || ve === void 0) {
        const ke = v[q] + v[q + 1];
        throw new Error('hex string expected, got non-hex character "' + ke + '" at index ' + q);
      }
      C[F] = ce * 16 + ve;
    }
    return C;
  }
  e.hexToBytes = y;
  const O = async () => {
  };
  e.nextTick = O;
  async function x(v, k, j) {
    let C = Date.now();
    for (let F = 0; F < v; F++) {
      j(F);
      const q = Date.now() - C;
      q >= 0 && q < k || (await (0, e.nextTick)(), C += q);
    }
  }
  e.asyncLoop = x;
  function T(v) {
    if (typeof v != "string")
      throw new Error(`utf8ToBytes expected string, got ${typeof v}`);
    return new Uint8Array(new TextEncoder().encode(v));
  }
  e.utf8ToBytes = T;
  function E(v) {
    if (typeof v == "string" && (v = T(v)), !i(v))
      throw new Error(`expected Uint8Array, got ${typeof v}`);
    return v;
  }
  e.toBytes = E;
  function R(...v) {
    let k = 0;
    for (let C = 0; C < v.length; C++) {
      const F = v[C];
      if (!i(F))
        throw new Error("Uint8Array expected");
      k += F.length;
    }
    const j = new Uint8Array(k);
    for (let C = 0, F = 0; C < v.length; C++) {
      const q = v[C];
      j.set(q, F), F += q.length;
    }
    return j;
  }
  e.concatBytes = R;
  class K {
    // Safe version that clones internal state
    clone() {
      return this._cloneInto();
    }
  }
  e.Hash = K;
  const U = {}.toString;
  function oe(v, k) {
    if (k !== void 0 && U.call(k) !== "[object Object]")
      throw new Error("Options should be object or undefined");
    return Object.assign(v, k);
  }
  e.checkOpts = oe;
  function J(v) {
    const k = (C) => v().update(E(C)).digest(), j = v();
    return k.outputLen = j.outputLen, k.blockLen = j.blockLen, k.create = () => v(), k;
  }
  e.wrapConstructor = J;
  function A(v) {
    const k = (C, F) => v(F).update(E(C)).digest(), j = v({});
    return k.outputLen = j.outputLen, k.blockLen = j.blockLen, k.create = (C) => v(C), k;
  }
  e.wrapConstructorWithOpts = A;
  function N(v) {
    const k = (C, F) => v(F).update(E(C)).digest(), j = v({});
    return k.outputLen = j.outputLen, k.blockLen = j.blockLen, k.create = (C) => v(C), k;
  }
  e.wrapXOFConstructorWithOpts = N;
  function L(v = 32) {
    if (t.crypto && typeof t.crypto.getRandomValues == "function")
      return t.crypto.getRandomValues(new Uint8Array(v));
    throw new Error("crypto.getRandomValues must be defined");
  }
  e.randomBytes = L;
})(kn);
Object.defineProperty(Y, "__esModule", { value: !0 });
Y.shake256 = Y.shake128 = Y.keccak_512 = Y.keccak_384 = Y.keccak_256 = Y.keccak_224 = Y.sha3_512 = Y.sha3_384 = Y.sha3_256 = Y.sha3_224 = Y.Keccak = Y.keccakP = void 0;
const Ae = Z, Me = D, Ce = kn, [Nn, Rn, Dn] = [[], [], []], Mi = /* @__PURE__ */ BigInt(0), De = /* @__PURE__ */ BigInt(1), Ui = /* @__PURE__ */ BigInt(2), zi = /* @__PURE__ */ BigInt(7), Hi = /* @__PURE__ */ BigInt(256), Yi = /* @__PURE__ */ BigInt(113);
for (let e = 0, t = De, r = 1, n = 0; e < 24; e++) {
  [r, n] = [n, (2 * r + 3 * n) % 5], Nn.push(2 * (5 * n + r)), Rn.push((e + 1) * (e + 2) / 2 % 64);
  let i = Mi;
  for (let s = 0; s < 7; s++)
    t = (t << De ^ (t >> zi) * Yi) % Hi, t & Ui && (i ^= De << (De << /* @__PURE__ */ BigInt(s)) - De);
  Dn.push(i);
}
const [qi, Wi] = /* @__PURE__ */ (0, Me.split)(Dn, !0), fr = (e, t, r) => r > 32 ? (0, Me.rotlBH)(e, t, r) : (0, Me.rotlSH)(e, t, r), lr = (e, t, r) => r > 32 ? (0, Me.rotlBL)(e, t, r) : (0, Me.rotlSL)(e, t, r);
function Bn(e, t = 24) {
  const r = new Uint32Array(10);
  for (let n = 24 - t; n < 24; n++) {
    for (let l = 0; l < 10; l++)
      r[l] = e[l] ^ e[l + 10] ^ e[l + 20] ^ e[l + 30] ^ e[l + 40];
    for (let l = 0; l < 10; l += 2) {
      const f = (l + 8) % 10, g = (l + 2) % 10, p = r[g], I = r[g + 1], y = fr(p, I, 1) ^ r[f], O = lr(p, I, 1) ^ r[f + 1];
      for (let x = 0; x < 50; x += 10)
        e[l + x] ^= y, e[l + x + 1] ^= O;
    }
    let i = e[2], s = e[3];
    for (let l = 0; l < 24; l++) {
      const f = Rn[l], g = fr(i, s, f), p = lr(i, s, f), I = Nn[l];
      i = e[I], s = e[I + 1], e[I] = g, e[I + 1] = p;
    }
    for (let l = 0; l < 50; l += 10) {
      for (let f = 0; f < 10; f++)
        r[f] = e[l + f];
      for (let f = 0; f < 10; f++)
        e[l + f] ^= ~r[(f + 2) % 10] & r[(f + 4) % 10];
    }
    e[0] ^= qi[n], e[1] ^= Wi[n];
  }
  r.fill(0);
}
Y.keccakP = Bn;
class Ye extends Ce.Hash {
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(t, r, n, i = !1, s = 24) {
    if (super(), this.blockLen = t, this.suffix = r, this.outputLen = n, this.enableXOF = i, this.rounds = s, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, (0, Ae.number)(n), 0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = (0, Ce.u32)(this.state);
  }
  keccak() {
    Bn(this.state32, this.rounds), this.posOut = 0, this.pos = 0;
  }
  update(t) {
    (0, Ae.exists)(this);
    const { blockLen: r, state: n } = this;
    t = (0, Ce.toBytes)(t);
    const i = t.length;
    for (let s = 0; s < i; ) {
      const l = Math.min(r - this.pos, i - s);
      for (let f = 0; f < l; f++)
        n[this.pos++] ^= t[s++];
      this.pos === r && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished)
      return;
    this.finished = !0;
    const { state: t, suffix: r, pos: n, blockLen: i } = this;
    t[n] ^= r, r & 128 && n === i - 1 && this.keccak(), t[i - 1] ^= 128, this.keccak();
  }
  writeInto(t) {
    (0, Ae.exists)(this, !1), (0, Ae.bytes)(t), this.finish();
    const r = this.state, { blockLen: n } = this;
    for (let i = 0, s = t.length; i < s; ) {
      this.posOut >= n && this.keccak();
      const l = Math.min(n - this.posOut, s - i);
      t.set(r.subarray(this.posOut, this.posOut + l), i), this.posOut += l, i += l;
    }
    return t;
  }
  xofInto(t) {
    if (!this.enableXOF)
      throw new Error("XOF is not possible for this instance");
    return this.writeInto(t);
  }
  xof(t) {
    return (0, Ae.number)(t), this.xofInto(new Uint8Array(t));
  }
  digestInto(t) {
    if ((0, Ae.output)(t, this), this.finished)
      throw new Error("digest() was already called");
    return this.writeInto(t), this.destroy(), t;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = !0, this.state.fill(0);
  }
  _cloneInto(t) {
    const { blockLen: r, suffix: n, outputLen: i, rounds: s, enableXOF: l } = this;
    return t || (t = new Ye(r, n, i, l, s)), t.state32.set(this.state32), t.pos = this.pos, t.posOut = this.posOut, t.finished = this.finished, t.rounds = s, t.suffix = n, t.outputLen = i, t.enableXOF = l, t.destroyed = this.destroyed, t;
  }
}
Y.Keccak = Ye;
const ge = (e, t, r) => (0, Ce.wrapConstructor)(() => new Ye(t, e, r));
Y.sha3_224 = ge(6, 144, 224 / 8);
Y.sha3_256 = ge(6, 136, 256 / 8);
Y.sha3_384 = ge(6, 104, 384 / 8);
Y.sha3_512 = ge(6, 72, 512 / 8);
Y.keccak_224 = ge(1, 144, 224 / 8);
Y.keccak_256 = ge(1, 136, 256 / 8);
Y.keccak_384 = ge(1, 104, 384 / 8);
Y.keccak_512 = ge(1, 72, 512 / 8);
const Cn = (e, t, r) => (0, Ce.wrapXOFConstructorWithOpts)((n = {}) => new Ye(t, e, n.dkLen === void 0 ? r : n.dkLen, !0));
Y.shake128 = Cn(31, 168, 128 / 8);
Y.shake256 = Cn(31, 136, 256 / 8);
const { sha3_512: Ki } = Y, jn = 24, je = 32, vt = (e = 4, t = Math.random) => {
  let r = "";
  for (; r.length < e; )
    r = r + Math.floor(t() * 36).toString(36);
  return r;
};
function Fn(e) {
  let t = 8n, r = 0n;
  for (const n of e.values()) {
    const i = BigInt(n);
    r = (r << t) + i;
  }
  return r;
}
const Mn = (e = "") => Fn(Ki(e)).toString(36).slice(1), cr = Array.from(
  { length: 26 },
  (e, t) => String.fromCharCode(t + 97)
), Vi = (e) => cr[Math.floor(e() * cr.length)], Un = ({
  globalObj: e = typeof Ie < "u" ? Ie : typeof window < "u" ? window : {},
  random: t = Math.random
} = {}) => {
  const r = Object.keys(e).toString(), n = r.length ? r + vt(je, t) : vt(je, t);
  return Mn(n).substring(0, je);
}, zn = (e) => () => e++, Xi = 476782367, Hn = ({
  // Fallback if the user does not pass in a CSPRNG. This should be OK
  // because we don't rely solely on the random number generator for entropy.
  // We also use the host fingerprint, current time, and a session counter.
  random: e = Math.random,
  counter: t = zn(Math.floor(e() * Xi)),
  length: r = jn,
  fingerprint: n = Un({ random: e })
} = {}) => function() {
  const s = Vi(e), l = Date.now().toString(36), f = t().toString(36), g = vt(r, e), p = `${l + g + f + n}`;
  return `${s + Mn(p).substring(1, r)}`;
}, Gi = Hn(), Ji = (e, { minLength: t = 2, maxLength: r = je } = {}) => {
  const n = e.length, i = /^[0-9a-z]+$/;
  try {
    if (typeof e == "string" && n >= t && n <= r && i.test(e))
      return !0;
  } finally {
  }
  return !1;
};
ye.getConstants = () => ({ defaultLength: jn, bigLength: je });
ye.init = Hn;
ye.createId = Gi;
ye.bufToBigInt = Fn;
ye.createCounter = zn;
ye.createFingerprint = Un;
ye.isCuid = Ji;
const { createId: Qi, init: ks, getConstants: Ns, isCuid: Rs } = ye;
var Zi = Qi;
class ea {
  // TODO: Implement message tree with branches
  constructor(t, r, n) {
    if (this.updated = t, this.ollama = r, n)
      this._ = n;
    else {
      const i = (/* @__PURE__ */ new Date()).toISOString();
      this._ = {
        chatId: Zi(),
        created: i,
        lastUpdated: i,
        title: null,
        tags: [],
        starred: !1,
        messages: [],
        options: {}
      };
    }
  }
  async save({ untouched: t }) {
    t && (this._.lastUpdated = (/* @__PURE__ */ new Date()).toISOString()), await localForage.setItem(`chat/${this._.chatId}`, JSON.stringify(this._));
  }
  addMessage(t) {
    const r = (/* @__PURE__ */ new Date()).toISOString();
    this._.messages.push({ timestamp: r, ...t }), this.updated();
  }
  async complete(t) {
    const r = await this.ollama.chat({
      model: t,
      messages: this._.messages,
      stream: !1
    });
    this.addMessage(r.message);
  }
}
const dr = {
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
var Yn = "en", Dt = {}, bt = {};
function qn() {
  return Yn;
}
function ta(e) {
  Yn = e;
}
function ra(e) {
  return Dt[e];
}
function na(e) {
  if (!e)
    throw new Error("No locale data passed");
  Dt[e.locale] = e, bt[e.locale.toLowerCase()] = e.locale;
}
function hr(e) {
  if (Dt[e])
    return e;
  if (bt[e.toLowerCase()])
    return bt[e.toLowerCase()];
}
function Wn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.localeMatcher || "lookup";
  switch (r) {
    case "lookup":
      return mr(e);
    case "best fit":
      return mr(e);
    default:
      throw new RangeError('Invalid "localeMatcher" option: '.concat(r));
  }
}
function mr(e) {
  var t = hr(e);
  if (t)
    return t;
  for (var r = e.split("-"); e.length > 1; ) {
    r.pop(), e = r.join("-");
    var n = hr(e);
    if (n)
      return n;
  }
}
var h = {
  af: function(t) {
    return t == 1 ? "one" : "other";
  },
  am: function(t) {
    return t >= 0 && t <= 1 ? "one" : "other";
  },
  ar: function(t) {
    var r = String(t).split("."), n = Number(r[0]) == t, i = n && r[0].slice(-2);
    return t == 0 ? "zero" : t == 1 ? "one" : t == 2 ? "two" : i >= 3 && i <= 10 ? "few" : i >= 11 && i <= 99 ? "many" : "other";
  },
  ast: function(t) {
    var r = String(t).split("."), n = !r[1];
    return t == 1 && n ? "one" : "other";
  },
  be: function(t) {
    var r = String(t).split("."), n = Number(r[0]) == t, i = n && r[0].slice(-1), s = n && r[0].slice(-2);
    return i == 1 && s != 11 ? "one" : i >= 2 && i <= 4 && (s < 12 || s > 14) ? "few" : n && i == 0 || i >= 5 && i <= 9 || s >= 11 && s <= 14 ? "many" : "other";
  },
  br: function(t) {
    var r = String(t).split("."), n = Number(r[0]) == t, i = n && r[0].slice(-1), s = n && r[0].slice(-2), l = n && r[0].slice(-6);
    return i == 1 && s != 11 && s != 71 && s != 91 ? "one" : i == 2 && s != 12 && s != 72 && s != 92 ? "two" : (i == 3 || i == 4 || i == 9) && (s < 10 || s > 19) && (s < 70 || s > 79) && (s < 90 || s > 99) ? "few" : t != 0 && n && l == 0 ? "many" : "other";
  },
  bs: function(t) {
    var r = String(t).split("."), n = r[0], i = r[1] || "", s = !r[1], l = n.slice(-1), f = n.slice(-2), g = i.slice(-1), p = i.slice(-2);
    return s && l == 1 && f != 11 || g == 1 && p != 11 ? "one" : s && l >= 2 && l <= 4 && (f < 12 || f > 14) || g >= 2 && g <= 4 && (p < 12 || p > 14) ? "few" : "other";
  },
  ca: function(t) {
    var r = String(t).split("."), n = r[0], i = !r[1], s = n.slice(-6);
    return t == 1 && i ? "one" : n != 0 && s == 0 && i ? "many" : "other";
  },
  ceb: function(t) {
    var r = String(t).split("."), n = r[0], i = r[1] || "", s = !r[1], l = n.slice(-1), f = i.slice(-1);
    return s && (n == 1 || n == 2 || n == 3) || s && l != 4 && l != 6 && l != 9 || !s && f != 4 && f != 6 && f != 9 ? "one" : "other";
  },
  cs: function(t) {
    var r = String(t).split("."), n = r[0], i = !r[1];
    return t == 1 && i ? "one" : n >= 2 && n <= 4 && i ? "few" : i ? "other" : "many";
  },
  cy: function(t) {
    return t == 0 ? "zero" : t == 1 ? "one" : t == 2 ? "two" : t == 3 ? "few" : t == 6 ? "many" : "other";
  },
  da: function(t) {
    var r = String(t).split("."), n = r[0], i = Number(r[0]) == t;
    return t == 1 || !i && (n == 0 || n == 1) ? "one" : "other";
  },
  dsb: function(t) {
    var r = String(t).split("."), n = r[0], i = r[1] || "", s = !r[1], l = n.slice(-2), f = i.slice(-2);
    return s && l == 1 || f == 1 ? "one" : s && l == 2 || f == 2 ? "two" : s && (l == 3 || l == 4) || f == 3 || f == 4 ? "few" : "other";
  },
  dz: function(t) {
    return "other";
  },
  es: function(t) {
    var r = String(t).split("."), n = r[0], i = !r[1], s = n.slice(-6);
    return t == 1 ? "one" : n != 0 && s == 0 && i ? "many" : "other";
  },
  ff: function(t) {
    return t >= 0 && t < 2 ? "one" : "other";
  },
  fr: function(t) {
    var r = String(t).split("."), n = r[0], i = !r[1], s = n.slice(-6);
    return t >= 0 && t < 2 ? "one" : n != 0 && s == 0 && i ? "many" : "other";
  },
  ga: function(t) {
    var r = String(t).split("."), n = Number(r[0]) == t;
    return t == 1 ? "one" : t == 2 ? "two" : n && t >= 3 && t <= 6 ? "few" : n && t >= 7 && t <= 10 ? "many" : "other";
  },
  gd: function(t) {
    var r = String(t).split("."), n = Number(r[0]) == t;
    return t == 1 || t == 11 ? "one" : t == 2 || t == 12 ? "two" : n && t >= 3 && t <= 10 || n && t >= 13 && t <= 19 ? "few" : "other";
  },
  he: function(t) {
    var r = String(t).split("."), n = r[0], i = !r[1];
    return n == 1 && i || n == 0 && !i ? "one" : n == 2 && i ? "two" : "other";
  },
  is: function(t) {
    var r = String(t).split("."), n = r[0], i = (r[1] || "").replace(/0+$/, ""), s = Number(r[0]) == t, l = n.slice(-1), f = n.slice(-2);
    return s && l == 1 && f != 11 || i % 10 == 1 && i % 100 != 11 ? "one" : "other";
  },
  ksh: function(t) {
    return t == 0 ? "zero" : t == 1 ? "one" : "other";
  },
  lt: function(t) {
    var r = String(t).split("."), n = r[1] || "", i = Number(r[0]) == t, s = i && r[0].slice(-1), l = i && r[0].slice(-2);
    return s == 1 && (l < 11 || l > 19) ? "one" : s >= 2 && s <= 9 && (l < 11 || l > 19) ? "few" : n != 0 ? "many" : "other";
  },
  lv: function(t) {
    var r = String(t).split("."), n = r[1] || "", i = n.length, s = Number(r[0]) == t, l = s && r[0].slice(-1), f = s && r[0].slice(-2), g = n.slice(-2), p = n.slice(-1);
    return s && l == 0 || f >= 11 && f <= 19 || i == 2 && g >= 11 && g <= 19 ? "zero" : l == 1 && f != 11 || i == 2 && p == 1 && g != 11 || i != 2 && p == 1 ? "one" : "other";
  },
  mk: function(t) {
    var r = String(t).split("."), n = r[0], i = r[1] || "", s = !r[1], l = n.slice(-1), f = n.slice(-2), g = i.slice(-1), p = i.slice(-2);
    return s && l == 1 && f != 11 || g == 1 && p != 11 ? "one" : "other";
  },
  mt: function(t) {
    var r = String(t).split("."), n = Number(r[0]) == t, i = n && r[0].slice(-2);
    return t == 1 ? "one" : t == 2 ? "two" : t == 0 || i >= 3 && i <= 10 ? "few" : i >= 11 && i <= 19 ? "many" : "other";
  },
  pa: function(t) {
    return t == 0 || t == 1 ? "one" : "other";
  },
  pl: function(t) {
    var r = String(t).split("."), n = r[0], i = !r[1], s = n.slice(-1), l = n.slice(-2);
    return t == 1 && i ? "one" : i && s >= 2 && s <= 4 && (l < 12 || l > 14) ? "few" : i && n != 1 && (s == 0 || s == 1) || i && s >= 5 && s <= 9 || i && l >= 12 && l <= 14 ? "many" : "other";
  },
  pt: function(t) {
    var r = String(t).split("."), n = r[0], i = !r[1], s = n.slice(-6);
    return n == 0 || n == 1 ? "one" : n != 0 && s == 0 && i ? "many" : "other";
  },
  ro: function(t) {
    var r = String(t).split("."), n = !r[1], i = Number(r[0]) == t, s = i && r[0].slice(-2);
    return t == 1 && n ? "one" : !n || t == 0 || t != 1 && s >= 1 && s <= 19 ? "few" : "other";
  },
  ru: function(t) {
    var r = String(t).split("."), n = r[0], i = !r[1], s = n.slice(-1), l = n.slice(-2);
    return i && s == 1 && l != 11 ? "one" : i && s >= 2 && s <= 4 && (l < 12 || l > 14) ? "few" : i && s == 0 || i && s >= 5 && s <= 9 || i && l >= 11 && l <= 14 ? "many" : "other";
  },
  se: function(t) {
    return t == 1 ? "one" : t == 2 ? "two" : "other";
  },
  si: function(t) {
    var r = String(t).split("."), n = r[0], i = r[1] || "";
    return t == 0 || t == 1 || n == 0 && i == 1 ? "one" : "other";
  },
  sl: function(t) {
    var r = String(t).split("."), n = r[0], i = !r[1], s = n.slice(-2);
    return i && s == 1 ? "one" : i && s == 2 ? "two" : i && (s == 3 || s == 4) || !i ? "few" : "other";
  }
};
h.as = h.am;
h.az = h.af;
h.bg = h.af;
h.bn = h.am;
h.brx = h.af;
h.ce = h.af;
h.chr = h.af;
h.de = h.ast;
h.ee = h.af;
h.el = h.af;
h.en = h.ast;
h.et = h.ast;
h.eu = h.af;
h.fa = h.am;
h.fi = h.ast;
h.fil = h.ceb;
h.fo = h.af;
h.fur = h.af;
h.fy = h.ast;
h.gl = h.ast;
h.gu = h.am;
h.ha = h.af;
h.hi = h.am;
h.hr = h.bs;
h.hsb = h.dsb;
h.hu = h.af;
h.hy = h.ff;
h.ia = h.ast;
h.id = h.dz;
h.ig = h.dz;
h.it = h.ca;
h.ja = h.dz;
h.jgo = h.af;
h.jv = h.dz;
h.ka = h.af;
h.kea = h.dz;
h.kk = h.af;
h.kl = h.af;
h.km = h.dz;
h.kn = h.am;
h.ko = h.dz;
h.ks = h.af;
h.ku = h.af;
h.ky = h.af;
h.lb = h.af;
h.lkt = h.dz;
h.lo = h.dz;
h.ml = h.af;
h.mn = h.af;
h.mr = h.af;
h.ms = h.dz;
h.my = h.dz;
h.nb = h.af;
h.ne = h.af;
h.nl = h.ast;
h.nn = h.af;
h.no = h.af;
h.or = h.af;
h.pcm = h.am;
h.ps = h.af;
h.rm = h.af;
h.sah = h.dz;
h.sc = h.ast;
h.sd = h.af;
h.sk = h.cs;
h.so = h.af;
h.sq = h.af;
h.sr = h.bs;
h.su = h.dz;
h.sv = h.ast;
h.sw = h.ast;
h.ta = h.af;
h.te = h.af;
h.th = h.dz;
h.ti = h.pa;
h.tk = h.af;
h.to = h.dz;
h.tr = h.af;
h.ug = h.af;
h.uk = h.ru;
h.ur = h.ast;
h.uz = h.af;
h.vi = h.dz;
h.wae = h.af;
h.wo = h.dz;
h.xh = h.af;
h.yi = h.ast;
h.yo = h.dz;
h.yue = h.dz;
h.zh = h.dz;
h.zu = h.am;
const pr = h;
function yr(e) {
  return e === "pt-PT" ? e : ia(e);
}
var oa = /^([a-z0-9]+)/i;
function ia(e) {
  var t = e.match(oa);
  if (!t)
    throw new TypeError("Invalid locale: ".concat(e));
  return t[1];
}
function aa(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function gr(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function sa(e, t, r) {
  return t && gr(e.prototype, t), r && gr(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var wt = /* @__PURE__ */ function() {
  function e(t, r) {
    aa(this, e);
    var n = e.supportedLocalesOf(t);
    if (n.length === 0)
      throw new RangeError("Unsupported locale: " + t);
    if (r && r.type !== "cardinal")
      throw new RangeError('Only "cardinal" "type" is supported');
    this.$ = pr[yr(n[0])];
  }
  return sa(e, [{
    key: "select",
    value: function(r) {
      return this.$(r);
    }
  }], [{
    key: "supportedLocalesOf",
    value: function(r) {
      return typeof r == "string" && (r = [r]), r.filter(function(n) {
        return pr[yr(n)];
      });
    }
  }]), e;
}();
function _t(e) {
  "@babel/helpers - typeof";
  return _t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _t(e);
}
function vr(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function br(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? vr(Object(r), !0).forEach(function(n) {
      ua(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vr(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ua(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function wr(e, t) {
  return da(e) || ca(e, t) || la(e, t) || fa();
}
function fa() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function la(e, t) {
  if (e) {
    if (typeof e == "string")
      return _r(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return _r(e, t);
  }
}
function _r(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function ca(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], i = !0, s = !1, l, f;
    try {
      for (r = r.call(e); !(i = (l = r.next()).done) && (n.push(l.value), !(t && n.length === t)); i = !0)
        ;
    } catch (g) {
      s = !0, f = g;
    } finally {
      try {
        !i && r.return != null && r.return();
      } finally {
        if (s)
          throw f;
      }
    }
    return n;
  }
}
function da(e) {
  if (Array.isArray(e))
    return e;
}
function ha(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Sr(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function ma(e, t, r) {
  return t && Sr(e.prototype, t), r && Sr(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var pa = ["second", "minute", "hour", "day", "week", "month", "quarter", "year"], ya = ["auto", "always"], ga = ["long", "short", "narrow"], va = ["lookup", "best fit"], pe = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    ha(this, e);
    var n = r.numeric, i = r.style, s = r.localeMatcher;
    if (this.numeric = "always", this.style = "long", this.localeMatcher = "lookup", n !== void 0) {
      if (ya.indexOf(n) < 0)
        throw new RangeError('Invalid "numeric" option: '.concat(n));
      this.numeric = n;
    }
    if (i !== void 0) {
      if (ga.indexOf(i) < 0)
        throw new RangeError('Invalid "style" option: '.concat(i));
      this.style = i;
    }
    if (s !== void 0) {
      if (va.indexOf(s) < 0)
        throw new RangeError('Invalid "localeMatcher" option: '.concat(s));
      this.localeMatcher = s;
    }
    if (typeof t == "string" && (t = [t]), t.push(qn()), this.locale = e.supportedLocalesOf(t, {
      localeMatcher: this.localeMatcher
    })[0], !this.locale)
      throw new Error("No supported locale was found");
    wt.supportedLocalesOf(this.locale).length > 0 ? this.pluralRules = new wt(this.locale) : console.warn('"'.concat(this.locale, '" locale is not supported')), typeof Intl < "u" && Intl.NumberFormat ? (this.numberFormat = new Intl.NumberFormat(this.locale), this.numberingSystem = this.numberFormat.resolvedOptions().numberingSystem) : this.numberingSystem = "latn", this.locale = Wn(this.locale, {
      localeMatcher: this.localeMatcher
    });
  }
  return ma(e, [{
    key: "format",
    value: function() {
      var r = Or(arguments), n = wr(r, 2), i = n[0], s = n[1];
      return this.getRule(i, s).replace("{0}", this.formatNumber(Math.abs(i)));
    }
    /**
     * Formats time `number` in `units` (either in past or in future).
     * @param {number} number - Time interval value.
     * @param {string} unit - Time interval measurement unit.
     * @return {Object[]} The parts (`{ type, value, unit? }`).
     * @throws {RangeError} If unit is not one of "second", "minute", "hour", "day", "week", "month", "quarter".
     * @example
     * // Version 1 (deprecated).
     * // Returns [
     * //   { type: "literal", value: "in " },
     * //   { type: "day", value: "100" },
     * //   { type: "literal", value: " days" }
     * // ]
     * rtf.formatToParts(100, "day")
     * //
     * // Version 2.
     * // Returns [
     * //   { type: "literal", value: "in " },
     * //   { type: "integer", value: "100", unit: "day" },
     * //   { type: "literal", value: " days" }
     * // ]
     * rtf.formatToParts(100, "day")
     */
  }, {
    key: "formatToParts",
    value: function() {
      var r = Or(arguments), n = wr(r, 2), i = n[0], s = n[1], l = this.getRule(i, s), f = l.indexOf("{0}");
      if (f < 0)
        return [{
          type: "literal",
          value: l
        }];
      var g = [];
      return f > 0 && g.push({
        type: "literal",
        value: l.slice(0, f)
      }), g = g.concat(this.formatNumberToParts(Math.abs(i)).map(function(p) {
        return br(br({}, p), {}, {
          unit: s
        });
      })), f + 3 < l.length - 1 && g.push({
        type: "literal",
        value: l.slice(f + 3)
      }), g;
    }
    /**
     * Returns formatting rule for `value` in `units` (either in past or in future).
     * @param {number} value - Time interval value.
     * @param {string} unit - Time interval measurement unit.
     * @return {string}
     * @throws {RangeError} If unit is not one of "second", "minute", "hour", "day", "week", "month", "quarter".
     * @example
     * // Returns "{0} days ago"
     * getRule(-2, "day")
     */
  }, {
    key: "getRule",
    value: function(r, n) {
      var i = ra(this.locale)[this.style][n];
      if (typeof i == "string")
        return i;
      if (this.numeric === "auto") {
        if (r === -2 || r === -1) {
          var s = i["previous".concat(r === -1 ? "" : "-" + Math.abs(r))];
          if (s)
            return s;
        } else if (r === 1 || r === 2) {
          var l = i["next".concat(r === 1 ? "" : "-" + Math.abs(r))];
          if (l)
            return l;
        } else if (r === 0 && i.current)
          return i.current;
      }
      var f = i[Oa(r) ? "past" : "future"];
      if (typeof f == "string")
        return f;
      var g = this.pluralRules && this.pluralRules.select(Math.abs(r)) || "other";
      return f[g] || f.other;
    }
    /**
     * Formats a number into a string.
     * Uses `Intl.NumberFormat` when available.
     * @param  {number} number
     * @return {string}
     */
  }, {
    key: "formatNumber",
    value: function(r) {
      return this.numberFormat ? this.numberFormat.format(r) : String(r);
    }
    /**
     * Formats a number into a list of parts.
     * Uses `Intl.NumberFormat` when available.
     * @param  {number} number
     * @return {object[]}
     */
  }, {
    key: "formatNumberToParts",
    value: function(r) {
      return this.numberFormat && this.numberFormat.formatToParts ? this.numberFormat.formatToParts(r) : [{
        type: "integer",
        value: this.formatNumber(r)
      }];
    }
    /**
     * Returns a new object with properties reflecting the locale and date and time formatting options computed during initialization of this DateTimeFormat object.
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/resolvedOptions
     * @return {Object}
     */
  }, {
    key: "resolvedOptions",
    value: function() {
      return {
        locale: this.locale,
        style: this.style,
        numeric: this.numeric,
        numberingSystem: this.numberingSystem
      };
    }
  }]), e;
}();
pe.supportedLocalesOf = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (typeof e == "string")
    e = [e];
  else if (!Array.isArray(e))
    throw new TypeError('Invalid "locales" argument');
  return e.filter(function(r) {
    return Wn(r, t);
  });
};
pe.addLocale = na;
pe.setDefaultLocale = ta;
pe.getDefaultLocale = qn;
pe.PluralRules = wt;
var ht = 'Invalid "unit" argument';
function ba(e) {
  if (_t(e) === "symbol")
    throw new TypeError(ht);
  if (typeof e != "string")
    throw new RangeError("".concat(ht, ": ").concat(e));
  if (e[e.length - 1] === "s" && (e = e.slice(0, e.length - 1)), pa.indexOf(e) < 0)
    throw new RangeError("".concat(ht, ": ").concat(e));
  return e;
}
var wa = 'Invalid "number" argument';
function _a(e) {
  if (e = Number(e), Number.isFinite && !Number.isFinite(e))
    throw new RangeError("".concat(wa, ": ").concat(e));
  return e;
}
function Sa(e) {
  return 1 / e === -1 / 0;
}
function Oa(e) {
  return e < 0 || e === 0 && Sa(e);
}
function Or(e) {
  if (e.length < 2)
    throw new TypeError('"unit" argument is required');
  return [_a(e[0]), ba(e[1])];
}
function Ze(e) {
  "@babel/helpers - typeof";
  return Ze = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ze(e);
}
function $a(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function $r(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function xa(e, t, r) {
  return t && $r(e.prototype, t), r && $r(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var xr = /* @__PURE__ */ function() {
  function e() {
    $a(this, e), this.cache = {};
  }
  return xa(e, [{
    key: "get",
    value: function() {
      for (var r = this.cache, n = arguments.length, i = new Array(n), s = 0; s < n; s++)
        i[s] = arguments[s];
      for (var l = 0, f = i; l < f.length; l++) {
        var g = f[l];
        if (Ze(r) !== "object")
          return;
        r = r[g];
      }
      return r;
    }
  }, {
    key: "put",
    value: function() {
      for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
        n[i] = arguments[i];
      for (var s = n.pop(), l = n.pop(), f = this.cache, g = 0, p = n; g < p.length; g++) {
        var I = p[g];
        Ze(f[I]) !== "object" && (f[I] = {}), f = f[I];
      }
      return f[l] = s;
    }
  }]), e;
}();
function St(e) {
  "@babel/helpers - typeof";
  return St = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, St(e);
}
function Aa(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r)
    return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = Ea(e)) || t && e && typeof e.length == "number") {
    r && (e = r);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ea(e, t) {
  if (e) {
    if (typeof e == "string")
      return Ar(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Ar(e, t);
  }
}
function Ar(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Ia(e, t) {
  for (var r = Aa(e), n; !(n = r()).done; ) {
    var i = n.value;
    if (t(i))
      return i;
    for (var s = i.split("-"); s.length > 1; )
      if (s.pop(), i = s.join("-"), t(i))
        return i;
  }
  throw new Error("No locale data has been registered for any of the locales: ".concat(e.join(", ")));
}
function Ta() {
  var e = (typeof Intl > "u" ? "undefined" : St(Intl)) === "object";
  return e && typeof Intl.DateTimeFormat == "function";
}
function Ot(e) {
  "@babel/helpers - typeof";
  return Ot = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ot(e);
}
function La(e) {
  return ka(e) && (Array.isArray(e.steps) || // `gradation` property is deprecated: it has been renamed to `steps`.
  Array.isArray(e.gradation) || // `flavour` property is deprecated: it has been renamed to `labels`.
  Array.isArray(e.flavour) || typeof e.flavour == "string" || Array.isArray(e.labels) || typeof e.labels == "string" || // `units` property is deprecated.
  Array.isArray(e.units) || // `custom` property is deprecated.
  typeof e.custom == "function");
}
var Pa = {}.constructor;
function ka(e) {
  return Ot(e) !== void 0 && e !== null && e.constructor === Pa;
}
var le = 60, et = 60 * le, we = 24 * et, $t = 7 * we, xt = 30.44 * we, Kn = 146097 / 400 * we;
function Pe(e) {
  switch (e) {
    case "second":
      return 1;
    case "minute":
      return le;
    case "hour":
      return et;
    case "day":
      return we;
    case "week":
      return $t;
    case "month":
      return xt;
    case "year":
      return Kn;
  }
}
function Vn(e) {
  return e.factor !== void 0 ? e.factor : Pe(e.unit || e.formatAs) || 1;
}
function Ue(e) {
  switch (e) {
    case "floor":
      return Math.floor;
    default:
      return Math.round;
  }
}
function Bt(e) {
  switch (e) {
    case "floor":
      return 1;
    default:
      return 0.5;
  }
}
function At(e) {
  "@babel/helpers - typeof";
  return At = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, At(e);
}
function Xn(e, t) {
  var r = t.prevStep, n = t.timestamp, i = t.now, s = t.future, l = t.round, f;
  return r && (r.id || r.unit) && (f = e["threshold_for_".concat(r.id || r.unit)]), f === void 0 && e.threshold !== void 0 && (f = e.threshold, typeof f == "function" && (f = f(i, s))), f === void 0 && (f = e.minTime), At(f) === "object" && (r && r.id && f[r.id] !== void 0 ? f = f[r.id] : f = f.default), typeof f == "function" && (f = f(n, {
    future: s,
    getMinTimeForUnit: function(p, I) {
      return Er(p, I || r && r.formatAs, {
        round: l
      });
    }
  })), f === void 0 && e.test && (e.test(n, {
    now: i,
    future: s
  }) ? f = 0 : f = 9007199254740991), f === void 0 && (r ? e.formatAs && r.formatAs && (f = Er(e.formatAs, r.formatAs, {
    round: l
  })) : f = 0), f === void 0 && console.warn("[javascript-time-ago] A step should specify `minTime`:\n" + JSON.stringify(e, null, 2)), f;
}
function Er(e, t, r) {
  var n = r.round, i = Pe(e), s;
  if (t === "now" ? s = Pe(e) : s = Pe(t), i !== void 0 && s !== void 0)
    return i - s * (1 - Bt(n));
}
function Ir(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Na(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ir(Object(r), !0).forEach(function(n) {
      Ra(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ir(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ra(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Da(e, t, r) {
  var n = r.now, i = r.future, s = r.round, l = r.units, f = r.getNextStep;
  e = Ca(e, l);
  var g = Ba(e, t, {
    now: n,
    future: i,
    round: s
  });
  if (f) {
    if (g) {
      var p = e[e.indexOf(g) - 1], I = e[e.indexOf(g) + 1];
      return [p, g, I];
    }
    return [void 0, void 0, e[0]];
  }
  return g;
}
function Ba(e, t, r) {
  var n = r.now, i = r.future, s = r.round;
  if (e.length !== 0) {
    var l = Gn(e, t, {
      now: n,
      future: i || t < 0,
      round: s
    });
    if (l !== -1) {
      var f = e[l];
      if (f.granularity) {
        var g = Ue(s)(Math.abs(t) / Vn(f) / f.granularity) * f.granularity;
        if (g === 0 && l > 0)
          return e[l - 1];
      }
      return f;
    }
  }
}
function Gn(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, i = Xn(e[n], Na({
    prevStep: e[n - 1],
    timestamp: r.now - t * 1e3
  }, r));
  return i === void 0 || Math.abs(t) < i ? n - 1 : n === e.length - 1 ? n : Gn(e, t, r, n + 1);
}
function Ca(e, t) {
  return e.filter(function(r) {
    var n = r.unit, i = r.formatAs;
    return n = n || i, n ? t.indexOf(n) >= 0 : !0;
  });
}
function ja(e, t, r) {
  var n = r.now, i = r.round;
  if (Pe(e)) {
    var s = Pe(e) * 1e3, l = t > n, f = Math.abs(t - n), g = Ue(i)(f / s) * s;
    return l ? g > 0 ? f - g + Ma(i, s) : f - g + 1 : -(f - g) + Fa(i, s);
  }
}
function Fa(e, t) {
  return Bt(e) * t;
}
function Ma(e, t) {
  return (1 - Bt(e)) * t + 1;
}
var Ua = 365 * 24 * 60 * 60 * 1e3, Jn = 1e3 * Ua;
function za(e, t, r) {
  var n = r.prevStep, i = r.nextStep, s = r.now, l = r.future, f = r.round, g = e.getTime ? e.getTime() : e, p = function(T) {
    return ja(T, g, {
      now: s,
      round: f
    });
  }, I = Ya(l ? t : i, g, {
    future: l,
    now: s,
    round: f,
    prevStep: l ? n : t
    // isFirstStep: future && isFirstStep
  });
  if (I !== void 0) {
    var y;
    if (t && (t.getTimeToNextUpdate && (y = t.getTimeToNextUpdate(g, {
      getTimeToNextUpdateForUnit: p,
      getRoundFunction: Ue,
      now: s,
      future: l,
      round: f
    })), y === void 0)) {
      var O = t.unit || t.formatAs;
      O && (y = p(O));
    }
    return y === void 0 ? I : Math.min(y, I);
  }
}
function Ha(e, t, r) {
  var n = r.now, i = r.future, s = r.round, l = r.prevStep, f = Xn(e, {
    timestamp: t,
    now: n,
    future: i,
    round: s,
    prevStep: l
  });
  if (f !== void 0)
    return i ? t - f * 1e3 + 1 : f === 0 && t === n ? Jn : t + f * 1e3;
}
function Ya(e, t, r) {
  var n = r.now, i = r.future, s = r.round, l = r.prevStep;
  if (e) {
    var f = Ha(e, t, {
      now: n,
      future: i,
      round: s,
      prevStep: l
    });
    return f === void 0 ? void 0 : f - n;
  } else
    return i ? t - n + 1 : Jn;
}
var Qn = {};
function Te(e) {
  return Qn[e];
}
function Zn(e) {
  if (!e)
    throw new Error("[javascript-time-ago] No locale data passed.");
  Qn[e.locale] = e;
}
const qa = [{
  formatAs: "now"
}, {
  formatAs: "second"
}, {
  formatAs: "minute"
}, {
  formatAs: "hour"
}, {
  formatAs: "day"
}, {
  formatAs: "week"
}, {
  formatAs: "month"
}, {
  formatAs: "year"
}], Et = {
  steps: qa,
  labels: "long"
};
function Tr(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Lr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Tr(Object(r), !0).forEach(function(n) {
      Wa(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Tr(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Wa(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
const It = Lr(Lr({}, Et), {}, {
  // Skip "seconds".
  steps: Et.steps.filter(function(e) {
    return e.formatAs !== "second";
  })
}), eo = [{
  // This step returns the amount of seconds
  // by dividing the amount of seconds by `1`.
  factor: 1,
  // "now" labels are used for formatting the output.
  unit: "now"
}, {
  // When the language doesn't support `now` unit,
  // the first step is ignored, and it uses this `second` unit.
  threshold: 1,
  // `threshold_for_now` should be the same as `threshold` on minutes.
  threshold_for_now: 45.5,
  // This step returns the amount of seconds
  // by dividing the amount of seconds by `1`.
  factor: 1,
  // "second" labels are used for formatting the output.
  unit: "second"
}, {
  // `threshold` should be the same as `threshold_for_now` on seconds.
  threshold: 45.5,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a minute.
  factor: le,
  // "minute" labels are used for formatting the output.
  unit: "minute"
}, {
  // This step is effective starting from 2.5 minutes.
  threshold: 2.5 * le,
  // Allow only 5-minute increments of minutes starting from 2.5 minutes.
  // `granularity` — (advanced) Time interval value "granularity".
  // For example, it could be set to `5` for minutes to allow only 5-minute increments
  // when formatting time intervals: `0 minutes`, `5 minutes`, `10 minutes`, etc.
  // Perhaps this feature will be removed because there seem to be no use cases
  // of it in the real world.
  granularity: 5,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a minute.
  factor: le,
  // "minute" labels are used for formatting the output.
  unit: "minute"
}, {
  // This step is effective starting from 22.5 minutes.
  threshold: 22.5 * le,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in  half-an-hour.
  factor: 0.5 * et,
  // "half-hour" labels are used for formatting the output.
  // (if available, which is no longer the case)
  unit: "half-hour"
}, {
  // This step is effective starting from 42.5 minutes.
  threshold: 42.5 * le,
  threshold_for_minute: 52.5 * le,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in an hour.
  factor: et,
  // "hour" labels are used for formatting the output.
  unit: "hour"
}, {
  // This step is effective starting from 20.5 hours.
  threshold: 20.5 / 24 * we,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a day.
  factor: we,
  // "day" labels are used for formatting the output.
  unit: "day"
}, {
  // This step is effective starting from 5.5 days.
  threshold: 5.5 * we,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a week.
  factor: $t,
  // "week" labels are used for formatting the output.
  unit: "week"
}, {
  // This step is effective starting from 3.5 weeks.
  threshold: 3.5 * $t,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a month.
  factor: xt,
  // "month" labels are used for formatting the output.
  unit: "month"
}, {
  // This step is effective starting from 10.5 months.
  threshold: 10.5 * xt,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a year.
  factor: Kn,
  // "year" labels are used for formatting the output.
  unit: "year"
}], Pr = {
  gradation: eo,
  flavour: "long",
  units: ["now", "minute", "hour", "day", "week", "month", "year"]
}, Ka = {
  gradation: eo,
  flavour: "long-time",
  units: ["now", "minute", "hour", "day", "week", "month", "year"]
};
function to(e) {
  return e instanceof Date ? e : new Date(e);
}
var Tt = [{
  formatAs: "second"
}, {
  formatAs: "minute"
}, {
  formatAs: "hour"
}], se = {}, Va = {
  minTime: function(t, r) {
    r.future;
    var n = r.getMinTimeForUnit;
    return n("day");
  },
  format: function(t, r) {
    return se[r] || (se[r] = {}), se[r].dayMonth || (se[r].dayMonth = new Intl.DateTimeFormat(r, {
      month: "short",
      day: "numeric"
    })), se[r].dayMonth.format(to(t));
  }
}, Xa = {
  minTime: function(t, r) {
    var n = r.future;
    if (n) {
      var i = new Date(new Date(t).getFullYear(), 0).getTime() - 1;
      return (t - i) / 1e3;
    } else {
      var s = new Date(new Date(t).getFullYear() + 1, 0).getTime();
      return (s - t) / 1e3;
    }
  },
  format: function(t, r) {
    return se[r] || (se[r] = {}), se[r].dayMonthYear || (se[r].dayMonthYear = new Intl.DateTimeFormat(r, {
      year: "numeric",
      month: "short",
      day: "numeric"
    })), se[r].dayMonthYear.format(to(t));
  }
};
Ta() ? Tt.push(Va, Xa) : Tt.push({
  formatAs: "day"
}, {
  formatAs: "week"
}, {
  formatAs: "month"
}, {
  formatAs: "year"
});
const _e = {
  steps: Tt,
  labels: [
    // "mini" labels are only defined for a few languages.
    "mini",
    // "short-time" labels are only defined for a few languages.
    "short-time",
    // "narrow" and "short" labels are defined for all languages.
    // "narrow" labels can sometimes be weird (like "+5d."),
    // but "short" labels have the " ago" part, so "narrow" seem
    // more appropriate.
    // "short" labels would have been more appropriate if they
    // didn't have the " ago" part, hence the "short-time" above.
    "narrow",
    // Since "narrow" labels are always present, "short" element
    // of this array can be removed.
    "short"
  ]
};
function kr(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Nr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? kr(Object(r), !0).forEach(function(n) {
      Ga(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : kr(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ga(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
const Ja = Nr(Nr({}, _e), {}, {
  // Add "now".
  steps: [{
    formatAs: "now"
  }].concat(_e.steps)
});
function Rr(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Dr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Rr(Object(r), !0).forEach(function(n) {
      Qa(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Rr(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Qa(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
const Lt = Dr(Dr({}, _e), {}, {
  // Skip "seconds".
  steps: _e.steps.filter(function(e) {
    return e.formatAs !== "second";
  })
});
function Br(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Cr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Br(Object(r), !0).forEach(function(n) {
      Za(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Br(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Za(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
const es = Cr(Cr({}, Lt), {}, {
  // Add "now".
  steps: [{
    formatAs: "now"
  }].concat(Lt.steps)
});
function jr(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Xe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? jr(Object(r), !0).forEach(function(n) {
      ts(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jr(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ts(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
const rs = Xe(Xe({}, _e), {}, {
  // Skip "seconds".
  steps: _e.steps.filter(function(e) {
    return e.formatAs !== "second";
  }).map(function(e) {
    return e.formatAs === "minute" ? Xe(Xe({}, e), {}, {
      minTime: le
    }) : e;
  })
}), ze = {
  steps: [{
    formatAs: "second"
  }, {
    formatAs: "minute"
  }, {
    formatAs: "hour"
  }, {
    formatAs: "day"
  }, {
    formatAs: "month"
  }, {
    formatAs: "year"
  }],
  labels: [
    // "mini" labels are only defined for a few languages.
    "mini",
    // "short-time" labels are only defined for a few languages.
    "short-time",
    // "narrow" and "short" labels are defined for all languages.
    // "narrow" labels can sometimes be weird (like "+5d."),
    // but "short" labels have the " ago" part, so "narrow" seem
    // more appropriate.
    // "short" labels would have been more appropriate if they
    // didn't have the " ago" part, hence the "short-time" above.
    "narrow",
    // Since "narrow" labels are always present, "short" element
    // of this array can be removed.
    "short"
  ]
};
function Fr(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Mr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fr(Object(r), !0).forEach(function(n) {
      ns(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fr(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ns(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
const os = Mr(Mr({}, ze), {}, {
  // Add "now".
  steps: [{
    formatAs: "now"
  }].concat(ze.steps)
});
function Ur(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function zr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ur(Object(r), !0).forEach(function(n) {
      is(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ur(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function is(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
const Pt = zr(zr({}, ze), {}, {
  // Skip "seconds".
  steps: ze.steps.filter(function(e) {
    return e.formatAs !== "second";
  })
});
function Hr(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Yr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hr(Object(r), !0).forEach(function(n) {
      as(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hr(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function as(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
const ss = Yr(Yr({}, Pt), {}, {
  // Add "now".
  steps: [{
    formatAs: "now"
  }].concat(Pt.steps)
});
function us(e) {
  switch (e) {
    case "default":
    case "round":
      return Et;
    case "round-minute":
      return It;
    case "approximate":
      return Pr;
    case "time":
    case "approximate-time":
      return Ka;
    case "mini":
      return ze;
    case "mini-now":
      return os;
    case "mini-minute":
      return Pt;
    case "mini-minute-now":
      return ss;
    case "twitter":
      return _e;
    case "twitter-now":
      return Ja;
    case "twitter-minute":
      return Lt;
    case "twitter-minute-now":
      return es;
    case "twitter-first-minute":
      return rs;
    default:
      return Pr;
  }
}
function tt(e) {
  "@babel/helpers - typeof";
  return tt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, tt(e);
}
function fs(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r)
    return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = ro(e)) || t && e && typeof e.length == "number") {
    r && (e = r);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ls(e, t) {
  return hs(e) || ds(e, t) || ro(e, t) || cs();
}
function cs() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ro(e, t) {
  if (e) {
    if (typeof e == "string")
      return qr(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return qr(e, t);
  }
}
function qr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function ds(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], i = !0, s = !1, l, f;
    try {
      for (r = r.call(e); !(i = (l = r.next()).done) && (n.push(l.value), !(t && n.length === t)); i = !0)
        ;
    } catch (g) {
      s = !0, f = g;
    } finally {
      try {
        !i && r.return != null && r.return();
      } finally {
        if (s)
          throw f;
      }
    }
    return n;
  }
}
function hs(e) {
  if (Array.isArray(e))
    return e;
}
function ms(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Wr(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function ps(e, t, r) {
  return t && Wr(e.prototype, t), r && Wr(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var ie = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.polyfill;
    ms(this, e), typeof t == "string" && (t = [t]), this.locale = Ia(t.concat(e.getDefaultLocale()), Te), typeof Intl < "u" && Intl.NumberFormat && (this.numberFormat = new Intl.NumberFormat(this.locale)), n === !1 ? (this.IntlRelativeTimeFormat = Intl.RelativeTimeFormat, this.IntlPluralRules = Intl.PluralRules) : (this.IntlRelativeTimeFormat = pe, this.IntlPluralRules = pe.PluralRules), this.relativeTimeFormatCache = new xr(), this.pluralRulesCache = new xr();
  }
  return ps(e, [{
    key: "format",
    value: function(r, n, i) {
      i || (n && !ws(n) ? (i = n, n = void 0) : i = {}), n || (n = It), typeof n == "string" && (n = us(n));
      var s = ys(r), l = this.getLabels(n.flavour || n.labels), f = l.labels, g = l.labelsType, p;
      n.now !== void 0 && (p = n.now), p === void 0 && i.now !== void 0 && (p = i.now), p === void 0 && (p = Date.now());
      var I = (p - s) / 1e3, y = i.future || I < 0, O = bs(f, Te(this.locale).now, Te(this.locale).long, y);
      if (n.custom) {
        var x = n.custom({
          now: p,
          date: new Date(s),
          time: s,
          elapsed: I,
          locale: this.locale
        });
        if (x !== void 0)
          return x;
      }
      var T = vs(
        // Controlling `style.steps` through `style.units` seems to be deprecated:
        // create a new custom `style` instead.
        n.units,
        f,
        O
      ), E = i.round || n.round, R = Da(
        // "gradation" is a legacy name for "steps".
        // For historical reasons, "approximate" steps are used by default.
        // In the next major version, there'll be no default for `steps`.
        n.gradation || n.steps || It.steps,
        I,
        {
          now: p,
          units: T,
          round: E,
          future: y,
          getNextStep: !0
        }
      ), K = ls(R, 3), U = K[0], oe = K[1], J = K[2], A = this.formatDateForStep(s, oe, I, {
        labels: f,
        labelsType: g,
        nowLabel: O,
        now: p,
        future: y,
        round: E
      }) || "";
      if (i.getTimeToNextUpdate) {
        var N = za(s, oe, {
          nextStep: J,
          prevStep: U,
          now: p,
          future: y,
          round: E
        });
        return [A, N];
      }
      return A;
    }
  }, {
    key: "formatDateForStep",
    value: function(r, n, i, s) {
      var l = this, f = s.labels, g = s.labelsType, p = s.nowLabel, I = s.now, y = s.future, O = s.round;
      if (n) {
        if (n.format)
          return n.format(r, this.locale, {
            formatAs: function(K, U) {
              return l.formatValue(U, K, {
                labels: f,
                future: y
              });
            },
            now: I,
            future: y
          });
        var x = n.unit || n.formatAs;
        if (!x)
          throw new Error("[javascript-time-ago] Each step must define either `formatAs` or `format()`. Step: ".concat(JSON.stringify(n)));
        if (x === "now")
          return p;
        var T = Math.abs(i) / Vn(n);
        n.granularity && (T = Ue(O)(T / n.granularity) * n.granularity);
        var E = -1 * Math.sign(i) * Ue(O)(T);
        switch (E === 0 && (y ? E = 0 : E = -0), g) {
          case "long":
          case "short":
          case "narrow":
            return this.getFormatter(g).format(E, x);
          default:
            return this.formatValue(E, x, {
              labels: f,
              future: y
            });
        }
      }
    }
    /**
     * Mimicks what `Intl.RelativeTimeFormat` does for additional locale styles.
     * @param  {number} value
     * @param  {string} unit
     * @param  {object} options.labels — Relative time labels.
     * @param  {boolean} [options.future] — Tells how to format value `0`: as "future" (`true`) or "past" (`false`). Is `false` by default, but should have been `true` actually.
     * @return {string}
     */
  }, {
    key: "formatValue",
    value: function(r, n, i) {
      var s = i.labels, l = i.future;
      return this.getFormattingRule(s, n, r, {
        future: l
      }).replace("{0}", this.formatNumber(Math.abs(r)));
    }
    /**
     * Returns formatting rule for `value` in `units` (either in past or in future).
     * @param {object} formattingRules — Relative time labels for different units.
     * @param {string} unit - Time interval measurement unit.
     * @param {number} value - Time interval value.
     * @param  {boolean} [options.future] — Tells how to format value `0`: as "future" (`true`) or "past" (`false`). Is `false` by default.
     * @return {string}
     * @example
     * // Returns "{0} days ago"
     * getFormattingRule(en.long, "day", -2, 'en')
     */
  }, {
    key: "getFormattingRule",
    value: function(r, n, i, s) {
      var l = s.future;
      if (this.locale, r = r[n], typeof r == "string")
        return r;
      var f = i === 0 ? l ? "future" : "past" : i < 0 ? "past" : "future", g = r[f] || r;
      if (typeof g == "string")
        return g;
      var p = this.getPluralRules().select(Math.abs(i));
      return g[p] || g.other;
    }
    /**
     * Formats a number into a string.
     * Uses `Intl.NumberFormat` when available.
     * @param  {number} number
     * @return {string}
     */
  }, {
    key: "formatNumber",
    value: function(r) {
      return this.numberFormat ? this.numberFormat.format(r) : String(r);
    }
    /**
     * Returns an `Intl.RelativeTimeFormat` for a given `labelsType`.
     * @param {string} labelsType
     * @return {object} `Intl.RelativeTimeFormat` instance
     */
  }, {
    key: "getFormatter",
    value: function(r) {
      return this.relativeTimeFormatCache.get(this.locale, r) || this.relativeTimeFormatCache.put(this.locale, r, new this.IntlRelativeTimeFormat(this.locale, {
        style: r
      }));
    }
    /**
     * Returns an `Intl.PluralRules` instance.
     * @return {object} `Intl.PluralRules` instance
     */
  }, {
    key: "getPluralRules",
    value: function() {
      return this.pluralRulesCache.get(this.locale) || this.pluralRulesCache.put(this.locale, new this.IntlPluralRules(this.locale));
    }
    /**
     * Gets localized labels for this type of labels.
     *
     * @param {(string|string[])} labelsType - Relative date/time labels type.
     *                                     If it's an array then all label types are tried
     *                                     until a suitable one is found.
     *
     * @returns {Object} Returns an object of shape { labelsType, labels }
     */
  }, {
    key: "getLabels",
    value: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      typeof r == "string" && (r = [r]), r = r.map(function(f) {
        switch (f) {
          case "tiny":
          case "mini-time":
            return "mini";
          default:
            return f;
        }
      }), r = r.concat("long");
      for (var n = Te(this.locale), i = fs(r), s; !(s = i()).done; ) {
        var l = s.value;
        if (n[l])
          return {
            labelsType: l,
            labels: n[l]
          };
      }
    }
  }]), e;
}(), no = "en";
ie.getDefaultLocale = function() {
  return no;
};
ie.setDefaultLocale = function(e) {
  return no = e;
};
ie.addDefaultLocale = function(e) {
  if (Kr)
    return console.error("[javascript-time-ago] `TimeAgo.addDefaultLocale()` can only be called once. To add other locales, use `TimeAgo.addLocale()`.");
  Kr = !0, ie.setDefaultLocale(e.locale), ie.addLocale(e);
};
var Kr;
ie.addLocale = function(e) {
  Zn(e), pe.addLocale(e);
};
ie.locale = ie.addLocale;
ie.addLabels = function(e, t, r) {
  var n = Te(e);
  n || (Zn({
    locale: e
  }), n = Te(e)), n[t] = r;
};
function ys(e) {
  if (e.constructor === Date || gs(e))
    return e.getTime();
  if (typeof e == "number")
    return e;
  throw new Error("Unsupported relative time formatter input: ".concat(tt(e), ", ").concat(e));
}
function gs(e) {
  return tt(e) === "object" && typeof e.getTime == "function";
}
function vs(e, t, r) {
  var n = Object.keys(t);
  return r && n.push("now"), e && (n = e.filter(function(i) {
    return i === "now" || n.indexOf(i) >= 0;
  })), n;
}
function bs(e, t, r, n) {
  var i = e.now || t && t.now;
  if (i)
    return typeof i == "string" ? i : n ? i.future : i.past;
  if (r && r.second && r.second.current)
    return r.second.current;
}
function ws(e) {
  return typeof e == "string" || La(e);
}
const _s = {
  locale: "en",
  long: {
    year: {
      previous: "last year",
      current: "this year",
      next: "next year",
      past: {
        one: "{0} year ago",
        other: "{0} years ago"
      },
      future: {
        one: "in {0} year",
        other: "in {0} years"
      }
    },
    quarter: {
      previous: "last quarter",
      current: "this quarter",
      next: "next quarter",
      past: {
        one: "{0} quarter ago",
        other: "{0} quarters ago"
      },
      future: {
        one: "in {0} quarter",
        other: "in {0} quarters"
      }
    },
    month: {
      previous: "last month",
      current: "this month",
      next: "next month",
      past: {
        one: "{0} month ago",
        other: "{0} months ago"
      },
      future: {
        one: "in {0} month",
        other: "in {0} months"
      }
    },
    week: {
      previous: "last week",
      current: "this week",
      next: "next week",
      past: {
        one: "{0} week ago",
        other: "{0} weeks ago"
      },
      future: {
        one: "in {0} week",
        other: "in {0} weeks"
      }
    },
    day: {
      previous: "yesterday",
      current: "today",
      next: "tomorrow",
      past: {
        one: "{0} day ago",
        other: "{0} days ago"
      },
      future: {
        one: "in {0} day",
        other: "in {0} days"
      }
    },
    hour: {
      current: "this hour",
      past: {
        one: "{0} hour ago",
        other: "{0} hours ago"
      },
      future: {
        one: "in {0} hour",
        other: "in {0} hours"
      }
    },
    minute: {
      current: "this minute",
      past: {
        one: "{0} minute ago",
        other: "{0} minutes ago"
      },
      future: {
        one: "in {0} minute",
        other: "in {0} minutes"
      }
    },
    second: {
      current: "now",
      past: {
        one: "{0} second ago",
        other: "{0} seconds ago"
      },
      future: {
        one: "in {0} second",
        other: "in {0} seconds"
      }
    }
  },
  short: {
    year: {
      previous: "last yr.",
      current: "this yr.",
      next: "next yr.",
      past: "{0} yr. ago",
      future: "in {0} yr."
    },
    quarter: {
      previous: "last qtr.",
      current: "this qtr.",
      next: "next qtr.",
      past: {
        one: "{0} qtr. ago",
        other: "{0} qtrs. ago"
      },
      future: {
        one: "in {0} qtr.",
        other: "in {0} qtrs."
      }
    },
    month: {
      previous: "last mo.",
      current: "this mo.",
      next: "next mo.",
      past: "{0} mo. ago",
      future: "in {0} mo."
    },
    week: {
      previous: "last wk.",
      current: "this wk.",
      next: "next wk.",
      past: "{0} wk. ago",
      future: "in {0} wk."
    },
    day: {
      previous: "yesterday",
      current: "today",
      next: "tomorrow",
      past: {
        one: "{0} day ago",
        other: "{0} days ago"
      },
      future: {
        one: "in {0} day",
        other: "in {0} days"
      }
    },
    hour: {
      current: "this hour",
      past: "{0} hr. ago",
      future: "in {0} hr."
    },
    minute: {
      current: "this minute",
      past: "{0} min. ago",
      future: "in {0} min."
    },
    second: {
      current: "now",
      past: "{0} sec. ago",
      future: "in {0} sec."
    }
  },
  narrow: {
    year: {
      previous: "last yr.",
      current: "this yr.",
      next: "next yr.",
      past: "{0}y ago",
      future: "in {0}y"
    },
    quarter: {
      previous: "last qtr.",
      current: "this qtr.",
      next: "next qtr.",
      past: "{0}q ago",
      future: "in {0}q"
    },
    month: {
      previous: "last mo.",
      current: "this mo.",
      next: "next mo.",
      past: "{0}mo ago",
      future: "in {0}mo"
    },
    week: {
      previous: "last wk.",
      current: "this wk.",
      next: "next wk.",
      past: "{0}w ago",
      future: "in {0}w"
    },
    day: {
      previous: "yesterday",
      current: "today",
      next: "tomorrow",
      past: "{0}d ago",
      future: "in {0}d"
    },
    hour: {
      current: "this hour",
      past: "{0}h ago",
      future: "in {0}h"
    },
    minute: {
      current: "this minute",
      past: "{0}m ago",
      future: "in {0}m"
    },
    second: {
      current: "now",
      past: "{0}s ago",
      future: "in {0}s"
    }
  },
  now: {
    now: {
      current: "now",
      future: "in a moment",
      past: "just now"
    }
  },
  mini: {
    year: "{0}yr",
    month: "{0}mo",
    week: "{0}wk",
    day: "{0}d",
    hour: "{0}h",
    minute: "{0}m",
    second: "{0}s",
    now: "now"
  },
  "short-time": {
    year: "{0} yr.",
    month: "{0} mo.",
    week: "{0} wk.",
    day: {
      one: "{0} day",
      other: "{0} days"
    },
    hour: "{0} hr.",
    minute: "{0} min.",
    second: "{0} sec."
  },
  "long-time": {
    year: {
      one: "{0} year",
      other: "{0} years"
    },
    month: {
      one: "{0} month",
      other: "{0} months"
    },
    week: {
      one: "{0} week",
      other: "{0} weeks"
    },
    day: {
      one: "{0} day",
      other: "{0} days"
    },
    hour: {
      one: "{0} hour",
      other: "{0} hours"
    },
    minute: {
      one: "{0} minute",
      other: "{0} minutes"
    },
    second: {
      one: "{0} second",
      other: "{0} seconds"
    }
  }
};
ie.addLocale(_s);
const Ss = new ie("en-US"), Vr = (e) => Ss.format(new Date(e)), Os = Di(Vr, (e) => {
  const t = setInterval(() => e(Vr), 1e3);
  return () => clearInterval(t);
});
function $s(e) {
  fi(e, "svelte-xllbll", `.svelte-xllbll,.svelte-xllbll::before,.svelte-xllbll::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}.svelte-xllbll::before,.svelte-xllbll::after{--tw-content:''}:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}button.svelte-xllbll,input.svelte-xllbll{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button.svelte-xllbll{text-transform:none}button.svelte-xllbll{-webkit-appearance:button;background-color:transparent;background-image:none}.svelte-xllbll:-moz-focusring{outline:auto}.svelte-xllbll:-moz-ui-invalid{box-shadow:none}.svelte-xllbll::-webkit-inner-spin-button,.svelte-xllbll::-webkit-outer-spin-button{height:auto}.svelte-xllbll::-webkit-search-decoration{-webkit-appearance:none}.svelte-xllbll::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}input.svelte-xllbll::-moz-placeholder{opacity:1;color:#9ca3af}input.svelte-xllbll::placeholder{opacity:1;color:#9ca3af}button.svelte-xllbll{cursor:pointer}.svelte-xllbll:disabled{cursor:default}.svelte-xllbll,.svelte-xllbll::before,.svelte-xllbll::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position:  ;--tw-gradient-via-position:  ;--tw-gradient-to-position:  ;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.svelte-xllbll::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position:  ;--tw-gradient-via-position:  ;--tw-gradient-to-position:  ;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.absolute.svelte-xllbll{position:absolute}.bottom-2.svelte-xllbll{bottom:0.5rem}.right-2.svelte-xllbll{right:0.5rem}.my-2.svelte-xllbll{margin-top:0.5rem;margin-bottom:0.5rem}.mb-2.svelte-xllbll{margin-bottom:0.5rem}.mb-4.svelte-xllbll{margin-bottom:1rem}.mt-2.svelte-xllbll{margin-top:0.5rem}.block.svelte-xllbll{display:block}.flex.svelte-xllbll{display:flex}.hidden.svelte-xllbll{display:none}.w-3\\/4.svelte-xllbll{width:75%}.w-full.svelte-xllbll{width:100%}.flex-row.svelte-xllbll{flex-direction:row}.flex-col.svelte-xllbll{flex-direction:column}.items-baseline.svelte-xllbll{align-items:baseline}.items-stretch.svelte-xllbll{align-items:stretch}.justify-between.svelte-xllbll{justify-content:space-between}.place-self-start.svelte-xllbll{place-self:start}.place-self-end.svelte-xllbll{place-self:end}.rounded-lg.svelte-xllbll{border-radius:0.5rem}.rounded-md.svelte-xllbll{border-radius:0.375rem}.bg-lime-200.svelte-xllbll{--tw-bg-opacity:1;background-color:rgb(217 249 157 / var(--tw-bg-opacity))}.bg-sky-200.svelte-xllbll{--tw-bg-opacity:1;background-color:rgb(186 230 253 / var(--tw-bg-opacity))}.bg-violet-600.svelte-xllbll{--tw-bg-opacity:1;background-color:rgb(124 58 237 / var(--tw-bg-opacity))}.bg-white.svelte-xllbll{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.px-1.svelte-xllbll{padding-left:0.25rem;padding-right:0.25rem}.px-2.svelte-xllbll{padding-left:0.5rem;padding-right:0.5rem}.px-4.svelte-xllbll{padding-left:1rem;padding-right:1rem}.py-1.svelte-xllbll{padding-top:0.25rem;padding-bottom:0.25rem}.py-2.svelte-xllbll{padding-top:0.5rem;padding-bottom:0.5rem}.text-justify.svelte-xllbll{text-align:justify}.text-base.svelte-xllbll{font-size:1rem;line-height:1.5rem}.text-lg.svelte-xllbll{font-size:1.125rem;line-height:1.75rem}.text-sm.svelte-xllbll{font-size:0.875rem;line-height:1.25rem}.text-xl.svelte-xllbll{font-size:1.25rem;line-height:1.75rem}.font-bold.svelte-xllbll{font-weight:700}.text-white.svelte-xllbll{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}`);
}
function Xr(e, t, r) {
  const n = e.slice();
  return n[11] = t[r], n;
}
function Gr(e) {
  let t, r, n, i, s, l, f, g, p, I, y = ur(
    /*chat*/
    e[2]._.messages
  ), O = [];
  for (let x = 0; x < y.length; x += 1)
    O[x] = Qr(Xr(e, y, x));
  return {
    c() {
      for (let x = 0; x < O.length; x += 1)
        O[x].c();
      t = ae(), r = G("form"), n = G("input"), s = ae(), l = G("div"), l.textContent = "The assistant makes mistakes, always check important information", f = ae(), g = G("div"), g.textContent = "Also, the assistant cannot read the documentation yet", n.disabled = i = /*status*/
      e[0] && /*$status*/
      e[5].slug == "running", H(n, "class", "w-full px-2 py-1 text-lg rounded-lg svelte-xllbll"), H(n, "type", "text"), H(n, "placeholder", "What do you want help with?"), H(r, "action", "#"), H(r, "class", "my-2 svelte-xllbll"), H(l, "class", "mt-2 text-sm svelte-xllbll"), H(g, "class", "text-sm svelte-xllbll");
    },
    m(x, T) {
      for (let E = 0; E < O.length; E += 1)
        O[E] && O[E].m(x, T);
      ee(x, t, T), ee(x, r, T), W(r, n), ir(
        n,
        /*text*/
        e[3]
      ), ee(x, s, T), ee(x, l, T), ee(x, f, T), ee(x, g, T), p || (I = [
        mt(
          n,
          "input",
          /*input_input_handler*/
          e[9]
        ),
        mt(r, "submit", mi(
          /*handleUserMessage*/
          e[7]
        ))
      ], p = !0);
    },
    p(x, T) {
      if (T & /*chat, $timeAgo*/
      68) {
        y = ur(
          /*chat*/
          x[2]._.messages
        );
        let E;
        for (E = 0; E < y.length; E += 1) {
          const R = Xr(x, y, E);
          O[E] ? O[E].p(R, T) : (O[E] = Qr(R), O[E].c(), O[E].m(t.parentNode, t));
        }
        for (; E < O.length; E += 1)
          O[E].d(1);
        O.length = y.length;
      }
      T & /*status, $status*/
      33 && i !== (i = /*status*/
      x[0] && /*$status*/
      x[5].slug == "running") && (n.disabled = i), T & /*text*/
      8 && n.value !== /*text*/
      x[3] && ir(
        n,
        /*text*/
        x[3]
      );
    },
    d(x) {
      x && (Q(t), Q(r), Q(s), Q(l), Q(f), Q(g)), di(O, x), p = !1, He(I);
    }
  };
}
function Jr(e) {
  let t, r, n, i, s, l = (
    /*$timeAgo*/
    e[6](
      /*message*/
      e[11].timestamp
    ) + ""
  ), f, g, p, I = (
    /*message*/
    e[11].content + ""
  ), y;
  function O(E, R) {
    return (
      /*message*/
      E[11].role == "user" ? As : xs
    );
  }
  let x = O(e), T = x(e);
  return {
    c() {
      t = G("div"), r = G("div"), n = G("span"), T.c(), i = ae(), s = G("span"), f = me(l), g = ae(), p = G("div"), y = me(I), H(n, "class", "font-bold svelte-xllbll"), H(s, "class", "text-grey-500 text-sm svelte-xllbll"), H(r, "class", "mb-2 flex flex-row justify-between items-baseline svelte-xllbll"), H(p, "class", "svelte-xllbll"), H(t, "class", "rounded-md py-2 px-4 text-justify text-base block w-3/4 my-2 svelte-xllbll"), ne(
        t,
        "bg-sky-200",
        /*message*/
        e[11].role == "user"
      ), ne(
        t,
        "place-self-end",
        /*message*/
        e[11].role == "user"
      ), ne(
        t,
        "bg-lime-200",
        /*message*/
        e[11].role == "assistant"
      ), ne(
        t,
        "place-self-start",
        /*message*/
        e[11].role == "assistant"
      );
    },
    m(E, R) {
      ee(E, t, R), W(t, r), W(r, n), T.m(n, null), W(r, i), W(r, s), W(s, f), W(t, g), W(t, p), W(p, y);
    },
    p(E, R) {
      x !== (x = O(E)) && (T.d(1), T = x(E), T && (T.c(), T.m(n, null))), R & /*$timeAgo, chat*/
      68 && l !== (l = /*$timeAgo*/
      E[6](
        /*message*/
        E[11].timestamp
      ) + "") && Je(f, l), R & /*chat*/
      4 && I !== (I = /*message*/
      E[11].content + "") && Je(y, I), R & /*chat*/
      4 && ne(
        t,
        "bg-sky-200",
        /*message*/
        E[11].role == "user"
      ), R & /*chat*/
      4 && ne(
        t,
        "place-self-end",
        /*message*/
        E[11].role == "user"
      ), R & /*chat*/
      4 && ne(
        t,
        "bg-lime-200",
        /*message*/
        E[11].role == "assistant"
      ), R & /*chat*/
      4 && ne(
        t,
        "place-self-start",
        /*message*/
        E[11].role == "assistant"
      );
    },
    d(E) {
      E && Q(t), T.d();
    }
  };
}
function xs(e) {
  let t;
  return {
    c() {
      t = me("Assistant");
    },
    m(r, n) {
      ee(r, t, n);
    },
    d(r) {
      r && Q(t);
    }
  };
}
function As(e) {
  let t;
  return {
    c() {
      t = me("You");
    },
    m(r, n) {
      ee(r, t, n);
    },
    d(r) {
      r && Q(t);
    }
  };
}
function Qr(e) {
  let t, r = (
    /*message*/
    e[11].role != "system" && Jr(e)
  );
  return {
    c() {
      r && r.c(), t = hi();
    },
    m(n, i) {
      r && r.m(n, i), ee(n, t, i);
    },
    p(n, i) {
      /*message*/
      n[11].role != "system" ? r ? r.p(n, i) : (r = Jr(n), r.c(), r.m(t.parentNode, t)) : r && (r.d(1), r = null);
    },
    d(n) {
      n && Q(t), r && r.d(n);
    }
  };
}
function Es(e) {
  let t, r, n, i, s, l, f = (
    /*status*/
    (e[0] ? (
      /*$status*/
      e[5].icon
    ) : "") + ""
  ), g, p, I, y, O, x, T, E, R = (
    /*status*/
    (e[0] ? (
      /*$status*/
      e[5].icon
    ) : "") + ""
  ), K, U, oe, J, A, N = (
    /*model*/
    e[1] && /*chat*/
    e[2] && Gr(e)
  );
  return {
    c() {
      t = G("button"), r = G("span"), r.textContent = "✨", n = ae(), i = G("span"), i.textContent = "Need Help?", s = ae(), l = G("span"), g = me(f), I = ae(), y = G("content"), O = G("div"), x = G("span"), x.textContent = "✨ HPC Assistant", T = ae(), E = G("span"), K = me(R), oe = ae(), N && N.c(), H(r, "title", "Try our AI Assistant"), H(r, "class", "svelte-xllbll"), H(i, "class", "px-1 svelte-xllbll"), H(l, "title", p = /*status*/
      e[0] ? (
        /*$status*/
        e[5].description
      ) : ""), H(l, "class", "svelte-xllbll"), H(t, "class", "absolute bottom-2 right-2 py-2 px-4 bg-violet-600 font-bold text-lg text-white rounded-lg svelte-xllbll"), ne(
        t,
        "hidden",
        /*chatBotOpen*/
        e[4]
      ), H(x, "class", "svelte-xllbll"), H(E, "title", U = /*status*/
      e[0] ? (
        /*$status*/
        e[5].description
      ) : ""), H(E, "class", "svelte-xllbll"), H(O, "class", "mb-4 font-bold text-xl svelte-xllbll"), H(y, "class", "absolute bottom-2 right-2 py-2 px-4 bg-white text-base rounded-md flex flex-col items-stretch svelte-xllbll"), ne(y, "hidden", !/*chatBotOpen*/
      e[4]);
    },
    m(L, v) {
      ee(L, t, v), W(t, r), W(t, n), W(t, i), W(t, s), W(t, l), W(l, g), ee(L, I, v), ee(L, y, v), W(y, O), W(O, x), W(O, T), W(O, E), W(E, K), W(y, oe), N && N.m(y, null), J || (A = mt(
        t,
        "click",
        /*click_handler*/
        e[8]
      ), J = !0);
    },
    p(L, [v]) {
      v & /*status, $status*/
      33 && f !== (f = /*status*/
      (L[0] ? (
        /*$status*/
        L[5].icon
      ) : "") + "") && Je(g, f), v & /*status, $status*/
      33 && p !== (p = /*status*/
      L[0] ? (
        /*$status*/
        L[5].description
      ) : "") && H(l, "title", p), v & /*chatBotOpen*/
      16 && ne(
        t,
        "hidden",
        /*chatBotOpen*/
        L[4]
      ), v & /*status, $status*/
      33 && R !== (R = /*status*/
      (L[0] ? (
        /*$status*/
        L[5].icon
      ) : "") + "") && Je(K, R), v & /*status, $status*/
      33 && U !== (U = /*status*/
      L[0] ? (
        /*$status*/
        L[5].description
      ) : "") && H(E, "title", U), /*model*/
      L[1] && /*chat*/
      L[2] ? N ? N.p(L, v) : (N = Gr(L), N.c(), N.m(y, null)) : N && (N.d(1), N = null), v & /*chatBotOpen*/
      16 && ne(y, "hidden", !/*chatBotOpen*/
      L[4]);
    },
    i: ue,
    o: ue,
    d(L) {
      L && (Q(t), Q(I), Q(y)), N && N.d(), J = !1, A();
    }
  };
}
function Is(e, t, r) {
  let n, i = ue, s = () => (i(), i = kt(g, (R) => r(5, n = R)), g), l;
  ui(e, Os, (R) => r(6, l = R)), e.$$.on_destroy.push(() => i());
  let f, g, p, I;
  vi(async () => {
    const R = `${window.location.protocol}//${window.location.hostname}:${window.location.port}`;
    f = new Bi(R), s(r(0, g = f.status)), r(1, p = await f.getBestModel(dr.modelList)), p && (await f.preloadModel(p), r(2, I = new ea(() => r(2, I), f)), I.addMessage(dr.systemPrompt));
  });
  let y, O = !1;
  async function x() {
    I.addMessage({ role: "user", content: y }), r(3, y = ""), await I.complete(p);
  }
  const T = () => r(4, O = !0);
  function E() {
    y = this.value, r(3, y);
  }
  return [
    g,
    p,
    I,
    y,
    O,
    n,
    l,
    x,
    T,
    E
  ];
}
class Ts extends Li {
  constructor(t) {
    super(), Ii(this, t, Is, Es, tn, {}, $s);
  }
}
customElements.define("hpc-chatbot", Ti(Ts, {}, [], [], !0));
export {
  Ts as ChatBot
};
//# sourceMappingURL=components.js.map
