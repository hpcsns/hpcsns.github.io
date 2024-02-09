var Lr = Object.defineProperty;
var Br = (e, n, o) => n in e ? Lr(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o;
var K = (e, n, o) => (Br(e, typeof n != "symbol" ? n + "" : n, o), o);
function Q() {
}
function Pt(e) {
  return e();
}
function Et() {
  return /* @__PURE__ */ Object.create(null);
}
function Te(e) {
  e.forEach(Pt);
}
function Ut(e) {
  return typeof e == "function";
}
function Mt(e, n) {
  return e != e ? n == n : e !== n || e && typeof e == "object" || typeof e == "function";
}
function Or(e) {
  return Object.keys(e).length === 0;
}
function Ht(e, ...n) {
  if (e == null) {
    for (const c of n)
      c(void 0);
    return Q;
  }
  const o = e.subscribe(...n);
  return o.unsubscribe ? () => o.unsubscribe() : o;
}
function Tr(e) {
  let n;
  return Ht(e, (o) => n = o)(), n;
}
function J(e, n) {
  e.appendChild(n);
}
function xr(e, n, o) {
  const c = Rr(e);
  if (!c.getElementById(n)) {
    const f = ne("style");
    f.id = n, f.textContent = o, Nr(c, f);
  }
}
function Rr(e) {
  if (!e)
    return document;
  const n = e.getRootNode ? e.getRootNode() : e.ownerDocument;
  return n && /** @type {ShadowRoot} */
  n.host ? (
    /** @type {ShadowRoot} */
    n
  ) : e.ownerDocument;
}
function Nr(e, n) {
  return J(
    /** @type {Document} */
    e.head || e,
    n
  ), n.sheet;
}
function se(e, n, o) {
  e.insertBefore(n, o || null);
}
function te(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function Cr(e, n) {
  for (let o = 0; o < e.length; o += 1)
    e[o] && e[o].d(n);
}
function ne(e) {
  return document.createElement(e);
}
function _e(e) {
  return document.createTextNode(e);
}
function Pe() {
  return _e(" ");
}
function Dr() {
  return _e("");
}
function It(e, n, o, c) {
  return e.addEventListener(n, o, c), () => e.removeEventListener(n, o, c);
}
function kr(e) {
  return function(n) {
    return n.preventDefault(), e.call(this, n);
  };
}
function G(e, n, o) {
  o == null ? e.removeAttribute(n) : e.getAttribute(n) !== o && e.setAttribute(n, o);
}
function Pr(e) {
  return Array.from(e.childNodes);
}
function Ge(e, n) {
  n = "" + n, e.data !== n && (e.data = /** @type {string} */
  n);
}
function At(e, n) {
  e.value = n ?? "";
}
function Ur(e) {
  const n = {};
  return e.childNodes.forEach(
    /** @param {Element} node */
    (o) => {
      n[o.slot || "default"] = !0;
    }
  ), n;
}
let Be;
function Ie(e) {
  Be = e;
}
function Mr() {
  if (!Be)
    throw new Error("Function called outside component initialization");
  return Be;
}
function Hr(e) {
  Mr().$$.on_mount.push(e);
}
const me = [], Lt = [];
let ye = [];
const Bt = [], jr = /* @__PURE__ */ Promise.resolve();
let Je = !1;
function Fr() {
  Je || (Je = !0, jr.then(jt));
}
function Qe(e) {
  ye.push(e);
}
const Xe = /* @__PURE__ */ new Set();
let he = 0;
function jt() {
  if (he !== 0)
    return;
  const e = Be;
  do {
    try {
      for (; he < me.length; ) {
        const n = me[he];
        he++, Ie(n), zr(n.$$);
      }
    } catch (n) {
      throw me.length = 0, he = 0, n;
    }
    for (Ie(null), me.length = 0, he = 0; Lt.length; )
      Lt.pop()();
    for (let n = 0; n < ye.length; n += 1) {
      const o = ye[n];
      Xe.has(o) || (Xe.add(o), o());
    }
    ye.length = 0;
  } while (me.length);
  for (; Bt.length; )
    Bt.pop()();
  Je = !1, Xe.clear(), Ie(e);
}
function zr(e) {
  if (e.fragment !== null) {
    e.update(), Te(e.before_update);
    const n = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, n), e.after_update.forEach(Qe);
  }
}
function qr(e) {
  const n = [], o = [];
  ye.forEach((c) => e.indexOf(c) === -1 ? n.push(c) : o.push(c)), o.forEach((c) => c()), ye = n;
}
const Wr = /* @__PURE__ */ new Set();
function Yr(e, n) {
  e && e.i && (Wr.delete(e), e.i(n));
}
function Ot(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function Vr(e, n, o) {
  const { fragment: c, after_update: f } = e.$$;
  c && c.m(n, o), Qe(() => {
    const h = e.$$.on_mount.map(Pt).filter(Ut);
    e.$$.on_destroy ? e.$$.on_destroy.push(...h) : Te(h), e.$$.on_mount = [];
  }), f.forEach(Qe);
}
function Kr(e, n) {
  const o = e.$$;
  o.fragment !== null && (qr(o.after_update), Te(o.on_destroy), o.fragment && o.fragment.d(n), o.on_destroy = o.fragment = null, o.ctx = []);
}
function Xr(e, n) {
  e.$$.dirty[0] === -1 && (me.push(e), Fr(), e.$$.dirty.fill(0)), e.$$.dirty[n / 31 | 0] |= 1 << n % 31;
}
function Gr(e, n, o, c, f, h, v = null, g = [-1]) {
  const E = Be;
  Ie(e);
  const y = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: h,
    update: Q,
    not_equal: f,
    bound: Et(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(n.context || (E ? E.$$.context : [])),
    // everything else
    callbacks: Et(),
    dirty: g,
    skip_bound: !1,
    root: n.target || E.$$.root
  };
  v && v(y.root);
  let I = !1;
  if (y.ctx = o ? o(e, n.props || {}, (l, S, ...B) => {
    const D = B.length ? B[0] : S;
    return y.ctx && f(y.ctx[l], y.ctx[l] = D) && (!y.skip_bound && y.bound[l] && y.bound[l](D), I && Xr(e, l)), S;
  }) : [], y.update(), I = !0, Te(y.before_update), y.fragment = c ? c(y.ctx) : !1, n.target) {
    if (n.hydrate) {
      const l = Pr(n.target);
      y.fragment && y.fragment.l(l), l.forEach(te);
    } else
      y.fragment && y.fragment.c();
    n.intro && Yr(e.$$.fragment), Vr(e, n.target, n.anchor), jt();
  }
  Ie(E);
}
let Ft;
typeof HTMLElement == "function" && (Ft = class extends HTMLElement {
  constructor(n, o, c) {
    super();
    /** The Svelte component constructor */
    K(this, "$$ctor");
    /** Slots */
    K(this, "$$s");
    /** The Svelte component instance */
    K(this, "$$c");
    /** Whether or not the custom element is connected */
    K(this, "$$cn", !1);
    /** Component props data */
    K(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    K(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    K(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    K(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    K(this, "$$l_u", /* @__PURE__ */ new Map());
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
      let n = function(h) {
        return () => {
          let v;
          return {
            c: function() {
              v = ne("slot"), h !== "default" && G(v, "name", h);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(y, I) {
              se(y, v, I);
            },
            d: function(y) {
              y && te(v);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn)
        return;
      const o = {}, c = Ur(this);
      for (const h of this.$$s)
        h in c && (o[h] = [n(h)]);
      for (const h of this.attributes) {
        const v = this.$$g_p(h.name);
        v in this.$$d || (this.$$d[v] = ke(v, h.value, this.$$p_d, "toProp"));
      }
      for (const h in this.$$p_d)
        !(h in this.$$d) && this[h] !== void 0 && (this.$$d[h] = this[h], delete this[h]);
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
        for (const h in this.$$p_d)
          if (this.$$d[h] = this.$$c.$$.ctx[this.$$c.$$.props[h]], this.$$p_d[h].reflect) {
            const v = ke(
              h,
              this.$$d[h],
              this.$$p_d,
              "toAttribute"
            );
            v == null ? this.removeAttribute(this.$$p_d[h].attribute || h) : this.setAttribute(this.$$p_d[h].attribute || h, v);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(f), f();
      for (const h in this.$$l)
        for (const v of this.$$l[h]) {
          const g = this.$$c.$on(h, v);
          this.$$l_u.set(v, g);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(n, o, c) {
    var f;
    this.$$r || (n = this.$$g_p(n), this.$$d[n] = ke(n, c, this.$$p_d, "toProp"), (f = this.$$c) == null || f.$set({ [n]: this.$$d[n] }));
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
function ke(e, n, o, c) {
  var h;
  const f = (h = o[e]) == null ? void 0 : h.type;
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
function Jr(e, n, o, c, f, h) {
  let v = class extends Ft {
    constructor() {
      super(e, o, f), this.$$p_d = n;
    }
    static get observedAttributes() {
      return Object.keys(n).map(
        (g) => (n[g].attribute || g).toLowerCase()
      );
    }
  };
  return Object.keys(n).forEach((g) => {
    Object.defineProperty(v.prototype, g, {
      get() {
        return this.$$c && g in this.$$c ? this.$$c[g] : this.$$d[g];
      },
      set(E) {
        var y;
        E = ke(g, E, n), this.$$d[g] = E, (y = this.$$c) == null || y.$set({ [g]: E });
      }
    });
  }), c.forEach((g) => {
    Object.defineProperty(v.prototype, g, {
      get() {
        var E;
        return (E = this.$$c) == null ? void 0 : E[g];
      }
    });
  }), h && (v = h(v)), e.element = /** @type {any} */
  v, v;
}
class Qr {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    K(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    K(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Kr(this, 1), this.$destroy = Q;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(n, o) {
    if (!Ut(o))
      return Q;
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
    this.$$set && !Or(n) && (this.$$.skip_bound = !0, this.$$set(n), this.$$.skip_bound = !1);
  }
}
const Zr = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Zr);
var ge = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function eo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Ce(e) {
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
    return function o(c, f, h) {
      function v(y, I) {
        if (!f[y]) {
          if (!c[y]) {
            var l = typeof Ce == "function" && Ce;
            if (!I && l)
              return l(y, !0);
            if (g)
              return g(y, !0);
            var S = new Error("Cannot find module '" + y + "'");
            throw S.code = "MODULE_NOT_FOUND", S;
          }
          var B = f[y] = { exports: {} };
          c[y][0].call(B.exports, function(D) {
            var W = c[y][1][D];
            return v(W || D);
          }, B, B.exports, o, c, f, h);
        }
        return f[y].exports;
      }
      for (var g = typeof Ce == "function" && Ce, E = 0; E < h.length; E++)
        v(h[E]);
      return v;
    }({ 1: [function(o, c, f) {
      (function(h) {
        var v = h.MutationObserver || h.WebKitMutationObserver, g;
        if (v) {
          var E = 0, y = new v(D), I = h.document.createTextNode("");
          y.observe(I, {
            characterData: !0
          }), g = function() {
            I.data = E = ++E % 2;
          };
        } else if (!h.setImmediate && typeof h.MessageChannel < "u") {
          var l = new h.MessageChannel();
          l.port1.onmessage = D, g = function() {
            l.port2.postMessage(0);
          };
        } else
          "document" in h && "onreadystatechange" in h.document.createElement("script") ? g = function() {
            var H = h.document.createElement("script");
            H.onreadystatechange = function() {
              D(), H.onreadystatechange = null, H.parentNode.removeChild(H), H = null;
            }, h.document.documentElement.appendChild(H);
          } : g = function() {
            setTimeout(D, 0);
          };
        var S, B = [];
        function D() {
          S = !0;
          for (var H, X, z = B.length; z; ) {
            for (X = B, B = [], H = -1; ++H < z; )
              X[H]();
            z = B.length;
          }
          S = !1;
        }
        c.exports = W;
        function W(H) {
          B.push(H) === 1 && !S && g();
        }
      }).call(this, typeof ge < "u" ? ge : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 2: [function(o, c, f) {
      var h = o(1);
      function v() {
      }
      var g = {}, E = ["REJECTED"], y = ["FULFILLED"], I = ["PENDING"];
      c.exports = l;
      function l($) {
        if (typeof $ != "function")
          throw new TypeError("resolver must be a function");
        this.state = I, this.queue = [], this.outcome = void 0, $ !== v && W(this, $);
      }
      l.prototype.catch = function($) {
        return this.then(null, $);
      }, l.prototype.then = function($, C) {
        if (typeof $ != "function" && this.state === y || typeof C != "function" && this.state === E)
          return this;
        var T = new this.constructor(v);
        if (this.state !== I) {
          var p = this.state === y ? $ : C;
          B(T, p, this.outcome);
        } else
          this.queue.push(new S(T, $, C));
        return T;
      };
      function S($, C, T) {
        this.promise = $, typeof C == "function" && (this.onFulfilled = C, this.callFulfilled = this.otherCallFulfilled), typeof T == "function" && (this.onRejected = T, this.callRejected = this.otherCallRejected);
      }
      S.prototype.callFulfilled = function($) {
        g.resolve(this.promise, $);
      }, S.prototype.otherCallFulfilled = function($) {
        B(this.promise, this.onFulfilled, $);
      }, S.prototype.callRejected = function($) {
        g.reject(this.promise, $);
      }, S.prototype.otherCallRejected = function($) {
        B(this.promise, this.onRejected, $);
      };
      function B($, C, T) {
        h(function() {
          var p;
          try {
            p = C(T);
          } catch (L) {
            return g.reject($, L);
          }
          p === $ ? g.reject($, new TypeError("Cannot resolve promise with itself")) : g.resolve($, p);
        });
      }
      g.resolve = function($, C) {
        var T = H(D, C);
        if (T.status === "error")
          return g.reject($, T.value);
        var p = T.value;
        if (p)
          W($, p);
        else {
          $.state = y, $.outcome = C;
          for (var L = -1, N = $.queue.length; ++L < N; )
            $.queue[L].callFulfilled(C);
        }
        return $;
      }, g.reject = function($, C) {
        $.state = E, $.outcome = C;
        for (var T = -1, p = $.queue.length; ++T < p; )
          $.queue[T].callRejected(C);
        return $;
      };
      function D($) {
        var C = $ && $.then;
        if ($ && (typeof $ == "object" || typeof $ == "function") && typeof C == "function")
          return function() {
            C.apply($, arguments);
          };
      }
      function W($, C) {
        var T = !1;
        function p(k) {
          T || (T = !0, g.reject($, k));
        }
        function L(k) {
          T || (T = !0, g.resolve($, k));
        }
        function N() {
          C(L, p);
        }
        var R = H(N);
        R.status === "error" && p(R.value);
      }
      function H($, C) {
        var T = {};
        try {
          T.value = $(C), T.status = "success";
        } catch (p) {
          T.status = "error", T.value = p;
        }
        return T;
      }
      l.resolve = X;
      function X($) {
        return $ instanceof this ? $ : g.resolve(new this(v), $);
      }
      l.reject = z;
      function z($) {
        var C = new this(v);
        return g.reject(C, $);
      }
      l.all = be;
      function be($) {
        var C = this;
        if (Object.prototype.toString.call($) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var T = $.length, p = !1;
        if (!T)
          return this.resolve([]);
        for (var L = new Array(T), N = 0, R = -1, k = new this(v); ++R < T; )
          j($[R], R);
        return k;
        function j(re, ce) {
          C.resolve(re).then(we, function(le) {
            p || (p = !0, g.reject(k, le));
          });
          function we(le) {
            L[ce] = le, ++N === T && !p && (p = !0, g.resolve(k, L));
          }
        }
      }
      l.race = Z;
      function Z($) {
        var C = this;
        if (Object.prototype.toString.call($) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var T = $.length, p = !1;
        if (!T)
          return this.resolve([]);
        for (var L = -1, N = new this(v); ++L < T; )
          R($[L]);
        return N;
        function R(k) {
          C.resolve(k).then(function(j) {
            p || (p = !0, g.resolve(N, j));
          }, function(j) {
            p || (p = !0, g.reject(N, j));
          });
        }
      }
    }, { 1: 1 }], 3: [function(o, c, f) {
      (function(h) {
        typeof h.Promise != "function" && (h.Promise = o(2));
      }).call(this, typeof ge < "u" ? ge : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, { 2: 2 }], 4: [function(o, c, f) {
      var h = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t;
      } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      };
      function v(t, i) {
        if (!(t instanceof i))
          throw new TypeError("Cannot call a class as a function");
      }
      function g() {
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
      var E = g();
      function y() {
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
      function I(t, i) {
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
      var l = Promise;
      function S(t, i) {
        i && t.then(function(r) {
          i(null, r);
        }, function(r) {
          i(r);
        });
      }
      function B(t, i, r) {
        typeof i == "function" && t.then(i), typeof r == "function" && t.catch(r);
      }
      function D(t) {
        return typeof t != "string" && (console.warn(t + " used as a key, but it is not a string."), t = String(t)), t;
      }
      function W() {
        if (arguments.length && typeof arguments[arguments.length - 1] == "function")
          return arguments[arguments.length - 1];
      }
      var H = "local-forage-detect-blob-support", X = void 0, z = {}, be = Object.prototype.toString, Z = "readonly", $ = "readwrite";
      function C(t) {
        for (var i = t.length, r = new ArrayBuffer(i), a = new Uint8Array(r), u = 0; u < i; u++)
          a[u] = t.charCodeAt(u);
        return r;
      }
      function T(t) {
        return new l(function(i) {
          var r = t.transaction(H, $), a = I([""]);
          r.objectStore(H).put(a, "key"), r.onabort = function(u) {
            u.preventDefault(), u.stopPropagation(), i(!1);
          }, r.oncomplete = function() {
            var u = navigator.userAgent.match(/Chrome\/(\d+)/), s = navigator.userAgent.match(/Edge\//);
            i(s || !u || parseInt(u[1], 10) >= 43);
          };
        }).catch(function() {
          return !1;
        });
      }
      function p(t) {
        return typeof X == "boolean" ? l.resolve(X) : T(t).then(function(i) {
          return X = i, X;
        });
      }
      function L(t) {
        var i = z[t.name], r = {};
        r.promise = new l(function(a, u) {
          r.resolve = a, r.reject = u;
        }), i.deferredOperations.push(r), i.dbReady ? i.dbReady = i.dbReady.then(function() {
          return r.promise;
        }) : i.dbReady = r.promise;
      }
      function N(t) {
        var i = z[t.name], r = i.deferredOperations.pop();
        if (r)
          return r.resolve(), r.promise;
      }
      function R(t, i) {
        var r = z[t.name], a = r.deferredOperations.pop();
        if (a)
          return a.reject(i), a.promise;
      }
      function k(t, i) {
        return new l(function(r, a) {
          if (z[t.name] = z[t.name] || ot(), t.db)
            if (i)
              L(t), t.db.close();
            else
              return r(t.db);
          var u = [t.name];
          i && u.push(t.version);
          var s = E.open.apply(E, u);
          i && (s.onupgradeneeded = function(d) {
            var m = s.result;
            try {
              m.createObjectStore(t.storeName), d.oldVersion <= 1 && m.createObjectStore(H);
            } catch (_) {
              if (_.name === "ConstraintError")
                console.warn('The database "' + t.name + '" has been upgraded from version ' + d.oldVersion + " to version " + d.newVersion + ', but the storage "' + t.storeName + '" already exists.');
              else
                throw _;
            }
          }), s.onerror = function(d) {
            d.preventDefault(), a(s.error);
          }, s.onsuccess = function() {
            var d = s.result;
            d.onversionchange = function(m) {
              m.target.close();
            }, r(d), N(t);
          };
        });
      }
      function j(t) {
        return k(t, !1);
      }
      function re(t) {
        return k(t, !0);
      }
      function ce(t, i) {
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
      function we(t) {
        return new l(function(i, r) {
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
      function le(t) {
        var i = C(atob(t.data));
        return I([i], { type: t.type });
      }
      function rt(t) {
        return t && t.__local_forage_encoded_blob;
      }
      function Bn(t) {
        var i = this, r = i._initReady().then(function() {
          var a = z[i._dbInfo.name];
          if (a && a.dbReady)
            return a.dbReady;
        });
        return B(r, t, t), r;
      }
      function On(t) {
        L(t);
        for (var i = z[t.name], r = i.forages, a = 0; a < r.length; a++) {
          var u = r[a];
          u._dbInfo.db && (u._dbInfo.db.close(), u._dbInfo.db = null);
        }
        return t.db = null, j(t).then(function(s) {
          return t.db = s, ce(t) ? re(t) : s;
        }).then(function(s) {
          t.db = i.db = s;
          for (var d = 0; d < r.length; d++)
            r[d]._dbInfo.db = s;
        }).catch(function(s) {
          throw R(t, s), s;
        });
      }
      function ee(t, i, r, a) {
        a === void 0 && (a = 1);
        try {
          var u = t.db.transaction(t.storeName, i);
          r(null, u);
        } catch (s) {
          if (a > 0 && (!t.db || s.name === "InvalidStateError" || s.name === "NotFoundError"))
            return l.resolve().then(function() {
              if (!t.db || s.name === "NotFoundError" && !t.db.objectStoreNames.contains(t.storeName) && t.version <= t.db.version)
                return t.db && (t.version = t.db.version + 1), re(t);
            }).then(function() {
              return On(t).then(function() {
                ee(t, i, r, a - 1);
              });
            }).catch(r);
          r(s);
        }
      }
      function ot() {
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
      function Tn(t) {
        var i = this, r = {
          db: null
        };
        if (t)
          for (var a in t)
            r[a] = t[a];
        var u = z[r.name];
        u || (u = ot(), z[r.name] = u), u.forages.push(i), i._initReady || (i._initReady = i.ready, i.ready = Bn);
        var s = [];
        function d() {
          return l.resolve();
        }
        for (var m = 0; m < u.forages.length; m++) {
          var _ = u.forages[m];
          _ !== i && s.push(_._initReady().catch(d));
        }
        var b = u.forages.slice(0);
        return l.all(s).then(function() {
          return r.db = u.db, j(r);
        }).then(function(w) {
          return r.db = w, ce(r, i._defaultConfig.version) ? re(r) : w;
        }).then(function(w) {
          r.db = u.db = w, i._dbInfo = r;
          for (var A = 0; A < b.length; A++) {
            var x = b[A];
            x !== i && (x._dbInfo.db = r.db, x._dbInfo.version = r.version);
          }
        });
      }
      function xn(t, i) {
        var r = this;
        t = D(t);
        var a = new l(function(u, s) {
          r.ready().then(function() {
            ee(r._dbInfo, Z, function(d, m) {
              if (d)
                return s(d);
              try {
                var _ = m.objectStore(r._dbInfo.storeName), b = _.get(t);
                b.onsuccess = function() {
                  var w = b.result;
                  w === void 0 && (w = null), rt(w) && (w = le(w)), u(w);
                }, b.onerror = function() {
                  s(b.error);
                };
              } catch (w) {
                s(w);
              }
            });
          }).catch(s);
        });
        return S(a, i), a;
      }
      function Rn(t, i) {
        var r = this, a = new l(function(u, s) {
          r.ready().then(function() {
            ee(r._dbInfo, Z, function(d, m) {
              if (d)
                return s(d);
              try {
                var _ = m.objectStore(r._dbInfo.storeName), b = _.openCursor(), w = 1;
                b.onsuccess = function() {
                  var A = b.result;
                  if (A) {
                    var x = A.value;
                    rt(x) && (x = le(x));
                    var P = t(x, A.key, w++);
                    P !== void 0 ? u(P) : A.continue();
                  } else
                    u();
                }, b.onerror = function() {
                  s(b.error);
                };
              } catch (A) {
                s(A);
              }
            });
          }).catch(s);
        });
        return S(a, i), a;
      }
      function Nn(t, i, r) {
        var a = this;
        t = D(t);
        var u = new l(function(s, d) {
          var m;
          a.ready().then(function() {
            return m = a._dbInfo, be.call(i) === "[object Blob]" ? p(m.db).then(function(_) {
              return _ ? i : we(i);
            }) : i;
          }).then(function(_) {
            ee(a._dbInfo, $, function(b, w) {
              if (b)
                return d(b);
              try {
                var A = w.objectStore(a._dbInfo.storeName);
                _ === null && (_ = void 0);
                var x = A.put(_, t);
                w.oncomplete = function() {
                  _ === void 0 && (_ = null), s(_);
                }, w.onabort = w.onerror = function() {
                  var P = x.error ? x.error : x.transaction.error;
                  d(P);
                };
              } catch (P) {
                d(P);
              }
            });
          }).catch(d);
        });
        return S(u, r), u;
      }
      function Cn(t, i) {
        var r = this;
        t = D(t);
        var a = new l(function(u, s) {
          r.ready().then(function() {
            ee(r._dbInfo, $, function(d, m) {
              if (d)
                return s(d);
              try {
                var _ = m.objectStore(r._dbInfo.storeName), b = _.delete(t);
                m.oncomplete = function() {
                  u();
                }, m.onerror = function() {
                  s(b.error);
                }, m.onabort = function() {
                  var w = b.error ? b.error : b.transaction.error;
                  s(w);
                };
              } catch (w) {
                s(w);
              }
            });
          }).catch(s);
        });
        return S(a, i), a;
      }
      function Dn(t) {
        var i = this, r = new l(function(a, u) {
          i.ready().then(function() {
            ee(i._dbInfo, $, function(s, d) {
              if (s)
                return u(s);
              try {
                var m = d.objectStore(i._dbInfo.storeName), _ = m.clear();
                d.oncomplete = function() {
                  a();
                }, d.onabort = d.onerror = function() {
                  var b = _.error ? _.error : _.transaction.error;
                  u(b);
                };
              } catch (b) {
                u(b);
              }
            });
          }).catch(u);
        });
        return S(r, t), r;
      }
      function kn(t) {
        var i = this, r = new l(function(a, u) {
          i.ready().then(function() {
            ee(i._dbInfo, Z, function(s, d) {
              if (s)
                return u(s);
              try {
                var m = d.objectStore(i._dbInfo.storeName), _ = m.count();
                _.onsuccess = function() {
                  a(_.result);
                }, _.onerror = function() {
                  u(_.error);
                };
              } catch (b) {
                u(b);
              }
            });
          }).catch(u);
        });
        return S(r, t), r;
      }
      function Pn(t, i) {
        var r = this, a = new l(function(u, s) {
          if (t < 0) {
            u(null);
            return;
          }
          r.ready().then(function() {
            ee(r._dbInfo, Z, function(d, m) {
              if (d)
                return s(d);
              try {
                var _ = m.objectStore(r._dbInfo.storeName), b = !1, w = _.openKeyCursor();
                w.onsuccess = function() {
                  var A = w.result;
                  if (!A) {
                    u(null);
                    return;
                  }
                  t === 0 || b ? u(A.key) : (b = !0, A.advance(t));
                }, w.onerror = function() {
                  s(w.error);
                };
              } catch (A) {
                s(A);
              }
            });
          }).catch(s);
        });
        return S(a, i), a;
      }
      function Un(t) {
        var i = this, r = new l(function(a, u) {
          i.ready().then(function() {
            ee(i._dbInfo, Z, function(s, d) {
              if (s)
                return u(s);
              try {
                var m = d.objectStore(i._dbInfo.storeName), _ = m.openKeyCursor(), b = [];
                _.onsuccess = function() {
                  var w = _.result;
                  if (!w) {
                    a(b);
                    return;
                  }
                  b.push(w.key), w.continue();
                }, _.onerror = function() {
                  u(_.error);
                };
              } catch (w) {
                u(w);
              }
            });
          }).catch(u);
        });
        return S(r, t), r;
      }
      function Mn(t, i) {
        i = W.apply(this, arguments);
        var r = this.config();
        t = typeof t != "function" && t || {}, t.name || (t.name = t.name || r.name, t.storeName = t.storeName || r.storeName);
        var a = this, u;
        if (!t.name)
          u = l.reject("Invalid arguments");
        else {
          var s = t.name === r.name && a._dbInfo.db, d = s ? l.resolve(a._dbInfo.db) : j(t).then(function(m) {
            var _ = z[t.name], b = _.forages;
            _.db = m;
            for (var w = 0; w < b.length; w++)
              b[w]._dbInfo.db = m;
            return m;
          });
          t.storeName ? u = d.then(function(m) {
            if (m.objectStoreNames.contains(t.storeName)) {
              var _ = m.version + 1;
              L(t);
              var b = z[t.name], w = b.forages;
              m.close();
              for (var A = 0; A < w.length; A++) {
                var x = w[A];
                x._dbInfo.db = null, x._dbInfo.version = _;
              }
              var P = new l(function(U, q) {
                var F = E.open(t.name, _);
                F.onerror = function(V) {
                  var Se = F.result;
                  Se.close(), q(V);
                }, F.onupgradeneeded = function() {
                  var V = F.result;
                  V.deleteObjectStore(t.storeName);
                }, F.onsuccess = function() {
                  var V = F.result;
                  V.close(), U(V);
                };
              });
              return P.then(function(U) {
                b.db = U;
                for (var q = 0; q < w.length; q++) {
                  var F = w[q];
                  F._dbInfo.db = U, N(F._dbInfo);
                }
              }).catch(function(U) {
                throw (R(t, U) || l.resolve()).catch(function() {
                }), U;
              });
            }
          }) : u = d.then(function(m) {
            L(t);
            var _ = z[t.name], b = _.forages;
            m.close();
            for (var w = 0; w < b.length; w++) {
              var A = b[w];
              A._dbInfo.db = null;
            }
            var x = new l(function(P, U) {
              var q = E.deleteDatabase(t.name);
              q.onerror = function() {
                var F = q.result;
                F && F.close(), U(q.error);
              }, q.onblocked = function() {
                console.warn('dropInstance blocked for database "' + t.name + '" until all open connections are closed');
              }, q.onsuccess = function() {
                var F = q.result;
                F && F.close(), P(F);
              };
            });
            return x.then(function(P) {
              _.db = P;
              for (var U = 0; U < b.length; U++) {
                var q = b[U];
                N(q._dbInfo);
              }
            }).catch(function(P) {
              throw (R(t, P) || l.resolve()).catch(function() {
              }), P;
            });
          });
        }
        return S(u, i), u;
      }
      var Hn = {
        _driver: "asyncStorage",
        _initStorage: Tn,
        _support: y(),
        iterate: Rn,
        getItem: xn,
        setItem: Nn,
        removeItem: Cn,
        clear: Dn,
        length: kn,
        key: Pn,
        keys: Un,
        dropInstance: Mn
      };
      function jn() {
        return typeof openDatabase == "function";
      }
      var oe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Fn = "~~local_forage_type~", it = /^~~local_forage_type~([^~]+)~/, Re = "__lfsc__:", He = Re.length, je = "arbf", Fe = "blob", st = "si08", at = "ui08", ut = "uic8", ct = "si16", ft = "si32", lt = "ur16", dt = "ui32", ht = "fl32", vt = "fl64", pt = He + je.length, mt = Object.prototype.toString;
      function gt(t) {
        var i = t.length * 0.75, r = t.length, a, u = 0, s, d, m, _;
        t[t.length - 1] === "=" && (i--, t[t.length - 2] === "=" && i--);
        var b = new ArrayBuffer(i), w = new Uint8Array(b);
        for (a = 0; a < r; a += 4)
          s = oe.indexOf(t[a]), d = oe.indexOf(t[a + 1]), m = oe.indexOf(t[a + 2]), _ = oe.indexOf(t[a + 3]), w[u++] = s << 2 | d >> 4, w[u++] = (d & 15) << 4 | m >> 2, w[u++] = (m & 3) << 6 | _ & 63;
        return b;
      }
      function ze(t) {
        var i = new Uint8Array(t), r = "", a;
        for (a = 0; a < i.length; a += 3)
          r += oe[i[a] >> 2], r += oe[(i[a] & 3) << 4 | i[a + 1] >> 4], r += oe[(i[a + 1] & 15) << 2 | i[a + 2] >> 6], r += oe[i[a + 2] & 63];
        return i.length % 3 === 2 ? r = r.substring(0, r.length - 1) + "=" : i.length % 3 === 1 && (r = r.substring(0, r.length - 2) + "=="), r;
      }
      function zn(t, i) {
        var r = "";
        if (t && (r = mt.call(t)), t && (r === "[object ArrayBuffer]" || t.buffer && mt.call(t.buffer) === "[object ArrayBuffer]")) {
          var a, u = Re;
          t instanceof ArrayBuffer ? (a = t, u += je) : (a = t.buffer, r === "[object Int8Array]" ? u += st : r === "[object Uint8Array]" ? u += at : r === "[object Uint8ClampedArray]" ? u += ut : r === "[object Int16Array]" ? u += ct : r === "[object Uint16Array]" ? u += lt : r === "[object Int32Array]" ? u += ft : r === "[object Uint32Array]" ? u += dt : r === "[object Float32Array]" ? u += ht : r === "[object Float64Array]" ? u += vt : i(new Error("Failed to get type for BinaryArray"))), i(u + ze(a));
        } else if (r === "[object Blob]") {
          var s = new FileReader();
          s.onload = function() {
            var d = Fn + t.type + "~" + ze(this.result);
            i(Re + Fe + d);
          }, s.readAsArrayBuffer(t);
        } else
          try {
            i(JSON.stringify(t));
          } catch (d) {
            console.error("Couldn't convert value into a JSON string: ", t), i(null, d);
          }
      }
      function qn(t) {
        if (t.substring(0, He) !== Re)
          return JSON.parse(t);
        var i = t.substring(pt), r = t.substring(He, pt), a;
        if (r === Fe && it.test(i)) {
          var u = i.match(it);
          a = u[1], i = i.substring(u[0].length);
        }
        var s = gt(i);
        switch (r) {
          case je:
            return s;
          case Fe:
            return I([s], { type: a });
          case st:
            return new Int8Array(s);
          case at:
            return new Uint8Array(s);
          case ut:
            return new Uint8ClampedArray(s);
          case ct:
            return new Int16Array(s);
          case lt:
            return new Uint16Array(s);
          case ft:
            return new Int32Array(s);
          case dt:
            return new Uint32Array(s);
          case ht:
            return new Float32Array(s);
          case vt:
            return new Float64Array(s);
          default:
            throw new Error("Unkown type: " + r);
        }
      }
      var qe = {
        serialize: zn,
        deserialize: qn,
        stringToBuffer: gt,
        bufferToString: ze
      };
      function yt(t, i, r, a) {
        t.executeSql("CREATE TABLE IF NOT EXISTS " + i.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], r, a);
      }
      function Wn(t) {
        var i = this, r = {
          db: null
        };
        if (t)
          for (var a in t)
            r[a] = typeof t[a] != "string" ? t[a].toString() : t[a];
        var u = new l(function(s, d) {
          try {
            r.db = openDatabase(r.name, String(r.version), r.description, r.size);
          } catch (m) {
            return d(m);
          }
          r.db.transaction(function(m) {
            yt(m, r, function() {
              i._dbInfo = r, s();
            }, function(_, b) {
              d(b);
            });
          }, d);
        });
        return r.serializer = qe, u;
      }
      function ie(t, i, r, a, u, s) {
        t.executeSql(r, a, u, function(d, m) {
          m.code === m.SYNTAX_ERR ? d.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [i.storeName], function(_, b) {
            b.rows.length ? s(_, m) : yt(_, i, function() {
              _.executeSql(r, a, u, s);
            }, s);
          }, s) : s(d, m);
        }, s);
      }
      function Yn(t, i) {
        var r = this;
        t = D(t);
        var a = new l(function(u, s) {
          r.ready().then(function() {
            var d = r._dbInfo;
            d.db.transaction(function(m) {
              ie(m, d, "SELECT * FROM " + d.storeName + " WHERE key = ? LIMIT 1", [t], function(_, b) {
                var w = b.rows.length ? b.rows.item(0).value : null;
                w && (w = d.serializer.deserialize(w)), u(w);
              }, function(_, b) {
                s(b);
              });
            });
          }).catch(s);
        });
        return S(a, i), a;
      }
      function Vn(t, i) {
        var r = this, a = new l(function(u, s) {
          r.ready().then(function() {
            var d = r._dbInfo;
            d.db.transaction(function(m) {
              ie(m, d, "SELECT * FROM " + d.storeName, [], function(_, b) {
                for (var w = b.rows, A = w.length, x = 0; x < A; x++) {
                  var P = w.item(x), U = P.value;
                  if (U && (U = d.serializer.deserialize(U)), U = t(U, P.key, x + 1), U !== void 0) {
                    u(U);
                    return;
                  }
                }
                u();
              }, function(_, b) {
                s(b);
              });
            });
          }).catch(s);
        });
        return S(a, i), a;
      }
      function _t(t, i, r, a) {
        var u = this;
        t = D(t);
        var s = new l(function(d, m) {
          u.ready().then(function() {
            i === void 0 && (i = null);
            var _ = i, b = u._dbInfo;
            b.serializer.serialize(i, function(w, A) {
              A ? m(A) : b.db.transaction(function(x) {
                ie(x, b, "INSERT OR REPLACE INTO " + b.storeName + " (key, value) VALUES (?, ?)", [t, w], function() {
                  d(_);
                }, function(P, U) {
                  m(U);
                });
              }, function(x) {
                if (x.code === x.QUOTA_ERR) {
                  if (a > 0) {
                    d(_t.apply(u, [t, _, r, a - 1]));
                    return;
                  }
                  m(x);
                }
              });
            });
          }).catch(m);
        });
        return S(s, r), s;
      }
      function Kn(t, i, r) {
        return _t.apply(this, [t, i, r, 1]);
      }
      function Xn(t, i) {
        var r = this;
        t = D(t);
        var a = new l(function(u, s) {
          r.ready().then(function() {
            var d = r._dbInfo;
            d.db.transaction(function(m) {
              ie(m, d, "DELETE FROM " + d.storeName + " WHERE key = ?", [t], function() {
                u();
              }, function(_, b) {
                s(b);
              });
            });
          }).catch(s);
        });
        return S(a, i), a;
      }
      function Gn(t) {
        var i = this, r = new l(function(a, u) {
          i.ready().then(function() {
            var s = i._dbInfo;
            s.db.transaction(function(d) {
              ie(d, s, "DELETE FROM " + s.storeName, [], function() {
                a();
              }, function(m, _) {
                u(_);
              });
            });
          }).catch(u);
        });
        return S(r, t), r;
      }
      function Jn(t) {
        var i = this, r = new l(function(a, u) {
          i.ready().then(function() {
            var s = i._dbInfo;
            s.db.transaction(function(d) {
              ie(d, s, "SELECT COUNT(key) as c FROM " + s.storeName, [], function(m, _) {
                var b = _.rows.item(0).c;
                a(b);
              }, function(m, _) {
                u(_);
              });
            });
          }).catch(u);
        });
        return S(r, t), r;
      }
      function Qn(t, i) {
        var r = this, a = new l(function(u, s) {
          r.ready().then(function() {
            var d = r._dbInfo;
            d.db.transaction(function(m) {
              ie(m, d, "SELECT key FROM " + d.storeName + " WHERE id = ? LIMIT 1", [t + 1], function(_, b) {
                var w = b.rows.length ? b.rows.item(0).key : null;
                u(w);
              }, function(_, b) {
                s(b);
              });
            });
          }).catch(s);
        });
        return S(a, i), a;
      }
      function Zn(t) {
        var i = this, r = new l(function(a, u) {
          i.ready().then(function() {
            var s = i._dbInfo;
            s.db.transaction(function(d) {
              ie(d, s, "SELECT key FROM " + s.storeName, [], function(m, _) {
                for (var b = [], w = 0; w < _.rows.length; w++)
                  b.push(_.rows.item(w).key);
                a(b);
              }, function(m, _) {
                u(_);
              });
            });
          }).catch(u);
        });
        return S(r, t), r;
      }
      function er(t) {
        return new l(function(i, r) {
          t.transaction(function(a) {
            a.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(u, s) {
              for (var d = [], m = 0; m < s.rows.length; m++)
                d.push(s.rows.item(m).name);
              i({
                db: t,
                storeNames: d
              });
            }, function(u, s) {
              r(s);
            });
          }, function(a) {
            r(a);
          });
        });
      }
      function tr(t, i) {
        i = W.apply(this, arguments);
        var r = this.config();
        t = typeof t != "function" && t || {}, t.name || (t.name = t.name || r.name, t.storeName = t.storeName || r.storeName);
        var a = this, u;
        return t.name ? u = new l(function(s) {
          var d;
          t.name === r.name ? d = a._dbInfo.db : d = openDatabase(t.name, "", "", 0), t.storeName ? s({
            db: d,
            storeNames: [t.storeName]
          }) : s(er(d));
        }).then(function(s) {
          return new l(function(d, m) {
            s.db.transaction(function(_) {
              function b(P) {
                return new l(function(U, q) {
                  _.executeSql("DROP TABLE IF EXISTS " + P, [], function() {
                    U();
                  }, function(F, V) {
                    q(V);
                  });
                });
              }
              for (var w = [], A = 0, x = s.storeNames.length; A < x; A++)
                w.push(b(s.storeNames[A]));
              l.all(w).then(function() {
                d();
              }).catch(function(P) {
                m(P);
              });
            }, function(_) {
              m(_);
            });
          });
        }) : u = l.reject("Invalid arguments"), S(u, i), u;
      }
      var nr = {
        _driver: "webSQLStorage",
        _initStorage: Wn,
        _support: jn(),
        iterate: Vn,
        getItem: Yn,
        setItem: Kn,
        removeItem: Xn,
        clear: Gn,
        length: Jn,
        key: Qn,
        keys: Zn,
        dropInstance: tr
      };
      function rr() {
        try {
          return typeof localStorage < "u" && "setItem" in localStorage && // in IE8 typeof localStorage.setItem === 'object'
          !!localStorage.setItem;
        } catch {
          return !1;
        }
      }
      function bt(t, i) {
        var r = t.name + "/";
        return t.storeName !== i.storeName && (r += t.storeName + "/"), r;
      }
      function or() {
        var t = "_localforage_support_test";
        try {
          return localStorage.setItem(t, !0), localStorage.removeItem(t), !1;
        } catch {
          return !0;
        }
      }
      function ir() {
        return !or() || localStorage.length > 0;
      }
      function sr(t) {
        var i = this, r = {};
        if (t)
          for (var a in t)
            r[a] = t[a];
        return r.keyPrefix = bt(t, i._defaultConfig), ir() ? (i._dbInfo = r, r.serializer = qe, l.resolve()) : l.reject();
      }
      function ar(t) {
        var i = this, r = i.ready().then(function() {
          for (var a = i._dbInfo.keyPrefix, u = localStorage.length - 1; u >= 0; u--) {
            var s = localStorage.key(u);
            s.indexOf(a) === 0 && localStorage.removeItem(s);
          }
        });
        return S(r, t), r;
      }
      function ur(t, i) {
        var r = this;
        t = D(t);
        var a = r.ready().then(function() {
          var u = r._dbInfo, s = localStorage.getItem(u.keyPrefix + t);
          return s && (s = u.serializer.deserialize(s)), s;
        });
        return S(a, i), a;
      }
      function cr(t, i) {
        var r = this, a = r.ready().then(function() {
          for (var u = r._dbInfo, s = u.keyPrefix, d = s.length, m = localStorage.length, _ = 1, b = 0; b < m; b++) {
            var w = localStorage.key(b);
            if (w.indexOf(s) === 0) {
              var A = localStorage.getItem(w);
              if (A && (A = u.serializer.deserialize(A)), A = t(A, w.substring(d), _++), A !== void 0)
                return A;
            }
          }
        });
        return S(a, i), a;
      }
      function fr(t, i) {
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
      function lr(t) {
        var i = this, r = i.ready().then(function() {
          for (var a = i._dbInfo, u = localStorage.length, s = [], d = 0; d < u; d++) {
            var m = localStorage.key(d);
            m.indexOf(a.keyPrefix) === 0 && s.push(m.substring(a.keyPrefix.length));
          }
          return s;
        });
        return S(r, t), r;
      }
      function dr(t) {
        var i = this, r = i.keys().then(function(a) {
          return a.length;
        });
        return S(r, t), r;
      }
      function hr(t, i) {
        var r = this;
        t = D(t);
        var a = r.ready().then(function() {
          var u = r._dbInfo;
          localStorage.removeItem(u.keyPrefix + t);
        });
        return S(a, i), a;
      }
      function vr(t, i, r) {
        var a = this;
        t = D(t);
        var u = a.ready().then(function() {
          i === void 0 && (i = null);
          var s = i;
          return new l(function(d, m) {
            var _ = a._dbInfo;
            _.serializer.serialize(i, function(b, w) {
              if (w)
                m(w);
              else
                try {
                  localStorage.setItem(_.keyPrefix + t, b), d(s);
                } catch (A) {
                  (A.name === "QuotaExceededError" || A.name === "NS_ERROR_DOM_QUOTA_REACHED") && m(A), m(A);
                }
            });
          });
        });
        return S(u, r), u;
      }
      function pr(t, i) {
        if (i = W.apply(this, arguments), t = typeof t != "function" && t || {}, !t.name) {
          var r = this.config();
          t.name = t.name || r.name, t.storeName = t.storeName || r.storeName;
        }
        var a = this, u;
        return t.name ? u = new l(function(s) {
          t.storeName ? s(bt(t, a._defaultConfig)) : s(t.name + "/");
        }).then(function(s) {
          for (var d = localStorage.length - 1; d >= 0; d--) {
            var m = localStorage.key(d);
            m.indexOf(s) === 0 && localStorage.removeItem(m);
          }
        }) : u = l.reject("Invalid arguments"), S(u, i), u;
      }
      var mr = {
        _driver: "localStorageWrapper",
        _initStorage: sr,
        _support: rr(),
        iterate: cr,
        getItem: ur,
        setItem: vr,
        removeItem: hr,
        clear: ar,
        length: dr,
        key: fr,
        keys: lr,
        dropInstance: pr
      }, gr = function(i, r) {
        return i === r || typeof i == "number" && typeof r == "number" && isNaN(i) && isNaN(r);
      }, yr = function(i, r) {
        for (var a = i.length, u = 0; u < a; ) {
          if (gr(i[u], r))
            return !0;
          u++;
        }
        return !1;
      }, wt = Array.isArray || function(t) {
        return Object.prototype.toString.call(t) === "[object Array]";
      }, $e = {}, $t = {}, de = {
        INDEXEDDB: Hn,
        WEBSQL: nr,
        LOCALSTORAGE: mr
      }, _r = [de.INDEXEDDB._driver, de.WEBSQL._driver, de.LOCALSTORAGE._driver], Ne = ["dropInstance"], We = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(Ne), br = {
        description: "",
        driver: _r.slice(),
        name: "localforage",
        // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
        // we can use without a prompt.
        size: 4980736,
        storeName: "keyvaluepairs",
        version: 1
      };
      function wr(t, i) {
        t[i] = function() {
          var r = arguments;
          return t.ready().then(function() {
            return t[i].apply(t, r);
          });
        };
      }
      function Ye() {
        for (var t = 1; t < arguments.length; t++) {
          var i = arguments[t];
          if (i)
            for (var r in i)
              i.hasOwnProperty(r) && (wt(i[r]) ? arguments[0][r] = i[r].slice() : arguments[0][r] = i[r]);
        }
        return arguments[0];
      }
      var $r = function() {
        function t(i) {
          v(this, t);
          for (var r in de)
            if (de.hasOwnProperty(r)) {
              var a = de[r], u = a._driver;
              this[r] = u, $e[u] || this.defineDriver(a);
            }
          this._defaultConfig = Ye({}, br), this._config = Ye({}, this._defaultConfig, i), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch(function() {
          });
        }
        return t.prototype.config = function(r) {
          if ((typeof r > "u" ? "undefined" : h(r)) === "object") {
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
          var s = new l(function(d, m) {
            try {
              var _ = r._driver, b = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
              if (!r._driver) {
                m(b);
                return;
              }
              for (var w = We.concat("_initStorage"), A = 0, x = w.length; A < x; A++) {
                var P = w[A], U = !yr(Ne, P);
                if ((U || r[P]) && typeof r[P] != "function") {
                  m(b);
                  return;
                }
              }
              var q = function() {
                for (var Se = function(Ir) {
                  return function() {
                    var Ar = new Error("Method " + Ir + " is not implemented by the current driver"), St = l.reject(Ar);
                    return S(St, arguments[arguments.length - 1]), St;
                  };
                }, Ve = 0, Er = Ne.length; Ve < Er; Ve++) {
                  var Ke = Ne[Ve];
                  r[Ke] || (r[Ke] = Se(Ke));
                }
              };
              q();
              var F = function(Se) {
                $e[_] && console.info("Redefining LocalForage driver: " + _), $e[_] = r, $t[_] = Se, d();
              };
              "_support" in r ? r._support && typeof r._support == "function" ? r._support().then(F, m) : F(!!r._support) : F(!0);
            } catch (V) {
              m(V);
            }
          });
          return B(s, a, u), s;
        }, t.prototype.driver = function() {
          return this._driver || null;
        }, t.prototype.getDriver = function(r, a, u) {
          var s = $e[r] ? l.resolve($e[r]) : l.reject(new Error("Driver not found."));
          return B(s, a, u), s;
        }, t.prototype.getSerializer = function(r) {
          var a = l.resolve(qe);
          return B(a, r), a;
        }, t.prototype.ready = function(r) {
          var a = this, u = a._driverSet.then(function() {
            return a._ready === null && (a._ready = a._initDriver()), a._ready;
          });
          return B(u, r, r), u;
        }, t.prototype.setDriver = function(r, a, u) {
          var s = this;
          wt(r) || (r = [r]);
          var d = this._getSupportedDrivers(r);
          function m() {
            s._config.driver = s.driver();
          }
          function _(A) {
            return s._extend(A), m(), s._ready = s._initStorage(s._config), s._ready;
          }
          function b(A) {
            return function() {
              var x = 0;
              function P() {
                for (; x < A.length; ) {
                  var U = A[x];
                  return x++, s._dbInfo = null, s._ready = null, s.getDriver(U).then(_).catch(P);
                }
                m();
                var q = new Error("No available storage method found.");
                return s._driverSet = l.reject(q), s._driverSet;
              }
              return P();
            };
          }
          var w = this._driverSet !== null ? this._driverSet.catch(function() {
            return l.resolve();
          }) : l.resolve();
          return this._driverSet = w.then(function() {
            var A = d[0];
            return s._dbInfo = null, s._ready = null, s.getDriver(A).then(function(x) {
              s._driver = x._driver, m(), s._wrapLibraryMethodsWithReady(), s._initDriver = b(d);
            });
          }).catch(function() {
            m();
            var A = new Error("No available storage method found.");
            return s._driverSet = l.reject(A), s._driverSet;
          }), B(this._driverSet, a, u), this._driverSet;
        }, t.prototype.supports = function(r) {
          return !!$t[r];
        }, t.prototype._extend = function(r) {
          Ye(this, r);
        }, t.prototype._getSupportedDrivers = function(r) {
          for (var a = [], u = 0, s = r.length; u < s; u++) {
            var d = r[u];
            this.supports(d) && a.push(d);
          }
          return a;
        }, t.prototype._wrapLibraryMethodsWithReady = function() {
          for (var r = 0, a = We.length; r < a; r++)
            wr(this, We[r]);
        }, t.prototype.createInstance = function(r) {
          return new t(r);
        }, t;
      }(), Sr = new $r();
      c.exports = Sr;
    }, { 3: 3 }] }, {}, [4])(4);
  });
})(zt);
var to = zt.exports;
const no = /* @__PURE__ */ eo(to), ve = [];
function ro(e, n = Q) {
  let o;
  const c = /* @__PURE__ */ new Set();
  function f(g) {
    if (Mt(e, g) && (e = g, o)) {
      const E = !ve.length;
      for (const y of c)
        y[1](), ve.push(y, e);
      if (E) {
        for (let y = 0; y < ve.length; y += 2)
          ve[y][0](ve[y + 1]);
        ve.length = 0;
      }
    }
  }
  function h(g) {
    f(g(e));
  }
  function v(g, E = Q) {
    const y = [g, E];
    return c.add(y), c.size === 1 && (o = n(f, h) || Q), g(e), () => {
      c.delete(y), c.size === 0 && o && (o(), o = null);
    };
  }
  return { set: f, update: h, subscribe: v };
}
no.config({
  name: "SNS HPC AI Assitant"
});
const fe = {
  Unknown: { slug: "unknown", description: "Checking the AI server status...", icon: "⏳" },
  Error: { slug: "error", description: "The AI server is currently unavailable", icon: "🔴" },
  OK: { slug: "ok", description: "The AI server is fully functional", icon: "🟢" },
  Running: { slug: "running", description: "The AI server is working to answer", icon: "🔵" },
  Degraded: { slug: "degraded", description: "The AI server is currently degraded", icon: "🟡" }
};
class oo {
  constructor(n) {
    this.baseURL = n, this.status = ro(fe.Unknown);
  }
  // list available models on the backend
  async getBestModel(n, o) {
    o = o || {};
    try {
      const c = await fetch(`${this.baseURL}/api/tags`, { method: "GET", ...o });
      if (c.status === 200) {
        const h = (await c.json()).models.map((v) => v.model);
        for (const v of n)
          if (h.includes(v.model))
            return this.status.set(v.premium ? fe.OK : fe.Degraded), v.model;
      }
    } catch (c) {
      console.error(c);
    }
    this.status.set(fe.Error);
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
    this.status.set(fe.Error);
  }
  async chat(n, o) {
    o = o || {};
    const c = Tr(this.status);
    try {
      this.status.set(fe.Running);
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
    this.status.set(fe.Error);
  }
}
var ae = {}, M = {}, Y = {};
Object.defineProperty(Y, "__esModule", { value: !0 });
Y.output = Y.exists = Y.hash = Y.bytes = Y.bool = Y.number = void 0;
function Ue(e) {
  if (!Number.isSafeInteger(e) || e < 0)
    throw new Error(`Wrong positive integer: ${e}`);
}
Y.number = Ue;
function qt(e) {
  if (typeof e != "boolean")
    throw new Error(`Expected boolean, not ${e}`);
}
Y.bool = qt;
function io(e) {
  return e instanceof Uint8Array || e != null && typeof e == "object" && e.constructor.name === "Uint8Array";
}
function tt(e, ...n) {
  if (!io(e))
    throw new Error("Expected Uint8Array");
  if (n.length > 0 && !n.includes(e.length))
    throw new Error(`Expected Uint8Array of length ${n}, not of length=${e.length}`);
}
Y.bytes = tt;
function Wt(e) {
  if (typeof e != "function" || typeof e.create != "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  Ue(e.outputLen), Ue(e.blockLen);
}
Y.hash = Wt;
function Yt(e, n = !0) {
  if (e.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (n && e.finished)
    throw new Error("Hash#digest() has already been called");
}
Y.exists = Yt;
function Vt(e, n) {
  tt(e);
  const o = n.outputLen;
  if (e.length < o)
    throw new Error(`digestInto() expects output buffer of length at least ${o}`);
}
Y.output = Vt;
const so = { number: Ue, bool: qt, bytes: tt, hash: Wt, exists: Yt, output: Vt };
Y.default = so;
var O = {};
Object.defineProperty(O, "__esModule", { value: !0 });
O.add5L = O.add5H = O.add4H = O.add4L = O.add3H = O.add3L = O.add = O.rotlBL = O.rotlBH = O.rotlSL = O.rotlSH = O.rotr32L = O.rotr32H = O.rotrBL = O.rotrBH = O.rotrSL = O.rotrSH = O.shrSL = O.shrSH = O.toBig = O.split = O.fromBig = void 0;
const De = /* @__PURE__ */ BigInt(2 ** 32 - 1), Ze = /* @__PURE__ */ BigInt(32);
function nt(e, n = !1) {
  return n ? { h: Number(e & De), l: Number(e >> Ze & De) } : { h: Number(e >> Ze & De) | 0, l: Number(e & De) | 0 };
}
O.fromBig = nt;
function Kt(e, n = !1) {
  let o = new Uint32Array(e.length), c = new Uint32Array(e.length);
  for (let f = 0; f < e.length; f++) {
    const { h, l: v } = nt(e[f], n);
    [o[f], c[f]] = [h, v];
  }
  return [o, c];
}
O.split = Kt;
const Xt = (e, n) => BigInt(e >>> 0) << Ze | BigInt(n >>> 0);
O.toBig = Xt;
const Gt = (e, n, o) => e >>> o;
O.shrSH = Gt;
const Jt = (e, n, o) => e << 32 - o | n >>> o;
O.shrSL = Jt;
const Qt = (e, n, o) => e >>> o | n << 32 - o;
O.rotrSH = Qt;
const Zt = (e, n, o) => e << 32 - o | n >>> o;
O.rotrSL = Zt;
const en = (e, n, o) => e << 64 - o | n >>> o - 32;
O.rotrBH = en;
const tn = (e, n, o) => e >>> o - 32 | n << 64 - o;
O.rotrBL = tn;
const nn = (e, n) => n;
O.rotr32H = nn;
const rn = (e, n) => e;
O.rotr32L = rn;
const on = (e, n, o) => e << o | n >>> 32 - o;
O.rotlSH = on;
const sn = (e, n, o) => n << o | e >>> 32 - o;
O.rotlSL = sn;
const an = (e, n, o) => n << o - 32 | e >>> 64 - o;
O.rotlBH = an;
const un = (e, n, o) => e << o - 32 | n >>> 64 - o;
O.rotlBL = un;
function cn(e, n, o, c) {
  const f = (n >>> 0) + (c >>> 0);
  return { h: e + o + (f / 2 ** 32 | 0) | 0, l: f | 0 };
}
O.add = cn;
const fn = (e, n, o) => (e >>> 0) + (n >>> 0) + (o >>> 0);
O.add3L = fn;
const ln = (e, n, o, c) => n + o + c + (e / 2 ** 32 | 0) | 0;
O.add3H = ln;
const dn = (e, n, o, c) => (e >>> 0) + (n >>> 0) + (o >>> 0) + (c >>> 0);
O.add4L = dn;
const hn = (e, n, o, c, f) => n + o + c + f + (e / 2 ** 32 | 0) | 0;
O.add4H = hn;
const vn = (e, n, o, c, f) => (e >>> 0) + (n >>> 0) + (o >>> 0) + (c >>> 0) + (f >>> 0);
O.add5L = vn;
const pn = (e, n, o, c, f, h) => n + o + c + f + h + (e / 2 ** 32 | 0) | 0;
O.add5H = pn;
const ao = {
  fromBig: nt,
  split: Kt,
  toBig: Xt,
  shrSH: Gt,
  shrSL: Jt,
  rotrSH: Qt,
  rotrSL: Zt,
  rotrBH: en,
  rotrBL: tn,
  rotr32H: nn,
  rotr32L: rn,
  rotlSH: on,
  rotlSL: sn,
  rotlBH: an,
  rotlBL: un,
  add: cn,
  add3L: fn,
  add3H: ln,
  add4L: dn,
  add4H: hn,
  add5H: pn,
  add5L: vn
};
O.default = ao;
var mn = {}, Me = {};
Object.defineProperty(Me, "__esModule", { value: !0 });
Me.crypto = void 0;
Me.crypto = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
(function(e) {
  /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
  Object.defineProperty(e, "__esModule", { value: !0 }), e.randomBytes = e.wrapXOFConstructorWithOpts = e.wrapConstructorWithOpts = e.wrapConstructor = e.checkOpts = e.Hash = e.concatBytes = e.toBytes = e.utf8ToBytes = e.asyncLoop = e.nextTick = e.hexToBytes = e.bytesToHex = e.isLE = e.rotr = e.createView = e.u32 = e.u8 = void 0;
  const n = Me, o = (p) => new Uint8Array(p.buffer, p.byteOffset, p.byteLength);
  e.u8 = o;
  const c = (p) => new Uint32Array(p.buffer, p.byteOffset, Math.floor(p.byteLength / 4));
  e.u32 = c;
  function f(p) {
    return p instanceof Uint8Array || p != null && typeof p == "object" && p.constructor.name === "Uint8Array";
  }
  const h = (p) => new DataView(p.buffer, p.byteOffset, p.byteLength);
  e.createView = h;
  const v = (p, L) => p << 32 - L | p >>> L;
  if (e.rotr = v, e.isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68, !e.isLE)
    throw new Error("Non little-endian hardware is not supported");
  const g = /* @__PURE__ */ Array.from({ length: 256 }, (p, L) => L.toString(16).padStart(2, "0"));
  function E(p) {
    if (!f(p))
      throw new Error("Uint8Array expected");
    let L = "";
    for (let N = 0; N < p.length; N++)
      L += g[p[N]];
    return L;
  }
  e.bytesToHex = E;
  const y = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
  function I(p) {
    if (p >= y._0 && p <= y._9)
      return p - y._0;
    if (p >= y._A && p <= y._F)
      return p - (y._A - 10);
    if (p >= y._a && p <= y._f)
      return p - (y._a - 10);
  }
  function l(p) {
    if (typeof p != "string")
      throw new Error("hex string expected, got " + typeof p);
    const L = p.length, N = L / 2;
    if (L % 2)
      throw new Error("padded hex string expected, got unpadded hex of length " + L);
    const R = new Uint8Array(N);
    for (let k = 0, j = 0; k < N; k++, j += 2) {
      const re = I(p.charCodeAt(j)), ce = I(p.charCodeAt(j + 1));
      if (re === void 0 || ce === void 0) {
        const we = p[j] + p[j + 1];
        throw new Error('hex string expected, got non-hex character "' + we + '" at index ' + j);
      }
      R[k] = re * 16 + ce;
    }
    return R;
  }
  e.hexToBytes = l;
  const S = async () => {
  };
  e.nextTick = S;
  async function B(p, L, N) {
    let R = Date.now();
    for (let k = 0; k < p; k++) {
      N(k);
      const j = Date.now() - R;
      j >= 0 && j < L || (await (0, e.nextTick)(), R += j);
    }
  }
  e.asyncLoop = B;
  function D(p) {
    if (typeof p != "string")
      throw new Error(`utf8ToBytes expected string, got ${typeof p}`);
    return new Uint8Array(new TextEncoder().encode(p));
  }
  e.utf8ToBytes = D;
  function W(p) {
    if (typeof p == "string" && (p = D(p)), !f(p))
      throw new Error(`expected Uint8Array, got ${typeof p}`);
    return p;
  }
  e.toBytes = W;
  function H(...p) {
    let L = 0;
    for (let R = 0; R < p.length; R++) {
      const k = p[R];
      if (!f(k))
        throw new Error("Uint8Array expected");
      L += k.length;
    }
    const N = new Uint8Array(L);
    for (let R = 0, k = 0; R < p.length; R++) {
      const j = p[R];
      N.set(j, k), k += j.length;
    }
    return N;
  }
  e.concatBytes = H;
  class X {
    // Safe version that clones internal state
    clone() {
      return this._cloneInto();
    }
  }
  e.Hash = X;
  const z = {}.toString;
  function be(p, L) {
    if (L !== void 0 && z.call(L) !== "[object Object]")
      throw new Error("Options should be object or undefined");
    return Object.assign(p, L);
  }
  e.checkOpts = be;
  function Z(p) {
    const L = (R) => p().update(W(R)).digest(), N = p();
    return L.outputLen = N.outputLen, L.blockLen = N.blockLen, L.create = () => p(), L;
  }
  e.wrapConstructor = Z;
  function $(p) {
    const L = (R, k) => p(k).update(W(R)).digest(), N = p({});
    return L.outputLen = N.outputLen, L.blockLen = N.blockLen, L.create = (R) => p(R), L;
  }
  e.wrapConstructorWithOpts = $;
  function C(p) {
    const L = (R, k) => p(k).update(W(R)).digest(), N = p({});
    return L.outputLen = N.outputLen, L.blockLen = N.blockLen, L.create = (R) => p(R), L;
  }
  e.wrapXOFConstructorWithOpts = C;
  function T(p = 32) {
    if (n.crypto && typeof n.crypto.getRandomValues == "function")
      return n.crypto.getRandomValues(new Uint8Array(p));
    throw new Error("crypto.getRandomValues must be defined");
  }
  e.randomBytes = T;
})(mn);
Object.defineProperty(M, "__esModule", { value: !0 });
M.shake256 = M.shake128 = M.keccak_512 = M.keccak_384 = M.keccak_256 = M.keccak_224 = M.sha3_512 = M.sha3_384 = M.sha3_256 = M.sha3_224 = M.Keccak = M.keccakP = void 0;
const pe = Y, Oe = O, Ae = mn, [gn, yn, _n] = [[], [], []], uo = /* @__PURE__ */ BigInt(0), Ee = /* @__PURE__ */ BigInt(1), co = /* @__PURE__ */ BigInt(2), fo = /* @__PURE__ */ BigInt(7), lo = /* @__PURE__ */ BigInt(256), ho = /* @__PURE__ */ BigInt(113);
for (let e = 0, n = Ee, o = 1, c = 0; e < 24; e++) {
  [o, c] = [c, (2 * o + 3 * c) % 5], gn.push(2 * (5 * c + o)), yn.push((e + 1) * (e + 2) / 2 % 64);
  let f = uo;
  for (let h = 0; h < 7; h++)
    n = (n << Ee ^ (n >> fo) * ho) % lo, n & co && (f ^= Ee << (Ee << /* @__PURE__ */ BigInt(h)) - Ee);
  _n.push(f);
}
const [vo, po] = /* @__PURE__ */ (0, Oe.split)(_n, !0), Tt = (e, n, o) => o > 32 ? (0, Oe.rotlBH)(e, n, o) : (0, Oe.rotlSH)(e, n, o), xt = (e, n, o) => o > 32 ? (0, Oe.rotlBL)(e, n, o) : (0, Oe.rotlSL)(e, n, o);
function bn(e, n = 24) {
  const o = new Uint32Array(10);
  for (let c = 24 - n; c < 24; c++) {
    for (let v = 0; v < 10; v++)
      o[v] = e[v] ^ e[v + 10] ^ e[v + 20] ^ e[v + 30] ^ e[v + 40];
    for (let v = 0; v < 10; v += 2) {
      const g = (v + 8) % 10, E = (v + 2) % 10, y = o[E], I = o[E + 1], l = Tt(y, I, 1) ^ o[g], S = xt(y, I, 1) ^ o[g + 1];
      for (let B = 0; B < 50; B += 10)
        e[v + B] ^= l, e[v + B + 1] ^= S;
    }
    let f = e[2], h = e[3];
    for (let v = 0; v < 24; v++) {
      const g = yn[v], E = Tt(f, h, g), y = xt(f, h, g), I = gn[v];
      f = e[I], h = e[I + 1], e[I] = E, e[I + 1] = y;
    }
    for (let v = 0; v < 50; v += 10) {
      for (let g = 0; g < 10; g++)
        o[g] = e[v + g];
      for (let g = 0; g < 10; g++)
        e[v + g] ^= ~o[(g + 2) % 10] & o[(g + 4) % 10];
    }
    e[0] ^= vo[c], e[1] ^= po[c];
  }
  o.fill(0);
}
M.keccakP = bn;
class xe extends Ae.Hash {
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(n, o, c, f = !1, h = 24) {
    if (super(), this.blockLen = n, this.suffix = o, this.outputLen = c, this.enableXOF = f, this.rounds = h, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, (0, pe.number)(c), 0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = (0, Ae.u32)(this.state);
  }
  keccak() {
    bn(this.state32, this.rounds), this.posOut = 0, this.pos = 0;
  }
  update(n) {
    (0, pe.exists)(this);
    const { blockLen: o, state: c } = this;
    n = (0, Ae.toBytes)(n);
    const f = n.length;
    for (let h = 0; h < f; ) {
      const v = Math.min(o - this.pos, f - h);
      for (let g = 0; g < v; g++)
        c[this.pos++] ^= n[h++];
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
    (0, pe.exists)(this, !1), (0, pe.bytes)(n), this.finish();
    const o = this.state, { blockLen: c } = this;
    for (let f = 0, h = n.length; f < h; ) {
      this.posOut >= c && this.keccak();
      const v = Math.min(c - this.posOut, h - f);
      n.set(o.subarray(this.posOut, this.posOut + v), f), this.posOut += v, f += v;
    }
    return n;
  }
  xofInto(n) {
    if (!this.enableXOF)
      throw new Error("XOF is not possible for this instance");
    return this.writeInto(n);
  }
  xof(n) {
    return (0, pe.number)(n), this.xofInto(new Uint8Array(n));
  }
  digestInto(n) {
    if ((0, pe.output)(n, this), this.finished)
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
    const { blockLen: o, suffix: c, outputLen: f, rounds: h, enableXOF: v } = this;
    return n || (n = new xe(o, c, f, v, h)), n.state32.set(this.state32), n.pos = this.pos, n.posOut = this.posOut, n.finished = this.finished, n.rounds = h, n.suffix = c, n.outputLen = f, n.enableXOF = v, n.destroyed = this.destroyed, n;
  }
}
M.Keccak = xe;
const ue = (e, n, o) => (0, Ae.wrapConstructor)(() => new xe(n, e, o));
M.sha3_224 = ue(6, 144, 224 / 8);
M.sha3_256 = ue(6, 136, 256 / 8);
M.sha3_384 = ue(6, 104, 384 / 8);
M.sha3_512 = ue(6, 72, 512 / 8);
M.keccak_224 = ue(1, 144, 224 / 8);
M.keccak_256 = ue(1, 136, 256 / 8);
M.keccak_384 = ue(1, 104, 384 / 8);
M.keccak_512 = ue(1, 72, 512 / 8);
const wn = (e, n, o) => (0, Ae.wrapXOFConstructorWithOpts)((c = {}) => new xe(n, e, c.dkLen === void 0 ? o : c.dkLen, !0));
M.shake128 = wn(31, 168, 128 / 8);
M.shake256 = wn(31, 136, 256 / 8);
const { sha3_512: mo } = M, $n = 24, Le = 32, et = (e = 4, n = Math.random) => {
  let o = "";
  for (; o.length < e; )
    o = o + Math.floor(n() * 36).toString(36);
  return o;
};
function Sn(e) {
  let n = 8n, o = 0n;
  for (const c of e.values()) {
    const f = BigInt(c);
    o = (o << n) + f;
  }
  return o;
}
const En = (e = "") => Sn(mo(e)).toString(36).slice(1), Rt = Array.from(
  { length: 26 },
  (e, n) => String.fromCharCode(n + 97)
), go = (e) => Rt[Math.floor(e() * Rt.length)], In = ({
  globalObj: e = typeof ge < "u" ? ge : typeof window < "u" ? window : {},
  random: n = Math.random
} = {}) => {
  const o = Object.keys(e).toString(), c = o.length ? o + et(Le, n) : et(Le, n);
  return En(c).substring(0, Le);
}, An = (e) => () => e++, yo = 476782367, Ln = ({
  // Fallback if the user does not pass in a CSPRNG. This should be OK
  // because we don't rely solely on the random number generator for entropy.
  // We also use the host fingerprint, current time, and a session counter.
  random: e = Math.random,
  counter: n = An(Math.floor(e() * yo)),
  length: o = $n,
  fingerprint: c = In({ random: e })
} = {}) => function() {
  const h = go(e), v = Date.now().toString(36), g = n().toString(36), E = et(o, e), y = `${v + E + g + c}`;
  return `${h + En(y).substring(1, o)}`;
}, _o = Ln(), bo = (e, { minLength: n = 2, maxLength: o = Le } = {}) => {
  const c = e.length, f = /^[0-9a-z]+$/;
  try {
    if (typeof e == "string" && c >= n && c <= o && f.test(e))
      return !0;
  } finally {
  }
  return !1;
};
ae.getConstants = () => ({ defaultLength: $n, bigLength: Le });
ae.init = Ln;
ae.createId = _o;
ae.bufToBigInt = Sn;
ae.createCounter = An;
ae.createFingerprint = In;
ae.isCuid = bo;
const { createId: wo, init: To, getConstants: xo, isCuid: Ro } = ae;
var $o = wo;
class So {
  // TODO: Implement message tree with branches
  constructor(n, o, c) {
    if (this.updated = n, this.ollama = o, c)
      this._ = c;
    else {
      const f = (/* @__PURE__ */ new Date()).toISOString();
      this._ = {
        chatId: $o(),
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
function Eo(e) {
  xr(e, "svelte-1qjvzjq", ".mb-10.svelte-1qjvzjq{margin-bottom:10px}.text-bold.svelte-1qjvzjq{font-weight:700}.mt-10.svelte-1qjvzjq{margin-top:10px}.text-small.svelte-1qjvzjq{font-size:80%}.text.svelte-1qjvzjq{display:block;border-radius:10px;font-size:120%;padding:8px 8px;width:100%}.chat-bot.svelte-1qjvzjq{min-width:25%;border:1px solid grey;border-radius:5px;position:absolute;bottom:10px;right:10px;padding:10px 10px;display:flex;flex-direction:column;align-items:stretch}");
}
function Nt(e, n, o) {
  const c = e.slice();
  return c[11] = n[o], c;
}
function Ct(e) {
  let n, o, c, f, h, v, g, E, y = Ot(
    /*chat*/
    e[2]._.messages
  ), I = [];
  for (let l = 0; l < y.length; l += 1)
    I[l] = kt(Nt(e, y, l));
  return {
    c() {
      for (let l = 0; l < I.length; l += 1)
        I[l].c();
      n = Pe(), o = ne("form"), c = ne("input"), h = Pe(), v = ne("div"), v.textContent = "The assistant makes mistakes, always check important information", c.disabled = f = /*status*/
      e[0] && /*$status*/
      e[4].slug == "running", G(c, "class", "text svelte-1qjvzjq"), G(c, "type", "text"), G(c, "placeholder", "What do you want help with?"), G(o, "action", "#"), G(v, "class", "mt-10 text-small svelte-1qjvzjq");
    },
    m(l, S) {
      for (let B = 0; B < I.length; B += 1)
        I[B] && I[B].m(l, S);
      se(l, n, S), se(l, o, S), J(o, c), At(
        c,
        /*text*/
        e[3]
      ), se(l, h, S), se(l, v, S), g || (E = [
        It(
          c,
          "input",
          /*input_input_handler*/
          e[7]
        ),
        It(o, "submit", kr(
          /*handleUserMessage*/
          e[6]
        ))
      ], g = !0);
    },
    p(l, S) {
      if (S & /*chat, roleIcons*/
      36) {
        y = Ot(
          /*chat*/
          l[2]._.messages
        );
        let B;
        for (B = 0; B < y.length; B += 1) {
          const D = Nt(l, y, B);
          I[B] ? I[B].p(D, S) : (I[B] = kt(D), I[B].c(), I[B].m(n.parentNode, n));
        }
        for (; B < I.length; B += 1)
          I[B].d(1);
        I.length = y.length;
      }
      S & /*status, $status*/
      17 && f !== (f = /*status*/
      l[0] && /*$status*/
      l[4].slug == "running") && (c.disabled = f), S & /*text*/
      8 && c.value !== /*text*/
      l[3] && At(
        c,
        /*text*/
        l[3]
      );
    },
    d(l) {
      l && (te(n), te(o), te(h), te(v)), Cr(I, l), g = !1, Te(E);
    }
  };
}
function Dt(e) {
  let n, o = (
    /*roleIcons*/
    e[5][
      /*message*/
      e[11].role
    ] + ""
  ), c, f, h = (
    /*message*/
    e[11].content + ""
  ), v;
  return {
    c() {
      n = ne("div"), c = _e(o), f = Pe(), v = _e(h), G(n, "class", "message");
    },
    m(g, E) {
      se(g, n, E), J(n, c), J(n, f), J(n, v);
    },
    p(g, E) {
      E & /*chat*/
      4 && o !== (o = /*roleIcons*/
      g[5][
        /*message*/
        g[11].role
      ] + "") && Ge(c, o), E & /*chat*/
      4 && h !== (h = /*message*/
      g[11].content + "") && Ge(v, h);
    },
    d(g) {
      g && te(n);
    }
  };
}
function kt(e) {
  let n, o = (
    /*message*/
    e[11].role != "system" && Dt(e)
  );
  return {
    c() {
      o && o.c(), n = Dr();
    },
    m(c, f) {
      o && o.m(c, f), se(c, n, f);
    },
    p(c, f) {
      /*message*/
      c[11].role != "system" ? o ? o.p(c, f) : (o = Dt(c), o.c(), o.m(n.parentNode, n)) : o && (o.d(1), o = null);
    },
    d(c) {
      c && te(n), o && o.d(c);
    }
  };
}
function Io(e) {
  let n, o, c, f, h = (
    /*status*/
    (e[0] ? (
      /*$status*/
      e[4].icon
    ) : "") + ""
  ), v, g, E, y = (
    /*model*/
    e[1] && /*chat*/
    e[2] && Ct(e)
  );
  return {
    c() {
      n = ne("content"), o = ne("div"), c = _e(`🤖 HPC AI Assistant
	`), f = ne("span"), v = _e(h), E = Pe(), y && y.c(), G(f, "title", g = /*status*/
      e[0] ? (
        /*$status*/
        e[4].description
      ) : ""), G(o, "class", "mb-10 text-bold svelte-1qjvzjq"), G(n, "class", "chat-bot svelte-1qjvzjq");
    },
    m(I, l) {
      se(I, n, l), J(n, o), J(o, c), J(o, f), J(f, v), J(n, E), y && y.m(n, null);
    },
    p(I, [l]) {
      l & /*status, $status*/
      17 && h !== (h = /*status*/
      (I[0] ? (
        /*$status*/
        I[4].icon
      ) : "") + "") && Ge(v, h), l & /*status, $status*/
      17 && g !== (g = /*status*/
      I[0] ? (
        /*$status*/
        I[4].description
      ) : "") && G(f, "title", g), /*model*/
      I[1] && /*chat*/
      I[2] ? y ? y.p(I, l) : (y = Ct(I), y.c(), y.m(n, null)) : y && (y.d(1), y = null);
    },
    i: Q,
    o: Q,
    d(I) {
      I && te(n), y && y.d();
    }
  };
}
function Ao(e, n, o) {
  let c, f = Q, h = () => (f(), f = Ht(y, (H) => o(4, c = H)), y);
  e.$$.on_destroy.push(() => f());
  const v = {
    role: "system",
    content: "You are LucIAno, an helpful AI assistant, expert in High Performance Computing, Linux System Administration, and Python and FORTRAN programming. You always answer to users very precisely and to-the-point, helping them to clarify their question when they are vaguely expressed. You politely refuse to answer questions not related to your expertise area. Write output in Markdown."
  }, g = [
    {
      model: "notux:8x7b-v1-q3_K_L",
      premium: !0
    },
    {
      model: "nous-hermes2-mixtral:8x7b-dpo-q3_K_L",
      premium: !0
    },
    {
      model: "solar:10.7b-instruct-v1-q3_K_L",
      premium: !0
    },
    {
      model: "mistral:7b-instruct-v0.2-q3_K_L",
      premium: !1
    },
    {
      model: "stablelm2:1.6b-zephyr-q3_K_L",
      premium: !1
    }
  ];
  let E, y, I, l;
  Hr(async () => {
    const H = `${window.location.protocol}//${window.location.hostname}:${window.location.port}`;
    E = new oo(H), h(o(0, y = E.status)), o(1, I = await E.getBestModel(g)), I && (await E.preloadModel(I), o(2, l = new So(() => o(2, l), E)), l.addMessage(v));
  });
  let S;
  const B = { user: "👤", assistant: "🤖" };
  async function D() {
    l.addMessage({ role: "user", content: S }), o(3, S = ""), await l.complete(I);
  }
  function W() {
    S = this.value, o(3, S);
  }
  return [
    y,
    I,
    l,
    S,
    c,
    B,
    D,
    W
  ];
}
class Lo extends Qr {
  constructor(n) {
    super(), Gr(this, n, Ao, Io, Mt, {}, Eo);
  }
}
customElements.define("hpc-chatbot", Jr(Lo, {}, [], [], !0));
export {
  Lo as ChatBot
};
//# sourceMappingURL=components.js.map
