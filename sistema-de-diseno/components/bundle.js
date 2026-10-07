/* @ds-bundle: {"format":4,"namespace":"SightDesignSystem_3d4cc7","components":[{"name":"Callout","sourcePath":"components/content/Callout.jsx"},{"name":"DiagnosisTrack","sourcePath":"components/content/DiagnosisTrack.jsx"},{"name":"Highlight","sourcePath":"components/content/Highlight.jsx"},{"name":"PhotoFrame","sourcePath":"components/content/PhotoFrame.jsx"},{"name":"Quote","sourcePath":"components/content/Quote.jsx"},{"name":"SectionHeading","sourcePath":"components/content/SectionHeading.jsx"},{"name":"StatBlock","sourcePath":"components/content/StatBlock.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"EyeMark","sourcePath":"components/core/EyeMark.jsx"},{"name":"Marquee","sourcePath":"components/core/Marquee.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Wordmark","sourcePath":"components/core/Wordmark.jsx"},{"name":"BarChart","sourcePath":"components/data/BarChart.jsx"},{"name":"LayerStack","sourcePath":"components/data/LayerStack.jsx"},{"name":"NestedScale","sourcePath":"components/data/NestedScale.jsx"},{"name":"RingStat","sourcePath":"components/data/RingStat.jsx"},{"name":"SpokeDiagram","sourcePath":"components/data/SpokeDiagram.jsx"},{"name":"TrendLine","sourcePath":"components/data/TrendLine.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"AuraField","sourcePath":"components/layout/AuraField.jsx"},{"name":"Card","sourcePath":"components/layout/Card.jsx"},{"name":"ColorBlock","sourcePath":"components/layout/ColorBlock.jsx"},{"name":"ShapeMark","sourcePath":"components/layout/ShapeMark.jsx"},{"name":"StickyNote","sourcePath":"components/layout/StickyNote.jsx"}],"sourceHashes":{"components/content/Callout.jsx":"b47b677ad4da","components/content/DiagnosisTrack.jsx":"3e8d9545757e","components/content/Highlight.jsx":"77360049f2b5","components/content/PhotoFrame.jsx":"df7130e278ed","components/content/Quote.jsx":"d9f7f9b24b2a","components/content/SectionHeading.jsx":"902aa8a11442","components/content/StatBlock.jsx":"c2f0621c9caa","components/core/Badge.jsx":"175f6b090de5","components/core/Button.jsx":"cc45107239e0","components/core/Divider.jsx":"61ae0a106702","components/core/EyeMark.jsx":"e548821f9aba","components/core/Marquee.jsx":"ddc498c3704f","components/core/Tag.jsx":"8ab97f64a012","components/core/Wordmark.jsx":"068cbf5d7a42","components/data/BarChart.jsx":"2a6b3f585c0e","components/data/LayerStack.jsx":"bca447f71c33","components/data/NestedScale.jsx":"0f76cdcfa434","components/data/RingStat.jsx":"6fe177a764ed","components/data/SpokeDiagram.jsx":"f0fe1ad114d6","components/data/TrendLine.jsx":"f0c775f99296","components/forms/Checkbox.jsx":"f5e5325ead95","components/forms/Field.jsx":"527f4d6c231d","components/forms/Input.jsx":"09e3b95f3c65","components/forms/Select.jsx":"18af8e88c351","components/forms/Switch.jsx":"6db8610b4069","components/layout/AuraField.jsx":"1dab2db71e99","components/layout/Card.jsx":"ff8d333d2419","components/layout/ColorBlock.jsx":"4ca9b91e3c15","components/layout/ShapeMark.jsx":"9155fd1c65bd","components/layout/StickyNote.jsx":"cf746ac62b10","ui_kits/dashboard/Dashboard.jsx":"6662753e314c","ui_kits/dashboard/FocusChart.jsx":"dd9c568c745a","ui_kits/website/CaseStudy.jsx":"528423e7663e","ui_kits/website/Chrome.jsx":"7d0a37473a54","ui_kits/website/Contact.jsx":"35ec9a120e1d","ui_kits/website/Home.jsx":"ccd2672fa815","ui_kits/website/Method.jsx":"0d8b63b29802"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SightDesignSystem_3d4cc7 = window.SightDesignSystem_3d4cc7 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  lime: {
    bar: 'var(--light-lime)',
    bg: 'transparent'
  },
  pink: {
    bar: 'var(--pink-paradise)',
    bg: 'transparent'
  },
  cool: {
    bar: 'var(--salt-air)',
    bg: 'transparent'
  },
  filled: {
    bar: 'var(--pink-paradise)',
    bg: 'var(--surface-sunken)'
  }
};
function Callout({
  tone = 'lime',
  label,
  children,
  style,
  ...rest
}) {
  const t = tones[tone];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderLeft: `var(--border-rule) solid ${t.bar}`,
      background: t.bg,
      padding: 'var(--space-1) 0 var(--space-1) var(--space-5)',
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("strong", {
    style: {
      font: 'var(--fw-semibold) var(--fs-body)/var(--lh-body) var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, label, " "), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body)',
      color: 'var(--text-body)'
    }
  }, children));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Callout.jsx", error: String((e && e.message) || e) }); }

// components/content/DiagnosisTrack.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DEFAULT_TONES = ['var(--salmon)', 'var(--pink-paradise)', 'var(--deep-blue-gray)', 'var(--light-lime)'];
function DiagnosisTrack({
  steps = [],
  orientation = 'horizontal',
  style,
  ...rest
}) {
  const horiz = orientation === 'horizontal';
  return /*#__PURE__*/React.createElement("ol", _extends({
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'grid',
      gap: 'var(--space-1)',
      gridTemplateColumns: horiz ? `repeat(${steps.length},minmax(0,1fr))` : 'minmax(0,1fr)',
      ...style
    }
  }, rest), steps.map((s, i) => {
    const bg = s.color || DEFAULT_TONES[i % DEFAULT_TONES.length];
    const light = bg === 'var(--light-lime)' || bg === 'var(--salt-air)';
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        background: bg,
        color: light ? 'var(--deep-blue-gray)' : 'var(--white)',
        padding: 'var(--space-5)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)',
        minHeight: 160
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-eyebrow)',
        letterSpacing: 'var(--tracking-caps)',
        textTransform: 'uppercase',
        opacity: 0.8
      }
    }, "0", i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--fw-semibold) var(--fs-ui-lg)/1.15 var(--font-sans)',
        letterSpacing: 'var(--tracking)'
      }
    }, s.title), s.body && /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--fw-light) var(--fs-ui)/1.4 var(--font-sans)'
      }
    }, s.body));
  }));
}
Object.assign(__ds_scope, { DiagnosisTrack });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/DiagnosisTrack.jsx", error: String((e && e.message) || e) }); }

// components/content/Highlight.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Resaltado de marcador. El manual construye la paleta desde los post-its y marcadores de
   sesión de trabajo, y los titulares del sitio y de exterior resaltan la palabra clave
   con un bloque plano de color (p.38, p.42). Una palabra o dos, nunca una frase entera. */
const TONES = {
  lime: {
    background: 'var(--light-lime)',
    color: 'var(--deep-blue-gray)'
  },
  pink: {
    background: 'var(--pink-paradise)',
    color: 'var(--text-on-accent)'
  },
  salmon: {
    background: 'var(--salmon)',
    color: 'var(--deep-blue-gray)'
  },
  cool: {
    background: 'var(--salt-air)',
    color: 'var(--deep-blue-gray)'
  }
};
function Highlight({
  tone = 'lime',
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("mark", _extends({
    style: {
      ...TONES[tone],
      padding: '0.02em 0.14em 0.08em',
      borderRadius: 'var(--radius-none)',
      boxDecorationBreak: 'clone',
      WebkitBoxDecorationBreak: 'clone',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Highlight });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Highlight.jsx", error: String((e && e.message) || e) }); }

// components/content/PhotoFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Imagen de marca. Toda fotografía real va en el duotono de la casa:
   sombra #721f34 → luz #ade6e6 (tokens --duotone-shadow / --duotone-light).
   Mapa de degradado real (feComponentTransfer sobre la luminancia), no una capa
   gris: los medios tonos quedan en vino-turquesa saturado como en el ejemplo.
   Encuadre a sangre, esquina recta, sin sombra. Sin `src`, marcador rayado. */
const RAMPS = {
  duotone: {
    id: 'sight-duo-house',
    r: [0.32, 0.447, 0.678],
    g: [0.075, 0.122, 0.902],
    b: [0.13, 0.204, 0.902]
  },
  'duotone-pink': {
    id: 'sight-duo-pink',
    r: [0.259, 1],
    g: [0.055, 0.78],
    b: [0.133, 0.78]
  },
  'duotone-lime': {
    id: 'sight-duo-lime',
    r: [0.184, 0.886],
    g: [0.204, 0.980],
    b: [0.251, 0.514]
  },
  'duotone-cool': {
    id: 'sight-duo-cool',
    r: [0.184, 0.812],
    g: [0.204, 1],
    b: [0.251, 0.992]
  }
};
const LUMA = '0.2126 0.7152 0.0722 0 0  0.2126 0.7152 0.0722 0 0  0.2126 0.7152 0.0722 0 0  0 0 0 1 0';
function Ramp({
  ramp
}) {
  return /*#__PURE__*/React.createElement("svg", {
    "aria-hidden": "true",
    width: "0",
    height: "0",
    style: {
      position: 'absolute'
    },
    focusable: "false"
  }, /*#__PURE__*/React.createElement("filter", {
    id: ramp.id,
    colorInterpolationFilters: "sRGB"
  }, /*#__PURE__*/React.createElement("feColorMatrix", {
    type: "matrix",
    values: LUMA
  }), /*#__PURE__*/React.createElement("feComponentTransfer", null, /*#__PURE__*/React.createElement("feFuncR", {
    type: "table",
    tableValues: ramp.r.join(' ')
  }), /*#__PURE__*/React.createElement("feFuncG", {
    type: "table",
    tableValues: ramp.g.join(' ')
  }), /*#__PURE__*/React.createElement("feFuncB", {
    type: "table",
    tableValues: ramp.b.join(' ')
  }))));
}
function PhotoFrame({
  src,
  alt = '',
  treatment = 'duotone',
  ratio = '4 / 3',
  label = 'fotografía',
  style,
  ...rest
}) {
  const ramp = RAMPS[treatment];
  const stripes = 'repeating-linear-gradient(135deg,var(--ink-050) 0 10px,var(--surface-page) 10px 20px)';
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      position: 'relative',
      aspectRatio: ratio,
      overflow: 'hidden',
      background: src ? ramp ? 'var(--duotone-shadow)' : 'var(--surface-dark)' : stripes,
      borderRadius: 'var(--radius-none)',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement(React.Fragment, null, ramp && /*#__PURE__*/React.createElement(Ramp, {
    ramp: ramp
  }), /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      filter: ramp ? `contrast(1.2) brightness(0.96) url(#${ramp.id})` : 'grayscale(1) contrast(1.06)'
    }
  })) : /*#__PURE__*/React.createElement("figcaption", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: 'var(--fw-regular) var(--fs-micro)/1.3 ui-monospace,SFMono-Regular,Menlo,monospace',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      textAlign: 'center',
      padding: 'var(--space-4)'
    }
  }, label));
}
Object.assign(__ds_scope, { PhotoFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PhotoFrame.jsx", error: String((e && e.message) || e) }); }

// components/content/Quote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Quote({
  attribution,
  role,
  color,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      maxWidth: 'var(--measure-tight)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      font: 'var(--fw-light) var(--fs-subtitle)/1.25 var(--font-sans)',
      letterSpacing: 'var(--tracking)',
      color: color || 'var(--text-strong)',
      textWrap: 'pretty'
    }
  }, children), attribution && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 'var(--space-5)',
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-accent)',
      fontWeight: 'var(--fw-semibold)'
    }
  }, attribution), role ? ` — ${role}` : ''));
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Quote.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const levels = {
  display: {
    font: 'var(--type-display)',
    letterSpacing: 'var(--tracking)'
  },
  title: {
    font: 'var(--type-title)',
    letterSpacing: 'var(--tracking)'
  },
  subtitle: {
    font: 'var(--type-subtitle)',
    letterSpacing: 'var(--tracking)'
  }
};
function SectionHeading({
  level = 'title',
  eyebrow,
  children,
  color,
  align = 'left',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-accent)',
      marginBottom: 'var(--space-3)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      color: color || 'var(--text-strong)',
      textWrap: 'pretty',
      ...levels[level]
    }
  }, children));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/content/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatBlock({
  value,
  label,
  note,
  color,
  align = 'left',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-semibold) var(--fs-display)/1 var(--font-sans)',
      letterSpacing: 'var(--tracking-tight)',
      color: color || 'var(--text-accent)'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)',
      font: 'var(--fw-medium) var(--fs-ui-lg)/1.25 var(--font-sans)',
      letterSpacing: 'var(--tracking)',
      color: 'var(--text-strong)'
    }
  }, label), note && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-2)',
      font: 'var(--type-caption)',
      color: 'var(--text-muted)',
      maxWidth: '32ch'
    }
  }, note));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const dots = {
  positive: 'var(--state-positive)',
  attention: 'var(--state-attention)',
  critical: 'var(--state-critical)',
  neutral: 'var(--state-neutral)'
};
function Badge({
  state = 'neutral',
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      font: 'var(--fw-semibold) var(--fs-micro)/1 var(--font-sans)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 'var(--radius-pill)',
      background: dots[state],
      flex: '0 0 auto'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  font: 'var(--fw-semibold) var(--fs-ui)/1 var(--font-sans)',
  letterSpacing: 'var(--tracking-micro)',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--space-2)',
  border: 'var(--border-thin) solid transparent',
  borderRadius: 'var(--radius-pill)',
  cursor: 'pointer',
  transition: 'var(--motion-hover)',
  textDecoration: 'none',
  whiteSpace: 'nowrap'
};
const sizes = {
  sm: {
    padding: '8px 16px',
    fontSize: 'var(--fs-ui-sm)'
  },
  md: {
    padding: '12px 24px',
    fontSize: 'var(--fs-ui)'
  },
  lg: {
    padding: '16px 32px',
    fontSize: 'var(--fs-ui-lg)'
  }
};
const variants = {
  primary: {
    background: 'var(--surface-accent)',
    color: 'var(--text-on-accent)'
  },
  secondary: {
    background: 'var(--surface-dark)',
    color: 'var(--text-on-dark)'
  },
  lime: {
    background: 'var(--surface-highlight)',
    color: 'var(--text-on-lime)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--text-strong)',
    borderColor: 'var(--border-strong)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-accent)'
  }
};
const hovers = {
  primary: {
    background: 'var(--pink-600)'
  },
  secondary: {
    background: 'var(--ink-700)'
  },
  lime: {
    background: 'var(--lime-300)'
  },
  outline: {
    background: 'var(--surface-dark)',
    color: 'var(--text-on-dark)'
  },
  ghost: {
    background: 'var(--surface-accent-soft)'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  href,
  icon,
  iconAfter,
  children,
  onClick,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const [p, setP] = React.useState(false);
  const Tag = href ? 'a' : 'button';
  const s = {
    ...base,
    ...sizes[size],
    ...variants[variant],
    ...(h && !disabled ? hovers[variant] : null),
    opacity: disabled ? 0.4 : 1,
    pointerEvents: disabled ? 'none' : 'auto',
    transform: p ? 'translateY(1px)' : 'none',
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: onClick,
    disabled: !href && disabled,
    style: s,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setP(false);
    },
    onMouseDown: () => setP(true),
    onMouseUp: () => setP(false)
  }, rest), icon, children, iconAfter);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Divider({
  tone = 'hairline',
  thickness,
  style,
  ...rest
}) {
  const c = {
    hairline: 'var(--border-hairline)',
    strong: 'var(--border-strong)',
    accent: 'var(--border-accent)',
    lime: 'var(--light-lime)'
  }[tone];
  return /*#__PURE__*/React.createElement("hr", _extends({
    style: {
      border: 0,
      height: thickness ?? (tone === 'hairline' ? 1 : 2),
      background: c,
      margin: 0,
      width: '100%',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/EyeMark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Símbolo de Sight: el ojo integrado en la "g" del logotipo, aislado (manual p.20).
   Calado con fill-rule="evenodd" — el iris deja ver la superficie de abajo. */
const VIEWBOX = '0 0 300 308';
const PATH = 'M139.0 -0.5L137.0 1.5L134.0 1.5L133.0 2.5L126.0 2.5L125.0 3.5L118.0 3.5L113.0 6.5L110.0 6.5L109.0 7.5L105.0 7.5L104.0 8.5L102.0 8.5L99.0 10.5L96.0 10.5L95.0 11.5L92.0 12.5L90.0 14.5L88.0 14.5L87.0 15.5L86.0 15.5L85.0 16.5L78.0 19.5L76.0 21.5L73.0 22.5L71.0 24.5L70.0 24.5L68.0 26.5L67.0 26.5L60.0 32.5L59.0 32.5L54.0 37.5L53.0 37.5L40.5 50.0L40.5 51.0L34.5 57.0L34.5 58.0L30.5 62.0L29.5 65.0L26.5 68.0L25.5 71.0L22.5 74.0L22.5 76.0L19.5 80.0L17.5 86.0L14.5 89.0L14.5 92.0L11.5 97.0L11.5 100.0L10.5 101.0L10.5 103.0L7.5 108.0L7.5 111.0L6.5 112.0L6.5 117.0L5.5 118.0L5.5 120.0L4.5 121.0L4.5 125.0L3.5 126.0L3.5 136.0L2.5 137.0L2.5 152.0L1.5 153.0L1.5 154.0L2.5 155.0L2.5 169.0L3.5 170.0L3.5 181.0L4.5 182.0L4.5 185.0L5.5 186.0L5.5 189.0L6.5 190.0L6.5 194.0L7.5 195.0L7.5 199.0L10.5 203.0L10.5 206.0L11.5 207.0L11.5 209.0L14.5 214.0L14.5 217.0L15.5 218.0L15.5 219.0L18.5 222.0L18.5 224.0L19.5 225.0L19.5 226.0L20.5 227.0L23.5 234.0L26.5 237.0L26.5 238.0L28.5 240.0L29.5 243.0L33.5 247.0L33.5 248.0L37.5 252.0L37.5 253.0L39.0 254.5L40.0 254.5L40.5 256.0L54.0 269.5L55.0 269.5L58.0 273.5L59.0 273.5L62.0 276.5L65.0 277.5L69.0 281.5L72.0 282.5L74.0 284.5L77.0 285.5L79.0 287.5L80.0 287.5L89.0 292.5L91.0 292.5L95.0 295.5L97.0 295.5L98.0 296.5L101.0 296.5L102.0 297.5L103.0 297.5L104.0 298.5L106.0 298.5L107.0 299.5L111.0 299.5L112.0 300.5L115.0 300.5L116.0 301.5L117.0 301.5L118.0 302.5L120.0 302.5L121.0 303.5L128.0 303.5L129.0 304.5L140.0 304.5L141.0 305.5L158.0 305.5L159.0 304.5L170.0 304.5L171.0 303.5L179.0 303.5L184.0 300.5L187.0 300.5L188.0 299.5L193.0 299.5L196.0 297.5L198.0 297.5L199.0 296.5L202.0 296.5L208.0 292.5L213.0 291.5L215.0 289.5L216.0 289.5L217.0 288.5L219.0 288.5L222.0 285.5L223.0 285.5L224.0 284.5L227.0 283.5L229.0 281.5L232.0 280.5L236.0 276.5L237.0 276.5L240.0 273.5L241.0 273.5L246.0 268.5L247.0 268.5L247.5 267.0L249.0 266.5L257.5 258.0L257.5 257.0L264.5 250.0L264.5 249.0L268.5 245.0L269.5 242.0L272.5 239.0L273.5 236.0L276.5 233.0L276.5 232.0L280.5 225.0L280.5 223.0L283.5 220.0L283.5 219.0L284.5 218.0L284.5 215.0L287.5 210.0L287.5 208.0L288.5 207.0L288.5 204.0L291.5 200.0L291.5 197.0L292.5 196.0L292.5 192.0L293.5 191.0L293.5 188.0L294.5 187.0L294.5 184.0L295.5 183.0L295.5 174.0L296.5 173.0L296.5 166.0L297.5 165.0L297.5 162.0L299.5 159.0L299.5 147.0L297.5 145.0L297.5 142.0L296.5 141.0L296.5 134.0L295.5 133.0L295.5 123.0L294.5 122.0L294.5 119.0L293.5 118.0L293.5 116.0L292.5 115.0L292.5 111.0L291.5 110.0L291.5 107.0L288.5 102.0L288.5 100.0L287.5 99.0L287.5 96.0L284.5 91.0L284.5 89.0L281.5 85.0L281.5 84.0L280.5 83.0L280.5 81.0L276.5 75.0L276.5 73.0L272.5 69.0L271.5 66.0L269.5 64.0L269.5 63.0L265.5 59.0L265.5 58.0L262.5 55.0L262.5 54.0L253.5 45.0L253.5 44.0L252.0 42.5L251.0 42.5L245.0 36.5L244.0 36.5L243.5 35.0L242.0 33.5L241.0 33.5L238.0 30.5L237.0 30.5L233.0 26.5L232.0 26.5L228.0 23.5L225.0 22.5L222.0 19.5L221.0 19.5L220.0 18.5L218.0 18.5L214.0 15.5L209.0 14.5L206.0 11.5L204.0 11.5L203.0 10.5L200.0 10.5L195.0 7.5L191.0 7.5L190.0 6.5L187.0 6.5L186.0 5.5L185.0 5.5L184.0 4.5L182.0 4.5L181.0 3.5L175.0 3.5L174.0 2.5L167.0 2.5L166.0 1.5L163.0 1.5L160.0 -0.5L140.0 -0.5ZM139.5 65.0L140.0 64.5L160.0 64.5L161.0 65.5L163.0 65.5L164.0 66.5L166.0 66.5L167.0 67.5L171.0 67.5L172.0 68.5L175.0 68.5L176.0 69.5L178.0 69.5L181.0 71.5L184.0 71.5L187.0 74.5L188.0 74.5L189.0 75.5L192.0 76.5L194.0 78.5L197.0 79.5L201.0 83.5L202.0 83.5L206.0 87.5L207.0 87.5L208.5 89.0L208.5 90.0L215.5 97.0L216.5 100.0L219.5 103.0L220.5 106.0L223.5 109.0L223.5 111.0L227.5 118.0L227.5 121.0L230.5 125.0L230.5 128.0L231.5 129.0L231.5 134.0L232.5 135.0L232.5 139.0L233.5 140.0L233.5 146.0L234.5 147.0L234.5 159.0L233.5 160.0L233.5 167.0L232.5 168.0L232.5 171.0L231.5 172.0L231.5 178.0L230.5 179.0L230.5 181.0L227.5 185.0L227.5 188.0L226.5 189.0L226.5 191.0L224.5 193.0L224.5 194.0L223.5 195.0L223.5 197.0L222.5 198.0L222.5 199.0L219.5 202.0L218.5 205.0L215.5 208.0L215.5 209.0L208.5 216.0L208.5 217.0L206.0 219.5L205.0 219.5L201.0 223.5L200.0 223.5L196.0 227.5L195.0 227.5L191.0 230.5L186.0 232.5L184.0 234.5L183.0 234.5L182.0 235.5L179.0 235.5L174.0 238.5L170.0 238.5L169.0 239.5L164.0 239.5L163.0 240.5L160.0 240.5L159.0 241.5L153.0 241.5L152.0 242.5L147.0 242.5L146.0 241.5L140.0 241.5L139.0 240.5L137.0 240.5L136.0 239.5L131.0 239.5L130.0 238.5L126.0 238.5L125.0 237.5L123.0 237.5L120.0 235.5L117.0 235.5L116.0 234.5L115.0 234.5L112.0 231.5L110.0 231.5L106.0 228.5L103.0 227.5L101.5 226.0L101.0 224.5L98.0 223.5L86.5 212.0L86.5 211.0L79.5 203.0L79.5 201.0L76.5 198.0L76.5 197.0L74.5 194.0L74.5 192.0L72.5 190.0L72.5 188.0L71.5 187.0L71.5 184.0L68.5 180.0L68.5 177.0L67.5 176.0L67.5 170.0L66.5 169.0L66.5 164.0L65.5 163.0L65.5 143.0L66.5 142.0L66.5 137.0L67.5 136.0L67.5 130.0L68.5 129.0L68.5 127.0L71.5 122.0L71.5 119.0L75.5 112.0L75.5 110.0L78.5 107.0L80.5 102.0L87.5 94.0L87.5 93.0L94.0 86.5L95.0 86.5L104.0 78.5L105.0 78.5L109.0 75.5L111.0 75.5L114.0 72.5L115.0 72.5L116.0 71.5L118.0 71.5L119.0 70.5L121.0 70.5L124.0 68.5L127.0 68.5L128.0 67.5L132.0 67.5L133.0 66.5L135.0 66.5L136.0 65.5L139.0 65.5ZM142.0 116.5L141.0 117.5L137.0 117.5L135.0 119.5L130.0 121.5L127.0 124.5L126.0 124.5L120.5 130.0L120.5 131.0L117.5 134.0L117.5 136.0L113.5 142.0L113.5 148.0L112.5 149.0L112.5 157.0L113.5 158.0L113.5 164.0L116.5 168.0L116.5 169.0L117.5 170.0L117.5 172.0L119.5 174.0L119.5 175.0L128.0 183.5L129.0 183.5L131.0 185.5L133.0 185.5L139.0 189.5L144.0 189.5L145.0 190.5L154.0 190.5L155.0 189.5L161.0 189.5L163.0 187.5L164.0 187.5L167.0 185.5L169.0 185.5L172.0 182.5L173.0 182.5L176.0 178.5L177.0 178.5L178.5 177.0L178.5 176.0L181.5 173.0L181.5 171.0L185.5 165.0L185.5 161.0L186.5 160.0L186.5 146.0L185.5 145.0L185.5 143.0L184.0 141.5L183.0 141.5L181.5 143.0L180.0 146.5L179.0 146.5L177.0 148.5L176.0 148.5L172.0 151.5L163.0 151.5L159.0 148.5L156.0 147.5L154.5 146.0L154.5 145.0L153.0 144.5L151.5 143.0L149.5 133.0L150.5 132.0L150.5 128.0L151.5 127.0L151.5 125.0L157.5 119.0L155.0 116.5L143.0 116.5Z';
const TONES = {
  ink: 'var(--deep-blue-gray)',
  pink: 'var(--pink-paradise)',
  lime: 'var(--light-lime)',
  paper: 'var(--paper)'
};
function EyeMark({
  size = 32,
  tone = 'ink',
  color,
  style,
  ...rest
}) {
  const fill = color || TONES[tone] || TONES.ink;
  return /*#__PURE__*/React.createElement("svg", _extends({
    role: "img",
    "aria-label": "S\xEDmbolo de sight",
    viewBox: VIEWBOX,
    width: size,
    height: size * 1.0253,
    fill: fill,
    style: {
      display: 'block',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: PATH
  }));
}
Object.assign(__ds_scope, { EyeMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/EyeMark.jsx", error: String((e && e.message) || e) }); }

// components/core/Marquee.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Banda corrida de la marca: cita directa de la tira lime del sitio (manual p.42).
   Una sola línea, minúsculas, separador de punto medio. Respeta prefers-reduced-motion. */
const TONES = {
  lime: {
    background: 'var(--surface-highlight)',
    color: 'var(--text-on-lime)'
  },
  pink: {
    background: 'var(--surface-accent)',
    color: 'var(--text-on-accent)'
  },
  dark: {
    background: 'var(--surface-dark)',
    color: 'var(--text-on-dark)'
  },
  cool: {
    background: 'var(--surface-cool)',
    color: 'var(--text-strong)'
  }
};
const KEYFRAMES = '@keyframes sight-marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}@media (prefers-reduced-motion:reduce){.sight-marquee-track{animation:none!important}}';
function Marquee({
  items = [],
  tone = 'lime',
  speed = 32,
  size = 'var(--fs-ui-lg)',
  style,
  ...rest
}) {
  const run = [...items, ...items, ...items, ...items];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      overflow: 'hidden',
      background: TONES[tone].background,
      color: TONES[tone].color,
      padding: 'var(--space-3) 0',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("style", null, KEYFRAMES), /*#__PURE__*/React.createElement("div", {
    className: "sight-marquee-track",
    style: {
      display: 'flex',
      width: 'max-content',
      animation: `sight-marquee ${speed}s linear infinite`
    }
  }, run.concat(run).map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      font: `var(--fw-light) ${size}/1 var(--font-body)`,
      letterSpacing: 'var(--tracking)',
      paddingRight: 'var(--space-4)',
      whiteSpace: 'nowrap'
    }
  }, t, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      opacity: 0.55
    }
  }, "\xB7")))));
}
Object.assign(__ds_scope, { Marquee });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Marquee.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  lime: {
    background: 'var(--surface-highlight)',
    color: 'var(--text-on-lime)'
  },
  pink: {
    background: 'var(--surface-accent)',
    color: 'var(--text-on-accent)'
  },
  salmon: {
    background: 'var(--salmon)',
    color: 'var(--white)'
  },
  cool: {
    background: 'var(--surface-cool)',
    color: 'var(--text-strong)'
  },
  dark: {
    background: 'var(--surface-dark)',
    color: 'var(--text-on-dark)'
  },
  quiet: {
    background: 'transparent',
    color: 'var(--text-muted)',
    boxShadow: 'inset 0 0 0 1px var(--border-hairline)'
  }
};
function Tag({
  tone = 'lime',
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '6px 12px',
      borderRadius: 'var(--radius-pill)',
      font: 'var(--fw-medium) var(--fs-ui-sm)/1 var(--font-sans)',
      letterSpacing: 'var(--tracking-micro)',
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Logotipo oficial de Sight, vectorizado del "Manual de marca SIGHT" (p.20–25).
   Un solo trazado con fill-rule="evenodd": el ojo de la "g" queda calado, de modo que
   el logotipo se puede poner sobre cualquier superficie sin arrastrar un fondo blanco. */
const VIEWBOX = '0 0 1000 536';
const PATH = 'M215.0 0.5L213.5 2.0L214.0 61.5L278.0 61.5L279.5 60.0L279.5 2.0L278.0 0.5L216.0 0.5ZM611.0 0.5L609.5 3.0L609.5 361.0L611.0 362.5L675.5 362.0L675.5 208.0L676.5 207.0L676.5 201.0L677.5 200.0L677.5 194.0L679.5 189.0L679.5 185.0L681.5 182.0L681.5 179.0L684.5 174.0L685.5 170.0L690.5 163.0L699.0 154.5L712.0 147.5L715.0 147.5L718.0 145.5L724.0 145.5L725.0 144.5L742.0 144.5L743.0 145.5L749.0 145.5L752.0 147.5L755.0 147.5L757.0 149.5L759.0 149.5L765.0 153.5L771.5 160.0L775.5 166.0L780.5 177.0L780.5 180.0L782.5 184.0L782.5 189.0L783.5 190.0L783.5 194.0L784.5 195.0L784.5 205.0L785.5 206.0L785.5 362.0L851.5 362.0L851.5 186.0L850.5 185.0L850.5 179.0L849.5 178.0L849.5 171.0L848.5 170.0L848.5 166.0L847.5 165.0L847.5 161.0L844.5 153.0L844.5 150.0L840.5 142.0L840.5 140.0L836.5 132.0L834.5 130.0L834.5 128.0L826.5 117.0L815.0 105.5L800.0 95.5L798.0 95.5L796.0 93.5L794.0 93.5L786.0 89.5L782.0 89.5L779.0 87.5L775.0 87.5L771.0 85.5L756.0 84.5L755.0 83.5L737.0 83.5L736.0 84.5L728.0 84.5L727.0 85.5L721.0 85.5L716.0 87.5L712.0 87.5L710.0 89.5L707.0 89.5L704.0 91.5L697.0 93.5L676.0 108.5L675.5 2.0L674.0 0.5L612.0 0.5ZM894.0 0.5L892.5 3.0L892.5 79.0L893.5 80.0L892.5 82.0L892.5 90.0L860.0 90.5L858.5 92.0L858.5 149.0L860.0 150.5L892.5 151.0L892.5 361.0L894.0 362.5L958.5 362.0L958.5 360.0L959.5 359.0L959.5 357.0L958.5 356.0L958.5 354.0L959.5 353.0L959.5 289.0L958.5 288.0L958.5 273.0L959.5 272.0L959.5 215.0L958.5 214.0L958.5 153.0L960.0 150.5L997.0 150.5L999.5 149.0L999.5 92.0L998.0 90.5L961.0 90.5L958.5 88.0L959.5 87.0L959.5 84.0L958.5 83.0L959.5 81.0L958.5 80.0L958.5 63.0L959.5 62.0L959.5 50.0L958.5 49.0L958.5 33.0L959.5 32.0L959.5 6.0L958.5 5.0L959.5 4.0L959.5 2.0L957.0 0.5L895.0 0.5ZM420.0 83.5L419.0 84.5L409.0 84.5L408.0 85.5L402.0 85.5L397.0 87.5L393.0 87.5L389.0 89.5L386.0 89.5L385.0 90.5L377.0 92.5L372.0 95.5L370.0 95.5L365.0 98.5L363.0 98.5L358.0 102.5L355.0 103.5L346.0 109.5L329.5 124.0L329.5 125.0L321.5 133.0L319.5 137.0L310.5 149.0L306.5 158.0L304.5 160.0L304.5 162.0L300.5 170.0L300.5 172.0L297.5 179.0L297.5 182.0L295.5 186.0L294.5 194.0L293.5 195.0L293.5 202.0L291.5 207.0L291.5 222.0L290.5 223.0L291.5 253.0L292.5 254.0L292.5 258.0L293.5 259.0L293.5 266.0L295.5 270.0L295.5 275.0L297.5 279.0L297.5 282.0L298.5 283.0L301.5 294.0L308.5 309.0L310.5 311.0L310.5 313.0L325.5 334.0L338.0 346.5L339.0 346.5L344.0 351.5L348.0 353.5L351.0 356.5L359.0 360.5L361.0 362.5L383.0 372.5L386.0 372.5L390.0 374.5L394.0 374.5L398.0 376.5L404.0 376.5L405.0 377.5L411.0 377.5L412.0 378.5L443.0 378.5L444.0 377.5L450.0 377.5L451.0 376.5L456.0 376.5L460.0 374.5L463.0 374.5L466.0 372.5L469.0 372.5L476.0 368.5L478.0 368.5L480.0 366.5L482.0 366.5L499.0 355.5L504.0 350.5L505.0 350.5L514.5 341.0L515.0 339.5L516.5 341.0L516.5 383.0L515.5 384.0L514.5 400.0L513.5 401.0L511.5 412.0L510.5 413.0L508.5 421.0L504.5 428.0L504.5 430.0L502.5 432.0L497.5 441.0L484.0 454.5L472.0 462.5L470.0 462.5L460.0 467.5L457.0 467.5L452.0 469.5L446.0 469.5L445.0 470.5L430.0 470.5L429.0 469.5L424.0 469.5L416.0 466.5L413.0 466.5L401.0 460.5L397.0 457.5L385.5 447.0L376.5 434.0L368.5 414.0L368.5 410.0L366.5 406.0L366.5 397.0L365.0 395.5L298.5 396.0L299.5 416.0L300.5 417.0L300.5 422.0L301.5 423.0L304.5 438.0L306.5 441.0L306.5 444.0L317.5 467.0L332.5 488.0L353.0 507.5L363.0 514.5L375.0 520.5L377.0 522.5L379.0 522.5L387.0 526.5L389.0 526.5L402.0 531.5L406.0 531.5L411.0 533.5L416.0 533.5L420.0 535.5L459.0 535.5L463.0 533.5L470.0 533.5L473.0 531.5L481.0 530.5L482.0 529.5L490.0 527.5L495.0 524.5L497.0 524.5L509.0 518.5L511.0 516.5L513.0 516.5L527.0 506.5L544.5 490.0L544.5 489.0L555.5 476.0L556.5 473.0L560.5 468.0L566.5 456.0L566.5 454.0L568.5 452.0L570.5 444.0L572.5 441.0L572.5 438.0L574.5 434.0L574.5 430.0L576.5 426.0L576.5 421.0L577.5 420.0L577.5 416.0L578.5 415.0L578.5 406.0L579.5 405.0L579.5 91.0L517.0 90.5L516.5 122.0L515.0 122.5L501.0 107.5L486.0 97.5L482.0 95.5L480.0 95.5L473.0 91.5L471.0 91.5L464.0 88.5L461.0 88.5L460.0 87.5L456.0 87.5L452.0 85.5L436.0 84.5L435.0 83.5L421.0 83.5ZM89.0 84.5L88.0 85.5L81.0 85.5L80.0 86.5L73.0 87.5L72.0 88.5L61.0 91.5L59.0 93.5L57.0 93.5L55.0 95.5L53.0 95.5L40.0 104.5L26.5 118.0L21.5 125.0L14.5 138.0L14.5 141.0L12.5 144.0L12.5 147.0L10.5 151.0L10.5 156.0L9.5 157.0L9.5 167.0L8.5 168.0L9.5 170.0L10.5 185.0L11.5 186.0L12.5 192.0L14.5 195.0L14.5 197.0L19.5 206.0L29.5 217.0L29.5 218.0L36.0 223.5L45.0 228.5L47.0 230.5L61.0 237.5L63.0 237.5L76.0 243.5L81.0 244.5L89.0 248.5L92.0 248.5L95.0 250.5L97.0 250.5L98.0 251.5L103.0 252.5L106.0 254.5L108.0 254.5L111.0 256.5L113.0 256.5L123.0 262.5L130.5 271.0L130.5 273.0L132.5 277.0L132.5 289.0L130.5 292.0L130.5 294.0L127.5 299.0L120.0 305.5L116.0 306.5L113.0 308.5L100.0 309.5L99.0 308.5L93.0 308.5L82.0 303.5L73.5 294.0L68.5 284.0L68.5 281.0L66.0 277.5L-0.5 278.0L-0.5 290.0L1.5 293.0L1.5 298.0L2.5 299.0L2.5 302.0L3.5 303.0L4.5 308.0L12.5 325.0L22.5 337.0L22.5 338.0L35.0 349.5L44.0 355.5L56.0 361.5L58.0 361.5L61.0 363.5L63.0 363.5L67.0 365.5L70.0 365.5L71.0 366.5L74.0 366.5L79.0 368.5L87.0 368.5L88.0 369.5L112.0 369.5L113.0 368.5L121.0 368.5L122.0 367.5L129.0 366.5L130.0 365.5L138.0 363.5L141.0 361.5L143.0 361.5L162.0 350.5L179.5 334.0L188.5 321.0L188.5 319.0L190.5 317.0L190.5 315.0L192.5 313.0L192.5 311.0L194.5 308.0L194.5 305.0L197.5 297.0L197.5 293.0L198.5 292.0L198.5 284.0L199.5 283.0L199.5 270.0L198.5 269.0L198.5 262.0L197.5 261.0L196.5 253.0L194.5 250.0L194.5 247.0L190.5 239.0L184.5 230.0L175.0 220.5L162.0 211.5L154.0 207.5L152.0 207.5L150.0 205.5L140.0 202.5L137.0 200.5L134.0 200.5L124.0 196.5L121.0 196.5L118.0 194.5L115.0 194.5L105.0 190.5L102.0 190.5L94.0 186.5L92.0 186.5L84.0 182.5L79.5 178.0L76.5 172.0L76.5 161.0L79.5 155.0L86.0 148.5L92.0 145.5L96.0 145.5L97.0 144.5L105.0 144.5L106.0 145.5L110.0 145.5L116.0 148.5L121.5 153.0L122.5 156.0L124.5 158.0L125.5 163.0L128.0 166.5L190.0 166.5L191.5 165.0L191.5 155.0L190.5 154.0L190.5 149.0L188.5 145.0L188.5 142.0L187.5 141.0L186.5 136.0L182.5 128.0L172.5 114.0L165.0 106.5L164.0 106.5L156.0 99.5L151.0 97.5L145.0 93.5L143.0 93.5L141.0 91.5L139.0 91.5L136.0 89.5L133.0 89.5L129.0 87.5L126.0 87.5L121.0 85.5L115.0 85.5L114.0 84.5L90.0 84.5ZM214.0 90.5L214.0 362.5L278.0 362.5L279.5 360.0L279.5 253.0L278.5 252.0L278.5 244.0L279.5 243.0L279.5 216.0L278.5 215.0L279.5 214.0L279.5 169.0L278.5 168.0L278.5 109.0L279.5 108.0L279.5 92.0L278.0 90.5L215.0 90.5ZM423.5 145.0L443.0 144.5L444.0 145.5L450.0 145.5L451.0 146.5L458.0 147.5L473.0 154.5L482.0 160.5L494.5 173.0L501.5 183.0L507.5 195.0L507.5 197.0L510.5 204.0L511.5 211.0L512.5 212.0L512.5 219.0L513.5 220.0L513.5 238.0L512.5 239.0L512.5 247.0L510.5 251.0L509.5 258.0L507.5 261.0L506.5 266.0L503.5 272.0L501.5 274.0L501.5 276.0L491.5 290.0L479.0 301.5L470.0 306.5L468.0 308.5L466.0 308.5L459.0 312.5L456.0 312.5L452.0 314.5L448.0 314.5L443.0 316.5L425.0 316.5L424.0 315.5L419.0 315.5L411.0 312.5L408.0 312.5L405.0 310.5L403.0 310.5L401.0 308.5L399.0 308.5L397.0 306.5L391.0 303.5L375.5 289.0L364.5 272.0L364.5 270.0L360.5 262.0L359.5 256.0L357.5 252.0L357.5 247.0L356.5 246.0L356.5 241.0L355.5 240.0L355.5 219.0L356.5 218.0L356.5 213.0L357.5 212.0L358.5 204.0L359.5 203.0L360.5 197.0L362.5 194.0L362.5 192.0L373.5 173.0L381.5 165.0L381.5 164.0L387.0 159.5L394.0 154.5L409.0 147.5L412.0 147.5L417.0 145.5L423.0 145.5ZM427.0 197.5L417.0 201.5L406.5 211.0L402.5 218.0L401.5 224.0L400.5 225.0L400.5 239.0L401.5 240.0L402.5 246.0L405.5 252.0L409.5 256.0L409.5 257.0L416.0 262.5L427.0 267.5L443.0 267.5L456.0 261.5L465.5 251.0L469.5 243.0L469.5 239.0L470.5 238.0L470.5 227.0L469.5 226.0L469.5 222.0L468.0 220.5L466.5 221.0L465.5 225.0L460.0 230.5L458.0 230.5L454.0 232.5L446.0 231.5L439.5 226.0L437.5 222.0L437.5 214.0L440.5 208.0L443.0 205.5L447.0 203.5L450.5 203.0L450.0 200.5L445.0 198.5L442.0 198.5L441.0 197.5L428.0 197.5Z';
const RATIO = 1.8657; /* ancho / alto del arte completo (incluye el descendente de la g) */
const BASELINE = 0.685; /* línea de base de "sight" medida desde el borde superior del arte */
const TONES = {
  ink: 'var(--deep-blue-gray)',
  pink: 'var(--pink-paradise)',
  lime: 'var(--light-lime)',
  paper: 'var(--paper)'
};
function Wordmark({
  lockup = 'sight',
  tone = 'ink',
  color,
  size = 48,
  label = 'sight',
  style,
  ...rest
}) {
  const fill = color || TONES[tone] || TONES.ink;
  const lab = lockup === 'sight lab';
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "img",
    "aria-label": lab ? 'sight lab' : label,
    style: {
      display: 'inline-flex',
      alignItems: 'flex-end',
      gap: size * 0.13,
      lineHeight: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    viewBox: VIEWBOX,
    width: size * RATIO,
    height: size,
    fill: fill,
    "aria-hidden": "true",
    style: {
      display: 'block',
      overflow: 'visible'
    }
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: PATH
  })), lab && /*#__PURE__*/React.createElement("span", {
    style: {
      font: `var(--fw-medium) ${size * 0.25}px/1 var(--font-sans)`,
      letterSpacing: '0.12em',
      color: fill,
      paddingBottom: size * (1 - BASELINE),
      textTransform: 'uppercase'
    }
  }, "lab"));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/data/BarChart.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Gráfica de barras de marca: color plano de la paleta, esquina recta, sin sombra ni
   degradado. Una serie por gráfica; el color destaca la barra que importa (`tone` por dato).
   Línea base en tinta, valores en extrabold — la cifra es el titular. */
const TONES = {
  pink: 'var(--pink-paradise)',
  lime: 'var(--light-lime)',
  salmon: 'var(--salmon)',
  cool: 'var(--salt-air)',
  ink: 'var(--deep-blue-gray)',
  muted: 'var(--ink-100)'
};
function BarChart({
  data = [],
  orientation = 'vertical',
  tone = 'pink',
  max,
  unit = '',
  height = 200,
  style,
  ...rest
}) {
  const top = max || Math.max(...data.map(d => d.value), 0) || 1;
  const vertical = orientation === 'vertical';
  const bars = data.map((d, i) => {
    const pct = Math.max(0, Math.min(1, d.value / top)) * 100;
    const fill = TONES[d.tone || tone] || TONES[tone];
    const value = /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--fw-extrabold) var(--fs-ui)/1 var(--font-sans)',
        letterSpacing: 'var(--tracking)',
        color: 'var(--text-strong)'
      }
    }, d.value, unit);
    const label = /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-caption)',
        color: 'var(--text-muted)'
      }
    }, d.label);
    return vertical ? /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'grid',
        gridTemplateRows: 'auto 1fr auto',
        gap: 'var(--space-2)',
        justifyItems: 'center',
        minWidth: 0
      }
    }, value, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'flex-end'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        height: pct + '%',
        minHeight: 2,
        background: fill
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center'
      }
    }, label)) : /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'grid',
        gridTemplateColumns: 'minmax(9ch,22%) 1fr auto',
        gap: 'var(--space-3)',
        alignItems: 'center'
      }
    }, label, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 14,
        background: 'var(--surface-sunken)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: pct + '%',
        height: '100%',
        minWidth: 2,
        background: fill
      }
    })), value);
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    style: style
  }, rest), vertical ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridAutoFlow: 'column',
      gridAutoColumns: 'minmax(0,1fr)',
      gap: 'var(--space-4)',
      height,
      borderBottom: '2px solid var(--border-strong)',
      paddingBottom: 'var(--space-2)'
    }
  }, bars) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, bars));
}
Object.assign(__ds_scope, { BarChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/BarChart.jsx", error: String((e && e.message) || e) }); }

// components/data/LayerStack.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Planos apilados en isometría con línea guía a la etiqueta. Para jerarquías que se
   sostienen unas sobre otras —esencia / sistema / ejecución—.
   Los planos se superponen y son translúcidos: las intersecciones construyen el volumen.
   Las etiquetas van en flujo normal y el paso del apilado se deriva de la fila más alta
   medida, así que el texto nunca se solapa. Movimiento: entrada escalonada de abajo
   hacia arriba y separación del plano activo en hover. El plano más alto es el sólido. */
const RAMPS = {
  salmon: ['var(--salmon)', 'color-mix(in srgb, var(--salmon) 46%, transparent)', 'color-mix(in srgb, var(--salmon) 22%, transparent)', 'color-mix(in srgb, var(--salmon) 12%, transparent)'],
  pink: ['var(--pink-paradise)', 'color-mix(in srgb, var(--pink-paradise) 42%, transparent)', 'color-mix(in srgb, var(--pink-paradise) 20%, transparent)', 'color-mix(in srgb, var(--pink-paradise) 11%, transparent)'],
  lime: ['var(--lime-600)', 'color-mix(in srgb, var(--light-lime) 70%, transparent)', 'color-mix(in srgb, var(--light-lime) 38%, transparent)', 'color-mix(in srgb, var(--light-lime) 20%, transparent)'],
  cool: ['var(--salt-air)', 'color-mix(in srgb, var(--salt-air) 55%, transparent)', 'color-mix(in srgb, var(--salt-air) 30%, transparent)', 'color-mix(in srgb, var(--salt-air) 16%, transparent)']
};
function LayerStack({
  data = [],
  tone = 'salmon',
  size = 300,
  gap = 0.5,
  style,
  ...rest
}) {
  const [ready, setReady] = React.useState(false);
  const [hot, setHot] = React.useState(null);
  const rows = React.useRef([]);
  const ramp = RAMPS[tone] || RAMPS.salmon;
  const n = data.length;
  const fw = size,
    fh = size * 0.62,
    base = fh * gap;
  const [pitch, setPitch] = React.useState(base);
  React.useEffect(() => {
    const t = setTimeout(() => setReady(true), 40);
    return () => clearTimeout(t);
  }, []);
  React.useEffect(() => {
    const measure = () => {
      const tall = rows.current.reduce((m, el) => Math.max(m, el ? el.offsetHeight : 0), 0);
      setPitch(Math.max(base, tall + 18));
    };
    measure();
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(measure) : null;
    if (ro) rows.current.forEach(el => el && ro.observe(el));
    window.addEventListener('resize', measure);
    return () => {
      if (ro) ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [data, size, gap, base]);
  /* El centro de la fila i es i*pitch + pitch/2; el vértice del plano i es i*pitch + fh/2. */
  const shift = (fh - pitch) / 2;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: `${fw}px minmax(24ch,1fr)`,
      gap: 0,
      alignItems: 'start',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: fw,
      height: (n - 1) * pitch + fh,
      marginTop: shift < 0 ? -shift : 0
    }
  }, data.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onMouseEnter: () => setHot(i),
    onMouseLeave: () => setHot(null),
    style: {
      position: 'absolute',
      left: 0,
      top: i * pitch,
      width: fw,
      height: fh,
      background: ramp[Math.min(ramp.length - 1, i)],
      clipPath: 'polygon(50% 0, 100% 50%, 50% 100%, 0 50%)',
      opacity: ready ? 1 : 0,
      transform: `translateY(${ready ? hot === i ? -10 : 0 : 18}px)`,
      transition: 'transform 520ms cubic-bezier(.2,.8,.2,1), opacity 520ms ease',
      transitionDelay: ready ? `${(n - 1 - i) * 90}ms` : '0ms'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: shift > 0 ? shift : 0
    }
  }, data.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onMouseEnter: () => setHot(i),
    onMouseLeave: () => setHot(null),
    style: {
      minHeight: pitch,
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      paddingLeft: 'var(--space-10)',
      opacity: ready ? hot != null && hot !== i ? 0.55 : 1 : 0,
      transition: 'opacity 420ms ease',
      transitionDelay: ready ? `${(n - 1 - i) * 90 + 120}ms` : '0ms'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 0,
      top: '50%',
      width: 'var(--space-9)',
      height: 1,
      background: 'var(--ink-300)',
      transformOrigin: 'left center',
      transform: `scaleX(${ready ? 1 : 0})`,
      transition: 'transform 420ms ease',
      transitionDelay: ready ? `${(n - 1 - i) * 90 + 120}ms` : '0ms'
    }
  }), /*#__PURE__*/React.createElement("div", {
    ref: el => {
      rows.current[i] = el;
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: `var(--fw-medium) ${Math.max(14, Math.round(size * 0.058))}px/1.2 var(--font-sans)`,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--text-strong)'
    }
  }, d.label), d.note && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 0 0',
      font: `var(--fw-regular) ${Math.max(10, Math.round(size * 0.039))}px/1.75 var(--font-sans)`,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      maxWidth: '44ch'
    }
  }, d.note))))));
}
Object.assign(__ds_scope, { LayerStack });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/LayerStack.jsx", error: String((e && e.message) || e) }); }

// components/data/NestedScale.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Escala anidada: magnitudes que se contienen unas a otras (mercado total → disponible →
   alcanzable, universo → muestra → casos). Anillos en degradado de marca —claro afuera,
   saturado al centro, nunca oscuro— con la cifra dentro de su banda expuesta y línea guía
   a la etiqueta. Tres variantes:
   - `nested`  círculos centrados, etiquetas a la derecha
   - `corner`  cuartos de círculo anclados a una esquina — el motivo de lámina
   - `row`     burbujas en fila, para comparar sin contención
   El diámetro escala por área, pero se fuerza una banda mínima legible entre anillos:
   si dos magnitudes están muy cerca, el anillo interior se recorta para que la cifra quepa.
   Del mayor al menor: `data` se ordena solo. Hover destaca el nivel. */
const TONES = [{
  fill: 'linear-gradient(145deg, var(--pink-100), var(--pink-200))',
  ink: 'var(--deep-blue-gray)'
}, {
  fill: 'linear-gradient(145deg, var(--pink-200), var(--salmon))',
  ink: 'var(--deep-blue-gray)'
}, {
  fill: 'linear-gradient(145deg, var(--salmon), var(--pink-paradise))',
  ink: 'var(--text-on-accent)'
}, {
  fill: 'linear-gradient(145deg, var(--pink-paradise), var(--pink-600))',
  ink: 'var(--text-on-accent)'
}];
const RAMPS = {
  pink: TONES,
  lime: [{
    fill: 'linear-gradient(145deg, var(--lime-100), var(--lime-300))',
    ink: 'var(--deep-blue-gray)'
  }, {
    fill: 'linear-gradient(145deg, var(--lime-300), color-mix(in srgb, var(--light-lime) 80%, var(--coconut-milk)))',
    ink: 'var(--deep-blue-gray)'
  }, {
    fill: 'linear-gradient(145deg, color-mix(in srgb, var(--light-lime) 85%, var(--coconut-milk)), var(--light-lime))',
    ink: 'var(--text-on-lime)'
  }, {
    fill: 'linear-gradient(145deg, var(--light-lime), var(--lime-300))',
    ink: 'var(--text-on-lime)'
  }],
  cool: [{
    fill: 'linear-gradient(145deg, var(--salt-air), var(--lime-100))',
    ink: 'var(--deep-blue-gray)'
  }, {
    fill: 'linear-gradient(145deg, var(--salt-air), var(--pink-100))',
    ink: 'var(--deep-blue-gray)'
  }, {
    fill: 'linear-gradient(145deg, var(--pink-200), var(--salmon))',
    ink: 'var(--deep-blue-gray)'
  }, {
    fill: 'linear-gradient(145deg, var(--salmon), var(--pink-paradise))',
    ink: 'var(--text-on-accent)'
  }],
  ink: [{
    fill: 'linear-gradient(145deg, var(--ink-050), var(--ink-100))',
    ink: 'var(--deep-blue-gray)'
  }, {
    fill: 'linear-gradient(145deg, var(--ink-100), var(--ink-300))',
    ink: 'var(--deep-blue-gray)'
  }, {
    fill: 'linear-gradient(145deg, var(--salt-air), var(--salmon))',
    ink: 'var(--deep-blue-gray)'
  }, {
    fill: 'linear-gradient(145deg, var(--salmon), var(--pink-paradise))',
    ink: 'var(--text-on-accent)'
  }]
};
function NestedScale({
  data = [],
  layout = 'nested',
  tone = 'pink',
  size = 320,
  corner = 'br',
  labels = true,
  style,
  ...rest
}) {
  const [hot, setHot] = React.useState(null);
  const ramp = RAMPS[tone] || RAMPS.pink;
  const items = [...data].sort((a, b) => b.value - a.value);
  const n = items.length;
  const top = items[0] ? items[0].value : 1;
  const paint = i => ramp[Math.min(ramp.length - 1, Math.round(i / Math.max(1, n - 1) * (ramp.length - 1)))];
  const lh = Math.max(15, Math.round(size * 0.075));
  /* Diámetro por área, con banda mínima de lh*1.6 de radio entre anillos consecutivos. */
  const dias = items.map(d => Math.max(0.16, Math.sqrt(d.value / top)) * size);
  for (let i = 1; i < n; i++) {
    const ceiling = dias[i - 1] - lh * 3.2;
    if (dias[i] > ceiling) dias[i] = Math.max(size * 0.2, ceiling);
  }
  const gap = i => (dias[i] - (i < n - 1 ? dias[i + 1] : 0)) / 2;
  /* El anillo más interno es un disco completo: su cifra se centra en él y usa el cuerpo
     entero. Los anillos exteriores ajustan el cuerpo a su banda expuesta, con piso de 11px;
     si ni así despeja, la cifra pasa a la leyenda. */
  const fontOf = i => i === n - 1 ? lh : Math.min(lh, Math.floor(gap(i) * 0.62));
  const fits = i => i === n - 1 ? dias[i] >= lh * 1.6 : fontOf(i) >= 11;
  const cap = (c, i) => ({
    font: `var(--fw-extrabold) ${fontOf(i)}px/1 var(--font-sans)`,
    letterSpacing: 'var(--tracking-tight)',
    color: c
  });
  if (layout === 'row') {
    return /*#__PURE__*/React.createElement("div", _extends({
      style: {
        display: 'flex',
        alignItems: 'flex-end',
        gap: 'var(--space-5)',
        flexWrap: 'wrap',
        ...style
      }
    }, rest), items.map((d, i) => {
      const t = paint(i),
        s = dias[i];
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        onMouseEnter: () => setHot(i),
        onMouseLeave: () => setHot(null),
        style: {
          display: 'grid',
          gap: 'var(--space-3)',
          justifyItems: 'center'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: s,
          height: s,
          borderRadius: '50%',
          background: t.fill,
          display: 'grid',
          placeItems: 'center',
          transition: 'var(--motion-hover)',
          transform: hot === i ? 'scale(1.04)' : 'none'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: cap(t.ink, n - 1)
      }, d.display || d.value)), labels && /*#__PURE__*/React.createElement("span", {
        style: {
          font: 'var(--type-caption)',
          color: 'var(--text-muted)',
          textAlign: 'center',
          maxWidth: '16ch'
        }
      }, d.label));
    }));
  }
  if (layout === 'corner') {
    const pos = {
      br: {
        right: 0,
        bottom: 0
      },
      bl: {
        left: 0,
        bottom: 0
      },
      tr: {
        right: 0,
        top: 0
      },
      tl: {
        left: 0,
        top: 0
      }
    }[corner] || {
      right: 0,
      bottom: 0
    };
    const radius = {
      br: '100% 0 0 0',
      bl: '0 100% 0 0',
      tr: '0 0 100% 0',
      tl: '0 0 0 100%'
    }[corner] || '100% 0 0 0';
    /* Sobre la diagonal que sale de la esquina: distancia radial al punto medio de la banda
       expuesta, proyectada con 1/√2 en cada eje. La cuerda del anillo a esa altura es lo que
       realmente puede sostener la cifra, así que el cuerpo se reduce hasta caber dentro del
       arco (piso 11px; por debajo, la cifra pasa a la leyenda). */
    const geom = i => {
      const r = dias[i] / 2,
        rIn = i < n - 1 ? dias[i + 1] / 2 : 0;
      const off = (i === n - 1 ? r * 0.5 : (r + rIn) / 2) / Math.SQRT2;
      const outer = Math.sqrt(Math.max(0, r * r - off * off));
      const inner = off < rIn ? Math.sqrt(Math.max(0, rIn * rIn - off * off)) : 0;
      const half = Math.max(0, Math.min(outer - off, off - inner));
      const chars = String(items[i].display || items[i].value).length || 1;
      const font = Math.max(0, Math.min(fontOf(i), Math.floor(half * 2 / (chars * 0.6))));
      return {
        off,
        font
      };
    };
    const place = off => corner === 'br' ? {
      right: off,
      bottom: off,
      transform: 'translate(50%,50%)'
    } : corner === 'bl' ? {
      left: off,
      bottom: off,
      transform: 'translate(-50%,50%)'
    } : corner === 'tr' ? {
      right: off,
      top: off,
      transform: 'translate(50%,-50%)'
    } : {
      left: off,
      top: off,
      transform: 'translate(-50%,-50%)'
    };
    return /*#__PURE__*/React.createElement("div", _extends({
      style: {
        position: 'relative',
        width: size,
        height: size,
        ...style
      }
    }, rest), items.map((d, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      onMouseEnter: () => setHot(i),
      onMouseLeave: () => setHot(null),
      style: {
        position: 'absolute',
        ...pos,
        width: dias[i],
        height: dias[i],
        borderRadius: radius,
        background: paint(i).fill,
        transition: 'var(--motion-hover)',
        filter: hot != null && hot !== i ? 'saturate(0.7)' : 'none'
      }
    })), items.map((d, i) => {
      const g = geom(i);
      return g.font >= 11 ? /*#__PURE__*/React.createElement("span", {
        key: 'l' + i,
        style: {
          ...cap(paint(i).ink, i),
          fontSize: g.font,
          position: 'absolute',
          ...place(g.off),
          whiteSpace: 'nowrap',
          pointerEvents: 'none'
        }
      }, d.display || d.value) : null;
    }));
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: labels ? `${size}px minmax(20ch,1fr)` : `${size}px`,
      gap: 'var(--space-6)',
      alignItems: 'center',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: size,
      height: size
    }
  }, items.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onMouseEnter: () => setHot(i),
    onMouseLeave: () => setHot(null),
    style: {
      position: 'absolute',
      left: '50%',
      bottom: 0,
      transform: 'translateX(-50%)',
      width: dias[i],
      height: dias[i],
      borderRadius: '50%',
      background: paint(i).fill,
      transition: 'var(--motion-hover)',
      filter: hot != null && hot !== i ? 'saturate(0.7)' : 'none'
    }
  })), items.map((d, i) => fits(i) ? /*#__PURE__*/React.createElement("span", {
    key: 'l' + i,
    style: {
      ...cap(paint(i).ink, i),
      position: 'absolute',
      left: '50%',
      top: i === n - 1 ? size - dias[i] / 2 - fontOf(i) / 2 : size - dias[i] + gap(i) / 2 - fontOf(i) / 2,
      transform: 'translateX(-50%)',
      whiteSpace: 'nowrap',
      pointerEvents: 'none'
    }
  }, d.display || d.value) : null)), labels && /*#__PURE__*/React.createElement("dl", {
    style: {
      margin: 0,
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, items.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onMouseEnter: () => setHot(i),
    onMouseLeave: () => setHot(null),
    style: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gap: 'var(--space-3)',
      alignItems: 'start',
      opacity: hot != null && hot !== i ? 0.55 : 1,
      transition: 'var(--motion-hover)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 14,
      height: 14,
      marginTop: 3,
      background: paint(i).fill,
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", {
    style: {
      font: 'var(--fw-extrabold) var(--fs-ui-lg)/1.15 var(--font-sans)',
      letterSpacing: 'var(--tracking)',
      color: 'var(--text-strong)'
    }
  }, fits(i) ? d.label : `${d.display || d.value} · ${d.label}`), d.note && /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: '4px 0 0',
      font: 'var(--fw-regular) var(--fs-caption)/1.45 var(--font-sans)',
      color: 'var(--text-body)',
      maxWidth: '34ch'
    }
  }, d.note))))));
}
Object.assign(__ds_scope, { NestedScale });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/NestedScale.jsx", error: String((e && e.message) || e) }); }

// components/data/RingStat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Cifra en anillo. Proporción de una sola magnitud — cobertura, avance, porcentaje del
   diagnóstico. Anillo de color plano sobre pista neutra, cifra al centro en extrabold. */
const TONES = {
  pink: 'var(--pink-paradise)',
  lime: 'var(--lime-600)',
  salmon: 'var(--salmon)',
  ink: 'var(--deep-blue-gray)'
};
function RingStat({
  value = 0,
  display,
  label,
  tone = 'pink',
  size = 140,
  thickness = 16,
  style,
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value));
  const color = TONES[tone] || TONES.pink;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gap: 'var(--space-3)',
      justifyItems: 'center',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      display: 'grid',
      placeItems: 'center',
      background: `conic-gradient(${color} 0 ${pct}%, var(--ink-100) ${pct}% 100%)`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: size - thickness * 2,
      height: size - thickness * 2,
      borderRadius: '50%',
      background: 'var(--surface-card)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-extrabold) ' + Math.round(size * 0.26) + 'px/1 var(--font-sans)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--text-strong)'
    }
  }, display || pct + '%'))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)',
      textAlign: 'center',
      maxWidth: '22ch'
    }
  }, label));
}
Object.assign(__ds_scope, { RingStat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/RingStat.jsx", error: String((e && e.message) || e) }); }

// components/data/SpokeDiagram.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Núcleo con satélites radiales. Para una idea central y sus frentes de trabajo:
   el núcleo lleva el nombre, cada satélite un frente con su peso. Movimiento: los
   satélites entran desde el núcleo hacia afuera, escalonados, y el hover destaca el radio. */
const TONES = {
  pink: {
    core: 'var(--pink-paradise)',
    coreInk: 'var(--text-on-accent)',
    sat: 'var(--pink-100)',
    satInk: 'var(--deep-blue-gray)',
    line: 'var(--pink-200)'
  },
  lime: {
    core: 'var(--light-lime)',
    coreInk: 'var(--text-on-lime)',
    sat: 'var(--lime-100)',
    satInk: 'var(--deep-blue-gray)',
    line: 'var(--lime-300)'
  },
  ink: {
    core: 'var(--deep-blue-gray)',
    coreInk: 'var(--coconut-milk)',
    sat: 'var(--ink-050)',
    satInk: 'var(--deep-blue-gray)',
    line: 'var(--ink-100)'
  },
  cool: {
    core: 'var(--salt-air)',
    coreInk: 'var(--deep-blue-gray)',
    sat: 'var(--coconut-milk)',
    satInk: 'var(--deep-blue-gray)',
    line: 'var(--ink-100)'
  }
};
function SpokeDiagram({
  data = [],
  core = 'Diagnóstico',
  tone = 'pink',
  size = 360,
  start = -90,
  style,
  ...rest
}) {
  const [ready, setReady] = React.useState(false);
  const [hot, setHot] = React.useState(null);
  React.useEffect(() => {
    const t = setTimeout(() => setReady(true), 40);
    return () => clearTimeout(t);
  }, []);
  const t = TONES[tone] || TONES.pink;
  const n = data.length || 1;
  const C = size / 2,
    coreR = size * 0.17,
    satR = size * 0.115,
    orbit = size * 0.36;
  const angle = i => (start + 360 / n * i) * Math.PI / 180;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      width: size,
      height: size,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${size} ${size}`,
    width: size,
    height: size,
    style: {
      position: 'absolute',
      inset: 0
    },
    "aria-hidden": "true"
  }, data.map((d, i) => {
    const a = angle(i);
    return /*#__PURE__*/React.createElement("line", {
      key: i,
      x1: C,
      y1: C,
      x2: C + Math.cos(a) * orbit,
      y2: C + Math.sin(a) * orbit,
      stroke: hot === i ? 'var(--border-strong)' : t.line,
      strokeWidth: hot === i ? 2 : 1.5,
      style: {
        opacity: ready ? 1 : 0,
        transition: 'opacity 420ms ease, stroke 200ms ease',
        transitionDelay: ready ? `${i * 80}ms` : '0ms'
      }
    });
  })), data.map((d, i) => {
    const a = angle(i),
      x = C + Math.cos(a) * orbit,
      y = C + Math.sin(a) * orbit;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onMouseEnter: () => setHot(i),
      onMouseLeave: () => setHot(null),
      style: {
        position: 'absolute',
        left: ready ? x - satR : C - satR,
        top: ready ? y - satR : C - satR,
        width: satR * 2,
        height: satR * 2,
        borderRadius: '50%',
        background: t.sat,
        color: t.satInk,
        display: 'grid',
        placeItems: 'center',
        textAlign: 'center',
        padding: 6,
        boxSizing: 'border-box',
        cursor: 'default',
        opacity: ready ? hot != null && hot !== i ? 0.6 : 1 : 0,
        transform: hot === i ? 'scale(1.06)' : 'scale(1)',
        transition: 'left 560ms cubic-bezier(.2,.8,.2,1), top 560ms cubic-bezier(.2,.8,.2,1), opacity 420ms ease, transform 200ms ease',
        transitionDelay: ready ? `${i * 80}ms` : '0ms'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        font: `var(--fw-extrabold) ${Math.max(14, Math.round(size * 0.05))}px/1 var(--font-sans)`,
        letterSpacing: 'var(--tracking-tight)'
      }
    }, d.value), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 3,
        font: `var(--fw-medium) ${Math.max(10, Math.round(size * 0.031))}px/1.2 var(--font-sans)`,
        letterSpacing: 'var(--tracking-micro)'
      }
    }, d.label)));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: C - coreR,
      top: C - coreR,
      width: coreR * 2,
      height: coreR * 2,
      borderRadius: '50%',
      background: t.core,
      color: t.coreInk,
      display: 'grid',
      placeItems: 'center',
      textAlign: 'center',
      padding: 8,
      boxSizing: 'border-box',
      font: `var(--fw-extrabold) ${Math.max(13, Math.round(size * 0.042))}px/1.15 var(--font-sans)`,
      letterSpacing: 'var(--tracking-tight)',
      transform: ready ? 'scale(1)' : 'scale(0.8)',
      opacity: ready ? 1 : 0,
      transition: 'transform 480ms cubic-bezier(.2,.8,.2,1), opacity 320ms ease'
    }
  }, core));
}
Object.assign(__ds_scope, { SpokeDiagram });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/SpokeDiagram.jsx", error: String((e && e.message) || e) }); }

// components/data/TrendLine.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Serie en el tiempo. Trazo de un solo color de la paleta, sin rejilla ni marcadores
   intermedios: sólo el último punto se marca, porque es el que se está afirmando.
   Área opcional en el tinte claro del mismo color. */
const TONES = {
  pink: {
    line: 'var(--pink-paradise)',
    area: 'var(--pink-100)'
  },
  lime: {
    line: 'var(--lime-600)',
    area: 'var(--lime-100)'
  },
  salmon: {
    line: 'var(--salmon)',
    area: 'var(--pink-100)'
  },
  ink: {
    line: 'var(--deep-blue-gray)',
    area: 'var(--ink-050)'
  }
};
function TrendLine({
  values = [],
  tone = 'pink',
  area = true,
  height = 140,
  labels,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.pink;
  const n = values.length;
  const max = Math.max(...values, 0) || 1,
    min = Math.min(...values, 0);
  const span = max - min || 1;
  const x = i => n < 2 ? 0 : i / (n - 1) * 100;
  const y = v => 100 - (v - min) / span * 100;
  const pts = values.map((v, i) => x(i) + ',' + y(v)).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    preserveAspectRatio: "none",
    style: {
      display: 'block',
      width: '100%',
      height: '100%',
      overflow: 'visible'
    },
    role: "img"
  }, area && n > 1 && /*#__PURE__*/React.createElement("polygon", {
    points: '0,100 ' + pts + ' 100,100',
    fill: t.area
  }), n > 1 && /*#__PURE__*/React.createElement("polyline", {
    points: pts,
    fill: "none",
    stroke: t.line,
    strokeWidth: "2",
    vectorEffect: "non-scaling-stroke",
    strokeLinejoin: "round"
  })), n > 0 && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: x(n - 1) + '%',
      top: y(values[n - 1]) + '%',
      width: 9,
      height: 9,
      marginLeft: -4.5,
      marginTop: -4.5,
      borderRadius: '50%',
      background: t.line
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-2)',
      paddingTop: 'var(--space-2)',
      borderTop: '2px solid var(--border-strong)',
      display: 'flex',
      justifyContent: 'space-between',
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, (labels || []).map((l, i) => /*#__PURE__*/React.createElement("span", {
    key: i
  }, l))));
}
Object.assign(__ds_scope, { TrendLine });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/TrendLine.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  checked,
  defaultChecked,
  onChange,
  label,
  disabled = false,
  style,
  ...rest
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked !== undefined ? checked : inner;
  const toggle = () => {
    if (disabled) return;
    const v = !on;
    if (checked === undefined) setInner(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 20,
      height: 20,
      flex: '0 0 auto',
      display: 'grid',
      placeItems: 'center',
      background: on ? 'var(--surface-accent)' : 'var(--surface-card)',
      border: `var(--border-thin) solid ${on ? 'var(--surface-accent)' : 'var(--border-hairline)'}`,
      borderRadius: 'var(--radius-sm)',
      transition: 'var(--motion-hover)'
    }
  }, on && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 9,
      borderRight: '2px solid #fff',
      borderBottom: '2px solid #fff',
      rotate: '45deg',
      marginTop: -2
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-light) var(--fs-ui)/1.35 var(--font-sans)',
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Field({
  label,
  hint,
  error,
  htmlFor,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    htmlFor: htmlFor,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-medium) var(--fs-ui)/1.2 var(--font-sans)',
      letterSpacing: 'var(--tracking-micro)',
      color: 'var(--text-strong)'
    }
  }, label), children, (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-regular) var(--fs-ui-sm)/1.35 var(--font-sans)',
      color: error ? 'var(--state-critical)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  multiline = false,
  invalid = false,
  style,
  ...rest
}) {
  const [foc, setFoc] = React.useState(false);
  const s = {
    ...{
      width: '100%',
      font: 'var(--fw-light) var(--fs-ui-lg)/1.3 var(--font-sans)',
      letterSpacing: 'var(--tracking-micro)',
      color: 'var(--text-strong)',
      background: 'var(--surface-card)',
      border: 'var(--border-thin) solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      padding: '14px 16px',
      outline: 'none',
      transition: 'var(--motion-hover),box-shadow var(--dur-fast) var(--ease-standard)'
    },
    borderColor: invalid ? 'var(--state-critical)' : foc ? 'var(--border-strong)' : 'var(--border-hairline)',
    boxShadow: foc ? 'var(--ring-focus)' : 'none',
    resize: multiline ? 'vertical' : undefined,
    minHeight: multiline ? 120 : undefined,
    ...style
  };
  const T = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement(T, _extends({
    style: s,
    onFocus: () => setFoc(true),
    onBlur: () => setFoc(false)
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  options = [],
  invalid = false,
  style,
  ...rest
}) {
  const [foc, setFoc] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    style: {
      ...{
        width: '100%',
        font: 'var(--fw-light) var(--fs-ui-lg)/1.3 var(--font-sans)',
        letterSpacing: 'var(--tracking-micro)',
        color: 'var(--text-strong)',
        background: 'var(--surface-card)',
        border: 'var(--border-thin) solid var(--border-hairline)',
        borderRadius: 'var(--radius-md)',
        padding: '14px 16px',
        outline: 'none',
        transition: 'var(--motion-hover),box-shadow var(--dur-fast) var(--ease-standard)'
      },
      appearance: 'none',
      paddingRight: 44,
      cursor: 'pointer',
      borderColor: invalid ? 'var(--state-critical)' : foc ? 'var(--border-strong)' : 'var(--border-hairline)',
      boxShadow: foc ? 'var(--ring-focus)' : 'none',
      ...style
    },
    onFocus: () => setFoc(true),
    onBlur: () => setFoc(false)
  }, rest), options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: 16,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      width: 9,
      height: 9,
      borderRight: '2px solid var(--text-strong)',
      borderBottom: '2px solid var(--text-strong)',
      marginTop: -4,
      rotate: '45deg'
    }
  }));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  checked,
  defaultChecked,
  onChange,
  label,
  disabled = false,
  style,
  ...rest
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const on = checked !== undefined ? checked : inner;
  const toggle = () => {
    if (disabled) return;
    const v = !on;
    if (checked === undefined) setInner(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": on,
    onClick: toggle,
    disabled: disabled,
    style: {
      width: 44,
      height: 24,
      flex: '0 0 auto',
      padding: 2,
      border: 0,
      borderRadius: 'var(--radius-pill)',
      cursor: 'inherit',
      background: on ? 'var(--surface-accent)' : 'var(--ink-100)',
      display: 'flex',
      justifyContent: on ? 'flex-end' : 'flex-start',
      transition: 'background-color var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--white)',
      boxShadow: 'var(--shadow-card)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-light) var(--fs-ui)/1.35 var(--font-sans)',
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/layout/AuraField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Degradado de marca como fondo. Aura de dos, tres o cuatro colores de la paleta vibrante,
   ficha lineal para tarjetas de dato, fondo crema con el color apenas asomando,
   floración de un color o velo entre superficies.
   Sin negro ni tinta: el degradado nunca oscurece. Va siempre detrás del contenido, desenfocado
   y con opacidad rebajada: el degradado es atmósfera, no figura. Nunca bajo texto sin
   contraste propio, nunca en botones ni sobre el logotipo. */
const GRADS = {
  'pink-lime': 'var(--grad-pink-lime)',
  'salmon-lime': 'var(--grad-salmon-lime)',
  'cool-pink': 'var(--grad-cool-pink)',
  prisma: 'var(--grad-prisma)',
  amanecer: 'var(--grad-amanecer)',
  marea: 'var(--grad-marea)',
  espectro: 'var(--grad-espectro)',
  'crema-cool': 'var(--grad-crema-cool)',
  'crema-pink': 'var(--grad-crema-pink)',
  'crema-lime': 'var(--grad-crema-lime)',
  'crema-prisma': 'var(--grad-crema-prisma)',
  'tile-warm': 'var(--grad-tile-warm)',
  'tile-cool': 'var(--grad-tile-cool)',
  'tile-lime': 'var(--grad-tile-lime)',
  'bloom-pink': 'var(--grad-bloom-pink)',
  'bloom-lime': 'var(--grad-bloom-lime)',
  'bloom-cool': 'var(--grad-bloom-cool)',
  'veil-cool': 'var(--grad-veil-cool)',
  'veil-warm': 'var(--grad-veil-warm)',
  'veil-lime': 'var(--grad-veil-lime)'
};
const FLAT = /^(veil-|tile-|crema-)/;
function AuraField({
  combo = 'pink-lime',
  blur,
  opacity,
  fade,
  grain = false,
  style,
  ...rest
}) {
  const flat = FLAT.test(combo);
  const soft = blur ?? (flat ? 0 : 'var(--grad-blur)');
  const alpha = opacity ?? (flat ? 1 : 0.8);
  const mask = fade ? {
    maskImage: `linear-gradient(to ${fade}, #000 35%, transparent)`,
    WebkitMaskImage: `linear-gradient(to ${fade}, #000 35%, transparent)`
  } : null;
  return /*#__PURE__*/React.createElement("div", _extends({
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: soft ? '-12%' : 0,
      pointerEvents: 'none',
      background: GRADS[combo] || GRADS['pink-lime'],
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      filter: soft ? `blur(${typeof soft === 'number' ? soft + 'px' : soft}) saturate(1.05)` : undefined,
      opacity: alpha,
      ...(grain ? {
        mixBlendMode: 'multiply'
      } : null),
      ...mask,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { AuraField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/AuraField.jsx", error: String((e && e.message) || e) }); }

// components/layout/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const surfaces = {
  plain: {
    background: 'var(--surface-card)',
    color: 'var(--text-body)',
    boxShadow: 'inset 0 0 0 1px var(--border-hairline)'
  },
  sunken: {
    background: 'var(--surface-sunken)',
    color: 'var(--text-body)'
  },
  warm: {
    background: 'var(--surface-warm)',
    color: 'var(--text-strong)'
  },
  cool: {
    background: 'var(--surface-cool)',
    color: 'var(--text-strong)'
  },
  lime: {
    background: 'var(--surface-highlight)',
    color: 'var(--text-on-lime)'
  },
  dark: {
    background: 'var(--surface-dark)',
    color: 'var(--text-on-dark)'
  },
  accent: {
    background: 'var(--surface-accent)',
    color: 'var(--text-on-accent)'
  }
};
function Card({
  surface = 'plain',
  pad = 'md',
  rule = false,
  interactive = false,
  children,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      padding: pad === 'sm' ? 'var(--pad-card-sm)' : pad === 'lg' ? 'var(--space-7)' : 'var(--pad-card)',
      borderRadius: 'var(--radius-none)',
      ...surfaces[surface],
      borderLeft: rule ? 'var(--border-rule) solid var(--rule-marker)' : undefined,
      transition: 'box-shadow var(--dur-base) var(--ease-standard),transform var(--dur-base) var(--ease-standard)',
      boxShadow: interactive && h ? 'var(--shadow-raised)' : surfaces[surface].boxShadow,
      transform: interactive && h ? 'translateY(-2px)' : 'none',
      cursor: interactive ? 'pointer' : 'default',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Card.jsx", error: String((e && e.message) || e) }); }

// components/layout/ColorBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ColorBlock({
  name,
  hex,
  pantone,
  textColor,
  height = 200,
  style,
  ...rest
}) {
  const fg = textColor || 'var(--text-on-accent)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: hex,
      color: fg,
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-semibold) var(--fs-ui)/1.2 var(--font-sans)',
      letterSpacing: 'var(--tracking-micro)'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-light) var(--fs-ui-sm)/1.5 var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 'var(--fw-semibold)'
    }
  }, hex), pantone && /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: 0.75
    }
  }, "PANTONE ", pantone)));
}
Object.assign(__ds_scope, { ColorBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/ColorBlock.jsx", error: String((e && e.message) || e) }); }

// components/layout/ShapeMark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Formas planas de la marca: círculo, medio círculo y cuarto de círculo. Aparecen sangradas
   en esquinas de tarjetas, folletos y piezas de exterior (manual p.39–43). Color plano,
   nunca degradado, nunca contorno. */
const TONES = {
  lime: 'var(--light-lime)',
  pink: 'var(--pink-paradise)',
  salmon: 'var(--salmon)',
  cool: 'var(--salt-air)',
  warm: 'var(--coconut-milk)',
  ink: 'var(--deep-blue-gray)'
};
const RADII = {
  circle: '50%',
  'quarter-tl': '100% 0 0 0',
  'quarter-tr': '0 100% 0 0',
  'quarter-br': '0 0 100% 0',
  'quarter-bl': '0 0 0 100%',
  'half-top': '100% 100% 0 0',
  'half-bottom': '0 0 100% 100%',
  'half-left': '100% 0 0 100%',
  'half-right': '0 100% 100% 0',
  square: '0'
};
function ShapeMark({
  shape = 'quarter-br',
  tone = 'lime',
  size = 140,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    "aria-hidden": children ? undefined : 'true',
    style: {
      width: size,
      height: size,
      flex: 'none',
      background: TONES[tone],
      borderRadius: RADII[shape] || RADII.square,
      display: children ? 'flex' : 'block',
      alignItems: 'center',
      justifyContent: 'center',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { ShapeMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/ShapeMark.jsx", error: String((e && e.message) || e) }); }

// components/layout/StickyNote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Post-it. Origen declarado de la paleta (manual p.31) y motivo recurrente en exterior,
   folletos y sitio (p.38–42). Nota corta, escrita a mano en la vida real: aquí, texto
   breve en Plus Jakarta con una rotación mínima. */
const TONES = {
  pink: {
    background: '#ff9db0',
    color: 'var(--deep-blue-gray)'
  },
  lime: {
    background: 'var(--light-lime)',
    color: 'var(--deep-blue-gray)'
  },
  cool: {
    background: 'var(--salt-air)',
    color: 'var(--deep-blue-gray)'
  },
  warm: {
    background: 'var(--coconut-milk)',
    color: 'var(--deep-blue-gray)'
  },
  salmon: {
    background: 'var(--salmon)',
    color: 'var(--deep-blue-gray)'
  }
};
function StickyNote({
  tone = 'lime',
  size = 200,
  rotate = -3,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: size,
      minHeight: size,
      boxSizing: 'border-box',
      padding: 'var(--space-4)',
      display: 'flex',
      alignItems: 'flex-start',
      ...TONES[tone],
      font: `var(--fw-medium) ${Math.round(size * 0.1)}px/1.25 var(--font-body)`,
      letterSpacing: 'var(--tracking)',
      transform: `rotate(${rotate}deg)`,
      boxShadow: 'var(--shadow-raised)',
      borderRadius: 'var(--radius-none)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { StickyNote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/StickyNote.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/Dashboard.jsx
try { (() => {
/* Panel de producto Sight: superficies planas de papel, esquina recta, controles pastilla.
   El degradado sólo entra en las fichas de dato (tile-*) y en el aura de cabecera. */
const {
  AuraField,
  Badge,
  Button,
  RingStat,
  BarChart,
  NestedScale,
  Tag,
  EyeMark,
  Highlight
} = window.SightDesignSystem_3d4cc7;
const RANGES = {
  'Último mes': {
    labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
    max: [42, 58, 51, 73, 64, 81, 76, 88],
    min: [38, 31, 44, 28, 36, 24, 30, 19]
  },
  'Último trimestre': {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
    max: [34, 46, 52, 61, 70, 84],
    min: [52, 44, 39, 33, 29, 22]
  },
  'Año': {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    max: [31, 54, 68, 86],
    min: [58, 41, 30, 21]
  }
};
const AREAS = [{
  label: 'Foresight',
  value: 71,
  up: true
}, {
  label: 'Investigación',
  value: 92,
  up: true
}, {
  label: 'Producto',
  value: 33,
  up: false
}, {
  label: 'Datos',
  value: 56,
  up: true
}, {
  label: 'Narrativa',
  value: 79,
  up: true
}];
const COBERTURA = [{
  label: 'Universo de usuarios',
  value: 48200,
  display: '48.2K',
  note: 'Base total del producto en los tres mercados.'
}, {
  label: 'Alcanzados por el tracker',
  value: 21700,
  display: '21.7K',
  note: 'Con al menos una sesión medida en el trimestre.'
}, {
  label: 'Casos con tratamiento',
  value: 10200,
  display: '10.2K',
  note: 'Ya en la vía de intervención del lab.'
}];
const AGENDA = [{
  date: 'Mar 11 Jul',
  time: '08:15',
  title: 'Revisión de diagnóstico',
  where: 'Sight lab · Sala 2'
}, {
  date: 'Mar 11 Jul',
  time: '09:30',
  title: 'Onboarding — Simple Solutions',
  where: 'Remoto'
}, {
  date: 'Mié 12 Jul',
  time: '14:30',
  title: 'Taller de causa raíz',
  where: 'Cliente'
}, {
  date: 'Vie 15 Jul',
  time: '16:00',
  title: 'Cierre de tratamiento',
  where: 'Remoto'
}];
function Panel({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-card)',
      padding: '22px 24px',
      ...style
    }
  }, children);
}
function Eyebrow({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, children);
}
function Tile({
  combo,
  label,
  value,
  note,
  onPick,
  active
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onPick,
    style: {
      position: 'relative',
      overflow: 'hidden',
      border: 'none',
      padding: '20px 22px',
      textAlign: 'left',
      cursor: 'pointer',
      background: 'var(--surface-card)',
      outline: active ? '3px solid var(--deep-blue-gray)' : 'none',
      outlineOffset: -3,
      display: 'grid',
      alignContent: 'space-between',
      minHeight: 168,
      transition: 'var(--motion-hover)'
    }
  }, /*#__PURE__*/React.createElement(AuraField, {
    combo: combo,
    opacity: active ? 1 : 0.82
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      font: 'var(--fw-semibold) var(--fs-ui-lg)/1.2 var(--font-sans)',
      letterSpacing: 'var(--tracking)',
      color: 'var(--deep-blue-gray)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-extrabold) 44px/1 var(--font-sans)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--deep-blue-gray)'
    }
  }, value, "%"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      font: 'var(--fw-medium) 13px var(--font-sans)',
      color: 'var(--deep-blue-gray)'
    }
  }, note)));
}
function Dashboard() {
  const [range, setRange] = React.useState('Último mes');
  const [tile, setTile] = React.useState('prioritarias');
  const d = RANGES[range];
  const avg = Math.round(d.max.reduce((a, b) => a + b, 0) / d.max.length);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) 352px',
      gap: 2,
      background: 'var(--border-hairline)',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)',
      display: 'grid',
      gap: 2,
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--surface-card)',
      padding: '24px'
    }
  }, /*#__PURE__*/React.createElement(AuraField, {
    combo: "amanecer",
    opacity: 0.7,
    fade: "left"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: '50%',
      background: 'var(--deep-blue-gray)',
      display: 'grid',
      placeItems: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(EyeMark, {
    size: 22,
    tone: "lime"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      padding: '10px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-extrabold) 26px/1.1 var(--font-sans)',
      letterSpacing: 'var(--tracking)',
      color: 'var(--text-strong)'
    }
  }, "Hola, Kristin"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      font: 'var(--fw-regular) 14px var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, "Diagn\xF3stico en curso \xB7 semana 8 de 12")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "lime"
  }, "3 trackers activos"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "primary"
  }, "Nuevo diagn\xF3stico")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.02fr) minmax(0,1fr) minmax(0,1fr)',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    style: {
      display: 'grid',
      gap: 14,
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Equipo"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(RingStat, {
    value: avg,
    label: "",
    size: 92,
    thickness: 11,
    tone: "pink"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-semibold) 17px/1.25 var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, "Kristin Watson"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, "Design Manager"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Tag, null, "11 sesiones"), /*#__PURE__*/React.createElement(Tag, null, "56 hallazgos"), /*#__PURE__*/React.createElement(Tag, {
    tone: "lime"
  }, "12 tratamientos"))), /*#__PURE__*/React.createElement(Tile, {
    combo: "tile-warm",
    label: "Tareas prioritarias",
    value: 83,
    note: "promedio completado",
    active: tile === 'prioritarias',
    onPick: () => setTile('prioritarias')
  }), /*#__PURE__*/React.createElement(Tile, {
    combo: "tile-cool",
    label: "Tareas adicionales",
    value: 56,
    note: "promedio completado",
    active: tile === 'adicionales',
    onPick: () => setTile('adicionales')
  })), /*#__PURE__*/React.createElement(Panel, {
    style: {
      display: 'grid',
      gridTemplateColumns: 'auto minmax(0,1fr)',
      gap: 34,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Cobertura del diagn\xF3stico"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(NestedScale, {
    size: 244,
    data: COBERTURA,
    labels: false
  }))), /*#__PURE__*/React.createElement("dl", {
    style: {
      margin: 0,
      display: 'grid',
      gap: 16
    }
  }, COBERTURA.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: c.label,
    style: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gap: 12,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 14,
      height: 14,
      marginTop: 4,
      flex: 'none',
      background: ['var(--pink-100)', 'var(--pink-200)', 'var(--pink-paradise)'][i]
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("dt", {
    style: {
      font: 'var(--fw-extrabold) var(--fs-ui-lg)/1.15 var(--font-sans)',
      letterSpacing: 'var(--tracking)',
      color: 'var(--text-strong)'
    }
  }, c.display, " \xB7 ", c.label), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: '4px 0 0',
      font: 'var(--fw-regular) var(--fs-caption)/1.45 var(--font-sans)',
      color: 'var(--text-body)',
      maxWidth: '38ch'
    }
  }, c.note)))))), /*#__PURE__*/React.createElement(Panel, {
    style: {
      display: 'grid',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Anal\xEDtica de foco"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '8px 0 0',
      font: 'var(--fw-extrabold) 28px/1.1 var(--font-sans)',
      letterSpacing: 'var(--tracking)',
      color: 'var(--text-strong)'
    }
  }, "El foco ", /*#__PURE__*/React.createElement(Highlight, {
    tone: "lime"
  }, "sube ", avg, "%"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 6,
      background: 'var(--surface-sunken)',
      padding: 4,
      borderRadius: 'var(--radius-pill)'
    }
  }, Object.keys(RANGES).map(k => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setRange(k),
    style: {
      border: 'none',
      cursor: 'pointer',
      padding: '8px 16px',
      borderRadius: 'var(--radius-pill)',
      transition: 'var(--motion-hover)',
      background: range === k ? 'var(--deep-blue-gray)' : 'transparent',
      color: range === k ? 'var(--text-on-dark)' : 'var(--text-muted)',
      font: 'var(--fw-semibold) 13px var(--font-sans)',
      letterSpacing: 'var(--tracking-micro)'
    }
  }, k)))), /*#__PURE__*/React.createElement(FocusChart, {
    data: d,
    labels: d.labels
  }))), /*#__PURE__*/React.createElement("aside", {
    style: {
      background: 'var(--surface-card)',
      display: 'grid',
      gap: 2,
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: 'var(--fw-extrabold) 20px/1.2 var(--font-sans)',
      letterSpacing: 'var(--tracking)',
      color: 'var(--text-strong)'
    }
  }, "Mi agenda"), /*#__PURE__*/React.createElement(Badge, null, "Jul")), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: '16px 0 0',
      padding: 0,
      display: 'grid'
    }
  }, AGENDA.map((m, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '86px 1fr',
      gap: 14,
      padding: '14px 0',
      borderTop: i ? '1px solid var(--border-hairline)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-semibold) 12px/1.3 var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, m.date), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 2,
      font: 'var(--fw-extrabold) 15px/1.2 var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, m.time)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-semibold) 15px/1.3 var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, m.title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 3,
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, m.where))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost"
  }, "Ver toda la agenda \u2192"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 24px',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 4px',
      font: 'var(--fw-extrabold) 20px/1.2 var(--font-sans)',
      letterSpacing: 'var(--tracking)',
      color: 'var(--text-strong)'
    }
  }, "\xC1reas desarrolladas"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)',
      marginBottom: 16
    }
  }, "Cobertura del diagn\xF3stico por \xE1rea"), /*#__PURE__*/React.createElement(BarChart, {
    orientation: "horizontal",
    unit: "%",
    data: AREAS.map(a => ({
      label: a.label,
      value: a.value,
      tone: a.up ? 'pink' : 'muted'
    }))
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      padding: '22px 24px',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement(AuraField, {
    combo: "marea",
    opacity: 0.75
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'var(--surface-card)',
      padding: '16px 18px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Siguiente paso"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 14px',
      font: 'var(--fw-medium) 16px/1.35 var(--font-sans)',
      color: 'var(--text-strong)',
      maxWidth: '26ch'
    }
  }, "Cerrar la causa ra\xEDz de retenci\xF3n antes del viernes."), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "lime"
  }, "Abrir tratamiento")))));
}
Object.assign(window, {
  Dashboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/FocusChart.jsx
try { (() => {
/* Gráfica de foco: dos series suavizadas, cruceta en hover, leyenda conmutable.
   Interacción real: mover el cursor fija la semana; clic en la leyenda apaga una serie. */
const SERIES = [{
  key: 'max',
  label: 'Máximo de foco',
  color: 'var(--pink-paradise)'
}, {
  key: 'min',
  label: 'Falta de foco',
  color: 'var(--salt-air)',
  stroke: 'var(--lime-600)'
}];
function smooth(pts) {
  if (pts.length < 2) return '';
  let d = `M ${pts[0][0]} ${pts[0][1]}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const [x0, y0] = pts[i],
      [x1, y1] = pts[i + 1];
    const cx = (x0 + x1) / 2;
    d += ` C ${cx} ${y0}, ${cx} ${y1}, ${x1} ${y1}`;
  }
  return d;
}
function FocusChart({
  data,
  labels,
  height = 260
}) {
  const [hover, setHover] = React.useState(null);
  const [off, setOff] = React.useState({});
  const wrap = React.useRef(null);
  const W = 900,
    H = height,
    padT = 26,
    padB = 12;
  const n = data.max.length;
  const x = i => i / (n - 1) * W;
  const y = v => padT + (1 - v / 100) * (H - padT - padB);
  const paths = SERIES.map(s => ({
    ...s,
    d: smooth(data[s.key].map((v, i) => [x(i), y(v)]))
  }));
  const move = e => {
    const r = wrap.current.getBoundingClientRect();
    const i = Math.round((e.clientX - r.left) / r.width * (n - 1));
    setHover(Math.max(0, Math.min(n - 1, i)));
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    ref: wrap,
    onMouseMove: move,
    onMouseLeave: () => setHover(null),
    style: {
      position: 'relative',
      cursor: 'crosshair'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${W} ${H}`,
    style: {
      display: 'block',
      width: '100%',
      height
    },
    role: "img",
    "aria-label": "Foco por semana"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "focus-area",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "var(--pink-200)",
    stopOpacity: "0.5"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "var(--pink-100)",
    stopOpacity: "0"
  }))), [0, 25, 50, 75, 100].map(v => /*#__PURE__*/React.createElement("line", {
    key: v,
    x1: "0",
    x2: W,
    y1: y(v),
    y2: y(v),
    stroke: "var(--border-hairline)",
    strokeWidth: "1"
  })), !off.max && /*#__PURE__*/React.createElement("path", {
    d: `${paths[0].d} L ${W} ${y(0)} L 0 ${y(0)} Z`,
    fill: "url(#focus-area)"
  }), paths.map(s => off[s.key] ? null : /*#__PURE__*/React.createElement("path", {
    key: s.key,
    d: s.d,
    fill: "none",
    stroke: s.stroke || s.color,
    strokeWidth: "3",
    strokeLinecap: "round"
  })), hover != null && /*#__PURE__*/React.createElement("line", {
    x1: x(hover),
    x2: x(hover),
    y1: padT - 10,
    y2: H - padB,
    stroke: "var(--deep-blue-gray)",
    strokeWidth: "1",
    strokeDasharray: "4 4"
  }), hover != null && SERIES.map(s => off[s.key] ? null : /*#__PURE__*/React.createElement("circle", {
    key: s.key,
    cx: x(hover),
    cy: y(data[s.key][hover]),
    r: "6",
    fill: "var(--surface-card)",
    stroke: s.stroke || s.color,
    strokeWidth: "3"
  }))), hover != null && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: `${hover / (n - 1) * 100}%`,
      top: 0,
      transform: 'translate(-50%,-6px)',
      background: 'var(--surface-dark)',
      color: 'var(--text-on-dark)',
      padding: '8px 12px',
      whiteSpace: 'nowrap',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-extrabold) 13px/1.2 var(--font-sans)',
      letterSpacing: 'var(--tracking)'
    }
  }, labels[hover] || `Semana ${hover + 1}`), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      font: 'var(--fw-regular) 12px/1.3 var(--font-sans)',
      color: 'var(--salt-air)'
    }
  }, SERIES.filter(s => !off[s.key]).map(s => `${s.label}: ${data[s.key][hover]}%`).join(' · ')))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 8,
      font: 'var(--fw-medium) 13px var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, labels.map((l, i) => /*#__PURE__*/React.createElement("span", {
    key: i
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      marginTop: 14,
      flexWrap: 'wrap'
    }
  }, SERIES.map(s => /*#__PURE__*/React.createElement("button", {
    key: s.key,
    onClick: () => setOff(o => ({
      ...o,
      [s.key]: !o[s.key]
    })),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      padding: 0,
      opacity: off[s.key] ? 0.4 : 1,
      font: 'var(--fw-medium) 13px var(--font-sans)',
      letterSpacing: 'var(--tracking)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      background: s.stroke || s.color,
      flex: 'none'
    }
  }), s.label)), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, "Pasa el cursor para fijar la semana \xB7 clic en la leyenda para aislar una serie")));
}
Object.assign(window, {
  FocusChart
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/FocusChart.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CaseStudy.jsx
try { (() => {
const {
  Tag,
  SectionHeading,
  DiagnosisTrack,
  StatBlock,
  Quote,
  Divider,
  Callout
} = window.SightDesignSystem_3d4cc7;
function CaseStudy() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    pad: 80
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "lime"
  }, "Bienestar"), /*#__PURE__*/React.createElement(Tag, {
    tone: "quiet"
  }, "14 a\xF1os de mercado"), /*#__PURE__*/React.createElement(Tag, {
    tone: "quiet"
  }, "2025")), /*#__PURE__*/React.createElement(SectionHeading, {
    level: "title",
    eyebrow: "Caso de estudio",
    style: {
      maxWidth: '20ch'
    }
  }, "Recuperar vigencia sin perder clientela"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '32px 0 0',
      font: 'var(--type-body)',
      color: 'var(--text-strong)',
      maxWidth: 'var(--measure)'
    }
  }, "Una marca de bienestar con catorce a\xF1os de mercado ve\xEDa crecer su base y caer su recuerdo espont\xE1neo. La direcci\xF3n le\xEDa el s\xEDntoma como un problema de medios.")), /*#__PURE__*/React.createElement(Section, {
    surface: "var(--surface-warm)",
    color: "var(--text-strong)",
    pad: 64
  }, /*#__PURE__*/React.createElement(DiagnosisTrack, {
    orientation: "vertical",
    steps: [{
      title: 'Síntoma — recuerdo espontáneo en caída',
      body: 'Ventas estables, pero la marca dejó de aparecer sin ayuda en estudios de categoría.'
    }, {
      title: 'Causa raíz — la promesa dejó de explicarse',
      body: 'El sistema visual seguía funcionando; el relato de producto se había fragmentado en catorce submarcas sin jerarquía.'
    }, {
      title: 'Tratamiento — arquitectura y jerarquía',
      body: 'Reducción a tres líneas, jerarquía tipográfica única y una regla de nombramiento verificable por el equipo interno.'
    }, {
      title: 'Resultado — recuerdo y ticket al alza',
      body: 'Medición pre/post en ventana de seis meses con la misma inversión de medios.'
    }]
  })), /*#__PURE__*/React.createElement(Section, {
    pad: 80
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "3,4x",
    label: "Recuerdo de marca asistido",
    note: "Medici\xF3n pre/post, n=420, 6 meses."
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "+18%",
    label: "Ticket medio",
    note: "Dos trimestres tras el relanzamiento.",
    color: "var(--salmon)"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "-31%",
    label: "Coste de adquisici\xF3n",
    note: "Mismo presupuesto de medios.",
    color: "var(--deep-blue-gray)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 64
    }
  }), /*#__PURE__*/React.createElement(Divider, {
    tone: "accent"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 48
    }
  }), /*#__PURE__*/React.createElement(Quote, {
    attribution: "Direcci\xF3n de marca",
    role: "Cliente"
  }, "La marca segu\xEDa vendiendo, pero ya no explicaba por qu\xE9."), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 48
    }
  }), /*#__PURE__*/React.createElement(Callout, {
    tone: "pink",
    label: "Nota de m\xE9todo:"
  }, "las cifras corresponden a la ventana acordada al inicio del diagn\xF3stico. No reportamos m\xE9tricas elegidas despu\xE9s del resultado.")));
}
Object.assign(window, {
  CaseStudy
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CaseStudy.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
const {
  Button,
  Wordmark,
  Divider
} = window.SightDesignSystem_3d4cc7;
function Nav({
  page,
  go
}) {
  const items = [['home', 'Inicio'], ['method', 'Método'], ['case', 'Casos'], ['contact', 'Contacto']];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 10,
      background: 'rgba(250,250,250,0.86)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto',
      padding: '18px 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('home');
    },
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    lockup: "sight lab",
    size: 24
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 28
    }
  }, items.map(([k, l]) => /*#__PURE__*/React.createElement("a", {
    key: k,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go(k);
    },
    style: {
      textDecoration: 'none',
      font: 'var(--fw-medium) var(--fs-ui)/1 var(--font-sans)',
      letterSpacing: 'var(--tracking-micro)',
      color: page === k ? 'var(--text-accent)' : 'var(--text-strong)',
      paddingBottom: 4,
      borderBottom: page === k ? '2px solid var(--pink-paradise)' : '2px solid transparent'
    }
  }, l))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => go('contact')
  }, "Agendar diagn\xF3stico")));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-dark)',
      color: 'var(--text-on-dark)',
      padding: '64px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    lockup: "sight lab",
    size: 30,
    color: "var(--coconut-milk)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 32
    }
  }), /*#__PURE__*/React.createElement(Divider, {
    tone: "lime"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 24,
      font: 'var(--fw-light) var(--fs-ui)/1.5 var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      maxWidth: '38ch'
    }
  }, "Laboratorio de dise\xF1o estrat\xE9gico. Diagnosticamos, fortalecemos y proyectamos la salud de una marca."), /*#__PURE__*/React.createElement("span", null, "hola@sight.lab"), /*#__PURE__*/React.createElement("span", null, "Ciudad de M\xE9xico"))));
}
const Section = ({
  children,
  surface = 'var(--surface-page)',
  color = 'var(--text-body)',
  pad = 96
}) => /*#__PURE__*/React.createElement("section", {
  style: {
    background: surface,
    color,
    padding: `${pad}px 32px`
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: 'var(--page-max)',
    margin: '0 auto'
  }
}, children));
Object.assign(window, {
  Nav,
  Footer,
  Section
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
const {
  Field,
  Input,
  Select,
  Checkbox,
  Button,
  SectionHeading,
  Card,
  Callout
} = window.SightDesignSystem_3d4cc7;
function Contact() {
  const [sent, setSent] = React.useState(false);
  const [ok, setOk] = React.useState(false);
  if (sent) return /*#__PURE__*/React.createElement(Section, {
    pad: 128
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    level: "title",
    eyebrow: "Recibido"
  }, "Te escribimos en 48 horas con una primera lectura."), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 32
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => setSent(false)
  }, "Enviar otra solicitud"));
  return /*#__PURE__*/React.createElement(Section, {
    pad: 80
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.15fr)',
      gap: 64,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    level: "subtitle",
    eyebrow: "Contacto"
  }, "Cu\xE9ntanos el s\xEDntoma. Nosotros buscamos la causa."), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 32
    }
  }), /*#__PURE__*/React.createElement(Callout, {
    tone: "cool"
  }, "Leemos cada solicitud. Si no somos el aliado adecuado, te lo decimos y sugerimos a qui\xE9n acudir.")), /*#__PURE__*/React.createElement(Card, {
    surface: "plain",
    pad: "lg"
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'grid',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Nombre"
  }, /*#__PURE__*/React.createElement(Input, {
    required: true,
    placeholder: "Nombre y apellido"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Marca"
  }, /*#__PURE__*/React.createElement(Input, {
    required: true,
    placeholder: "Nombre comercial"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Correo de trabajo"
  }, /*#__PURE__*/React.createElement(Input, {
    type: "email",
    required: true,
    placeholder: "nombre@marca.com"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Sector"
  }, /*#__PURE__*/React.createElement(Select, {
    options: ['Bienestar', 'Diseño', 'Moda', 'Retail', 'Otro']
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "S\xEDntoma observado",
    hint: "Qu\xE9 est\xE1 fallando y desde cu\xE1ndo."
  }, /*#__PURE__*/React.createElement(Input, {
    multiline: true,
    placeholder: "Ej. el recuerdo espont\xE1neo cay\xF3 desde el relanzamiento de 2024."
  })), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Acepto el aviso de privacidad",
    checked: ok,
    onChange: setOk
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    disabled: !ok,
    style: {
      justifySelf: 'start'
    }
  }, "Enviar solicitud")))));
}
Object.assign(window, {
  Contact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
const {
  Button,
  Tag,
  Card,
  SectionHeading,
  StatBlock,
  Quote,
  Divider
} = window.SightDesignSystem_3d4cc7;
function Home({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--pink-paradise)',
      color: '#fff',
      padding: '128px 32px 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--page-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      opacity: .85,
      marginBottom: 20
    }
  }, "Laboratorio de dise\xF1o estrat\xE9gico"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: 'var(--fw-semibold) var(--fs-display)/1.1 var(--font-sans)',
      letterSpacing: '-0.045em',
      maxWidth: '17ch',
      textWrap: 'pretty'
    }
  }, "Traducimos incertidumbre en decisiones de dise\xF1o"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '32px 0 0',
      font: 'var(--fw-light) var(--fs-body)/1.35 var(--font-sans)',
      maxWidth: '46ch',
      opacity: .95
    }
  }, "Trabajamos con marcas consolidadas en bienestar, dise\xF1o y moda que buscan recuperar longevidad, relevancia y capacidad de adaptaci\xF3n."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginTop: 40,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "lime",
    size: "lg",
    onClick: () => go('contact')
  }, "Agendar diagn\xF3stico"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    style: {
      borderColor: '#fff',
      color: '#fff'
    },
    onClick: () => go('method')
  }, "Ver el m\xE9todo")))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.1fr)',
      gap: 64,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    level: "title",
    eyebrow: "Qu\xE9 hacemos"
  }, "No hacemos decoraci\xF3n"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'var(--type-body)',
      color: 'var(--text-strong)',
      maxWidth: 'var(--measure)'
    }
  }, "Diagnosticamos la causa ra\xEDz de un s\xEDntoma de marca, proponemos un tratamiento priorizado y medimos el resultado en una ventana acordada. Metodolog\xEDa rigurosa, visi\xF3n contempor\xE1nea."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, ['Diagnóstico de marca', 'Arquitectura de portafolio', 'Sistema visual', 'Vigencia y longevidad', 'Acompañamiento de dirección'].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    tone: "quiet"
  }, t)))))), /*#__PURE__*/React.createElement(Section, {
    surface: "var(--surface-warm)",
    color: "var(--text-strong)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "14",
    label: "Marcas consolidadas acompa\xF1adas",
    note: "Bienestar, dise\xF1o y moda, 2019\u20132026."
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "4",
    label: "Semanas de diagn\xF3stico",
    note: "Ventana fija, entregable cerrado.",
    color: "var(--deep-blue-gray)"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "82%",
    label: "Contin\xFAa a fase de tratamiento",
    note: "Sobre diagn\xF3sticos entregados.",
    color: "var(--salmon)"
  }))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeading, {
    level: "subtitle",
    eyebrow: "Casos"
  }, "S\xEDntoma, causa ra\xEDz, resultado"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 40
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 24
    }
  }, [['Bienestar', 'Recuperar vigencia sin perder clientela', 'Recuerdo asistido 3,4x'], ['Moda', 'Un portafolio que el retail podía explicar', 'Sell-through +22%'], ['Diseño', 'De estudio conocido a marca elegida', 'Coste de adquisición -31%']].map(([tag, title, res]) => /*#__PURE__*/React.createElement(Card, {
    key: title,
    surface: "plain",
    pad: "md",
    interactive: true,
    onClick: () => go('case')
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "lime"
  }, tag), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '20px 0 0',
      font: 'var(--fw-semibold) var(--fs-ui-lg)/1.2 var(--font-sans)',
      letterSpacing: 'var(--tracking)',
      color: 'var(--text-strong)'
    }
  }, title), /*#__PURE__*/React.createElement(Divider, {
    style: {
      margin: '20px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-medium) var(--fs-ui)/1.3 var(--font-sans)',
      color: 'var(--text-accent)'
    }
  }, res))))), /*#__PURE__*/React.createElement(Section, {
    surface: "var(--surface-dark)",
    color: "var(--text-on-dark)"
  }, /*#__PURE__*/React.createElement(Quote, {
    color: "#fff",
    attribution: "Direcci\xF3n de marca",
    role: "Cliente, sector bienestar",
    style: {
      maxWidth: '24ch'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-light) var(--fs-title)/1.15 var(--font-sans)',
      letterSpacing: 'var(--tracking)'
    }
  }, "La marca segu\xEDa vendiendo, pero ya no explicaba por qu\xE9."))));
}
Object.assign(window, {
  Home
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Method.jsx
try { (() => {
const {
  SectionHeading,
  DiagnosisTrack,
  Callout,
  Card,
  Badge,
  Divider,
  Button
} = window.SightDesignSystem_3d4cc7;
function Method({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    surface: "var(--light-lime)",
    color: "var(--deep-blue-gray)",
    pad: 96
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    level: "display",
    eyebrow: "M\xE9todo",
    color: "var(--deep-blue-gray)",
    style: {
      maxWidth: '16ch'
    }
  }, "Una marca no se cura. Se diagnostica.")), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(DiagnosisTrack, {
    steps: [{
      title: 'Síntoma',
      body: 'Lo que la marca ya está notando: caída de conversión, ruido interno, catálogo ilegible.'
    }, {
      title: 'Causa raíz',
      body: 'Auditoría de propuesta, arquitectura, sistema visual y evidencia de mercado.'
    }, {
      title: 'Tratamiento',
      body: 'Decisiones de diseño priorizadas por impacto y coste de implementación.'
    }, {
      title: 'Resultado',
      body: 'Métricas acordadas de antemano y medidas en ventana fija.'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 48
    }
  }), /*#__PURE__*/React.createElement(Callout, {
    tone: "lime",
    label: "Evidencia primero:"
  }, "ninguna fase avanza sin dato que la respalde. Si el diagn\xF3stico no encuentra causa ra\xEDz, lo decimos y no vendemos tratamiento.")), /*#__PURE__*/React.createElement(Section, {
    surface: "var(--surface-sunken)"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    level: "subtitle",
    eyebrow: "Entregables"
  }, "Qu\xE9 recibe la direcci\xF3n"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 32
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 2
    }
  }, [['Semana 1', 'Mapa de síntomas y entrevistas de dirección', 'positive'], ['Semana 2', 'Auditoría de sistema visual y verbal', 'positive'], ['Semana 3', 'Evidencia de mercado y lectura competitiva', 'attention'], ['Semana 4', 'Informe de causa raíz y plan de tratamiento', 'neutral']].map(([w, d, s]) => /*#__PURE__*/React.createElement(Card, {
    key: w,
    surface: "plain",
    pad: "sm",
    style: {
      display: 'grid',
      gridTemplateColumns: '120px minmax(0,1fr) 200px',
      gap: 24,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-semibold) var(--fs-ui)/1 var(--font-sans)',
      color: 'var(--text-accent)'
    }
  }, w), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-light) var(--fs-ui-lg)/1.3 var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }, d), /*#__PURE__*/React.createElement(Badge, {
    state: s
  }, s === 'positive' ? 'Entregado' : s === 'attention' ? 'En curso' : 'Programado'))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(Divider, {
    tone: "accent"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 32,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: 'var(--fw-extrabold) var(--fs-subtitle)/1.15 var(--font-sans)',
      letterSpacing: 'var(--tracking)',
      color: 'var(--text-strong)',
      maxWidth: '22ch'
    }
  }, "\xBFReconoces el s\xEDntoma pero no la causa?"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go('contact')
  }, "Agendar diagn\xF3stico"))));
}
Object.assign(window, {
  Method
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Method.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.DiagnosisTrack = __ds_scope.DiagnosisTrack;

__ds_ns.Highlight = __ds_scope.Highlight;

__ds_ns.PhotoFrame = __ds_scope.PhotoFrame;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.EyeMark = __ds_scope.EyeMark;

__ds_ns.Marquee = __ds_scope.Marquee;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.BarChart = __ds_scope.BarChart;

__ds_ns.LayerStack = __ds_scope.LayerStack;

__ds_ns.NestedScale = __ds_scope.NestedScale;

__ds_ns.RingStat = __ds_scope.RingStat;

__ds_ns.SpokeDiagram = __ds_scope.SpokeDiagram;

__ds_ns.TrendLine = __ds_scope.TrendLine;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.AuraField = __ds_scope.AuraField;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ColorBlock = __ds_scope.ColorBlock;

__ds_ns.ShapeMark = __ds_scope.ShapeMark;

__ds_ns.StickyNote = __ds_scope.StickyNote;

})();
