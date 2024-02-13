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
function Ne(e) {
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
function Lt(e, ...t) {
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
  return Lt(e, (r) => t = r)(), t;
}
function ui(e, t, r) {
  e.$$.on_destroy.push(Lt(t, r));
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
function ve(e) {
  return document.createTextNode(e);
}
function fe() {
  return ve(" ");
}
function hi() {
  return ve("");
}
function Pe(e, t, r, n) {
  return e.addEventListener(t, r, n), () => e.removeEventListener(t, r, n);
}
function pi(e) {
  return function(t) {
    return t.preventDefault(), e.call(this, t);
  };
}
function j(e, t, r) {
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
function vi() {
  if (!Me)
    throw new Error("Function called outside component initialization");
  return Me;
}
function gi(e) {
  vi().$$.on_mount.push(e);
}
const Ee = [], ar = [];
let ke = [];
const sr = [], bi = /* @__PURE__ */ Promise.resolve();
let mt = !1;
function wi() {
  mt || (mt = !0, bi.then(rn));
}
function yt(e) {
  ke.push(e);
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
    for (let t = 0; t < ke.length; t += 1) {
      const r = ke[t];
      ht.has(r) || (ht.add(r), r());
    }
    ke.length = 0;
  } while (Ee.length);
  for (; sr.length; )
    sr.pop()();
  mt = !1, ht.clear(), Ce(e);
}
function _i(e) {
  if (e.fragment !== null) {
    e.update(), Ne(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(yt);
  }
}
function Si(e) {
  const t = [], r = [];
  ke.forEach((n) => e.indexOf(n) === -1 ? t.push(n) : r.push(n)), r.forEach((n) => n()), ke = t;
}
const Oi = /* @__PURE__ */ new Set();
function xi(e, t) {
  e && e.i && (Oi.delete(e), e.i(t));
}
function ur(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function $i(e, t, r) {
  const { fragment: n, after_update: o } = e.$$;
  n && n.m(t, r), yt(() => {
    const s = e.$$.on_mount.map(Zr).filter(en);
    e.$$.on_destroy ? e.$$.on_destroy.push(...s) : Ne(s), e.$$.on_mount = [];
  }), o.forEach(yt);
}
function Ai(e, t) {
  const r = e.$$;
  r.fragment !== null && (Si(r.after_update), Ne(r.on_destroy), r.fragment && r.fragment.d(t), r.on_destroy = r.fragment = null, r.ctx = []);
}
function zi(e, t) {
  e.$$.dirty[0] === -1 && (Ee.push(e), wi(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function Ei(e, t, r, n, o, s, c = null, f = [-1]) {
  const y = Me;
  Ce(e);
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
    context: new Map(t.context || (y ? y.$$.context : [])),
    // everything else
    callbacks: or(),
    dirty: f,
    skip_bound: !1,
    root: t.target || y.$$.root
  };
  c && c(m.root);
  let E = !1;
  if (m.ctx = r ? r(e, t.props || {}, (v, _, ...$) => {
    const I = $.length ? $[0] : _;
    return m.ctx && o(m.ctx[v], m.ctx[v] = I) && (!m.skip_bound && m.bound[v] && m.bound[v](I), E && zi(e, v)), _;
  }) : [], m.update(), E = !0, Ne(m.before_update), m.fragment = n ? n(m.ctx) : !1, t.target) {
    if (t.hydrate) {
      const v = mi(t.target);
      m.fragment && m.fragment.l(v), v.forEach(re);
    } else
      m.fragment && m.fragment.c();
    t.intro && xi(e.$$.fragment), $i(e, t.target, t.anchor), rn();
  }
  Ce(y);
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
              c = X("slot"), s !== "default" && j(c, "name", s);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(m, E) {
              oe(m, c, E);
            },
            d: function(m) {
              m && re(c);
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
        y = Je(f, y, t), this.$$d[f] = y, (m = this.$$c) == null || m.$set({ [f]: y });
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
    Ai(this, 1), this.$destroy = ce;
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
const ki = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(ki);
var Ie = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Li(e) {
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
      function c(m, E) {
        if (!o[m]) {
          if (!n[m]) {
            var v = typeof Ve == "function" && Ve;
            if (!E && v)
              return v(m, !0);
            if (f)
              return f(m, !0);
            var _ = new Error("Cannot find module '" + m + "'");
            throw _.code = "MODULE_NOT_FOUND", _;
          }
          var $ = o[m] = { exports: {} };
          n[m][0].call($.exports, function(I) {
            var z = n[m][1][I];
            return c(z || I);
          }, $, $.exports, r, n, o, s);
        }
        return o[m].exports;
      }
      for (var f = typeof Ve == "function" && Ve, y = 0; y < s.length; y++)
        c(s[y]);
      return c;
    }({ 1: [function(r, n, o) {
      (function(s) {
        var c = s.MutationObserver || s.WebKitMutationObserver, f;
        if (c) {
          var y = 0, m = new c(I), E = s.document.createTextNode("");
          m.observe(E, {
            characterData: !0
          }), f = function() {
            E.data = y = ++y % 2;
          };
        } else if (!s.setImmediate && typeof s.MessageChannel < "u") {
          var v = new s.MessageChannel();
          v.port1.onmessage = I, f = function() {
            v.port2.postMessage(0);
          };
        } else
          "document" in s && "onreadystatechange" in s.document.createElement("script") ? f = function() {
            var N = s.document.createElement("script");
            N.onreadystatechange = function() {
              I(), N.onreadystatechange = null, N.parentNode.removeChild(N), N = null;
            }, s.document.documentElement.appendChild(N);
          } : f = function() {
            setTimeout(I, 0);
          };
        var _, $ = [];
        function I() {
          _ = !0;
          for (var N, K, U = $.length; U; ) {
            for (K = $, $ = [], N = -1; ++N < U; )
              K[N]();
            U = $.length;
          }
          _ = !1;
        }
        n.exports = z;
        function z(N) {
          $.push(N) === 1 && !_ && f();
        }
      }).call(this, typeof Ie < "u" ? Ie : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 2: [function(r, n, o) {
      var s = r(1);
      function c() {
      }
      var f = {}, y = ["REJECTED"], m = ["FULFILLED"], E = ["PENDING"];
      n.exports = v;
      function v(A) {
        if (typeof A != "function")
          throw new TypeError("resolver must be a function");
        this.state = E, this.queue = [], this.outcome = void 0, A !== c && z(this, A);
      }
      v.prototype.catch = function(A) {
        return this.then(null, A);
      }, v.prototype.then = function(A, R) {
        if (typeof A != "function" && this.state === m || typeof R != "function" && this.state === y)
          return this;
        var P = new this.constructor(c);
        if (this.state !== E) {
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
          } catch (k) {
            return f.reject(A, k);
          }
          b === A ? f.reject(A, new TypeError("Cannot resolve promise with itself")) : f.resolve(A, b);
        });
      }
      f.resolve = function(A, R) {
        var P = N(I, R);
        if (P.status === "error")
          return f.reject(A, P.value);
        var b = P.value;
        if (b)
          z(A, b);
        else {
          A.state = m, A.outcome = R;
          for (var k = -1, D = A.queue.length; ++k < D; )
            A.queue[k].callFulfilled(R);
        }
        return A;
      }, f.reject = function(A, R) {
        A.state = y, A.outcome = R;
        for (var P = -1, b = A.queue.length; ++P < b; )
          A.queue[P].callRejected(R);
        return A;
      };
      function I(A) {
        var R = A && A.then;
        if (A && (typeof A == "object" || typeof A == "function") && typeof R == "function")
          return function() {
            R.apply(A, arguments);
          };
      }
      function z(A, R) {
        var P = !1;
        function b(F) {
          P || (P = !0, f.reject(A, F));
        }
        function k(F) {
          P || (P = !0, f.resolve(A, F));
        }
        function D() {
          R(k, b);
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
      v.resolve = K;
      function K(A) {
        return A instanceof this ? A : f.resolve(new this(c), A);
      }
      v.reject = U;
      function U(A) {
        var R = new this(c);
        return f.reject(R, A);
      }
      v.all = ae;
      function ae(A) {
        var R = this;
        if (Object.prototype.toString.call(A) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var P = A.length, b = !1;
        if (!P)
          return this.resolve([]);
        for (var k = new Array(P), D = 0, B = -1, F = new this(c); ++B < P; )
          q(A[B], B);
        return F;
        function q(te, J) {
          R.resolve(te).then(M, function(Q) {
            b || (b = !0, f.reject(F, Q));
          });
          function M(Q) {
            k[J] = Q, ++D === P && !b && (b = !0, f.resolve(F, k));
          }
        }
      }
      v.race = G;
      function G(A) {
        var R = this;
        if (Object.prototype.toString.call(A) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var P = A.length, b = !1;
        if (!P)
          return this.resolve([]);
        for (var k = -1, D = new this(c); ++k < P; )
          B(A[k]);
        return D;
        function B(F) {
          R.resolve(F).then(function(q) {
            b || (b = !0, f.resolve(D, q));
          }, function(q) {
            b || (b = !0, f.reject(D, q));
          });
        }
      }
    }, { 1: 1 }], 3: [function(r, n, o) {
      (function(s) {
        typeof s.Promise != "function" && (s.Promise = r(2));
      }).call(this, typeof Ie < "u" ? Ie : typeof self < "u" ? self : typeof window < "u" ? window : {});
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
      function E(i, u) {
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
      var v = Promise;
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
      function I(i) {
        return typeof i != "string" && (console.warn(i + " used as a key, but it is not a string."), i = String(i)), i;
      }
      function z() {
        if (arguments.length && typeof arguments[arguments.length - 1] == "function")
          return arguments[arguments.length - 1];
      }
      var N = "local-forage-detect-blob-support", K = void 0, U = {}, ae = Object.prototype.toString, G = "readonly", A = "readwrite";
      function R(i) {
        for (var u = i.length, a = new ArrayBuffer(u), d = new Uint8Array(a), p = 0; p < u; p++)
          d[p] = i.charCodeAt(p);
        return a;
      }
      function P(i) {
        return new v(function(u) {
          var a = i.transaction(N, A), d = E([""]);
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
        return typeof K == "boolean" ? v.resolve(K) : P(i).then(function(u) {
          return K = u, K;
        });
      }
      function k(i) {
        var u = U[i.name], a = {};
        a.promise = new v(function(d, p) {
          a.resolve = d, a.reject = p;
        }), u.deferredOperations.push(a), u.dbReady ? u.dbReady = u.dbReady.then(function() {
          return a.promise;
        }) : u.dbReady = a.promise;
      }
      function D(i) {
        var u = U[i.name], a = u.deferredOperations.pop();
        if (a)
          return a.resolve(), a.promise;
      }
      function B(i, u) {
        var a = U[i.name], d = a.deferredOperations.pop();
        if (d)
          return d.reject(u), d.promise;
      }
      function F(i, u) {
        return new v(function(a, d) {
          if (U[i.name] = U[i.name] || Ct(), i.db)
            if (u)
              k(i), i.db.close();
            else
              return a(i.db);
          var p = [i.name];
          u && p.push(i.version);
          var l = y.open.apply(y, p);
          u && (l.onupgradeneeded = function(g) {
            var w = l.result;
            try {
              w.createObjectStore(i.storeName), g.oldVersion <= 1 && w.createObjectStore(N);
            } catch (S) {
              if (S.name === "ConstraintError")
                console.warn('The database "' + i.name + '" has been upgraded from version ' + g.oldVersion + " to version " + g.newVersion + ', but the storage "' + i.storeName + '" already exists.');
              else
                throw S;
            }
          }), l.onerror = function(g) {
            g.preventDefault(), d(l.error);
          }, l.onsuccess = function() {
            var g = l.result;
            g.onversionchange = function(w) {
              w.target.close();
            }, a(g), D(i);
          };
        });
      }
      function q(i) {
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
        return new v(function(u, a) {
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
        var u = R(atob(i.data));
        return E([u], { type: i.type });
      }
      function Bt(i) {
        return i && i.__local_forage_encoded_blob;
      }
      function oo(i) {
        var u = this, a = u._initReady().then(function() {
          var d = U[u._dbInfo.name];
          if (d && d.dbReady)
            return d.dbReady;
        });
        return $(a, i, i), a;
      }
      function io(i) {
        k(i);
        for (var u = U[i.name], a = u.forages, d = 0; d < a.length; d++) {
          var p = a[d];
          p._dbInfo.db && (p._dbInfo.db.close(), p._dbInfo.db = null);
        }
        return i.db = null, q(i).then(function(l) {
          return i.db = l, J(i) ? te(i) : l;
        }).then(function(l) {
          i.db = u.db = l;
          for (var g = 0; g < a.length; g++)
            a[g]._dbInfo.db = l;
        }).catch(function(l) {
          throw B(i, l), l;
        });
      }
      function he(i, u, a, d) {
        d === void 0 && (d = 1);
        try {
          var p = i.db.transaction(i.storeName, u);
          a(null, p);
        } catch (l) {
          if (d > 0 && (!i.db || l.name === "InvalidStateError" || l.name === "NotFoundError"))
            return v.resolve().then(function() {
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
      function Ct() {
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
        p || (p = Ct(), U[a.name] = p), p.forages.push(u), u._initReady || (u._initReady = u.ready, u.ready = oo);
        var l = [];
        function g() {
          return v.resolve();
        }
        for (var w = 0; w < p.forages.length; w++) {
          var S = p.forages[w];
          S !== u && l.push(S._initReady().catch(g));
        }
        var O = p.forages.slice(0);
        return v.all(l).then(function() {
          return a.db = p.db, q(a);
        }).then(function(x) {
          return a.db = x, J(a, u._defaultConfig.version) ? te(a) : x;
        }).then(function(x) {
          a.db = p.db = x, u._dbInfo = a;
          for (var T = 0; T < O.length; T++) {
            var C = O[T];
            C !== u && (C._dbInfo.db = a.db, C._dbInfo.version = a.version);
          }
        });
      }
      function so(i, u) {
        var a = this;
        i = I(i);
        var d = new v(function(p, l) {
          a.ready().then(function() {
            he(a._dbInfo, G, function(g, w) {
              if (g)
                return l(g);
              try {
                var S = w.objectStore(a._dbInfo.storeName), O = S.get(i);
                O.onsuccess = function() {
                  var x = O.result;
                  x === void 0 && (x = null), Bt(x) && (x = Q(x)), p(x);
                }, O.onerror = function() {
                  l(O.error);
                };
              } catch (x) {
                l(x);
              }
            });
          }).catch(l);
        });
        return _(d, u), d;
      }
      function uo(i, u) {
        var a = this, d = new v(function(p, l) {
          a.ready().then(function() {
            he(a._dbInfo, G, function(g, w) {
              if (g)
                return l(g);
              try {
                var S = w.objectStore(a._dbInfo.storeName), O = S.openCursor(), x = 1;
                O.onsuccess = function() {
                  var T = O.result;
                  if (T) {
                    var C = T.value;
                    Bt(C) && (C = Q(C));
                    var H = i(C, T.key, x++);
                    H !== void 0 ? p(H) : T.continue();
                  } else
                    p();
                }, O.onerror = function() {
                  l(O.error);
                };
              } catch (T) {
                l(T);
              }
            });
          }).catch(l);
        });
        return _(d, u), d;
      }
      function fo(i, u, a) {
        var d = this;
        i = I(i);
        var p = new v(function(l, g) {
          var w;
          d.ready().then(function() {
            return w = d._dbInfo, ae.call(u) === "[object Blob]" ? b(w.db).then(function(S) {
              return S ? u : M(u);
            }) : u;
          }).then(function(S) {
            he(d._dbInfo, A, function(O, x) {
              if (O)
                return g(O);
              try {
                var T = x.objectStore(d._dbInfo.storeName);
                S === null && (S = void 0);
                var C = T.put(S, i);
                x.oncomplete = function() {
                  S === void 0 && (S = null), l(S);
                }, x.onabort = x.onerror = function() {
                  var H = C.error ? C.error : C.transaction.error;
                  g(H);
                };
              } catch (H) {
                g(H);
              }
            });
          }).catch(g);
        });
        return _(p, a), p;
      }
      function co(i, u) {
        var a = this;
        i = I(i);
        var d = new v(function(p, l) {
          a.ready().then(function() {
            he(a._dbInfo, A, function(g, w) {
              if (g)
                return l(g);
              try {
                var S = w.objectStore(a._dbInfo.storeName), O = S.delete(i);
                w.oncomplete = function() {
                  p();
                }, w.onerror = function() {
                  l(O.error);
                }, w.onabort = function() {
                  var x = O.error ? O.error : O.transaction.error;
                  l(x);
                };
              } catch (x) {
                l(x);
              }
            });
          }).catch(l);
        });
        return _(d, u), d;
      }
      function lo(i) {
        var u = this, a = new v(function(d, p) {
          u.ready().then(function() {
            he(u._dbInfo, A, function(l, g) {
              if (l)
                return p(l);
              try {
                var w = g.objectStore(u._dbInfo.storeName), S = w.clear();
                g.oncomplete = function() {
                  d();
                }, g.onabort = g.onerror = function() {
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
        var u = this, a = new v(function(d, p) {
          u.ready().then(function() {
            he(u._dbInfo, G, function(l, g) {
              if (l)
                return p(l);
              try {
                var w = g.objectStore(u._dbInfo.storeName), S = w.count();
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
        var a = this, d = new v(function(p, l) {
          if (i < 0) {
            p(null);
            return;
          }
          a.ready().then(function() {
            he(a._dbInfo, G, function(g, w) {
              if (g)
                return l(g);
              try {
                var S = w.objectStore(a._dbInfo.storeName), O = !1, x = S.openKeyCursor();
                x.onsuccess = function() {
                  var T = x.result;
                  if (!T) {
                    p(null);
                    return;
                  }
                  i === 0 || O ? p(T.key) : (O = !0, T.advance(i));
                }, x.onerror = function() {
                  l(x.error);
                };
              } catch (T) {
                l(T);
              }
            });
          }).catch(l);
        });
        return _(d, u), d;
      }
      function mo(i) {
        var u = this, a = new v(function(d, p) {
          u.ready().then(function() {
            he(u._dbInfo, G, function(l, g) {
              if (l)
                return p(l);
              try {
                var w = g.objectStore(u._dbInfo.storeName), S = w.openKeyCursor(), O = [];
                S.onsuccess = function() {
                  var x = S.result;
                  if (!x) {
                    d(O);
                    return;
                  }
                  O.push(x.key), x.continue();
                }, S.onerror = function() {
                  p(S.error);
                };
              } catch (x) {
                p(x);
              }
            });
          }).catch(p);
        });
        return _(a, i), a;
      }
      function yo(i, u) {
        u = z.apply(this, arguments);
        var a = this.config();
        i = typeof i != "function" && i || {}, i.name || (i.name = i.name || a.name, i.storeName = i.storeName || a.storeName);
        var d = this, p;
        if (!i.name)
          p = v.reject("Invalid arguments");
        else {
          var l = i.name === a.name && d._dbInfo.db, g = l ? v.resolve(d._dbInfo.db) : q(i).then(function(w) {
            var S = U[i.name], O = S.forages;
            S.db = w;
            for (var x = 0; x < O.length; x++)
              O[x]._dbInfo.db = w;
            return w;
          });
          i.storeName ? p = g.then(function(w) {
            if (w.objectStoreNames.contains(i.storeName)) {
              var S = w.version + 1;
              k(i);
              var O = U[i.name], x = O.forages;
              w.close();
              for (var T = 0; T < x.length; T++) {
                var C = x[T];
                C._dbInfo.db = null, C._dbInfo.version = S;
              }
              var H = new v(function(Y, ee) {
                var Z = y.open(i.name, S);
                Z.onerror = function(se) {
                  var De = Z.result;
                  De.close(), ee(se);
                }, Z.onupgradeneeded = function() {
                  var se = Z.result;
                  se.deleteObjectStore(i.storeName);
                }, Z.onsuccess = function() {
                  var se = Z.result;
                  se.close(), Y(se);
                };
              });
              return H.then(function(Y) {
                O.db = Y;
                for (var ee = 0; ee < x.length; ee++) {
                  var Z = x[ee];
                  Z._dbInfo.db = Y, D(Z._dbInfo);
                }
              }).catch(function(Y) {
                throw (B(i, Y) || v.resolve()).catch(function() {
                }), Y;
              });
            }
          }) : p = g.then(function(w) {
            k(i);
            var S = U[i.name], O = S.forages;
            w.close();
            for (var x = 0; x < O.length; x++) {
              var T = O[x];
              T._dbInfo.db = null;
            }
            var C = new v(function(H, Y) {
              var ee = y.deleteDatabase(i.name);
              ee.onerror = function() {
                var Z = ee.result;
                Z && Z.close(), Y(ee.error);
              }, ee.onblocked = function() {
                console.warn('dropInstance blocked for database "' + i.name + '" until all open connections are closed');
              }, ee.onsuccess = function() {
                var Z = ee.result;
                Z && Z.close(), H(Z);
              };
            });
            return C.then(function(H) {
              S.db = H;
              for (var Y = 0; Y < O.length; Y++) {
                var ee = O[Y];
                D(ee._dbInfo);
              }
            }).catch(function(H) {
              throw (B(i, H) || v.resolve()).catch(function() {
              }), H;
            });
          });
        }
        return _(p, u), p;
      }
      var vo = {
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
        dropInstance: yo
      };
      function go() {
        return typeof openDatabase == "function";
      }
      var me = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bo = "~~local_forage_type~", jt = /^~~local_forage_type~([^~]+)~/, We = "__lfsc__:", ot = We.length, it = "arbf", at = "blob", Ft = "si08", Mt = "ui08", Ut = "uic8", Ht = "si16", Yt = "si32", qt = "ur16", Wt = "ui32", Kt = "fl32", Vt = "fl64", Xt = ot + it.length, Gt = Object.prototype.toString;
      function Jt(i) {
        var u = i.length * 0.75, a = i.length, d, p = 0, l, g, w, S;
        i[i.length - 1] === "=" && (u--, i[i.length - 2] === "=" && u--);
        var O = new ArrayBuffer(u), x = new Uint8Array(O);
        for (d = 0; d < a; d += 4)
          l = me.indexOf(i[d]), g = me.indexOf(i[d + 1]), w = me.indexOf(i[d + 2]), S = me.indexOf(i[d + 3]), x[p++] = l << 2 | g >> 4, x[p++] = (g & 15) << 4 | w >> 2, x[p++] = (w & 3) << 6 | S & 63;
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
          i instanceof ArrayBuffer ? (d = i, p += it) : (d = i.buffer, a === "[object Int8Array]" ? p += Ft : a === "[object Uint8Array]" ? p += Mt : a === "[object Uint8ClampedArray]" ? p += Ut : a === "[object Int16Array]" ? p += Ht : a === "[object Uint16Array]" ? p += qt : a === "[object Int32Array]" ? p += Yt : a === "[object Uint32Array]" ? p += Wt : a === "[object Float32Array]" ? p += Kt : a === "[object Float64Array]" ? p += Vt : u(new Error("Failed to get type for BinaryArray"))), u(p + st(d));
        } else if (a === "[object Blob]") {
          var l = new FileReader();
          l.onload = function() {
            var g = bo + i.type + "~" + st(this.result);
            u(We + at + g);
          }, l.readAsArrayBuffer(i);
        } else
          try {
            u(JSON.stringify(i));
          } catch (g) {
            console.error("Couldn't convert value into a JSON string: ", i), u(null, g);
          }
      }
      function _o(i) {
        if (i.substring(0, ot) !== We)
          return JSON.parse(i);
        var u = i.substring(Xt), a = i.substring(ot, Xt), d;
        if (a === at && jt.test(u)) {
          var p = u.match(jt);
          d = p[1], u = u.substring(p[0].length);
        }
        var l = Jt(u);
        switch (a) {
          case it:
            return l;
          case at:
            return E([l], { type: d });
          case Ft:
            return new Int8Array(l);
          case Mt:
            return new Uint8Array(l);
          case Ut:
            return new Uint8ClampedArray(l);
          case Ht:
            return new Int16Array(l);
          case qt:
            return new Uint16Array(l);
          case Yt:
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
        var p = new v(function(l, g) {
          try {
            a.db = openDatabase(a.name, String(a.version), a.description, a.size);
          } catch (w) {
            return g(w);
          }
          a.db.transaction(function(w) {
            Qt(w, a, function() {
              u._dbInfo = a, l();
            }, function(S, O) {
              g(O);
            });
          }, g);
        });
        return a.serializer = ut, p;
      }
      function ye(i, u, a, d, p, l) {
        i.executeSql(a, d, p, function(g, w) {
          w.code === w.SYNTAX_ERR ? g.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [u.storeName], function(S, O) {
            O.rows.length ? l(S, w) : Qt(S, u, function() {
              S.executeSql(a, d, p, l);
            }, l);
          }, l) : l(g, w);
        }, l);
      }
      function Oo(i, u) {
        var a = this;
        i = I(i);
        var d = new v(function(p, l) {
          a.ready().then(function() {
            var g = a._dbInfo;
            g.db.transaction(function(w) {
              ye(w, g, "SELECT * FROM " + g.storeName + " WHERE key = ? LIMIT 1", [i], function(S, O) {
                var x = O.rows.length ? O.rows.item(0).value : null;
                x && (x = g.serializer.deserialize(x)), p(x);
              }, function(S, O) {
                l(O);
              });
            });
          }).catch(l);
        });
        return _(d, u), d;
      }
      function xo(i, u) {
        var a = this, d = new v(function(p, l) {
          a.ready().then(function() {
            var g = a._dbInfo;
            g.db.transaction(function(w) {
              ye(w, g, "SELECT * FROM " + g.storeName, [], function(S, O) {
                for (var x = O.rows, T = x.length, C = 0; C < T; C++) {
                  var H = x.item(C), Y = H.value;
                  if (Y && (Y = g.serializer.deserialize(Y)), Y = i(Y, H.key, C + 1), Y !== void 0) {
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
      function Zt(i, u, a, d) {
        var p = this;
        i = I(i);
        var l = new v(function(g, w) {
          p.ready().then(function() {
            u === void 0 && (u = null);
            var S = u, O = p._dbInfo;
            O.serializer.serialize(u, function(x, T) {
              T ? w(T) : O.db.transaction(function(C) {
                ye(C, O, "INSERT OR REPLACE INTO " + O.storeName + " (key, value) VALUES (?, ?)", [i, x], function() {
                  g(S);
                }, function(H, Y) {
                  w(Y);
                });
              }, function(C) {
                if (C.code === C.QUOTA_ERR) {
                  if (d > 0) {
                    g(Zt.apply(p, [i, S, a, d - 1]));
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
      function $o(i, u, a) {
        return Zt.apply(this, [i, u, a, 1]);
      }
      function Ao(i, u) {
        var a = this;
        i = I(i);
        var d = new v(function(p, l) {
          a.ready().then(function() {
            var g = a._dbInfo;
            g.db.transaction(function(w) {
              ye(w, g, "DELETE FROM " + g.storeName + " WHERE key = ?", [i], function() {
                p();
              }, function(S, O) {
                l(O);
              });
            });
          }).catch(l);
        });
        return _(d, u), d;
      }
      function zo(i) {
        var u = this, a = new v(function(d, p) {
          u.ready().then(function() {
            var l = u._dbInfo;
            l.db.transaction(function(g) {
              ye(g, l, "DELETE FROM " + l.storeName, [], function() {
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
        var u = this, a = new v(function(d, p) {
          u.ready().then(function() {
            var l = u._dbInfo;
            l.db.transaction(function(g) {
              ye(g, l, "SELECT COUNT(key) as c FROM " + l.storeName, [], function(w, S) {
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
        var a = this, d = new v(function(p, l) {
          a.ready().then(function() {
            var g = a._dbInfo;
            g.db.transaction(function(w) {
              ye(w, g, "SELECT key FROM " + g.storeName + " WHERE id = ? LIMIT 1", [i + 1], function(S, O) {
                var x = O.rows.length ? O.rows.item(0).key : null;
                p(x);
              }, function(S, O) {
                l(O);
              });
            });
          }).catch(l);
        });
        return _(d, u), d;
      }
      function To(i) {
        var u = this, a = new v(function(d, p) {
          u.ready().then(function() {
            var l = u._dbInfo;
            l.db.transaction(function(g) {
              ye(g, l, "SELECT key FROM " + l.storeName, [], function(w, S) {
                for (var O = [], x = 0; x < S.rows.length; x++)
                  O.push(S.rows.item(x).key);
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
        return new v(function(u, a) {
          i.transaction(function(d) {
            d.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(p, l) {
              for (var g = [], w = 0; w < l.rows.length; w++)
                g.push(l.rows.item(w).name);
              u({
                db: i,
                storeNames: g
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
        u = z.apply(this, arguments);
        var a = this.config();
        i = typeof i != "function" && i || {}, i.name || (i.name = i.name || a.name, i.storeName = i.storeName || a.storeName);
        var d = this, p;
        return i.name ? p = new v(function(l) {
          var g;
          i.name === a.name ? g = d._dbInfo.db : g = openDatabase(i.name, "", "", 0), i.storeName ? l({
            db: g,
            storeNames: [i.storeName]
          }) : l(ko(g));
        }).then(function(l) {
          return new v(function(g, w) {
            l.db.transaction(function(S) {
              function O(H) {
                return new v(function(Y, ee) {
                  S.executeSql("DROP TABLE IF EXISTS " + H, [], function() {
                    Y();
                  }, function(Z, se) {
                    ee(se);
                  });
                });
              }
              for (var x = [], T = 0, C = l.storeNames.length; T < C; T++)
                x.push(O(l.storeNames[T]));
              v.all(x).then(function() {
                g();
              }).catch(function(H) {
                w(H);
              });
            }, function(S) {
              w(S);
            });
          });
        }) : p = v.reject("Invalid arguments"), _(p, u), p;
      }
      var Po = {
        _driver: "webSQLStorage",
        _initStorage: So,
        _support: go(),
        iterate: xo,
        getItem: Oo,
        setItem: $o,
        removeItem: Ao,
        clear: zo,
        length: Eo,
        key: Io,
        keys: To,
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
      function er(i, u) {
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
        return a.keyPrefix = er(i, u._defaultConfig), Do() ? (u._dbInfo = a, a.serializer = ut, v.resolve()) : v.reject();
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
        i = I(i);
        var d = a.ready().then(function() {
          var p = a._dbInfo, l = localStorage.getItem(p.keyPrefix + i);
          return l && (l = p.serializer.deserialize(l)), l;
        });
        return _(d, u), d;
      }
      function Fo(i, u) {
        var a = this, d = a.ready().then(function() {
          for (var p = a._dbInfo, l = p.keyPrefix, g = l.length, w = localStorage.length, S = 1, O = 0; O < w; O++) {
            var x = localStorage.key(O);
            if (x.indexOf(l) === 0) {
              var T = localStorage.getItem(x);
              if (T && (T = p.serializer.deserialize(T)), T = i(T, x.substring(g), S++), T !== void 0)
                return T;
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
          for (var d = u._dbInfo, p = localStorage.length, l = [], g = 0; g < p; g++) {
            var w = localStorage.key(g);
            w.indexOf(d.keyPrefix) === 0 && l.push(w.substring(d.keyPrefix.length));
          }
          return l;
        });
        return _(a, i), a;
      }
      function Ho(i) {
        var u = this, a = u.keys().then(function(d) {
          return d.length;
        });
        return _(a, i), a;
      }
      function Yo(i, u) {
        var a = this;
        i = I(i);
        var d = a.ready().then(function() {
          var p = a._dbInfo;
          localStorage.removeItem(p.keyPrefix + i);
        });
        return _(d, u), d;
      }
      function qo(i, u, a) {
        var d = this;
        i = I(i);
        var p = d.ready().then(function() {
          u === void 0 && (u = null);
          var l = u;
          return new v(function(g, w) {
            var S = d._dbInfo;
            S.serializer.serialize(u, function(O, x) {
              if (x)
                w(x);
              else
                try {
                  localStorage.setItem(S.keyPrefix + i, O), g(l);
                } catch (T) {
                  (T.name === "QuotaExceededError" || T.name === "NS_ERROR_DOM_QUOTA_REACHED") && w(T), w(T);
                }
            });
          });
        });
        return _(p, a), p;
      }
      function Wo(i, u) {
        if (u = z.apply(this, arguments), i = typeof i != "function" && i || {}, !i.name) {
          var a = this.config();
          i.name = i.name || a.name, i.storeName = i.storeName || a.storeName;
        }
        var d = this, p;
        return i.name ? p = new v(function(l) {
          i.storeName ? l(er(i, d._defaultConfig)) : l(i.name + "/");
        }).then(function(l) {
          for (var g = localStorage.length - 1; g >= 0; g--) {
            var w = localStorage.key(g);
            w.indexOf(l) === 0 && localStorage.removeItem(w);
          }
        }) : p = v.reject("Invalid arguments"), _(p, u), p;
      }
      var Ko = {
        _driver: "localStorageWrapper",
        _initStorage: Bo,
        _support: No(),
        iterate: Fo,
        getItem: jo,
        setItem: qo,
        removeItem: Yo,
        clear: Co,
        length: Ho,
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
      }, Re = {}, rr = {}, xe = {
        INDEXEDDB: vo,
        WEBSQL: Po,
        LOCALSTORAGE: Ko
      }, Go = [xe.INDEXEDDB._driver, xe.WEBSQL._driver, xe.LOCALSTORAGE._driver], Ke = ["dropInstance"], ft = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(Ke), Jo = {
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
          for (var a in xe)
            if (xe.hasOwnProperty(a)) {
              var d = xe[a], p = d._driver;
              this[a] = p, Re[p] || this.defineDriver(d);
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
          var l = new v(function(g, w) {
            try {
              var S = a._driver, O = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
              if (!a._driver) {
                w(O);
                return;
              }
              for (var x = ft.concat("_initStorage"), T = 0, C = x.length; T < C; T++) {
                var H = x[T], Y = !Xo(Ke, H);
                if ((Y || a[H]) && typeof a[H] != "function") {
                  w(O);
                  return;
                }
              }
              var ee = function() {
                for (var De = function(ri) {
                  return function() {
                    var ni = new Error("Method " + ri + " is not implemented by the current driver"), nr = v.reject(ni);
                    return _(nr, arguments[arguments.length - 1]), nr;
                  };
                }, lt = 0, ti = Ke.length; lt < ti; lt++) {
                  var dt = Ke[lt];
                  a[dt] || (a[dt] = De(dt));
                }
              };
              ee();
              var Z = function(De) {
                Re[S] && console.info("Redefining LocalForage driver: " + S), Re[S] = a, rr[S] = De, g();
              };
              "_support" in a ? a._support && typeof a._support == "function" ? a._support().then(Z, w) : Z(!!a._support) : Z(!0);
            } catch (se) {
              w(se);
            }
          });
          return $(l, d, p), l;
        }, i.prototype.driver = function() {
          return this._driver || null;
        }, i.prototype.getDriver = function(a, d, p) {
          var l = Re[a] ? v.resolve(Re[a]) : v.reject(new Error("Driver not found."));
          return $(l, d, p), l;
        }, i.prototype.getSerializer = function(a) {
          var d = v.resolve(ut);
          return $(d, a), d;
        }, i.prototype.ready = function(a) {
          var d = this, p = d._driverSet.then(function() {
            return d._ready === null && (d._ready = d._initDriver()), d._ready;
          });
          return $(p, a, a), p;
        }, i.prototype.setDriver = function(a, d, p) {
          var l = this;
          tr(a) || (a = [a]);
          var g = this._getSupportedDrivers(a);
          function w() {
            l._config.driver = l.driver();
          }
          function S(T) {
            return l._extend(T), w(), l._ready = l._initStorage(l._config), l._ready;
          }
          function O(T) {
            return function() {
              var C = 0;
              function H() {
                for (; C < T.length; ) {
                  var Y = T[C];
                  return C++, l._dbInfo = null, l._ready = null, l.getDriver(Y).then(S).catch(H);
                }
                w();
                var ee = new Error("No available storage method found.");
                return l._driverSet = v.reject(ee), l._driverSet;
              }
              return H();
            };
          }
          var x = this._driverSet !== null ? this._driverSet.catch(function() {
            return v.resolve();
          }) : v.resolve();
          return this._driverSet = x.then(function() {
            var T = g[0];
            return l._dbInfo = null, l._ready = null, l.getDriver(T).then(function(C) {
              l._driver = C._driver, w(), l._wrapLibraryMethodsWithReady(), l._initDriver = O(g);
            });
          }).catch(function() {
            w();
            var T = new Error("No available storage method found.");
            return l._driverSet = v.reject(T), l._driverSet;
          }), $(this._driverSet, d, p), this._driverSet;
        }, i.prototype.supports = function(a) {
          return !!rr[a];
        }, i.prototype._extend = function(a) {
          ct(this, a);
        }, i.prototype._getSupportedDrivers = function(a) {
          for (var d = [], p = 0, l = a.length; p < l; p++) {
            var g = a[p];
            this.supports(g) && d.push(g);
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
var Pi = on.exports;
const Ni = /* @__PURE__ */ Li(Pi), Ae = [];
function Ri(e, t) {
  return {
    subscribe: an(e, t).subscribe
  };
}
function an(e, t = ce) {
  let r;
  const n = /* @__PURE__ */ new Set();
  function o(f) {
    if (tn(e, f) && (e = f, r)) {
      const y = !Ae.length;
      for (const m of n)
        m[1](), Ae.push(m, e);
      if (y) {
        for (let m = 0; m < Ae.length; m += 2)
          Ae[m][0](Ae[m + 1]);
        Ae.length = 0;
      }
    }
  }
  function s(f) {
    o(f(e));
  }
  function c(f, y = ce) {
    const m = [f, y];
    return n.add(m), n.size === 1 && (r = t(o, s) || ce), f(e), () => {
      n.delete(m), n.size === 0 && r && (r(), r = null);
    };
  }
  return { set: o, update: s, subscribe: c };
}
Ni.config({
  name: "SNS HPC AI Assitant"
});
const _e = {
  Unknown: { slug: "unknown", description: "Checking the AI server status...", icon: "⏳" },
  Error: { slug: "error", description: "The AI server is currently unavailable", icon: "🔴" },
  OK: { slug: "ok", description: "The AI server is fully functional", icon: "🟢" },
  Running: { slug: "running", description: "The AI server is working to answer", icon: "🔵" },
  Degraded: { slug: "degraded", description: "The AI server is currently degraded", icon: "🟡" }
};
class Di {
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
function Bi(e) {
  return e instanceof Uint8Array || e != null && typeof e == "object" && e.constructor.name === "Uint8Array";
}
function Pt(e, ...t) {
  if (!Bi(e))
    throw new Error("Expected Uint8Array");
  if (t.length > 0 && !t.includes(e.length))
    throw new Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`);
}
ie.bytes = Pt;
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
  Pt(e);
  const r = t.outputLen;
  if (e.length < r)
    throw new Error(`digestInto() expects output buffer of length at least ${r}`);
}
ie.output = cn;
const Ci = { number: Ze, bool: sn, bytes: Pt, hash: un, exists: fn, output: cn };
ie.default = Ci;
var L = {};
Object.defineProperty(L, "__esModule", { value: !0 });
L.add5L = L.add5H = L.add4H = L.add4L = L.add3H = L.add3L = L.add = L.rotlBL = L.rotlBH = L.rotlSL = L.rotlSH = L.rotr32L = L.rotr32H = L.rotrBL = L.rotrBH = L.rotrSL = L.rotrSH = L.shrSL = L.shrSH = L.toBig = L.split = L.fromBig = void 0;
const Xe = /* @__PURE__ */ BigInt(2 ** 32 - 1), vt = /* @__PURE__ */ BigInt(32);
function Nt(e, t = !1) {
  return t ? { h: Number(e & Xe), l: Number(e >> vt & Xe) } : { h: Number(e >> vt & Xe) | 0, l: Number(e & Xe) | 0 };
}
L.fromBig = Nt;
function ln(e, t = !1) {
  let r = new Uint32Array(e.length), n = new Uint32Array(e.length);
  for (let o = 0; o < e.length; o++) {
    const { h: s, l: c } = Nt(e[o], t);
    [r[o], n[o]] = [s, c];
  }
  return [r, n];
}
L.split = ln;
const dn = (e, t) => BigInt(e >>> 0) << vt | BigInt(t >>> 0);
L.toBig = dn;
const hn = (e, t, r) => e >>> r;
L.shrSH = hn;
const pn = (e, t, r) => e << 32 - r | t >>> r;
L.shrSL = pn;
const mn = (e, t, r) => e >>> r | t << 32 - r;
L.rotrSH = mn;
const yn = (e, t, r) => e << 32 - r | t >>> r;
L.rotrSL = yn;
const vn = (e, t, r) => e << 64 - r | t >>> r - 32;
L.rotrBH = vn;
const gn = (e, t, r) => e >>> r - 32 | t << 64 - r;
L.rotrBL = gn;
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
const xn = (e, t, r) => e << r - 32 | t >>> 64 - r;
L.rotlBL = xn;
function $n(e, t, r, n) {
  const o = (t >>> 0) + (n >>> 0);
  return { h: e + r + (o / 2 ** 32 | 0) | 0, l: o | 0 };
}
L.add = $n;
const An = (e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0);
L.add3L = An;
const zn = (e, t, r, n) => t + r + n + (e / 2 ** 32 | 0) | 0;
L.add3H = zn;
const En = (e, t, r, n) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0);
L.add4L = En;
const In = (e, t, r, n, o) => t + r + n + o + (e / 2 ** 32 | 0) | 0;
L.add4H = In;
const Tn = (e, t, r, n, o) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0) + (o >>> 0);
L.add5L = Tn;
const kn = (e, t, r, n, o, s) => t + r + n + o + s + (e / 2 ** 32 | 0) | 0;
L.add5H = kn;
const ji = {
  fromBig: Nt,
  split: ln,
  toBig: dn,
  shrSH: hn,
  shrSL: pn,
  rotrSH: mn,
  rotrSL: yn,
  rotrBH: vn,
  rotrBL: gn,
  rotr32H: bn,
  rotr32L: wn,
  rotlSH: _n,
  rotlSL: Sn,
  rotlBH: On,
  rotlBL: xn,
  add: $n,
  add3L: An,
  add3H: zn,
  add4L: En,
  add4H: In,
  add5H: kn,
  add5L: Tn
};
L.default = ji;
var Ln = {}, nt = {};
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
  const c = (b, k) => b << 32 - k | b >>> k;
  if (e.rotr = c, e.isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68, !e.isLE)
    throw new Error("Non little-endian hardware is not supported");
  const f = /* @__PURE__ */ Array.from({ length: 256 }, (b, k) => k.toString(16).padStart(2, "0"));
  function y(b) {
    if (!o(b))
      throw new Error("Uint8Array expected");
    let k = "";
    for (let D = 0; D < b.length; D++)
      k += f[b[D]];
    return k;
  }
  e.bytesToHex = y;
  const m = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
  function E(b) {
    if (b >= m._0 && b <= m._9)
      return b - m._0;
    if (b >= m._A && b <= m._F)
      return b - (m._A - 10);
    if (b >= m._a && b <= m._f)
      return b - (m._a - 10);
  }
  function v(b) {
    if (typeof b != "string")
      throw new Error("hex string expected, got " + typeof b);
    const k = b.length, D = k / 2;
    if (k % 2)
      throw new Error("padded hex string expected, got unpadded hex of length " + k);
    const B = new Uint8Array(D);
    for (let F = 0, q = 0; F < D; F++, q += 2) {
      const te = E(b.charCodeAt(q)), J = E(b.charCodeAt(q + 1));
      if (te === void 0 || J === void 0) {
        const M = b[q] + b[q + 1];
        throw new Error('hex string expected, got non-hex character "' + M + '" at index ' + q);
      }
      B[F] = te * 16 + J;
    }
    return B;
  }
  e.hexToBytes = v;
  const _ = async () => {
  };
  e.nextTick = _;
  async function $(b, k, D) {
    let B = Date.now();
    for (let F = 0; F < b; F++) {
      D(F);
      const q = Date.now() - B;
      q >= 0 && q < k || (await (0, e.nextTick)(), B += q);
    }
  }
  e.asyncLoop = $;
  function I(b) {
    if (typeof b != "string")
      throw new Error(`utf8ToBytes expected string, got ${typeof b}`);
    return new Uint8Array(new TextEncoder().encode(b));
  }
  e.utf8ToBytes = I;
  function z(b) {
    if (typeof b == "string" && (b = I(b)), !o(b))
      throw new Error(`expected Uint8Array, got ${typeof b}`);
    return b;
  }
  e.toBytes = z;
  function N(...b) {
    let k = 0;
    for (let B = 0; B < b.length; B++) {
      const F = b[B];
      if (!o(F))
        throw new Error("Uint8Array expected");
      k += F.length;
    }
    const D = new Uint8Array(k);
    for (let B = 0, F = 0; B < b.length; B++) {
      const q = b[B];
      D.set(q, F), F += q.length;
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
  const U = {}.toString;
  function ae(b, k) {
    if (k !== void 0 && U.call(k) !== "[object Object]")
      throw new Error("Options should be object or undefined");
    return Object.assign(b, k);
  }
  e.checkOpts = ae;
  function G(b) {
    const k = (B) => b().update(z(B)).digest(), D = b();
    return k.outputLen = D.outputLen, k.blockLen = D.blockLen, k.create = () => b(), k;
  }
  e.wrapConstructor = G;
  function A(b) {
    const k = (B, F) => b(F).update(z(B)).digest(), D = b({});
    return k.outputLen = D.outputLen, k.blockLen = D.blockLen, k.create = (B) => b(B), k;
  }
  e.wrapConstructorWithOpts = A;
  function R(b) {
    const k = (B, F) => b(F).update(z(B)).digest(), D = b({});
    return k.outputLen = D.outputLen, k.blockLen = D.blockLen, k.create = (B) => b(B), k;
  }
  e.wrapXOFConstructorWithOpts = R;
  function P(b = 32) {
    if (t.crypto && typeof t.crypto.getRandomValues == "function")
      return t.crypto.getRandomValues(new Uint8Array(b));
    throw new Error("crypto.getRandomValues must be defined");
  }
  e.randomBytes = P;
})(Ln);
Object.defineProperty(V, "__esModule", { value: !0 });
V.shake256 = V.shake128 = V.keccak_512 = V.keccak_384 = V.keccak_256 = V.keccak_224 = V.sha3_512 = V.sha3_384 = V.sha3_256 = V.sha3_224 = V.Keccak = V.keccakP = void 0;
const ze = ie, Ue = L, je = Ln, [Pn, Nn, Rn] = [[], [], []], Fi = /* @__PURE__ */ BigInt(0), Be = /* @__PURE__ */ BigInt(1), Mi = /* @__PURE__ */ BigInt(2), Ui = /* @__PURE__ */ BigInt(7), Hi = /* @__PURE__ */ BigInt(256), Yi = /* @__PURE__ */ BigInt(113);
for (let e = 0, t = Be, r = 1, n = 0; e < 24; e++) {
  [r, n] = [n, (2 * r + 3 * n) % 5], Pn.push(2 * (5 * n + r)), Nn.push((e + 1) * (e + 2) / 2 % 64);
  let o = Fi;
  for (let s = 0; s < 7; s++)
    t = (t << Be ^ (t >> Ui) * Yi) % Hi, t & Mi && (o ^= Be << (Be << /* @__PURE__ */ BigInt(s)) - Be);
  Rn.push(o);
}
const [qi, Wi] = /* @__PURE__ */ (0, Ue.split)(Rn, !0), fr = (e, t, r) => r > 32 ? (0, Ue.rotlBH)(e, t, r) : (0, Ue.rotlSH)(e, t, r), cr = (e, t, r) => r > 32 ? (0, Ue.rotlBL)(e, t, r) : (0, Ue.rotlSL)(e, t, r);
function Dn(e, t = 24) {
  const r = new Uint32Array(10);
  for (let n = 24 - t; n < 24; n++) {
    for (let c = 0; c < 10; c++)
      r[c] = e[c] ^ e[c + 10] ^ e[c + 20] ^ e[c + 30] ^ e[c + 40];
    for (let c = 0; c < 10; c += 2) {
      const f = (c + 8) % 10, y = (c + 2) % 10, m = r[y], E = r[y + 1], v = fr(m, E, 1) ^ r[f], _ = cr(m, E, 1) ^ r[f + 1];
      for (let $ = 0; $ < 50; $ += 10)
        e[c + $] ^= v, e[c + $ + 1] ^= _;
    }
    let o = e[2], s = e[3];
    for (let c = 0; c < 24; c++) {
      const f = Nn[c], y = fr(o, s, f), m = cr(o, s, f), E = Pn[c];
      o = e[E], s = e[E + 1], e[E] = y, e[E + 1] = m;
    }
    for (let c = 0; c < 50; c += 10) {
      for (let f = 0; f < 10; f++)
        r[f] = e[c + f];
      for (let f = 0; f < 10; f++)
        e[c + f] ^= ~r[(f + 2) % 10] & r[(f + 4) % 10];
    }
    e[0] ^= qi[n], e[1] ^= Wi[n];
  }
  r.fill(0);
}
V.keccakP = Dn;
class qe extends je.Hash {
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(t, r, n, o = !1, s = 24) {
    if (super(), this.blockLen = t, this.suffix = r, this.outputLen = n, this.enableXOF = o, this.rounds = s, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, (0, ze.number)(n), 0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = (0, je.u32)(this.state);
  }
  keccak() {
    Dn(this.state32, this.rounds), this.posOut = 0, this.pos = 0;
  }
  update(t) {
    (0, ze.exists)(this);
    const { blockLen: r, state: n } = this;
    t = (0, je.toBytes)(t);
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
    (0, ze.exists)(this, !1), (0, ze.bytes)(t), this.finish();
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
    return (0, ze.number)(t), this.xofInto(new Uint8Array(t));
  }
  digestInto(t) {
    if ((0, ze.output)(t, this), this.finished)
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
    return t || (t = new qe(r, n, o, c, s)), t.state32.set(this.state32), t.pos = this.pos, t.posOut = this.posOut, t.finished = this.finished, t.rounds = s, t.suffix = n, t.outputLen = o, t.enableXOF = c, t.destroyed = this.destroyed, t;
  }
}
V.Keccak = qe;
const we = (e, t, r) => (0, je.wrapConstructor)(() => new qe(t, e, r));
V.sha3_224 = we(6, 144, 224 / 8);
V.sha3_256 = we(6, 136, 256 / 8);
V.sha3_384 = we(6, 104, 384 / 8);
V.sha3_512 = we(6, 72, 512 / 8);
V.keccak_224 = we(1, 144, 224 / 8);
V.keccak_256 = we(1, 136, 256 / 8);
V.keccak_384 = we(1, 104, 384 / 8);
V.keccak_512 = we(1, 72, 512 / 8);
const Bn = (e, t, r) => (0, je.wrapXOFConstructorWithOpts)((n = {}) => new qe(t, e, n.dkLen === void 0 ? r : n.dkLen, !0));
V.shake128 = Bn(31, 168, 128 / 8);
V.shake256 = Bn(31, 136, 256 / 8);
const { sha3_512: Ki } = V, Cn = 24, Fe = 32, gt = (e = 4, t = Math.random) => {
  let r = "";
  for (; r.length < e; )
    r = r + Math.floor(t() * 36).toString(36);
  return r;
};
function jn(e) {
  let t = 8n, r = 0n;
  for (const n of e.values()) {
    const o = BigInt(n);
    r = (r << t) + o;
  }
  return r;
}
const Fn = (e = "") => jn(Ki(e)).toString(36).slice(1), lr = Array.from(
  { length: 26 },
  (e, t) => String.fromCharCode(t + 97)
), Vi = (e) => lr[Math.floor(e() * lr.length)], Mn = ({
  globalObj: e = typeof Ie < "u" ? Ie : typeof window < "u" ? window : {},
  random: t = Math.random
} = {}) => {
  const r = Object.keys(e).toString(), n = r.length ? r + gt(Fe, t) : gt(Fe, t);
  return Fn(n).substring(0, Fe);
}, Un = (e) => () => e++, Xi = 476782367, Hn = ({
  // Fallback if the user does not pass in a CSPRNG. This should be OK
  // because we don't rely solely on the random number generator for entropy.
  // We also use the host fingerprint, current time, and a session counter.
  random: e = Math.random,
  counter: t = Un(Math.floor(e() * Xi)),
  length: r = Cn,
  fingerprint: n = Mn({ random: e })
} = {}) => function() {
  const s = Vi(e), c = Date.now().toString(36), f = t().toString(36), y = gt(r, e), m = `${c + y + f + n}`;
  return `${s + Fn(m).substring(1, r)}`;
}, Gi = Hn(), Ji = (e, { minLength: t = 2, maxLength: r = Fe } = {}) => {
  const n = e.length, o = /^[0-9a-z]+$/;
  try {
    if (typeof e == "string" && n >= t && n <= r && o.test(e))
      return !0;
  } finally {
  }
  return !1;
};
be.getConstants = () => ({ defaultLength: Cn, bigLength: Fe });
be.init = Hn;
be.createId = Gi;
be.bufToBigInt = jn;
be.createCounter = Un;
be.createFingerprint = Mn;
be.isCuid = Ji;
const { createId: Qi, init: Ns, getConstants: Rs, isCuid: Ds } = be;
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
var Yn = "en", Rt = {}, bt = {};
function qn() {
  return Yn;
}
function ta(e) {
  Yn = e;
}
function ra(e) {
  return Rt[e];
}
function na(e) {
  if (!e)
    throw new Error("No locale data passed");
  Rt[e.locale] = e, bt[e.locale.toLowerCase()] = e.locale;
}
function hr(e) {
  if (Rt[e])
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
const mr = h;
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
function vr(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function sa(e, t, r) {
  return t && vr(e.prototype, t), r && vr(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var wt = /* @__PURE__ */ function() {
  function e(t, r) {
    aa(this, e);
    var n = e.supportedLocalesOf(t);
    if (n.length === 0)
      throw new RangeError("Unsupported locale: " + t);
    if (r && r.type !== "cardinal")
      throw new RangeError('Only "cardinal" "type" is supported');
    this.$ = mr[yr(n[0])];
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
        return mr[yr(n)];
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
function gr(e, t) {
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
    t % 2 ? gr(Object(r), !0).forEach(function(n) {
      ua(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : gr(Object(r)).forEach(function(n) {
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
var ma = ["second", "minute", "hour", "day", "week", "month", "quarter", "year"], ya = ["auto", "always"], va = ["long", "short", "narrow"], ga = ["lookup", "best fit"], ge = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    ha(this, e);
    var n = r.numeric, o = r.style, s = r.localeMatcher;
    if (this.numeric = "always", this.style = "long", this.localeMatcher = "lookup", n !== void 0) {
      if (ya.indexOf(n) < 0)
        throw new RangeError('Invalid "numeric" option: '.concat(n));
      this.numeric = n;
    }
    if (o !== void 0) {
      if (va.indexOf(o) < 0)
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
      var y = [];
      return f > 0 && y.push({
        type: "literal",
        value: c.slice(0, f)
      }), y = y.concat(this.formatNumberToParts(Math.abs(o)).map(function(m) {
        return br(br({}, m), {}, {
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
ge.supportedLocalesOf = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (typeof e == "string")
    e = [e];
  else if (!Array.isArray(e))
    throw new TypeError('Invalid "locales" argument');
  return e.filter(function(r) {
    return Wn(r, t);
  });
};
ge.addLocale = na;
ge.setDefaultLocale = ta;
ge.getDefaultLocale = qn;
ge.PluralRules = wt;
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
function xa(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function xr(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function $a(e, t, r) {
  return t && xr(e.prototype, t), r && xr(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var $r = /* @__PURE__ */ function() {
  function e() {
    xa(this, e), this.cache = {};
  }
  return $a(e, [{
    key: "get",
    value: function() {
      for (var r = this.cache, n = arguments.length, o = new Array(n), s = 0; s < n; s++)
        o[s] = arguments[s];
      for (var c = 0, f = o; c < f.length; c++) {
        var y = f[c];
        if (et(r) !== "object")
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
        var E = m[y];
        et(f[E]) !== "object" && (f[E] = {}), f = f[E];
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
function Aa(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r)
    return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = za(e)) || t && e && typeof e.length == "number") {
    r && (e = r);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function za(e, t) {
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
function Ea(e, t) {
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
function Ia() {
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
function Ta(e) {
  return La(e) && (Array.isArray(e.steps) || // `gradation` property is deprecated: it has been renamed to `steps`.
  Array.isArray(e.gradation) || // `flavour` property is deprecated: it has been renamed to `labels`.
  Array.isArray(e.flavour) || typeof e.flavour == "string" || Array.isArray(e.labels) || typeof e.labels == "string" || // `units` property is deprecated.
  Array.isArray(e.units) || // `custom` property is deprecated.
  typeof e.custom == "function");
}
var ka = {}.constructor;
function La(e) {
  return Ot(e) !== void 0 && e !== null && e.constructor === ka;
}
var pe = 60, tt = 60 * pe, Se = 24 * tt, xt = 7 * Se, $t = 30.44 * Se, Kn = 146097 / 400 * Se;
function Le(e) {
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
      return xt;
    case "month":
      return $t;
    case "year":
      return Kn;
  }
}
function Vn(e) {
  return e.factor !== void 0 ? e.factor : Le(e.unit || e.formatAs) || 1;
}
function He(e) {
  switch (e) {
    case "floor":
      return Math.floor;
    default:
      return Math.round;
  }
}
function Dt(e) {
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
  var r = t.prevStep, n = t.timestamp, o = t.now, s = t.future, c = t.round, f;
  return r && (r.id || r.unit) && (f = e["threshold_for_".concat(r.id || r.unit)]), f === void 0 && e.threshold !== void 0 && (f = e.threshold, typeof f == "function" && (f = f(o, s))), f === void 0 && (f = e.minTime), At(f) === "object" && (r && r.id && f[r.id] !== void 0 ? f = f[r.id] : f = f.default), typeof f == "function" && (f = f(n, {
    future: s,
    getMinTimeForUnit: function(m, E) {
      return zr(m, E || r && r.formatAs, {
        round: c
      });
    }
  })), f === void 0 && e.test && (e.test(n, {
    now: o,
    future: s
  }) ? f = 0 : f = 9007199254740991), f === void 0 && (r ? e.formatAs && r.formatAs && (f = zr(e.formatAs, r.formatAs, {
    round: c
  })) : f = 0), f === void 0 && console.warn("[javascript-time-ago] A step should specify `minTime`:\n" + JSON.stringify(e, null, 2)), f;
}
function zr(e, t, r) {
  var n = r.round, o = Le(e), s;
  if (t === "now" ? s = Le(e) : s = Le(t), o !== void 0 && s !== void 0)
    return o - s * (1 - Dt(n));
}
function Er(e, t) {
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
    t % 2 ? Er(Object(r), !0).forEach(function(n) {
      Na(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Er(Object(r)).forEach(function(n) {
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
      var m = e[e.indexOf(y) - 1], E = e[e.indexOf(y) + 1];
      return [m, y, E];
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
        var y = He(s)(Math.abs(t) / Vn(f) / f.granularity) * f.granularity;
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
  if (Le(e)) {
    var s = Le(e) * 1e3, c = t > n, f = Math.abs(t - n), y = He(o)(f / s) * s;
    return c ? y > 0 ? f - y + Fa(o, s) : f - y + 1 : -(f - y) + ja(o, s);
  }
}
function ja(e, t) {
  return Dt(e) * t;
}
function Fa(e, t) {
  return (1 - Dt(e)) * t + 1;
}
var Ma = 365 * 24 * 60 * 60 * 1e3, Jn = 1e3 * Ma;
function Ua(e, t, r) {
  var n = r.prevStep, o = r.nextStep, s = r.now, c = r.future, f = r.round, y = e.getTime ? e.getTime() : e, m = function(I) {
    return Ca(I, y, {
      now: s,
      round: f
    });
  }, E = Ya(c ? t : o, y, {
    future: c,
    now: s,
    round: f,
    prevStep: c ? n : t
    // isFirstStep: future && isFirstStep
  });
  if (E !== void 0) {
    var v;
    if (t && (t.getTimeToNextUpdate && (v = t.getTimeToNextUpdate(y, {
      getTimeToNextUpdateForUnit: m,
      getRoundFunction: He,
      now: s,
      future: c,
      round: f
    })), v === void 0)) {
      var _ = t.unit || t.formatAs;
      _ && (v = m(_));
    }
    return v === void 0 ? E : Math.min(v, E);
  }
}
function Ha(e, t, r) {
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
function Ya(e, t, r) {
  var n = r.now, o = r.future, s = r.round, c = r.prevStep;
  if (e) {
    var f = Ha(e, t, {
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
}], zt = {
  steps: qa,
  labels: "long"
};
function Ir(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Tr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ir(Object(r), !0).forEach(function(n) {
      Wa(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ir(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Wa(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
const Et = Tr(Tr({}, zt), {}, {
  // Skip "seconds".
  steps: zt.steps.filter(function(e) {
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
  factor: xt,
  // "week" labels are used for formatting the output.
  unit: "week"
}, {
  // This step is effective starting from 3.5 weeks.
  threshold: 3.5 * xt,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a month.
  factor: $t,
  // "month" labels are used for formatting the output.
  unit: "month"
}, {
  // This step is effective starting from 10.5 months.
  threshold: 10.5 * $t,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a year.
  factor: Kn,
  // "year" labels are used for formatting the output.
  unit: "year"
}], kr = {
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
var It = [{
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
Ia() ? It.push(Va, Xa) : It.push({
  formatAs: "day"
}, {
  formatAs: "week"
}, {
  formatAs: "month"
}, {
  formatAs: "year"
});
const Oe = {
  steps: It,
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
      Ga(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Lr(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ga(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
const Ja = Pr(Pr({}, Oe), {}, {
  // Add "now".
  steps: [{
    formatAs: "now"
  }].concat(Oe.steps)
});
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
      Qa(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Nr(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Qa(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
const Tt = Rr(Rr({}, Oe), {}, {
  // Skip "seconds".
  steps: Oe.steps.filter(function(e) {
    return e.formatAs !== "second";
  })
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
      Za(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Dr(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Za(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
const es = Br(Br({}, Tt), {}, {
  // Add "now".
  steps: [{
    formatAs: "now"
  }].concat(Tt.steps)
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
function Ge(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Cr(Object(r), !0).forEach(function(n) {
      ts(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Cr(Object(r)).forEach(function(n) {
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
}), Ye = {
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
function Fr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? jr(Object(r), !0).forEach(function(n) {
      ns(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jr(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ns(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
const os = Fr(Fr({}, Ye), {}, {
  // Add "now".
  steps: [{
    formatAs: "now"
  }].concat(Ye.steps)
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
const kt = Ur(Ur({}, Ye), {}, {
  // Skip "seconds".
  steps: Ye.steps.filter(function(e) {
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
const ss = Yr(Yr({}, kt), {}, {
  // Add "now".
  steps: [{
    formatAs: "now"
  }].concat(kt.steps)
});
function us(e) {
  switch (e) {
    case "default":
    case "round":
      return zt;
    case "round-minute":
      return Et;
    case "approximate":
      return kr;
    case "time":
    case "approximate-time":
      return Ka;
    case "mini":
      return Ye;
    case "mini-now":
      return os;
    case "mini-minute":
      return kt;
    case "mini-minute-now":
      return ss;
    case "twitter":
      return Oe;
    case "twitter-now":
      return Ja;
    case "twitter-minute":
      return Tt;
    case "twitter-minute-now":
      return es;
    case "twitter-first-minute":
      return rs;
    default:
      return kr;
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
    ps(this, e), typeof t == "string" && (t = [t]), this.locale = Ea(t.concat(e.getDefaultLocale()), Te), typeof Intl < "u" && Intl.NumberFormat && (this.numberFormat = new Intl.NumberFormat(this.locale)), n === !1 ? (this.IntlRelativeTimeFormat = Intl.RelativeTimeFormat, this.IntlPluralRules = Intl.PluralRules) : (this.IntlRelativeTimeFormat = ge, this.IntlPluralRules = ge.PluralRules), this.relativeTimeFormatCache = new $r(), this.pluralRulesCache = new $r();
  }
  return ms(e, [{
    key: "format",
    value: function(r, n, o) {
      o || (n && !ws(n) ? (o = n, n = void 0) : o = {}), n || (n = Et), typeof n == "string" && (n = us(n));
      var s = ys(r), c = this.getLabels(n.flavour || n.labels), f = c.labels, y = c.labelsType, m;
      n.now !== void 0 && (m = n.now), m === void 0 && o.now !== void 0 && (m = o.now), m === void 0 && (m = Date.now());
      var E = (m - s) / 1e3, v = o.future || E < 0, _ = bs(f, Te(this.locale).now, Te(this.locale).long, v);
      if (n.custom) {
        var $ = n.custom({
          now: m,
          date: new Date(s),
          time: s,
          elapsed: E,
          locale: this.locale
        });
        if ($ !== void 0)
          return $;
      }
      var I = gs(
        // Controlling `style.steps` through `style.units` seems to be deprecated:
        // create a new custom `style` instead.
        n.units,
        f,
        _
      ), z = o.round || n.round, N = Ra(
        // "gradation" is a legacy name for "steps".
        // For historical reasons, "approximate" steps are used by default.
        // In the next major version, there'll be no default for `steps`.
        n.gradation || n.steps || Et.steps,
        E,
        {
          now: m,
          units: I,
          round: z,
          future: v,
          getNextStep: !0
        }
      ), K = cs(N, 3), U = K[0], ae = K[1], G = K[2], A = this.formatDateForStep(s, ae, E, {
        labels: f,
        labelsType: y,
        nowLabel: _,
        now: m,
        future: v,
        round: z
      }) || "";
      if (o.getTimeToNextUpdate) {
        var R = Ua(s, ae, {
          nextStep: G,
          prevStep: U,
          now: m,
          future: v,
          round: z
        });
        return [A, R];
      }
      return A;
    }
  }, {
    key: "formatDateForStep",
    value: function(r, n, o, s) {
      var c = this, f = s.labels, y = s.labelsType, m = s.nowLabel, E = s.now, v = s.future, _ = s.round;
      if (n) {
        if (n.format)
          return n.format(r, this.locale, {
            formatAs: function(K, U) {
              return c.formatValue(U, K, {
                labels: f,
                future: v
              });
            },
            now: E,
            future: v
          });
        var $ = n.unit || n.formatAs;
        if (!$)
          throw new Error("[javascript-time-ago] Each step must define either `formatAs` or `format()`. Step: ".concat(JSON.stringify(n)));
        if ($ === "now")
          return m;
        var I = Math.abs(o) / Vn(n);
        n.granularity && (I = He(_)(I / n.granularity) * n.granularity);
        var z = -1 * Math.sign(o) * He(_)(I);
        switch (z === 0 && (v ? z = 0 : z = -0), y) {
          case "long":
          case "short":
          case "narrow":
            return this.getFormatter(y).format(z, $);
          default:
            return this.formatValue(z, $, {
              labels: f,
              future: v
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
      for (var n = Te(this.locale), o = fs(r), s; !(s = o()).done; ) {
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
  Zn(e), ge.addLocale(e);
};
le.locale = le.addLocale;
le.addLabels = function(e, t, r) {
  var n = Te(e);
  n || (Zn({
    locale: e
  }), n = Te(e)), n[t] = r;
};
function ys(e) {
  if (e.constructor === Date || vs(e))
    return e.getTime();
  if (typeof e == "number")
    return e;
  throw new Error("Unsupported relative time formatter input: ".concat(rt(e), ", ").concat(e));
}
function vs(e) {
  return rt(e) === "object" && typeof e.getTime == "function";
}
function gs(e, t, r) {
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
  return typeof e == "string" || Ta(e);
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
const Ss = new le("en-US"), Vr = (e) => Ss.format(new Date(e)), Os = Ri(Vr, (e) => {
  const t = setInterval(() => e(Vr), 1e3);
  return () => clearInterval(t);
});
function xs(e) {
  fi(e, "svelte-xzs2pz", `.svelte-xzs2pz,.svelte-xzs2pz::before,.svelte-xzs2pz::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}.svelte-xzs2pz::before,.svelte-xzs2pz::after{--tw-content:''}:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}button.svelte-xzs2pz,input.svelte-xzs2pz{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button.svelte-xzs2pz{text-transform:none}button.svelte-xzs2pz{-webkit-appearance:button;background-color:transparent;background-image:none}.svelte-xzs2pz:-moz-focusring{outline:auto}.svelte-xzs2pz:-moz-ui-invalid{box-shadow:none}.svelte-xzs2pz::-webkit-inner-spin-button,.svelte-xzs2pz::-webkit-outer-spin-button{height:auto}.svelte-xzs2pz::-webkit-search-decoration{-webkit-appearance:none}.svelte-xzs2pz::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}input.svelte-xzs2pz::-moz-placeholder{opacity:1;color:#9ca3af}input.svelte-xzs2pz::placeholder{opacity:1;color:#9ca3af}button.svelte-xzs2pz{cursor:pointer}.svelte-xzs2pz:disabled{cursor:default}.svelte-xzs2pz,.svelte-xzs2pz::before,.svelte-xzs2pz::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position:  ;--tw-gradient-via-position:  ;--tw-gradient-to-position:  ;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.svelte-xzs2pz::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position:  ;--tw-gradient-via-position:  ;--tw-gradient-to-position:  ;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.pointer-events-none.svelte-xzs2pz{pointer-events:none}.pointer-events-auto.svelte-xzs2pz{pointer-events:auto}.absolute.svelte-xzs2pz{position:absolute}.bottom-0.svelte-xzs2pz{bottom:0px}.bottom-2.svelte-xzs2pz{bottom:0.5rem}.left-0.svelte-xzs2pz{left:0px}.right-0.svelte-xzs2pz{right:0px}.right-2.svelte-xzs2pz{right:0.5rem}.top-0.svelte-xzs2pz{top:0px}.z-50.svelte-xzs2pz{z-index:50}.my-2.svelte-xzs2pz{margin-top:0.5rem;margin-bottom:0.5rem}.mb-2.svelte-xzs2pz{margin-bottom:0.5rem}.mb-4.svelte-xzs2pz{margin-bottom:1rem}.mt-2.svelte-xzs2pz{margin-top:0.5rem}.block.svelte-xzs2pz{display:block}.flex.svelte-xzs2pz{display:flex}.hidden.svelte-xzs2pz{display:none}.h-full.svelte-xzs2pz{height:100%}.w-3\\/4.svelte-xzs2pz{width:75%}.w-full.svelte-xzs2pz{width:100%}.flex-row.svelte-xzs2pz{flex-direction:row}.flex-col.svelte-xzs2pz{flex-direction:column}.items-baseline.svelte-xzs2pz{align-items:baseline}.items-stretch.svelte-xzs2pz{align-items:stretch}.justify-end.svelte-xzs2pz{justify-content:flex-end}.justify-between.svelte-xzs2pz{justify-content:space-between}.place-self-start.svelte-xzs2pz{place-self:start}.place-self-end.svelte-xzs2pz{place-self:end}.overflow-y-scroll.svelte-xzs2pz{overflow-y:scroll}.rounded-lg.svelte-xzs2pz{border-radius:0.5rem}.rounded-md.svelte-xzs2pz{border-radius:0.375rem}.bg-lime-200.svelte-xzs2pz{--tw-bg-opacity:1;background-color:rgb(217 249 157 / var(--tw-bg-opacity))}.bg-sky-200.svelte-xzs2pz{--tw-bg-opacity:1;background-color:rgb(186 230 253 / var(--tw-bg-opacity))}.bg-violet-100.svelte-xzs2pz{--tw-bg-opacity:1;background-color:rgb(237 233 254 / var(--tw-bg-opacity))}.bg-violet-700.svelte-xzs2pz{--tw-bg-opacity:1;background-color:rgb(109 40 217 / var(--tw-bg-opacity))}.px-1.svelte-xzs2pz{padding-left:0.25rem;padding-right:0.25rem}.px-2.svelte-xzs2pz{padding-left:0.5rem;padding-right:0.5rem}.px-4.svelte-xzs2pz{padding-left:1rem;padding-right:1rem}.py-1.svelte-xzs2pz{padding-top:0.25rem;padding-bottom:0.25rem}.py-2.svelte-xzs2pz{padding-top:0.5rem;padding-bottom:0.5rem}.text-justify.svelte-xzs2pz{text-align:justify}.text-base.svelte-xzs2pz{font-size:1rem;line-height:1.5rem}.text-lg.svelte-xzs2pz{font-size:1.125rem;line-height:1.75rem}.text-sm.svelte-xzs2pz{font-size:0.875rem;line-height:1.25rem}.text-xl.svelte-xzs2pz{font-size:1.25rem;line-height:1.75rem}.font-bold.svelte-xzs2pz{font-weight:700}.text-white.svelte-xzs2pz{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.max-w-1-3.svelte-xzs2pz{max-width:33.33%}.hover\\:bg-violet-600.svelte-xzs2pz:hover{--tw-bg-opacity:1;background-color:rgb(124 58 237 / var(--tw-bg-opacity))}`);
}
function Xr(e, t, r) {
  const n = e.slice();
  return n[15] = t[r], n;
}
function $s(e) {
  let t, r, n;
  return {
    c() {
      t = X("button"), t.textContent = "↘️", j(t, "title", "Reduce to lateral"), j(t, "class", "svelte-xzs2pz");
    },
    m(o, s) {
      oe(o, t, s), r || (n = Pe(
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
function As(e) {
  let t, r, n;
  return {
    c() {
      t = X("button"), t.textContent = "↖️", j(t, "title", "Expand full width"), j(t, "class", "svelte-xzs2pz");
    },
    m(o, s) {
      oe(o, t, s), r || (n = Pe(
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
  let t, r, n, o, s, c, f, y, m, E, v = ur(
    /*chat*/
    e[2]._.messages
  ), _ = [];
  for (let $ = 0; $ < v.length; $ += 1)
    _[$] = Qr(Xr(e, v, $));
  return {
    c() {
      for (let $ = 0; $ < _.length; $ += 1)
        _[$].c();
      t = fe(), r = X("form"), n = X("input"), s = fe(), c = X("div"), c.textContent = "The assistant makes mistakes, always check important information", f = fe(), y = X("div"), y.textContent = "Also, the assistant cannot read the documentation yet", n.disabled = o = /*status*/
      e[0] && /*$status*/
      e[6].slug == "running", j(n, "class", "w-full px-2 py-1 text-lg rounded-lg bg-violet-100 svelte-xzs2pz"), j(n, "type", "text"), j(n, "placeholder", "What do you want help with?"), j(r, "action", "#"), j(r, "class", "my-2 svelte-xzs2pz"), j(c, "class", "mt-2 text-sm svelte-xzs2pz"), j(y, "class", "text-sm svelte-xzs2pz");
    },
    m($, I) {
      for (let z = 0; z < _.length; z += 1)
        _[z] && _[z].m($, I);
      oe($, t, I), oe($, r, I), W(r, n), ir(
        n,
        /*text*/
        e[3]
      ), oe($, s, I), oe($, c, I), oe($, f, I), oe($, y, I), m || (E = [
        Pe(
          n,
          "input",
          /*input_input_handler*/
          e[13]
        ),
        Pe(r, "submit", pi(
          /*handleUserMessage*/
          e[8]
        ))
      ], m = !0);
    },
    p($, I) {
      if (I & /*chat, $timeAgo*/
      132) {
        v = ur(
          /*chat*/
          $[2]._.messages
        );
        let z;
        for (z = 0; z < v.length; z += 1) {
          const N = Xr($, v, z);
          _[z] ? _[z].p(N, I) : (_[z] = Qr(N), _[z].c(), _[z].m(t.parentNode, t));
        }
        for (; z < _.length; z += 1)
          _[z].d(1);
        _.length = v.length;
      }
      I & /*status, $status*/
      65 && o !== (o = /*status*/
      $[0] && /*$status*/
      $[6].slug == "running") && (n.disabled = o), I & /*text*/
      8 && n.value !== /*text*/
      $[3] && ir(
        n,
        /*text*/
        $[3]
      );
    },
    d($) {
      $ && (re(t), re(r), re(s), re(c), re(f), re(y)), di(_, $), m = !1, Ne(E);
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
  ), f, y, m, E = (
    /*message*/
    e[15].content + ""
  ), v;
  function _(z, N) {
    return (
      /*message*/
      z[15].role == "user" ? Es : zs
    );
  }
  let $ = _(e), I = $(e);
  return {
    c() {
      t = X("div"), r = X("div"), n = X("span"), I.c(), o = fe(), s = X("span"), f = ve(c), y = fe(), m = X("div"), v = ve(E), j(n, "class", "font-bold svelte-xzs2pz"), j(s, "class", "text-grey-500 text-sm svelte-xzs2pz"), j(r, "class", "mb-2 flex flex-row justify-between items-baseline svelte-xzs2pz"), j(m, "class", "svelte-xzs2pz"), j(t, "class", "rounded-md py-2 px-4 text-justify text-base block w-3/4 my-2 svelte-xzs2pz"), ne(
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
    m(z, N) {
      oe(z, t, N), W(t, r), W(r, n), I.m(n, null), W(r, o), W(r, s), W(s, f), W(t, y), W(t, m), W(m, v);
    },
    p(z, N) {
      $ !== ($ = _(z)) && (I.d(1), I = $(z), I && (I.c(), I.m(n, null))), N & /*$timeAgo, chat*/
      132 && c !== (c = /*$timeAgo*/
      z[7](
        /*message*/
        z[15].timestamp
      ) + "") && Qe(f, c), N & /*chat*/
      4 && E !== (E = /*message*/
      z[15].content + "") && Qe(v, E), N & /*chat*/
      4 && ne(
        t,
        "bg-sky-200",
        /*message*/
        z[15].role == "user"
      ), N & /*chat*/
      4 && ne(
        t,
        "place-self-end",
        /*message*/
        z[15].role == "user"
      ), N & /*chat*/
      4 && ne(
        t,
        "bg-lime-200",
        /*message*/
        z[15].role == "assistant"
      ), N & /*chat*/
      4 && ne(
        t,
        "place-self-start",
        /*message*/
        z[15].role == "assistant"
      );
    },
    d(z) {
      z && re(t), I.d();
    }
  };
}
function zs(e) {
  let t;
  return {
    c() {
      t = ve("Assistant");
    },
    m(r, n) {
      oe(r, t, n);
    },
    d(r) {
      r && re(t);
    }
  };
}
function Es(e) {
  let t;
  return {
    c() {
      t = ve("You");
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
function Is(e) {
  let t, r, n, o, s, c, f = (
    /*status*/
    (e[0] ? (
      /*$status*/
      e[6].icon
    ) : "") + ""
  ), y, m, E, v, _, $, I, z, N, K, U = (
    /*status*/
    (e[0] ? (
      /*$status*/
      e[6].icon
    ) : "") + ""
  ), ae, G, A, R, P, b, k, D, B;
  function F(M, Q) {
    return (
      /*chatBotExpanded*/
      M[5] ? $s : As
    );
  }
  let q = F(e), te = q(e), J = (
    /*model*/
    e[1] && /*chat*/
    e[2] && Gr(e)
  );
  return {
    c() {
      t = X("button"), r = X("span"), r.textContent = "✨", n = fe(), o = X("span"), o.textContent = "Need Help?", s = fe(), c = X("span"), y = ve(f), E = fe(), v = X("div"), _ = X("content"), $ = X("div"), I = X("div"), z = X("span"), z.textContent = "✨ HPC Assistant", N = fe(), K = X("span"), ae = ve(U), A = fe(), R = X("div"), te.c(), P = fe(), b = X("button"), b.textContent = "➖", k = fe(), J && J.c(), j(r, "title", "Try our AI Assistant"), j(r, "class", "svelte-xzs2pz"), j(o, "class", "px-1 svelte-xzs2pz"), j(c, "title", m = /*status*/
      e[0] ? (
        /*$status*/
        e[6].description
      ) : ""), j(c, "class", "svelte-xzs2pz"), j(t, "class", "absolute bottom-2 right-2 py-2 px-4 bg-violet-700 hover:bg-violet-600 font-bold text-lg text-white rounded-lg svelte-xzs2pz"), ne(
        t,
        "hidden",
        /*chatBotOpen*/
        e[4]
      ), j(z, "class", "svelte-xzs2pz"), j(K, "title", G = /*status*/
      e[0] ? (
        /*$status*/
        e[6].description
      ) : ""), j(K, "class", "svelte-xzs2pz"), j(I, "class", "svelte-xzs2pz"), j(b, "title", "Minify the assistant"), j(b, "class", "svelte-xzs2pz"), j(R, "class", "svelte-xzs2pz"), j($, "class", "mb-4 font-bold text-xl flex flex-row items-stretch justify-between svelte-xzs2pz"), j(_, "class", "bg-violet-100 text-base rounded-md flex flex-col items-stretch h-full px-4 py-2 overflow-y-scroll z-50 pointer-events-auto svelte-xzs2pz"), ne(
        _,
        "w-full",
        /*chatBotExpanded*/
        e[5]
      ), ne(_, "max-w-1-3", !/*chatBotExpanded*/
      e[5]), j(v, "class", "absolute bottom-0 right-0 top-0 left-0 px-2 py-2 w-full h-full flex flex-row justify-end pointer-events-none svelte-xzs2pz"), ne(v, "hidden", !/*chatBotOpen*/
      e[4]);
    },
    m(M, Q) {
      oe(M, t, Q), W(t, r), W(t, n), W(t, o), W(t, s), W(t, c), W(c, y), oe(M, E, Q), oe(M, v, Q), W(v, _), W(_, $), W($, I), W(I, z), W(I, N), W(I, K), W(K, ae), W($, A), W($, R), te.m(R, null), W(R, P), W(R, b), W(_, k), J && J.m(_, null), D || (B = [
        Pe(
          t,
          "click",
          /*click_handler*/
          e[9]
        ),
        Pe(
          b,
          "click",
          /*click_handler_3*/
          e[12]
        )
      ], D = !0);
    },
    p(M, [Q]) {
      Q & /*status, $status*/
      65 && f !== (f = /*status*/
      (M[0] ? (
        /*$status*/
        M[6].icon
      ) : "") + "") && Qe(y, f), Q & /*status, $status*/
      65 && m !== (m = /*status*/
      M[0] ? (
        /*$status*/
        M[6].description
      ) : "") && j(c, "title", m), Q & /*chatBotOpen*/
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
      ) : "") && j(K, "title", G), q === (q = F(M)) && te ? te.p(M, Q) : (te.d(1), te = q(M), te && (te.c(), te.m(R, P))), /*model*/
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
      16 && ne(v, "hidden", !/*chatBotOpen*/
      M[4]);
    },
    i: ce,
    o: ce,
    d(M) {
      M && (re(t), re(E), re(v)), te.d(), J && J.d(), D = !1, Ne(B);
    }
  };
}
function Ts(e, t, r) {
  let n, o = ce, s = () => (o(), o = Lt(y, (G) => r(6, n = G)), y), c;
  ui(e, Os, (G) => r(7, c = G)), e.$$.on_destroy.push(() => o());
  let f, y, m, E;
  gi(async () => {
    const G = `${window.location.protocol}//${window.location.hostname}:${window.location.port}`;
    f = new Di(G), s(r(0, y = f.status)), r(1, m = await f.getBestModel(dr.modelList)), m && (await f.preloadModel(m), r(2, E = new ea(() => r(2, E), f)), E.addMessage(dr.systemPrompt));
  });
  let v, _ = !1, $ = !1;
  async function I() {
    E.addMessage({ role: "user", content: v }), r(3, v = ""), await E.complete(m);
  }
  const z = () => r(4, _ = !0), N = () => r(5, $ = !0), K = () => r(5, $ = !1), U = () => r(4, _ = !1);
  function ae() {
    v = this.value, r(3, v);
  }
  return [
    y,
    m,
    E,
    v,
    _,
    $,
    n,
    c,
    I,
    z,
    N,
    K,
    U,
    ae
  ];
}
class ks extends Ti {
  constructor(t) {
    super(), Ei(this, t, Ts, Is, tn, {}, xs);
  }
}
customElements.define("hpc-chatbot", Ii(ks, {}, [], [], !0));
export {
  ks as ChatBot
};
//# sourceMappingURL=components.js.map
