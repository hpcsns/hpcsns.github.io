var I = Object.defineProperty;
var T = (e, t, n) => t in e ? I(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var f = (e, t, n) => (T(e, typeof t != "symbol" ? t + "" : t, n), n);
function d() {
}
function S(e) {
  return e();
}
function N() {
  return /* @__PURE__ */ Object.create(null);
}
function g(e) {
  e.forEach(S);
}
function P(e) {
  return typeof e == "function";
}
function D(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function J(e) {
  return Object.keys(e).length === 0;
}
function V(e, t) {
  e.appendChild(t);
}
function U(e, t, n) {
  const r = q(e);
  if (!r.getElementById(t)) {
    const i = k("style");
    i.id = t, i.textContent = n, z(r, i);
  }
}
function q(e) {
  if (!e)
    return document;
  const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
  return t && /** @type {ShadowRoot} */
  t.host ? (
    /** @type {ShadowRoot} */
    t
  ) : e.ownerDocument;
}
function z(e, t) {
  return V(
    /** @type {Document} */
    e.head || e,
    t
  ), t.sheet;
}
function v(e, t, n) {
  e.insertBefore(t, n || null);
}
function E(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function k(e) {
  return document.createElement(e);
}
function M(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function F(e) {
  return Array.from(e.childNodes);
}
function G(e) {
  const t = {};
  return e.childNodes.forEach(
    /** @param {Element} node */
    (n) => {
      t[n.slot || "default"] = !0;
    }
  ), t;
}
let C;
function p(e) {
  C = e;
}
const a = [], L = [];
let _ = [];
const B = [], K = /* @__PURE__ */ Promise.resolve();
let w = !1;
function Q() {
  w || (w = !0, K.then(H));
}
function x(e) {
  _.push(e);
}
const y = /* @__PURE__ */ new Set();
let h = 0;
function H() {
  if (h !== 0)
    return;
  const e = C;
  do {
    try {
      for (; h < a.length; ) {
        const t = a[h];
        h++, p(t), W(t.$$);
      }
    } catch (t) {
      throw a.length = 0, h = 0, t;
    }
    for (p(null), a.length = 0, h = 0; L.length; )
      L.pop()();
    for (let t = 0; t < _.length; t += 1) {
      const n = _[t];
      y.has(n) || (y.add(n), n());
    }
    _.length = 0;
  } while (a.length);
  for (; B.length; )
    B.pop()();
  w = !1, y.clear(), p(e);
}
function W(e) {
  if (e.fragment !== null) {
    e.update(), g(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(x);
  }
}
function X(e) {
  const t = [], n = [];
  _.forEach((r) => e.indexOf(r) === -1 ? t.push(r) : n.push(r)), n.forEach((r) => r()), _ = t;
}
const Y = /* @__PURE__ */ new Set();
function Z(e, t) {
  e && e.i && (Y.delete(e), e.i(t));
}
function tt(e, t, n) {
  const { fragment: r, after_update: i } = e.$$;
  r && r.m(t, n), x(() => {
    const s = e.$$.on_mount.map(S).filter(P);
    e.$$.on_destroy ? e.$$.on_destroy.push(...s) : g(s), e.$$.on_mount = [];
  }), i.forEach(x);
}
function et(e, t) {
  const n = e.$$;
  n.fragment !== null && (X(n.after_update), g(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function nt(e, t) {
  e.$$.dirty[0] === -1 && (a.push(e), Q(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function st(e, t, n, r, i, s, o = null, $ = [-1]) {
  const u = C;
  p(e);
  const c = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: d,
    not_equal: i,
    bound: N(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (u ? u.$$.context : [])),
    // everything else
    callbacks: N(),
    dirty: $,
    skip_bound: !1,
    root: t.target || u.$$.root
  };
  o && o(c.root);
  let b = !1;
  if (c.ctx = n ? n(e, t.props || {}, (l, O, ...j) => {
    const A = j.length ? j[0] : O;
    return c.ctx && i(c.ctx[l], c.ctx[l] = A) && (!c.skip_bound && c.bound[l] && c.bound[l](A), b && nt(e, l)), O;
  }) : [], c.update(), b = !0, g(c.before_update), c.fragment = r ? r(c.ctx) : !1, t.target) {
    if (t.hydrate) {
      const l = F(t.target);
      c.fragment && c.fragment.l(l), l.forEach(E);
    } else
      c.fragment && c.fragment.c();
    t.intro && Z(e.$$.fragment), tt(e, t.target, t.anchor), H();
  }
  p(u);
}
let R;
typeof HTMLElement == "function" && (R = class extends HTMLElement {
  constructor(t, n, r) {
    super();
    /** The Svelte component constructor */
    f(this, "$$ctor");
    /** Slots */
    f(this, "$$s");
    /** The Svelte component instance */
    f(this, "$$c");
    /** Whether or not the custom element is connected */
    f(this, "$$cn", !1);
    /** Component props data */
    f(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    f(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    f(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    f(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    f(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = t, this.$$s = n, r && this.attachShadow({ mode: "open" });
  }
  addEventListener(t, n, r) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(n), this.$$c) {
      const i = this.$$c.$on(t, n);
      this.$$l_u.set(n, i);
    }
    super.addEventListener(t, n, r);
  }
  removeEventListener(t, n, r) {
    if (super.removeEventListener(t, n, r), this.$$c) {
      const i = this.$$l_u.get(n);
      i && (i(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(s) {
        return () => {
          let o;
          return {
            c: function() {
              o = k("slot"), s !== "default" && M(o, "name", s);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(c, b) {
              v(c, o, b);
            },
            d: function(c) {
              c && E(o);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn)
        return;
      const n = {}, r = G(this);
      for (const s of this.$$s)
        s in r && (n[s] = [t(s)]);
      for (const s of this.attributes) {
        const o = this.$$g_p(s.name);
        o in this.$$d || (this.$$d[o] = m(o, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = new this.$$ctor({
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$scope: {
            ctx: []
          }
        }
      });
      const i = () => {
        this.$$r = !0;
        for (const s in this.$$p_d)
          if (this.$$d[s] = this.$$c.$$.ctx[this.$$c.$$.props[s]], this.$$p_d[s].reflect) {
            const o = m(
              s,
              this.$$d[s],
              this.$$p_d,
              "toAttribute"
            );
            o == null ? this.removeAttribute(this.$$p_d[s].attribute || s) : this.setAttribute(this.$$p_d[s].attribute || s, o);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(i), i();
      for (const s in this.$$l)
        for (const o of this.$$l[s]) {
          const $ = this.$$c.$on(s, o);
          this.$$l_u.set(o, $);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(t, n, r) {
    var i;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = m(t, r, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      this.$$cn || (this.$$c.$destroy(), this.$$c = void 0);
    });
  }
  $$g_p(t) {
    return Object.keys(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === t || !this.$$p_d[n].attribute && n.toLowerCase() === t
    ) || t;
  }
});
function m(e, t, n, r) {
  var s;
  const i = (s = n[e]) == null ? void 0 : s.type;
  if (t = i === "Boolean" && typeof t != "boolean" ? t != null : t, !r || !n[e])
    return t;
  if (r === "toAttribute")
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
function rt(e, t, n, r, i, s) {
  let o = class extends R {
    constructor() {
      super(e, n, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Object.keys(t).map(
        ($) => (t[$].attribute || $).toLowerCase()
      );
    }
  };
  return Object.keys(t).forEach(($) => {
    Object.defineProperty(o.prototype, $, {
      get() {
        return this.$$c && $ in this.$$c ? this.$$c[$] : this.$$d[$];
      },
      set(u) {
        var c;
        u = m($, u, t), this.$$d[$] = u, (c = this.$$c) == null || c.$set({ [$]: u });
      }
    });
  }), r.forEach(($) => {
    Object.defineProperty(o.prototype, $, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[$];
      }
    });
  }), s && (o = s(o)), e.element = /** @type {any} */
  o, o;
}
class it {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    f(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    f(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    et(this, 1), this.$destroy = d;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, n) {
    if (!P(n))
      return d;
    const r = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return r.push(n), () => {
      const i = r.indexOf(n);
      i !== -1 && r.splice(i, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !J(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const ot = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(ot);
function ct(e) {
  U(e, "svelte-17re9h9", ".chat-bot.svelte-17re9h9{position:absolute;bottom:10px;right:10px;padding:10px 10px}");
}
function $t(e) {
  let t;
  return {
    c() {
      t = k("content"), t.innerHTML = "<p>ChatBot Here</p>", M(t, "class", "chat-bot svelte-17re9h9");
    },
    m(n, r) {
      v(n, t, r);
    },
    p: d,
    i: d,
    o: d,
    d(n) {
      n && E(t);
    }
  };
}
class ut extends it {
  constructor(t) {
    super(), st(this, t, null, $t, D, {}, ct);
  }
}
customElements.define("hpc-chatbot", rt(ut, {}, [], [], !0));
export {
  ut as ChatBot
};
//# sourceMappingURL=components.js.map
