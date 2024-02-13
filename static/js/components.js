var ai = Object.defineProperty;
var si = (e, t, r) => t in e ? ai(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var fe = (e, t, r) => (si(e, typeof t != "symbol" ? t + "" : t, r), r);
function le() {
}
function rn(e) {
  return e();
}
function ar() {
  return /* @__PURE__ */ Object.create(null);
}
function Be(e) {
  e.forEach(rn);
}
function nn(e) {
  return typeof e == "function";
}
function on(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function ui(e) {
  return Object.keys(e).length === 0;
}
function Dt(e, ...t) {
  if (e == null) {
    for (const n of t)
      n(void 0);
    return le;
  }
  const r = e.subscribe(...t);
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
function fi(e) {
  let t;
  return Dt(e, (r) => t = r)(), t;
}
function ci(e, t, r) {
  e.$$.on_destroy.push(Dt(t, r));
}
function H(e, t) {
  e.appendChild(t);
}
function li(e, t, r) {
  const n = di(e);
  if (!n.getElementById(t)) {
    const o = X("style");
    o.id = t, o.textContent = r, hi(n, o);
  }
}
function di(e) {
  if (!e)
    return document;
  const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
  return t && /** @type {ShadowRoot} */
  t.host ? (
    /** @type {ShadowRoot} */
    t
  ) : e.ownerDocument;
}
function hi(e, t) {
  return H(
    /** @type {Document} */
    e.head || e,
    t
  ), t.sheet;
}
function se(e, t, r) {
  e.insertBefore(t, r || null);
}
function ie(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function pi(e, t) {
  for (let r = 0; r < e.length; r += 1)
    e[r] && e[r].d(t);
}
function X(e) {
  return document.createElement(e);
}
function we(e) {
  return document.createTextNode(e);
}
function ce() {
  return we(" ");
}
function an() {
  return we("");
}
function ze(e, t, r, n) {
  return e.addEventListener(t, r, n), () => e.removeEventListener(t, r, n);
}
function mi(e) {
  return function(t) {
    return t.preventDefault(), e.call(this, t);
  };
}
function M(e, t, r) {
  r == null ? e.removeAttribute(t) : e.getAttribute(t) !== r && e.setAttribute(t, r);
}
function bi(e) {
  return Array.from(e.childNodes);
}
function tt(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
function sr(e, t) {
  e.value = t ?? "";
}
function ne(e, t, r) {
  e.classList.toggle(t, !!r);
}
function vi(e) {
  const t = {};
  return e.childNodes.forEach(
    /** @param {Element} node */
    (r) => {
      t[r.slot || "default"] = !0;
    }
  ), t;
}
let Ye;
function Me(e) {
  Ye = e;
}
function yi() {
  if (!Ye)
    throw new Error("Function called outside component initialization");
  return Ye;
}
function gi(e) {
  yi().$$.on_mount.push(e);
}
const Le = [], ur = [];
let Re = [];
const fr = [], wi = /* @__PURE__ */ Promise.resolve();
let yt = !1;
function _i() {
  yt || (yt = !0, wi.then(sn));
}
function gt(e) {
  Re.push(e);
}
const bt = /* @__PURE__ */ new Set();
let Te = 0;
function sn() {
  if (Te !== 0)
    return;
  const e = Ye;
  do {
    try {
      for (; Te < Le.length; ) {
        const t = Le[Te];
        Te++, Me(t), Si(t.$$);
      }
    } catch (t) {
      throw Le.length = 0, Te = 0, t;
    }
    for (Me(null), Le.length = 0, Te = 0; ur.length; )
      ur.pop()();
    for (let t = 0; t < Re.length; t += 1) {
      const r = Re[t];
      bt.has(r) || (bt.add(r), r());
    }
    Re.length = 0;
  } while (Le.length);
  for (; fr.length; )
    fr.pop()();
  yt = !1, bt.clear(), Me(e);
}
function Si(e) {
  if (e.fragment !== null) {
    e.update(), Be(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(gt);
  }
}
function Oi(e) {
  const t = [], r = [];
  Re.forEach((n) => e.indexOf(n) === -1 ? t.push(n) : r.push(n)), r.forEach((n) => n()), Re = t;
}
const $i = /* @__PURE__ */ new Set();
function Ai(e, t) {
  e && e.i && ($i.delete(e), e.i(t));
}
function cr(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function Ei(e, t, r) {
  const { fragment: n, after_update: o } = e.$$;
  n && n.m(t, r), gt(() => {
    const s = e.$$.on_mount.map(rn).filter(nn);
    e.$$.on_destroy ? e.$$.on_destroy.push(...s) : Be(s), e.$$.on_mount = [];
  }), o.forEach(gt);
}
function Ii(e, t) {
  const r = e.$$;
  r.fragment !== null && (Oi(r.after_update), Be(r.on_destroy), r.fragment && r.fragment.d(t), r.on_destroy = r.fragment = null, r.ctx = []);
}
function Ti(e, t) {
  e.$$.dirty[0] === -1 && (Le.push(e), _i(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function xi(e, t, r, n, o, s, u = null, c = [-1]) {
  const b = Ye;
  Me(e);
  const m = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: le,
    not_equal: o,
    bound: ar(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (b ? b.$$.context : [])),
    // everything else
    callbacks: ar(),
    dirty: c,
    skip_bound: !1,
    root: t.target || b.$$.root
  };
  u && u(m.root);
  let E = !1;
  if (m.ctx = r ? r(e, t.props || {}, (y, $, ...x) => {
    const k = x.length ? x[0] : $;
    return m.ctx && o(m.ctx[y], m.ctx[y] = k) && (!m.skip_bound && m.bound[y] && m.bound[y](k), E && Ti(e, y)), $;
  }) : [], m.update(), E = !0, Be(m.before_update), m.fragment = n ? n(m.ctx) : !1, t.target) {
    if (t.hydrate) {
      const y = bi(t.target);
      m.fragment && m.fragment.l(y), y.forEach(ie);
    } else
      m.fragment && m.fragment.c();
    t.intro && Ai(e.$$.fragment), Ei(e, t.target, t.anchor), sn();
  }
  Me(b);
}
let un;
typeof HTMLElement == "function" && (un = class extends HTMLElement {
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
          let u;
          return {
            c: function() {
              u = X("slot"), s !== "default" && M(u, "name", s);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(m, E) {
              se(m, u, E);
            },
            d: function(m) {
              m && ie(u);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn)
        return;
      const r = {}, n = vi(this);
      for (const s of this.$$s)
        s in n && (r[s] = [t(s)]);
      for (const s of this.attributes) {
        const u = this.$$g_p(s.name);
        u in this.$$d || (this.$$d[u] = et(u, s.value, this.$$p_d, "toProp"));
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
            const u = et(
              s,
              this.$$d[s],
              this.$$p_d,
              "toAttribute"
            );
            u == null ? this.removeAttribute(this.$$p_d[s].attribute || s) : this.setAttribute(this.$$p_d[s].attribute || s, u);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(o), o();
      for (const s in this.$$l)
        for (const u of this.$$l[s]) {
          const c = this.$$c.$on(s, u);
          this.$$l_u.set(u, c);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(t, r, n) {
    var o;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = et(t, n, this.$$p_d, "toProp"), (o = this.$$c) == null || o.$set({ [t]: this.$$d[t] }));
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
function et(e, t, r, n) {
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
function ki(e, t, r, n, o, s) {
  let u = class extends un {
    constructor() {
      super(e, r, o), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Object.keys(t).map(
        (c) => (t[c].attribute || c).toLowerCase()
      );
    }
  };
  return Object.keys(t).forEach((c) => {
    Object.defineProperty(u.prototype, c, {
      get() {
        return this.$$c && c in this.$$c ? this.$$c[c] : this.$$d[c];
      },
      set(b) {
        var m;
        b = et(c, b, t), this.$$d[c] = b, (m = this.$$c) == null || m.$set({ [c]: b });
      }
    });
  }), n.forEach((c) => {
    Object.defineProperty(u.prototype, c, {
      get() {
        var b;
        return (b = this.$$c) == null ? void 0 : b[c];
      }
    });
  }), s && (u = s(u)), e.element = /** @type {any} */
  u, u;
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
    Ii(this, 1), this.$destroy = le;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, r) {
    if (!nn(r))
      return le;
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
    this.$$set && !ui(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const Pi = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Pi);
var Pe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ni(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Je(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var fn = { exports: {} };
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
      function u(m, E) {
        if (!o[m]) {
          if (!n[m]) {
            var y = typeof Je == "function" && Je;
            if (!E && y)
              return y(m, !0);
            if (c)
              return c(m, !0);
            var $ = new Error("Cannot find module '" + m + "'");
            throw $.code = "MODULE_NOT_FOUND", $;
          }
          var x = o[m] = { exports: {} };
          n[m][0].call(x.exports, function(k) {
            var R = n[m][1][k];
            return u(R || k);
          }, x, x.exports, r, n, o, s);
        }
        return o[m].exports;
      }
      for (var c = typeof Je == "function" && Je, b = 0; b < s.length; b++)
        u(s[b]);
      return u;
    }({ 1: [function(r, n, o) {
      (function(s) {
        var u = s.MutationObserver || s.WebKitMutationObserver, c;
        if (u) {
          var b = 0, m = new u(k), E = s.document.createTextNode("");
          m.observe(E, {
            characterData: !0
          }), c = function() {
            E.data = b = ++b % 2;
          };
        } else if (!s.setImmediate && typeof s.MessageChannel < "u") {
          var y = new s.MessageChannel();
          y.port1.onmessage = k, c = function() {
            y.port2.postMessage(0);
          };
        } else
          "document" in s && "onreadystatechange" in s.document.createElement("script") ? c = function() {
            var P = s.document.createElement("script");
            P.onreadystatechange = function() {
              k(), P.onreadystatechange = null, P.parentNode.removeChild(P), P = null;
            }, s.document.documentElement.appendChild(P);
          } : c = function() {
            setTimeout(k, 0);
          };
        var $, x = [];
        function k() {
          $ = !0;
          for (var P, C, Y = x.length; Y; ) {
            for (C = x, x = [], P = -1; ++P < Y; )
              C[P]();
            Y = x.length;
          }
          $ = !1;
        }
        n.exports = R;
        function R(P) {
          x.push(P) === 1 && !$ && c();
        }
      }).call(this, typeof Pe < "u" ? Pe : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 2: [function(r, n, o) {
      var s = r(1);
      function u() {
      }
      var c = {}, b = ["REJECTED"], m = ["FULFILLED"], E = ["PENDING"];
      n.exports = y;
      function y(A) {
        if (typeof A != "function")
          throw new TypeError("resolver must be a function");
        this.state = E, this.queue = [], this.outcome = void 0, A !== u && R(this, A);
      }
      y.prototype.catch = function(A) {
        return this.then(null, A);
      }, y.prototype.then = function(A, D) {
        if (typeof A != "function" && this.state === m || typeof D != "function" && this.state === b)
          return this;
        var N = new this.constructor(u);
        if (this.state !== E) {
          var g = this.state === m ? A : D;
          x(N, g, this.outcome);
        } else
          this.queue.push(new $(N, A, D));
        return N;
      };
      function $(A, D, N) {
        this.promise = A, typeof D == "function" && (this.onFulfilled = D, this.callFulfilled = this.otherCallFulfilled), typeof N == "function" && (this.onRejected = N, this.callRejected = this.otherCallRejected);
      }
      $.prototype.callFulfilled = function(A) {
        c.resolve(this.promise, A);
      }, $.prototype.otherCallFulfilled = function(A) {
        x(this.promise, this.onFulfilled, A);
      }, $.prototype.callRejected = function(A) {
        c.reject(this.promise, A);
      }, $.prototype.otherCallRejected = function(A) {
        x(this.promise, this.onRejected, A);
      };
      function x(A, D, N) {
        s(function() {
          var g;
          try {
            g = D(N);
          } catch (T) {
            return c.reject(A, T);
          }
          g === A ? c.reject(A, new TypeError("Cannot resolve promise with itself")) : c.resolve(A, g);
        });
      }
      c.resolve = function(A, D) {
        var N = P(k, D);
        if (N.status === "error")
          return c.reject(A, N.value);
        var g = N.value;
        if (g)
          R(A, g);
        else {
          A.state = m, A.outcome = D;
          for (var T = -1, z = A.queue.length; ++T < z; )
            A.queue[T].callFulfilled(D);
        }
        return A;
      }, c.reject = function(A, D) {
        A.state = b, A.outcome = D;
        for (var N = -1, g = A.queue.length; ++N < g; )
          A.queue[N].callRejected(D);
        return A;
      };
      function k(A) {
        var D = A && A.then;
        if (A && (typeof A == "object" || typeof A == "function") && typeof D == "function")
          return function() {
            D.apply(A, arguments);
          };
      }
      function R(A, D) {
        var N = !1;
        function g(F) {
          N || (N = !0, c.reject(A, F));
        }
        function T(F) {
          N || (N = !0, c.resolve(A, F));
        }
        function z() {
          D(T, g);
        }
        var B = P(z);
        B.status === "error" && g(B.value);
      }
      function P(A, D) {
        var N = {};
        try {
          N.value = A(D), N.status = "success";
        } catch (g) {
          N.status = "error", N.value = g;
        }
        return N;
      }
      y.resolve = C;
      function C(A) {
        return A instanceof this ? A : c.resolve(new this(u), A);
      }
      y.reject = Y;
      function Y(A) {
        var D = new this(u);
        return c.reject(D, A);
      }
      y.all = ae;
      function ae(A) {
        var D = this;
        if (Object.prototype.toString.call(A) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var N = A.length, g = !1;
        if (!N)
          return this.resolve([]);
        for (var T = new Array(N), z = 0, B = -1, F = new this(u); ++B < N; )
          K(A[B], B);
        return F;
        function K(de, pe) {
          D.resolve(de).then(me, function(ee) {
            g || (g = !0, c.reject(F, ee));
          });
          function me(ee) {
            T[pe] = ee, ++z === N && !g && (g = !0, c.resolve(F, T));
          }
        }
      }
      y.race = J;
      function J(A) {
        var D = this;
        if (Object.prototype.toString.call(A) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var N = A.length, g = !1;
        if (!N)
          return this.resolve([]);
        for (var T = -1, z = new this(u); ++T < N; )
          B(A[T]);
        return z;
        function B(F) {
          D.resolve(F).then(function(K) {
            g || (g = !0, c.resolve(z, K));
          }, function(K) {
            g || (g = !0, c.reject(z, K));
          });
        }
      }
    }, { 1: 1 }], 3: [function(r, n, o) {
      (function(s) {
        typeof s.Promise != "function" && (s.Promise = r(2));
      }).call(this, typeof Pe < "u" ? Pe : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, { 2: 2 }], 4: [function(r, n, o) {
      var s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(i) {
        return typeof i;
      } : function(i) {
        return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
      };
      function u(i, f) {
        if (!(i instanceof f))
          throw new TypeError("Cannot call a class as a function");
      }
      function c() {
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
      var b = c();
      function m() {
        try {
          if (!b || !b.open)
            return !1;
          var i = typeof openDatabase < "u" && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform), f = typeof fetch == "function" && fetch.toString().indexOf("[native code") !== -1;
          return (!i || f) && typeof indexedDB < "u" && // some outdated implementations of IDB that appear on Samsung
          // and HTC Android devices <4.4 are missing IDBKeyRange
          // See: https://github.com/mozilla/localForage/issues/128
          // See: https://github.com/mozilla/localForage/issues/272
          typeof IDBKeyRange < "u";
        } catch {
          return !1;
        }
      }
      function E(i, f) {
        i = i || [], f = f || {};
        try {
          return new Blob(i, f);
        } catch (l) {
          if (l.name !== "TypeError")
            throw l;
          for (var a = typeof BlobBuilder < "u" ? BlobBuilder : typeof MSBlobBuilder < "u" ? MSBlobBuilder : typeof MozBlobBuilder < "u" ? MozBlobBuilder : WebKitBlobBuilder, d = new a(), p = 0; p < i.length; p += 1)
            d.append(i[p]);
          return d.getBlob(f.type);
        }
      }
      typeof Promise > "u" && r(3);
      var y = Promise;
      function $(i, f) {
        f && i.then(function(a) {
          f(null, a);
        }, function(a) {
          f(a);
        });
      }
      function x(i, f, a) {
        typeof f == "function" && i.then(f), typeof a == "function" && i.catch(a);
      }
      function k(i) {
        return typeof i != "string" && (console.warn(i + " used as a key, but it is not a string."), i = String(i)), i;
      }
      function R() {
        if (arguments.length && typeof arguments[arguments.length - 1] == "function")
          return arguments[arguments.length - 1];
      }
      var P = "local-forage-detect-blob-support", C = void 0, Y = {}, ae = Object.prototype.toString, J = "readonly", A = "readwrite";
      function D(i) {
        for (var f = i.length, a = new ArrayBuffer(f), d = new Uint8Array(a), p = 0; p < f; p++)
          d[p] = i.charCodeAt(p);
        return a;
      }
      function N(i) {
        return new y(function(f) {
          var a = i.transaction(P, A), d = E([""]);
          a.objectStore(P).put(d, "key"), a.onabort = function(p) {
            p.preventDefault(), p.stopPropagation(), f(!1);
          }, a.oncomplete = function() {
            var p = navigator.userAgent.match(/Chrome\/(\d+)/), l = navigator.userAgent.match(/Edge\//);
            f(l || !p || parseInt(p[1], 10) >= 43);
          };
        }).catch(function() {
          return !1;
        });
      }
      function g(i) {
        return typeof C == "boolean" ? y.resolve(C) : N(i).then(function(f) {
          return C = f, C;
        });
      }
      function T(i) {
        var f = Y[i.name], a = {};
        a.promise = new y(function(d, p) {
          a.resolve = d, a.reject = p;
        }), f.deferredOperations.push(a), f.dbReady ? f.dbReady = f.dbReady.then(function() {
          return a.promise;
        }) : f.dbReady = a.promise;
      }
      function z(i) {
        var f = Y[i.name], a = f.deferredOperations.pop();
        if (a)
          return a.resolve(), a.promise;
      }
      function B(i, f) {
        var a = Y[i.name], d = a.deferredOperations.pop();
        if (d)
          return d.reject(f), d.promise;
      }
      function F(i, f) {
        return new y(function(a, d) {
          if (Y[i.name] = Y[i.name] || Ft(), i.db)
            if (f)
              T(i), i.db.close();
            else
              return a(i.db);
          var p = [i.name];
          f && p.push(i.version);
          var l = b.open.apply(b, p);
          f && (l.onupgradeneeded = function(v) {
            var w = l.result;
            try {
              w.createObjectStore(i.storeName), v.oldVersion <= 1 && w.createObjectStore(P);
            } catch (_) {
              if (_.name === "ConstraintError")
                console.warn('The database "' + i.name + '" has been upgraded from version ' + v.oldVersion + " to version " + v.newVersion + ', but the storage "' + i.storeName + '" already exists.');
              else
                throw _;
            }
          }), l.onerror = function(v) {
            v.preventDefault(), d(l.error);
          }, l.onsuccess = function() {
            var v = l.result;
            v.onversionchange = function(w) {
              w.target.close();
            }, a(v), z(i);
          };
        });
      }
      function K(i) {
        return F(i, !1);
      }
      function de(i) {
        return F(i, !0);
      }
      function pe(i, f) {
        if (!i.db)
          return !0;
        var a = !i.db.objectStoreNames.contains(i.storeName), d = i.version < i.db.version, p = i.version > i.db.version;
        if (d && (i.version !== f && console.warn('The database "' + i.name + `" can't be downgraded from version ` + i.db.version + " to version " + i.version + "."), i.version = i.db.version), p || a) {
          if (a) {
            var l = i.db.version + 1;
            l > i.version && (i.version = l);
          }
          return !0;
        }
        return !1;
      }
      function me(i) {
        return new y(function(f, a) {
          var d = new FileReader();
          d.onerror = a, d.onloadend = function(p) {
            var l = btoa(p.target.result || "");
            f({
              __local_forage_encoded_blob: !0,
              data: l,
              type: i.type
            });
          }, d.readAsBinaryString(i);
        });
      }
      function ee(i) {
        var f = D(atob(i.data));
        return E([f], { type: i.type });
      }
      function te(i) {
        return i && i.__local_forage_encoded_blob;
      }
      function re(i) {
        var f = this, a = f._initReady().then(function() {
          var d = Y[f._dbInfo.name];
          if (d && d.dbReady)
            return d.dbReady;
        });
        return x(a, i, i), a;
      }
      function U(i) {
        T(i);
        for (var f = Y[i.name], a = f.forages, d = 0; d < a.length; d++) {
          var p = a[d];
          p._dbInfo.db && (p._dbInfo.db.close(), p._dbInfo.db = null);
        }
        return i.db = null, K(i).then(function(l) {
          return i.db = l, pe(i) ? de(i) : l;
        }).then(function(l) {
          i.db = f.db = l;
          for (var v = 0; v < a.length; v++)
            a[v]._dbInfo.db = l;
        }).catch(function(l) {
          throw B(i, l), l;
        });
      }
      function V(i, f, a, d) {
        d === void 0 && (d = 1);
        try {
          var p = i.db.transaction(i.storeName, f);
          a(null, p);
        } catch (l) {
          if (d > 0 && (!i.db || l.name === "InvalidStateError" || l.name === "NotFoundError"))
            return y.resolve().then(function() {
              if (!i.db || l.name === "NotFoundError" && !i.db.objectStoreNames.contains(i.storeName) && i.version <= i.db.version)
                return i.db && (i.version = i.db.version + 1), de(i);
            }).then(function() {
              return U(i).then(function() {
                V(i, f, a, d - 1);
              });
            }).catch(a);
          a(l);
        }
      }
      function Ft() {
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
      function uo(i) {
        var f = this, a = {
          db: null
        };
        if (i)
          for (var d in i)
            a[d] = i[d];
        var p = Y[a.name];
        p || (p = Ft(), Y[a.name] = p), p.forages.push(f), f._initReady || (f._initReady = f.ready, f.ready = re);
        var l = [];
        function v() {
          return y.resolve();
        }
        for (var w = 0; w < p.forages.length; w++) {
          var _ = p.forages[w];
          _ !== f && l.push(_._initReady().catch(v));
        }
        var S = p.forages.slice(0);
        return y.all(l).then(function() {
          return a.db = p.db, K(a);
        }).then(function(O) {
          return a.db = O, pe(a, f._defaultConfig.version) ? de(a) : O;
        }).then(function(O) {
          a.db = p.db = O, f._dbInfo = a;
          for (var I = 0; I < S.length; I++) {
            var j = S[I];
            j !== f && (j._dbInfo.db = a.db, j._dbInfo.version = a.version);
          }
        });
      }
      function fo(i, f) {
        var a = this;
        i = k(i);
        var d = new y(function(p, l) {
          a.ready().then(function() {
            V(a._dbInfo, J, function(v, w) {
              if (v)
                return l(v);
              try {
                var _ = w.objectStore(a._dbInfo.storeName), S = _.get(i);
                S.onsuccess = function() {
                  var O = S.result;
                  O === void 0 && (O = null), te(O) && (O = ee(O)), p(O);
                }, S.onerror = function() {
                  l(S.error);
                };
              } catch (O) {
                l(O);
              }
            });
          }).catch(l);
        });
        return $(d, f), d;
      }
      function co(i, f) {
        var a = this, d = new y(function(p, l) {
          a.ready().then(function() {
            V(a._dbInfo, J, function(v, w) {
              if (v)
                return l(v);
              try {
                var _ = w.objectStore(a._dbInfo.storeName), S = _.openCursor(), O = 1;
                S.onsuccess = function() {
                  var I = S.result;
                  if (I) {
                    var j = I.value;
                    te(j) && (j = ee(j));
                    var q = i(j, I.key, O++);
                    q !== void 0 ? p(q) : I.continue();
                  } else
                    p();
                }, S.onerror = function() {
                  l(S.error);
                };
              } catch (I) {
                l(I);
              }
            });
          }).catch(l);
        });
        return $(d, f), d;
      }
      function lo(i, f, a) {
        var d = this;
        i = k(i);
        var p = new y(function(l, v) {
          var w;
          d.ready().then(function() {
            return w = d._dbInfo, ae.call(f) === "[object Blob]" ? g(w.db).then(function(_) {
              return _ ? f : me(f);
            }) : f;
          }).then(function(_) {
            V(d._dbInfo, A, function(S, O) {
              if (S)
                return v(S);
              try {
                var I = O.objectStore(d._dbInfo.storeName);
                _ === null && (_ = void 0);
                var j = I.put(_, i);
                O.oncomplete = function() {
                  _ === void 0 && (_ = null), l(_);
                }, O.onabort = O.onerror = function() {
                  var q = j.error ? j.error : j.transaction.error;
                  v(q);
                };
              } catch (q) {
                v(q);
              }
            });
          }).catch(v);
        });
        return $(p, a), p;
      }
      function ho(i, f) {
        var a = this;
        i = k(i);
        var d = new y(function(p, l) {
          a.ready().then(function() {
            V(a._dbInfo, A, function(v, w) {
              if (v)
                return l(v);
              try {
                var _ = w.objectStore(a._dbInfo.storeName), S = _.delete(i);
                w.oncomplete = function() {
                  p();
                }, w.onerror = function() {
                  l(S.error);
                }, w.onabort = function() {
                  var O = S.error ? S.error : S.transaction.error;
                  l(O);
                };
              } catch (O) {
                l(O);
              }
            });
          }).catch(l);
        });
        return $(d, f), d;
      }
      function po(i) {
        var f = this, a = new y(function(d, p) {
          f.ready().then(function() {
            V(f._dbInfo, A, function(l, v) {
              if (l)
                return p(l);
              try {
                var w = v.objectStore(f._dbInfo.storeName), _ = w.clear();
                v.oncomplete = function() {
                  d();
                }, v.onabort = v.onerror = function() {
                  var S = _.error ? _.error : _.transaction.error;
                  p(S);
                };
              } catch (S) {
                p(S);
              }
            });
          }).catch(p);
        });
        return $(a, i), a;
      }
      function mo(i) {
        var f = this, a = new y(function(d, p) {
          f.ready().then(function() {
            V(f._dbInfo, J, function(l, v) {
              if (l)
                return p(l);
              try {
                var w = v.objectStore(f._dbInfo.storeName), _ = w.count();
                _.onsuccess = function() {
                  d(_.result);
                }, _.onerror = function() {
                  p(_.error);
                };
              } catch (S) {
                p(S);
              }
            });
          }).catch(p);
        });
        return $(a, i), a;
      }
      function bo(i, f) {
        var a = this, d = new y(function(p, l) {
          if (i < 0) {
            p(null);
            return;
          }
          a.ready().then(function() {
            V(a._dbInfo, J, function(v, w) {
              if (v)
                return l(v);
              try {
                var _ = w.objectStore(a._dbInfo.storeName), S = !1, O = _.openKeyCursor();
                O.onsuccess = function() {
                  var I = O.result;
                  if (!I) {
                    p(null);
                    return;
                  }
                  i === 0 || S ? p(I.key) : (S = !0, I.advance(i));
                }, O.onerror = function() {
                  l(O.error);
                };
              } catch (I) {
                l(I);
              }
            });
          }).catch(l);
        });
        return $(d, f), d;
      }
      function vo(i) {
        var f = this, a = new y(function(d, p) {
          f.ready().then(function() {
            V(f._dbInfo, J, function(l, v) {
              if (l)
                return p(l);
              try {
                var w = v.objectStore(f._dbInfo.storeName), _ = w.openKeyCursor(), S = [];
                _.onsuccess = function() {
                  var O = _.result;
                  if (!O) {
                    d(S);
                    return;
                  }
                  S.push(O.key), O.continue();
                }, _.onerror = function() {
                  p(_.error);
                };
              } catch (O) {
                p(O);
              }
            });
          }).catch(p);
        });
        return $(a, i), a;
      }
      function yo(i, f) {
        f = R.apply(this, arguments);
        var a = this.config();
        i = typeof i != "function" && i || {}, i.name || (i.name = i.name || a.name, i.storeName = i.storeName || a.storeName);
        var d = this, p;
        if (!i.name)
          p = y.reject("Invalid arguments");
        else {
          var l = i.name === a.name && d._dbInfo.db, v = l ? y.resolve(d._dbInfo.db) : K(i).then(function(w) {
            var _ = Y[i.name], S = _.forages;
            _.db = w;
            for (var O = 0; O < S.length; O++)
              S[O]._dbInfo.db = w;
            return w;
          });
          i.storeName ? p = v.then(function(w) {
            if (w.objectStoreNames.contains(i.storeName)) {
              var _ = w.version + 1;
              T(i);
              var S = Y[i.name], O = S.forages;
              w.close();
              for (var I = 0; I < O.length; I++) {
                var j = O[I];
                j._dbInfo.db = null, j._dbInfo.version = _;
              }
              var q = new y(function(W, Z) {
                var Q = b.open(i.name, _);
                Q.onerror = function(ue) {
                  var Ce = Q.result;
                  Ce.close(), Z(ue);
                }, Q.onupgradeneeded = function() {
                  var ue = Q.result;
                  ue.deleteObjectStore(i.storeName);
                }, Q.onsuccess = function() {
                  var ue = Q.result;
                  ue.close(), W(ue);
                };
              });
              return q.then(function(W) {
                S.db = W;
                for (var Z = 0; Z < O.length; Z++) {
                  var Q = O[Z];
                  Q._dbInfo.db = W, z(Q._dbInfo);
                }
              }).catch(function(W) {
                throw (B(i, W) || y.resolve()).catch(function() {
                }), W;
              });
            }
          }) : p = v.then(function(w) {
            T(i);
            var _ = Y[i.name], S = _.forages;
            w.close();
            for (var O = 0; O < S.length; O++) {
              var I = S[O];
              I._dbInfo.db = null;
            }
            var j = new y(function(q, W) {
              var Z = b.deleteDatabase(i.name);
              Z.onerror = function() {
                var Q = Z.result;
                Q && Q.close(), W(Z.error);
              }, Z.onblocked = function() {
                console.warn('dropInstance blocked for database "' + i.name + '" until all open connections are closed');
              }, Z.onsuccess = function() {
                var Q = Z.result;
                Q && Q.close(), q(Q);
              };
            });
            return j.then(function(q) {
              _.db = q;
              for (var W = 0; W < S.length; W++) {
                var Z = S[W];
                z(Z._dbInfo);
              }
            }).catch(function(q) {
              throw (B(i, q) || y.resolve()).catch(function() {
              }), q;
            });
          });
        }
        return $(p, f), p;
      }
      var go = {
        _driver: "asyncStorage",
        _initStorage: uo,
        _support: m(),
        iterate: co,
        getItem: fo,
        setItem: lo,
        removeItem: ho,
        clear: po,
        length: mo,
        key: bo,
        keys: vo,
        dropInstance: yo
      };
      function wo() {
        return typeof openDatabase == "function";
      }
      var ye = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", _o = "~~local_forage_type~", Mt = /^~~local_forage_type~([^~]+)~/, Xe = "__lfsc__:", st = Xe.length, ut = "arbf", ft = "blob", Ut = "si08", Ht = "ui08", Yt = "uic8", qt = "si16", Wt = "si32", Kt = "ur16", Vt = "ui32", Xt = "fl32", Gt = "fl64", Jt = st + ut.length, Qt = Object.prototype.toString;
      function Zt(i) {
        var f = i.length * 0.75, a = i.length, d, p = 0, l, v, w, _;
        i[i.length - 1] === "=" && (f--, i[i.length - 2] === "=" && f--);
        var S = new ArrayBuffer(f), O = new Uint8Array(S);
        for (d = 0; d < a; d += 4)
          l = ye.indexOf(i[d]), v = ye.indexOf(i[d + 1]), w = ye.indexOf(i[d + 2]), _ = ye.indexOf(i[d + 3]), O[p++] = l << 2 | v >> 4, O[p++] = (v & 15) << 4 | w >> 2, O[p++] = (w & 3) << 6 | _ & 63;
        return S;
      }
      function ct(i) {
        var f = new Uint8Array(i), a = "", d;
        for (d = 0; d < f.length; d += 3)
          a += ye[f[d] >> 2], a += ye[(f[d] & 3) << 4 | f[d + 1] >> 4], a += ye[(f[d + 1] & 15) << 2 | f[d + 2] >> 6], a += ye[f[d + 2] & 63];
        return f.length % 3 === 2 ? a = a.substring(0, a.length - 1) + "=" : f.length % 3 === 1 && (a = a.substring(0, a.length - 2) + "=="), a;
      }
      function So(i, f) {
        var a = "";
        if (i && (a = Qt.call(i)), i && (a === "[object ArrayBuffer]" || i.buffer && Qt.call(i.buffer) === "[object ArrayBuffer]")) {
          var d, p = Xe;
          i instanceof ArrayBuffer ? (d = i, p += ut) : (d = i.buffer, a === "[object Int8Array]" ? p += Ut : a === "[object Uint8Array]" ? p += Ht : a === "[object Uint8ClampedArray]" ? p += Yt : a === "[object Int16Array]" ? p += qt : a === "[object Uint16Array]" ? p += Kt : a === "[object Int32Array]" ? p += Wt : a === "[object Uint32Array]" ? p += Vt : a === "[object Float32Array]" ? p += Xt : a === "[object Float64Array]" ? p += Gt : f(new Error("Failed to get type for BinaryArray"))), f(p + ct(d));
        } else if (a === "[object Blob]") {
          var l = new FileReader();
          l.onload = function() {
            var v = _o + i.type + "~" + ct(this.result);
            f(Xe + ft + v);
          }, l.readAsArrayBuffer(i);
        } else
          try {
            f(JSON.stringify(i));
          } catch (v) {
            console.error("Couldn't convert value into a JSON string: ", i), f(null, v);
          }
      }
      function Oo(i) {
        if (i.substring(0, st) !== Xe)
          return JSON.parse(i);
        var f = i.substring(Jt), a = i.substring(st, Jt), d;
        if (a === ft && Mt.test(f)) {
          var p = f.match(Mt);
          d = p[1], f = f.substring(p[0].length);
        }
        var l = Zt(f);
        switch (a) {
          case ut:
            return l;
          case ft:
            return E([l], { type: d });
          case Ut:
            return new Int8Array(l);
          case Ht:
            return new Uint8Array(l);
          case Yt:
            return new Uint8ClampedArray(l);
          case qt:
            return new Int16Array(l);
          case Kt:
            return new Uint16Array(l);
          case Wt:
            return new Int32Array(l);
          case Vt:
            return new Uint32Array(l);
          case Xt:
            return new Float32Array(l);
          case Gt:
            return new Float64Array(l);
          default:
            throw new Error("Unkown type: " + a);
        }
      }
      var lt = {
        serialize: So,
        deserialize: Oo,
        stringToBuffer: Zt,
        bufferToString: ct
      };
      function er(i, f, a, d) {
        i.executeSql("CREATE TABLE IF NOT EXISTS " + f.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], a, d);
      }
      function $o(i) {
        var f = this, a = {
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
            er(w, a, function() {
              f._dbInfo = a, l();
            }, function(_, S) {
              v(S);
            });
          }, v);
        });
        return a.serializer = lt, p;
      }
      function ge(i, f, a, d, p, l) {
        i.executeSql(a, d, p, function(v, w) {
          w.code === w.SYNTAX_ERR ? v.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [f.storeName], function(_, S) {
            S.rows.length ? l(_, w) : er(_, f, function() {
              _.executeSql(a, d, p, l);
            }, l);
          }, l) : l(v, w);
        }, l);
      }
      function Ao(i, f) {
        var a = this;
        i = k(i);
        var d = new y(function(p, l) {
          a.ready().then(function() {
            var v = a._dbInfo;
            v.db.transaction(function(w) {
              ge(w, v, "SELECT * FROM " + v.storeName + " WHERE key = ? LIMIT 1", [i], function(_, S) {
                var O = S.rows.length ? S.rows.item(0).value : null;
                O && (O = v.serializer.deserialize(O)), p(O);
              }, function(_, S) {
                l(S);
              });
            });
          }).catch(l);
        });
        return $(d, f), d;
      }
      function Eo(i, f) {
        var a = this, d = new y(function(p, l) {
          a.ready().then(function() {
            var v = a._dbInfo;
            v.db.transaction(function(w) {
              ge(w, v, "SELECT * FROM " + v.storeName, [], function(_, S) {
                for (var O = S.rows, I = O.length, j = 0; j < I; j++) {
                  var q = O.item(j), W = q.value;
                  if (W && (W = v.serializer.deserialize(W)), W = i(W, q.key, j + 1), W !== void 0) {
                    p(W);
                    return;
                  }
                }
                p();
              }, function(_, S) {
                l(S);
              });
            });
          }).catch(l);
        });
        return $(d, f), d;
      }
      function tr(i, f, a, d) {
        var p = this;
        i = k(i);
        var l = new y(function(v, w) {
          p.ready().then(function() {
            f === void 0 && (f = null);
            var _ = f, S = p._dbInfo;
            S.serializer.serialize(f, function(O, I) {
              I ? w(I) : S.db.transaction(function(j) {
                ge(j, S, "INSERT OR REPLACE INTO " + S.storeName + " (key, value) VALUES (?, ?)", [i, O], function() {
                  v(_);
                }, function(q, W) {
                  w(W);
                });
              }, function(j) {
                if (j.code === j.QUOTA_ERR) {
                  if (d > 0) {
                    v(tr.apply(p, [i, _, a, d - 1]));
                    return;
                  }
                  w(j);
                }
              });
            });
          }).catch(w);
        });
        return $(l, a), l;
      }
      function Io(i, f, a) {
        return tr.apply(this, [i, f, a, 1]);
      }
      function To(i, f) {
        var a = this;
        i = k(i);
        var d = new y(function(p, l) {
          a.ready().then(function() {
            var v = a._dbInfo;
            v.db.transaction(function(w) {
              ge(w, v, "DELETE FROM " + v.storeName + " WHERE key = ?", [i], function() {
                p();
              }, function(_, S) {
                l(S);
              });
            });
          }).catch(l);
        });
        return $(d, f), d;
      }
      function xo(i) {
        var f = this, a = new y(function(d, p) {
          f.ready().then(function() {
            var l = f._dbInfo;
            l.db.transaction(function(v) {
              ge(v, l, "DELETE FROM " + l.storeName, [], function() {
                d();
              }, function(w, _) {
                p(_);
              });
            });
          }).catch(p);
        });
        return $(a, i), a;
      }
      function ko(i) {
        var f = this, a = new y(function(d, p) {
          f.ready().then(function() {
            var l = f._dbInfo;
            l.db.transaction(function(v) {
              ge(v, l, "SELECT COUNT(key) as c FROM " + l.storeName, [], function(w, _) {
                var S = _.rows.item(0).c;
                d(S);
              }, function(w, _) {
                p(_);
              });
            });
          }).catch(p);
        });
        return $(a, i), a;
      }
      function Lo(i, f) {
        var a = this, d = new y(function(p, l) {
          a.ready().then(function() {
            var v = a._dbInfo;
            v.db.transaction(function(w) {
              ge(w, v, "SELECT key FROM " + v.storeName + " WHERE id = ? LIMIT 1", [i + 1], function(_, S) {
                var O = S.rows.length ? S.rows.item(0).key : null;
                p(O);
              }, function(_, S) {
                l(S);
              });
            });
          }).catch(l);
        });
        return $(d, f), d;
      }
      function Po(i) {
        var f = this, a = new y(function(d, p) {
          f.ready().then(function() {
            var l = f._dbInfo;
            l.db.transaction(function(v) {
              ge(v, l, "SELECT key FROM " + l.storeName, [], function(w, _) {
                for (var S = [], O = 0; O < _.rows.length; O++)
                  S.push(_.rows.item(O).key);
                d(S);
              }, function(w, _) {
                p(_);
              });
            });
          }).catch(p);
        });
        return $(a, i), a;
      }
      function No(i) {
        return new y(function(f, a) {
          i.transaction(function(d) {
            d.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(p, l) {
              for (var v = [], w = 0; w < l.rows.length; w++)
                v.push(l.rows.item(w).name);
              f({
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
      function Ro(i, f) {
        f = R.apply(this, arguments);
        var a = this.config();
        i = typeof i != "function" && i || {}, i.name || (i.name = i.name || a.name, i.storeName = i.storeName || a.storeName);
        var d = this, p;
        return i.name ? p = new y(function(l) {
          var v;
          i.name === a.name ? v = d._dbInfo.db : v = openDatabase(i.name, "", "", 0), i.storeName ? l({
            db: v,
            storeNames: [i.storeName]
          }) : l(No(v));
        }).then(function(l) {
          return new y(function(v, w) {
            l.db.transaction(function(_) {
              function S(q) {
                return new y(function(W, Z) {
                  _.executeSql("DROP TABLE IF EXISTS " + q, [], function() {
                    W();
                  }, function(Q, ue) {
                    Z(ue);
                  });
                });
              }
              for (var O = [], I = 0, j = l.storeNames.length; I < j; I++)
                O.push(S(l.storeNames[I]));
              y.all(O).then(function() {
                v();
              }).catch(function(q) {
                w(q);
              });
            }, function(_) {
              w(_);
            });
          });
        }) : p = y.reject("Invalid arguments"), $(p, f), p;
      }
      var Do = {
        _driver: "webSQLStorage",
        _initStorage: $o,
        _support: wo(),
        iterate: Eo,
        getItem: Ao,
        setItem: Io,
        removeItem: To,
        clear: xo,
        length: ko,
        key: Lo,
        keys: Po,
        dropInstance: Ro
      };
      function zo() {
        try {
          return typeof localStorage < "u" && "setItem" in localStorage && // in IE8 typeof localStorage.setItem === 'object'
          !!localStorage.setItem;
        } catch {
          return !1;
        }
      }
      function rr(i, f) {
        var a = i.name + "/";
        return i.storeName !== f.storeName && (a += i.storeName + "/"), a;
      }
      function Bo() {
        var i = "_localforage_support_test";
        try {
          return localStorage.setItem(i, !0), localStorage.removeItem(i), !1;
        } catch {
          return !0;
        }
      }
      function jo() {
        return !Bo() || localStorage.length > 0;
      }
      function Co(i) {
        var f = this, a = {};
        if (i)
          for (var d in i)
            a[d] = i[d];
        return a.keyPrefix = rr(i, f._defaultConfig), jo() ? (f._dbInfo = a, a.serializer = lt, y.resolve()) : y.reject();
      }
      function Fo(i) {
        var f = this, a = f.ready().then(function() {
          for (var d = f._dbInfo.keyPrefix, p = localStorage.length - 1; p >= 0; p--) {
            var l = localStorage.key(p);
            l.indexOf(d) === 0 && localStorage.removeItem(l);
          }
        });
        return $(a, i), a;
      }
      function Mo(i, f) {
        var a = this;
        i = k(i);
        var d = a.ready().then(function() {
          var p = a._dbInfo, l = localStorage.getItem(p.keyPrefix + i);
          return l && (l = p.serializer.deserialize(l)), l;
        });
        return $(d, f), d;
      }
      function Uo(i, f) {
        var a = this, d = a.ready().then(function() {
          for (var p = a._dbInfo, l = p.keyPrefix, v = l.length, w = localStorage.length, _ = 1, S = 0; S < w; S++) {
            var O = localStorage.key(S);
            if (O.indexOf(l) === 0) {
              var I = localStorage.getItem(O);
              if (I && (I = p.serializer.deserialize(I)), I = i(I, O.substring(v), _++), I !== void 0)
                return I;
            }
          }
        });
        return $(d, f), d;
      }
      function Ho(i, f) {
        var a = this, d = a.ready().then(function() {
          var p = a._dbInfo, l;
          try {
            l = localStorage.key(i);
          } catch {
            l = null;
          }
          return l && (l = l.substring(p.keyPrefix.length)), l;
        });
        return $(d, f), d;
      }
      function Yo(i) {
        var f = this, a = f.ready().then(function() {
          for (var d = f._dbInfo, p = localStorage.length, l = [], v = 0; v < p; v++) {
            var w = localStorage.key(v);
            w.indexOf(d.keyPrefix) === 0 && l.push(w.substring(d.keyPrefix.length));
          }
          return l;
        });
        return $(a, i), a;
      }
      function qo(i) {
        var f = this, a = f.keys().then(function(d) {
          return d.length;
        });
        return $(a, i), a;
      }
      function Wo(i, f) {
        var a = this;
        i = k(i);
        var d = a.ready().then(function() {
          var p = a._dbInfo;
          localStorage.removeItem(p.keyPrefix + i);
        });
        return $(d, f), d;
      }
      function Ko(i, f, a) {
        var d = this;
        i = k(i);
        var p = d.ready().then(function() {
          f === void 0 && (f = null);
          var l = f;
          return new y(function(v, w) {
            var _ = d._dbInfo;
            _.serializer.serialize(f, function(S, O) {
              if (O)
                w(O);
              else
                try {
                  localStorage.setItem(_.keyPrefix + i, S), v(l);
                } catch (I) {
                  (I.name === "QuotaExceededError" || I.name === "NS_ERROR_DOM_QUOTA_REACHED") && w(I), w(I);
                }
            });
          });
        });
        return $(p, a), p;
      }
      function Vo(i, f) {
        if (f = R.apply(this, arguments), i = typeof i != "function" && i || {}, !i.name) {
          var a = this.config();
          i.name = i.name || a.name, i.storeName = i.storeName || a.storeName;
        }
        var d = this, p;
        return i.name ? p = new y(function(l) {
          i.storeName ? l(rr(i, d._defaultConfig)) : l(i.name + "/");
        }).then(function(l) {
          for (var v = localStorage.length - 1; v >= 0; v--) {
            var w = localStorage.key(v);
            w.indexOf(l) === 0 && localStorage.removeItem(w);
          }
        }) : p = y.reject("Invalid arguments"), $(p, f), p;
      }
      var Xo = {
        _driver: "localStorageWrapper",
        _initStorage: Co,
        _support: zo(),
        iterate: Uo,
        getItem: Mo,
        setItem: Ko,
        removeItem: Wo,
        clear: Fo,
        length: qo,
        key: Ho,
        keys: Yo,
        dropInstance: Vo
      }, Go = function(f, a) {
        return f === a || typeof f == "number" && typeof a == "number" && isNaN(f) && isNaN(a);
      }, Jo = function(f, a) {
        for (var d = f.length, p = 0; p < d; ) {
          if (Go(f[p], a))
            return !0;
          p++;
        }
        return !1;
      }, nr = Array.isArray || function(i) {
        return Object.prototype.toString.call(i) === "[object Array]";
      }, je = {}, or = {}, Ie = {
        INDEXEDDB: go,
        WEBSQL: Do,
        LOCALSTORAGE: Xo
      }, Qo = [Ie.INDEXEDDB._driver, Ie.WEBSQL._driver, Ie.LOCALSTORAGE._driver], Ge = ["dropInstance"], dt = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(Ge), Zo = {
        description: "",
        driver: Qo.slice(),
        name: "localforage",
        // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
        // we can use without a prompt.
        size: 4980736,
        storeName: "keyvaluepairs",
        version: 1
      };
      function ei(i, f) {
        i[f] = function() {
          var a = arguments;
          return i.ready().then(function() {
            return i[f].apply(i, a);
          });
        };
      }
      function ht() {
        for (var i = 1; i < arguments.length; i++) {
          var f = arguments[i];
          if (f)
            for (var a in f)
              f.hasOwnProperty(a) && (nr(f[a]) ? arguments[0][a] = f[a].slice() : arguments[0][a] = f[a]);
        }
        return arguments[0];
      }
      var ti = function() {
        function i(f) {
          u(this, i);
          for (var a in Ie)
            if (Ie.hasOwnProperty(a)) {
              var d = Ie[a], p = d._driver;
              this[a] = p, je[p] || this.defineDriver(d);
            }
          this._defaultConfig = ht({}, Zo), this._config = ht({}, this._defaultConfig, f), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch(function() {
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
              var _ = a._driver, S = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
              if (!a._driver) {
                w(S);
                return;
              }
              for (var O = dt.concat("_initStorage"), I = 0, j = O.length; I < j; I++) {
                var q = O[I], W = !Jo(Ge, q);
                if ((W || a[q]) && typeof a[q] != "function") {
                  w(S);
                  return;
                }
              }
              var Z = function() {
                for (var Ce = function(oi) {
                  return function() {
                    var ii = new Error("Method " + oi + " is not implemented by the current driver"), ir = y.reject(ii);
                    return $(ir, arguments[arguments.length - 1]), ir;
                  };
                }, pt = 0, ni = Ge.length; pt < ni; pt++) {
                  var mt = Ge[pt];
                  a[mt] || (a[mt] = Ce(mt));
                }
              };
              Z();
              var Q = function(Ce) {
                je[_] && console.info("Redefining LocalForage driver: " + _), je[_] = a, or[_] = Ce, v();
              };
              "_support" in a ? a._support && typeof a._support == "function" ? a._support().then(Q, w) : Q(!!a._support) : Q(!0);
            } catch (ue) {
              w(ue);
            }
          });
          return x(l, d, p), l;
        }, i.prototype.driver = function() {
          return this._driver || null;
        }, i.prototype.getDriver = function(a, d, p) {
          var l = je[a] ? y.resolve(je[a]) : y.reject(new Error("Driver not found."));
          return x(l, d, p), l;
        }, i.prototype.getSerializer = function(a) {
          var d = y.resolve(lt);
          return x(d, a), d;
        }, i.prototype.ready = function(a) {
          var d = this, p = d._driverSet.then(function() {
            return d._ready === null && (d._ready = d._initDriver()), d._ready;
          });
          return x(p, a, a), p;
        }, i.prototype.setDriver = function(a, d, p) {
          var l = this;
          nr(a) || (a = [a]);
          var v = this._getSupportedDrivers(a);
          function w() {
            l._config.driver = l.driver();
          }
          function _(I) {
            return l._extend(I), w(), l._ready = l._initStorage(l._config), l._ready;
          }
          function S(I) {
            return function() {
              var j = 0;
              function q() {
                for (; j < I.length; ) {
                  var W = I[j];
                  return j++, l._dbInfo = null, l._ready = null, l.getDriver(W).then(_).catch(q);
                }
                w();
                var Z = new Error("No available storage method found.");
                return l._driverSet = y.reject(Z), l._driverSet;
              }
              return q();
            };
          }
          var O = this._driverSet !== null ? this._driverSet.catch(function() {
            return y.resolve();
          }) : y.resolve();
          return this._driverSet = O.then(function() {
            var I = v[0];
            return l._dbInfo = null, l._ready = null, l.getDriver(I).then(function(j) {
              l._driver = j._driver, w(), l._wrapLibraryMethodsWithReady(), l._initDriver = S(v);
            });
          }).catch(function() {
            w();
            var I = new Error("No available storage method found.");
            return l._driverSet = y.reject(I), l._driverSet;
          }), x(this._driverSet, d, p), this._driverSet;
        }, i.prototype.supports = function(a) {
          return !!or[a];
        }, i.prototype._extend = function(a) {
          ht(this, a);
        }, i.prototype._getSupportedDrivers = function(a) {
          for (var d = [], p = 0, l = a.length; p < l; p++) {
            var v = a[p];
            this.supports(v) && d.push(v);
          }
          return d;
        }, i.prototype._wrapLibraryMethodsWithReady = function() {
          for (var a = 0, d = dt.length; a < d; a++)
            ei(this, dt[a]);
        }, i.prototype.createInstance = function(a) {
          return new i(a);
        }, i;
      }(), ri = new ti();
      n.exports = ri;
    }, { 3: 3 }] }, {}, [4])(4);
  });
})(fn);
var Ri = fn.exports;
const Di = /* @__PURE__ */ Ni(Ri), xe = [];
function zi(e, t) {
  return {
    subscribe: cn(e, t).subscribe
  };
}
function cn(e, t = le) {
  let r;
  const n = /* @__PURE__ */ new Set();
  function o(c) {
    if (on(e, c) && (e = c, r)) {
      const b = !xe.length;
      for (const m of n)
        m[1](), xe.push(m, e);
      if (b) {
        for (let m = 0; m < xe.length; m += 2)
          xe[m][0](xe[m + 1]);
        xe.length = 0;
      }
    }
  }
  function s(c) {
    o(c(e));
  }
  function u(c, b = le) {
    const m = [c, b];
    return n.add(m), n.size === 1 && (r = t(o, s) || le), c(e), () => {
      n.delete(m), n.size === 0 && r && (r(), r = null);
    };
  }
  return { set: o, update: s, subscribe: u };
}
Di.config({
  name: "SNS HPC AI Assitant"
});
const $e = {
  Unknown: { slug: "unknown", description: "Checking the AI server status...", icon: "⏳" },
  Error: { slug: "error", description: "The AI server is currently unavailable", icon: "🔴" },
  OK: { slug: "ok", description: "The AI server is fully functional", icon: "🟢" },
  Running: { slug: "running", description: "The AI server is working to answer", icon: "🔵" },
  Degraded: { slug: "degraded", description: "The AI server is currently degraded", icon: "🟡" }
};
class Bi {
  constructor(t) {
    this.baseURL = t, this.status = cn($e.Unknown);
  }
  // list available models on the backend
  async getBestModel(t, r) {
    r = r || {};
    try {
      const n = await fetch(`${this.baseURL}/api/tags`, { method: "GET", ...r });
      if (n.status === 200) {
        const s = (await n.json()).models.map((u) => u.model);
        for (const u of t)
          if (s.includes(u.model))
            return this.status.set(u.premium ? $e.OK : $e.Degraded), u.model;
      }
    } catch (n) {
      console.error(n);
    }
    this.status.set($e.Error);
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
    this.status.set($e.Error);
  }
  async chat(t, r) {
    r = r || {};
    const n = fi(this.status);
    try {
      this.status.set($e.Running);
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
    this.status.set($e.Error);
  }
}
var Se = {}, G = {}, oe = {};
Object.defineProperty(oe, "__esModule", { value: !0 });
oe.output = oe.exists = oe.hash = oe.bytes = oe.bool = oe.number = void 0;
function rt(e) {
  if (!Number.isSafeInteger(e) || e < 0)
    throw new Error(`Wrong positive integer: ${e}`);
}
oe.number = rt;
function ln(e) {
  if (typeof e != "boolean")
    throw new Error(`Expected boolean, not ${e}`);
}
oe.bool = ln;
function ji(e) {
  return e instanceof Uint8Array || e != null && typeof e == "object" && e.constructor.name === "Uint8Array";
}
function zt(e, ...t) {
  if (!ji(e))
    throw new Error("Expected Uint8Array");
  if (t.length > 0 && !t.includes(e.length))
    throw new Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`);
}
oe.bytes = zt;
function dn(e) {
  if (typeof e != "function" || typeof e.create != "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  rt(e.outputLen), rt(e.blockLen);
}
oe.hash = dn;
function hn(e, t = !0) {
  if (e.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (t && e.finished)
    throw new Error("Hash#digest() has already been called");
}
oe.exists = hn;
function pn(e, t) {
  zt(e);
  const r = t.outputLen;
  if (e.length < r)
    throw new Error(`digestInto() expects output buffer of length at least ${r}`);
}
oe.output = pn;
const Ci = { number: rt, bool: ln, bytes: zt, hash: dn, exists: hn, output: pn };
oe.default = Ci;
var L = {};
Object.defineProperty(L, "__esModule", { value: !0 });
L.add5L = L.add5H = L.add4H = L.add4L = L.add3H = L.add3L = L.add = L.rotlBL = L.rotlBH = L.rotlSL = L.rotlSH = L.rotr32L = L.rotr32H = L.rotrBL = L.rotrBH = L.rotrSL = L.rotrSH = L.shrSL = L.shrSH = L.toBig = L.split = L.fromBig = void 0;
const Qe = /* @__PURE__ */ BigInt(2 ** 32 - 1), wt = /* @__PURE__ */ BigInt(32);
function Bt(e, t = !1) {
  return t ? { h: Number(e & Qe), l: Number(e >> wt & Qe) } : { h: Number(e >> wt & Qe) | 0, l: Number(e & Qe) | 0 };
}
L.fromBig = Bt;
function mn(e, t = !1) {
  let r = new Uint32Array(e.length), n = new Uint32Array(e.length);
  for (let o = 0; o < e.length; o++) {
    const { h: s, l: u } = Bt(e[o], t);
    [r[o], n[o]] = [s, u];
  }
  return [r, n];
}
L.split = mn;
const bn = (e, t) => BigInt(e >>> 0) << wt | BigInt(t >>> 0);
L.toBig = bn;
const vn = (e, t, r) => e >>> r;
L.shrSH = vn;
const yn = (e, t, r) => e << 32 - r | t >>> r;
L.shrSL = yn;
const gn = (e, t, r) => e >>> r | t << 32 - r;
L.rotrSH = gn;
const wn = (e, t, r) => e << 32 - r | t >>> r;
L.rotrSL = wn;
const _n = (e, t, r) => e << 64 - r | t >>> r - 32;
L.rotrBH = _n;
const Sn = (e, t, r) => e >>> r - 32 | t << 64 - r;
L.rotrBL = Sn;
const On = (e, t) => t;
L.rotr32H = On;
const $n = (e, t) => e;
L.rotr32L = $n;
const An = (e, t, r) => e << r | t >>> 32 - r;
L.rotlSH = An;
const En = (e, t, r) => t << r | e >>> 32 - r;
L.rotlSL = En;
const In = (e, t, r) => t << r - 32 | e >>> 64 - r;
L.rotlBH = In;
const Tn = (e, t, r) => e << r - 32 | t >>> 64 - r;
L.rotlBL = Tn;
function xn(e, t, r, n) {
  const o = (t >>> 0) + (n >>> 0);
  return { h: e + r + (o / 2 ** 32 | 0) | 0, l: o | 0 };
}
L.add = xn;
const kn = (e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0);
L.add3L = kn;
const Ln = (e, t, r, n) => t + r + n + (e / 2 ** 32 | 0) | 0;
L.add3H = Ln;
const Pn = (e, t, r, n) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0);
L.add4L = Pn;
const Nn = (e, t, r, n, o) => t + r + n + o + (e / 2 ** 32 | 0) | 0;
L.add4H = Nn;
const Rn = (e, t, r, n, o) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0) + (o >>> 0);
L.add5L = Rn;
const Dn = (e, t, r, n, o, s) => t + r + n + o + s + (e / 2 ** 32 | 0) | 0;
L.add5H = Dn;
const Fi = {
  fromBig: Bt,
  split: mn,
  toBig: bn,
  shrSH: vn,
  shrSL: yn,
  rotrSH: gn,
  rotrSL: wn,
  rotrBH: _n,
  rotrBL: Sn,
  rotr32H: On,
  rotr32L: $n,
  rotlSH: An,
  rotlSL: En,
  rotlBH: In,
  rotlBL: Tn,
  add: xn,
  add3L: kn,
  add3H: Ln,
  add4L: Pn,
  add4H: Nn,
  add5H: Dn,
  add5L: Rn
};
L.default = Fi;
var zn = {}, at = {};
Object.defineProperty(at, "__esModule", { value: !0 });
at.crypto = void 0;
at.crypto = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
(function(e) {
  /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
  Object.defineProperty(e, "__esModule", { value: !0 }), e.randomBytes = e.wrapXOFConstructorWithOpts = e.wrapConstructorWithOpts = e.wrapConstructor = e.checkOpts = e.Hash = e.concatBytes = e.toBytes = e.utf8ToBytes = e.asyncLoop = e.nextTick = e.hexToBytes = e.bytesToHex = e.isLE = e.rotr = e.createView = e.u32 = e.u8 = void 0;
  const t = at, r = (g) => new Uint8Array(g.buffer, g.byteOffset, g.byteLength);
  e.u8 = r;
  const n = (g) => new Uint32Array(g.buffer, g.byteOffset, Math.floor(g.byteLength / 4));
  e.u32 = n;
  function o(g) {
    return g instanceof Uint8Array || g != null && typeof g == "object" && g.constructor.name === "Uint8Array";
  }
  const s = (g) => new DataView(g.buffer, g.byteOffset, g.byteLength);
  e.createView = s;
  const u = (g, T) => g << 32 - T | g >>> T;
  if (e.rotr = u, e.isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68, !e.isLE)
    throw new Error("Non little-endian hardware is not supported");
  const c = /* @__PURE__ */ Array.from({ length: 256 }, (g, T) => T.toString(16).padStart(2, "0"));
  function b(g) {
    if (!o(g))
      throw new Error("Uint8Array expected");
    let T = "";
    for (let z = 0; z < g.length; z++)
      T += c[g[z]];
    return T;
  }
  e.bytesToHex = b;
  const m = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
  function E(g) {
    if (g >= m._0 && g <= m._9)
      return g - m._0;
    if (g >= m._A && g <= m._F)
      return g - (m._A - 10);
    if (g >= m._a && g <= m._f)
      return g - (m._a - 10);
  }
  function y(g) {
    if (typeof g != "string")
      throw new Error("hex string expected, got " + typeof g);
    const T = g.length, z = T / 2;
    if (T % 2)
      throw new Error("padded hex string expected, got unpadded hex of length " + T);
    const B = new Uint8Array(z);
    for (let F = 0, K = 0; F < z; F++, K += 2) {
      const de = E(g.charCodeAt(K)), pe = E(g.charCodeAt(K + 1));
      if (de === void 0 || pe === void 0) {
        const me = g[K] + g[K + 1];
        throw new Error('hex string expected, got non-hex character "' + me + '" at index ' + K);
      }
      B[F] = de * 16 + pe;
    }
    return B;
  }
  e.hexToBytes = y;
  const $ = async () => {
  };
  e.nextTick = $;
  async function x(g, T, z) {
    let B = Date.now();
    for (let F = 0; F < g; F++) {
      z(F);
      const K = Date.now() - B;
      K >= 0 && K < T || (await (0, e.nextTick)(), B += K);
    }
  }
  e.asyncLoop = x;
  function k(g) {
    if (typeof g != "string")
      throw new Error(`utf8ToBytes expected string, got ${typeof g}`);
    return new Uint8Array(new TextEncoder().encode(g));
  }
  e.utf8ToBytes = k;
  function R(g) {
    if (typeof g == "string" && (g = k(g)), !o(g))
      throw new Error(`expected Uint8Array, got ${typeof g}`);
    return g;
  }
  e.toBytes = R;
  function P(...g) {
    let T = 0;
    for (let B = 0; B < g.length; B++) {
      const F = g[B];
      if (!o(F))
        throw new Error("Uint8Array expected");
      T += F.length;
    }
    const z = new Uint8Array(T);
    for (let B = 0, F = 0; B < g.length; B++) {
      const K = g[B];
      z.set(K, F), F += K.length;
    }
    return z;
  }
  e.concatBytes = P;
  class C {
    // Safe version that clones internal state
    clone() {
      return this._cloneInto();
    }
  }
  e.Hash = C;
  const Y = {}.toString;
  function ae(g, T) {
    if (T !== void 0 && Y.call(T) !== "[object Object]")
      throw new Error("Options should be object or undefined");
    return Object.assign(g, T);
  }
  e.checkOpts = ae;
  function J(g) {
    const T = (B) => g().update(R(B)).digest(), z = g();
    return T.outputLen = z.outputLen, T.blockLen = z.blockLen, T.create = () => g(), T;
  }
  e.wrapConstructor = J;
  function A(g) {
    const T = (B, F) => g(F).update(R(B)).digest(), z = g({});
    return T.outputLen = z.outputLen, T.blockLen = z.blockLen, T.create = (B) => g(B), T;
  }
  e.wrapConstructorWithOpts = A;
  function D(g) {
    const T = (B, F) => g(F).update(R(B)).digest(), z = g({});
    return T.outputLen = z.outputLen, T.blockLen = z.blockLen, T.create = (B) => g(B), T;
  }
  e.wrapXOFConstructorWithOpts = D;
  function N(g = 32) {
    if (t.crypto && typeof t.crypto.getRandomValues == "function")
      return t.crypto.getRandomValues(new Uint8Array(g));
    throw new Error("crypto.getRandomValues must be defined");
  }
  e.randomBytes = N;
})(zn);
Object.defineProperty(G, "__esModule", { value: !0 });
G.shake256 = G.shake128 = G.keccak_512 = G.keccak_384 = G.keccak_256 = G.keccak_224 = G.sha3_512 = G.sha3_384 = G.sha3_256 = G.sha3_224 = G.Keccak = G.keccakP = void 0;
const ke = oe, qe = L, Ue = zn, [Bn, jn, Cn] = [[], [], []], Mi = /* @__PURE__ */ BigInt(0), Fe = /* @__PURE__ */ BigInt(1), Ui = /* @__PURE__ */ BigInt(2), Hi = /* @__PURE__ */ BigInt(7), Yi = /* @__PURE__ */ BigInt(256), qi = /* @__PURE__ */ BigInt(113);
for (let e = 0, t = Fe, r = 1, n = 0; e < 24; e++) {
  [r, n] = [n, (2 * r + 3 * n) % 5], Bn.push(2 * (5 * n + r)), jn.push((e + 1) * (e + 2) / 2 % 64);
  let o = Mi;
  for (let s = 0; s < 7; s++)
    t = (t << Fe ^ (t >> Hi) * qi) % Yi, t & Ui && (o ^= Fe << (Fe << /* @__PURE__ */ BigInt(s)) - Fe);
  Cn.push(o);
}
const [Wi, Ki] = /* @__PURE__ */ (0, qe.split)(Cn, !0), lr = (e, t, r) => r > 32 ? (0, qe.rotlBH)(e, t, r) : (0, qe.rotlSH)(e, t, r), dr = (e, t, r) => r > 32 ? (0, qe.rotlBL)(e, t, r) : (0, qe.rotlSL)(e, t, r);
function Fn(e, t = 24) {
  const r = new Uint32Array(10);
  for (let n = 24 - t; n < 24; n++) {
    for (let u = 0; u < 10; u++)
      r[u] = e[u] ^ e[u + 10] ^ e[u + 20] ^ e[u + 30] ^ e[u + 40];
    for (let u = 0; u < 10; u += 2) {
      const c = (u + 8) % 10, b = (u + 2) % 10, m = r[b], E = r[b + 1], y = lr(m, E, 1) ^ r[c], $ = dr(m, E, 1) ^ r[c + 1];
      for (let x = 0; x < 50; x += 10)
        e[u + x] ^= y, e[u + x + 1] ^= $;
    }
    let o = e[2], s = e[3];
    for (let u = 0; u < 24; u++) {
      const c = jn[u], b = lr(o, s, c), m = dr(o, s, c), E = Bn[u];
      o = e[E], s = e[E + 1], e[E] = b, e[E + 1] = m;
    }
    for (let u = 0; u < 50; u += 10) {
      for (let c = 0; c < 10; c++)
        r[c] = e[u + c];
      for (let c = 0; c < 10; c++)
        e[u + c] ^= ~r[(c + 2) % 10] & r[(c + 4) % 10];
    }
    e[0] ^= Wi[n], e[1] ^= Ki[n];
  }
  r.fill(0);
}
G.keccakP = Fn;
class Ve extends Ue.Hash {
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(t, r, n, o = !1, s = 24) {
    if (super(), this.blockLen = t, this.suffix = r, this.outputLen = n, this.enableXOF = o, this.rounds = s, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, (0, ke.number)(n), 0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = (0, Ue.u32)(this.state);
  }
  keccak() {
    Fn(this.state32, this.rounds), this.posOut = 0, this.pos = 0;
  }
  update(t) {
    (0, ke.exists)(this);
    const { blockLen: r, state: n } = this;
    t = (0, Ue.toBytes)(t);
    const o = t.length;
    for (let s = 0; s < o; ) {
      const u = Math.min(r - this.pos, o - s);
      for (let c = 0; c < u; c++)
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
    (0, ke.exists)(this, !1), (0, ke.bytes)(t), this.finish();
    const r = this.state, { blockLen: n } = this;
    for (let o = 0, s = t.length; o < s; ) {
      this.posOut >= n && this.keccak();
      const u = Math.min(n - this.posOut, s - o);
      t.set(r.subarray(this.posOut, this.posOut + u), o), this.posOut += u, o += u;
    }
    return t;
  }
  xofInto(t) {
    if (!this.enableXOF)
      throw new Error("XOF is not possible for this instance");
    return this.writeInto(t);
  }
  xof(t) {
    return (0, ke.number)(t), this.xofInto(new Uint8Array(t));
  }
  digestInto(t) {
    if ((0, ke.output)(t, this), this.finished)
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
    const { blockLen: r, suffix: n, outputLen: o, rounds: s, enableXOF: u } = this;
    return t || (t = new Ve(r, n, o, u, s)), t.state32.set(this.state32), t.pos = this.pos, t.posOut = this.posOut, t.finished = this.finished, t.rounds = s, t.suffix = n, t.outputLen = o, t.enableXOF = u, t.destroyed = this.destroyed, t;
  }
}
G.Keccak = Ve;
const Oe = (e, t, r) => (0, Ue.wrapConstructor)(() => new Ve(t, e, r));
G.sha3_224 = Oe(6, 144, 224 / 8);
G.sha3_256 = Oe(6, 136, 256 / 8);
G.sha3_384 = Oe(6, 104, 384 / 8);
G.sha3_512 = Oe(6, 72, 512 / 8);
G.keccak_224 = Oe(1, 144, 224 / 8);
G.keccak_256 = Oe(1, 136, 256 / 8);
G.keccak_384 = Oe(1, 104, 384 / 8);
G.keccak_512 = Oe(1, 72, 512 / 8);
const Mn = (e, t, r) => (0, Ue.wrapXOFConstructorWithOpts)((n = {}) => new Ve(t, e, n.dkLen === void 0 ? r : n.dkLen, !0));
G.shake128 = Mn(31, 168, 128 / 8);
G.shake256 = Mn(31, 136, 256 / 8);
const { sha3_512: Vi } = G, Un = 24, He = 32, _t = (e = 4, t = Math.random) => {
  let r = "";
  for (; r.length < e; )
    r = r + Math.floor(t() * 36).toString(36);
  return r;
};
function Hn(e) {
  let t = 8n, r = 0n;
  for (const n of e.values()) {
    const o = BigInt(n);
    r = (r << t) + o;
  }
  return r;
}
const Yn = (e = "") => Hn(Vi(e)).toString(36).slice(1), hr = Array.from(
  { length: 26 },
  (e, t) => String.fromCharCode(t + 97)
), Xi = (e) => hr[Math.floor(e() * hr.length)], qn = ({
  globalObj: e = typeof Pe < "u" ? Pe : typeof window < "u" ? window : {},
  random: t = Math.random
} = {}) => {
  const r = Object.keys(e).toString(), n = r.length ? r + _t(He, t) : _t(He, t);
  return Yn(n).substring(0, He);
}, Wn = (e) => () => e++, Gi = 476782367, Kn = ({
  // Fallback if the user does not pass in a CSPRNG. This should be OK
  // because we don't rely solely on the random number generator for entropy.
  // We also use the host fingerprint, current time, and a session counter.
  random: e = Math.random,
  counter: t = Wn(Math.floor(e() * Gi)),
  length: r = Un,
  fingerprint: n = qn({ random: e })
} = {}) => function() {
  const s = Xi(e), u = Date.now().toString(36), c = t().toString(36), b = _t(r, e), m = `${u + b + c + n}`;
  return `${s + Yn(m).substring(1, r)}`;
}, Ji = Kn(), Qi = (e, { minLength: t = 2, maxLength: r = He } = {}) => {
  const n = e.length, o = /^[0-9a-z]+$/;
  try {
    if (typeof e == "string" && n >= t && n <= r && o.test(e))
      return !0;
  } finally {
  }
  return !1;
};
Se.getConstants = () => ({ defaultLength: Un, bigLength: He });
Se.init = Kn;
Se.createId = Ji;
Se.bufToBigInt = Hn;
Se.createCounter = Wn;
Se.createFingerprint = qn;
Se.isCuid = Qi;
const { createId: Zi, init: Ds, getConstants: zs, isCuid: Bs } = Se;
var ea = Zi;
class ta {
  // TODO: Implement message tree with branches
  constructor(t, r, n) {
    if (this.updated = t, this.ollama = r, n)
      this._ = n;
    else {
      const o = (/* @__PURE__ */ new Date()).toISOString();
      this._ = {
        chatId: ea(),
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
const pr = {
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
var Vn = "en", jt = {}, St = {};
function Xn() {
  return Vn;
}
function ra(e) {
  Vn = e;
}
function na(e) {
  return jt[e];
}
function oa(e) {
  if (!e)
    throw new Error("No locale data passed");
  jt[e.locale] = e, St[e.locale.toLowerCase()] = e.locale;
}
function mr(e) {
  if (jt[e])
    return e;
  if (St[e.toLowerCase()])
    return St[e.toLowerCase()];
}
function Gn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.localeMatcher || "lookup";
  switch (r) {
    case "lookup":
      return br(e);
    case "best fit":
      return br(e);
    default:
      throw new RangeError('Invalid "localeMatcher" option: '.concat(r));
  }
}
function br(e) {
  var t = mr(e);
  if (t)
    return t;
  for (var r = e.split("-"); e.length > 1; ) {
    r.pop(), e = r.join("-");
    var n = mr(e);
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
    var r = String(t).split("."), n = Number(r[0]) == t, o = n && r[0].slice(-1), s = n && r[0].slice(-2), u = n && r[0].slice(-6);
    return o == 1 && s != 11 && s != 71 && s != 91 ? "one" : o == 2 && s != 12 && s != 72 && s != 92 ? "two" : (o == 3 || o == 4 || o == 9) && (s < 10 || s > 19) && (s < 70 || s > 79) && (s < 90 || s > 99) ? "few" : t != 0 && n && u == 0 ? "many" : "other";
  },
  bs: function(t) {
    var r = String(t).split("."), n = r[0], o = r[1] || "", s = !r[1], u = n.slice(-1), c = n.slice(-2), b = o.slice(-1), m = o.slice(-2);
    return s && u == 1 && c != 11 || b == 1 && m != 11 ? "one" : s && u >= 2 && u <= 4 && (c < 12 || c > 14) || b >= 2 && b <= 4 && (m < 12 || m > 14) ? "few" : "other";
  },
  ca: function(t) {
    var r = String(t).split("."), n = r[0], o = !r[1], s = n.slice(-6);
    return t == 1 && o ? "one" : n != 0 && s == 0 && o ? "many" : "other";
  },
  ceb: function(t) {
    var r = String(t).split("."), n = r[0], o = r[1] || "", s = !r[1], u = n.slice(-1), c = o.slice(-1);
    return s && (n == 1 || n == 2 || n == 3) || s && u != 4 && u != 6 && u != 9 || !s && c != 4 && c != 6 && c != 9 ? "one" : "other";
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
    var r = String(t).split("."), n = r[0], o = r[1] || "", s = !r[1], u = n.slice(-2), c = o.slice(-2);
    return s && u == 1 || c == 1 ? "one" : s && u == 2 || c == 2 ? "two" : s && (u == 3 || u == 4) || c == 3 || c == 4 ? "few" : "other";
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
    var r = String(t).split("."), n = r[0], o = (r[1] || "").replace(/0+$/, ""), s = Number(r[0]) == t, u = n.slice(-1), c = n.slice(-2);
    return s && u == 1 && c != 11 || o % 10 == 1 && o % 100 != 11 ? "one" : "other";
  },
  ksh: function(t) {
    return t == 0 ? "zero" : t == 1 ? "one" : "other";
  },
  lt: function(t) {
    var r = String(t).split("."), n = r[1] || "", o = Number(r[0]) == t, s = o && r[0].slice(-1), u = o && r[0].slice(-2);
    return s == 1 && (u < 11 || u > 19) ? "one" : s >= 2 && s <= 9 && (u < 11 || u > 19) ? "few" : n != 0 ? "many" : "other";
  },
  lv: function(t) {
    var r = String(t).split("."), n = r[1] || "", o = n.length, s = Number(r[0]) == t, u = s && r[0].slice(-1), c = s && r[0].slice(-2), b = n.slice(-2), m = n.slice(-1);
    return s && u == 0 || c >= 11 && c <= 19 || o == 2 && b >= 11 && b <= 19 ? "zero" : u == 1 && c != 11 || o == 2 && m == 1 && b != 11 || o != 2 && m == 1 ? "one" : "other";
  },
  mk: function(t) {
    var r = String(t).split("."), n = r[0], o = r[1] || "", s = !r[1], u = n.slice(-1), c = n.slice(-2), b = o.slice(-1), m = o.slice(-2);
    return s && u == 1 && c != 11 || b == 1 && m != 11 ? "one" : "other";
  },
  mt: function(t) {
    var r = String(t).split("."), n = Number(r[0]) == t, o = n && r[0].slice(-2);
    return t == 1 ? "one" : t == 2 ? "two" : t == 0 || o >= 3 && o <= 10 ? "few" : o >= 11 && o <= 19 ? "many" : "other";
  },
  pa: function(t) {
    return t == 0 || t == 1 ? "one" : "other";
  },
  pl: function(t) {
    var r = String(t).split("."), n = r[0], o = !r[1], s = n.slice(-1), u = n.slice(-2);
    return t == 1 && o ? "one" : o && s >= 2 && s <= 4 && (u < 12 || u > 14) ? "few" : o && n != 1 && (s == 0 || s == 1) || o && s >= 5 && s <= 9 || o && u >= 12 && u <= 14 ? "many" : "other";
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
    var r = String(t).split("."), n = r[0], o = !r[1], s = n.slice(-1), u = n.slice(-2);
    return o && s == 1 && u != 11 ? "one" : o && s >= 2 && s <= 4 && (u < 12 || u > 14) ? "few" : o && s == 0 || o && s >= 5 && s <= 9 || o && u >= 11 && u <= 14 ? "many" : "other";
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
const vr = h;
function yr(e) {
  return e === "pt-PT" ? e : aa(e);
}
var ia = /^([a-z0-9]+)/i;
function aa(e) {
  var t = e.match(ia);
  if (!t)
    throw new TypeError("Invalid locale: ".concat(e));
  return t[1];
}
function sa(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function gr(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function ua(e, t, r) {
  return t && gr(e.prototype, t), r && gr(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var Ot = /* @__PURE__ */ function() {
  function e(t, r) {
    sa(this, e);
    var n = e.supportedLocalesOf(t);
    if (n.length === 0)
      throw new RangeError("Unsupported locale: " + t);
    if (r && r.type !== "cardinal")
      throw new RangeError('Only "cardinal" "type" is supported');
    this.$ = vr[yr(n[0])];
  }
  return ua(e, [{
    key: "select",
    value: function(r) {
      return this.$(r);
    }
  }], [{
    key: "supportedLocalesOf",
    value: function(r) {
      return typeof r == "string" && (r = [r]), r.filter(function(n) {
        return vr[yr(n)];
      });
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
function wr(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function _r(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wr(Object(r), !0).forEach(function(n) {
      fa(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wr(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function fa(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Sr(e, t) {
  return ha(e) || da(e, t) || la(e, t) || ca();
}
function ca() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function la(e, t) {
  if (e) {
    if (typeof e == "string")
      return Or(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Or(e, t);
  }
}
function Or(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function da(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], o = !0, s = !1, u, c;
    try {
      for (r = r.call(e); !(o = (u = r.next()).done) && (n.push(u.value), !(t && n.length === t)); o = !0)
        ;
    } catch (b) {
      s = !0, c = b;
    } finally {
      try {
        !o && r.return != null && r.return();
      } finally {
        if (s)
          throw c;
      }
    }
    return n;
  }
}
function ha(e) {
  if (Array.isArray(e))
    return e;
}
function pa(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function $r(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function ma(e, t, r) {
  return t && $r(e.prototype, t), r && $r(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var ba = ["second", "minute", "hour", "day", "week", "month", "quarter", "year"], va = ["auto", "always"], ya = ["long", "short", "narrow"], ga = ["lookup", "best fit"], _e = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    pa(this, e);
    var n = r.numeric, o = r.style, s = r.localeMatcher;
    if (this.numeric = "always", this.style = "long", this.localeMatcher = "lookup", n !== void 0) {
      if (va.indexOf(n) < 0)
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
    if (typeof t == "string" && (t = [t]), t.push(Xn()), this.locale = e.supportedLocalesOf(t, {
      localeMatcher: this.localeMatcher
    })[0], !this.locale)
      throw new Error("No supported locale was found");
    Ot.supportedLocalesOf(this.locale).length > 0 ? this.pluralRules = new Ot(this.locale) : console.warn('"'.concat(this.locale, '" locale is not supported')), typeof Intl < "u" && Intl.NumberFormat ? (this.numberFormat = new Intl.NumberFormat(this.locale), this.numberingSystem = this.numberFormat.resolvedOptions().numberingSystem) : this.numberingSystem = "latn", this.locale = Gn(this.locale, {
      localeMatcher: this.localeMatcher
    });
  }
  return ma(e, [{
    key: "format",
    value: function() {
      var r = Ar(arguments), n = Sr(r, 2), o = n[0], s = n[1];
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
      var r = Ar(arguments), n = Sr(r, 2), o = n[0], s = n[1], u = this.getRule(o, s), c = u.indexOf("{0}");
      if (c < 0)
        return [{
          type: "literal",
          value: u
        }];
      var b = [];
      return c > 0 && b.push({
        type: "literal",
        value: u.slice(0, c)
      }), b = b.concat(this.formatNumberToParts(Math.abs(o)).map(function(m) {
        return _r(_r({}, m), {}, {
          unit: s
        });
      })), c + 3 < u.length - 1 && b.push({
        type: "literal",
        value: u.slice(c + 3)
      }), b;
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
      var o = na(this.locale)[this.style][n];
      if (typeof o == "string")
        return o;
      if (this.numeric === "auto") {
        if (r === -2 || r === -1) {
          var s = o["previous".concat(r === -1 ? "" : "-" + Math.abs(r))];
          if (s)
            return s;
        } else if (r === 1 || r === 2) {
          var u = o["next".concat(r === 1 ? "" : "-" + Math.abs(r))];
          if (u)
            return u;
        } else if (r === 0 && o.current)
          return o.current;
      }
      var c = o[$a(r) ? "past" : "future"];
      if (typeof c == "string")
        return c;
      var b = this.pluralRules && this.pluralRules.select(Math.abs(r)) || "other";
      return c[b] || c.other;
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
_e.supportedLocalesOf = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (typeof e == "string")
    e = [e];
  else if (!Array.isArray(e))
    throw new TypeError('Invalid "locales" argument');
  return e.filter(function(r) {
    return Gn(r, t);
  });
};
_e.addLocale = oa;
_e.setDefaultLocale = ra;
_e.getDefaultLocale = Xn;
_e.PluralRules = Ot;
var vt = 'Invalid "unit" argument';
function wa(e) {
  if ($t(e) === "symbol")
    throw new TypeError(vt);
  if (typeof e != "string")
    throw new RangeError("".concat(vt, ": ").concat(e));
  if (e[e.length - 1] === "s" && (e = e.slice(0, e.length - 1)), ba.indexOf(e) < 0)
    throw new RangeError("".concat(vt, ": ").concat(e));
  return e;
}
var _a = 'Invalid "number" argument';
function Sa(e) {
  if (e = Number(e), Number.isFinite && !Number.isFinite(e))
    throw new RangeError("".concat(_a, ": ").concat(e));
  return e;
}
function Oa(e) {
  return 1 / e === -1 / 0;
}
function $a(e) {
  return e < 0 || e === 0 && Oa(e);
}
function Ar(e) {
  if (e.length < 2)
    throw new TypeError('"unit" argument is required');
  return [Sa(e[0]), wa(e[1])];
}
function nt(e) {
  "@babel/helpers - typeof";
  return nt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, nt(e);
}
function Aa(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Er(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Ea(e, t, r) {
  return t && Er(e.prototype, t), r && Er(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var Ir = /* @__PURE__ */ function() {
  function e() {
    Aa(this, e), this.cache = {};
  }
  return Ea(e, [{
    key: "get",
    value: function() {
      for (var r = this.cache, n = arguments.length, o = new Array(n), s = 0; s < n; s++)
        o[s] = arguments[s];
      for (var u = 0, c = o; u < c.length; u++) {
        var b = c[u];
        if (nt(r) !== "object")
          return;
        r = r[b];
      }
      return r;
    }
  }, {
    key: "put",
    value: function() {
      for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
        n[o] = arguments[o];
      for (var s = n.pop(), u = n.pop(), c = this.cache, b = 0, m = n; b < m.length; b++) {
        var E = m[b];
        nt(c[E]) !== "object" && (c[E] = {}), c = c[E];
      }
      return c[u] = s;
    }
  }]), e;
}();
function At(e) {
  "@babel/helpers - typeof";
  return At = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, At(e);
}
function Ia(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r)
    return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = Ta(e)) || t && e && typeof e.length == "number") {
    r && (e = r);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ta(e, t) {
  if (e) {
    if (typeof e == "string")
      return Tr(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Tr(e, t);
  }
}
function Tr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function xa(e, t) {
  for (var r = Ia(e), n; !(n = r()).done; ) {
    var o = n.value;
    if (t(o))
      return o;
    for (var s = o.split("-"); s.length > 1; )
      if (s.pop(), o = s.join("-"), t(o))
        return o;
  }
  throw new Error("No locale data has been registered for any of the locales: ".concat(e.join(", ")));
}
function ka() {
  var e = (typeof Intl > "u" ? "undefined" : At(Intl)) === "object";
  return e && typeof Intl.DateTimeFormat == "function";
}
function Et(e) {
  "@babel/helpers - typeof";
  return Et = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Et(e);
}
function La(e) {
  return Na(e) && (Array.isArray(e.steps) || // `gradation` property is deprecated: it has been renamed to `steps`.
  Array.isArray(e.gradation) || // `flavour` property is deprecated: it has been renamed to `labels`.
  Array.isArray(e.flavour) || typeof e.flavour == "string" || Array.isArray(e.labels) || typeof e.labels == "string" || // `units` property is deprecated.
  Array.isArray(e.units) || // `custom` property is deprecated.
  typeof e.custom == "function");
}
var Pa = {}.constructor;
function Na(e) {
  return Et(e) !== void 0 && e !== null && e.constructor === Pa;
}
var ve = 60, ot = 60 * ve, Ae = 24 * ot, It = 7 * Ae, Tt = 30.44 * Ae, Jn = 146097 / 400 * Ae;
function De(e) {
  switch (e) {
    case "second":
      return 1;
    case "minute":
      return ve;
    case "hour":
      return ot;
    case "day":
      return Ae;
    case "week":
      return It;
    case "month":
      return Tt;
    case "year":
      return Jn;
  }
}
function Qn(e) {
  return e.factor !== void 0 ? e.factor : De(e.unit || e.formatAs) || 1;
}
function We(e) {
  switch (e) {
    case "floor":
      return Math.floor;
    default:
      return Math.round;
  }
}
function Ct(e) {
  switch (e) {
    case "floor":
      return 1;
    default:
      return 0.5;
  }
}
function xt(e) {
  "@babel/helpers - typeof";
  return xt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xt(e);
}
function Zn(e, t) {
  var r = t.prevStep, n = t.timestamp, o = t.now, s = t.future, u = t.round, c;
  return r && (r.id || r.unit) && (c = e["threshold_for_".concat(r.id || r.unit)]), c === void 0 && e.threshold !== void 0 && (c = e.threshold, typeof c == "function" && (c = c(o, s))), c === void 0 && (c = e.minTime), xt(c) === "object" && (r && r.id && c[r.id] !== void 0 ? c = c[r.id] : c = c.default), typeof c == "function" && (c = c(n, {
    future: s,
    getMinTimeForUnit: function(m, E) {
      return xr(m, E || r && r.formatAs, {
        round: u
      });
    }
  })), c === void 0 && e.test && (e.test(n, {
    now: o,
    future: s
  }) ? c = 0 : c = 9007199254740991), c === void 0 && (r ? e.formatAs && r.formatAs && (c = xr(e.formatAs, r.formatAs, {
    round: u
  })) : c = 0), c === void 0 && console.warn("[javascript-time-ago] A step should specify `minTime`:\n" + JSON.stringify(e, null, 2)), c;
}
function xr(e, t, r) {
  var n = r.round, o = De(e), s;
  if (t === "now" ? s = De(e) : s = De(t), o !== void 0 && s !== void 0)
    return o - s * (1 - Ct(n));
}
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
function Ra(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? kr(Object(r), !0).forEach(function(n) {
      Da(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : kr(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Da(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function za(e, t, r) {
  var n = r.now, o = r.future, s = r.round, u = r.units, c = r.getNextStep;
  e = ja(e, u);
  var b = Ba(e, t, {
    now: n,
    future: o,
    round: s
  });
  if (c) {
    if (b) {
      var m = e[e.indexOf(b) - 1], E = e[e.indexOf(b) + 1];
      return [m, b, E];
    }
    return [void 0, void 0, e[0]];
  }
  return b;
}
function Ba(e, t, r) {
  var n = r.now, o = r.future, s = r.round;
  if (e.length !== 0) {
    var u = eo(e, t, {
      now: n,
      future: o || t < 0,
      round: s
    });
    if (u !== -1) {
      var c = e[u];
      if (c.granularity) {
        var b = We(s)(Math.abs(t) / Qn(c) / c.granularity) * c.granularity;
        if (b === 0 && u > 0)
          return e[u - 1];
      }
      return c;
    }
  }
}
function eo(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, o = Zn(e[n], Ra({
    prevStep: e[n - 1],
    timestamp: r.now - t * 1e3
  }, r));
  return o === void 0 || Math.abs(t) < o ? n - 1 : n === e.length - 1 ? n : eo(e, t, r, n + 1);
}
function ja(e, t) {
  return e.filter(function(r) {
    var n = r.unit, o = r.formatAs;
    return n = n || o, n ? t.indexOf(n) >= 0 : !0;
  });
}
function Ca(e, t, r) {
  var n = r.now, o = r.round;
  if (De(e)) {
    var s = De(e) * 1e3, u = t > n, c = Math.abs(t - n), b = We(o)(c / s) * s;
    return u ? b > 0 ? c - b + Ma(o, s) : c - b + 1 : -(c - b) + Fa(o, s);
  }
}
function Fa(e, t) {
  return Ct(e) * t;
}
function Ma(e, t) {
  return (1 - Ct(e)) * t + 1;
}
var Ua = 365 * 24 * 60 * 60 * 1e3, to = 1e3 * Ua;
function Ha(e, t, r) {
  var n = r.prevStep, o = r.nextStep, s = r.now, u = r.future, c = r.round, b = e.getTime ? e.getTime() : e, m = function(k) {
    return Ca(k, b, {
      now: s,
      round: c
    });
  }, E = qa(u ? t : o, b, {
    future: u,
    now: s,
    round: c,
    prevStep: u ? n : t
    // isFirstStep: future && isFirstStep
  });
  if (E !== void 0) {
    var y;
    if (t && (t.getTimeToNextUpdate && (y = t.getTimeToNextUpdate(b, {
      getTimeToNextUpdateForUnit: m,
      getRoundFunction: We,
      now: s,
      future: u,
      round: c
    })), y === void 0)) {
      var $ = t.unit || t.formatAs;
      $ && (y = m($));
    }
    return y === void 0 ? E : Math.min(y, E);
  }
}
function Ya(e, t, r) {
  var n = r.now, o = r.future, s = r.round, u = r.prevStep, c = Zn(e, {
    timestamp: t,
    now: n,
    future: o,
    round: s,
    prevStep: u
  });
  if (c !== void 0)
    return o ? t - c * 1e3 + 1 : c === 0 && t === n ? to : t + c * 1e3;
}
function qa(e, t, r) {
  var n = r.now, o = r.future, s = r.round, u = r.prevStep;
  if (e) {
    var c = Ya(e, t, {
      now: n,
      future: o,
      round: s,
      prevStep: u
    });
    return c === void 0 ? void 0 : c - n;
  } else
    return o ? t - n + 1 : to;
}
var ro = {};
function Ne(e) {
  return ro[e];
}
function no(e) {
  if (!e)
    throw new Error("[javascript-time-ago] No locale data passed.");
  ro[e.locale] = e;
}
const Wa = [{
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
}], kt = {
  steps: Wa,
  labels: "long"
};
function Lr(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Pr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Lr(Object(r), !0).forEach(function(n) {
      Ka(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Lr(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ka(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
const Lt = Pr(Pr({}, kt), {}, {
  // Skip "seconds".
  steps: kt.steps.filter(function(e) {
    return e.formatAs !== "second";
  })
}), oo = [{
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
  factor: ve,
  // "minute" labels are used for formatting the output.
  unit: "minute"
}, {
  // This step is effective starting from 2.5 minutes.
  threshold: 2.5 * ve,
  // Allow only 5-minute increments of minutes starting from 2.5 minutes.
  // `granularity` — (advanced) Time interval value "granularity".
  // For example, it could be set to `5` for minutes to allow only 5-minute increments
  // when formatting time intervals: `0 minutes`, `5 minutes`, `10 minutes`, etc.
  // Perhaps this feature will be removed because there seem to be no use cases
  // of it in the real world.
  granularity: 5,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a minute.
  factor: ve,
  // "minute" labels are used for formatting the output.
  unit: "minute"
}, {
  // This step is effective starting from 22.5 minutes.
  threshold: 22.5 * ve,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in  half-an-hour.
  factor: 0.5 * ot,
  // "half-hour" labels are used for formatting the output.
  // (if available, which is no longer the case)
  unit: "half-hour"
}, {
  // This step is effective starting from 42.5 minutes.
  threshold: 42.5 * ve,
  threshold_for_minute: 52.5 * ve,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in an hour.
  factor: ot,
  // "hour" labels are used for formatting the output.
  unit: "hour"
}, {
  // This step is effective starting from 20.5 hours.
  threshold: 20.5 / 24 * Ae,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a day.
  factor: Ae,
  // "day" labels are used for formatting the output.
  unit: "day"
}, {
  // This step is effective starting from 5.5 days.
  threshold: 5.5 * Ae,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a week.
  factor: It,
  // "week" labels are used for formatting the output.
  unit: "week"
}, {
  // This step is effective starting from 3.5 weeks.
  threshold: 3.5 * It,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a month.
  factor: Tt,
  // "month" labels are used for formatting the output.
  unit: "month"
}, {
  // This step is effective starting from 10.5 months.
  threshold: 10.5 * Tt,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a year.
  factor: Jn,
  // "year" labels are used for formatting the output.
  unit: "year"
}], Nr = {
  gradation: oo,
  flavour: "long",
  units: ["now", "minute", "hour", "day", "week", "month", "year"]
}, Va = {
  gradation: oo,
  flavour: "long-time",
  units: ["now", "minute", "hour", "day", "week", "month", "year"]
};
function io(e) {
  return e instanceof Date ? e : new Date(e);
}
var Pt = [{
  formatAs: "second"
}, {
  formatAs: "minute"
}, {
  formatAs: "hour"
}], be = {}, Xa = {
  minTime: function(t, r) {
    r.future;
    var n = r.getMinTimeForUnit;
    return n("day");
  },
  format: function(t, r) {
    return be[r] || (be[r] = {}), be[r].dayMonth || (be[r].dayMonth = new Intl.DateTimeFormat(r, {
      month: "short",
      day: "numeric"
    })), be[r].dayMonth.format(io(t));
  }
}, Ga = {
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
    return be[r] || (be[r] = {}), be[r].dayMonthYear || (be[r].dayMonthYear = new Intl.DateTimeFormat(r, {
      year: "numeric",
      month: "short",
      day: "numeric"
    })), be[r].dayMonthYear.format(io(t));
  }
};
ka() ? Pt.push(Xa, Ga) : Pt.push({
  formatAs: "day"
}, {
  formatAs: "week"
}, {
  formatAs: "month"
}, {
  formatAs: "year"
});
const Ee = {
  steps: Pt,
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
      Ja(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Rr(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ja(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
const Qa = Dr(Dr({}, Ee), {}, {
  // Add "now".
  steps: [{
    formatAs: "now"
  }].concat(Ee.steps)
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
function Br(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zr(Object(r), !0).forEach(function(n) {
      Za(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zr(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Za(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
const Nt = Br(Br({}, Ee), {}, {
  // Skip "seconds".
  steps: Ee.steps.filter(function(e) {
    return e.formatAs !== "second";
  })
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
function Cr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? jr(Object(r), !0).forEach(function(n) {
      es(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jr(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function es(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
const ts = Cr(Cr({}, Nt), {}, {
  // Add "now".
  steps: [{
    formatAs: "now"
  }].concat(Nt.steps)
});
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
function Ze(e) {
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
const ns = Ze(Ze({}, Ee), {}, {
  // Skip "seconds".
  steps: Ee.steps.filter(function(e) {
    return e.formatAs !== "second";
  }).map(function(e) {
    return e.formatAs === "minute" ? Ze(Ze({}, e), {}, {
      minTime: ve
    }) : e;
  })
}), Ke = {
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
      os(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Mr(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function os(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
const is = Ur(Ur({}, Ke), {}, {
  // Add "now".
  steps: [{
    formatAs: "now"
  }].concat(Ke.steps)
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
const Rt = Yr(Yr({}, Ke), {}, {
  // Skip "seconds".
  steps: Ke.steps.filter(function(e) {
    return e.formatAs !== "second";
  })
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
function Wr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qr(Object(r), !0).forEach(function(n) {
      ss(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : qr(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ss(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
const us = Wr(Wr({}, Rt), {}, {
  // Add "now".
  steps: [{
    formatAs: "now"
  }].concat(Rt.steps)
});
function fs(e) {
  switch (e) {
    case "default":
    case "round":
      return kt;
    case "round-minute":
      return Lt;
    case "approximate":
      return Nr;
    case "time":
    case "approximate-time":
      return Va;
    case "mini":
      return Ke;
    case "mini-now":
      return is;
    case "mini-minute":
      return Rt;
    case "mini-minute-now":
      return us;
    case "twitter":
      return Ee;
    case "twitter-now":
      return Qa;
    case "twitter-minute":
      return Nt;
    case "twitter-minute-now":
      return ts;
    case "twitter-first-minute":
      return ns;
    default:
      return Nr;
  }
}
function it(e) {
  "@babel/helpers - typeof";
  return it = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, it(e);
}
function cs(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r)
    return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = ao(e)) || t && e && typeof e.length == "number") {
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
  return ps(e) || hs(e, t) || ao(e, t) || ds();
}
function ds() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ao(e, t) {
  if (e) {
    if (typeof e == "string")
      return Kr(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Kr(e, t);
  }
}
function Kr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function hs(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n = [], o = !0, s = !1, u, c;
    try {
      for (r = r.call(e); !(o = (u = r.next()).done) && (n.push(u.value), !(t && n.length === t)); o = !0)
        ;
    } catch (b) {
      s = !0, c = b;
    } finally {
      try {
        !o && r.return != null && r.return();
      } finally {
        if (s)
          throw c;
      }
    }
    return n;
  }
}
function ps(e) {
  if (Array.isArray(e))
    return e;
}
function ms(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Vr(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function bs(e, t, r) {
  return t && Vr(e.prototype, t), r && Vr(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var he = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.polyfill;
    ms(this, e), typeof t == "string" && (t = [t]), this.locale = xa(t.concat(e.getDefaultLocale()), Ne), typeof Intl < "u" && Intl.NumberFormat && (this.numberFormat = new Intl.NumberFormat(this.locale)), n === !1 ? (this.IntlRelativeTimeFormat = Intl.RelativeTimeFormat, this.IntlPluralRules = Intl.PluralRules) : (this.IntlRelativeTimeFormat = _e, this.IntlPluralRules = _e.PluralRules), this.relativeTimeFormatCache = new Ir(), this.pluralRulesCache = new Ir();
  }
  return bs(e, [{
    key: "format",
    value: function(r, n, o) {
      o || (n && !_s(n) ? (o = n, n = void 0) : o = {}), n || (n = Lt), typeof n == "string" && (n = fs(n));
      var s = vs(r), u = this.getLabels(n.flavour || n.labels), c = u.labels, b = u.labelsType, m;
      n.now !== void 0 && (m = n.now), m === void 0 && o.now !== void 0 && (m = o.now), m === void 0 && (m = Date.now());
      var E = (m - s) / 1e3, y = o.future || E < 0, $ = ws(c, Ne(this.locale).now, Ne(this.locale).long, y);
      if (n.custom) {
        var x = n.custom({
          now: m,
          date: new Date(s),
          time: s,
          elapsed: E,
          locale: this.locale
        });
        if (x !== void 0)
          return x;
      }
      var k = gs(
        // Controlling `style.steps` through `style.units` seems to be deprecated:
        // create a new custom `style` instead.
        n.units,
        c,
        $
      ), R = o.round || n.round, P = za(
        // "gradation" is a legacy name for "steps".
        // For historical reasons, "approximate" steps are used by default.
        // In the next major version, there'll be no default for `steps`.
        n.gradation || n.steps || Lt.steps,
        E,
        {
          now: m,
          units: k,
          round: R,
          future: y,
          getNextStep: !0
        }
      ), C = ls(P, 3), Y = C[0], ae = C[1], J = C[2], A = this.formatDateForStep(s, ae, E, {
        labels: c,
        labelsType: b,
        nowLabel: $,
        now: m,
        future: y,
        round: R
      }) || "";
      if (o.getTimeToNextUpdate) {
        var D = Ha(s, ae, {
          nextStep: J,
          prevStep: Y,
          now: m,
          future: y,
          round: R
        });
        return [A, D];
      }
      return A;
    }
  }, {
    key: "formatDateForStep",
    value: function(r, n, o, s) {
      var u = this, c = s.labels, b = s.labelsType, m = s.nowLabel, E = s.now, y = s.future, $ = s.round;
      if (n) {
        if (n.format)
          return n.format(r, this.locale, {
            formatAs: function(C, Y) {
              return u.formatValue(Y, C, {
                labels: c,
                future: y
              });
            },
            now: E,
            future: y
          });
        var x = n.unit || n.formatAs;
        if (!x)
          throw new Error("[javascript-time-ago] Each step must define either `formatAs` or `format()`. Step: ".concat(JSON.stringify(n)));
        if (x === "now")
          return m;
        var k = Math.abs(o) / Qn(n);
        n.granularity && (k = We($)(k / n.granularity) * n.granularity);
        var R = -1 * Math.sign(o) * We($)(k);
        switch (R === 0 && (y ? R = 0 : R = -0), b) {
          case "long":
          case "short":
          case "narrow":
            return this.getFormatter(b).format(R, x);
          default:
            return this.formatValue(R, x, {
              labels: c,
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
      var s = o.labels, u = o.future;
      return this.getFormattingRule(s, n, r, {
        future: u
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
      var u = s.future;
      if (this.locale, r = r[n], typeof r == "string")
        return r;
      var c = o === 0 ? u ? "future" : "past" : o < 0 ? "past" : "future", b = r[c] || r;
      if (typeof b == "string")
        return b;
      var m = this.getPluralRules().select(Math.abs(o));
      return b[m] || b.other;
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
      typeof r == "string" && (r = [r]), r = r.map(function(c) {
        switch (c) {
          case "tiny":
          case "mini-time":
            return "mini";
          default:
            return c;
        }
      }), r = r.concat("long");
      for (var n = Ne(this.locale), o = cs(r), s; !(s = o()).done; ) {
        var u = s.value;
        if (n[u])
          return {
            labelsType: u,
            labels: n[u]
          };
      }
    }
  }]), e;
}(), so = "en";
he.getDefaultLocale = function() {
  return so;
};
he.setDefaultLocale = function(e) {
  return so = e;
};
he.addDefaultLocale = function(e) {
  if (Xr)
    return console.error("[javascript-time-ago] `TimeAgo.addDefaultLocale()` can only be called once. To add other locales, use `TimeAgo.addLocale()`.");
  Xr = !0, he.setDefaultLocale(e.locale), he.addLocale(e);
};
var Xr;
he.addLocale = function(e) {
  no(e), _e.addLocale(e);
};
he.locale = he.addLocale;
he.addLabels = function(e, t, r) {
  var n = Ne(e);
  n || (no({
    locale: e
  }), n = Ne(e)), n[t] = r;
};
function vs(e) {
  if (e.constructor === Date || ys(e))
    return e.getTime();
  if (typeof e == "number")
    return e;
  throw new Error("Unsupported relative time formatter input: ".concat(it(e), ", ").concat(e));
}
function ys(e) {
  return it(e) === "object" && typeof e.getTime == "function";
}
function gs(e, t, r) {
  var n = Object.keys(t);
  return r && n.push("now"), e && (n = e.filter(function(o) {
    return o === "now" || n.indexOf(o) >= 0;
  })), n;
}
function ws(e, t, r, n) {
  var o = e.now || t && t.now;
  if (o)
    return typeof o == "string" ? o : n ? o.future : o.past;
  if (r && r.second && r.second.current)
    return r.second.current;
}
function _s(e) {
  return typeof e == "string" || La(e);
}
const Ss = {
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
he.addLocale(Ss);
const Os = new he("en-US"), Gr = (e) => Os.format(new Date(e)), $s = zi(Gr, (e) => {
  const t = setInterval(() => e(Gr), 1e3);
  return () => clearInterval(t);
});
function As(e) {
  li(e, "svelte-fz0bbr", `.svelte-fz0bbr,.svelte-fz0bbr::before,.svelte-fz0bbr::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}.svelte-fz0bbr::before,.svelte-fz0bbr::after{--tw-content:''}:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}button.svelte-fz0bbr,input.svelte-fz0bbr{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button.svelte-fz0bbr{text-transform:none}button.svelte-fz0bbr{-webkit-appearance:button;background-color:transparent;background-image:none}.svelte-fz0bbr:-moz-focusring{outline:auto}.svelte-fz0bbr:-moz-ui-invalid{box-shadow:none}.svelte-fz0bbr::-webkit-inner-spin-button,.svelte-fz0bbr::-webkit-outer-spin-button{height:auto}.svelte-fz0bbr::-webkit-search-decoration{-webkit-appearance:none}.svelte-fz0bbr::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}input.svelte-fz0bbr::-moz-placeholder{opacity:1;color:#9ca3af}input.svelte-fz0bbr::placeholder{opacity:1;color:#9ca3af}button.svelte-fz0bbr{cursor:pointer}.svelte-fz0bbr:disabled{cursor:default}.svelte-fz0bbr,.svelte-fz0bbr::before,.svelte-fz0bbr::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position:  ;--tw-gradient-via-position:  ;--tw-gradient-to-position:  ;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.svelte-fz0bbr::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position:  ;--tw-gradient-via-position:  ;--tw-gradient-to-position:  ;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.pointer-events-none.svelte-fz0bbr{pointer-events:none}.pointer-events-auto.svelte-fz0bbr{pointer-events:auto}.absolute.svelte-fz0bbr{position:absolute}.bottom-0.svelte-fz0bbr{bottom:0px}.bottom-2.svelte-fz0bbr{bottom:0.5rem}.left-0.svelte-fz0bbr{left:0px}.right-0.svelte-fz0bbr{right:0px}.right-2.svelte-fz0bbr{right:0.5rem}.top-0.svelte-fz0bbr{top:0px}.z-50.svelte-fz0bbr{z-index:50}.my-2.svelte-fz0bbr{margin-top:0.5rem;margin-bottom:0.5rem}.mb-2.svelte-fz0bbr{margin-bottom:0.5rem}.mb-4.svelte-fz0bbr{margin-bottom:1rem}.mt-2.svelte-fz0bbr{margin-top:0.5rem}.block.svelte-fz0bbr{display:block}.flex.svelte-fz0bbr{display:flex}.hidden.svelte-fz0bbr{display:none}.h-full.svelte-fz0bbr{height:100%}.w-3\\/4.svelte-fz0bbr{width:75%}.w-full.svelte-fz0bbr{width:100%}.flex-row.svelte-fz0bbr{flex-direction:row}.flex-col.svelte-fz0bbr{flex-direction:column}.items-baseline.svelte-fz0bbr{align-items:baseline}.items-stretch.svelte-fz0bbr{align-items:stretch}.justify-end.svelte-fz0bbr{justify-content:flex-end}.justify-between.svelte-fz0bbr{justify-content:space-between}.place-self-start.svelte-fz0bbr{place-self:start}.place-self-end.svelte-fz0bbr{place-self:end}.overflow-auto.svelte-fz0bbr{overflow:auto}.rounded-lg.svelte-fz0bbr{border-radius:0.5rem}.rounded-md.svelte-fz0bbr{border-radius:0.375rem}.bg-lime-200.svelte-fz0bbr{--tw-bg-opacity:1;background-color:rgb(217 249 157 / var(--tw-bg-opacity))}.bg-sky-200.svelte-fz0bbr{--tw-bg-opacity:1;background-color:rgb(186 230 253 / var(--tw-bg-opacity))}.bg-violet-100.svelte-fz0bbr{--tw-bg-opacity:1;background-color:rgb(237 233 254 / var(--tw-bg-opacity))}.bg-violet-700.svelte-fz0bbr{--tw-bg-opacity:1;background-color:rgb(109 40 217 / var(--tw-bg-opacity))}.px-1.svelte-fz0bbr{padding-left:0.25rem;padding-right:0.25rem}.px-2.svelte-fz0bbr{padding-left:0.5rem;padding-right:0.5rem}.px-4.svelte-fz0bbr{padding-left:1rem;padding-right:1rem}.py-1.svelte-fz0bbr{padding-top:0.25rem;padding-bottom:0.25rem}.py-2.svelte-fz0bbr{padding-top:0.5rem;padding-bottom:0.5rem}.text-justify.svelte-fz0bbr{text-align:justify}.text-base.svelte-fz0bbr{font-size:1rem;line-height:1.5rem}.text-lg.svelte-fz0bbr{font-size:1.125rem;line-height:1.75rem}.text-sm.svelte-fz0bbr{font-size:0.875rem;line-height:1.25rem}.text-xl.svelte-fz0bbr{font-size:1.25rem;line-height:1.75rem}.font-bold.svelte-fz0bbr{font-weight:700}.text-white.svelte-fz0bbr{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.max-w-1-3.svelte-fz0bbr{max-width:33.33%}.hover\\:bg-violet-600.svelte-fz0bbr:hover{--tw-bg-opacity:1;background-color:rgb(124 58 237 / var(--tw-bg-opacity))}`);
}
function Jr(e, t, r) {
  const n = e.slice();
  return n[15] = t[r], n;
}
function Es(e) {
  let t, r, n;
  return {
    c() {
      t = X("button"), t.textContent = "↘️", M(t, "title", "Reduce to lateral"), M(t, "class", "svelte-fz0bbr");
    },
    m(o, s) {
      se(o, t, s), r || (n = ze(
        t,
        "click",
        /*click_handler_2*/
        e[11]
      ), r = !0);
    },
    p: le,
    d(o) {
      o && ie(t), r = !1, n();
    }
  };
}
function Is(e) {
  let t, r, n;
  return {
    c() {
      t = X("button"), t.textContent = "↖️", M(t, "title", "Expand full width"), M(t, "class", "svelte-fz0bbr");
    },
    m(o, s) {
      se(o, t, s), r || (n = ze(
        t,
        "click",
        /*click_handler_1*/
        e[10]
      ), r = !0);
    },
    p: le,
    d(o) {
      o && ie(t), r = !1, n();
    }
  };
}
function Qr(e) {
  let t, r = cr(
    /*chat*/
    e[2]._.messages
  ), n = [];
  for (let o = 0; o < r.length; o += 1)
    n[o] = en(Jr(e, r, o));
  return {
    c() {
      for (let o = 0; o < n.length; o += 1)
        n[o].c();
      t = an();
    },
    m(o, s) {
      for (let u = 0; u < n.length; u += 1)
        n[u] && n[u].m(o, s);
      se(o, t, s);
    },
    p(o, s) {
      if (s & /*chat, $timeAgo*/
      132) {
        r = cr(
          /*chat*/
          o[2]._.messages
        );
        let u;
        for (u = 0; u < r.length; u += 1) {
          const c = Jr(o, r, u);
          n[u] ? n[u].p(c, s) : (n[u] = en(c), n[u].c(), n[u].m(t.parentNode, t));
        }
        for (; u < n.length; u += 1)
          n[u].d(1);
        n.length = r.length;
      }
    },
    d(o) {
      o && ie(t), pi(n, o);
    }
  };
}
function Zr(e) {
  let t, r, n, o, s, u = (
    /*$timeAgo*/
    e[7](
      /*message*/
      e[15].timestamp
    ) + ""
  ), c, b, m, E = (
    /*message*/
    e[15].content + ""
  ), y, $;
  function x(P, C) {
    return (
      /*message*/
      P[15].role == "user" ? xs : Ts
    );
  }
  let k = x(e), R = k(e);
  return {
    c() {
      t = X("div"), r = X("div"), n = X("span"), R.c(), o = ce(), s = X("span"), c = we(u), b = ce(), m = X("div"), y = we(E), $ = ce(), M(n, "class", "font-bold svelte-fz0bbr"), M(s, "class", "text-grey-500 text-sm svelte-fz0bbr"), M(r, "class", "mb-2 flex flex-row justify-between items-baseline svelte-fz0bbr"), M(m, "class", "svelte-fz0bbr"), M(t, "class", "rounded-md py-2 px-4 text-justify text-base block w-3/4 my-2 svelte-fz0bbr"), ne(
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
    m(P, C) {
      se(P, t, C), H(t, r), H(r, n), R.m(n, null), H(r, o), H(r, s), H(s, c), H(t, b), H(t, m), H(m, y), H(t, $);
    },
    p(P, C) {
      k !== (k = x(P)) && (R.d(1), R = k(P), R && (R.c(), R.m(n, null))), C & /*$timeAgo, chat*/
      132 && u !== (u = /*$timeAgo*/
      P[7](
        /*message*/
        P[15].timestamp
      ) + "") && tt(c, u), C & /*chat*/
      4 && E !== (E = /*message*/
      P[15].content + "") && tt(y, E), C & /*chat*/
      4 && ne(
        t,
        "bg-sky-200",
        /*message*/
        P[15].role == "user"
      ), C & /*chat*/
      4 && ne(
        t,
        "place-self-end",
        /*message*/
        P[15].role == "user"
      ), C & /*chat*/
      4 && ne(
        t,
        "bg-lime-200",
        /*message*/
        P[15].role == "assistant"
      ), C & /*chat*/
      4 && ne(
        t,
        "place-self-start",
        /*message*/
        P[15].role == "assistant"
      );
    },
    d(P) {
      P && ie(t), R.d();
    }
  };
}
function Ts(e) {
  let t;
  return {
    c() {
      t = we("Assistant");
    },
    m(r, n) {
      se(r, t, n);
    },
    d(r) {
      r && ie(t);
    }
  };
}
function xs(e) {
  let t;
  return {
    c() {
      t = we("You");
    },
    m(r, n) {
      se(r, t, n);
    },
    d(r) {
      r && ie(t);
    }
  };
}
function en(e) {
  let t, r = (
    /*message*/
    e[15].role != "system" && Zr(e)
  );
  return {
    c() {
      r && r.c(), t = an();
    },
    m(n, o) {
      r && r.m(n, o), se(n, t, o);
    },
    p(n, o) {
      /*message*/
      n[15].role != "system" ? r ? r.p(n, o) : (r = Zr(n), r.c(), r.m(t.parentNode, t)) : r && (r.d(1), r = null);
    },
    d(n) {
      n && ie(t), r && r.d(n);
    }
  };
}
function tn(e) {
  let t, r, n, o, s, u, c;
  return {
    c() {
      t = X("form"), r = X("input"), o = ce(), s = X("div"), s.textContent = "The assistant makes mistakes and cannot read the documentation yet: always check important information!", r.disabled = n = /*status*/
      e[0] && /*$status*/
      e[6].slug == "running", M(r, "class", "w-full px-2 py-1 text-lg rounded-lg bg-violet-100 svelte-fz0bbr"), M(r, "type", "text"), M(r, "placeholder", "What do you want help with?"), M(t, "action", "#"), M(t, "class", "my-2 svelte-fz0bbr"), M(s, "class", "mt-2 text-sm text-justify svelte-fz0bbr");
    },
    m(b, m) {
      se(b, t, m), H(t, r), sr(
        r,
        /*text*/
        e[3]
      ), se(b, o, m), se(b, s, m), u || (c = [
        ze(
          r,
          "input",
          /*input_input_handler*/
          e[13]
        ),
        ze(t, "submit", mi(
          /*handleUserMessage*/
          e[8]
        ))
      ], u = !0);
    },
    p(b, m) {
      m & /*status, $status*/
      65 && n !== (n = /*status*/
      b[0] && /*$status*/
      b[6].slug == "running") && (r.disabled = n), m & /*text*/
      8 && r.value !== /*text*/
      b[3] && sr(
        r,
        /*text*/
        b[3]
      );
    },
    d(b) {
      b && (ie(t), ie(o), ie(s)), u = !1, Be(c);
    }
  };
}
function ks(e) {
  let t, r, n, o, s, u, c = (
    /*status*/
    (e[0] ? (
      /*$status*/
      e[6].icon
    ) : "") + ""
  ), b, m, E, y, $, x, k, R, P, C, Y = (
    /*status*/
    (e[0] ? (
      /*$status*/
      e[6].icon
    ) : "") + ""
  ), ae, J, A, D, N, g, T, z, B, F, K, de;
  function pe(U, V) {
    return (
      /*chatBotExpanded*/
      U[5] ? Es : Is
    );
  }
  let me = pe(e), ee = me(e), te = (
    /*model*/
    e[1] && /*chat*/
    e[2] && Qr(e)
  ), re = (
    /*model*/
    e[1] && /*chat*/
    e[2] && tn(e)
  );
  return {
    c() {
      t = X("button"), r = X("span"), r.textContent = "✨", n = ce(), o = X("span"), o.textContent = "Need Help?", s = ce(), u = X("span"), b = we(c), E = ce(), y = X("div"), $ = X("content"), x = X("div"), k = X("div"), R = X("span"), R.textContent = "✨ HPC Assistant", P = ce(), C = X("span"), ae = we(Y), A = ce(), D = X("div"), ee.c(), N = ce(), g = X("button"), g.textContent = "➖", T = ce(), z = X("div"), te && te.c(), B = ce(), F = X("div"), re && re.c(), M(r, "title", "Try our AI Assistant"), M(r, "class", "svelte-fz0bbr"), M(o, "class", "px-1 svelte-fz0bbr"), M(u, "title", m = /*status*/
      e[0] ? (
        /*$status*/
        e[6].description
      ) : ""), M(u, "class", "svelte-fz0bbr"), M(t, "class", "absolute bottom-2 right-2 py-2 px-4 bg-violet-700 hover:bg-violet-600 font-bold text-lg text-white rounded-lg svelte-fz0bbr"), ne(
        t,
        "hidden",
        /*chatBotOpen*/
        e[4]
      ), M(R, "class", "svelte-fz0bbr"), M(C, "title", J = /*status*/
      e[0] ? (
        /*$status*/
        e[6].description
      ) : ""), M(C, "class", "svelte-fz0bbr"), M(k, "class", "svelte-fz0bbr"), M(g, "title", "Minify the assistant"), M(g, "class", "svelte-fz0bbr"), M(D, "class", "svelte-fz0bbr"), M(x, "class", "mb-4 font-bold text-xl flex flex-row items-stretch justify-between svelte-fz0bbr"), M(z, "class", "overflow-auto flex flex-col items-stretch svelte-fz0bbr"), M(F, "class", "svelte-fz0bbr"), M($, "class", "bg-violet-100 text-base rounded-md h-full px-4 py-2 z-50 pointer-events-auto flex flex-col items-stretch justify-between svelte-fz0bbr"), ne(
        $,
        "w-full",
        /*chatBotExpanded*/
        e[5]
      ), ne($, "max-w-1-3", !/*chatBotExpanded*/
      e[5]), M(y, "class", "absolute bottom-0 right-0 top-0 left-0 px-2 py-2 w-full h-full flex flex-row justify-end pointer-events-none svelte-fz0bbr"), ne(y, "hidden", !/*chatBotOpen*/
      e[4]);
    },
    m(U, V) {
      se(U, t, V), H(t, r), H(t, n), H(t, o), H(t, s), H(t, u), H(u, b), se(U, E, V), se(U, y, V), H(y, $), H($, x), H(x, k), H(k, R), H(k, P), H(k, C), H(C, ae), H(x, A), H(x, D), ee.m(D, null), H(D, N), H(D, g), H($, T), H($, z), te && te.m(z, null), H($, B), H($, F), re && re.m(F, null), K || (de = [
        ze(
          t,
          "click",
          /*click_handler*/
          e[9]
        ),
        ze(
          g,
          "click",
          /*click_handler_3*/
          e[12]
        )
      ], K = !0);
    },
    p(U, [V]) {
      V & /*status, $status*/
      65 && c !== (c = /*status*/
      (U[0] ? (
        /*$status*/
        U[6].icon
      ) : "") + "") && tt(b, c), V & /*status, $status*/
      65 && m !== (m = /*status*/
      U[0] ? (
        /*$status*/
        U[6].description
      ) : "") && M(u, "title", m), V & /*chatBotOpen*/
      16 && ne(
        t,
        "hidden",
        /*chatBotOpen*/
        U[4]
      ), V & /*status, $status*/
      65 && Y !== (Y = /*status*/
      (U[0] ? (
        /*$status*/
        U[6].icon
      ) : "") + "") && tt(ae, Y), V & /*status, $status*/
      65 && J !== (J = /*status*/
      U[0] ? (
        /*$status*/
        U[6].description
      ) : "") && M(C, "title", J), me === (me = pe(U)) && ee ? ee.p(U, V) : (ee.d(1), ee = me(U), ee && (ee.c(), ee.m(D, N))), /*model*/
      U[1] && /*chat*/
      U[2] ? te ? te.p(U, V) : (te = Qr(U), te.c(), te.m(z, null)) : te && (te.d(1), te = null), /*model*/
      U[1] && /*chat*/
      U[2] ? re ? re.p(U, V) : (re = tn(U), re.c(), re.m(F, null)) : re && (re.d(1), re = null), V & /*chatBotExpanded*/
      32 && ne(
        $,
        "w-full",
        /*chatBotExpanded*/
        U[5]
      ), V & /*chatBotExpanded*/
      32 && ne($, "max-w-1-3", !/*chatBotExpanded*/
      U[5]), V & /*chatBotOpen*/
      16 && ne(y, "hidden", !/*chatBotOpen*/
      U[4]);
    },
    i: le,
    o: le,
    d(U) {
      U && (ie(t), ie(E), ie(y)), ee.d(), te && te.d(), re && re.d(), K = !1, Be(de);
    }
  };
}
function Ls(e, t, r) {
  let n, o = le, s = () => (o(), o = Dt(b, (J) => r(6, n = J)), b), u;
  ci(e, $s, (J) => r(7, u = J)), e.$$.on_destroy.push(() => o());
  let c, b, m, E;
  gi(async () => {
    const J = `${window.location.protocol}//${window.location.hostname}:${window.location.port}`;
    c = new Bi(J), s(r(0, b = c.status)), r(1, m = await c.getBestModel(pr.modelList)), m && (await c.preloadModel(m), r(2, E = new ta(() => r(2, E), c)), E.addMessage(pr.systemPrompt));
  });
  let y, $ = !1, x = !1;
  async function k() {
    E.addMessage({ role: "user", content: y }), r(3, y = ""), await E.complete(m);
  }
  const R = () => r(4, $ = !0), P = () => r(5, x = !0), C = () => r(5, x = !1), Y = () => r(4, $ = !1);
  function ae() {
    y = this.value, r(3, y);
  }
  return [
    b,
    m,
    E,
    y,
    $,
    x,
    n,
    u,
    k,
    R,
    P,
    C,
    Y,
    ae
  ];
}
class Ps extends Li {
  constructor(t) {
    super(), xi(this, t, Ls, ks, on, {}, As);
  }
}
customElements.define("hpc-chatbot", ki(Ps, {}, [], [], !0));
export {
  Ps as ChatBot
};
//# sourceMappingURL=components.js.map
