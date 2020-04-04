! function (e) {
  function t(r) {
    if (n[r]) return n[r].exports;
    var o = n[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
  }
  var n = {};
  t.m = e, t.c = n, t.d = function (e, n, r) {
    t.o(e, n) || Object.defineProperty(e, n, {
      configurable: !1,
      enumerable: !0,
      get: r
    })
  }, t.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e.default
    } : function () {
      return e
    };
    return t.d(n, "a", n), n
  }, t.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, t.p = "", t(t.s = 1)
}([function (e, t, n) {
  var r = n(15),
    o = r.Symbol;
  e.exports = o
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var r = (n(2), n(24));
  n.n(r)
}, function (e, t, n) {
  "use strict";
  var r = n(3),
    o = (n.n(r), n(4)),
    l = (n.n(o), n(5)),
    i = n.n(l),
    s = n(21),
    c = n.n(s),
    a = n(22),
    u = n.n(a),
    p = wp.i18n.__,
    f = wp.blocks.registerBlockType,
    d = wp.element.Fragment,
    m = wp.editor,
    v = m.InnerBlocks,
    h = m.InspectorControls,
    b = m.BlockControls,
    w = wp.components,
    g = w.PanelBody,
    y = w.TextControl,
    x = w.ToggleControl,
    E = w.RangeControl,
    S = (w.BaseControl, w.Toolbar),
    T = w.IconButton,
    k = w.SVG,
    j = w.Path,
    O = ["cb/slide"],
    C = u()(function (e) {
      return i()(e, function () {
        return ["cb/slide"]
      })
    }),
    P = {
      slides: {
        type: "number",
        default: 4
      },
      slidesToShow: {
        type: "number",
        default: 3
      },
      slidesToScroll: {
        type: "number",
        default: 1
      },
      speed: {
        type: "number",
        default: 300
      },
      slidePadding: {
        type: "boolean",
        default: !1
      },
      arrows: {
        type: "boolean",
        default: !0
      },
      dots: {
        type: "boolean",
        default: !0
      },
      infinite: {
        type: "boolean",
        default: !1
      },
      responsiveWidth: {
        type: "number",
        default: 768
      },
      responsiveSlides: {
        type: "number",
        default: 1
      },
      autoplay: {
        type: "boolean",
        default: !1
      },
      autoplaySpeed: {
        type: "number",
        default: 3000
      }
    };
  f("cb/carousel", {
    title: p("Carousel Block"),
    icon: wp.element.createElement(k, {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24"
    }, wp.element.createElement(j, {
      d: "M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z"
    }), wp.element.createElement(j, {
      d: "M0 0h24v24H0z",
      fill: "none"
    })),
    category: "common",
    keywords: [p("carousel"), p("slide"), p("slideshow")],
    attributes: P,
    description: p("Use the + and - buttons in the toolbar to add/remove slides. Preview slides using the scrollbar.", "cb"),
    supports: {
      align: ["wide", "full"],
      html: !1
    },
    edit: function (e) {
      var t = e.attributes,
        n = e.setAttributes,
        r = e.className,
        o = t.slides,
        l = t.slidesToShow,
        i = t.slidesToScroll,
        s = t.speed,
        a = t.slidePadding,
        u = t.arrows,
        f = t.dots,
        m = t.responsiveWidth,
        w = t.responsiveSlides,
        aP = t.autoplay,
        aS = t.autoplaySpeed,
        inf = t.infinite;
      return wp.element.createElement(d, null, wp.element.createElement(b, null, wp.element.createElement(S, null, wp.element.createElement(T, {
        className: "components-toolbar__control",
        label: p("Remove slide", "cb"),
        icon: "minus",
        onClick: function () {
          return n({
            slides: o > 1 ? o - 1 : 1
          })
        }
      })), wp.element.createElement(S, null, wp.element.createElement(T, {
        className: "components-toolbar__control",
        label: p("Add slide", "cb"),
        icon: "plus",
        onClick: function () {
          return n({
            slides: o + 1
          })
        }
      }))), wp.element.createElement(h, null, wp.element.createElement(g, {
        title: p("General Settings", "cb"),
        initialOpen: !0
      }, wp.element.createElement(E, {
        className: "slides-to-show",
        label: p("Slides per view", "cb"),
        value: l,
        onChange: function (e) {
          return n({
            slidesToShow: e
          })
        },
        min: 1,
        max: 6
      }), wp.element.createElement(y, {
        type: "number",
        label: p("Slides to scroll at a time", "cb"),
        value: i,
        onChange: function (e) {
          return n({
            slidesToScroll: parseInt(e, 10)
          })
        }
      }), wp.element.createElement(y, {
        type: "number",
        label: p("Slide animation speed (ms)", "cb"),
        value: s,
        onChange: function (e) {
          return n({
            speed: parseInt(e, 10)
          })
        }
      }), wp.element.createElement(x, {
        label: p("Slide padding", "cb"),
        checked: !!a,
        onChange: function (e) {
          return n({
            slidePadding: e
          })
        }
      }), wp.element.createElement(x, {
        label: p("Prev/next arrows", "cb"),
        checked: !!u,
        onChange: function (e) {
          return n({
            arrows: e
          })
        }
      }), wp.element.createElement(x, {
        label: p("Dots navigation", "cb"),
        checked: !!f,
        onChange: function (e) {
          return n({
            dots: e
          })
        }
      }), wp.element.createElement(x, {
        label: p("Infinite", "cb"),
        checked: !!inf,
        onChange: function (e) {
          return n({
            infinite: e
          })
        }
      }), wp.element.createElement(x, {
        label: p("Autoplay", "cb"),
        checked: !!aP,
        onChange: function (e) {
          return n({
            autoplay: e
          })
        }
      }), wp.element.createElement(y, {
        type: "number",
        label: p("Autoplay speed (ms)", "cb"),
        value: aS,
        onChange: function (e) {
          return n({
            autoplaySpeed: parseInt(e, 10)
          })
        }
      })
      ), wp.element.createElement(g, {
        title: p("Responsive Settings", "cb"),
        initialOpen: !1
      }, wp.element.createElement(y, {
        type: "number",
        label: p("Screen width (px)", "cb"),
        value: m,
        onChange: function (e) {
          return n({
            responsiveWidth: parseInt(e, 10)
          })
        }
      }), wp.element.createElement(E, {
        label: p("Slides to show", "cb"),
        value: w,
        help: p("# of slides to show at given screen width", "cb"),
        onChange: function (e) {
          return n({
            responsiveSlides: e
          })
        },
        min: 1,
        max: 6
      }))), wp.element.createElement("div", {
        className: c()(r, "cb-has-" + o + "-slides", "cb-shows-" + l + "-slides")
      }, wp.element.createElement(v, {
        template: C(o),
        templateLock: "all",
        allowedBlocks: O
      })))
    },
    save: function (e) {
      var t = e.attributes,
        n = (t.slides, t.slidesToShow),
        r = t.slidesToScroll,
        o = t.speed,
        l = t.slidePadding,
        i = t.arrows,
        s = t.dots,
        a = t.responsiveWidth,
        u = t.responsiveSlides,
        aP = t.autoplay,
        aS = t.autoplaySpeed,
        inf = t.infiinte,
        p = {
          slidesToShow: n,
          slidesToScroll: r,
          speed: o,
          arrows: i,
          dots: s,
          infinite: inf,
          responsive: [Object.assign({}, a ? {
            breakpoint: a + 1
          } : {
              breakpoint: 993
            }, {
            settings: Object.assign({}, u ? {
              slidesToShow: u
            } : {
                slidesToShow: 1
              })
          })],
          autoplay: aP,
          autoplaySpeed: aS
        };
      return wp.element.createElement("div", {
        className: c()({
          "cb-single-slide": 1 == n,
          "cb-padding": l
        }),
        "data-slick": JSON.stringify(p)
      }, wp.element.createElement(v.Content, null))
    }
  })
}, function (e, t) { }, function (e, t) { }, function (e, t, n) {
  function r(e, t) {
    if ((e = i(e)) < 1 || e > s) return [];
    var n = c,
      r = a(e, c);
    t = l(t), e -= c;
    for (var u = o(r, t); ++n < e;) t(n);
    return u
  }
  var o = n(6),
    l = n(7),
    i = n(9),
    s = 9007199254740991,
    c = 4294967295,
    a = Math.min;
  e.exports = r
}, function (e, t) {
  function n(e, t) {
    for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
    return r
  }
  e.exports = n
}, function (e, t, n) {
  function r(e) {
    return "function" == typeof e ? e : o
  }
  var o = n(8);
  e.exports = r
}, function (e, t) {
  function n(e) {
    return e
  }
  e.exports = n
}, function (e, t, n) {
  function r(e) {
    var t = o(e),
      n = t % 1;
    return t === t ? n ? t - n : t : 0
  }
  var o = n(10);
  e.exports = r
}, function (e, t, n) {
  function r(e) {
    if (!e) return 0 === e ? e : 0;
    if ((e = o(e)) === l || e === -l) {
      return (e < 0 ? -1 : 1) * i
    }
    return e === e ? e : 0
  }
  var o = n(11),
    l = 1 / 0,
    i = 1.7976931348623157e308;
  e.exports = r
}, function (e, t, n) {
  function r(e) {
    if ("number" == typeof e) return e;
    if (l(e)) return i;
    if (o(e)) {
      var t = "function" == typeof e.valueOf ? e.valueOf() : e;
      e = o(t) ? t + "" : t
    }
    if ("string" != typeof e) return 0 === e ? e : +e;
    e = e.replace(s, "");
    var n = a.test(e);
    return n || u.test(e) ? p(e.slice(2), n ? 2 : 8) : c.test(e) ? i : +e
  }
  var o = n(12),
    l = n(13),
    i = NaN,
    s = /^\s+|\s+$/g,
    c = /^[-+]0x[0-9a-f]+$/i,
    a = /^0b[01]+$/i,
    u = /^0o[0-7]+$/i,
    p = parseInt;
  e.exports = r
}, function (e, t) {
  function n(e) {
    var t = typeof e;
    return null != e && ("object" == t || "function" == t)
  }
  e.exports = n
}, function (e, t, n) {
  function r(e) {
    return "symbol" == typeof e || l(e) && o(e) == i
  }
  var o = n(14),
    l = n(20),
    i = "[object Symbol]";
  e.exports = r
}, function (e, t, n) {
  function r(e) {
    return null == e ? void 0 === e ? c : s : a && a in Object(e) ? l(e) : i(e)
  }
  var o = n(0),
    l = n(18),
    i = n(19),
    s = "[object Null]",
    c = "[object Undefined]",
    a = o ? o.toStringTag : void 0;
  e.exports = r
}, function (e, t, n) {
  var r = n(16),
    o = "object" == typeof self && self && self.Object === Object && self,
    l = r || o || Function("return this")();
  e.exports = l
}, function (e, t, n) {
  (function (t) {
    var n = "object" == typeof t && t && t.Object === Object && t;
    e.exports = n
  }).call(t, n(17))
}, function (e, t) {
  var n;
  n = function () {
    return this
  }();
  try {
    n = n || Function("return this")() || (0, eval)("this")
  } catch (e) {
    "object" === typeof window && (n = window)
  }
  e.exports = n
}, function (e, t, n) {
  function r(e) {
    var t = i.call(e, c),
      n = e[c];
    try {
      e[c] = void 0;
      var r = !0
    } catch (e) { }
    var o = s.call(e);
    return r && (t ? e[c] = n : delete e[c]), o
  }
  var o = n(0),
    l = Object.prototype,
    i = l.hasOwnProperty,
    s = l.toString,
    c = o ? o.toStringTag : void 0;
  e.exports = r
}, function (e, t) {
  function n(e) {
    return o.call(e)
  }
  var r = Object.prototype,
    o = r.toString;
  e.exports = n
}, function (e, t) {
  function n(e) {
    return null != e && "object" == typeof e
  }
  e.exports = n
}, function (e, t, n) {
  var r, o;
  ! function () {
    "use strict";

    function n() {
      for (var e = [], t = 0; t < arguments.length; t++) {
        var r = arguments[t];
        if (r) {
          var o = typeof r;
          if ("string" === o || "number" === o) e.push(r);
          else if (Array.isArray(r) && r.length) {
            var i = n.apply(null, r);
            i && e.push(i)
          } else if ("object" === o)
            for (var s in r) l.call(r, s) && r[s] && e.push(s)
        }
      }
      return e.join(" ")
    }
    var l = {}.hasOwnProperty;
    "undefined" !== typeof e && e.exports ? (n.default = n, e.exports = n) : (r = [], void 0 !== (o = function () {
      return n
    }.apply(t, r)) && (e.exports = o))
  }()
}, function (e, t, n) {
  (function (t) {
    e.exports = function (e, n) {
      function r() {
        var t, n, r = l,
          c = arguments.length;
        e: for (; r;) {
          if (r.args.length === arguments.length) {
            for (n = 0; n < c; n++)
              if (r.args[n] !== arguments[n]) {
                r = r.next;
                continue e
              }
            return r !== l && (r === i && (i = r.prev), r.prev.next = r.next, r.next && (r.next.prev = r.prev), r.next = l, r.prev = null, l.prev = r, l = r), r.val
          }
          r = r.next
        }
        for (t = new Array(c), n = 0; n < c; n++) t[n] = arguments[n];
        return r = {
          args: t,
          val: e.apply(null, t)
        }, l ? (l.prev = r, r.next = l) : i = r, s === o ? (i = i.prev, i.next = null) : s++, l = r, r.val
      }
      var o, l, i, s = 0;
      return n && n.maxSize && (o = n.maxSize), r.clear = function () {
        l = null, i = null, s = 0
      }, "test" === t.env.NODE_ENV && (r.getCache = function () {
        return [l, i, s]
      }), r
    }
  }).call(t, n(23))
}, function (e, t) {
  function n() {
    throw new Error("setTimeout has not been defined")
  }

  function r() {
    throw new Error("clearTimeout has not been defined")
  }

  function o(e) {
    if (u === setTimeout) return setTimeout(e, 0);
    if ((u === n || !u) && setTimeout) return u = setTimeout, setTimeout(e, 0);
    try {
      return u(e, 0)
    } catch (t) {
      try {
        return u.call(null, e, 0)
      } catch (t) {
        return u.call(this, e, 0)
      }
    }
  }

  function l(e) {
    if (p === clearTimeout) return clearTimeout(e);
    if ((p === r || !p) && clearTimeout) return p = clearTimeout, clearTimeout(e);
    try {
      return p(e)
    } catch (t) {
      try {
        return p.call(null, e)
      } catch (t) {
        return p.call(this, e)
      }
    }
  }

  function i() {
    v && d && (v = !1, d.length ? m = d.concat(m) : h = -1, m.length && s())
  }

  function s() {
    if (!v) {
      var e = o(i);
      v = !0;
      for (var t = m.length; t;) {
        for (d = m, m = []; ++h < t;) d && d[h].run();
        h = -1, t = m.length
      }
      d = null, v = !1, l(e)
    }
  }

  function c(e, t) {
    this.fun = e, this.array = t
  }

  function a() { }
  var u, p, f = e.exports = {};
  ! function () {
    try {
      u = "function" === typeof setTimeout ? setTimeout : n
    } catch (e) {
      u = n
    }
    try {
      p = "function" === typeof clearTimeout ? clearTimeout : r
    } catch (e) {
      p = r
    }
  }();
  var d, m = [],
    v = !1,
    h = -1;
  f.nextTick = function (e) {
    var t = new Array(arguments.length - 1);
    if (arguments.length > 1)
      for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    m.push(new c(e, t)), 1 !== m.length || v || o(s)
  }, c.prototype.run = function () {
    this.fun.apply(null, this.array)
  }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = a, f.addListener = a, f.once = a, f.off = a, f.removeListener = a, f.removeAllListeners = a, f.emit = a, f.prependListener = a, f.prependOnceListener = a, f.listeners = function (e) {
    return []
  }, f.binding = function (e) {
    throw new Error("process.binding is not supported")
  }, f.cwd = function () {
    return "/"
  }, f.chdir = function (e) {
    throw new Error("process.chdir is not supported")
  }, f.umask = function () {
    return 0
  }
}, function (e, t) {
  var n = wp.i18n.__,
    r = wp.blocks.registerBlockType,
    o = wp.editor.InnerBlocks,
    l = wp.components,
    i = l.SVG,
    s = l.Path;
  r("cb/slide", {
    title: n("Slide"),
    parent: ["cb/carousel-block"],
    icon: wp.element.createElement(i, {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24"
    }, wp.element.createElement(s, {
      d: "M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z"
    }), wp.element.createElement(s, {
      d: "M0 0h24v24H0z",
      fill: "none"
    })),
    description: n("A single slide within the carousel block."),
    category: "common",
    supports: {
      html: !1
    },
    edit: function (e) {
      return wp.element.createElement(o, {
        templateLock: !1
      })
    },
    save: function () {
      return wp.element.createElement("div", null, wp.element.createElement(o.Content, null))
    }
  })
}]);
