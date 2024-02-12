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
function De(e) {
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
function Nt(e, ...t) {
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
  return Nt(e, (r) => t = r)(), t;
}
function si(e, t, r) {
  e.$$.on_destroy.push(Nt(t, r));
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
function Re(e, t, r, n) {
  return e.addEventListener(t, r, n), () => e.removeEventListener(t, r, n);
}
function hi(e) {
  return function(t) {
    return t.preventDefault(), e.call(this, t);
  };
}
function F(e, t, r) {
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
let He;
function Me(e) {
  He = e;
}
function yi() {
  if (!He)
    throw new Error("Function called outside component initialization");
  return He;
}
function gi(e) {
  yi().$$.on_mount.push(e);
}
const je = [], sr = [];
let Pe = [];
const ur = [], vi = /* @__PURE__ */ Promise.resolve();
let gt = !1;
function bi() {
  gt || (gt = !0, vi.then(rn));
}
function vt(e) {
  Pe.push(e);
}
const mt = /* @__PURE__ */ new Set();
let Ee = 0;
function rn() {
  if (Ee !== 0)
    return;
  const e = He;
  do {
    try {
      for (; Ee < je.length; ) {
        const t = je[Ee];
        Ee++, Me(t), wi(t.$$);
      }
    } catch (t) {
      throw je.length = 0, Ee = 0, t;
    }
    for (Me(null), je.length = 0, Ee = 0; sr.length; )
      sr.pop()();
    for (let t = 0; t < Pe.length; t += 1) {
      const r = Pe[t];
      mt.has(r) || (mt.add(r), r());
    }
    Pe.length = 0;
  } while (je.length);
  for (; ur.length; )
    ur.pop()();
  gt = !1, mt.clear(), Me(e);
}
function wi(e) {
  if (e.fragment !== null) {
    e.update(), De(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(vt);
  }
}
function _i(e) {
  const t = [], r = [];
  Pe.forEach((n) => e.indexOf(n) === -1 ? t.push(n) : r.push(n)), r.forEach((n) => n()), Pe = t;
}
const Si = /* @__PURE__ */ new Set();
function Oi(e, t) {
  e && e.i && (Si.delete(e), e.i(t));
}
function fr(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function ki(e, t, r) {
  const { fragment: n, after_update: o } = e.$$;
  n && n.m(t, r), vt(() => {
    const s = e.$$.on_mount.map(Zr).filter(en);
    e.$$.on_destroy ? e.$$.on_destroy.push(...s) : De(s), e.$$.on_mount = [];
  }), o.forEach(vt);
}
function $i(e, t) {
  const r = e.$$;
  r.fragment !== null && (_i(r.after_update), De(r.on_destroy), r.fragment && r.fragment.d(t), r.on_destroy = r.fragment = null, r.ctx = []);
}
function Ai(e, t) {
  e.$$.dirty[0] === -1 && (je.push(e), bi(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function Ei(e, t, r, n, o, s, c = null, f = [-1]) {
  const y = He;
  Me(e);
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
  let I = !1;
  if (m.ctx = r ? r(e, t.props || {}, (g, _, ...$) => {
    const T = $.length ? $[0] : _;
    return m.ctx && o(m.ctx[g], m.ctx[g] = T) && (!m.skip_bound && m.bound[g] && m.bound[g](T), I && Ai(e, g)), _;
  }) : [], m.update(), I = !0, De(m.before_update), m.fragment = n ? n(m.ctx) : !1, t.target) {
    if (t.hydrate) {
      const g = pi(t.target);
      m.fragment && m.fragment.l(g), g.forEach(te);
    } else
      m.fragment && m.fragment.c();
    t.intro && Oi(e.$$.fragment), ki(e, t.target, t.anchor), rn();
  }
  Me(y);
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
              c = V("slot"), s !== "default" && F(c, "name", s);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(m, I) {
              ne(m, c, I);
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
function Ii(e, t, r, n, o, s) {
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
class Ti {
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
    $i(this, 1), this.$destroy = se;
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
const ji = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(ji);
var xe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function xi(e) {
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
      function c(m, I) {
        if (!o[m]) {
          if (!n[m]) {
            var g = typeof Ge == "function" && Ge;
            if (!I && g)
              return g(m, !0);
            if (f)
              return f(m, !0);
            var _ = new Error("Cannot find module '" + m + "'");
            throw _.code = "MODULE_NOT_FOUND", _;
          }
          var $ = o[m] = { exports: {} };
          n[m][0].call($.exports, function(T) {
            var E = n[m][1][T];
            return c(E || T);
          }, $, $.exports, r, n, o, s);
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
          var y = 0, m = new c(T), I = s.document.createTextNode("");
          m.observe(I, {
            characterData: !0
          }), f = function() {
            I.data = y = ++y % 2;
          };
        } else if (!s.setImmediate && typeof s.MessageChannel < "u") {
          var g = new s.MessageChannel();
          g.port1.onmessage = T, f = function() {
            g.port2.postMessage(0);
          };
        } else
          "document" in s && "onreadystatechange" in s.document.createElement("script") ? f = function() {
            var N = s.document.createElement("script");
            N.onreadystatechange = function() {
              T(), N.onreadystatechange = null, N.parentNode.removeChild(N), N = null;
            }, s.document.documentElement.appendChild(N);
          } : f = function() {
            setTimeout(T, 0);
          };
        var _, $ = [];
        function T() {
          _ = !0;
          for (var N, K, z = $.length; z; ) {
            for (K = $, $ = [], N = -1; ++N < z; )
              K[N]();
            z = $.length;
          }
          _ = !1;
        }
        n.exports = E;
        function E(N) {
          $.push(N) === 1 && !_ && f();
        }
      }).call(this, typeof xe < "u" ? xe : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 2: [function(r, n, o) {
      var s = r(1);
      function c() {
      }
      var f = {}, y = ["REJECTED"], m = ["FULFILLED"], I = ["PENDING"];
      n.exports = g;
      function g(A) {
        if (typeof A != "function")
          throw new TypeError("resolver must be a function");
        this.state = I, this.queue = [], this.outcome = void 0, A !== c && E(this, A);
      }
      g.prototype.catch = function(A) {
        return this.then(null, A);
      }, g.prototype.then = function(A, R) {
        if (typeof A != "function" && this.state === m || typeof R != "function" && this.state === y)
          return this;
        var P = new this.constructor(c);
        if (this.state !== I) {
          var b = this.state === m ? A : R;
          $(P, b, this.outcome);
        } else
          this.queue.push(new _(P, A, R));
        return P;
      };
      function _(A, R, P) {
        this.promise = A, typeof R == "function" && (this.onFulfilled = R, this.callFulfilled = this.otherCallFulfilled), typeof P == "function" && (this.onRejected = P, this.callRejected = this.otherCallRejected);
      }
      _.prototype.callFulfilled = function(A) {
        f.resolve(this.promise, A);
      }, _.prototype.otherCallFulfilled = function(A) {
        $(this.promise, this.onFulfilled, A);
      }, _.prototype.callRejected = function(A) {
        f.reject(this.promise, A);
      }, _.prototype.otherCallRejected = function(A) {
        $(this.promise, this.onRejected, A);
      };
      function $(A, R, P) {
        s(function() {
          var b;
          try {
            b = R(P);
          } catch (x) {
            return f.reject(A, x);
          }
          b === A ? f.reject(A, new TypeError("Cannot resolve promise with itself")) : f.resolve(A, b);
        });
      }
      f.resolve = function(A, R) {
        var P = N(T, R);
        if (P.status === "error")
          return f.reject(A, P.value);
        var b = P.value;
        if (b)
          E(A, b);
        else {
          A.state = m, A.outcome = R;
          for (var x = -1, D = A.queue.length; ++x < D; )
            A.queue[x].callFulfilled(R);
        }
        return A;
      }, f.reject = function(A, R) {
        A.state = y, A.outcome = R;
        for (var P = -1, b = A.queue.length; ++P < b; )
          A.queue[P].callRejected(R);
        return A;
      };
      function T(A) {
        var R = A && A.then;
        if (A && (typeof A == "object" || typeof A == "function") && typeof R == "function")
          return function() {
            R.apply(A, arguments);
          };
      }
      function E(A, R) {
        var P = !1;
        function b(M) {
          P || (P = !0, f.reject(A, M));
        }
        function x(M) {
          P || (P = !0, f.resolve(A, M));
        }
        function D() {
          R(x, b);
        }
        var B = N(D);
        B.status === "error" && b(B.value);
      }
      function N(A, R) {
        var P = {};
        try {
          P.value = A(R), P.status = "success";
        } catch (b) {
          P.status = "error", P.value = b;
        }
        return P;
      }
      g.resolve = K;
      function K(A) {
        return A instanceof this ? A : f.resolve(new this(c), A);
      }
      g.reject = z;
      function z(A) {
        var R = new this(c);
        return f.reject(R, A);
      }
      g.all = ae;
      function ae(A) {
        var R = this;
        if (Object.prototype.toString.call(A) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var P = A.length, b = !1;
        if (!P)
          return this.resolve([]);
        for (var x = new Array(P), D = 0, B = -1, M = new this(c); ++B < P; )
          q(A[B], B);
        return M;
        function q(Z, de) {
          R.resolve(Z).then(he, function(re) {
            b || (b = !0, f.reject(M, re));
          });
          function he(re) {
            x[de] = re, ++D === P && !b && (b = !0, f.resolve(M, x));
          }
        }
      }
      g.race = G;
      function G(A) {
        var R = this;
        if (Object.prototype.toString.call(A) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var P = A.length, b = !1;
        if (!P)
          return this.resolve([]);
        for (var x = -1, D = new this(c); ++x < P; )
          B(A[x]);
        return D;
        function B(M) {
          R.resolve(M).then(function(q) {
            b || (b = !0, f.resolve(D, q));
          }, function(q) {
            b || (b = !0, f.reject(D, q));
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
      function I(i, u) {
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
      function $(i, u, a) {
        typeof u == "function" && i.then(u), typeof a == "function" && i.catch(a);
      }
      function T(i) {
        return typeof i != "string" && (console.warn(i + " used as a key, but it is not a string."), i = String(i)), i;
      }
      function E() {
        if (arguments.length && typeof arguments[arguments.length - 1] == "function")
          return arguments[arguments.length - 1];
      }
      var N = "local-forage-detect-blob-support", K = void 0, z = {}, ae = Object.prototype.toString, G = "readonly", A = "readwrite";
      function R(i) {
        for (var u = i.length, a = new ArrayBuffer(u), d = new Uint8Array(a), p = 0; p < u; p++)
          d[p] = i.charCodeAt(p);
        return a;
      }
      function P(i) {
        return new g(function(u) {
          var a = i.transaction(N, A), d = I([""]);
          a.objectStore(N).put(d, "key"), a.onabort = function(p) {
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
        return typeof K == "boolean" ? g.resolve(K) : P(i).then(function(u) {
          return K = u, K;
        });
      }
      function x(i) {
        var u = z[i.name], a = {};
        a.promise = new g(function(d, p) {
          a.resolve = d, a.reject = p;
        }), u.deferredOperations.push(a), u.dbReady ? u.dbReady = u.dbReady.then(function() {
          return a.promise;
        }) : u.dbReady = a.promise;
      }
      function D(i) {
        var u = z[i.name], a = u.deferredOperations.pop();
        if (a)
          return a.resolve(), a.promise;
      }
      function B(i, u) {
        var a = z[i.name], d = a.deferredOperations.pop();
        if (d)
          return d.reject(u), d.promise;
      }
      function M(i, u) {
        return new g(function(a, d) {
          if (z[i.name] = z[i.name] || Ft(), i.db)
            if (u)
              x(i), i.db.close();
            else
              return a(i.db);
          var p = [i.name];
          u && p.push(i.version);
          var l = y.open.apply(y, p);
          u && (l.onupgradeneeded = function(v) {
            var w = l.result;
            try {
              w.createObjectStore(i.storeName), v.oldVersion <= 1 && w.createObjectStore(N);
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
            }, a(v), D(i);
          };
        });
      }
      function q(i) {
        return M(i, !1);
      }
      function Z(i) {
        return M(i, !0);
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
        var u = R(atob(i.data));
        return I([u], { type: i.type });
      }
      function U(i) {
        return i && i.__local_forage_encoded_blob;
      }
      function ee(i) {
        var u = this, a = u._initReady().then(function() {
          var d = z[u._dbInfo.name];
          if (d && d.dbReady)
            return d.dbReady;
        });
        return $(a, i, i), a;
      }
      function oo(i) {
        x(i);
        for (var u = z[i.name], a = u.forages, d = 0; d < a.length; d++) {
          var p = a[d];
          p._dbInfo.db && (p._dbInfo.db.close(), p._dbInfo.db = null);
        }
        return i.db = null, q(i).then(function(l) {
          return i.db = l, de(i) ? Z(i) : l;
        }).then(function(l) {
          i.db = u.db = l;
          for (var v = 0; v < a.length; v++)
            a[v]._dbInfo.db = l;
        }).catch(function(l) {
          throw B(i, l), l;
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
      function io(i) {
        var u = this, a = {
          db: null
        };
        if (i)
          for (var d in i)
            a[d] = i[d];
        var p = z[a.name];
        p || (p = Ft(), z[a.name] = p), p.forages.push(u), u._initReady || (u._initReady = u.ready, u.ready = ee);
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
          return a.db = p.db, q(a);
        }).then(function(k) {
          return a.db = k, de(a, u._defaultConfig.version) ? Z(a) : k;
        }).then(function(k) {
          a.db = p.db = k, u._dbInfo = a;
          for (var j = 0; j < O.length; j++) {
            var C = O[j];
            C !== u && (C._dbInfo.db = a.db, C._dbInfo.version = a.version);
          }
        });
      }
      function ao(i, u) {
        var a = this;
        i = T(i);
        var d = new g(function(p, l) {
          a.ready().then(function() {
            me(a._dbInfo, G, function(v, w) {
              if (v)
                return l(v);
              try {
                var S = w.objectStore(a._dbInfo.storeName), O = S.get(i);
                O.onsuccess = function() {
                  var k = O.result;
                  k === void 0 && (k = null), U(k) && (k = re(k)), p(k);
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
      function so(i, u) {
        var a = this, d = new g(function(p, l) {
          a.ready().then(function() {
            me(a._dbInfo, G, function(v, w) {
              if (v)
                return l(v);
              try {
                var S = w.objectStore(a._dbInfo.storeName), O = S.openCursor(), k = 1;
                O.onsuccess = function() {
                  var j = O.result;
                  if (j) {
                    var C = j.value;
                    U(C) && (C = re(C));
                    var H = i(C, j.key, k++);
                    H !== void 0 ? p(H) : j.continue();
                  } else
                    p();
                }, O.onerror = function() {
                  l(O.error);
                };
              } catch (j) {
                l(j);
              }
            });
          }).catch(l);
        });
        return _(d, u), d;
      }
      function uo(i, u, a) {
        var d = this;
        i = T(i);
        var p = new g(function(l, v) {
          var w;
          d.ready().then(function() {
            return w = d._dbInfo, ae.call(u) === "[object Blob]" ? b(w.db).then(function(S) {
              return S ? u : he(u);
            }) : u;
          }).then(function(S) {
            me(d._dbInfo, A, function(O, k) {
              if (O)
                return v(O);
              try {
                var j = k.objectStore(d._dbInfo.storeName);
                S === null && (S = void 0);
                var C = j.put(S, i);
                k.oncomplete = function() {
                  S === void 0 && (S = null), l(S);
                }, k.onabort = k.onerror = function() {
                  var H = C.error ? C.error : C.transaction.error;
                  v(H);
                };
              } catch (H) {
                v(H);
              }
            });
          }).catch(v);
        });
        return _(p, a), p;
      }
      function fo(i, u) {
        var a = this;
        i = T(i);
        var d = new g(function(p, l) {
          a.ready().then(function() {
            me(a._dbInfo, A, function(v, w) {
              if (v)
                return l(v);
              try {
                var S = w.objectStore(a._dbInfo.storeName), O = S.delete(i);
                w.oncomplete = function() {
                  p();
                }, w.onerror = function() {
                  l(O.error);
                }, w.onabort = function() {
                  var k = O.error ? O.error : O.transaction.error;
                  l(k);
                };
              } catch (k) {
                l(k);
              }
            });
          }).catch(l);
        });
        return _(d, u), d;
      }
      function co(i) {
        var u = this, a = new g(function(d, p) {
          u.ready().then(function() {
            me(u._dbInfo, A, function(l, v) {
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
                var S = w.objectStore(a._dbInfo.storeName), O = !1, k = S.openKeyCursor();
                k.onsuccess = function() {
                  var j = k.result;
                  if (!j) {
                    p(null);
                    return;
                  }
                  i === 0 || O ? p(j.key) : (O = !0, j.advance(i));
                }, k.onerror = function() {
                  l(k.error);
                };
              } catch (j) {
                l(j);
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
                  var k = S.result;
                  if (!k) {
                    d(O);
                    return;
                  }
                  O.push(k.key), k.continue();
                }, S.onerror = function() {
                  p(S.error);
                };
              } catch (k) {
                p(k);
              }
            });
          }).catch(p);
        });
        return _(a, i), a;
      }
      function mo(i, u) {
        u = E.apply(this, arguments);
        var a = this.config();
        i = typeof i != "function" && i || {}, i.name || (i.name = i.name || a.name, i.storeName = i.storeName || a.storeName);
        var d = this, p;
        if (!i.name)
          p = g.reject("Invalid arguments");
        else {
          var l = i.name === a.name && d._dbInfo.db, v = l ? g.resolve(d._dbInfo.db) : q(i).then(function(w) {
            var S = z[i.name], O = S.forages;
            S.db = w;
            for (var k = 0; k < O.length; k++)
              O[k]._dbInfo.db = w;
            return w;
          });
          i.storeName ? p = v.then(function(w) {
            if (w.objectStoreNames.contains(i.storeName)) {
              var S = w.version + 1;
              x(i);
              var O = z[i.name], k = O.forages;
              w.close();
              for (var j = 0; j < k.length; j++) {
                var C = k[j];
                C._dbInfo.db = null, C._dbInfo.version = S;
              }
              var H = new g(function(Y, Q) {
                var J = y.open(i.name, S);
                J.onerror = function(ue) {
                  var Ce = J.result;
                  Ce.close(), Q(ue);
                }, J.onupgradeneeded = function() {
                  var ue = J.result;
                  ue.deleteObjectStore(i.storeName);
                }, J.onsuccess = function() {
                  var ue = J.result;
                  ue.close(), Y(ue);
                };
              });
              return H.then(function(Y) {
                O.db = Y;
                for (var Q = 0; Q < k.length; Q++) {
                  var J = k[Q];
                  J._dbInfo.db = Y, D(J._dbInfo);
                }
              }).catch(function(Y) {
                throw (B(i, Y) || g.resolve()).catch(function() {
                }), Y;
              });
            }
          }) : p = v.then(function(w) {
            x(i);
            var S = z[i.name], O = S.forages;
            w.close();
            for (var k = 0; k < O.length; k++) {
              var j = O[k];
              j._dbInfo.db = null;
            }
            var C = new g(function(H, Y) {
              var Q = y.deleteDatabase(i.name);
              Q.onerror = function() {
                var J = Q.result;
                J && J.close(), Y(Q.error);
              }, Q.onblocked = function() {
                console.warn('dropInstance blocked for database "' + i.name + '" until all open connections are closed');
              }, Q.onsuccess = function() {
                var J = Q.result;
                J && J.close(), H(J);
              };
            });
            return C.then(function(H) {
              S.db = H;
              for (var Y = 0; Y < O.length; Y++) {
                var Q = O[Y];
                D(Q._dbInfo);
              }
            }).catch(function(H) {
              throw (B(i, H) || g.resolve()).catch(function() {
              }), H;
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
      var ge = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", vo = "~~local_forage_type~", Mt = /^~~local_forage_type~([^~]+)~/, Ve = "__lfsc__:", at = Ve.length, st = "arbf", ut = "blob", Ut = "si08", zt = "ui08", Ht = "uic8", Yt = "si16", qt = "si32", Wt = "ur16", Kt = "ui32", Vt = "fl32", Xt = "fl64", Gt = at + st.length, Jt = Object.prototype.toString;
      function Qt(i) {
        var u = i.length * 0.75, a = i.length, d, p = 0, l, v, w, S;
        i[i.length - 1] === "=" && (u--, i[i.length - 2] === "=" && u--);
        var O = new ArrayBuffer(u), k = new Uint8Array(O);
        for (d = 0; d < a; d += 4)
          l = ge.indexOf(i[d]), v = ge.indexOf(i[d + 1]), w = ge.indexOf(i[d + 2]), S = ge.indexOf(i[d + 3]), k[p++] = l << 2 | v >> 4, k[p++] = (v & 15) << 4 | w >> 2, k[p++] = (w & 3) << 6 | S & 63;
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
          i instanceof ArrayBuffer ? (d = i, p += st) : (d = i.buffer, a === "[object Int8Array]" ? p += Ut : a === "[object Uint8Array]" ? p += zt : a === "[object Uint8ClampedArray]" ? p += Ht : a === "[object Int16Array]" ? p += Yt : a === "[object Uint16Array]" ? p += Wt : a === "[object Int32Array]" ? p += qt : a === "[object Uint32Array]" ? p += Kt : a === "[object Float32Array]" ? p += Vt : a === "[object Float64Array]" ? p += Xt : u(new Error("Failed to get type for BinaryArray"))), u(p + ft(d));
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
        if (a === ut && Mt.test(u)) {
          var p = u.match(Mt);
          d = p[1], u = u.substring(p[0].length);
        }
        var l = Qt(u);
        switch (a) {
          case st:
            return l;
          case ut:
            return I([l], { type: d });
          case Ut:
            return new Int8Array(l);
          case zt:
            return new Uint8Array(l);
          case Ht:
            return new Uint8ClampedArray(l);
          case Yt:
            return new Int16Array(l);
          case Wt:
            return new Uint16Array(l);
          case qt:
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
        i = T(i);
        var d = new g(function(p, l) {
          a.ready().then(function() {
            var v = a._dbInfo;
            v.db.transaction(function(w) {
              ve(w, v, "SELECT * FROM " + v.storeName + " WHERE key = ? LIMIT 1", [i], function(S, O) {
                var k = O.rows.length ? O.rows.item(0).value : null;
                k && (k = v.serializer.deserialize(k)), p(k);
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
                for (var k = O.rows, j = k.length, C = 0; C < j; C++) {
                  var H = k.item(C), Y = H.value;
                  if (Y && (Y = v.serializer.deserialize(Y)), Y = i(Y, H.key, C + 1), Y !== void 0) {
                    p(Y);
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
        i = T(i);
        var l = new g(function(v, w) {
          p.ready().then(function() {
            u === void 0 && (u = null);
            var S = u, O = p._dbInfo;
            O.serializer.serialize(u, function(k, j) {
              j ? w(j) : O.db.transaction(function(C) {
                ve(C, O, "INSERT OR REPLACE INTO " + O.storeName + " (key, value) VALUES (?, ?)", [i, k], function() {
                  v(S);
                }, function(H, Y) {
                  w(Y);
                });
              }, function(C) {
                if (C.code === C.QUOTA_ERR) {
                  if (d > 0) {
                    v(er.apply(p, [i, S, a, d - 1]));
                    return;
                  }
                  w(C);
                }
              });
            });
          }).catch(w);
        });
        return _(l, a), l;
      }
      function ko(i, u, a) {
        return er.apply(this, [i, u, a, 1]);
      }
      function $o(i, u) {
        var a = this;
        i = T(i);
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
      function Ao(i) {
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
      function Eo(i) {
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
      function Io(i, u) {
        var a = this, d = new g(function(p, l) {
          a.ready().then(function() {
            var v = a._dbInfo;
            v.db.transaction(function(w) {
              ve(w, v, "SELECT key FROM " + v.storeName + " WHERE id = ? LIMIT 1", [i + 1], function(S, O) {
                var k = O.rows.length ? O.rows.item(0).key : null;
                p(k);
              }, function(S, O) {
                l(O);
              });
            });
          }).catch(l);
        });
        return _(d, u), d;
      }
      function To(i) {
        var u = this, a = new g(function(d, p) {
          u.ready().then(function() {
            var l = u._dbInfo;
            l.db.transaction(function(v) {
              ve(v, l, "SELECT key FROM " + l.storeName, [], function(w, S) {
                for (var O = [], k = 0; k < S.rows.length; k++)
                  O.push(S.rows.item(k).key);
                d(O);
              }, function(w, S) {
                p(S);
              });
            });
          }).catch(p);
        });
        return _(a, i), a;
      }
      function jo(i) {
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
      function xo(i, u) {
        u = E.apply(this, arguments);
        var a = this.config();
        i = typeof i != "function" && i || {}, i.name || (i.name = i.name || a.name, i.storeName = i.storeName || a.storeName);
        var d = this, p;
        return i.name ? p = new g(function(l) {
          var v;
          i.name === a.name ? v = d._dbInfo.db : v = openDatabase(i.name, "", "", 0), i.storeName ? l({
            db: v,
            storeNames: [i.storeName]
          }) : l(jo(v));
        }).then(function(l) {
          return new g(function(v, w) {
            l.db.transaction(function(S) {
              function O(H) {
                return new g(function(Y, Q) {
                  S.executeSql("DROP TABLE IF EXISTS " + H, [], function() {
                    Y();
                  }, function(J, ue) {
                    Q(ue);
                  });
                });
              }
              for (var k = [], j = 0, C = l.storeNames.length; j < C; j++)
                k.push(O(l.storeNames[j]));
              g.all(k).then(function() {
                v();
              }).catch(function(H) {
                w(H);
              });
            }, function(S) {
              w(S);
            });
          });
        }) : p = g.reject("Invalid arguments"), _(p, u), p;
      }
      var Lo = {
        _driver: "webSQLStorage",
        _initStorage: _o,
        _support: go(),
        iterate: Oo,
        getItem: So,
        setItem: ko,
        removeItem: $o,
        clear: Ao,
        length: Eo,
        key: Io,
        keys: To,
        dropInstance: xo
      };
      function Po() {
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
      function No() {
        var i = "_localforage_support_test";
        try {
          return localStorage.setItem(i, !0), localStorage.removeItem(i), !1;
        } catch {
          return !0;
        }
      }
      function Ro() {
        return !No() || localStorage.length > 0;
      }
      function Do(i) {
        var u = this, a = {};
        if (i)
          for (var d in i)
            a[d] = i[d];
        return a.keyPrefix = tr(i, u._defaultConfig), Ro() ? (u._dbInfo = a, a.serializer = ct, g.resolve()) : g.reject();
      }
      function Bo(i) {
        var u = this, a = u.ready().then(function() {
          for (var d = u._dbInfo.keyPrefix, p = localStorage.length - 1; p >= 0; p--) {
            var l = localStorage.key(p);
            l.indexOf(d) === 0 && localStorage.removeItem(l);
          }
        });
        return _(a, i), a;
      }
      function Co(i, u) {
        var a = this;
        i = T(i);
        var d = a.ready().then(function() {
          var p = a._dbInfo, l = localStorage.getItem(p.keyPrefix + i);
          return l && (l = p.serializer.deserialize(l)), l;
        });
        return _(d, u), d;
      }
      function Fo(i, u) {
        var a = this, d = a.ready().then(function() {
          for (var p = a._dbInfo, l = p.keyPrefix, v = l.length, w = localStorage.length, S = 1, O = 0; O < w; O++) {
            var k = localStorage.key(O);
            if (k.indexOf(l) === 0) {
              var j = localStorage.getItem(k);
              if (j && (j = p.serializer.deserialize(j)), j = i(j, k.substring(v), S++), j !== void 0)
                return j;
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
        i = T(i);
        var d = a.ready().then(function() {
          var p = a._dbInfo;
          localStorage.removeItem(p.keyPrefix + i);
        });
        return _(d, u), d;
      }
      function Yo(i, u, a) {
        var d = this;
        i = T(i);
        var p = d.ready().then(function() {
          u === void 0 && (u = null);
          var l = u;
          return new g(function(v, w) {
            var S = d._dbInfo;
            S.serializer.serialize(u, function(O, k) {
              if (k)
                w(k);
              else
                try {
                  localStorage.setItem(S.keyPrefix + i, O), v(l);
                } catch (j) {
                  (j.name === "QuotaExceededError" || j.name === "NS_ERROR_DOM_QUOTA_REACHED") && w(j), w(j);
                }
            });
          });
        });
        return _(p, a), p;
      }
      function qo(i, u) {
        if (u = E.apply(this, arguments), i = typeof i != "function" && i || {}, !i.name) {
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
        _initStorage: Do,
        _support: Po(),
        iterate: Fo,
        getItem: Co,
        setItem: Yo,
        removeItem: Ho,
        clear: Bo,
        length: zo,
        key: Mo,
        keys: Uo,
        dropInstance: qo
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
      }, Be = {}, nr = {}, Ae = {
        INDEXEDDB: yo,
        WEBSQL: Lo,
        LOCALSTORAGE: Wo
      }, Xo = [Ae.INDEXEDDB._driver, Ae.WEBSQL._driver, Ae.LOCALSTORAGE._driver], Xe = ["dropInstance"], lt = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(Xe), Go = {
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
          for (var a in Ae)
            if (Ae.hasOwnProperty(a)) {
              var d = Ae[a], p = d._driver;
              this[a] = p, Be[p] || this.defineDriver(d);
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
              for (var k = lt.concat("_initStorage"), j = 0, C = k.length; j < C; j++) {
                var H = k[j], Y = !Vo(Xe, H);
                if ((Y || a[H]) && typeof a[H] != "function") {
                  w(O);
                  return;
                }
              }
              var Q = function() {
                for (var Ce = function(ti) {
                  return function() {
                    var ri = new Error("Method " + ti + " is not implemented by the current driver"), or = g.reject(ri);
                    return _(or, arguments[arguments.length - 1]), or;
                  };
                }, ht = 0, ei = Xe.length; ht < ei; ht++) {
                  var pt = Xe[ht];
                  a[pt] || (a[pt] = Ce(pt));
                }
              };
              Q();
              var J = function(Ce) {
                Be[S] && console.info("Redefining LocalForage driver: " + S), Be[S] = a, nr[S] = Ce, v();
              };
              "_support" in a ? a._support && typeof a._support == "function" ? a._support().then(J, w) : J(!!a._support) : J(!0);
            } catch (ue) {
              w(ue);
            }
          });
          return $(l, d, p), l;
        }, i.prototype.driver = function() {
          return this._driver || null;
        }, i.prototype.getDriver = function(a, d, p) {
          var l = Be[a] ? g.resolve(Be[a]) : g.reject(new Error("Driver not found."));
          return $(l, d, p), l;
        }, i.prototype.getSerializer = function(a) {
          var d = g.resolve(ct);
          return $(d, a), d;
        }, i.prototype.ready = function(a) {
          var d = this, p = d._driverSet.then(function() {
            return d._ready === null && (d._ready = d._initDriver()), d._ready;
          });
          return $(p, a, a), p;
        }, i.prototype.setDriver = function(a, d, p) {
          var l = this;
          rr(a) || (a = [a]);
          var v = this._getSupportedDrivers(a);
          function w() {
            l._config.driver = l.driver();
          }
          function S(j) {
            return l._extend(j), w(), l._ready = l._initStorage(l._config), l._ready;
          }
          function O(j) {
            return function() {
              var C = 0;
              function H() {
                for (; C < j.length; ) {
                  var Y = j[C];
                  return C++, l._dbInfo = null, l._ready = null, l.getDriver(Y).then(S).catch(H);
                }
                w();
                var Q = new Error("No available storage method found.");
                return l._driverSet = g.reject(Q), l._driverSet;
              }
              return H();
            };
          }
          var k = this._driverSet !== null ? this._driverSet.catch(function() {
            return g.resolve();
          }) : g.resolve();
          return this._driverSet = k.then(function() {
            var j = v[0];
            return l._dbInfo = null, l._ready = null, l.getDriver(j).then(function(C) {
              l._driver = C._driver, w(), l._wrapLibraryMethodsWithReady(), l._initDriver = O(v);
            });
          }).catch(function() {
            w();
            var j = new Error("No available storage method found.");
            return l._driverSet = g.reject(j), l._driverSet;
          }), $(this._driverSet, d, p), this._driverSet;
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
var Li = on.exports;
const Pi = /* @__PURE__ */ xi(Li), Ie = [];
function Ni(e, t) {
  return {
    subscribe: an(e, t).subscribe
  };
}
function an(e, t = se) {
  let r;
  const n = /* @__PURE__ */ new Set();
  function o(f) {
    if (tn(e, f) && (e = f, r)) {
      const y = !Ie.length;
      for (const m of n)
        m[1](), Ie.push(m, e);
      if (y) {
        for (let m = 0; m < Ie.length; m += 2)
          Ie[m][0](Ie[m + 1]);
        Ie.length = 0;
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
Pi.config({
  name: "SNS HPC AI Assitant"
});
const Oe = {
  Unknown: { slug: "unknown", description: "Checking the AI server status...", icon: "⏳" },
  Error: { slug: "error", description: "The AI server is currently unavailable", icon: "🔴" },
  OK: { slug: "ok", description: "The AI server is fully functional", icon: "🟢" },
  Running: { slug: "running", description: "The AI server is working to answer", icon: "🔵" },
  Degraded: { slug: "degraded", description: "The AI server is currently degraded", icon: "🟡" }
};
class Ri {
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
function Di(e) {
  return e instanceof Uint8Array || e != null && typeof e == "object" && e.constructor.name === "Uint8Array";
}
function Rt(e, ...t) {
  if (!Di(e))
    throw new Error("Expected Uint8Array");
  if (t.length > 0 && !t.includes(e.length))
    throw new Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`);
}
ie.bytes = Rt;
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
  Rt(e);
  const r = t.outputLen;
  if (e.length < r)
    throw new Error(`digestInto() expects output buffer of length at least ${r}`);
}
ie.output = cn;
const Bi = { number: tt, bool: sn, bytes: Rt, hash: un, exists: fn, output: cn };
ie.default = Bi;
var L = {};
Object.defineProperty(L, "__esModule", { value: !0 });
L.add5L = L.add5H = L.add4H = L.add4L = L.add3H = L.add3L = L.add = L.rotlBL = L.rotlBH = L.rotlSL = L.rotlSH = L.rotr32L = L.rotr32H = L.rotrBL = L.rotrBH = L.rotrSL = L.rotrSH = L.shrSL = L.shrSH = L.toBig = L.split = L.fromBig = void 0;
const Je = /* @__PURE__ */ BigInt(2 ** 32 - 1), bt = /* @__PURE__ */ BigInt(32);
function Dt(e, t = !1) {
  return t ? { h: Number(e & Je), l: Number(e >> bt & Je) } : { h: Number(e >> bt & Je) | 0, l: Number(e & Je) | 0 };
}
L.fromBig = Dt;
function ln(e, t = !1) {
  let r = new Uint32Array(e.length), n = new Uint32Array(e.length);
  for (let o = 0; o < e.length; o++) {
    const { h: s, l: c } = Dt(e[o], t);
    [r[o], n[o]] = [s, c];
  }
  return [r, n];
}
L.split = ln;
const dn = (e, t) => BigInt(e >>> 0) << bt | BigInt(t >>> 0);
L.toBig = dn;
const hn = (e, t, r) => e >>> r;
L.shrSH = hn;
const pn = (e, t, r) => e << 32 - r | t >>> r;
L.shrSL = pn;
const mn = (e, t, r) => e >>> r | t << 32 - r;
L.rotrSH = mn;
const yn = (e, t, r) => e << 32 - r | t >>> r;
L.rotrSL = yn;
const gn = (e, t, r) => e << 64 - r | t >>> r - 32;
L.rotrBH = gn;
const vn = (e, t, r) => e >>> r - 32 | t << 64 - r;
L.rotrBL = vn;
const bn = (e, t) => t;
L.rotr32H = bn;
const wn = (e, t) => e;
L.rotr32L = wn;
const _n = (e, t, r) => e << r | t >>> 32 - r;
L.rotlSH = _n;
const Sn = (e, t, r) => t << r | e >>> 32 - r;
L.rotlSL = Sn;
const On = (e, t, r) => t << r - 32 | e >>> 64 - r;
L.rotlBH = On;
const kn = (e, t, r) => e << r - 32 | t >>> 64 - r;
L.rotlBL = kn;
function $n(e, t, r, n) {
  const o = (t >>> 0) + (n >>> 0);
  return { h: e + r + (o / 2 ** 32 | 0) | 0, l: o | 0 };
}
L.add = $n;
const An = (e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0);
L.add3L = An;
const En = (e, t, r, n) => t + r + n + (e / 2 ** 32 | 0) | 0;
L.add3H = En;
const In = (e, t, r, n) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0);
L.add4L = In;
const Tn = (e, t, r, n, o) => t + r + n + o + (e / 2 ** 32 | 0) | 0;
L.add4H = Tn;
const jn = (e, t, r, n, o) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0) + (o >>> 0);
L.add5L = jn;
const xn = (e, t, r, n, o, s) => t + r + n + o + s + (e / 2 ** 32 | 0) | 0;
L.add5H = xn;
const Ci = {
  fromBig: Dt,
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
  rotlBL: kn,
  add: $n,
  add3L: An,
  add3H: En,
  add4L: In,
  add4H: Tn,
  add5H: xn,
  add5L: jn
};
L.default = Ci;
var Ln = {}, it = {};
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
  const c = (b, x) => b << 32 - x | b >>> x;
  if (e.rotr = c, e.isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68, !e.isLE)
    throw new Error("Non little-endian hardware is not supported");
  const f = /* @__PURE__ */ Array.from({ length: 256 }, (b, x) => x.toString(16).padStart(2, "0"));
  function y(b) {
    if (!o(b))
      throw new Error("Uint8Array expected");
    let x = "";
    for (let D = 0; D < b.length; D++)
      x += f[b[D]];
    return x;
  }
  e.bytesToHex = y;
  const m = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
  function I(b) {
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
    const x = b.length, D = x / 2;
    if (x % 2)
      throw new Error("padded hex string expected, got unpadded hex of length " + x);
    const B = new Uint8Array(D);
    for (let M = 0, q = 0; M < D; M++, q += 2) {
      const Z = I(b.charCodeAt(q)), de = I(b.charCodeAt(q + 1));
      if (Z === void 0 || de === void 0) {
        const he = b[q] + b[q + 1];
        throw new Error('hex string expected, got non-hex character "' + he + '" at index ' + q);
      }
      B[M] = Z * 16 + de;
    }
    return B;
  }
  e.hexToBytes = g;
  const _ = async () => {
  };
  e.nextTick = _;
  async function $(b, x, D) {
    let B = Date.now();
    for (let M = 0; M < b; M++) {
      D(M);
      const q = Date.now() - B;
      q >= 0 && q < x || (await (0, e.nextTick)(), B += q);
    }
  }
  e.asyncLoop = $;
  function T(b) {
    if (typeof b != "string")
      throw new Error(`utf8ToBytes expected string, got ${typeof b}`);
    return new Uint8Array(new TextEncoder().encode(b));
  }
  e.utf8ToBytes = T;
  function E(b) {
    if (typeof b == "string" && (b = T(b)), !o(b))
      throw new Error(`expected Uint8Array, got ${typeof b}`);
    return b;
  }
  e.toBytes = E;
  function N(...b) {
    let x = 0;
    for (let B = 0; B < b.length; B++) {
      const M = b[B];
      if (!o(M))
        throw new Error("Uint8Array expected");
      x += M.length;
    }
    const D = new Uint8Array(x);
    for (let B = 0, M = 0; B < b.length; B++) {
      const q = b[B];
      D.set(q, M), M += q.length;
    }
    return D;
  }
  e.concatBytes = N;
  class K {
    // Safe version that clones internal state
    clone() {
      return this._cloneInto();
    }
  }
  e.Hash = K;
  const z = {}.toString;
  function ae(b, x) {
    if (x !== void 0 && z.call(x) !== "[object Object]")
      throw new Error("Options should be object or undefined");
    return Object.assign(b, x);
  }
  e.checkOpts = ae;
  function G(b) {
    const x = (B) => b().update(E(B)).digest(), D = b();
    return x.outputLen = D.outputLen, x.blockLen = D.blockLen, x.create = () => b(), x;
  }
  e.wrapConstructor = G;
  function A(b) {
    const x = (B, M) => b(M).update(E(B)).digest(), D = b({});
    return x.outputLen = D.outputLen, x.blockLen = D.blockLen, x.create = (B) => b(B), x;
  }
  e.wrapConstructorWithOpts = A;
  function R(b) {
    const x = (B, M) => b(M).update(E(B)).digest(), D = b({});
    return x.outputLen = D.outputLen, x.blockLen = D.blockLen, x.create = (B) => b(B), x;
  }
  e.wrapXOFConstructorWithOpts = R;
  function P(b = 32) {
    if (t.crypto && typeof t.crypto.getRandomValues == "function")
      return t.crypto.getRandomValues(new Uint8Array(b));
    throw new Error("crypto.getRandomValues must be defined");
  }
  e.randomBytes = P;
})(Ln);
Object.defineProperty(X, "__esModule", { value: !0 });
X.shake256 = X.shake128 = X.keccak_512 = X.keccak_384 = X.keccak_256 = X.keccak_224 = X.sha3_512 = X.sha3_384 = X.sha3_256 = X.sha3_224 = X.Keccak = X.keccakP = void 0;
const Te = ie, Ye = L, Ue = Ln, [Pn, Nn, Rn] = [[], [], []], Fi = /* @__PURE__ */ BigInt(0), Fe = /* @__PURE__ */ BigInt(1), Mi = /* @__PURE__ */ BigInt(2), Ui = /* @__PURE__ */ BigInt(7), zi = /* @__PURE__ */ BigInt(256), Hi = /* @__PURE__ */ BigInt(113);
for (let e = 0, t = Fe, r = 1, n = 0; e < 24; e++) {
  [r, n] = [n, (2 * r + 3 * n) % 5], Pn.push(2 * (5 * n + r)), Nn.push((e + 1) * (e + 2) / 2 % 64);
  let o = Fi;
  for (let s = 0; s < 7; s++)
    t = (t << Fe ^ (t >> Ui) * Hi) % zi, t & Mi && (o ^= Fe << (Fe << /* @__PURE__ */ BigInt(s)) - Fe);
  Rn.push(o);
}
const [Yi, qi] = /* @__PURE__ */ (0, Ye.split)(Rn, !0), cr = (e, t, r) => r > 32 ? (0, Ye.rotlBH)(e, t, r) : (0, Ye.rotlSH)(e, t, r), lr = (e, t, r) => r > 32 ? (0, Ye.rotlBL)(e, t, r) : (0, Ye.rotlSL)(e, t, r);
function Dn(e, t = 24) {
  const r = new Uint32Array(10);
  for (let n = 24 - t; n < 24; n++) {
    for (let c = 0; c < 10; c++)
      r[c] = e[c] ^ e[c + 10] ^ e[c + 20] ^ e[c + 30] ^ e[c + 40];
    for (let c = 0; c < 10; c += 2) {
      const f = (c + 8) % 10, y = (c + 2) % 10, m = r[y], I = r[y + 1], g = cr(m, I, 1) ^ r[f], _ = lr(m, I, 1) ^ r[f + 1];
      for (let $ = 0; $ < 50; $ += 10)
        e[c + $] ^= g, e[c + $ + 1] ^= _;
    }
    let o = e[2], s = e[3];
    for (let c = 0; c < 24; c++) {
      const f = Nn[c], y = cr(o, s, f), m = lr(o, s, f), I = Pn[c];
      o = e[I], s = e[I + 1], e[I] = y, e[I + 1] = m;
    }
    for (let c = 0; c < 50; c += 10) {
      for (let f = 0; f < 10; f++)
        r[f] = e[c + f];
      for (let f = 0; f < 10; f++)
        e[c + f] ^= ~r[(f + 2) % 10] & r[(f + 4) % 10];
    }
    e[0] ^= Yi[n], e[1] ^= qi[n];
  }
  r.fill(0);
}
X.keccakP = Dn;
class Ke extends Ue.Hash {
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(t, r, n, o = !1, s = 24) {
    if (super(), this.blockLen = t, this.suffix = r, this.outputLen = n, this.enableXOF = o, this.rounds = s, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, (0, Te.number)(n), 0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = (0, Ue.u32)(this.state);
  }
  keccak() {
    Dn(this.state32, this.rounds), this.posOut = 0, this.pos = 0;
  }
  update(t) {
    (0, Te.exists)(this);
    const { blockLen: r, state: n } = this;
    t = (0, Ue.toBytes)(t);
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
    (0, Te.exists)(this, !1), (0, Te.bytes)(t), this.finish();
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
    return (0, Te.number)(t), this.xofInto(new Uint8Array(t));
  }
  digestInto(t) {
    if ((0, Te.output)(t, this), this.finished)
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
const Se = (e, t, r) => (0, Ue.wrapConstructor)(() => new Ke(t, e, r));
X.sha3_224 = Se(6, 144, 224 / 8);
X.sha3_256 = Se(6, 136, 256 / 8);
X.sha3_384 = Se(6, 104, 384 / 8);
X.sha3_512 = Se(6, 72, 512 / 8);
X.keccak_224 = Se(1, 144, 224 / 8);
X.keccak_256 = Se(1, 136, 256 / 8);
X.keccak_384 = Se(1, 104, 384 / 8);
X.keccak_512 = Se(1, 72, 512 / 8);
const Bn = (e, t, r) => (0, Ue.wrapXOFConstructorWithOpts)((n = {}) => new Ke(t, e, n.dkLen === void 0 ? r : n.dkLen, !0));
X.shake128 = Bn(31, 168, 128 / 8);
X.shake256 = Bn(31, 136, 256 / 8);
const { sha3_512: Wi } = X, Cn = 24, ze = 32, wt = (e = 4, t = Math.random) => {
  let r = "";
  for (; r.length < e; )
    r = r + Math.floor(t() * 36).toString(36);
  return r;
};
function Fn(e) {
  let t = 8n, r = 0n;
  for (const n of e.values()) {
    const o = BigInt(n);
    r = (r << t) + o;
  }
  return r;
}
const Mn = (e = "") => Fn(Wi(e)).toString(36).slice(1), dr = Array.from(
  { length: 26 },
  (e, t) => String.fromCharCode(t + 97)
), Ki = (e) => dr[Math.floor(e() * dr.length)], Un = ({
  globalObj: e = typeof xe < "u" ? xe : typeof window < "u" ? window : {},
  random: t = Math.random
} = {}) => {
  const r = Object.keys(e).toString(), n = r.length ? r + wt(ze, t) : wt(ze, t);
  return Mn(n).substring(0, ze);
}, zn = (e) => () => e++, Vi = 476782367, Hn = ({
  // Fallback if the user does not pass in a CSPRNG. This should be OK
  // because we don't rely solely on the random number generator for entropy.
  // We also use the host fingerprint, current time, and a session counter.
  random: e = Math.random,
  counter: t = zn(Math.floor(e() * Vi)),
  length: r = Cn,
  fingerprint: n = Un({ random: e })
} = {}) => function() {
  const s = Ki(e), c = Date.now().toString(36), f = t().toString(36), y = wt(r, e), m = `${c + y + f + n}`;
  return `${s + Mn(m).substring(1, r)}`;
}, Xi = Hn(), Gi = (e, { minLength: t = 2, maxLength: r = ze } = {}) => {
  const n = e.length, o = /^[0-9a-z]+$/;
  try {
    if (typeof e == "string" && n >= t && n <= r && o.test(e))
      return !0;
  } finally {
  }
  return !1;
};
_e.getConstants = () => ({ defaultLength: Cn, bigLength: ze });
_e.init = Hn;
_e.createId = Xi;
_e.bufToBigInt = Fn;
_e.createCounter = zn;
_e.createFingerprint = Un;
_e.isCuid = Gi;
const { createId: Ji, init: Rs, getConstants: Ds, isCuid: Bs } = _e;
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
var Yn = "en", Bt = {}, _t = {};
function qn() {
  return Yn;
}
function ea(e) {
  Yn = e;
}
function ta(e) {
  return Bt[e];
}
function ra(e) {
  if (!e)
    throw new Error("No locale data passed");
  Bt[e.locale] = e, _t[e.locale.toLowerCase()] = e.locale;
}
function pr(e) {
  if (Bt[e])
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
    if (typeof t == "string" && (t = [t]), t.push(qn()), this.locale = e.supportedLocalesOf(t, {
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
      var r = kr(arguments), n = _r(r, 2), o = n[0], s = n[1];
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
      var r = kr(arguments), n = _r(r, 2), o = n[0], s = n[1], c = this.getRule(o, s), f = c.indexOf("{0}");
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
we.getDefaultLocale = qn;
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
function kr(e) {
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
function $r(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function ka(e, t, r) {
  return t && $r(e.prototype, t), r && $r(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var Ar = /* @__PURE__ */ function() {
  function e() {
    Oa(this, e), this.cache = {};
  }
  return ka(e, [{
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
        var I = m[y];
        rt(f[I]) !== "object" && (f[I] = {}), f = f[I];
      }
      return f[c] = s;
    }
  }]), e;
}();
function kt(e) {
  "@babel/helpers - typeof";
  return kt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, kt(e);
}
function $a(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r)
    return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = Aa(e)) || t && e && typeof e.length == "number") {
    r && (e = r);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Aa(e, t) {
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
function Ea(e, t) {
  for (var r = $a(e), n; !(n = r()).done; ) {
    var o = n.value;
    if (t(o))
      return o;
    for (var s = o.split("-"); s.length > 1; )
      if (s.pop(), o = s.join("-"), t(o))
        return o;
  }
  throw new Error("No locale data has been registered for any of the locales: ".concat(e.join(", ")));
}
function Ia() {
  var e = (typeof Intl > "u" ? "undefined" : kt(Intl)) === "object";
  return e && typeof Intl.DateTimeFormat == "function";
}
function $t(e) {
  "@babel/helpers - typeof";
  return $t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $t(e);
}
function Ta(e) {
  return xa(e) && (Array.isArray(e.steps) || // `gradation` property is deprecated: it has been renamed to `steps`.
  Array.isArray(e.gradation) || // `flavour` property is deprecated: it has been renamed to `labels`.
  Array.isArray(e.flavour) || typeof e.flavour == "string" || Array.isArray(e.labels) || typeof e.labels == "string" || // `units` property is deprecated.
  Array.isArray(e.units) || // `custom` property is deprecated.
  typeof e.custom == "function");
}
var ja = {}.constructor;
function xa(e) {
  return $t(e) !== void 0 && e !== null && e.constructor === ja;
}
var ye = 60, nt = 60 * ye, ke = 24 * nt, At = 7 * ke, Et = 30.44 * ke, Kn = 146097 / 400 * ke;
function Ne(e) {
  switch (e) {
    case "second":
      return 1;
    case "minute":
      return ye;
    case "hour":
      return nt;
    case "day":
      return ke;
    case "week":
      return At;
    case "month":
      return Et;
    case "year":
      return Kn;
  }
}
function Vn(e) {
  return e.factor !== void 0 ? e.factor : Ne(e.unit || e.formatAs) || 1;
}
function qe(e) {
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
function It(e) {
  "@babel/helpers - typeof";
  return It = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, It(e);
}
function Xn(e, t) {
  var r = t.prevStep, n = t.timestamp, o = t.now, s = t.future, c = t.round, f;
  return r && (r.id || r.unit) && (f = e["threshold_for_".concat(r.id || r.unit)]), f === void 0 && e.threshold !== void 0 && (f = e.threshold, typeof f == "function" && (f = f(o, s))), f === void 0 && (f = e.minTime), It(f) === "object" && (r && r.id && f[r.id] !== void 0 ? f = f[r.id] : f = f.default), typeof f == "function" && (f = f(n, {
    future: s,
    getMinTimeForUnit: function(m, I) {
      return Ir(m, I || r && r.formatAs, {
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
  var n = r.round, o = Ne(e), s;
  if (t === "now" ? s = Ne(e) : s = Ne(t), o !== void 0 && s !== void 0)
    return o - s * (1 - Ct(n));
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
function La(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Tr(Object(r), !0).forEach(function(n) {
      Pa(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Tr(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Pa(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Na(e, t, r) {
  var n = r.now, o = r.future, s = r.round, c = r.units, f = r.getNextStep;
  e = Da(e, c);
  var y = Ra(e, t, {
    now: n,
    future: o,
    round: s
  });
  if (f) {
    if (y) {
      var m = e[e.indexOf(y) - 1], I = e[e.indexOf(y) + 1];
      return [m, y, I];
    }
    return [void 0, void 0, e[0]];
  }
  return y;
}
function Ra(e, t, r) {
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
        var y = qe(s)(Math.abs(t) / Vn(f) / f.granularity) * f.granularity;
        if (y === 0 && c > 0)
          return e[c - 1];
      }
      return f;
    }
  }
}
function Gn(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, o = Xn(e[n], La({
    prevStep: e[n - 1],
    timestamp: r.now - t * 1e3
  }, r));
  return o === void 0 || Math.abs(t) < o ? n - 1 : n === e.length - 1 ? n : Gn(e, t, r, n + 1);
}
function Da(e, t) {
  return e.filter(function(r) {
    var n = r.unit, o = r.formatAs;
    return n = n || o, n ? t.indexOf(n) >= 0 : !0;
  });
}
function Ba(e, t, r) {
  var n = r.now, o = r.round;
  if (Ne(e)) {
    var s = Ne(e) * 1e3, c = t > n, f = Math.abs(t - n), y = qe(o)(f / s) * s;
    return c ? y > 0 ? f - y + Fa(o, s) : f - y + 1 : -(f - y) + Ca(o, s);
  }
}
function Ca(e, t) {
  return Ct(e) * t;
}
function Fa(e, t) {
  return (1 - Ct(e)) * t + 1;
}
var Ma = 365 * 24 * 60 * 60 * 1e3, Jn = 1e3 * Ma;
function Ua(e, t, r) {
  var n = r.prevStep, o = r.nextStep, s = r.now, c = r.future, f = r.round, y = e.getTime ? e.getTime() : e, m = function(T) {
    return Ba(T, y, {
      now: s,
      round: f
    });
  }, I = Ha(c ? t : o, y, {
    future: c,
    now: s,
    round: f,
    prevStep: c ? n : t
    // isFirstStep: future && isFirstStep
  });
  if (I !== void 0) {
    var g;
    if (t && (t.getTimeToNextUpdate && (g = t.getTimeToNextUpdate(y, {
      getTimeToNextUpdateForUnit: m,
      getRoundFunction: qe,
      now: s,
      future: c,
      round: f
    })), g === void 0)) {
      var _ = t.unit || t.formatAs;
      _ && (g = m(_));
    }
    return g === void 0 ? I : Math.min(g, I);
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
function Le(e) {
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
}], Tt = {
  steps: Ya,
  labels: "long"
};
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
function xr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? jr(Object(r), !0).forEach(function(n) {
      qa(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jr(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function qa(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
const jt = xr(xr({}, Tt), {}, {
  // Skip "seconds".
  steps: Tt.steps.filter(function(e) {
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
  threshold: 20.5 / 24 * ke,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a day.
  factor: ke,
  // "day" labels are used for formatting the output.
  unit: "day"
}, {
  // This step is effective starting from 5.5 days.
  threshold: 5.5 * ke,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a week.
  factor: At,
  // "week" labels are used for formatting the output.
  unit: "week"
}, {
  // This step is effective starting from 3.5 weeks.
  threshold: 3.5 * At,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a month.
  factor: Et,
  // "month" labels are used for formatting the output.
  unit: "month"
}, {
  // This step is effective starting from 10.5 months.
  threshold: 10.5 * Et,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a year.
  factor: Kn,
  // "year" labels are used for formatting the output.
  unit: "year"
}], Lr = {
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
var xt = [{
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
Ia() ? xt.push(Ka, Va) : xt.push({
  formatAs: "day"
}, {
  formatAs: "week"
}, {
  formatAs: "month"
}, {
  formatAs: "year"
});
const $e = {
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
      Xa(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Pr(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Xa(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
const Ga = Nr(Nr({}, $e), {}, {
  // Add "now".
  steps: [{
    formatAs: "now"
  }].concat($e.steps)
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
const Lt = Dr(Dr({}, $e), {}, {
  // Skip "seconds".
  steps: $e.steps.filter(function(e) {
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
      Qa(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Br(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Qa(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
const Za = Cr(Cr({}, Lt), {}, {
  // Add "now".
  steps: [{
    formatAs: "now"
  }].concat(Lt.steps)
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
function Qe(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fr(Object(r), !0).forEach(function(n) {
      es(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fr(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function es(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
const ts = Qe(Qe({}, $e), {}, {
  // Skip "seconds".
  steps: $e.steps.filter(function(e) {
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
      rs(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Mr(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function rs(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
const ns = Ur(Ur({}, We), {}, {
  // Add "now".
  steps: [{
    formatAs: "now"
  }].concat(We.steps)
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
      os(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zr(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function os(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
const Pt = Hr(Hr({}, We), {}, {
  // Skip "seconds".
  steps: We.steps.filter(function(e) {
    return e.formatAs !== "second";
  })
});
function Yr(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function qr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Yr(Object(r), !0).forEach(function(n) {
      is(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yr(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function is(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
const as = qr(qr({}, Pt), {}, {
  // Add "now".
  steps: [{
    formatAs: "now"
  }].concat(Pt.steps)
});
function ss(e) {
  switch (e) {
    case "default":
    case "round":
      return Tt;
    case "round-minute":
      return jt;
    case "approximate":
      return Lr;
    case "time":
    case "approximate-time":
      return Wa;
    case "mini":
      return We;
    case "mini-now":
      return ns;
    case "mini-minute":
      return Pt;
    case "mini-minute-now":
      return as;
    case "twitter":
      return $e;
    case "twitter-now":
      return Ga;
    case "twitter-minute":
      return Lt;
    case "twitter-minute-now":
      return Za;
    case "twitter-first-minute":
      return ts;
    default:
      return Lr;
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
    hs(this, e), typeof t == "string" && (t = [t]), this.locale = Ea(t.concat(e.getDefaultLocale()), Le), typeof Intl < "u" && Intl.NumberFormat && (this.numberFormat = new Intl.NumberFormat(this.locale)), n === !1 ? (this.IntlRelativeTimeFormat = Intl.RelativeTimeFormat, this.IntlPluralRules = Intl.PluralRules) : (this.IntlRelativeTimeFormat = we, this.IntlPluralRules = we.PluralRules), this.relativeTimeFormatCache = new Ar(), this.pluralRulesCache = new Ar();
  }
  return ps(e, [{
    key: "format",
    value: function(r, n, o) {
      o || (n && !bs(n) ? (o = n, n = void 0) : o = {}), n || (n = jt), typeof n == "string" && (n = ss(n));
      var s = ms(r), c = this.getLabels(n.flavour || n.labels), f = c.labels, y = c.labelsType, m;
      n.now !== void 0 && (m = n.now), m === void 0 && o.now !== void 0 && (m = o.now), m === void 0 && (m = Date.now());
      var I = (m - s) / 1e3, g = o.future || I < 0, _ = vs(f, Le(this.locale).now, Le(this.locale).long, g);
      if (n.custom) {
        var $ = n.custom({
          now: m,
          date: new Date(s),
          time: s,
          elapsed: I,
          locale: this.locale
        });
        if ($ !== void 0)
          return $;
      }
      var T = gs(
        // Controlling `style.steps` through `style.units` seems to be deprecated:
        // create a new custom `style` instead.
        n.units,
        f,
        _
      ), E = o.round || n.round, N = Na(
        // "gradation" is a legacy name for "steps".
        // For historical reasons, "approximate" steps are used by default.
        // In the next major version, there'll be no default for `steps`.
        n.gradation || n.steps || jt.steps,
        I,
        {
          now: m,
          units: T,
          round: E,
          future: g,
          getNextStep: !0
        }
      ), K = fs(N, 3), z = K[0], ae = K[1], G = K[2], A = this.formatDateForStep(s, ae, I, {
        labels: f,
        labelsType: y,
        nowLabel: _,
        now: m,
        future: g,
        round: E
      }) || "";
      if (o.getTimeToNextUpdate) {
        var R = Ua(s, ae, {
          nextStep: G,
          prevStep: z,
          now: m,
          future: g,
          round: E
        });
        return [A, R];
      }
      return A;
    }
  }, {
    key: "formatDateForStep",
    value: function(r, n, o, s) {
      var c = this, f = s.labels, y = s.labelsType, m = s.nowLabel, I = s.now, g = s.future, _ = s.round;
      if (n) {
        if (n.format)
          return n.format(r, this.locale, {
            formatAs: function(K, z) {
              return c.formatValue(z, K, {
                labels: f,
                future: g
              });
            },
            now: I,
            future: g
          });
        var $ = n.unit || n.formatAs;
        if (!$)
          throw new Error("[javascript-time-ago] Each step must define either `formatAs` or `format()`. Step: ".concat(JSON.stringify(n)));
        if ($ === "now")
          return m;
        var T = Math.abs(o) / Vn(n);
        n.granularity && (T = qe(_)(T / n.granularity) * n.granularity);
        var E = -1 * Math.sign(o) * qe(_)(T);
        switch (E === 0 && (g ? E = 0 : E = -0), y) {
          case "long":
          case "short":
          case "narrow":
            return this.getFormatter(y).format(E, $);
          default:
            return this.formatValue(E, $, {
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
      for (var n = Le(this.locale), o = us(r), s; !(s = o()).done; ) {
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
  var n = Le(e);
  n || (Zn({
    locale: e
  }), n = Le(e)), n[t] = r;
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
  return typeof e == "string" || Ta(e);
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
const _s = new le("en-US"), Xr = (e) => _s.format(new Date(e)), Ss = Ni(Xr, (e) => {
  const t = setInterval(() => e(Xr), 1e3);
  return () => clearInterval(t);
});
function Os(e) {
  ui(e, "svelte-1hrnjik", `.svelte-1hrnjik,.svelte-1hrnjik::before,.svelte-1hrnjik::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}.svelte-1hrnjik::before,.svelte-1hrnjik::after{--tw-content:''}:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}button.svelte-1hrnjik,input.svelte-1hrnjik{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button.svelte-1hrnjik{text-transform:none}button.svelte-1hrnjik{-webkit-appearance:button;background-color:transparent;background-image:none}.svelte-1hrnjik:-moz-focusring{outline:auto}.svelte-1hrnjik:-moz-ui-invalid{box-shadow:none}.svelte-1hrnjik::-webkit-inner-spin-button,.svelte-1hrnjik::-webkit-outer-spin-button{height:auto}.svelte-1hrnjik::-webkit-search-decoration{-webkit-appearance:none}.svelte-1hrnjik::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}input.svelte-1hrnjik::-moz-placeholder{opacity:1;color:#9ca3af}input.svelte-1hrnjik::placeholder{opacity:1;color:#9ca3af}button.svelte-1hrnjik{cursor:pointer}.svelte-1hrnjik:disabled{cursor:default}.svelte-1hrnjik,.svelte-1hrnjik::before,.svelte-1hrnjik::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position:  ;--tw-gradient-via-position:  ;--tw-gradient-to-position:  ;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.svelte-1hrnjik::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position:  ;--tw-gradient-via-position:  ;--tw-gradient-to-position:  ;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.absolute.svelte-1hrnjik{position:absolute}.bottom-0.svelte-1hrnjik{bottom:0px}.bottom-2.svelte-1hrnjik{bottom:0.5rem}.left-0.svelte-1hrnjik{left:0px}.right-0.svelte-1hrnjik{right:0px}.right-2.svelte-1hrnjik{right:0.5rem}.top-0.svelte-1hrnjik{top:0px}.z-10.svelte-1hrnjik{z-index:10}.my-2.svelte-1hrnjik{margin-top:0.5rem;margin-bottom:0.5rem}.mb-2.svelte-1hrnjik{margin-bottom:0.5rem}.mb-4.svelte-1hrnjik{margin-bottom:1rem}.mt-2.svelte-1hrnjik{margin-top:0.5rem}.block.svelte-1hrnjik{display:block}.flex.svelte-1hrnjik{display:flex}.hidden.svelte-1hrnjik{display:none}.h-full.svelte-1hrnjik{height:100%}.w-3\\/4.svelte-1hrnjik{width:75%}.w-full.svelte-1hrnjik{width:100%}.flex-row.svelte-1hrnjik{flex-direction:row}.flex-col.svelte-1hrnjik{flex-direction:column}.items-baseline.svelte-1hrnjik{align-items:baseline}.items-stretch.svelte-1hrnjik{align-items:stretch}.justify-end.svelte-1hrnjik{justify-content:flex-end}.justify-between.svelte-1hrnjik{justify-content:space-between}.place-self-start.svelte-1hrnjik{place-self:start}.place-self-end.svelte-1hrnjik{place-self:end}.rounded-lg.svelte-1hrnjik{border-radius:0.5rem}.rounded-md.svelte-1hrnjik{border-radius:0.375rem}.bg-lime-200.svelte-1hrnjik{--tw-bg-opacity:1;background-color:rgb(217 249 157 / var(--tw-bg-opacity))}.bg-sky-200.svelte-1hrnjik{--tw-bg-opacity:1;background-color:rgb(186 230 253 / var(--tw-bg-opacity))}.bg-violet-700.svelte-1hrnjik{--tw-bg-opacity:1;background-color:rgb(109 40 217 / var(--tw-bg-opacity))}.bg-white.svelte-1hrnjik{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.px-1.svelte-1hrnjik{padding-left:0.25rem;padding-right:0.25rem}.px-2.svelte-1hrnjik{padding-left:0.5rem;padding-right:0.5rem}.px-4.svelte-1hrnjik{padding-left:1rem;padding-right:1rem}.py-1.svelte-1hrnjik{padding-top:0.25rem;padding-bottom:0.25rem}.py-2.svelte-1hrnjik{padding-top:0.5rem;padding-bottom:0.5rem}.text-justify.svelte-1hrnjik{text-align:justify}.text-base.svelte-1hrnjik{font-size:1rem;line-height:1.5rem}.text-lg.svelte-1hrnjik{font-size:1.125rem;line-height:1.75rem}.text-sm.svelte-1hrnjik{font-size:0.875rem;line-height:1.25rem}.text-xl.svelte-1hrnjik{font-size:1.25rem;line-height:1.75rem}.font-bold.svelte-1hrnjik{font-weight:700}.text-white.svelte-1hrnjik{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.max-w-1-3.svelte-1hrnjik{max-width:33.33%}.hover\\:bg-violet-600.svelte-1hrnjik:hover{--tw-bg-opacity:1;background-color:rgb(124 58 237 / var(--tw-bg-opacity))}`);
}
function Gr(e, t, r) {
  const n = e.slice();
  return n[15] = t[r], n;
}
function ks(e) {
  let t, r, n;
  return {
    c() {
      t = V("button"), t.textContent = "↘️", F(t, "title", "Reduce to lateral"), F(t, "class", "svelte-1hrnjik");
    },
    m(o, s) {
      ne(o, t, s), r || (n = Re(
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
function $s(e) {
  let t, r, n;
  return {
    c() {
      t = V("button"), t.textContent = "↖️", F(t, "title", "Expand full width"), F(t, "class", "svelte-1hrnjik");
    },
    m(o, s) {
      ne(o, t, s), r || (n = Re(
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
function As(e) {
  let t;
  return {
    c() {
      t = V("div"), t.textContent = "The AI server is currently unreachable", F(t, "class", "text-lg svelte-1hrnjik");
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
function Es(e) {
  let t, r, n, o, s, c, f, y, m, I, g = fr(
    /*chat*/
    e[2]._.messages
  ), _ = [];
  for (let $ = 0; $ < g.length; $ += 1)
    _[$] = Qr(Gr(e, g, $));
  return {
    c() {
      for (let $ = 0; $ < _.length; $ += 1)
        _[$].c();
      t = ce(), r = V("form"), n = V("input"), s = ce(), c = V("div"), c.textContent = "The assistant makes mistakes, always check important information", f = ce(), y = V("div"), y.textContent = "Also, the assistant cannot read the documentation yet", n.disabled = o = /*status*/
      e[0] && /*$status*/
      e[6].slug == "running", F(n, "class", "w-full px-2 py-1 text-lg rounded-lg svelte-1hrnjik"), F(n, "type", "text"), F(n, "placeholder", "What do you want help with?"), F(r, "action", "#"), F(r, "class", "my-2 svelte-1hrnjik"), F(c, "class", "mt-2 text-sm svelte-1hrnjik"), F(y, "class", "text-sm svelte-1hrnjik");
    },
    m($, T) {
      for (let E = 0; E < _.length; E += 1)
        _[E] && _[E].m($, T);
      ne($, t, T), ne($, r, T), W(r, n), ar(
        n,
        /*text*/
        e[3]
      ), ne($, s, T), ne($, c, T), ne($, f, T), ne($, y, T), m || (I = [
        Re(
          n,
          "input",
          /*input_input_handler*/
          e[13]
        ),
        Re(r, "submit", hi(
          /*handleUserMessage*/
          e[8]
        ))
      ], m = !0);
    },
    p($, T) {
      if (T & /*chat, $timeAgo*/
      132) {
        g = fr(
          /*chat*/
          $[2]._.messages
        );
        let E;
        for (E = 0; E < g.length; E += 1) {
          const N = Gr($, g, E);
          _[E] ? _[E].p(N, T) : (_[E] = Qr(N), _[E].c(), _[E].m(t.parentNode, t));
        }
        for (; E < _.length; E += 1)
          _[E].d(1);
        _.length = g.length;
      }
      T & /*status, $status*/
      65 && o !== (o = /*status*/
      $[0] && /*$status*/
      $[6].slug == "running") && (n.disabled = o), T & /*text*/
      8 && n.value !== /*text*/
      $[3] && ar(
        n,
        /*text*/
        $[3]
      );
    },
    d($) {
      $ && (te(t), te(r), te(s), te(c), te(f), te(y)), li(_, $), m = !1, De(I);
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
  ), f, y, m, I = (
    /*message*/
    e[15].content + ""
  ), g;
  function _(E, N) {
    return (
      /*message*/
      E[15].role == "user" ? Ts : Is
    );
  }
  let $ = _(e), T = $(e);
  return {
    c() {
      t = V("div"), r = V("div"), n = V("span"), T.c(), o = ce(), s = V("span"), f = be(c), y = ce(), m = V("div"), g = be(I), F(n, "class", "font-bold svelte-1hrnjik"), F(s, "class", "text-grey-500 text-sm svelte-1hrnjik"), F(r, "class", "mb-2 flex flex-row justify-between items-baseline svelte-1hrnjik"), F(m, "class", "svelte-1hrnjik"), F(t, "class", "rounded-md py-2 px-4 text-justify text-base block w-3/4 my-2 svelte-1hrnjik"), oe(
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
    m(E, N) {
      ne(E, t, N), W(t, r), W(r, n), T.m(n, null), W(r, o), W(r, s), W(s, f), W(t, y), W(t, m), W(m, g);
    },
    p(E, N) {
      $ !== ($ = _(E)) && (T.d(1), T = $(E), T && (T.c(), T.m(n, null))), N & /*$timeAgo, chat*/
      132 && c !== (c = /*$timeAgo*/
      E[7](
        /*message*/
        E[15].timestamp
      ) + "") && et(f, c), N & /*chat*/
      4 && I !== (I = /*message*/
      E[15].content + "") && et(g, I), N & /*chat*/
      4 && oe(
        t,
        "bg-sky-200",
        /*message*/
        E[15].role == "user"
      ), N & /*chat*/
      4 && oe(
        t,
        "place-self-end",
        /*message*/
        E[15].role == "user"
      ), N & /*chat*/
      4 && oe(
        t,
        "bg-lime-200",
        /*message*/
        E[15].role == "assistant"
      ), N & /*chat*/
      4 && oe(
        t,
        "place-self-start",
        /*message*/
        E[15].role == "assistant"
      );
    },
    d(E) {
      E && te(t), T.d();
    }
  };
}
function Is(e) {
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
function Ts(e) {
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
function js(e) {
  let t, r, n, o, s, c, f = (
    /*status*/
    (e[0] ? (
      /*$status*/
      e[6].icon
    ) : "") + ""
  ), y, m, I, g, _, $, T, E, N, K, z = (
    /*status*/
    (e[0] ? (
      /*$status*/
      e[6].icon
    ) : "") + ""
  ), ae, G, A, R, P, b, x, D, B;
  function M(U, ee) {
    return (
      /*chatBotExpanded*/
      U[5] ? ks : $s
    );
  }
  let q = M(e), Z = q(e);
  function de(U, ee) {
    return (
      /*model*/
      U[1] && /*chat*/
      U[2] ? Es : As
    );
  }
  let he = de(e), re = he(e);
  return {
    c() {
      t = V("button"), r = V("span"), r.textContent = "✨", n = ce(), o = V("span"), o.textContent = "Need Help?", s = ce(), c = V("span"), y = be(f), I = ce(), g = V("div"), _ = V("content"), $ = V("div"), T = V("div"), E = V("span"), E.textContent = "✨ HPC Assistant", N = ce(), K = V("span"), ae = be(z), A = ce(), R = V("div"), Z.c(), P = ce(), b = V("button"), b.textContent = "➖", x = ce(), re.c(), F(r, "title", "Try our AI Assistant"), F(r, "class", "svelte-1hrnjik"), F(o, "class", "px-1 svelte-1hrnjik"), F(c, "title", m = /*status*/
      e[0] ? (
        /*$status*/
        e[6].description
      ) : ""), F(c, "class", "svelte-1hrnjik"), F(t, "class", "absolute bottom-2 right-2 py-2 px-4 bg-violet-700 hover:bg-violet-600 font-bold text-lg text-white rounded-lg svelte-1hrnjik"), oe(
        t,
        "hidden",
        /*chatBotOpen*/
        e[4]
      ), F(E, "class", "svelte-1hrnjik"), F(K, "title", G = /*status*/
      e[0] ? (
        /*$status*/
        e[6].description
      ) : ""), F(K, "class", "svelte-1hrnjik"), F(T, "class", "svelte-1hrnjik"), F(b, "title", "Minify the assistant"), F(b, "class", "svelte-1hrnjik"), F(R, "class", "svelte-1hrnjik"), F($, "class", "mb-4 font-bold text-xl flex flex-row items-stretch justify-between svelte-1hrnjik"), F(_, "class", "bg-white text-base rounded-md flex flex-col items-stretch h-full px-4 py-2 svelte-1hrnjik"), oe(
        _,
        "w-full",
        /*chatBotExpanded*/
        e[5]
      ), oe(_, "max-w-1-3", !/*chatBotExpanded*/
      e[5]), F(g, "class", "absolute bottom-0 right-0 top-0 left-0 px-2 py-2 w-full h-full flex flex-row justify-end z-10 svelte-1hrnjik"), oe(g, "hidden", !/*chatBotOpen*/
      e[4]);
    },
    m(U, ee) {
      ne(U, t, ee), W(t, r), W(t, n), W(t, o), W(t, s), W(t, c), W(c, y), ne(U, I, ee), ne(U, g, ee), W(g, _), W(_, $), W($, T), W(T, E), W(T, N), W(T, K), W(K, ae), W($, A), W($, R), Z.m(R, null), W(R, P), W(R, b), W(_, x), re.m(_, null), D || (B = [
        Re(
          t,
          "click",
          /*click_handler*/
          e[9]
        ),
        Re(
          b,
          "click",
          /*click_handler_3*/
          e[12]
        )
      ], D = !0);
    },
    p(U, [ee]) {
      ee & /*status, $status*/
      65 && f !== (f = /*status*/
      (U[0] ? (
        /*$status*/
        U[6].icon
      ) : "") + "") && et(y, f), ee & /*status, $status*/
      65 && m !== (m = /*status*/
      U[0] ? (
        /*$status*/
        U[6].description
      ) : "") && F(c, "title", m), ee & /*chatBotOpen*/
      16 && oe(
        t,
        "hidden",
        /*chatBotOpen*/
        U[4]
      ), ee & /*status, $status*/
      65 && z !== (z = /*status*/
      (U[0] ? (
        /*$status*/
        U[6].icon
      ) : "") + "") && et(ae, z), ee & /*status, $status*/
      65 && G !== (G = /*status*/
      U[0] ? (
        /*$status*/
        U[6].description
      ) : "") && F(K, "title", G), q === (q = M(U)) && Z ? Z.p(U, ee) : (Z.d(1), Z = q(U), Z && (Z.c(), Z.m(R, P))), he === (he = de(U)) && re ? re.p(U, ee) : (re.d(1), re = he(U), re && (re.c(), re.m(_, null))), ee & /*chatBotExpanded*/
      32 && oe(
        _,
        "w-full",
        /*chatBotExpanded*/
        U[5]
      ), ee & /*chatBotExpanded*/
      32 && oe(_, "max-w-1-3", !/*chatBotExpanded*/
      U[5]), ee & /*chatBotOpen*/
      16 && oe(g, "hidden", !/*chatBotOpen*/
      U[4]);
    },
    i: se,
    o: se,
    d(U) {
      U && (te(t), te(I), te(g)), Z.d(), re.d(), D = !1, De(B);
    }
  };
}
function xs(e, t, r) {
  let n, o = se, s = () => (o(), o = Nt(y, (G) => r(6, n = G)), y), c;
  si(e, Ss, (G) => r(7, c = G)), e.$$.on_destroy.push(() => o());
  let f, y, m, I;
  gi(async () => {
    const G = `${window.location.protocol}//${window.location.hostname}:${window.location.port}`;
    f = new Ri(G), s(r(0, y = f.status)), r(1, m = await f.getBestModel(hr.modelList)), m && (await f.preloadModel(m), r(2, I = new Zi(() => r(2, I), f)), I.addMessage(hr.systemPrompt));
  });
  let g, _ = !1, $ = !1;
  async function T() {
    I.addMessage({ role: "user", content: g }), r(3, g = ""), await I.complete(m);
  }
  const E = () => r(4, _ = !0), N = () => r(5, $ = !0), K = () => r(5, $ = !1), z = () => r(4, _ = !1);
  function ae() {
    g = this.value, r(3, g);
  }
  return [
    y,
    m,
    I,
    g,
    _,
    $,
    n,
    c,
    T,
    E,
    N,
    K,
    z,
    ae
  ];
}
class Ls extends Ti {
  constructor(t) {
    super(), Ei(this, t, xs, js, tn, {}, Os);
  }
}
customElements.define("hpc-chatbot", Ii(Ls, {}, [], [], !0));
export {
  Ls as ChatBot
};
//# sourceMappingURL=components.js.map
