var et = Object.defineProperty;
var nt = (e, t, n) => t in e ? et(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var p = (e, t, n) => (nt(e, typeof t != "symbol" ? t + "" : t, n), n);
function g() {
}
function G(e) {
  return e();
}
function R() {
  return /* @__PURE__ */ Object.create(null);
}
function z(e) {
  e.forEach(G);
}
function Q(e) {
  return typeof e == "function";
}
function X(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function st(e) {
  return Object.keys(e).length === 0;
}
function ot(e, ...t) {
  if (e == null) {
    for (const s of t)
      s(void 0);
    return g;
  }
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function it(e, t, n) {
  e.$$.on_destroy.push(ot(t, n));
}
function $(e, t) {
  e.appendChild(t);
}
function rt(e, t, n) {
  const s = ct(e);
  if (!s.getElementById(t)) {
    const i = y("style");
    i.id = t, i.textContent = n, ut(s, i);
  }
}
function ct(e) {
  if (!e)
    return document;
  const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
  return t && /** @type {ShadowRoot} */
  t.host ? (
    /** @type {ShadowRoot} */
    t
  ) : e.ownerDocument;
}
function ut(e, t) {
  return $(
    /** @type {Document} */
    e.head || e,
    t
  ), t.sheet;
}
function L(e, t, n) {
  e.insertBefore(t, n || null);
}
function S(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function lt(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function y(e) {
  return document.createElement(e);
}
function k(e) {
  return document.createTextNode(e);
}
function C() {
  return k(" ");
}
function ft() {
  return k("");
}
function H(e, t, n, s) {
  return e.addEventListener(t, n, s), () => e.removeEventListener(t, n, s);
}
function at(e) {
  return function(t) {
    return t.preventDefault(), e.call(this, t);
  };
}
function _(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function dt(e) {
  return Array.from(e.childNodes);
}
function B(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
function J(e, t) {
  e.value = t ?? "";
}
function ht(e) {
  const t = {};
  return e.childNodes.forEach(
    /** @param {Element} node */
    (n) => {
      t[n.slot || "default"] = !0;
    }
  ), t;
}
let A;
function O(e) {
  A = e;
}
function $t() {
  if (!A)
    throw new Error("Function called outside component initialization");
  return A;
}
function pt(e) {
  $t().$$.on_mount.push(e);
}
const q = [], D = [];
let E = [];
const U = [], mt = /* @__PURE__ */ Promise.resolve();
let I = !1;
function bt() {
  I || (I = !0, mt.then(Z));
}
function M(e) {
  E.push(e);
}
const P = /* @__PURE__ */ new Set();
let x = 0;
function Z() {
  if (x !== 0)
    return;
  const e = A;
  do {
    try {
      for (; x < q.length; ) {
        const t = q[x];
        x++, O(t), _t(t.$$);
      }
    } catch (t) {
      throw q.length = 0, x = 0, t;
    }
    for (O(null), q.length = 0, x = 0; D.length; )
      D.pop()();
    for (let t = 0; t < E.length; t += 1) {
      const n = E[t];
      P.has(n) || (P.add(n), n());
    }
    E.length = 0;
  } while (q.length);
  for (; U.length; )
    U.pop()();
  I = !1, P.clear(), O(e);
}
function _t(e) {
  if (e.fragment !== null) {
    e.update(), z(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(M);
  }
}
function gt(e) {
  const t = [], n = [];
  E.forEach((s) => e.indexOf(s) === -1 ? t.push(s) : n.push(s)), n.forEach((s) => s()), E = t;
}
const yt = /* @__PURE__ */ new Set();
function wt(e, t) {
  e && e.i && (yt.delete(e), e.i(t));
}
function Y(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function jt(e, t, n) {
  const { fragment: s, after_update: i } = e.$$;
  s && s.m(t, n), M(() => {
    const o = e.$$.on_mount.map(G).filter(Q);
    e.$$.on_destroy ? e.$$.on_destroy.push(...o) : z(o), e.$$.on_mount = [];
  }), i.forEach(M);
}
function xt(e, t) {
  const n = e.$$;
  n.fragment !== null && (gt(n.after_update), z(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function vt(e, t) {
  e.$$.dirty[0] === -1 && (q.push(e), bt(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function qt(e, t, n, s, i, o, c = null, r = [-1]) {
  const l = A;
  O(e);
  const u = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: g,
    not_equal: i,
    bound: R(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (l ? l.$$.context : [])),
    // everything else
    callbacks: R(),
    dirty: r,
    skip_bound: !1,
    root: t.target || l.$$.root
  };
  c && c(u.root);
  let m = !1;
  if (u.ctx = n ? n(e, t.props || {}, (f, w, ...b) => {
    const d = b.length ? b[0] : w;
    return u.ctx && i(u.ctx[f], u.ctx[f] = d) && (!u.skip_bound && u.bound[f] && u.bound[f](d), m && vt(e, f)), w;
  }) : [], u.update(), m = !0, z(u.before_update), u.fragment = s ? s(u.ctx) : !1, t.target) {
    if (t.hydrate) {
      const f = dt(t.target);
      u.fragment && u.fragment.l(f), f.forEach(S);
    } else
      u.fragment && u.fragment.c();
    t.intro && wt(e.$$.fragment), jt(e, t.target, t.anchor), Z();
  }
  O(l);
}
let tt;
typeof HTMLElement == "function" && (tt = class extends HTMLElement {
  constructor(t, n, s) {
    super();
    /** The Svelte component constructor */
    p(this, "$$ctor");
    /** Slots */
    p(this, "$$s");
    /** The Svelte component instance */
    p(this, "$$c");
    /** Whether or not the custom element is connected */
    p(this, "$$cn", !1);
    /** Component props data */
    p(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    p(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    p(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    p(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    p(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = t, this.$$s = n, s && this.attachShadow({ mode: "open" });
  }
  addEventListener(t, n, s) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(n), this.$$c) {
      const i = this.$$c.$on(t, n);
      this.$$l_u.set(n, i);
    }
    super.addEventListener(t, n, s);
  }
  removeEventListener(t, n, s) {
    if (super.removeEventListener(t, n, s), this.$$c) {
      const i = this.$$l_u.get(n);
      i && (i(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(o) {
        return () => {
          let c;
          return {
            c: function() {
              c = y("slot"), o !== "default" && _(c, "name", o);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(u, m) {
              L(u, c, m);
            },
            d: function(u) {
              u && S(c);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn)
        return;
      const n = {}, s = ht(this);
      for (const o of this.$$s)
        o in s && (n[o] = [t(o)]);
      for (const o of this.attributes) {
        const c = this.$$g_p(o.name);
        c in this.$$d || (this.$$d[c] = N(c, o.value, this.$$p_d, "toProp"));
      }
      for (const o in this.$$p_d)
        !(o in this.$$d) && this[o] !== void 0 && (this.$$d[o] = this[o], delete this[o]);
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
        for (const o in this.$$p_d)
          if (this.$$d[o] = this.$$c.$$.ctx[this.$$c.$$.props[o]], this.$$p_d[o].reflect) {
            const c = N(
              o,
              this.$$d[o],
              this.$$p_d,
              "toAttribute"
            );
            c == null ? this.removeAttribute(this.$$p_d[o].attribute || o) : this.setAttribute(this.$$p_d[o].attribute || o, c);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(i), i();
      for (const o in this.$$l)
        for (const c of this.$$l[o]) {
          const r = this.$$c.$on(o, c);
          this.$$l_u.set(c, r);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(t, n, s) {
    var i;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = N(t, s, this.$$p_d, "toProp"), (i = this.$$c) == null || i.$set({ [t]: this.$$d[t] }));
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
function N(e, t, n, s) {
  var o;
  const i = (o = n[e]) == null ? void 0 : o.type;
  if (t = i === "Boolean" && typeof t != "boolean" ? t != null : t, !s || !n[e])
    return t;
  if (s === "toAttribute")
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
function Et(e, t, n, s, i, o) {
  let c = class extends tt {
    constructor() {
      super(e, n, i), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Object.keys(t).map(
        (r) => (t[r].attribute || r).toLowerCase()
      );
    }
  };
  return Object.keys(t).forEach((r) => {
    Object.defineProperty(c.prototype, r, {
      get() {
        return this.$$c && r in this.$$c ? this.$$c[r] : this.$$d[r];
      },
      set(l) {
        var u;
        l = N(r, l, t), this.$$d[r] = l, (u = this.$$c) == null || u.$set({ [r]: l });
      }
    });
  }), s.forEach((r) => {
    Object.defineProperty(c.prototype, r, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[r];
      }
    });
  }), o && (c = o(c)), e.element = /** @type {any} */
  c, c;
}
class kt {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    p(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    p(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    xt(this, 1), this.$destroy = g;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, n) {
    if (!Q(n))
      return g;
    const s = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return s.push(n), () => {
      const i = s.indexOf(n);
      i !== -1 && s.splice(i, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !st(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const Ot = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Ot);
const v = [];
function At(e, t = g) {
  let n;
  const s = /* @__PURE__ */ new Set();
  function i(r) {
    if (X(e, r) && (e = r, n)) {
      const l = !v.length;
      for (const u of s)
        u[1](), v.push(u, e);
      if (l) {
        for (let u = 0; u < v.length; u += 2)
          v[u][0](v[u + 1]);
        v.length = 0;
      }
    }
  }
  function o(r) {
    i(r(e));
  }
  function c(r, l = g) {
    const u = [r, l];
    return s.add(u), s.size === 1 && (n = t(i, o) || g), r(e), () => {
      s.delete(u), s.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: o, subscribe: c };
}
function zt() {
  const { subscribe: e, set: t } = At(window.location);
  return window.addEventListener("popstate", () => t(window.location)), { subscribe: e };
}
const St = zt();
function Ct(e) {
  rt(e, "svelte-1qjvzjq", ".mb-10.svelte-1qjvzjq{margin-bottom:10px}.text-bold.svelte-1qjvzjq{font-weight:700}.mt-10.svelte-1qjvzjq{margin-top:10px}.text-small.svelte-1qjvzjq{font-size:80%}.text.svelte-1qjvzjq{display:block;border-radius:10px;font-size:120%;padding:8px 8px;width:100%}.chat-bot.svelte-1qjvzjq{min-width:25%;border:1px solid grey;border-radius:5px;position:absolute;bottom:10px;right:10px;padding:10px 10px;display:flex;flex-direction:column;align-items:stretch}");
}
function F(e, t, n) {
  const s = e.slice();
  return s[8] = t[n], s;
}
function V(e) {
  let t, n = (
    /*roleIcons*/
    e[3][
      /*message*/
      e[8].role
    ] + ""
  ), s, i, o = (
    /*message*/
    e[8].content + ""
  ), c;
  return {
    c() {
      t = y("div"), s = k(n), i = C(), c = k(o), _(t, "class", "message");
    },
    m(r, l) {
      L(r, t, l), $(t, s), $(t, i), $(t, c);
    },
    p(r, l) {
      l & /*messages*/
      1 && n !== (n = /*roleIcons*/
      r[3][
        /*message*/
        r[8].role
      ] + "") && B(s, n), l & /*messages*/
      1 && o !== (o = /*message*/
      r[8].content + "") && B(c, o);
    },
    d(r) {
      r && S(t);
    }
  };
}
function W(e) {
  let t, n = (
    /*message*/
    e[8].role != "system" && V(e)
  );
  return {
    c() {
      n && n.c(), t = ft();
    },
    m(s, i) {
      n && n.m(s, i), L(s, t, i);
    },
    p(s, i) {
      /*message*/
      s[8].role != "system" ? n ? n.p(s, i) : (n = V(s), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    d(s) {
      s && S(t), n && n.d(s);
    }
  };
}
function Nt(e) {
  let t, n, s, i, o, c, r, l, u, m, f, w, b = Y(
    /*messages*/
    e[0]
  ), d = [];
  for (let a = 0; a < b.length; a += 1)
    d[a] = W(F(e, b, a));
  return {
    c() {
      t = y("content"), n = y("div"), s = k("🤖 HPC AI Assistant "), i = k(
        /*aiStatus*/
        e[1]
      ), o = C();
      for (let a = 0; a < d.length; a += 1)
        d[a].c();
      c = C(), r = y("form"), l = y("input"), u = C(), m = y("div"), m.textContent = "The assistant makes mistakes, always check important information", _(n, "class", "mb-10 text-bold svelte-1qjvzjq"), _(l, "class", "text svelte-1qjvzjq"), _(l, "type", "text"), _(l, "placeholder", "What do you want help with?"), _(r, "action", "#"), _(m, "class", "mt-10 text-small svelte-1qjvzjq"), _(t, "class", "chat-bot svelte-1qjvzjq");
    },
    m(a, j) {
      L(a, t, j), $(t, n), $(n, s), $(n, i), $(t, o);
      for (let h = 0; h < d.length; h += 1)
        d[h] && d[h].m(t, null);
      $(t, c), $(t, r), $(r, l), J(
        l,
        /*text*/
        e[2]
      ), $(t, u), $(t, m), f || (w = [
        H(
          l,
          "input",
          /*input_input_handler*/
          e[6]
        ),
        H(r, "submit", at(
          /*handleUserMessage*/
          e[4]
        ))
      ], f = !0);
    },
    p(a, [j]) {
      if (j & /*aiStatus*/
      2 && B(
        i,
        /*aiStatus*/
        a[1]
      ), j & /*messages, roleIcons*/
      9) {
        b = Y(
          /*messages*/
          a[0]
        );
        let h;
        for (h = 0; h < b.length; h += 1) {
          const T = F(a, b, h);
          d[h] ? d[h].p(T, j) : (d[h] = W(T), d[h].c(), d[h].m(t, c));
        }
        for (; h < d.length; h += 1)
          d[h].d(1);
        d.length = b.length;
      }
      j & /*text*/
      4 && l.value !== /*text*/
      a[2] && J(
        l,
        /*text*/
        a[2]
      );
    },
    i: g,
    o: g,
    d(a) {
      a && S(t), lt(d, a), f = !1, z(w);
    }
  };
}
const K = "stablelm2:1.6b-zephyr-q3_K_L";
function Lt(e, t, n) {
  let s;
  it(e, St, (f) => n(5, s = f));
  let i, o = [
    {
      role: "system",
      content: "You are LucIAno, an helpful AI assistant, expert in High Performance Computing, Linux System Administration, and Python and FORTRAN programming. You always answer to users very precisely and to-the-point, helping them to clarify their question when they are vaguely expressed. You politely refuse to answer questions not related to your expertise area. Write output in Markdown."
    }
  ], c = "🟡", r;
  const l = { user: "👤", assistant: "🤖" };
  pt(async () => {
    const f = await fetch(`${i}/api/generate`, {
      method: "POST",
      body: JSON.stringify({ model: K })
    });
    n(1, c = f.status === 200 ? "🟢" : "🔴");
  });
  async function u() {
    n(0, o = [...o, { role: "user", content: r }]), n(2, r = ""), n(1, c = "🔵");
    const f = await fetch(`${i}/api/chat`, {
      method: "POST",
      body: JSON.stringify({ model: K, messages: o, stream: !1 })
    });
    if (f.status === 200) {
      const w = await f.json();
      n(1, c = "🟢"), n(0, o = [...o, w.message]);
    } else
      n(1, c = "🔴");
  }
  function m() {
    r = this.value, n(2, r);
  }
  return e.$$.update = () => {
    e.$$.dirty & /*$page*/
    32 && (i = `${s.protocol}//${s.hostname}:11434`);
  }, [
    o,
    c,
    r,
    l,
    u,
    s,
    m
  ];
}
class Pt extends kt {
  constructor(t) {
    super(), qt(this, t, Lt, Nt, X, {}, Ct);
  }
}
customElements.define("hpc-chatbot", Et(Pt, {}, [], [], !0));
export {
  Pt as ChatBot
};
//# sourceMappingURL=components.js.map
