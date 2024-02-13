var oa = Object.defineProperty;
var ia = (e, r, n) => r in e ? oa(e, r, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[r] = n;
var _e = (e, r, n) => (ia(e, typeof r != "symbol" ? r + "" : r, n), n);
function ye() {
}
function pn(e) {
  return e();
}
function bt() {
  return /* @__PURE__ */ Object.create(null);
}
function Ve(e) {
  e.forEach(pn);
}
function mn(e) {
  return typeof e == "function";
}
function gn(e, r) {
  return e != e ? r == r : e !== r || e && typeof e == "object" || typeof e == "function";
}
function sa(e) {
  return Object.keys(e).length === 0;
}
function Kr(e, ...r) {
  if (e == null) {
    for (const t of r)
      t(void 0);
    return ye;
  }
  const n = e.subscribe(...r);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function ca(e) {
  let r;
  return Kr(e, (n) => r = n)(), r;
}
function fa(e, r, n) {
  e.$$.on_destroy.push(Kr(r, n));
}
function Q(e, r) {
  e.appendChild(r);
}
function la(e, r, n) {
  const t = ha(e);
  if (!t.getElementById(r)) {
    const o = te("style");
    o.id = r, o.textContent = n, pa(t, o);
  }
}
function ha(e) {
  if (!e)
    return document;
  const r = e.getRootNode ? e.getRootNode() : e.ownerDocument;
  return r && /** @type {ShadowRoot} */
  r.host ? (
    /** @type {ShadowRoot} */
    r
  ) : e.ownerDocument;
}
function pa(e, r) {
  return Q(
    /** @type {Document} */
    e.head || e,
    r
  ), r.sheet;
}
function ge(e, r, n) {
  e.insertBefore(r, n || null);
}
function me(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function ma(e, r) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(r);
}
function te(e) {
  return document.createElement(e);
}
function Ie(e) {
  return document.createTextNode(e);
}
function ve() {
  return Ie(" ");
}
function bn() {
  return Ie("");
}
function qe(e, r, n, t) {
  return e.addEventListener(r, n, t), () => e.removeEventListener(r, n, t);
}
function ga(e) {
  return function(r) {
    return r.preventDefault(), e.call(this, r);
  };
}
function Z(e, r, n) {
  n == null ? e.removeAttribute(r) : e.getAttribute(r) !== n && e.setAttribute(r, n);
}
function ba(e) {
  return Array.from(e.childNodes);
}
function Lr(e, r) {
  r = "" + r, e.data !== r && (e.data = /** @type {string} */
  r);
}
function wt(e, r) {
  e.value = r ?? "";
}
function le(e, r, n) {
  e.classList.toggle(r, !!n);
}
function wa(e) {
  const r = {};
  return e.childNodes.forEach(
    /** @param {Element} node */
    (n) => {
      r[n.slot || "default"] = !0;
    }
  ), r;
}
let er;
function Je(e) {
  er = e;
}
function _a() {
  if (!er)
    throw new Error("Function called outside component initialization");
  return er;
}
function va(e) {
  _a().$$.on_mount.push(e);
}
const De = [], _t = [];
let He = [];
const vt = [], ya = /* @__PURE__ */ Promise.resolve();
let Tr = !1;
function ka() {
  Tr || (Tr = !0, ya.then(wn));
}
function jr(e) {
  He.push(e);
}
const Or = /* @__PURE__ */ new Set();
let Re = 0;
function wn() {
  if (Re !== 0)
    return;
  const e = er;
  do {
    try {
      for (; Re < De.length; ) {
        const r = De[Re];
        Re++, Je(r), Sa(r.$$);
      }
    } catch (r) {
      throw De.length = 0, Re = 0, r;
    }
    for (Je(null), De.length = 0, Re = 0; _t.length; )
      _t.pop()();
    for (let r = 0; r < He.length; r += 1) {
      const n = He[r];
      Or.has(n) || (Or.add(n), n());
    }
    He.length = 0;
  } while (De.length);
  for (; vt.length; )
    vt.pop()();
  Tr = !1, Or.clear(), Je(e);
}
function Sa(e) {
  if (e.fragment !== null) {
    e.update(), Ve(e.before_update);
    const r = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, r), e.after_update.forEach(jr);
  }
}
function Pa(e) {
  const r = [], n = [];
  He.forEach((t) => e.indexOf(t) === -1 ? r.push(t) : n.push(t)), n.forEach((t) => t()), He = r;
}
const Aa = /* @__PURE__ */ new Set();
function Ea(e, r) {
  e && e.i && (Aa.delete(e), e.i(r));
}
function yt(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function Oa(e, r, n) {
  const { fragment: t, after_update: o } = e.$$;
  t && t.m(r, n), jr(() => {
    const f = e.$$.on_mount.map(pn).filter(mn);
    e.$$.on_destroy ? e.$$.on_destroy.push(...f) : Ve(f), e.$$.on_mount = [];
  }), o.forEach(jr);
}
function $a(e, r) {
  const n = e.$$;
  n.fragment !== null && (Pa(n.after_update), Ve(n.on_destroy), n.fragment && n.fragment.d(r), n.on_destroy = n.fragment = null, n.ctx = []);
}
function La(e, r) {
  e.$$.dirty[0] === -1 && (De.push(e), ka(), e.$$.dirty.fill(0)), e.$$.dirty[r / 31 | 0] |= 1 << r % 31;
}
function Ta(e, r, n, t, o, f, g = null, w = [-1]) {
  const A = er;
  Je(e);
  const P = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: f,
    update: ye,
    not_equal: o,
    bound: bt(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(r.context || (A ? A.$$.context : [])),
    // everything else
    callbacks: bt(),
    dirty: w,
    skip_bound: !1,
    root: r.target || A.$$.root
  };
  g && g(P.root);
  let U = !1;
  if (P.ctx = n ? n(e, r.props || {}, (L, B, ...V) => {
    const W = V.length ? V[0] : B;
    return P.ctx && o(P.ctx[L], P.ctx[L] = W) && (!P.skip_bound && P.bound[L] && P.bound[L](W), U && La(e, L)), B;
  }) : [], P.update(), U = !0, Ve(P.before_update), P.fragment = t ? t(P.ctx) : !1, r.target) {
    if (r.hydrate) {
      const L = ba(r.target);
      P.fragment && P.fragment.l(L), L.forEach(me);
    } else
      P.fragment && P.fragment.c();
    r.intro && Ea(e.$$.fragment), Oa(e, r.target, r.anchor), wn();
  }
  Je(A);
}
let _n;
typeof HTMLElement == "function" && (_n = class extends HTMLElement {
  constructor(r, n, t) {
    super();
    /** The Svelte component constructor */
    _e(this, "$$ctor");
    /** Slots */
    _e(this, "$$s");
    /** The Svelte component instance */
    _e(this, "$$c");
    /** Whether or not the custom element is connected */
    _e(this, "$$cn", !1);
    /** Component props data */
    _e(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    _e(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    _e(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    _e(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    _e(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = r, this.$$s = n, t && this.attachShadow({ mode: "open" });
  }
  addEventListener(r, n, t) {
    if (this.$$l[r] = this.$$l[r] || [], this.$$l[r].push(n), this.$$c) {
      const o = this.$$c.$on(r, n);
      this.$$l_u.set(n, o);
    }
    super.addEventListener(r, n, t);
  }
  removeEventListener(r, n, t) {
    if (super.removeEventListener(r, n, t), this.$$c) {
      const o = this.$$l_u.get(n);
      o && (o(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let r = function(f) {
        return () => {
          let g;
          return {
            c: function() {
              g = te("slot"), f !== "default" && Z(g, "name", f);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(P, U) {
              ge(P, g, U);
            },
            d: function(P) {
              P && me(g);
            }
          };
        };
      };
      if (await Promise.resolve(), !this.$$cn)
        return;
      const n = {}, t = wa(this);
      for (const f of this.$$s)
        f in t && (n[f] = [r(f)]);
      for (const f of this.attributes) {
        const g = this.$$g_p(f.name);
        g in this.$$d || (this.$$d[g] = lr(g, f.value, this.$$p_d, "toProp"));
      }
      for (const f in this.$$p_d)
        !(f in this.$$d) && this[f] !== void 0 && (this.$$d[f] = this[f], delete this[f]);
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
      const o = () => {
        this.$$r = !0;
        for (const f in this.$$p_d)
          if (this.$$d[f] = this.$$c.$$.ctx[this.$$c.$$.props[f]], this.$$p_d[f].reflect) {
            const g = lr(
              f,
              this.$$d[f],
              this.$$p_d,
              "toAttribute"
            );
            g == null ? this.removeAttribute(this.$$p_d[f].attribute || f) : this.setAttribute(this.$$p_d[f].attribute || f, g);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(o), o();
      for (const f in this.$$l)
        for (const g of this.$$l[f]) {
          const w = this.$$c.$on(f, g);
          this.$$l_u.set(g, w);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(r, n, t) {
    var o;
    this.$$r || (r = this.$$g_p(r), this.$$d[r] = lr(r, t, this.$$p_d, "toProp"), (o = this.$$c) == null || o.$set({ [r]: this.$$d[r] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      this.$$cn || (this.$$c.$destroy(), this.$$c = void 0);
    });
  }
  $$g_p(r) {
    return Object.keys(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === r || !this.$$p_d[n].attribute && n.toLowerCase() === r
    ) || r;
  }
});
function lr(e, r, n, t) {
  var f;
  const o = (f = n[e]) == null ? void 0 : f.type;
  if (r = o === "Boolean" && typeof r != "boolean" ? r != null : r, !t || !n[e])
    return r;
  if (t === "toAttribute")
    switch (o) {
      case "Object":
      case "Array":
        return r == null ? null : JSON.stringify(r);
      case "Boolean":
        return r ? "" : null;
      case "Number":
        return r ?? null;
      default:
        return r;
    }
  else
    switch (o) {
      case "Object":
      case "Array":
        return r && JSON.parse(r);
      case "Boolean":
        return r;
      case "Number":
        return r != null ? +r : r;
      default:
        return r;
    }
}
function ja(e, r, n, t, o, f) {
  let g = class extends _n {
    constructor() {
      super(e, n, o), this.$$p_d = r;
    }
    static get observedAttributes() {
      return Object.keys(r).map(
        (w) => (r[w].attribute || w).toLowerCase()
      );
    }
  };
  return Object.keys(r).forEach((w) => {
    Object.defineProperty(g.prototype, w, {
      get() {
        return this.$$c && w in this.$$c ? this.$$c[w] : this.$$d[w];
      },
      set(A) {
        var P;
        A = lr(w, A, r), this.$$d[w] = A, (P = this.$$c) == null || P.$set({ [w]: A });
      }
    });
  }), t.forEach((w) => {
    Object.defineProperty(g.prototype, w, {
      get() {
        var A;
        return (A = this.$$c) == null ? void 0 : A[w];
      }
    });
  }), f && (g = f(g)), e.element = /** @type {any} */
  g, g;
}
class Ca {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    _e(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    _e(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    $a(this, 1), this.$destroy = ye;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(r, n) {
    if (!mn(n))
      return ye;
    const t = this.$$.callbacks[r] || (this.$$.callbacks[r] = []);
    return t.push(n), () => {
      const o = t.indexOf(n);
      o !== -1 && t.splice(o, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(r) {
    this.$$set && !sa(r) && (this.$$.skip_bound = !0, this.$$set(r), this.$$.skip_bound = !1);
  }
}
const Ia = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Ia);
var je = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function vn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var yn = { exports: {} };
(function(e) {
  (function() {
    function r(u) {
      var a = {
        omitExtraWLInCodeBlocks: {
          defaultValue: !1,
          describe: "Omit the default extra whiteline added to code blocks",
          type: "boolean"
        },
        noHeaderId: {
          defaultValue: !1,
          describe: "Turn on/off generated header id",
          type: "boolean"
        },
        prefixHeaderId: {
          defaultValue: !1,
          describe: "Add a prefix to the generated header ids. Passing a string will prefix that string to the header id. Setting to true will add a generic 'section-' prefix",
          type: "string"
        },
        rawPrefixHeaderId: {
          defaultValue: !1,
          describe: 'Setting this option to true will prevent showdown from modifying the prefix. This might result in malformed IDs (if, for instance, the " char is used in the prefix)',
          type: "boolean"
        },
        ghCompatibleHeaderId: {
          defaultValue: !1,
          describe: "Generate header ids compatible with github style (spaces are replaced with dashes, a bunch of non alphanumeric chars are removed)",
          type: "boolean"
        },
        rawHeaderId: {
          defaultValue: !1,
          describe: `Remove only spaces, ' and " from generated header ids (including prefixes), replacing them with dashes (-). WARNING: This might result in malformed ids`,
          type: "boolean"
        },
        headerLevelStart: {
          defaultValue: !1,
          describe: "The header blocks level start",
          type: "integer"
        },
        parseImgDimensions: {
          defaultValue: !1,
          describe: "Turn on/off image dimension parsing",
          type: "boolean"
        },
        simplifiedAutoLink: {
          defaultValue: !1,
          describe: "Turn on/off GFM autolink style",
          type: "boolean"
        },
        excludeTrailingPunctuationFromURLs: {
          defaultValue: !1,
          describe: "Excludes trailing punctuation from links generated with autoLinking",
          type: "boolean"
        },
        literalMidWordUnderscores: {
          defaultValue: !1,
          describe: "Parse midword underscores as literal underscores",
          type: "boolean"
        },
        literalMidWordAsterisks: {
          defaultValue: !1,
          describe: "Parse midword asterisks as literal asterisks",
          type: "boolean"
        },
        strikethrough: {
          defaultValue: !1,
          describe: "Turn on/off strikethrough support",
          type: "boolean"
        },
        tables: {
          defaultValue: !1,
          describe: "Turn on/off tables support",
          type: "boolean"
        },
        tablesHeaderId: {
          defaultValue: !1,
          describe: "Add an id to table headers",
          type: "boolean"
        },
        ghCodeBlocks: {
          defaultValue: !0,
          describe: "Turn on/off GFM fenced code blocks support",
          type: "boolean"
        },
        tasklists: {
          defaultValue: !1,
          describe: "Turn on/off GFM tasklist support",
          type: "boolean"
        },
        smoothLivePreview: {
          defaultValue: !1,
          describe: "Prevents weird effects in live previews due to incomplete input",
          type: "boolean"
        },
        smartIndentationFix: {
          defaultValue: !1,
          describe: "Tries to smartly fix indentation in es6 strings",
          type: "boolean"
        },
        disableForced4SpacesIndentedSublists: {
          defaultValue: !1,
          describe: "Disables the requirement of indenting nested sublists by 4 spaces",
          type: "boolean"
        },
        simpleLineBreaks: {
          defaultValue: !1,
          describe: "Parses simple line breaks as <br> (GFM Style)",
          type: "boolean"
        },
        requireSpaceBeforeHeadingText: {
          defaultValue: !1,
          describe: "Makes adding a space between `#` and the header text mandatory (GFM Style)",
          type: "boolean"
        },
        ghMentions: {
          defaultValue: !1,
          describe: "Enables github @mentions",
          type: "boolean"
        },
        ghMentionsLink: {
          defaultValue: "https://github.com/{u}",
          describe: "Changes the link generated by @mentions. Only applies if ghMentions option is enabled.",
          type: "string"
        },
        encodeEmails: {
          defaultValue: !0,
          describe: "Encode e-mail addresses through the use of Character Entities, transforming ASCII e-mail addresses into its equivalent decimal entities",
          type: "boolean"
        },
        openLinksInNewWindow: {
          defaultValue: !1,
          describe: "Open all links in new windows",
          type: "boolean"
        },
        backslashEscapesHTMLTags: {
          defaultValue: !1,
          describe: "Support for HTML Tag escaping. ex: <div>foo</div>",
          type: "boolean"
        },
        emoji: {
          defaultValue: !1,
          describe: "Enable emoji support. Ex: `this is a :smile: emoji`",
          type: "boolean"
        },
        underline: {
          defaultValue: !1,
          describe: "Enable support for underline. Syntax is double or triple underscores: `__underline word__`. With this option enabled, underscores no longer parses into `<em>` and `<strong>`",
          type: "boolean"
        },
        ellipsis: {
          defaultValue: !0,
          describe: "Replaces three dots with the ellipsis unicode character",
          type: "boolean"
        },
        completeHTMLDocument: {
          defaultValue: !1,
          describe: "Outputs a complete html document, including `<html>`, `<head>` and `<body>` tags",
          type: "boolean"
        },
        metadata: {
          defaultValue: !1,
          describe: "Enable support for document metadata (defined at the top of the document between `«««` and `»»»` or between `---` and `---`).",
          type: "boolean"
        },
        splitAdjacentBlockquotes: {
          defaultValue: !1,
          describe: "Split adjacent blockquote blocks",
          type: "boolean"
        }
      };
      if (u === !1)
        return JSON.parse(JSON.stringify(a));
      var d = {};
      for (var c in a)
        a.hasOwnProperty(c) && (d[c] = a[c].defaultValue);
      return d;
    }
    function n() {
      var u = r(!0), a = {};
      for (var d in u)
        u.hasOwnProperty(d) && (a[d] = !0);
      return a;
    }
    var t = {}, o = {}, f = {}, g = r(!0), w = "vanilla", A = {
      github: {
        omitExtraWLInCodeBlocks: !0,
        simplifiedAutoLink: !0,
        excludeTrailingPunctuationFromURLs: !0,
        literalMidWordUnderscores: !0,
        strikethrough: !0,
        tables: !0,
        tablesHeaderId: !0,
        ghCodeBlocks: !0,
        tasklists: !0,
        disableForced4SpacesIndentedSublists: !0,
        simpleLineBreaks: !0,
        requireSpaceBeforeHeadingText: !0,
        ghCompatibleHeaderId: !0,
        ghMentions: !0,
        backslashEscapesHTMLTags: !0,
        emoji: !0,
        splitAdjacentBlockquotes: !0
      },
      original: {
        noHeaderId: !0,
        ghCodeBlocks: !1
      },
      ghost: {
        omitExtraWLInCodeBlocks: !0,
        parseImgDimensions: !0,
        simplifiedAutoLink: !0,
        excludeTrailingPunctuationFromURLs: !0,
        literalMidWordUnderscores: !0,
        strikethrough: !0,
        tables: !0,
        tablesHeaderId: !0,
        ghCodeBlocks: !0,
        tasklists: !0,
        smoothLivePreview: !0,
        simpleLineBreaks: !0,
        requireSpaceBeforeHeadingText: !0,
        ghMentions: !1,
        encodeEmails: !0
      },
      vanilla: r(!0),
      allOn: n()
    };
    t.helper = {}, t.extensions = {}, t.setOption = function(u, a) {
      return g[u] = a, this;
    }, t.getOption = function(u) {
      return g[u];
    }, t.getOptions = function() {
      return g;
    }, t.resetOptions = function() {
      g = r(!0);
    }, t.setFlavor = function(u) {
      if (!A.hasOwnProperty(u))
        throw Error(u + " flavor was not found");
      t.resetOptions();
      var a = A[u];
      w = u;
      for (var d in a)
        a.hasOwnProperty(d) && (g[d] = a[d]);
    }, t.getFlavor = function() {
      return w;
    }, t.getFlavorOptions = function(u) {
      if (A.hasOwnProperty(u))
        return A[u];
    }, t.getDefaultOptions = function(u) {
      return r(u);
    }, t.subParser = function(u, a) {
      if (t.helper.isString(u))
        if (typeof a < "u")
          o[u] = a;
        else {
          if (o.hasOwnProperty(u))
            return o[u];
          throw Error("SubParser named " + u + " not registered!");
        }
    }, t.extension = function(u, a) {
      if (!t.helper.isString(u))
        throw Error("Extension 'name' must be a string");
      if (u = t.helper.stdExtName(u), t.helper.isUndefined(a)) {
        if (!f.hasOwnProperty(u))
          throw Error("Extension named " + u + " is not registered!");
        return f[u];
      } else {
        typeof a == "function" && (a = a()), t.helper.isArray(a) || (a = [a]);
        var d = P(a, u);
        if (d.valid)
          f[u] = a;
        else
          throw Error(d.error);
      }
    }, t.getAllExtensions = function() {
      return f;
    }, t.removeExtension = function(u) {
      delete f[u];
    }, t.resetExtensions = function() {
      f = {};
    };
    function P(u, a) {
      var d = a ? "Error in " + a + " extension->" : "Error in unnamed extension", c = {
        valid: !0,
        error: ""
      };
      t.helper.isArray(u) || (u = [u]);
      for (var s = 0; s < u.length; ++s) {
        var m = d + " sub-extension " + s + ": ", h = u[s];
        if (typeof h != "object")
          return c.valid = !1, c.error = m + "must be an object, but " + typeof h + " given", c;
        if (!t.helper.isString(h.type))
          return c.valid = !1, c.error = m + 'property "type" must be a string, but ' + typeof h.type + " given", c;
        var _ = h.type = h.type.toLowerCase();
        if (_ === "language" && (_ = h.type = "lang"), _ === "html" && (_ = h.type = "output"), _ !== "lang" && _ !== "output" && _ !== "listener")
          return c.valid = !1, c.error = m + "type " + _ + ' is not recognized. Valid values: "lang/language", "output/html" or "listener"', c;
        if (_ === "listener") {
          if (t.helper.isUndefined(h.listeners))
            return c.valid = !1, c.error = m + '. Extensions of type "listener" must have a property called "listeners"', c;
        } else if (t.helper.isUndefined(h.filter) && t.helper.isUndefined(h.regex))
          return c.valid = !1, c.error = m + _ + ' extensions must define either a "regex" property or a "filter" method', c;
        if (h.listeners) {
          if (typeof h.listeners != "object")
            return c.valid = !1, c.error = m + '"listeners" property must be an object but ' + typeof h.listeners + " given", c;
          for (var T in h.listeners)
            if (h.listeners.hasOwnProperty(T) && typeof h.listeners[T] != "function")
              return c.valid = !1, c.error = m + '"listeners" property must be an hash of [event name]: [callback]. listeners.' + T + " must be a function but " + typeof h.listeners[T] + " given", c;
        }
        if (h.filter) {
          if (typeof h.filter != "function")
            return c.valid = !1, c.error = m + '"filter" must be a function, but ' + typeof h.filter + " given", c;
        } else if (h.regex) {
          if (t.helper.isString(h.regex) && (h.regex = new RegExp(h.regex, "g")), !(h.regex instanceof RegExp))
            return c.valid = !1, c.error = m + '"regex" property must either be a string or a RegExp object, but ' + typeof h.regex + " given", c;
          if (t.helper.isUndefined(h.replace))
            return c.valid = !1, c.error = m + '"regex" extensions must implement a replace string or function', c;
        }
      }
      return c;
    }
    t.validateExtension = function(u) {
      var a = P(u, null);
      return a.valid ? !0 : (console.warn(a.error), !1);
    }, t.hasOwnProperty("helper") || (t.helper = {}), t.helper.isString = function(u) {
      return typeof u == "string" || u instanceof String;
    }, t.helper.isFunction = function(u) {
      var a = {};
      return u && a.toString.call(u) === "[object Function]";
    }, t.helper.isArray = function(u) {
      return Array.isArray(u);
    }, t.helper.isUndefined = function(u) {
      return typeof u > "u";
    }, t.helper.forEach = function(u, a) {
      if (t.helper.isUndefined(u))
        throw new Error("obj param is required");
      if (t.helper.isUndefined(a))
        throw new Error("callback param is required");
      if (!t.helper.isFunction(a))
        throw new Error("callback param must be a function/closure");
      if (typeof u.forEach == "function")
        u.forEach(a);
      else if (t.helper.isArray(u))
        for (var d = 0; d < u.length; d++)
          a(u[d], d, u);
      else if (typeof u == "object")
        for (var c in u)
          u.hasOwnProperty(c) && a(u[c], c, u);
      else
        throw new Error("obj does not seem to be an array or an iterable object");
    }, t.helper.stdExtName = function(u) {
      return u.replace(/[_?*+\/\\.^-]/g, "").replace(/\s/g, "").toLowerCase();
    };
    function U(u, a) {
      var d = a.charCodeAt(0);
      return "¨E" + d + "E";
    }
    t.helper.escapeCharactersCallback = U, t.helper.escapeCharacters = function(u, a, d) {
      var c = "([" + a.replace(/([\[\]\\])/g, "\\$1") + "])";
      d && (c = "\\\\" + c);
      var s = new RegExp(c, "g");
      return u = u.replace(s, U), u;
    }, t.helper.unescapeHTMLEntities = function(u) {
      return u.replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
    };
    var L = function(u, a, d, c) {
      var s = c || "", m = s.indexOf("g") > -1, h = new RegExp(a + "|" + d, "g" + s.replace(/g/g, "")), _ = new RegExp(a, s.replace(/g/g, "")), T = [], E, j, C, p, O;
      do
        for (E = 0; C = h.exec(u); )
          if (_.test(C[0]))
            E++ || (j = h.lastIndex, p = j - C[0].length);
          else if (E && !--E) {
            O = C.index + C[0].length;
            var R = {
              left: { start: p, end: j },
              match: { start: j, end: C.index },
              right: { start: C.index, end: O },
              wholeMatch: { start: p, end: O }
            };
            if (T.push(R), !m)
              return T;
          }
      while (E && (h.lastIndex = j));
      return T;
    };
    t.helper.matchRecursiveRegExp = function(u, a, d, c) {
      for (var s = L(u, a, d, c), m = [], h = 0; h < s.length; ++h)
        m.push([
          u.slice(s[h].wholeMatch.start, s[h].wholeMatch.end),
          u.slice(s[h].match.start, s[h].match.end),
          u.slice(s[h].left.start, s[h].left.end),
          u.slice(s[h].right.start, s[h].right.end)
        ]);
      return m;
    }, t.helper.replaceRecursiveRegExp = function(u, a, d, c, s) {
      if (!t.helper.isFunction(a)) {
        var m = a;
        a = function() {
          return m;
        };
      }
      var h = L(u, d, c, s), _ = u, T = h.length;
      if (T > 0) {
        var E = [];
        h[0].wholeMatch.start !== 0 && E.push(u.slice(0, h[0].wholeMatch.start));
        for (var j = 0; j < T; ++j)
          E.push(
            a(
              u.slice(h[j].wholeMatch.start, h[j].wholeMatch.end),
              u.slice(h[j].match.start, h[j].match.end),
              u.slice(h[j].left.start, h[j].left.end),
              u.slice(h[j].right.start, h[j].right.end)
            )
          ), j < T - 1 && E.push(u.slice(h[j].wholeMatch.end, h[j + 1].wholeMatch.start));
        h[T - 1].wholeMatch.end < u.length && E.push(u.slice(h[T - 1].wholeMatch.end)), _ = E.join("");
      }
      return _;
    }, t.helper.regexIndexOf = function(u, a, d) {
      if (!t.helper.isString(u))
        throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
      if (!(a instanceof RegExp))
        throw "InvalidArgumentError: second parameter of showdown.helper.regexIndexOf function must be an instance of RegExp";
      var c = u.substring(d || 0).search(a);
      return c >= 0 ? c + (d || 0) : c;
    }, t.helper.splitAtIndex = function(u, a) {
      if (!t.helper.isString(u))
        throw "InvalidArgumentError: first parameter of showdown.helper.regexIndexOf function must be a string";
      return [u.substring(0, a), u.substring(a)];
    }, t.helper.encodeEmailAddress = function(u) {
      var a = [
        function(d) {
          return "&#" + d.charCodeAt(0) + ";";
        },
        function(d) {
          return "&#x" + d.charCodeAt(0).toString(16) + ";";
        },
        function(d) {
          return d;
        }
      ];
      return u = u.replace(/./g, function(d) {
        if (d === "@")
          d = a[Math.floor(Math.random() * 2)](d);
        else {
          var c = Math.random();
          d = c > 0.9 ? a[2](d) : c > 0.45 ? a[1](d) : a[0](d);
        }
        return d;
      }), u;
    }, t.helper.padEnd = function(a, d, c) {
      return d = d >> 0, c = String(c || " "), a.length > d ? String(a) : (d = d - a.length, d > c.length && (c += c.repeat(d / c.length)), String(a) + c.slice(0, d));
    }, typeof console > "u" && (console = {
      warn: function(u) {
        alert(u);
      },
      log: function(u) {
        alert(u);
      },
      error: function(u) {
        throw u;
      }
    }), t.helper.regexes = {
      asteriskDashAndColon: /([*_:~])/g
    }, t.helper.emojis = {
      "+1": "👍",
      "-1": "👎",
      100: "💯",
      1234: "🔢",
      "1st_place_medal": "🥇",
      "2nd_place_medal": "🥈",
      "3rd_place_medal": "🥉",
      "8ball": "🎱",
      a: "🅰️",
      ab: "🆎",
      abc: "🔤",
      abcd: "🔡",
      accept: "🉑",
      aerial_tramway: "🚡",
      airplane: "✈️",
      alarm_clock: "⏰",
      alembic: "⚗️",
      alien: "👽",
      ambulance: "🚑",
      amphora: "🏺",
      anchor: "⚓️",
      angel: "👼",
      anger: "💢",
      angry: "😠",
      anguished: "😧",
      ant: "🐜",
      apple: "🍎",
      aquarius: "♒️",
      aries: "♈️",
      arrow_backward: "◀️",
      arrow_double_down: "⏬",
      arrow_double_up: "⏫",
      arrow_down: "⬇️",
      arrow_down_small: "🔽",
      arrow_forward: "▶️",
      arrow_heading_down: "⤵️",
      arrow_heading_up: "⤴️",
      arrow_left: "⬅️",
      arrow_lower_left: "↙️",
      arrow_lower_right: "↘️",
      arrow_right: "➡️",
      arrow_right_hook: "↪️",
      arrow_up: "⬆️",
      arrow_up_down: "↕️",
      arrow_up_small: "🔼",
      arrow_upper_left: "↖️",
      arrow_upper_right: "↗️",
      arrows_clockwise: "🔃",
      arrows_counterclockwise: "🔄",
      art: "🎨",
      articulated_lorry: "🚛",
      artificial_satellite: "🛰",
      astonished: "😲",
      athletic_shoe: "👟",
      atm: "🏧",
      atom_symbol: "⚛️",
      avocado: "🥑",
      b: "🅱️",
      baby: "👶",
      baby_bottle: "🍼",
      baby_chick: "🐤",
      baby_symbol: "🚼",
      back: "🔙",
      bacon: "🥓",
      badminton: "🏸",
      baggage_claim: "🛄",
      baguette_bread: "🥖",
      balance_scale: "⚖️",
      balloon: "🎈",
      ballot_box: "🗳",
      ballot_box_with_check: "☑️",
      bamboo: "🎍",
      banana: "🍌",
      bangbang: "‼️",
      bank: "🏦",
      bar_chart: "📊",
      barber: "💈",
      baseball: "⚾️",
      basketball: "🏀",
      basketball_man: "⛹️",
      basketball_woman: "⛹️&zwj;♀️",
      bat: "🦇",
      bath: "🛀",
      bathtub: "🛁",
      battery: "🔋",
      beach_umbrella: "🏖",
      bear: "🐻",
      bed: "🛏",
      bee: "🐝",
      beer: "🍺",
      beers: "🍻",
      beetle: "🐞",
      beginner: "🔰",
      bell: "🔔",
      bellhop_bell: "🛎",
      bento: "🍱",
      biking_man: "🚴",
      bike: "🚲",
      biking_woman: "🚴&zwj;♀️",
      bikini: "👙",
      biohazard: "☣️",
      bird: "🐦",
      birthday: "🎂",
      black_circle: "⚫️",
      black_flag: "🏴",
      black_heart: "🖤",
      black_joker: "🃏",
      black_large_square: "⬛️",
      black_medium_small_square: "◾️",
      black_medium_square: "◼️",
      black_nib: "✒️",
      black_small_square: "▪️",
      black_square_button: "🔲",
      blonde_man: "👱",
      blonde_woman: "👱&zwj;♀️",
      blossom: "🌼",
      blowfish: "🐡",
      blue_book: "📘",
      blue_car: "🚙",
      blue_heart: "💙",
      blush: "😊",
      boar: "🐗",
      boat: "⛵️",
      bomb: "💣",
      book: "📖",
      bookmark: "🔖",
      bookmark_tabs: "📑",
      books: "📚",
      boom: "💥",
      boot: "👢",
      bouquet: "💐",
      bowing_man: "🙇",
      bow_and_arrow: "🏹",
      bowing_woman: "🙇&zwj;♀️",
      bowling: "🎳",
      boxing_glove: "🥊",
      boy: "👦",
      bread: "🍞",
      bride_with_veil: "👰",
      bridge_at_night: "🌉",
      briefcase: "💼",
      broken_heart: "💔",
      bug: "🐛",
      building_construction: "🏗",
      bulb: "💡",
      bullettrain_front: "🚅",
      bullettrain_side: "🚄",
      burrito: "🌯",
      bus: "🚌",
      business_suit_levitating: "🕴",
      busstop: "🚏",
      bust_in_silhouette: "👤",
      busts_in_silhouette: "👥",
      butterfly: "🦋",
      cactus: "🌵",
      cake: "🍰",
      calendar: "📆",
      call_me_hand: "🤙",
      calling: "📲",
      camel: "🐫",
      camera: "📷",
      camera_flash: "📸",
      camping: "🏕",
      cancer: "♋️",
      candle: "🕯",
      candy: "🍬",
      canoe: "🛶",
      capital_abcd: "🔠",
      capricorn: "♑️",
      car: "🚗",
      card_file_box: "🗃",
      card_index: "📇",
      card_index_dividers: "🗂",
      carousel_horse: "🎠",
      carrot: "🥕",
      cat: "🐱",
      cat2: "🐈",
      cd: "💿",
      chains: "⛓",
      champagne: "🍾",
      chart: "💹",
      chart_with_downwards_trend: "📉",
      chart_with_upwards_trend: "📈",
      checkered_flag: "🏁",
      cheese: "🧀",
      cherries: "🍒",
      cherry_blossom: "🌸",
      chestnut: "🌰",
      chicken: "🐔",
      children_crossing: "🚸",
      chipmunk: "🐿",
      chocolate_bar: "🍫",
      christmas_tree: "🎄",
      church: "⛪️",
      cinema: "🎦",
      circus_tent: "🎪",
      city_sunrise: "🌇",
      city_sunset: "🌆",
      cityscape: "🏙",
      cl: "🆑",
      clamp: "🗜",
      clap: "👏",
      clapper: "🎬",
      classical_building: "🏛",
      clinking_glasses: "🥂",
      clipboard: "📋",
      clock1: "🕐",
      clock10: "🕙",
      clock1030: "🕥",
      clock11: "🕚",
      clock1130: "🕦",
      clock12: "🕛",
      clock1230: "🕧",
      clock130: "🕜",
      clock2: "🕑",
      clock230: "🕝",
      clock3: "🕒",
      clock330: "🕞",
      clock4: "🕓",
      clock430: "🕟",
      clock5: "🕔",
      clock530: "🕠",
      clock6: "🕕",
      clock630: "🕡",
      clock7: "🕖",
      clock730: "🕢",
      clock8: "🕗",
      clock830: "🕣",
      clock9: "🕘",
      clock930: "🕤",
      closed_book: "📕",
      closed_lock_with_key: "🔐",
      closed_umbrella: "🌂",
      cloud: "☁️",
      cloud_with_lightning: "🌩",
      cloud_with_lightning_and_rain: "⛈",
      cloud_with_rain: "🌧",
      cloud_with_snow: "🌨",
      clown_face: "🤡",
      clubs: "♣️",
      cocktail: "🍸",
      coffee: "☕️",
      coffin: "⚰️",
      cold_sweat: "😰",
      comet: "☄️",
      computer: "💻",
      computer_mouse: "🖱",
      confetti_ball: "🎊",
      confounded: "😖",
      confused: "😕",
      congratulations: "㊗️",
      construction: "🚧",
      construction_worker_man: "👷",
      construction_worker_woman: "👷&zwj;♀️",
      control_knobs: "🎛",
      convenience_store: "🏪",
      cookie: "🍪",
      cool: "🆒",
      policeman: "👮",
      copyright: "©️",
      corn: "🌽",
      couch_and_lamp: "🛋",
      couple: "👫",
      couple_with_heart_woman_man: "💑",
      couple_with_heart_man_man: "👨&zwj;❤️&zwj;👨",
      couple_with_heart_woman_woman: "👩&zwj;❤️&zwj;👩",
      couplekiss_man_man: "👨&zwj;❤️&zwj;💋&zwj;👨",
      couplekiss_man_woman: "💏",
      couplekiss_woman_woman: "👩&zwj;❤️&zwj;💋&zwj;👩",
      cow: "🐮",
      cow2: "🐄",
      cowboy_hat_face: "🤠",
      crab: "🦀",
      crayon: "🖍",
      credit_card: "💳",
      crescent_moon: "🌙",
      cricket: "🏏",
      crocodile: "🐊",
      croissant: "🥐",
      crossed_fingers: "🤞",
      crossed_flags: "🎌",
      crossed_swords: "⚔️",
      crown: "👑",
      cry: "😢",
      crying_cat_face: "😿",
      crystal_ball: "🔮",
      cucumber: "🥒",
      cupid: "💘",
      curly_loop: "➰",
      currency_exchange: "💱",
      curry: "🍛",
      custard: "🍮",
      customs: "🛃",
      cyclone: "🌀",
      dagger: "🗡",
      dancer: "💃",
      dancing_women: "👯",
      dancing_men: "👯&zwj;♂️",
      dango: "🍡",
      dark_sunglasses: "🕶",
      dart: "🎯",
      dash: "💨",
      date: "📅",
      deciduous_tree: "🌳",
      deer: "🦌",
      department_store: "🏬",
      derelict_house: "🏚",
      desert: "🏜",
      desert_island: "🏝",
      desktop_computer: "🖥",
      male_detective: "🕵️",
      diamond_shape_with_a_dot_inside: "💠",
      diamonds: "♦️",
      disappointed: "😞",
      disappointed_relieved: "😥",
      dizzy: "💫",
      dizzy_face: "😵",
      do_not_litter: "🚯",
      dog: "🐶",
      dog2: "🐕",
      dollar: "💵",
      dolls: "🎎",
      dolphin: "🐬",
      door: "🚪",
      doughnut: "🍩",
      dove: "🕊",
      dragon: "🐉",
      dragon_face: "🐲",
      dress: "👗",
      dromedary_camel: "🐪",
      drooling_face: "🤤",
      droplet: "💧",
      drum: "🥁",
      duck: "🦆",
      dvd: "📀",
      "e-mail": "📧",
      eagle: "🦅",
      ear: "👂",
      ear_of_rice: "🌾",
      earth_africa: "🌍",
      earth_americas: "🌎",
      earth_asia: "🌏",
      egg: "🥚",
      eggplant: "🍆",
      eight_pointed_black_star: "✴️",
      eight_spoked_asterisk: "✳️",
      electric_plug: "🔌",
      elephant: "🐘",
      email: "✉️",
      end: "🔚",
      envelope_with_arrow: "📩",
      euro: "💶",
      european_castle: "🏰",
      european_post_office: "🏤",
      evergreen_tree: "🌲",
      exclamation: "❗️",
      expressionless: "😑",
      eye: "👁",
      eye_speech_bubble: "👁&zwj;🗨",
      eyeglasses: "👓",
      eyes: "👀",
      face_with_head_bandage: "🤕",
      face_with_thermometer: "🤒",
      fist_oncoming: "👊",
      factory: "🏭",
      fallen_leaf: "🍂",
      family_man_woman_boy: "👪",
      family_man_boy: "👨&zwj;👦",
      family_man_boy_boy: "👨&zwj;👦&zwj;👦",
      family_man_girl: "👨&zwj;👧",
      family_man_girl_boy: "👨&zwj;👧&zwj;👦",
      family_man_girl_girl: "👨&zwj;👧&zwj;👧",
      family_man_man_boy: "👨&zwj;👨&zwj;👦",
      family_man_man_boy_boy: "👨&zwj;👨&zwj;👦&zwj;👦",
      family_man_man_girl: "👨&zwj;👨&zwj;👧",
      family_man_man_girl_boy: "👨&zwj;👨&zwj;👧&zwj;👦",
      family_man_man_girl_girl: "👨&zwj;👨&zwj;👧&zwj;👧",
      family_man_woman_boy_boy: "👨&zwj;👩&zwj;👦&zwj;👦",
      family_man_woman_girl: "👨&zwj;👩&zwj;👧",
      family_man_woman_girl_boy: "👨&zwj;👩&zwj;👧&zwj;👦",
      family_man_woman_girl_girl: "👨&zwj;👩&zwj;👧&zwj;👧",
      family_woman_boy: "👩&zwj;👦",
      family_woman_boy_boy: "👩&zwj;👦&zwj;👦",
      family_woman_girl: "👩&zwj;👧",
      family_woman_girl_boy: "👩&zwj;👧&zwj;👦",
      family_woman_girl_girl: "👩&zwj;👧&zwj;👧",
      family_woman_woman_boy: "👩&zwj;👩&zwj;👦",
      family_woman_woman_boy_boy: "👩&zwj;👩&zwj;👦&zwj;👦",
      family_woman_woman_girl: "👩&zwj;👩&zwj;👧",
      family_woman_woman_girl_boy: "👩&zwj;👩&zwj;👧&zwj;👦",
      family_woman_woman_girl_girl: "👩&zwj;👩&zwj;👧&zwj;👧",
      fast_forward: "⏩",
      fax: "📠",
      fearful: "😨",
      feet: "🐾",
      female_detective: "🕵️&zwj;♀️",
      ferris_wheel: "🎡",
      ferry: "⛴",
      field_hockey: "🏑",
      file_cabinet: "🗄",
      file_folder: "📁",
      film_projector: "📽",
      film_strip: "🎞",
      fire: "🔥",
      fire_engine: "🚒",
      fireworks: "🎆",
      first_quarter_moon: "🌓",
      first_quarter_moon_with_face: "🌛",
      fish: "🐟",
      fish_cake: "🍥",
      fishing_pole_and_fish: "🎣",
      fist_raised: "✊",
      fist_left: "🤛",
      fist_right: "🤜",
      flags: "🎏",
      flashlight: "🔦",
      fleur_de_lis: "⚜️",
      flight_arrival: "🛬",
      flight_departure: "🛫",
      floppy_disk: "💾",
      flower_playing_cards: "🎴",
      flushed: "😳",
      fog: "🌫",
      foggy: "🌁",
      football: "🏈",
      footprints: "👣",
      fork_and_knife: "🍴",
      fountain: "⛲️",
      fountain_pen: "🖋",
      four_leaf_clover: "🍀",
      fox_face: "🦊",
      framed_picture: "🖼",
      free: "🆓",
      fried_egg: "🍳",
      fried_shrimp: "🍤",
      fries: "🍟",
      frog: "🐸",
      frowning: "😦",
      frowning_face: "☹️",
      frowning_man: "🙍&zwj;♂️",
      frowning_woman: "🙍",
      middle_finger: "🖕",
      fuelpump: "⛽️",
      full_moon: "🌕",
      full_moon_with_face: "🌝",
      funeral_urn: "⚱️",
      game_die: "🎲",
      gear: "⚙️",
      gem: "💎",
      gemini: "♊️",
      ghost: "👻",
      gift: "🎁",
      gift_heart: "💝",
      girl: "👧",
      globe_with_meridians: "🌐",
      goal_net: "🥅",
      goat: "🐐",
      golf: "⛳️",
      golfing_man: "🏌️",
      golfing_woman: "🏌️&zwj;♀️",
      gorilla: "🦍",
      grapes: "🍇",
      green_apple: "🍏",
      green_book: "📗",
      green_heart: "💚",
      green_salad: "🥗",
      grey_exclamation: "❕",
      grey_question: "❔",
      grimacing: "😬",
      grin: "😁",
      grinning: "😀",
      guardsman: "💂",
      guardswoman: "💂&zwj;♀️",
      guitar: "🎸",
      gun: "🔫",
      haircut_woman: "💇",
      haircut_man: "💇&zwj;♂️",
      hamburger: "🍔",
      hammer: "🔨",
      hammer_and_pick: "⚒",
      hammer_and_wrench: "🛠",
      hamster: "🐹",
      hand: "✋",
      handbag: "👜",
      handshake: "🤝",
      hankey: "💩",
      hatched_chick: "🐥",
      hatching_chick: "🐣",
      headphones: "🎧",
      hear_no_evil: "🙉",
      heart: "❤️",
      heart_decoration: "💟",
      heart_eyes: "😍",
      heart_eyes_cat: "😻",
      heartbeat: "💓",
      heartpulse: "💗",
      hearts: "♥️",
      heavy_check_mark: "✔️",
      heavy_division_sign: "➗",
      heavy_dollar_sign: "💲",
      heavy_heart_exclamation: "❣️",
      heavy_minus_sign: "➖",
      heavy_multiplication_x: "✖️",
      heavy_plus_sign: "➕",
      helicopter: "🚁",
      herb: "🌿",
      hibiscus: "🌺",
      high_brightness: "🔆",
      high_heel: "👠",
      hocho: "🔪",
      hole: "🕳",
      honey_pot: "🍯",
      horse: "🐴",
      horse_racing: "🏇",
      hospital: "🏥",
      hot_pepper: "🌶",
      hotdog: "🌭",
      hotel: "🏨",
      hotsprings: "♨️",
      hourglass: "⌛️",
      hourglass_flowing_sand: "⏳",
      house: "🏠",
      house_with_garden: "🏡",
      houses: "🏘",
      hugs: "🤗",
      hushed: "😯",
      ice_cream: "🍨",
      ice_hockey: "🏒",
      ice_skate: "⛸",
      icecream: "🍦",
      id: "🆔",
      ideograph_advantage: "🉐",
      imp: "👿",
      inbox_tray: "📥",
      incoming_envelope: "📨",
      tipping_hand_woman: "💁",
      information_source: "ℹ️",
      innocent: "😇",
      interrobang: "⁉️",
      iphone: "📱",
      izakaya_lantern: "🏮",
      jack_o_lantern: "🎃",
      japan: "🗾",
      japanese_castle: "🏯",
      japanese_goblin: "👺",
      japanese_ogre: "👹",
      jeans: "👖",
      joy: "😂",
      joy_cat: "😹",
      joystick: "🕹",
      kaaba: "🕋",
      key: "🔑",
      keyboard: "⌨️",
      keycap_ten: "🔟",
      kick_scooter: "🛴",
      kimono: "👘",
      kiss: "💋",
      kissing: "😗",
      kissing_cat: "😽",
      kissing_closed_eyes: "😚",
      kissing_heart: "😘",
      kissing_smiling_eyes: "😙",
      kiwi_fruit: "🥝",
      koala: "🐨",
      koko: "🈁",
      label: "🏷",
      large_blue_circle: "🔵",
      large_blue_diamond: "🔷",
      large_orange_diamond: "🔶",
      last_quarter_moon: "🌗",
      last_quarter_moon_with_face: "🌜",
      latin_cross: "✝️",
      laughing: "😆",
      leaves: "🍃",
      ledger: "📒",
      left_luggage: "🛅",
      left_right_arrow: "↔️",
      leftwards_arrow_with_hook: "↩️",
      lemon: "🍋",
      leo: "♌️",
      leopard: "🐆",
      level_slider: "🎚",
      libra: "♎️",
      light_rail: "🚈",
      link: "🔗",
      lion: "🦁",
      lips: "👄",
      lipstick: "💄",
      lizard: "🦎",
      lock: "🔒",
      lock_with_ink_pen: "🔏",
      lollipop: "🍭",
      loop: "➿",
      loud_sound: "🔊",
      loudspeaker: "📢",
      love_hotel: "🏩",
      love_letter: "💌",
      low_brightness: "🔅",
      lying_face: "🤥",
      m: "Ⓜ️",
      mag: "🔍",
      mag_right: "🔎",
      mahjong: "🀄️",
      mailbox: "📫",
      mailbox_closed: "📪",
      mailbox_with_mail: "📬",
      mailbox_with_no_mail: "📭",
      man: "👨",
      man_artist: "👨&zwj;🎨",
      man_astronaut: "👨&zwj;🚀",
      man_cartwheeling: "🤸&zwj;♂️",
      man_cook: "👨&zwj;🍳",
      man_dancing: "🕺",
      man_facepalming: "🤦&zwj;♂️",
      man_factory_worker: "👨&zwj;🏭",
      man_farmer: "👨&zwj;🌾",
      man_firefighter: "👨&zwj;🚒",
      man_health_worker: "👨&zwj;⚕️",
      man_in_tuxedo: "🤵",
      man_judge: "👨&zwj;⚖️",
      man_juggling: "🤹&zwj;♂️",
      man_mechanic: "👨&zwj;🔧",
      man_office_worker: "👨&zwj;💼",
      man_pilot: "👨&zwj;✈️",
      man_playing_handball: "🤾&zwj;♂️",
      man_playing_water_polo: "🤽&zwj;♂️",
      man_scientist: "👨&zwj;🔬",
      man_shrugging: "🤷&zwj;♂️",
      man_singer: "👨&zwj;🎤",
      man_student: "👨&zwj;🎓",
      man_teacher: "👨&zwj;🏫",
      man_technologist: "👨&zwj;💻",
      man_with_gua_pi_mao: "👲",
      man_with_turban: "👳",
      tangerine: "🍊",
      mans_shoe: "👞",
      mantelpiece_clock: "🕰",
      maple_leaf: "🍁",
      martial_arts_uniform: "🥋",
      mask: "😷",
      massage_woman: "💆",
      massage_man: "💆&zwj;♂️",
      meat_on_bone: "🍖",
      medal_military: "🎖",
      medal_sports: "🏅",
      mega: "📣",
      melon: "🍈",
      memo: "📝",
      men_wrestling: "🤼&zwj;♂️",
      menorah: "🕎",
      mens: "🚹",
      metal: "🤘",
      metro: "🚇",
      microphone: "🎤",
      microscope: "🔬",
      milk_glass: "🥛",
      milky_way: "🌌",
      minibus: "🚐",
      minidisc: "💽",
      mobile_phone_off: "📴",
      money_mouth_face: "🤑",
      money_with_wings: "💸",
      moneybag: "💰",
      monkey: "🐒",
      monkey_face: "🐵",
      monorail: "🚝",
      moon: "🌔",
      mortar_board: "🎓",
      mosque: "🕌",
      motor_boat: "🛥",
      motor_scooter: "🛵",
      motorcycle: "🏍",
      motorway: "🛣",
      mount_fuji: "🗻",
      mountain: "⛰",
      mountain_biking_man: "🚵",
      mountain_biking_woman: "🚵&zwj;♀️",
      mountain_cableway: "🚠",
      mountain_railway: "🚞",
      mountain_snow: "🏔",
      mouse: "🐭",
      mouse2: "🐁",
      movie_camera: "🎥",
      moyai: "🗿",
      mrs_claus: "🤶",
      muscle: "💪",
      mushroom: "🍄",
      musical_keyboard: "🎹",
      musical_note: "🎵",
      musical_score: "🎼",
      mute: "🔇",
      nail_care: "💅",
      name_badge: "📛",
      national_park: "🏞",
      nauseated_face: "🤢",
      necktie: "👔",
      negative_squared_cross_mark: "❎",
      nerd_face: "🤓",
      neutral_face: "😐",
      new: "🆕",
      new_moon: "🌑",
      new_moon_with_face: "🌚",
      newspaper: "📰",
      newspaper_roll: "🗞",
      next_track_button: "⏭",
      ng: "🆖",
      no_good_man: "🙅&zwj;♂️",
      no_good_woman: "🙅",
      night_with_stars: "🌃",
      no_bell: "🔕",
      no_bicycles: "🚳",
      no_entry: "⛔️",
      no_entry_sign: "🚫",
      no_mobile_phones: "📵",
      no_mouth: "😶",
      no_pedestrians: "🚷",
      no_smoking: "🚭",
      "non-potable_water": "🚱",
      nose: "👃",
      notebook: "📓",
      notebook_with_decorative_cover: "📔",
      notes: "🎶",
      nut_and_bolt: "🔩",
      o: "⭕️",
      o2: "🅾️",
      ocean: "🌊",
      octopus: "🐙",
      oden: "🍢",
      office: "🏢",
      oil_drum: "🛢",
      ok: "🆗",
      ok_hand: "👌",
      ok_man: "🙆&zwj;♂️",
      ok_woman: "🙆",
      old_key: "🗝",
      older_man: "👴",
      older_woman: "👵",
      om: "🕉",
      on: "🔛",
      oncoming_automobile: "🚘",
      oncoming_bus: "🚍",
      oncoming_police_car: "🚔",
      oncoming_taxi: "🚖",
      open_file_folder: "📂",
      open_hands: "👐",
      open_mouth: "😮",
      open_umbrella: "☂️",
      ophiuchus: "⛎",
      orange_book: "📙",
      orthodox_cross: "☦️",
      outbox_tray: "📤",
      owl: "🦉",
      ox: "🐂",
      package: "📦",
      page_facing_up: "📄",
      page_with_curl: "📃",
      pager: "📟",
      paintbrush: "🖌",
      palm_tree: "🌴",
      pancakes: "🥞",
      panda_face: "🐼",
      paperclip: "📎",
      paperclips: "🖇",
      parasol_on_ground: "⛱",
      parking: "🅿️",
      part_alternation_mark: "〽️",
      partly_sunny: "⛅️",
      passenger_ship: "🛳",
      passport_control: "🛂",
      pause_button: "⏸",
      peace_symbol: "☮️",
      peach: "🍑",
      peanuts: "🥜",
      pear: "🍐",
      pen: "🖊",
      pencil2: "✏️",
      penguin: "🐧",
      pensive: "😔",
      performing_arts: "🎭",
      persevere: "😣",
      person_fencing: "🤺",
      pouting_woman: "🙎",
      phone: "☎️",
      pick: "⛏",
      pig: "🐷",
      pig2: "🐖",
      pig_nose: "🐽",
      pill: "💊",
      pineapple: "🍍",
      ping_pong: "🏓",
      pisces: "♓️",
      pizza: "🍕",
      place_of_worship: "🛐",
      plate_with_cutlery: "🍽",
      play_or_pause_button: "⏯",
      point_down: "👇",
      point_left: "👈",
      point_right: "👉",
      point_up: "☝️",
      point_up_2: "👆",
      police_car: "🚓",
      policewoman: "👮&zwj;♀️",
      poodle: "🐩",
      popcorn: "🍿",
      post_office: "🏣",
      postal_horn: "📯",
      postbox: "📮",
      potable_water: "🚰",
      potato: "🥔",
      pouch: "👝",
      poultry_leg: "🍗",
      pound: "💷",
      rage: "😡",
      pouting_cat: "😾",
      pouting_man: "🙎&zwj;♂️",
      pray: "🙏",
      prayer_beads: "📿",
      pregnant_woman: "🤰",
      previous_track_button: "⏮",
      prince: "🤴",
      princess: "👸",
      printer: "🖨",
      purple_heart: "💜",
      purse: "👛",
      pushpin: "📌",
      put_litter_in_its_place: "🚮",
      question: "❓",
      rabbit: "🐰",
      rabbit2: "🐇",
      racehorse: "🐎",
      racing_car: "🏎",
      radio: "📻",
      radio_button: "🔘",
      radioactive: "☢️",
      railway_car: "🚃",
      railway_track: "🛤",
      rainbow: "🌈",
      rainbow_flag: "🏳️&zwj;🌈",
      raised_back_of_hand: "🤚",
      raised_hand_with_fingers_splayed: "🖐",
      raised_hands: "🙌",
      raising_hand_woman: "🙋",
      raising_hand_man: "🙋&zwj;♂️",
      ram: "🐏",
      ramen: "🍜",
      rat: "🐀",
      record_button: "⏺",
      recycle: "♻️",
      red_circle: "🔴",
      registered: "®️",
      relaxed: "☺️",
      relieved: "😌",
      reminder_ribbon: "🎗",
      repeat: "🔁",
      repeat_one: "🔂",
      rescue_worker_helmet: "⛑",
      restroom: "🚻",
      revolving_hearts: "💞",
      rewind: "⏪",
      rhinoceros: "🦏",
      ribbon: "🎀",
      rice: "🍚",
      rice_ball: "🍙",
      rice_cracker: "🍘",
      rice_scene: "🎑",
      right_anger_bubble: "🗯",
      ring: "💍",
      robot: "🤖",
      rocket: "🚀",
      rofl: "🤣",
      roll_eyes: "🙄",
      roller_coaster: "🎢",
      rooster: "🐓",
      rose: "🌹",
      rosette: "🏵",
      rotating_light: "🚨",
      round_pushpin: "📍",
      rowing_man: "🚣",
      rowing_woman: "🚣&zwj;♀️",
      rugby_football: "🏉",
      running_man: "🏃",
      running_shirt_with_sash: "🎽",
      running_woman: "🏃&zwj;♀️",
      sa: "🈂️",
      sagittarius: "♐️",
      sake: "🍶",
      sandal: "👡",
      santa: "🎅",
      satellite: "📡",
      saxophone: "🎷",
      school: "🏫",
      school_satchel: "🎒",
      scissors: "✂️",
      scorpion: "🦂",
      scorpius: "♏️",
      scream: "😱",
      scream_cat: "🙀",
      scroll: "📜",
      seat: "💺",
      secret: "㊙️",
      see_no_evil: "🙈",
      seedling: "🌱",
      selfie: "🤳",
      shallow_pan_of_food: "🥘",
      shamrock: "☘️",
      shark: "🦈",
      shaved_ice: "🍧",
      sheep: "🐑",
      shell: "🐚",
      shield: "🛡",
      shinto_shrine: "⛩",
      ship: "🚢",
      shirt: "👕",
      shopping: "🛍",
      shopping_cart: "🛒",
      shower: "🚿",
      shrimp: "🦐",
      signal_strength: "📶",
      six_pointed_star: "🔯",
      ski: "🎿",
      skier: "⛷",
      skull: "💀",
      skull_and_crossbones: "☠️",
      sleeping: "😴",
      sleeping_bed: "🛌",
      sleepy: "😪",
      slightly_frowning_face: "🙁",
      slightly_smiling_face: "🙂",
      slot_machine: "🎰",
      small_airplane: "🛩",
      small_blue_diamond: "🔹",
      small_orange_diamond: "🔸",
      small_red_triangle: "🔺",
      small_red_triangle_down: "🔻",
      smile: "😄",
      smile_cat: "😸",
      smiley: "😃",
      smiley_cat: "😺",
      smiling_imp: "😈",
      smirk: "😏",
      smirk_cat: "😼",
      smoking: "🚬",
      snail: "🐌",
      snake: "🐍",
      sneezing_face: "🤧",
      snowboarder: "🏂",
      snowflake: "❄️",
      snowman: "⛄️",
      snowman_with_snow: "☃️",
      sob: "😭",
      soccer: "⚽️",
      soon: "🔜",
      sos: "🆘",
      sound: "🔉",
      space_invader: "👾",
      spades: "♠️",
      spaghetti: "🍝",
      sparkle: "❇️",
      sparkler: "🎇",
      sparkles: "✨",
      sparkling_heart: "💖",
      speak_no_evil: "🙊",
      speaker: "🔈",
      speaking_head: "🗣",
      speech_balloon: "💬",
      speedboat: "🚤",
      spider: "🕷",
      spider_web: "🕸",
      spiral_calendar: "🗓",
      spiral_notepad: "🗒",
      spoon: "🥄",
      squid: "🦑",
      stadium: "🏟",
      star: "⭐️",
      star2: "🌟",
      star_and_crescent: "☪️",
      star_of_david: "✡️",
      stars: "🌠",
      station: "🚉",
      statue_of_liberty: "🗽",
      steam_locomotive: "🚂",
      stew: "🍲",
      stop_button: "⏹",
      stop_sign: "🛑",
      stopwatch: "⏱",
      straight_ruler: "📏",
      strawberry: "🍓",
      stuck_out_tongue: "😛",
      stuck_out_tongue_closed_eyes: "😝",
      stuck_out_tongue_winking_eye: "😜",
      studio_microphone: "🎙",
      stuffed_flatbread: "🥙",
      sun_behind_large_cloud: "🌥",
      sun_behind_rain_cloud: "🌦",
      sun_behind_small_cloud: "🌤",
      sun_with_face: "🌞",
      sunflower: "🌻",
      sunglasses: "😎",
      sunny: "☀️",
      sunrise: "🌅",
      sunrise_over_mountains: "🌄",
      surfing_man: "🏄",
      surfing_woman: "🏄&zwj;♀️",
      sushi: "🍣",
      suspension_railway: "🚟",
      sweat: "😓",
      sweat_drops: "💦",
      sweat_smile: "😅",
      sweet_potato: "🍠",
      swimming_man: "🏊",
      swimming_woman: "🏊&zwj;♀️",
      symbols: "🔣",
      synagogue: "🕍",
      syringe: "💉",
      taco: "🌮",
      tada: "🎉",
      tanabata_tree: "🎋",
      taurus: "♉️",
      taxi: "🚕",
      tea: "🍵",
      telephone_receiver: "📞",
      telescope: "🔭",
      tennis: "🎾",
      tent: "⛺️",
      thermometer: "🌡",
      thinking: "🤔",
      thought_balloon: "💭",
      ticket: "🎫",
      tickets: "🎟",
      tiger: "🐯",
      tiger2: "🐅",
      timer_clock: "⏲",
      tipping_hand_man: "💁&zwj;♂️",
      tired_face: "😫",
      tm: "™️",
      toilet: "🚽",
      tokyo_tower: "🗼",
      tomato: "🍅",
      tongue: "👅",
      top: "🔝",
      tophat: "🎩",
      tornado: "🌪",
      trackball: "🖲",
      tractor: "🚜",
      traffic_light: "🚥",
      train: "🚋",
      train2: "🚆",
      tram: "🚊",
      triangular_flag_on_post: "🚩",
      triangular_ruler: "📐",
      trident: "🔱",
      triumph: "😤",
      trolleybus: "🚎",
      trophy: "🏆",
      tropical_drink: "🍹",
      tropical_fish: "🐠",
      truck: "🚚",
      trumpet: "🎺",
      tulip: "🌷",
      tumbler_glass: "🥃",
      turkey: "🦃",
      turtle: "🐢",
      tv: "📺",
      twisted_rightwards_arrows: "🔀",
      two_hearts: "💕",
      two_men_holding_hands: "👬",
      two_women_holding_hands: "👭",
      u5272: "🈹",
      u5408: "🈴",
      u55b6: "🈺",
      u6307: "🈯️",
      u6708: "🈷️",
      u6709: "🈶",
      u6e80: "🈵",
      u7121: "🈚️",
      u7533: "🈸",
      u7981: "🈲",
      u7a7a: "🈳",
      umbrella: "☔️",
      unamused: "😒",
      underage: "🔞",
      unicorn: "🦄",
      unlock: "🔓",
      up: "🆙",
      upside_down_face: "🙃",
      v: "✌️",
      vertical_traffic_light: "🚦",
      vhs: "📼",
      vibration_mode: "📳",
      video_camera: "📹",
      video_game: "🎮",
      violin: "🎻",
      virgo: "♍️",
      volcano: "🌋",
      volleyball: "🏐",
      vs: "🆚",
      vulcan_salute: "🖖",
      walking_man: "🚶",
      walking_woman: "🚶&zwj;♀️",
      waning_crescent_moon: "🌘",
      waning_gibbous_moon: "🌖",
      warning: "⚠️",
      wastebasket: "🗑",
      watch: "⌚️",
      water_buffalo: "🐃",
      watermelon: "🍉",
      wave: "👋",
      wavy_dash: "〰️",
      waxing_crescent_moon: "🌒",
      wc: "🚾",
      weary: "😩",
      wedding: "💒",
      weight_lifting_man: "🏋️",
      weight_lifting_woman: "🏋️&zwj;♀️",
      whale: "🐳",
      whale2: "🐋",
      wheel_of_dharma: "☸️",
      wheelchair: "♿️",
      white_check_mark: "✅",
      white_circle: "⚪️",
      white_flag: "🏳️",
      white_flower: "💮",
      white_large_square: "⬜️",
      white_medium_small_square: "◽️",
      white_medium_square: "◻️",
      white_small_square: "▫️",
      white_square_button: "🔳",
      wilted_flower: "🥀",
      wind_chime: "🎐",
      wind_face: "🌬",
      wine_glass: "🍷",
      wink: "😉",
      wolf: "🐺",
      woman: "👩",
      woman_artist: "👩&zwj;🎨",
      woman_astronaut: "👩&zwj;🚀",
      woman_cartwheeling: "🤸&zwj;♀️",
      woman_cook: "👩&zwj;🍳",
      woman_facepalming: "🤦&zwj;♀️",
      woman_factory_worker: "👩&zwj;🏭",
      woman_farmer: "👩&zwj;🌾",
      woman_firefighter: "👩&zwj;🚒",
      woman_health_worker: "👩&zwj;⚕️",
      woman_judge: "👩&zwj;⚖️",
      woman_juggling: "🤹&zwj;♀️",
      woman_mechanic: "👩&zwj;🔧",
      woman_office_worker: "👩&zwj;💼",
      woman_pilot: "👩&zwj;✈️",
      woman_playing_handball: "🤾&zwj;♀️",
      woman_playing_water_polo: "🤽&zwj;♀️",
      woman_scientist: "👩&zwj;🔬",
      woman_shrugging: "🤷&zwj;♀️",
      woman_singer: "👩&zwj;🎤",
      woman_student: "👩&zwj;🎓",
      woman_teacher: "👩&zwj;🏫",
      woman_technologist: "👩&zwj;💻",
      woman_with_turban: "👳&zwj;♀️",
      womans_clothes: "👚",
      womans_hat: "👒",
      women_wrestling: "🤼&zwj;♀️",
      womens: "🚺",
      world_map: "🗺",
      worried: "😟",
      wrench: "🔧",
      writing_hand: "✍️",
      x: "❌",
      yellow_heart: "💛",
      yen: "💴",
      yin_yang: "☯️",
      yum: "😋",
      zap: "⚡️",
      zipper_mouth_face: "🤐",
      zzz: "💤",
      /* special emojis :P */
      octocat: '<img alt=":octocat:" height="20" width="20" align="absmiddle" src="https://assets-cdn.github.com/images/icons/emoji/octocat.png">',
      showdown: `<span style="font-family: 'Anonymous Pro', monospace; text-decoration: underline; text-decoration-style: dashed; text-decoration-color: #3e8b8a;text-underline-position: under;">S</span>`
    }, t.Converter = function(u) {
      var a = {}, d = [], c = [], s = {}, m = w, h = {
        parsed: {},
        raw: "",
        format: ""
      };
      _();
      function _() {
        u = u || {};
        for (var p in g)
          g.hasOwnProperty(p) && (a[p] = g[p]);
        if (typeof u == "object")
          for (var O in u)
            u.hasOwnProperty(O) && (a[O] = u[O]);
        else
          throw Error("Converter expects the passed parameter to be an object, but " + typeof u + " was passed instead.");
        a.extensions && t.helper.forEach(a.extensions, T);
      }
      function T(p, O) {
        if (O = O || null, t.helper.isString(p))
          if (p = t.helper.stdExtName(p), O = p, t.extensions[p]) {
            console.warn("DEPRECATION WARNING: " + p + " is an old extension that uses a deprecated loading method.Please inform the developer that the extension should be updated!"), E(t.extensions[p], p);
            return;
          } else if (!t.helper.isUndefined(f[p]))
            p = f[p];
          else
            throw Error('Extension "' + p + '" could not be loaded. It was either not found or is not a valid extension.');
        typeof p == "function" && (p = p()), t.helper.isArray(p) || (p = [p]);
        var R = P(p, O);
        if (!R.valid)
          throw Error(R.error);
        for (var F = 0; F < p.length; ++F) {
          switch (p[F].type) {
            case "lang":
              d.push(p[F]);
              break;
            case "output":
              c.push(p[F]);
              break;
          }
          if (p[F].hasOwnProperty("listeners"))
            for (var H in p[F].listeners)
              p[F].listeners.hasOwnProperty(H) && j(H, p[F].listeners[H]);
        }
      }
      function E(p, O) {
        typeof p == "function" && (p = p(new t.Converter())), t.helper.isArray(p) || (p = [p]);
        var R = P(p, O);
        if (!R.valid)
          throw Error(R.error);
        for (var F = 0; F < p.length; ++F)
          switch (p[F].type) {
            case "lang":
              d.push(p[F]);
              break;
            case "output":
              c.push(p[F]);
              break;
            default:
              throw Error("Extension loader error: Type unrecognized!!!");
          }
      }
      function j(p, O) {
        if (!t.helper.isString(p))
          throw Error("Invalid argument in converter.listen() method: name must be a string, but " + typeof p + " given");
        if (typeof O != "function")
          throw Error("Invalid argument in converter.listen() method: callback must be a function, but " + typeof O + " given");
        s.hasOwnProperty(p) || (s[p] = []), s[p].push(O);
      }
      function C(p) {
        var O = p.match(/^\s*/)[0].length, R = new RegExp("^\\s{0," + O + "}", "gm");
        return p.replace(R, "");
      }
      this._dispatch = function(O, R, F, H) {
        if (s.hasOwnProperty(O))
          for (var D = 0; D < s[O].length; ++D) {
            var de = s[O][D](O, R, this, F, H);
            de && typeof de < "u" && (R = de);
          }
        return R;
      }, this.listen = function(p, O) {
        return j(p, O), this;
      }, this.makeHtml = function(p) {
        if (!p)
          return p;
        var O = {
          gHtmlBlocks: [],
          gHtmlMdBlocks: [],
          gHtmlSpans: [],
          gUrls: {},
          gTitles: {},
          gDimensions: {},
          gListLevel: 0,
          hashLinkCounts: {},
          langExtensions: d,
          outputModifiers: c,
          converter: this,
          ghCodeBlocks: [],
          metadata: {
            parsed: {},
            raw: "",
            format: ""
          }
        };
        return p = p.replace(/¨/g, "¨T"), p = p.replace(/\$/g, "¨D"), p = p.replace(/\r\n/g, `
`), p = p.replace(/\r/g, `
`), p = p.replace(/\u00A0/g, "&nbsp;"), a.smartIndentationFix && (p = C(p)), p = `

` + p + `

`, p = t.subParser("detab")(p, a, O), p = p.replace(/^[ \t]+$/mg, ""), t.helper.forEach(d, function(R) {
          p = t.subParser("runExtension")(R, p, a, O);
        }), p = t.subParser("metadata")(p, a, O), p = t.subParser("hashPreCodeTags")(p, a, O), p = t.subParser("githubCodeBlocks")(p, a, O), p = t.subParser("hashHTMLBlocks")(p, a, O), p = t.subParser("hashCodeTags")(p, a, O), p = t.subParser("stripLinkDefinitions")(p, a, O), p = t.subParser("blockGamut")(p, a, O), p = t.subParser("unhashHTMLSpans")(p, a, O), p = t.subParser("unescapeSpecialChars")(p, a, O), p = p.replace(/¨D/g, "$$"), p = p.replace(/¨T/g, "¨"), p = t.subParser("completeHTMLDocument")(p, a, O), t.helper.forEach(c, function(R) {
          p = t.subParser("runExtension")(R, p, a, O);
        }), h = O.metadata, p;
      }, this.makeMarkdown = this.makeMd = function(p, O) {
        if (p = p.replace(/\r\n/g, `
`), p = p.replace(/\r/g, `
`), p = p.replace(/>[ \t]+</, ">¨NBSP;<"), !O)
          if (window && window.document)
            O = window.document;
          else
            throw new Error("HTMLParser is undefined. If in a webworker or nodejs environment, you need to provide a WHATWG DOM and HTML such as JSDOM");
        var R = O.createElement("div");
        R.innerHTML = p;
        var F = {
          preList: be(R)
        };
        ce(R);
        for (var H = R.childNodes, D = "", de = 0; de < H.length; de++)
          D += t.subParser("makeMarkdown.node")(H[de], F);
        function ce(oe) {
          for (var ie = 0; ie < oe.childNodes.length; ++ie) {
            var fe = oe.childNodes[ie];
            fe.nodeType === 3 ? !/\S/.test(fe.nodeValue) && !/^[ ]+$/.test(fe.nodeValue) ? (oe.removeChild(fe), --ie) : (fe.nodeValue = fe.nodeValue.split(`
`).join(" "), fe.nodeValue = fe.nodeValue.replace(/(\s)+/g, "$1")) : fe.nodeType === 1 && ce(fe);
          }
        }
        function be(oe) {
          for (var ie = oe.querySelectorAll("pre"), fe = [], he = 0; he < ie.length; ++he)
            if (ie[he].childElementCount === 1 && ie[he].firstChild.tagName.toLowerCase() === "code") {
              var We = ie[he].firstChild.innerHTML.trim(), Ge = ie[he].firstChild.getAttribute("data-language") || "";
              if (Ge === "")
                for (var ar = ie[he].firstChild.className.split(" "), Ke = 0; Ke < ar.length; ++Ke) {
                  var dr = ar[Ke].match(/^language-(.+)$/);
                  if (dr !== null) {
                    Ge = dr[1];
                    break;
                  }
                }
              We = t.helper.unescapeHTMLEntities(We), fe.push(We), ie[he].outerHTML = '<precode language="' + Ge + '" precodenum="' + he.toString() + '"></precode>';
            } else
              fe.push(ie[he].innerHTML), ie[he].innerHTML = "", ie[he].setAttribute("prenum", he.toString());
          return fe;
        }
        return D;
      }, this.setOption = function(p, O) {
        a[p] = O;
      }, this.getOption = function(p) {
        return a[p];
      }, this.getOptions = function() {
        return a;
      }, this.addExtension = function(p, O) {
        O = O || null, T(p, O);
      }, this.useExtension = function(p) {
        T(p);
      }, this.setFlavor = function(p) {
        if (!A.hasOwnProperty(p))
          throw Error(p + " flavor was not found");
        var O = A[p];
        m = p;
        for (var R in O)
          O.hasOwnProperty(R) && (a[R] = O[R]);
      }, this.getFlavor = function() {
        return m;
      }, this.removeExtension = function(p) {
        t.helper.isArray(p) || (p = [p]);
        for (var O = 0; O < p.length; ++O) {
          for (var R = p[O], F = 0; F < d.length; ++F)
            d[F] === R && d.splice(F, 1);
          for (var H = 0; H < c.length; ++H)
            c[H] === R && c.splice(H, 1);
        }
      }, this.getAllExtensions = function() {
        return {
          language: d,
          output: c
        };
      }, this.getMetadata = function(p) {
        return p ? h.raw : h.parsed;
      }, this.getMetadataFormat = function() {
        return h.format;
      }, this._setMetadataPair = function(p, O) {
        h.parsed[p] = O;
      }, this._setMetadataFormat = function(p) {
        h.format = p;
      }, this._setMetadataRaw = function(p) {
        h.raw = p;
      };
    }, t.subParser("anchors", function(u, a, d) {
      u = d.converter._dispatch("anchors.before", u, a, d);
      var c = function(s, m, h, _, T, E, j) {
        if (t.helper.isUndefined(j) && (j = ""), h = h.toLowerCase(), s.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1)
          _ = "";
        else if (!_)
          if (h || (h = m.toLowerCase().replace(/ ?\n/g, " ")), _ = "#" + h, !t.helper.isUndefined(d.gUrls[h]))
            _ = d.gUrls[h], t.helper.isUndefined(d.gTitles[h]) || (j = d.gTitles[h]);
          else
            return s;
        _ = _.replace(t.helper.regexes.asteriskDashAndColon, t.helper.escapeCharactersCallback);
        var C = '<a href="' + _ + '"';
        return j !== "" && j !== null && (j = j.replace(/"/g, "&quot;"), j = j.replace(t.helper.regexes.asteriskDashAndColon, t.helper.escapeCharactersCallback), C += ' title="' + j + '"'), a.openLinksInNewWindow && !/^#/.test(_) && (C += ' rel="noopener noreferrer" target="¨E95Eblank"'), C += ">" + m + "</a>", C;
      };
      return u = u.replace(/\[((?:\[[^\]]*]|[^\[\]])*)] ?(?:\n *)?\[(.*?)]()()()()/g, c), u = u.replace(
        /\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<([^>]*)>(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
        c
      ), u = u.replace(
        /\[((?:\[[^\]]*]|[^\[\]])*)]()[ \t]*\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?:[ \t]*((["'])([^"]*?)\5))?[ \t]?\)/g,
        c
      ), u = u.replace(/\[([^\[\]]+)]()()()()()/g, c), a.ghMentions && (u = u.replace(/(^|\s)(\\)?(@([a-z\d]+(?:[a-z\d.-]+?[a-z\d]+)*))/gmi, function(s, m, h, _, T) {
        if (h === "\\")
          return m + _;
        if (!t.helper.isString(a.ghMentionsLink))
          throw new Error("ghMentionsLink option must be a string");
        var E = a.ghMentionsLink.replace(/\{u}/g, T), j = "";
        return a.openLinksInNewWindow && (j = ' rel="noopener noreferrer" target="¨E95Eblank"'), m + '<a href="' + E + '"' + j + ">" + _ + "</a>";
      })), u = d.converter._dispatch("anchors.after", u, a, d), u;
    });
    var B = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+?\.[^'">\s]+?)()(\1)?(?=\s|$)(?!["<>])/gi, V = /([*~_]+|\b)(((https?|ftp|dict):\/\/|www\.)[^'">\s]+\.[^'">\s]+?)([.!?,()\[\]])?(\1)?(?=\s|$)(?!["<>])/gi, W = /()<(((https?|ftp|dict):\/\/|www\.)[^'">\s]+)()>()/gi, G = /(^|\s)(?:mailto:)?([A-Za-z0-9!#$%&'*+-/=?^_`{|}~.]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)(?=$|\s)/gmi, Y = /<()(?:mailto:)?([-.\w]+@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi, x = function(u) {
      return function(a, d, c, s, m, h, _) {
        c = c.replace(t.helper.regexes.asteriskDashAndColon, t.helper.escapeCharactersCallback);
        var T = c, E = "", j = "", C = d || "", p = _ || "";
        return /^www\./i.test(c) && (c = c.replace(/^www\./i, "http://www.")), u.excludeTrailingPunctuationFromURLs && h && (E = h), u.openLinksInNewWindow && (j = ' rel="noopener noreferrer" target="¨E95Eblank"'), C + '<a href="' + c + '"' + j + ">" + T + "</a>" + E + p;
      };
    }, J = function(u, a) {
      return function(d, c, s) {
        var m = "mailto:";
        return c = c || "", s = t.subParser("unescapeSpecialChars")(s, u, a), u.encodeEmails ? (m = t.helper.encodeEmailAddress(m + s), s = t.helper.encodeEmailAddress(s)) : m = m + s, c + '<a href="' + m + '">' + s + "</a>";
      };
    };
    t.subParser("autoLinks", function(u, a, d) {
      return u = d.converter._dispatch("autoLinks.before", u, a, d), u = u.replace(W, x(a)), u = u.replace(Y, J(a, d)), u = d.converter._dispatch("autoLinks.after", u, a, d), u;
    }), t.subParser("simplifiedAutoLinks", function(u, a, d) {
      return a.simplifiedAutoLink && (u = d.converter._dispatch("simplifiedAutoLinks.before", u, a, d), a.excludeTrailingPunctuationFromURLs ? u = u.replace(V, x(a)) : u = u.replace(B, x(a)), u = u.replace(G, J(a, d)), u = d.converter._dispatch("simplifiedAutoLinks.after", u, a, d)), u;
    }), t.subParser("blockGamut", function(u, a, d) {
      return u = d.converter._dispatch("blockGamut.before", u, a, d), u = t.subParser("blockQuotes")(u, a, d), u = t.subParser("headers")(u, a, d), u = t.subParser("horizontalRule")(u, a, d), u = t.subParser("lists")(u, a, d), u = t.subParser("codeBlocks")(u, a, d), u = t.subParser("tables")(u, a, d), u = t.subParser("hashHTMLBlocks")(u, a, d), u = t.subParser("paragraphs")(u, a, d), u = d.converter._dispatch("blockGamut.after", u, a, d), u;
    }), t.subParser("blockQuotes", function(u, a, d) {
      u = d.converter._dispatch("blockQuotes.before", u, a, d), u = u + `

`;
      var c = /(^ {0,3}>[ \t]?.+\n(.+\n)*\n*)+/gm;
      return a.splitAdjacentBlockquotes && (c = /^ {0,3}>[\s\S]*?(?:\n\n)/gm), u = u.replace(c, function(s) {
        return s = s.replace(/^[ \t]*>[ \t]?/gm, ""), s = s.replace(/¨0/g, ""), s = s.replace(/^[ \t]+$/gm, ""), s = t.subParser("githubCodeBlocks")(s, a, d), s = t.subParser("blockGamut")(s, a, d), s = s.replace(/(^|\n)/g, "$1  "), s = s.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm, function(m, h) {
          var _ = h;
          return _ = _.replace(/^  /mg, "¨0"), _ = _.replace(/¨0/g, ""), _;
        }), t.subParser("hashBlock")(`<blockquote>
` + s + `
</blockquote>`, a, d);
      }), u = d.converter._dispatch("blockQuotes.after", u, a, d), u;
    }), t.subParser("codeBlocks", function(u, a, d) {
      u = d.converter._dispatch("codeBlocks.before", u, a, d), u += "¨0";
      var c = /(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=¨0))/g;
      return u = u.replace(c, function(s, m, h) {
        var _ = m, T = h, E = `
`;
        return _ = t.subParser("outdent")(_, a, d), _ = t.subParser("encodeCode")(_, a, d), _ = t.subParser("detab")(_, a, d), _ = _.replace(/^\n+/g, ""), _ = _.replace(/\n+$/g, ""), a.omitExtraWLInCodeBlocks && (E = ""), _ = "<pre><code>" + _ + E + "</code></pre>", t.subParser("hashBlock")(_, a, d) + T;
      }), u = u.replace(/¨0/, ""), u = d.converter._dispatch("codeBlocks.after", u, a, d), u;
    }), t.subParser("codeSpans", function(u, a, d) {
      return u = d.converter._dispatch("codeSpans.before", u, a, d), typeof u > "u" && (u = ""), u = u.replace(
        /(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,
        function(c, s, m, h) {
          var _ = h;
          return _ = _.replace(/^([ \t]*)/g, ""), _ = _.replace(/[ \t]*$/g, ""), _ = t.subParser("encodeCode")(_, a, d), _ = s + "<code>" + _ + "</code>", _ = t.subParser("hashHTMLSpans")(_, a, d), _;
        }
      ), u = d.converter._dispatch("codeSpans.after", u, a, d), u;
    }), t.subParser("completeHTMLDocument", function(u, a, d) {
      if (!a.completeHTMLDocument)
        return u;
      u = d.converter._dispatch("completeHTMLDocument.before", u, a, d);
      var c = "html", s = `<!DOCTYPE HTML>
`, m = "", h = `<meta charset="utf-8">
`, _ = "", T = "";
      typeof d.metadata.parsed.doctype < "u" && (s = "<!DOCTYPE " + d.metadata.parsed.doctype + `>
`, c = d.metadata.parsed.doctype.toString().toLowerCase(), (c === "html" || c === "html5") && (h = '<meta charset="utf-8">'));
      for (var E in d.metadata.parsed)
        if (d.metadata.parsed.hasOwnProperty(E))
          switch (E.toLowerCase()) {
            case "doctype":
              break;
            case "title":
              m = "<title>" + d.metadata.parsed.title + `</title>
`;
              break;
            case "charset":
              c === "html" || c === "html5" ? h = '<meta charset="' + d.metadata.parsed.charset + `">
` : h = '<meta name="charset" content="' + d.metadata.parsed.charset + `">
`;
              break;
            case "language":
            case "lang":
              _ = ' lang="' + d.metadata.parsed[E] + '"', T += '<meta name="' + E + '" content="' + d.metadata.parsed[E] + `">
`;
              break;
            default:
              T += '<meta name="' + E + '" content="' + d.metadata.parsed[E] + `">
`;
          }
      return u = s + "<html" + _ + `>
<head>
` + m + h + T + `</head>
<body>
` + u.trim() + `
</body>
</html>`, u = d.converter._dispatch("completeHTMLDocument.after", u, a, d), u;
    }), t.subParser("detab", function(u, a, d) {
      return u = d.converter._dispatch("detab.before", u, a, d), u = u.replace(/\t(?=\t)/g, "    "), u = u.replace(/\t/g, "¨A¨B"), u = u.replace(/¨B(.+?)¨A/g, function(c, s) {
        for (var m = s, h = 4 - m.length % 4, _ = 0; _ < h; _++)
          m += " ";
        return m;
      }), u = u.replace(/¨A/g, "    "), u = u.replace(/¨B/g, ""), u = d.converter._dispatch("detab.after", u, a, d), u;
    }), t.subParser("ellipsis", function(u, a, d) {
      return a.ellipsis && (u = d.converter._dispatch("ellipsis.before", u, a, d), u = u.replace(/\.\.\./g, "…"), u = d.converter._dispatch("ellipsis.after", u, a, d)), u;
    }), t.subParser("emoji", function(u, a, d) {
      if (!a.emoji)
        return u;
      u = d.converter._dispatch("emoji.before", u, a, d);
      var c = /:([\S]+?):/g;
      return u = u.replace(c, function(s, m) {
        return t.helper.emojis.hasOwnProperty(m) ? t.helper.emojis[m] : s;
      }), u = d.converter._dispatch("emoji.after", u, a, d), u;
    }), t.subParser("encodeAmpsAndAngles", function(u, a, d) {
      return u = d.converter._dispatch("encodeAmpsAndAngles.before", u, a, d), u = u.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g, "&amp;"), u = u.replace(/<(?![a-z\/?$!])/gi, "&lt;"), u = u.replace(/</g, "&lt;"), u = u.replace(/>/g, "&gt;"), u = d.converter._dispatch("encodeAmpsAndAngles.after", u, a, d), u;
    }), t.subParser("encodeBackslashEscapes", function(u, a, d) {
      return u = d.converter._dispatch("encodeBackslashEscapes.before", u, a, d), u = u.replace(/\\(\\)/g, t.helper.escapeCharactersCallback), u = u.replace(/\\([`*_{}\[\]()>#+.!~=|:-])/g, t.helper.escapeCharactersCallback), u = d.converter._dispatch("encodeBackslashEscapes.after", u, a, d), u;
    }), t.subParser("encodeCode", function(u, a, d) {
      return u = d.converter._dispatch("encodeCode.before", u, a, d), u = u.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/([*_{}\[\]\\=~-])/g, t.helper.escapeCharactersCallback), u = d.converter._dispatch("encodeCode.after", u, a, d), u;
    }), t.subParser("escapeSpecialCharsWithinTagAttributes", function(u, a, d) {
      u = d.converter._dispatch("escapeSpecialCharsWithinTagAttributes.before", u, a, d);
      var c = /<\/?[a-z\d_:-]+(?:[\s]+[\s\S]+?)?>/gi, s = /<!(--(?:(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>/gi;
      return u = u.replace(c, function(m) {
        return m.replace(/(.)<\/?code>(?=.)/g, "$1`").replace(/([\\`*_~=|])/g, t.helper.escapeCharactersCallback);
      }), u = u.replace(s, function(m) {
        return m.replace(/([\\`*_~=|])/g, t.helper.escapeCharactersCallback);
      }), u = d.converter._dispatch("escapeSpecialCharsWithinTagAttributes.after", u, a, d), u;
    }), t.subParser("githubCodeBlocks", function(u, a, d) {
      return a.ghCodeBlocks ? (u = d.converter._dispatch("githubCodeBlocks.before", u, a, d), u += "¨0", u = u.replace(/(?:^|\n)(?: {0,3})(```+|~~~+)(?: *)([^\s`~]*)\n([\s\S]*?)\n(?: {0,3})\1/g, function(c, s, m, h) {
        var _ = a.omitExtraWLInCodeBlocks ? "" : `
`;
        return h = t.subParser("encodeCode")(h, a, d), h = t.subParser("detab")(h, a, d), h = h.replace(/^\n+/g, ""), h = h.replace(/\n+$/g, ""), h = "<pre><code" + (m ? ' class="' + m + " language-" + m + '"' : "") + ">" + h + _ + "</code></pre>", h = t.subParser("hashBlock")(h, a, d), `

¨G` + (d.ghCodeBlocks.push({ text: c, codeblock: h }) - 1) + `G

`;
      }), u = u.replace(/¨0/, ""), d.converter._dispatch("githubCodeBlocks.after", u, a, d)) : u;
    }), t.subParser("hashBlock", function(u, a, d) {
      return u = d.converter._dispatch("hashBlock.before", u, a, d), u = u.replace(/(^\n+|\n+$)/g, ""), u = `

¨K` + (d.gHtmlBlocks.push(u) - 1) + `K

`, u = d.converter._dispatch("hashBlock.after", u, a, d), u;
    }), t.subParser("hashCodeTags", function(u, a, d) {
      u = d.converter._dispatch("hashCodeTags.before", u, a, d);
      var c = function(s, m, h, _) {
        var T = h + t.subParser("encodeCode")(m, a, d) + _;
        return "¨C" + (d.gHtmlSpans.push(T) - 1) + "C";
      };
      return u = t.helper.replaceRecursiveRegExp(u, c, "<code\\b[^>]*>", "</code>", "gim"), u = d.converter._dispatch("hashCodeTags.after", u, a, d), u;
    }), t.subParser("hashElement", function(u, a, d) {
      return function(c, s) {
        var m = s;
        return m = m.replace(/\n\n/g, `
`), m = m.replace(/^\n/, ""), m = m.replace(/\n+$/g, ""), m = `

¨K` + (d.gHtmlBlocks.push(m) - 1) + `K

`, m;
      };
    }), t.subParser("hashHTMLBlocks", function(u, a, d) {
      u = d.converter._dispatch("hashHTMLBlocks.before", u, a, d);
      var c = [
        "pre",
        "div",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "blockquote",
        "table",
        "dl",
        "ol",
        "ul",
        "script",
        "noscript",
        "form",
        "fieldset",
        "iframe",
        "math",
        "style",
        "section",
        "header",
        "footer",
        "nav",
        "article",
        "aside",
        "address",
        "audio",
        "canvas",
        "figure",
        "hgroup",
        "output",
        "video",
        "p"
      ], s = function(p, O, R, F) {
        var H = p;
        return R.search(/\bmarkdown\b/) !== -1 && (H = R + d.converter.makeHtml(O) + F), `

¨K` + (d.gHtmlBlocks.push(H) - 1) + `K

`;
      };
      a.backslashEscapesHTMLTags && (u = u.replace(/\\<(\/?[^>]+?)>/g, function(p, O) {
        return "&lt;" + O + "&gt;";
      }));
      for (var m = 0; m < c.length; ++m)
        for (var h, _ = new RegExp("^ {0,3}(<" + c[m] + "\\b[^>]*>)", "im"), T = "<" + c[m] + "\\b[^>]*>", E = "</" + c[m] + ">"; (h = t.helper.regexIndexOf(u, _)) !== -1; ) {
          var j = t.helper.splitAtIndex(u, h), C = t.helper.replaceRecursiveRegExp(j[1], s, T, E, "im");
          if (C === j[1])
            break;
          u = j[0].concat(C);
        }
      return u = u.replace(
        /(\n {0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,
        t.subParser("hashElement")(u, a, d)
      ), u = t.helper.replaceRecursiveRegExp(u, function(p) {
        return `

¨K` + (d.gHtmlBlocks.push(p) - 1) + `K

`;
      }, "^ {0,3}<!--", "-->", "gm"), u = u.replace(
        /(?:\n\n)( {0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,
        t.subParser("hashElement")(u, a, d)
      ), u = d.converter._dispatch("hashHTMLBlocks.after", u, a, d), u;
    }), t.subParser("hashHTMLSpans", function(u, a, d) {
      u = d.converter._dispatch("hashHTMLSpans.before", u, a, d);
      function c(s) {
        return "¨C" + (d.gHtmlSpans.push(s) - 1) + "C";
      }
      return u = u.replace(/<[^>]+?\/>/gi, function(s) {
        return c(s);
      }), u = u.replace(/<([^>]+?)>[\s\S]*?<\/\1>/g, function(s) {
        return c(s);
      }), u = u.replace(/<([^>]+?)\s[^>]+?>[\s\S]*?<\/\1>/g, function(s) {
        return c(s);
      }), u = u.replace(/<[^>]+?>/gi, function(s) {
        return c(s);
      }), u = d.converter._dispatch("hashHTMLSpans.after", u, a, d), u;
    }), t.subParser("unhashHTMLSpans", function(u, a, d) {
      u = d.converter._dispatch("unhashHTMLSpans.before", u, a, d);
      for (var c = 0; c < d.gHtmlSpans.length; ++c) {
        for (var s = d.gHtmlSpans[c], m = 0; /¨C(\d+)C/.test(s); ) {
          var h = RegExp.$1;
          if (s = s.replace("¨C" + h + "C", d.gHtmlSpans[h]), m === 10) {
            console.error("maximum nesting of 10 spans reached!!!");
            break;
          }
          ++m;
        }
        u = u.replace("¨C" + c + "C", s);
      }
      return u = d.converter._dispatch("unhashHTMLSpans.after", u, a, d), u;
    }), t.subParser("hashPreCodeTags", function(u, a, d) {
      u = d.converter._dispatch("hashPreCodeTags.before", u, a, d);
      var c = function(s, m, h, _) {
        var T = h + t.subParser("encodeCode")(m, a, d) + _;
        return `

¨G` + (d.ghCodeBlocks.push({ text: s, codeblock: T }) - 1) + `G

`;
      };
      return u = t.helper.replaceRecursiveRegExp(u, c, "^ {0,3}<pre\\b[^>]*>\\s*<code\\b[^>]*>", "^ {0,3}</code>\\s*</pre>", "gim"), u = d.converter._dispatch("hashPreCodeTags.after", u, a, d), u;
    }), t.subParser("headers", function(u, a, d) {
      u = d.converter._dispatch("headers.before", u, a, d);
      var c = isNaN(parseInt(a.headerLevelStart)) ? 1 : parseInt(a.headerLevelStart), s = a.smoothLivePreview ? /^(.+)[ \t]*\n={2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n=+[ \t]*\n+/gm, m = a.smoothLivePreview ? /^(.+)[ \t]*\n-{2,}[ \t]*\n+/gm : /^(.+)[ \t]*\n-+[ \t]*\n+/gm;
      u = u.replace(s, function(T, E) {
        var j = t.subParser("spanGamut")(E, a, d), C = a.noHeaderId ? "" : ' id="' + _(E) + '"', p = c, O = "<h" + p + C + ">" + j + "</h" + p + ">";
        return t.subParser("hashBlock")(O, a, d);
      }), u = u.replace(m, function(T, E) {
        var j = t.subParser("spanGamut")(E, a, d), C = a.noHeaderId ? "" : ' id="' + _(E) + '"', p = c + 1, O = "<h" + p + C + ">" + j + "</h" + p + ">";
        return t.subParser("hashBlock")(O, a, d);
      });
      var h = a.requireSpaceBeforeHeadingText ? /^(#{1,6})[ \t]+(.+?)[ \t]*#*\n+/gm : /^(#{1,6})[ \t]*(.+?)[ \t]*#*\n+/gm;
      u = u.replace(h, function(T, E, j) {
        var C = j;
        a.customizedHeaderId && (C = j.replace(/\s?\{([^{]+?)}\s*$/, ""));
        var p = t.subParser("spanGamut")(C, a, d), O = a.noHeaderId ? "" : ' id="' + _(j) + '"', R = c - 1 + E.length, F = "<h" + R + O + ">" + p + "</h" + R + ">";
        return t.subParser("hashBlock")(F, a, d);
      });
      function _(T) {
        var E, j;
        if (a.customizedHeaderId) {
          var C = T.match(/\{([^{]+?)}\s*$/);
          C && C[1] && (T = C[1]);
        }
        return E = T, t.helper.isString(a.prefixHeaderId) ? j = a.prefixHeaderId : a.prefixHeaderId === !0 ? j = "section-" : j = "", a.rawPrefixHeaderId || (E = j + E), a.ghCompatibleHeaderId ? E = E.replace(/ /g, "-").replace(/&amp;/g, "").replace(/¨T/g, "").replace(/¨D/g, "").replace(/[&+$,\/:;=?@"#{}|^¨~\[\]`\\*)(%.!'<>]/g, "").toLowerCase() : a.rawHeaderId ? E = E.replace(/ /g, "-").replace(/&amp;/g, "&").replace(/¨T/g, "¨").replace(/¨D/g, "$").replace(/["']/g, "-").toLowerCase() : E = E.replace(/[^\w]/g, "").toLowerCase(), a.rawPrefixHeaderId && (E = j + E), d.hashLinkCounts[E] ? E = E + "-" + d.hashLinkCounts[E]++ : d.hashLinkCounts[E] = 1, E;
      }
      return u = d.converter._dispatch("headers.after", u, a, d), u;
    }), t.subParser("horizontalRule", function(u, a, d) {
      u = d.converter._dispatch("horizontalRule.before", u, a, d);
      var c = t.subParser("hashBlock")("<hr />", a, d);
      return u = u.replace(/^ {0,2}( ?-){3,}[ \t]*$/gm, c), u = u.replace(/^ {0,2}( ?\*){3,}[ \t]*$/gm, c), u = u.replace(/^ {0,2}( ?_){3,}[ \t]*$/gm, c), u = d.converter._dispatch("horizontalRule.after", u, a, d), u;
    }), t.subParser("images", function(u, a, d) {
      u = d.converter._dispatch("images.before", u, a, d);
      var c = /!\[([^\]]*?)][ \t]*()\([ \t]?<?([\S]+?(?:\([\S]*?\)[\S]*?)?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, s = /!\[([^\]]*?)][ \t]*()\([ \t]?<([^>]*)>(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(?:(["'])([^"]*?)\6))?[ \t]?\)/g, m = /!\[([^\]]*?)][ \t]*()\([ \t]?<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*(?:(["'])([^"]*?)\6)?[ \t]?\)/g, h = /!\[([^\]]*?)] ?(?:\n *)?\[([\s\S]*?)]()()()()()/g, _ = /!\[([^\[\]]+)]()()()()()/g;
      function T(j, C, p, O, R, F, H, D) {
        return O = O.replace(/\s/g, ""), E(j, C, p, O, R, F, H, D);
      }
      function E(j, C, p, O, R, F, H, D) {
        var de = d.gUrls, ce = d.gTitles, be = d.gDimensions;
        if (p = p.toLowerCase(), D || (D = ""), j.search(/\(<?\s*>? ?(['"].*['"])?\)$/m) > -1)
          O = "";
        else if (O === "" || O === null)
          if ((p === "" || p === null) && (p = C.toLowerCase().replace(/ ?\n/g, " ")), O = "#" + p, !t.helper.isUndefined(de[p]))
            O = de[p], t.helper.isUndefined(ce[p]) || (D = ce[p]), t.helper.isUndefined(be[p]) || (R = be[p].width, F = be[p].height);
          else
            return j;
        C = C.replace(/"/g, "&quot;").replace(t.helper.regexes.asteriskDashAndColon, t.helper.escapeCharactersCallback), O = O.replace(t.helper.regexes.asteriskDashAndColon, t.helper.escapeCharactersCallback);
        var oe = '<img src="' + O + '" alt="' + C + '"';
        return D && t.helper.isString(D) && (D = D.replace(/"/g, "&quot;").replace(t.helper.regexes.asteriskDashAndColon, t.helper.escapeCharactersCallback), oe += ' title="' + D + '"'), R && F && (R = R === "*" ? "auto" : R, F = F === "*" ? "auto" : F, oe += ' width="' + R + '"', oe += ' height="' + F + '"'), oe += " />", oe;
      }
      return u = u.replace(h, E), u = u.replace(m, T), u = u.replace(s, E), u = u.replace(c, E), u = u.replace(_, E), u = d.converter._dispatch("images.after", u, a, d), u;
    }), t.subParser("italicsAndBold", function(u, a, d) {
      u = d.converter._dispatch("italicsAndBold.before", u, a, d);
      function c(s, m, h) {
        return m + s + h;
      }
      return a.literalMidWordUnderscores ? (u = u.replace(/\b___(\S[\s\S]*?)___\b/g, function(s, m) {
        return c(m, "<strong><em>", "</em></strong>");
      }), u = u.replace(/\b__(\S[\s\S]*?)__\b/g, function(s, m) {
        return c(m, "<strong>", "</strong>");
      }), u = u.replace(/\b_(\S[\s\S]*?)_\b/g, function(s, m) {
        return c(m, "<em>", "</em>");
      })) : (u = u.replace(/___(\S[\s\S]*?)___/g, function(s, m) {
        return /\S$/.test(m) ? c(m, "<strong><em>", "</em></strong>") : s;
      }), u = u.replace(/__(\S[\s\S]*?)__/g, function(s, m) {
        return /\S$/.test(m) ? c(m, "<strong>", "</strong>") : s;
      }), u = u.replace(/_([^\s_][\s\S]*?)_/g, function(s, m) {
        return /\S$/.test(m) ? c(m, "<em>", "</em>") : s;
      })), a.literalMidWordAsterisks ? (u = u.replace(/([^*]|^)\B\*\*\*(\S[\s\S]*?)\*\*\*\B(?!\*)/g, function(s, m, h) {
        return c(h, m + "<strong><em>", "</em></strong>");
      }), u = u.replace(/([^*]|^)\B\*\*(\S[\s\S]*?)\*\*\B(?!\*)/g, function(s, m, h) {
        return c(h, m + "<strong>", "</strong>");
      }), u = u.replace(/([^*]|^)\B\*(\S[\s\S]*?)\*\B(?!\*)/g, function(s, m, h) {
        return c(h, m + "<em>", "</em>");
      })) : (u = u.replace(/\*\*\*(\S[\s\S]*?)\*\*\*/g, function(s, m) {
        return /\S$/.test(m) ? c(m, "<strong><em>", "</em></strong>") : s;
      }), u = u.replace(/\*\*(\S[\s\S]*?)\*\*/g, function(s, m) {
        return /\S$/.test(m) ? c(m, "<strong>", "</strong>") : s;
      }), u = u.replace(/\*([^\s*][\s\S]*?)\*/g, function(s, m) {
        return /\S$/.test(m) ? c(m, "<em>", "</em>") : s;
      })), u = d.converter._dispatch("italicsAndBold.after", u, a, d), u;
    }), t.subParser("lists", function(u, a, d) {
      function c(h, _) {
        d.gListLevel++, h = h.replace(/\n{2,}$/, `
`), h += "¨0";
        var T = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0| {0,3}([*+-]|\d+[.])[ \t]+))/gm, E = /\n[ \t]*\n(?!¨0)/.test(h);
        return a.disableForced4SpacesIndentedSublists && (T = /(\n)?(^ {0,3})([*+-]|\d+[.])[ \t]+((\[(x|X| )?])?[ \t]*[^\r]+?(\n{1,2}))(?=\n*(¨0|\2([*+-]|\d+[.])[ \t]+))/gm), h = h.replace(T, function(j, C, p, O, R, F, H) {
          H = H && H.trim() !== "";
          var D = t.subParser("outdent")(R, a, d), de = "";
          return F && a.tasklists && (de = ' class="task-list-item" style="list-style-type: none;"', D = D.replace(/^[ \t]*\[(x|X| )?]/m, function() {
            var ce = '<input type="checkbox" disabled style="margin: 0px 0.35em 0.25em -1.6em; vertical-align: middle;"';
            return H && (ce += " checked"), ce += ">", ce;
          })), D = D.replace(/^([-*+]|\d\.)[ \t]+[\S\n ]*/g, function(ce) {
            return "¨A" + ce;
          }), C || D.search(/\n{2,}/) > -1 ? (D = t.subParser("githubCodeBlocks")(D, a, d), D = t.subParser("blockGamut")(D, a, d)) : (D = t.subParser("lists")(D, a, d), D = D.replace(/\n$/, ""), D = t.subParser("hashHTMLBlocks")(D, a, d), D = D.replace(/\n\n+/g, `

`), E ? D = t.subParser("paragraphs")(D, a, d) : D = t.subParser("spanGamut")(D, a, d)), D = D.replace("¨A", ""), D = "<li" + de + ">" + D + `</li>
`, D;
        }), h = h.replace(/¨0/g, ""), d.gListLevel--, _ && (h = h.replace(/\s+$/, "")), h;
      }
      function s(h, _) {
        if (_ === "ol") {
          var T = h.match(/^ *(\d+)\./);
          if (T && T[1] !== "1")
            return ' start="' + T[1] + '"';
        }
        return "";
      }
      function m(h, _, T) {
        var E = a.disableForced4SpacesIndentedSublists ? /^ ?\d+\.[ \t]/gm : /^ {0,3}\d+\.[ \t]/gm, j = a.disableForced4SpacesIndentedSublists ? /^ ?[*+-][ \t]/gm : /^ {0,3}[*+-][ \t]/gm, C = _ === "ul" ? E : j, p = "";
        if (h.search(C) !== -1)
          (function R(F) {
            var H = F.search(C), D = s(h, _);
            H !== -1 ? (p += `

<` + _ + D + `>
` + c(F.slice(0, H), !!T) + "</" + _ + `>
`, _ = _ === "ul" ? "ol" : "ul", C = _ === "ul" ? E : j, R(F.slice(H))) : p += `

<` + _ + D + `>
` + c(F, !!T) + "</" + _ + `>
`;
          })(h);
        else {
          var O = s(h, _);
          p = `

<` + _ + O + `>
` + c(h, !!T) + "</" + _ + `>
`;
        }
        return p;
      }
      return u = d.converter._dispatch("lists.before", u, a, d), u += "¨0", d.gListLevel ? u = u.replace(
        /^(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
        function(h, _, T) {
          var E = T.search(/[*+-]/g) > -1 ? "ul" : "ol";
          return m(_, E, !0);
        }
      ) : u = u.replace(
        /(\n\n|^\n?)(( {0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(¨0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm,
        function(h, _, T, E) {
          var j = E.search(/[*+-]/g) > -1 ? "ul" : "ol";
          return m(T, j, !1);
        }
      ), u = u.replace(/¨0/, ""), u = d.converter._dispatch("lists.after", u, a, d), u;
    }), t.subParser("metadata", function(u, a, d) {
      if (!a.metadata)
        return u;
      u = d.converter._dispatch("metadata.before", u, a, d);
      function c(s) {
        d.metadata.raw = s, s = s.replace(/&/g, "&amp;").replace(/"/g, "&quot;"), s = s.replace(/\n {4}/g, " "), s.replace(/^([\S ]+): +([\s\S]+?)$/gm, function(m, h, _) {
          return d.metadata.parsed[h] = _, "";
        });
      }
      return u = u.replace(/^\s*«««+(\S*?)\n([\s\S]+?)\n»»»+\n/, function(s, m, h) {
        return c(h), "¨M";
      }), u = u.replace(/^\s*---+(\S*?)\n([\s\S]+?)\n---+\n/, function(s, m, h) {
        return m && (d.metadata.format = m), c(h), "¨M";
      }), u = u.replace(/¨M/g, ""), u = d.converter._dispatch("metadata.after", u, a, d), u;
    }), t.subParser("outdent", function(u, a, d) {
      return u = d.converter._dispatch("outdent.before", u, a, d), u = u.replace(/^(\t|[ ]{1,4})/gm, "¨0"), u = u.replace(/¨0/g, ""), u = d.converter._dispatch("outdent.after", u, a, d), u;
    }), t.subParser("paragraphs", function(u, a, d) {
      u = d.converter._dispatch("paragraphs.before", u, a, d), u = u.replace(/^\n+/g, ""), u = u.replace(/\n+$/g, "");
      for (var c = u.split(/\n{2,}/g), s = [], m = c.length, h = 0; h < m; h++) {
        var _ = c[h];
        _.search(/¨(K|G)(\d+)\1/g) >= 0 ? s.push(_) : _.search(/\S/) >= 0 && (_ = t.subParser("spanGamut")(_, a, d), _ = _.replace(/^([ \t]*)/g, "<p>"), _ += "</p>", s.push(_));
      }
      for (m = s.length, h = 0; h < m; h++) {
        for (var T = "", E = s[h], j = !1; /¨(K|G)(\d+)\1/.test(E); ) {
          var C = RegExp.$1, p = RegExp.$2;
          C === "K" ? T = d.gHtmlBlocks[p] : j ? T = t.subParser("encodeCode")(d.ghCodeBlocks[p].text, a, d) : T = d.ghCodeBlocks[p].codeblock, T = T.replace(/\$/g, "$$$$"), E = E.replace(/(\n\n)?¨(K|G)\d+\2(\n\n)?/, T), /^<pre\b[^>]*>\s*<code\b[^>]*>/.test(E) && (j = !0);
        }
        s[h] = E;
      }
      return u = s.join(`
`), u = u.replace(/^\n+/g, ""), u = u.replace(/\n+$/g, ""), d.converter._dispatch("paragraphs.after", u, a, d);
    }), t.subParser("runExtension", function(u, a, d, c) {
      if (u.filter)
        a = u.filter(a, c.converter, d);
      else if (u.regex) {
        var s = u.regex;
        s instanceof RegExp || (s = new RegExp(s, "g")), a = a.replace(s, u.replace);
      }
      return a;
    }), t.subParser("spanGamut", function(u, a, d) {
      return u = d.converter._dispatch("spanGamut.before", u, a, d), u = t.subParser("codeSpans")(u, a, d), u = t.subParser("escapeSpecialCharsWithinTagAttributes")(u, a, d), u = t.subParser("encodeBackslashEscapes")(u, a, d), u = t.subParser("images")(u, a, d), u = t.subParser("anchors")(u, a, d), u = t.subParser("autoLinks")(u, a, d), u = t.subParser("simplifiedAutoLinks")(u, a, d), u = t.subParser("emoji")(u, a, d), u = t.subParser("underline")(u, a, d), u = t.subParser("italicsAndBold")(u, a, d), u = t.subParser("strikethrough")(u, a, d), u = t.subParser("ellipsis")(u, a, d), u = t.subParser("hashHTMLSpans")(u, a, d), u = t.subParser("encodeAmpsAndAngles")(u, a, d), a.simpleLineBreaks ? /\n\n¨K/.test(u) || (u = u.replace(/\n+/g, `<br />
`)) : u = u.replace(/  +\n/g, `<br />
`), u = d.converter._dispatch("spanGamut.after", u, a, d), u;
    }), t.subParser("strikethrough", function(u, a, d) {
      function c(s) {
        return a.simplifiedAutoLink && (s = t.subParser("simplifiedAutoLinks")(s, a, d)), "<del>" + s + "</del>";
      }
      return a.strikethrough && (u = d.converter._dispatch("strikethrough.before", u, a, d), u = u.replace(/(?:~){2}([\s\S]+?)(?:~){2}/g, function(s, m) {
        return c(m);
      }), u = d.converter._dispatch("strikethrough.after", u, a, d)), u;
    }), t.subParser("stripLinkDefinitions", function(u, a, d) {
      var c = /^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?([^>\s]+)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n+|(?=¨0))/gm, s = /^ {0,3}\[([^\]]+)]:[ \t]*\n?[ \t]*<?(data:.+?\/.+?;base64,[A-Za-z0-9+/=\n]+?)>?(?: =([*\d]+[A-Za-z%]{0,4})x([*\d]+[A-Za-z%]{0,4}))?[ \t]*\n?[ \t]*(?:(\n*)["|'(](.+?)["|')][ \t]*)?(?:\n\n|(?=¨0)|(?=\n\[))/gm;
      u += "¨0";
      var m = function(h, _, T, E, j, C, p) {
        return _ = _.toLowerCase(), u.toLowerCase().split(_).length - 1 < 2 ? h : (T.match(/^data:.+?\/.+?;base64,/) ? d.gUrls[_] = T.replace(/\s/g, "") : d.gUrls[_] = t.subParser("encodeAmpsAndAngles")(T, a, d), C ? C + p : (p && (d.gTitles[_] = p.replace(/"|'/g, "&quot;")), a.parseImgDimensions && E && j && (d.gDimensions[_] = {
          width: E,
          height: j
        }), ""));
      };
      return u = u.replace(s, m), u = u.replace(c, m), u = u.replace(/¨0/, ""), u;
    }), t.subParser("tables", function(u, a, d) {
      if (!a.tables)
        return u;
      var c = /^ {0,3}\|?.+\|.+\n {0,3}\|?[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*:?[ \t]*(?:[-=]){2,}[\s\S]+?(?:\n\n|¨0)/gm, s = /^ {0,3}\|.+\|[ \t]*\n {0,3}\|[ \t]*:?[ \t]*(?:[-=]){2,}[ \t]*:?[ \t]*\|[ \t]*\n( {0,3}\|.+\|[ \t]*\n)*(?:\n|¨0)/gm;
      function m(j) {
        return /^:[ \t]*--*$/.test(j) ? ' style="text-align:left;"' : /^--*[ \t]*:[ \t]*$/.test(j) ? ' style="text-align:right;"' : /^:[ \t]*--*[ \t]*:$/.test(j) ? ' style="text-align:center;"' : "";
      }
      function h(j, C) {
        var p = "";
        return j = j.trim(), (a.tablesHeaderId || a.tableHeaderId) && (p = ' id="' + j.replace(/ /g, "_").toLowerCase() + '"'), j = t.subParser("spanGamut")(j, a, d), "<th" + p + C + ">" + j + `</th>
`;
      }
      function _(j, C) {
        var p = t.subParser("spanGamut")(j, a, d);
        return "<td" + C + ">" + p + `</td>
`;
      }
      function T(j, C) {
        for (var p = `<table>
<thead>
<tr>
`, O = j.length, R = 0; R < O; ++R)
          p += j[R];
        for (p += `</tr>
</thead>
<tbody>
`, R = 0; R < C.length; ++R) {
          p += `<tr>
`;
          for (var F = 0; F < O; ++F)
            p += C[R][F];
          p += `</tr>
`;
        }
        return p += `</tbody>
</table>
`, p;
      }
      function E(j) {
        var C, p = j.split(`
`);
        for (C = 0; C < p.length; ++C)
          /^ {0,3}\|/.test(p[C]) && (p[C] = p[C].replace(/^ {0,3}\|/, "")), /\|[ \t]*$/.test(p[C]) && (p[C] = p[C].replace(/\|[ \t]*$/, "")), p[C] = t.subParser("codeSpans")(p[C], a, d);
        var O = p[0].split("|").map(function(oe) {
          return oe.trim();
        }), R = p[1].split("|").map(function(oe) {
          return oe.trim();
        }), F = [], H = [], D = [], de = [];
        for (p.shift(), p.shift(), C = 0; C < p.length; ++C)
          p[C].trim() !== "" && F.push(
            p[C].split("|").map(function(oe) {
              return oe.trim();
            })
          );
        if (O.length < R.length)
          return j;
        for (C = 0; C < R.length; ++C)
          D.push(m(R[C]));
        for (C = 0; C < O.length; ++C)
          t.helper.isUndefined(D[C]) && (D[C] = ""), H.push(h(O[C], D[C]));
        for (C = 0; C < F.length; ++C) {
          for (var ce = [], be = 0; be < H.length; ++be)
            t.helper.isUndefined(F[C][be]), ce.push(_(F[C][be], D[be]));
          de.push(ce);
        }
        return T(H, de);
      }
      return u = d.converter._dispatch("tables.before", u, a, d), u = u.replace(/\\(\|)/g, t.helper.escapeCharactersCallback), u = u.replace(c, E), u = u.replace(s, E), u = d.converter._dispatch("tables.after", u, a, d), u;
    }), t.subParser("underline", function(u, a, d) {
      return a.underline && (u = d.converter._dispatch("underline.before", u, a, d), a.literalMidWordUnderscores ? (u = u.replace(/\b___(\S[\s\S]*?)___\b/g, function(c, s) {
        return "<u>" + s + "</u>";
      }), u = u.replace(/\b__(\S[\s\S]*?)__\b/g, function(c, s) {
        return "<u>" + s + "</u>";
      })) : (u = u.replace(/___(\S[\s\S]*?)___/g, function(c, s) {
        return /\S$/.test(s) ? "<u>" + s + "</u>" : c;
      }), u = u.replace(/__(\S[\s\S]*?)__/g, function(c, s) {
        return /\S$/.test(s) ? "<u>" + s + "</u>" : c;
      })), u = u.replace(/(_)/g, t.helper.escapeCharactersCallback), u = d.converter._dispatch("underline.after", u, a, d)), u;
    }), t.subParser("unescapeSpecialChars", function(u, a, d) {
      return u = d.converter._dispatch("unescapeSpecialChars.before", u, a, d), u = u.replace(/¨E(\d+)E/g, function(c, s) {
        var m = parseInt(s);
        return String.fromCharCode(m);
      }), u = d.converter._dispatch("unescapeSpecialChars.after", u, a, d), u;
    }), t.subParser("makeMarkdown.blockquote", function(u, a) {
      var d = "";
      if (u.hasChildNodes())
        for (var c = u.childNodes, s = c.length, m = 0; m < s; ++m) {
          var h = t.subParser("makeMarkdown.node")(c[m], a);
          h !== "" && (d += h);
        }
      return d = d.trim(), d = "> " + d.split(`
`).join(`
> `), d;
    }), t.subParser("makeMarkdown.codeBlock", function(u, a) {
      var d = u.getAttribute("language"), c = u.getAttribute("precodenum");
      return "```" + d + `
` + a.preList[c] + "\n```";
    }), t.subParser("makeMarkdown.codeSpan", function(u) {
      return "`" + u.innerHTML + "`";
    }), t.subParser("makeMarkdown.emphasis", function(u, a) {
      var d = "";
      if (u.hasChildNodes()) {
        d += "*";
        for (var c = u.childNodes, s = c.length, m = 0; m < s; ++m)
          d += t.subParser("makeMarkdown.node")(c[m], a);
        d += "*";
      }
      return d;
    }), t.subParser("makeMarkdown.header", function(u, a, d) {
      var c = new Array(d + 1).join("#"), s = "";
      if (u.hasChildNodes()) {
        s = c + " ";
        for (var m = u.childNodes, h = m.length, _ = 0; _ < h; ++_)
          s += t.subParser("makeMarkdown.node")(m[_], a);
      }
      return s;
    }), t.subParser("makeMarkdown.hr", function() {
      return "---";
    }), t.subParser("makeMarkdown.image", function(u) {
      var a = "";
      return u.hasAttribute("src") && (a += "![" + u.getAttribute("alt") + "](", a += "<" + u.getAttribute("src") + ">", u.hasAttribute("width") && u.hasAttribute("height") && (a += " =" + u.getAttribute("width") + "x" + u.getAttribute("height")), u.hasAttribute("title") && (a += ' "' + u.getAttribute("title") + '"'), a += ")"), a;
    }), t.subParser("makeMarkdown.links", function(u, a) {
      var d = "";
      if (u.hasChildNodes() && u.hasAttribute("href")) {
        var c = u.childNodes, s = c.length;
        d = "[";
        for (var m = 0; m < s; ++m)
          d += t.subParser("makeMarkdown.node")(c[m], a);
        d += "](", d += "<" + u.getAttribute("href") + ">", u.hasAttribute("title") && (d += ' "' + u.getAttribute("title") + '"'), d += ")";
      }
      return d;
    }), t.subParser("makeMarkdown.list", function(u, a, d) {
      var c = "";
      if (!u.hasChildNodes())
        return "";
      for (var s = u.childNodes, m = s.length, h = u.getAttribute("start") || 1, _ = 0; _ < m; ++_)
        if (!(typeof s[_].tagName > "u" || s[_].tagName.toLowerCase() !== "li")) {
          var T = "";
          d === "ol" ? T = h.toString() + ". " : T = "- ", c += T + t.subParser("makeMarkdown.listItem")(s[_], a), ++h;
        }
      return c += `
<!-- -->
`, c.trim();
    }), t.subParser("makeMarkdown.listItem", function(u, a) {
      for (var d = "", c = u.childNodes, s = c.length, m = 0; m < s; ++m)
        d += t.subParser("makeMarkdown.node")(c[m], a);
      return /\n$/.test(d) ? d = d.split(`
`).join(`
    `).replace(/^ {4}$/gm, "").replace(/\n\n+/g, `

`) : d += `
`, d;
    }), t.subParser("makeMarkdown.node", function(u, a, d) {
      d = d || !1;
      var c = "";
      if (u.nodeType === 3)
        return t.subParser("makeMarkdown.txt")(u, a);
      if (u.nodeType === 8)
        return "<!--" + u.data + `-->

`;
      if (u.nodeType !== 1)
        return "";
      var s = u.tagName.toLowerCase();
      switch (s) {
        case "h1":
          d || (c = t.subParser("makeMarkdown.header")(u, a, 1) + `

`);
          break;
        case "h2":
          d || (c = t.subParser("makeMarkdown.header")(u, a, 2) + `

`);
          break;
        case "h3":
          d || (c = t.subParser("makeMarkdown.header")(u, a, 3) + `

`);
          break;
        case "h4":
          d || (c = t.subParser("makeMarkdown.header")(u, a, 4) + `

`);
          break;
        case "h5":
          d || (c = t.subParser("makeMarkdown.header")(u, a, 5) + `

`);
          break;
        case "h6":
          d || (c = t.subParser("makeMarkdown.header")(u, a, 6) + `

`);
          break;
        case "p":
          d || (c = t.subParser("makeMarkdown.paragraph")(u, a) + `

`);
          break;
        case "blockquote":
          d || (c = t.subParser("makeMarkdown.blockquote")(u, a) + `

`);
          break;
        case "hr":
          d || (c = t.subParser("makeMarkdown.hr")(u, a) + `

`);
          break;
        case "ol":
          d || (c = t.subParser("makeMarkdown.list")(u, a, "ol") + `

`);
          break;
        case "ul":
          d || (c = t.subParser("makeMarkdown.list")(u, a, "ul") + `

`);
          break;
        case "precode":
          d || (c = t.subParser("makeMarkdown.codeBlock")(u, a) + `

`);
          break;
        case "pre":
          d || (c = t.subParser("makeMarkdown.pre")(u, a) + `

`);
          break;
        case "table":
          d || (c = t.subParser("makeMarkdown.table")(u, a) + `

`);
          break;
        case "code":
          c = t.subParser("makeMarkdown.codeSpan")(u, a);
          break;
        case "em":
        case "i":
          c = t.subParser("makeMarkdown.emphasis")(u, a);
          break;
        case "strong":
        case "b":
          c = t.subParser("makeMarkdown.strong")(u, a);
          break;
        case "del":
          c = t.subParser("makeMarkdown.strikethrough")(u, a);
          break;
        case "a":
          c = t.subParser("makeMarkdown.links")(u, a);
          break;
        case "img":
          c = t.subParser("makeMarkdown.image")(u, a);
          break;
        default:
          c = u.outerHTML + `

`;
      }
      return c;
    }), t.subParser("makeMarkdown.paragraph", function(u, a) {
      var d = "";
      if (u.hasChildNodes())
        for (var c = u.childNodes, s = c.length, m = 0; m < s; ++m)
          d += t.subParser("makeMarkdown.node")(c[m], a);
      return d = d.trim(), d;
    }), t.subParser("makeMarkdown.pre", function(u, a) {
      var d = u.getAttribute("prenum");
      return "<pre>" + a.preList[d] + "</pre>";
    }), t.subParser("makeMarkdown.strikethrough", function(u, a) {
      var d = "";
      if (u.hasChildNodes()) {
        d += "~~";
        for (var c = u.childNodes, s = c.length, m = 0; m < s; ++m)
          d += t.subParser("makeMarkdown.node")(c[m], a);
        d += "~~";
      }
      return d;
    }), t.subParser("makeMarkdown.strong", function(u, a) {
      var d = "";
      if (u.hasChildNodes()) {
        d += "**";
        for (var c = u.childNodes, s = c.length, m = 0; m < s; ++m)
          d += t.subParser("makeMarkdown.node")(c[m], a);
        d += "**";
      }
      return d;
    }), t.subParser("makeMarkdown.table", function(u, a) {
      var d = "", c = [[], []], s = u.querySelectorAll("thead>tr>th"), m = u.querySelectorAll("tbody>tr"), h, _;
      for (h = 0; h < s.length; ++h) {
        var T = t.subParser("makeMarkdown.tableCell")(s[h], a), E = "---";
        if (s[h].hasAttribute("style")) {
          var j = s[h].getAttribute("style").toLowerCase().replace(/\s/g, "");
          switch (j) {
            case "text-align:left;":
              E = ":---";
              break;
            case "text-align:right;":
              E = "---:";
              break;
            case "text-align:center;":
              E = ":---:";
              break;
          }
        }
        c[0][h] = T.trim(), c[1][h] = E;
      }
      for (h = 0; h < m.length; ++h) {
        var C = c.push([]) - 1, p = m[h].getElementsByTagName("td");
        for (_ = 0; _ < s.length; ++_) {
          var O = " ";
          typeof p[_] < "u" && (O = t.subParser("makeMarkdown.tableCell")(p[_], a)), c[C].push(O);
        }
      }
      var R = 3;
      for (h = 0; h < c.length; ++h)
        for (_ = 0; _ < c[h].length; ++_) {
          var F = c[h][_].length;
          F > R && (R = F);
        }
      for (h = 0; h < c.length; ++h) {
        for (_ = 0; _ < c[h].length; ++_)
          h === 1 ? c[h][_].slice(-1) === ":" ? c[h][_] = t.helper.padEnd(c[h][_].slice(-1), R - 1, "-") + ":" : c[h][_] = t.helper.padEnd(c[h][_], R, "-") : c[h][_] = t.helper.padEnd(c[h][_], R);
        d += "| " + c[h].join(" | ") + ` |
`;
      }
      return d.trim();
    }), t.subParser("makeMarkdown.tableCell", function(u, a) {
      var d = "";
      if (!u.hasChildNodes())
        return "";
      for (var c = u.childNodes, s = c.length, m = 0; m < s; ++m)
        d += t.subParser("makeMarkdown.node")(c[m], a, !0);
      return d.trim();
    }), t.subParser("makeMarkdown.txt", function(u) {
      var a = u.nodeValue;
      return a = a.replace(/ +/g, " "), a = a.replace(/¨NBSP;/g, " "), a = t.helper.unescapeHTMLEntities(a), a = a.replace(/([*_~|`])/g, "\\$1"), a = a.replace(/^(\s*)>/g, "\\$1>"), a = a.replace(/^#/gm, "\\#"), a = a.replace(/^(\s*)([-=]{3,})(\s*)$/, "$1\\$2$3"), a = a.replace(/^( {0,3}\d+)\./gm, "$1\\."), a = a.replace(/^( {0,3})([+-])/gm, "$1\\$2"), a = a.replace(/]([\s]*)\(/g, "\\]$1\\("), a = a.replace(/^ {0,3}\[([\S \t]*?)]:/gm, "\\[$1]:"), a;
    });
    var se = this;
    e.exports ? e.exports = t : se.showdown = t;
  }).call(je);
})(yn);
var Ma = yn.exports;
const za = /* @__PURE__ */ vn(Ma);
function sr(e) {
  throw new Error('Could not dynamically require "' + e + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var kn = { exports: {} };
/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/
(function(e, r) {
  (function(n) {
    e.exports = n();
  })(function() {
    return function n(t, o, f) {
      function g(P, U) {
        if (!o[P]) {
          if (!t[P]) {
            var L = typeof sr == "function" && sr;
            if (!U && L)
              return L(P, !0);
            if (w)
              return w(P, !0);
            var B = new Error("Cannot find module '" + P + "'");
            throw B.code = "MODULE_NOT_FOUND", B;
          }
          var V = o[P] = { exports: {} };
          t[P][0].call(V.exports, function(W) {
            var G = t[P][1][W];
            return g(G || W);
          }, V, V.exports, n, t, o, f);
        }
        return o[P].exports;
      }
      for (var w = typeof sr == "function" && sr, A = 0; A < f.length; A++)
        g(f[A]);
      return g;
    }({ 1: [function(n, t, o) {
      (function(f) {
        var g = f.MutationObserver || f.WebKitMutationObserver, w;
        if (g) {
          var A = 0, P = new g(W), U = f.document.createTextNode("");
          P.observe(U, {
            characterData: !0
          }), w = function() {
            U.data = A = ++A % 2;
          };
        } else if (!f.setImmediate && typeof f.MessageChannel < "u") {
          var L = new f.MessageChannel();
          L.port1.onmessage = W, w = function() {
            L.port2.postMessage(0);
          };
        } else
          "document" in f && "onreadystatechange" in f.document.createElement("script") ? w = function() {
            var Y = f.document.createElement("script");
            Y.onreadystatechange = function() {
              W(), Y.onreadystatechange = null, Y.parentNode.removeChild(Y), Y = null;
            }, f.document.documentElement.appendChild(Y);
          } : w = function() {
            setTimeout(W, 0);
          };
        var B, V = [];
        function W() {
          B = !0;
          for (var Y, x, J = V.length; J; ) {
            for (x = V, V = [], Y = -1; ++Y < J; )
              x[Y]();
            J = V.length;
          }
          B = !1;
        }
        t.exports = G;
        function G(Y) {
          V.push(Y) === 1 && !B && w();
        }
      }).call(this, typeof je < "u" ? je : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 2: [function(n, t, o) {
      var f = n(1);
      function g() {
      }
      var w = {}, A = ["REJECTED"], P = ["FULFILLED"], U = ["PENDING"];
      t.exports = L;
      function L(a) {
        if (typeof a != "function")
          throw new TypeError("resolver must be a function");
        this.state = U, this.queue = [], this.outcome = void 0, a !== g && G(this, a);
      }
      L.prototype.catch = function(a) {
        return this.then(null, a);
      }, L.prototype.then = function(a, d) {
        if (typeof a != "function" && this.state === P || typeof d != "function" && this.state === A)
          return this;
        var c = new this.constructor(g);
        if (this.state !== U) {
          var s = this.state === P ? a : d;
          V(c, s, this.outcome);
        } else
          this.queue.push(new B(c, a, d));
        return c;
      };
      function B(a, d, c) {
        this.promise = a, typeof d == "function" && (this.onFulfilled = d, this.callFulfilled = this.otherCallFulfilled), typeof c == "function" && (this.onRejected = c, this.callRejected = this.otherCallRejected);
      }
      B.prototype.callFulfilled = function(a) {
        w.resolve(this.promise, a);
      }, B.prototype.otherCallFulfilled = function(a) {
        V(this.promise, this.onFulfilled, a);
      }, B.prototype.callRejected = function(a) {
        w.reject(this.promise, a);
      }, B.prototype.otherCallRejected = function(a) {
        V(this.promise, this.onRejected, a);
      };
      function V(a, d, c) {
        f(function() {
          var s;
          try {
            s = d(c);
          } catch (m) {
            return w.reject(a, m);
          }
          s === a ? w.reject(a, new TypeError("Cannot resolve promise with itself")) : w.resolve(a, s);
        });
      }
      w.resolve = function(a, d) {
        var c = Y(W, d);
        if (c.status === "error")
          return w.reject(a, c.value);
        var s = c.value;
        if (s)
          G(a, s);
        else {
          a.state = P, a.outcome = d;
          for (var m = -1, h = a.queue.length; ++m < h; )
            a.queue[m].callFulfilled(d);
        }
        return a;
      }, w.reject = function(a, d) {
        a.state = A, a.outcome = d;
        for (var c = -1, s = a.queue.length; ++c < s; )
          a.queue[c].callRejected(d);
        return a;
      };
      function W(a) {
        var d = a && a.then;
        if (a && (typeof a == "object" || typeof a == "function") && typeof d == "function")
          return function() {
            d.apply(a, arguments);
          };
      }
      function G(a, d) {
        var c = !1;
        function s(T) {
          c || (c = !0, w.reject(a, T));
        }
        function m(T) {
          c || (c = !0, w.resolve(a, T));
        }
        function h() {
          d(m, s);
        }
        var _ = Y(h);
        _.status === "error" && s(_.value);
      }
      function Y(a, d) {
        var c = {};
        try {
          c.value = a(d), c.status = "success";
        } catch (s) {
          c.status = "error", c.value = s;
        }
        return c;
      }
      L.resolve = x;
      function x(a) {
        return a instanceof this ? a : w.resolve(new this(g), a);
      }
      L.reject = J;
      function J(a) {
        var d = new this(g);
        return w.reject(d, a);
      }
      L.all = se;
      function se(a) {
        var d = this;
        if (Object.prototype.toString.call(a) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var c = a.length, s = !1;
        if (!c)
          return this.resolve([]);
        for (var m = new Array(c), h = 0, _ = -1, T = new this(g); ++_ < c; )
          E(a[_], _);
        return T;
        function E(j, C) {
          d.resolve(j).then(p, function(O) {
            s || (s = !0, w.reject(T, O));
          });
          function p(O) {
            m[C] = O, ++h === c && !s && (s = !0, w.resolve(T, m));
          }
        }
      }
      L.race = u;
      function u(a) {
        var d = this;
        if (Object.prototype.toString.call(a) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var c = a.length, s = !1;
        if (!c)
          return this.resolve([]);
        for (var m = -1, h = new this(g); ++m < c; )
          _(a[m]);
        return h;
        function _(T) {
          d.resolve(T).then(function(E) {
            s || (s = !0, w.resolve(h, E));
          }, function(E) {
            s || (s = !0, w.reject(h, E));
          });
        }
      }
    }, { 1: 1 }], 3: [function(n, t, o) {
      (function(f) {
        typeof f.Promise != "function" && (f.Promise = n(2));
      }).call(this, typeof je < "u" ? je : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, { 2: 2 }], 4: [function(n, t, o) {
      var f = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(i) {
        return typeof i;
      } : function(i) {
        return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
      };
      function g(i, b) {
        if (!(i instanceof b))
          throw new TypeError("Cannot call a class as a function");
      }
      function w() {
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
      var A = w();
      function P() {
        try {
          if (!A || !A.open)
            return !1;
          var i = typeof openDatabase < "u" && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform), b = typeof fetch == "function" && fetch.toString().indexOf("[native code") !== -1;
          return (!i || b) && typeof indexedDB < "u" && // some outdated implementations of IDB that appear on Samsung
          // and HTC Android devices <4.4 are missing IDBKeyRange
          // See: https://github.com/mozilla/localForage/issues/128
          // See: https://github.com/mozilla/localForage/issues/272
          typeof IDBKeyRange < "u";
        } catch {
          return !1;
        }
      }
      function U(i, b) {
        i = i || [], b = b || {};
        try {
          return new Blob(i, b);
        } catch (v) {
          if (v.name !== "TypeError")
            throw v;
          for (var l = typeof BlobBuilder < "u" ? BlobBuilder : typeof MSBlobBuilder < "u" ? MSBlobBuilder : typeof MozBlobBuilder < "u" ? MozBlobBuilder : WebKitBlobBuilder, y = new l(), S = 0; S < i.length; S += 1)
            y.append(i[S]);
          return y.getBlob(b.type);
        }
      }
      typeof Promise > "u" && n(3);
      var L = Promise;
      function B(i, b) {
        b && i.then(function(l) {
          b(null, l);
        }, function(l) {
          b(l);
        });
      }
      function V(i, b, l) {
        typeof b == "function" && i.then(b), typeof l == "function" && i.catch(l);
      }
      function W(i) {
        return typeof i != "string" && (console.warn(i + " used as a key, but it is not a string."), i = String(i)), i;
      }
      function G() {
        if (arguments.length && typeof arguments[arguments.length - 1] == "function")
          return arguments[arguments.length - 1];
      }
      var Y = "local-forage-detect-blob-support", x = void 0, J = {}, se = Object.prototype.toString, u = "readonly", a = "readwrite";
      function d(i) {
        for (var b = i.length, l = new ArrayBuffer(b), y = new Uint8Array(l), S = 0; S < b; S++)
          y[S] = i.charCodeAt(S);
        return l;
      }
      function c(i) {
        return new L(function(b) {
          var l = i.transaction(Y, a), y = U([""]);
          l.objectStore(Y).put(y, "key"), l.onabort = function(S) {
            S.preventDefault(), S.stopPropagation(), b(!1);
          }, l.oncomplete = function() {
            var S = navigator.userAgent.match(/Chrome\/(\d+)/), v = navigator.userAgent.match(/Edge\//);
            b(v || !S || parseInt(S[1], 10) >= 43);
          };
        }).catch(function() {
          return !1;
        });
      }
      function s(i) {
        return typeof x == "boolean" ? L.resolve(x) : c(i).then(function(b) {
          return x = b, x;
        });
      }
      function m(i) {
        var b = J[i.name], l = {};
        l.promise = new L(function(y, S) {
          l.resolve = y, l.reject = S;
        }), b.deferredOperations.push(l), b.dbReady ? b.dbReady = b.dbReady.then(function() {
          return l.promise;
        }) : b.dbReady = l.promise;
      }
      function h(i) {
        var b = J[i.name], l = b.deferredOperations.pop();
        if (l)
          return l.resolve(), l.promise;
      }
      function _(i, b) {
        var l = J[i.name], y = l.deferredOperations.pop();
        if (y)
          return y.reject(b), y.promise;
      }
      function T(i, b) {
        return new L(function(l, y) {
          if (J[i.name] = J[i.name] || de(), i.db)
            if (b)
              m(i), i.db.close();
            else
              return l(i.db);
          var S = [i.name];
          b && S.push(i.version);
          var v = A.open.apply(A, S);
          b && (v.onupgradeneeded = function($) {
            var I = v.result;
            try {
              I.createObjectStore(i.storeName), $.oldVersion <= 1 && I.createObjectStore(Y);
            } catch (M) {
              if (M.name === "ConstraintError")
                console.warn('The database "' + i.name + '" has been upgraded from version ' + $.oldVersion + " to version " + $.newVersion + ', but the storage "' + i.storeName + '" already exists.');
              else
                throw M;
            }
          }), v.onerror = function($) {
            $.preventDefault(), y(v.error);
          }, v.onsuccess = function() {
            var $ = v.result;
            $.onversionchange = function(I) {
              I.target.close();
            }, l($), h(i);
          };
        });
      }
      function E(i) {
        return T(i, !1);
      }
      function j(i) {
        return T(i, !0);
      }
      function C(i, b) {
        if (!i.db)
          return !0;
        var l = !i.db.objectStoreNames.contains(i.storeName), y = i.version < i.db.version, S = i.version > i.db.version;
        if (y && (i.version !== b && console.warn('The database "' + i.name + `" can't be downgraded from version ` + i.db.version + " to version " + i.version + "."), i.version = i.db.version), S || l) {
          if (l) {
            var v = i.db.version + 1;
            v > i.version && (i.version = v);
          }
          return !0;
        }
        return !1;
      }
      function p(i) {
        return new L(function(b, l) {
          var y = new FileReader();
          y.onerror = l, y.onloadend = function(S) {
            var v = btoa(S.target.result || "");
            b({
              __local_forage_encoded_blob: !0,
              data: v,
              type: i.type
            });
          }, y.readAsBinaryString(i);
        });
      }
      function O(i) {
        var b = d(atob(i.data));
        return U([b], { type: i.type });
      }
      function R(i) {
        return i && i.__local_forage_encoded_blob;
      }
      function F(i) {
        var b = this, l = b._initReady().then(function() {
          var y = J[b._dbInfo.name];
          if (y && y.dbReady)
            return y.dbReady;
        });
        return V(l, i, i), l;
      }
      function H(i) {
        m(i);
        for (var b = J[i.name], l = b.forages, y = 0; y < l.length; y++) {
          var S = l[y];
          S._dbInfo.db && (S._dbInfo.db.close(), S._dbInfo.db = null);
        }
        return i.db = null, E(i).then(function(v) {
          return i.db = v, C(i) ? j(i) : v;
        }).then(function(v) {
          i.db = b.db = v;
          for (var $ = 0; $ < l.length; $++)
            l[$]._dbInfo.db = v;
        }).catch(function(v) {
          throw _(i, v), v;
        });
      }
      function D(i, b, l, y) {
        y === void 0 && (y = 1);
        try {
          var S = i.db.transaction(i.storeName, b);
          l(null, S);
        } catch (v) {
          if (y > 0 && (!i.db || v.name === "InvalidStateError" || v.name === "NotFoundError"))
            return L.resolve().then(function() {
              if (!i.db || v.name === "NotFoundError" && !i.db.objectStoreNames.contains(i.storeName) && i.version <= i.db.version)
                return i.db && (i.version = i.db.version + 1), j(i);
            }).then(function() {
              return H(i).then(function() {
                D(i, b, l, y - 1);
              });
            }).catch(l);
          l(v);
        }
      }
      function de() {
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
      function ce(i) {
        var b = this, l = {
          db: null
        };
        if (i)
          for (var y in i)
            l[y] = i[y];
        var S = J[l.name];
        S || (S = de(), J[l.name] = S), S.forages.push(b), b._initReady || (b._initReady = b.ready, b.ready = F);
        var v = [];
        function $() {
          return L.resolve();
        }
        for (var I = 0; I < S.forages.length; I++) {
          var M = S.forages[I];
          M !== b && v.push(M._initReady().catch($));
        }
        var z = S.forages.slice(0);
        return L.all(v).then(function() {
          return l.db = S.db, E(l);
        }).then(function(N) {
          return l.db = N, C(l, b._defaultConfig.version) ? j(l) : N;
        }).then(function(N) {
          l.db = S.db = N, b._dbInfo = l;
          for (var q = 0; q < z.length; q++) {
            var X = z[q];
            X !== b && (X._dbInfo.db = l.db, X._dbInfo.version = l.version);
          }
        });
      }
      function be(i, b) {
        var l = this;
        i = W(i);
        var y = new L(function(S, v) {
          l.ready().then(function() {
            D(l._dbInfo, u, function($, I) {
              if ($)
                return v($);
              try {
                var M = I.objectStore(l._dbInfo.storeName), z = M.get(i);
                z.onsuccess = function() {
                  var N = z.result;
                  N === void 0 && (N = null), R(N) && (N = O(N)), S(N);
                }, z.onerror = function() {
                  v(z.error);
                };
              } catch (N) {
                v(N);
              }
            });
          }).catch(v);
        });
        return B(y, b), y;
      }
      function oe(i, b) {
        var l = this, y = new L(function(S, v) {
          l.ready().then(function() {
            D(l._dbInfo, u, function($, I) {
              if ($)
                return v($);
              try {
                var M = I.objectStore(l._dbInfo.storeName), z = M.openCursor(), N = 1;
                z.onsuccess = function() {
                  var q = z.result;
                  if (q) {
                    var X = q.value;
                    R(X) && (X = O(X));
                    var ee = i(X, q.key, N++);
                    ee !== void 0 ? S(ee) : q.continue();
                  } else
                    S();
                }, z.onerror = function() {
                  v(z.error);
                };
              } catch (q) {
                v(q);
              }
            });
          }).catch(v);
        });
        return B(y, b), y;
      }
      function ie(i, b, l) {
        var y = this;
        i = W(i);
        var S = new L(function(v, $) {
          var I;
          y.ready().then(function() {
            return I = y._dbInfo, se.call(b) === "[object Blob]" ? s(I.db).then(function(M) {
              return M ? b : p(b);
            }) : b;
          }).then(function(M) {
            D(y._dbInfo, a, function(z, N) {
              if (z)
                return $(z);
              try {
                var q = N.objectStore(y._dbInfo.storeName);
                M === null && (M = void 0);
                var X = q.put(M, i);
                N.oncomplete = function() {
                  M === void 0 && (M = null), v(M);
                }, N.onabort = N.onerror = function() {
                  var ee = X.error ? X.error : X.transaction.error;
                  $(ee);
                };
              } catch (ee) {
                $(ee);
              }
            });
          }).catch($);
        });
        return B(S, l), S;
      }
      function fe(i, b) {
        var l = this;
        i = W(i);
        var y = new L(function(S, v) {
          l.ready().then(function() {
            D(l._dbInfo, a, function($, I) {
              if ($)
                return v($);
              try {
                var M = I.objectStore(l._dbInfo.storeName), z = M.delete(i);
                I.oncomplete = function() {
                  S();
                }, I.onerror = function() {
                  v(z.error);
                }, I.onabort = function() {
                  var N = z.error ? z.error : z.transaction.error;
                  v(N);
                };
              } catch (N) {
                v(N);
              }
            });
          }).catch(v);
        });
        return B(y, b), y;
      }
      function he(i) {
        var b = this, l = new L(function(y, S) {
          b.ready().then(function() {
            D(b._dbInfo, a, function(v, $) {
              if (v)
                return S(v);
              try {
                var I = $.objectStore(b._dbInfo.storeName), M = I.clear();
                $.oncomplete = function() {
                  y();
                }, $.onabort = $.onerror = function() {
                  var z = M.error ? M.error : M.transaction.error;
                  S(z);
                };
              } catch (z) {
                S(z);
              }
            });
          }).catch(S);
        });
        return B(l, i), l;
      }
      function We(i) {
        var b = this, l = new L(function(y, S) {
          b.ready().then(function() {
            D(b._dbInfo, u, function(v, $) {
              if (v)
                return S(v);
              try {
                var I = $.objectStore(b._dbInfo.storeName), M = I.count();
                M.onsuccess = function() {
                  y(M.result);
                }, M.onerror = function() {
                  S(M.error);
                };
              } catch (z) {
                S(z);
              }
            });
          }).catch(S);
        });
        return B(l, i), l;
      }
      function Ge(i, b) {
        var l = this, y = new L(function(S, v) {
          if (i < 0) {
            S(null);
            return;
          }
          l.ready().then(function() {
            D(l._dbInfo, u, function($, I) {
              if ($)
                return v($);
              try {
                var M = I.objectStore(l._dbInfo.storeName), z = !1, N = M.openKeyCursor();
                N.onsuccess = function() {
                  var q = N.result;
                  if (!q) {
                    S(null);
                    return;
                  }
                  i === 0 || z ? S(q.key) : (z = !0, q.advance(i));
                }, N.onerror = function() {
                  v(N.error);
                };
              } catch (q) {
                v(q);
              }
            });
          }).catch(v);
        });
        return B(y, b), y;
      }
      function ar(i) {
        var b = this, l = new L(function(y, S) {
          b.ready().then(function() {
            D(b._dbInfo, u, function(v, $) {
              if (v)
                return S(v);
              try {
                var I = $.objectStore(b._dbInfo.storeName), M = I.openKeyCursor(), z = [];
                M.onsuccess = function() {
                  var N = M.result;
                  if (!N) {
                    y(z);
                    return;
                  }
                  z.push(N.key), N.continue();
                }, M.onerror = function() {
                  S(M.error);
                };
              } catch (N) {
                S(N);
              }
            });
          }).catch(S);
        });
        return B(l, i), l;
      }
      function Ke(i, b) {
        b = G.apply(this, arguments);
        var l = this.config();
        i = typeof i != "function" && i || {}, i.name || (i.name = i.name || l.name, i.storeName = i.storeName || l.storeName);
        var y = this, S;
        if (!i.name)
          S = L.reject("Invalid arguments");
        else {
          var v = i.name === l.name && y._dbInfo.db, $ = v ? L.resolve(y._dbInfo.db) : E(i).then(function(I) {
            var M = J[i.name], z = M.forages;
            M.db = I;
            for (var N = 0; N < z.length; N++)
              z[N]._dbInfo.db = I;
            return I;
          });
          i.storeName ? S = $.then(function(I) {
            if (I.objectStoreNames.contains(i.storeName)) {
              var M = I.version + 1;
              m(i);
              var z = J[i.name], N = z.forages;
              I.close();
              for (var q = 0; q < N.length; q++) {
                var X = N[q];
                X._dbInfo.db = null, X._dbInfo.version = M;
              }
              var ee = new L(function(re, ae) {
                var ue = A.open(i.name, M);
                ue.onerror = function(we) {
                  var Xe = ue.result;
                  Xe.close(), ae(we);
                }, ue.onupgradeneeded = function() {
                  var we = ue.result;
                  we.deleteObjectStore(i.storeName);
                }, ue.onsuccess = function() {
                  var we = ue.result;
                  we.close(), re(we);
                };
              });
              return ee.then(function(re) {
                z.db = re;
                for (var ae = 0; ae < N.length; ae++) {
                  var ue = N[ae];
                  ue._dbInfo.db = re, h(ue._dbInfo);
                }
              }).catch(function(re) {
                throw (_(i, re) || L.resolve()).catch(function() {
                }), re;
              });
            }
          }) : S = $.then(function(I) {
            m(i);
            var M = J[i.name], z = M.forages;
            I.close();
            for (var N = 0; N < z.length; N++) {
              var q = z[N];
              q._dbInfo.db = null;
            }
            var X = new L(function(ee, re) {
              var ae = A.deleteDatabase(i.name);
              ae.onerror = function() {
                var ue = ae.result;
                ue && ue.close(), re(ae.error);
              }, ae.onblocked = function() {
                console.warn('dropInstance blocked for database "' + i.name + '" until all open connections are closed');
              }, ae.onsuccess = function() {
                var ue = ae.result;
                ue && ue.close(), ee(ue);
              };
            });
            return X.then(function(ee) {
              M.db = ee;
              for (var re = 0; re < z.length; re++) {
                var ae = z[re];
                h(ae._dbInfo);
              }
            }).catch(function(ee) {
              throw (_(i, ee) || L.resolve()).catch(function() {
              }), ee;
            });
          });
        }
        return B(S, b), S;
      }
      var dr = {
        _driver: "asyncStorage",
        _initStorage: ce,
        _support: P(),
        iterate: oe,
        getItem: be,
        setItem: ie,
        removeItem: fe,
        clear: he,
        length: We,
        key: Ge,
        keys: ar,
        dropInstance: Ke
      };
      function yu() {
        return typeof openDatabase == "function";
      }
      var Ae = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ku = "~~local_forage_type~", Qr = /^~~local_forage_type~([^~]+)~/, or = "__lfsc__:", wr = or.length, _r = "arbf", vr = "blob", xr = "si08", et = "ui08", rt = "uic8", tt = "si16", nt = "si32", ut = "ur16", at = "ui32", dt = "fl32", ot = "fl64", it = wr + _r.length, st = Object.prototype.toString;
      function ct(i) {
        var b = i.length * 0.75, l = i.length, y, S = 0, v, $, I, M;
        i[i.length - 1] === "=" && (b--, i[i.length - 2] === "=" && b--);
        var z = new ArrayBuffer(b), N = new Uint8Array(z);
        for (y = 0; y < l; y += 4)
          v = Ae.indexOf(i[y]), $ = Ae.indexOf(i[y + 1]), I = Ae.indexOf(i[y + 2]), M = Ae.indexOf(i[y + 3]), N[S++] = v << 2 | $ >> 4, N[S++] = ($ & 15) << 4 | I >> 2, N[S++] = (I & 3) << 6 | M & 63;
        return z;
      }
      function yr(i) {
        var b = new Uint8Array(i), l = "", y;
        for (y = 0; y < b.length; y += 3)
          l += Ae[b[y] >> 2], l += Ae[(b[y] & 3) << 4 | b[y + 1] >> 4], l += Ae[(b[y + 1] & 15) << 2 | b[y + 2] >> 6], l += Ae[b[y + 2] & 63];
        return b.length % 3 === 2 ? l = l.substring(0, l.length - 1) + "=" : b.length % 3 === 1 && (l = l.substring(0, l.length - 2) + "=="), l;
      }
      function Su(i, b) {
        var l = "";
        if (i && (l = st.call(i)), i && (l === "[object ArrayBuffer]" || i.buffer && st.call(i.buffer) === "[object ArrayBuffer]")) {
          var y, S = or;
          i instanceof ArrayBuffer ? (y = i, S += _r) : (y = i.buffer, l === "[object Int8Array]" ? S += xr : l === "[object Uint8Array]" ? S += et : l === "[object Uint8ClampedArray]" ? S += rt : l === "[object Int16Array]" ? S += tt : l === "[object Uint16Array]" ? S += ut : l === "[object Int32Array]" ? S += nt : l === "[object Uint32Array]" ? S += at : l === "[object Float32Array]" ? S += dt : l === "[object Float64Array]" ? S += ot : b(new Error("Failed to get type for BinaryArray"))), b(S + yr(y));
        } else if (l === "[object Blob]") {
          var v = new FileReader();
          v.onload = function() {
            var $ = ku + i.type + "~" + yr(this.result);
            b(or + vr + $);
          }, v.readAsArrayBuffer(i);
        } else
          try {
            b(JSON.stringify(i));
          } catch ($) {
            console.error("Couldn't convert value into a JSON string: ", i), b(null, $);
          }
      }
      function Pu(i) {
        if (i.substring(0, wr) !== or)
          return JSON.parse(i);
        var b = i.substring(it), l = i.substring(wr, it), y;
        if (l === vr && Qr.test(b)) {
          var S = b.match(Qr);
          y = S[1], b = b.substring(S[0].length);
        }
        var v = ct(b);
        switch (l) {
          case _r:
            return v;
          case vr:
            return U([v], { type: y });
          case xr:
            return new Int8Array(v);
          case et:
            return new Uint8Array(v);
          case rt:
            return new Uint8ClampedArray(v);
          case tt:
            return new Int16Array(v);
          case ut:
            return new Uint16Array(v);
          case nt:
            return new Int32Array(v);
          case at:
            return new Uint32Array(v);
          case dt:
            return new Float32Array(v);
          case ot:
            return new Float64Array(v);
          default:
            throw new Error("Unkown type: " + l);
        }
      }
      var kr = {
        serialize: Su,
        deserialize: Pu,
        stringToBuffer: ct,
        bufferToString: yr
      };
      function ft(i, b, l, y) {
        i.executeSql("CREATE TABLE IF NOT EXISTS " + b.storeName + " (id INTEGER PRIMARY KEY, key unique, value)", [], l, y);
      }
      function Au(i) {
        var b = this, l = {
          db: null
        };
        if (i)
          for (var y in i)
            l[y] = typeof i[y] != "string" ? i[y].toString() : i[y];
        var S = new L(function(v, $) {
          try {
            l.db = openDatabase(l.name, String(l.version), l.description, l.size);
          } catch (I) {
            return $(I);
          }
          l.db.transaction(function(I) {
            ft(I, l, function() {
              b._dbInfo = l, v();
            }, function(M, z) {
              $(z);
            });
          }, $);
        });
        return l.serializer = kr, S;
      }
      function Ee(i, b, l, y, S, v) {
        i.executeSql(l, y, S, function($, I) {
          I.code === I.SYNTAX_ERR ? $.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [b.storeName], function(M, z) {
            z.rows.length ? v(M, I) : ft(M, b, function() {
              M.executeSql(l, y, S, v);
            }, v);
          }, v) : v($, I);
        }, v);
      }
      function Eu(i, b) {
        var l = this;
        i = W(i);
        var y = new L(function(S, v) {
          l.ready().then(function() {
            var $ = l._dbInfo;
            $.db.transaction(function(I) {
              Ee(I, $, "SELECT * FROM " + $.storeName + " WHERE key = ? LIMIT 1", [i], function(M, z) {
                var N = z.rows.length ? z.rows.item(0).value : null;
                N && (N = $.serializer.deserialize(N)), S(N);
              }, function(M, z) {
                v(z);
              });
            });
          }).catch(v);
        });
        return B(y, b), y;
      }
      function Ou(i, b) {
        var l = this, y = new L(function(S, v) {
          l.ready().then(function() {
            var $ = l._dbInfo;
            $.db.transaction(function(I) {
              Ee(I, $, "SELECT * FROM " + $.storeName, [], function(M, z) {
                for (var N = z.rows, q = N.length, X = 0; X < q; X++) {
                  var ee = N.item(X), re = ee.value;
                  if (re && (re = $.serializer.deserialize(re)), re = i(re, ee.key, X + 1), re !== void 0) {
                    S(re);
                    return;
                  }
                }
                S();
              }, function(M, z) {
                v(z);
              });
            });
          }).catch(v);
        });
        return B(y, b), y;
      }
      function lt(i, b, l, y) {
        var S = this;
        i = W(i);
        var v = new L(function($, I) {
          S.ready().then(function() {
            b === void 0 && (b = null);
            var M = b, z = S._dbInfo;
            z.serializer.serialize(b, function(N, q) {
              q ? I(q) : z.db.transaction(function(X) {
                Ee(X, z, "INSERT OR REPLACE INTO " + z.storeName + " (key, value) VALUES (?, ?)", [i, N], function() {
                  $(M);
                }, function(ee, re) {
                  I(re);
                });
              }, function(X) {
                if (X.code === X.QUOTA_ERR) {
                  if (y > 0) {
                    $(lt.apply(S, [i, M, l, y - 1]));
                    return;
                  }
                  I(X);
                }
              });
            });
          }).catch(I);
        });
        return B(v, l), v;
      }
      function $u(i, b, l) {
        return lt.apply(this, [i, b, l, 1]);
      }
      function Lu(i, b) {
        var l = this;
        i = W(i);
        var y = new L(function(S, v) {
          l.ready().then(function() {
            var $ = l._dbInfo;
            $.db.transaction(function(I) {
              Ee(I, $, "DELETE FROM " + $.storeName + " WHERE key = ?", [i], function() {
                S();
              }, function(M, z) {
                v(z);
              });
            });
          }).catch(v);
        });
        return B(y, b), y;
      }
      function Tu(i) {
        var b = this, l = new L(function(y, S) {
          b.ready().then(function() {
            var v = b._dbInfo;
            v.db.transaction(function($) {
              Ee($, v, "DELETE FROM " + v.storeName, [], function() {
                y();
              }, function(I, M) {
                S(M);
              });
            });
          }).catch(S);
        });
        return B(l, i), l;
      }
      function ju(i) {
        var b = this, l = new L(function(y, S) {
          b.ready().then(function() {
            var v = b._dbInfo;
            v.db.transaction(function($) {
              Ee($, v, "SELECT COUNT(key) as c FROM " + v.storeName, [], function(I, M) {
                var z = M.rows.item(0).c;
                y(z);
              }, function(I, M) {
                S(M);
              });
            });
          }).catch(S);
        });
        return B(l, i), l;
      }
      function Cu(i, b) {
        var l = this, y = new L(function(S, v) {
          l.ready().then(function() {
            var $ = l._dbInfo;
            $.db.transaction(function(I) {
              Ee(I, $, "SELECT key FROM " + $.storeName + " WHERE id = ? LIMIT 1", [i + 1], function(M, z) {
                var N = z.rows.length ? z.rows.item(0).key : null;
                S(N);
              }, function(M, z) {
                v(z);
              });
            });
          }).catch(v);
        });
        return B(y, b), y;
      }
      function Iu(i) {
        var b = this, l = new L(function(y, S) {
          b.ready().then(function() {
            var v = b._dbInfo;
            v.db.transaction(function($) {
              Ee($, v, "SELECT key FROM " + v.storeName, [], function(I, M) {
                for (var z = [], N = 0; N < M.rows.length; N++)
                  z.push(M.rows.item(N).key);
                y(z);
              }, function(I, M) {
                S(M);
              });
            });
          }).catch(S);
        });
        return B(l, i), l;
      }
      function Mu(i) {
        return new L(function(b, l) {
          i.transaction(function(y) {
            y.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function(S, v) {
              for (var $ = [], I = 0; I < v.rows.length; I++)
                $.push(v.rows.item(I).name);
              b({
                db: i,
                storeNames: $
              });
            }, function(S, v) {
              l(v);
            });
          }, function(y) {
            l(y);
          });
        });
      }
      function zu(i, b) {
        b = G.apply(this, arguments);
        var l = this.config();
        i = typeof i != "function" && i || {}, i.name || (i.name = i.name || l.name, i.storeName = i.storeName || l.storeName);
        var y = this, S;
        return i.name ? S = new L(function(v) {
          var $;
          i.name === l.name ? $ = y._dbInfo.db : $ = openDatabase(i.name, "", "", 0), i.storeName ? v({
            db: $,
            storeNames: [i.storeName]
          }) : v(Mu($));
        }).then(function(v) {
          return new L(function($, I) {
            v.db.transaction(function(M) {
              function z(ee) {
                return new L(function(re, ae) {
                  M.executeSql("DROP TABLE IF EXISTS " + ee, [], function() {
                    re();
                  }, function(ue, we) {
                    ae(we);
                  });
                });
              }
              for (var N = [], q = 0, X = v.storeNames.length; q < X; q++)
                N.push(z(v.storeNames[q]));
              L.all(N).then(function() {
                $();
              }).catch(function(ee) {
                I(ee);
              });
            }, function(M) {
              I(M);
            });
          });
        }) : S = L.reject("Invalid arguments"), B(S, b), S;
      }
      var Ru = {
        _driver: "webSQLStorage",
        _initStorage: Au,
        _support: yu(),
        iterate: Ou,
        getItem: Eu,
        setItem: $u,
        removeItem: Lu,
        clear: Tu,
        length: ju,
        key: Cu,
        keys: Iu,
        dropInstance: zu
      };
      function Nu() {
        try {
          return typeof localStorage < "u" && "setItem" in localStorage && // in IE8 typeof localStorage.setItem === 'object'
          !!localStorage.setItem;
        } catch {
          return !1;
        }
      }
      function ht(i, b) {
        var l = i.name + "/";
        return i.storeName !== b.storeName && (l += i.storeName + "/"), l;
      }
      function Bu() {
        var i = "_localforage_support_test";
        try {
          return localStorage.setItem(i, !0), localStorage.removeItem(i), !1;
        } catch {
          return !0;
        }
      }
      function Du() {
        return !Bu() || localStorage.length > 0;
      }
      function Fu(i) {
        var b = this, l = {};
        if (i)
          for (var y in i)
            l[y] = i[y];
        return l.keyPrefix = ht(i, b._defaultConfig), Du() ? (b._dbInfo = l, l.serializer = kr, L.resolve()) : L.reject();
      }
      function Hu(i) {
        var b = this, l = b.ready().then(function() {
          for (var y = b._dbInfo.keyPrefix, S = localStorage.length - 1; S >= 0; S--) {
            var v = localStorage.key(S);
            v.indexOf(y) === 0 && localStorage.removeItem(v);
          }
        });
        return B(l, i), l;
      }
      function Uu(i, b) {
        var l = this;
        i = W(i);
        var y = l.ready().then(function() {
          var S = l._dbInfo, v = localStorage.getItem(S.keyPrefix + i);
          return v && (v = S.serializer.deserialize(v)), v;
        });
        return B(y, b), y;
      }
      function qu(i, b) {
        var l = this, y = l.ready().then(function() {
          for (var S = l._dbInfo, v = S.keyPrefix, $ = v.length, I = localStorage.length, M = 1, z = 0; z < I; z++) {
            var N = localStorage.key(z);
            if (N.indexOf(v) === 0) {
              var q = localStorage.getItem(N);
              if (q && (q = S.serializer.deserialize(q)), q = i(q, N.substring($), M++), q !== void 0)
                return q;
            }
          }
        });
        return B(y, b), y;
      }
      function Vu(i, b) {
        var l = this, y = l.ready().then(function() {
          var S = l._dbInfo, v;
          try {
            v = localStorage.key(i);
          } catch {
            v = null;
          }
          return v && (v = v.substring(S.keyPrefix.length)), v;
        });
        return B(y, b), y;
      }
      function Wu(i) {
        var b = this, l = b.ready().then(function() {
          for (var y = b._dbInfo, S = localStorage.length, v = [], $ = 0; $ < S; $++) {
            var I = localStorage.key($);
            I.indexOf(y.keyPrefix) === 0 && v.push(I.substring(y.keyPrefix.length));
          }
          return v;
        });
        return B(l, i), l;
      }
      function Gu(i) {
        var b = this, l = b.keys().then(function(y) {
          return y.length;
        });
        return B(l, i), l;
      }
      function Ku(i, b) {
        var l = this;
        i = W(i);
        var y = l.ready().then(function() {
          var S = l._dbInfo;
          localStorage.removeItem(S.keyPrefix + i);
        });
        return B(y, b), y;
      }
      function Yu(i, b, l) {
        var y = this;
        i = W(i);
        var S = y.ready().then(function() {
          b === void 0 && (b = null);
          var v = b;
          return new L(function($, I) {
            var M = y._dbInfo;
            M.serializer.serialize(b, function(z, N) {
              if (N)
                I(N);
              else
                try {
                  localStorage.setItem(M.keyPrefix + i, z), $(v);
                } catch (q) {
                  (q.name === "QuotaExceededError" || q.name === "NS_ERROR_DOM_QUOTA_REACHED") && I(q), I(q);
                }
            });
          });
        });
        return B(S, l), S;
      }
      function Xu(i, b) {
        if (b = G.apply(this, arguments), i = typeof i != "function" && i || {}, !i.name) {
          var l = this.config();
          i.name = i.name || l.name, i.storeName = i.storeName || l.storeName;
        }
        var y = this, S;
        return i.name ? S = new L(function(v) {
          i.storeName ? v(ht(i, y._defaultConfig)) : v(i.name + "/");
        }).then(function(v) {
          for (var $ = localStorage.length - 1; $ >= 0; $--) {
            var I = localStorage.key($);
            I.indexOf(v) === 0 && localStorage.removeItem(I);
          }
        }) : S = L.reject("Invalid arguments"), B(S, b), S;
      }
      var Zu = {
        _driver: "localStorageWrapper",
        _initStorage: Fu,
        _support: Nu(),
        iterate: qu,
        getItem: Uu,
        setItem: Yu,
        removeItem: Ku,
        clear: Hu,
        length: Gu,
        key: Vu,
        keys: Wu,
        dropInstance: Xu
      }, Ju = function(b, l) {
        return b === l || typeof b == "number" && typeof l == "number" && isNaN(b) && isNaN(l);
      }, Qu = function(b, l) {
        for (var y = b.length, S = 0; S < y; ) {
          if (Ju(b[S], l))
            return !0;
          S++;
        }
        return !1;
      }, pt = Array.isArray || function(i) {
        return Object.prototype.toString.call(i) === "[object Array]";
      }, Ye = {}, mt = {}, ze = {
        INDEXEDDB: dr,
        WEBSQL: Ru,
        LOCALSTORAGE: Zu
      }, xu = [ze.INDEXEDDB._driver, ze.WEBSQL._driver, ze.LOCALSTORAGE._driver], ir = ["dropInstance"], Sr = ["clear", "getItem", "iterate", "key", "keys", "length", "removeItem", "setItem"].concat(ir), ea = {
        description: "",
        driver: xu.slice(),
        name: "localforage",
        // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
        // we can use without a prompt.
        size: 4980736,
        storeName: "keyvaluepairs",
        version: 1
      };
      function ra(i, b) {
        i[b] = function() {
          var l = arguments;
          return i.ready().then(function() {
            return i[b].apply(i, l);
          });
        };
      }
      function Pr() {
        for (var i = 1; i < arguments.length; i++) {
          var b = arguments[i];
          if (b)
            for (var l in b)
              b.hasOwnProperty(l) && (pt(b[l]) ? arguments[0][l] = b[l].slice() : arguments[0][l] = b[l]);
        }
        return arguments[0];
      }
      var ta = function() {
        function i(b) {
          g(this, i);
          for (var l in ze)
            if (ze.hasOwnProperty(l)) {
              var y = ze[l], S = y._driver;
              this[l] = S, Ye[S] || this.defineDriver(y);
            }
          this._defaultConfig = Pr({}, ea), this._config = Pr({}, this._defaultConfig, b), this._driverSet = null, this._initDriver = null, this._ready = !1, this._dbInfo = null, this._wrapLibraryMethodsWithReady(), this.setDriver(this._config.driver).catch(function() {
          });
        }
        return i.prototype.config = function(l) {
          if ((typeof l > "u" ? "undefined" : f(l)) === "object") {
            if (this._ready)
              return new Error("Can't call config() after localforage has been used.");
            for (var y in l) {
              if (y === "storeName" && (l[y] = l[y].replace(/\W/g, "_")), y === "version" && typeof l[y] != "number")
                return new Error("Database version must be a number.");
              this._config[y] = l[y];
            }
            return "driver" in l && l.driver ? this.setDriver(this._config.driver) : !0;
          } else
            return typeof l == "string" ? this._config[l] : this._config;
        }, i.prototype.defineDriver = function(l, y, S) {
          var v = new L(function($, I) {
            try {
              var M = l._driver, z = new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");
              if (!l._driver) {
                I(z);
                return;
              }
              for (var N = Sr.concat("_initStorage"), q = 0, X = N.length; q < X; q++) {
                var ee = N[q], re = !Qu(ir, ee);
                if ((re || l[ee]) && typeof l[ee] != "function") {
                  I(z);
                  return;
                }
              }
              var ae = function() {
                for (var Xe = function(aa) {
                  return function() {
                    var da = new Error("Method " + aa + " is not implemented by the current driver"), gt = L.reject(da);
                    return B(gt, arguments[arguments.length - 1]), gt;
                  };
                }, Ar = 0, ua = ir.length; Ar < ua; Ar++) {
                  var Er = ir[Ar];
                  l[Er] || (l[Er] = Xe(Er));
                }
              };
              ae();
              var ue = function(Xe) {
                Ye[M] && console.info("Redefining LocalForage driver: " + M), Ye[M] = l, mt[M] = Xe, $();
              };
              "_support" in l ? l._support && typeof l._support == "function" ? l._support().then(ue, I) : ue(!!l._support) : ue(!0);
            } catch (we) {
              I(we);
            }
          });
          return V(v, y, S), v;
        }, i.prototype.driver = function() {
          return this._driver || null;
        }, i.prototype.getDriver = function(l, y, S) {
          var v = Ye[l] ? L.resolve(Ye[l]) : L.reject(new Error("Driver not found."));
          return V(v, y, S), v;
        }, i.prototype.getSerializer = function(l) {
          var y = L.resolve(kr);
          return V(y, l), y;
        }, i.prototype.ready = function(l) {
          var y = this, S = y._driverSet.then(function() {
            return y._ready === null && (y._ready = y._initDriver()), y._ready;
          });
          return V(S, l, l), S;
        }, i.prototype.setDriver = function(l, y, S) {
          var v = this;
          pt(l) || (l = [l]);
          var $ = this._getSupportedDrivers(l);
          function I() {
            v._config.driver = v.driver();
          }
          function M(q) {
            return v._extend(q), I(), v._ready = v._initStorage(v._config), v._ready;
          }
          function z(q) {
            return function() {
              var X = 0;
              function ee() {
                for (; X < q.length; ) {
                  var re = q[X];
                  return X++, v._dbInfo = null, v._ready = null, v.getDriver(re).then(M).catch(ee);
                }
                I();
                var ae = new Error("No available storage method found.");
                return v._driverSet = L.reject(ae), v._driverSet;
              }
              return ee();
            };
          }
          var N = this._driverSet !== null ? this._driverSet.catch(function() {
            return L.resolve();
          }) : L.resolve();
          return this._driverSet = N.then(function() {
            var q = $[0];
            return v._dbInfo = null, v._ready = null, v.getDriver(q).then(function(X) {
              v._driver = X._driver, I(), v._wrapLibraryMethodsWithReady(), v._initDriver = z($);
            });
          }).catch(function() {
            I();
            var q = new Error("No available storage method found.");
            return v._driverSet = L.reject(q), v._driverSet;
          }), V(this._driverSet, y, S), this._driverSet;
        }, i.prototype.supports = function(l) {
          return !!mt[l];
        }, i.prototype._extend = function(l) {
          Pr(this, l);
        }, i.prototype._getSupportedDrivers = function(l) {
          for (var y = [], S = 0, v = l.length; S < v; S++) {
            var $ = l[S];
            this.supports($) && y.push($);
          }
          return y;
        }, i.prototype._wrapLibraryMethodsWithReady = function() {
          for (var l = 0, y = Sr.length; l < y; l++)
            ra(this, Sr[l]);
        }, i.prototype.createInstance = function(l) {
          return new i(l);
        }, i;
      }(), na = new ta();
      t.exports = na;
    }, { 3: 3 }] }, {}, [4])(4);
  });
})(kn);
var Ra = kn.exports;
const Na = /* @__PURE__ */ vn(Ra), Ne = [];
function Ba(e, r) {
  return {
    subscribe: Sn(e, r).subscribe
  };
}
function Sn(e, r = ye) {
  let n;
  const t = /* @__PURE__ */ new Set();
  function o(w) {
    if (gn(e, w) && (e = w, n)) {
      const A = !Ne.length;
      for (const P of t)
        P[1](), Ne.push(P, e);
      if (A) {
        for (let P = 0; P < Ne.length; P += 2)
          Ne[P][0](Ne[P + 1]);
        Ne.length = 0;
      }
    }
  }
  function f(w) {
    o(w(e));
  }
  function g(w, A = ye) {
    const P = [w, A];
    return t.add(P), t.size === 1 && (n = r(o, f) || ye), w(e), () => {
      t.delete(P), t.size === 0 && n && (n(), n = null);
    };
  }
  return { set: o, update: f, subscribe: g };
}
Na.config({
  name: "SNS HPC AI Assitant"
});
const Te = {
  Unknown: { slug: "unknown", description: "Checking the AI server status...", icon: "⏳" },
  Error: { slug: "error", description: "The AI server is currently unavailable", icon: "🔴" },
  OK: { slug: "ok", description: "The AI server is fully functional", icon: "🟢" },
  Running: { slug: "running", description: "The AI server is working to answer", icon: "🔵" },
  Degraded: { slug: "degraded", description: "The AI server is currently degraded", icon: "🟡" }
};
class Da {
  constructor(r) {
    this.baseURL = r, this.status = Sn(Te.Unknown);
  }
  // list available models on the backend
  async getBestModel(r, n) {
    n = n || {};
    try {
      const t = await fetch(`${this.baseURL}/api/tags`, { method: "GET", ...n });
      if (t.status === 200) {
        const f = (await t.json()).models.map((g) => g.model);
        for (const g of r)
          if (f.includes(g.model))
            return this.status.set(g.premium ? Te.OK : Te.Degraded), g.model;
      }
    } catch (t) {
      console.error(t);
    }
    this.status.set(Te.Error);
  }
  // perform an empty model request to preload it
  async preloadModel(r, n) {
    n = n || {};
    try {
      if ((await fetch(`${this.baseURL}/api/generate`, {
        method: "POST",
        body: JSON.stringify({ model: r }),
        ...n
      })).status === 200)
        return null;
    } catch (t) {
      console.error(t);
    }
    this.status.set(Te.Error);
  }
  async chat(r, n) {
    n = n || {};
    const t = ca(this.status);
    try {
      this.status.set(Te.Running);
      const o = await fetch(`${this.baseURL}/api/chat`, {
        method: "POST",
        body: JSON.stringify(r),
        ...n
      });
      if (o.status === 200)
        return this.status.set(t), await o.json();
    } catch (o) {
      console.error(o);
    }
    this.status.set(Te.Error);
  }
}
var $e = {}, ne = {}, pe = {};
Object.defineProperty(pe, "__esModule", { value: !0 });
pe.output = pe.exists = pe.hash = pe.bytes = pe.bool = pe.number = void 0;
function hr(e) {
  if (!Number.isSafeInteger(e) || e < 0)
    throw new Error(`Wrong positive integer: ${e}`);
}
pe.number = hr;
function Pn(e) {
  if (typeof e != "boolean")
    throw new Error(`Expected boolean, not ${e}`);
}
pe.bool = Pn;
function Fa(e) {
  return e instanceof Uint8Array || e != null && typeof e == "object" && e.constructor.name === "Uint8Array";
}
function Yr(e, ...r) {
  if (!Fa(e))
    throw new Error("Expected Uint8Array");
  if (r.length > 0 && !r.includes(e.length))
    throw new Error(`Expected Uint8Array of length ${r}, not of length=${e.length}`);
}
pe.bytes = Yr;
function An(e) {
  if (typeof e != "function" || typeof e.create != "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  hr(e.outputLen), hr(e.blockLen);
}
pe.hash = An;
function En(e, r = !0) {
  if (e.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (r && e.finished)
    throw new Error("Hash#digest() has already been called");
}
pe.exists = En;
function On(e, r) {
  Yr(e);
  const n = r.outputLen;
  if (e.length < n)
    throw new Error(`digestInto() expects output buffer of length at least ${n}`);
}
pe.output = On;
const Ha = { number: hr, bool: Pn, bytes: Yr, hash: An, exists: En, output: On };
pe.default = Ha;
var K = {};
Object.defineProperty(K, "__esModule", { value: !0 });
K.add5L = K.add5H = K.add4H = K.add4L = K.add3H = K.add3L = K.add = K.rotlBL = K.rotlBH = K.rotlSL = K.rotlSH = K.rotr32L = K.rotr32H = K.rotrBL = K.rotrBH = K.rotrSL = K.rotrSH = K.shrSL = K.shrSH = K.toBig = K.split = K.fromBig = void 0;
const cr = /* @__PURE__ */ BigInt(2 ** 32 - 1), Cr = /* @__PURE__ */ BigInt(32);
function Xr(e, r = !1) {
  return r ? { h: Number(e & cr), l: Number(e >> Cr & cr) } : { h: Number(e >> Cr & cr) | 0, l: Number(e & cr) | 0 };
}
K.fromBig = Xr;
function $n(e, r = !1) {
  let n = new Uint32Array(e.length), t = new Uint32Array(e.length);
  for (let o = 0; o < e.length; o++) {
    const { h: f, l: g } = Xr(e[o], r);
    [n[o], t[o]] = [f, g];
  }
  return [n, t];
}
K.split = $n;
const Ln = (e, r) => BigInt(e >>> 0) << Cr | BigInt(r >>> 0);
K.toBig = Ln;
const Tn = (e, r, n) => e >>> n;
K.shrSH = Tn;
const jn = (e, r, n) => e << 32 - n | r >>> n;
K.shrSL = jn;
const Cn = (e, r, n) => e >>> n | r << 32 - n;
K.rotrSH = Cn;
const In = (e, r, n) => e << 32 - n | r >>> n;
K.rotrSL = In;
const Mn = (e, r, n) => e << 64 - n | r >>> n - 32;
K.rotrBH = Mn;
const zn = (e, r, n) => e >>> n - 32 | r << 64 - n;
K.rotrBL = zn;
const Rn = (e, r) => r;
K.rotr32H = Rn;
const Nn = (e, r) => e;
K.rotr32L = Nn;
const Bn = (e, r, n) => e << n | r >>> 32 - n;
K.rotlSH = Bn;
const Dn = (e, r, n) => r << n | e >>> 32 - n;
K.rotlSL = Dn;
const Fn = (e, r, n) => r << n - 32 | e >>> 64 - n;
K.rotlBH = Fn;
const Hn = (e, r, n) => e << n - 32 | r >>> 64 - n;
K.rotlBL = Hn;
function Un(e, r, n, t) {
  const o = (r >>> 0) + (t >>> 0);
  return { h: e + n + (o / 2 ** 32 | 0) | 0, l: o | 0 };
}
K.add = Un;
const qn = (e, r, n) => (e >>> 0) + (r >>> 0) + (n >>> 0);
K.add3L = qn;
const Vn = (e, r, n, t) => r + n + t + (e / 2 ** 32 | 0) | 0;
K.add3H = Vn;
const Wn = (e, r, n, t) => (e >>> 0) + (r >>> 0) + (n >>> 0) + (t >>> 0);
K.add4L = Wn;
const Gn = (e, r, n, t, o) => r + n + t + o + (e / 2 ** 32 | 0) | 0;
K.add4H = Gn;
const Kn = (e, r, n, t, o) => (e >>> 0) + (r >>> 0) + (n >>> 0) + (t >>> 0) + (o >>> 0);
K.add5L = Kn;
const Yn = (e, r, n, t, o, f) => r + n + t + o + f + (e / 2 ** 32 | 0) | 0;
K.add5H = Yn;
const Ua = {
  fromBig: Xr,
  split: $n,
  toBig: Ln,
  shrSH: Tn,
  shrSL: jn,
  rotrSH: Cn,
  rotrSL: In,
  rotrBH: Mn,
  rotrBL: zn,
  rotr32H: Rn,
  rotr32L: Nn,
  rotlSH: Bn,
  rotlSL: Dn,
  rotlBH: Fn,
  rotlBL: Hn,
  add: Un,
  add3L: qn,
  add3H: Vn,
  add4L: Wn,
  add4H: Gn,
  add5H: Yn,
  add5L: Kn
};
K.default = Ua;
var Xn = {}, br = {};
Object.defineProperty(br, "__esModule", { value: !0 });
br.crypto = void 0;
br.crypto = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
(function(e) {
  /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
  Object.defineProperty(e, "__esModule", { value: !0 }), e.randomBytes = e.wrapXOFConstructorWithOpts = e.wrapConstructorWithOpts = e.wrapConstructor = e.checkOpts = e.Hash = e.concatBytes = e.toBytes = e.utf8ToBytes = e.asyncLoop = e.nextTick = e.hexToBytes = e.bytesToHex = e.isLE = e.rotr = e.createView = e.u32 = e.u8 = void 0;
  const r = br, n = (s) => new Uint8Array(s.buffer, s.byteOffset, s.byteLength);
  e.u8 = n;
  const t = (s) => new Uint32Array(s.buffer, s.byteOffset, Math.floor(s.byteLength / 4));
  e.u32 = t;
  function o(s) {
    return s instanceof Uint8Array || s != null && typeof s == "object" && s.constructor.name === "Uint8Array";
  }
  const f = (s) => new DataView(s.buffer, s.byteOffset, s.byteLength);
  e.createView = f;
  const g = (s, m) => s << 32 - m | s >>> m;
  if (e.rotr = g, e.isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68, !e.isLE)
    throw new Error("Non little-endian hardware is not supported");
  const w = /* @__PURE__ */ Array.from({ length: 256 }, (s, m) => m.toString(16).padStart(2, "0"));
  function A(s) {
    if (!o(s))
      throw new Error("Uint8Array expected");
    let m = "";
    for (let h = 0; h < s.length; h++)
      m += w[s[h]];
    return m;
  }
  e.bytesToHex = A;
  const P = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
  function U(s) {
    if (s >= P._0 && s <= P._9)
      return s - P._0;
    if (s >= P._A && s <= P._F)
      return s - (P._A - 10);
    if (s >= P._a && s <= P._f)
      return s - (P._a - 10);
  }
  function L(s) {
    if (typeof s != "string")
      throw new Error("hex string expected, got " + typeof s);
    const m = s.length, h = m / 2;
    if (m % 2)
      throw new Error("padded hex string expected, got unpadded hex of length " + m);
    const _ = new Uint8Array(h);
    for (let T = 0, E = 0; T < h; T++, E += 2) {
      const j = U(s.charCodeAt(E)), C = U(s.charCodeAt(E + 1));
      if (j === void 0 || C === void 0) {
        const p = s[E] + s[E + 1];
        throw new Error('hex string expected, got non-hex character "' + p + '" at index ' + E);
      }
      _[T] = j * 16 + C;
    }
    return _;
  }
  e.hexToBytes = L;
  const B = async () => {
  };
  e.nextTick = B;
  async function V(s, m, h) {
    let _ = Date.now();
    for (let T = 0; T < s; T++) {
      h(T);
      const E = Date.now() - _;
      E >= 0 && E < m || (await (0, e.nextTick)(), _ += E);
    }
  }
  e.asyncLoop = V;
  function W(s) {
    if (typeof s != "string")
      throw new Error(`utf8ToBytes expected string, got ${typeof s}`);
    return new Uint8Array(new TextEncoder().encode(s));
  }
  e.utf8ToBytes = W;
  function G(s) {
    if (typeof s == "string" && (s = W(s)), !o(s))
      throw new Error(`expected Uint8Array, got ${typeof s}`);
    return s;
  }
  e.toBytes = G;
  function Y(...s) {
    let m = 0;
    for (let _ = 0; _ < s.length; _++) {
      const T = s[_];
      if (!o(T))
        throw new Error("Uint8Array expected");
      m += T.length;
    }
    const h = new Uint8Array(m);
    for (let _ = 0, T = 0; _ < s.length; _++) {
      const E = s[_];
      h.set(E, T), T += E.length;
    }
    return h;
  }
  e.concatBytes = Y;
  class x {
    // Safe version that clones internal state
    clone() {
      return this._cloneInto();
    }
  }
  e.Hash = x;
  const J = {}.toString;
  function se(s, m) {
    if (m !== void 0 && J.call(m) !== "[object Object]")
      throw new Error("Options should be object or undefined");
    return Object.assign(s, m);
  }
  e.checkOpts = se;
  function u(s) {
    const m = (_) => s().update(G(_)).digest(), h = s();
    return m.outputLen = h.outputLen, m.blockLen = h.blockLen, m.create = () => s(), m;
  }
  e.wrapConstructor = u;
  function a(s) {
    const m = (_, T) => s(T).update(G(_)).digest(), h = s({});
    return m.outputLen = h.outputLen, m.blockLen = h.blockLen, m.create = (_) => s(_), m;
  }
  e.wrapConstructorWithOpts = a;
  function d(s) {
    const m = (_, T) => s(T).update(G(_)).digest(), h = s({});
    return m.outputLen = h.outputLen, m.blockLen = h.blockLen, m.create = (_) => s(_), m;
  }
  e.wrapXOFConstructorWithOpts = d;
  function c(s = 32) {
    if (r.crypto && typeof r.crypto.getRandomValues == "function")
      return r.crypto.getRandomValues(new Uint8Array(s));
    throw new Error("crypto.getRandomValues must be defined");
  }
  e.randomBytes = c;
})(Xn);
Object.defineProperty(ne, "__esModule", { value: !0 });
ne.shake256 = ne.shake128 = ne.keccak_512 = ne.keccak_384 = ne.keccak_256 = ne.keccak_224 = ne.sha3_512 = ne.sha3_384 = ne.sha3_256 = ne.sha3_224 = ne.Keccak = ne.keccakP = void 0;
const Be = pe, rr = K, Qe = Xn, [Zn, Jn, Qn] = [[], [], []], qa = /* @__PURE__ */ BigInt(0), Ze = /* @__PURE__ */ BigInt(1), Va = /* @__PURE__ */ BigInt(2), Wa = /* @__PURE__ */ BigInt(7), Ga = /* @__PURE__ */ BigInt(256), Ka = /* @__PURE__ */ BigInt(113);
for (let e = 0, r = Ze, n = 1, t = 0; e < 24; e++) {
  [n, t] = [t, (2 * n + 3 * t) % 5], Zn.push(2 * (5 * t + n)), Jn.push((e + 1) * (e + 2) / 2 % 64);
  let o = qa;
  for (let f = 0; f < 7; f++)
    r = (r << Ze ^ (r >> Wa) * Ka) % Ga, r & Va && (o ^= Ze << (Ze << /* @__PURE__ */ BigInt(f)) - Ze);
  Qn.push(o);
}
const [Ya, Xa] = /* @__PURE__ */ (0, rr.split)(Qn, !0), kt = (e, r, n) => n > 32 ? (0, rr.rotlBH)(e, r, n) : (0, rr.rotlSH)(e, r, n), St = (e, r, n) => n > 32 ? (0, rr.rotlBL)(e, r, n) : (0, rr.rotlSL)(e, r, n);
function xn(e, r = 24) {
  const n = new Uint32Array(10);
  for (let t = 24 - r; t < 24; t++) {
    for (let g = 0; g < 10; g++)
      n[g] = e[g] ^ e[g + 10] ^ e[g + 20] ^ e[g + 30] ^ e[g + 40];
    for (let g = 0; g < 10; g += 2) {
      const w = (g + 8) % 10, A = (g + 2) % 10, P = n[A], U = n[A + 1], L = kt(P, U, 1) ^ n[w], B = St(P, U, 1) ^ n[w + 1];
      for (let V = 0; V < 50; V += 10)
        e[g + V] ^= L, e[g + V + 1] ^= B;
    }
    let o = e[2], f = e[3];
    for (let g = 0; g < 24; g++) {
      const w = Jn[g], A = kt(o, f, w), P = St(o, f, w), U = Zn[g];
      o = e[U], f = e[U + 1], e[U] = A, e[U + 1] = P;
    }
    for (let g = 0; g < 50; g += 10) {
      for (let w = 0; w < 10; w++)
        n[w] = e[g + w];
      for (let w = 0; w < 10; w++)
        e[g + w] ^= ~n[(w + 2) % 10] & n[(w + 4) % 10];
    }
    e[0] ^= Ya[t], e[1] ^= Xa[t];
  }
  n.fill(0);
}
ne.keccakP = xn;
class ur extends Qe.Hash {
  // NOTE: we accept arguments in bytes instead of bits here.
  constructor(r, n, t, o = !1, f = 24) {
    if (super(), this.blockLen = r, this.suffix = n, this.outputLen = t, this.enableXOF = o, this.rounds = f, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, (0, Be.number)(t), 0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200), this.state32 = (0, Qe.u32)(this.state);
  }
  keccak() {
    xn(this.state32, this.rounds), this.posOut = 0, this.pos = 0;
  }
  update(r) {
    (0, Be.exists)(this);
    const { blockLen: n, state: t } = this;
    r = (0, Qe.toBytes)(r);
    const o = r.length;
    for (let f = 0; f < o; ) {
      const g = Math.min(n - this.pos, o - f);
      for (let w = 0; w < g; w++)
        t[this.pos++] ^= r[f++];
      this.pos === n && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished)
      return;
    this.finished = !0;
    const { state: r, suffix: n, pos: t, blockLen: o } = this;
    r[t] ^= n, n & 128 && t === o - 1 && this.keccak(), r[o - 1] ^= 128, this.keccak();
  }
  writeInto(r) {
    (0, Be.exists)(this, !1), (0, Be.bytes)(r), this.finish();
    const n = this.state, { blockLen: t } = this;
    for (let o = 0, f = r.length; o < f; ) {
      this.posOut >= t && this.keccak();
      const g = Math.min(t - this.posOut, f - o);
      r.set(n.subarray(this.posOut, this.posOut + g), o), this.posOut += g, o += g;
    }
    return r;
  }
  xofInto(r) {
    if (!this.enableXOF)
      throw new Error("XOF is not possible for this instance");
    return this.writeInto(r);
  }
  xof(r) {
    return (0, Be.number)(r), this.xofInto(new Uint8Array(r));
  }
  digestInto(r) {
    if ((0, Be.output)(r, this), this.finished)
      throw new Error("digest() was already called");
    return this.writeInto(r), this.destroy(), r;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = !0, this.state.fill(0);
  }
  _cloneInto(r) {
    const { blockLen: n, suffix: t, outputLen: o, rounds: f, enableXOF: g } = this;
    return r || (r = new ur(n, t, o, g, f)), r.state32.set(this.state32), r.pos = this.pos, r.posOut = this.posOut, r.finished = this.finished, r.rounds = f, r.suffix = t, r.outputLen = o, r.enableXOF = g, r.destroyed = this.destroyed, r;
  }
}
ne.Keccak = ur;
const Le = (e, r, n) => (0, Qe.wrapConstructor)(() => new ur(r, e, n));
ne.sha3_224 = Le(6, 144, 224 / 8);
ne.sha3_256 = Le(6, 136, 256 / 8);
ne.sha3_384 = Le(6, 104, 384 / 8);
ne.sha3_512 = Le(6, 72, 512 / 8);
ne.keccak_224 = Le(1, 144, 224 / 8);
ne.keccak_256 = Le(1, 136, 256 / 8);
ne.keccak_384 = Le(1, 104, 384 / 8);
ne.keccak_512 = Le(1, 72, 512 / 8);
const eu = (e, r, n) => (0, Qe.wrapXOFConstructorWithOpts)((t = {}) => new ur(r, e, t.dkLen === void 0 ? n : t.dkLen, !0));
ne.shake128 = eu(31, 168, 128 / 8);
ne.shake256 = eu(31, 136, 256 / 8);
const { sha3_512: Za } = ne, ru = 24, xe = 32, Ir = (e = 4, r = Math.random) => {
  let n = "";
  for (; n.length < e; )
    n = n + Math.floor(r() * 36).toString(36);
  return n;
};
function tu(e) {
  let r = 8n, n = 0n;
  for (const t of e.values()) {
    const o = BigInt(t);
    n = (n << r) + o;
  }
  return n;
}
const nu = (e = "") => tu(Za(e)).toString(36).slice(1), Pt = Array.from(
  { length: 26 },
  (e, r) => String.fromCharCode(r + 97)
), Ja = (e) => Pt[Math.floor(e() * Pt.length)], uu = ({
  globalObj: e = typeof je < "u" ? je : typeof window < "u" ? window : {},
  random: r = Math.random
} = {}) => {
  const n = Object.keys(e).toString(), t = n.length ? n + Ir(xe, r) : Ir(xe, r);
  return nu(t).substring(0, xe);
}, au = (e) => () => e++, Qa = 476782367, du = ({
  // Fallback if the user does not pass in a CSPRNG. This should be OK
  // because we don't rely solely on the random number generator for entropy.
  // We also use the host fingerprint, current time, and a session counter.
  random: e = Math.random,
  counter: r = au(Math.floor(e() * Qa)),
  length: n = ru,
  fingerprint: t = uu({ random: e })
} = {}) => function() {
  const f = Ja(e), g = Date.now().toString(36), w = r().toString(36), A = Ir(n, e), P = `${g + A + w + t}`;
  return `${f + nu(P).substring(1, n)}`;
}, xa = du(), ed = (e, { minLength: r = 2, maxLength: n = xe } = {}) => {
  const t = e.length, o = /^[0-9a-z]+$/;
  try {
    if (typeof e == "string" && t >= r && t <= n && o.test(e))
      return !0;
  } finally {
  }
  return !1;
};
$e.getConstants = () => ({ defaultLength: ru, bigLength: xe });
$e.init = du;
$e.createId = xa;
$e.bufToBigInt = tu;
$e.createCounter = au;
$e.createFingerprint = uu;
$e.isCuid = ed;
const { createId: rd, init: Bo, getConstants: Do, isCuid: Fo } = $e;
var td = rd;
class nd {
  // TODO: Implement message tree with branches
  constructor(r, n, t) {
    if (this.updated = r, this.ollama = n, t)
      this._ = t;
    else {
      const o = (/* @__PURE__ */ new Date()).toISOString();
      this._ = {
        chatId: td(),
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
  async save({ untouched: r }) {
    r && (this._.lastUpdated = (/* @__PURE__ */ new Date()).toISOString()), await localForage.setItem(`chat/${this._.chatId}`, JSON.stringify(this._));
  }
  addMessage(r) {
    const n = (/* @__PURE__ */ new Date()).toISOString();
    this._.messages.push({ timestamp: n, ...r }), this.updated();
  }
  async complete(r) {
    const n = await this.ollama.chat({
      model: r,
      messages: this._.messages,
      stream: !1
    });
    this.addMessage(n.message);
  }
}
const At = {
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
var ou = "en", Zr = {}, Mr = {};
function iu() {
  return ou;
}
function ud(e) {
  ou = e;
}
function ad(e) {
  return Zr[e];
}
function dd(e) {
  if (!e)
    throw new Error("No locale data passed");
  Zr[e.locale] = e, Mr[e.locale.toLowerCase()] = e.locale;
}
function Et(e) {
  if (Zr[e])
    return e;
  if (Mr[e.toLowerCase()])
    return Mr[e.toLowerCase()];
}
function su(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = r.localeMatcher || "lookup";
  switch (n) {
    case "lookup":
      return Ot(e);
    case "best fit":
      return Ot(e);
    default:
      throw new RangeError('Invalid "localeMatcher" option: '.concat(n));
  }
}
function Ot(e) {
  var r = Et(e);
  if (r)
    return r;
  for (var n = e.split("-"); e.length > 1; ) {
    n.pop(), e = n.join("-");
    var t = Et(e);
    if (t)
      return t;
  }
}
var k = {
  af: function(r) {
    return r == 1 ? "one" : "other";
  },
  am: function(r) {
    return r >= 0 && r <= 1 ? "one" : "other";
  },
  ar: function(r) {
    var n = String(r).split("."), t = Number(n[0]) == r, o = t && n[0].slice(-2);
    return r == 0 ? "zero" : r == 1 ? "one" : r == 2 ? "two" : o >= 3 && o <= 10 ? "few" : o >= 11 && o <= 99 ? "many" : "other";
  },
  ast: function(r) {
    var n = String(r).split("."), t = !n[1];
    return r == 1 && t ? "one" : "other";
  },
  be: function(r) {
    var n = String(r).split("."), t = Number(n[0]) == r, o = t && n[0].slice(-1), f = t && n[0].slice(-2);
    return o == 1 && f != 11 ? "one" : o >= 2 && o <= 4 && (f < 12 || f > 14) ? "few" : t && o == 0 || o >= 5 && o <= 9 || f >= 11 && f <= 14 ? "many" : "other";
  },
  br: function(r) {
    var n = String(r).split("."), t = Number(n[0]) == r, o = t && n[0].slice(-1), f = t && n[0].slice(-2), g = t && n[0].slice(-6);
    return o == 1 && f != 11 && f != 71 && f != 91 ? "one" : o == 2 && f != 12 && f != 72 && f != 92 ? "two" : (o == 3 || o == 4 || o == 9) && (f < 10 || f > 19) && (f < 70 || f > 79) && (f < 90 || f > 99) ? "few" : r != 0 && t && g == 0 ? "many" : "other";
  },
  bs: function(r) {
    var n = String(r).split("."), t = n[0], o = n[1] || "", f = !n[1], g = t.slice(-1), w = t.slice(-2), A = o.slice(-1), P = o.slice(-2);
    return f && g == 1 && w != 11 || A == 1 && P != 11 ? "one" : f && g >= 2 && g <= 4 && (w < 12 || w > 14) || A >= 2 && A <= 4 && (P < 12 || P > 14) ? "few" : "other";
  },
  ca: function(r) {
    var n = String(r).split("."), t = n[0], o = !n[1], f = t.slice(-6);
    return r == 1 && o ? "one" : t != 0 && f == 0 && o ? "many" : "other";
  },
  ceb: function(r) {
    var n = String(r).split("."), t = n[0], o = n[1] || "", f = !n[1], g = t.slice(-1), w = o.slice(-1);
    return f && (t == 1 || t == 2 || t == 3) || f && g != 4 && g != 6 && g != 9 || !f && w != 4 && w != 6 && w != 9 ? "one" : "other";
  },
  cs: function(r) {
    var n = String(r).split("."), t = n[0], o = !n[1];
    return r == 1 && o ? "one" : t >= 2 && t <= 4 && o ? "few" : o ? "other" : "many";
  },
  cy: function(r) {
    return r == 0 ? "zero" : r == 1 ? "one" : r == 2 ? "two" : r == 3 ? "few" : r == 6 ? "many" : "other";
  },
  da: function(r) {
    var n = String(r).split("."), t = n[0], o = Number(n[0]) == r;
    return r == 1 || !o && (t == 0 || t == 1) ? "one" : "other";
  },
  dsb: function(r) {
    var n = String(r).split("."), t = n[0], o = n[1] || "", f = !n[1], g = t.slice(-2), w = o.slice(-2);
    return f && g == 1 || w == 1 ? "one" : f && g == 2 || w == 2 ? "two" : f && (g == 3 || g == 4) || w == 3 || w == 4 ? "few" : "other";
  },
  dz: function(r) {
    return "other";
  },
  es: function(r) {
    var n = String(r).split("."), t = n[0], o = !n[1], f = t.slice(-6);
    return r == 1 ? "one" : t != 0 && f == 0 && o ? "many" : "other";
  },
  ff: function(r) {
    return r >= 0 && r < 2 ? "one" : "other";
  },
  fr: function(r) {
    var n = String(r).split("."), t = n[0], o = !n[1], f = t.slice(-6);
    return r >= 0 && r < 2 ? "one" : t != 0 && f == 0 && o ? "many" : "other";
  },
  ga: function(r) {
    var n = String(r).split("."), t = Number(n[0]) == r;
    return r == 1 ? "one" : r == 2 ? "two" : t && r >= 3 && r <= 6 ? "few" : t && r >= 7 && r <= 10 ? "many" : "other";
  },
  gd: function(r) {
    var n = String(r).split("."), t = Number(n[0]) == r;
    return r == 1 || r == 11 ? "one" : r == 2 || r == 12 ? "two" : t && r >= 3 && r <= 10 || t && r >= 13 && r <= 19 ? "few" : "other";
  },
  he: function(r) {
    var n = String(r).split("."), t = n[0], o = !n[1];
    return t == 1 && o || t == 0 && !o ? "one" : t == 2 && o ? "two" : "other";
  },
  is: function(r) {
    var n = String(r).split("."), t = n[0], o = (n[1] || "").replace(/0+$/, ""), f = Number(n[0]) == r, g = t.slice(-1), w = t.slice(-2);
    return f && g == 1 && w != 11 || o % 10 == 1 && o % 100 != 11 ? "one" : "other";
  },
  ksh: function(r) {
    return r == 0 ? "zero" : r == 1 ? "one" : "other";
  },
  lt: function(r) {
    var n = String(r).split("."), t = n[1] || "", o = Number(n[0]) == r, f = o && n[0].slice(-1), g = o && n[0].slice(-2);
    return f == 1 && (g < 11 || g > 19) ? "one" : f >= 2 && f <= 9 && (g < 11 || g > 19) ? "few" : t != 0 ? "many" : "other";
  },
  lv: function(r) {
    var n = String(r).split("."), t = n[1] || "", o = t.length, f = Number(n[0]) == r, g = f && n[0].slice(-1), w = f && n[0].slice(-2), A = t.slice(-2), P = t.slice(-1);
    return f && g == 0 || w >= 11 && w <= 19 || o == 2 && A >= 11 && A <= 19 ? "zero" : g == 1 && w != 11 || o == 2 && P == 1 && A != 11 || o != 2 && P == 1 ? "one" : "other";
  },
  mk: function(r) {
    var n = String(r).split("."), t = n[0], o = n[1] || "", f = !n[1], g = t.slice(-1), w = t.slice(-2), A = o.slice(-1), P = o.slice(-2);
    return f && g == 1 && w != 11 || A == 1 && P != 11 ? "one" : "other";
  },
  mt: function(r) {
    var n = String(r).split("."), t = Number(n[0]) == r, o = t && n[0].slice(-2);
    return r == 1 ? "one" : r == 2 ? "two" : r == 0 || o >= 3 && o <= 10 ? "few" : o >= 11 && o <= 19 ? "many" : "other";
  },
  pa: function(r) {
    return r == 0 || r == 1 ? "one" : "other";
  },
  pl: function(r) {
    var n = String(r).split("."), t = n[0], o = !n[1], f = t.slice(-1), g = t.slice(-2);
    return r == 1 && o ? "one" : o && f >= 2 && f <= 4 && (g < 12 || g > 14) ? "few" : o && t != 1 && (f == 0 || f == 1) || o && f >= 5 && f <= 9 || o && g >= 12 && g <= 14 ? "many" : "other";
  },
  pt: function(r) {
    var n = String(r).split("."), t = n[0], o = !n[1], f = t.slice(-6);
    return t == 0 || t == 1 ? "one" : t != 0 && f == 0 && o ? "many" : "other";
  },
  ro: function(r) {
    var n = String(r).split("."), t = !n[1], o = Number(n[0]) == r, f = o && n[0].slice(-2);
    return r == 1 && t ? "one" : !t || r == 0 || r != 1 && f >= 1 && f <= 19 ? "few" : "other";
  },
  ru: function(r) {
    var n = String(r).split("."), t = n[0], o = !n[1], f = t.slice(-1), g = t.slice(-2);
    return o && f == 1 && g != 11 ? "one" : o && f >= 2 && f <= 4 && (g < 12 || g > 14) ? "few" : o && f == 0 || o && f >= 5 && f <= 9 || o && g >= 11 && g <= 14 ? "many" : "other";
  },
  se: function(r) {
    return r == 1 ? "one" : r == 2 ? "two" : "other";
  },
  si: function(r) {
    var n = String(r).split("."), t = n[0], o = n[1] || "";
    return r == 0 || r == 1 || t == 0 && o == 1 ? "one" : "other";
  },
  sl: function(r) {
    var n = String(r).split("."), t = n[0], o = !n[1], f = t.slice(-2);
    return o && f == 1 ? "one" : o && f == 2 ? "two" : o && (f == 3 || f == 4) || !o ? "few" : "other";
  }
};
k.as = k.am;
k.az = k.af;
k.bg = k.af;
k.bn = k.am;
k.brx = k.af;
k.ce = k.af;
k.chr = k.af;
k.de = k.ast;
k.ee = k.af;
k.el = k.af;
k.en = k.ast;
k.et = k.ast;
k.eu = k.af;
k.fa = k.am;
k.fi = k.ast;
k.fil = k.ceb;
k.fo = k.af;
k.fur = k.af;
k.fy = k.ast;
k.gl = k.ast;
k.gu = k.am;
k.ha = k.af;
k.hi = k.am;
k.hr = k.bs;
k.hsb = k.dsb;
k.hu = k.af;
k.hy = k.ff;
k.ia = k.ast;
k.id = k.dz;
k.ig = k.dz;
k.it = k.ca;
k.ja = k.dz;
k.jgo = k.af;
k.jv = k.dz;
k.ka = k.af;
k.kea = k.dz;
k.kk = k.af;
k.kl = k.af;
k.km = k.dz;
k.kn = k.am;
k.ko = k.dz;
k.ks = k.af;
k.ku = k.af;
k.ky = k.af;
k.lb = k.af;
k.lkt = k.dz;
k.lo = k.dz;
k.ml = k.af;
k.mn = k.af;
k.mr = k.af;
k.ms = k.dz;
k.my = k.dz;
k.nb = k.af;
k.ne = k.af;
k.nl = k.ast;
k.nn = k.af;
k.no = k.af;
k.or = k.af;
k.pcm = k.am;
k.ps = k.af;
k.rm = k.af;
k.sah = k.dz;
k.sc = k.ast;
k.sd = k.af;
k.sk = k.cs;
k.so = k.af;
k.sq = k.af;
k.sr = k.bs;
k.su = k.dz;
k.sv = k.ast;
k.sw = k.ast;
k.ta = k.af;
k.te = k.af;
k.th = k.dz;
k.ti = k.pa;
k.tk = k.af;
k.to = k.dz;
k.tr = k.af;
k.ug = k.af;
k.uk = k.ru;
k.ur = k.ast;
k.uz = k.af;
k.vi = k.dz;
k.wae = k.af;
k.wo = k.dz;
k.xh = k.af;
k.yi = k.ast;
k.yo = k.dz;
k.yue = k.dz;
k.zh = k.dz;
k.zu = k.am;
const $t = k;
function Lt(e) {
  return e === "pt-PT" ? e : id(e);
}
var od = /^([a-z0-9]+)/i;
function id(e) {
  var r = e.match(od);
  if (!r)
    throw new TypeError("Invalid locale: ".concat(e));
  return r[1];
}
function sd(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function Tt(e, r) {
  for (var n = 0; n < r.length; n++) {
    var t = r[n];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t);
  }
}
function cd(e, r, n) {
  return r && Tt(e.prototype, r), n && Tt(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var zr = /* @__PURE__ */ function() {
  function e(r, n) {
    sd(this, e);
    var t = e.supportedLocalesOf(r);
    if (t.length === 0)
      throw new RangeError("Unsupported locale: " + r);
    if (n && n.type !== "cardinal")
      throw new RangeError('Only "cardinal" "type" is supported');
    this.$ = $t[Lt(t[0])];
  }
  return cd(e, [{
    key: "select",
    value: function(n) {
      return this.$(n);
    }
  }], [{
    key: "supportedLocalesOf",
    value: function(n) {
      return typeof n == "string" && (n = [n]), n.filter(function(t) {
        return $t[Lt(t)];
      });
    }
  }]), e;
}();
function Rr(e) {
  "@babel/helpers - typeof";
  return Rr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Rr(e);
}
function jt(e, r) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    r && (t = t.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, t);
  }
  return n;
}
function Ct(e) {
  for (var r = 1; r < arguments.length; r++) {
    var n = arguments[r] != null ? arguments[r] : {};
    r % 2 ? jt(Object(n), !0).forEach(function(t) {
      fd(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : jt(Object(n)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}
function fd(e, r, n) {
  return r in e ? Object.defineProperty(e, r, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = n, e;
}
function It(e, r) {
  return md(e) || pd(e, r) || hd(e, r) || ld();
}
function ld() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hd(e, r) {
  if (e) {
    if (typeof e == "string")
      return Mt(e, r);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Mt(e, r);
  }
}
function Mt(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var n = 0, t = new Array(r); n < r; n++)
    t[n] = e[n];
  return t;
}
function pd(e, r) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var t = [], o = !0, f = !1, g, w;
    try {
      for (n = n.call(e); !(o = (g = n.next()).done) && (t.push(g.value), !(r && t.length === r)); o = !0)
        ;
    } catch (A) {
      f = !0, w = A;
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (f)
          throw w;
      }
    }
    return t;
  }
}
function md(e) {
  if (Array.isArray(e))
    return e;
}
function gd(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function zt(e, r) {
  for (var n = 0; n < r.length; n++) {
    var t = r[n];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t);
  }
}
function bd(e, r, n) {
  return r && zt(e.prototype, r), n && zt(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var wd = ["second", "minute", "hour", "day", "week", "month", "quarter", "year"], _d = ["auto", "always"], vd = ["long", "short", "narrow"], yd = ["lookup", "best fit"], Oe = /* @__PURE__ */ function() {
  function e() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    gd(this, e);
    var t = n.numeric, o = n.style, f = n.localeMatcher;
    if (this.numeric = "always", this.style = "long", this.localeMatcher = "lookup", t !== void 0) {
      if (_d.indexOf(t) < 0)
        throw new RangeError('Invalid "numeric" option: '.concat(t));
      this.numeric = t;
    }
    if (o !== void 0) {
      if (vd.indexOf(o) < 0)
        throw new RangeError('Invalid "style" option: '.concat(o));
      this.style = o;
    }
    if (f !== void 0) {
      if (yd.indexOf(f) < 0)
        throw new RangeError('Invalid "localeMatcher" option: '.concat(f));
      this.localeMatcher = f;
    }
    if (typeof r == "string" && (r = [r]), r.push(iu()), this.locale = e.supportedLocalesOf(r, {
      localeMatcher: this.localeMatcher
    })[0], !this.locale)
      throw new Error("No supported locale was found");
    zr.supportedLocalesOf(this.locale).length > 0 ? this.pluralRules = new zr(this.locale) : console.warn('"'.concat(this.locale, '" locale is not supported')), typeof Intl < "u" && Intl.NumberFormat ? (this.numberFormat = new Intl.NumberFormat(this.locale), this.numberingSystem = this.numberFormat.resolvedOptions().numberingSystem) : this.numberingSystem = "latn", this.locale = su(this.locale, {
      localeMatcher: this.localeMatcher
    });
  }
  return bd(e, [{
    key: "format",
    value: function() {
      var n = Rt(arguments), t = It(n, 2), o = t[0], f = t[1];
      return this.getRule(o, f).replace("{0}", this.formatNumber(Math.abs(o)));
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
      var n = Rt(arguments), t = It(n, 2), o = t[0], f = t[1], g = this.getRule(o, f), w = g.indexOf("{0}");
      if (w < 0)
        return [{
          type: "literal",
          value: g
        }];
      var A = [];
      return w > 0 && A.push({
        type: "literal",
        value: g.slice(0, w)
      }), A = A.concat(this.formatNumberToParts(Math.abs(o)).map(function(P) {
        return Ct(Ct({}, P), {}, {
          unit: f
        });
      })), w + 3 < g.length - 1 && A.push({
        type: "literal",
        value: g.slice(w + 3)
      }), A;
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
    value: function(n, t) {
      var o = ad(this.locale)[this.style][t];
      if (typeof o == "string")
        return o;
      if (this.numeric === "auto") {
        if (n === -2 || n === -1) {
          var f = o["previous".concat(n === -1 ? "" : "-" + Math.abs(n))];
          if (f)
            return f;
        } else if (n === 1 || n === 2) {
          var g = o["next".concat(n === 1 ? "" : "-" + Math.abs(n))];
          if (g)
            return g;
        } else if (n === 0 && o.current)
          return o.current;
      }
      var w = o[Ed(n) ? "past" : "future"];
      if (typeof w == "string")
        return w;
      var A = this.pluralRules && this.pluralRules.select(Math.abs(n)) || "other";
      return w[A] || w.other;
    }
    /**
     * Formats a number into a string.
     * Uses `Intl.NumberFormat` when available.
     * @param  {number} number
     * @return {string}
     */
  }, {
    key: "formatNumber",
    value: function(n) {
      return this.numberFormat ? this.numberFormat.format(n) : String(n);
    }
    /**
     * Formats a number into a list of parts.
     * Uses `Intl.NumberFormat` when available.
     * @param  {number} number
     * @return {object[]}
     */
  }, {
    key: "formatNumberToParts",
    value: function(n) {
      return this.numberFormat && this.numberFormat.formatToParts ? this.numberFormat.formatToParts(n) : [{
        type: "integer",
        value: this.formatNumber(n)
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
Oe.supportedLocalesOf = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (typeof e == "string")
    e = [e];
  else if (!Array.isArray(e))
    throw new TypeError('Invalid "locales" argument');
  return e.filter(function(n) {
    return su(n, r);
  });
};
Oe.addLocale = dd;
Oe.setDefaultLocale = ud;
Oe.getDefaultLocale = iu;
Oe.PluralRules = zr;
var $r = 'Invalid "unit" argument';
function kd(e) {
  if (Rr(e) === "symbol")
    throw new TypeError($r);
  if (typeof e != "string")
    throw new RangeError("".concat($r, ": ").concat(e));
  if (e[e.length - 1] === "s" && (e = e.slice(0, e.length - 1)), wd.indexOf(e) < 0)
    throw new RangeError("".concat($r, ": ").concat(e));
  return e;
}
var Sd = 'Invalid "number" argument';
function Pd(e) {
  if (e = Number(e), Number.isFinite && !Number.isFinite(e))
    throw new RangeError("".concat(Sd, ": ").concat(e));
  return e;
}
function Ad(e) {
  return 1 / e === -1 / 0;
}
function Ed(e) {
  return e < 0 || e === 0 && Ad(e);
}
function Rt(e) {
  if (e.length < 2)
    throw new TypeError('"unit" argument is required');
  return [Pd(e[0]), kd(e[1])];
}
function pr(e) {
  "@babel/helpers - typeof";
  return pr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, pr(e);
}
function Od(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function Nt(e, r) {
  for (var n = 0; n < r.length; n++) {
    var t = r[n];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t);
  }
}
function $d(e, r, n) {
  return r && Nt(e.prototype, r), n && Nt(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var Bt = /* @__PURE__ */ function() {
  function e() {
    Od(this, e), this.cache = {};
  }
  return $d(e, [{
    key: "get",
    value: function() {
      for (var n = this.cache, t = arguments.length, o = new Array(t), f = 0; f < t; f++)
        o[f] = arguments[f];
      for (var g = 0, w = o; g < w.length; g++) {
        var A = w[g];
        if (pr(n) !== "object")
          return;
        n = n[A];
      }
      return n;
    }
  }, {
    key: "put",
    value: function() {
      for (var n = arguments.length, t = new Array(n), o = 0; o < n; o++)
        t[o] = arguments[o];
      for (var f = t.pop(), g = t.pop(), w = this.cache, A = 0, P = t; A < P.length; A++) {
        var U = P[A];
        pr(w[U]) !== "object" && (w[U] = {}), w = w[U];
      }
      return w[g] = f;
    }
  }]), e;
}();
function Nr(e) {
  "@babel/helpers - typeof";
  return Nr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Nr(e);
}
function Ld(e, r) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n)
    return (n = n.call(e)).next.bind(n);
  if (Array.isArray(e) || (n = Td(e)) || r && e && typeof e.length == "number") {
    n && (e = n);
    var t = 0;
    return function() {
      return t >= e.length ? { done: !0 } : { done: !1, value: e[t++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Td(e, r) {
  if (e) {
    if (typeof e == "string")
      return Dt(e, r);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Dt(e, r);
  }
}
function Dt(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var n = 0, t = new Array(r); n < r; n++)
    t[n] = e[n];
  return t;
}
function jd(e, r) {
  for (var n = Ld(e), t; !(t = n()).done; ) {
    var o = t.value;
    if (r(o))
      return o;
    for (var f = o.split("-"); f.length > 1; )
      if (f.pop(), o = f.join("-"), r(o))
        return o;
  }
  throw new Error("No locale data has been registered for any of the locales: ".concat(e.join(", ")));
}
function Cd() {
  var e = (typeof Intl > "u" ? "undefined" : Nr(Intl)) === "object";
  return e && typeof Intl.DateTimeFormat == "function";
}
function Br(e) {
  "@babel/helpers - typeof";
  return Br = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Br(e);
}
function Id(e) {
  return zd(e) && (Array.isArray(e.steps) || // `gradation` property is deprecated: it has been renamed to `steps`.
  Array.isArray(e.gradation) || // `flavour` property is deprecated: it has been renamed to `labels`.
  Array.isArray(e.flavour) || typeof e.flavour == "string" || Array.isArray(e.labels) || typeof e.labels == "string" || // `units` property is deprecated.
  Array.isArray(e.units) || // `custom` property is deprecated.
  typeof e.custom == "function");
}
var Md = {}.constructor;
function zd(e) {
  return Br(e) !== void 0 && e !== null && e.constructor === Md;
}
var Pe = 60, mr = 60 * Pe, Ce = 24 * mr, Dr = 7 * Ce, Fr = 30.44 * Ce, cu = 146097 / 400 * Ce;
function Ue(e) {
  switch (e) {
    case "second":
      return 1;
    case "minute":
      return Pe;
    case "hour":
      return mr;
    case "day":
      return Ce;
    case "week":
      return Dr;
    case "month":
      return Fr;
    case "year":
      return cu;
  }
}
function fu(e) {
  return e.factor !== void 0 ? e.factor : Ue(e.unit || e.formatAs) || 1;
}
function tr(e) {
  switch (e) {
    case "floor":
      return Math.floor;
    default:
      return Math.round;
  }
}
function Jr(e) {
  switch (e) {
    case "floor":
      return 1;
    default:
      return 0.5;
  }
}
function Hr(e) {
  "@babel/helpers - typeof";
  return Hr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, Hr(e);
}
function lu(e, r) {
  var n = r.prevStep, t = r.timestamp, o = r.now, f = r.future, g = r.round, w;
  return n && (n.id || n.unit) && (w = e["threshold_for_".concat(n.id || n.unit)]), w === void 0 && e.threshold !== void 0 && (w = e.threshold, typeof w == "function" && (w = w(o, f))), w === void 0 && (w = e.minTime), Hr(w) === "object" && (n && n.id && w[n.id] !== void 0 ? w = w[n.id] : w = w.default), typeof w == "function" && (w = w(t, {
    future: f,
    getMinTimeForUnit: function(P, U) {
      return Ft(P, U || n && n.formatAs, {
        round: g
      });
    }
  })), w === void 0 && e.test && (e.test(t, {
    now: o,
    future: f
  }) ? w = 0 : w = 9007199254740991), w === void 0 && (n ? e.formatAs && n.formatAs && (w = Ft(e.formatAs, n.formatAs, {
    round: g
  })) : w = 0), w === void 0 && console.warn("[javascript-time-ago] A step should specify `minTime`:\n" + JSON.stringify(e, null, 2)), w;
}
function Ft(e, r, n) {
  var t = n.round, o = Ue(e), f;
  if (r === "now" ? f = Ue(e) : f = Ue(r), o !== void 0 && f !== void 0)
    return o - f * (1 - Jr(t));
}
function Ht(e, r) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    r && (t = t.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, t);
  }
  return n;
}
function Rd(e) {
  for (var r = 1; r < arguments.length; r++) {
    var n = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Ht(Object(n), !0).forEach(function(t) {
      Nd(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ht(Object(n)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}
function Nd(e, r, n) {
  return r in e ? Object.defineProperty(e, r, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = n, e;
}
function Bd(e, r, n) {
  var t = n.now, o = n.future, f = n.round, g = n.units, w = n.getNextStep;
  e = Fd(e, g);
  var A = Dd(e, r, {
    now: t,
    future: o,
    round: f
  });
  if (w) {
    if (A) {
      var P = e[e.indexOf(A) - 1], U = e[e.indexOf(A) + 1];
      return [P, A, U];
    }
    return [void 0, void 0, e[0]];
  }
  return A;
}
function Dd(e, r, n) {
  var t = n.now, o = n.future, f = n.round;
  if (e.length !== 0) {
    var g = hu(e, r, {
      now: t,
      future: o || r < 0,
      round: f
    });
    if (g !== -1) {
      var w = e[g];
      if (w.granularity) {
        var A = tr(f)(Math.abs(r) / fu(w) / w.granularity) * w.granularity;
        if (A === 0 && g > 0)
          return e[g - 1];
      }
      return w;
    }
  }
}
function hu(e, r, n) {
  var t = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, o = lu(e[t], Rd({
    prevStep: e[t - 1],
    timestamp: n.now - r * 1e3
  }, n));
  return o === void 0 || Math.abs(r) < o ? t - 1 : t === e.length - 1 ? t : hu(e, r, n, t + 1);
}
function Fd(e, r) {
  return e.filter(function(n) {
    var t = n.unit, o = n.formatAs;
    return t = t || o, t ? r.indexOf(t) >= 0 : !0;
  });
}
function Hd(e, r, n) {
  var t = n.now, o = n.round;
  if (Ue(e)) {
    var f = Ue(e) * 1e3, g = r > t, w = Math.abs(r - t), A = tr(o)(w / f) * f;
    return g ? A > 0 ? w - A + qd(o, f) : w - A + 1 : -(w - A) + Ud(o, f);
  }
}
function Ud(e, r) {
  return Jr(e) * r;
}
function qd(e, r) {
  return (1 - Jr(e)) * r + 1;
}
var Vd = 365 * 24 * 60 * 60 * 1e3, pu = 1e3 * Vd;
function Wd(e, r, n) {
  var t = n.prevStep, o = n.nextStep, f = n.now, g = n.future, w = n.round, A = e.getTime ? e.getTime() : e, P = function(W) {
    return Hd(W, A, {
      now: f,
      round: w
    });
  }, U = Kd(g ? r : o, A, {
    future: g,
    now: f,
    round: w,
    prevStep: g ? t : r
    // isFirstStep: future && isFirstStep
  });
  if (U !== void 0) {
    var L;
    if (r && (r.getTimeToNextUpdate && (L = r.getTimeToNextUpdate(A, {
      getTimeToNextUpdateForUnit: P,
      getRoundFunction: tr,
      now: f,
      future: g,
      round: w
    })), L === void 0)) {
      var B = r.unit || r.formatAs;
      B && (L = P(B));
    }
    return L === void 0 ? U : Math.min(L, U);
  }
}
function Gd(e, r, n) {
  var t = n.now, o = n.future, f = n.round, g = n.prevStep, w = lu(e, {
    timestamp: r,
    now: t,
    future: o,
    round: f,
    prevStep: g
  });
  if (w !== void 0)
    return o ? r - w * 1e3 + 1 : w === 0 && r === t ? pu : r + w * 1e3;
}
function Kd(e, r, n) {
  var t = n.now, o = n.future, f = n.round, g = n.prevStep;
  if (e) {
    var w = Gd(e, r, {
      now: t,
      future: o,
      round: f,
      prevStep: g
    });
    return w === void 0 ? void 0 : w - t;
  } else
    return o ? r - t + 1 : pu;
}
var mu = {};
function Fe(e) {
  return mu[e];
}
function gu(e) {
  if (!e)
    throw new Error("[javascript-time-ago] No locale data passed.");
  mu[e.locale] = e;
}
const Yd = [{
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
}], Ur = {
  steps: Yd,
  labels: "long"
};
function Ut(e, r) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    r && (t = t.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, t);
  }
  return n;
}
function qt(e) {
  for (var r = 1; r < arguments.length; r++) {
    var n = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Ut(Object(n), !0).forEach(function(t) {
      Xd(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ut(Object(n)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}
function Xd(e, r, n) {
  return r in e ? Object.defineProperty(e, r, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = n, e;
}
const qr = qt(qt({}, Ur), {}, {
  // Skip "seconds".
  steps: Ur.steps.filter(function(e) {
    return e.formatAs !== "second";
  })
}), bu = [{
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
  factor: Pe,
  // "minute" labels are used for formatting the output.
  unit: "minute"
}, {
  // This step is effective starting from 2.5 minutes.
  threshold: 2.5 * Pe,
  // Allow only 5-minute increments of minutes starting from 2.5 minutes.
  // `granularity` — (advanced) Time interval value "granularity".
  // For example, it could be set to `5` for minutes to allow only 5-minute increments
  // when formatting time intervals: `0 minutes`, `5 minutes`, `10 minutes`, etc.
  // Perhaps this feature will be removed because there seem to be no use cases
  // of it in the real world.
  granularity: 5,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a minute.
  factor: Pe,
  // "minute" labels are used for formatting the output.
  unit: "minute"
}, {
  // This step is effective starting from 22.5 minutes.
  threshold: 22.5 * Pe,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in  half-an-hour.
  factor: 0.5 * mr,
  // "half-hour" labels are used for formatting the output.
  // (if available, which is no longer the case)
  unit: "half-hour"
}, {
  // This step is effective starting from 42.5 minutes.
  threshold: 42.5 * Pe,
  threshold_for_minute: 52.5 * Pe,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in an hour.
  factor: mr,
  // "hour" labels are used for formatting the output.
  unit: "hour"
}, {
  // This step is effective starting from 20.5 hours.
  threshold: 20.5 / 24 * Ce,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a day.
  factor: Ce,
  // "day" labels are used for formatting the output.
  unit: "day"
}, {
  // This step is effective starting from 5.5 days.
  threshold: 5.5 * Ce,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a week.
  factor: Dr,
  // "week" labels are used for formatting the output.
  unit: "week"
}, {
  // This step is effective starting from 3.5 weeks.
  threshold: 3.5 * Dr,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a month.
  factor: Fr,
  // "month" labels are used for formatting the output.
  unit: "month"
}, {
  // This step is effective starting from 10.5 months.
  threshold: 10.5 * Fr,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a year.
  factor: cu,
  // "year" labels are used for formatting the output.
  unit: "year"
}], Vt = {
  gradation: bu,
  flavour: "long",
  units: ["now", "minute", "hour", "day", "week", "month", "year"]
}, Zd = {
  gradation: bu,
  flavour: "long-time",
  units: ["now", "minute", "hour", "day", "week", "month", "year"]
};
function wu(e) {
  return e instanceof Date ? e : new Date(e);
}
var Vr = [{
  formatAs: "second"
}, {
  formatAs: "minute"
}, {
  formatAs: "hour"
}], Se = {}, Jd = {
  minTime: function(r, n) {
    n.future;
    var t = n.getMinTimeForUnit;
    return t("day");
  },
  format: function(r, n) {
    return Se[n] || (Se[n] = {}), Se[n].dayMonth || (Se[n].dayMonth = new Intl.DateTimeFormat(n, {
      month: "short",
      day: "numeric"
    })), Se[n].dayMonth.format(wu(r));
  }
}, Qd = {
  minTime: function(r, n) {
    var t = n.future;
    if (t) {
      var o = new Date(new Date(r).getFullYear(), 0).getTime() - 1;
      return (r - o) / 1e3;
    } else {
      var f = new Date(new Date(r).getFullYear() + 1, 0).getTime();
      return (f - r) / 1e3;
    }
  },
  format: function(r, n) {
    return Se[n] || (Se[n] = {}), Se[n].dayMonthYear || (Se[n].dayMonthYear = new Intl.DateTimeFormat(n, {
      year: "numeric",
      month: "short",
      day: "numeric"
    })), Se[n].dayMonthYear.format(wu(r));
  }
};
Cd() ? Vr.push(Jd, Qd) : Vr.push({
  formatAs: "day"
}, {
  formatAs: "week"
}, {
  formatAs: "month"
}, {
  formatAs: "year"
});
const Me = {
  steps: Vr,
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
function Wt(e, r) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    r && (t = t.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, t);
  }
  return n;
}
function Gt(e) {
  for (var r = 1; r < arguments.length; r++) {
    var n = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Wt(Object(n), !0).forEach(function(t) {
      xd(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Wt(Object(n)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}
function xd(e, r, n) {
  return r in e ? Object.defineProperty(e, r, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = n, e;
}
const eo = Gt(Gt({}, Me), {}, {
  // Add "now".
  steps: [{
    formatAs: "now"
  }].concat(Me.steps)
});
function Kt(e, r) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    r && (t = t.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, t);
  }
  return n;
}
function Yt(e) {
  for (var r = 1; r < arguments.length; r++) {
    var n = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Kt(Object(n), !0).forEach(function(t) {
      ro(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Kt(Object(n)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}
function ro(e, r, n) {
  return r in e ? Object.defineProperty(e, r, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = n, e;
}
const Wr = Yt(Yt({}, Me), {}, {
  // Skip "seconds".
  steps: Me.steps.filter(function(e) {
    return e.formatAs !== "second";
  })
});
function Xt(e, r) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    r && (t = t.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, t);
  }
  return n;
}
function Zt(e) {
  for (var r = 1; r < arguments.length; r++) {
    var n = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Xt(Object(n), !0).forEach(function(t) {
      to(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Xt(Object(n)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}
function to(e, r, n) {
  return r in e ? Object.defineProperty(e, r, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = n, e;
}
const no = Zt(Zt({}, Wr), {}, {
  // Add "now".
  steps: [{
    formatAs: "now"
  }].concat(Wr.steps)
});
function Jt(e, r) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    r && (t = t.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, t);
  }
  return n;
}
function fr(e) {
  for (var r = 1; r < arguments.length; r++) {
    var n = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Jt(Object(n), !0).forEach(function(t) {
      uo(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Jt(Object(n)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}
function uo(e, r, n) {
  return r in e ? Object.defineProperty(e, r, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = n, e;
}
const ao = fr(fr({}, Me), {}, {
  // Skip "seconds".
  steps: Me.steps.filter(function(e) {
    return e.formatAs !== "second";
  }).map(function(e) {
    return e.formatAs === "minute" ? fr(fr({}, e), {}, {
      minTime: Pe
    }) : e;
  })
}), nr = {
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
function Qt(e, r) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    r && (t = t.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, t);
  }
  return n;
}
function xt(e) {
  for (var r = 1; r < arguments.length; r++) {
    var n = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Qt(Object(n), !0).forEach(function(t) {
      oo(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qt(Object(n)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}
function oo(e, r, n) {
  return r in e ? Object.defineProperty(e, r, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = n, e;
}
const io = xt(xt({}, nr), {}, {
  // Add "now".
  steps: [{
    formatAs: "now"
  }].concat(nr.steps)
});
function en(e, r) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    r && (t = t.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, t);
  }
  return n;
}
function rn(e) {
  for (var r = 1; r < arguments.length; r++) {
    var n = arguments[r] != null ? arguments[r] : {};
    r % 2 ? en(Object(n), !0).forEach(function(t) {
      so(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : en(Object(n)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}
function so(e, r, n) {
  return r in e ? Object.defineProperty(e, r, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = n, e;
}
const Gr = rn(rn({}, nr), {}, {
  // Skip "seconds".
  steps: nr.steps.filter(function(e) {
    return e.formatAs !== "second";
  })
});
function tn(e, r) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    r && (t = t.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, t);
  }
  return n;
}
function nn(e) {
  for (var r = 1; r < arguments.length; r++) {
    var n = arguments[r] != null ? arguments[r] : {};
    r % 2 ? tn(Object(n), !0).forEach(function(t) {
      co(e, t, n[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tn(Object(n)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
    });
  }
  return e;
}
function co(e, r, n) {
  return r in e ? Object.defineProperty(e, r, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = n, e;
}
const fo = nn(nn({}, Gr), {}, {
  // Add "now".
  steps: [{
    formatAs: "now"
  }].concat(Gr.steps)
});
function lo(e) {
  switch (e) {
    case "default":
    case "round":
      return Ur;
    case "round-minute":
      return qr;
    case "approximate":
      return Vt;
    case "time":
    case "approximate-time":
      return Zd;
    case "mini":
      return nr;
    case "mini-now":
      return io;
    case "mini-minute":
      return Gr;
    case "mini-minute-now":
      return fo;
    case "twitter":
      return Me;
    case "twitter-now":
      return eo;
    case "twitter-minute":
      return Wr;
    case "twitter-minute-now":
      return no;
    case "twitter-first-minute":
      return ao;
    default:
      return Vt;
  }
}
function gr(e) {
  "@babel/helpers - typeof";
  return gr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, gr(e);
}
function ho(e, r) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n)
    return (n = n.call(e)).next.bind(n);
  if (Array.isArray(e) || (n = _u(e)) || r && e && typeof e.length == "number") {
    n && (e = n);
    var t = 0;
    return function() {
      return t >= e.length ? { done: !0 } : { done: !1, value: e[t++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function po(e, r) {
  return bo(e) || go(e, r) || _u(e, r) || mo();
}
function mo() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _u(e, r) {
  if (e) {
    if (typeof e == "string")
      return un(e, r);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return un(e, r);
  }
}
function un(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var n = 0, t = new Array(r); n < r; n++)
    t[n] = e[n];
  return t;
}
function go(e, r) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var t = [], o = !0, f = !1, g, w;
    try {
      for (n = n.call(e); !(o = (g = n.next()).done) && (t.push(g.value), !(r && t.length === r)); o = !0)
        ;
    } catch (A) {
      f = !0, w = A;
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (f)
          throw w;
      }
    }
    return t;
  }
}
function bo(e) {
  if (Array.isArray(e))
    return e;
}
function wo(e, r) {
  if (!(e instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function an(e, r) {
  for (var n = 0; n < r.length; n++) {
    var t = r[n];
    t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t);
  }
}
function _o(e, r, n) {
  return r && an(e.prototype, r), n && an(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var ke = /* @__PURE__ */ function() {
  function e() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = n.polyfill;
    wo(this, e), typeof r == "string" && (r = [r]), this.locale = jd(r.concat(e.getDefaultLocale()), Fe), typeof Intl < "u" && Intl.NumberFormat && (this.numberFormat = new Intl.NumberFormat(this.locale)), t === !1 ? (this.IntlRelativeTimeFormat = Intl.RelativeTimeFormat, this.IntlPluralRules = Intl.PluralRules) : (this.IntlRelativeTimeFormat = Oe, this.IntlPluralRules = Oe.PluralRules), this.relativeTimeFormatCache = new Bt(), this.pluralRulesCache = new Bt();
  }
  return _o(e, [{
    key: "format",
    value: function(n, t, o) {
      o || (t && !Po(t) ? (o = t, t = void 0) : o = {}), t || (t = qr), typeof t == "string" && (t = lo(t));
      var f = vo(n), g = this.getLabels(t.flavour || t.labels), w = g.labels, A = g.labelsType, P;
      t.now !== void 0 && (P = t.now), P === void 0 && o.now !== void 0 && (P = o.now), P === void 0 && (P = Date.now());
      var U = (P - f) / 1e3, L = o.future || U < 0, B = So(w, Fe(this.locale).now, Fe(this.locale).long, L);
      if (t.custom) {
        var V = t.custom({
          now: P,
          date: new Date(f),
          time: f,
          elapsed: U,
          locale: this.locale
        });
        if (V !== void 0)
          return V;
      }
      var W = ko(
        // Controlling `style.steps` through `style.units` seems to be deprecated:
        // create a new custom `style` instead.
        t.units,
        w,
        B
      ), G = o.round || t.round, Y = Bd(
        // "gradation" is a legacy name for "steps".
        // For historical reasons, "approximate" steps are used by default.
        // In the next major version, there'll be no default for `steps`.
        t.gradation || t.steps || qr.steps,
        U,
        {
          now: P,
          units: W,
          round: G,
          future: L,
          getNextStep: !0
        }
      ), x = po(Y, 3), J = x[0], se = x[1], u = x[2], a = this.formatDateForStep(f, se, U, {
        labels: w,
        labelsType: A,
        nowLabel: B,
        now: P,
        future: L,
        round: G
      }) || "";
      if (o.getTimeToNextUpdate) {
        var d = Wd(f, se, {
          nextStep: u,
          prevStep: J,
          now: P,
          future: L,
          round: G
        });
        return [a, d];
      }
      return a;
    }
  }, {
    key: "formatDateForStep",
    value: function(n, t, o, f) {
      var g = this, w = f.labels, A = f.labelsType, P = f.nowLabel, U = f.now, L = f.future, B = f.round;
      if (t) {
        if (t.format)
          return t.format(n, this.locale, {
            formatAs: function(x, J) {
              return g.formatValue(J, x, {
                labels: w,
                future: L
              });
            },
            now: U,
            future: L
          });
        var V = t.unit || t.formatAs;
        if (!V)
          throw new Error("[javascript-time-ago] Each step must define either `formatAs` or `format()`. Step: ".concat(JSON.stringify(t)));
        if (V === "now")
          return P;
        var W = Math.abs(o) / fu(t);
        t.granularity && (W = tr(B)(W / t.granularity) * t.granularity);
        var G = -1 * Math.sign(o) * tr(B)(W);
        switch (G === 0 && (L ? G = 0 : G = -0), A) {
          case "long":
          case "short":
          case "narrow":
            return this.getFormatter(A).format(G, V);
          default:
            return this.formatValue(G, V, {
              labels: w,
              future: L
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
    value: function(n, t, o) {
      var f = o.labels, g = o.future;
      return this.getFormattingRule(f, t, n, {
        future: g
      }).replace("{0}", this.formatNumber(Math.abs(n)));
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
    value: function(n, t, o, f) {
      var g = f.future;
      if (this.locale, n = n[t], typeof n == "string")
        return n;
      var w = o === 0 ? g ? "future" : "past" : o < 0 ? "past" : "future", A = n[w] || n;
      if (typeof A == "string")
        return A;
      var P = this.getPluralRules().select(Math.abs(o));
      return A[P] || A.other;
    }
    /**
     * Formats a number into a string.
     * Uses `Intl.NumberFormat` when available.
     * @param  {number} number
     * @return {string}
     */
  }, {
    key: "formatNumber",
    value: function(n) {
      return this.numberFormat ? this.numberFormat.format(n) : String(n);
    }
    /**
     * Returns an `Intl.RelativeTimeFormat` for a given `labelsType`.
     * @param {string} labelsType
     * @return {object} `Intl.RelativeTimeFormat` instance
     */
  }, {
    key: "getFormatter",
    value: function(n) {
      return this.relativeTimeFormatCache.get(this.locale, n) || this.relativeTimeFormatCache.put(this.locale, n, new this.IntlRelativeTimeFormat(this.locale, {
        style: n
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
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      typeof n == "string" && (n = [n]), n = n.map(function(w) {
        switch (w) {
          case "tiny":
          case "mini-time":
            return "mini";
          default:
            return w;
        }
      }), n = n.concat("long");
      for (var t = Fe(this.locale), o = ho(n), f; !(f = o()).done; ) {
        var g = f.value;
        if (t[g])
          return {
            labelsType: g,
            labels: t[g]
          };
      }
    }
  }]), e;
}(), vu = "en";
ke.getDefaultLocale = function() {
  return vu;
};
ke.setDefaultLocale = function(e) {
  return vu = e;
};
ke.addDefaultLocale = function(e) {
  if (dn)
    return console.error("[javascript-time-ago] `TimeAgo.addDefaultLocale()` can only be called once. To add other locales, use `TimeAgo.addLocale()`.");
  dn = !0, ke.setDefaultLocale(e.locale), ke.addLocale(e);
};
var dn;
ke.addLocale = function(e) {
  gu(e), Oe.addLocale(e);
};
ke.locale = ke.addLocale;
ke.addLabels = function(e, r, n) {
  var t = Fe(e);
  t || (gu({
    locale: e
  }), t = Fe(e)), t[r] = n;
};
function vo(e) {
  if (e.constructor === Date || yo(e))
    return e.getTime();
  if (typeof e == "number")
    return e;
  throw new Error("Unsupported relative time formatter input: ".concat(gr(e), ", ").concat(e));
}
function yo(e) {
  return gr(e) === "object" && typeof e.getTime == "function";
}
function ko(e, r, n) {
  var t = Object.keys(r);
  return n && t.push("now"), e && (t = e.filter(function(o) {
    return o === "now" || t.indexOf(o) >= 0;
  })), t;
}
function So(e, r, n, t) {
  var o = e.now || r && r.now;
  if (o)
    return typeof o == "string" ? o : t ? o.future : o.past;
  if (n && n.second && n.second.current)
    return n.second.current;
}
function Po(e) {
  return typeof e == "string" || Id(e);
}
const Ao = {
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
ke.addLocale(Ao);
const Eo = new ke("en-US"), on = (e) => Eo.format(new Date(e)), Oo = Ba(on, (e) => {
  const r = setInterval(() => e(on), 1e3);
  return () => clearInterval(r);
});
function $o(e) {
  la(e, "svelte-d6g8tf", `.svelte-d6g8tf,.svelte-d6g8tf::before,.svelte-d6g8tf::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}.svelte-d6g8tf::before,.svelte-d6g8tf::after{--tw-content:''}:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}button.svelte-d6g8tf,input.svelte-d6g8tf{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button.svelte-d6g8tf{text-transform:none}button.svelte-d6g8tf{-webkit-appearance:button;background-color:transparent;background-image:none}.svelte-d6g8tf:-moz-focusring{outline:auto}.svelte-d6g8tf:-moz-ui-invalid{box-shadow:none}.svelte-d6g8tf::-webkit-inner-spin-button,.svelte-d6g8tf::-webkit-outer-spin-button{height:auto}.svelte-d6g8tf::-webkit-search-decoration{-webkit-appearance:none}.svelte-d6g8tf::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}input.svelte-d6g8tf::-moz-placeholder{opacity:1;color:#9ca3af}input.svelte-d6g8tf::placeholder{opacity:1;color:#9ca3af}button.svelte-d6g8tf{cursor:pointer}.svelte-d6g8tf:disabled{cursor:default}.svelte-d6g8tf,.svelte-d6g8tf::before,.svelte-d6g8tf::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position:  ;--tw-gradient-via-position:  ;--tw-gradient-to-position:  ;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.svelte-d6g8tf::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position:  ;--tw-gradient-via-position:  ;--tw-gradient-to-position:  ;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.prose-stone.svelte-d6g8tf{--tw-prose-body:#44403c;--tw-prose-headings:#1c1917;--tw-prose-lead:#57534e;--tw-prose-links:#1c1917;--tw-prose-bold:#1c1917;--tw-prose-counters:#78716c;--tw-prose-bullets:#d6d3d1;--tw-prose-hr:#e7e5e4;--tw-prose-quotes:#1c1917;--tw-prose-quote-borders:#e7e5e4;--tw-prose-captions:#78716c;--tw-prose-kbd:#1c1917;--tw-prose-kbd-shadows:28 25 23;--tw-prose-code:#1c1917;--tw-prose-pre-code:#e7e5e4;--tw-prose-pre-bg:#292524;--tw-prose-th-borders:#d6d3d1;--tw-prose-td-borders:#e7e5e4;--tw-prose-invert-body:#d6d3d1;--tw-prose-invert-headings:#fff;--tw-prose-invert-lead:#a8a29e;--tw-prose-invert-links:#fff;--tw-prose-invert-bold:#fff;--tw-prose-invert-counters:#a8a29e;--tw-prose-invert-bullets:#57534e;--tw-prose-invert-hr:#44403c;--tw-prose-invert-quotes:#f5f5f4;--tw-prose-invert-quote-borders:#44403c;--tw-prose-invert-captions:#a8a29e;--tw-prose-invert-kbd:#fff;--tw-prose-invert-kbd-shadows:255 255 255;--tw-prose-invert-code:#fff;--tw-prose-invert-pre-code:#d6d3d1;--tw-prose-invert-pre-bg:rgb(0 0 0 / 50%);--tw-prose-invert-th-borders:#57534e;--tw-prose-invert-td-borders:#44403c}.pointer-events-none.svelte-d6g8tf{pointer-events:none}.pointer-events-auto.svelte-d6g8tf{pointer-events:auto}.absolute.svelte-d6g8tf{position:absolute}.bottom-0.svelte-d6g8tf{bottom:0px}.bottom-2.svelte-d6g8tf{bottom:0.5rem}.left-0.svelte-d6g8tf{left:0px}.right-0.svelte-d6g8tf{right:0px}.right-2.svelte-d6g8tf{right:0.5rem}.top-0.svelte-d6g8tf{top:0px}.z-50.svelte-d6g8tf{z-index:50}.my-2.svelte-d6g8tf{margin-top:0.5rem;margin-bottom:0.5rem}.mb-2.svelte-d6g8tf{margin-bottom:0.5rem}.mb-4.svelte-d6g8tf{margin-bottom:1rem}.mt-2.svelte-d6g8tf{margin-top:0.5rem}.block.svelte-d6g8tf{display:block}.flex.svelte-d6g8tf{display:flex}.hidden.svelte-d6g8tf{display:none}.h-full.svelte-d6g8tf{height:100%}.w-3\\/4.svelte-d6g8tf{width:75%}.w-full.svelte-d6g8tf{width:100%}.flex-row.svelte-d6g8tf{flex-direction:row}.flex-col.svelte-d6g8tf{flex-direction:column}.items-baseline.svelte-d6g8tf{align-items:baseline}.items-stretch.svelte-d6g8tf{align-items:stretch}.justify-end.svelte-d6g8tf{justify-content:flex-end}.justify-between.svelte-d6g8tf{justify-content:space-between}.place-self-start.svelte-d6g8tf{place-self:start}.place-self-end.svelte-d6g8tf{place-self:end}.overflow-auto.svelte-d6g8tf{overflow:auto}.rounded-lg.svelte-d6g8tf{border-radius:0.5rem}.rounded-md.svelte-d6g8tf{border-radius:0.375rem}.bg-lime-200.svelte-d6g8tf{--tw-bg-opacity:1;background-color:rgb(217 249 157 / var(--tw-bg-opacity))}.bg-sky-200.svelte-d6g8tf{--tw-bg-opacity:1;background-color:rgb(186 230 253 / var(--tw-bg-opacity))}.bg-violet-100.svelte-d6g8tf{--tw-bg-opacity:1;background-color:rgb(237 233 254 / var(--tw-bg-opacity))}.bg-violet-700.svelte-d6g8tf{--tw-bg-opacity:1;background-color:rgb(109 40 217 / var(--tw-bg-opacity))}.px-1.svelte-d6g8tf{padding-left:0.25rem;padding-right:0.25rem}.px-2.svelte-d6g8tf{padding-left:0.5rem;padding-right:0.5rem}.px-4.svelte-d6g8tf{padding-left:1rem;padding-right:1rem}.py-1.svelte-d6g8tf{padding-top:0.25rem;padding-bottom:0.25rem}.py-2.svelte-d6g8tf{padding-top:0.5rem;padding-bottom:0.5rem}.text-justify.svelte-d6g8tf{text-align:justify}.text-base.svelte-d6g8tf{font-size:1rem;line-height:1.5rem}.text-lg.svelte-d6g8tf{font-size:1.125rem;line-height:1.75rem}.text-sm.svelte-d6g8tf{font-size:0.875rem;line-height:1.25rem}.text-xl.svelte-d6g8tf{font-size:1.25rem;line-height:1.75rem}.font-bold.svelte-d6g8tf{font-weight:700}.text-white.svelte-d6g8tf{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.max-w-1-3.svelte-d6g8tf{max-width:33.33%}.hover\\:bg-violet-600.svelte-d6g8tf:hover{--tw-bg-opacity:1;background-color:rgb(124 58 237 / var(--tw-bg-opacity))}`);
}
function sn(e, r, n) {
  const t = e.slice();
  return t[16] = r[n], t;
}
function Lo(e) {
  let r, n, t;
  return {
    c() {
      r = te("button"), r.textContent = "↘️", Z(r, "title", "Reduce to lateral"), Z(r, "class", "svelte-d6g8tf");
    },
    m(o, f) {
      ge(o, r, f), n || (t = qe(
        r,
        "click",
        /*click_handler_2*/
        e[12]
      ), n = !0);
    },
    p: ye,
    d(o) {
      o && me(r), n = !1, t();
    }
  };
}
function To(e) {
  let r, n, t;
  return {
    c() {
      r = te("button"), r.textContent = "↖️", Z(r, "title", "Expand full width"), Z(r, "class", "svelte-d6g8tf");
    },
    m(o, f) {
      ge(o, r, f), n || (t = qe(
        r,
        "click",
        /*click_handler_1*/
        e[11]
      ), n = !0);
    },
    p: ye,
    d(o) {
      o && me(r), n = !1, t();
    }
  };
}
function cn(e) {
  let r, n = yt(
    /*chat*/
    e[2]._.messages
  ), t = [];
  for (let o = 0; o < n.length; o += 1)
    t[o] = ln(sn(e, n, o));
  return {
    c() {
      for (let o = 0; o < t.length; o += 1)
        t[o].c();
      r = bn();
    },
    m(o, f) {
      for (let g = 0; g < t.length; g += 1)
        t[g] && t[g].m(o, f);
      ge(o, r, f);
    },
    p(o, f) {
      if (f & /*chat, mdConverter, $timeAgo*/
      388) {
        n = yt(
          /*chat*/
          o[2]._.messages
        );
        let g;
        for (g = 0; g < n.length; g += 1) {
          const w = sn(o, n, g);
          t[g] ? t[g].p(w, f) : (t[g] = ln(w), t[g].c(), t[g].m(r.parentNode, r));
        }
        for (; g < t.length; g += 1)
          t[g].d(1);
        t.length = n.length;
      }
    },
    d(o) {
      o && me(r), ma(t, o);
    }
  };
}
function fn(e) {
  let r, n, t, o, f, g = (
    /*$timeAgo*/
    e[7](
      /*message*/
      e[16].timestamp
    ) + ""
  ), w, A, P, U = (
    /*mdConverter*/
    e[8].makeHtml(
      /*message*/
      e[16].content
    ) + ""
  ), L;
  function B(G, Y) {
    return (
      /*message*/
      G[16].role == "user" ? Co : jo
    );
  }
  let V = B(e), W = V(e);
  return {
    c() {
      r = te("div"), n = te("div"), t = te("span"), W.c(), o = ve(), f = te("span"), w = Ie(g), A = ve(), P = te("div"), L = ve(), Z(t, "class", "font-bold svelte-d6g8tf"), Z(f, "class", "text-grey-500 text-sm svelte-d6g8tf"), Z(n, "class", "mb-2 flex flex-row justify-between items-baseline svelte-d6g8tf"), Z(P, "class", "prose-stone svelte-d6g8tf"), Z(r, "class", "rounded-md py-2 px-4 text-justify text-base block w-3/4 my-2 svelte-d6g8tf"), le(
        r,
        "bg-sky-200",
        /*message*/
        e[16].role == "user"
      ), le(
        r,
        "place-self-end",
        /*message*/
        e[16].role == "user"
      ), le(
        r,
        "bg-lime-200",
        /*message*/
        e[16].role == "assistant"
      ), le(
        r,
        "place-self-start",
        /*message*/
        e[16].role == "assistant"
      );
    },
    m(G, Y) {
      ge(G, r, Y), Q(r, n), Q(n, t), W.m(t, null), Q(n, o), Q(n, f), Q(f, w), Q(r, A), Q(r, P), P.innerHTML = U, Q(r, L);
    },
    p(G, Y) {
      V !== (V = B(G)) && (W.d(1), W = V(G), W && (W.c(), W.m(t, null))), Y & /*$timeAgo, chat*/
      132 && g !== (g = /*$timeAgo*/
      G[7](
        /*message*/
        G[16].timestamp
      ) + "") && Lr(w, g), Y & /*chat*/
      4 && U !== (U = /*mdConverter*/
      G[8].makeHtml(
        /*message*/
        G[16].content
      ) + "") && (P.innerHTML = U), Y & /*chat*/
      4 && le(
        r,
        "bg-sky-200",
        /*message*/
        G[16].role == "user"
      ), Y & /*chat*/
      4 && le(
        r,
        "place-self-end",
        /*message*/
        G[16].role == "user"
      ), Y & /*chat*/
      4 && le(
        r,
        "bg-lime-200",
        /*message*/
        G[16].role == "assistant"
      ), Y & /*chat*/
      4 && le(
        r,
        "place-self-start",
        /*message*/
        G[16].role == "assistant"
      );
    },
    d(G) {
      G && me(r), W.d();
    }
  };
}
function jo(e) {
  let r;
  return {
    c() {
      r = Ie("Assistant");
    },
    m(n, t) {
      ge(n, r, t);
    },
    d(n) {
      n && me(r);
    }
  };
}
function Co(e) {
  let r;
  return {
    c() {
      r = Ie("You");
    },
    m(n, t) {
      ge(n, r, t);
    },
    d(n) {
      n && me(r);
    }
  };
}
function ln(e) {
  let r, n = (
    /*message*/
    e[16].role != "system" && fn(e)
  );
  return {
    c() {
      n && n.c(), r = bn();
    },
    m(t, o) {
      n && n.m(t, o), ge(t, r, o);
    },
    p(t, o) {
      /*message*/
      t[16].role != "system" ? n ? n.p(t, o) : (n = fn(t), n.c(), n.m(r.parentNode, r)) : n && (n.d(1), n = null);
    },
    d(t) {
      t && me(r), n && n.d(t);
    }
  };
}
function hn(e) {
  let r, n, t, o, f, g, w;
  return {
    c() {
      r = te("form"), n = te("input"), o = ve(), f = te("div"), f.textContent = "The assistant makes mistakes and cannot read the documentation yet: always check important information!", n.disabled = t = /*status*/
      e[0] && /*$status*/
      e[6].slug == "running", Z(n, "class", "w-full px-2 py-1 text-lg rounded-lg bg-violet-100 svelte-d6g8tf"), Z(n, "type", "text"), Z(n, "placeholder", "What do you want help with?"), Z(r, "action", "#"), Z(r, "class", "my-2 svelte-d6g8tf"), Z(f, "class", "mt-2 text-sm text-justify svelte-d6g8tf");
    },
    m(A, P) {
      ge(A, r, P), Q(r, n), wt(
        n,
        /*text*/
        e[3]
      ), ge(A, o, P), ge(A, f, P), g || (w = [
        qe(
          n,
          "input",
          /*input_input_handler*/
          e[14]
        ),
        qe(r, "submit", ga(
          /*handleUserMessage*/
          e[9]
        ))
      ], g = !0);
    },
    p(A, P) {
      P & /*status, $status*/
      65 && t !== (t = /*status*/
      A[0] && /*$status*/
      A[6].slug == "running") && (n.disabled = t), P & /*text*/
      8 && n.value !== /*text*/
      A[3] && wt(
        n,
        /*text*/
        A[3]
      );
    },
    d(A) {
      A && (me(r), me(o), me(f)), g = !1, Ve(w);
    }
  };
}
function Io(e) {
  let r, n, t, o, f, g, w = (
    /*status*/
    (e[0] ? (
      /*$status*/
      e[6].icon
    ) : "") + ""
  ), A, P, U, L, B, V, W, G, Y, x, J = (
    /*status*/
    (e[0] ? (
      /*$status*/
      e[6].icon
    ) : "") + ""
  ), se, u, a, d, c, s, m, h, _, T, E, j;
  function C(H, D) {
    return (
      /*chatBotExpanded*/
      H[5] ? Lo : To
    );
  }
  let p = C(e), O = p(e), R = (
    /*model*/
    e[1] && /*chat*/
    e[2] && cn(e)
  ), F = (
    /*model*/
    e[1] && /*chat*/
    e[2] && hn(e)
  );
  return {
    c() {
      r = te("button"), n = te("span"), n.textContent = "✨", t = ve(), o = te("span"), o.textContent = "Need Help?", f = ve(), g = te("span"), A = Ie(w), U = ve(), L = te("div"), B = te("content"), V = te("div"), W = te("div"), G = te("span"), G.textContent = "✨ HPC Assistant", Y = ve(), x = te("span"), se = Ie(J), a = ve(), d = te("div"), O.c(), c = ve(), s = te("button"), s.textContent = "➖", m = ve(), h = te("div"), R && R.c(), _ = ve(), T = te("div"), F && F.c(), Z(n, "title", "Try our AI Assistant"), Z(n, "class", "svelte-d6g8tf"), Z(o, "class", "px-1 svelte-d6g8tf"), Z(g, "title", P = /*status*/
      e[0] ? (
        /*$status*/
        e[6].description
      ) : ""), Z(g, "class", "svelte-d6g8tf"), Z(r, "class", "absolute bottom-2 right-2 py-2 px-4 bg-violet-700 hover:bg-violet-600 font-bold text-lg text-white rounded-lg svelte-d6g8tf"), le(
        r,
        "hidden",
        /*chatBotOpen*/
        e[4]
      ), Z(G, "class", "svelte-d6g8tf"), Z(x, "title", u = /*status*/
      e[0] ? (
        /*$status*/
        e[6].description
      ) : ""), Z(x, "class", "svelte-d6g8tf"), Z(W, "class", "svelte-d6g8tf"), Z(s, "title", "Minify the assistant"), Z(s, "class", "svelte-d6g8tf"), Z(d, "class", "svelte-d6g8tf"), Z(V, "class", "mb-4 font-bold text-xl flex flex-row items-stretch justify-between svelte-d6g8tf"), Z(h, "class", "overflow-auto flex flex-col items-stretch svelte-d6g8tf"), Z(T, "class", "svelte-d6g8tf"), Z(B, "class", "bg-violet-100 text-base rounded-md h-full px-4 py-2 z-50 pointer-events-auto flex flex-col items-stretch justify-between svelte-d6g8tf"), le(
        B,
        "w-full",
        /*chatBotExpanded*/
        e[5]
      ), le(B, "max-w-1-3", !/*chatBotExpanded*/
      e[5]), Z(L, "class", "absolute bottom-0 right-0 top-0 left-0 px-2 py-2 w-full h-full flex flex-row justify-end pointer-events-none svelte-d6g8tf"), le(L, "hidden", !/*chatBotOpen*/
      e[4]);
    },
    m(H, D) {
      ge(H, r, D), Q(r, n), Q(r, t), Q(r, o), Q(r, f), Q(r, g), Q(g, A), ge(H, U, D), ge(H, L, D), Q(L, B), Q(B, V), Q(V, W), Q(W, G), Q(W, Y), Q(W, x), Q(x, se), Q(V, a), Q(V, d), O.m(d, null), Q(d, c), Q(d, s), Q(B, m), Q(B, h), R && R.m(h, null), Q(B, _), Q(B, T), F && F.m(T, null), E || (j = [
        qe(
          r,
          "click",
          /*click_handler*/
          e[10]
        ),
        qe(
          s,
          "click",
          /*click_handler_3*/
          e[13]
        )
      ], E = !0);
    },
    p(H, [D]) {
      D & /*status, $status*/
      65 && w !== (w = /*status*/
      (H[0] ? (
        /*$status*/
        H[6].icon
      ) : "") + "") && Lr(A, w), D & /*status, $status*/
      65 && P !== (P = /*status*/
      H[0] ? (
        /*$status*/
        H[6].description
      ) : "") && Z(g, "title", P), D & /*chatBotOpen*/
      16 && le(
        r,
        "hidden",
        /*chatBotOpen*/
        H[4]
      ), D & /*status, $status*/
      65 && J !== (J = /*status*/
      (H[0] ? (
        /*$status*/
        H[6].icon
      ) : "") + "") && Lr(se, J), D & /*status, $status*/
      65 && u !== (u = /*status*/
      H[0] ? (
        /*$status*/
        H[6].description
      ) : "") && Z(x, "title", u), p === (p = C(H)) && O ? O.p(H, D) : (O.d(1), O = p(H), O && (O.c(), O.m(d, c))), /*model*/
      H[1] && /*chat*/
      H[2] ? R ? R.p(H, D) : (R = cn(H), R.c(), R.m(h, null)) : R && (R.d(1), R = null), /*model*/
      H[1] && /*chat*/
      H[2] ? F ? F.p(H, D) : (F = hn(H), F.c(), F.m(T, null)) : F && (F.d(1), F = null), D & /*chatBotExpanded*/
      32 && le(
        B,
        "w-full",
        /*chatBotExpanded*/
        H[5]
      ), D & /*chatBotExpanded*/
      32 && le(B, "max-w-1-3", !/*chatBotExpanded*/
      H[5]), D & /*chatBotOpen*/
      16 && le(L, "hidden", !/*chatBotOpen*/
      H[4]);
    },
    i: ye,
    o: ye,
    d(H) {
      H && (me(r), me(U), me(L)), O.d(), R && R.d(), F && F.d(), E = !1, Ve(j);
    }
  };
}
function Mo(e, r, n) {
  let t, o = ye, f = () => (o(), o = Kr(P, (a) => n(6, t = a)), P), g;
  fa(e, Oo, (a) => n(7, g = a)), e.$$.on_destroy.push(() => o());
  const w = new za.Converter();
  let A, P, U, L;
  va(async () => {
    const a = `${window.location.protocol}//${window.location.hostname}:${window.location.port}`;
    A = new Da(a), f(n(0, P = A.status)), n(1, U = await A.getBestModel(At.modelList)), U && (await A.preloadModel(U), n(2, L = new nd(() => n(2, L), A)), L.addMessage(At.systemPrompt));
  });
  let B, V = !1, W = !1;
  async function G() {
    L.addMessage({ role: "user", content: B }), n(3, B = ""), await L.complete(U);
  }
  const Y = () => n(4, V = !0), x = () => n(5, W = !0), J = () => n(5, W = !1), se = () => n(4, V = !1);
  function u() {
    B = this.value, n(3, B);
  }
  return [
    P,
    U,
    L,
    B,
    V,
    W,
    t,
    g,
    w,
    G,
    Y,
    x,
    J,
    se,
    u
  ];
}
class zo extends Ca {
  constructor(r) {
    super(), Ta(this, r, Mo, Io, gn, {}, $o);
  }
}
customElements.define("hpc-chatbot", ja(zo, {}, [], [], !0));
export {
  zo as ChatBot
};
//# sourceMappingURL=components.js.map
