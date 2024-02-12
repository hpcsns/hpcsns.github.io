var ni = Object.defineProperty;
var oi = (e, t, r) => t in e ? ni(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var fe = (e, t, r) => (oi(e, typeof t != "symbol" ? t + "" : t, r), r);
function se() {
}
function Zr(e) {
  return e();
}
function ir() {
  return /* @__PURE__ */ Object.create(null);
}
function Be(e) {
  e.forEach(Zr);
}
function en(e) {
  return typeof e == "function";
}
function tn(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function ii(e) {
  return Object.keys(e).length === 0;
}
function Rt(e, ...t) {
  if (e == null) {
    for (const n of t)
      n(void 0);
    return se;
  }
  const r = e.subscribe(...t);
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
function ai(e) {
  let t;
  return Rt(e, (r) => t = r)(), t;
}
function si(e, t, r) {
  e.$$.on_destroy.push(Rt(t, r));
}
function W(e, t) {
  e.appendChild(t);
}
function ui(e, t, r) {
  const n = fi(e);
  if (!n.getElementById(t)) {
    const o = V("style");
    o.id = t, o.textContent = r, ci(n, o);
  }
}
function fi(e) {
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
function ne(e, t, r) {
  e.insertBefore(t, r || null);
}
function te(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function li(e, t) {
  for (let r = 0; r < e.length; r += 1)
    e[r] && e[r].d(t);
}
function V(e) {
  return document.createElement(e);
}
function be(e) {
  return document.createTextNode(e);
}
function ce() {
  return be(" ");
}
function di() {
  return be("");
}
function De(e, t, r, n) {
  return e.addEventListener(t, r, n), () => e.removeEventListener(t, r, n);
}
function hi(e) {
  return function(t) {
    return t.preventDefault(), e.call(this, t);
  };
}
function q(e, t, r) {
  r == null ? e.removeAttribute(t) : e.getAttribute(t) !== r && e.setAttribute(t, r);
}
function pi(e) {
  return Array.from(e.childNodes);
}
function et(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
function ar(e, t) {
  e.value = t ?? "";
}
function oe(e, t, r) {
  e.classList.toggle(t, !!r);
}
function mi(e) {
  const t = {};
  return e.childNodes.forEach(
    /** @param {Element} node */
    (r) => {
      t[r.slot || "default"] = !0;
    }
  ), t;
}
let ze;
function Fe(e) {
  ze = e;
}
function yi() {
  if (!ze)
    throw new Error("Function called outside component initialization");
  return ze;
}
function gi(e) {
  yi().$$.on_mount.push(e);
}
const ke = [], sr = [];
let Ne = [];
const ur = [], vi = /* @__PURE__ */ Promise.resolve();
let gt = !1;
function bi() {
  gt || (gt = !0, vi.then(rn));
}
function vt(e) {
  Ne.push(e);
}
const mt = /* @__PURE__ */ new Set();
let Ie = 0;
function rn() {
  if (Ie !== 0)
    return;
  const e = ze;
  do {
    try {
      for (; Ie < ke.length; ) {
        const t = ke[Ie];
        Ie++, Fe(t), wi(t.$$);
      }
    } catch (t) {
      throw ke.length = 0, Ie = 0, t;
    }
    for (Fe(null), ke.length = 0, Ie = 0; sr.length; )
      sr.pop()();
    for (let t = 0; t < Ne.length; t += 1) {
      const r = Ne[t];
      mt.has(r) || (mt.add(r), r());
    }
    Ne.length = 0;
  } while (ke.length);
  for (; ur.length; )
    ur.pop()();
  gt = !1, mt.clear(), Fe(e);
}
function wi(e) {
  if (e.fragment !== null) {
    e.update(), Be(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(vt);
  }
}
function _i(e) {
  const t = [], r = [];
  Ne.forEach((n) => e.indexOf(n) === -1 ? t.push(n) : r.push(n)), r.forEach((n) => n()), Ne = t;
}
const Si = /* @__PURE__ */ new Set();
function Oi(e, t) {
  e && e.i && (Si.delete(e), e.i(t));
}
function fr(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function $i(e, t, r) {
  const { fragment: n, after_update: o } = e.$$;
  n && n.m(t, r), vt(() => {
    const s = e.$$.on_mount.map(Zr).filter(en);
    e.$$.on_destroy ? e.$$.on_destroy.push(...s) : Be(s), e.$$.on_mount = [];
  }), o.forEach(vt);
}
function Ai(e, t) {
  const r = e.$$;
  r.fragment !== null && (_i(r.after_update), Be(r.on_destroy), r.fragment && r.fragment.d(t), r.on_destroy = r.fragment = null, r.ctx = []);
}
function Ei(e, t) {
  e.$$.dirty[0] === -1 && (ke.push(e), bi(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function Ii(e, t, r, n, o, s, c = null, f = [-1]) {
  const y = ze;
  Fe(e);
  const m = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: se,
    not_equal: o,
    bound: ir(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (y ? y.$$.context : [])),
    // everything else
    callbacks: ir(),
    dirty: f,
    skip_bound: !1,
    root: t.target || y.$$.root
  };
  c && c(m.root);
  let T = !1;
  if (m.ctx = r ? r(e, t.props || {}, (g, _, ...A) => {
    const x = A.length ? A[0] : _;
    return m.ctx && o(m.ctx[g], m.ctx[g] = x) && (!m.skip_bound && m.bound[g] && m.bound[g](x), T && Ei(e, g)), _;
  }) : [], m.update(), T = !0, Be(m.before_update), m.fragment = n ? n(m.ctx) : !1, t.target) {
    if (t.hydrate) {
      const g = pi(t.target);
      m.fragment && m.fragment.l(g), g.forEach(te);
    } else
      m.fragment && m.fragment.c();
    t.intro && Oi(e.$$.fragment), $i(e, t.target, t.anchor), rn();
  }
  Fe(y);
}
let nn;
typeof HTMLElement == "function" && (nn = class extends HTMLElement {
  constructor(t, r, n) {
    super();
    /** The Svelte component constructor */
    fe(this, "$$ctor");
    /** Slots */
    fe(this, "$$s");
    /** The Svelte component instance */
    fe(this, "$$c");
    /** Whether or not the custom element is connected */
    fe(this, "$$cn", !1);
    /** Component props data */
    fe(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    fe(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    fe(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    fe(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    fe(this, "$$l_u", /* @__PURE__ */ new Map());
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
              c = V("slot"), s !== "default" && q(c, "name", s);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(m, T) {
              ne(m, c, T);
            },
            d: function(m) {
              m && te(c);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn)
        return;
      const r = {}, n = mi(this);
      for (const s of this.$$s)
        s in n && (r[s] = [t(s)]);
      for (const s of this.attributes) {
        const c = this.$$g_p(s.name);
        c in this.$$d || (this.$$d[c] = Ze(c, s.value, this.$$p_d, "toProp"));
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
            const c = Ze(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = Ze(t, n, this.$$p_d, "toProp"), (o = this.$$c) == null || o.$set({ [t]: this.$$d[t] }));
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
function Ze(e, t, r, n) {
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
function Ti(e, t, r, n, o, s) {
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
      set(y) {
        var m;
        y = Ze(f, y, t), this.$$d[f] = y, (m = this.$$c) == null || m.$set({ [f]: y });
      }
    });
  }), n.forEach((f) => {
    Object.defineProperty(c.prototype, f, {
      get() {
        var y;
        return (y = this.$$c) == null ? void 0 : y[f];
      }
    });
  }), s && (c = s(c)), e.element = /** @type {any} */
  c, c;
}
class xi {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    fe(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    fe(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Ai(this, 1), this.$destroy = se;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, r) {
    if (!en(r))
      return se;
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
    this.$$set && !ii(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const ki = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(ki);
var Le = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Li(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Ge(e) {
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
            var g = typeof Ge == "function" && Ge;
            if (!T && g)
              return g(m, !0);
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
      for (var f = typeof Ge == "function" && Ge, y = 0; y < s.length; y++)
        c(s[y]);
      return c;
    }({ 1: [function(r, n, o) {
      (function(s) {
        var c = s.MutationObserver || s.WebKitMutationObserver, f;
        if (c) {
          var y = 0, m = new c(x), T = s.document.createTextNode("");
          m.observe(T, {
            characterData: !0
          }), f = function() {
            T.data = y = ++y % 2;
          };
        } else if (!s.setImmediate && typeof s.MessageChannel < "u") {
          var g = new s.MessageChannel();
          g.port1.onmessage = x, f = function() {
            g.port2.postMessage(0);
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
      }).call(this, typeof Le < "u" ? Le : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 2: [function(r, n, o) {
      var s = r(1);
      function c() {
      }
      var f = {}, y = ["REJECTED"], m = ["FULFILLED"], T = ["PENDING"];
      n.exports = g;
      function g(E) {
        if (typeof E != "function")
          throw new TypeError("resolver must be a function");
        this.state = T, this.queue = [], this.outcome = void 0, E !== c && I(this, E);
      }
      g.prototype.catch = function(E) {
        return this.then(null, E);
      }, g.prototype.then = function(E, D) {
        if (typeof E != "function" && this.state === m || typeof D != "function" && this.state === y)
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
        E.state = y, E.outcome = D;
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
      g.resolve = K;
      function K(E) {
        return E instanceof this ? E : f.resolve(new this(c), E);
      }
      g.reject = U;
      function U(E) {
        var D = new this(c);
        return f.reject(D, E);
      }
      g.all = ae;
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
        function Y(Z, de) {
          D.resolve(Z).then(he, function(re) {
            b || (b = !0, f.reject(F, re));
          });
          function he(re) {
            L[de] = re, ++B === N && !b && (b = !0, f.resolve(F, L));
          }
        }
      }
      g.race = G;
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
      }).call(this, typeof Le < "u" ? Le : typeof self < "u" ? self : typeof window < "u" ? window : {});
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
      var y = f();
      function m() {
        try {
          if (!y || !y.open)
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
      var g = Promise;
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
        return new g(function(u) {
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
        return typeof K == "boolean" ? g.resolve(K) : N(i).then(function(u) {
          return K = u, K;
        });
      }
      function L(i) {
        var u = U[i.name], a = {};
        a.promise = new g(function(d, p) {
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
        return new g(function(a, d) {
          if (U[i.name] = U[i.name] || qt(), i.db)
            if (u)
              L(i), i.db.close();
            else
              return a(i.db);
          var p = [i.name];
          u && p.push(i.version);
          var l = y.open.apply(y, p);
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
      function Z(i) {
        return F(i, !0);
      }
      function de(i, u) {
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
      function he(i) {
        return new g(function(u, a) {
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
      function re(i) {
        var u = D(atob(i.data));
        return T([u], { type: i.type });
      }
      function M(i) {
        return i && i.__local_forage_encoded_blob;
      }
      function ee(i) {
        var u = this, a = u._initReady().then(function() {
          var d = U[u._dbInfo.name];
          if (d && d.dbReady)
            return d.dbReady;
        });
        return A(a, i, i), a;
      }
      function oo(i) {
        L(i);
        for (var u = U[i.name], a = u.forages, d = 0; d < a.length; d++) {
          var p = a[d];
          p._dbInfo.db && (p._dbInfo.db.close(), p._dbInfo.db = null);
        }
        return i.db = null, Y(i).then(function(l) {
          return i.db = l, de(i) ? Z(i) : l;
        }).then(function(l) {
          i.db = u.db = l;
          for (var v = 0; v < a.length; v++)
            a[v]._dbInfo.db = l;
        }).catch(function(l) {
          throw C(i, l), l;
        });
      }
      function me(i, u, a, d) {
        d === void 0 && (d = 1);
        try {
          var p = i.db.transaction(i.storeName, u);
          a(null, p);
        } catch (l) {
          if (d > 0 && (!i.db || l.name === "InvalidStateError" || l.name === "NotFoundError"))
            return g.resolve().then(function() {
              if (!i.db || l.name === "NotFoundError" && !i.db.objectStoreNames.contains(i.storeName) && i.version <= i.db.version)
                return i.db && (i.version = i.db.version + 1), Z(i);
            }).then(function() {
              return oo(i).then(function() {
                me(i, u, a, d - 1);
              });
            }).catch(a);
          a(l);
        }
      }
      function qt() {
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
      function io(i) {
        var u = this, a = {
          db: null
        };
        if (i)
          for (var d in i)
            a[d] = i[d];
        var p = U[a.name];
        p || (p = qt(), U[a.name] = p), p.forages.push(u), u._initReady || (u._initReady = u.ready, u.ready = ee);
        var l = [];
        function v() {
          return g.resolve();
        }
        for (var w = 0; w < p.forages.length; w++) {
          var S = p.forages[w];
          S !== u && l.push(S._initReady().catch(v));
        }
        var O = p.forages.slice(0);
        return g.all(l).then(function() {
          return a.db = p.db, Y(a);
        }).then(function($) {
          return a.db = $, de(a, u._defaultConfig.version) ? Z(a) : $;
        }).then(function($) {
          a.db = p.db = $, u._dbInfo = a;
          for (var k = 0; k < O.length; k++) {
            var j = O[k];
            j !== u && (j._dbInfo.db = a.db, j._dbInfo.version = a.version);
          }
        });
      }
      function ao(i, u) {
        var a = this;
        i = x(i);
        var d = new g(function(p, l) {
          a.ready().then(function() {
            me(a._dbInfo, G, function(v, w) {
              if (v)
                return l(v);
              try {
                var S = w.objectStore(a._dbInfo.storeName), O = S.get(i);
                O.onsuccess = function() {
                  var $ = O.result;
                  $ === void 0 && ($ = null), M($) && ($ = re($)), p($);
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
      function so(i, u) {
        var a = this, d = new g(function(p, l) {
          a.ready().then(function() {
            me(a._dbInfo, G, function(v, w) {
              if (v)
                return l(v);
              try {
                var S = w.objectStore(a._dbInfo.storeName), O = S.openCursor(), $ = 1;
                O.onsuccess = function() {
                  var k = O.result;
                  if (k) {
                    var j = k.value;
                    M(j) && (j = re(j));
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
      function uo(i, u, a) {
        var d = this;
        i = x(i);
        var p = new g(function(l, v) {
          var w;
          d.ready().then(function() {
            return w = d._dbInfo, ae.call(u) === "[object Blob]" ? b(w.db).then(function(S) {
              return S ? u : he(u);
            }) : u;
          }).then(function(S) {
            me(d._dbInfo, E, function(O, $) {
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
      function fo(i, u) {
        var a = this;
        i = x(i);
        var d = new g(function(p, l) {
          a.ready().then(function() {
            me(a._dbInfo, E, function(v, w) {
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
      function co(i) {
        var u = this, a = new g(function(d, p) {
          u.ready().then(function() {
            me(u._dbInfo, E, function(l, v) {
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
      function lo(i) {
        var u = this, a = new g(function(d, p) {
          u.ready().then(function() {
            me(u._dbInfo, G, function(l, v) {
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
      function ho(i, u) {
        var a = this, d = new g(function(p, l) {
          if (i < 0) {
            p(null);
            return;
          }
          a.ready().then(function() {
            me(a._dbInfo, G, function(v, w) {
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
      function po(i) {
        var u = this, a = new g(function(d, p) {
          u.ready().then(function() {
            me(u._dbInfo, G, function(l, v) {
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
      function mo(i, u) {
        u = I.apply(this, arguments);
        var a = this.config();
        i = typeof i != "function" && i || {}, i.name || (i.name = i.name || a.name, i.storeName = i.storeName || a.storeName);
        var d = this, p;
        if (!i.name)
          p = g.reject("Invalid arguments");
        else {
          var l = i.name === a.name && d._dbInfo.db, v = l ? g.resolve(d._dbInfo.db) : Y(i).then(function(w) {
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
              var z = new g(function(H, Q) {
                var J = y.open(i.name, S);
                J.onerror = function(ue) {
                  var je = J.result;
                  je.close(), Q(ue);
                }, J.onupgradeneeded = function() {
                  var ue = J.result;
                  ue.deleteObjectStore(i.storeName);
                }, J.onsuccess = function() {
                  var ue = J.result;
                  ue.close(), H(ue);
                };
              });
              return z.then(function(H) {
                O.db = H;
                for (var Q = 0; Q < $.length; Q++) {
                  var J = $[Q];
                  J._dbInfo.db = H, B(J._dbInfo);
                }
              }).catch(function(H) {
                throw (C(i, H) || g.resolve()).catch(function() {
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
            var j = new g(function(z, H) {
              var Q = y.deleteDatabase(i.name);
              Q.onerror = function() {
                var J = Q.result;
                J && J.close(), H(Q.error);
              }, Q.onblocked = function() {
                console.warn('dropInstance blocked for database "' + i.name + '" until all open connections are closed');
              }, Q.onsuccess = function() {
                var J = Q.result;
                J && J.close(), z(J);
              };
            });
            return j.then(function(z) {
              S.db = z;
              for (var H = 0; H < O.length; H++) {
                var Q = O[H];
                B(Q._dbInfo);
              }
            }).catch(function(z) {
              throw (C(i, z) || g.resolve()).catch(function() {
              }), z;
            });
          });
        }
        return _(p, u), p;
      }
      var yo = {
        _driver: "asyncStorage",
        _initStorage: io,
        _support: m(),
        iterate: so,
        getItem: ao,
        setItem: uo,
        removeItem: fo,
        clear: co,
        length: lo,
        key: ho,
        keys: po,
        dropInstance: mo
      };
      function go() {
        return typeof openDatabase == "function";
      }
      var ge = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", vo = "~~local_forage_type~", Ft = /^~~local_forage_type~([^~]+)~/, Ve = "__lfsc__:", at = Ve.length, st = "arbf", ut = "blob", Mt = "si08", Ut = "ui08", zt = "uic8", Ht = "si16", Yt = "si32", Wt = "ur16", Kt = "ui32", Vt = "fl32", Xt = "fl64", Gt = at + st.length, Jt = Object.prototype.toString;
      function Qt(i) {
        var u = i.length * 0.75, a = i.length, d, p = 0, l, v, w, S;
        i[i.length - 1] === "=" && (u--, i[i.length - 2] === "=" && u--);
        var O = new ArrayBuffer(u), $ = new Uint8Array(O);
        for (d = 0; d < a; d += 4)
          l = ge.indexOf(i[d]), v = ge.indexOf(i[d + 1]), w = ge.indexOf(i[d + 2]), S = ge.indexOf(i[d + 3]), $[p++] = l << 2 | v >> 4, $[p++] = (v & 15) << 4 | w >> 2, $[p++] = (w & 3) << 6 | S & 63;
        return O;
      }
      function ft(i) {
        var u = new Uint8Array(i), a = "", d;
        for (d = 0; d < u.length; d += 3)
          a += ge[u[d] >> 2], a += ge[(u[d] & 3) << 4 | u[d + 1] >> 4], a += ge[(u[d + 1] & 15) << 2 | u[d + 2] >> 6], a += ge[u[d + 2] & 63];
        return u.length % 3 === 2 ? a = a.substring(0, a.length - 1) + "=" : u.length % 3 === 1 && (a = a.substring(0, a.length - 2) + "=="), a;
      }
      function bo(i, u) {
        var a = "";
        if (i && (a = Jt.call(i)), i && (a === "[object ArrayBuffer]" || i.buffer && Jt.call(i.buffer) === "[object ArrayBuffer]")) {
          var d, p = Ve;
          i instanceof ArrayBuffer ? (d = i, p += st) : (d = i.buffer, a === "[object Int8Array]" ? p += Mt : a === "[object Uint8Array]" ? p += Ut : a === "[object Uint8ClampedArray]" ? p += zt : a === "[object Int16Array]" ? p += Ht : a === "[object Uint16Array]" ? p += Wt : a === "[object Int32Array]" ? p += Yt : a === "[object Uint32Array]" ? p += Kt : a === "[object Float32Array]" ? p += Vt : a === "[object Float64Array]" ? p += Xt : u(new Error("Failed to get type for BinaryArray"))), u(p + ft(d));
        } else if (a === "[object Blob]") {
          var l = new FileReader();
          l.onload = function() {
            var v = vo + i.type + "~" + ft(this.result);
            u(Ve + ut + v);
          }, l.readAsArrayBuffer(i);
        } else
          try {
            u(JSON.stringify(i));
          } catch (v) {
            console.error("Couldn't convert value into a JSON string: ", i), u(null, v);
          }
      }
      function wo(i) {
        if (i.substring(0, at) !== Ve)
          return JSON.parse(i);
        var u = i.substring(Gt), a = i.substring(at, Gt), d;
        if (a === ut && Ft.test(u)) {
          var p = u.match(Ft);
          d = p[1], u = u.substring(p[0].length);
        }
        var l = Qt(u);
        switch (a) {
          case st:
            return l;
          case ut:
            return T([l], { type: d });
          case Mt:
            return new Int8Array(l);
          case Ut:
            return new Uint8Array(l);
          case zt:
            return new Uint8ClampedArray(l);
          case Ht:
            return new Int16Array(l);
          case Wt:
            return new Uint16Array(l);
          case Yt:
            return new Int32Array(l);
          case Kt:
            return new Uint32Array(l);
          case Vt:
            return new Float32Array(l);
          case Xt:
            return new Float64Array(l);
          default:
            throw new Error("Unkown type: " + a);
        }
      }
      var ct = {
        serialize: bo,
        deserialize: wo,
        stringToBuffer: Qt,
        bufferToString: ft
      };
      function Zt(i, u, a, d) {
        i.executeSql("CREATE TABLE IF NOT EXISTS " + u.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], a, d);
      }
      function _o(i) {
        var u = this, a = {
          db: null
        };
        if (i)
          for (var d in i)
            a[d] = typeof i[d] != "string" ? i[d].toString() : i[d];
        var p = new g(function(l, v) {
          try {
            a.db = openDatabase(a.name, String(a.version), a.description, a.size);
          } catch (w) {
            return v(w);
          }
          a.db.transaction(function(w) {
            Zt(w, a, function() {
              u._dbInfo = a, l();
            }, function(S, O) {
              v(O);
            });
          }, v);
        });
        return a.serializer = ct, p;
      }
      function ve(i, u, a, d, p, l) {
        i.executeSql(a, d, p, function(v, w) {
          w.code === w.SYNTAX_ERR ? v.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [u.storeName], function(S, O) {
            O.rows.length ? l(S, w) : Zt(S, u, function() {
              S.executeSql(a, d, p, l);
            }, l);
          }, l) : l(v, w);
        }, l);
      }
      function So(i, u) {
        var a = this;
        i = x(i);
        var d = new g(function(p, l) {
          a.ready().then(function() {
            var v = a._dbInfo;
            v.db.transaction(function(w) {
              ve(w, v, "SELECT * FROM " + v.storeName + " WHERE key = ? LIMIT 1", [i], function(S, O) {
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
      function Oo(i, u) {
        var a = this, d = new g(function(p, l) {
          a.ready().then(function() {
            var v = a._dbInfo;
            v.db.transaction(function(w) {
              ve(w, v, "SELECT * FROM " + v.storeName, [], function(S, O) {
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
      function er(i, u, a, d) {
        var p = this;
        i = x(i);
        var l = new g(function(v, w) {
          p.ready().then(function() {
            u === void 0 && (u = null);
            var S = u, O = p._dbInfo;
            O.serializer.serialize(u, function($, k) {
              k ? w(k) : O.db.transaction(function(j) {
                ve(j, O, "INSERT OR REPLACE INTO " + O.storeName + " (key, value) VALUES (?, ?)", [i, $], function() {
                  v(S);
                }, function(z, H) {
                  w(H);
                });
              }, function(j) {
                if (j.code === j.QUOTA_ERR) {
                  if (d > 0) {
                    v(er.apply(p, [i, S, a, d - 1]));
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
      function $o(i, u, a) {
        return er.apply(this, [i, u, a, 1]);
      }
      function Ao(i, u) {
        var a = this;
        i = x(i);
        var d = new g(function(p, l) {
          a.ready().then(function() {
            var v = a._dbInfo;
            v.db.transaction(function(w) {
              ve(w, v, "DELETE FROM " + v.storeName + " WHERE key = ?", [i], function() {
                p();
              }, function(S, O) {
                l(O);
              });
            });
          }).catch(l);
        });
        return _(d, u), d;
      }
      function Eo(i) {
        var u = this, a = new g(function(d, p) {
          u.ready().then(function() {
            var l = u._dbInfo;
            l.db.transaction(function(v) {
              ve(v, l, "DELETE FROM " + l.storeName, [], function() {
                d();
              }, function(w, S) {
                p(S);
              });
            });
          }).catch(p);
        });
        return _(a, i), a;
      }
      function Io(i) {
        var u = this, a = new g(function(d, p) {
          u.ready().then(function() {
            var l = u._dbInfo;
            l.db.transaction(function(v) {
              ve(v, l, "SELECT COUNT(key) as c FROM " + l.storeName, [], function(w, S) {
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
      function To(i, u) {
        var a = this, d = new g(function(p, l) {
          a.ready().then(function() {
            var v = a._dbInfo;
            v.db.transaction(function(w) {
              ve(w, v, "SELECT key FROM " + v.storeName + " WHERE id = ? LIMIT 1", [i + 1], function(S, O) {
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
      function xo(i) {
        var u = this, a = new g(function(d, p) {
          u.ready().then(function() {
            var l = u._dbInfo;
            l.db.transaction(function(v) {
              ve(v, l, "SELECT key FROM " + l.storeName, [], function(w, S) {
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
      function ko(i) {
        return new g(function(u, a) {
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
      function Lo(i, u) {
        u = I.apply(this, arguments);
        var a = this.config();
        i = typeof i != "function" && i || {}, i.name || (i.name = i.name || a.name, i.storeName = i.storeName || a.storeName);
        var d = this, p;
        return i.name ? p = new g(function(l) {
          var v;
          i.name === a.name ? v = d._dbInfo.db : v = openDatabase(i.name, "", "", 0), i.storeName ? l({
            db: v,
            storeNames: [i.storeName]
          }) : l(ko(v));
        }).then(function(l) {
          return new g(function(v, w) {
            l.db.transaction(function(S) {
              function O(z) {
                return new g(function(H, Q) {
                  S.executeSql("DROP TABLE IF EXISTS " + z, [], function() {
                    H();
                  }, function(J, ue) {
                    Q(ue);
                  });
                });
              }
              for (var $ = [], k = 0, j = l.storeNames.length; k < j; k++)
                $.push(O(l.storeNames[k]));
              g.all($).then(function() {
                v();
              }).catch(function(z) {
                w(z);
              });
            }, function(S) {
              w(S);
            });
          });
        }) : p = g.reject("Invalid arguments"), _(p, u), p;
      }
      var Po = {
        _driver: "webSQLStorage",
        _initStorage: _o,
        _support: go(),
        iterate: Oo,
        getItem: So,
        setItem: $o,
        removeItem: Ao,
        clear: Eo,
        length: Io,
        key: To,
        keys: xo,
        dropInstance: Lo
      };
      function No() {
        try {
          return typeof localStorage < "u" && "setItem" in localStorage && // in IE8 typeof localStorage.setItem === 'object'
          !!localStorage.setItem;
        } catch {
          return !1;
        }
      }
      function tr(i, u) {
        var a = i.name + "/";
        return i.storeName !== u.storeName && (a += i.storeName + "/"), a;
      }
      function Ro() {
        var i = "_localforage_support_test";
        try {
          return localStorage.setItem(i, !0), localStorage.removeItem(i), !1;
        } catch {
          return !0;
        }
      }
      function Do() {
        return !Ro() || localStorage.length > 0;
      }
      function Bo(i) {
        var u = this, a = {};
        if (i)
          for (var d in i)
            a[d] = i[d];
        return a.keyPrefix = tr(i, u._defaultConfig), Do() ? (u._dbInfo = a, a.serializer = ct, g.resolve()) : g.reject();
      }
      function Co(i) {
        var u = this, a = u.ready().then(function() {
          for (var d = u._dbInfo.keyPrefix, p = localStorage.length - 1; p >= 0; p--) {
            var l = localStorage.key(p);
            l.indexOf(d) === 0 && localStorage.removeItem(l);
          }
        });
        return _(a, i), a;
      }
      function jo(i, u) {
        var a = this;
        i = x(i);
        var d = a.ready().then(function() {
          var p = a._dbInfo, l = localStorage.getItem(p.keyPrefix + i);
          return l && (l = p.serializer.deserialize(l)), l;
        });
        return _(d, u), d;
      }
      function qo(i, u) {
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
      function Fo(i, u) {
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
      function Mo(i) {
        var u = this, a = u.ready().then(function() {
          for (var d = u._dbInfo, p = localStorage.length, l = [], v = 0; v < p; v++) {
            var w = localStorage.key(v);
            w.indexOf(d.keyPrefix) === 0 && l.push(w.substring(d.keyPrefix.length));
          }
          return l;
        });
        return _(a, i), a;
      }
      function Uo(i) {
        var u = this, a = u.keys().then(function(d) {
          return d.length;
        });
        return _(a, i), a;
      }
      function zo(i, u) {
        var a = this;
        i = x(i);
        var d = a.ready().then(function() {
          var p = a._dbInfo;
          localStorage.removeItem(p.keyPrefix + i);
        });
        return _(d, u), d;
      }
      function Ho(i, u, a) {
        var d = this;
        i = x(i);
        var p = d.ready().then(function() {
          u === void 0 && (u = null);
          var l = u;
          return new g(function(v, w) {
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
      function Yo(i, u) {
        if (u = I.apply(this, arguments), i = typeof i != "function" && i || {}, !i.name) {
          var a = this.config();
          i.name = i.name || a.name, i.storeName = i.storeName || a.storeName;
        }
        var d = this, p;
        return i.name ? p = new g(function(l) {
          i.storeName ? l(tr(i, d._defaultConfig)) : l(i.name + "/");
        }).then(function(l) {
          for (var v = localStorage.length - 1; v >= 0; v--) {
            var w = localStorage.key(v);
            w.indexOf(l) === 0 && localStorage.removeItem(w);
          }
        }) : p = g.reject("Invalid arguments"), _(p, u), p;
      }
      var Wo = {
        _driver: "localStorageWrapper",
        _initStorage: Bo,
        _support: No(),
        iterate: qo,
        getItem: jo,
        setItem: Ho,
        removeItem: zo,
        clear: Co,
        length: Uo,
        key: Fo,
        keys: Mo,
        dropInstance: Yo
      }, Ko = function(u, a) {
        return u === a || typeof u == "number" && typeof a == "number" && isNaN(u) && isNaN(a);
      }, Vo = function(u, a) {
        for (var d = u.length, p = 0; p < d; ) {
          if (Ko(u[p], a))
            return !0;
          p++;
        }
        return !1;
      }, rr = Array.isArray || function(i) {
        return Object.prototype.toString.call(i) === "[object Array]";
      }, Ce = {}, nr = {}, Ee = {
        INDEXEDDB: yo,
        WEBSQL: Po,
        LOCALSTORAGE: Wo
      }, Xo = [Ee.INDEXEDDB._driver, Ee.WEBSQL._driver, Ee.LOCALSTORAGE._driver], Xe = ["dropInstance"], lt = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(Xe), Go = {
        description: "",
        driver: Xo.slice(),
        name: "localforage",
        // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
        // we can use without a prompt.
        size: 4980736,
        storeName: "keyvaluepairs",
        version: 1
      };
      function Jo(i, u) {
        i[u] = function() {
          var a = arguments;
          return i.ready().then(function() {
            return i[u].apply(i, a);
          });
        };
      }
      function dt() {
        for (var i = 1; i < arguments.length; i++) {
          var u = arguments[i];
          if (u)
            for (var a in u)
              u.hasOwnProperty(a) && (rr(u[a]) ? arguments[0][a] = u[a].slice() : arguments[0][a] = u[a]);
        }
        return arguments[0];
      }
      var Qo = function() {
        function i(u) {
          c(this, i);
          for (var a in Ee)
            if (Ee.hasOwnProperty(a)) {
              var d = Ee[a], p = d._driver;
              this[a] = p, Ce[p] || this.defineDriver(d);
            }
          this._defaultConfig = dt({}, Go), this._config = dt({}, this._defaultConfig, u), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch(function() {
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
          var l = new g(function(v, w) {
            try {
              var S = a._driver, O = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
              if (!a._driver) {
                w(O);
                return;
              }
              for (var $ = lt.concat("_initStorage"), k = 0, j = $.length; k < j; k++) {
                var z = $[k], H = !Vo(Xe, z);
                if ((H || a[z]) && typeof a[z] != "function") {
                  w(O);
                  return;
                }
              }
              var Q = function() {
                for (var je = function(ti) {
                  return function() {
                    var ri = new Error("Method " + ti + " is not implemented by the current driver"), or = g.reject(ri);
                    return _(or, arguments[arguments.length - 1]), or;
                  };
                }, ht = 0, ei = Xe.length; ht < ei; ht++) {
                  var pt = Xe[ht];
                  a[pt] || (a[pt] = je(pt));
                }
              };
              Q();
              var J = function(je) {
                Ce[S] && console.info("Redefining LocalForage driver: " + S), Ce[S] = a, nr[S] = je, v();
              };
              "_support" in a ? a._support && typeof a._support == "function" ? a._support().then(J, w) : J(!!a._support) : J(!0);
            } catch (ue) {
              w(ue);
            }
          });
          return A(l, d, p), l;
        }, i.prototype.driver = function() {
          return this._driver || null;
        }, i.prototype.getDriver = function(a, d, p) {
          var l = Ce[a] ? g.resolve(Ce[a]) : g.reject(new Error("Driver not found."));
          return A(l, d, p), l;
        }, i.prototype.getSerializer = function(a) {
          var d = g.resolve(ct);
          return A(d, a), d;
        }, i.prototype.ready = function(a) {
          var d = this, p = d._driverSet.then(function() {
            return d._ready === null && (d._ready = d._initDriver()), d._ready;
          });
          return A(p, a, a), p;
        }, i.prototype.setDriver = function(a, d, p) {
          var l = this;
          rr(a) || (a = [a]);
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
                var Q = new Error("No available storage method found.");
                return l._driverSet = g.reject(Q), l._driverSet;
              }
              return z();
            };
          }
          var $ = this._driverSet !== null ? this._driverSet.catch(function() {
            return g.resolve();
          }) : g.resolve();
          return this._driverSet = $.then(function() {
            var k = v[0];
            return l._dbInfo = null, l._ready = null, l.getDriver(k).then(function(j) {
              l._driver = j._driver, w(), l._wrapLibraryMethodsWithReady(), l._initDriver = O(v);
            });
          }).catch(function() {
            w();
            var k = new Error("No available storage method found.");
            return l._driverSet = g.reject(k), l._driverSet;
          }), A(this._driverSet, d, p), this._driverSet;
        }, i.prototype.supports = function(a) {
          return !!nr[a];
        }, i.prototype._extend = function(a) {
          dt(this, a);
        }, i.prototype._getSupportedDrivers = function(a) {
          for (var d = [], p = 0, l = a.length; p < l; p++) {
            var v = a[p];
            this.supports(v) && d.push(v);
          }
          return d;
        }, i.prototype._wrapLibraryMethodsWithReady = function() {
          for (var a = 0, d = lt.length; a < d; a++)
            Jo(this, lt[a]);
        }, i.prototype.createInstance = function(a) {
          return new i(a);
        }, i;
      }(), Zo = new Qo();
      n.exports = Zo;
    }, { 3: 3 }] }, {}, [4])(4);
  });
})(on);
var Pi = on.exports;
const Ni = /* @__PURE__ */ Li(Pi), Te = [];
function Ri(e, t) {
  return {
    subscribe: an(e, t).subscribe
  };
}
function an(e, t = se) {
  let r;
  const n = /* @__PURE__ */ new Set();
  function o(f) {
    if (tn(e, f) && (e = f, r)) {
      const y = !Te.length;
      for (const m of n)
        m[1](), Te.push(m, e);
      if (y) {
        for (let m = 0; m < Te.length; m += 2)
          Te[m][0](Te[m + 1]);
        Te.length = 0;
      }
    }
  }
  function s(f) {
    o(f(e));
  }
  function c(f, y = se) {
    const m = [f, y];
    return n.add(m), n.size === 1 && (r = t(o, s) || se), f(e), () => {
      n.delete(m), n.size === 0 && r && (r(), r = null);
    };
  }
  return { set: o, update: s, subscribe: c };
}
Ni.config({
  name: "SNS HPC AI Assitant"
});
const Oe = {
  Unknown: { slug: "unknown", description: "Checking the AI server status...", icon: "⏳" },
  Error: { slug: "error", description: "The AI server is currently unavailable", icon: "🔴" },
  OK: { slug: "ok", description: "The AI server is fully functional", icon: "🟢" },
  Running: { slug: "running", description: "The AI server is working to answer", icon: "🔵" },
  Degraded: { slug: "degraded", description: "The AI server is currently degraded", icon: "🟡" }
};
class Di {
  constructor(t) {
    this.baseURL = t, this.status = an(Oe.Unknown);
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
            return this.status.set(c.premium ? Oe.OK : Oe.Degraded), c.model;
      }
    } catch (n) {
      console.error(n);
    }
    this.status.set(Oe.Error);
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
    this.status.set(Oe.Error);
  }
  async chat(t, r) {
    r = r || {};
    const n = ai(this.status);
    try {
      this.status.set(Oe.Running);
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
    this.status.set(Oe.Error);
  }
}
var _e = {}, X = {}, ie = {};
Object.defineProperty(ie, "__esModule", { value: !0 });
ie.output = ie.exists = ie.hash = ie.bytes = ie.bool = ie.number = void 0;
function tt(e) {
  if (!Number.isSafeInteger(e) || e < 0)
    throw new Error(`Wrong positive integer: ${e}`);
}
ie.number = tt;
function sn(e) {
  if (typeof e != "boolean")
    throw new Error(`Expected boolean, not ${e}`);
}
ie.bool = sn;
function Bi(e) {
  return e instanceof Uint8Array || e != null && typeof e == "object" && e.constructor.name === "Uint8Array";
}
function Dt(e, ...t) {
  if (!Bi(e))
    throw new Error("Expected Uint8Array");
  if (t.length > 0 && !t.includes(e.length))
    throw new Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`);
}
ie.bytes = Dt;
function un(e) {
  if (typeof e != "function" || typeof e.create != "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  tt(e.outputLen), tt(e.blockLen);
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
  Dt(e);
  const r = t.outputLen;
  if (e.length < r)
    throw new Error(`digestInto() expects output buffer of length at least ${r}`);
}
ie.output = cn;
const Ci = { number: tt, bool: sn, bytes: Dt, hash: un, exists: fn, output: cn };
ie.default = Ci;
var P = {};
Object.defineProperty(P, "__esModule", { value: !0 });
P.add5L = P.add5H = P.add4H = P.add4L = P.add3H = P.add3L = P.add = P.rotlBL = P.rotlBH = P.rotlSL = P.rotlSH = P.rotr32L = P.rotr32H = P.rotrBL = P.rotrBH = P.rotrSL = P.rotrSH = P.shrSL = P.shrSH = P.toBig = P.split = P.fromBig = void 0;
const Je = /* @__PURE__ */ BigInt(2 ** 32 - 1), bt = /* @__PURE__ */ BigInt(32);
function Bt(e, t = !1) {
  return t ? { h: Number(e & Je), l: Number(e >> bt & Je) } : { h: Number(e >> bt & Je) | 0, l: Number(e & Je) | 0 };
}
P.fromBig = Bt;
function ln(e, t = !1) {
  let r = new Uint32Array(e.length), n = new Uint32Array(e.length);
  for (let o = 0; o < e.length; o++) {
    const { h: s, l: c } = Bt(e[o], t);
    [r[o], n[o]] = [s, c];
  }
  return [r, n];
}
P.split = ln;
const dn = (e, t) => BigInt(e >>> 0) << bt | BigInt(t >>> 0);
P.toBig = dn;
const hn = (e, t, r) => e >>> r;
P.shrSH = hn;
const pn = (e, t, r) => e << 32 - r | t >>> r;
P.shrSL = pn;
const mn = (e, t, r) => e >>> r | t << 32 - r;
P.rotrSH = mn;
const yn = (e, t, r) => e << 32 - r | t >>> r;
P.rotrSL = yn;
const gn = (e, t, r) => e << 64 - r | t >>> r - 32;
P.rotrBH = gn;
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
const ji = {
  fromBig: Bt,
  split: ln,
  toBig: dn,
  shrSH: hn,
  shrSL: pn,
  rotrSH: mn,
  rotrSL: yn,
  rotrBH: gn,
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
P.default = ji;
var Pn = {}, it = {};
Object.defineProperty(it, "__esModule", { value: !0 });
it.crypto = void 0;
it.crypto = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
(function(e) {
  /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
  Object.defineProperty(e, "__esModule", { value: !0 }), e.randomBytes = e.wrapXOFConstructorWithOpts = e.wrapConstructorWithOpts = e.wrapConstructor = e.checkOpts = e.Hash = e.concatBytes = e.toBytes = e.utf8ToBytes = e.asyncLoop = e.nextTick = e.hexToBytes = e.bytesToHex = e.isLE = e.rotr = e.createView = e.u32 = e.u8 = void 0;
  const t = it, r = (b) => new Uint8Array(b.buffer, b.byteOffset, b.byteLength);
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
  function y(b) {
    if (!o(b))
      throw new Error("Uint8Array expected");
    let L = "";
    for (let B = 0; B < b.length; B++)
      L += f[b[B]];
    return L;
  }
  e.bytesToHex = y;
  const m = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
  function T(b) {
    if (b >= m._0 && b <= m._9)
      return b - m._0;
    if (b >= m._A && b <= m._F)
      return b - (m._A - 10);
    if (b >= m._a && b <= m._f)
      return b - (m._a - 10);
  }
  function g(b) {
    if (typeof b != "string")
      throw new Error("hex string expected, got " + typeof b);
    const L = b.length, B = L / 2;
    if (L % 2)
      throw new Error("padded hex string expected, got unpadded hex of length " + L);
    const C = new Uint8Array(B);
    for (let F = 0, Y = 0; F < B; F++, Y += 2) {
      const Z = T(b.charCodeAt(Y)), de = T(b.charCodeAt(Y + 1));
      if (Z === void 0 || de === void 0) {
        const he = b[Y] + b[Y + 1];
        throw new Error('hex string expected, got non-hex character "' + he + '" at index ' + Y);
      }
      C[F] = Z * 16 + de;
    }
    return C;
  }
  e.hexToBytes = g;
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
Object.defineProperty(X, "__esModule", { value: !0 });
X.shake256 = X.shake128 = X.keccak_512 = X.keccak_384 = X.keccak_256 = X.keccak_224 = X.sha3_512 = X.sha3_384 = X.sha3_256 = X.sha3_224 = X.Keccak = X.keccakP = void 0;
const xe = ie, He = P, Me = Pn, [Nn, Rn, Dn] = [[], [], []], qi = /* @__PURE__ */ BigInt(0), qe = /* @__PURE__ */ BigInt(1), Fi = /* @__PURE__ */ BigInt(2), Mi = /* @__PURE__ */ BigInt(7), Ui = /* @__PURE__ */ BigInt(256), zi = /* @__PURE__ */ BigInt(113);
for (let e = 0, t = qe, r = 1, n = 0; e < 24; e++) {
  [r, n] = [n, (2 * r + 3 * n) % 5], Nn.push(2 * (5 * n + r)), Rn.push((e + 1) * (e + 2) / 2 % 64);
  let o = qi;
  for (let s = 0; s < 7; s++)
    t = (t << qe ^ (t >> Mi) * zi) % Ui, t & Fi && (o ^= qe << (qe << /* @__PURE__ */ BigInt(s)) - qe);
  Dn.push(o);
}
const [Hi, Yi] = /* @__PURE__ */ (0, He.split)(Dn, !0), cr = (e, t, r) => r > 32 ? (0, He.rotlBH)(e, t, r) : (0, He.rotlSH)(e, t, r), lr = (e, t, r) => r > 32 ? (0, He.rotlBL)(e, t, r) : (0, He.rotlSL)(e, t, r);
function Bn(e, t = 24) {
  const r = new Uint32Array(10);
  for (let n = 24 - t; n < 24; n++) {
    for (let c = 0; c < 10; c++)
      r[c] = e[c] ^ e[c + 10] ^ e[c + 20] ^ e[c + 30] ^ e[c + 40];
    for (let c = 0; c < 10; c += 2) {
      const f = (c + 8) % 10, y = (c + 2) % 10, m = r[y], T = r[y + 1], g = cr(m, T, 1) ^ r[f], _ = lr(m, T, 1) ^ r[f + 1];
      for (let A = 0; A < 50; A += 10)
        e[c + A] ^= g, e[c + A + 1] ^= _;
    }
    let o = e[2], s = e[3];
    for (let c = 0; c < 24; c++) {
      const f = Rn[c], y = cr(o, s, f), m = lr(o, s, f), T = Nn[c];
      o = e[T], s = e[T + 1], e[T] = y, e[T + 1] = m;
    }
    for (let c = 0; c < 50; c += 10) {
      for (let f = 0; f < 10; f++)
        r[f] = e[c + f];
      for (let f = 0; f < 10; f++)
        e[c + f] ^= ~r[(f + 2) % 10] & r[(f + 4) % 10];
    }
    e[0] ^= Hi[n], e[1] ^= Yi[n];
  }
  r.fill(0);
}
X.keccakP = Bn;
class Ke extends Me.Hash {
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(t, r, n, o = !1, s = 24) {
    if (super(), this.blockLen = t, this.suffix = r, this.outputLen = n, this.enableXOF = o, this.rounds = s, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, (0, xe.number)(n), 0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = (0, Me.u32)(this.state);
  }
  keccak() {
    Bn(this.state32, this.rounds), this.posOut = 0, this.pos = 0;
  }
  update(t) {
    (0, xe.exists)(this);
    const { blockLen: r, state: n } = this;
    t = (0, Me.toBytes)(t);
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
    (0, xe.exists)(this, !1), (0, xe.bytes)(t), this.finish();
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
    return (0, xe.number)(t), this.xofInto(new Uint8Array(t));
  }
  digestInto(t) {
    if ((0, xe.output)(t, this), this.finished)
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
    return t || (t = new Ke(r, n, o, c, s)), t.state32.set(this.state32), t.pos = this.pos, t.posOut = this.posOut, t.finished = this.finished, t.rounds = s, t.suffix = n, t.outputLen = o, t.enableXOF = c, t.destroyed = this.destroyed, t;
  }
}
X.Keccak = Ke;
const Se = (e, t, r) => (0, Me.wrapConstructor)(() => new Ke(t, e, r));
X.sha3_224 = Se(6, 144, 224 / 8);
X.sha3_256 = Se(6, 136, 256 / 8);
X.sha3_384 = Se(6, 104, 384 / 8);
X.sha3_512 = Se(6, 72, 512 / 8);
X.keccak_224 = Se(1, 144, 224 / 8);
X.keccak_256 = Se(1, 136, 256 / 8);
X.keccak_384 = Se(1, 104, 384 / 8);
X.keccak_512 = Se(1, 72, 512 / 8);
const Cn = (e, t, r) => (0, Me.wrapXOFConstructorWithOpts)((n = {}) => new Ke(t, e, n.dkLen === void 0 ? r : n.dkLen, !0));
X.shake128 = Cn(31, 168, 128 / 8);
X.shake256 = Cn(31, 136, 256 / 8);
const { sha3_512: Wi } = X, jn = 24, Ue = 32, wt = (e = 4, t = Math.random) => {
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
const Fn = (e = "") => qn(Wi(e)).toString(36).slice(1), dr = Array.from(
  { length: 26 },
  (e, t) => String.fromCharCode(t + 97)
), Ki = (e) => dr[Math.floor(e() * dr.length)], Mn = ({
  globalObj: e = typeof Le < "u" ? Le : typeof window < "u" ? window : {},
  random: t = Math.random
} = {}) => {
  const r = Object.keys(e).toString(), n = r.length ? r + wt(Ue, t) : wt(Ue, t);
  return Fn(n).substring(0, Ue);
}, Un = (e) => () => e++, Vi = 476782367, zn = ({
  // Fallback if the user does not pass in a CSPRNG. This should be OK
  // because we don't rely solely on the random number generator for entropy.
  // We also use the host fingerprint, current time, and a session counter.
  random: e = Math.random,
  counter: t = Un(Math.floor(e() * Vi)),
  length: r = jn,
  fingerprint: n = Mn({ random: e })
} = {}) => function() {
  const s = Ki(e), c = Date.now().toString(36), f = t().toString(36), y = wt(r, e), m = `${c + y + f + n}`;
  return `${s + Fn(m).substring(1, r)}`;
}, Xi = zn(), Gi = (e, { minLength: t = 2, maxLength: r = Ue } = {}) => {
  const n = e.length, o = /^[0-9a-z]+$/;
  try {
    if (typeof e == "string" && n >= t && n <= r && o.test(e))
      return !0;
  } finally {
  }
  return !1;
};
_e.getConstants = () => ({ defaultLength: jn, bigLength: Ue });
_e.init = zn;
_e.createId = Xi;
_e.bufToBigInt = qn;
_e.createCounter = Un;
_e.createFingerprint = Mn;
_e.isCuid = Gi;
const { createId: Ji, init: Ds, getConstants: Bs, isCuid: Cs } = _e;
var Qi = Ji;
class Zi {
  // TODO: Implement message tree with branches
  constructor(t, r, n) {
    if (this.updated = t, this.ollama = r, n)
      this._ = n;
    else {
      const o = (/* @__PURE__ */ new Date()).toISOString();
      this._ = {
        chatId: Qi(),
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
const hr = {
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
var Hn = "en", Ct = {}, _t = {};
function Yn() {
  return Hn;
}
function ea(e) {
  Hn = e;
}
function ta(e) {
  return Ct[e];
}
function ra(e) {
  if (!e)
    throw new Error("No locale data passed");
  Ct[e.locale] = e, _t[e.locale.toLowerCase()] = e.locale;
}
function pr(e) {
  if (Ct[e])
    return e;
  if (_t[e.toLowerCase()])
    return _t[e.toLowerCase()];
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
  var t = pr(e);
  if (t)
    return t;
  for (var r = e.split("-"); e.length > 1; ) {
    r.pop(), e = r.join("-");
    var n = pr(e);
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
    var r = String(t).split("."), n = r[0], o = r[1] || "", s = !r[1], c = n.slice(-1), f = n.slice(-2), y = o.slice(-1), m = o.slice(-2);
    return s && c == 1 && f != 11 || y == 1 && m != 11 ? "one" : s && c >= 2 && c <= 4 && (f < 12 || f > 14) || y >= 2 && y <= 4 && (m < 12 || m > 14) ? "few" : "other";
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
    var r = String(t).split("."), n = r[1] || "", o = n.length, s = Number(r[0]) == t, c = s && r[0].slice(-1), f = s && r[0].slice(-2), y = n.slice(-2), m = n.slice(-1);
    return s && c == 0 || f >= 11 && f <= 19 || o == 2 && y >= 11 && y <= 19 ? "zero" : c == 1 && f != 11 || o == 2 && m == 1 && y != 11 || o != 2 && m == 1 ? "one" : "other";
  },
  mk: function(t) {
    var r = String(t).split("."), n = r[0], o = r[1] || "", s = !r[1], c = n.slice(-1), f = n.slice(-2), y = o.slice(-1), m = o.slice(-2);
    return s && c == 1 && f != 11 || y == 1 && m != 11 ? "one" : "other";
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
const yr = h;
function gr(e) {
  return e === "pt-PT" ? e : oa(e);
}
var na = /^([a-z0-9]+)/i;
function oa(e) {
  var t = e.match(na);
  if (!t)
    throw new TypeError("Invalid locale: ".concat(e));
  return t[1];
}
function ia(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function vr(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function aa(e, t, r) {
  return t && vr(e.prototype, t), r && vr(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var St = /* @__PURE__ */ function() {
  function e(t, r) {
    ia(this, e);
    var n = e.supportedLocalesOf(t);
    if (n.length === 0)
      throw new RangeError("Unsupported locale: " + t);
    if (r && r.type !== "cardinal")
      throw new RangeError('Only "cardinal" "type" is supported');
    this.$ = yr[gr(n[0])];
  }
  return aa(e, [{
    key: "select",
    value: function(r) {
      return this.$(r);
    }
  }], [{
    key: "supportedLocalesOf",
    value: function(r) {
      return typeof r == "string" && (r = [r]), r.filter(function(n) {
        return yr[gr(n)];
      });
    }
  }]), e;
}();
function Ot(e) {
  "@babel/helpers - typeof";
  return Ot = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ot(e);
}
function br(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function wr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? br(Object(r), !0).forEach(function(n) {
      sa(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : br(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function sa(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function _r(e, t) {
  return la(e) || ca(e, t) || fa(e, t) || ua();
}
function ua() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fa(e, t) {
  if (e) {
    if (typeof e == "string")
      return Sr(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Sr(e, t);
  }
}
function Sr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function ca(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], o = !0, s = !1, c, f;
    try {
      for (r = r.call(e); !(o = (c = r.next()).done) && (n.push(c.value), !(t && n.length === t)); o = !0)
        ;
    } catch (y) {
      s = !0, f = y;
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
function la(e) {
  if (Array.isArray(e))
    return e;
}
function da(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Or(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function ha(e, t, r) {
  return t && Or(e.prototype, t), r && Or(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var pa = ["second", "minute", "hour", "day", "week", "month", "quarter", "year"], ma = ["auto", "always"], ya = ["long", "short", "narrow"], ga = ["lookup", "best fit"], we = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    da(this, e);
    var n = r.numeric, o = r.style, s = r.localeMatcher;
    if (this.numeric = "always", this.style = "long", this.localeMatcher = "lookup", n !== void 0) {
      if (ma.indexOf(n) < 0)
        throw new RangeError('Invalid "numeric" option: '.concat(n));
      this.numeric = n;
    }
    if (o !== void 0) {
      if (ya.indexOf(o) < 0)
        throw new RangeError('Invalid "style" option: '.concat(o));
      this.style = o;
    }
    if (s !== void 0) {
      if (ga.indexOf(s) < 0)
        throw new RangeError('Invalid "localeMatcher" option: '.concat(s));
      this.localeMatcher = s;
    }
    if (typeof t == "string" && (t = [t]), t.push(Yn()), this.locale = e.supportedLocalesOf(t, {
      localeMatcher: this.localeMatcher
    })[0], !this.locale)
      throw new Error("No supported locale was found");
    St.supportedLocalesOf(this.locale).length > 0 ? this.pluralRules = new St(this.locale) : console.warn('"'.concat(this.locale, '" locale is not supported')), typeof Intl < "u" && Intl.NumberFormat ? (this.numberFormat = new Intl.NumberFormat(this.locale), this.numberingSystem = this.numberFormat.resolvedOptions().numberingSystem) : this.numberingSystem = "latn", this.locale = Wn(this.locale, {
      localeMatcher: this.localeMatcher
    });
  }
  return ha(e, [{
    key: "format",
    value: function() {
      var r = $r(arguments), n = _r(r, 2), o = n[0], s = n[1];
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
      var r = $r(arguments), n = _r(r, 2), o = n[0], s = n[1], c = this.getRule(o, s), f = c.indexOf("{0}");
      if (f < 0)
        return [{
          type: "literal",
          value: c
        }];
      var y = [];
      return f > 0 && y.push({
        type: "literal",
        value: c.slice(0, f)
      }), y = y.concat(this.formatNumberToParts(Math.abs(o)).map(function(m) {
        return wr(wr({}, m), {}, {
          unit: s
        });
      })), f + 3 < c.length - 1 && y.push({
        type: "literal",
        value: c.slice(f + 3)
      }), y;
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
      var o = ta(this.locale)[this.style][n];
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
      var f = o[Sa(r) ? "past" : "future"];
      if (typeof f == "string")
        return f;
      var y = this.pluralRules && this.pluralRules.select(Math.abs(r)) || "other";
      return f[y] || f.other;
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
we.supportedLocalesOf = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (typeof e == "string")
    e = [e];
  else if (!Array.isArray(e))
    throw new TypeError('Invalid "locales" argument');
  return e.filter(function(r) {
    return Wn(r, t);
  });
};
we.addLocale = ra;
we.setDefaultLocale = ea;
we.getDefaultLocale = Yn;
we.PluralRules = St;
var yt = 'Invalid "unit" argument';
function va(e) {
  if (Ot(e) === "symbol")
    throw new TypeError(yt);
  if (typeof e != "string")
    throw new RangeError("".concat(yt, ": ").concat(e));
  if (e[e.length - 1] === "s" && (e = e.slice(0, e.length - 1)), pa.indexOf(e) < 0)
    throw new RangeError("".concat(yt, ": ").concat(e));
  return e;
}
var ba = 'Invalid "number" argument';
function wa(e) {
  if (e = Number(e), Number.isFinite && !Number.isFinite(e))
    throw new RangeError("".concat(ba, ": ").concat(e));
  return e;
}
function _a(e) {
  return 1 / e === -1 / 0;
}
function Sa(e) {
  return e < 0 || e === 0 && _a(e);
}
function $r(e) {
  if (e.length < 2)
    throw new TypeError('"unit" argument is required');
  return [wa(e[0]), va(e[1])];
}
function rt(e) {
  "@babel/helpers - typeof";
  return rt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, rt(e);
}
function Oa(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ar(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function $a(e, t, r) {
  return t && Ar(e.prototype, t), r && Ar(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var Er = /* @__PURE__ */ function() {
  function e() {
    Oa(this, e), this.cache = {};
  }
  return $a(e, [{
    key: "get",
    value: function() {
      for (var r = this.cache, n = arguments.length, o = new Array(n), s = 0; s < n; s++)
        o[s] = arguments[s];
      for (var c = 0, f = o; c < f.length; c++) {
        var y = f[c];
        if (rt(r) !== "object")
          return;
        r = r[y];
      }
      return r;
    }
  }, {
    key: "put",
    value: function() {
      for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
        n[o] = arguments[o];
      for (var s = n.pop(), c = n.pop(), f = this.cache, y = 0, m = n; y < m.length; y++) {
        var T = m[y];
        rt(f[T]) !== "object" && (f[T] = {}), f = f[T];
      }
      return f[c] = s;
    }
  }]), e;
}();
function $t(e) {
  "@babel/helpers - typeof";
  return $t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $t(e);
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
      return Ir(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Ir(e, t);
  }
}
function Ir(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Ia(e, t) {
  for (var r = Aa(e), n; !(n = r()).done; ) {
    var o = n.value;
    if (t(o))
      return o;
    for (var s = o.split("-"); s.length > 1; )
      if (s.pop(), o = s.join("-"), t(o))
        return o;
  }
  throw new Error("No locale data has been registered for any of the locales: ".concat(e.join(", ")));
}
function Ta() {
  var e = (typeof Intl > "u" ? "undefined" : $t(Intl)) === "object";
  return e && typeof Intl.DateTimeFormat == "function";
}
function At(e) {
  "@babel/helpers - typeof";
  return At = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, At(e);
}
function xa(e) {
  return La(e) && (Array.isArray(e.steps) || // `gradation` property is deprecated: it has been renamed to `steps`.
  Array.isArray(e.gradation) || // `flavour` property is deprecated: it has been renamed to `labels`.
  Array.isArray(e.flavour) || typeof e.flavour == "string" || Array.isArray(e.labels) || typeof e.labels == "string" || // `units` property is deprecated.
  Array.isArray(e.units) || // `custom` property is deprecated.
  typeof e.custom == "function");
}
var ka = {}.constructor;
function La(e) {
  return At(e) !== void 0 && e !== null && e.constructor === ka;
}
var ye = 60, nt = 60 * ye, $e = 24 * nt, Et = 7 * $e, It = 30.44 * $e, Kn = 146097 / 400 * $e;
function Re(e) {
  switch (e) {
    case "second":
      return 1;
    case "minute":
      return ye;
    case "hour":
      return nt;
    case "day":
      return $e;
    case "week":
      return Et;
    case "month":
      return It;
    case "year":
      return Kn;
  }
}
function Vn(e) {
  return e.factor !== void 0 ? e.factor : Re(e.unit || e.formatAs) || 1;
}
function Ye(e) {
  switch (e) {
    case "floor":
      return Math.floor;
    default:
      return Math.round;
  }
}
function jt(e) {
  switch (e) {
    case "floor":
      return 1;
    default:
      return 0.5;
  }
}
function Tt(e) {
  "@babel/helpers - typeof";
  return Tt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Tt(e);
}
function Xn(e, t) {
  var r = t.prevStep, n = t.timestamp, o = t.now, s = t.future, c = t.round, f;
  return r && (r.id || r.unit) && (f = e["threshold_for_".concat(r.id || r.unit)]), f === void 0 && e.threshold !== void 0 && (f = e.threshold, typeof f == "function" && (f = f(o, s))), f === void 0 && (f = e.minTime), Tt(f) === "object" && (r && r.id && f[r.id] !== void 0 ? f = f[r.id] : f = f.default), typeof f == "function" && (f = f(n, {
    future: s,
    getMinTimeForUnit: function(m, T) {
      return Tr(m, T || r && r.formatAs, {
        round: c
      });
    }
  })), f === void 0 && e.test && (e.test(n, {
    now: o,
    future: s
  }) ? f = 0 : f = 9007199254740991), f === void 0 && (r ? e.formatAs && r.formatAs && (f = Tr(e.formatAs, r.formatAs, {
    round: c
  })) : f = 0), f === void 0 && console.warn("[javascript-time-ago] A step should specify `minTime`:\n" + JSON.stringify(e, null, 2)), f;
}
function Tr(e, t, r) {
  var n = r.round, o = Re(e), s;
  if (t === "now" ? s = Re(e) : s = Re(t), o !== void 0 && s !== void 0)
    return o - s * (1 - jt(n));
}
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
function Pa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xr(Object(r), !0).forEach(function(n) {
      Na(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xr(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Na(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Ra(e, t, r) {
  var n = r.now, o = r.future, s = r.round, c = r.units, f = r.getNextStep;
  e = Ba(e, c);
  var y = Da(e, t, {
    now: n,
    future: o,
    round: s
  });
  if (f) {
    if (y) {
      var m = e[e.indexOf(y) - 1], T = e[e.indexOf(y) + 1];
      return [m, y, T];
    }
    return [void 0, void 0, e[0]];
  }
  return y;
}
function Da(e, t, r) {
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
        var y = Ye(s)(Math.abs(t) / Vn(f) / f.granularity) * f.granularity;
        if (y === 0 && c > 0)
          return e[c - 1];
      }
      return f;
    }
  }
}
function Gn(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, o = Xn(e[n], Pa({
    prevStep: e[n - 1],
    timestamp: r.now - t * 1e3
  }, r));
  return o === void 0 || Math.abs(t) < o ? n - 1 : n === e.length - 1 ? n : Gn(e, t, r, n + 1);
}
function Ba(e, t) {
  return e.filter(function(r) {
    var n = r.unit, o = r.formatAs;
    return n = n || o, n ? t.indexOf(n) >= 0 : !0;
  });
}
function Ca(e, t, r) {
  var n = r.now, o = r.round;
  if (Re(e)) {
    var s = Re(e) * 1e3, c = t > n, f = Math.abs(t - n), y = Ye(o)(f / s) * s;
    return c ? y > 0 ? f - y + qa(o, s) : f - y + 1 : -(f - y) + ja(o, s);
  }
}
function ja(e, t) {
  return jt(e) * t;
}
function qa(e, t) {
  return (1 - jt(e)) * t + 1;
}
var Fa = 365 * 24 * 60 * 60 * 1e3, Jn = 1e3 * Fa;
function Ma(e, t, r) {
  var n = r.prevStep, o = r.nextStep, s = r.now, c = r.future, f = r.round, y = e.getTime ? e.getTime() : e, m = function(x) {
    return Ca(x, y, {
      now: s,
      round: f
    });
  }, T = za(c ? t : o, y, {
    future: c,
    now: s,
    round: f,
    prevStep: c ? n : t
    // isFirstStep: future && isFirstStep
  });
  if (T !== void 0) {
    var g;
    if (t && (t.getTimeToNextUpdate && (g = t.getTimeToNextUpdate(y, {
      getTimeToNextUpdateForUnit: m,
      getRoundFunction: Ye,
      now: s,
      future: c,
      round: f
    })), g === void 0)) {
      var _ = t.unit || t.formatAs;
      _ && (g = m(_));
    }
    return g === void 0 ? T : Math.min(g, T);
  }
}
function Ua(e, t, r) {
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
function za(e, t, r) {
  var n = r.now, o = r.future, s = r.round, c = r.prevStep;
  if (e) {
    var f = Ua(e, t, {
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
function Pe(e) {
  return Qn[e];
}
function Zn(e) {
  if (!e)
    throw new Error("[javascript-time-ago] No locale data passed.");
  Qn[e.locale] = e;
}
const Ha = [{
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
}], xt = {
  steps: Ha,
  labels: "long"
};
function kr(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Lr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? kr(Object(r), !0).forEach(function(n) {
      Ya(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : kr(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ya(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
const kt = Lr(Lr({}, xt), {}, {
  // Skip "seconds".
  steps: xt.steps.filter(function(e) {
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
  factor: ye,
  // "minute" labels are used for formatting the output.
  unit: "minute"
}, {
  // This step is effective starting from 2.5 minutes.
  threshold: 2.5 * ye,
  // Allow only 5-minute increments of minutes starting from 2.5 minutes.
  // `granularity` — (advanced) Time interval value "granularity".
  // For example, it could be set to `5` for minutes to allow only 5-minute increments
  // when formatting time intervals: `0 minutes`, `5 minutes`, `10 minutes`, etc.
  // Perhaps this feature will be removed because there seem to be no use cases
  // of it in the real world.
  granularity: 5,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a minute.
  factor: ye,
  // "minute" labels are used for formatting the output.
  unit: "minute"
}, {
  // This step is effective starting from 22.5 minutes.
  threshold: 22.5 * ye,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in  half-an-hour.
  factor: 0.5 * nt,
  // "half-hour" labels are used for formatting the output.
  // (if available, which is no longer the case)
  unit: "half-hour"
}, {
  // This step is effective starting from 42.5 minutes.
  threshold: 42.5 * ye,
  threshold_for_minute: 52.5 * ye,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in an hour.
  factor: nt,
  // "hour" labels are used for formatting the output.
  unit: "hour"
}, {
  // This step is effective starting from 20.5 hours.
  threshold: 20.5 / 24 * $e,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a day.
  factor: $e,
  // "day" labels are used for formatting the output.
  unit: "day"
}, {
  // This step is effective starting from 5.5 days.
  threshold: 5.5 * $e,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a week.
  factor: Et,
  // "week" labels are used for formatting the output.
  unit: "week"
}, {
  // This step is effective starting from 3.5 weeks.
  threshold: 3.5 * Et,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a month.
  factor: It,
  // "month" labels are used for formatting the output.
  unit: "month"
}, {
  // This step is effective starting from 10.5 months.
  threshold: 10.5 * It,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a year.
  factor: Kn,
  // "year" labels are used for formatting the output.
  unit: "year"
}], Pr = {
  gradation: eo,
  flavour: "long",
  units: ["now", "minute", "hour", "day", "week", "month", "year"]
}, Wa = {
  gradation: eo,
  flavour: "long-time",
  units: ["now", "minute", "hour", "day", "week", "month", "year"]
};
function to(e) {
  return e instanceof Date ? e : new Date(e);
}
var Lt = [{
  formatAs: "second"
}, {
  formatAs: "minute"
}, {
  formatAs: "hour"
}], pe = {}, Ka = {
  minTime: function(t, r) {
    r.future;
    var n = r.getMinTimeForUnit;
    return n("day");
  },
  format: function(t, r) {
    return pe[r] || (pe[r] = {}), pe[r].dayMonth || (pe[r].dayMonth = new Intl.DateTimeFormat(r, {
      month: "short",
      day: "numeric"
    })), pe[r].dayMonth.format(to(t));
  }
}, Va = {
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
    return pe[r] || (pe[r] = {}), pe[r].dayMonthYear || (pe[r].dayMonthYear = new Intl.DateTimeFormat(r, {
      year: "numeric",
      month: "short",
      day: "numeric"
    })), pe[r].dayMonthYear.format(to(t));
  }
};
Ta() ? Lt.push(Ka, Va) : Lt.push({
  formatAs: "day"
}, {
  formatAs: "week"
}, {
  formatAs: "month"
}, {
  formatAs: "year"
});
const Ae = {
  steps: Lt,
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
function Nr(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Rr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Nr(Object(r), !0).forEach(function(n) {
      Xa(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Nr(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Xa(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
const Ga = Rr(Rr({}, Ae), {}, {
  // Add "now".
  steps: [{
    formatAs: "now"
  }].concat(Ae.steps)
});
function Dr(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Br(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Dr(Object(r), !0).forEach(function(n) {
      Ja(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Dr(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ja(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
const Pt = Br(Br({}, Ae), {}, {
  // Skip "seconds".
  steps: Ae.steps.filter(function(e) {
    return e.formatAs !== "second";
  })
});
function Cr(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function jr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Cr(Object(r), !0).forEach(function(n) {
      Qa(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Cr(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Qa(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
const Za = jr(jr({}, Pt), {}, {
  // Add "now".
  steps: [{
    formatAs: "now"
  }].concat(Pt.steps)
});
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
function Qe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qr(Object(r), !0).forEach(function(n) {
      es(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qr(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function es(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
const ts = Qe(Qe({}, Ae), {}, {
  // Skip "seconds".
  steps: Ae.steps.filter(function(e) {
    return e.formatAs !== "second";
  }).map(function(e) {
    return e.formatAs === "minute" ? Qe(Qe({}, e), {}, {
      minTime: ye
    }) : e;
  })
}), We = {
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
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Mr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fr(Object(r), !0).forEach(function(n) {
      rs(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fr(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function rs(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
const ns = Mr(Mr({}, We), {}, {
  // Add "now".
  steps: [{
    formatAs: "now"
  }].concat(We.steps)
});
function Ur(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function zr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ur(Object(r), !0).forEach(function(n) {
      os(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ur(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function os(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
const Nt = zr(zr({}, We), {}, {
  // Skip "seconds".
  steps: We.steps.filter(function(e) {
    return e.formatAs !== "second";
  })
});
function Hr(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Yr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Hr(Object(r), !0).forEach(function(n) {
      is(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Hr(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function is(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
const as = Yr(Yr({}, Nt), {}, {
  // Add "now".
  steps: [{
    formatAs: "now"
  }].concat(Nt.steps)
});
function ss(e) {
  switch (e) {
    case "default":
    case "round":
      return xt;
    case "round-minute":
      return kt;
    case "approximate":
      return Pr;
    case "time":
    case "approximate-time":
      return Wa;
    case "mini":
      return We;
    case "mini-now":
      return ns;
    case "mini-minute":
      return Nt;
    case "mini-minute-now":
      return as;
    case "twitter":
      return Ae;
    case "twitter-now":
      return Ga;
    case "twitter-minute":
      return Pt;
    case "twitter-minute-now":
      return Za;
    case "twitter-first-minute":
      return ts;
    default:
      return Pr;
  }
}
function ot(e) {
  "@babel/helpers - typeof";
  return ot = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ot(e);
}
function us(e, t) {
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
function fs(e, t) {
  return ds(e) || ls(e, t) || ro(e, t) || cs();
}
function cs() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ro(e, t) {
  if (e) {
    if (typeof e == "string")
      return Wr(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Wr(e, t);
  }
}
function Wr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function ls(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], o = !0, s = !1, c, f;
    try {
      for (r = r.call(e); !(o = (c = r.next()).done) && (n.push(c.value), !(t && n.length === t)); o = !0)
        ;
    } catch (y) {
      s = !0, f = y;
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
function ds(e) {
  if (Array.isArray(e))
    return e;
}
function hs(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Kr(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function ps(e, t, r) {
  return t && Kr(e.prototype, t), r && Kr(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var le = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.polyfill;
    hs(this, e), typeof t == "string" && (t = [t]), this.locale = Ia(t.concat(e.getDefaultLocale()), Pe), typeof Intl < "u" && Intl.NumberFormat && (this.numberFormat = new Intl.NumberFormat(this.locale)), n === !1 ? (this.IntlRelativeTimeFormat = Intl.RelativeTimeFormat, this.IntlPluralRules = Intl.PluralRules) : (this.IntlRelativeTimeFormat = we, this.IntlPluralRules = we.PluralRules), this.relativeTimeFormatCache = new Er(), this.pluralRulesCache = new Er();
  }
  return ps(e, [{
    key: "format",
    value: function(r, n, o) {
      o || (n && !bs(n) ? (o = n, n = void 0) : o = {}), n || (n = kt), typeof n == "string" && (n = ss(n));
      var s = ms(r), c = this.getLabels(n.flavour || n.labels), f = c.labels, y = c.labelsType, m;
      n.now !== void 0 && (m = n.now), m === void 0 && o.now !== void 0 && (m = o.now), m === void 0 && (m = Date.now());
      var T = (m - s) / 1e3, g = o.future || T < 0, _ = vs(f, Pe(this.locale).now, Pe(this.locale).long, g);
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
      var x = gs(
        // Controlling `style.steps` through `style.units` seems to be deprecated:
        // create a new custom `style` instead.
        n.units,
        f,
        _
      ), I = o.round || n.round, R = Ra(
        // "gradation" is a legacy name for "steps".
        // For historical reasons, "approximate" steps are used by default.
        // In the next major version, there'll be no default for `steps`.
        n.gradation || n.steps || kt.steps,
        T,
        {
          now: m,
          units: x,
          round: I,
          future: g,
          getNextStep: !0
        }
      ), K = fs(R, 3), U = K[0], ae = K[1], G = K[2], E = this.formatDateForStep(s, ae, T, {
        labels: f,
        labelsType: y,
        nowLabel: _,
        now: m,
        future: g,
        round: I
      }) || "";
      if (o.getTimeToNextUpdate) {
        var D = Ma(s, ae, {
          nextStep: G,
          prevStep: U,
          now: m,
          future: g,
          round: I
        });
        return [E, D];
      }
      return E;
    }
  }, {
    key: "formatDateForStep",
    value: function(r, n, o, s) {
      var c = this, f = s.labels, y = s.labelsType, m = s.nowLabel, T = s.now, g = s.future, _ = s.round;
      if (n) {
        if (n.format)
          return n.format(r, this.locale, {
            formatAs: function(K, U) {
              return c.formatValue(U, K, {
                labels: f,
                future: g
              });
            },
            now: T,
            future: g
          });
        var A = n.unit || n.formatAs;
        if (!A)
          throw new Error("[javascript-time-ago] Each step must define either `formatAs` or `format()`. Step: ".concat(JSON.stringify(n)));
        if (A === "now")
          return m;
        var x = Math.abs(o) / Vn(n);
        n.granularity && (x = Ye(_)(x / n.granularity) * n.granularity);
        var I = -1 * Math.sign(o) * Ye(_)(x);
        switch (I === 0 && (g ? I = 0 : I = -0), y) {
          case "long":
          case "short":
          case "narrow":
            return this.getFormatter(y).format(I, A);
          default:
            return this.formatValue(I, A, {
              labels: f,
              future: g
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
      var f = o === 0 ? c ? "future" : "past" : o < 0 ? "past" : "future", y = r[f] || r;
      if (typeof y == "string")
        return y;
      var m = this.getPluralRules().select(Math.abs(o));
      return y[m] || y.other;
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
      for (var n = Pe(this.locale), o = us(r), s; !(s = o()).done; ) {
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
  if (Vr)
    return console.error("[javascript-time-ago] `TimeAgo.addDefaultLocale()` can only be called once. To add other locales, use `TimeAgo.addLocale()`.");
  Vr = !0, le.setDefaultLocale(e.locale), le.addLocale(e);
};
var Vr;
le.addLocale = function(e) {
  Zn(e), we.addLocale(e);
};
le.locale = le.addLocale;
le.addLabels = function(e, t, r) {
  var n = Pe(e);
  n || (Zn({
    locale: e
  }), n = Pe(e)), n[t] = r;
};
function ms(e) {
  if (e.constructor === Date || ys(e))
    return e.getTime();
  if (typeof e == "number")
    return e;
  throw new Error("Unsupported relative time formatter input: ".concat(ot(e), ", ").concat(e));
}
function ys(e) {
  return ot(e) === "object" && typeof e.getTime == "function";
}
function gs(e, t, r) {
  var n = Object.keys(t);
  return r && n.push("now"), e && (n = e.filter(function(o) {
    return o === "now" || n.indexOf(o) >= 0;
  })), n;
}
function vs(e, t, r, n) {
  var o = e.now || t && t.now;
  if (o)
    return typeof o == "string" ? o : n ? o.future : o.past;
  if (r && r.second && r.second.current)
    return r.second.current;
}
function bs(e) {
  return typeof e == "string" || xa(e);
}
const ws = {
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
le.addLocale(ws);
const _s = new le("en-US"), Xr = (e) => _s.format(new Date(e)), Ss = Ri(Xr, (e) => {
  const t = setInterval(() => e(Xr), 1e3);
  return () => clearInterval(t);
});
function Os(e) {
  ui(e, "svelte-35qnl5", `.svelte-35qnl5,.svelte-35qnl5::before,.svelte-35qnl5::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}.svelte-35qnl5::before,.svelte-35qnl5::after{--tw-content:''}:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}button.svelte-35qnl5,input.svelte-35qnl5{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button.svelte-35qnl5{text-transform:none}button.svelte-35qnl5{-webkit-appearance:button;background-color:transparent;background-image:none}.svelte-35qnl5:-moz-focusring{outline:auto}.svelte-35qnl5:-moz-ui-invalid{box-shadow:none}.svelte-35qnl5::-webkit-inner-spin-button,.svelte-35qnl5::-webkit-outer-spin-button{height:auto}.svelte-35qnl5::-webkit-search-decoration{-webkit-appearance:none}.svelte-35qnl5::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}input.svelte-35qnl5::-moz-placeholder{opacity:1;color:#9ca3af}input.svelte-35qnl5::placeholder{opacity:1;color:#9ca3af}button.svelte-35qnl5{cursor:pointer}.svelte-35qnl5:disabled{cursor:default}.svelte-35qnl5,.svelte-35qnl5::before,.svelte-35qnl5::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position:  ;--tw-gradient-via-position:  ;--tw-gradient-to-position:  ;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.svelte-35qnl5::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position:  ;--tw-gradient-via-position:  ;--tw-gradient-to-position:  ;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.absolute.svelte-35qnl5{position:absolute}.bottom-0.svelte-35qnl5{bottom:0px}.bottom-2.svelte-35qnl5{bottom:0.5rem}.left-0.svelte-35qnl5{left:0px}.right-0.svelte-35qnl5{right:0px}.right-2.svelte-35qnl5{right:0.5rem}.top-0.svelte-35qnl5{top:0px}.my-2.svelte-35qnl5{margin-top:0.5rem;margin-bottom:0.5rem}.mb-2.svelte-35qnl5{margin-bottom:0.5rem}.mb-4.svelte-35qnl5{margin-bottom:1rem}.mt-2.svelte-35qnl5{margin-top:0.5rem}.block.svelte-35qnl5{display:block}.flex.svelte-35qnl5{display:flex}.hidden.svelte-35qnl5{display:none}.h-full.svelte-35qnl5{height:100%}.w-3\\/4.svelte-35qnl5{width:75%}.w-full.svelte-35qnl5{width:100%}.flex-row.svelte-35qnl5{flex-direction:row}.flex-col.svelte-35qnl5{flex-direction:column}.items-baseline.svelte-35qnl5{align-items:baseline}.items-stretch.svelte-35qnl5{align-items:stretch}.justify-end.svelte-35qnl5{justify-content:flex-end}.justify-between.svelte-35qnl5{justify-content:space-between}.place-self-start.svelte-35qnl5{place-self:start}.place-self-end.svelte-35qnl5{place-self:end}.rounded-lg.svelte-35qnl5{border-radius:0.5rem}.rounded-md.svelte-35qnl5{border-radius:0.375rem}.bg-lime-200.svelte-35qnl5{--tw-bg-opacity:1;background-color:rgb(217 249 157 / var(--tw-bg-opacity))}.bg-sky-200.svelte-35qnl5{--tw-bg-opacity:1;background-color:rgb(186 230 253 / var(--tw-bg-opacity))}.bg-violet-700.svelte-35qnl5{--tw-bg-opacity:1;background-color:rgb(109 40 217 / var(--tw-bg-opacity))}.bg-white.svelte-35qnl5{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.px-1.svelte-35qnl5{padding-left:0.25rem;padding-right:0.25rem}.px-2.svelte-35qnl5{padding-left:0.5rem;padding-right:0.5rem}.px-4.svelte-35qnl5{padding-left:1rem;padding-right:1rem}.py-1.svelte-35qnl5{padding-top:0.25rem;padding-bottom:0.25rem}.py-2.svelte-35qnl5{padding-top:0.5rem;padding-bottom:0.5rem}.text-justify.svelte-35qnl5{text-align:justify}.text-base.svelte-35qnl5{font-size:1rem;line-height:1.5rem}.text-lg.svelte-35qnl5{font-size:1.125rem;line-height:1.75rem}.text-sm.svelte-35qnl5{font-size:0.875rem;line-height:1.25rem}.text-xl.svelte-35qnl5{font-size:1.25rem;line-height:1.75rem}.font-bold.svelte-35qnl5{font-weight:700}.text-white.svelte-35qnl5{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.max-w-1-3.svelte-35qnl5{max-width:33.33%}.hover\\:bg-violet-600.svelte-35qnl5:hover{--tw-bg-opacity:1;background-color:rgb(124 58 237 / var(--tw-bg-opacity))}`);
}
function Gr(e, t, r) {
  const n = e.slice();
  return n[15] = t[r], n;
}
function $s(e) {
  let t, r, n;
  return {
    c() {
      t = V("button"), t.textContent = "↘️", q(t, "title", "Reduce to lateral"), q(t, "class", "svelte-35qnl5");
    },
    m(o, s) {
      ne(o, t, s), r || (n = De(
        t,
        "click",
        /*click_handler_2*/
        e[11]
      ), r = !0);
    },
    p: se,
    d(o) {
      o && te(t), r = !1, n();
    }
  };
}
function As(e) {
  let t, r, n;
  return {
    c() {
      t = V("button"), t.textContent = "↖️", q(t, "title", "Expand full width"), q(t, "class", "svelte-35qnl5");
    },
    m(o, s) {
      ne(o, t, s), r || (n = De(
        t,
        "click",
        /*click_handler_1*/
        e[10]
      ), r = !0);
    },
    p: se,
    d(o) {
      o && te(t), r = !1, n();
    }
  };
}
function Es(e) {
  let t;
  return {
    c() {
      t = V("div"), t.textContent = "The AI server is currently unreachable", q(t, "class", "text-lg svelte-35qnl5");
    },
    m(r, n) {
      ne(r, t, n);
    },
    p: se,
    d(r) {
      r && te(t);
    }
  };
}
function Is(e) {
  let t, r, n, o, s, c, f, y, m, T, g = fr(
    /*chat*/
    e[2]._.messages
  ), _ = [];
  for (let A = 0; A < g.length; A += 1)
    _[A] = Qr(Gr(e, g, A));
  return {
    c() {
      for (let A = 0; A < _.length; A += 1)
        _[A].c();
      t = ce(), r = V("form"), n = V("input"), s = ce(), c = V("div"), c.textContent = "The assistant makes mistakes, always check important information", f = ce(), y = V("div"), y.textContent = "Also, the assistant cannot read the documentation yet", n.disabled = o = /*status*/
      e[0] && /*$status*/
      e[6].slug == "running", q(n, "class", "w-full px-2 py-1 text-lg rounded-lg svelte-35qnl5"), q(n, "type", "text"), q(n, "placeholder", "What do you want help with?"), q(r, "action", "#"), q(r, "class", "my-2 svelte-35qnl5"), q(c, "class", "mt-2 text-sm svelte-35qnl5"), q(y, "class", "text-sm svelte-35qnl5");
    },
    m(A, x) {
      for (let I = 0; I < _.length; I += 1)
        _[I] && _[I].m(A, x);
      ne(A, t, x), ne(A, r, x), W(r, n), ar(
        n,
        /*text*/
        e[3]
      ), ne(A, s, x), ne(A, c, x), ne(A, f, x), ne(A, y, x), m || (T = [
        De(
          n,
          "input",
          /*input_input_handler*/
          e[13]
        ),
        De(r, "submit", hi(
          /*handleUserMessage*/
          e[8]
        ))
      ], m = !0);
    },
    p(A, x) {
      if (x & /*chat, $timeAgo*/
      132) {
        g = fr(
          /*chat*/
          A[2]._.messages
        );
        let I;
        for (I = 0; I < g.length; I += 1) {
          const R = Gr(A, g, I);
          _[I] ? _[I].p(R, x) : (_[I] = Qr(R), _[I].c(), _[I].m(t.parentNode, t));
        }
        for (; I < _.length; I += 1)
          _[I].d(1);
        _.length = g.length;
      }
      x & /*status, $status*/
      65 && o !== (o = /*status*/
      A[0] && /*$status*/
      A[6].slug == "running") && (n.disabled = o), x & /*text*/
      8 && n.value !== /*text*/
      A[3] && ar(
        n,
        /*text*/
        A[3]
      );
    },
    d(A) {
      A && (te(t), te(r), te(s), te(c), te(f), te(y)), li(_, A), m = !1, Be(T);
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
  ), f, y, m, T = (
    /*message*/
    e[15].content + ""
  ), g;
  function _(I, R) {
    return (
      /*message*/
      I[15].role == "user" ? xs : Ts
    );
  }
  let A = _(e), x = A(e);
  return {
    c() {
      t = V("div"), r = V("div"), n = V("span"), x.c(), o = ce(), s = V("span"), f = be(c), y = ce(), m = V("div"), g = be(T), q(n, "class", "font-bold svelte-35qnl5"), q(s, "class", "text-grey-500 text-sm svelte-35qnl5"), q(r, "class", "mb-2 flex flex-row justify-between items-baseline svelte-35qnl5"), q(m, "class", "svelte-35qnl5"), q(t, "class", "rounded-md py-2 px-4 text-justify text-base block w-3/4 my-2 svelte-35qnl5"), oe(
        t,
        "bg-sky-200",
        /*message*/
        e[15].role == "user"
      ), oe(
        t,
        "place-self-end",
        /*message*/
        e[15].role == "user"
      ), oe(
        t,
        "bg-lime-200",
        /*message*/
        e[15].role == "assistant"
      ), oe(
        t,
        "place-self-start",
        /*message*/
        e[15].role == "assistant"
      );
    },
    m(I, R) {
      ne(I, t, R), W(t, r), W(r, n), x.m(n, null), W(r, o), W(r, s), W(s, f), W(t, y), W(t, m), W(m, g);
    },
    p(I, R) {
      A !== (A = _(I)) && (x.d(1), x = A(I), x && (x.c(), x.m(n, null))), R & /*$timeAgo, chat*/
      132 && c !== (c = /*$timeAgo*/
      I[7](
        /*message*/
        I[15].timestamp
      ) + "") && et(f, c), R & /*chat*/
      4 && T !== (T = /*message*/
      I[15].content + "") && et(g, T), R & /*chat*/
      4 && oe(
        t,
        "bg-sky-200",
        /*message*/
        I[15].role == "user"
      ), R & /*chat*/
      4 && oe(
        t,
        "place-self-end",
        /*message*/
        I[15].role == "user"
      ), R & /*chat*/
      4 && oe(
        t,
        "bg-lime-200",
        /*message*/
        I[15].role == "assistant"
      ), R & /*chat*/
      4 && oe(
        t,
        "place-self-start",
        /*message*/
        I[15].role == "assistant"
      );
    },
    d(I) {
      I && te(t), x.d();
    }
  };
}
function Ts(e) {
  let t;
  return {
    c() {
      t = be("Assistant");
    },
    m(r, n) {
      ne(r, t, n);
    },
    d(r) {
      r && te(t);
    }
  };
}
function xs(e) {
  let t;
  return {
    c() {
      t = be("You");
    },
    m(r, n) {
      ne(r, t, n);
    },
    d(r) {
      r && te(t);
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
      r && r.c(), t = di();
    },
    m(n, o) {
      r && r.m(n, o), ne(n, t, o);
    },
    p(n, o) {
      /*message*/
      n[15].role != "system" ? r ? r.p(n, o) : (r = Jr(n), r.c(), r.m(t.parentNode, t)) : r && (r.d(1), r = null);
    },
    d(n) {
      n && te(t), r && r.d(n);
    }
  };
}
function ks(e) {
  let t, r, n, o, s, c, f = (
    /*status*/
    (e[0] ? (
      /*$status*/
      e[6].icon
    ) : "") + ""
  ), y, m, T, g, _, A, x, I, R, K, U = (
    /*status*/
    (e[0] ? (
      /*$status*/
      e[6].icon
    ) : "") + ""
  ), ae, G, E, D, N, b, L, B, C;
  function F(M, ee) {
    return (
      /*chatBotExpanded*/
      M[5] ? $s : As
    );
  }
  let Y = F(e), Z = Y(e);
  function de(M, ee) {
    return (
      /*model*/
      M[1] && /*chat*/
      M[2] ? Is : Es
    );
  }
  let he = de(e), re = he(e);
  return {
    c() {
      t = V("button"), r = V("span"), r.textContent = "✨", n = ce(), o = V("span"), o.textContent = "Need Help?", s = ce(), c = V("span"), y = be(f), T = ce(), g = V("div"), _ = V("content"), A = V("div"), x = V("div"), I = V("span"), I.textContent = "✨ HPC Assistant", R = ce(), K = V("span"), ae = be(U), E = ce(), D = V("div"), Z.c(), N = ce(), b = V("button"), b.textContent = "➖", L = ce(), re.c(), q(r, "title", "Try our AI Assistant"), q(r, "class", "svelte-35qnl5"), q(o, "class", "px-1 svelte-35qnl5"), q(c, "title", m = /*status*/
      e[0] ? (
        /*$status*/
        e[6].description
      ) : ""), q(c, "class", "svelte-35qnl5"), q(t, "class", "absolute bottom-2 right-2 py-2 px-4 bg-violet-700 hover:bg-violet-600 font-bold text-lg text-white rounded-lg svelte-35qnl5"), oe(
        t,
        "hidden",
        /*chatBotOpen*/
        e[4]
      ), q(I, "class", "svelte-35qnl5"), q(K, "title", G = /*status*/
      e[0] ? (
        /*$status*/
        e[6].description
      ) : ""), q(K, "class", "svelte-35qnl5"), q(x, "class", "svelte-35qnl5"), q(b, "title", "Minify the assistant"), q(b, "class", "svelte-35qnl5"), q(D, "class", "svelte-35qnl5"), q(A, "class", "mb-4 font-bold text-xl flex flex-row items-stretch justify-between svelte-35qnl5"), q(_, "class", "bg-white text-base rounded-md flex flex-col items-stretch h-full px-4 py-2 svelte-35qnl5"), oe(
        _,
        "w-full",
        /*chatBotExpanded*/
        e[5]
      ), oe(_, "max-w-1-3", !/*chatBotExpanded*/
      e[5]), q(g, "class", "absolute bottom-0 right-0 top-0 left-0 px-2 py-2 w-full h-full flex flex-row justify-end svelte-35qnl5"), oe(g, "hidden", !/*chatBotOpen*/
      e[4]);
    },
    m(M, ee) {
      ne(M, t, ee), W(t, r), W(t, n), W(t, o), W(t, s), W(t, c), W(c, y), ne(M, T, ee), ne(M, g, ee), W(g, _), W(_, A), W(A, x), W(x, I), W(x, R), W(x, K), W(K, ae), W(A, E), W(A, D), Z.m(D, null), W(D, N), W(D, b), W(_, L), re.m(_, null), B || (C = [
        De(
          t,
          "click",
          /*click_handler*/
          e[9]
        ),
        De(
          b,
          "click",
          /*click_handler_3*/
          e[12]
        )
      ], B = !0);
    },
    p(M, [ee]) {
      ee & /*status, $status*/
      65 && f !== (f = /*status*/
      (M[0] ? (
        /*$status*/
        M[6].icon
      ) : "") + "") && et(y, f), ee & /*status, $status*/
      65 && m !== (m = /*status*/
      M[0] ? (
        /*$status*/
        M[6].description
      ) : "") && q(c, "title", m), ee & /*chatBotOpen*/
      16 && oe(
        t,
        "hidden",
        /*chatBotOpen*/
        M[4]
      ), ee & /*status, $status*/
      65 && U !== (U = /*status*/
      (M[0] ? (
        /*$status*/
        M[6].icon
      ) : "") + "") && et(ae, U), ee & /*status, $status*/
      65 && G !== (G = /*status*/
      M[0] ? (
        /*$status*/
        M[6].description
      ) : "") && q(K, "title", G), Y === (Y = F(M)) && Z ? Z.p(M, ee) : (Z.d(1), Z = Y(M), Z && (Z.c(), Z.m(D, N))), he === (he = de(M)) && re ? re.p(M, ee) : (re.d(1), re = he(M), re && (re.c(), re.m(_, null))), ee & /*chatBotExpanded*/
      32 && oe(
        _,
        "w-full",
        /*chatBotExpanded*/
        M[5]
      ), ee & /*chatBotExpanded*/
      32 && oe(_, "max-w-1-3", !/*chatBotExpanded*/
      M[5]), ee & /*chatBotOpen*/
      16 && oe(g, "hidden", !/*chatBotOpen*/
      M[4]);
    },
    i: se,
    o: se,
    d(M) {
      M && (te(t), te(T), te(g)), Z.d(), re.d(), B = !1, Be(C);
    }
  };
}
function Ls(e, t, r) {
  let n, o = se, s = () => (o(), o = Rt(y, (G) => r(6, n = G)), y), c;
  si(e, Ss, (G) => r(7, c = G)), e.$$.on_destroy.push(() => o());
  let f, y, m, T;
  gi(async () => {
    const G = `${window.location.protocol}//${window.location.hostname}:${window.location.port}`;
    f = new Di(G), s(r(0, y = f.status)), r(1, m = await f.getBestModel(hr.modelList)), m && (await f.preloadModel(m), r(2, T = new Zi(() => r(2, T), f)), T.addMessage(hr.systemPrompt));
  });
  let g, _ = !1, A = !1;
  async function x() {
    T.addMessage({ role: "user", content: g }), r(3, g = ""), await T.complete(m);
  }
  const I = () => r(4, _ = !0), R = () => r(5, A = !0), K = () => r(5, A = !1), U = () => r(4, _ = !1);
  function ae() {
    g = this.value, r(3, g);
  }
  return [
    y,
    m,
    T,
    g,
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
class Ps extends xi {
  constructor(t) {
    super(), Ii(this, t, Ls, ks, tn, {}, Os);
  }
}
customElements.define("hpc-chatbot", Ti(Ps, {}, [], [], !0));
export {
  Ps as ChatBot
};
//# sourceMappingURL=components.js.map
