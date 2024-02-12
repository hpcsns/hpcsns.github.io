var oi = Object.defineProperty;
var ii = (e, t, r) => t in e ? oi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var oe = (e, t, r) => (ii(e, typeof t != "symbol" ? t + "" : t, r), r);
function le() {
}
function Zr(e) {
  return e();
}
function or() {
  return /* @__PURE__ */ Object.create(null);
}
function ke(e) {
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
    return le;
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
function q(e, t) {
  e.appendChild(t);
}
function li(e, t, r) {
  const n = fi(e);
  if (!n.getElementById(t)) {
    const i = V("style");
    i.id = t, i.textContent = r, ci(n, i);
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
  return q(
    /** @type {Document} */
    e.head || e,
    t
  ), t.sheet;
}
function te(e, t, r) {
  e.insertBefore(t, r || null);
}
function Z(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function di(e, t) {
  for (let r = 0; r < e.length; r += 1)
    e[r] && e[r].d(t);
}
function V(e) {
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
function Je(e, t, r, n) {
  return e.addEventListener(t, r, n), () => e.removeEventListener(t, r, n);
}
function mi(e) {
  return function(t) {
    return t.preventDefault(), e.call(this, t);
  };
}
function z(e, t, r) {
  r == null ? e.removeAttribute(t) : e.getAttribute(t) !== r && e.setAttribute(t, r);
}
function pi(e) {
  return Array.from(e.childNodes);
}
function Qe(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
function ir(e, t) {
  e.value = t ?? "";
}
function ie(e, t, r) {
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
let Me;
function Ce(e) {
  Me = e;
}
function gi() {
  if (!Me)
    throw new Error("Function called outside component initialization");
  return Me;
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
const ht = /* @__PURE__ */ new Set();
let $e = 0;
function rn() {
  if ($e !== 0)
    return;
  const e = Me;
  do {
    try {
      for (; $e < Ee.length; ) {
        const t = Ee[$e];
        $e++, Ce(t), _i(t.$$);
      }
    } catch (t) {
      throw Ee.length = 0, $e = 0, t;
    }
    for (Ce(null), Ee.length = 0, $e = 0; ar.length; )
      ar.pop()();
    for (let t = 0; t < Le.length; t += 1) {
      const r = Le[t];
      ht.has(r) || (ht.add(r), r());
    }
    Le.length = 0;
  } while (Ee.length);
  for (; sr.length; )
    sr.pop()();
  pt = !1, ht.clear(), Ce(e);
}
function _i(e) {
  if (e.fragment !== null) {
    e.update(), ke(e.before_update);
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
    e.$$.on_destroy ? e.$$.on_destroy.push(...s) : ke(s), e.$$.on_mount = [];
  }), i.forEach(yt);
}
function Ai(e, t) {
  const r = e.$$;
  r.fragment !== null && (Si(r.after_update), ke(r.on_destroy), r.fragment && r.fragment.d(t), r.on_destroy = r.fragment = null, r.ctx = []);
}
function Ei(e, t) {
  e.$$.dirty[0] === -1 && (Ee.push(e), wi(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function Ii(e, t, r, n, i, s, f = null, l = [-1]) {
  const g = Me;
  Ce(e);
  const p = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: le,
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
    dirty: l,
    skip_bound: !1,
    root: t.target || g.$$.root
  };
  f && f(p.root);
  let I = !1;
  if (p.ctx = r ? r(e, t.props || {}, (y, S, ...A) => {
    const T = A.length ? A[0] : S;
    return p.ctx && i(p.ctx[y], p.ctx[y] = T) && (!p.skip_bound && p.bound[y] && p.bound[y](T), I && Ei(e, y)), S;
  }) : [], p.update(), I = !0, ke(p.before_update), p.fragment = n ? n(p.ctx) : !1, t.target) {
    if (t.hydrate) {
      const y = pi(t.target);
      p.fragment && p.fragment.l(y), y.forEach(Z);
    } else
      p.fragment && p.fragment.c();
    t.intro && $i(e.$$.fragment), xi(e, t.target, t.anchor), rn();
  }
  Ce(g);
}
let nn;
typeof HTMLElement == "function" && (nn = class extends HTMLElement {
  constructor(t, r, n) {
    super();
    /** The Svelte component constructor */
    oe(this, "$$ctor");
    /** Slots */
    oe(this, "$$s");
    /** The Svelte component instance */
    oe(this, "$$c");
    /** Whether or not the custom element is connected */
    oe(this, "$$cn", !1);
    /** Component props data */
    oe(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    oe(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    oe(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    oe(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    oe(this, "$$l_u", /* @__PURE__ */ new Map());
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
          let f;
          return {
            c: function() {
              f = V("slot"), s !== "default" && z(f, "name", s);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(p, I) {
              te(p, f, I);
            },
            d: function(p) {
              p && Z(f);
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
        const f = this.$$g_p(s.name);
        f in this.$$d || (this.$$d[f] = Ge(f, s.value, this.$$p_d, "toProp"));
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
            const f = Ge(
              s,
              this.$$d[s],
              this.$$p_d,
              "toAttribute"
            );
            f == null ? this.removeAttribute(this.$$p_d[s].attribute || s) : this.setAttribute(this.$$p_d[s].attribute || s, f);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(i), i();
      for (const s in this.$$l)
        for (const f of this.$$l[s]) {
          const l = this.$$c.$on(s, f);
          this.$$l_u.set(f, l);
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
  let f = class extends nn {
    constructor() {
      super(e, r, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Object.keys(t).map(
        (l) => (t[l].attribute || l).toLowerCase()
      );
    }
  };
  return Object.keys(t).forEach((l) => {
    Object.defineProperty(f.prototype, l, {
      get() {
        return this.$$c && l in this.$$c ? this.$$c[l] : this.$$d[l];
      },
      set(g) {
        var p;
        g = Ge(l, g, t), this.$$d[l] = g, (p = this.$$c) == null || p.$set({ [l]: g });
      }
    });
  }), n.forEach((l) => {
    Object.defineProperty(f.prototype, l, {
      get() {
        var g;
        return (g = this.$$c) == null ? void 0 : g[l];
      }
    });
  }), s && (f = s(f)), e.element = /** @type {any} */
  f, f;
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
    oe(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    oe(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Ai(this, 1), this.$destroy = le;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, r) {
    if (!en(r))
      return le;
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
      function f(p, I) {
        if (!i[p]) {
          if (!n[p]) {
            var y = typeof Ke == "function" && Ke;
            if (!I && y)
              return y(p, !0);
            if (l)
              return l(p, !0);
            var S = new Error("Cannot find module '" + p + "'");
            throw S.code = "MODULE_NOT_FOUND", S;
          }
          var A = i[p] = { exports: {} };
          n[p][0].call(A.exports, function(T) {
            var E = n[p][1][T];
            return f(E || T);
          }, A, A.exports, r, n, i, s);
        }
        return i[p].exports;
      }
      for (var l = typeof Ke == "function" && Ke, g = 0; g < s.length; g++)
        f(s[g]);
      return f;
    }({ 1: [function(r, n, i) {
      (function(s) {
        var f = s.MutationObserver || s.WebKitMutationObserver, l;
        if (f) {
          var g = 0, p = new f(T), I = s.document.createTextNode("");
          p.observe(I, {
            characterData: !0
          }), l = function() {
            I.data = g = ++g % 2;
          };
        } else if (!s.setImmediate && typeof s.MessageChannel < "u") {
          var y = new s.MessageChannel();
          y.port1.onmessage = T, l = function() {
            y.port2.postMessage(0);
          };
        } else
          "document" in s && "onreadystatechange" in s.document.createElement("script") ? l = function() {
            var R = s.document.createElement("script");
            R.onreadystatechange = function() {
              T(), R.onreadystatechange = null, R.parentNode.removeChild(R), R = null;
            }, s.document.documentElement.appendChild(R);
          } : l = function() {
            setTimeout(T, 0);
          };
        var S, A = [];
        function T() {
          S = !0;
          for (var R, W, U = A.length; U; ) {
            for (W = A, A = [], R = -1; ++R < U; )
              W[R]();
            U = A.length;
          }
          S = !1;
        }
        n.exports = E;
        function E(R) {
          A.push(R) === 1 && !S && l();
        }
      }).call(this, typeof Ie < "u" ? Ie : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 2: [function(r, n, i) {
      var s = r(1);
      function f() {
      }
      var l = {}, g = ["REJECTED"], p = ["FULFILLED"], I = ["PENDING"];
      n.exports = y;
      function y(x) {
        if (typeof x != "function")
          throw new TypeError("resolver must be a function");
        this.state = I, this.queue = [], this.outcome = void 0, x !== f && E(this, x);
      }
      y.prototype.catch = function(x) {
        return this.then(null, x);
      }, y.prototype.then = function(x, M) {
        if (typeof x != "function" && this.state === p || typeof M != "function" && this.state === g)
          return this;
        var D = new this.constructor(f);
        if (this.state !== I) {
          var b = this.state === p ? x : M;
          A(D, b, this.outcome);
        } else
          this.queue.push(new S(D, x, M));
        return D;
      };
      function S(x, M, D) {
        this.promise = x, typeof M == "function" && (this.onFulfilled = M, this.callFulfilled = this.otherCallFulfilled), typeof D == "function" && (this.onRejected = D, this.callRejected = this.otherCallRejected);
      }
      S.prototype.callFulfilled = function(x) {
        l.resolve(this.promise, x);
      }, S.prototype.otherCallFulfilled = function(x) {
        A(this.promise, this.onFulfilled, x);
      }, S.prototype.callRejected = function(x) {
        l.reject(this.promise, x);
      }, S.prototype.otherCallRejected = function(x) {
        A(this.promise, this.onRejected, x);
      };
      function A(x, M, D) {
        s(function() {
          var b;
          try {
            b = M(D);
          } catch (P) {
            return l.reject(x, P);
          }
          b === x ? l.reject(x, new TypeError("Cannot resolve promise with itself")) : l.resolve(x, b);
        });
      }
      l.resolve = function(x, M) {
        var D = R(T, M);
        if (D.status === "error")
          return l.reject(x, D.value);
        var b = D.value;
        if (b)
          E(x, b);
        else {
          x.state = p, x.outcome = M;
          for (var P = -1, C = x.queue.length; ++P < C; )
            x.queue[P].callFulfilled(M);
        }
        return x;
      }, l.reject = function(x, M) {
        x.state = g, x.outcome = M;
        for (var D = -1, b = x.queue.length; ++D < b; )
          x.queue[D].callRejected(M);
        return x;
      };
      function T(x) {
        var M = x && x.then;
        if (x && (typeof x == "object" || typeof x == "function") && typeof M == "function")
          return function() {
            M.apply(x, arguments);
          };
      }
      function E(x, M) {
        var D = !1;
        function b(N) {
          D || (D = !0, l.reject(x, N));
        }
        function P(N) {
          D || (D = !0, l.resolve(x, N));
        }
        function C() {
          M(P, b);
        }
        var j = R(C);
        j.status === "error" && b(j.value);
      }
      function R(x, M) {
        var D = {};
        try {
          D.value = x(M), D.status = "success";
        } catch (b) {
          D.status = "error", D.value = b;
        }
        return D;
      }
      y.resolve = W;
      function W(x) {
        return x instanceof this ? x : l.resolve(new this(f), x);
      }
      y.reject = U;
      function U(x) {
        var M = new this(f);
        return l.reject(M, x);
      }
      y.all = re;
      function re(x) {
        var M = this;
        if (Object.prototype.toString.call(x) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var D = x.length, b = !1;
        if (!D)
          return this.resolve([]);
        for (var P = new Array(D), C = 0, j = -1, N = new this(f); ++j < D; )
          B(x[j], j);
        return N;
        function B(G, ve) {
          M.resolve(G).then(Ne, function(Se) {
            b || (b = !0, l.reject(N, Se));
          });
          function Ne(Se) {
            P[ve] = Se, ++C === D && !b && (b = !0, l.resolve(N, P));
          }
        }
      }
      y.race = Q;
      function Q(x) {
        var M = this;
        if (Object.prototype.toString.call(x) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var D = x.length, b = !1;
        if (!D)
          return this.resolve([]);
        for (var P = -1, C = new this(f); ++P < D; )
          j(x[P]);
        return C;
        function j(N) {
          M.resolve(N).then(function(B) {
            b || (b = !0, l.resolve(C, B));
          }, function(B) {
            b || (b = !0, l.reject(C, B));
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
      function f(o, u) {
        if (!(o instanceof u))
          throw new TypeError("Cannot call a class as a function");
      }
      function l() {
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
      var g = l();
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
      function S(o, u) {
        u && o.then(function(a) {
          u(null, a);
        }, function(a) {
          u(a);
        });
      }
      function A(o, u, a) {
        typeof u == "function" && o.then(u), typeof a == "function" && o.catch(a);
      }
      function T(o) {
        return typeof o != "string" && (console.warn(o + " used as a key, but it is not a string."), o = String(o)), o;
      }
      function E() {
        if (arguments.length && typeof arguments[arguments.length - 1] == "function")
          return arguments[arguments.length - 1];
      }
      var R = "local-forage-detect-blob-support", W = void 0, U = {}, re = Object.prototype.toString, Q = "readonly", x = "readwrite";
      function M(o) {
        for (var u = o.length, a = new ArrayBuffer(u), d = new Uint8Array(a), m = 0; m < u; m++)
          d[m] = o.charCodeAt(m);
        return a;
      }
      function D(o) {
        return new y(function(u) {
          var a = o.transaction(R, x), d = I([""]);
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
      function b(o) {
        return typeof W == "boolean" ? y.resolve(W) : D(o).then(function(u) {
          return W = u, W;
        });
      }
      function P(o) {
        var u = U[o.name], a = {};
        a.promise = new y(function(d, m) {
          a.resolve = d, a.reject = m;
        }), u.deferredOperations.push(a), u.dbReady ? u.dbReady = u.dbReady.then(function() {
          return a.promise;
        }) : u.dbReady = a.promise;
      }
      function C(o) {
        var u = U[o.name], a = u.deferredOperations.pop();
        if (a)
          return a.resolve(), a.promise;
      }
      function j(o, u) {
        var a = U[o.name], d = a.deferredOperations.pop();
        if (d)
          return d.reject(u), d.promise;
      }
      function N(o, u) {
        return new y(function(a, d) {
          if (U[o.name] = U[o.name] || jt(), o.db)
            if (u)
              P(o), o.db.close();
            else
              return a(o.db);
          var m = [o.name];
          u && m.push(o.version);
          var c = g.open.apply(g, m);
          u && (c.onupgradeneeded = function(v) {
            var w = c.result;
            try {
              w.createObjectStore(o.storeName), v.oldVersion <= 1 && w.createObjectStore(R);
            } catch (_) {
              if (_.name === "ConstraintError")
                console.warn('The database "' + o.name + '" has been upgraded from version ' + v.oldVersion + " to version " + v.newVersion + ', but the storage "' + o.storeName + '" already exists.');
              else
                throw _;
            }
          }), c.onerror = function(v) {
            v.preventDefault(), d(c.error);
          }, c.onsuccess = function() {
            var v = c.result;
            v.onversionchange = function(w) {
              w.target.close();
            }, a(v), C(o);
          };
        });
      }
      function B(o) {
        return N(o, !1);
      }
      function G(o) {
        return N(o, !0);
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
      function Ne(o) {
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
        var u = M(atob(o.data));
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
        return A(a, o, o), a;
      }
      function io(o) {
        P(o);
        for (var u = U[o.name], a = u.forages, d = 0; d < a.length; d++) {
          var m = a[d];
          m._dbInfo.db && (m._dbInfo.db.close(), m._dbInfo.db = null);
        }
        return o.db = null, B(o).then(function(c) {
          return o.db = c, ve(o) ? G(o) : c;
        }).then(function(c) {
          o.db = u.db = c;
          for (var v = 0; v < a.length; v++)
            a[v]._dbInfo.db = c;
        }).catch(function(c) {
          throw j(o, c), c;
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
                return o.db && (o.version = o.db.version + 1), G(o);
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
        function v() {
          return y.resolve();
        }
        for (var w = 0; w < m.forages.length; w++) {
          var _ = m.forages[w];
          _ !== u && c.push(_._initReady().catch(v));
        }
        var O = m.forages.slice(0);
        return y.all(c).then(function() {
          return a.db = m.db, B(a);
        }).then(function($) {
          return a.db = $, ve(a, u._defaultConfig.version) ? G(a) : $;
        }).then(function($) {
          a.db = m.db = $, u._dbInfo = a;
          for (var L = 0; L < O.length; L++) {
            var F = O[L];
            F !== u && (F._dbInfo.db = a.db, F._dbInfo.version = a.version);
          }
        });
      }
      function so(o, u) {
        var a = this;
        o = T(o);
        var d = new y(function(m, c) {
          a.ready().then(function() {
            fe(a._dbInfo, Q, function(v, w) {
              if (v)
                return c(v);
              try {
                var _ = w.objectStore(a._dbInfo.storeName), O = _.get(o);
                O.onsuccess = function() {
                  var $ = O.result;
                  $ === void 0 && ($ = null), Ct($) && ($ = Se($)), m($);
                }, O.onerror = function() {
                  c(O.error);
                };
              } catch ($) {
                c($);
              }
            });
          }).catch(c);
        });
        return S(d, u), d;
      }
      function uo(o, u) {
        var a = this, d = new y(function(m, c) {
          a.ready().then(function() {
            fe(a._dbInfo, Q, function(v, w) {
              if (v)
                return c(v);
              try {
                var _ = w.objectStore(a._dbInfo.storeName), O = _.openCursor(), $ = 1;
                O.onsuccess = function() {
                  var L = O.result;
                  if (L) {
                    var F = L.value;
                    Ct(F) && (F = Se(F));
                    var H = o(F, L.key, $++);
                    H !== void 0 ? m(H) : L.continue();
                  } else
                    m();
                }, O.onerror = function() {
                  c(O.error);
                };
              } catch (L) {
                c(L);
              }
            });
          }).catch(c);
        });
        return S(d, u), d;
      }
      function lo(o, u, a) {
        var d = this;
        o = T(o);
        var m = new y(function(c, v) {
          var w;
          d.ready().then(function() {
            return w = d._dbInfo, re.call(u) === "[object Blob]" ? b(w.db).then(function(_) {
              return _ ? u : Ne(u);
            }) : u;
          }).then(function(_) {
            fe(d._dbInfo, x, function(O, $) {
              if (O)
                return v(O);
              try {
                var L = $.objectStore(d._dbInfo.storeName);
                _ === null && (_ = void 0);
                var F = L.put(_, o);
                $.oncomplete = function() {
                  _ === void 0 && (_ = null), c(_);
                }, $.onabort = $.onerror = function() {
                  var H = F.error ? F.error : F.transaction.error;
                  v(H);
                };
              } catch (H) {
                v(H);
              }
            });
          }).catch(v);
        });
        return S(m, a), m;
      }
      function fo(o, u) {
        var a = this;
        o = T(o);
        var d = new y(function(m, c) {
          a.ready().then(function() {
            fe(a._dbInfo, x, function(v, w) {
              if (v)
                return c(v);
              try {
                var _ = w.objectStore(a._dbInfo.storeName), O = _.delete(o);
                w.oncomplete = function() {
                  m();
                }, w.onerror = function() {
                  c(O.error);
                }, w.onabort = function() {
                  var $ = O.error ? O.error : O.transaction.error;
                  c($);
                };
              } catch ($) {
                c($);
              }
            });
          }).catch(c);
        });
        return S(d, u), d;
      }
      function co(o) {
        var u = this, a = new y(function(d, m) {
          u.ready().then(function() {
            fe(u._dbInfo, x, function(c, v) {
              if (c)
                return m(c);
              try {
                var w = v.objectStore(u._dbInfo.storeName), _ = w.clear();
                v.oncomplete = function() {
                  d();
                }, v.onabort = v.onerror = function() {
                  var O = _.error ? _.error : _.transaction.error;
                  m(O);
                };
              } catch (O) {
                m(O);
              }
            });
          }).catch(m);
        });
        return S(a, o), a;
      }
      function ho(o) {
        var u = this, a = new y(function(d, m) {
          u.ready().then(function() {
            fe(u._dbInfo, Q, function(c, v) {
              if (c)
                return m(c);
              try {
                var w = v.objectStore(u._dbInfo.storeName), _ = w.count();
                _.onsuccess = function() {
                  d(_.result);
                }, _.onerror = function() {
                  m(_.error);
                };
              } catch (O) {
                m(O);
              }
            });
          }).catch(m);
        });
        return S(a, o), a;
      }
      function mo(o, u) {
        var a = this, d = new y(function(m, c) {
          if (o < 0) {
            m(null);
            return;
          }
          a.ready().then(function() {
            fe(a._dbInfo, Q, function(v, w) {
              if (v)
                return c(v);
              try {
                var _ = w.objectStore(a._dbInfo.storeName), O = !1, $ = _.openKeyCursor();
                $.onsuccess = function() {
                  var L = $.result;
                  if (!L) {
                    m(null);
                    return;
                  }
                  o === 0 || O ? m(L.key) : (O = !0, L.advance(o));
                }, $.onerror = function() {
                  c($.error);
                };
              } catch (L) {
                c(L);
              }
            });
          }).catch(c);
        });
        return S(d, u), d;
      }
      function po(o) {
        var u = this, a = new y(function(d, m) {
          u.ready().then(function() {
            fe(u._dbInfo, Q, function(c, v) {
              if (c)
                return m(c);
              try {
                var w = v.objectStore(u._dbInfo.storeName), _ = w.openKeyCursor(), O = [];
                _.onsuccess = function() {
                  var $ = _.result;
                  if (!$) {
                    d(O);
                    return;
                  }
                  O.push($.key), $.continue();
                }, _.onerror = function() {
                  m(_.error);
                };
              } catch ($) {
                m($);
              }
            });
          }).catch(m);
        });
        return S(a, o), a;
      }
      function yo(o, u) {
        u = E.apply(this, arguments);
        var a = this.config();
        o = typeof o != "function" && o || {}, o.name || (o.name = o.name || a.name, o.storeName = o.storeName || a.storeName);
        var d = this, m;
        if (!o.name)
          m = y.reject("Invalid arguments");
        else {
          var c = o.name === a.name && d._dbInfo.db, v = c ? y.resolve(d._dbInfo.db) : B(o).then(function(w) {
            var _ = U[o.name], O = _.forages;
            _.db = w;
            for (var $ = 0; $ < O.length; $++)
              O[$]._dbInfo.db = w;
            return w;
          });
          o.storeName ? m = v.then(function(w) {
            if (w.objectStoreNames.contains(o.storeName)) {
              var _ = w.version + 1;
              P(o);
              var O = U[o.name], $ = O.forages;
              w.close();
              for (var L = 0; L < $.length; L++) {
                var F = $[L];
                F._dbInfo.db = null, F._dbInfo.version = _;
              }
              var H = new y(function(Y, J) {
                var X = g.open(o.name, _);
                X.onerror = function(ne) {
                  var De = X.result;
                  De.close(), J(ne);
                }, X.onupgradeneeded = function() {
                  var ne = X.result;
                  ne.deleteObjectStore(o.storeName);
                }, X.onsuccess = function() {
                  var ne = X.result;
                  ne.close(), Y(ne);
                };
              });
              return H.then(function(Y) {
                O.db = Y;
                for (var J = 0; J < $.length; J++) {
                  var X = $[J];
                  X._dbInfo.db = Y, C(X._dbInfo);
                }
              }).catch(function(Y) {
                throw (j(o, Y) || y.resolve()).catch(function() {
                }), Y;
              });
            }
          }) : m = v.then(function(w) {
            P(o);
            var _ = U[o.name], O = _.forages;
            w.close();
            for (var $ = 0; $ < O.length; $++) {
              var L = O[$];
              L._dbInfo.db = null;
            }
            var F = new y(function(H, Y) {
              var J = g.deleteDatabase(o.name);
              J.onerror = function() {
                var X = J.result;
                X && X.close(), Y(J.error);
              }, J.onblocked = function() {
                console.warn('dropInstance blocked for database "' + o.name + '" until all open connections are closed');
              }, J.onsuccess = function() {
                var X = J.result;
                X && X.close(), H(X);
              };
            });
            return F.then(function(H) {
              _.db = H;
              for (var Y = 0; Y < O.length; Y++) {
                var J = O[Y];
                C(J._dbInfo);
              }
            }).catch(function(H) {
              throw (j(o, H) || y.resolve()).catch(function() {
              }), H;
            });
          });
        }
        return S(m, u), m;
      }
      var go = {
        _driver: "asyncStorage",
        _initStorage: ao,
        _support: p(),
        iterate: uo,
        getItem: so,
        setItem: lo,
        removeItem: fo,
        clear: co,
        length: ho,
        key: mo,
        keys: po,
        dropInstance: yo
      };
      function vo() {
        return typeof openDatabase == "function";
      }
      var de = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bo = "~~local_forage_type~", Ft = /^~~local_forage_type~([^~]+)~/, qe = "__lfsc__:", ot = qe.length, it = "arbf", at = "blob", Mt = "si08", Ut = "ui08", zt = "uic8", Ht = "si16", Yt = "si32", qt = "ur16", Wt = "ui32", Kt = "fl32", Vt = "fl64", Xt = ot + it.length, Gt = Object.prototype.toString;
      function Jt(o) {
        var u = o.length * 0.75, a = o.length, d, m = 0, c, v, w, _;
        o[o.length - 1] === "=" && (u--, o[o.length - 2] === "=" && u--);
        var O = new ArrayBuffer(u), $ = new Uint8Array(O);
        for (d = 0; d < a; d += 4)
          c = de.indexOf(o[d]), v = de.indexOf(o[d + 1]), w = de.indexOf(o[d + 2]), _ = de.indexOf(o[d + 3]), $[m++] = c << 2 | v >> 4, $[m++] = (v & 15) << 4 | w >> 2, $[m++] = (w & 3) << 6 | _ & 63;
        return O;
      }
      function st(o) {
        var u = new Uint8Array(o), a = "", d;
        for (d = 0; d < u.length; d += 3)
          a += de[u[d] >> 2], a += de[(u[d] & 3) << 4 | u[d + 1] >> 4], a += de[(u[d + 1] & 15) << 2 | u[d + 2] >> 6], a += de[u[d + 2] & 63];
        return u.length % 3 === 2 ? a = a.substring(0, a.length - 1) + "=" : u.length % 3 === 1 && (a = a.substring(0, a.length - 2) + "=="), a;
      }
      function wo(o, u) {
        var a = "";
        if (o && (a = Gt.call(o)), o && (a === "[object ArrayBuffer]" || o.buffer && Gt.call(o.buffer) === "[object ArrayBuffer]")) {
          var d, m = qe;
          o instanceof ArrayBuffer ? (d = o, m += it) : (d = o.buffer, a === "[object Int8Array]" ? m += Mt : a === "[object Uint8Array]" ? m += Ut : a === "[object Uint8ClampedArray]" ? m += zt : a === "[object Int16Array]" ? m += Ht : a === "[object Uint16Array]" ? m += qt : a === "[object Int32Array]" ? m += Yt : a === "[object Uint32Array]" ? m += Wt : a === "[object Float32Array]" ? m += Kt : a === "[object Float64Array]" ? m += Vt : u(new Error("Failed to get type for BinaryArray"))), u(m + st(d));
        } else if (a === "[object Blob]") {
          var c = new FileReader();
          c.onload = function() {
            var v = bo + o.type + "~" + st(this.result);
            u(qe + at + v);
          }, c.readAsArrayBuffer(o);
        } else
          try {
            u(JSON.stringify(o));
          } catch (v) {
            console.error("Couldn't convert value into a JSON string: ", o), u(null, v);
          }
      }
      function _o(o) {
        if (o.substring(0, ot) !== qe)
          return JSON.parse(o);
        var u = o.substring(Xt), a = o.substring(ot, Xt), d;
        if (a === at && Ft.test(u)) {
          var m = u.match(Ft);
          d = m[1], u = u.substring(m[0].length);
        }
        var c = Jt(u);
        switch (a) {
          case it:
            return c;
          case at:
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
      var ut = {
        serialize: wo,
        deserialize: _o,
        stringToBuffer: Jt,
        bufferToString: st
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
        var m = new y(function(c, v) {
          try {
            a.db = openDatabase(a.name, String(a.version), a.description, a.size);
          } catch (w) {
            return v(w);
          }
          a.db.transaction(function(w) {
            Qt(w, a, function() {
              u._dbInfo = a, c();
            }, function(_, O) {
              v(O);
            });
          }, v);
        });
        return a.serializer = ut, m;
      }
      function he(o, u, a, d, m, c) {
        o.executeSql(a, d, m, function(v, w) {
          w.code === w.SYNTAX_ERR ? v.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [u.storeName], function(_, O) {
            O.rows.length ? c(_, w) : Qt(_, u, function() {
              _.executeSql(a, d, m, c);
            }, c);
          }, c) : c(v, w);
        }, c);
      }
      function Oo(o, u) {
        var a = this;
        o = T(o);
        var d = new y(function(m, c) {
          a.ready().then(function() {
            var v = a._dbInfo;
            v.db.transaction(function(w) {
              he(w, v, "SELECT * FROM " + v.storeName + " WHERE key = ? LIMIT 1", [o], function(_, O) {
                var $ = O.rows.length ? O.rows.item(0).value : null;
                $ && ($ = v.serializer.deserialize($)), m($);
              }, function(_, O) {
                c(O);
              });
            });
          }).catch(c);
        });
        return S(d, u), d;
      }
      function $o(o, u) {
        var a = this, d = new y(function(m, c) {
          a.ready().then(function() {
            var v = a._dbInfo;
            v.db.transaction(function(w) {
              he(w, v, "SELECT * FROM " + v.storeName, [], function(_, O) {
                for (var $ = O.rows, L = $.length, F = 0; F < L; F++) {
                  var H = $.item(F), Y = H.value;
                  if (Y && (Y = v.serializer.deserialize(Y)), Y = o(Y, H.key, F + 1), Y !== void 0) {
                    m(Y);
                    return;
                  }
                }
                m();
              }, function(_, O) {
                c(O);
              });
            });
          }).catch(c);
        });
        return S(d, u), d;
      }
      function Zt(o, u, a, d) {
        var m = this;
        o = T(o);
        var c = new y(function(v, w) {
          m.ready().then(function() {
            u === void 0 && (u = null);
            var _ = u, O = m._dbInfo;
            O.serializer.serialize(u, function($, L) {
              L ? w(L) : O.db.transaction(function(F) {
                he(F, O, "INSERT OR REPLACE INTO " + O.storeName + " (key, value) VALUES (?, ?)", [o, $], function() {
                  v(_);
                }, function(H, Y) {
                  w(Y);
                });
              }, function(F) {
                if (F.code === F.QUOTA_ERR) {
                  if (d > 0) {
                    v(Zt.apply(m, [o, _, a, d - 1]));
                    return;
                  }
                  w(F);
                }
              });
            });
          }).catch(w);
        });
        return S(c, a), c;
      }
      function xo(o, u, a) {
        return Zt.apply(this, [o, u, a, 1]);
      }
      function Ao(o, u) {
        var a = this;
        o = T(o);
        var d = new y(function(m, c) {
          a.ready().then(function() {
            var v = a._dbInfo;
            v.db.transaction(function(w) {
              he(w, v, "DELETE FROM " + v.storeName + " WHERE key = ?", [o], function() {
                m();
              }, function(_, O) {
                c(O);
              });
            });
          }).catch(c);
        });
        return S(d, u), d;
      }
      function Eo(o) {
        var u = this, a = new y(function(d, m) {
          u.ready().then(function() {
            var c = u._dbInfo;
            c.db.transaction(function(v) {
              he(v, c, "DELETE FROM " + c.storeName, [], function() {
                d();
              }, function(w, _) {
                m(_);
              });
            });
          }).catch(m);
        });
        return S(a, o), a;
      }
      function Io(o) {
        var u = this, a = new y(function(d, m) {
          u.ready().then(function() {
            var c = u._dbInfo;
            c.db.transaction(function(v) {
              he(v, c, "SELECT COUNT(key) as c FROM " + c.storeName, [], function(w, _) {
                var O = _.rows.item(0).c;
                d(O);
              }, function(w, _) {
                m(_);
              });
            });
          }).catch(m);
        });
        return S(a, o), a;
      }
      function To(o, u) {
        var a = this, d = new y(function(m, c) {
          a.ready().then(function() {
            var v = a._dbInfo;
            v.db.transaction(function(w) {
              he(w, v, "SELECT key FROM " + v.storeName + " WHERE id = ? LIMIT 1", [o + 1], function(_, O) {
                var $ = O.rows.length ? O.rows.item(0).key : null;
                m($);
              }, function(_, O) {
                c(O);
              });
            });
          }).catch(c);
        });
        return S(d, u), d;
      }
      function Lo(o) {
        var u = this, a = new y(function(d, m) {
          u.ready().then(function() {
            var c = u._dbInfo;
            c.db.transaction(function(v) {
              he(v, c, "SELECT key FROM " + c.storeName, [], function(w, _) {
                for (var O = [], $ = 0; $ < _.rows.length; $++)
                  O.push(_.rows.item($).key);
                d(O);
              }, function(w, _) {
                m(_);
              });
            });
          }).catch(m);
        });
        return S(a, o), a;
      }
      function Po(o) {
        return new y(function(u, a) {
          o.transaction(function(d) {
            d.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(m, c) {
              for (var v = [], w = 0; w < c.rows.length; w++)
                v.push(c.rows.item(w).name);
              u({
                db: o,
                storeNames: v
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
          var v;
          o.name === a.name ? v = d._dbInfo.db : v = openDatabase(o.name, "", "", 0), o.storeName ? c({
            db: v,
            storeNames: [o.storeName]
          }) : c(Po(v));
        }).then(function(c) {
          return new y(function(v, w) {
            c.db.transaction(function(_) {
              function O(H) {
                return new y(function(Y, J) {
                  _.executeSql("DROP TABLE IF EXISTS " + H, [], function() {
                    Y();
                  }, function(X, ne) {
                    J(ne);
                  });
                });
              }
              for (var $ = [], L = 0, F = c.storeNames.length; L < F; L++)
                $.push(O(c.storeNames[L]));
              y.all($).then(function() {
                v();
              }).catch(function(H) {
                w(H);
              });
            }, function(_) {
              w(_);
            });
          });
        }) : m = y.reject("Invalid arguments"), S(m, u), m;
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
        return a.keyPrefix = er(o, u._defaultConfig), Bo() ? (u._dbInfo = a, a.serializer = ut, y.resolve()) : y.reject();
      }
      function jo(o) {
        var u = this, a = u.ready().then(function() {
          for (var d = u._dbInfo.keyPrefix, m = localStorage.length - 1; m >= 0; m--) {
            var c = localStorage.key(m);
            c.indexOf(d) === 0 && localStorage.removeItem(c);
          }
        });
        return S(a, o), a;
      }
      function Fo(o, u) {
        var a = this;
        o = T(o);
        var d = a.ready().then(function() {
          var m = a._dbInfo, c = localStorage.getItem(m.keyPrefix + o);
          return c && (c = m.serializer.deserialize(c)), c;
        });
        return S(d, u), d;
      }
      function Mo(o, u) {
        var a = this, d = a.ready().then(function() {
          for (var m = a._dbInfo, c = m.keyPrefix, v = c.length, w = localStorage.length, _ = 1, O = 0; O < w; O++) {
            var $ = localStorage.key(O);
            if ($.indexOf(c) === 0) {
              var L = localStorage.getItem($);
              if (L && (L = m.serializer.deserialize(L)), L = o(L, $.substring(v), _++), L !== void 0)
                return L;
            }
          }
        });
        return S(d, u), d;
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
        return S(d, u), d;
      }
      function zo(o) {
        var u = this, a = u.ready().then(function() {
          for (var d = u._dbInfo, m = localStorage.length, c = [], v = 0; v < m; v++) {
            var w = localStorage.key(v);
            w.indexOf(d.keyPrefix) === 0 && c.push(w.substring(d.keyPrefix.length));
          }
          return c;
        });
        return S(a, o), a;
      }
      function Ho(o) {
        var u = this, a = u.keys().then(function(d) {
          return d.length;
        });
        return S(a, o), a;
      }
      function Yo(o, u) {
        var a = this;
        o = T(o);
        var d = a.ready().then(function() {
          var m = a._dbInfo;
          localStorage.removeItem(m.keyPrefix + o);
        });
        return S(d, u), d;
      }
      function qo(o, u, a) {
        var d = this;
        o = T(o);
        var m = d.ready().then(function() {
          u === void 0 && (u = null);
          var c = u;
          return new y(function(v, w) {
            var _ = d._dbInfo;
            _.serializer.serialize(u, function(O, $) {
              if ($)
                w($);
              else
                try {
                  localStorage.setItem(_.keyPrefix + o, O), v(c);
                } catch (L) {
                  (L.name === "QuotaExceededError" || L.name === "NS_ERROR_DOM_QUOTA_REACHED") && w(L), w(L);
                }
            });
          });
        });
        return S(m, a), m;
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
          for (var v = localStorage.length - 1; v >= 0; v--) {
            var w = localStorage.key(v);
            w.indexOf(c) === 0 && localStorage.removeItem(w);
          }
        }) : m = y.reject("Invalid arguments"), S(m, u), m;
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
      }, Re = {}, rr = {}, Oe = {
        INDEXEDDB: go,
        WEBSQL: No,
        LOCALSTORAGE: Ko
      }, Go = [Oe.INDEXEDDB._driver, Oe.WEBSQL._driver, Oe.LOCALSTORAGE._driver], We = ["dropInstance"], lt = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(We), Jo = {
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
          f(this, o);
          for (var a in Oe)
            if (Oe.hasOwnProperty(a)) {
              var d = Oe[a], m = d._driver;
              this[a] = m, Re[m] || this.defineDriver(d);
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
          var c = new y(function(v, w) {
            try {
              var _ = a._driver, O = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
              if (!a._driver) {
                w(O);
                return;
              }
              for (var $ = lt.concat("_initStorage"), L = 0, F = $.length; L < F; L++) {
                var H = $[L], Y = !Xo(We, H);
                if ((Y || a[H]) && typeof a[H] != "function") {
                  w(O);
                  return;
                }
              }
              var J = function() {
                for (var De = function(ri) {
                  return function() {
                    var ni = new Error("Method " + ri + " is not implemented by the current driver"), nr = y.reject(ni);
                    return S(nr, arguments[arguments.length - 1]), nr;
                  };
                }, ct = 0, ti = We.length; ct < ti; ct++) {
                  var dt = We[ct];
                  a[dt] || (a[dt] = De(dt));
                }
              };
              J();
              var X = function(De) {
                Re[_] && console.info("Redefining LocalForage driver: " + _), Re[_] = a, rr[_] = De, v();
              };
              "_support" in a ? a._support && typeof a._support == "function" ? a._support().then(X, w) : X(!!a._support) : X(!0);
            } catch (ne) {
              w(ne);
            }
          });
          return A(c, d, m), c;
        }, o.prototype.driver = function() {
          return this._driver || null;
        }, o.prototype.getDriver = function(a, d, m) {
          var c = Re[a] ? y.resolve(Re[a]) : y.reject(new Error("Driver not found."));
          return A(c, d, m), c;
        }, o.prototype.getSerializer = function(a) {
          var d = y.resolve(ut);
          return A(d, a), d;
        }, o.prototype.ready = function(a) {
          var d = this, m = d._driverSet.then(function() {
            return d._ready === null && (d._ready = d._initDriver()), d._ready;
          });
          return A(m, a, a), m;
        }, o.prototype.setDriver = function(a, d, m) {
          var c = this;
          tr(a) || (a = [a]);
          var v = this._getSupportedDrivers(a);
          function w() {
            c._config.driver = c.driver();
          }
          function _(L) {
            return c._extend(L), w(), c._ready = c._initStorage(c._config), c._ready;
          }
          function O(L) {
            return function() {
              var F = 0;
              function H() {
                for (; F < L.length; ) {
                  var Y = L[F];
                  return F++, c._dbInfo = null, c._ready = null, c.getDriver(Y).then(_).catch(H);
                }
                w();
                var J = new Error("No available storage method found.");
                return c._driverSet = y.reject(J), c._driverSet;
              }
              return H();
            };
          }
          var $ = this._driverSet !== null ? this._driverSet.catch(function() {
            return y.resolve();
          }) : y.resolve();
          return this._driverSet = $.then(function() {
            var L = v[0];
            return c._dbInfo = null, c._ready = null, c.getDriver(L).then(function(F) {
              c._driver = F._driver, w(), c._wrapLibraryMethodsWithReady(), c._initDriver = O(v);
            });
          }).catch(function() {
            w();
            var L = new Error("No available storage method found.");
            return c._driverSet = y.reject(L), c._driverSet;
          }), A(this._driverSet, d, m), this._driverSet;
        }, o.prototype.supports = function(a) {
          return !!rr[a];
        }, o.prototype._extend = function(a) {
          ft(this, a);
        }, o.prototype._getSupportedDrivers = function(a) {
          for (var d = [], m = 0, c = a.length; m < c; m++) {
            var v = a[m];
            this.supports(v) && d.push(v);
          }
          return d;
        }, o.prototype._wrapLibraryMethodsWithReady = function() {
          for (var a = 0, d = lt.length; a < d; a++)
            Qo(this, lt[a]);
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
function an(e, t = le) {
  let r;
  const n = /* @__PURE__ */ new Set();
  function i(l) {
    if (tn(e, l) && (e = l, r)) {
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
  function s(l) {
    i(l(e));
  }
  function f(l, g = le) {
    const p = [l, g];
    return n.add(p), n.size === 1 && (r = t(i, s) || le), l(e), () => {
      n.delete(p), n.size === 0 && r && (r(), r = null);
    };
  }
  return { set: i, update: s, subscribe: f };
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
        const s = (await n.json()).models.map((f) => f.model);
        for (const f of t)
          if (s.includes(f.model))
            return this.status.set(f.premium ? be.OK : be.Degraded), f.model;
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
var ye = {}, K = {}, ee = {};
Object.defineProperty(ee, "__esModule", { value: !0 });
ee.output = ee.exists = ee.hash = ee.bytes = ee.bool = ee.number = void 0;
function Ze(e) {
  if (!Number.isSafeInteger(e) || e < 0)
    throw new Error(`Wrong positive integer: ${e}`);
}
ee.number = Ze;
function sn(e) {
  if (typeof e != "boolean")
    throw new Error(`Expected boolean, not ${e}`);
}
ee.bool = sn;
function Ci(e) {
  return e instanceof Uint8Array || e != null && typeof e == "object" && e.constructor.name === "Uint8Array";
}
function Nt(e, ...t) {
  if (!Ci(e))
    throw new Error("Expected Uint8Array");
  if (t.length > 0 && !t.includes(e.length))
    throw new Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`);
}
ee.bytes = Nt;
function un(e) {
  if (typeof e != "function" || typeof e.create != "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  Ze(e.outputLen), Ze(e.blockLen);
}
ee.hash = un;
function ln(e, t = !0) {
  if (e.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (t && e.finished)
    throw new Error("Hash#digest() has already been called");
}
ee.exists = ln;
function fn(e, t) {
  Nt(e);
  const r = t.outputLen;
  if (e.length < r)
    throw new Error(`digestInto() expects output buffer of length at least ${r}`);
}
ee.output = fn;
const ji = { number: Ze, bool: sn, bytes: Nt, hash: un, exists: ln, output: fn };
ee.default = ji;
var k = {};
Object.defineProperty(k, "__esModule", { value: !0 });
k.add5L = k.add5H = k.add4H = k.add4L = k.add3H = k.add3L = k.add = k.rotlBL = k.rotlBH = k.rotlSL = k.rotlSH = k.rotr32L = k.rotr32H = k.rotrBL = k.rotrBH = k.rotrSL = k.rotrSH = k.shrSL = k.shrSH = k.toBig = k.split = k.fromBig = void 0;
const Ve = /* @__PURE__ */ BigInt(2 ** 32 - 1), gt = /* @__PURE__ */ BigInt(32);
function Rt(e, t = !1) {
  return t ? { h: Number(e & Ve), l: Number(e >> gt & Ve) } : { h: Number(e >> gt & Ve) | 0, l: Number(e & Ve) | 0 };
}
k.fromBig = Rt;
function cn(e, t = !1) {
  let r = new Uint32Array(e.length), n = new Uint32Array(e.length);
  for (let i = 0; i < e.length; i++) {
    const { h: s, l: f } = Rt(e[i], t);
    [r[i], n[i]] = [s, f];
  }
  return [r, n];
}
k.split = cn;
const dn = (e, t) => BigInt(e >>> 0) << gt | BigInt(t >>> 0);
k.toBig = dn;
const hn = (e, t, r) => e >>> r;
k.shrSH = hn;
const mn = (e, t, r) => e << 32 - r | t >>> r;
k.shrSL = mn;
const pn = (e, t, r) => e >>> r | t << 32 - r;
k.rotrSH = pn;
const yn = (e, t, r) => e << 32 - r | t >>> r;
k.rotrSL = yn;
const gn = (e, t, r) => e << 64 - r | t >>> r - 32;
k.rotrBH = gn;
const vn = (e, t, r) => e >>> r - 32 | t << 64 - r;
k.rotrBL = vn;
const bn = (e, t) => t;
k.rotr32H = bn;
const wn = (e, t) => e;
k.rotr32L = wn;
const _n = (e, t, r) => e << r | t >>> 32 - r;
k.rotlSH = _n;
const Sn = (e, t, r) => t << r | e >>> 32 - r;
k.rotlSL = Sn;
const On = (e, t, r) => t << r - 32 | e >>> 64 - r;
k.rotlBH = On;
const $n = (e, t, r) => e << r - 32 | t >>> 64 - r;
k.rotlBL = $n;
function xn(e, t, r, n) {
  const i = (t >>> 0) + (n >>> 0);
  return { h: e + r + (i / 2 ** 32 | 0) | 0, l: i | 0 };
}
k.add = xn;
const An = (e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0);
k.add3L = An;
const En = (e, t, r, n) => t + r + n + (e / 2 ** 32 | 0) | 0;
k.add3H = En;
const In = (e, t, r, n) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0);
k.add4L = In;
const Tn = (e, t, r, n, i) => t + r + n + i + (e / 2 ** 32 | 0) | 0;
k.add4H = Tn;
const Ln = (e, t, r, n, i) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0) + (i >>> 0);
k.add5L = Ln;
const Pn = (e, t, r, n, i, s) => t + r + n + i + s + (e / 2 ** 32 | 0) | 0;
k.add5H = Pn;
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
k.default = Fi;
var kn = {}, nt = {};
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
  function i(b) {
    return b instanceof Uint8Array || b != null && typeof b == "object" && b.constructor.name === "Uint8Array";
  }
  const s = (b) => new DataView(b.buffer, b.byteOffset, b.byteLength);
  e.createView = s;
  const f = (b, P) => b << 32 - P | b >>> P;
  if (e.rotr = f, e.isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68, !e.isLE)
    throw new Error("Non little-endian hardware is not supported");
  const l = /* @__PURE__ */ Array.from({ length: 256 }, (b, P) => P.toString(16).padStart(2, "0"));
  function g(b) {
    if (!i(b))
      throw new Error("Uint8Array expected");
    let P = "";
    for (let C = 0; C < b.length; C++)
      P += l[b[C]];
    return P;
  }
  e.bytesToHex = g;
  const p = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
  function I(b) {
    if (b >= p._0 && b <= p._9)
      return b - p._0;
    if (b >= p._A && b <= p._F)
      return b - (p._A - 10);
    if (b >= p._a && b <= p._f)
      return b - (p._a - 10);
  }
  function y(b) {
    if (typeof b != "string")
      throw new Error("hex string expected, got " + typeof b);
    const P = b.length, C = P / 2;
    if (P % 2)
      throw new Error("padded hex string expected, got unpadded hex of length " + P);
    const j = new Uint8Array(C);
    for (let N = 0, B = 0; N < C; N++, B += 2) {
      const G = I(b.charCodeAt(B)), ve = I(b.charCodeAt(B + 1));
      if (G === void 0 || ve === void 0) {
        const Ne = b[B] + b[B + 1];
        throw new Error('hex string expected, got non-hex character "' + Ne + '" at index ' + B);
      }
      j[N] = G * 16 + ve;
    }
    return j;
  }
  e.hexToBytes = y;
  const S = async () => {
  };
  e.nextTick = S;
  async function A(b, P, C) {
    let j = Date.now();
    for (let N = 0; N < b; N++) {
      C(N);
      const B = Date.now() - j;
      B >= 0 && B < P || (await (0, e.nextTick)(), j += B);
    }
  }
  e.asyncLoop = A;
  function T(b) {
    if (typeof b != "string")
      throw new Error(`utf8ToBytes expected string, got ${typeof b}`);
    return new Uint8Array(new TextEncoder().encode(b));
  }
  e.utf8ToBytes = T;
  function E(b) {
    if (typeof b == "string" && (b = T(b)), !i(b))
      throw new Error(`expected Uint8Array, got ${typeof b}`);
    return b;
  }
  e.toBytes = E;
  function R(...b) {
    let P = 0;
    for (let j = 0; j < b.length; j++) {
      const N = b[j];
      if (!i(N))
        throw new Error("Uint8Array expected");
      P += N.length;
    }
    const C = new Uint8Array(P);
    for (let j = 0, N = 0; j < b.length; j++) {
      const B = b[j];
      C.set(B, N), N += B.length;
    }
    return C;
  }
  e.concatBytes = R;
  class W {
    // Safe version that clones internal state
    clone() {
      return this._cloneInto();
    }
  }
  e.Hash = W;
  const U = {}.toString;
  function re(b, P) {
    if (P !== void 0 && U.call(P) !== "[object Object]")
      throw new Error("Options should be object or undefined");
    return Object.assign(b, P);
  }
  e.checkOpts = re;
  function Q(b) {
    const P = (j) => b().update(E(j)).digest(), C = b();
    return P.outputLen = C.outputLen, P.blockLen = C.blockLen, P.create = () => b(), P;
  }
  e.wrapConstructor = Q;
  function x(b) {
    const P = (j, N) => b(N).update(E(j)).digest(), C = b({});
    return P.outputLen = C.outputLen, P.blockLen = C.blockLen, P.create = (j) => b(j), P;
  }
  e.wrapConstructorWithOpts = x;
  function M(b) {
    const P = (j, N) => b(N).update(E(j)).digest(), C = b({});
    return P.outputLen = C.outputLen, P.blockLen = C.blockLen, P.create = (j) => b(j), P;
  }
  e.wrapXOFConstructorWithOpts = M;
  function D(b = 32) {
    if (t.crypto && typeof t.crypto.getRandomValues == "function")
      return t.crypto.getRandomValues(new Uint8Array(b));
    throw new Error("crypto.getRandomValues must be defined");
  }
  e.randomBytes = D;
})(kn);
Object.defineProperty(K, "__esModule", { value: !0 });
K.shake256 = K.shake128 = K.keccak_512 = K.keccak_384 = K.keccak_256 = K.keccak_224 = K.sha3_512 = K.sha3_384 = K.sha3_256 = K.sha3_224 = K.Keccak = K.keccakP = void 0;
const Ae = ee, Ue = k, je = kn, [Nn, Rn, Dn] = [[], [], []], Mi = /* @__PURE__ */ BigInt(0), Be = /* @__PURE__ */ BigInt(1), Ui = /* @__PURE__ */ BigInt(2), zi = /* @__PURE__ */ BigInt(7), Hi = /* @__PURE__ */ BigInt(256), Yi = /* @__PURE__ */ BigInt(113);
for (let e = 0, t = Be, r = 1, n = 0; e < 24; e++) {
  [r, n] = [n, (2 * r + 3 * n) % 5], Nn.push(2 * (5 * n + r)), Rn.push((e + 1) * (e + 2) / 2 % 64);
  let i = Mi;
  for (let s = 0; s < 7; s++)
    t = (t << Be ^ (t >> zi) * Yi) % Hi, t & Ui && (i ^= Be << (Be << /* @__PURE__ */ BigInt(s)) - Be);
  Dn.push(i);
}
const [qi, Wi] = /* @__PURE__ */ (0, Ue.split)(Dn, !0), lr = (e, t, r) => r > 32 ? (0, Ue.rotlBH)(e, t, r) : (0, Ue.rotlSH)(e, t, r), fr = (e, t, r) => r > 32 ? (0, Ue.rotlBL)(e, t, r) : (0, Ue.rotlSL)(e, t, r);
function Bn(e, t = 24) {
  const r = new Uint32Array(10);
  for (let n = 24 - t; n < 24; n++) {
    for (let f = 0; f < 10; f++)
      r[f] = e[f] ^ e[f + 10] ^ e[f + 20] ^ e[f + 30] ^ e[f + 40];
    for (let f = 0; f < 10; f += 2) {
      const l = (f + 8) % 10, g = (f + 2) % 10, p = r[g], I = r[g + 1], y = lr(p, I, 1) ^ r[l], S = fr(p, I, 1) ^ r[l + 1];
      for (let A = 0; A < 50; A += 10)
        e[f + A] ^= y, e[f + A + 1] ^= S;
    }
    let i = e[2], s = e[3];
    for (let f = 0; f < 24; f++) {
      const l = Rn[f], g = lr(i, s, l), p = fr(i, s, l), I = Nn[f];
      i = e[I], s = e[I + 1], e[I] = g, e[I + 1] = p;
    }
    for (let f = 0; f < 50; f += 10) {
      for (let l = 0; l < 10; l++)
        r[l] = e[f + l];
      for (let l = 0; l < 10; l++)
        e[f + l] ^= ~r[(l + 2) % 10] & r[(l + 4) % 10];
    }
    e[0] ^= qi[n], e[1] ^= Wi[n];
  }
  r.fill(0);
}
K.keccakP = Bn;
class Ye extends je.Hash {
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(t, r, n, i = !1, s = 24) {
    if (super(), this.blockLen = t, this.suffix = r, this.outputLen = n, this.enableXOF = i, this.rounds = s, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, (0, Ae.number)(n), 0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = (0, je.u32)(this.state);
  }
  keccak() {
    Bn(this.state32, this.rounds), this.posOut = 0, this.pos = 0;
  }
  update(t) {
    (0, Ae.exists)(this);
    const { blockLen: r, state: n } = this;
    t = (0, je.toBytes)(t);
    const i = t.length;
    for (let s = 0; s < i; ) {
      const f = Math.min(r - this.pos, i - s);
      for (let l = 0; l < f; l++)
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
      const f = Math.min(n - this.posOut, s - i);
      t.set(r.subarray(this.posOut, this.posOut + f), i), this.posOut += f, i += f;
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
    const { blockLen: r, suffix: n, outputLen: i, rounds: s, enableXOF: f } = this;
    return t || (t = new Ye(r, n, i, f, s)), t.state32.set(this.state32), t.pos = this.pos, t.posOut = this.posOut, t.finished = this.finished, t.rounds = s, t.suffix = n, t.outputLen = i, t.enableXOF = f, t.destroyed = this.destroyed, t;
  }
}
K.Keccak = Ye;
const ge = (e, t, r) => (0, je.wrapConstructor)(() => new Ye(t, e, r));
K.sha3_224 = ge(6, 144, 224 / 8);
K.sha3_256 = ge(6, 136, 256 / 8);
K.sha3_384 = ge(6, 104, 384 / 8);
K.sha3_512 = ge(6, 72, 512 / 8);
K.keccak_224 = ge(1, 144, 224 / 8);
K.keccak_256 = ge(1, 136, 256 / 8);
K.keccak_384 = ge(1, 104, 384 / 8);
K.keccak_512 = ge(1, 72, 512 / 8);
const Cn = (e, t, r) => (0, je.wrapXOFConstructorWithOpts)((n = {}) => new Ye(t, e, n.dkLen === void 0 ? r : n.dkLen, !0));
K.shake128 = Cn(31, 168, 128 / 8);
K.shake256 = Cn(31, 136, 256 / 8);
const { sha3_512: Ki } = K, jn = 24, Fe = 32, vt = (e = 4, t = Math.random) => {
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
  const r = Object.keys(e).toString(), n = r.length ? r + vt(Fe, t) : vt(Fe, t);
  return Mn(n).substring(0, Fe);
}, zn = (e) => () => e++, Xi = 476782367, Hn = ({
  // Fallback if the user does not pass in a CSPRNG. This should be OK
  // because we don't rely solely on the random number generator for entropy.
  // We also use the host fingerprint, current time, and a session counter.
  random: e = Math.random,
  counter: t = zn(Math.floor(e() * Xi)),
  length: r = jn,
  fingerprint: n = Un({ random: e })
} = {}) => function() {
  const s = Vi(e), f = Date.now().toString(36), l = t().toString(36), g = vt(r, e), p = `${f + g + l + n}`;
  return `${s + Mn(p).substring(1, r)}`;
}, Gi = Hn(), Ji = (e, { minLength: t = 2, maxLength: r = Fe } = {}) => {
  const n = e.length, i = /^[0-9a-z]+$/;
  try {
    if (typeof e == "string" && n >= t && n <= r && i.test(e))
      return !0;
  } finally {
  }
  return !1;
};
ye.getConstants = () => ({ defaultLength: jn, bigLength: Fe });
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
    var r = String(t).split("."), n = Number(r[0]) == t, i = n && r[0].slice(-1), s = n && r[0].slice(-2), f = n && r[0].slice(-6);
    return i == 1 && s != 11 && s != 71 && s != 91 ? "one" : i == 2 && s != 12 && s != 72 && s != 92 ? "two" : (i == 3 || i == 4 || i == 9) && (s < 10 || s > 19) && (s < 70 || s > 79) && (s < 90 || s > 99) ? "few" : t != 0 && n && f == 0 ? "many" : "other";
  },
  bs: function(t) {
    var r = String(t).split("."), n = r[0], i = r[1] || "", s = !r[1], f = n.slice(-1), l = n.slice(-2), g = i.slice(-1), p = i.slice(-2);
    return s && f == 1 && l != 11 || g == 1 && p != 11 ? "one" : s && f >= 2 && f <= 4 && (l < 12 || l > 14) || g >= 2 && g <= 4 && (p < 12 || p > 14) ? "few" : "other";
  },
  ca: function(t) {
    var r = String(t).split("."), n = r[0], i = !r[1], s = n.slice(-6);
    return t == 1 && i ? "one" : n != 0 && s == 0 && i ? "many" : "other";
  },
  ceb: function(t) {
    var r = String(t).split("."), n = r[0], i = r[1] || "", s = !r[1], f = n.slice(-1), l = i.slice(-1);
    return s && (n == 1 || n == 2 || n == 3) || s && f != 4 && f != 6 && f != 9 || !s && l != 4 && l != 6 && l != 9 ? "one" : "other";
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
    var r = String(t).split("."), n = r[0], i = r[1] || "", s = !r[1], f = n.slice(-2), l = i.slice(-2);
    return s && f == 1 || l == 1 ? "one" : s && f == 2 || l == 2 ? "two" : s && (f == 3 || f == 4) || l == 3 || l == 4 ? "few" : "other";
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
    var r = String(t).split("."), n = r[0], i = (r[1] || "").replace(/0+$/, ""), s = Number(r[0]) == t, f = n.slice(-1), l = n.slice(-2);
    return s && f == 1 && l != 11 || i % 10 == 1 && i % 100 != 11 ? "one" : "other";
  },
  ksh: function(t) {
    return t == 0 ? "zero" : t == 1 ? "one" : "other";
  },
  lt: function(t) {
    var r = String(t).split("."), n = r[1] || "", i = Number(r[0]) == t, s = i && r[0].slice(-1), f = i && r[0].slice(-2);
    return s == 1 && (f < 11 || f > 19) ? "one" : s >= 2 && s <= 9 && (f < 11 || f > 19) ? "few" : n != 0 ? "many" : "other";
  },
  lv: function(t) {
    var r = String(t).split("."), n = r[1] || "", i = n.length, s = Number(r[0]) == t, f = s && r[0].slice(-1), l = s && r[0].slice(-2), g = n.slice(-2), p = n.slice(-1);
    return s && f == 0 || l >= 11 && l <= 19 || i == 2 && g >= 11 && g <= 19 ? "zero" : f == 1 && l != 11 || i == 2 && p == 1 && g != 11 || i != 2 && p == 1 ? "one" : "other";
  },
  mk: function(t) {
    var r = String(t).split("."), n = r[0], i = r[1] || "", s = !r[1], f = n.slice(-1), l = n.slice(-2), g = i.slice(-1), p = i.slice(-2);
    return s && f == 1 && l != 11 || g == 1 && p != 11 ? "one" : "other";
  },
  mt: function(t) {
    var r = String(t).split("."), n = Number(r[0]) == t, i = n && r[0].slice(-2);
    return t == 1 ? "one" : t == 2 ? "two" : t == 0 || i >= 3 && i <= 10 ? "few" : i >= 11 && i <= 19 ? "many" : "other";
  },
  pa: function(t) {
    return t == 0 || t == 1 ? "one" : "other";
  },
  pl: function(t) {
    var r = String(t).split("."), n = r[0], i = !r[1], s = n.slice(-1), f = n.slice(-2);
    return t == 1 && i ? "one" : i && s >= 2 && s <= 4 && (f < 12 || f > 14) ? "few" : i && n != 1 && (s == 0 || s == 1) || i && s >= 5 && s <= 9 || i && f >= 12 && f <= 14 ? "many" : "other";
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
    var r = String(t).split("."), n = r[0], i = !r[1], s = n.slice(-1), f = n.slice(-2);
    return i && s == 1 && f != 11 ? "one" : i && s >= 2 && s <= 4 && (f < 12 || f > 14) ? "few" : i && s == 0 || i && s >= 5 && s <= 9 || i && f >= 11 && f <= 14 ? "many" : "other";
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
  return da(e) || ca(e, t) || fa(e, t) || la();
}
function la() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fa(e, t) {
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
    var n = [], i = !0, s = !1, f, l;
    try {
      for (r = r.call(e); !(i = (f = r.next()).done) && (n.push(f.value), !(t && n.length === t)); i = !0)
        ;
    } catch (g) {
      s = !0, l = g;
    } finally {
      try {
        !i && r.return != null && r.return();
      } finally {
        if (s)
          throw l;
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
      var r = Or(arguments), n = wr(r, 2), i = n[0], s = n[1], f = this.getRule(i, s), l = f.indexOf("{0}");
      if (l < 0)
        return [{
          type: "literal",
          value: f
        }];
      var g = [];
      return l > 0 && g.push({
        type: "literal",
        value: f.slice(0, l)
      }), g = g.concat(this.formatNumberToParts(Math.abs(i)).map(function(p) {
        return br(br({}, p), {}, {
          unit: s
        });
      })), l + 3 < f.length - 1 && g.push({
        type: "literal",
        value: f.slice(l + 3)
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
          var f = i["next".concat(r === 1 ? "" : "-" + Math.abs(r))];
          if (f)
            return f;
        } else if (r === 0 && i.current)
          return i.current;
      }
      var l = i[Oa(r) ? "past" : "future"];
      if (typeof l == "string")
        return l;
      var g = this.pluralRules && this.pluralRules.select(Math.abs(r)) || "other";
      return l[g] || l.other;
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
var mt = 'Invalid "unit" argument';
function ba(e) {
  if (_t(e) === "symbol")
    throw new TypeError(mt);
  if (typeof e != "string")
    throw new RangeError("".concat(mt, ": ").concat(e));
  if (e[e.length - 1] === "s" && (e = e.slice(0, e.length - 1)), pa.indexOf(e) < 0)
    throw new RangeError("".concat(mt, ": ").concat(e));
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
      for (var f = 0, l = i; f < l.length; f++) {
        var g = l[f];
        if (et(r) !== "object")
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
      for (var s = n.pop(), f = n.pop(), l = this.cache, g = 0, p = n; g < p.length; g++) {
        var I = p[g];
        et(l[I]) !== "object" && (l[I] = {}), l = l[I];
      }
      return l[f] = s;
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
var ce = 60, tt = 60 * ce, we = 24 * tt, $t = 7 * we, xt = 30.44 * we, Kn = 146097 / 400 * we;
function Pe(e) {
  switch (e) {
    case "second":
      return 1;
    case "minute":
      return ce;
    case "hour":
      return tt;
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
function At(e) {
  "@babel/helpers - typeof";
  return At = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, At(e);
}
function Xn(e, t) {
  var r = t.prevStep, n = t.timestamp, i = t.now, s = t.future, f = t.round, l;
  return r && (r.id || r.unit) && (l = e["threshold_for_".concat(r.id || r.unit)]), l === void 0 && e.threshold !== void 0 && (l = e.threshold, typeof l == "function" && (l = l(i, s))), l === void 0 && (l = e.minTime), At(l) === "object" && (r && r.id && l[r.id] !== void 0 ? l = l[r.id] : l = l.default), typeof l == "function" && (l = l(n, {
    future: s,
    getMinTimeForUnit: function(p, I) {
      return Er(p, I || r && r.formatAs, {
        round: f
      });
    }
  })), l === void 0 && e.test && (e.test(n, {
    now: i,
    future: s
  }) ? l = 0 : l = 9007199254740991), l === void 0 && (r ? e.formatAs && r.formatAs && (l = Er(e.formatAs, r.formatAs, {
    round: f
  })) : l = 0), l === void 0 && console.warn("[javascript-time-ago] A step should specify `minTime`:\n" + JSON.stringify(e, null, 2)), l;
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
  var n = r.now, i = r.future, s = r.round, f = r.units, l = r.getNextStep;
  e = Ca(e, f);
  var g = Ba(e, t, {
    now: n,
    future: i,
    round: s
  });
  if (l) {
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
    var f = Gn(e, t, {
      now: n,
      future: i || t < 0,
      round: s
    });
    if (f !== -1) {
      var l = e[f];
      if (l.granularity) {
        var g = ze(s)(Math.abs(t) / Vn(l) / l.granularity) * l.granularity;
        if (g === 0 && f > 0)
          return e[f - 1];
      }
      return l;
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
    var s = Pe(e) * 1e3, f = t > n, l = Math.abs(t - n), g = ze(i)(l / s) * s;
    return f ? g > 0 ? l - g + Ma(i, s) : l - g + 1 : -(l - g) + Fa(i, s);
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
  var n = r.prevStep, i = r.nextStep, s = r.now, f = r.future, l = r.round, g = e.getTime ? e.getTime() : e, p = function(T) {
    return ja(T, g, {
      now: s,
      round: l
    });
  }, I = Ya(f ? t : i, g, {
    future: f,
    now: s,
    round: l,
    prevStep: f ? n : t
    // isFirstStep: future && isFirstStep
  });
  if (I !== void 0) {
    var y;
    if (t && (t.getTimeToNextUpdate && (y = t.getTimeToNextUpdate(g, {
      getTimeToNextUpdateForUnit: p,
      getRoundFunction: ze,
      now: s,
      future: f,
      round: l
    })), y === void 0)) {
      var S = t.unit || t.formatAs;
      S && (y = p(S));
    }
    return y === void 0 ? I : Math.min(y, I);
  }
}
function Ha(e, t, r) {
  var n = r.now, i = r.future, s = r.round, f = r.prevStep, l = Xn(e, {
    timestamp: t,
    now: n,
    future: i,
    round: s,
    prevStep: f
  });
  if (l !== void 0)
    return i ? t - l * 1e3 + 1 : l === 0 && t === n ? Jn : t + l * 1e3;
}
function Ya(e, t, r) {
  var n = r.now, i = r.future, s = r.round, f = r.prevStep;
  if (e) {
    var l = Ha(e, t, {
      now: n,
      future: i,
      round: s,
      prevStep: f
    });
    return l === void 0 ? void 0 : l - n;
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
  factor: ce,
  // "minute" labels are used for formatting the output.
  unit: "minute"
}, {
  // This step is effective starting from 2.5 minutes.
  threshold: 2.5 * ce,
  // Allow only 5-minute increments of minutes starting from 2.5 minutes.
  // `granularity` — (advanced) Time interval value "granularity".
  // For example, it could be set to `5` for minutes to allow only 5-minute increments
  // when formatting time intervals: `0 minutes`, `5 minutes`, `10 minutes`, etc.
  // Perhaps this feature will be removed because there seem to be no use cases
  // of it in the real world.
  granularity: 5,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a minute.
  factor: ce,
  // "minute" labels are used for formatting the output.
  unit: "minute"
}, {
  // This step is effective starting from 22.5 minutes.
  threshold: 22.5 * ce,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in  half-an-hour.
  factor: 0.5 * tt,
  // "half-hour" labels are used for formatting the output.
  // (if available, which is no longer the case)
  unit: "half-hour"
}, {
  // This step is effective starting from 42.5 minutes.
  threshold: 42.5 * ce,
  threshold_for_minute: 52.5 * ce,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in an hour.
  factor: tt,
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
}], ue = {}, Va = {
  minTime: function(t, r) {
    r.future;
    var n = r.getMinTimeForUnit;
    return n("day");
  },
  format: function(t, r) {
    return ue[r] || (ue[r] = {}), ue[r].dayMonth || (ue[r].dayMonth = new Intl.DateTimeFormat(r, {
      month: "short",
      day: "numeric"
    })), ue[r].dayMonth.format(to(t));
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
    return ue[r] || (ue[r] = {}), ue[r].dayMonthYear || (ue[r].dayMonthYear = new Intl.DateTimeFormat(r, {
      year: "numeric",
      month: "short",
      day: "numeric"
    })), ue[r].dayMonthYear.format(to(t));
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
      minTime: ce
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
const os = Mr(Mr({}, He), {}, {
  // Add "now".
  steps: [{
    formatAs: "now"
  }].concat(He.steps)
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
const Pt = zr(zr({}, He), {}, {
  // Skip "seconds".
  steps: He.steps.filter(function(e) {
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
      return He;
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
function rt(e) {
  "@babel/helpers - typeof";
  return rt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, rt(e);
}
function ls(e, t) {
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
    var n = [], i = !0, s = !1, f, l;
    try {
      for (r = r.call(e); !(i = (f = r.next()).done) && (n.push(f.value), !(t && n.length === t)); i = !0)
        ;
    } catch (g) {
      s = !0, l = g;
    } finally {
      try {
        !i && r.return != null && r.return();
      } finally {
        if (s)
          throw l;
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
var se = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.polyfill;
    ms(this, e), typeof t == "string" && (t = [t]), this.locale = Ia(t.concat(e.getDefaultLocale()), Te), typeof Intl < "u" && Intl.NumberFormat && (this.numberFormat = new Intl.NumberFormat(this.locale)), n === !1 ? (this.IntlRelativeTimeFormat = Intl.RelativeTimeFormat, this.IntlPluralRules = Intl.PluralRules) : (this.IntlRelativeTimeFormat = pe, this.IntlPluralRules = pe.PluralRules), this.relativeTimeFormatCache = new xr(), this.pluralRulesCache = new xr();
  }
  return ps(e, [{
    key: "format",
    value: function(r, n, i) {
      i || (n && !ws(n) ? (i = n, n = void 0) : i = {}), n || (n = It), typeof n == "string" && (n = us(n));
      var s = ys(r), f = this.getLabels(n.flavour || n.labels), l = f.labels, g = f.labelsType, p;
      n.now !== void 0 && (p = n.now), p === void 0 && i.now !== void 0 && (p = i.now), p === void 0 && (p = Date.now());
      var I = (p - s) / 1e3, y = i.future || I < 0, S = bs(l, Te(this.locale).now, Te(this.locale).long, y);
      if (n.custom) {
        var A = n.custom({
          now: p,
          date: new Date(s),
          time: s,
          elapsed: I,
          locale: this.locale
        });
        if (A !== void 0)
          return A;
      }
      var T = vs(
        // Controlling `style.steps` through `style.units` seems to be deprecated:
        // create a new custom `style` instead.
        n.units,
        l,
        S
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
      ), W = fs(R, 3), U = W[0], re = W[1], Q = W[2], x = this.formatDateForStep(s, re, I, {
        labels: l,
        labelsType: g,
        nowLabel: S,
        now: p,
        future: y,
        round: E
      }) || "";
      if (i.getTimeToNextUpdate) {
        var M = za(s, re, {
          nextStep: Q,
          prevStep: U,
          now: p,
          future: y,
          round: E
        });
        return [x, M];
      }
      return x;
    }
  }, {
    key: "formatDateForStep",
    value: function(r, n, i, s) {
      var f = this, l = s.labels, g = s.labelsType, p = s.nowLabel, I = s.now, y = s.future, S = s.round;
      if (n) {
        if (n.format)
          return n.format(r, this.locale, {
            formatAs: function(W, U) {
              return f.formatValue(U, W, {
                labels: l,
                future: y
              });
            },
            now: I,
            future: y
          });
        var A = n.unit || n.formatAs;
        if (!A)
          throw new Error("[javascript-time-ago] Each step must define either `formatAs` or `format()`. Step: ".concat(JSON.stringify(n)));
        if (A === "now")
          return p;
        var T = Math.abs(i) / Vn(n);
        n.granularity && (T = ze(S)(T / n.granularity) * n.granularity);
        var E = -1 * Math.sign(i) * ze(S)(T);
        switch (E === 0 && (y ? E = 0 : E = -0), g) {
          case "long":
          case "short":
          case "narrow":
            return this.getFormatter(g).format(E, A);
          default:
            return this.formatValue(E, A, {
              labels: l,
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
      var s = i.labels, f = i.future;
      return this.getFormattingRule(s, n, r, {
        future: f
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
      var f = s.future;
      if (this.locale, r = r[n], typeof r == "string")
        return r;
      var l = i === 0 ? f ? "future" : "past" : i < 0 ? "past" : "future", g = r[l] || r;
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
      typeof r == "string" && (r = [r]), r = r.map(function(l) {
        switch (l) {
          case "tiny":
          case "mini-time":
            return "mini";
          default:
            return l;
        }
      }), r = r.concat("long");
      for (var n = Te(this.locale), i = ls(r), s; !(s = i()).done; ) {
        var f = s.value;
        if (n[f])
          return {
            labelsType: f,
            labels: n[f]
          };
      }
    }
  }]), e;
}(), no = "en";
se.getDefaultLocale = function() {
  return no;
};
se.setDefaultLocale = function(e) {
  return no = e;
};
se.addDefaultLocale = function(e) {
  if (Kr)
    return console.error("[javascript-time-ago] `TimeAgo.addDefaultLocale()` can only be called once. To add other locales, use `TimeAgo.addLocale()`.");
  Kr = !0, se.setDefaultLocale(e.locale), se.addLocale(e);
};
var Kr;
se.addLocale = function(e) {
  Zn(e), pe.addLocale(e);
};
se.locale = se.addLocale;
se.addLabels = function(e, t, r) {
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
  throw new Error("Unsupported relative time formatter input: ".concat(rt(e), ", ").concat(e));
}
function gs(e) {
  return rt(e) === "object" && typeof e.getTime == "function";
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
se.addLocale(_s);
const Ss = new se("en-US"), Vr = (e) => Ss.format(new Date(e)), Os = Di(Vr, (e) => {
  const t = setInterval(() => e(Vr), 1e3);
  return () => clearInterval(t);
});
function $s(e) {
  li(e, "svelte-xllbll", `.svelte-xllbll,.svelte-xllbll::before,.svelte-xllbll::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}.svelte-xllbll::before,.svelte-xllbll::after{--tw-content:''}:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}button.svelte-xllbll,input.svelte-xllbll{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button.svelte-xllbll{text-transform:none}button.svelte-xllbll{-webkit-appearance:button;background-color:transparent;background-image:none}.svelte-xllbll:-moz-focusring{outline:auto}.svelte-xllbll:-moz-ui-invalid{box-shadow:none}.svelte-xllbll::-webkit-inner-spin-button,.svelte-xllbll::-webkit-outer-spin-button{height:auto}.svelte-xllbll::-webkit-search-decoration{-webkit-appearance:none}.svelte-xllbll::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}input.svelte-xllbll::-moz-placeholder{opacity:1;color:#9ca3af}input.svelte-xllbll::placeholder{opacity:1;color:#9ca3af}button.svelte-xllbll{cursor:pointer}.svelte-xllbll:disabled{cursor:default}.svelte-xllbll,.svelte-xllbll::before,.svelte-xllbll::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position:  ;--tw-gradient-via-position:  ;--tw-gradient-to-position:  ;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.svelte-xllbll::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position:  ;--tw-gradient-via-position:  ;--tw-gradient-to-position:  ;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.absolute.svelte-xllbll{position:absolute}.bottom-2.svelte-xllbll{bottom:0.5rem}.right-2.svelte-xllbll{right:0.5rem}.my-2.svelte-xllbll{margin-top:0.5rem;margin-bottom:0.5rem}.mb-2.svelte-xllbll{margin-bottom:0.5rem}.mb-4.svelte-xllbll{margin-bottom:1rem}.mt-2.svelte-xllbll{margin-top:0.5rem}.block.svelte-xllbll{display:block}.flex.svelte-xllbll{display:flex}.hidden.svelte-xllbll{display:none}.w-3\\/4.svelte-xllbll{width:75%}.w-full.svelte-xllbll{width:100%}.flex-row.svelte-xllbll{flex-direction:row}.flex-col.svelte-xllbll{flex-direction:column}.items-baseline.svelte-xllbll{align-items:baseline}.items-stretch.svelte-xllbll{align-items:stretch}.justify-between.svelte-xllbll{justify-content:space-between}.place-self-start.svelte-xllbll{place-self:start}.place-self-end.svelte-xllbll{place-self:end}.rounded-lg.svelte-xllbll{border-radius:0.5rem}.rounded-md.svelte-xllbll{border-radius:0.375rem}.bg-lime-200.svelte-xllbll{--tw-bg-opacity:1;background-color:rgb(217 249 157 / var(--tw-bg-opacity))}.bg-sky-200.svelte-xllbll{--tw-bg-opacity:1;background-color:rgb(186 230 253 / var(--tw-bg-opacity))}.bg-violet-600.svelte-xllbll{--tw-bg-opacity:1;background-color:rgb(124 58 237 / var(--tw-bg-opacity))}.bg-white.svelte-xllbll{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.px-1.svelte-xllbll{padding-left:0.25rem;padding-right:0.25rem}.px-2.svelte-xllbll{padding-left:0.5rem;padding-right:0.5rem}.px-4.svelte-xllbll{padding-left:1rem;padding-right:1rem}.py-1.svelte-xllbll{padding-top:0.25rem;padding-bottom:0.25rem}.py-2.svelte-xllbll{padding-top:0.5rem;padding-bottom:0.5rem}.text-justify.svelte-xllbll{text-align:justify}.text-base.svelte-xllbll{font-size:1rem;line-height:1.5rem}.text-lg.svelte-xllbll{font-size:1.125rem;line-height:1.75rem}.text-sm.svelte-xllbll{font-size:0.875rem;line-height:1.25rem}.text-xl.svelte-xllbll{font-size:1.25rem;line-height:1.75rem}.font-bold.svelte-xllbll{font-weight:700}.text-white.svelte-xllbll{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}`);
}
function Xr(e, t, r) {
  const n = e.slice();
  return n[12] = t[r], n;
}
function Gr(e) {
  let t, r, n, i, s, f, l, g, p, I, y = ur(
    /*chat*/
    e[2]._.messages
  ), S = [];
  for (let A = 0; A < y.length; A += 1)
    S[A] = Qr(Xr(e, y, A));
  return {
    c() {
      for (let A = 0; A < S.length; A += 1)
        S[A].c();
      t = ae(), r = V("form"), n = V("input"), s = ae(), f = V("div"), f.textContent = "The assistant makes mistakes, always check important information", l = ae(), g = V("div"), g.textContent = "Also, the assistant cannot read the documentation yet", n.disabled = i = /*status*/
      e[0] && /*$status*/
      e[5].slug == "running", z(n, "class", "w-full px-2 py-1 text-lg rounded-lg svelte-xllbll"), z(n, "type", "text"), z(n, "placeholder", "What do you want help with?"), z(r, "action", "#"), z(r, "class", "my-2 svelte-xllbll"), z(f, "class", "mt-2 text-sm svelte-xllbll"), z(g, "class", "text-sm svelte-xllbll");
    },
    m(A, T) {
      for (let E = 0; E < S.length; E += 1)
        S[E] && S[E].m(A, T);
      te(A, t, T), te(A, r, T), q(r, n), ir(
        n,
        /*text*/
        e[3]
      ), te(A, s, T), te(A, f, T), te(A, l, T), te(A, g, T), p || (I = [
        Je(
          n,
          "input",
          /*input_input_handler*/
          e[10]
        ),
        Je(r, "submit", mi(
          /*handleUserMessage*/
          e[7]
        ))
      ], p = !0);
    },
    p(A, T) {
      if (T & /*chat, $timeAgo*/
      68) {
        y = ur(
          /*chat*/
          A[2]._.messages
        );
        let E;
        for (E = 0; E < y.length; E += 1) {
          const R = Xr(A, y, E);
          S[E] ? S[E].p(R, T) : (S[E] = Qr(R), S[E].c(), S[E].m(t.parentNode, t));
        }
        for (; E < S.length; E += 1)
          S[E].d(1);
        S.length = y.length;
      }
      T & /*status, $status*/
      33 && i !== (i = /*status*/
      A[0] && /*$status*/
      A[5].slug == "running") && (n.disabled = i), T & /*text*/
      8 && n.value !== /*text*/
      A[3] && ir(
        n,
        /*text*/
        A[3]
      );
    },
    d(A) {
      A && (Z(t), Z(r), Z(s), Z(f), Z(l), Z(g)), di(S, A), p = !1, ke(I);
    }
  };
}
function Jr(e) {
  let t, r, n, i, s, f = (
    /*$timeAgo*/
    e[6](
      /*message*/
      e[12].timestamp
    ) + ""
  ), l, g, p, I = (
    /*message*/
    e[12].content + ""
  ), y;
  function S(E, R) {
    return (
      /*message*/
      E[12].role == "user" ? As : xs
    );
  }
  let A = S(e), T = A(e);
  return {
    c() {
      t = V("div"), r = V("div"), n = V("span"), T.c(), i = ae(), s = V("span"), l = me(f), g = ae(), p = V("div"), y = me(I), z(n, "class", "font-bold svelte-xllbll"), z(s, "class", "text-grey-500 text-sm svelte-xllbll"), z(r, "class", "mb-2 flex flex-row justify-between items-baseline svelte-xllbll"), z(p, "class", "svelte-xllbll"), z(t, "class", "rounded-md py-2 px-4 text-justify text-base block w-3/4 my-2 svelte-xllbll"), ie(
        t,
        "bg-sky-200",
        /*message*/
        e[12].role == "user"
      ), ie(
        t,
        "place-self-end",
        /*message*/
        e[12].role == "user"
      ), ie(
        t,
        "bg-lime-200",
        /*message*/
        e[12].role == "assistant"
      ), ie(
        t,
        "place-self-start",
        /*message*/
        e[12].role == "assistant"
      );
    },
    m(E, R) {
      te(E, t, R), q(t, r), q(r, n), T.m(n, null), q(r, i), q(r, s), q(s, l), q(t, g), q(t, p), q(p, y);
    },
    p(E, R) {
      A !== (A = S(E)) && (T.d(1), T = A(E), T && (T.c(), T.m(n, null))), R & /*$timeAgo, chat*/
      68 && f !== (f = /*$timeAgo*/
      E[6](
        /*message*/
        E[12].timestamp
      ) + "") && Qe(l, f), R & /*chat*/
      4 && I !== (I = /*message*/
      E[12].content + "") && Qe(y, I), R & /*chat*/
      4 && ie(
        t,
        "bg-sky-200",
        /*message*/
        E[12].role == "user"
      ), R & /*chat*/
      4 && ie(
        t,
        "place-self-end",
        /*message*/
        E[12].role == "user"
      ), R & /*chat*/
      4 && ie(
        t,
        "bg-lime-200",
        /*message*/
        E[12].role == "assistant"
      ), R & /*chat*/
      4 && ie(
        t,
        "place-self-start",
        /*message*/
        E[12].role == "assistant"
      );
    },
    d(E) {
      E && Z(t), T.d();
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
      te(r, t, n);
    },
    d(r) {
      r && Z(t);
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
      te(r, t, n);
    },
    d(r) {
      r && Z(t);
    }
  };
}
function Qr(e) {
  let t, r = (
    /*message*/
    e[12].role != "system" && Jr(e)
  );
  return {
    c() {
      r && r.c(), t = hi();
    },
    m(n, i) {
      r && r.m(n, i), te(n, t, i);
    },
    p(n, i) {
      /*message*/
      n[12].role != "system" ? r ? r.p(n, i) : (r = Jr(n), r.c(), r.m(t.parentNode, t)) : r && (r.d(1), r = null);
    },
    d(n) {
      n && Z(t), r && r.d(n);
    }
  };
}
function Es(e) {
  let t, r, n, i, s, f, l = (
    /*status*/
    (e[0] ? (
      /*$status*/
      e[5].icon
    ) : "") + ""
  ), g, p, I, y, S, A, T, E, R, W, U, re = (
    /*status*/
    (e[0] ? (
      /*$status*/
      e[5].icon
    ) : "") + ""
  ), Q, x, M, D, b, P, C, j, N = (
    /*model*/
    e[1] && /*chat*/
    e[2] && Gr(e)
  );
  return {
    c() {
      t = V("button"), r = V("span"), r.textContent = "✨", n = ae(), i = V("span"), i.textContent = "Need Help?", s = ae(), f = V("span"), g = me(l), I = ae(), y = V("content"), S = V("div"), A = V("div"), T = ae(), E = V("div"), R = V("span"), R.textContent = "✨ HPC Assistant", W = ae(), U = V("span"), Q = me(re), M = ae(), D = V("div"), b = V("button"), b.textContent = "✖", P = ae(), N && N.c(), z(r, "title", "Try our AI Assistant"), z(r, "class", "svelte-xllbll"), z(i, "class", "px-1 svelte-xllbll"), z(f, "title", p = /*status*/
      e[0] ? (
        /*$status*/
        e[5].description
      ) : ""), z(f, "class", "svelte-xllbll"), z(t, "class", "absolute bottom-2 right-2 py-2 px-4 bg-violet-600 font-bold text-lg text-white rounded-lg svelte-xllbll"), ie(
        t,
        "hidden",
        /*chatBotOpen*/
        e[4]
      ), z(A, "class", "svelte-xllbll"), z(R, "class", "svelte-xllbll"), z(U, "title", x = /*status*/
      e[0] ? (
        /*$status*/
        e[5].description
      ) : ""), z(U, "class", "svelte-xllbll"), z(E, "class", "svelte-xllbll"), z(b, "title", "Minify the assistant"), z(b, "class", "svelte-xllbll"), z(D, "class", "svelte-xllbll"), z(S, "class", "mb-4 font-bold text-xl flex flex-row items-stretch justify-between svelte-xllbll"), z(y, "class", "absolute bottom-2 right-2 py-2 px-4 bg-white text-base rounded-md flex flex-col items-stretch svelte-xllbll"), ie(y, "hidden", !/*chatBotOpen*/
      e[4]);
    },
    m(B, G) {
      te(B, t, G), q(t, r), q(t, n), q(t, i), q(t, s), q(t, f), q(f, g), te(B, I, G), te(B, y, G), q(y, S), q(S, A), q(S, T), q(S, E), q(E, R), q(E, W), q(E, U), q(U, Q), q(S, M), q(S, D), q(D, b), q(y, P), N && N.m(y, null), C || (j = [
        Je(
          t,
          "click",
          /*click_handler*/
          e[8]
        ),
        Je(
          b,
          "click",
          /*click_handler_1*/
          e[9]
        )
      ], C = !0);
    },
    p(B, [G]) {
      G & /*status, $status*/
      33 && l !== (l = /*status*/
      (B[0] ? (
        /*$status*/
        B[5].icon
      ) : "") + "") && Qe(g, l), G & /*status, $status*/
      33 && p !== (p = /*status*/
      B[0] ? (
        /*$status*/
        B[5].description
      ) : "") && z(f, "title", p), G & /*chatBotOpen*/
      16 && ie(
        t,
        "hidden",
        /*chatBotOpen*/
        B[4]
      ), G & /*status, $status*/
      33 && re !== (re = /*status*/
      (B[0] ? (
        /*$status*/
        B[5].icon
      ) : "") + "") && Qe(Q, re), G & /*status, $status*/
      33 && x !== (x = /*status*/
      B[0] ? (
        /*$status*/
        B[5].description
      ) : "") && z(U, "title", x), /*model*/
      B[1] && /*chat*/
      B[2] ? N ? N.p(B, G) : (N = Gr(B), N.c(), N.m(y, null)) : N && (N.d(1), N = null), G & /*chatBotOpen*/
      16 && ie(y, "hidden", !/*chatBotOpen*/
      B[4]);
    },
    i: le,
    o: le,
    d(B) {
      B && (Z(t), Z(I), Z(y)), N && N.d(), C = !1, ke(j);
    }
  };
}
function Is(e, t, r) {
  let n, i = le, s = () => (i(), i = kt(g, (W) => r(5, n = W)), g), f;
  ui(e, Os, (W) => r(6, f = W)), e.$$.on_destroy.push(() => i());
  let l, g, p, I;
  vi(async () => {
    const W = `${window.location.protocol}//${window.location.hostname}:${window.location.port}`;
    l = new Bi(W), s(r(0, g = l.status)), r(1, p = await l.getBestModel(dr.modelList)), p && (await l.preloadModel(p), r(2, I = new ea(() => r(2, I), l)), I.addMessage(dr.systemPrompt));
  });
  let y, S = !1;
  async function A() {
    I.addMessage({ role: "user", content: y }), r(3, y = ""), await I.complete(p);
  }
  const T = () => r(4, S = !0), E = () => r(4, S = !1);
  function R() {
    y = this.value, r(3, y);
  }
  return [
    g,
    p,
    I,
    y,
    S,
    n,
    f,
    A,
    T,
    E,
    R
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
