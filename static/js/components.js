var oi = Object.defineProperty;
var ii = (e, t, r) => t in e ? oi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var ue = (e, t, r) => (ii(e, typeof t != "symbol" ? t + "" : t, r), r);
function ce() {
}
function Zr(e) {
  return e();
}
function or() {
  return /* @__PURE__ */ Object.create(null);
}
function Re(e) {
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
function Pt(e, ...t) {
  if (e == null) {
    for (const n of t)
      n(void 0);
    return ce;
  }
  const r = e.subscribe(...t);
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
function si(e) {
  let t;
  return Pt(e, (r) => t = r)(), t;
}
function ui(e, t, r) {
  e.$$.on_destroy.push(Pt(t, r));
}
function W(e, t) {
  e.appendChild(t);
}
function fi(e, t, r) {
  const n = ci(e);
  if (!n.getElementById(t)) {
    const o = X("style");
    o.id = t, o.textContent = r, li(n, o);
  }
}
function ci(e) {
  if (!e)
    return document;
  const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
  return t && /** @type {ShadowRoot} */
  t.host ? (
    /** @type {ShadowRoot} */
    t
  ) : e.ownerDocument;
}
function li(e, t) {
  return W(
    /** @type {Document} */
    e.head || e,
    t
  ), t.sheet;
}
function oe(e, t, r) {
  e.insertBefore(t, r || null);
}
function re(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function di(e, t) {
  for (let r = 0; r < e.length; r += 1)
    e[r] && e[r].d(t);
}
function X(e) {
  return document.createElement(e);
}
function ye(e) {
  return document.createTextNode(e);
}
function fe() {
  return ye(" ");
}
function hi() {
  return ye("");
}
function Ne(e, t, r, n) {
  return e.addEventListener(t, r, n), () => e.removeEventListener(t, r, n);
}
function pi(e) {
  return function(t) {
    return t.preventDefault(), e.call(this, t);
  };
}
function q(e, t, r) {
  r == null ? e.removeAttribute(t) : e.getAttribute(t) !== r && e.setAttribute(t, r);
}
function mi(e) {
  return Array.from(e.childNodes);
}
function Qe(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
function ir(e, t) {
  e.value = t ?? "";
}
function ne(e, t, r) {
  e.classList.toggle(t, !!r);
}
function gi(e) {
  const t = {};
  return e.childNodes.forEach(
    /** @param {Element} node */
    (r) => {
      t[r.slot || "default"] = !0;
    }
  ), t;
}
let Me;
function je(e) {
  Me = e;
}
function yi() {
  if (!Me)
    throw new Error("Function called outside component initialization");
  return Me;
}
function vi(e) {
  yi().$$.on_mount.push(e);
}
const Te = [], ar = [];
let Le = [];
const sr = [], bi = /* @__PURE__ */ Promise.resolve();
let mt = !1;
function wi() {
  mt || (mt = !0, bi.then(rn));
}
function gt(e) {
  Le.push(e);
}
const ht = /* @__PURE__ */ new Set();
let Ae = 0;
function rn() {
  if (Ae !== 0)
    return;
  const e = Me;
  do {
    try {
      for (; Ae < Te.length; ) {
        const t = Te[Ae];
        Ae++, je(t), _i(t.$$);
      }
    } catch (t) {
      throw Te.length = 0, Ae = 0, t;
    }
    for (je(null), Te.length = 0, Ae = 0; ar.length; )
      ar.pop()();
    for (let t = 0; t < Le.length; t += 1) {
      const r = Le[t];
      ht.has(r) || (ht.add(r), r());
    }
    Le.length = 0;
  } while (Te.length);
  for (; sr.length; )
    sr.pop()();
  mt = !1, ht.clear(), je(e);
}
function _i(e) {
  if (e.fragment !== null) {
    e.update(), Re(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(gt);
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
function Ai(e, t, r) {
  const { fragment: n, after_update: o } = e.$$;
  n && n.m(t, r), gt(() => {
    const s = e.$$.on_mount.map(Zr).filter(en);
    e.$$.on_destroy ? e.$$.on_destroy.push(...s) : Re(s), e.$$.on_mount = [];
  }), o.forEach(gt);
}
function Ei(e, t) {
  const r = e.$$;
  r.fragment !== null && (Si(r.after_update), Re(r.on_destroy), r.fragment && r.fragment.d(t), r.on_destroy = r.fragment = null, r.ctx = []);
}
function Ii(e, t) {
  e.$$.dirty[0] === -1 && (Te.push(e), wi(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function Ti(e, t, r, n, o, s, c = null, f = [-1]) {
  const g = Me;
  je(e);
  const m = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: ce,
    not_equal: o,
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
  c && c(m.root);
  let T = !1;
  if (m.ctx = r ? r(e, t.props || {}, (y, _, ...A) => {
    const x = A.length ? A[0] : _;
    return m.ctx && o(m.ctx[y], m.ctx[y] = x) && (!m.skip_bound && m.bound[y] && m.bound[y](x), T && Ii(e, y)), _;
  }) : [], m.update(), T = !0, Re(m.before_update), m.fragment = n ? n(m.ctx) : !1, t.target) {
    if (t.hydrate) {
      const y = mi(t.target);
      m.fragment && m.fragment.l(y), y.forEach(re);
    } else
      m.fragment && m.fragment.c();
    t.intro && $i(e.$$.fragment), Ai(e, t.target, t.anchor), rn();
  }
  je(g);
}
let nn;
typeof HTMLElement == "function" && (nn = class extends HTMLElement {
  constructor(t, r, n) {
    super();
    /** The Svelte component constructor */
    ue(this, "$$ctor");
    /** Slots */
    ue(this, "$$s");
    /** The Svelte component instance */
    ue(this, "$$c");
    /** Whether or not the custom element is connected */
    ue(this, "$$cn", !1);
    /** Component props data */
    ue(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    ue(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    ue(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    ue(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    ue(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = t, this.$$s = r, n && this.attachShadow({ mode: "open" });
  }
  addEventListener(t, r, n) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(r), this.$$c) {
      const o = this.$$c.$on(t, r);
      this.$$l_u.set(r, o);
    }
    super.addEventListener(t, r, n);
  }
  removeEventListener(t, r, n) {
    if (super.removeEventListener(t, r, n), this.$$c) {
      const o = this.$$l_u.get(r);
      o && (o(), this.$$l_u.delete(r));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(s) {
        return () => {
          let c;
          return {
            c: function() {
              c = X("slot"), s !== "default" && q(c, "name", s);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(m, T) {
              oe(m, c, T);
            },
            d: function(m) {
              m && re(c);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn)
        return;
      const r = {}, n = gi(this);
      for (const s of this.$$s)
        s in n && (r[s] = [t(s)]);
      for (const s of this.attributes) {
        const c = this.$$g_p(s.name);
        c in this.$$d || (this.$$d[c] = Je(c, s.value, this.$$p_d, "toProp"));
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
      const o = () => {
        this.$$r = !0;
        for (const s in this.$$p_d)
          if (this.$$d[s] = this.$$c.$$.ctx[this.$$c.$$.props[s]], this.$$p_d[s].reflect) {
            const c = Je(
              s,
              this.$$d[s],
              this.$$p_d,
              "toAttribute"
            );
            c == null ? this.removeAttribute(this.$$p_d[s].attribute || s) : this.setAttribute(this.$$p_d[s].attribute || s, c);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(o), o();
      for (const s in this.$$l)
        for (const c of this.$$l[s]) {
          const f = this.$$c.$on(s, c);
          this.$$l_u.set(c, f);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(t, r, n) {
    var o;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Je(t, n, this.$$p_d, "toProp"), (o = this.$$c) == null || o.$set({ [t]: this.$$d[t] }));
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
function Je(e, t, r, n) {
  var s;
  const o = (s = r[e]) == null ? void 0 : s.type;
  if (t = o === "Boolean" && typeof t != "boolean" ? t != null : t, !n || !r[e])
    return t;
  if (n === "toAttribute")
    switch (o) {
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
    switch (o) {
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
function xi(e, t, r, n, o, s) {
  let c = class extends nn {
    constructor() {
      super(e, r, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Object.keys(t).map(
        (f) => (t[f].attribute || f).toLowerCase()
      );
    }
  };
  return Object.keys(t).forEach((f) => {
    Object.defineProperty(c.prototype, f, {
      get() {
        return this.$$c && f in this.$$c ? this.$$c[f] : this.$$d[f];
      },
      set(g) {
        var m;
        g = Je(f, g, t), this.$$d[f] = g, (m = this.$$c) == null || m.$set({ [f]: g });
      }
    });
  }), n.forEach((f) => {
    Object.defineProperty(c.prototype, f, {
      get() {
        var g;
        return (g = this.$$c) == null ? void 0 : g[f];
      }
    });
  }), s && (c = s(c)), e.element = /** @type {any} */
  c, c;
}
class ki {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ue(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ue(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Ei(this, 1), this.$destroy = ce;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, r) {
    if (!en(r))
      return ce;
    const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return n.push(r), () => {
      const o = n.indexOf(r);
      o !== -1 && n.splice(o, 1);
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
const Li = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Li);
var xe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Pi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Ve(e) {
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
    return function r(n, o, s) {
      function c(m, T) {
        if (!o[m]) {
          if (!n[m]) {
            var y = typeof Ve == "function" && Ve;
            if (!T && y)
              return y(m, !0);
            if (f)
              return f(m, !0);
            var _ = new Error("Cannot find module '" + m + "'");
            throw _.code = "MODULE_NOT_FOUND", _;
          }
          var A = o[m] = { exports: {} };
          n[m][0].call(A.exports, function(x) {
            var I = n[m][1][x];
            return c(I || x);
          }, A, A.exports, r, n, o, s);
        }
        return o[m].exports;
      }
      for (var f = typeof Ve == "function" && Ve, g = 0; g < s.length; g++)
        c(s[g]);
      return c;
    }({ 1: [function(r, n, o) {
      (function(s) {
        var c = s.MutationObserver || s.WebKitMutationObserver, f;
        if (c) {
          var g = 0, m = new c(x), T = s.document.createTextNode("");
          m.observe(T, {
            characterData: !0
          }), f = function() {
            T.data = g = ++g % 2;
          };
        } else if (!s.setImmediate && typeof s.MessageChannel < "u") {
          var y = new s.MessageChannel();
          y.port1.onmessage = x, f = function() {
            y.port2.postMessage(0);
          };
        } else
          "document" in s && "onreadystatechange" in s.document.createElement("script") ? f = function() {
            var R = s.document.createElement("script");
            R.onreadystatechange = function() {
              x(), R.onreadystatechange = null, R.parentNode.removeChild(R), R = null;
            }, s.document.documentElement.appendChild(R);
          } : f = function() {
            setTimeout(x, 0);
          };
        var _, A = [];
        function x() {
          _ = !0;
          for (var R, K, U = A.length; U; ) {
            for (K = A, A = [], R = -1; ++R < U; )
              K[R]();
            U = A.length;
          }
          _ = !1;
        }
        n.exports = I;
        function I(R) {
          A.push(R) === 1 && !_ && f();
        }
      }).call(this, typeof xe < "u" ? xe : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 2: [function(r, n, o) {
      var s = r(1);
      function c() {
      }
      var f = {}, g = ["REJECTED"], m = ["FULFILLED"], T = ["PENDING"];
      n.exports = y;
      function y(E) {
        if (typeof E != "function")
          throw new TypeError("resolver must be a function");
        this.state = T, this.queue = [], this.outcome = void 0, E !== c && I(this, E);
      }
      y.prototype.catch = function(E) {
        return this.then(null, E);
      }, y.prototype.then = function(E, D) {
        if (typeof E != "function" && this.state === m || typeof D != "function" && this.state === g)
          return this;
        var N = new this.constructor(c);
        if (this.state !== T) {
          var b = this.state === m ? E : D;
          A(N, b, this.outcome);
        } else
          this.queue.push(new _(N, E, D));
        return N;
      };
      function _(E, D, N) {
        this.promise = E, typeof D == "function" && (this.onFulfilled = D, this.callFulfilled = this.otherCallFulfilled), typeof N == "function" && (this.onRejected = N, this.callRejected = this.otherCallRejected);
      }
      _.prototype.callFulfilled = function(E) {
        f.resolve(this.promise, E);
      }, _.prototype.otherCallFulfilled = function(E) {
        A(this.promise, this.onFulfilled, E);
      }, _.prototype.callRejected = function(E) {
        f.reject(this.promise, E);
      }, _.prototype.otherCallRejected = function(E) {
        A(this.promise, this.onRejected, E);
      };
      function A(E, D, N) {
        s(function() {
          var b;
          try {
            b = D(N);
          } catch (L) {
            return f.reject(E, L);
          }
          b === E ? f.reject(E, new TypeError("Cannot resolve promise with itself")) : f.resolve(E, b);
        });
      }
      f.resolve = function(E, D) {
        var N = R(x, D);
        if (N.status === "error")
          return f.reject(E, N.value);
        var b = N.value;
        if (b)
          I(E, b);
        else {
          E.state = m, E.outcome = D;
          for (var L = -1, B = E.queue.length; ++L < B; )
            E.queue[L].callFulfilled(D);
        }
        return E;
      }, f.reject = function(E, D) {
        E.state = g, E.outcome = D;
        for (var N = -1, b = E.queue.length; ++N < b; )
          E.queue[N].callRejected(D);
        return E;
      };
      function x(E) {
        var D = E && E.then;
        if (E && (typeof E == "object" || typeof E == "function") && typeof D == "function")
          return function() {
            D.apply(E, arguments);
          };
      }
      function I(E, D) {
        var N = !1;
        function b(F) {
          N || (N = !0, f.reject(E, F));
        }
        function L(F) {
          N || (N = !0, f.resolve(E, F));
        }
        function B() {
          D(L, b);
        }
        var C = R(B);
        C.status === "error" && b(C.value);
      }
      function R(E, D) {
        var N = {};
        try {
          N.value = E(D), N.status = "success";
        } catch (b) {
          N.status = "error", N.value = b;
        }
        return N;
      }
      y.resolve = K;
      function K(E) {
        return E instanceof this ? E : f.resolve(new this(c), E);
      }
      y.reject = U;
      function U(E) {
        var D = new this(c);
        return f.reject(D, E);
      }
      y.all = ae;
      function ae(E) {
        var D = this;
        if (Object.prototype.toString.call(E) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var N = E.length, b = !1;
        if (!N)
          return this.resolve([]);
        for (var L = new Array(N), B = 0, C = -1, F = new this(c); ++C < N; )
          Y(E[C], C);
        return F;
        function Y(te, J) {
          D.resolve(te).then(M, function(Q) {
            b || (b = !0, f.reject(F, Q));
          });
          function M(Q) {
            L[J] = Q, ++B === N && !b && (b = !0, f.resolve(F, L));
          }
        }
      }
      y.race = G;
      function G(E) {
        var D = this;
        if (Object.prototype.toString.call(E) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var N = E.length, b = !1;
        if (!N)
          return this.resolve([]);
        for (var L = -1, B = new this(c); ++L < N; )
          C(E[L]);
        return B;
        function C(F) {
          D.resolve(F).then(function(Y) {
            b || (b = !0, f.resolve(B, Y));
          }, function(Y) {
            b || (b = !0, f.reject(B, Y));
          });
        }
      }
    }, { 1: 1 }], 3: [function(r, n, o) {
      (function(s) {
        typeof s.Promise != "function" && (s.Promise = r(2));
      }).call(this, typeof xe < "u" ? xe : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, { 2: 2 }], 4: [function(r, n, o) {
      var s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(i) {
        return typeof i;
      } : function(i) {
        return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
      };
      function c(i, u) {
        if (!(i instanceof u))
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
      function m() {
        try {
          if (!g || !g.open)
            return !1;
          var i = typeof openDatabase < "u" && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform), u = typeof fetch == "function" && fetch.toString().indexOf("[native code") !== -1;
          return (!i || u) && typeof indexedDB < "u" && // some outdated implementations of IDB that appear on Samsung
          // and HTC Android devices <4.4 are missing IDBKeyRange
          // See: https://github.com/mozilla/localForage/issues/128
          // See: https://github.com/mozilla/localForage/issues/272
          typeof IDBKeyRange < "u";
        } catch {
          return !1;
        }
      }
      function T(i, u) {
        i = i || [], u = u || {};
        try {
          return new Blob(i, u);
        } catch (l) {
          if (l.name !== "TypeError")
            throw l;
          for (var a = typeof BlobBuilder < "u" ? BlobBuilder : typeof MSBlobBuilder < "u" ? MSBlobBuilder : typeof MozBlobBuilder < "u" ? MozBlobBuilder : WebKitBlobBuilder, d = new a(), p = 0; p < i.length; p += 1)
            d.append(i[p]);
          return d.getBlob(u.type);
        }
      }
      typeof Promise > "u" && r(3);
      var y = Promise;
      function _(i, u) {
        u && i.then(function(a) {
          u(null, a);
        }, function(a) {
          u(a);
        });
      }
      function A(i, u, a) {
        typeof u == "function" && i.then(u), typeof a == "function" && i.catch(a);
      }
      function x(i) {
        return typeof i != "string" && (console.warn(i + " used as a key, but it is not a string."), i = String(i)), i;
      }
      function I() {
        if (arguments.length && typeof arguments[arguments.length - 1] == "function")
          return arguments[arguments.length - 1];
      }
      var R = "local-forage-detect-blob-support", K = void 0, U = {}, ae = Object.prototype.toString, G = "readonly", E = "readwrite";
      function D(i) {
        for (var u = i.length, a = new ArrayBuffer(u), d = new Uint8Array(a), p = 0; p < u; p++)
          d[p] = i.charCodeAt(p);
        return a;
      }
      function N(i) {
        return new y(function(u) {
          var a = i.transaction(R, E), d = T([""]);
          a.objectStore(R).put(d, "key"), a.onabort = function(p) {
            p.preventDefault(), p.stopPropagation(), u(!1);
          }, a.oncomplete = function() {
            var p = navigator.userAgent.match(/Chrome\/(\d+)/), l = navigator.userAgent.match(/Edge\//);
            u(l || !p || parseInt(p[1], 10) >= 43);
          };
        }).catch(function() {
          return !1;
        });
      }
      function b(i) {
        return typeof K == "boolean" ? y.resolve(K) : N(i).then(function(u) {
          return K = u, K;
        });
      }
      function L(i) {
        var u = U[i.name], a = {};
        a.promise = new y(function(d, p) {
          a.resolve = d, a.reject = p;
        }), u.deferredOperations.push(a), u.dbReady ? u.dbReady = u.dbReady.then(function() {
          return a.promise;
        }) : u.dbReady = a.promise;
      }
      function B(i) {
        var u = U[i.name], a = u.deferredOperations.pop();
        if (a)
          return a.resolve(), a.promise;
      }
      function C(i, u) {
        var a = U[i.name], d = a.deferredOperations.pop();
        if (d)
          return d.reject(u), d.promise;
      }
      function F(i, u) {
        return new y(function(a, d) {
          if (U[i.name] = U[i.name] || jt(), i.db)
            if (u)
              L(i), i.db.close();
            else
              return a(i.db);
          var p = [i.name];
          u && p.push(i.version);
          var l = g.open.apply(g, p);
          u && (l.onupgradeneeded = function(v) {
            var w = l.result;
            try {
              w.createObjectStore(i.storeName), v.oldVersion <= 1 && w.createObjectStore(R);
            } catch (S) {
              if (S.name === "ConstraintError")
                console.warn('The database "' + i.name + '" has been upgraded from version ' + v.oldVersion + " to version " + v.newVersion + ', but the storage "' + i.storeName + '" already exists.');
              else
                throw S;
            }
          }), l.onerror = function(v) {
            v.preventDefault(), d(l.error);
          }, l.onsuccess = function() {
            var v = l.result;
            v.onversionchange = function(w) {
              w.target.close();
            }, a(v), B(i);
          };
        });
      }
      function Y(i) {
        return F(i, !1);
      }
      function te(i) {
        return F(i, !0);
      }
      function J(i, u) {
        if (!i.db)
          return !0;
        var a = !i.db.objectStoreNames.contains(i.storeName), d = i.version < i.db.version, p = i.version > i.db.version;
        if (d && (i.version !== u && console.warn('The database "' + i.name + `" can't be downgraded from version ` + i.db.version + " to version " + i.version + "."), i.version = i.db.version), p || a) {
          if (a) {
            var l = i.db.version + 1;
            l > i.version && (i.version = l);
          }
          return !0;
        }
        return !1;
      }
      function M(i) {
        return new y(function(u, a) {
          var d = new FileReader();
          d.onerror = a, d.onloadend = function(p) {
            var l = btoa(p.target.result || "");
            u({
              __local_forage_encoded_blob: !0,
              data: l,
              type: i.type
            });
          }, d.readAsBinaryString(i);
        });
      }
      function Q(i) {
        var u = D(atob(i.data));
        return T([u], { type: i.type });
      }
      function Ct(i) {
        return i && i.__local_forage_encoded_blob;
      }
      function oo(i) {
        var u = this, a = u._initReady().then(function() {
          var d = U[u._dbInfo.name];
          if (d && d.dbReady)
            return d.dbReady;
        });
        return A(a, i, i), a;
      }
      function io(i) {
        L(i);
        for (var u = U[i.name], a = u.forages, d = 0; d < a.length; d++) {
          var p = a[d];
          p._dbInfo.db && (p._dbInfo.db.close(), p._dbInfo.db = null);
        }
        return i.db = null, Y(i).then(function(l) {
          return i.db = l, J(i) ? te(i) : l;
        }).then(function(l) {
          i.db = u.db = l;
          for (var v = 0; v < a.length; v++)
            a[v]._dbInfo.db = l;
        }).catch(function(l) {
          throw C(i, l), l;
        });
      }
      function he(i, u, a, d) {
        d === void 0 && (d = 1);
        try {
          var p = i.db.transaction(i.storeName, u);
          a(null, p);
        } catch (l) {
          if (d > 0 && (!i.db || l.name === "InvalidStateError" || l.name === "NotFoundError"))
            return y.resolve().then(function() {
              if (!i.db || l.name === "NotFoundError" && !i.db.objectStoreNames.contains(i.storeName) && i.version <= i.db.version)
                return i.db && (i.version = i.db.version + 1), te(i);
            }).then(function() {
              return io(i).then(function() {
                he(i, u, a, d - 1);
              });
            }).catch(a);
          a(l);
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
      function ao(i) {
        var u = this, a = {
          db: null
        };
        if (i)
          for (var d in i)
            a[d] = i[d];
        var p = U[a.name];
        p || (p = jt(), U[a.name] = p), p.forages.push(u), u._initReady || (u._initReady = u.ready, u.ready = oo);
        var l = [];
        function v() {
          return y.resolve();
        }
        for (var w = 0; w < p.forages.length; w++) {
          var S = p.forages[w];
          S !== u && l.push(S._initReady().catch(v));
        }
        var O = p.forages.slice(0);
        return y.all(l).then(function() {
          return a.db = p.db, Y(a);
        }).then(function($) {
          return a.db = $, J(a, u._defaultConfig.version) ? te(a) : $;
        }).then(function($) {
          a.db = p.db = $, u._dbInfo = a;
          for (var k = 0; k < O.length; k++) {
            var j = O[k];
            j !== u && (j._dbInfo.db = a.db, j._dbInfo.version = a.version);
          }
        });
      }
      function so(i, u) {
        var a = this;
        i = x(i);
        var d = new y(function(p, l) {
          a.ready().then(function() {
            he(a._dbInfo, G, function(v, w) {
              if (v)
                return l(v);
              try {
                var S = w.objectStore(a._dbInfo.storeName), O = S.get(i);
                O.onsuccess = function() {
                  var $ = O.result;
                  $ === void 0 && ($ = null), Ct($) && ($ = Q($)), p($);
                }, O.onerror = function() {
                  l(O.error);
                };
              } catch ($) {
                l($);
              }
            });
          }).catch(l);
        });
        return _(d, u), d;
      }
      function uo(i, u) {
        var a = this, d = new y(function(p, l) {
          a.ready().then(function() {
            he(a._dbInfo, G, function(v, w) {
              if (v)
                return l(v);
              try {
                var S = w.objectStore(a._dbInfo.storeName), O = S.openCursor(), $ = 1;
                O.onsuccess = function() {
                  var k = O.result;
                  if (k) {
                    var j = k.value;
                    Ct(j) && (j = Q(j));
                    var z = i(j, k.key, $++);
                    z !== void 0 ? p(z) : k.continue();
                  } else
                    p();
                }, O.onerror = function() {
                  l(O.error);
                };
              } catch (k) {
                l(k);
              }
            });
          }).catch(l);
        });
        return _(d, u), d;
      }
      function fo(i, u, a) {
        var d = this;
        i = x(i);
        var p = new y(function(l, v) {
          var w;
          d.ready().then(function() {
            return w = d._dbInfo, ae.call(u) === "[object Blob]" ? b(w.db).then(function(S) {
              return S ? u : M(u);
            }) : u;
          }).then(function(S) {
            he(d._dbInfo, E, function(O, $) {
              if (O)
                return v(O);
              try {
                var k = $.objectStore(d._dbInfo.storeName);
                S === null && (S = void 0);
                var j = k.put(S, i);
                $.oncomplete = function() {
                  S === void 0 && (S = null), l(S);
                }, $.onabort = $.onerror = function() {
                  var z = j.error ? j.error : j.transaction.error;
                  v(z);
                };
              } catch (z) {
                v(z);
              }
            });
          }).catch(v);
        });
        return _(p, a), p;
      }
      function co(i, u) {
        var a = this;
        i = x(i);
        var d = new y(function(p, l) {
          a.ready().then(function() {
            he(a._dbInfo, E, function(v, w) {
              if (v)
                return l(v);
              try {
                var S = w.objectStore(a._dbInfo.storeName), O = S.delete(i);
                w.oncomplete = function() {
                  p();
                }, w.onerror = function() {
                  l(O.error);
                }, w.onabort = function() {
                  var $ = O.error ? O.error : O.transaction.error;
                  l($);
                };
              } catch ($) {
                l($);
              }
            });
          }).catch(l);
        });
        return _(d, u), d;
      }
      function lo(i) {
        var u = this, a = new y(function(d, p) {
          u.ready().then(function() {
            he(u._dbInfo, E, function(l, v) {
              if (l)
                return p(l);
              try {
                var w = v.objectStore(u._dbInfo.storeName), S = w.clear();
                v.oncomplete = function() {
                  d();
                }, v.onabort = v.onerror = function() {
                  var O = S.error ? S.error : S.transaction.error;
                  p(O);
                };
              } catch (O) {
                p(O);
              }
            });
          }).catch(p);
        });
        return _(a, i), a;
      }
      function ho(i) {
        var u = this, a = new y(function(d, p) {
          u.ready().then(function() {
            he(u._dbInfo, G, function(l, v) {
              if (l)
                return p(l);
              try {
                var w = v.objectStore(u._dbInfo.storeName), S = w.count();
                S.onsuccess = function() {
                  d(S.result);
                }, S.onerror = function() {
                  p(S.error);
                };
              } catch (O) {
                p(O);
              }
            });
          }).catch(p);
        });
        return _(a, i), a;
      }
      function po(i, u) {
        var a = this, d = new y(function(p, l) {
          if (i < 0) {
            p(null);
            return;
          }
          a.ready().then(function() {
            he(a._dbInfo, G, function(v, w) {
              if (v)
                return l(v);
              try {
                var S = w.objectStore(a._dbInfo.storeName), O = !1, $ = S.openKeyCursor();
                $.onsuccess = function() {
                  var k = $.result;
                  if (!k) {
                    p(null);
                    return;
                  }
                  i === 0 || O ? p(k.key) : (O = !0, k.advance(i));
                }, $.onerror = function() {
                  l($.error);
                };
              } catch (k) {
                l(k);
              }
            });
          }).catch(l);
        });
        return _(d, u), d;
      }
      function mo(i) {
        var u = this, a = new y(function(d, p) {
          u.ready().then(function() {
            he(u._dbInfo, G, function(l, v) {
              if (l)
                return p(l);
              try {
                var w = v.objectStore(u._dbInfo.storeName), S = w.openKeyCursor(), O = [];
                S.onsuccess = function() {
                  var $ = S.result;
                  if (!$) {
                    d(O);
                    return;
                  }
                  O.push($.key), $.continue();
                }, S.onerror = function() {
                  p(S.error);
                };
              } catch ($) {
                p($);
              }
            });
          }).catch(p);
        });
        return _(a, i), a;
      }
      function go(i, u) {
        u = I.apply(this, arguments);
        var a = this.config();
        i = typeof i != "function" && i || {}, i.name || (i.name = i.name || a.name, i.storeName = i.storeName || a.storeName);
        var d = this, p;
        if (!i.name)
          p = y.reject("Invalid arguments");
        else {
          var l = i.name === a.name && d._dbInfo.db, v = l ? y.resolve(d._dbInfo.db) : Y(i).then(function(w) {
            var S = U[i.name], O = S.forages;
            S.db = w;
            for (var $ = 0; $ < O.length; $++)
              O[$]._dbInfo.db = w;
            return w;
          });
          i.storeName ? p = v.then(function(w) {
            if (w.objectStoreNames.contains(i.storeName)) {
              var S = w.version + 1;
              L(i);
              var O = U[i.name], $ = O.forages;
              w.close();
              for (var k = 0; k < $.length; k++) {
                var j = $[k];
                j._dbInfo.db = null, j._dbInfo.version = S;
              }
              var z = new y(function(H, ee) {
                var Z = g.open(i.name, S);
                Z.onerror = function(se) {
                  var Be = Z.result;
                  Be.close(), ee(se);
                }, Z.onupgradeneeded = function() {
                  var se = Z.result;
                  se.deleteObjectStore(i.storeName);
                }, Z.onsuccess = function() {
                  var se = Z.result;
                  se.close(), H(se);
                };
              });
              return z.then(function(H) {
                O.db = H;
                for (var ee = 0; ee < $.length; ee++) {
                  var Z = $[ee];
                  Z._dbInfo.db = H, B(Z._dbInfo);
                }
              }).catch(function(H) {
                throw (C(i, H) || y.resolve()).catch(function() {
                }), H;
              });
            }
          }) : p = v.then(function(w) {
            L(i);
            var S = U[i.name], O = S.forages;
            w.close();
            for (var $ = 0; $ < O.length; $++) {
              var k = O[$];
              k._dbInfo.db = null;
            }
            var j = new y(function(z, H) {
              var ee = g.deleteDatabase(i.name);
              ee.onerror = function() {
                var Z = ee.result;
                Z && Z.close(), H(ee.error);
              }, ee.onblocked = function() {
                console.warn('dropInstance blocked for database "' + i.name + '" until all open connections are closed');
              }, ee.onsuccess = function() {
                var Z = ee.result;
                Z && Z.close(), z(Z);
              };
            });
            return j.then(function(z) {
              S.db = z;
              for (var H = 0; H < O.length; H++) {
                var ee = O[H];
                B(ee._dbInfo);
              }
            }).catch(function(z) {
              throw (C(i, z) || y.resolve()).catch(function() {
              }), z;
            });
          });
        }
        return _(p, u), p;
      }
      var yo = {
        _driver: "asyncStorage",
        _initStorage: ao,
        _support: m(),
        iterate: uo,
        getItem: so,
        setItem: fo,
        removeItem: co,
        clear: lo,
        length: ho,
        key: po,
        keys: mo,
        dropInstance: go
      };
      function vo() {
        return typeof openDatabase == "function";
      }
      var me = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bo = "~~local_forage_type~", qt = /^~~local_forage_type~([^~]+)~/, We = "__lfsc__:", ot = We.length, it = "arbf", at = "blob", Ft = "si08", Mt = "ui08", Ut = "uic8", zt = "si16", Ht = "si32", Yt = "ur16", Wt = "ui32", Kt = "fl32", Vt = "fl64", Xt = ot + it.length, Gt = Object.prototype.toString;
      function Jt(i) {
        var u = i.length * 0.75, a = i.length, d, p = 0, l, v, w, S;
        i[i.length - 1] === "=" && (u--, i[i.length - 2] === "=" && u--);
        var O = new ArrayBuffer(u), $ = new Uint8Array(O);
        for (d = 0; d < a; d += 4)
          l = me.indexOf(i[d]), v = me.indexOf(i[d + 1]), w = me.indexOf(i[d + 2]), S = me.indexOf(i[d + 3]), $[p++] = l << 2 | v >> 4, $[p++] = (v & 15) << 4 | w >> 2, $[p++] = (w & 3) << 6 | S & 63;
        return O;
      }
      function st(i) {
        var u = new Uint8Array(i), a = "", d;
        for (d = 0; d < u.length; d += 3)
          a += me[u[d] >> 2], a += me[(u[d] & 3) << 4 | u[d + 1] >> 4], a += me[(u[d + 1] & 15) << 2 | u[d + 2] >> 6], a += me[u[d + 2] & 63];
        return u.length % 3 === 2 ? a = a.substring(0, a.length - 1) + "=" : u.length % 3 === 1 && (a = a.substring(0, a.length - 2) + "=="), a;
      }
      function wo(i, u) {
        var a = "";
        if (i && (a = Gt.call(i)), i && (a === "[object ArrayBuffer]" || i.buffer && Gt.call(i.buffer) === "[object ArrayBuffer]")) {
          var d, p = We;
          i instanceof ArrayBuffer ? (d = i, p += it) : (d = i.buffer, a === "[object Int8Array]" ? p += Ft : a === "[object Uint8Array]" ? p += Mt : a === "[object Uint8ClampedArray]" ? p += Ut : a === "[object Int16Array]" ? p += zt : a === "[object Uint16Array]" ? p += Yt : a === "[object Int32Array]" ? p += Ht : a === "[object Uint32Array]" ? p += Wt : a === "[object Float32Array]" ? p += Kt : a === "[object Float64Array]" ? p += Vt : u(new Error("Failed to get type for BinaryArray"))), u(p + st(d));
        } else if (a === "[object Blob]") {
          var l = new FileReader();
          l.onload = function() {
            var v = bo + i.type + "~" + st(this.result);
            u(We + at + v);
          }, l.readAsArrayBuffer(i);
        } else
          try {
            u(JSON.stringify(i));
          } catch (v) {
            console.error("Couldn't convert value into a JSON string: ", i), u(null, v);
          }
      }
      function _o(i) {
        if (i.substring(0, ot) !== We)
          return JSON.parse(i);
        var u = i.substring(Xt), a = i.substring(ot, Xt), d;
        if (a === at && qt.test(u)) {
          var p = u.match(qt);
          d = p[1], u = u.substring(p[0].length);
        }
        var l = Jt(u);
        switch (a) {
          case it:
            return l;
          case at:
            return T([l], { type: d });
          case Ft:
            return new Int8Array(l);
          case Mt:
            return new Uint8Array(l);
          case Ut:
            return new Uint8ClampedArray(l);
          case zt:
            return new Int16Array(l);
          case Yt:
            return new Uint16Array(l);
          case Ht:
            return new Int32Array(l);
          case Wt:
            return new Uint32Array(l);
          case Kt:
            return new Float32Array(l);
          case Vt:
            return new Float64Array(l);
          default:
            throw new Error("Unkown type: " + a);
        }
      }
      var ut = {
        serialize: wo,
        deserialize: _o,
        stringToBuffer: Jt,
        bufferToString: st
      };
      function Qt(i, u, a, d) {
        i.executeSql("CREATE TABLE IF NOT EXISTS " + u.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], a, d);
      }
      function So(i) {
        var u = this, a = {
          db: null
        };
        if (i)
          for (var d in i)
            a[d] = typeof i[d] != "string" ? i[d].toString() : i[d];
        var p = new y(function(l, v) {
          try {
            a.db = openDatabase(a.name, String(a.version), a.description, a.size);
          } catch (w) {
            return v(w);
          }
          a.db.transaction(function(w) {
            Qt(w, a, function() {
              u._dbInfo = a, l();
            }, function(S, O) {
              v(O);
            });
          }, v);
        });
        return a.serializer = ut, p;
      }
      function ge(i, u, a, d, p, l) {
        i.executeSql(a, d, p, function(v, w) {
          w.code === w.SYNTAX_ERR ? v.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [u.storeName], function(S, O) {
            O.rows.length ? l(S, w) : Qt(S, u, function() {
              S.executeSql(a, d, p, l);
            }, l);
          }, l) : l(v, w);
        }, l);
      }
      function Oo(i, u) {
        var a = this;
        i = x(i);
        var d = new y(function(p, l) {
          a.ready().then(function() {
            var v = a._dbInfo;
            v.db.transaction(function(w) {
              ge(w, v, "SELECT * FROM " + v.storeName + " WHERE key = ? LIMIT 1", [i], function(S, O) {
                var $ = O.rows.length ? O.rows.item(0).value : null;
                $ && ($ = v.serializer.deserialize($)), p($);
              }, function(S, O) {
                l(O);
              });
            });
          }).catch(l);
        });
        return _(d, u), d;
      }
      function $o(i, u) {
        var a = this, d = new y(function(p, l) {
          a.ready().then(function() {
            var v = a._dbInfo;
            v.db.transaction(function(w) {
              ge(w, v, "SELECT * FROM " + v.storeName, [], function(S, O) {
                for (var $ = O.rows, k = $.length, j = 0; j < k; j++) {
                  var z = $.item(j), H = z.value;
                  if (H && (H = v.serializer.deserialize(H)), H = i(H, z.key, j + 1), H !== void 0) {
                    p(H);
                    return;
                  }
                }
                p();
              }, function(S, O) {
                l(O);
              });
            });
          }).catch(l);
        });
        return _(d, u), d;
      }
      function Zt(i, u, a, d) {
        var p = this;
        i = x(i);
        var l = new y(function(v, w) {
          p.ready().then(function() {
            u === void 0 && (u = null);
            var S = u, O = p._dbInfo;
            O.serializer.serialize(u, function($, k) {
              k ? w(k) : O.db.transaction(function(j) {
                ge(j, O, "INSERT OR REPLACE INTO " + O.storeName + " (key, value) VALUES (?, ?)", [i, $], function() {
                  v(S);
                }, function(z, H) {
                  w(H);
                });
              }, function(j) {
                if (j.code === j.QUOTA_ERR) {
                  if (d > 0) {
                    v(Zt.apply(p, [i, S, a, d - 1]));
                    return;
                  }
                  w(j);
                }
              });
            });
          }).catch(w);
        });
        return _(l, a), l;
      }
      function Ao(i, u, a) {
        return Zt.apply(this, [i, u, a, 1]);
      }
      function Eo(i, u) {
        var a = this;
        i = x(i);
        var d = new y(function(p, l) {
          a.ready().then(function() {
            var v = a._dbInfo;
            v.db.transaction(function(w) {
              ge(w, v, "DELETE FROM " + v.storeName + " WHERE key = ?", [i], function() {
                p();
              }, function(S, O) {
                l(O);
              });
            });
          }).catch(l);
        });
        return _(d, u), d;
      }
      function Io(i) {
        var u = this, a = new y(function(d, p) {
          u.ready().then(function() {
            var l = u._dbInfo;
            l.db.transaction(function(v) {
              ge(v, l, "DELETE FROM " + l.storeName, [], function() {
                d();
              }, function(w, S) {
                p(S);
              });
            });
          }).catch(p);
        });
        return _(a, i), a;
      }
      function To(i) {
        var u = this, a = new y(function(d, p) {
          u.ready().then(function() {
            var l = u._dbInfo;
            l.db.transaction(function(v) {
              ge(v, l, "SELECT COUNT(key) as c FROM " + l.storeName, [], function(w, S) {
                var O = S.rows.item(0).c;
                d(O);
              }, function(w, S) {
                p(S);
              });
            });
          }).catch(p);
        });
        return _(a, i), a;
      }
      function xo(i, u) {
        var a = this, d = new y(function(p, l) {
          a.ready().then(function() {
            var v = a._dbInfo;
            v.db.transaction(function(w) {
              ge(w, v, "SELECT key FROM " + v.storeName + " WHERE id = ? LIMIT 1", [i + 1], function(S, O) {
                var $ = O.rows.length ? O.rows.item(0).key : null;
                p($);
              }, function(S, O) {
                l(O);
              });
            });
          }).catch(l);
        });
        return _(d, u), d;
      }
      function ko(i) {
        var u = this, a = new y(function(d, p) {
          u.ready().then(function() {
            var l = u._dbInfo;
            l.db.transaction(function(v) {
              ge(v, l, "SELECT key FROM " + l.storeName, [], function(w, S) {
                for (var O = [], $ = 0; $ < S.rows.length; $++)
                  O.push(S.rows.item($).key);
                d(O);
              }, function(w, S) {
                p(S);
              });
            });
          }).catch(p);
        });
        return _(a, i), a;
      }
      function Lo(i) {
        return new y(function(u, a) {
          i.transaction(function(d) {
            d.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(p, l) {
              for (var v = [], w = 0; w < l.rows.length; w++)
                v.push(l.rows.item(w).name);
              u({
                db: i,
                storeNames: v
              });
            }, function(p, l) {
              a(l);
            });
          }, function(d) {
            a(d);
          });
        });
      }
      function Po(i, u) {
        u = I.apply(this, arguments);
        var a = this.config();
        i = typeof i != "function" && i || {}, i.name || (i.name = i.name || a.name, i.storeName = i.storeName || a.storeName);
        var d = this, p;
        return i.name ? p = new y(function(l) {
          var v;
          i.name === a.name ? v = d._dbInfo.db : v = openDatabase(i.name, "", "", 0), i.storeName ? l({
            db: v,
            storeNames: [i.storeName]
          }) : l(Lo(v));
        }).then(function(l) {
          return new y(function(v, w) {
            l.db.transaction(function(S) {
              function O(z) {
                return new y(function(H, ee) {
                  S.executeSql("DROP TABLE IF EXISTS " + z, [], function() {
                    H();
                  }, function(Z, se) {
                    ee(se);
                  });
                });
              }
              for (var $ = [], k = 0, j = l.storeNames.length; k < j; k++)
                $.push(O(l.storeNames[k]));
              y.all($).then(function() {
                v();
              }).catch(function(z) {
                w(z);
              });
            }, function(S) {
              w(S);
            });
          });
        }) : p = y.reject("Invalid arguments"), _(p, u), p;
      }
      var No = {
        _driver: "webSQLStorage",
        _initStorage: So,
        _support: vo(),
        iterate: $o,
        getItem: Oo,
        setItem: Ao,
        removeItem: Eo,
        clear: Io,
        length: To,
        key: xo,
        keys: ko,
        dropInstance: Po
      };
      function Ro() {
        try {
          return typeof localStorage < "u" && "setItem" in localStorage && // in IE8 typeof localStorage.setItem === 'object'
          !!localStorage.setItem;
        } catch {
          return !1;
        }
      }
      function er(i, u) {
        var a = i.name + "/";
        return i.storeName !== u.storeName && (a += i.storeName + "/"), a;
      }
      function Do() {
        var i = "_localforage_support_test";
        try {
          return localStorage.setItem(i, !0), localStorage.removeItem(i), !1;
        } catch {
          return !0;
        }
      }
      function Bo() {
        return !Do() || localStorage.length > 0;
      }
      function Co(i) {
        var u = this, a = {};
        if (i)
          for (var d in i)
            a[d] = i[d];
        return a.keyPrefix = er(i, u._defaultConfig), Bo() ? (u._dbInfo = a, a.serializer = ut, y.resolve()) : y.reject();
      }
      function jo(i) {
        var u = this, a = u.ready().then(function() {
          for (var d = u._dbInfo.keyPrefix, p = localStorage.length - 1; p >= 0; p--) {
            var l = localStorage.key(p);
            l.indexOf(d) === 0 && localStorage.removeItem(l);
          }
        });
        return _(a, i), a;
      }
      function qo(i, u) {
        var a = this;
        i = x(i);
        var d = a.ready().then(function() {
          var p = a._dbInfo, l = localStorage.getItem(p.keyPrefix + i);
          return l && (l = p.serializer.deserialize(l)), l;
        });
        return _(d, u), d;
      }
      function Fo(i, u) {
        var a = this, d = a.ready().then(function() {
          for (var p = a._dbInfo, l = p.keyPrefix, v = l.length, w = localStorage.length, S = 1, O = 0; O < w; O++) {
            var $ = localStorage.key(O);
            if ($.indexOf(l) === 0) {
              var k = localStorage.getItem($);
              if (k && (k = p.serializer.deserialize(k)), k = i(k, $.substring(v), S++), k !== void 0)
                return k;
            }
          }
        });
        return _(d, u), d;
      }
      function Mo(i, u) {
        var a = this, d = a.ready().then(function() {
          var p = a._dbInfo, l;
          try {
            l = localStorage.key(i);
          } catch {
            l = null;
          }
          return l && (l = l.substring(p.keyPrefix.length)), l;
        });
        return _(d, u), d;
      }
      function Uo(i) {
        var u = this, a = u.ready().then(function() {
          for (var d = u._dbInfo, p = localStorage.length, l = [], v = 0; v < p; v++) {
            var w = localStorage.key(v);
            w.indexOf(d.keyPrefix) === 0 && l.push(w.substring(d.keyPrefix.length));
          }
          return l;
        });
        return _(a, i), a;
      }
      function zo(i) {
        var u = this, a = u.keys().then(function(d) {
          return d.length;
        });
        return _(a, i), a;
      }
      function Ho(i, u) {
        var a = this;
        i = x(i);
        var d = a.ready().then(function() {
          var p = a._dbInfo;
          localStorage.removeItem(p.keyPrefix + i);
        });
        return _(d, u), d;
      }
      function Yo(i, u, a) {
        var d = this;
        i = x(i);
        var p = d.ready().then(function() {
          u === void 0 && (u = null);
          var l = u;
          return new y(function(v, w) {
            var S = d._dbInfo;
            S.serializer.serialize(u, function(O, $) {
              if ($)
                w($);
              else
                try {
                  localStorage.setItem(S.keyPrefix + i, O), v(l);
                } catch (k) {
                  (k.name === "QuotaExceededError" || k.name === "NS_ERROR_DOM_QUOTA_REACHED") && w(k), w(k);
                }
            });
          });
        });
        return _(p, a), p;
      }
      function Wo(i, u) {
        if (u = I.apply(this, arguments), i = typeof i != "function" && i || {}, !i.name) {
          var a = this.config();
          i.name = i.name || a.name, i.storeName = i.storeName || a.storeName;
        }
        var d = this, p;
        return i.name ? p = new y(function(l) {
          i.storeName ? l(er(i, d._defaultConfig)) : l(i.name + "/");
        }).then(function(l) {
          for (var v = localStorage.length - 1; v >= 0; v--) {
            var w = localStorage.key(v);
            w.indexOf(l) === 0 && localStorage.removeItem(w);
          }
        }) : p = y.reject("Invalid arguments"), _(p, u), p;
      }
      var Ko = {
        _driver: "localStorageWrapper",
        _initStorage: Co,
        _support: Ro(),
        iterate: Fo,
        getItem: qo,
        setItem: Yo,
        removeItem: Ho,
        clear: jo,
        length: zo,
        key: Mo,
        keys: Uo,
        dropInstance: Wo
      }, Vo = function(u, a) {
        return u === a || typeof u == "number" && typeof a == "number" && isNaN(u) && isNaN(a);
      }, Xo = function(u, a) {
        for (var d = u.length, p = 0; p < d; ) {
          if (Vo(u[p], a))
            return !0;
          p++;
        }
        return !1;
      }, tr = Array.isArray || function(i) {
        return Object.prototype.toString.call(i) === "[object Array]";
      }, De = {}, rr = {}, $e = {
        INDEXEDDB: yo,
        WEBSQL: No,
        LOCALSTORAGE: Ko
      }, Go = [$e.INDEXEDDB._driver, $e.WEBSQL._driver, $e.LOCALSTORAGE._driver], Ke = ["dropInstance"], ft = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(Ke), Jo = {
        description: "",
        driver: Go.slice(),
        name: "localforage",
        // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
        // we can use without a prompt.
        size: 4980736,
        storeName: "keyvaluepairs",
        version: 1
      };
      function Qo(i, u) {
        i[u] = function() {
          var a = arguments;
          return i.ready().then(function() {
            return i[u].apply(i, a);
          });
        };
      }
      function ct() {
        for (var i = 1; i < arguments.length; i++) {
          var u = arguments[i];
          if (u)
            for (var a in u)
              u.hasOwnProperty(a) && (tr(u[a]) ? arguments[0][a] = u[a].slice() : arguments[0][a] = u[a]);
        }
        return arguments[0];
      }
      var Zo = function() {
        function i(u) {
          c(this, i);
          for (var a in $e)
            if ($e.hasOwnProperty(a)) {
              var d = $e[a], p = d._driver;
              this[a] = p, De[p] || this.defineDriver(d);
            }
          this._defaultConfig = ct({}, Jo), this._config = ct({}, this._defaultConfig, u), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch(function() {
          });
        }
        return i.prototype.config = function(a) {
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
        }, i.prototype.defineDriver = function(a, d, p) {
          var l = new y(function(v, w) {
            try {
              var S = a._driver, O = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
              if (!a._driver) {
                w(O);
                return;
              }
              for (var $ = ft.concat("_initStorage"), k = 0, j = $.length; k < j; k++) {
                var z = $[k], H = !Xo(Ke, z);
                if ((H || a[z]) && typeof a[z] != "function") {
                  w(O);
                  return;
                }
              }
              var ee = function() {
                for (var Be = function(ri) {
                  return function() {
                    var ni = new Error("Method " + ri + " is not implemented by the current driver"), nr = y.reject(ni);
                    return _(nr, arguments[arguments.length - 1]), nr;
                  };
                }, lt = 0, ti = Ke.length; lt < ti; lt++) {
                  var dt = Ke[lt];
                  a[dt] || (a[dt] = Be(dt));
                }
              };
              ee();
              var Z = function(Be) {
                De[S] && console.info("Redefining LocalForage driver: " + S), De[S] = a, rr[S] = Be, v();
              };
              "_support" in a ? a._support && typeof a._support == "function" ? a._support().then(Z, w) : Z(!!a._support) : Z(!0);
            } catch (se) {
              w(se);
            }
          });
          return A(l, d, p), l;
        }, i.prototype.driver = function() {
          return this._driver || null;
        }, i.prototype.getDriver = function(a, d, p) {
          var l = De[a] ? y.resolve(De[a]) : y.reject(new Error("Driver not found."));
          return A(l, d, p), l;
        }, i.prototype.getSerializer = function(a) {
          var d = y.resolve(ut);
          return A(d, a), d;
        }, i.prototype.ready = function(a) {
          var d = this, p = d._driverSet.then(function() {
            return d._ready === null && (d._ready = d._initDriver()), d._ready;
          });
          return A(p, a, a), p;
        }, i.prototype.setDriver = function(a, d, p) {
          var l = this;
          tr(a) || (a = [a]);
          var v = this._getSupportedDrivers(a);
          function w() {
            l._config.driver = l.driver();
          }
          function S(k) {
            return l._extend(k), w(), l._ready = l._initStorage(l._config), l._ready;
          }
          function O(k) {
            return function() {
              var j = 0;
              function z() {
                for (; j < k.length; ) {
                  var H = k[j];
                  return j++, l._dbInfo = null, l._ready = null, l.getDriver(H).then(S).catch(z);
                }
                w();
                var ee = new Error("No available storage method found.");
                return l._driverSet = y.reject(ee), l._driverSet;
              }
              return z();
            };
          }
          var $ = this._driverSet !== null ? this._driverSet.catch(function() {
            return y.resolve();
          }) : y.resolve();
          return this._driverSet = $.then(function() {
            var k = v[0];
            return l._dbInfo = null, l._ready = null, l.getDriver(k).then(function(j) {
              l._driver = j._driver, w(), l._wrapLibraryMethodsWithReady(), l._initDriver = O(v);
            });
          }).catch(function() {
            w();
            var k = new Error("No available storage method found.");
            return l._driverSet = y.reject(k), l._driverSet;
          }), A(this._driverSet, d, p), this._driverSet;
        }, i.prototype.supports = function(a) {
          return !!rr[a];
        }, i.prototype._extend = function(a) {
          ct(this, a);
        }, i.prototype._getSupportedDrivers = function(a) {
          for (var d = [], p = 0, l = a.length; p < l; p++) {
            var v = a[p];
            this.supports(v) && d.push(v);
          }
          return d;
        }, i.prototype._wrapLibraryMethodsWithReady = function() {
          for (var a = 0, d = ft.length; a < d; a++)
            Qo(this, ft[a]);
        }, i.prototype.createInstance = function(a) {
          return new i(a);
        }, i;
      }(), ei = new Zo();
      n.exports = ei;
    }, { 3: 3 }] }, {}, [4])(4);
  });
})(on);
var Ni = on.exports;
const Ri = /* @__PURE__ */ Pi(Ni), Ee = [];
function Di(e, t) {
  return {
    subscribe: an(e, t).subscribe
  };
}
function an(e, t = ce) {
  let r;
  const n = /* @__PURE__ */ new Set();
  function o(f) {
    if (tn(e, f) && (e = f, r)) {
      const g = !Ee.length;
      for (const m of n)
        m[1](), Ee.push(m, e);
      if (g) {
        for (let m = 0; m < Ee.length; m += 2)
          Ee[m][0](Ee[m + 1]);
        Ee.length = 0;
      }
    }
  }
  function s(f) {
    o(f(e));
  }
  function c(f, g = ce) {
    const m = [f, g];
    return n.add(m), n.size === 1 && (r = t(o, s) || ce), f(e), () => {
      n.delete(m), n.size === 0 && r && (r(), r = null);
    };
  }
  return { set: o, update: s, subscribe: c };
}
Ri.config({
  name: "SNS HPC AI Assitant"
});
const _e = {
  Unknown: { slug: "unknown", description: "Checking the AI server status...", icon: "⏳" },
  Error: { slug: "error", description: "The AI server is currently unavailable", icon: "🔴" },
  OK: { slug: "ok", description: "The AI server is fully functional", icon: "🟢" },
  Running: { slug: "running", description: "The AI server is working to answer", icon: "🔵" },
  Degraded: { slug: "degraded", description: "The AI server is currently degraded", icon: "🟡" }
};
class Bi {
  constructor(t) {
    this.baseURL = t, this.status = an(_e.Unknown);
  }
  // list available models on the backend
  async getBestModel(t, r) {
    r = r || {};
    try {
      const n = await fetch(`${this.baseURL}/api/tags`, { method: "GET", ...r });
      if (n.status === 200) {
        const s = (await n.json()).models.map((c) => c.model);
        for (const c of t)
          if (s.includes(c.model))
            return this.status.set(c.premium ? _e.OK : _e.Degraded), c.model;
      }
    } catch (n) {
      console.error(n);
    }
    this.status.set(_e.Error);
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
    this.status.set(_e.Error);
  }
  async chat(t, r) {
    r = r || {};
    const n = si(this.status);
    try {
      this.status.set(_e.Running);
      const o = await fetch(`${this.baseURL}/api/chat`, {
        method: "POST",
        body: JSON.stringify(t),
        ...r
      });
      if (o.status === 200)
        return this.status.set(n), await o.json();
    } catch (o) {
      console.error(o);
    }
    this.status.set(_e.Error);
  }
}
var be = {}, V = {}, ie = {};
Object.defineProperty(ie, "__esModule", { value: !0 });
ie.output = ie.exists = ie.hash = ie.bytes = ie.bool = ie.number = void 0;
function Ze(e) {
  if (!Number.isSafeInteger(e) || e < 0)
    throw new Error(`Wrong positive integer: ${e}`);
}
ie.number = Ze;
function sn(e) {
  if (typeof e != "boolean")
    throw new Error(`Expected boolean, not ${e}`);
}
ie.bool = sn;
function Ci(e) {
  return e instanceof Uint8Array || e != null && typeof e == "object" && e.constructor.name === "Uint8Array";
}
function Nt(e, ...t) {
  if (!Ci(e))
    throw new Error("Expected Uint8Array");
  if (t.length > 0 && !t.includes(e.length))
    throw new Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`);
}
ie.bytes = Nt;
function un(e) {
  if (typeof e != "function" || typeof e.create != "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  Ze(e.outputLen), Ze(e.blockLen);
}
ie.hash = un;
function fn(e, t = !0) {
  if (e.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (t && e.finished)
    throw new Error("Hash#digest() has already been called");
}
ie.exists = fn;
function cn(e, t) {
  Nt(e);
  const r = t.outputLen;
  if (e.length < r)
    throw new Error(`digestInto() expects output buffer of length at least ${r}`);
}
ie.output = cn;
const ji = { number: Ze, bool: sn, bytes: Nt, hash: un, exists: fn, output: cn };
ie.default = ji;
var P = {};
Object.defineProperty(P, "__esModule", { value: !0 });
P.add5L = P.add5H = P.add4H = P.add4L = P.add3H = P.add3L = P.add = P.rotlBL = P.rotlBH = P.rotlSL = P.rotlSH = P.rotr32L = P.rotr32H = P.rotrBL = P.rotrBH = P.rotrSL = P.rotrSH = P.shrSL = P.shrSH = P.toBig = P.split = P.fromBig = void 0;
const Xe = /* @__PURE__ */ BigInt(2 ** 32 - 1), yt = /* @__PURE__ */ BigInt(32);
function Rt(e, t = !1) {
  return t ? { h: Number(e & Xe), l: Number(e >> yt & Xe) } : { h: Number(e >> yt & Xe) | 0, l: Number(e & Xe) | 0 };
}
P.fromBig = Rt;
function ln(e, t = !1) {
  let r = new Uint32Array(e.length), n = new Uint32Array(e.length);
  for (let o = 0; o < e.length; o++) {
    const { h: s, l: c } = Rt(e[o], t);
    [r[o], n[o]] = [s, c];
  }
  return [r, n];
}
P.split = ln;
const dn = (e, t) => BigInt(e >>> 0) << yt | BigInt(t >>> 0);
P.toBig = dn;
const hn = (e, t, r) => e >>> r;
P.shrSH = hn;
const pn = (e, t, r) => e << 32 - r | t >>> r;
P.shrSL = pn;
const mn = (e, t, r) => e >>> r | t << 32 - r;
P.rotrSH = mn;
const gn = (e, t, r) => e << 32 - r | t >>> r;
P.rotrSL = gn;
const yn = (e, t, r) => e << 64 - r | t >>> r - 32;
P.rotrBH = yn;
const vn = (e, t, r) => e >>> r - 32 | t << 64 - r;
P.rotrBL = vn;
const bn = (e, t) => t;
P.rotr32H = bn;
const wn = (e, t) => e;
P.rotr32L = wn;
const _n = (e, t, r) => e << r | t >>> 32 - r;
P.rotlSH = _n;
const Sn = (e, t, r) => t << r | e >>> 32 - r;
P.rotlSL = Sn;
const On = (e, t, r) => t << r - 32 | e >>> 64 - r;
P.rotlBH = On;
const $n = (e, t, r) => e << r - 32 | t >>> 64 - r;
P.rotlBL = $n;
function An(e, t, r, n) {
  const o = (t >>> 0) + (n >>> 0);
  return { h: e + r + (o / 2 ** 32 | 0) | 0, l: o | 0 };
}
P.add = An;
const En = (e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0);
P.add3L = En;
const In = (e, t, r, n) => t + r + n + (e / 2 ** 32 | 0) | 0;
P.add3H = In;
const Tn = (e, t, r, n) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0);
P.add4L = Tn;
const xn = (e, t, r, n, o) => t + r + n + o + (e / 2 ** 32 | 0) | 0;
P.add4H = xn;
const kn = (e, t, r, n, o) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0) + (o >>> 0);
P.add5L = kn;
const Ln = (e, t, r, n, o, s) => t + r + n + o + s + (e / 2 ** 32 | 0) | 0;
P.add5H = Ln;
const qi = {
  fromBig: Rt,
  split: ln,
  toBig: dn,
  shrSH: hn,
  shrSL: pn,
  rotrSH: mn,
  rotrSL: gn,
  rotrBH: yn,
  rotrBL: vn,
  rotr32H: bn,
  rotr32L: wn,
  rotlSH: _n,
  rotlSL: Sn,
  rotlBH: On,
  rotlBL: $n,
  add: An,
  add3L: En,
  add3H: In,
  add4L: Tn,
  add4H: xn,
  add5H: Ln,
  add5L: kn
};
P.default = qi;
var Pn = {}, nt = {};
Object.defineProperty(nt, "__esModule", { value: !0 });
nt.crypto = void 0;
nt.crypto = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
(function(e) {
  /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
  Object.defineProperty(e, "__esModule", { value: !0 }), e.randomBytes = e.wrapXOFConstructorWithOpts = e.wrapConstructorWithOpts = e.wrapConstructor = e.checkOpts = e.Hash = e.concatBytes = e.toBytes = e.utf8ToBytes = e.asyncLoop = e.nextTick = e.hexToBytes = e.bytesToHex = e.isLE = e.rotr = e.createView = e.u32 = e.u8 = void 0;
  const t = nt, r = (b) => new Uint8Array(b.buffer, b.byteOffset, b.byteLength);
  e.u8 = r;
  const n = (b) => new Uint32Array(b.buffer, b.byteOffset, Math.floor(b.byteLength / 4));
  e.u32 = n;
  function o(b) {
    return b instanceof Uint8Array || b != null && typeof b == "object" && b.constructor.name === "Uint8Array";
  }
  const s = (b) => new DataView(b.buffer, b.byteOffset, b.byteLength);
  e.createView = s;
  const c = (b, L) => b << 32 - L | b >>> L;
  if (e.rotr = c, e.isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68, !e.isLE)
    throw new Error("Non little-endian hardware is not supported");
  const f = /* @__PURE__ */ Array.from({ length: 256 }, (b, L) => L.toString(16).padStart(2, "0"));
  function g(b) {
    if (!o(b))
      throw new Error("Uint8Array expected");
    let L = "";
    for (let B = 0; B < b.length; B++)
      L += f[b[B]];
    return L;
  }
  e.bytesToHex = g;
  const m = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
  function T(b) {
    if (b >= m._0 && b <= m._9)
      return b - m._0;
    if (b >= m._A && b <= m._F)
      return b - (m._A - 10);
    if (b >= m._a && b <= m._f)
      return b - (m._a - 10);
  }
  function y(b) {
    if (typeof b != "string")
      throw new Error("hex string expected, got " + typeof b);
    const L = b.length, B = L / 2;
    if (L % 2)
      throw new Error("padded hex string expected, got unpadded hex of length " + L);
    const C = new Uint8Array(B);
    for (let F = 0, Y = 0; F < B; F++, Y += 2) {
      const te = T(b.charCodeAt(Y)), J = T(b.charCodeAt(Y + 1));
      if (te === void 0 || J === void 0) {
        const M = b[Y] + b[Y + 1];
        throw new Error('hex string expected, got non-hex character "' + M + '" at index ' + Y);
      }
      C[F] = te * 16 + J;
    }
    return C;
  }
  e.hexToBytes = y;
  const _ = async () => {
  };
  e.nextTick = _;
  async function A(b, L, B) {
    let C = Date.now();
    for (let F = 0; F < b; F++) {
      B(F);
      const Y = Date.now() - C;
      Y >= 0 && Y < L || (await (0, e.nextTick)(), C += Y);
    }
  }
  e.asyncLoop = A;
  function x(b) {
    if (typeof b != "string")
      throw new Error(`utf8ToBytes expected string, got ${typeof b}`);
    return new Uint8Array(new TextEncoder().encode(b));
  }
  e.utf8ToBytes = x;
  function I(b) {
    if (typeof b == "string" && (b = x(b)), !o(b))
      throw new Error(`expected Uint8Array, got ${typeof b}`);
    return b;
  }
  e.toBytes = I;
  function R(...b) {
    let L = 0;
    for (let C = 0; C < b.length; C++) {
      const F = b[C];
      if (!o(F))
        throw new Error("Uint8Array expected");
      L += F.length;
    }
    const B = new Uint8Array(L);
    for (let C = 0, F = 0; C < b.length; C++) {
      const Y = b[C];
      B.set(Y, F), F += Y.length;
    }
    return B;
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
  function ae(b, L) {
    if (L !== void 0 && U.call(L) !== "[object Object]")
      throw new Error("Options should be object or undefined");
    return Object.assign(b, L);
  }
  e.checkOpts = ae;
  function G(b) {
    const L = (C) => b().update(I(C)).digest(), B = b();
    return L.outputLen = B.outputLen, L.blockLen = B.blockLen, L.create = () => b(), L;
  }
  e.wrapConstructor = G;
  function E(b) {
    const L = (C, F) => b(F).update(I(C)).digest(), B = b({});
    return L.outputLen = B.outputLen, L.blockLen = B.blockLen, L.create = (C) => b(C), L;
  }
  e.wrapConstructorWithOpts = E;
  function D(b) {
    const L = (C, F) => b(F).update(I(C)).digest(), B = b({});
    return L.outputLen = B.outputLen, L.blockLen = B.blockLen, L.create = (C) => b(C), L;
  }
  e.wrapXOFConstructorWithOpts = D;
  function N(b = 32) {
    if (t.crypto && typeof t.crypto.getRandomValues == "function")
      return t.crypto.getRandomValues(new Uint8Array(b));
    throw new Error("crypto.getRandomValues must be defined");
  }
  e.randomBytes = N;
})(Pn);
Object.defineProperty(V, "__esModule", { value: !0 });
V.shake256 = V.shake128 = V.keccak_512 = V.keccak_384 = V.keccak_256 = V.keccak_224 = V.sha3_512 = V.sha3_384 = V.sha3_256 = V.sha3_224 = V.Keccak = V.keccakP = void 0;
const Ie = ie, Ue = P, qe = Pn, [Nn, Rn, Dn] = [[], [], []], Fi = /* @__PURE__ */ BigInt(0), Ce = /* @__PURE__ */ BigInt(1), Mi = /* @__PURE__ */ BigInt(2), Ui = /* @__PURE__ */ BigInt(7), zi = /* @__PURE__ */ BigInt(256), Hi = /* @__PURE__ */ BigInt(113);
for (let e = 0, t = Ce, r = 1, n = 0; e < 24; e++) {
  [r, n] = [n, (2 * r + 3 * n) % 5], Nn.push(2 * (5 * n + r)), Rn.push((e + 1) * (e + 2) / 2 % 64);
  let o = Fi;
  for (let s = 0; s < 7; s++)
    t = (t << Ce ^ (t >> Ui) * Hi) % zi, t & Mi && (o ^= Ce << (Ce << /* @__PURE__ */ BigInt(s)) - Ce);
  Dn.push(o);
}
const [Yi, Wi] = /* @__PURE__ */ (0, Ue.split)(Dn, !0), fr = (e, t, r) => r > 32 ? (0, Ue.rotlBH)(e, t, r) : (0, Ue.rotlSH)(e, t, r), cr = (e, t, r) => r > 32 ? (0, Ue.rotlBL)(e, t, r) : (0, Ue.rotlSL)(e, t, r);
function Bn(e, t = 24) {
  const r = new Uint32Array(10);
  for (let n = 24 - t; n < 24; n++) {
    for (let c = 0; c < 10; c++)
      r[c] = e[c] ^ e[c + 10] ^ e[c + 20] ^ e[c + 30] ^ e[c + 40];
    for (let c = 0; c < 10; c += 2) {
      const f = (c + 8) % 10, g = (c + 2) % 10, m = r[g], T = r[g + 1], y = fr(m, T, 1) ^ r[f], _ = cr(m, T, 1) ^ r[f + 1];
      for (let A = 0; A < 50; A += 10)
        e[c + A] ^= y, e[c + A + 1] ^= _;
    }
    let o = e[2], s = e[3];
    for (let c = 0; c < 24; c++) {
      const f = Rn[c], g = fr(o, s, f), m = cr(o, s, f), T = Nn[c];
      o = e[T], s = e[T + 1], e[T] = g, e[T + 1] = m;
    }
    for (let c = 0; c < 50; c += 10) {
      for (let f = 0; f < 10; f++)
        r[f] = e[c + f];
      for (let f = 0; f < 10; f++)
        e[c + f] ^= ~r[(f + 2) % 10] & r[(f + 4) % 10];
    }
    e[0] ^= Yi[n], e[1] ^= Wi[n];
  }
  r.fill(0);
}
V.keccakP = Bn;
class Ye extends qe.Hash {
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(t, r, n, o = !1, s = 24) {
    if (super(), this.blockLen = t, this.suffix = r, this.outputLen = n, this.enableXOF = o, this.rounds = s, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, (0, Ie.number)(n), 0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = (0, qe.u32)(this.state);
  }
  keccak() {
    Bn(this.state32, this.rounds), this.posOut = 0, this.pos = 0;
  }
  update(t) {
    (0, Ie.exists)(this);
    const { blockLen: r, state: n } = this;
    t = (0, qe.toBytes)(t);
    const o = t.length;
    for (let s = 0; s < o; ) {
      const c = Math.min(r - this.pos, o - s);
      for (let f = 0; f < c; f++)
        n[this.pos++] ^= t[s++];
      this.pos === r && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished)
      return;
    this.finished = !0;
    const { state: t, suffix: r, pos: n, blockLen: o } = this;
    t[n] ^= r, r & 128 && n === o - 1 && this.keccak(), t[o - 1] ^= 128, this.keccak();
  }
  writeInto(t) {
    (0, Ie.exists)(this, !1), (0, Ie.bytes)(t), this.finish();
    const r = this.state, { blockLen: n } = this;
    for (let o = 0, s = t.length; o < s; ) {
      this.posOut >= n && this.keccak();
      const c = Math.min(n - this.posOut, s - o);
      t.set(r.subarray(this.posOut, this.posOut + c), o), this.posOut += c, o += c;
    }
    return t;
  }
  xofInto(t) {
    if (!this.enableXOF)
      throw new Error("XOF is not possible for this instance");
    return this.writeInto(t);
  }
  xof(t) {
    return (0, Ie.number)(t), this.xofInto(new Uint8Array(t));
  }
  digestInto(t) {
    if ((0, Ie.output)(t, this), this.finished)
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
    const { blockLen: r, suffix: n, outputLen: o, rounds: s, enableXOF: c } = this;
    return t || (t = new Ye(r, n, o, c, s)), t.state32.set(this.state32), t.pos = this.pos, t.posOut = this.posOut, t.finished = this.finished, t.rounds = s, t.suffix = n, t.outputLen = o, t.enableXOF = c, t.destroyed = this.destroyed, t;
  }
}
V.Keccak = Ye;
const we = (e, t, r) => (0, qe.wrapConstructor)(() => new Ye(t, e, r));
V.sha3_224 = we(6, 144, 224 / 8);
V.sha3_256 = we(6, 136, 256 / 8);
V.sha3_384 = we(6, 104, 384 / 8);
V.sha3_512 = we(6, 72, 512 / 8);
V.keccak_224 = we(1, 144, 224 / 8);
V.keccak_256 = we(1, 136, 256 / 8);
V.keccak_384 = we(1, 104, 384 / 8);
V.keccak_512 = we(1, 72, 512 / 8);
const Cn = (e, t, r) => (0, qe.wrapXOFConstructorWithOpts)((n = {}) => new Ye(t, e, n.dkLen === void 0 ? r : n.dkLen, !0));
V.shake128 = Cn(31, 168, 128 / 8);
V.shake256 = Cn(31, 136, 256 / 8);
const { sha3_512: Ki } = V, jn = 24, Fe = 32, vt = (e = 4, t = Math.random) => {
  let r = "";
  for (; r.length < e; )
    r = r + Math.floor(t() * 36).toString(36);
  return r;
};
function qn(e) {
  let t = 8n, r = 0n;
  for (const n of e.values()) {
    const o = BigInt(n);
    r = (r << t) + o;
  }
  return r;
}
const Fn = (e = "") => qn(Ki(e)).toString(36).slice(1), lr = Array.from(
  { length: 26 },
  (e, t) => String.fromCharCode(t + 97)
), Vi = (e) => lr[Math.floor(e() * lr.length)], Mn = ({
  globalObj: e = typeof xe < "u" ? xe : typeof window < "u" ? window : {},
  random: t = Math.random
} = {}) => {
  const r = Object.keys(e).toString(), n = r.length ? r + vt(Fe, t) : vt(Fe, t);
  return Fn(n).substring(0, Fe);
}, Un = (e) => () => e++, Xi = 476782367, zn = ({
  // Fallback if the user does not pass in a CSPRNG. This should be OK
  // because we don't rely solely on the random number generator for entropy.
  // We also use the host fingerprint, current time, and a session counter.
  random: e = Math.random,
  counter: t = Un(Math.floor(e() * Xi)),
  length: r = jn,
  fingerprint: n = Mn({ random: e })
} = {}) => function() {
  const s = Vi(e), c = Date.now().toString(36), f = t().toString(36), g = vt(r, e), m = `${c + g + f + n}`;
  return `${s + Fn(m).substring(1, r)}`;
}, Gi = zn(), Ji = (e, { minLength: t = 2, maxLength: r = Fe } = {}) => {
  const n = e.length, o = /^[0-9a-z]+$/;
  try {
    if (typeof e == "string" && n >= t && n <= r && o.test(e))
      return !0;
  } finally {
  }
  return !1;
};
be.getConstants = () => ({ defaultLength: jn, bigLength: Fe });
be.init = zn;
be.createId = Gi;
be.bufToBigInt = qn;
be.createCounter = Un;
be.createFingerprint = Mn;
be.isCuid = Ji;
const { createId: Qi, init: Rs, getConstants: Ds, isCuid: Bs } = be;
var Zi = Qi;
class ea {
  // TODO: Implement message tree with branches
  constructor(t, r, n) {
    if (this.updated = t, this.ollama = r, n)
      this._ = n;
    else {
      const o = (/* @__PURE__ */ new Date()).toISOString();
      this._ = {
        chatId: Zi(),
        created: o,
        lastUpdated: o,
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
var Hn = "en", Dt = {}, bt = {};
function Yn() {
  return Hn;
}
function ta(e) {
  Hn = e;
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
      return pr(e);
    case "best fit":
      return pr(e);
    default:
      throw new RangeError('Invalid "localeMatcher" option: '.concat(r));
  }
}
function pr(e) {
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
    var r = String(t).split("."), n = Number(r[0]) == t, o = n && r[0].slice(-2);
    return t == 0 ? "zero" : t == 1 ? "one" : t == 2 ? "two" : o >= 3 && o <= 10 ? "few" : o >= 11 && o <= 99 ? "many" : "other";
  },
  ast: function(t) {
    var r = String(t).split("."), n = !r[1];
    return t == 1 && n ? "one" : "other";
  },
  be: function(t) {
    var r = String(t).split("."), n = Number(r[0]) == t, o = n && r[0].slice(-1), s = n && r[0].slice(-2);
    return o == 1 && s != 11 ? "one" : o >= 2 && o <= 4 && (s < 12 || s > 14) ? "few" : n && o == 0 || o >= 5 && o <= 9 || s >= 11 && s <= 14 ? "many" : "other";
  },
  br: function(t) {
    var r = String(t).split("."), n = Number(r[0]) == t, o = n && r[0].slice(-1), s = n && r[0].slice(-2), c = n && r[0].slice(-6);
    return o == 1 && s != 11 && s != 71 && s != 91 ? "one" : o == 2 && s != 12 && s != 72 && s != 92 ? "two" : (o == 3 || o == 4 || o == 9) && (s < 10 || s > 19) && (s < 70 || s > 79) && (s < 90 || s > 99) ? "few" : t != 0 && n && c == 0 ? "many" : "other";
  },
  bs: function(t) {
    var r = String(t).split("."), n = r[0], o = r[1] || "", s = !r[1], c = n.slice(-1), f = n.slice(-2), g = o.slice(-1), m = o.slice(-2);
    return s && c == 1 && f != 11 || g == 1 && m != 11 ? "one" : s && c >= 2 && c <= 4 && (f < 12 || f > 14) || g >= 2 && g <= 4 && (m < 12 || m > 14) ? "few" : "other";
  },
  ca: function(t) {
    var r = String(t).split("."), n = r[0], o = !r[1], s = n.slice(-6);
    return t == 1 && o ? "one" : n != 0 && s == 0 && o ? "many" : "other";
  },
  ceb: function(t) {
    var r = String(t).split("."), n = r[0], o = r[1] || "", s = !r[1], c = n.slice(-1), f = o.slice(-1);
    return s && (n == 1 || n == 2 || n == 3) || s && c != 4 && c != 6 && c != 9 || !s && f != 4 && f != 6 && f != 9 ? "one" : "other";
  },
  cs: function(t) {
    var r = String(t).split("."), n = r[0], o = !r[1];
    return t == 1 && o ? "one" : n >= 2 && n <= 4 && o ? "few" : o ? "other" : "many";
  },
  cy: function(t) {
    return t == 0 ? "zero" : t == 1 ? "one" : t == 2 ? "two" : t == 3 ? "few" : t == 6 ? "many" : "other";
  },
  da: function(t) {
    var r = String(t).split("."), n = r[0], o = Number(r[0]) == t;
    return t == 1 || !o && (n == 0 || n == 1) ? "one" : "other";
  },
  dsb: function(t) {
    var r = String(t).split("."), n = r[0], o = r[1] || "", s = !r[1], c = n.slice(-2), f = o.slice(-2);
    return s && c == 1 || f == 1 ? "one" : s && c == 2 || f == 2 ? "two" : s && (c == 3 || c == 4) || f == 3 || f == 4 ? "few" : "other";
  },
  dz: function(t) {
    return "other";
  },
  es: function(t) {
    var r = String(t).split("."), n = r[0], o = !r[1], s = n.slice(-6);
    return t == 1 ? "one" : n != 0 && s == 0 && o ? "many" : "other";
  },
  ff: function(t) {
    return t >= 0 && t < 2 ? "one" : "other";
  },
  fr: function(t) {
    var r = String(t).split("."), n = r[0], o = !r[1], s = n.slice(-6);
    return t >= 0 && t < 2 ? "one" : n != 0 && s == 0 && o ? "many" : "other";
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
    var r = String(t).split("."), n = r[0], o = !r[1];
    return n == 1 && o || n == 0 && !o ? "one" : n == 2 && o ? "two" : "other";
  },
  is: function(t) {
    var r = String(t).split("."), n = r[0], o = (r[1] || "").replace(/0+$/, ""), s = Number(r[0]) == t, c = n.slice(-1), f = n.slice(-2);
    return s && c == 1 && f != 11 || o % 10 == 1 && o % 100 != 11 ? "one" : "other";
  },
  ksh: function(t) {
    return t == 0 ? "zero" : t == 1 ? "one" : "other";
  },
  lt: function(t) {
    var r = String(t).split("."), n = r[1] || "", o = Number(r[0]) == t, s = o && r[0].slice(-1), c = o && r[0].slice(-2);
    return s == 1 && (c < 11 || c > 19) ? "one" : s >= 2 && s <= 9 && (c < 11 || c > 19) ? "few" : n != 0 ? "many" : "other";
  },
  lv: function(t) {
    var r = String(t).split("."), n = r[1] || "", o = n.length, s = Number(r[0]) == t, c = s && r[0].slice(-1), f = s && r[0].slice(-2), g = n.slice(-2), m = n.slice(-1);
    return s && c == 0 || f >= 11 && f <= 19 || o == 2 && g >= 11 && g <= 19 ? "zero" : c == 1 && f != 11 || o == 2 && m == 1 && g != 11 || o != 2 && m == 1 ? "one" : "other";
  },
  mk: function(t) {
    var r = String(t).split("."), n = r[0], o = r[1] || "", s = !r[1], c = n.slice(-1), f = n.slice(-2), g = o.slice(-1), m = o.slice(-2);
    return s && c == 1 && f != 11 || g == 1 && m != 11 ? "one" : "other";
  },
  mt: function(t) {
    var r = String(t).split("."), n = Number(r[0]) == t, o = n && r[0].slice(-2);
    return t == 1 ? "one" : t == 2 ? "two" : t == 0 || o >= 3 && o <= 10 ? "few" : o >= 11 && o <= 19 ? "many" : "other";
  },
  pa: function(t) {
    return t == 0 || t == 1 ? "one" : "other";
  },
  pl: function(t) {
    var r = String(t).split("."), n = r[0], o = !r[1], s = n.slice(-1), c = n.slice(-2);
    return t == 1 && o ? "one" : o && s >= 2 && s <= 4 && (c < 12 || c > 14) ? "few" : o && n != 1 && (s == 0 || s == 1) || o && s >= 5 && s <= 9 || o && c >= 12 && c <= 14 ? "many" : "other";
  },
  pt: function(t) {
    var r = String(t).split("."), n = r[0], o = !r[1], s = n.slice(-6);
    return n == 0 || n == 1 ? "one" : n != 0 && s == 0 && o ? "many" : "other";
  },
  ro: function(t) {
    var r = String(t).split("."), n = !r[1], o = Number(r[0]) == t, s = o && r[0].slice(-2);
    return t == 1 && n ? "one" : !n || t == 0 || t != 1 && s >= 1 && s <= 19 ? "few" : "other";
  },
  ru: function(t) {
    var r = String(t).split("."), n = r[0], o = !r[1], s = n.slice(-1), c = n.slice(-2);
    return o && s == 1 && c != 11 ? "one" : o && s >= 2 && s <= 4 && (c < 12 || c > 14) ? "few" : o && s == 0 || o && s >= 5 && s <= 9 || o && c >= 11 && c <= 14 ? "many" : "other";
  },
  se: function(t) {
    return t == 1 ? "one" : t == 2 ? "two" : "other";
  },
  si: function(t) {
    var r = String(t).split("."), n = r[0], o = r[1] || "";
    return t == 0 || t == 1 || n == 0 && o == 1 ? "one" : "other";
  },
  sl: function(t) {
    var r = String(t).split("."), n = r[0], o = !r[1], s = n.slice(-2);
    return o && s == 1 ? "one" : o && s == 2 ? "two" : o && (s == 3 || s == 4) || !o ? "few" : "other";
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
const mr = h;
function gr(e) {
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
function yr(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function sa(e, t, r) {
  return t && yr(e.prototype, t), r && yr(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var wt = /* @__PURE__ */ function() {
  function e(t, r) {
    aa(this, e);
    var n = e.supportedLocalesOf(t);
    if (n.length === 0)
      throw new RangeError("Unsupported locale: " + t);
    if (r && r.type !== "cardinal")
      throw new RangeError('Only "cardinal" "type" is supported');
    this.$ = mr[gr(n[0])];
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
        return mr[gr(n)];
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
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
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
  return da(e) || la(e, t) || ca(e, t) || fa();
}
function fa() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ca(e, t) {
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
function la(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], o = !0, s = !1, c, f;
    try {
      for (r = r.call(e); !(o = (c = r.next()).done) && (n.push(c.value), !(t && n.length === t)); o = !0)
        ;
    } catch (g) {
      s = !0, f = g;
    } finally {
      try {
        !o && r.return != null && r.return();
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
function pa(e, t, r) {
  return t && Sr(e.prototype, t), r && Sr(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var ma = ["second", "minute", "hour", "day", "week", "month", "quarter", "year"], ga = ["auto", "always"], ya = ["long", "short", "narrow"], va = ["lookup", "best fit"], ve = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    ha(this, e);
    var n = r.numeric, o = r.style, s = r.localeMatcher;
    if (this.numeric = "always", this.style = "long", this.localeMatcher = "lookup", n !== void 0) {
      if (ga.indexOf(n) < 0)
        throw new RangeError('Invalid "numeric" option: '.concat(n));
      this.numeric = n;
    }
    if (o !== void 0) {
      if (ya.indexOf(o) < 0)
        throw new RangeError('Invalid "style" option: '.concat(o));
      this.style = o;
    }
    if (s !== void 0) {
      if (va.indexOf(s) < 0)
        throw new RangeError('Invalid "localeMatcher" option: '.concat(s));
      this.localeMatcher = s;
    }
    if (typeof t == "string" && (t = [t]), t.push(Yn()), this.locale = e.supportedLocalesOf(t, {
      localeMatcher: this.localeMatcher
    })[0], !this.locale)
      throw new Error("No supported locale was found");
    wt.supportedLocalesOf(this.locale).length > 0 ? this.pluralRules = new wt(this.locale) : console.warn('"'.concat(this.locale, '" locale is not supported')), typeof Intl < "u" && Intl.NumberFormat ? (this.numberFormat = new Intl.NumberFormat(this.locale), this.numberingSystem = this.numberFormat.resolvedOptions().numberingSystem) : this.numberingSystem = "latn", this.locale = Wn(this.locale, {
      localeMatcher: this.localeMatcher
    });
  }
  return pa(e, [{
    key: "format",
    value: function() {
      var r = Or(arguments), n = wr(r, 2), o = n[0], s = n[1];
      return this.getRule(o, s).replace("{0}", this.formatNumber(Math.abs(o)));
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
      var r = Or(arguments), n = wr(r, 2), o = n[0], s = n[1], c = this.getRule(o, s), f = c.indexOf("{0}");
      if (f < 0)
        return [{
          type: "literal",
          value: c
        }];
      var g = [];
      return f > 0 && g.push({
        type: "literal",
        value: c.slice(0, f)
      }), g = g.concat(this.formatNumberToParts(Math.abs(o)).map(function(m) {
        return br(br({}, m), {}, {
          unit: s
        });
      })), f + 3 < c.length - 1 && g.push({
        type: "literal",
        value: c.slice(f + 3)
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
      var o = ra(this.locale)[this.style][n];
      if (typeof o == "string")
        return o;
      if (this.numeric === "auto") {
        if (r === -2 || r === -1) {
          var s = o["previous".concat(r === -1 ? "" : "-" + Math.abs(r))];
          if (s)
            return s;
        } else if (r === 1 || r === 2) {
          var c = o["next".concat(r === 1 ? "" : "-" + Math.abs(r))];
          if (c)
            return c;
        } else if (r === 0 && o.current)
          return o.current;
      }
      var f = o[Oa(r) ? "past" : "future"];
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
ve.supportedLocalesOf = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (typeof e == "string")
    e = [e];
  else if (!Array.isArray(e))
    throw new TypeError('Invalid "locales" argument');
  return e.filter(function(r) {
    return Wn(r, t);
  });
};
ve.addLocale = na;
ve.setDefaultLocale = ta;
ve.getDefaultLocale = Yn;
ve.PluralRules = wt;
var pt = 'Invalid "unit" argument';
function ba(e) {
  if (_t(e) === "symbol")
    throw new TypeError(pt);
  if (typeof e != "string")
    throw new RangeError("".concat(pt, ": ").concat(e));
  if (e[e.length - 1] === "s" && (e = e.slice(0, e.length - 1)), ma.indexOf(e) < 0)
    throw new RangeError("".concat(pt, ": ").concat(e));
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
function et(e) {
  "@babel/helpers - typeof";
  return et = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, et(e);
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
function Aa(e, t, r) {
  return t && $r(e.prototype, t), r && $r(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var Ar = /* @__PURE__ */ function() {
  function e() {
    $a(this, e), this.cache = {};
  }
  return Aa(e, [{
    key: "get",
    value: function() {
      for (var r = this.cache, n = arguments.length, o = new Array(n), s = 0; s < n; s++)
        o[s] = arguments[s];
      for (var c = 0, f = o; c < f.length; c++) {
        var g = f[c];
        if (et(r) !== "object")
          return;
        r = r[g];
      }
      return r;
    }
  }, {
    key: "put",
    value: function() {
      for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
        n[o] = arguments[o];
      for (var s = n.pop(), c = n.pop(), f = this.cache, g = 0, m = n; g < m.length; g++) {
        var T = m[g];
        et(f[T]) !== "object" && (f[T] = {}), f = f[T];
      }
      return f[c] = s;
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
function Ea(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r)
    return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = Ia(e)) || t && e && typeof e.length == "number") {
    r && (e = r);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ia(e, t) {
  if (e) {
    if (typeof e == "string")
      return Er(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Er(e, t);
  }
}
function Er(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Ta(e, t) {
  for (var r = Ea(e), n; !(n = r()).done; ) {
    var o = n.value;
    if (t(o))
      return o;
    for (var s = o.split("-"); s.length > 1; )
      if (s.pop(), o = s.join("-"), t(o))
        return o;
  }
  throw new Error("No locale data has been registered for any of the locales: ".concat(e.join(", ")));
}
function xa() {
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
function ka(e) {
  return Pa(e) && (Array.isArray(e.steps) || // `gradation` property is deprecated: it has been renamed to `steps`.
  Array.isArray(e.gradation) || // `flavour` property is deprecated: it has been renamed to `labels`.
  Array.isArray(e.flavour) || typeof e.flavour == "string" || Array.isArray(e.labels) || typeof e.labels == "string" || // `units` property is deprecated.
  Array.isArray(e.units) || // `custom` property is deprecated.
  typeof e.custom == "function");
}
var La = {}.constructor;
function Pa(e) {
  return Ot(e) !== void 0 && e !== null && e.constructor === La;
}
var pe = 60, tt = 60 * pe, Se = 24 * tt, $t = 7 * Se, At = 30.44 * Se, Kn = 146097 / 400 * Se;
function Pe(e) {
  switch (e) {
    case "second":
      return 1;
    case "minute":
      return pe;
    case "hour":
      return tt;
    case "day":
      return Se;
    case "week":
      return $t;
    case "month":
      return At;
    case "year":
      return Kn;
  }
}
function Vn(e) {
  return e.factor !== void 0 ? e.factor : Pe(e.unit || e.formatAs) || 1;
}
function ze(e) {
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
function Et(e) {
  "@babel/helpers - typeof";
  return Et = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Et(e);
}
function Xn(e, t) {
  var r = t.prevStep, n = t.timestamp, o = t.now, s = t.future, c = t.round, f;
  return r && (r.id || r.unit) && (f = e["threshold_for_".concat(r.id || r.unit)]), f === void 0 && e.threshold !== void 0 && (f = e.threshold, typeof f == "function" && (f = f(o, s))), f === void 0 && (f = e.minTime), Et(f) === "object" && (r && r.id && f[r.id] !== void 0 ? f = f[r.id] : f = f.default), typeof f == "function" && (f = f(n, {
    future: s,
    getMinTimeForUnit: function(m, T) {
      return Ir(m, T || r && r.formatAs, {
        round: c
      });
    }
  })), f === void 0 && e.test && (e.test(n, {
    now: o,
    future: s
  }) ? f = 0 : f = 9007199254740991), f === void 0 && (r ? e.formatAs && r.formatAs && (f = Ir(e.formatAs, r.formatAs, {
    round: c
  })) : f = 0), f === void 0 && console.warn("[javascript-time-ago] A step should specify `minTime`:\n" + JSON.stringify(e, null, 2)), f;
}
function Ir(e, t, r) {
  var n = r.round, o = Pe(e), s;
  if (t === "now" ? s = Pe(e) : s = Pe(t), o !== void 0 && s !== void 0)
    return o - s * (1 - Bt(n));
}
function Tr(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Na(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Tr(Object(r), !0).forEach(function(n) {
      Ra(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Tr(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ra(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Da(e, t, r) {
  var n = r.now, o = r.future, s = r.round, c = r.units, f = r.getNextStep;
  e = Ca(e, c);
  var g = Ba(e, t, {
    now: n,
    future: o,
    round: s
  });
  if (f) {
    if (g) {
      var m = e[e.indexOf(g) - 1], T = e[e.indexOf(g) + 1];
      return [m, g, T];
    }
    return [void 0, void 0, e[0]];
  }
  return g;
}
function Ba(e, t, r) {
  var n = r.now, o = r.future, s = r.round;
  if (e.length !== 0) {
    var c = Gn(e, t, {
      now: n,
      future: o || t < 0,
      round: s
    });
    if (c !== -1) {
      var f = e[c];
      if (f.granularity) {
        var g = ze(s)(Math.abs(t) / Vn(f) / f.granularity) * f.granularity;
        if (g === 0 && c > 0)
          return e[c - 1];
      }
      return f;
    }
  }
}
function Gn(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, o = Xn(e[n], Na({
    prevStep: e[n - 1],
    timestamp: r.now - t * 1e3
  }, r));
  return o === void 0 || Math.abs(t) < o ? n - 1 : n === e.length - 1 ? n : Gn(e, t, r, n + 1);
}
function Ca(e, t) {
  return e.filter(function(r) {
    var n = r.unit, o = r.formatAs;
    return n = n || o, n ? t.indexOf(n) >= 0 : !0;
  });
}
function ja(e, t, r) {
  var n = r.now, o = r.round;
  if (Pe(e)) {
    var s = Pe(e) * 1e3, c = t > n, f = Math.abs(t - n), g = ze(o)(f / s) * s;
    return c ? g > 0 ? f - g + Fa(o, s) : f - g + 1 : -(f - g) + qa(o, s);
  }
}
function qa(e, t) {
  return Bt(e) * t;
}
function Fa(e, t) {
  return (1 - Bt(e)) * t + 1;
}
var Ma = 365 * 24 * 60 * 60 * 1e3, Jn = 1e3 * Ma;
function Ua(e, t, r) {
  var n = r.prevStep, o = r.nextStep, s = r.now, c = r.future, f = r.round, g = e.getTime ? e.getTime() : e, m = function(x) {
    return ja(x, g, {
      now: s,
      round: f
    });
  }, T = Ha(c ? t : o, g, {
    future: c,
    now: s,
    round: f,
    prevStep: c ? n : t
    // isFirstStep: future && isFirstStep
  });
  if (T !== void 0) {
    var y;
    if (t && (t.getTimeToNextUpdate && (y = t.getTimeToNextUpdate(g, {
      getTimeToNextUpdateForUnit: m,
      getRoundFunction: ze,
      now: s,
      future: c,
      round: f
    })), y === void 0)) {
      var _ = t.unit || t.formatAs;
      _ && (y = m(_));
    }
    return y === void 0 ? T : Math.min(y, T);
  }
}
function za(e, t, r) {
  var n = r.now, o = r.future, s = r.round, c = r.prevStep, f = Xn(e, {
    timestamp: t,
    now: n,
    future: o,
    round: s,
    prevStep: c
  });
  if (f !== void 0)
    return o ? t - f * 1e3 + 1 : f === 0 && t === n ? Jn : t + f * 1e3;
}
function Ha(e, t, r) {
  var n = r.now, o = r.future, s = r.round, c = r.prevStep;
  if (e) {
    var f = za(e, t, {
      now: n,
      future: o,
      round: s,
      prevStep: c
    });
    return f === void 0 ? void 0 : f - n;
  } else
    return o ? t - n + 1 : Jn;
}
var Qn = {};
function ke(e) {
  return Qn[e];
}
function Zn(e) {
  if (!e)
    throw new Error("[javascript-time-ago] No locale data passed.");
  Qn[e.locale] = e;
}
const Ya = [{
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
}], It = {
  steps: Ya,
  labels: "long"
};
function xr(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function kr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xr(Object(r), !0).forEach(function(n) {
      Wa(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xr(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Wa(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
const Tt = kr(kr({}, It), {}, {
  // Skip "seconds".
  steps: It.steps.filter(function(e) {
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
  factor: pe,
  // "minute" labels are used for formatting the output.
  unit: "minute"
}, {
  // This step is effective starting from 2.5 minutes.
  threshold: 2.5 * pe,
  // Allow only 5-minute increments of minutes starting from 2.5 minutes.
  // `granularity` — (advanced) Time interval value "granularity".
  // For example, it could be set to `5` for minutes to allow only 5-minute increments
  // when formatting time intervals: `0 minutes`, `5 minutes`, `10 minutes`, etc.
  // Perhaps this feature will be removed because there seem to be no use cases
  // of it in the real world.
  granularity: 5,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a minute.
  factor: pe,
  // "minute" labels are used for formatting the output.
  unit: "minute"
}, {
  // This step is effective starting from 22.5 minutes.
  threshold: 22.5 * pe,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in  half-an-hour.
  factor: 0.5 * tt,
  // "half-hour" labels are used for formatting the output.
  // (if available, which is no longer the case)
  unit: "half-hour"
}, {
  // This step is effective starting from 42.5 minutes.
  threshold: 42.5 * pe,
  threshold_for_minute: 52.5 * pe,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in an hour.
  factor: tt,
  // "hour" labels are used for formatting the output.
  unit: "hour"
}, {
  // This step is effective starting from 20.5 hours.
  threshold: 20.5 / 24 * Se,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a day.
  factor: Se,
  // "day" labels are used for formatting the output.
  unit: "day"
}, {
  // This step is effective starting from 5.5 days.
  threshold: 5.5 * Se,
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
  factor: At,
  // "month" labels are used for formatting the output.
  unit: "month"
}, {
  // This step is effective starting from 10.5 months.
  threshold: 10.5 * At,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a year.
  factor: Kn,
  // "year" labels are used for formatting the output.
  unit: "year"
}], Lr = {
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
var xt = [{
  formatAs: "second"
}, {
  formatAs: "minute"
}, {
  formatAs: "hour"
}], de = {}, Va = {
  minTime: function(t, r) {
    r.future;
    var n = r.getMinTimeForUnit;
    return n("day");
  },
  format: function(t, r) {
    return de[r] || (de[r] = {}), de[r].dayMonth || (de[r].dayMonth = new Intl.DateTimeFormat(r, {
      month: "short",
      day: "numeric"
    })), de[r].dayMonth.format(to(t));
  }
}, Xa = {
  minTime: function(t, r) {
    var n = r.future;
    if (n) {
      var o = new Date(new Date(t).getFullYear(), 0).getTime() - 1;
      return (t - o) / 1e3;
    } else {
      var s = new Date(new Date(t).getFullYear() + 1, 0).getTime();
      return (s - t) / 1e3;
    }
  },
  format: function(t, r) {
    return de[r] || (de[r] = {}), de[r].dayMonthYear || (de[r].dayMonthYear = new Intl.DateTimeFormat(r, {
      year: "numeric",
      month: "short",
      day: "numeric"
    })), de[r].dayMonthYear.format(to(t));
  }
};
xa() ? xt.push(Va, Xa) : xt.push({
  formatAs: "day"
}, {
  formatAs: "week"
}, {
  formatAs: "month"
}, {
  formatAs: "year"
});
const Oe = {
  steps: xt,
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
function Pr(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Nr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pr(Object(r), !0).forEach(function(n) {
      Ga(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Pr(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ga(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
const Ja = Nr(Nr({}, Oe), {}, {
  // Add "now".
  steps: [{
    formatAs: "now"
  }].concat(Oe.steps)
});
function Rr(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
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
const kt = Dr(Dr({}, Oe), {}, {
  // Skip "seconds".
  steps: Oe.steps.filter(function(e) {
    return e.formatAs !== "second";
  })
});
function Br(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
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
const es = Cr(Cr({}, kt), {}, {
  // Add "now".
  steps: [{
    formatAs: "now"
  }].concat(kt.steps)
});
function jr(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ge(e) {
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
const rs = Ge(Ge({}, Oe), {}, {
  // Skip "seconds".
  steps: Oe.steps.filter(function(e) {
    return e.formatAs !== "second";
  }).map(function(e) {
    return e.formatAs === "minute" ? Ge(Ge({}, e), {}, {
      minTime: pe
    }) : e;
  })
}), He = {
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
function qr(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Fr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qr(Object(r), !0).forEach(function(n) {
      ns(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qr(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ns(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
const os = Fr(Fr({}, He), {}, {
  // Add "now".
  steps: [{
    formatAs: "now"
  }].concat(He.steps)
});
function Mr(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ur(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Mr(Object(r), !0).forEach(function(n) {
      is(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Mr(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function is(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
const Lt = Ur(Ur({}, He), {}, {
  // Skip "seconds".
  steps: He.steps.filter(function(e) {
    return e.formatAs !== "second";
  })
});
function zr(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Hr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zr(Object(r), !0).forEach(function(n) {
      as(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zr(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function as(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
const ss = Hr(Hr({}, Lt), {}, {
  // Add "now".
  steps: [{
    formatAs: "now"
  }].concat(Lt.steps)
});
function us(e) {
  switch (e) {
    case "default":
    case "round":
      return It;
    case "round-minute":
      return Tt;
    case "approximate":
      return Lr;
    case "time":
    case "approximate-time":
      return Ka;
    case "mini":
      return He;
    case "mini-now":
      return os;
    case "mini-minute":
      return Lt;
    case "mini-minute-now":
      return ss;
    case "twitter":
      return Oe;
    case "twitter-now":
      return Ja;
    case "twitter-minute":
      return kt;
    case "twitter-minute-now":
      return es;
    case "twitter-first-minute":
      return rs;
    default:
      return Lr;
  }
}
function rt(e) {
  "@babel/helpers - typeof";
  return rt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, rt(e);
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
function cs(e, t) {
  return hs(e) || ds(e, t) || ro(e, t) || ls();
}
function ls() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ro(e, t) {
  if (e) {
    if (typeof e == "string")
      return Yr(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Yr(e, t);
  }
}
function Yr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function ds(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], o = !0, s = !1, c, f;
    try {
      for (r = r.call(e); !(o = (c = r.next()).done) && (n.push(c.value), !(t && n.length === t)); o = !0)
        ;
    } catch (g) {
      s = !0, f = g;
    } finally {
      try {
        !o && r.return != null && r.return();
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
function ps(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Wr(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function ms(e, t, r) {
  return t && Wr(e.prototype, t), r && Wr(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var le = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.polyfill;
    ps(this, e), typeof t == "string" && (t = [t]), this.locale = Ta(t.concat(e.getDefaultLocale()), ke), typeof Intl < "u" && Intl.NumberFormat && (this.numberFormat = new Intl.NumberFormat(this.locale)), n === !1 ? (this.IntlRelativeTimeFormat = Intl.RelativeTimeFormat, this.IntlPluralRules = Intl.PluralRules) : (this.IntlRelativeTimeFormat = ve, this.IntlPluralRules = ve.PluralRules), this.relativeTimeFormatCache = new Ar(), this.pluralRulesCache = new Ar();
  }
  return ms(e, [{
    key: "format",
    value: function(r, n, o) {
      o || (n && !ws(n) ? (o = n, n = void 0) : o = {}), n || (n = Tt), typeof n == "string" && (n = us(n));
      var s = gs(r), c = this.getLabels(n.flavour || n.labels), f = c.labels, g = c.labelsType, m;
      n.now !== void 0 && (m = n.now), m === void 0 && o.now !== void 0 && (m = o.now), m === void 0 && (m = Date.now());
      var T = (m - s) / 1e3, y = o.future || T < 0, _ = bs(f, ke(this.locale).now, ke(this.locale).long, y);
      if (n.custom) {
        var A = n.custom({
          now: m,
          date: new Date(s),
          time: s,
          elapsed: T,
          locale: this.locale
        });
        if (A !== void 0)
          return A;
      }
      var x = vs(
        // Controlling `style.steps` through `style.units` seems to be deprecated:
        // create a new custom `style` instead.
        n.units,
        f,
        _
      ), I = o.round || n.round, R = Da(
        // "gradation" is a legacy name for "steps".
        // For historical reasons, "approximate" steps are used by default.
        // In the next major version, there'll be no default for `steps`.
        n.gradation || n.steps || Tt.steps,
        T,
        {
          now: m,
          units: x,
          round: I,
          future: y,
          getNextStep: !0
        }
      ), K = cs(R, 3), U = K[0], ae = K[1], G = K[2], E = this.formatDateForStep(s, ae, T, {
        labels: f,
        labelsType: g,
        nowLabel: _,
        now: m,
        future: y,
        round: I
      }) || "";
      if (o.getTimeToNextUpdate) {
        var D = Ua(s, ae, {
          nextStep: G,
          prevStep: U,
          now: m,
          future: y,
          round: I
        });
        return [E, D];
      }
      return E;
    }
  }, {
    key: "formatDateForStep",
    value: function(r, n, o, s) {
      var c = this, f = s.labels, g = s.labelsType, m = s.nowLabel, T = s.now, y = s.future, _ = s.round;
      if (n) {
        if (n.format)
          return n.format(r, this.locale, {
            formatAs: function(K, U) {
              return c.formatValue(U, K, {
                labels: f,
                future: y
              });
            },
            now: T,
            future: y
          });
        var A = n.unit || n.formatAs;
        if (!A)
          throw new Error("[javascript-time-ago] Each step must define either `formatAs` or `format()`. Step: ".concat(JSON.stringify(n)));
        if (A === "now")
          return m;
        var x = Math.abs(o) / Vn(n);
        n.granularity && (x = ze(_)(x / n.granularity) * n.granularity);
        var I = -1 * Math.sign(o) * ze(_)(x);
        switch (I === 0 && (y ? I = 0 : I = -0), g) {
          case "long":
          case "short":
          case "narrow":
            return this.getFormatter(g).format(I, A);
          default:
            return this.formatValue(I, A, {
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
    value: function(r, n, o) {
      var s = o.labels, c = o.future;
      return this.getFormattingRule(s, n, r, {
        future: c
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
    value: function(r, n, o, s) {
      var c = s.future;
      if (this.locale, r = r[n], typeof r == "string")
        return r;
      var f = o === 0 ? c ? "future" : "past" : o < 0 ? "past" : "future", g = r[f] || r;
      if (typeof g == "string")
        return g;
      var m = this.getPluralRules().select(Math.abs(o));
      return g[m] || g.other;
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
      for (var n = ke(this.locale), o = fs(r), s; !(s = o()).done; ) {
        var c = s.value;
        if (n[c])
          return {
            labelsType: c,
            labels: n[c]
          };
      }
    }
  }]), e;
}(), no = "en";
le.getDefaultLocale = function() {
  return no;
};
le.setDefaultLocale = function(e) {
  return no = e;
};
le.addDefaultLocale = function(e) {
  if (Kr)
    return console.error("[javascript-time-ago] `TimeAgo.addDefaultLocale()` can only be called once. To add other locales, use `TimeAgo.addLocale()`.");
  Kr = !0, le.setDefaultLocale(e.locale), le.addLocale(e);
};
var Kr;
le.addLocale = function(e) {
  Zn(e), ve.addLocale(e);
};
le.locale = le.addLocale;
le.addLabels = function(e, t, r) {
  var n = ke(e);
  n || (Zn({
    locale: e
  }), n = ke(e)), n[t] = r;
};
function gs(e) {
  if (e.constructor === Date || ys(e))
    return e.getTime();
  if (typeof e == "number")
    return e;
  throw new Error("Unsupported relative time formatter input: ".concat(rt(e), ", ").concat(e));
}
function ys(e) {
  return rt(e) === "object" && typeof e.getTime == "function";
}
function vs(e, t, r) {
  var n = Object.keys(t);
  return r && n.push("now"), e && (n = e.filter(function(o) {
    return o === "now" || n.indexOf(o) >= 0;
  })), n;
}
function bs(e, t, r, n) {
  var o = e.now || t && t.now;
  if (o)
    return typeof o == "string" ? o : n ? o.future : o.past;
  if (r && r.second && r.second.current)
    return r.second.current;
}
function ws(e) {
  return typeof e == "string" || ka(e);
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
le.addLocale(_s);
const Ss = new le("en-US"), Vr = (e) => Ss.format(new Date(e)), Os = Di(Vr, (e) => {
  const t = setInterval(() => e(Vr), 1e3);
  return () => clearInterval(t);
});
function $s(e) {
  fi(e, "svelte-197qogt", `.svelte-197qogt,.svelte-197qogt::before,.svelte-197qogt::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}.svelte-197qogt::before,.svelte-197qogt::after{--tw-content:''}:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}button.svelte-197qogt,input.svelte-197qogt{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button.svelte-197qogt{text-transform:none}button.svelte-197qogt{-webkit-appearance:button;background-color:transparent;background-image:none}.svelte-197qogt:-moz-focusring{outline:auto}.svelte-197qogt:-moz-ui-invalid{box-shadow:none}.svelte-197qogt::-webkit-inner-spin-button,.svelte-197qogt::-webkit-outer-spin-button{height:auto}.svelte-197qogt::-webkit-search-decoration{-webkit-appearance:none}.svelte-197qogt::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}input.svelte-197qogt::-moz-placeholder{opacity:1;color:#9ca3af}input.svelte-197qogt::placeholder{opacity:1;color:#9ca3af}button.svelte-197qogt{cursor:pointer}.svelte-197qogt:disabled{cursor:default}.svelte-197qogt,.svelte-197qogt::before,.svelte-197qogt::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position:  ;--tw-gradient-via-position:  ;--tw-gradient-to-position:  ;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.svelte-197qogt::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position:  ;--tw-gradient-via-position:  ;--tw-gradient-to-position:  ;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.absolute.svelte-197qogt{position:absolute}.bottom-0.svelte-197qogt{bottom:0px}.bottom-2.svelte-197qogt{bottom:0.5rem}.left-0.svelte-197qogt{left:0px}.right-0.svelte-197qogt{right:0px}.right-2.svelte-197qogt{right:0.5rem}.top-0.svelte-197qogt{top:0px}.z-50.svelte-197qogt{z-index:50}.my-2.svelte-197qogt{margin-top:0.5rem;margin-bottom:0.5rem}.mb-2.svelte-197qogt{margin-bottom:0.5rem}.mb-4.svelte-197qogt{margin-bottom:1rem}.mt-2.svelte-197qogt{margin-top:0.5rem}.block.svelte-197qogt{display:block}.flex.svelte-197qogt{display:flex}.hidden.svelte-197qogt{display:none}.h-full.svelte-197qogt{height:100%}.w-3\\/4.svelte-197qogt{width:75%}.w-full.svelte-197qogt{width:100%}.flex-row.svelte-197qogt{flex-direction:row}.flex-col.svelte-197qogt{flex-direction:column}.items-baseline.svelte-197qogt{align-items:baseline}.items-stretch.svelte-197qogt{align-items:stretch}.justify-end.svelte-197qogt{justify-content:flex-end}.justify-between.svelte-197qogt{justify-content:space-between}.place-self-start.svelte-197qogt{place-self:start}.place-self-end.svelte-197qogt{place-self:end}.rounded-lg.svelte-197qogt{border-radius:0.5rem}.rounded-md.svelte-197qogt{border-radius:0.375rem}.bg-lime-200.svelte-197qogt{--tw-bg-opacity:1;background-color:rgb(217 249 157 / var(--tw-bg-opacity))}.bg-sky-200.svelte-197qogt{--tw-bg-opacity:1;background-color:rgb(186 230 253 / var(--tw-bg-opacity))}.bg-violet-100.svelte-197qogt{--tw-bg-opacity:1;background-color:rgb(237 233 254 / var(--tw-bg-opacity))}.bg-violet-700.svelte-197qogt{--tw-bg-opacity:1;background-color:rgb(109 40 217 / var(--tw-bg-opacity))}.px-1.svelte-197qogt{padding-left:0.25rem;padding-right:0.25rem}.px-2.svelte-197qogt{padding-left:0.5rem;padding-right:0.5rem}.px-4.svelte-197qogt{padding-left:1rem;padding-right:1rem}.py-1.svelte-197qogt{padding-top:0.25rem;padding-bottom:0.25rem}.py-2.svelte-197qogt{padding-top:0.5rem;padding-bottom:0.5rem}.text-justify.svelte-197qogt{text-align:justify}.text-base.svelte-197qogt{font-size:1rem;line-height:1.5rem}.text-lg.svelte-197qogt{font-size:1.125rem;line-height:1.75rem}.text-sm.svelte-197qogt{font-size:0.875rem;line-height:1.25rem}.text-xl.svelte-197qogt{font-size:1.25rem;line-height:1.75rem}.font-bold.svelte-197qogt{font-weight:700}.text-white.svelte-197qogt{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.max-w-1-3.svelte-197qogt{max-width:33.33%}.hover\\:bg-violet-600.svelte-197qogt:hover{--tw-bg-opacity:1;background-color:rgb(124 58 237 / var(--tw-bg-opacity))}`);
}
function Xr(e, t, r) {
  const n = e.slice();
  return n[15] = t[r], n;
}
function As(e) {
  let t, r, n;
  return {
    c() {
      t = X("button"), t.textContent = "↘️", q(t, "title", "Reduce to lateral"), q(t, "class", "svelte-197qogt");
    },
    m(o, s) {
      oe(o, t, s), r || (n = Ne(
        t,
        "click",
        /*click_handler_2*/
        e[11]
      ), r = !0);
    },
    p: ce,
    d(o) {
      o && re(t), r = !1, n();
    }
  };
}
function Es(e) {
  let t, r, n;
  return {
    c() {
      t = X("button"), t.textContent = "↖️", q(t, "title", "Expand full width"), q(t, "class", "svelte-197qogt");
    },
    m(o, s) {
      oe(o, t, s), r || (n = Ne(
        t,
        "click",
        /*click_handler_1*/
        e[10]
      ), r = !0);
    },
    p: ce,
    d(o) {
      o && re(t), r = !1, n();
    }
  };
}
function Gr(e) {
  let t, r, n, o, s, c, f, g, m, T, y = ur(
    /*chat*/
    e[2]._.messages
  ), _ = [];
  for (let A = 0; A < y.length; A += 1)
    _[A] = Qr(Xr(e, y, A));
  return {
    c() {
      for (let A = 0; A < _.length; A += 1)
        _[A].c();
      t = fe(), r = X("form"), n = X("input"), s = fe(), c = X("div"), c.textContent = "The assistant makes mistakes, always check important information", f = fe(), g = X("div"), g.textContent = "Also, the assistant cannot read the documentation yet", n.disabled = o = /*status*/
      e[0] && /*$status*/
      e[6].slug == "running", q(n, "class", "w-full px-2 py-1 text-lg rounded-lg bg-violet-100 svelte-197qogt"), q(n, "type", "text"), q(n, "placeholder", "What do you want help with?"), q(r, "action", "#"), q(r, "class", "my-2 svelte-197qogt"), q(c, "class", "mt-2 text-sm svelte-197qogt"), q(g, "class", "text-sm svelte-197qogt");
    },
    m(A, x) {
      for (let I = 0; I < _.length; I += 1)
        _[I] && _[I].m(A, x);
      oe(A, t, x), oe(A, r, x), W(r, n), ir(
        n,
        /*text*/
        e[3]
      ), oe(A, s, x), oe(A, c, x), oe(A, f, x), oe(A, g, x), m || (T = [
        Ne(
          n,
          "input",
          /*input_input_handler*/
          e[13]
        ),
        Ne(r, "submit", pi(
          /*handleUserMessage*/
          e[8]
        ))
      ], m = !0);
    },
    p(A, x) {
      if (x & /*chat, $timeAgo*/
      132) {
        y = ur(
          /*chat*/
          A[2]._.messages
        );
        let I;
        for (I = 0; I < y.length; I += 1) {
          const R = Xr(A, y, I);
          _[I] ? _[I].p(R, x) : (_[I] = Qr(R), _[I].c(), _[I].m(t.parentNode, t));
        }
        for (; I < _.length; I += 1)
          _[I].d(1);
        _.length = y.length;
      }
      x & /*status, $status*/
      65 && o !== (o = /*status*/
      A[0] && /*$status*/
      A[6].slug == "running") && (n.disabled = o), x & /*text*/
      8 && n.value !== /*text*/
      A[3] && ir(
        n,
        /*text*/
        A[3]
      );
    },
    d(A) {
      A && (re(t), re(r), re(s), re(c), re(f), re(g)), di(_, A), m = !1, Re(T);
    }
  };
}
function Jr(e) {
  let t, r, n, o, s, c = (
    /*$timeAgo*/
    e[7](
      /*message*/
      e[15].timestamp
    ) + ""
  ), f, g, m, T = (
    /*message*/
    e[15].content + ""
  ), y;
  function _(I, R) {
    return (
      /*message*/
      I[15].role == "user" ? Ts : Is
    );
  }
  let A = _(e), x = A(e);
  return {
    c() {
      t = X("div"), r = X("div"), n = X("span"), x.c(), o = fe(), s = X("span"), f = ye(c), g = fe(), m = X("div"), y = ye(T), q(n, "class", "font-bold svelte-197qogt"), q(s, "class", "text-grey-500 text-sm svelte-197qogt"), q(r, "class", "mb-2 flex flex-row justify-between items-baseline svelte-197qogt"), q(m, "class", "svelte-197qogt"), q(t, "class", "rounded-md py-2 px-4 text-justify text-base block w-3/4 my-2 svelte-197qogt"), ne(
        t,
        "bg-sky-200",
        /*message*/
        e[15].role == "user"
      ), ne(
        t,
        "place-self-end",
        /*message*/
        e[15].role == "user"
      ), ne(
        t,
        "bg-lime-200",
        /*message*/
        e[15].role == "assistant"
      ), ne(
        t,
        "place-self-start",
        /*message*/
        e[15].role == "assistant"
      );
    },
    m(I, R) {
      oe(I, t, R), W(t, r), W(r, n), x.m(n, null), W(r, o), W(r, s), W(s, f), W(t, g), W(t, m), W(m, y);
    },
    p(I, R) {
      A !== (A = _(I)) && (x.d(1), x = A(I), x && (x.c(), x.m(n, null))), R & /*$timeAgo, chat*/
      132 && c !== (c = /*$timeAgo*/
      I[7](
        /*message*/
        I[15].timestamp
      ) + "") && Qe(f, c), R & /*chat*/
      4 && T !== (T = /*message*/
      I[15].content + "") && Qe(y, T), R & /*chat*/
      4 && ne(
        t,
        "bg-sky-200",
        /*message*/
        I[15].role == "user"
      ), R & /*chat*/
      4 && ne(
        t,
        "place-self-end",
        /*message*/
        I[15].role == "user"
      ), R & /*chat*/
      4 && ne(
        t,
        "bg-lime-200",
        /*message*/
        I[15].role == "assistant"
      ), R & /*chat*/
      4 && ne(
        t,
        "place-self-start",
        /*message*/
        I[15].role == "assistant"
      );
    },
    d(I) {
      I && re(t), x.d();
    }
  };
}
function Is(e) {
  let t;
  return {
    c() {
      t = ye("Assistant");
    },
    m(r, n) {
      oe(r, t, n);
    },
    d(r) {
      r && re(t);
    }
  };
}
function Ts(e) {
  let t;
  return {
    c() {
      t = ye("You");
    },
    m(r, n) {
      oe(r, t, n);
    },
    d(r) {
      r && re(t);
    }
  };
}
function Qr(e) {
  let t, r = (
    /*message*/
    e[15].role != "system" && Jr(e)
  );
  return {
    c() {
      r && r.c(), t = hi();
    },
    m(n, o) {
      r && r.m(n, o), oe(n, t, o);
    },
    p(n, o) {
      /*message*/
      n[15].role != "system" ? r ? r.p(n, o) : (r = Jr(n), r.c(), r.m(t.parentNode, t)) : r && (r.d(1), r = null);
    },
    d(n) {
      n && re(t), r && r.d(n);
    }
  };
}
function xs(e) {
  let t, r, n, o, s, c, f = (
    /*status*/
    (e[0] ? (
      /*$status*/
      e[6].icon
    ) : "") + ""
  ), g, m, T, y, _, A, x, I, R, K, U = (
    /*status*/
    (e[0] ? (
      /*$status*/
      e[6].icon
    ) : "") + ""
  ), ae, G, E, D, N, b, L, B, C;
  function F(M, Q) {
    return (
      /*chatBotExpanded*/
      M[5] ? As : Es
    );
  }
  let Y = F(e), te = Y(e), J = (
    /*model*/
    e[1] && /*chat*/
    e[2] && Gr(e)
  );
  return {
    c() {
      t = X("button"), r = X("span"), r.textContent = "✨", n = fe(), o = X("span"), o.textContent = "Need Help?", s = fe(), c = X("span"), g = ye(f), T = fe(), y = X("div"), _ = X("content"), A = X("div"), x = X("div"), I = X("span"), I.textContent = "✨ HPC Assistant", R = fe(), K = X("span"), ae = ye(U), E = fe(), D = X("div"), te.c(), N = fe(), b = X("button"), b.textContent = "➖", L = fe(), J && J.c(), q(r, "title", "Try our AI Assistant"), q(r, "class", "svelte-197qogt"), q(o, "class", "px-1 svelte-197qogt"), q(c, "title", m = /*status*/
      e[0] ? (
        /*$status*/
        e[6].description
      ) : ""), q(c, "class", "svelte-197qogt"), q(t, "class", "absolute bottom-2 right-2 py-2 px-4 bg-violet-700 hover:bg-violet-600 font-bold text-lg text-white rounded-lg svelte-197qogt"), ne(
        t,
        "hidden",
        /*chatBotOpen*/
        e[4]
      ), q(I, "class", "svelte-197qogt"), q(K, "title", G = /*status*/
      e[0] ? (
        /*$status*/
        e[6].description
      ) : ""), q(K, "class", "svelte-197qogt"), q(x, "class", "svelte-197qogt"), q(b, "title", "Minify the assistant"), q(b, "class", "svelte-197qogt"), q(D, "class", "svelte-197qogt"), q(A, "class", "mb-4 font-bold text-xl flex flex-row items-stretch justify-between svelte-197qogt"), q(_, "class", "bg-violet-100 text-base rounded-md flex flex-col items-stretch h-full px-4 py-2 svelte-197qogt"), ne(
        _,
        "w-full",
        /*chatBotExpanded*/
        e[5]
      ), ne(_, "max-w-1-3", !/*chatBotExpanded*/
      e[5]), q(y, "class", "absolute bottom-0 right-0 top-0 left-0 px-2 py-2 w-full h-full flex flex-row justify-end z-50 svelte-197qogt"), ne(y, "hidden", !/*chatBotOpen*/
      e[4]);
    },
    m(M, Q) {
      oe(M, t, Q), W(t, r), W(t, n), W(t, o), W(t, s), W(t, c), W(c, g), oe(M, T, Q), oe(M, y, Q), W(y, _), W(_, A), W(A, x), W(x, I), W(x, R), W(x, K), W(K, ae), W(A, E), W(A, D), te.m(D, null), W(D, N), W(D, b), W(_, L), J && J.m(_, null), B || (C = [
        Ne(
          t,
          "click",
          /*click_handler*/
          e[9]
        ),
        Ne(
          b,
          "click",
          /*click_handler_3*/
          e[12]
        )
      ], B = !0);
    },
    p(M, [Q]) {
      Q & /*status, $status*/
      65 && f !== (f = /*status*/
      (M[0] ? (
        /*$status*/
        M[6].icon
      ) : "") + "") && Qe(g, f), Q & /*status, $status*/
      65 && m !== (m = /*status*/
      M[0] ? (
        /*$status*/
        M[6].description
      ) : "") && q(c, "title", m), Q & /*chatBotOpen*/
      16 && ne(
        t,
        "hidden",
        /*chatBotOpen*/
        M[4]
      ), Q & /*status, $status*/
      65 && U !== (U = /*status*/
      (M[0] ? (
        /*$status*/
        M[6].icon
      ) : "") + "") && Qe(ae, U), Q & /*status, $status*/
      65 && G !== (G = /*status*/
      M[0] ? (
        /*$status*/
        M[6].description
      ) : "") && q(K, "title", G), Y === (Y = F(M)) && te ? te.p(M, Q) : (te.d(1), te = Y(M), te && (te.c(), te.m(D, N))), /*model*/
      M[1] && /*chat*/
      M[2] ? J ? J.p(M, Q) : (J = Gr(M), J.c(), J.m(_, null)) : J && (J.d(1), J = null), Q & /*chatBotExpanded*/
      32 && ne(
        _,
        "w-full",
        /*chatBotExpanded*/
        M[5]
      ), Q & /*chatBotExpanded*/
      32 && ne(_, "max-w-1-3", !/*chatBotExpanded*/
      M[5]), Q & /*chatBotOpen*/
      16 && ne(y, "hidden", !/*chatBotOpen*/
      M[4]);
    },
    i: ce,
    o: ce,
    d(M) {
      M && (re(t), re(T), re(y)), te.d(), J && J.d(), B = !1, Re(C);
    }
  };
}
function ks(e, t, r) {
  let n, o = ce, s = () => (o(), o = Pt(g, (G) => r(6, n = G)), g), c;
  ui(e, Os, (G) => r(7, c = G)), e.$$.on_destroy.push(() => o());
  let f, g, m, T;
  vi(async () => {
    const G = `${window.location.protocol}//${window.location.hostname}:${window.location.port}`;
    f = new Bi(G), s(r(0, g = f.status)), r(1, m = await f.getBestModel(dr.modelList)), m && (await f.preloadModel(m), r(2, T = new ea(() => r(2, T), f)), T.addMessage(dr.systemPrompt));
  });
  let y, _ = !1, A = !1;
  async function x() {
    T.addMessage({ role: "user", content: y }), r(3, y = ""), await T.complete(m);
  }
  const I = () => r(4, _ = !0), R = () => r(5, A = !0), K = () => r(5, A = !1), U = () => r(4, _ = !1);
  function ae() {
    y = this.value, r(3, y);
  }
  return [
    g,
    m,
    T,
    y,
    _,
    A,
    n,
    c,
    x,
    I,
    R,
    K,
    U,
    ae
  ];
}
class Ls extends ki {
  constructor(t) {
    super(), Ti(this, t, ks, xs, tn, {}, $s);
  }
}
customElements.define("hpc-chatbot", xi(Ls, {}, [], [], !0));
export {
  Ls as ChatBot
};
//# sourceMappingURL=components.js.map
