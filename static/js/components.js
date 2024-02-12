var ni = Object.defineProperty;
var oi = (e, t, r) => t in e ? ni(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var ae = (e, t, r) => (oi(e, typeof t != "symbol" ? t + "" : t, r), r);
function le() {
}
function Qr(e) {
  return e();
}
function or() {
  return /* @__PURE__ */ Object.create(null);
}
function Ne(e) {
  e.forEach(Qr);
}
function Zr(e) {
  return typeof e == "function";
}
function en(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function ii(e) {
  return Object.keys(e).length === 0;
}
function Pt(e, ...t) {
  if (e == null) {
    for (const n of t)
      n(void 0);
    return le;
  }
  const r = e.subscribe(...t);
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
function ai(e) {
  let t;
  return Pt(e, (r) => t = r)(), t;
}
function si(e, t, r) {
  e.$$.on_destroy.push(Pt(t, r));
}
function W(e, t) {
  e.appendChild(t);
}
function ui(e, t, r) {
  const n = li(e);
  if (!n.getElementById(t)) {
    const i = X("style");
    i.id = t, i.textContent = r, fi(n, i);
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
function fi(e, t) {
  return W(
    /** @type {Document} */
    e.head || e,
    t
  ), t.sheet;
}
function re(e, t, r) {
  e.insertBefore(t, r || null);
}
function ee(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function ci(e, t) {
  for (let r = 0; r < e.length; r += 1)
    e[r] && e[r].d(t);
}
function X(e) {
  return document.createElement(e);
}
function ye(e) {
  return document.createTextNode(e);
}
function ue() {
  return ye(" ");
}
function di() {
  return ye("");
}
function Je(e, t, r, n) {
  return e.addEventListener(t, r, n), () => e.removeEventListener(t, r, n);
}
function hi(e) {
  return function(t) {
    return t.preventDefault(), e.call(this, t);
  };
}
function M(e, t, r) {
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
function se(e, t, r) {
  e.classList.toggle(t, !!r);
}
function pi(e) {
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
function yi() {
  if (!Me)
    throw new Error("Function called outside component initialization");
  return Me;
}
function gi(e) {
  yi().$$.on_mount.push(e);
}
const Ie = [], ar = [];
let ke = [];
const sr = [], vi = /* @__PURE__ */ Promise.resolve();
let pt = !1;
function bi() {
  pt || (pt = !0, vi.then(tn));
}
function yt(e) {
  ke.push(e);
}
const ht = /* @__PURE__ */ new Set();
let $e = 0;
function tn() {
  if ($e !== 0)
    return;
  const e = Me;
  do {
    try {
      for (; $e < Ie.length; ) {
        const t = Ie[$e];
        $e++, Ce(t), wi(t.$$);
      }
    } catch (t) {
      throw Ie.length = 0, $e = 0, t;
    }
    for (Ce(null), Ie.length = 0, $e = 0; ar.length; )
      ar.pop()();
    for (let t = 0; t < ke.length; t += 1) {
      const r = ke[t];
      ht.has(r) || (ht.add(r), r());
    }
    ke.length = 0;
  } while (Ie.length);
  for (; sr.length; )
    sr.pop()();
  pt = !1, ht.clear(), Ce(e);
}
function wi(e) {
  if (e.fragment !== null) {
    e.update(), Ne(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(yt);
  }
}
function _i(e) {
  const t = [], r = [];
  ke.forEach((n) => e.indexOf(n) === -1 ? t.push(n) : r.push(n)), r.forEach((n) => n()), ke = t;
}
const Si = /* @__PURE__ */ new Set();
function Oi(e, t) {
  e && e.i && (Si.delete(e), e.i(t));
}
function ur(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function xi(e, t, r) {
  const { fragment: n, after_update: i } = e.$$;
  n && n.m(t, r), yt(() => {
    const s = e.$$.on_mount.map(Qr).filter(Zr);
    e.$$.on_destroy ? e.$$.on_destroy.push(...s) : Ne(s), e.$$.on_mount = [];
  }), i.forEach(yt);
}
function $i(e, t) {
  const r = e.$$;
  r.fragment !== null && (_i(r.after_update), Ne(r.on_destroy), r.fragment && r.fragment.d(t), r.on_destroy = r.fragment = null, r.ctx = []);
}
function Ai(e, t) {
  e.$$.dirty[0] === -1 && (Ie.push(e), bi(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function Ei(e, t, r, n, i, s, f = null, l = [-1]) {
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
    return p.ctx && i(p.ctx[y], p.ctx[y] = T) && (!p.skip_bound && p.bound[y] && p.bound[y](T), I && Ai(e, y)), S;
  }) : [], p.update(), I = !0, Ne(p.before_update), p.fragment = n ? n(p.ctx) : !1, t.target) {
    if (t.hydrate) {
      const y = mi(t.target);
      p.fragment && p.fragment.l(y), y.forEach(ee);
    } else
      p.fragment && p.fragment.c();
    t.intro && Oi(e.$$.fragment), xi(e, t.target, t.anchor), tn();
  }
  Ce(g);
}
let rn;
typeof HTMLElement == "function" && (rn = class extends HTMLElement {
  constructor(t, r, n) {
    super();
    /** The Svelte component constructor */
    ae(this, "$$ctor");
    /** Slots */
    ae(this, "$$s");
    /** The Svelte component instance */
    ae(this, "$$c");
    /** Whether or not the custom element is connected */
    ae(this, "$$cn", !1);
    /** Component props data */
    ae(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    ae(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    ae(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    ae(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    ae(this, "$$l_u", /* @__PURE__ */ new Map());
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
              f = X("slot"), s !== "default" && M(f, "name", s);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(p, I) {
              re(p, f, I);
            },
            d: function(p) {
              p && ee(f);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn)
        return;
      const r = {}, n = pi(this);
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
function Ii(e, t, r, n, i, s) {
  let f = class extends rn {
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
class Ti {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ae(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    ae(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    $i(this, 1), this.$destroy = le;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, r) {
    if (!Zr(r))
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
    this.$$set && !ii(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const Li = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Li);
var Te = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ki(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Ke(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var nn = { exports: {} };
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
            var N = s.document.createElement("script");
            N.onreadystatechange = function() {
              T(), N.onreadystatechange = null, N.parentNode.removeChild(N), N = null;
            }, s.document.documentElement.appendChild(N);
          } : l = function() {
            setTimeout(T, 0);
          };
        var S, A = [];
        function T() {
          S = !0;
          for (var N, K, U = A.length; U; ) {
            for (K = A, A = [], N = -1; ++N < U; )
              K[N]();
            U = A.length;
          }
          S = !1;
        }
        n.exports = E;
        function E(N) {
          A.push(N) === 1 && !S && l();
        }
      }).call(this, typeof Te < "u" ? Te : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 2: [function(r, n, i) {
      var s = r(1);
      function f() {
      }
      var l = {}, g = ["REJECTED"], p = ["FULFILLED"], I = ["PENDING"];
      n.exports = y;
      function y($) {
        if (typeof $ != "function")
          throw new TypeError("resolver must be a function");
        this.state = I, this.queue = [], this.outcome = void 0, $ !== f && E(this, $);
      }
      y.prototype.catch = function($) {
        return this.then(null, $);
      }, y.prototype.then = function($, j) {
        if (typeof $ != "function" && this.state === p || typeof j != "function" && this.state === g)
          return this;
        var R = new this.constructor(f);
        if (this.state !== I) {
          var b = this.state === p ? $ : j;
          A(R, b, this.outcome);
        } else
          this.queue.push(new S(R, $, j));
        return R;
      };
      function S($, j, R) {
        this.promise = $, typeof j == "function" && (this.onFulfilled = j, this.callFulfilled = this.otherCallFulfilled), typeof R == "function" && (this.onRejected = R, this.callRejected = this.otherCallRejected);
      }
      S.prototype.callFulfilled = function($) {
        l.resolve(this.promise, $);
      }, S.prototype.otherCallFulfilled = function($) {
        A(this.promise, this.onFulfilled, $);
      }, S.prototype.callRejected = function($) {
        l.reject(this.promise, $);
      }, S.prototype.otherCallRejected = function($) {
        A(this.promise, this.onRejected, $);
      };
      function A($, j, R) {
        s(function() {
          var b;
          try {
            b = j(R);
          } catch (k) {
            return l.reject($, k);
          }
          b === $ ? l.reject($, new TypeError("Cannot resolve promise with itself")) : l.resolve($, b);
        });
      }
      l.resolve = function($, j) {
        var R = N(T, j);
        if (R.status === "error")
          return l.reject($, R.value);
        var b = R.value;
        if (b)
          E($, b);
        else {
          $.state = p, $.outcome = j;
          for (var k = -1, D = $.queue.length; ++k < D; )
            $.queue[k].callFulfilled(j);
        }
        return $;
      }, l.reject = function($, j) {
        $.state = g, $.outcome = j;
        for (var R = -1, b = $.queue.length; ++R < b; )
          $.queue[R].callRejected(j);
        return $;
      };
      function T($) {
        var j = $ && $.then;
        if ($ && (typeof $ == "object" || typeof $ == "function") && typeof j == "function")
          return function() {
            j.apply($, arguments);
          };
      }
      function E($, j) {
        var R = !1;
        function b(F) {
          R || (R = !0, l.reject($, F));
        }
        function k(F) {
          R || (R = !0, l.resolve($, F));
        }
        function D() {
          j(k, b);
        }
        var B = N(D);
        B.status === "error" && b(B.value);
      }
      function N($, j) {
        var R = {};
        try {
          R.value = $(j), R.status = "success";
        } catch (b) {
          R.status = "error", R.value = b;
        }
        return R;
      }
      y.resolve = K;
      function K($) {
        return $ instanceof this ? $ : l.resolve(new this(f), $);
      }
      y.reject = U;
      function U($) {
        var j = new this(f);
        return l.reject(j, $);
      }
      y.all = oe;
      function oe($) {
        var j = this;
        if (Object.prototype.toString.call($) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var R = $.length, b = !1;
        if (!R)
          return this.resolve([]);
        for (var k = new Array(R), D = 0, B = -1, F = new this(f); ++B < R; )
          q($[B], B);
        return F;
        function q(Q, z) {
          j.resolve(Q).then(Z, function(Oe) {
            b || (b = !0, l.reject(F, Oe));
          });
          function Z(Oe) {
            k[z] = Oe, ++D === R && !b && (b = !0, l.resolve(F, k));
          }
        }
      }
      y.race = te;
      function te($) {
        var j = this;
        if (Object.prototype.toString.call($) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var R = $.length, b = !1;
        if (!R)
          return this.resolve([]);
        for (var k = -1, D = new this(f); ++k < R; )
          B($[k]);
        return D;
        function B(F) {
          j.resolve(F).then(function(q) {
            b || (b = !0, l.resolve(D, q));
          }, function(q) {
            b || (b = !0, l.reject(D, q));
          });
        }
      }
    }, { 1: 1 }], 3: [function(r, n, i) {
      (function(s) {
        typeof s.Promise != "function" && (s.Promise = r(2));
      }).call(this, typeof Te < "u" ? Te : typeof self < "u" ? self : typeof window < "u" ? window : {});
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
      var N = "local-forage-detect-blob-support", K = void 0, U = {}, oe = Object.prototype.toString, te = "readonly", $ = "readwrite";
      function j(o) {
        for (var u = o.length, a = new ArrayBuffer(u), d = new Uint8Array(a), m = 0; m < u; m++)
          d[m] = o.charCodeAt(m);
        return a;
      }
      function R(o) {
        return new y(function(u) {
          var a = o.transaction(N, $), d = I([""]);
          a.objectStore(N).put(d, "key"), a.onabort = function(m) {
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
        return typeof K == "boolean" ? y.resolve(K) : R(o).then(function(u) {
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
      function D(o) {
        var u = U[o.name], a = u.deferredOperations.pop();
        if (a)
          return a.resolve(), a.promise;
      }
      function B(o, u) {
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
          u && (c.onupgradeneeded = function(v) {
            var w = c.result;
            try {
              w.createObjectStore(o.storeName), v.oldVersion <= 1 && w.createObjectStore(N);
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
            }, a(v), D(o);
          };
        });
      }
      function q(o) {
        return F(o, !1);
      }
      function Q(o) {
        return F(o, !0);
      }
      function z(o, u) {
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
      function Z(o) {
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
      function Oe(o) {
        var u = j(atob(o.data));
        return I([u], { type: o.type });
      }
      function Ct(o) {
        return o && o.__local_forage_encoded_blob;
      }
      function no(o) {
        var u = this, a = u._initReady().then(function() {
          var d = U[u._dbInfo.name];
          if (d && d.dbReady)
            return d.dbReady;
        });
        return A(a, o, o), a;
      }
      function oo(o) {
        k(o);
        for (var u = U[o.name], a = u.forages, d = 0; d < a.length; d++) {
          var m = a[d];
          m._dbInfo.db && (m._dbInfo.db.close(), m._dbInfo.db = null);
        }
        return o.db = null, q(o).then(function(c) {
          return o.db = c, z(o) ? Q(o) : c;
        }).then(function(c) {
          o.db = u.db = c;
          for (var v = 0; v < a.length; v++)
            a[v]._dbInfo.db = c;
        }).catch(function(c) {
          throw B(o, c), c;
        });
      }
      function de(o, u, a, d) {
        d === void 0 && (d = 1);
        try {
          var m = o.db.transaction(o.storeName, u);
          a(null, m);
        } catch (c) {
          if (d > 0 && (!o.db || c.name === "InvalidStateError" || c.name === "NotFoundError"))
            return y.resolve().then(function() {
              if (!o.db || c.name === "NotFoundError" && !o.db.objectStoreNames.contains(o.storeName) && o.version <= o.db.version)
                return o.db && (o.version = o.db.version + 1), Q(o);
            }).then(function() {
              return oo(o).then(function() {
                de(o, u, a, d - 1);
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
      function io(o) {
        var u = this, a = {
          db: null
        };
        if (o)
          for (var d in o)
            a[d] = o[d];
        var m = U[a.name];
        m || (m = jt(), U[a.name] = m), m.forages.push(u), u._initReady || (u._initReady = u.ready, u.ready = no);
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
          return a.db = m.db, q(a);
        }).then(function(x) {
          return a.db = x, z(a, u._defaultConfig.version) ? Q(a) : x;
        }).then(function(x) {
          a.db = m.db = x, u._dbInfo = a;
          for (var L = 0; L < O.length; L++) {
            var C = O[L];
            C !== u && (C._dbInfo.db = a.db, C._dbInfo.version = a.version);
          }
        });
      }
      function ao(o, u) {
        var a = this;
        o = T(o);
        var d = new y(function(m, c) {
          a.ready().then(function() {
            de(a._dbInfo, te, function(v, w) {
              if (v)
                return c(v);
              try {
                var _ = w.objectStore(a._dbInfo.storeName), O = _.get(o);
                O.onsuccess = function() {
                  var x = O.result;
                  x === void 0 && (x = null), Ct(x) && (x = Oe(x)), m(x);
                }, O.onerror = function() {
                  c(O.error);
                };
              } catch (x) {
                c(x);
              }
            });
          }).catch(c);
        });
        return S(d, u), d;
      }
      function so(o, u) {
        var a = this, d = new y(function(m, c) {
          a.ready().then(function() {
            de(a._dbInfo, te, function(v, w) {
              if (v)
                return c(v);
              try {
                var _ = w.objectStore(a._dbInfo.storeName), O = _.openCursor(), x = 1;
                O.onsuccess = function() {
                  var L = O.result;
                  if (L) {
                    var C = L.value;
                    Ct(C) && (C = Oe(C));
                    var H = o(C, L.key, x++);
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
      function uo(o, u, a) {
        var d = this;
        o = T(o);
        var m = new y(function(c, v) {
          var w;
          d.ready().then(function() {
            return w = d._dbInfo, oe.call(u) === "[object Blob]" ? b(w.db).then(function(_) {
              return _ ? u : Z(u);
            }) : u;
          }).then(function(_) {
            de(d._dbInfo, $, function(O, x) {
              if (O)
                return v(O);
              try {
                var L = x.objectStore(d._dbInfo.storeName);
                _ === null && (_ = void 0);
                var C = L.put(_, o);
                x.oncomplete = function() {
                  _ === void 0 && (_ = null), c(_);
                }, x.onabort = x.onerror = function() {
                  var H = C.error ? C.error : C.transaction.error;
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
      function lo(o, u) {
        var a = this;
        o = T(o);
        var d = new y(function(m, c) {
          a.ready().then(function() {
            de(a._dbInfo, $, function(v, w) {
              if (v)
                return c(v);
              try {
                var _ = w.objectStore(a._dbInfo.storeName), O = _.delete(o);
                w.oncomplete = function() {
                  m();
                }, w.onerror = function() {
                  c(O.error);
                }, w.onabort = function() {
                  var x = O.error ? O.error : O.transaction.error;
                  c(x);
                };
              } catch (x) {
                c(x);
              }
            });
          }).catch(c);
        });
        return S(d, u), d;
      }
      function fo(o) {
        var u = this, a = new y(function(d, m) {
          u.ready().then(function() {
            de(u._dbInfo, $, function(c, v) {
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
      function co(o) {
        var u = this, a = new y(function(d, m) {
          u.ready().then(function() {
            de(u._dbInfo, te, function(c, v) {
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
      function ho(o, u) {
        var a = this, d = new y(function(m, c) {
          if (o < 0) {
            m(null);
            return;
          }
          a.ready().then(function() {
            de(a._dbInfo, te, function(v, w) {
              if (v)
                return c(v);
              try {
                var _ = w.objectStore(a._dbInfo.storeName), O = !1, x = _.openKeyCursor();
                x.onsuccess = function() {
                  var L = x.result;
                  if (!L) {
                    m(null);
                    return;
                  }
                  o === 0 || O ? m(L.key) : (O = !0, L.advance(o));
                }, x.onerror = function() {
                  c(x.error);
                };
              } catch (L) {
                c(L);
              }
            });
          }).catch(c);
        });
        return S(d, u), d;
      }
      function mo(o) {
        var u = this, a = new y(function(d, m) {
          u.ready().then(function() {
            de(u._dbInfo, te, function(c, v) {
              if (c)
                return m(c);
              try {
                var w = v.objectStore(u._dbInfo.storeName), _ = w.openKeyCursor(), O = [];
                _.onsuccess = function() {
                  var x = _.result;
                  if (!x) {
                    d(O);
                    return;
                  }
                  O.push(x.key), x.continue();
                }, _.onerror = function() {
                  m(_.error);
                };
              } catch (x) {
                m(x);
              }
            });
          }).catch(m);
        });
        return S(a, o), a;
      }
      function po(o, u) {
        u = E.apply(this, arguments);
        var a = this.config();
        o = typeof o != "function" && o || {}, o.name || (o.name = o.name || a.name, o.storeName = o.storeName || a.storeName);
        var d = this, m;
        if (!o.name)
          m = y.reject("Invalid arguments");
        else {
          var c = o.name === a.name && d._dbInfo.db, v = c ? y.resolve(d._dbInfo.db) : q(o).then(function(w) {
            var _ = U[o.name], O = _.forages;
            _.db = w;
            for (var x = 0; x < O.length; x++)
              O[x]._dbInfo.db = w;
            return w;
          });
          o.storeName ? m = v.then(function(w) {
            if (w.objectStoreNames.contains(o.storeName)) {
              var _ = w.version + 1;
              k(o);
              var O = U[o.name], x = O.forages;
              w.close();
              for (var L = 0; L < x.length; L++) {
                var C = x[L];
                C._dbInfo.db = null, C._dbInfo.version = _;
              }
              var H = new y(function(Y, J) {
                var G = g.open(o.name, _);
                G.onerror = function(ie) {
                  var De = G.result;
                  De.close(), J(ie);
                }, G.onupgradeneeded = function() {
                  var ie = G.result;
                  ie.deleteObjectStore(o.storeName);
                }, G.onsuccess = function() {
                  var ie = G.result;
                  ie.close(), Y(ie);
                };
              });
              return H.then(function(Y) {
                O.db = Y;
                for (var J = 0; J < x.length; J++) {
                  var G = x[J];
                  G._dbInfo.db = Y, D(G._dbInfo);
                }
              }).catch(function(Y) {
                throw (B(o, Y) || y.resolve()).catch(function() {
                }), Y;
              });
            }
          }) : m = v.then(function(w) {
            k(o);
            var _ = U[o.name], O = _.forages;
            w.close();
            for (var x = 0; x < O.length; x++) {
              var L = O[x];
              L._dbInfo.db = null;
            }
            var C = new y(function(H, Y) {
              var J = g.deleteDatabase(o.name);
              J.onerror = function() {
                var G = J.result;
                G && G.close(), Y(J.error);
              }, J.onblocked = function() {
                console.warn('dropInstance blocked for database "' + o.name + '" until all open connections are closed');
              }, J.onsuccess = function() {
                var G = J.result;
                G && G.close(), H(G);
              };
            });
            return C.then(function(H) {
              _.db = H;
              for (var Y = 0; Y < O.length; Y++) {
                var J = O[Y];
                D(J._dbInfo);
              }
            }).catch(function(H) {
              throw (B(o, H) || y.resolve()).catch(function() {
              }), H;
            });
          });
        }
        return S(m, u), m;
      }
      var yo = {
        _driver: "asyncStorage",
        _initStorage: io,
        _support: p(),
        iterate: so,
        getItem: ao,
        setItem: uo,
        removeItem: lo,
        clear: fo,
        length: co,
        key: ho,
        keys: mo,
        dropInstance: po
      };
      function go() {
        return typeof openDatabase == "function";
      }
      var me = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", vo = "~~local_forage_type~", Ft = /^~~local_forage_type~([^~]+)~/, qe = "__lfsc__:", ot = qe.length, it = "arbf", at = "blob", Mt = "si08", Ut = "ui08", zt = "uic8", Ht = "si16", Yt = "si32", qt = "ur16", Wt = "ui32", Kt = "fl32", Vt = "fl64", Xt = ot + it.length, Gt = Object.prototype.toString;
      function Jt(o) {
        var u = o.length * 0.75, a = o.length, d, m = 0, c, v, w, _;
        o[o.length - 1] === "=" && (u--, o[o.length - 2] === "=" && u--);
        var O = new ArrayBuffer(u), x = new Uint8Array(O);
        for (d = 0; d < a; d += 4)
          c = me.indexOf(o[d]), v = me.indexOf(o[d + 1]), w = me.indexOf(o[d + 2]), _ = me.indexOf(o[d + 3]), x[m++] = c << 2 | v >> 4, x[m++] = (v & 15) << 4 | w >> 2, x[m++] = (w & 3) << 6 | _ & 63;
        return O;
      }
      function st(o) {
        var u = new Uint8Array(o), a = "", d;
        for (d = 0; d < u.length; d += 3)
          a += me[u[d] >> 2], a += me[(u[d] & 3) << 4 | u[d + 1] >> 4], a += me[(u[d + 1] & 15) << 2 | u[d + 2] >> 6], a += me[u[d + 2] & 63];
        return u.length % 3 === 2 ? a = a.substring(0, a.length - 1) + "=" : u.length % 3 === 1 && (a = a.substring(0, a.length - 2) + "=="), a;
      }
      function bo(o, u) {
        var a = "";
        if (o && (a = Gt.call(o)), o && (a === "[object ArrayBuffer]" || o.buffer && Gt.call(o.buffer) === "[object ArrayBuffer]")) {
          var d, m = qe;
          o instanceof ArrayBuffer ? (d = o, m += it) : (d = o.buffer, a === "[object Int8Array]" ? m += Mt : a === "[object Uint8Array]" ? m += Ut : a === "[object Uint8ClampedArray]" ? m += zt : a === "[object Int16Array]" ? m += Ht : a === "[object Uint16Array]" ? m += qt : a === "[object Int32Array]" ? m += Yt : a === "[object Uint32Array]" ? m += Wt : a === "[object Float32Array]" ? m += Kt : a === "[object Float64Array]" ? m += Vt : u(new Error("Failed to get type for BinaryArray"))), u(m + st(d));
        } else if (a === "[object Blob]") {
          var c = new FileReader();
          c.onload = function() {
            var v = vo + o.type + "~" + st(this.result);
            u(qe + at + v);
          }, c.readAsArrayBuffer(o);
        } else
          try {
            u(JSON.stringify(o));
          } catch (v) {
            console.error("Couldn't convert value into a JSON string: ", o), u(null, v);
          }
      }
      function wo(o) {
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
        serialize: bo,
        deserialize: wo,
        stringToBuffer: Jt,
        bufferToString: st
      };
      function Qt(o, u, a, d) {
        o.executeSql("CREATE TABLE IF NOT EXISTS " + u.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], a, d);
      }
      function _o(o) {
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
      function pe(o, u, a, d, m, c) {
        o.executeSql(a, d, m, function(v, w) {
          w.code === w.SYNTAX_ERR ? v.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [u.storeName], function(_, O) {
            O.rows.length ? c(_, w) : Qt(_, u, function() {
              _.executeSql(a, d, m, c);
            }, c);
          }, c) : c(v, w);
        }, c);
      }
      function So(o, u) {
        var a = this;
        o = T(o);
        var d = new y(function(m, c) {
          a.ready().then(function() {
            var v = a._dbInfo;
            v.db.transaction(function(w) {
              pe(w, v, "SELECT * FROM " + v.storeName + " WHERE key = ? LIMIT 1", [o], function(_, O) {
                var x = O.rows.length ? O.rows.item(0).value : null;
                x && (x = v.serializer.deserialize(x)), m(x);
              }, function(_, O) {
                c(O);
              });
            });
          }).catch(c);
        });
        return S(d, u), d;
      }
      function Oo(o, u) {
        var a = this, d = new y(function(m, c) {
          a.ready().then(function() {
            var v = a._dbInfo;
            v.db.transaction(function(w) {
              pe(w, v, "SELECT * FROM " + v.storeName, [], function(_, O) {
                for (var x = O.rows, L = x.length, C = 0; C < L; C++) {
                  var H = x.item(C), Y = H.value;
                  if (Y && (Y = v.serializer.deserialize(Y)), Y = o(Y, H.key, C + 1), Y !== void 0) {
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
            O.serializer.serialize(u, function(x, L) {
              L ? w(L) : O.db.transaction(function(C) {
                pe(C, O, "INSERT OR REPLACE INTO " + O.storeName + " (key, value) VALUES (?, ?)", [o, x], function() {
                  v(_);
                }, function(H, Y) {
                  w(Y);
                });
              }, function(C) {
                if (C.code === C.QUOTA_ERR) {
                  if (d > 0) {
                    v(Zt.apply(m, [o, _, a, d - 1]));
                    return;
                  }
                  w(C);
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
      function $o(o, u) {
        var a = this;
        o = T(o);
        var d = new y(function(m, c) {
          a.ready().then(function() {
            var v = a._dbInfo;
            v.db.transaction(function(w) {
              pe(w, v, "DELETE FROM " + v.storeName + " WHERE key = ?", [o], function() {
                m();
              }, function(_, O) {
                c(O);
              });
            });
          }).catch(c);
        });
        return S(d, u), d;
      }
      function Ao(o) {
        var u = this, a = new y(function(d, m) {
          u.ready().then(function() {
            var c = u._dbInfo;
            c.db.transaction(function(v) {
              pe(v, c, "DELETE FROM " + c.storeName, [], function() {
                d();
              }, function(w, _) {
                m(_);
              });
            });
          }).catch(m);
        });
        return S(a, o), a;
      }
      function Eo(o) {
        var u = this, a = new y(function(d, m) {
          u.ready().then(function() {
            var c = u._dbInfo;
            c.db.transaction(function(v) {
              pe(v, c, "SELECT COUNT(key) as c FROM " + c.storeName, [], function(w, _) {
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
      function Io(o, u) {
        var a = this, d = new y(function(m, c) {
          a.ready().then(function() {
            var v = a._dbInfo;
            v.db.transaction(function(w) {
              pe(w, v, "SELECT key FROM " + v.storeName + " WHERE id = ? LIMIT 1", [o + 1], function(_, O) {
                var x = O.rows.length ? O.rows.item(0).key : null;
                m(x);
              }, function(_, O) {
                c(O);
              });
            });
          }).catch(c);
        });
        return S(d, u), d;
      }
      function To(o) {
        var u = this, a = new y(function(d, m) {
          u.ready().then(function() {
            var c = u._dbInfo;
            c.db.transaction(function(v) {
              pe(v, c, "SELECT key FROM " + c.storeName, [], function(w, _) {
                for (var O = [], x = 0; x < _.rows.length; x++)
                  O.push(_.rows.item(x).key);
                d(O);
              }, function(w, _) {
                m(_);
              });
            });
          }).catch(m);
        });
        return S(a, o), a;
      }
      function Lo(o) {
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
          }) : c(Lo(v));
        }).then(function(c) {
          return new y(function(v, w) {
            c.db.transaction(function(_) {
              function O(H) {
                return new y(function(Y, J) {
                  _.executeSql("DROP TABLE IF EXISTS " + H, [], function() {
                    Y();
                  }, function(G, ie) {
                    J(ie);
                  });
                });
              }
              for (var x = [], L = 0, C = c.storeNames.length; L < C; L++)
                x.push(O(c.storeNames[L]));
              y.all(x).then(function() {
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
      var Po = {
        _driver: "webSQLStorage",
        _initStorage: _o,
        _support: go(),
        iterate: Oo,
        getItem: So,
        setItem: xo,
        removeItem: $o,
        clear: Ao,
        length: Eo,
        key: Io,
        keys: To,
        dropInstance: ko
      };
      function No() {
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
      function Ro() {
        var o = "_localforage_support_test";
        try {
          return localStorage.setItem(o, !0), localStorage.removeItem(o), !1;
        } catch {
          return !0;
        }
      }
      function Do() {
        return !Ro() || localStorage.length > 0;
      }
      function Bo(o) {
        var u = this, a = {};
        if (o)
          for (var d in o)
            a[d] = o[d];
        return a.keyPrefix = er(o, u._defaultConfig), Do() ? (u._dbInfo = a, a.serializer = ut, y.resolve()) : y.reject();
      }
      function Co(o) {
        var u = this, a = u.ready().then(function() {
          for (var d = u._dbInfo.keyPrefix, m = localStorage.length - 1; m >= 0; m--) {
            var c = localStorage.key(m);
            c.indexOf(d) === 0 && localStorage.removeItem(c);
          }
        });
        return S(a, o), a;
      }
      function jo(o, u) {
        var a = this;
        o = T(o);
        var d = a.ready().then(function() {
          var m = a._dbInfo, c = localStorage.getItem(m.keyPrefix + o);
          return c && (c = m.serializer.deserialize(c)), c;
        });
        return S(d, u), d;
      }
      function Fo(o, u) {
        var a = this, d = a.ready().then(function() {
          for (var m = a._dbInfo, c = m.keyPrefix, v = c.length, w = localStorage.length, _ = 1, O = 0; O < w; O++) {
            var x = localStorage.key(O);
            if (x.indexOf(c) === 0) {
              var L = localStorage.getItem(x);
              if (L && (L = m.serializer.deserialize(L)), L = o(L, x.substring(v), _++), L !== void 0)
                return L;
            }
          }
        });
        return S(d, u), d;
      }
      function Mo(o, u) {
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
      function Uo(o) {
        var u = this, a = u.ready().then(function() {
          for (var d = u._dbInfo, m = localStorage.length, c = [], v = 0; v < m; v++) {
            var w = localStorage.key(v);
            w.indexOf(d.keyPrefix) === 0 && c.push(w.substring(d.keyPrefix.length));
          }
          return c;
        });
        return S(a, o), a;
      }
      function zo(o) {
        var u = this, a = u.keys().then(function(d) {
          return d.length;
        });
        return S(a, o), a;
      }
      function Ho(o, u) {
        var a = this;
        o = T(o);
        var d = a.ready().then(function() {
          var m = a._dbInfo;
          localStorage.removeItem(m.keyPrefix + o);
        });
        return S(d, u), d;
      }
      function Yo(o, u, a) {
        var d = this;
        o = T(o);
        var m = d.ready().then(function() {
          u === void 0 && (u = null);
          var c = u;
          return new y(function(v, w) {
            var _ = d._dbInfo;
            _.serializer.serialize(u, function(O, x) {
              if (x)
                w(x);
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
      function qo(o, u) {
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
      var Wo = {
        _driver: "localStorageWrapper",
        _initStorage: Bo,
        _support: No(),
        iterate: Fo,
        getItem: jo,
        setItem: Yo,
        removeItem: Ho,
        clear: Co,
        length: zo,
        key: Mo,
        keys: Uo,
        dropInstance: qo
      }, Ko = function(u, a) {
        return u === a || typeof u == "number" && typeof a == "number" && isNaN(u) && isNaN(a);
      }, Vo = function(u, a) {
        for (var d = u.length, m = 0; m < d; ) {
          if (Ko(u[m], a))
            return !0;
          m++;
        }
        return !1;
      }, tr = Array.isArray || function(o) {
        return Object.prototype.toString.call(o) === "[object Array]";
      }, Re = {}, rr = {}, xe = {
        INDEXEDDB: yo,
        WEBSQL: Po,
        LOCALSTORAGE: Wo
      }, Xo = [xe.INDEXEDDB._driver, xe.WEBSQL._driver, xe.LOCALSTORAGE._driver], We = ["dropInstance"], lt = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(We), Go = {
        description: "",
        driver: Xo.slice(),
        name: "localforage",
        // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
        // we can use without a prompt.
        size: 4980736,
        storeName: "keyvaluepairs",
        version: 1
      };
      function Jo(o, u) {
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
      var Qo = function() {
        function o(u) {
          f(this, o);
          for (var a in xe)
            if (xe.hasOwnProperty(a)) {
              var d = xe[a], m = d._driver;
              this[a] = m, Re[m] || this.defineDriver(d);
            }
          this._defaultConfig = ft({}, Go), this._config = ft({}, this._defaultConfig, u), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch(function() {
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
              for (var x = lt.concat("_initStorage"), L = 0, C = x.length; L < C; L++) {
                var H = x[L], Y = !Vo(We, H);
                if ((Y || a[H]) && typeof a[H] != "function") {
                  w(O);
                  return;
                }
              }
              var J = function() {
                for (var De = function(ti) {
                  return function() {
                    var ri = new Error("Method " + ti + " is not implemented by the current driver"), nr = y.reject(ri);
                    return S(nr, arguments[arguments.length - 1]), nr;
                  };
                }, ct = 0, ei = We.length; ct < ei; ct++) {
                  var dt = We[ct];
                  a[dt] || (a[dt] = De(dt));
                }
              };
              J();
              var G = function(De) {
                Re[_] && console.info("Redefining LocalForage driver: " + _), Re[_] = a, rr[_] = De, v();
              };
              "_support" in a ? a._support && typeof a._support == "function" ? a._support().then(G, w) : G(!!a._support) : G(!0);
            } catch (ie) {
              w(ie);
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
              var C = 0;
              function H() {
                for (; C < L.length; ) {
                  var Y = L[C];
                  return C++, c._dbInfo = null, c._ready = null, c.getDriver(Y).then(_).catch(H);
                }
                w();
                var J = new Error("No available storage method found.");
                return c._driverSet = y.reject(J), c._driverSet;
              }
              return H();
            };
          }
          var x = this._driverSet !== null ? this._driverSet.catch(function() {
            return y.resolve();
          }) : y.resolve();
          return this._driverSet = x.then(function() {
            var L = v[0];
            return c._dbInfo = null, c._ready = null, c.getDriver(L).then(function(C) {
              c._driver = C._driver, w(), c._wrapLibraryMethodsWithReady(), c._initDriver = O(v);
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
            Jo(this, lt[a]);
        }, o.prototype.createInstance = function(a) {
          return new o(a);
        }, o;
      }(), Zo = new Qo();
      n.exports = Zo;
    }, { 3: 3 }] }, {}, [4])(4);
  });
})(nn);
var Pi = nn.exports;
const Ni = /* @__PURE__ */ ki(Pi), Ae = [];
function Ri(e, t) {
  return {
    subscribe: on(e, t).subscribe
  };
}
function on(e, t = le) {
  let r;
  const n = /* @__PURE__ */ new Set();
  function i(l) {
    if (en(e, l) && (e = l, r)) {
      const g = !Ae.length;
      for (const p of n)
        p[1](), Ae.push(p, e);
      if (g) {
        for (let p = 0; p < Ae.length; p += 2)
          Ae[p][0](Ae[p + 1]);
        Ae.length = 0;
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
Ni.config({
  name: "SNS HPC AI Assitant"
});
const we = {
  Unknown: { slug: "unknown", description: "Checking the AI server status...", icon: "⏳" },
  Error: { slug: "error", description: "The AI server is currently unavailable", icon: "🔴" },
  OK: { slug: "ok", description: "The AI server is fully functional", icon: "🟢" },
  Running: { slug: "running", description: "The AI server is working to answer", icon: "🔵" },
  Degraded: { slug: "degraded", description: "The AI server is currently degraded", icon: "🟡" }
};
class Di {
  constructor(t) {
    this.baseURL = t, this.status = on(we.Unknown);
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
            return this.status.set(f.premium ? we.OK : we.Degraded), f.model;
      }
    } catch (n) {
      console.error(n);
    }
    this.status.set(we.Error);
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
    this.status.set(we.Error);
  }
  async chat(t, r) {
    r = r || {};
    const n = ai(this.status);
    try {
      this.status.set(we.Running);
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
    this.status.set(we.Error);
  }
}
var ve = {}, V = {}, ne = {};
Object.defineProperty(ne, "__esModule", { value: !0 });
ne.output = ne.exists = ne.hash = ne.bytes = ne.bool = ne.number = void 0;
function Ze(e) {
  if (!Number.isSafeInteger(e) || e < 0)
    throw new Error(`Wrong positive integer: ${e}`);
}
ne.number = Ze;
function an(e) {
  if (typeof e != "boolean")
    throw new Error(`Expected boolean, not ${e}`);
}
ne.bool = an;
function Bi(e) {
  return e instanceof Uint8Array || e != null && typeof e == "object" && e.constructor.name === "Uint8Array";
}
function Nt(e, ...t) {
  if (!Bi(e))
    throw new Error("Expected Uint8Array");
  if (t.length > 0 && !t.includes(e.length))
    throw new Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`);
}
ne.bytes = Nt;
function sn(e) {
  if (typeof e != "function" || typeof e.create != "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  Ze(e.outputLen), Ze(e.blockLen);
}
ne.hash = sn;
function un(e, t = !0) {
  if (e.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (t && e.finished)
    throw new Error("Hash#digest() has already been called");
}
ne.exists = un;
function ln(e, t) {
  Nt(e);
  const r = t.outputLen;
  if (e.length < r)
    throw new Error(`digestInto() expects output buffer of length at least ${r}`);
}
ne.output = ln;
const Ci = { number: Ze, bool: an, bytes: Nt, hash: sn, exists: un, output: ln };
ne.default = Ci;
var P = {};
Object.defineProperty(P, "__esModule", { value: !0 });
P.add5L = P.add5H = P.add4H = P.add4L = P.add3H = P.add3L = P.add = P.rotlBL = P.rotlBH = P.rotlSL = P.rotlSH = P.rotr32L = P.rotr32H = P.rotrBL = P.rotrBH = P.rotrSL = P.rotrSH = P.shrSL = P.shrSH = P.toBig = P.split = P.fromBig = void 0;
const Ve = /* @__PURE__ */ BigInt(2 ** 32 - 1), gt = /* @__PURE__ */ BigInt(32);
function Rt(e, t = !1) {
  return t ? { h: Number(e & Ve), l: Number(e >> gt & Ve) } : { h: Number(e >> gt & Ve) | 0, l: Number(e & Ve) | 0 };
}
P.fromBig = Rt;
function fn(e, t = !1) {
  let r = new Uint32Array(e.length), n = new Uint32Array(e.length);
  for (let i = 0; i < e.length; i++) {
    const { h: s, l: f } = Rt(e[i], t);
    [r[i], n[i]] = [s, f];
  }
  return [r, n];
}
P.split = fn;
const cn = (e, t) => BigInt(e >>> 0) << gt | BigInt(t >>> 0);
P.toBig = cn;
const dn = (e, t, r) => e >>> r;
P.shrSH = dn;
const hn = (e, t, r) => e << 32 - r | t >>> r;
P.shrSL = hn;
const mn = (e, t, r) => e >>> r | t << 32 - r;
P.rotrSH = mn;
const pn = (e, t, r) => e << 32 - r | t >>> r;
P.rotrSL = pn;
const yn = (e, t, r) => e << 64 - r | t >>> r - 32;
P.rotrBH = yn;
const gn = (e, t, r) => e >>> r - 32 | t << 64 - r;
P.rotrBL = gn;
const vn = (e, t) => t;
P.rotr32H = vn;
const bn = (e, t) => e;
P.rotr32L = bn;
const wn = (e, t, r) => e << r | t >>> 32 - r;
P.rotlSH = wn;
const _n = (e, t, r) => t << r | e >>> 32 - r;
P.rotlSL = _n;
const Sn = (e, t, r) => t << r - 32 | e >>> 64 - r;
P.rotlBH = Sn;
const On = (e, t, r) => e << r - 32 | t >>> 64 - r;
P.rotlBL = On;
function xn(e, t, r, n) {
  const i = (t >>> 0) + (n >>> 0);
  return { h: e + r + (i / 2 ** 32 | 0) | 0, l: i | 0 };
}
P.add = xn;
const $n = (e, t, r) => (e >>> 0) + (t >>> 0) + (r >>> 0);
P.add3L = $n;
const An = (e, t, r, n) => t + r + n + (e / 2 ** 32 | 0) | 0;
P.add3H = An;
const En = (e, t, r, n) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0);
P.add4L = En;
const In = (e, t, r, n, i) => t + r + n + i + (e / 2 ** 32 | 0) | 0;
P.add4H = In;
const Tn = (e, t, r, n, i) => (e >>> 0) + (t >>> 0) + (r >>> 0) + (n >>> 0) + (i >>> 0);
P.add5L = Tn;
const Ln = (e, t, r, n, i, s) => t + r + n + i + s + (e / 2 ** 32 | 0) | 0;
P.add5H = Ln;
const ji = {
  fromBig: Rt,
  split: fn,
  toBig: cn,
  shrSH: dn,
  shrSL: hn,
  rotrSH: mn,
  rotrSL: pn,
  rotrBH: yn,
  rotrBL: gn,
  rotr32H: vn,
  rotr32L: bn,
  rotlSH: wn,
  rotlSL: _n,
  rotlBH: Sn,
  rotlBL: On,
  add: xn,
  add3L: $n,
  add3H: An,
  add4L: En,
  add4H: In,
  add5H: Ln,
  add5L: Tn
};
P.default = ji;
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
  const f = (b, k) => b << 32 - k | b >>> k;
  if (e.rotr = f, e.isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68, !e.isLE)
    throw new Error("Non little-endian hardware is not supported");
  const l = /* @__PURE__ */ Array.from({ length: 256 }, (b, k) => k.toString(16).padStart(2, "0"));
  function g(b) {
    if (!i(b))
      throw new Error("Uint8Array expected");
    let k = "";
    for (let D = 0; D < b.length; D++)
      k += l[b[D]];
    return k;
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
    const k = b.length, D = k / 2;
    if (k % 2)
      throw new Error("padded hex string expected, got unpadded hex of length " + k);
    const B = new Uint8Array(D);
    for (let F = 0, q = 0; F < D; F++, q += 2) {
      const Q = I(b.charCodeAt(q)), z = I(b.charCodeAt(q + 1));
      if (Q === void 0 || z === void 0) {
        const Z = b[q] + b[q + 1];
        throw new Error('hex string expected, got non-hex character "' + Z + '" at index ' + q);
      }
      B[F] = Q * 16 + z;
    }
    return B;
  }
  e.hexToBytes = y;
  const S = async () => {
  };
  e.nextTick = S;
  async function A(b, k, D) {
    let B = Date.now();
    for (let F = 0; F < b; F++) {
      D(F);
      const q = Date.now() - B;
      q >= 0 && q < k || (await (0, e.nextTick)(), B += q);
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
  function N(...b) {
    let k = 0;
    for (let B = 0; B < b.length; B++) {
      const F = b[B];
      if (!i(F))
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
  function oe(b, k) {
    if (k !== void 0 && U.call(k) !== "[object Object]")
      throw new Error("Options should be object or undefined");
    return Object.assign(b, k);
  }
  e.checkOpts = oe;
  function te(b) {
    const k = (B) => b().update(E(B)).digest(), D = b();
    return k.outputLen = D.outputLen, k.blockLen = D.blockLen, k.create = () => b(), k;
  }
  e.wrapConstructor = te;
  function $(b) {
    const k = (B, F) => b(F).update(E(B)).digest(), D = b({});
    return k.outputLen = D.outputLen, k.blockLen = D.blockLen, k.create = (B) => b(B), k;
  }
  e.wrapConstructorWithOpts = $;
  function j(b) {
    const k = (B, F) => b(F).update(E(B)).digest(), D = b({});
    return k.outputLen = D.outputLen, k.blockLen = D.blockLen, k.create = (B) => b(B), k;
  }
  e.wrapXOFConstructorWithOpts = j;
  function R(b = 32) {
    if (t.crypto && typeof t.crypto.getRandomValues == "function")
      return t.crypto.getRandomValues(new Uint8Array(b));
    throw new Error("crypto.getRandomValues must be defined");
  }
  e.randomBytes = R;
})(kn);
Object.defineProperty(V, "__esModule", { value: !0 });
V.shake256 = V.shake128 = V.keccak_512 = V.keccak_384 = V.keccak_256 = V.keccak_224 = V.sha3_512 = V.sha3_384 = V.sha3_256 = V.sha3_224 = V.Keccak = V.keccakP = void 0;
const Ee = ne, Ue = P, je = kn, [Pn, Nn, Rn] = [[], [], []], Fi = /* @__PURE__ */ BigInt(0), Be = /* @__PURE__ */ BigInt(1), Mi = /* @__PURE__ */ BigInt(2), Ui = /* @__PURE__ */ BigInt(7), zi = /* @__PURE__ */ BigInt(256), Hi = /* @__PURE__ */ BigInt(113);
for (let e = 0, t = Be, r = 1, n = 0; e < 24; e++) {
  [r, n] = [n, (2 * r + 3 * n) % 5], Pn.push(2 * (5 * n + r)), Nn.push((e + 1) * (e + 2) / 2 % 64);
  let i = Fi;
  for (let s = 0; s < 7; s++)
    t = (t << Be ^ (t >> Ui) * Hi) % zi, t & Mi && (i ^= Be << (Be << /* @__PURE__ */ BigInt(s)) - Be);
  Rn.push(i);
}
const [Yi, qi] = /* @__PURE__ */ (0, Ue.split)(Rn, !0), lr = (e, t, r) => r > 32 ? (0, Ue.rotlBH)(e, t, r) : (0, Ue.rotlSH)(e, t, r), fr = (e, t, r) => r > 32 ? (0, Ue.rotlBL)(e, t, r) : (0, Ue.rotlSL)(e, t, r);
function Dn(e, t = 24) {
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
      const l = Nn[f], g = lr(i, s, l), p = fr(i, s, l), I = Pn[f];
      i = e[I], s = e[I + 1], e[I] = g, e[I + 1] = p;
    }
    for (let f = 0; f < 50; f += 10) {
      for (let l = 0; l < 10; l++)
        r[l] = e[f + l];
      for (let l = 0; l < 10; l++)
        e[f + l] ^= ~r[(l + 2) % 10] & r[(l + 4) % 10];
    }
    e[0] ^= Yi[n], e[1] ^= qi[n];
  }
  r.fill(0);
}
V.keccakP = Dn;
class Ye extends je.Hash {
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(t, r, n, i = !1, s = 24) {
    if (super(), this.blockLen = t, this.suffix = r, this.outputLen = n, this.enableXOF = i, this.rounds = s, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, (0, Ee.number)(n), 0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = (0, je.u32)(this.state);
  }
  keccak() {
    Dn(this.state32, this.rounds), this.posOut = 0, this.pos = 0;
  }
  update(t) {
    (0, Ee.exists)(this);
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
    (0, Ee.exists)(this, !1), (0, Ee.bytes)(t), this.finish();
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
    return (0, Ee.number)(t), this.xofInto(new Uint8Array(t));
  }
  digestInto(t) {
    if ((0, Ee.output)(t, this), this.finished)
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
V.Keccak = Ye;
const be = (e, t, r) => (0, je.wrapConstructor)(() => new Ye(t, e, r));
V.sha3_224 = be(6, 144, 224 / 8);
V.sha3_256 = be(6, 136, 256 / 8);
V.sha3_384 = be(6, 104, 384 / 8);
V.sha3_512 = be(6, 72, 512 / 8);
V.keccak_224 = be(1, 144, 224 / 8);
V.keccak_256 = be(1, 136, 256 / 8);
V.keccak_384 = be(1, 104, 384 / 8);
V.keccak_512 = be(1, 72, 512 / 8);
const Bn = (e, t, r) => (0, je.wrapXOFConstructorWithOpts)((n = {}) => new Ye(t, e, n.dkLen === void 0 ? r : n.dkLen, !0));
V.shake128 = Bn(31, 168, 128 / 8);
V.shake256 = Bn(31, 136, 256 / 8);
const { sha3_512: Wi } = V, Cn = 24, Fe = 32, vt = (e = 4, t = Math.random) => {
  let r = "";
  for (; r.length < e; )
    r = r + Math.floor(t() * 36).toString(36);
  return r;
};
function jn(e) {
  let t = 8n, r = 0n;
  for (const n of e.values()) {
    const i = BigInt(n);
    r = (r << t) + i;
  }
  return r;
}
const Fn = (e = "") => jn(Wi(e)).toString(36).slice(1), cr = Array.from(
  { length: 26 },
  (e, t) => String.fromCharCode(t + 97)
), Ki = (e) => cr[Math.floor(e() * cr.length)], Mn = ({
  globalObj: e = typeof Te < "u" ? Te : typeof window < "u" ? window : {},
  random: t = Math.random
} = {}) => {
  const r = Object.keys(e).toString(), n = r.length ? r + vt(Fe, t) : vt(Fe, t);
  return Fn(n).substring(0, Fe);
}, Un = (e) => () => e++, Vi = 476782367, zn = ({
  // Fallback if the user does not pass in a CSPRNG. This should be OK
  // because we don't rely solely on the random number generator for entropy.
  // We also use the host fingerprint, current time, and a session counter.
  random: e = Math.random,
  counter: t = Un(Math.floor(e() * Vi)),
  length: r = Cn,
  fingerprint: n = Mn({ random: e })
} = {}) => function() {
  const s = Ki(e), f = Date.now().toString(36), l = t().toString(36), g = vt(r, e), p = `${f + g + l + n}`;
  return `${s + Fn(p).substring(1, r)}`;
}, Xi = zn(), Gi = (e, { minLength: t = 2, maxLength: r = Fe } = {}) => {
  const n = e.length, i = /^[0-9a-z]+$/;
  try {
    if (typeof e == "string" && n >= t && n <= r && i.test(e))
      return !0;
  } finally {
  }
  return !1;
};
ve.getConstants = () => ({ defaultLength: Cn, bigLength: Fe });
ve.init = zn;
ve.createId = Xi;
ve.bufToBigInt = jn;
ve.createCounter = Un;
ve.createFingerprint = Mn;
ve.isCuid = Gi;
const { createId: Ji, init: Ns, getConstants: Rs, isCuid: Ds } = ve;
var Qi = Ji;
class Zi {
  // TODO: Implement message tree with branches
  constructor(t, r, n) {
    if (this.updated = t, this.ollama = r, n)
      this._ = n;
    else {
      const i = (/* @__PURE__ */ new Date()).toISOString();
      this._ = {
        chatId: Qi(),
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
var Hn = "en", Dt = {}, bt = {};
function Yn() {
  return Hn;
}
function ea(e) {
  Hn = e;
}
function ta(e) {
  return Dt[e];
}
function ra(e) {
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
function qn(e) {
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
function gr(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function aa(e, t, r) {
  return t && gr(e.prototype, t), r && gr(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var wt = /* @__PURE__ */ function() {
  function e(t, r) {
    ia(this, e);
    var n = e.supportedLocalesOf(t);
    if (n.length === 0)
      throw new RangeError("Unsupported locale: " + t);
    if (r && r.type !== "cardinal")
      throw new RangeError('Only "cardinal" "type" is supported');
    this.$ = pr[yr(n[0])];
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
      sa(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vr(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function sa(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function wr(e, t) {
  return ca(e) || fa(e, t) || la(e, t) || ua();
}
function ua() {
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
function fa(e, t) {
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
function ca(e) {
  if (Array.isArray(e))
    return e;
}
function da(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Sr(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function ha(e, t, r) {
  return t && Sr(e.prototype, t), r && Sr(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var ma = ["second", "minute", "hour", "day", "week", "month", "quarter", "year"], pa = ["auto", "always"], ya = ["long", "short", "narrow"], ga = ["lookup", "best fit"], ge = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    da(this, e);
    var n = r.numeric, i = r.style, s = r.localeMatcher;
    if (this.numeric = "always", this.style = "long", this.localeMatcher = "lookup", n !== void 0) {
      if (pa.indexOf(n) < 0)
        throw new RangeError('Invalid "numeric" option: '.concat(n));
      this.numeric = n;
    }
    if (i !== void 0) {
      if (ya.indexOf(i) < 0)
        throw new RangeError('Invalid "style" option: '.concat(i));
      this.style = i;
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
    wt.supportedLocalesOf(this.locale).length > 0 ? this.pluralRules = new wt(this.locale) : console.warn('"'.concat(this.locale, '" locale is not supported')), typeof Intl < "u" && Intl.NumberFormat ? (this.numberFormat = new Intl.NumberFormat(this.locale), this.numberingSystem = this.numberFormat.resolvedOptions().numberingSystem) : this.numberingSystem = "latn", this.locale = qn(this.locale, {
      localeMatcher: this.localeMatcher
    });
  }
  return ha(e, [{
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
      var i = ta(this.locale)[this.style][n];
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
      var l = i[Sa(r) ? "past" : "future"];
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
ge.supportedLocalesOf = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (typeof e == "string")
    e = [e];
  else if (!Array.isArray(e))
    throw new TypeError('Invalid "locales" argument');
  return e.filter(function(r) {
    return qn(r, t);
  });
};
ge.addLocale = ra;
ge.setDefaultLocale = ea;
ge.getDefaultLocale = Yn;
ge.PluralRules = wt;
var mt = 'Invalid "unit" argument';
function va(e) {
  if (_t(e) === "symbol")
    throw new TypeError(mt);
  if (typeof e != "string")
    throw new RangeError("".concat(mt, ": ").concat(e));
  if (e[e.length - 1] === "s" && (e = e.slice(0, e.length - 1)), ma.indexOf(e) < 0)
    throw new RangeError("".concat(mt, ": ").concat(e));
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
function Or(e) {
  if (e.length < 2)
    throw new TypeError('"unit" argument is required');
  return [wa(e[0]), va(e[1])];
}
function et(e) {
  "@babel/helpers - typeof";
  return et = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, et(e);
}
function Oa(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function xr(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function xa(e, t, r) {
  return t && xr(e.prototype, t), r && xr(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var $r = /* @__PURE__ */ function() {
  function e() {
    Oa(this, e), this.cache = {};
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
  for (var r = $a(e), n; !(n = r()).done; ) {
    var i = n.value;
    if (t(i))
      return i;
    for (var s = i.split("-"); s.length > 1; )
      if (s.pop(), i = s.join("-"), t(i))
        return i;
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
  return ka(e) && (Array.isArray(e.steps) || // `gradation` property is deprecated: it has been renamed to `steps`.
  Array.isArray(e.gradation) || // `flavour` property is deprecated: it has been renamed to `labels`.
  Array.isArray(e.flavour) || typeof e.flavour == "string" || Array.isArray(e.labels) || typeof e.labels == "string" || // `units` property is deprecated.
  Array.isArray(e.units) || // `custom` property is deprecated.
  typeof e.custom == "function");
}
var La = {}.constructor;
function ka(e) {
  return Ot(e) !== void 0 && e !== null && e.constructor === La;
}
var he = 60, tt = 60 * he, _e = 24 * tt, xt = 7 * _e, $t = 30.44 * _e, Wn = 146097 / 400 * _e;
function Pe(e) {
  switch (e) {
    case "second":
      return 1;
    case "minute":
      return he;
    case "hour":
      return tt;
    case "day":
      return _e;
    case "week":
      return xt;
    case "month":
      return $t;
    case "year":
      return Wn;
  }
}
function Kn(e) {
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
function Vn(e, t) {
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
function Pa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ir(Object(r), !0).forEach(function(n) {
      Na(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ir(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Na(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function Ra(e, t, r) {
  var n = r.now, i = r.future, s = r.round, f = r.units, l = r.getNextStep;
  e = Ba(e, f);
  var g = Da(e, t, {
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
function Da(e, t, r) {
  var n = r.now, i = r.future, s = r.round;
  if (e.length !== 0) {
    var f = Xn(e, t, {
      now: n,
      future: i || t < 0,
      round: s
    });
    if (f !== -1) {
      var l = e[f];
      if (l.granularity) {
        var g = ze(s)(Math.abs(t) / Kn(l) / l.granularity) * l.granularity;
        if (g === 0 && f > 0)
          return e[f - 1];
      }
      return l;
    }
  }
}
function Xn(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, i = Vn(e[n], Pa({
    prevStep: e[n - 1],
    timestamp: r.now - t * 1e3
  }, r));
  return i === void 0 || Math.abs(t) < i ? n - 1 : n === e.length - 1 ? n : Xn(e, t, r, n + 1);
}
function Ba(e, t) {
  return e.filter(function(r) {
    var n = r.unit, i = r.formatAs;
    return n = n || i, n ? t.indexOf(n) >= 0 : !0;
  });
}
function Ca(e, t, r) {
  var n = r.now, i = r.round;
  if (Pe(e)) {
    var s = Pe(e) * 1e3, f = t > n, l = Math.abs(t - n), g = ze(i)(l / s) * s;
    return f ? g > 0 ? l - g + Fa(i, s) : l - g + 1 : -(l - g) + ja(i, s);
  }
}
function ja(e, t) {
  return Bt(e) * t;
}
function Fa(e, t) {
  return (1 - Bt(e)) * t + 1;
}
var Ma = 365 * 24 * 60 * 60 * 1e3, Gn = 1e3 * Ma;
function Ua(e, t, r) {
  var n = r.prevStep, i = r.nextStep, s = r.now, f = r.future, l = r.round, g = e.getTime ? e.getTime() : e, p = function(T) {
    return Ca(T, g, {
      now: s,
      round: l
    });
  }, I = Ha(f ? t : i, g, {
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
function za(e, t, r) {
  var n = r.now, i = r.future, s = r.round, f = r.prevStep, l = Vn(e, {
    timestamp: t,
    now: n,
    future: i,
    round: s,
    prevStep: f
  });
  if (l !== void 0)
    return i ? t - l * 1e3 + 1 : l === 0 && t === n ? Gn : t + l * 1e3;
}
function Ha(e, t, r) {
  var n = r.now, i = r.future, s = r.round, f = r.prevStep;
  if (e) {
    var l = za(e, t, {
      now: n,
      future: i,
      round: s,
      prevStep: f
    });
    return l === void 0 ? void 0 : l - n;
  } else
    return i ? t - n + 1 : Gn;
}
var Jn = {};
function Le(e) {
  return Jn[e];
}
function Qn(e) {
  if (!e)
    throw new Error("[javascript-time-ago] No locale data passed.");
  Jn[e.locale] = e;
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
}], Et = {
  steps: Ya,
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
      qa(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Tr(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function qa(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
const It = Lr(Lr({}, Et), {}, {
  // Skip "seconds".
  steps: Et.steps.filter(function(e) {
    return e.formatAs !== "second";
  })
}), Zn = [{
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
  factor: he,
  // "minute" labels are used for formatting the output.
  unit: "minute"
}, {
  // This step is effective starting from 2.5 minutes.
  threshold: 2.5 * he,
  // Allow only 5-minute increments of minutes starting from 2.5 minutes.
  // `granularity` — (advanced) Time interval value "granularity".
  // For example, it could be set to `5` for minutes to allow only 5-minute increments
  // when formatting time intervals: `0 minutes`, `5 minutes`, `10 minutes`, etc.
  // Perhaps this feature will be removed because there seem to be no use cases
  // of it in the real world.
  granularity: 5,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a minute.
  factor: he,
  // "minute" labels are used for formatting the output.
  unit: "minute"
}, {
  // This step is effective starting from 22.5 minutes.
  threshold: 22.5 * he,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in  half-an-hour.
  factor: 0.5 * tt,
  // "half-hour" labels are used for formatting the output.
  // (if available, which is no longer the case)
  unit: "half-hour"
}, {
  // This step is effective starting from 42.5 minutes.
  threshold: 42.5 * he,
  threshold_for_minute: 52.5 * he,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in an hour.
  factor: tt,
  // "hour" labels are used for formatting the output.
  unit: "hour"
}, {
  // This step is effective starting from 20.5 hours.
  threshold: 20.5 / 24 * _e,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a day.
  factor: _e,
  // "day" labels are used for formatting the output.
  unit: "day"
}, {
  // This step is effective starting from 5.5 days.
  threshold: 5.5 * _e,
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
  factor: Wn,
  // "year" labels are used for formatting the output.
  unit: "year"
}], kr = {
  gradation: Zn,
  flavour: "long",
  units: ["now", "minute", "hour", "day", "week", "month", "year"]
}, Wa = {
  gradation: Zn,
  flavour: "long-time",
  units: ["now", "minute", "hour", "day", "week", "month", "year"]
};
function eo(e) {
  return e instanceof Date ? e : new Date(e);
}
var Tt = [{
  formatAs: "second"
}, {
  formatAs: "minute"
}, {
  formatAs: "hour"
}], ce = {}, Ka = {
  minTime: function(t, r) {
    r.future;
    var n = r.getMinTimeForUnit;
    return n("day");
  },
  format: function(t, r) {
    return ce[r] || (ce[r] = {}), ce[r].dayMonth || (ce[r].dayMonth = new Intl.DateTimeFormat(r, {
      month: "short",
      day: "numeric"
    })), ce[r].dayMonth.format(eo(t));
  }
}, Va = {
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
    return ce[r] || (ce[r] = {}), ce[r].dayMonthYear || (ce[r].dayMonthYear = new Intl.DateTimeFormat(r, {
      year: "numeric",
      month: "short",
      day: "numeric"
    })), ce[r].dayMonthYear.format(eo(t));
  }
};
Ia() ? Tt.push(Ka, Va) : Tt.push({
  formatAs: "day"
}, {
  formatAs: "week"
}, {
  formatAs: "month"
}, {
  formatAs: "year"
});
const Se = {
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
function Pr(e, t) {
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
const Ga = Nr(Nr({}, Se), {}, {
  // Add "now".
  steps: [{
    formatAs: "now"
  }].concat(Se.steps)
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
const Lt = Dr(Dr({}, Se), {}, {
  // Skip "seconds".
  steps: Se.steps.filter(function(e) {
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
const ts = Xe(Xe({}, Se), {}, {
  // Skip "seconds".
  steps: Se.steps.filter(function(e) {
    return e.formatAs !== "second";
  }).map(function(e) {
    return e.formatAs === "minute" ? Xe(Xe({}, e), {}, {
      minTime: he
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
const ns = Mr(Mr({}, He), {}, {
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
const kt = zr(zr({}, He), {}, {
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
const as = Yr(Yr({}, kt), {}, {
  // Add "now".
  steps: [{
    formatAs: "now"
  }].concat(kt.steps)
});
function ss(e) {
  switch (e) {
    case "default":
    case "round":
      return Et;
    case "round-minute":
      return It;
    case "approximate":
      return kr;
    case "time":
    case "approximate-time":
      return Wa;
    case "mini":
      return He;
    case "mini-now":
      return ns;
    case "mini-minute":
      return kt;
    case "mini-minute-now":
      return as;
    case "twitter":
      return Se;
    case "twitter-now":
      return Ga;
    case "twitter-minute":
      return Lt;
    case "twitter-minute-now":
      return Za;
    case "twitter-first-minute":
      return ts;
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
function us(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r)
    return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = to(e)) || t && e && typeof e.length == "number") {
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
  return ds(e) || cs(e, t) || to(e, t) || fs();
}
function fs() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function to(e, t) {
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
function cs(e, t) {
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
function ds(e) {
  if (Array.isArray(e))
    return e;
}
function hs(e, t) {
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
var fe = /* @__PURE__ */ function() {
  function e() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.polyfill;
    hs(this, e), typeof t == "string" && (t = [t]), this.locale = Ea(t.concat(e.getDefaultLocale()), Le), typeof Intl < "u" && Intl.NumberFormat && (this.numberFormat = new Intl.NumberFormat(this.locale)), n === !1 ? (this.IntlRelativeTimeFormat = Intl.RelativeTimeFormat, this.IntlPluralRules = Intl.PluralRules) : (this.IntlRelativeTimeFormat = ge, this.IntlPluralRules = ge.PluralRules), this.relativeTimeFormatCache = new $r(), this.pluralRulesCache = new $r();
  }
  return ms(e, [{
    key: "format",
    value: function(r, n, i) {
      i || (n && !bs(n) ? (i = n, n = void 0) : i = {}), n || (n = It), typeof n == "string" && (n = ss(n));
      var s = ps(r), f = this.getLabels(n.flavour || n.labels), l = f.labels, g = f.labelsType, p;
      n.now !== void 0 && (p = n.now), p === void 0 && i.now !== void 0 && (p = i.now), p === void 0 && (p = Date.now());
      var I = (p - s) / 1e3, y = i.future || I < 0, S = vs(l, Le(this.locale).now, Le(this.locale).long, y);
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
      var T = gs(
        // Controlling `style.steps` through `style.units` seems to be deprecated:
        // create a new custom `style` instead.
        n.units,
        l,
        S
      ), E = i.round || n.round, N = Ra(
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
      ), K = ls(N, 3), U = K[0], oe = K[1], te = K[2], $ = this.formatDateForStep(s, oe, I, {
        labels: l,
        labelsType: g,
        nowLabel: S,
        now: p,
        future: y,
        round: E
      }) || "";
      if (i.getTimeToNextUpdate) {
        var j = Ua(s, oe, {
          nextStep: te,
          prevStep: U,
          now: p,
          future: y,
          round: E
        });
        return [$, j];
      }
      return $;
    }
  }, {
    key: "formatDateForStep",
    value: function(r, n, i, s) {
      var f = this, l = s.labels, g = s.labelsType, p = s.nowLabel, I = s.now, y = s.future, S = s.round;
      if (n) {
        if (n.format)
          return n.format(r, this.locale, {
            formatAs: function(K, U) {
              return f.formatValue(U, K, {
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
        var T = Math.abs(i) / Kn(n);
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
      for (var n = Le(this.locale), i = us(r), s; !(s = i()).done; ) {
        var f = s.value;
        if (n[f])
          return {
            labelsType: f,
            labels: n[f]
          };
      }
    }
  }]), e;
}(), ro = "en";
fe.getDefaultLocale = function() {
  return ro;
};
fe.setDefaultLocale = function(e) {
  return ro = e;
};
fe.addDefaultLocale = function(e) {
  if (Kr)
    return console.error("[javascript-time-ago] `TimeAgo.addDefaultLocale()` can only be called once. To add other locales, use `TimeAgo.addLocale()`.");
  Kr = !0, fe.setDefaultLocale(e.locale), fe.addLocale(e);
};
var Kr;
fe.addLocale = function(e) {
  Qn(e), ge.addLocale(e);
};
fe.locale = fe.addLocale;
fe.addLabels = function(e, t, r) {
  var n = Le(e);
  n || (Qn({
    locale: e
  }), n = Le(e)), n[t] = r;
};
function ps(e) {
  if (e.constructor === Date || ys(e))
    return e.getTime();
  if (typeof e == "number")
    return e;
  throw new Error("Unsupported relative time formatter input: ".concat(rt(e), ", ").concat(e));
}
function ys(e) {
  return rt(e) === "object" && typeof e.getTime == "function";
}
function gs(e, t, r) {
  var n = Object.keys(t);
  return r && n.push("now"), e && (n = e.filter(function(i) {
    return i === "now" || n.indexOf(i) >= 0;
  })), n;
}
function vs(e, t, r, n) {
  var i = e.now || t && t.now;
  if (i)
    return typeof i == "string" ? i : n ? i.future : i.past;
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
fe.addLocale(ws);
const _s = new fe("en-US"), Vr = (e) => _s.format(new Date(e)), Ss = Ri(Vr, (e) => {
  const t = setInterval(() => e(Vr), 1e3);
  return () => clearInterval(t);
});
function Os(e) {
  ui(e, "svelte-xllbll", `.svelte-xllbll,.svelte-xllbll::before,.svelte-xllbll::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}.svelte-xllbll::before,.svelte-xllbll::after{--tw-content:''}:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}button.svelte-xllbll,input.svelte-xllbll{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button.svelte-xllbll{text-transform:none}button.svelte-xllbll{-webkit-appearance:button;background-color:transparent;background-image:none}.svelte-xllbll:-moz-focusring{outline:auto}.svelte-xllbll:-moz-ui-invalid{box-shadow:none}.svelte-xllbll::-webkit-inner-spin-button,.svelte-xllbll::-webkit-outer-spin-button{height:auto}.svelte-xllbll::-webkit-search-decoration{-webkit-appearance:none}.svelte-xllbll::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}input.svelte-xllbll::-moz-placeholder{opacity:1;color:#9ca3af}input.svelte-xllbll::placeholder{opacity:1;color:#9ca3af}button.svelte-xllbll{cursor:pointer}.svelte-xllbll:disabled{cursor:default}.svelte-xllbll,.svelte-xllbll::before,.svelte-xllbll::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position:  ;--tw-gradient-via-position:  ;--tw-gradient-to-position:  ;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.svelte-xllbll::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position:  ;--tw-gradient-via-position:  ;--tw-gradient-to-position:  ;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.absolute.svelte-xllbll{position:absolute}.bottom-2.svelte-xllbll{bottom:0.5rem}.right-2.svelte-xllbll{right:0.5rem}.my-2.svelte-xllbll{margin-top:0.5rem;margin-bottom:0.5rem}.mb-2.svelte-xllbll{margin-bottom:0.5rem}.mb-4.svelte-xllbll{margin-bottom:1rem}.mt-2.svelte-xllbll{margin-top:0.5rem}.block.svelte-xllbll{display:block}.flex.svelte-xllbll{display:flex}.hidden.svelte-xllbll{display:none}.w-3\\/4.svelte-xllbll{width:75%}.w-full.svelte-xllbll{width:100%}.flex-row.svelte-xllbll{flex-direction:row}.flex-col.svelte-xllbll{flex-direction:column}.items-baseline.svelte-xllbll{align-items:baseline}.items-stretch.svelte-xllbll{align-items:stretch}.justify-between.svelte-xllbll{justify-content:space-between}.place-self-start.svelte-xllbll{place-self:start}.place-self-end.svelte-xllbll{place-self:end}.rounded-lg.svelte-xllbll{border-radius:0.5rem}.rounded-md.svelte-xllbll{border-radius:0.375rem}.bg-lime-200.svelte-xllbll{--tw-bg-opacity:1;background-color:rgb(217 249 157 / var(--tw-bg-opacity))}.bg-sky-200.svelte-xllbll{--tw-bg-opacity:1;background-color:rgb(186 230 253 / var(--tw-bg-opacity))}.bg-violet-600.svelte-xllbll{--tw-bg-opacity:1;background-color:rgb(124 58 237 / var(--tw-bg-opacity))}.bg-white.svelte-xllbll{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.px-1.svelte-xllbll{padding-left:0.25rem;padding-right:0.25rem}.px-2.svelte-xllbll{padding-left:0.5rem;padding-right:0.5rem}.px-4.svelte-xllbll{padding-left:1rem;padding-right:1rem}.py-1.svelte-xllbll{padding-top:0.25rem;padding-bottom:0.25rem}.py-2.svelte-xllbll{padding-top:0.5rem;padding-bottom:0.5rem}.text-justify.svelte-xllbll{text-align:justify}.text-base.svelte-xllbll{font-size:1rem;line-height:1.5rem}.text-lg.svelte-xllbll{font-size:1.125rem;line-height:1.75rem}.text-sm.svelte-xllbll{font-size:0.875rem;line-height:1.25rem}.text-xl.svelte-xllbll{font-size:1.25rem;line-height:1.75rem}.font-bold.svelte-xllbll{font-weight:700}.text-white.svelte-xllbll{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}`);
}
function Xr(e, t, r) {
  const n = e.slice();
  return n[12] = t[r], n;
}
function xs(e) {
  let t;
  return {
    c() {
      t = X("div"), t.textContent = "The AI server is currently unreachable", M(t, "class", "text-lg svelte-xllbll");
    },
    m(r, n) {
      re(r, t, n);
    },
    p: le,
    d(r) {
      r && ee(t);
    }
  };
}
function $s(e) {
  let t, r, n, i, s, f, l, g, p, I, y = ur(
    /*chat*/
    e[2]._.messages
  ), S = [];
  for (let A = 0; A < y.length; A += 1)
    S[A] = Jr(Xr(e, y, A));
  return {
    c() {
      for (let A = 0; A < S.length; A += 1)
        S[A].c();
      t = ue(), r = X("form"), n = X("input"), s = ue(), f = X("div"), f.textContent = "The assistant makes mistakes, always check important information", l = ue(), g = X("div"), g.textContent = "Also, the assistant cannot read the documentation yet", n.disabled = i = /*status*/
      e[0] && /*$status*/
      e[5].slug == "running", M(n, "class", "w-full px-2 py-1 text-lg rounded-lg svelte-xllbll"), M(n, "type", "text"), M(n, "placeholder", "What do you want help with?"), M(r, "action", "#"), M(r, "class", "my-2 svelte-xllbll"), M(f, "class", "mt-2 text-sm svelte-xllbll"), M(g, "class", "text-sm svelte-xllbll");
    },
    m(A, T) {
      for (let E = 0; E < S.length; E += 1)
        S[E] && S[E].m(A, T);
      re(A, t, T), re(A, r, T), W(r, n), ir(
        n,
        /*text*/
        e[3]
      ), re(A, s, T), re(A, f, T), re(A, l, T), re(A, g, T), p || (I = [
        Je(
          n,
          "input",
          /*input_input_handler*/
          e[10]
        ),
        Je(r, "submit", hi(
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
          const N = Xr(A, y, E);
          S[E] ? S[E].p(N, T) : (S[E] = Jr(N), S[E].c(), S[E].m(t.parentNode, t));
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
      A && (ee(t), ee(r), ee(s), ee(f), ee(l), ee(g)), ci(S, A), p = !1, Ne(I);
    }
  };
}
function Gr(e) {
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
  function S(E, N) {
    return (
      /*message*/
      E[12].role == "user" ? Es : As
    );
  }
  let A = S(e), T = A(e);
  return {
    c() {
      t = X("div"), r = X("div"), n = X("span"), T.c(), i = ue(), s = X("span"), l = ye(f), g = ue(), p = X("div"), y = ye(I), M(n, "class", "font-bold svelte-xllbll"), M(s, "class", "text-grey-500 text-sm svelte-xllbll"), M(r, "class", "mb-2 flex flex-row justify-between items-baseline svelte-xllbll"), M(p, "class", "svelte-xllbll"), M(t, "class", "rounded-md py-2 px-4 text-justify text-base block w-3/4 my-2 svelte-xllbll"), se(
        t,
        "bg-sky-200",
        /*message*/
        e[12].role == "user"
      ), se(
        t,
        "place-self-end",
        /*message*/
        e[12].role == "user"
      ), se(
        t,
        "bg-lime-200",
        /*message*/
        e[12].role == "assistant"
      ), se(
        t,
        "place-self-start",
        /*message*/
        e[12].role == "assistant"
      );
    },
    m(E, N) {
      re(E, t, N), W(t, r), W(r, n), T.m(n, null), W(r, i), W(r, s), W(s, l), W(t, g), W(t, p), W(p, y);
    },
    p(E, N) {
      A !== (A = S(E)) && (T.d(1), T = A(E), T && (T.c(), T.m(n, null))), N & /*$timeAgo, chat*/
      68 && f !== (f = /*$timeAgo*/
      E[6](
        /*message*/
        E[12].timestamp
      ) + "") && Qe(l, f), N & /*chat*/
      4 && I !== (I = /*message*/
      E[12].content + "") && Qe(y, I), N & /*chat*/
      4 && se(
        t,
        "bg-sky-200",
        /*message*/
        E[12].role == "user"
      ), N & /*chat*/
      4 && se(
        t,
        "place-self-end",
        /*message*/
        E[12].role == "user"
      ), N & /*chat*/
      4 && se(
        t,
        "bg-lime-200",
        /*message*/
        E[12].role == "assistant"
      ), N & /*chat*/
      4 && se(
        t,
        "place-self-start",
        /*message*/
        E[12].role == "assistant"
      );
    },
    d(E) {
      E && ee(t), T.d();
    }
  };
}
function As(e) {
  let t;
  return {
    c() {
      t = ye("Assistant");
    },
    m(r, n) {
      re(r, t, n);
    },
    d(r) {
      r && ee(t);
    }
  };
}
function Es(e) {
  let t;
  return {
    c() {
      t = ye("You");
    },
    m(r, n) {
      re(r, t, n);
    },
    d(r) {
      r && ee(t);
    }
  };
}
function Jr(e) {
  let t, r = (
    /*message*/
    e[12].role != "system" && Gr(e)
  );
  return {
    c() {
      r && r.c(), t = di();
    },
    m(n, i) {
      r && r.m(n, i), re(n, t, i);
    },
    p(n, i) {
      /*message*/
      n[12].role != "system" ? r ? r.p(n, i) : (r = Gr(n), r.c(), r.m(t.parentNode, t)) : r && (r.d(1), r = null);
    },
    d(n) {
      n && ee(t), r && r.d(n);
    }
  };
}
function Is(e) {
  let t, r, n, i, s, f, l = (
    /*status*/
    (e[0] ? (
      /*$status*/
      e[5].icon
    ) : "") + ""
  ), g, p, I, y, S, A, T, E, N, K, U, oe = (
    /*status*/
    (e[0] ? (
      /*$status*/
      e[5].icon
    ) : "") + ""
  ), te, $, j, R, b, k, D, B;
  function F(z, Z) {
    return (
      /*model*/
      z[1] && /*chat*/
      z[2] ? $s : xs
    );
  }
  let q = F(e), Q = q(e);
  return {
    c() {
      t = X("button"), r = X("span"), r.textContent = "✨", n = ue(), i = X("span"), i.textContent = "Need Help?", s = ue(), f = X("span"), g = ye(l), I = ue(), y = X("content"), S = X("div"), A = X("div"), T = ue(), E = X("div"), N = X("span"), N.textContent = "✨ HPC Assistant", K = ue(), U = X("span"), te = ye(oe), j = ue(), R = X("div"), b = X("button"), b.textContent = "✖", k = ue(), Q.c(), M(r, "title", "Try our AI Assistant"), M(r, "class", "svelte-xllbll"), M(i, "class", "px-1 svelte-xllbll"), M(f, "title", p = /*status*/
      e[0] ? (
        /*$status*/
        e[5].description
      ) : ""), M(f, "class", "svelte-xllbll"), M(t, "class", "absolute bottom-2 right-2 py-2 px-4 bg-violet-600 font-bold text-lg text-white rounded-lg svelte-xllbll"), se(
        t,
        "hidden",
        /*chatBotOpen*/
        e[4]
      ), M(A, "class", "svelte-xllbll"), M(N, "class", "svelte-xllbll"), M(U, "title", $ = /*status*/
      e[0] ? (
        /*$status*/
        e[5].description
      ) : ""), M(U, "class", "svelte-xllbll"), M(E, "class", "svelte-xllbll"), M(b, "title", "Minify the assistant"), M(b, "class", "svelte-xllbll"), M(R, "class", "svelte-xllbll"), M(S, "class", "mb-4 font-bold text-xl flex flex-row items-stretch justify-between svelte-xllbll"), M(y, "class", "absolute bottom-2 right-2 py-2 px-4 bg-white text-base rounded-md flex flex-col items-stretch svelte-xllbll"), se(y, "hidden", !/*chatBotOpen*/
      e[4]);
    },
    m(z, Z) {
      re(z, t, Z), W(t, r), W(t, n), W(t, i), W(t, s), W(t, f), W(f, g), re(z, I, Z), re(z, y, Z), W(y, S), W(S, A), W(S, T), W(S, E), W(E, N), W(E, K), W(E, U), W(U, te), W(S, j), W(S, R), W(R, b), W(y, k), Q.m(y, null), D || (B = [
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
      ], D = !0);
    },
    p(z, [Z]) {
      Z & /*status, $status*/
      33 && l !== (l = /*status*/
      (z[0] ? (
        /*$status*/
        z[5].icon
      ) : "") + "") && Qe(g, l), Z & /*status, $status*/
      33 && p !== (p = /*status*/
      z[0] ? (
        /*$status*/
        z[5].description
      ) : "") && M(f, "title", p), Z & /*chatBotOpen*/
      16 && se(
        t,
        "hidden",
        /*chatBotOpen*/
        z[4]
      ), Z & /*status, $status*/
      33 && oe !== (oe = /*status*/
      (z[0] ? (
        /*$status*/
        z[5].icon
      ) : "") + "") && Qe(te, oe), Z & /*status, $status*/
      33 && $ !== ($ = /*status*/
      z[0] ? (
        /*$status*/
        z[5].description
      ) : "") && M(U, "title", $), q === (q = F(z)) && Q ? Q.p(z, Z) : (Q.d(1), Q = q(z), Q && (Q.c(), Q.m(y, null))), Z & /*chatBotOpen*/
      16 && se(y, "hidden", !/*chatBotOpen*/
      z[4]);
    },
    i: le,
    o: le,
    d(z) {
      z && (ee(t), ee(I), ee(y)), Q.d(), D = !1, Ne(B);
    }
  };
}
function Ts(e, t, r) {
  let n, i = le, s = () => (i(), i = Pt(g, (K) => r(5, n = K)), g), f;
  si(e, Ss, (K) => r(6, f = K)), e.$$.on_destroy.push(() => i());
  let l, g, p, I;
  gi(async () => {
    const K = `${window.location.protocol}//${window.location.hostname}:${window.location.port}`;
    l = new Di(K), s(r(0, g = l.status)), r(1, p = await l.getBestModel(dr.modelList)), p && (await l.preloadModel(p), r(2, I = new Zi(() => r(2, I), l)), I.addMessage(dr.systemPrompt));
  });
  let y, S = !1;
  async function A() {
    I.addMessage({ role: "user", content: y }), r(3, y = ""), await I.complete(p);
  }
  const T = () => r(4, S = !0), E = () => r(4, S = !1);
  function N() {
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
    N
  ];
}
class Ls extends Ti {
  constructor(t) {
    super(), Ei(this, t, Ts, Is, en, {}, Os);
  }
}
customElements.define("hpc-chatbot", Ii(Ls, {}, [], [], !0));
export {
  Ls as ChatBot
};
//# sourceMappingURL=components.js.map
