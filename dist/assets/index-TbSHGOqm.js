function Mp(e, t) {
  for (var r = 0; r < t.length; r++) {
    const n = t[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const l in n)
        if (l !== "default" && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(n, l);
          o && Object.defineProperty(e, l, o.get ? o : { enumerable: !0, get: () => n[l] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) n(l);
  new MutationObserver((l) => {
    for (const o of l) if (o.type === "childList") for (const c of o.addedNodes) c.tagName === "LINK" && c.rel === "modulepreload" && n(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(l) {
    const o = {};
    return l.integrity && (o.integrity = l.integrity), l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? (o.credentials = "include") : l.crossOrigin === "anonymous" ? (o.credentials = "omit") : (o.credentials = "same-origin"), o;
  }
  function n(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = r(l);
    fetch(l.href, o);
  }
})();
function Fp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ru = { exports: {} },
  ii = {},
  Lu = { exports: {} },
  I = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fn = Symbol.for("react.element"),
  Ap = Symbol.for("react.portal"),
  Up = Symbol.for("react.fragment"),
  Bp = Symbol.for("react.strict_mode"),
  Wp = Symbol.for("react.profiler"),
  Vp = Symbol.for("react.provider"),
  Hp = Symbol.for("react.context"),
  Qp = Symbol.for("react.forward_ref"),
  Kp = Symbol.for("react.suspense"),
  Gp = Symbol.for("react.memo"),
  Yp = Symbol.for("react.lazy"),
  Ks = Symbol.iterator;
function Xp(e) {
  return e === null || typeof e != "object" ? null : ((e = (Ks && e[Ks]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var Iu = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  zu = Object.assign,
  Du = {};
function Ar(e, t, r) {
  (this.props = e), (this.context = t), (this.refs = Du), (this.updater = r || Iu);
}
Ar.prototype.isReactComponent = {};
Ar.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Ar.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function $u() {}
$u.prototype = Ar.prototype;
function Mc(e, t, r) {
  (this.props = e), (this.context = t), (this.refs = Du), (this.updater = r || Iu);
}
var Fc = (Mc.prototype = new $u());
Fc.constructor = Mc;
zu(Fc, Ar.prototype);
Fc.isPureReactComponent = !0;
var Gs = Array.isArray,
  Mu = Object.prototype.hasOwnProperty,
  Ac = { current: null },
  Fu = { key: !0, ref: !0, __self: !0, __source: !0 };
function Au(e, t, r) {
  var n,
    l = {},
    o = null,
    c = null;
  if (t != null) for (n in (t.ref !== void 0 && (c = t.ref), t.key !== void 0 && (o = "" + t.key), t)) Mu.call(t, n) && !Fu.hasOwnProperty(n) && (l[n] = t[n]);
  var s = arguments.length - 2;
  if (s === 1) l.children = r;
  else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
    l.children = a;
  }
  if (e && e.defaultProps) for (n in ((s = e.defaultProps), s)) l[n] === void 0 && (l[n] = s[n]);
  return { $$typeof: Fn, type: e, key: o, ref: c, props: l, _owner: Ac.current };
}
function Jp(e, t) {
  return { $$typeof: Fn, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Uc(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Fn;
}
function Zp(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (r) {
      return t[r];
    })
  );
}
var Ys = /\/+/g;
function Gi(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Zp("" + e.key) : t.toString(36);
}
function pl(e, t, r, n, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var c = !1;
  if (e === null) c = !0;
  else
    switch (o) {
      case "string":
      case "number":
        c = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Fn:
          case Ap:
            c = !0;
        }
    }
  if (c)
    return (
      (c = e),
      (l = l(c)),
      (e = n === "" ? "." + Gi(c, 0) : n),
      Gs(l)
        ? ((r = ""),
          e != null && (r = e.replace(Ys, "$&/") + "/"),
          pl(l, t, r, "", function (u) {
            return u;
          }))
        : l != null && (Uc(l) && (l = Jp(l, r + (!l.key || (c && c.key === l.key) ? "" : ("" + l.key).replace(Ys, "$&/") + "/") + e)), t.push(l)),
      1
    );
  if (((c = 0), (n = n === "" ? "." : n + ":"), Gs(e)))
    for (var s = 0; s < e.length; s++) {
      o = e[s];
      var a = n + Gi(o, s);
      c += pl(o, t, r, a, l);
    }
  else if (((a = Xp(e)), typeof a == "function")) for (e = a.call(e), s = 0; !(o = e.next()).done; ) (o = o.value), (a = n + Gi(o, s++)), (c += pl(o, t, r, a, l));
  else if (o === "object") throw ((t = String(e)), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead."));
  return c;
}
function Yn(e, t, r) {
  if (e == null) return e;
  var n = [],
    l = 0;
  return (
    pl(e, n, "", "", function (o) {
      return t.call(r, o, l++);
    }),
    n
  );
}
function qp(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (r) {
          (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = r));
        },
        function (r) {
          (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = r));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var xe = { current: null },
  hl = { transition: null },
  eh = { ReactCurrentDispatcher: xe, ReactCurrentBatchConfig: hl, ReactCurrentOwner: Ac };
I.Children = {
  map: Yn,
  forEach: function (e, t, r) {
    Yn(
      e,
      function () {
        t.apply(this, arguments);
      },
      r
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Yn(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Yn(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Uc(e)) throw Error("React.Children.only expected to receive a single React element child.");
    return e;
  },
};
I.Component = Ar;
I.Fragment = Up;
I.Profiler = Wp;
I.PureComponent = Mc;
I.StrictMode = Bp;
I.Suspense = Kp;
I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = eh;
I.cloneElement = function (e, t, r) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var n = zu({}, e.props),
    l = e.key,
    o = e.ref,
    c = e._owner;
  if (t != null) {
    if ((t.ref !== void 0 && ((o = t.ref), (c = Ac.current)), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps)) var s = e.type.defaultProps;
    for (a in t) Mu.call(t, a) && !Fu.hasOwnProperty(a) && (n[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) n.children = r;
  else if (1 < a) {
    s = Array(a);
    for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
    n.children = s;
  }
  return { $$typeof: Fn, type: e.type, key: l, ref: o, props: n, _owner: c };
};
I.createContext = function (e) {
  return (e = { $$typeof: Hp, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }), (e.Provider = { $$typeof: Vp, _context: e }), (e.Consumer = e);
};
I.createElement = Au;
I.createFactory = function (e) {
  var t = Au.bind(null, e);
  return (t.type = e), t;
};
I.createRef = function () {
  return { current: null };
};
I.forwardRef = function (e) {
  return { $$typeof: Qp, render: e };
};
I.isValidElement = Uc;
I.lazy = function (e) {
  return { $$typeof: Yp, _payload: { _status: -1, _result: e }, _init: qp };
};
I.memo = function (e, t) {
  return { $$typeof: Gp, type: e, compare: t === void 0 ? null : t };
};
I.startTransition = function (e) {
  var t = hl.transition;
  hl.transition = {};
  try {
    e();
  } finally {
    hl.transition = t;
  }
};
I.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
I.useCallback = function (e, t) {
  return xe.current.useCallback(e, t);
};
I.useContext = function (e) {
  return xe.current.useContext(e);
};
I.useDebugValue = function () {};
I.useDeferredValue = function (e) {
  return xe.current.useDeferredValue(e);
};
I.useEffect = function (e, t) {
  return xe.current.useEffect(e, t);
};
I.useId = function () {
  return xe.current.useId();
};
I.useImperativeHandle = function (e, t, r) {
  return xe.current.useImperativeHandle(e, t, r);
};
I.useInsertionEffect = function (e, t) {
  return xe.current.useInsertionEffect(e, t);
};
I.useLayoutEffect = function (e, t) {
  return xe.current.useLayoutEffect(e, t);
};
I.useMemo = function (e, t) {
  return xe.current.useMemo(e, t);
};
I.useReducer = function (e, t, r) {
  return xe.current.useReducer(e, t, r);
};
I.useRef = function (e) {
  return xe.current.useRef(e);
};
I.useState = function (e) {
  return xe.current.useState(e);
};
I.useSyncExternalStore = function (e, t, r) {
  return xe.current.useSyncExternalStore(e, t, r);
};
I.useTransition = function () {
  return xe.current.useTransition();
};
I.version = "18.2.0";
Lu.exports = I;
var S = Lu.exports;
const Uu = Fp(S),
  th = Mp({ __proto__: null, default: Uu }, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rh = S,
  nh = Symbol.for("react.element"),
  lh = Symbol.for("react.fragment"),
  ih = Object.prototype.hasOwnProperty,
  oh = rh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  ch = { key: !0, ref: !0, __self: !0, __source: !0 };
function Bu(e, t, r) {
  var n,
    l = {},
    o = null,
    c = null;
  r !== void 0 && (o = "" + r), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (c = t.ref);
  for (n in t) ih.call(t, n) && !ch.hasOwnProperty(n) && (l[n] = t[n]);
  if (e && e.defaultProps) for (n in ((t = e.defaultProps), t)) l[n] === void 0 && (l[n] = t[n]);
  return { $$typeof: nh, type: e, key: o, ref: c, props: l, _owner: oh.current };
}
ii.Fragment = lh;
ii.jsx = Bu;
ii.jsxs = Bu;
Ru.exports = ii;
var i = Ru.exports,
  Lo = {},
  Wu = { exports: {} },
  Oe = {},
  Vu = { exports: {} },
  Hu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(O, R) {
    var L = O.length;
    O.push(R);
    e: for (; 0 < L; ) {
      var X = (L - 1) >>> 1,
        te = O[X];
      if (0 < l(te, R)) (O[X] = R), (O[L] = te), (L = X);
      else break e;
    }
  }
  function r(O) {
    return O.length === 0 ? null : O[0];
  }
  function n(O) {
    if (O.length === 0) return null;
    var R = O[0],
      L = O.pop();
    if (L !== R) {
      O[0] = L;
      e: for (var X = 0, te = O.length, Kn = te >>> 1; X < Kn; ) {
        var Ht = 2 * (X + 1) - 1,
          Ki = O[Ht],
          Qt = Ht + 1,
          Gn = O[Qt];
        if (0 > l(Ki, L)) Qt < te && 0 > l(Gn, Ki) ? ((O[X] = Gn), (O[Qt] = L), (X = Qt)) : ((O[X] = Ki), (O[Ht] = L), (X = Ht));
        else if (Qt < te && 0 > l(Gn, L)) (O[X] = Gn), (O[Qt] = L), (X = Qt);
        else break e;
      }
    }
    return R;
  }
  function l(O, R) {
    var L = O.sortIndex - R.sortIndex;
    return L !== 0 ? L : O.id - R.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var c = Date,
      s = c.now();
    e.unstable_now = function () {
      return c.now() - s;
    };
  }
  var a = [],
    u = [],
    f = 1,
    d = null,
    p = 3,
    v = !1,
    x = !1,
    g = !1,
    j = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function y(O) {
    for (var R = r(u); R !== null; ) {
      if (R.callback === null) n(u);
      else if (R.startTime <= O) n(u), (R.sortIndex = R.expirationTime), t(a, R);
      else break;
      R = r(u);
    }
  }
  function w(O) {
    if (((g = !1), y(O), !x))
      if (r(a) !== null) (x = !0), Hi(C);
      else {
        var R = r(u);
        R !== null && Qi(w, R.startTime - O);
      }
  }
  function C(O, R) {
    (x = !1), g && ((g = !1), m(T), (T = -1)), (v = !0);
    var L = p;
    try {
      for (y(R), d = r(a); d !== null && (!(d.expirationTime > R) || (O && !ie())); ) {
        var X = d.callback;
        if (typeof X == "function") {
          (d.callback = null), (p = d.priorityLevel);
          var te = X(d.expirationTime <= R);
          (R = e.unstable_now()), typeof te == "function" ? (d.callback = te) : d === r(a) && n(a), y(R);
        } else n(a);
        d = r(a);
      }
      if (d !== null) var Kn = !0;
      else {
        var Ht = r(u);
        Ht !== null && Qi(w, Ht.startTime - R), (Kn = !1);
      }
      return Kn;
    } finally {
      (d = null), (p = L), (v = !1);
    }
  }
  var P = !1,
    N = null,
    T = -1,
    D = 5,
    b = -1;
  function ie() {
    return !(e.unstable_now() - b < D);
  }
  function Hr() {
    if (N !== null) {
      var O = e.unstable_now();
      b = O;
      var R = !0;
      try {
        R = N(!0, O);
      } finally {
        R ? Qr() : ((P = !1), (N = null));
      }
    } else P = !1;
  }
  var Qr;
  if (typeof h == "function")
    Qr = function () {
      h(Hr);
    };
  else if (typeof MessageChannel < "u") {
    var Qs = new MessageChannel(),
      $p = Qs.port2;
    (Qs.port1.onmessage = Hr),
      (Qr = function () {
        $p.postMessage(null);
      });
  } else
    Qr = function () {
      j(Hr, 0);
    };
  function Hi(O) {
    (N = O), P || ((P = !0), Qr());
  }
  function Qi(O, R) {
    T = j(function () {
      O(e.unstable_now());
    }, R);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (O) {
      O.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || v || ((x = !0), Hi(C));
    }),
    (e.unstable_forceFrameRate = function (O) {
      0 > O || 125 < O ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : (D = 0 < O ? Math.floor(1e3 / O) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return r(a);
    }),
    (e.unstable_next = function (O) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = p;
      }
      var L = p;
      p = R;
      try {
        return O();
      } finally {
        p = L;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (O, R) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var L = p;
      p = O;
      try {
        return R();
      } finally {
        p = L;
      }
    }),
    (e.unstable_scheduleCallback = function (O, R, L) {
      var X = e.unstable_now();
      switch ((typeof L == "object" && L !== null ? ((L = L.delay), (L = typeof L == "number" && 0 < L ? X + L : X)) : (L = X), O)) {
        case 1:
          var te = -1;
          break;
        case 2:
          te = 250;
          break;
        case 5:
          te = 1073741823;
          break;
        case 4:
          te = 1e4;
          break;
        default:
          te = 5e3;
      }
      return (te = L + te), (O = { id: f++, callback: R, priorityLevel: O, startTime: L, expirationTime: te, sortIndex: -1 }), L > X ? ((O.sortIndex = L), t(u, O), r(a) === null && O === r(u) && (g ? (m(T), (T = -1)) : (g = !0), Qi(w, L - X))) : ((O.sortIndex = te), t(a, O), x || v || ((x = !0), Hi(C))), O;
    }),
    (e.unstable_shouldYield = ie),
    (e.unstable_wrapCallback = function (O) {
      var R = p;
      return function () {
        var L = p;
        p = R;
        try {
          return O.apply(this, arguments);
        } finally {
          p = L;
        }
      };
    });
})(Hu);
Vu.exports = Hu;
var sh = Vu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qu = S,
  Pe = sh;
function E(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Ku = new Set(),
  yn = {};
function cr(e, t) {
  br(e, t), br(e + "Capture", t);
}
function br(e, t) {
  for (yn[e] = t, e = 0; e < t.length; e++) Ku.add(t[e]);
}
var it = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
  Io = Object.prototype.hasOwnProperty,
  ah = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Xs = {},
  Js = {};
function uh(e) {
  return Io.call(Js, e) ? !0 : Io.call(Xs, e) ? !1 : ah.test(e) ? (Js[e] = !0) : ((Xs[e] = !0), !1);
}
function fh(e, t, r, n) {
  if (r !== null && r.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return n ? !1 : r !== null ? !r.acceptsBooleans : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function dh(e, t, r, n) {
  if (t === null || typeof t > "u" || fh(e, t, r, n)) return !0;
  if (n) return !1;
  if (r !== null)
    switch (r.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ye(e, t, r, n, l, o, c) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4), (this.attributeName = n), (this.attributeNamespace = l), (this.mustUseProperty = r), (this.propertyName = e), (this.type = t), (this.sanitizeURL = o), (this.removeEmptyString = c);
}
var se = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
  se[e] = new ye(e, 0, !1, e, null, !1, !1);
});
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  se[t] = new ye(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  se[e] = new ye(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
  se[e] = new ye(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) {
  se[e] = new ye(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  se[e] = new ye(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  se[e] = new ye(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  se[e] = new ye(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  se[e] = new ye(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Bc = /[\-:]([a-z])/g;
function Wc(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Bc, Wc);
    se[t] = new ye(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
  var t = e.replace(Bc, Wc);
  se[t] = new ye(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Bc, Wc);
  se[t] = new ye(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  se[e] = new ye(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
se.xlinkHref = new ye("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
  se[e] = new ye(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Vc(e, t, r, n) {
  var l = se.hasOwnProperty(t) ? se[t] : null;
  (l !== null ? l.type !== 0 : n || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) && (dh(t, r, l, n) && (r = null), n || l === null ? uh(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r)) : l.mustUseProperty ? (e[l.propertyName] = r === null ? (l.type === 3 ? !1 : "") : r) : ((t = l.attributeName), (n = l.attributeNamespace), r === null ? e.removeAttribute(t) : ((l = l.type), (r = l === 3 || (l === 4 && r === !0) ? "" : "" + r), n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
var ut = Qu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Xn = Symbol.for("react.element"),
  fr = Symbol.for("react.portal"),
  dr = Symbol.for("react.fragment"),
  Hc = Symbol.for("react.strict_mode"),
  zo = Symbol.for("react.profiler"),
  Gu = Symbol.for("react.provider"),
  Yu = Symbol.for("react.context"),
  Qc = Symbol.for("react.forward_ref"),
  Do = Symbol.for("react.suspense"),
  $o = Symbol.for("react.suspense_list"),
  Kc = Symbol.for("react.memo"),
  mt = Symbol.for("react.lazy"),
  Xu = Symbol.for("react.offscreen"),
  Zs = Symbol.iterator;
function Kr(e) {
  return e === null || typeof e != "object" ? null : ((e = (Zs && e[Zs]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var K = Object.assign,
  Yi;
function rn(e) {
  if (Yi === void 0)
    try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      Yi = (t && t[1]) || "";
    }
  return (
    `
` +
    Yi +
    e
  );
}
var Xi = !1;
function Ji(e, t) {
  if (!e || Xi) return "";
  Xi = !0;
  var r = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var n = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          n = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        n = u;
      }
      e();
    }
  } catch (u) {
    if (u && n && typeof u.stack == "string") {
      for (
        var l = u.stack.split(`
`),
          o = n.stack.split(`
`),
          c = l.length - 1,
          s = o.length - 1;
        1 <= c && 0 <= s && l[c] !== o[s];

      )
        s--;
      for (; 1 <= c && 0 <= s; c--, s--)
        if (l[c] !== o[s]) {
          if (c !== 1 || s !== 1)
            do
              if ((c--, s--, 0 > s || l[c] !== o[s])) {
                var a =
                  `
` + l[c].replace(" at new ", " at ");
                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
              }
            while (1 <= c && 0 <= s);
          break;
        }
    }
  } finally {
    (Xi = !1), (Error.prepareStackTrace = r);
  }
  return (e = e ? e.displayName || e.name : "") ? rn(e) : "";
}
function ph(e) {
  switch (e.tag) {
    case 5:
      return rn(e.type);
    case 16:
      return rn("Lazy");
    case 13:
      return rn("Suspense");
    case 19:
      return rn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ji(e.type, !1)), e;
    case 11:
      return (e = Ji(e.type.render, !1)), e;
    case 1:
      return (e = Ji(e.type, !0)), e;
    default:
      return "";
  }
}
function Mo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case dr:
      return "Fragment";
    case fr:
      return "Portal";
    case zo:
      return "Profiler";
    case Hc:
      return "StrictMode";
    case Do:
      return "Suspense";
    case $o:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Yu:
        return (e.displayName || "Context") + ".Consumer";
      case Gu:
        return (e._context.displayName || "Context") + ".Provider";
      case Qc:
        var t = e.render;
        return (e = e.displayName), e || ((e = t.displayName || t.name || ""), (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")), e;
      case Kc:
        return (t = e.displayName || null), t !== null ? t : Mo(e.type) || "Memo";
      case mt:
        (t = e._payload), (e = e._init);
        try {
          return Mo(e(t));
        } catch {}
    }
  return null;
}
function hh(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (e = t.render), (e = e.displayName || e.name || ""), t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Mo(t);
    case 8:
      return t === Hc ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function zt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Ju(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function mh(e) {
  var t = Ju(e) ? "checked" : "value",
    r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    n = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
    var l = r.get,
      o = r.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (c) {
          (n = "" + c), o.call(this, c);
        },
      }),
      Object.defineProperty(e, t, { enumerable: r.enumerable }),
      {
        getValue: function () {
          return n;
        },
        setValue: function (c) {
          n = "" + c;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Jn(e) {
  e._valueTracker || (e._valueTracker = mh(e));
}
function Zu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var r = t.getValue(),
    n = "";
  return e && (n = Ju(e) ? (e.checked ? "true" : "false") : e.value), (e = n), e !== r ? (t.setValue(e), !0) : !1;
}
function Cl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Fo(e, t) {
  var r = t.checked;
  return K({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: r ?? e._wrapperState.initialChecked });
}
function qs(e, t) {
  var r = t.defaultValue == null ? "" : t.defaultValue,
    n = t.checked != null ? t.checked : t.defaultChecked;
  (r = zt(t.value != null ? t.value : r)), (e._wrapperState = { initialChecked: n, initialValue: r, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null });
}
function qu(e, t) {
  (t = t.checked), t != null && Vc(e, "checked", t, !1);
}
function Ao(e, t) {
  qu(e, t);
  var r = zt(t.value),
    n = t.type;
  if (r != null) n === "number" ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r) : e.value !== "" + r && (e.value = "" + r);
  else if (n === "submit" || n === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Uo(e, t.type, r) : t.hasOwnProperty("defaultValue") && Uo(e, t.type, zt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function ea(e, t, r) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var n = t.type;
    if (!((n !== "submit" && n !== "reset") || (t.value !== void 0 && t.value !== null))) return;
    (t = "" + e._wrapperState.initialValue), r || t === e.value || (e.value = t), (e.defaultValue = t);
  }
  (r = e.name), r !== "" && (e.name = ""), (e.defaultChecked = !!e._wrapperState.initialChecked), r !== "" && (e.name = r);
}
function Uo(e, t, r) {
  (t !== "number" || Cl(e.ownerDocument) !== e) && (r == null ? (e.defaultValue = "" + e._wrapperState.initialValue) : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
var nn = Array.isArray;
function kr(e, t, r, n) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < r.length; l++) t["$" + r[l]] = !0;
    for (r = 0; r < e.length; r++) (l = t.hasOwnProperty("$" + e[r].value)), e[r].selected !== l && (e[r].selected = l), l && n && (e[r].defaultSelected = !0);
  } else {
    for (r = "" + zt(r), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === r) {
        (e[l].selected = !0), n && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Bo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
  return K({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function ta(e, t) {
  var r = t.value;
  if (r == null) {
    if (((r = t.children), (t = t.defaultValue), r != null)) {
      if (t != null) throw Error(E(92));
      if (nn(r)) {
        if (1 < r.length) throw Error(E(93));
        r = r[0];
      }
      t = r;
    }
    t == null && (t = ""), (r = t);
  }
  e._wrapperState = { initialValue: zt(r) };
}
function ef(e, t) {
  var r = zt(t.value),
    n = zt(t.defaultValue);
  r != null && ((r = "" + r), r !== e.value && (e.value = r), t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)), n != null && (e.defaultValue = "" + n);
}
function ra(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function tf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Wo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? tf(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Zn,
  rf = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, r, n, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, r, n, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (Zn = Zn || document.createElement("div"), Zn.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Zn.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function vn(e, t) {
  if (t) {
    var r = e.firstChild;
    if (r && r === e.lastChild && r.nodeType === 3) {
      r.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var sn = { animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 },
  xh = ["Webkit", "ms", "Moz", "O"];
Object.keys(sn).forEach(function (e) {
  xh.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (sn[t] = sn[e]);
  });
});
function nf(e, t, r) {
  return t == null || typeof t == "boolean" || t === "" ? "" : r || typeof t != "number" || t === 0 || (sn.hasOwnProperty(e) && sn[e]) ? ("" + t).trim() : t + "px";
}
function lf(e, t) {
  e = e.style;
  for (var r in t)
    if (t.hasOwnProperty(r)) {
      var n = r.indexOf("--") === 0,
        l = nf(r, t[r], n);
      r === "float" && (r = "cssFloat"), n ? e.setProperty(r, l) : (e[r] = l);
    }
}
var yh = K({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Vo(e, t) {
  if (t) {
    if (yh[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(E(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(E(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(E(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(E(62));
  }
}
function Ho(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Qo = null;
function Gc(e) {
  return (e = e.target || e.srcElement || window), e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ko = null,
  Er = null,
  Cr = null;
function na(e) {
  if ((e = Bn(e))) {
    if (typeof Ko != "function") throw Error(E(280));
    var t = e.stateNode;
    t && ((t = ui(t)), Ko(e.stateNode, e.type, t));
  }
}
function of(e) {
  Er ? (Cr ? Cr.push(e) : (Cr = [e])) : (Er = e);
}
function cf() {
  if (Er) {
    var e = Er,
      t = Cr;
    if (((Cr = Er = null), na(e), t)) for (e = 0; e < t.length; e++) na(t[e]);
  }
}
function sf(e, t) {
  return e(t);
}
function af() {}
var Zi = !1;
function uf(e, t, r) {
  if (Zi) return e(t, r);
  Zi = !0;
  try {
    return sf(e, t, r);
  } finally {
    (Zi = !1), (Er !== null || Cr !== null) && (af(), cf());
  }
}
function gn(e, t) {
  var r = e.stateNode;
  if (r === null) return null;
  var n = ui(r);
  if (n === null) return null;
  r = n[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (n = !n.disabled) || ((e = e.type), (n = !(e === "button" || e === "input" || e === "select" || e === "textarea"))), (e = !n);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (r && typeof r != "function") throw Error(E(231, t, typeof r));
  return r;
}
var Go = !1;
if (it)
  try {
    var Gr = {};
    Object.defineProperty(Gr, "passive", {
      get: function () {
        Go = !0;
      },
    }),
      window.addEventListener("test", Gr, Gr),
      window.removeEventListener("test", Gr, Gr);
  } catch {
    Go = !1;
  }
function vh(e, t, r, n, l, o, c, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(r, u);
  } catch (f) {
    this.onError(f);
  }
}
var an = !1,
  Nl = null,
  Pl = !1,
  Yo = null,
  gh = {
    onError: function (e) {
      (an = !0), (Nl = e);
    },
  };
function jh(e, t, r, n, l, o, c, s, a) {
  (an = !1), (Nl = null), vh.apply(gh, arguments);
}
function wh(e, t, r, n, l, o, c, s, a) {
  if ((jh.apply(this, arguments), an)) {
    if (an) {
      var u = Nl;
      (an = !1), (Nl = null);
    } else throw Error(E(198));
    Pl || ((Pl = !0), (Yo = u));
  }
}
function sr(e) {
  var t = e,
    r = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (r = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? r : null;
}
function ff(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
  }
  return null;
}
function la(e) {
  if (sr(e) !== e) throw Error(E(188));
}
function Sh(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = sr(e)), t === null)) throw Error(E(188));
    return t !== e ? null : e;
  }
  for (var r = e, n = t; ; ) {
    var l = r.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((n = l.return), n !== null)) {
        r = n;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === r) return la(l), e;
        if (o === n) return la(l), t;
        o = o.sibling;
      }
      throw Error(E(188));
    }
    if (r.return !== n.return) (r = l), (n = o);
    else {
      for (var c = !1, s = l.child; s; ) {
        if (s === r) {
          (c = !0), (r = l), (n = o);
          break;
        }
        if (s === n) {
          (c = !0), (n = l), (r = o);
          break;
        }
        s = s.sibling;
      }
      if (!c) {
        for (s = o.child; s; ) {
          if (s === r) {
            (c = !0), (r = o), (n = l);
            break;
          }
          if (s === n) {
            (c = !0), (n = o), (r = l);
            break;
          }
          s = s.sibling;
        }
        if (!c) throw Error(E(189));
      }
    }
    if (r.alternate !== n) throw Error(E(190));
  }
  if (r.tag !== 3) throw Error(E(188));
  return r.stateNode.current === r ? e : t;
}
function df(e) {
  return (e = Sh(e)), e !== null ? pf(e) : null;
}
function pf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = pf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var hf = Pe.unstable_scheduleCallback,
  ia = Pe.unstable_cancelCallback,
  kh = Pe.unstable_shouldYield,
  Eh = Pe.unstable_requestPaint,
  J = Pe.unstable_now,
  Ch = Pe.unstable_getCurrentPriorityLevel,
  Yc = Pe.unstable_ImmediatePriority,
  mf = Pe.unstable_UserBlockingPriority,
  _l = Pe.unstable_NormalPriority,
  Nh = Pe.unstable_LowPriority,
  xf = Pe.unstable_IdlePriority,
  oi = null,
  Je = null;
function Ph(e) {
  if (Je && typeof Je.onCommitFiberRoot == "function")
    try {
      Je.onCommitFiberRoot(oi, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var He = Math.clz32 ? Math.clz32 : Th,
  _h = Math.log,
  Oh = Math.LN2;
function Th(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((_h(e) / Oh) | 0)) | 0;
}
var qn = 64,
  el = 4194304;
function ln(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ol(e, t) {
  var r = e.pendingLanes;
  if (r === 0) return 0;
  var n = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    c = r & 268435455;
  if (c !== 0) {
    var s = c & ~l;
    s !== 0 ? (n = ln(s)) : ((o &= c), o !== 0 && (n = ln(o)));
  } else (c = r & ~l), c !== 0 ? (n = ln(c)) : o !== 0 && (n = ln(o));
  if (n === 0) return 0;
  if (t !== 0 && t !== n && !(t & l) && ((l = n & -n), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))) return t;
  if ((n & 4 && (n |= r & 16), (t = e.entangledLanes), t !== 0)) for (e = e.entanglements, t &= n; 0 < t; ) (r = 31 - He(t)), (l = 1 << r), (n |= e[r]), (t &= ~l);
  return n;
}
function bh(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Rh(e, t) {
  for (var r = e.suspendedLanes, n = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var c = 31 - He(o),
      s = 1 << c,
      a = l[c];
    a === -1 ? (!(s & r) || s & n) && (l[c] = bh(s, t)) : a <= t && (e.expiredLanes |= s), (o &= ~s);
  }
}
function Xo(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function yf() {
  var e = qn;
  return (qn <<= 1), !(qn & 4194240) && (qn = 64), e;
}
function qi(e) {
  for (var t = [], r = 0; 31 > r; r++) t.push(e);
  return t;
}
function An(e, t, r) {
  (e.pendingLanes |= t), t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)), (e = e.eventTimes), (t = 31 - He(t)), (e[t] = r);
}
function Lh(e, t) {
  var r = e.pendingLanes & ~t;
  (e.pendingLanes = t), (e.suspendedLanes = 0), (e.pingedLanes = 0), (e.expiredLanes &= t), (e.mutableReadLanes &= t), (e.entangledLanes &= t), (t = e.entanglements);
  var n = e.eventTimes;
  for (e = e.expirationTimes; 0 < r; ) {
    var l = 31 - He(r),
      o = 1 << l;
    (t[l] = 0), (n[l] = -1), (e[l] = -1), (r &= ~o);
  }
}
function Xc(e, t) {
  var r = (e.entangledLanes |= t);
  for (e = e.entanglements; r; ) {
    var n = 31 - He(r),
      l = 1 << n;
    (l & t) | (e[n] & t) && (e[n] |= t), (r &= ~l);
  }
}
var $ = 0;
function vf(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var gf,
  Jc,
  jf,
  wf,
  Sf,
  Jo = !1,
  tl = [],
  Et = null,
  Ct = null,
  Nt = null,
  jn = new Map(),
  wn = new Map(),
  yt = [],
  Ih = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function oa(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Et = null;
      break;
    case "dragenter":
    case "dragleave":
      Ct = null;
      break;
    case "mouseover":
    case "mouseout":
      Nt = null;
      break;
    case "pointerover":
    case "pointerout":
      jn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      wn.delete(t.pointerId);
  }
}
function Yr(e, t, r, n, l, o) {
  return e === null || e.nativeEvent !== o ? ((e = { blockedOn: t, domEventName: r, eventSystemFlags: n, nativeEvent: o, targetContainers: [l] }), t !== null && ((t = Bn(t)), t !== null && Jc(t)), e) : ((e.eventSystemFlags |= n), (t = e.targetContainers), l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function zh(e, t, r, n, l) {
  switch (t) {
    case "focusin":
      return (Et = Yr(Et, e, t, r, n, l)), !0;
    case "dragenter":
      return (Ct = Yr(Ct, e, t, r, n, l)), !0;
    case "mouseover":
      return (Nt = Yr(Nt, e, t, r, n, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return jn.set(o, Yr(jn.get(o) || null, e, t, r, n, l)), !0;
    case "gotpointercapture":
      return (o = l.pointerId), wn.set(o, Yr(wn.get(o) || null, e, t, r, n, l)), !0;
  }
  return !1;
}
function kf(e) {
  var t = Xt(e.target);
  if (t !== null) {
    var r = sr(t);
    if (r !== null) {
      if (((t = r.tag), t === 13)) {
        if (((t = ff(r)), t !== null)) {
          (e.blockedOn = t),
            Sf(e.priority, function () {
              jf(r);
            });
          return;
        }
      } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ml(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var r = Zo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (r === null) {
      r = e.nativeEvent;
      var n = new r.constructor(r.type, r);
      (Qo = n), r.target.dispatchEvent(n), (Qo = null);
    } else return (t = Bn(r)), t !== null && Jc(t), (e.blockedOn = r), !1;
    t.shift();
  }
  return !0;
}
function ca(e, t, r) {
  ml(e) && r.delete(t);
}
function Dh() {
  (Jo = !1), Et !== null && ml(Et) && (Et = null), Ct !== null && ml(Ct) && (Ct = null), Nt !== null && ml(Nt) && (Nt = null), jn.forEach(ca), wn.forEach(ca);
}
function Xr(e, t) {
  e.blockedOn === t && ((e.blockedOn = null), Jo || ((Jo = !0), Pe.unstable_scheduleCallback(Pe.unstable_NormalPriority, Dh)));
}
function Sn(e) {
  function t(l) {
    return Xr(l, e);
  }
  if (0 < tl.length) {
    Xr(tl[0], e);
    for (var r = 1; r < tl.length; r++) {
      var n = tl[r];
      n.blockedOn === e && (n.blockedOn = null);
    }
  }
  for (Et !== null && Xr(Et, e), Ct !== null && Xr(Ct, e), Nt !== null && Xr(Nt, e), jn.forEach(t), wn.forEach(t), r = 0; r < yt.length; r++) (n = yt[r]), n.blockedOn === e && (n.blockedOn = null);
  for (; 0 < yt.length && ((r = yt[0]), r.blockedOn === null); ) kf(r), r.blockedOn === null && yt.shift();
}
var Nr = ut.ReactCurrentBatchConfig,
  Tl = !0;
function $h(e, t, r, n) {
  var l = $,
    o = Nr.transition;
  Nr.transition = null;
  try {
    ($ = 1), Zc(e, t, r, n);
  } finally {
    ($ = l), (Nr.transition = o);
  }
}
function Mh(e, t, r, n) {
  var l = $,
    o = Nr.transition;
  Nr.transition = null;
  try {
    ($ = 4), Zc(e, t, r, n);
  } finally {
    ($ = l), (Nr.transition = o);
  }
}
function Zc(e, t, r, n) {
  if (Tl) {
    var l = Zo(e, t, r, n);
    if (l === null) ao(e, t, n, bl, r), oa(e, n);
    else if (zh(l, e, t, r, n)) n.stopPropagation();
    else if ((oa(e, n), t & 4 && -1 < Ih.indexOf(e))) {
      for (; l !== null; ) {
        var o = Bn(l);
        if ((o !== null && gf(o), (o = Zo(e, t, r, n)), o === null && ao(e, t, n, bl, r), o === l)) break;
        l = o;
      }
      l !== null && n.stopPropagation();
    } else ao(e, t, n, null, r);
  }
}
var bl = null;
function Zo(e, t, r, n) {
  if (((bl = null), (e = Gc(n)), (e = Xt(e)), e !== null))
    if (((t = sr(e)), t === null)) e = null;
    else if (((r = t.tag), r === 13)) {
      if (((e = ff(t)), e !== null)) return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (bl = e), null;
}
function Ef(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Ch()) {
        case Yc:
          return 1;
        case mf:
          return 4;
        case _l:
        case Nh:
          return 16;
        case xf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var jt = null,
  qc = null,
  xl = null;
function Cf() {
  if (xl) return xl;
  var e,
    t = qc,
    r = t.length,
    n,
    l = "value" in jt ? jt.value : jt.textContent,
    o = l.length;
  for (e = 0; e < r && t[e] === l[e]; e++);
  var c = r - e;
  for (n = 1; n <= c && t[r - n] === l[o - n]; n++);
  return (xl = l.slice(e, 1 < n ? 1 - n : void 0));
}
function yl(e) {
  var t = e.keyCode;
  return "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t), e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function rl() {
  return !0;
}
function sa() {
  return !1;
}
function Te(e) {
  function t(r, n, l, o, c) {
    (this._reactName = r), (this._targetInst = l), (this.type = n), (this.nativeEvent = o), (this.target = c), (this.currentTarget = null);
    for (var s in e) e.hasOwnProperty(s) && ((r = e[s]), (this[s] = r ? r(o) : o[s]));
    return (this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? rl : sa), (this.isPropagationStopped = sa), this;
  }
  return (
    K(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), (this.isDefaultPrevented = rl));
      },
      stopPropagation: function () {
        var r = this.nativeEvent;
        r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), (this.isPropagationStopped = rl));
      },
      persist: function () {},
      isPersistent: rl,
    }),
    t
  );
}
var Ur = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  es = Te(Ur),
  Un = K({}, Ur, { view: 0, detail: 0 }),
  Fh = Te(Un),
  eo,
  to,
  Jr,
  ci = K({}, Un, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ts,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0 ? (e.fromElement === e.srcElement ? e.toElement : e.fromElement) : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e ? e.movementX : (e !== Jr && (Jr && e.type === "mousemove" ? ((eo = e.screenX - Jr.screenX), (to = e.screenY - Jr.screenY)) : (to = eo = 0), (Jr = e)), eo);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : to;
    },
  }),
  aa = Te(ci),
  Ah = K({}, ci, { dataTransfer: 0 }),
  Uh = Te(Ah),
  Bh = K({}, Un, { relatedTarget: 0 }),
  ro = Te(Bh),
  Wh = K({}, Ur, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Vh = Te(Wh),
  Hh = K({}, Ur, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Qh = Te(Hh),
  Kh = K({}, Ur, { data: 0 }),
  ua = Te(Kh),
  Gh = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" },
  Yh = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" },
  Xh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Jh(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Xh[e]) ? !!t[e] : !1;
}
function ts() {
  return Jh;
}
var Zh = K({}, Un, {
    key: function (e) {
      if (e.key) {
        var t = Gh[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? ((e = yl(e)), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Yh[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ts,
    charCode: function (e) {
      return e.type === "keypress" ? yl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress" ? yl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
  }),
  qh = Te(Zh),
  em = K({}, ci, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }),
  fa = Te(em),
  tm = K({}, Un, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ts }),
  rm = Te(tm),
  nm = K({}, Ur, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  lm = Te(nm),
  im = K({}, ci, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  om = Te(im),
  cm = [9, 13, 27, 32],
  rs = it && "CompositionEvent" in window,
  un = null;
it && "documentMode" in document && (un = document.documentMode);
var sm = it && "TextEvent" in window && !un,
  Nf = it && (!rs || (un && 8 < un && 11 >= un)),
  da = " ",
  pa = !1;
function Pf(e, t) {
  switch (e) {
    case "keyup":
      return cm.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function _f(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var pr = !1;
function am(e, t) {
  switch (e) {
    case "compositionend":
      return _f(t);
    case "keypress":
      return t.which !== 32 ? null : ((pa = !0), da);
    case "textInput":
      return (e = t.data), e === da && pa ? null : e;
    default:
      return null;
  }
}
function um(e, t) {
  if (pr) return e === "compositionend" || (!rs && Pf(e, t)) ? ((e = Cf()), (xl = qc = jt = null), (pr = !1), e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Nf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var fm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function ha(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!fm[e.type] : t === "textarea";
}
function Of(e, t, r, n) {
  of(n), (t = Rl(t, "onChange")), 0 < t.length && ((r = new es("onChange", "change", null, r, n)), e.push({ event: r, listeners: t }));
}
var fn = null,
  kn = null;
function dm(e) {
  Af(e, 0);
}
function si(e) {
  var t = xr(e);
  if (Zu(t)) return e;
}
function pm(e, t) {
  if (e === "change") return t;
}
var Tf = !1;
if (it) {
  var no;
  if (it) {
    var lo = "oninput" in document;
    if (!lo) {
      var ma = document.createElement("div");
      ma.setAttribute("oninput", "return;"), (lo = typeof ma.oninput == "function");
    }
    no = lo;
  } else no = !1;
  Tf = no && (!document.documentMode || 9 < document.documentMode);
}
function xa() {
  fn && (fn.detachEvent("onpropertychange", bf), (kn = fn = null));
}
function bf(e) {
  if (e.propertyName === "value" && si(kn)) {
    var t = [];
    Of(t, kn, e, Gc(e)), uf(dm, t);
  }
}
function hm(e, t, r) {
  e === "focusin" ? (xa(), (fn = t), (kn = r), fn.attachEvent("onpropertychange", bf)) : e === "focusout" && xa();
}
function mm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return si(kn);
}
function xm(e, t) {
  if (e === "click") return si(t);
}
function ym(e, t) {
  if (e === "input" || e === "change") return si(t);
}
function vm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ke = typeof Object.is == "function" ? Object.is : vm;
function En(e, t) {
  if (Ke(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var r = Object.keys(e),
    n = Object.keys(t);
  if (r.length !== n.length) return !1;
  for (n = 0; n < r.length; n++) {
    var l = r[n];
    if (!Io.call(t, l) || !Ke(e[l], t[l])) return !1;
  }
  return !0;
}
function ya(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function va(e, t) {
  var r = ya(e);
  e = 0;
  for (var n; r; ) {
    if (r.nodeType === 3) {
      if (((n = e + r.textContent.length), e <= t && n >= t)) return { node: r, offset: t - e };
      e = n;
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = ya(r);
  }
}
function Rf(e, t) {
  return e && t ? (e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Rf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1) : !1;
}
function Lf() {
  for (var e = window, t = Cl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var r = typeof t.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r) e = t.contentWindow;
    else break;
    t = Cl(e.document);
  }
  return t;
}
function ns(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && ((t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password")) || t === "textarea" || e.contentEditable === "true");
}
function gm(e) {
  var t = Lf(),
    r = e.focusedElem,
    n = e.selectionRange;
  if (t !== r && r && r.ownerDocument && Rf(r.ownerDocument.documentElement, r)) {
    if (n !== null && ns(r)) {
      if (((t = n.start), (e = n.end), e === void 0 && (e = t), "selectionStart" in r)) (r.selectionStart = t), (r.selectionEnd = Math.min(e, r.value.length));
      else if (((e = ((t = r.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
        e = e.getSelection();
        var l = r.textContent.length,
          o = Math.min(n.start, l);
        (n = n.end === void 0 ? o : Math.min(n.end, l)), !e.extend && o > n && ((l = n), (n = o), (o = l)), (l = va(r, o));
        var c = va(r, n);
        l && c && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== c.node || e.focusOffset !== c.offset) && ((t = t.createRange()), t.setStart(l.node, l.offset), e.removeAllRanges(), o > n ? (e.addRange(t), e.extend(c.node, c.offset)) : (t.setEnd(c.node, c.offset), e.addRange(t)));
      }
    }
    for (t = [], e = r; (e = e.parentNode); ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++) (e = t[r]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
  }
}
var jm = it && "documentMode" in document && 11 >= document.documentMode,
  hr = null,
  qo = null,
  dn = null,
  ec = !1;
function ga(e, t, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  ec || hr == null || hr !== Cl(n) || ((n = hr), "selectionStart" in n && ns(n) ? (n = { start: n.selectionStart, end: n.selectionEnd }) : ((n = ((n.ownerDocument && n.ownerDocument.defaultView) || window).getSelection()), (n = { anchorNode: n.anchorNode, anchorOffset: n.anchorOffset, focusNode: n.focusNode, focusOffset: n.focusOffset })), (dn && En(dn, n)) || ((dn = n), (n = Rl(qo, "onSelect")), 0 < n.length && ((t = new es("onSelect", "select", null, t, r)), e.push({ event: t, listeners: n }), (t.target = hr))));
}
function nl(e, t) {
  var r = {};
  return (r[e.toLowerCase()] = t.toLowerCase()), (r["Webkit" + e] = "webkit" + t), (r["Moz" + e] = "moz" + t), r;
}
var mr = { animationend: nl("Animation", "AnimationEnd"), animationiteration: nl("Animation", "AnimationIteration"), animationstart: nl("Animation", "AnimationStart"), transitionend: nl("Transition", "TransitionEnd") },
  io = {},
  If = {};
it && ((If = document.createElement("div").style), "AnimationEvent" in window || (delete mr.animationend.animation, delete mr.animationiteration.animation, delete mr.animationstart.animation), "TransitionEvent" in window || delete mr.transitionend.transition);
function ai(e) {
  if (io[e]) return io[e];
  if (!mr[e]) return e;
  var t = mr[e],
    r;
  for (r in t) if (t.hasOwnProperty(r) && r in If) return (io[e] = t[r]);
  return e;
}
var zf = ai("animationend"),
  Df = ai("animationiteration"),
  $f = ai("animationstart"),
  Mf = ai("transitionend"),
  Ff = new Map(),
  ja = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Ft(e, t) {
  Ff.set(e, t), cr(t, [e]);
}
for (var oo = 0; oo < ja.length; oo++) {
  var co = ja[oo],
    wm = co.toLowerCase(),
    Sm = co[0].toUpperCase() + co.slice(1);
  Ft(wm, "on" + Sm);
}
Ft(zf, "onAnimationEnd");
Ft(Df, "onAnimationIteration");
Ft($f, "onAnimationStart");
Ft("dblclick", "onDoubleClick");
Ft("focusin", "onFocus");
Ft("focusout", "onBlur");
Ft(Mf, "onTransitionEnd");
br("onMouseEnter", ["mouseout", "mouseover"]);
br("onMouseLeave", ["mouseout", "mouseover"]);
br("onPointerEnter", ["pointerout", "pointerover"]);
br("onPointerLeave", ["pointerout", "pointerover"]);
cr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
cr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
cr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
cr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
cr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
cr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var on = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
  km = new Set("cancel close invalid load scroll toggle".split(" ").concat(on));
function wa(e, t, r) {
  var n = e.type || "unknown-event";
  (e.currentTarget = r), wh(n, t, void 0, e), (e.currentTarget = null);
}
function Af(e, t) {
  t = (t & 4) !== 0;
  for (var r = 0; r < e.length; r++) {
    var n = e[r],
      l = n.event;
    n = n.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var c = n.length - 1; 0 <= c; c--) {
          var s = n[c],
            a = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), a !== o && l.isPropagationStopped())) break e;
          wa(l, s, u), (o = a);
        }
      else
        for (c = 0; c < n.length; c++) {
          if (((s = n[c]), (a = s.instance), (u = s.currentTarget), (s = s.listener), a !== o && l.isPropagationStopped())) break e;
          wa(l, s, u), (o = a);
        }
    }
  }
  if (Pl) throw ((e = Yo), (Pl = !1), (Yo = null), e);
}
function U(e, t) {
  var r = t[ic];
  r === void 0 && (r = t[ic] = new Set());
  var n = e + "__bubble";
  r.has(n) || (Uf(t, e, 2, !1), r.add(n));
}
function so(e, t, r) {
  var n = 0;
  t && (n |= 4), Uf(r, e, n, t);
}
var ll = "_reactListening" + Math.random().toString(36).slice(2);
function Cn(e) {
  if (!e[ll]) {
    (e[ll] = !0),
      Ku.forEach(function (r) {
        r !== "selectionchange" && (km.has(r) || so(r, !1, e), so(r, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ll] || ((t[ll] = !0), so("selectionchange", !1, t));
  }
}
function Uf(e, t, r, n) {
  switch (Ef(t)) {
    case 1:
      var l = $h;
      break;
    case 4:
      l = Mh;
      break;
    default:
      l = Zc;
  }
  (r = l.bind(null, t, r, e)), (l = void 0), !Go || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (l = !0), n ? (l !== void 0 ? e.addEventListener(t, r, { capture: !0, passive: l }) : e.addEventListener(t, r, !0)) : l !== void 0 ? e.addEventListener(t, r, { passive: l }) : e.addEventListener(t, r, !1);
}
function ao(e, t, r, n, l) {
  var o = n;
  if (!(t & 1) && !(t & 2) && n !== null)
    e: for (;;) {
      if (n === null) return;
      var c = n.tag;
      if (c === 3 || c === 4) {
        var s = n.stateNode.containerInfo;
        if (s === l || (s.nodeType === 8 && s.parentNode === l)) break;
        if (c === 4)
          for (c = n.return; c !== null; ) {
            var a = c.tag;
            if ((a === 3 || a === 4) && ((a = c.stateNode.containerInfo), a === l || (a.nodeType === 8 && a.parentNode === l))) return;
            c = c.return;
          }
        for (; s !== null; ) {
          if (((c = Xt(s)), c === null)) return;
          if (((a = c.tag), a === 5 || a === 6)) {
            n = o = c;
            continue e;
          }
          s = s.parentNode;
        }
      }
      n = n.return;
    }
  uf(function () {
    var u = o,
      f = Gc(r),
      d = [];
    e: {
      var p = Ff.get(e);
      if (p !== void 0) {
        var v = es,
          x = e;
        switch (e) {
          case "keypress":
            if (yl(r) === 0) break e;
          case "keydown":
          case "keyup":
            v = qh;
            break;
          case "focusin":
            (x = "focus"), (v = ro);
            break;
          case "focusout":
            (x = "blur"), (v = ro);
            break;
          case "beforeblur":
          case "afterblur":
            v = ro;
            break;
          case "click":
            if (r.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = aa;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Uh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = rm;
            break;
          case zf:
          case Df:
          case $f:
            v = Vh;
            break;
          case Mf:
            v = lm;
            break;
          case "scroll":
            v = Fh;
            break;
          case "wheel":
            v = om;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Qh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = fa;
        }
        var g = (t & 4) !== 0,
          j = !g && e === "scroll",
          m = g ? (p !== null ? p + "Capture" : null) : p;
        g = [];
        for (var h = u, y; h !== null; ) {
          y = h;
          var w = y.stateNode;
          if ((y.tag === 5 && w !== null && ((y = w), m !== null && ((w = gn(h, m)), w != null && g.push(Nn(h, w, y)))), j)) break;
          h = h.return;
        }
        0 < g.length && ((p = new v(p, x, null, r, f)), d.push({ event: p, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (((p = e === "mouseover" || e === "pointerover"), (v = e === "mouseout" || e === "pointerout"), p && r !== Qo && (x = r.relatedTarget || r.fromElement) && (Xt(x) || x[ot]))) break e;
        if ((v || p) && ((p = f.window === f ? f : (p = f.ownerDocument) ? p.defaultView || p.parentWindow : window), v ? ((x = r.relatedTarget || r.toElement), (v = u), (x = x ? Xt(x) : null), x !== null && ((j = sr(x)), x !== j || (x.tag !== 5 && x.tag !== 6)) && (x = null)) : ((v = null), (x = u)), v !== x)) {
          if (((g = aa), (w = "onMouseLeave"), (m = "onMouseEnter"), (h = "mouse"), (e === "pointerout" || e === "pointerover") && ((g = fa), (w = "onPointerLeave"), (m = "onPointerEnter"), (h = "pointer")), (j = v == null ? p : xr(v)), (y = x == null ? p : xr(x)), (p = new g(w, h + "leave", v, r, f)), (p.target = j), (p.relatedTarget = y), (w = null), Xt(f) === u && ((g = new g(m, h + "enter", x, r, f)), (g.target = y), (g.relatedTarget = j), (w = g)), (j = w), v && x))
            t: {
              for (g = v, m = x, h = 0, y = g; y; y = ur(y)) h++;
              for (y = 0, w = m; w; w = ur(w)) y++;
              for (; 0 < h - y; ) (g = ur(g)), h--;
              for (; 0 < y - h; ) (m = ur(m)), y--;
              for (; h--; ) {
                if (g === m || (m !== null && g === m.alternate)) break t;
                (g = ur(g)), (m = ur(m));
              }
              g = null;
            }
          else g = null;
          v !== null && Sa(d, p, v, g, !1), x !== null && j !== null && Sa(d, j, x, g, !0);
        }
      }
      e: {
        if (((p = u ? xr(u) : window), (v = p.nodeName && p.nodeName.toLowerCase()), v === "select" || (v === "input" && p.type === "file"))) var C = pm;
        else if (ha(p))
          if (Tf) C = ym;
          else {
            C = mm;
            var P = hm;
          }
        else (v = p.nodeName) && v.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (C = xm);
        if (C && (C = C(e, u))) {
          Of(d, C, r, f);
          break e;
        }
        P && P(e, p, u), e === "focusout" && (P = p._wrapperState) && P.controlled && p.type === "number" && Uo(p, "number", p.value);
      }
      switch (((P = u ? xr(u) : window), e)) {
        case "focusin":
          (ha(P) || P.contentEditable === "true") && ((hr = P), (qo = u), (dn = null));
          break;
        case "focusout":
          dn = qo = hr = null;
          break;
        case "mousedown":
          ec = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ec = !1), ga(d, r, f);
          break;
        case "selectionchange":
          if (jm) break;
        case "keydown":
        case "keyup":
          ga(d, r, f);
      }
      var N;
      if (rs)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else pr ? Pf(e, r) && (T = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (T = "onCompositionStart");
      T && (Nf && r.locale !== "ko" && (pr || T !== "onCompositionStart" ? T === "onCompositionEnd" && pr && (N = Cf()) : ((jt = f), (qc = "value" in jt ? jt.value : jt.textContent), (pr = !0))), (P = Rl(u, T)), 0 < P.length && ((T = new ua(T, e, null, r, f)), d.push({ event: T, listeners: P }), N ? (T.data = N) : ((N = _f(r)), N !== null && (T.data = N)))), (N = sm ? am(e, r) : um(e, r)) && ((u = Rl(u, "onBeforeInput")), 0 < u.length && ((f = new ua("onBeforeInput", "beforeinput", null, r, f)), d.push({ event: f, listeners: u }), (f.data = N)));
    }
    Af(d, t);
  });
}
function Nn(e, t, r) {
  return { instance: e, listener: t, currentTarget: r };
}
function Rl(e, t) {
  for (var r = t + "Capture", n = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 && o !== null && ((l = o), (o = gn(e, r)), o != null && n.unshift(Nn(e, o, l)), (o = gn(e, t)), o != null && n.push(Nn(e, o, l))), (e = e.return);
  }
  return n;
}
function ur(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Sa(e, t, r, n, l) {
  for (var o = t._reactName, c = []; r !== null && r !== n; ) {
    var s = r,
      a = s.alternate,
      u = s.stateNode;
    if (a !== null && a === n) break;
    s.tag === 5 && u !== null && ((s = u), l ? ((a = gn(r, o)), a != null && c.unshift(Nn(r, a, s))) : l || ((a = gn(r, o)), a != null && c.push(Nn(r, a, s)))), (r = r.return);
  }
  c.length !== 0 && e.push({ event: t, listeners: c });
}
var Em = /\r\n?/g,
  Cm = /\u0000|\uFFFD/g;
function ka(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Em,
      `
`
    )
    .replace(Cm, "");
}
function il(e, t, r) {
  if (((t = ka(t)), ka(e) !== t && r)) throw Error(E(425));
}
function Ll() {}
var tc = null,
  rc = null;
function nc(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || (typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null);
}
var lc = typeof setTimeout == "function" ? setTimeout : void 0,
  Nm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Ea = typeof Promise == "function" ? Promise : void 0,
  Pm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Ea < "u"
      ? function (e) {
          return Ea.resolve(null).then(e).catch(_m);
        }
      : lc;
function _m(e) {
  setTimeout(function () {
    throw e;
  });
}
function uo(e, t) {
  var r = t,
    n = 0;
  do {
    var l = r.nextSibling;
    if ((e.removeChild(r), l && l.nodeType === 8))
      if (((r = l.data), r === "/$")) {
        if (n === 0) {
          e.removeChild(l), Sn(t);
          return;
        }
        n--;
      } else (r !== "$" && r !== "$?" && r !== "$!") || n++;
    r = l;
  } while (r);
  Sn(t);
}
function Pt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Ca(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var r = e.data;
      if (r === "$" || r === "$!" || r === "$?") {
        if (t === 0) return e;
        t--;
      } else r === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Br = Math.random().toString(36).slice(2),
  Xe = "__reactFiber$" + Br,
  Pn = "__reactProps$" + Br,
  ot = "__reactContainer$" + Br,
  ic = "__reactEvents$" + Br,
  Om = "__reactListeners$" + Br,
  Tm = "__reactHandles$" + Br;
function Xt(e) {
  var t = e[Xe];
  if (t) return t;
  for (var r = e.parentNode; r; ) {
    if ((t = r[ot] || r[Xe])) {
      if (((r = t.alternate), t.child !== null || (r !== null && r.child !== null)))
        for (e = Ca(e); e !== null; ) {
          if ((r = e[Xe])) return r;
          e = Ca(e);
        }
      return t;
    }
    (e = r), (r = e.parentNode);
  }
  return null;
}
function Bn(e) {
  return (e = e[Xe] || e[ot]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function xr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(E(33));
}
function ui(e) {
  return e[Pn] || null;
}
var oc = [],
  yr = -1;
function At(e) {
  return { current: e };
}
function B(e) {
  0 > yr || ((e.current = oc[yr]), (oc[yr] = null), yr--);
}
function A(e, t) {
  yr++, (oc[yr] = e.current), (e.current = t);
}
var Dt = {},
  pe = At(Dt),
  je = At(!1),
  tr = Dt;
function Rr(e, t) {
  var r = e.type.contextTypes;
  if (!r) return Dt;
  var n = e.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === t) return n.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in r) l[o] = t[o];
  return n && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = t), (e.__reactInternalMemoizedMaskedChildContext = l)), l;
}
function we(e) {
  return (e = e.childContextTypes), e != null;
}
function Il() {
  B(je), B(pe);
}
function Na(e, t, r) {
  if (pe.current !== Dt) throw Error(E(168));
  A(pe, t), A(je, r);
}
function Bf(e, t, r) {
  var n = e.stateNode;
  if (((t = t.childContextTypes), typeof n.getChildContext != "function")) return r;
  n = n.getChildContext();
  for (var l in n) if (!(l in t)) throw Error(E(108, hh(e) || "Unknown", l));
  return K({}, r, n);
}
function zl(e) {
  return (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Dt), (tr = pe.current), A(pe, e), A(je, je.current), !0;
}
function Pa(e, t, r) {
  var n = e.stateNode;
  if (!n) throw Error(E(169));
  r ? ((e = Bf(e, t, tr)), (n.__reactInternalMemoizedMergedChildContext = e), B(je), B(pe), A(pe, e)) : B(je), A(je, r);
}
var tt = null,
  fi = !1,
  fo = !1;
function Wf(e) {
  tt === null ? (tt = [e]) : tt.push(e);
}
function bm(e) {
  (fi = !0), Wf(e);
}
function Ut() {
  if (!fo && tt !== null) {
    fo = !0;
    var e = 0,
      t = $;
    try {
      var r = tt;
      for ($ = 1; e < r.length; e++) {
        var n = r[e];
        do n = n(!0);
        while (n !== null);
      }
      (tt = null), (fi = !1);
    } catch (l) {
      throw (tt !== null && (tt = tt.slice(e + 1)), hf(Yc, Ut), l);
    } finally {
      ($ = t), (fo = !1);
    }
  }
  return null;
}
var vr = [],
  gr = 0,
  Dl = null,
  $l = 0,
  Re = [],
  Le = 0,
  rr = null,
  rt = 1,
  nt = "";
function Kt(e, t) {
  (vr[gr++] = $l), (vr[gr++] = Dl), (Dl = e), ($l = t);
}
function Vf(e, t, r) {
  (Re[Le++] = rt), (Re[Le++] = nt), (Re[Le++] = rr), (rr = e);
  var n = rt;
  e = nt;
  var l = 32 - He(n) - 1;
  (n &= ~(1 << l)), (r += 1);
  var o = 32 - He(t) + l;
  if (30 < o) {
    var c = l - (l % 5);
    (o = (n & ((1 << c) - 1)).toString(32)), (n >>= c), (l -= c), (rt = (1 << (32 - He(t) + l)) | (r << l) | n), (nt = o + e);
  } else (rt = (1 << o) | (r << l) | n), (nt = e);
}
function ls(e) {
  e.return !== null && (Kt(e, 1), Vf(e, 1, 0));
}
function is(e) {
  for (; e === Dl; ) (Dl = vr[--gr]), (vr[gr] = null), ($l = vr[--gr]), (vr[gr] = null);
  for (; e === rr; ) (rr = Re[--Le]), (Re[Le] = null), (nt = Re[--Le]), (Re[Le] = null), (rt = Re[--Le]), (Re[Le] = null);
}
var Ne = null,
  Ce = null,
  V = !1,
  We = null;
function Hf(e, t) {
  var r = Ie(5, null, null, 0);
  (r.elementType = "DELETED"), (r.stateNode = t), (r.return = e), (t = e.deletions), t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
}
function _a(e, t) {
  switch (e.tag) {
    case 5:
      var r = e.type;
      return (t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t), t !== null ? ((e.stateNode = t), (Ne = e), (Ce = Pt(t.firstChild)), !0) : !1;
    case 6:
      return (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t), t !== null ? ((e.stateNode = t), (Ne = e), (Ce = null), !0) : !1;
    case 13:
      return (t = t.nodeType !== 8 ? null : t), t !== null ? ((r = rr !== null ? { id: rt, overflow: nt } : null), (e.memoizedState = { dehydrated: t, treeContext: r, retryLane: 1073741824 }), (r = Ie(18, null, null, 0)), (r.stateNode = t), (r.return = e), (e.child = r), (Ne = e), (Ce = null), !0) : !1;
    default:
      return !1;
  }
}
function cc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function sc(e) {
  if (V) {
    var t = Ce;
    if (t) {
      var r = t;
      if (!_a(e, t)) {
        if (cc(e)) throw Error(E(418));
        t = Pt(r.nextSibling);
        var n = Ne;
        t && _a(e, t) ? Hf(n, r) : ((e.flags = (e.flags & -4097) | 2), (V = !1), (Ne = e));
      }
    } else {
      if (cc(e)) throw Error(E(418));
      (e.flags = (e.flags & -4097) | 2), (V = !1), (Ne = e);
    }
  }
}
function Oa(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ne = e;
}
function ol(e) {
  if (e !== Ne) return !1;
  if (!V) return Oa(e), (V = !0), !1;
  var t;
  if (((t = e.tag !== 3) && !(t = e.tag !== 5) && ((t = e.type), (t = t !== "head" && t !== "body" && !nc(e.type, e.memoizedProps))), t && (t = Ce))) {
    if (cc(e)) throw (Qf(), Error(E(418)));
    for (; t; ) Hf(e, t), (t = Pt(t.nextSibling));
  }
  if ((Oa(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "/$") {
            if (t === 0) {
              Ce = Pt(e.nextSibling);
              break e;
            }
            t--;
          } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ce = null;
    }
  } else Ce = Ne ? Pt(e.stateNode.nextSibling) : null;
  return !0;
}
function Qf() {
  for (var e = Ce; e; ) e = Pt(e.nextSibling);
}
function Lr() {
  (Ce = Ne = null), (V = !1);
}
function os(e) {
  We === null ? (We = [e]) : We.push(e);
}
var Rm = ut.ReactCurrentBatchConfig;
function Ue(e, t) {
  if (e && e.defaultProps) {
    (t = K({}, t)), (e = e.defaultProps);
    for (var r in e) t[r] === void 0 && (t[r] = e[r]);
    return t;
  }
  return t;
}
var Ml = At(null),
  Fl = null,
  jr = null,
  cs = null;
function ss() {
  cs = jr = Fl = null;
}
function as(e) {
  var t = Ml.current;
  B(Ml), (e._currentValue = t);
}
function ac(e, t, r) {
  for (; e !== null; ) {
    var n = e.alternate;
    if (((e.childLanes & t) !== t ? ((e.childLanes |= t), n !== null && (n.childLanes |= t)) : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t), e === r)) break;
    e = e.return;
  }
}
function Pr(e, t) {
  (Fl = e), (cs = jr = null), (e = e.dependencies), e !== null && e.firstContext !== null && (e.lanes & t && (ge = !0), (e.firstContext = null));
}
function De(e) {
  var t = e._currentValue;
  if (cs !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), jr === null)) {
      if (Fl === null) throw Error(E(308));
      (jr = e), (Fl.dependencies = { lanes: 0, firstContext: e });
    } else jr = jr.next = e;
  return t;
}
var Jt = null;
function us(e) {
  Jt === null ? (Jt = [e]) : Jt.push(e);
}
function Kf(e, t, r, n) {
  var l = t.interleaved;
  return l === null ? ((r.next = r), us(t)) : ((r.next = l.next), (l.next = r)), (t.interleaved = r), ct(e, n);
}
function ct(e, t) {
  e.lanes |= t;
  var r = e.alternate;
  for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; ) (e.childLanes |= t), (r = e.alternate), r !== null && (r.childLanes |= t), (r = e), (e = e.return);
  return r.tag === 3 ? r.stateNode : null;
}
var xt = !1;
function fs(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Gf(e, t) {
  (e = e.updateQueue), t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function lt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function _t(e, t, r) {
  var n = e.updateQueue;
  if (n === null) return null;
  if (((n = n.shared), z & 2)) {
    var l = n.pending;
    return l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)), (n.pending = t), ct(e, r);
  }
  return (l = n.interleaved), l === null ? ((t.next = t), us(n)) : ((t.next = l.next), (l.next = t)), (n.interleaved = t), ct(e, r);
}
function vl(e, t, r) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))) {
    var n = t.lanes;
    (n &= e.pendingLanes), (r |= n), (t.lanes = r), Xc(e, r);
  }
}
function Ta(e, t) {
  var r = e.updateQueue,
    n = e.alternate;
  if (n !== null && ((n = n.updateQueue), r === n)) {
    var l = null,
      o = null;
    if (((r = r.firstBaseUpdate), r !== null)) {
      do {
        var c = { eventTime: r.eventTime, lane: r.lane, tag: r.tag, payload: r.payload, callback: r.callback, next: null };
        o === null ? (l = o = c) : (o = o.next = c), (r = r.next);
      } while (r !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (r = { baseState: n.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: n.shared, effects: n.effects }), (e.updateQueue = r);
    return;
  }
  (e = r.lastBaseUpdate), e === null ? (r.firstBaseUpdate = t) : (e.next = t), (r.lastBaseUpdate = t);
}
function Al(e, t, r, n) {
  var l = e.updateQueue;
  xt = !1;
  var o = l.firstBaseUpdate,
    c = l.lastBaseUpdate,
    s = l.shared.pending;
  if (s !== null) {
    l.shared.pending = null;
    var a = s,
      u = a.next;
    (a.next = null), c === null ? (o = u) : (c.next = u), (c = a);
    var f = e.alternate;
    f !== null && ((f = f.updateQueue), (s = f.lastBaseUpdate), s !== c && (s === null ? (f.firstBaseUpdate = u) : (s.next = u), (f.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var d = l.baseState;
    (c = 0), (f = u = a = null), (s = o);
    do {
      var p = s.lane,
        v = s.eventTime;
      if ((n & p) === p) {
        f !== null && (f = f.next = { eventTime: v, lane: 0, tag: s.tag, payload: s.payload, callback: s.callback, next: null });
        e: {
          var x = e,
            g = s;
          switch (((p = t), (v = r), g.tag)) {
            case 1:
              if (((x = g.payload), typeof x == "function")) {
                d = x.call(v, d, p);
                break e;
              }
              d = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (((x = g.payload), (p = typeof x == "function" ? x.call(v, d, p) : x), p == null)) break e;
              d = K({}, d, p);
              break e;
            case 2:
              xt = !0;
          }
        }
        s.callback !== null && s.lane !== 0 && ((e.flags |= 64), (p = l.effects), p === null ? (l.effects = [s]) : p.push(s));
      } else (v = { eventTime: v, lane: p, tag: s.tag, payload: s.payload, callback: s.callback, next: null }), f === null ? ((u = f = v), (a = d)) : (f = f.next = v), (c |= p);
      if (((s = s.next), s === null)) {
        if (((s = l.shared.pending), s === null)) break;
        (p = s), (s = p.next), (p.next = null), (l.lastBaseUpdate = p), (l.shared.pending = null);
      }
    } while (!0);
    if ((f === null && (a = d), (l.baseState = a), (l.firstBaseUpdate = u), (l.lastBaseUpdate = f), (t = l.shared.interleaved), t !== null)) {
      l = t;
      do (c |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (lr |= c), (e.lanes = c), (e.memoizedState = d);
  }
}
function ba(e, t, r) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var n = e[t],
        l = n.callback;
      if (l !== null) {
        if (((n.callback = null), (n = r), typeof l != "function")) throw Error(E(191, l));
        l.call(n);
      }
    }
}
var Yf = new Qu.Component().refs;
function uc(e, t, r, n) {
  (t = e.memoizedState), (r = r(n, t)), (r = r == null ? t : K({}, t, r)), (e.memoizedState = r), e.lanes === 0 && (e.updateQueue.baseState = r);
}
var di = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? sr(e) === e : !1;
  },
  enqueueSetState: function (e, t, r) {
    e = e._reactInternals;
    var n = me(),
      l = Tt(e),
      o = lt(n, l);
    (o.payload = t), r != null && (o.callback = r), (t = _t(e, o, l)), t !== null && (Qe(t, e, l, n), vl(t, e, l));
  },
  enqueueReplaceState: function (e, t, r) {
    e = e._reactInternals;
    var n = me(),
      l = Tt(e),
      o = lt(n, l);
    (o.tag = 1), (o.payload = t), r != null && (o.callback = r), (t = _t(e, o, l)), t !== null && (Qe(t, e, l, n), vl(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var r = me(),
      n = Tt(e),
      l = lt(r, n);
    (l.tag = 2), t != null && (l.callback = t), (t = _t(e, l, n)), t !== null && (Qe(t, e, n, r), vl(t, e, n));
  },
};
function Ra(e, t, r, n, l, o, c) {
  return (e = e.stateNode), typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(n, o, c) : t.prototype && t.prototype.isPureReactComponent ? !En(r, n) || !En(l, o) : !0;
}
function Xf(e, t, r) {
  var n = !1,
    l = Dt,
    o = t.contextType;
  return typeof o == "object" && o !== null ? (o = De(o)) : ((l = we(t) ? tr : pe.current), (n = t.contextTypes), (o = (n = n != null) ? Rr(e, l) : Dt)), (t = new t(r, o)), (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null), (t.updater = di), (e.stateNode = t), (t._reactInternals = e), n && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = l), (e.__reactInternalMemoizedMaskedChildContext = o)), t;
}
function La(e, t, r, n) {
  (e = t.state), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, n), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, n), t.state !== e && di.enqueueReplaceState(t, t.state, null);
}
function fc(e, t, r, n) {
  var l = e.stateNode;
  (l.props = r), (l.state = e.memoizedState), (l.refs = Yf), fs(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? (l.context = De(o)) : ((o = we(t) ? tr : pe.current), (l.context = Rr(e, o))), (l.state = e.memoizedState), (o = t.getDerivedStateFromProps), typeof o == "function" && (uc(e, t, o, r), (l.state = e.memoizedState)), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || (typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function") || ((t = l.state), typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && di.enqueueReplaceState(l, l.state, null), Al(e, r, l, n), (l.state = e.memoizedState)), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Zr(e, t, r) {
  if (((e = r.ref), e !== null && typeof e != "function" && typeof e != "object")) {
    if (r._owner) {
      if (((r = r._owner), r)) {
        if (r.tag !== 1) throw Error(E(309));
        var n = r.stateNode;
      }
      if (!n) throw Error(E(147, e));
      var l = n,
        o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o
        ? t.ref
        : ((t = function (c) {
            var s = l.refs;
            s === Yf && (s = l.refs = {}), c === null ? delete s[o] : (s[o] = c);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(E(284));
    if (!r._owner) throw Error(E(290, e));
  }
  return e;
}
function cl(e, t) {
  throw ((e = Object.prototype.toString.call(t)), Error(E(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
}
function Ia(e) {
  var t = e._init;
  return t(e._payload);
}
function Jf(e) {
  function t(m, h) {
    if (e) {
      var y = m.deletions;
      y === null ? ((m.deletions = [h]), (m.flags |= 16)) : y.push(h);
    }
  }
  function r(m, h) {
    if (!e) return null;
    for (; h !== null; ) t(m, h), (h = h.sibling);
    return null;
  }
  function n(m, h) {
    for (m = new Map(); h !== null; ) h.key !== null ? m.set(h.key, h) : m.set(h.index, h), (h = h.sibling);
    return m;
  }
  function l(m, h) {
    return (m = bt(m, h)), (m.index = 0), (m.sibling = null), m;
  }
  function o(m, h, y) {
    return (m.index = y), e ? ((y = m.alternate), y !== null ? ((y = y.index), y < h ? ((m.flags |= 2), h) : y) : ((m.flags |= 2), h)) : ((m.flags |= 1048576), h);
  }
  function c(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function s(m, h, y, w) {
    return h === null || h.tag !== 6 ? ((h = go(y, m.mode, w)), (h.return = m), h) : ((h = l(h, y)), (h.return = m), h);
  }
  function a(m, h, y, w) {
    var C = y.type;
    return C === dr ? f(m, h, y.props.children, w, y.key) : h !== null && (h.elementType === C || (typeof C == "object" && C !== null && C.$$typeof === mt && Ia(C) === h.type)) ? ((w = l(h, y.props)), (w.ref = Zr(m, h, y)), (w.return = m), w) : ((w = El(y.type, y.key, y.props, null, m.mode, w)), (w.ref = Zr(m, h, y)), (w.return = m), w);
  }
  function u(m, h, y, w) {
    return h === null || h.tag !== 4 || h.stateNode.containerInfo !== y.containerInfo || h.stateNode.implementation !== y.implementation ? ((h = jo(y, m.mode, w)), (h.return = m), h) : ((h = l(h, y.children || [])), (h.return = m), h);
  }
  function f(m, h, y, w, C) {
    return h === null || h.tag !== 7 ? ((h = er(y, m.mode, w, C)), (h.return = m), h) : ((h = l(h, y)), (h.return = m), h);
  }
  function d(m, h, y) {
    if ((typeof h == "string" && h !== "") || typeof h == "number") return (h = go("" + h, m.mode, y)), (h.return = m), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Xn:
          return (y = El(h.type, h.key, h.props, null, m.mode, y)), (y.ref = Zr(m, null, h)), (y.return = m), y;
        case fr:
          return (h = jo(h, m.mode, y)), (h.return = m), h;
        case mt:
          var w = h._init;
          return d(m, w(h._payload), y);
      }
      if (nn(h) || Kr(h)) return (h = er(h, m.mode, y, null)), (h.return = m), h;
      cl(m, h);
    }
    return null;
  }
  function p(m, h, y, w) {
    var C = h !== null ? h.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number") return C !== null ? null : s(m, h, "" + y, w);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Xn:
          return y.key === C ? a(m, h, y, w) : null;
        case fr:
          return y.key === C ? u(m, h, y, w) : null;
        case mt:
          return (C = y._init), p(m, h, C(y._payload), w);
      }
      if (nn(y) || Kr(y)) return C !== null ? null : f(m, h, y, w, null);
      cl(m, y);
    }
    return null;
  }
  function v(m, h, y, w, C) {
    if ((typeof w == "string" && w !== "") || typeof w == "number") return (m = m.get(y) || null), s(h, m, "" + w, C);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case Xn:
          return (m = m.get(w.key === null ? y : w.key) || null), a(h, m, w, C);
        case fr:
          return (m = m.get(w.key === null ? y : w.key) || null), u(h, m, w, C);
        case mt:
          var P = w._init;
          return v(m, h, y, P(w._payload), C);
      }
      if (nn(w) || Kr(w)) return (m = m.get(y) || null), f(h, m, w, C, null);
      cl(h, w);
    }
    return null;
  }
  function x(m, h, y, w) {
    for (var C = null, P = null, N = h, T = (h = 0), D = null; N !== null && T < y.length; T++) {
      N.index > T ? ((D = N), (N = null)) : (D = N.sibling);
      var b = p(m, N, y[T], w);
      if (b === null) {
        N === null && (N = D);
        break;
      }
      e && N && b.alternate === null && t(m, N), (h = o(b, h, T)), P === null ? (C = b) : (P.sibling = b), (P = b), (N = D);
    }
    if (T === y.length) return r(m, N), V && Kt(m, T), C;
    if (N === null) {
      for (; T < y.length; T++) (N = d(m, y[T], w)), N !== null && ((h = o(N, h, T)), P === null ? (C = N) : (P.sibling = N), (P = N));
      return V && Kt(m, T), C;
    }
    for (N = n(m, N); T < y.length; T++) (D = v(N, m, T, y[T], w)), D !== null && (e && D.alternate !== null && N.delete(D.key === null ? T : D.key), (h = o(D, h, T)), P === null ? (C = D) : (P.sibling = D), (P = D));
    return (
      e &&
        N.forEach(function (ie) {
          return t(m, ie);
        }),
      V && Kt(m, T),
      C
    );
  }
  function g(m, h, y, w) {
    var C = Kr(y);
    if (typeof C != "function") throw Error(E(150));
    if (((y = C.call(y)), y == null)) throw Error(E(151));
    for (var P = (C = null), N = h, T = (h = 0), D = null, b = y.next(); N !== null && !b.done; T++, b = y.next()) {
      N.index > T ? ((D = N), (N = null)) : (D = N.sibling);
      var ie = p(m, N, b.value, w);
      if (ie === null) {
        N === null && (N = D);
        break;
      }
      e && N && ie.alternate === null && t(m, N), (h = o(ie, h, T)), P === null ? (C = ie) : (P.sibling = ie), (P = ie), (N = D);
    }
    if (b.done) return r(m, N), V && Kt(m, T), C;
    if (N === null) {
      for (; !b.done; T++, b = y.next()) (b = d(m, b.value, w)), b !== null && ((h = o(b, h, T)), P === null ? (C = b) : (P.sibling = b), (P = b));
      return V && Kt(m, T), C;
    }
    for (N = n(m, N); !b.done; T++, b = y.next()) (b = v(N, m, T, b.value, w)), b !== null && (e && b.alternate !== null && N.delete(b.key === null ? T : b.key), (h = o(b, h, T)), P === null ? (C = b) : (P.sibling = b), (P = b));
    return (
      e &&
        N.forEach(function (Hr) {
          return t(m, Hr);
        }),
      V && Kt(m, T),
      C
    );
  }
  function j(m, h, y, w) {
    if ((typeof y == "object" && y !== null && y.type === dr && y.key === null && (y = y.props.children), typeof y == "object" && y !== null)) {
      switch (y.$$typeof) {
        case Xn:
          e: {
            for (var C = y.key, P = h; P !== null; ) {
              if (P.key === C) {
                if (((C = y.type), C === dr)) {
                  if (P.tag === 7) {
                    r(m, P.sibling), (h = l(P, y.props.children)), (h.return = m), (m = h);
                    break e;
                  }
                } else if (P.elementType === C || (typeof C == "object" && C !== null && C.$$typeof === mt && Ia(C) === P.type)) {
                  r(m, P.sibling), (h = l(P, y.props)), (h.ref = Zr(m, P, y)), (h.return = m), (m = h);
                  break e;
                }
                r(m, P);
                break;
              } else t(m, P);
              P = P.sibling;
            }
            y.type === dr ? ((h = er(y.props.children, m.mode, w, y.key)), (h.return = m), (m = h)) : ((w = El(y.type, y.key, y.props, null, m.mode, w)), (w.ref = Zr(m, h, y)), (w.return = m), (m = w));
          }
          return c(m);
        case fr:
          e: {
            for (P = y.key; h !== null; ) {
              if (h.key === P)
                if (h.tag === 4 && h.stateNode.containerInfo === y.containerInfo && h.stateNode.implementation === y.implementation) {
                  r(m, h.sibling), (h = l(h, y.children || [])), (h.return = m), (m = h);
                  break e;
                } else {
                  r(m, h);
                  break;
                }
              else t(m, h);
              h = h.sibling;
            }
            (h = jo(y, m.mode, w)), (h.return = m), (m = h);
          }
          return c(m);
        case mt:
          return (P = y._init), j(m, h, P(y._payload), w);
      }
      if (nn(y)) return x(m, h, y, w);
      if (Kr(y)) return g(m, h, y, w);
      cl(m, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number" ? ((y = "" + y), h !== null && h.tag === 6 ? (r(m, h.sibling), (h = l(h, y)), (h.return = m), (m = h)) : (r(m, h), (h = go(y, m.mode, w)), (h.return = m), (m = h)), c(m)) : r(m, h);
  }
  return j;
}
var Ir = Jf(!0),
  Zf = Jf(!1),
  Wn = {},
  Ze = At(Wn),
  _n = At(Wn),
  On = At(Wn);
function Zt(e) {
  if (e === Wn) throw Error(E(174));
  return e;
}
function ds(e, t) {
  switch ((A(On, t), A(_n, e), A(Ze, Wn), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Wo(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = Wo(t, e));
  }
  B(Ze), A(Ze, t);
}
function zr() {
  B(Ze), B(_n), B(On);
}
function qf(e) {
  Zt(On.current);
  var t = Zt(Ze.current),
    r = Wo(t, e.type);
  t !== r && (A(_n, e), A(Ze, r));
}
function ps(e) {
  _n.current === e && (B(Ze), B(_n));
}
var H = At(0);
function Ul(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var r = t.memoizedState;
      if (r !== null && ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var po = [];
function hs() {
  for (var e = 0; e < po.length; e++) po[e]._workInProgressVersionPrimary = null;
  po.length = 0;
}
var gl = ut.ReactCurrentDispatcher,
  ho = ut.ReactCurrentBatchConfig,
  nr = 0,
  Q = null,
  q = null,
  re = null,
  Bl = !1,
  pn = !1,
  Tn = 0,
  Lm = 0;
function ae() {
  throw Error(E(321));
}
function ms(e, t) {
  if (t === null) return !1;
  for (var r = 0; r < t.length && r < e.length; r++) if (!Ke(e[r], t[r])) return !1;
  return !0;
}
function xs(e, t, r, n, l, o) {
  if (((nr = o), (Q = t), (t.memoizedState = null), (t.updateQueue = null), (t.lanes = 0), (gl.current = e === null || e.memoizedState === null ? $m : Mm), (e = r(n, l)), pn)) {
    o = 0;
    do {
      if (((pn = !1), (Tn = 0), 25 <= o)) throw Error(E(301));
      (o += 1), (re = q = null), (t.updateQueue = null), (gl.current = Fm), (e = r(n, l));
    } while (pn);
  }
  if (((gl.current = Wl), (t = q !== null && q.next !== null), (nr = 0), (re = q = Q = null), (Bl = !1), t)) throw Error(E(300));
  return e;
}
function ys() {
  var e = Tn !== 0;
  return (Tn = 0), e;
}
function Ye() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return re === null ? (Q.memoizedState = re = e) : (re = re.next = e), re;
}
function $e() {
  if (q === null) {
    var e = Q.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = q.next;
  var t = re === null ? Q.memoizedState : re.next;
  if (t !== null) (re = t), (q = e);
  else {
    if (e === null) throw Error(E(310));
    (q = e), (e = { memoizedState: q.memoizedState, baseState: q.baseState, baseQueue: q.baseQueue, queue: q.queue, next: null }), re === null ? (Q.memoizedState = re = e) : (re = re.next = e);
  }
  return re;
}
function bn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function mo(e) {
  var t = $e(),
    r = t.queue;
  if (r === null) throw Error(E(311));
  r.lastRenderedReducer = e;
  var n = q,
    l = n.baseQueue,
    o = r.pending;
  if (o !== null) {
    if (l !== null) {
      var c = l.next;
      (l.next = o.next), (o.next = c);
    }
    (n.baseQueue = l = o), (r.pending = null);
  }
  if (l !== null) {
    (o = l.next), (n = n.baseState);
    var s = (c = null),
      a = null,
      u = o;
    do {
      var f = u.lane;
      if ((nr & f) === f) a !== null && (a = a.next = { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }), (n = u.hasEagerState ? u.eagerState : e(n, u.action));
      else {
        var d = { lane: f, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null };
        a === null ? ((s = a = d), (c = n)) : (a = a.next = d), (Q.lanes |= f), (lr |= f);
      }
      u = u.next;
    } while (u !== null && u !== o);
    a === null ? (c = n) : (a.next = s), Ke(n, t.memoizedState) || (ge = !0), (t.memoizedState = n), (t.baseState = c), (t.baseQueue = a), (r.lastRenderedState = n);
  }
  if (((e = r.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (Q.lanes |= o), (lr |= o), (l = l.next);
    while (l !== e);
  } else l === null && (r.lanes = 0);
  return [t.memoizedState, r.dispatch];
}
function xo(e) {
  var t = $e(),
    r = t.queue;
  if (r === null) throw Error(E(311));
  r.lastRenderedReducer = e;
  var n = r.dispatch,
    l = r.pending,
    o = t.memoizedState;
  if (l !== null) {
    r.pending = null;
    var c = (l = l.next);
    do (o = e(o, c.action)), (c = c.next);
    while (c !== l);
    Ke(o, t.memoizedState) || (ge = !0), (t.memoizedState = o), t.baseQueue === null && (t.baseState = o), (r.lastRenderedState = o);
  }
  return [o, n];
}
function ed() {}
function td(e, t) {
  var r = Q,
    n = $e(),
    l = t(),
    o = !Ke(n.memoizedState, l);
  if ((o && ((n.memoizedState = l), (ge = !0)), (n = n.queue), vs(ld.bind(null, r, n, e), [e]), n.getSnapshot !== t || o || (re !== null && re.memoizedState.tag & 1))) {
    if (((r.flags |= 2048), Rn(9, nd.bind(null, r, n, l, t), void 0, null), ne === null)) throw Error(E(349));
    nr & 30 || rd(r, t, l);
  }
  return l;
}
function rd(e, t, r) {
  (e.flags |= 16384), (e = { getSnapshot: t, value: r }), (t = Q.updateQueue), t === null ? ((t = { lastEffect: null, stores: null }), (Q.updateQueue = t), (t.stores = [e])) : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
}
function nd(e, t, r, n) {
  (t.value = r), (t.getSnapshot = n), id(t) && od(e);
}
function ld(e, t, r) {
  return r(function () {
    id(t) && od(e);
  });
}
function id(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !Ke(e, r);
  } catch {
    return !0;
  }
}
function od(e) {
  var t = ct(e, 1);
  t !== null && Qe(t, e, 1, -1);
}
function za(e) {
  var t = Ye();
  return typeof e == "function" && (e = e()), (t.memoizedState = t.baseState = e), (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: bn, lastRenderedState: e }), (t.queue = e), (e = e.dispatch = Dm.bind(null, Q, e)), [t.memoizedState, e];
}
function Rn(e, t, r, n) {
  return (e = { tag: e, create: t, destroy: r, deps: n, next: null }), (t = Q.updateQueue), t === null ? ((t = { lastEffect: null, stores: null }), (Q.updateQueue = t), (t.lastEffect = e.next = e)) : ((r = t.lastEffect), r === null ? (t.lastEffect = e.next = e) : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e))), e;
}
function cd() {
  return $e().memoizedState;
}
function jl(e, t, r, n) {
  var l = Ye();
  (Q.flags |= e), (l.memoizedState = Rn(1 | t, r, void 0, n === void 0 ? null : n));
}
function pi(e, t, r, n) {
  var l = $e();
  n = n === void 0 ? null : n;
  var o = void 0;
  if (q !== null) {
    var c = q.memoizedState;
    if (((o = c.destroy), n !== null && ms(n, c.deps))) {
      l.memoizedState = Rn(t, r, o, n);
      return;
    }
  }
  (Q.flags |= e), (l.memoizedState = Rn(1 | t, r, o, n));
}
function Da(e, t) {
  return jl(8390656, 8, e, t);
}
function vs(e, t) {
  return pi(2048, 8, e, t);
}
function sd(e, t) {
  return pi(4, 2, e, t);
}
function ad(e, t) {
  return pi(4, 4, e, t);
}
function ud(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function fd(e, t, r) {
  return (r = r != null ? r.concat([e]) : null), pi(4, 4, ud.bind(null, t, e), r);
}
function gs() {}
function dd(e, t) {
  var r = $e();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && ms(t, n[1]) ? n[0] : ((r.memoizedState = [e, t]), e);
}
function pd(e, t) {
  var r = $e();
  t = t === void 0 ? null : t;
  var n = r.memoizedState;
  return n !== null && t !== null && ms(t, n[1]) ? n[0] : ((e = e()), (r.memoizedState = [e, t]), e);
}
function hd(e, t, r) {
  return nr & 21 ? (Ke(r, t) || ((r = yf()), (Q.lanes |= r), (lr |= r), (e.baseState = !0)), t) : (e.baseState && ((e.baseState = !1), (ge = !0)), (e.memoizedState = r));
}
function Im(e, t) {
  var r = $;
  ($ = r !== 0 && 4 > r ? r : 4), e(!0);
  var n = ho.transition;
  ho.transition = {};
  try {
    e(!1), t();
  } finally {
    ($ = r), (ho.transition = n);
  }
}
function md() {
  return $e().memoizedState;
}
function zm(e, t, r) {
  var n = Tt(e);
  if (((r = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null }), xd(e))) yd(t, r);
  else if (((r = Kf(e, t, r, n)), r !== null)) {
    var l = me();
    Qe(r, e, n, l), vd(r, t, n);
  }
}
function Dm(e, t, r) {
  var n = Tt(e),
    l = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (xd(e)) yd(t, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && ((o = t.lastRenderedReducer), o !== null))
      try {
        var c = t.lastRenderedState,
          s = o(c, r);
        if (((l.hasEagerState = !0), (l.eagerState = s), Ke(s, c))) {
          var a = t.interleaved;
          a === null ? ((l.next = l), us(t)) : ((l.next = a.next), (a.next = l)), (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (r = Kf(e, t, l, n)), r !== null && ((l = me()), Qe(r, e, n, l), vd(r, t, n));
  }
}
function xd(e) {
  var t = e.alternate;
  return e === Q || (t !== null && t === Q);
}
function yd(e, t) {
  pn = Bl = !0;
  var r = e.pending;
  r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)), (e.pending = t);
}
function vd(e, t, r) {
  if (r & 4194240) {
    var n = t.lanes;
    (n &= e.pendingLanes), (r |= n), (t.lanes = r), Xc(e, r);
  }
}
var Wl = { readContext: De, useCallback: ae, useContext: ae, useEffect: ae, useImperativeHandle: ae, useInsertionEffect: ae, useLayoutEffect: ae, useMemo: ae, useReducer: ae, useRef: ae, useState: ae, useDebugValue: ae, useDeferredValue: ae, useTransition: ae, useMutableSource: ae, useSyncExternalStore: ae, useId: ae, unstable_isNewReconciler: !1 },
  $m = {
    readContext: De,
    useCallback: function (e, t) {
      return (Ye().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: De,
    useEffect: Da,
    useImperativeHandle: function (e, t, r) {
      return (r = r != null ? r.concat([e]) : null), jl(4194308, 4, ud.bind(null, t, e), r);
    },
    useLayoutEffect: function (e, t) {
      return jl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return jl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var r = Ye();
      return (t = t === void 0 ? null : t), (e = e()), (r.memoizedState = [e, t]), e;
    },
    useReducer: function (e, t, r) {
      var n = Ye();
      return (t = r !== void 0 ? r(t) : t), (n.memoizedState = n.baseState = t), (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }), (n.queue = e), (e = e.dispatch = zm.bind(null, Q, e)), [n.memoizedState, e];
    },
    useRef: function (e) {
      var t = Ye();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: za,
    useDebugValue: gs,
    useDeferredValue: function (e) {
      return (Ye().memoizedState = e);
    },
    useTransition: function () {
      var e = za(!1),
        t = e[0];
      return (e = Im.bind(null, e[1])), (Ye().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, r) {
      var n = Q,
        l = Ye();
      if (V) {
        if (r === void 0) throw Error(E(407));
        r = r();
      } else {
        if (((r = t()), ne === null)) throw Error(E(349));
        nr & 30 || rd(n, t, r);
      }
      l.memoizedState = r;
      var o = { value: r, getSnapshot: t };
      return (l.queue = o), Da(ld.bind(null, n, o, e), [e]), (n.flags |= 2048), Rn(9, nd.bind(null, n, o, r, t), void 0, null), r;
    },
    useId: function () {
      var e = Ye(),
        t = ne.identifierPrefix;
      if (V) {
        var r = nt,
          n = rt;
        (r = (n & ~(1 << (32 - He(n) - 1))).toString(32) + r), (t = ":" + t + "R" + r), (r = Tn++), 0 < r && (t += "H" + r.toString(32)), (t += ":");
      } else (r = Lm++), (t = ":" + t + "r" + r.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Mm = {
    readContext: De,
    useCallback: dd,
    useContext: De,
    useEffect: vs,
    useImperativeHandle: fd,
    useInsertionEffect: sd,
    useLayoutEffect: ad,
    useMemo: pd,
    useReducer: mo,
    useRef: cd,
    useState: function () {
      return mo(bn);
    },
    useDebugValue: gs,
    useDeferredValue: function (e) {
      var t = $e();
      return hd(t, q.memoizedState, e);
    },
    useTransition: function () {
      var e = mo(bn)[0],
        t = $e().memoizedState;
      return [e, t];
    },
    useMutableSource: ed,
    useSyncExternalStore: td,
    useId: md,
    unstable_isNewReconciler: !1,
  },
  Fm = {
    readContext: De,
    useCallback: dd,
    useContext: De,
    useEffect: vs,
    useImperativeHandle: fd,
    useInsertionEffect: sd,
    useLayoutEffect: ad,
    useMemo: pd,
    useReducer: xo,
    useRef: cd,
    useState: function () {
      return xo(bn);
    },
    useDebugValue: gs,
    useDeferredValue: function (e) {
      var t = $e();
      return q === null ? (t.memoizedState = e) : hd(t, q.memoizedState, e);
    },
    useTransition: function () {
      var e = xo(bn)[0],
        t = $e().memoizedState;
      return [e, t];
    },
    useMutableSource: ed,
    useSyncExternalStore: td,
    useId: md,
    unstable_isNewReconciler: !1,
  };
function Dr(e, t) {
  try {
    var r = "",
      n = t;
    do (r += ph(n)), (n = n.return);
    while (n);
    var l = r;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function yo(e, t, r) {
  return { value: e, source: null, stack: r ?? null, digest: t ?? null };
}
function dc(e, t) {
  try {
    console.error(t.value);
  } catch (r) {
    setTimeout(function () {
      throw r;
    });
  }
}
var Am = typeof WeakMap == "function" ? WeakMap : Map;
function gd(e, t, r) {
  (r = lt(-1, r)), (r.tag = 3), (r.payload = { element: null });
  var n = t.value;
  return (
    (r.callback = function () {
      Hl || ((Hl = !0), (Sc = n)), dc(e, t);
    }),
    r
  );
}
function jd(e, t, r) {
  (r = lt(-1, r)), (r.tag = 3);
  var n = e.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var l = t.value;
    (r.payload = function () {
      return n(l);
    }),
      (r.callback = function () {
        dc(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (r.callback = function () {
        dc(e, t), typeof n != "function" && (Ot === null ? (Ot = new Set([this])) : Ot.add(this));
        var c = t.stack;
        this.componentDidCatch(t.value, { componentStack: c !== null ? c : "" });
      }),
    r
  );
}
function $a(e, t, r) {
  var n = e.pingCache;
  if (n === null) {
    n = e.pingCache = new Am();
    var l = new Set();
    n.set(t, l);
  } else (l = n.get(t)), l === void 0 && ((l = new Set()), n.set(t, l));
  l.has(r) || (l.add(r), (e = ex.bind(null, e, t, r)), t.then(e, e));
}
function Ma(e) {
  do {
    var t;
    if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Fa(e, t, r, n, l) {
  return e.mode & 1 ? ((e.flags |= 65536), (e.lanes = l), e) : (e === t ? (e.flags |= 65536) : ((e.flags |= 128), (r.flags |= 131072), (r.flags &= -52805), r.tag === 1 && (r.alternate === null ? (r.tag = 17) : ((t = lt(-1, 1)), (t.tag = 2), _t(r, t, 1))), (r.lanes |= 1)), e);
}
var Um = ut.ReactCurrentOwner,
  ge = !1;
function he(e, t, r, n) {
  t.child = e === null ? Zf(t, null, r, n) : Ir(t, e.child, r, n);
}
function Aa(e, t, r, n, l) {
  r = r.render;
  var o = t.ref;
  return Pr(t, l), (n = xs(e, t, r, n, o, l)), (r = ys()), e !== null && !ge ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), st(e, t, l)) : (V && r && ls(t), (t.flags |= 1), he(e, t, n, l), t.child);
}
function Ua(e, t, r, n, l) {
  if (e === null) {
    var o = r.type;
    return typeof o == "function" && !Ps(o) && o.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? ((t.tag = 15), (t.type = o), wd(e, t, o, n, l)) : ((e = El(r.type, null, n, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var c = o.memoizedProps;
    if (((r = r.compare), (r = r !== null ? r : En), r(c, n) && e.ref === t.ref)) return st(e, t, l);
  }
  return (t.flags |= 1), (e = bt(o, n)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function wd(e, t, r, n, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (En(o, n) && e.ref === t.ref)
      if (((ge = !1), (t.pendingProps = n = o), (e.lanes & l) !== 0)) e.flags & 131072 && (ge = !0);
      else return (t.lanes = e.lanes), st(e, t, l);
  }
  return pc(e, t, r, n, l);
}
function Sd(e, t, r) {
  var n = t.pendingProps,
    l = n.children,
    o = e !== null ? e.memoizedState : null;
  if (n.mode === "hidden")
    if (!(t.mode & 1)) (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), A(Sr, Ee), (Ee |= r);
    else {
      if (!(r & 1073741824)) return (e = o !== null ? o.baseLanes | r : r), (t.lanes = t.childLanes = 1073741824), (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }), (t.updateQueue = null), A(Sr, Ee), (Ee |= e), null;
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), (n = o !== null ? o.baseLanes : r), A(Sr, Ee), (Ee |= n);
    }
  else o !== null ? ((n = o.baseLanes | r), (t.memoizedState = null)) : (n = r), A(Sr, Ee), (Ee |= n);
  return he(e, t, l, r), t.child;
}
function kd(e, t) {
  var r = t.ref;
  ((e === null && r !== null) || (e !== null && e.ref !== r)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function pc(e, t, r, n, l) {
  var o = we(r) ? tr : pe.current;
  return (o = Rr(t, o)), Pr(t, l), (r = xs(e, t, r, n, o, l)), (n = ys()), e !== null && !ge ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), st(e, t, l)) : (V && n && ls(t), (t.flags |= 1), he(e, t, r, l), t.child);
}
function Ba(e, t, r, n, l) {
  if (we(r)) {
    var o = !0;
    zl(t);
  } else o = !1;
  if ((Pr(t, l), t.stateNode === null)) wl(e, t), Xf(t, r, n), fc(t, r, n, l), (n = !0);
  else if (e === null) {
    var c = t.stateNode,
      s = t.memoizedProps;
    c.props = s;
    var a = c.context,
      u = r.contextType;
    typeof u == "object" && u !== null ? (u = De(u)) : ((u = we(r) ? tr : pe.current), (u = Rr(t, u)));
    var f = r.getDerivedStateFromProps,
      d = typeof f == "function" || typeof c.getSnapshotBeforeUpdate == "function";
    d || (typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function") || ((s !== n || a !== u) && La(t, c, n, u)), (xt = !1);
    var p = t.memoizedState;
    (c.state = p), Al(t, n, c, l), (a = t.memoizedState), s !== n || p !== a || je.current || xt ? (typeof f == "function" && (uc(t, r, f, n), (a = t.memoizedState)), (s = xt || Ra(t, r, s, n, p, a, u)) ? (d || (typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function") || (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), (t.memoizedProps = n), (t.memoizedState = a)), (c.props = n), (c.state = a), (c.context = u), (n = s)) : (typeof c.componentDidMount == "function" && (t.flags |= 4194308), (n = !1));
  } else {
    (c = t.stateNode), Gf(e, t), (s = t.memoizedProps), (u = t.type === t.elementType ? s : Ue(t.type, s)), (c.props = u), (d = t.pendingProps), (p = c.context), (a = r.contextType), typeof a == "object" && a !== null ? (a = De(a)) : ((a = we(r) ? tr : pe.current), (a = Rr(t, a)));
    var v = r.getDerivedStateFromProps;
    (f = typeof v == "function" || typeof c.getSnapshotBeforeUpdate == "function") || (typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function") || ((s !== d || p !== a) && La(t, c, n, a)), (xt = !1), (p = t.memoizedState), (c.state = p), Al(t, n, c, l);
    var x = t.memoizedState;
    s !== d || p !== x || je.current || xt
      ? (typeof v == "function" && (uc(t, r, v, n), (x = t.memoizedState)),
        (u = xt || Ra(t, r, u, n, p, x, a) || !1) ? (f || (typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function") || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(n, x, a), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(n, x, a)), typeof c.componentDidUpdate == "function" && (t.flags |= 4), typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || (s === e.memoizedProps && p === e.memoizedState) || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || (s === e.memoizedProps && p === e.memoizedState) || (t.flags |= 1024), (t.memoizedProps = n), (t.memoizedState = x)),
        (c.props = n),
        (c.state = x),
        (c.context = a),
        (n = u))
      : (typeof c.componentDidUpdate != "function" || (s === e.memoizedProps && p === e.memoizedState) || (t.flags |= 4), typeof c.getSnapshotBeforeUpdate != "function" || (s === e.memoizedProps && p === e.memoizedState) || (t.flags |= 1024), (n = !1));
  }
  return hc(e, t, r, n, o, l);
}
function hc(e, t, r, n, l, o) {
  kd(e, t);
  var c = (t.flags & 128) !== 0;
  if (!n && !c) return l && Pa(t, r, !1), st(e, t, o);
  (n = t.stateNode), (Um.current = t);
  var s = c && typeof r.getDerivedStateFromError != "function" ? null : n.render();
  return (t.flags |= 1), e !== null && c ? ((t.child = Ir(t, e.child, null, o)), (t.child = Ir(t, null, s, o))) : he(e, t, s, o), (t.memoizedState = n.state), l && Pa(t, r, !0), t.child;
}
function Ed(e) {
  var t = e.stateNode;
  t.pendingContext ? Na(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Na(e, t.context, !1), ds(e, t.containerInfo);
}
function Wa(e, t, r, n, l) {
  return Lr(), os(l), (t.flags |= 256), he(e, t, r, n), t.child;
}
var mc = { dehydrated: null, treeContext: null, retryLane: 0 };
function xc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Cd(e, t, r) {
  var n = t.pendingProps,
    l = H.current,
    o = !1,
    c = (t.flags & 128) !== 0,
    s;
  if (((s = c) || (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), s ? ((o = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1), A(H, l & 1), e === null)) return sc(t), (e = t.memoizedState), e !== null && ((e = e.dehydrated), e !== null) ? (t.mode & 1 ? (e.data === "$!" ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null) : ((c = n.children), (e = n.fallback), o ? ((n = t.mode), (o = t.child), (c = { mode: "hidden", children: c }), !(n & 1) && o !== null ? ((o.childLanes = 0), (o.pendingProps = c)) : (o = xi(c, n, 0, null)), (e = er(e, n, r, null)), (o.return = t), (e.return = t), (o.sibling = e), (t.child = o), (t.child.memoizedState = xc(r)), (t.memoizedState = mc), e) : js(t, c));
  if (((l = e.memoizedState), l !== null && ((s = l.dehydrated), s !== null))) return Bm(e, t, c, n, s, l, r);
  if (o) {
    (o = n.fallback), (c = t.mode), (l = e.child), (s = l.sibling);
    var a = { mode: "hidden", children: n.children };
    return !(c & 1) && t.child !== l ? ((n = t.child), (n.childLanes = 0), (n.pendingProps = a), (t.deletions = null)) : ((n = bt(l, a)), (n.subtreeFlags = l.subtreeFlags & 14680064)), s !== null ? (o = bt(s, o)) : ((o = er(o, c, r, null)), (o.flags |= 2)), (o.return = t), (n.return = t), (n.sibling = o), (t.child = n), (n = o), (o = t.child), (c = e.child.memoizedState), (c = c === null ? xc(r) : { baseLanes: c.baseLanes | r, cachePool: null, transitions: c.transitions }), (o.memoizedState = c), (o.childLanes = e.childLanes & ~r), (t.memoizedState = mc), n;
  }
  return (o = e.child), (e = o.sibling), (n = bt(o, { mode: "visible", children: n.children })), !(t.mode & 1) && (n.lanes = r), (n.return = t), (n.sibling = null), e !== null && ((r = t.deletions), r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)), (t.child = n), (t.memoizedState = null), n;
}
function js(e, t) {
  return (t = xi({ mode: "visible", children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function sl(e, t, r, n) {
  return n !== null && os(n), Ir(t, e.child, null, r), (e = js(t, t.pendingProps.children)), (e.flags |= 2), (t.memoizedState = null), e;
}
function Bm(e, t, r, n, l, o, c) {
  if (r) return t.flags & 256 ? ((t.flags &= -257), (n = yo(Error(E(422)))), sl(e, t, c, n)) : t.memoizedState !== null ? ((t.child = e.child), (t.flags |= 128), null) : ((o = n.fallback), (l = t.mode), (n = xi({ mode: "visible", children: n.children }, l, 0, null)), (o = er(o, l, c, null)), (o.flags |= 2), (n.return = t), (o.return = t), (n.sibling = o), (t.child = n), t.mode & 1 && Ir(t, e.child, null, c), (t.child.memoizedState = xc(c)), (t.memoizedState = mc), o);
  if (!(t.mode & 1)) return sl(e, t, c, null);
  if (l.data === "$!") {
    if (((n = l.nextSibling && l.nextSibling.dataset), n)) var s = n.dgst;
    return (n = s), (o = Error(E(419))), (n = yo(o, n, void 0)), sl(e, t, c, n);
  }
  if (((s = (c & e.childLanes) !== 0), ge || s)) {
    if (((n = ne), n !== null)) {
      switch (c & -c) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (n.suspendedLanes | c) ? 0 : l), l !== 0 && l !== o.retryLane && ((o.retryLane = l), ct(e, l), Qe(n, e, l, -1));
    }
    return Ns(), (n = yo(Error(E(421)))), sl(e, t, c, n);
  }
  return l.data === "$?" ? ((t.flags |= 128), (t.child = e.child), (t = tx.bind(null, e)), (l._reactRetry = t), null) : ((e = o.treeContext), (Ce = Pt(l.nextSibling)), (Ne = t), (V = !0), (We = null), e !== null && ((Re[Le++] = rt), (Re[Le++] = nt), (Re[Le++] = rr), (rt = e.id), (nt = e.overflow), (rr = t)), (t = js(t, n.children)), (t.flags |= 4096), t);
}
function Va(e, t, r) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), ac(e.return, t, r);
}
function vo(e, t, r, n, l) {
  var o = e.memoizedState;
  o === null ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: n, tail: r, tailMode: l }) : ((o.isBackwards = t), (o.rendering = null), (o.renderingStartTime = 0), (o.last = n), (o.tail = r), (o.tailMode = l));
}
function Nd(e, t, r) {
  var n = t.pendingProps,
    l = n.revealOrder,
    o = n.tail;
  if ((he(e, t, n.children, r), (n = H.current), n & 2)) (n = (n & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Va(e, r, t);
        else if (e.tag === 19) Va(e, r, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    n &= 1;
  }
  if ((A(H, n), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (r = t.child, l = null; r !== null; ) (e = r.alternate), e !== null && Ul(e) === null && (l = r), (r = r.sibling);
        (r = l), r === null ? ((l = t.child), (t.child = null)) : ((l = r.sibling), (r.sibling = null)), vo(t, !1, l, r, o);
        break;
      case "backwards":
        for (r = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Ul(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = r), (r = l), (l = e);
        }
        vo(t, !0, r, null, o);
        break;
      case "together":
        vo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function wl(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function st(e, t, r) {
  if ((e !== null && (t.dependencies = e.dependencies), (lr |= t.lanes), !(r & t.childLanes))) return null;
  if (e !== null && t.child !== e.child) throw Error(E(153));
  if (t.child !== null) {
    for (e = t.child, r = bt(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null; ) (e = e.sibling), (r = r.sibling = bt(e, e.pendingProps)), (r.return = t);
    r.sibling = null;
  }
  return t.child;
}
function Wm(e, t, r) {
  switch (t.tag) {
    case 3:
      Ed(t), Lr();
      break;
    case 5:
      qf(t);
      break;
    case 1:
      we(t.type) && zl(t);
      break;
    case 4:
      ds(t, t.stateNode.containerInfo);
      break;
    case 10:
      var n = t.type._context,
        l = t.memoizedProps.value;
      A(Ml, n._currentValue), (n._currentValue = l);
      break;
    case 13:
      if (((n = t.memoizedState), n !== null)) return n.dehydrated !== null ? (A(H, H.current & 1), (t.flags |= 128), null) : r & t.child.childLanes ? Cd(e, t, r) : (A(H, H.current & 1), (e = st(e, t, r)), e !== null ? e.sibling : null);
      A(H, H.current & 1);
      break;
    case 19:
      if (((n = (r & t.childLanes) !== 0), e.flags & 128)) {
        if (n) return Nd(e, t, r);
        t.flags |= 128;
      }
      if (((l = t.memoizedState), l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)), A(H, H.current), n)) break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Sd(e, t, r);
  }
  return st(e, t, r);
}
var Pd, yc, _d, Od;
Pd = function (e, t) {
  for (var r = t.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
    else if (r.tag !== 4 && r.child !== null) {
      (r.child.return = r), (r = r.child);
      continue;
    }
    if (r === t) break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === t) return;
      r = r.return;
    }
    (r.sibling.return = r.return), (r = r.sibling);
  }
};
yc = function () {};
_d = function (e, t, r, n) {
  var l = e.memoizedProps;
  if (l !== n) {
    (e = t.stateNode), Zt(Ze.current);
    var o = null;
    switch (r) {
      case "input":
        (l = Fo(e, l)), (n = Fo(e, n)), (o = []);
        break;
      case "select":
        (l = K({}, l, { value: void 0 })), (n = K({}, n, { value: void 0 })), (o = []);
        break;
      case "textarea":
        (l = Bo(e, l)), (n = Bo(e, n)), (o = []);
        break;
      default:
        typeof l.onClick != "function" && typeof n.onClick == "function" && (e.onclick = Ll);
    }
    Vo(r, n);
    var c;
    r = null;
    for (u in l)
      if (!n.hasOwnProperty(u) && l.hasOwnProperty(u) && l[u] != null)
        if (u === "style") {
          var s = l[u];
          for (c in s) s.hasOwnProperty(c) && (r || (r = {}), (r[c] = ""));
        } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (yn.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null));
    for (u in n) {
      var a = n[u];
      if (((s = l != null ? l[u] : void 0), n.hasOwnProperty(u) && a !== s && (a != null || s != null)))
        if (u === "style")
          if (s) {
            for (c in s) !s.hasOwnProperty(c) || (a && a.hasOwnProperty(c)) || (r || (r = {}), (r[c] = ""));
            for (c in a) a.hasOwnProperty(c) && s[c] !== a[c] && (r || (r = {}), (r[c] = a[c]));
          } else r || (o || (o = []), o.push(u, r)), (r = a);
        else u === "dangerouslySetInnerHTML" ? ((a = a ? a.__html : void 0), (s = s ? s.__html : void 0), a != null && s !== a && (o = o || []).push(u, a)) : u === "children" ? (typeof a != "string" && typeof a != "number") || (o = o || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (yn.hasOwnProperty(u) ? (a != null && u === "onScroll" && U("scroll", e), o || s === a || (o = [])) : (o = o || []).push(u, a));
    }
    r && (o = o || []).push("style", r);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Od = function (e, t, r, n) {
  r !== n && (t.flags |= 4);
};
function qr(e, t) {
  if (!V)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var r = null; t !== null; ) t.alternate !== null && (r = t), (t = t.sibling);
        r === null ? (e.tail = null) : (r.sibling = null);
        break;
      case "collapsed":
        r = e.tail;
        for (var n = null; r !== null; ) r.alternate !== null && (n = r), (r = r.sibling);
        n === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (n.sibling = null);
    }
}
function ue(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    r = 0,
    n = 0;
  if (t) for (var l = e.child; l !== null; ) (r |= l.lanes | l.childLanes), (n |= l.subtreeFlags & 14680064), (n |= l.flags & 14680064), (l.return = e), (l = l.sibling);
  else for (l = e.child; l !== null; ) (r |= l.lanes | l.childLanes), (n |= l.subtreeFlags), (n |= l.flags), (l.return = e), (l = l.sibling);
  return (e.subtreeFlags |= n), (e.childLanes = r), t;
}
function Vm(e, t, r) {
  var n = t.pendingProps;
  switch ((is(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ue(t), null;
    case 1:
      return we(t.type) && Il(), ue(t), null;
    case 3:
      return (n = t.stateNode), zr(), B(je), B(pe), hs(), n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)), (e === null || e.child === null) && (ol(t) ? (t.flags |= 4) : e === null || (e.memoizedState.isDehydrated && !(t.flags & 256)) || ((t.flags |= 1024), We !== null && (Cc(We), (We = null)))), yc(e, t), ue(t), null;
    case 5:
      ps(t);
      var l = Zt(On.current);
      if (((r = t.type), e !== null && t.stateNode != null)) _d(e, t, r, n, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!n) {
          if (t.stateNode === null) throw Error(E(166));
          return ue(t), null;
        }
        if (((e = Zt(Ze.current)), ol(t))) {
          (n = t.stateNode), (r = t.type);
          var o = t.memoizedProps;
          switch (((n[Xe] = t), (n[Pn] = o), (e = (t.mode & 1) !== 0), r)) {
            case "dialog":
              U("cancel", n), U("close", n);
              break;
            case "iframe":
            case "object":
            case "embed":
              U("load", n);
              break;
            case "video":
            case "audio":
              for (l = 0; l < on.length; l++) U(on[l], n);
              break;
            case "source":
              U("error", n);
              break;
            case "img":
            case "image":
            case "link":
              U("error", n), U("load", n);
              break;
            case "details":
              U("toggle", n);
              break;
            case "input":
              qs(n, o), U("invalid", n);
              break;
            case "select":
              (n._wrapperState = { wasMultiple: !!o.multiple }), U("invalid", n);
              break;
            case "textarea":
              ta(n, o), U("invalid", n);
          }
          Vo(r, o), (l = null);
          for (var c in o)
            if (o.hasOwnProperty(c)) {
              var s = o[c];
              c === "children" ? (typeof s == "string" ? n.textContent !== s && (o.suppressHydrationWarning !== !0 && il(n.textContent, s, e), (l = ["children", s])) : typeof s == "number" && n.textContent !== "" + s && (o.suppressHydrationWarning !== !0 && il(n.textContent, s, e), (l = ["children", "" + s]))) : yn.hasOwnProperty(c) && s != null && c === "onScroll" && U("scroll", n);
            }
          switch (r) {
            case "input":
              Jn(n), ea(n, o, !0);
              break;
            case "textarea":
              Jn(n), ra(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (n.onclick = Ll);
          }
          (n = l), (t.updateQueue = n), n !== null && (t.flags |= 4);
        } else {
          (c = l.nodeType === 9 ? l : l.ownerDocument), e === "http://www.w3.org/1999/xhtml" && (e = tf(r)), e === "http://www.w3.org/1999/xhtml" ? (r === "script" ? ((e = c.createElement("div")), (e.innerHTML = "<script></script>"), (e = e.removeChild(e.firstChild))) : typeof n.is == "string" ? (e = c.createElement(r, { is: n.is })) : ((e = c.createElement(r)), r === "select" && ((c = e), n.multiple ? (c.multiple = !0) : n.size && (c.size = n.size)))) : (e = c.createElementNS(e, r)), (e[Xe] = t), (e[Pn] = n), Pd(e, t, !1, !1), (t.stateNode = e);
          e: {
            switch (((c = Ho(r, n)), r)) {
              case "dialog":
                U("cancel", e), U("close", e), (l = n);
                break;
              case "iframe":
              case "object":
              case "embed":
                U("load", e), (l = n);
                break;
              case "video":
              case "audio":
                for (l = 0; l < on.length; l++) U(on[l], e);
                l = n;
                break;
              case "source":
                U("error", e), (l = n);
                break;
              case "img":
              case "image":
              case "link":
                U("error", e), U("load", e), (l = n);
                break;
              case "details":
                U("toggle", e), (l = n);
                break;
              case "input":
                qs(e, n), (l = Fo(e, n)), U("invalid", e);
                break;
              case "option":
                l = n;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!n.multiple }), (l = K({}, n, { value: void 0 })), U("invalid", e);
                break;
              case "textarea":
                ta(e, n), (l = Bo(e, n)), U("invalid", e);
                break;
              default:
                l = n;
            }
            Vo(r, l), (s = l);
            for (o in s)
              if (s.hasOwnProperty(o)) {
                var a = s[o];
                o === "style" ? lf(e, a) : o === "dangerouslySetInnerHTML" ? ((a = a ? a.__html : void 0), a != null && rf(e, a)) : o === "children" ? (typeof a == "string" ? (r !== "textarea" || a !== "") && vn(e, a) : typeof a == "number" && vn(e, "" + a)) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (yn.hasOwnProperty(o) ? a != null && o === "onScroll" && U("scroll", e) : a != null && Vc(e, o, a, c));
              }
            switch (r) {
              case "input":
                Jn(e), ea(e, n, !1);
                break;
              case "textarea":
                Jn(e), ra(e);
                break;
              case "option":
                n.value != null && e.setAttribute("value", "" + zt(n.value));
                break;
              case "select":
                (e.multiple = !!n.multiple), (o = n.value), o != null ? kr(e, !!n.multiple, o, !1) : n.defaultValue != null && kr(e, !!n.multiple, n.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Ll);
            }
            switch (r) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
          }
          n && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ue(t), null;
    case 6:
      if (e && t.stateNode != null) Od(e, t, e.memoizedProps, n);
      else {
        if (typeof n != "string" && t.stateNode === null) throw Error(E(166));
        if (((r = Zt(On.current)), Zt(Ze.current), ol(t))) {
          if (((n = t.stateNode), (r = t.memoizedProps), (n[Xe] = t), (o = n.nodeValue !== r) && ((e = Ne), e !== null)))
            switch (e.tag) {
              case 3:
                il(n.nodeValue, r, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && il(n.nodeValue, r, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else (n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)), (n[Xe] = t), (t.stateNode = n);
      }
      return ue(t), null;
    case 13:
      if ((B(H), (n = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))) {
        if (V && Ce !== null && t.mode & 1 && !(t.flags & 128)) Qf(), Lr(), (t.flags |= 98560), (o = !1);
        else if (((o = ol(t)), n !== null && n.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(E(318));
            if (((o = t.memoizedState), (o = o !== null ? o.dehydrated : null), !o)) throw Error(E(317));
            o[Xe] = t;
          } else Lr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ue(t), (o = !1);
        } else We !== null && (Cc(We), (We = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? ((t.lanes = r), t) : ((n = n !== null), n !== (e !== null && e.memoizedState !== null) && n && ((t.child.flags |= 8192), t.mode & 1 && (e === null || H.current & 1 ? ee === 0 && (ee = 3) : Ns())), t.updateQueue !== null && (t.flags |= 4), ue(t), null);
    case 4:
      return zr(), yc(e, t), e === null && Cn(t.stateNode.containerInfo), ue(t), null;
    case 10:
      return as(t.type._context), ue(t), null;
    case 17:
      return we(t.type) && Il(), ue(t), null;
    case 19:
      if ((B(H), (o = t.memoizedState), o === null)) return ue(t), null;
      if (((n = (t.flags & 128) !== 0), (c = o.rendering), c === null))
        if (n) qr(o, !1);
        else {
          if (ee !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((c = Ul(e)), c !== null)) {
                for (t.flags |= 128, qr(o, !1), n = c.updateQueue, n !== null && ((t.updateQueue = n), (t.flags |= 4)), t.subtreeFlags = 0, n = r, r = t.child; r !== null; )
                  (o = r), (e = n), (o.flags &= 14680066), (c = o.alternate), c === null ? ((o.childLanes = 0), (o.lanes = e), (o.child = null), (o.subtreeFlags = 0), (o.memoizedProps = null), (o.memoizedState = null), (o.updateQueue = null), (o.dependencies = null), (o.stateNode = null)) : ((o.childLanes = c.childLanes), (o.lanes = c.lanes), (o.child = c.child), (o.subtreeFlags = 0), (o.deletions = null), (o.memoizedProps = c.memoizedProps), (o.memoizedState = c.memoizedState), (o.updateQueue = c.updateQueue), (o.type = c.type), (e = c.dependencies), (o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })), (r = r.sibling);
                return A(H, (H.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null && J() > $r && ((t.flags |= 128), (n = !0), qr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!n)
          if (((e = Ul(c)), e !== null)) {
            if (((t.flags |= 128), (n = !0), (r = e.updateQueue), r !== null && ((t.updateQueue = r), (t.flags |= 4)), qr(o, !0), o.tail === null && o.tailMode === "hidden" && !c.alternate && !V)) return ue(t), null;
          } else 2 * J() - o.renderingStartTime > $r && r !== 1073741824 && ((t.flags |= 128), (n = !0), qr(o, !1), (t.lanes = 4194304));
        o.isBackwards ? ((c.sibling = t.child), (t.child = c)) : ((r = o.last), r !== null ? (r.sibling = c) : (t.child = c), (o.last = c));
      }
      return o.tail !== null ? ((t = o.tail), (o.rendering = t), (o.tail = t.sibling), (o.renderingStartTime = J()), (t.sibling = null), (r = H.current), A(H, n ? (r & 1) | 2 : r & 1), t) : (ue(t), null);
    case 22:
    case 23:
      return Cs(), (n = t.memoizedState !== null), e !== null && (e.memoizedState !== null) !== n && (t.flags |= 8192), n && t.mode & 1 ? Ee & 1073741824 && (ue(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ue(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, t.tag));
}
function Hm(e, t) {
  switch ((is(t), t.tag)) {
    case 1:
      return we(t.type) && Il(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 3:
      return zr(), B(je), B(pe), hs(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null;
    case 5:
      return ps(t), null;
    case 13:
      if ((B(H), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(E(340));
        Lr();
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 19:
      return B(H), null;
    case 4:
      return zr(), null;
    case 10:
      return as(t.type._context), null;
    case 22:
    case 23:
      return Cs(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var al = !1,
  de = !1,
  Qm = typeof WeakSet == "function" ? WeakSet : Set,
  _ = null;
function wr(e, t) {
  var r = e.ref;
  if (r !== null)
    if (typeof r == "function")
      try {
        r(null);
      } catch (n) {
        G(e, t, n);
      }
    else r.current = null;
}
function vc(e, t, r) {
  try {
    r();
  } catch (n) {
    G(e, t, n);
  }
}
var Ha = !1;
function Km(e, t) {
  if (((tc = Tl), (e = Lf()), ns(e))) {
    if ("selectionStart" in e) var r = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        r = ((r = e.ownerDocument) && r.defaultView) || window;
        var n = r.getSelection && r.getSelection();
        if (n && n.rangeCount !== 0) {
          r = n.anchorNode;
          var l = n.anchorOffset,
            o = n.focusNode;
          n = n.focusOffset;
          try {
            r.nodeType, o.nodeType;
          } catch {
            r = null;
            break e;
          }
          var c = 0,
            s = -1,
            a = -1,
            u = 0,
            f = 0,
            d = e,
            p = null;
          t: for (;;) {
            for (var v; d !== r || (l !== 0 && d.nodeType !== 3) || (s = c + l), d !== o || (n !== 0 && d.nodeType !== 3) || (a = c + n), d.nodeType === 3 && (c += d.nodeValue.length), (v = d.firstChild) !== null; ) (p = d), (d = v);
            for (;;) {
              if (d === e) break t;
              if ((p === r && ++u === l && (s = c), p === o && ++f === n && (a = c), (v = d.nextSibling) !== null)) break;
              (d = p), (p = d.parentNode);
            }
            d = v;
          }
          r = s === -1 || a === -1 ? null : { start: s, end: a };
        } else r = null;
      }
    r = r || { start: 0, end: 0 };
  } else r = null;
  for (rc = { focusedElem: e, selectionRange: r }, Tl = !1, _ = t; _ !== null; )
    if (((t = _), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (_ = e);
    else
      for (; _ !== null; ) {
        t = _;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var g = x.memoizedProps,
                    j = x.memoizedState,
                    m = t.stateNode,
                    h = m.getSnapshotBeforeUpdate(t.elementType === t.type ? g : Ue(t.type, g), j);
                  m.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1 ? (y.textContent = "") : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(E(163));
            }
        } catch (w) {
          G(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (_ = e);
          break;
        }
        _ = t.return;
      }
  return (x = Ha), (Ha = !1), x;
}
function hn(e, t, r) {
  var n = t.updateQueue;
  if (((n = n !== null ? n.lastEffect : null), n !== null)) {
    var l = (n = n.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && vc(t, r, o);
      }
      l = l.next;
    } while (l !== n);
  }
}
function hi(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
    var r = (t = t.next);
    do {
      if ((r.tag & e) === e) {
        var n = r.create;
        r.destroy = n();
      }
      r = r.next;
    } while (r !== t);
  }
}
function gc(e) {
  var t = e.ref;
  if (t !== null) {
    var r = e.stateNode;
    switch (e.tag) {
      case 5:
        e = r;
        break;
      default:
        e = r;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Td(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Td(t)), (e.child = null), (e.deletions = null), (e.sibling = null), e.tag === 5 && ((t = e.stateNode), t !== null && (delete t[Xe], delete t[Pn], delete t[ic], delete t[Om], delete t[Tm])), (e.stateNode = null), (e.return = null), (e.dependencies = null), (e.memoizedProps = null), (e.memoizedState = null), (e.pendingProps = null), (e.stateNode = null), (e.updateQueue = null);
}
function bd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Qa(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || bd(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function jc(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6) (e = e.stateNode), t ? (r.nodeType === 8 ? r.parentNode.insertBefore(e, t) : r.insertBefore(e, t)) : (r.nodeType === 8 ? ((t = r.parentNode), t.insertBefore(e, r)) : ((t = r), t.appendChild(e)), (r = r._reactRootContainer), r != null || t.onclick !== null || (t.onclick = Ll));
  else if (n !== 4 && ((e = e.child), e !== null)) for (jc(e, t, r), e = e.sibling; e !== null; ) jc(e, t, r), (e = e.sibling);
}
function wc(e, t, r) {
  var n = e.tag;
  if (n === 5 || n === 6) (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
  else if (n !== 4 && ((e = e.child), e !== null)) for (wc(e, t, r), e = e.sibling; e !== null; ) wc(e, t, r), (e = e.sibling);
}
var oe = null,
  Be = !1;
function pt(e, t, r) {
  for (r = r.child; r !== null; ) Rd(e, t, r), (r = r.sibling);
}
function Rd(e, t, r) {
  if (Je && typeof Je.onCommitFiberUnmount == "function")
    try {
      Je.onCommitFiberUnmount(oi, r);
    } catch {}
  switch (r.tag) {
    case 5:
      de || wr(r, t);
    case 6:
      var n = oe,
        l = Be;
      (oe = null), pt(e, t, r), (oe = n), (Be = l), oe !== null && (Be ? ((e = oe), (r = r.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r)) : oe.removeChild(r.stateNode));
      break;
    case 18:
      oe !== null && (Be ? ((e = oe), (r = r.stateNode), e.nodeType === 8 ? uo(e.parentNode, r) : e.nodeType === 1 && uo(e, r), Sn(e)) : uo(oe, r.stateNode));
      break;
    case 4:
      (n = oe), (l = Be), (oe = r.stateNode.containerInfo), (Be = !0), pt(e, t, r), (oe = n), (Be = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!de && ((n = r.updateQueue), n !== null && ((n = n.lastEffect), n !== null))) {
        l = n = n.next;
        do {
          var o = l,
            c = o.destroy;
          (o = o.tag), c !== void 0 && (o & 2 || o & 4) && vc(r, t, c), (l = l.next);
        } while (l !== n);
      }
      pt(e, t, r);
      break;
    case 1:
      if (!de && (wr(r, t), (n = r.stateNode), typeof n.componentWillUnmount == "function"))
        try {
          (n.props = r.memoizedProps), (n.state = r.memoizedState), n.componentWillUnmount();
        } catch (s) {
          G(r, t, s);
        }
      pt(e, t, r);
      break;
    case 21:
      pt(e, t, r);
      break;
    case 22:
      r.mode & 1 ? ((de = (n = de) || r.memoizedState !== null), pt(e, t, r), (de = n)) : pt(e, t, r);
      break;
    default:
      pt(e, t, r);
  }
}
function Ka(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var r = e.stateNode;
    r === null && (r = e.stateNode = new Qm()),
      t.forEach(function (n) {
        var l = rx.bind(null, e, n);
        r.has(n) || (r.add(n), n.then(l, l));
      });
  }
}
function Fe(e, t) {
  var r = t.deletions;
  if (r !== null)
    for (var n = 0; n < r.length; n++) {
      var l = r[n];
      try {
        var o = e,
          c = t,
          s = c;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (oe = s.stateNode), (Be = !1);
              break e;
            case 3:
              (oe = s.stateNode.containerInfo), (Be = !0);
              break e;
            case 4:
              (oe = s.stateNode.containerInfo), (Be = !0);
              break e;
          }
          s = s.return;
        }
        if (oe === null) throw Error(E(160));
        Rd(o, c, l), (oe = null), (Be = !1);
        var a = l.alternate;
        a !== null && (a.return = null), (l.return = null);
      } catch (u) {
        G(l, t, u);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Ld(t, e), (t = t.sibling);
}
function Ld(e, t) {
  var r = e.alternate,
    n = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Fe(t, e), Ge(e), n & 4)) {
        try {
          hn(3, e, e.return), hi(3, e);
        } catch (g) {
          G(e, e.return, g);
        }
        try {
          hn(5, e, e.return);
        } catch (g) {
          G(e, e.return, g);
        }
      }
      break;
    case 1:
      Fe(t, e), Ge(e), n & 512 && r !== null && wr(r, r.return);
      break;
    case 5:
      if ((Fe(t, e), Ge(e), n & 512 && r !== null && wr(r, r.return), e.flags & 32)) {
        var l = e.stateNode;
        try {
          vn(l, "");
        } catch (g) {
          G(e, e.return, g);
        }
      }
      if (n & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          c = r !== null ? r.memoizedProps : o,
          s = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            s === "input" && o.type === "radio" && o.name != null && qu(l, o), Ho(s, c);
            var u = Ho(s, o);
            for (c = 0; c < a.length; c += 2) {
              var f = a[c],
                d = a[c + 1];
              f === "style" ? lf(l, d) : f === "dangerouslySetInnerHTML" ? rf(l, d) : f === "children" ? vn(l, d) : Vc(l, f, d, u);
            }
            switch (s) {
              case "input":
                Ao(l, o);
                break;
              case "textarea":
                ef(l, o);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var v = o.value;
                v != null ? kr(l, !!o.multiple, v, !1) : p !== !!o.multiple && (o.defaultValue != null ? kr(l, !!o.multiple, o.defaultValue, !0) : kr(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Pn] = o;
          } catch (g) {
            G(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((Fe(t, e), Ge(e), n & 4)) {
        if (e.stateNode === null) throw Error(E(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (g) {
          G(e, e.return, g);
        }
      }
      break;
    case 3:
      if ((Fe(t, e), Ge(e), n & 4 && r !== null && r.memoizedState.isDehydrated))
        try {
          Sn(t.containerInfo);
        } catch (g) {
          G(e, e.return, g);
        }
      break;
    case 4:
      Fe(t, e), Ge(e);
      break;
    case 13:
      Fe(t, e), Ge(e), (l = e.child), l.flags & 8192 && ((o = l.memoizedState !== null), (l.stateNode.isHidden = o), !o || (l.alternate !== null && l.alternate.memoizedState !== null) || (ks = J())), n & 4 && Ka(e);
      break;
    case 22:
      if (((f = r !== null && r.memoizedState !== null), e.mode & 1 ? ((de = (u = de) || f), Fe(t, e), (de = u)) : Fe(t, e), Ge(e), n & 8192)) {
        if (((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !f && e.mode & 1))
          for (_ = e, f = e.child; f !== null; ) {
            for (d = _ = f; _ !== null; ) {
              switch (((p = _), (v = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  hn(4, p, p.return);
                  break;
                case 1:
                  wr(p, p.return);
                  var x = p.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    (n = p), (r = p.return);
                    try {
                      (t = n), (x.props = t.memoizedProps), (x.state = t.memoizedState), x.componentWillUnmount();
                    } catch (g) {
                      G(n, r, g);
                    }
                  }
                  break;
                case 5:
                  wr(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Ya(d);
                    continue;
                  }
              }
              v !== null ? ((v.return = p), (_ = v)) : Ya(d);
            }
            f = f.sibling;
          }
        e: for (f = null, d = e; ; ) {
          if (d.tag === 5) {
            if (f === null) {
              f = d;
              try {
                (l = d.stateNode), u ? ((o = l.style), typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : (o.display = "none")) : ((s = d.stateNode), (a = d.memoizedProps.style), (c = a != null && a.hasOwnProperty("display") ? a.display : null), (s.style.display = nf("display", c)));
              } catch (g) {
                G(e, e.return, g);
              }
            }
          } else if (d.tag === 6) {
            if (f === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (g) {
                G(e, e.return, g);
              }
          } else if (((d.tag !== 22 && d.tag !== 23) || d.memoizedState === null || d === e) && d.child !== null) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            f === d && (f = null), (d = d.return);
          }
          f === d && (f = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Fe(t, e), Ge(e), n & 4 && Ka(e);
      break;
    case 21:
      break;
    default:
      Fe(t, e), Ge(e);
  }
}
function Ge(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var r = e.return; r !== null; ) {
          if (bd(r)) {
            var n = r;
            break e;
          }
          r = r.return;
        }
        throw Error(E(160));
      }
      switch (n.tag) {
        case 5:
          var l = n.stateNode;
          n.flags & 32 && (vn(l, ""), (n.flags &= -33));
          var o = Qa(e);
          wc(e, o, l);
          break;
        case 3:
        case 4:
          var c = n.stateNode.containerInfo,
            s = Qa(e);
          jc(e, s, c);
          break;
        default:
          throw Error(E(161));
      }
    } catch (a) {
      G(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Gm(e, t, r) {
  (_ = e), Id(e);
}
function Id(e, t, r) {
  for (var n = (e.mode & 1) !== 0; _ !== null; ) {
    var l = _,
      o = l.child;
    if (l.tag === 22 && n) {
      var c = l.memoizedState !== null || al;
      if (!c) {
        var s = l.alternate,
          a = (s !== null && s.memoizedState !== null) || de;
        s = al;
        var u = de;
        if (((al = c), (de = a) && !u)) for (_ = l; _ !== null; ) (c = _), (a = c.child), c.tag === 22 && c.memoizedState !== null ? Xa(l) : a !== null ? ((a.return = c), (_ = a)) : Xa(l);
        for (; o !== null; ) (_ = o), Id(o), (o = o.sibling);
        (_ = l), (al = s), (de = u);
      }
      Ga(e);
    } else l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (_ = o)) : Ga(e);
  }
}
function Ga(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t.flags & 8772) {
      var r = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              de || hi(5, t);
              break;
            case 1:
              var n = t.stateNode;
              if (t.flags & 4 && !de)
                if (r === null) n.componentDidMount();
                else {
                  var l = t.elementType === t.type ? r.memoizedProps : Ue(t.type, r.memoizedProps);
                  n.componentDidUpdate(l, r.memoizedState, n.__reactInternalSnapshotBeforeUpdate);
                }
              var o = t.updateQueue;
              o !== null && ba(t, o, n);
              break;
            case 3:
              var c = t.updateQueue;
              if (c !== null) {
                if (((r = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      r = t.child.stateNode;
                      break;
                    case 1:
                      r = t.child.stateNode;
                  }
                ba(t, c, r);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (r === null && t.flags & 4) {
                r = s;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && r.focus();
                    break;
                  case "img":
                    a.src && (r.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var f = u.memoizedState;
                  if (f !== null) {
                    var d = f.dehydrated;
                    d !== null && Sn(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(E(163));
          }
        de || (t.flags & 512 && gc(t));
      } catch (p) {
        G(t, t.return, p);
      }
    }
    if (t === e) {
      _ = null;
      break;
    }
    if (((r = t.sibling), r !== null)) {
      (r.return = t.return), (_ = r);
      break;
    }
    _ = t.return;
  }
}
function Ya(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t === e) {
      _ = null;
      break;
    }
    var r = t.sibling;
    if (r !== null) {
      (r.return = t.return), (_ = r);
      break;
    }
    _ = t.return;
  }
}
function Xa(e) {
  for (; _ !== null; ) {
    var t = _;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var r = t.return;
          try {
            hi(4, t);
          } catch (a) {
            G(t, r, a);
          }
          break;
        case 1:
          var n = t.stateNode;
          if (typeof n.componentDidMount == "function") {
            var l = t.return;
            try {
              n.componentDidMount();
            } catch (a) {
              G(t, l, a);
            }
          }
          var o = t.return;
          try {
            gc(t);
          } catch (a) {
            G(t, o, a);
          }
          break;
        case 5:
          var c = t.return;
          try {
            gc(t);
          } catch (a) {
            G(t, c, a);
          }
      }
    } catch (a) {
      G(t, t.return, a);
    }
    if (t === e) {
      _ = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (_ = s);
      break;
    }
    _ = t.return;
  }
}
var Ym = Math.ceil,
  Vl = ut.ReactCurrentDispatcher,
  ws = ut.ReactCurrentOwner,
  ze = ut.ReactCurrentBatchConfig,
  z = 0,
  ne = null,
  Z = null,
  ce = 0,
  Ee = 0,
  Sr = At(0),
  ee = 0,
  Ln = null,
  lr = 0,
  mi = 0,
  Ss = 0,
  mn = null,
  ve = null,
  ks = 0,
  $r = 1 / 0,
  et = null,
  Hl = !1,
  Sc = null,
  Ot = null,
  ul = !1,
  wt = null,
  Ql = 0,
  xn = 0,
  kc = null,
  Sl = -1,
  kl = 0;
function me() {
  return z & 6 ? J() : Sl !== -1 ? Sl : (Sl = J());
}
function Tt(e) {
  return e.mode & 1 ? (z & 2 && ce !== 0 ? ce & -ce : Rm.transition !== null ? (kl === 0 && (kl = yf()), kl) : ((e = $), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ef(e.type))), e)) : 1;
}
function Qe(e, t, r, n) {
  if (50 < xn) throw ((xn = 0), (kc = null), Error(E(185)));
  An(e, r, n), (!(z & 2) || e !== ne) && (e === ne && (!(z & 2) && (mi |= r), ee === 4 && vt(e, ce)), Se(e, n), r === 1 && z === 0 && !(t.mode & 1) && (($r = J() + 500), fi && Ut()));
}
function Se(e, t) {
  var r = e.callbackNode;
  Rh(e, t);
  var n = Ol(e, e === ne ? ce : 0);
  if (n === 0) r !== null && ia(r), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = n & -n), e.callbackPriority !== t)) {
    if ((r != null && ia(r), t === 1))
      e.tag === 0 ? bm(Ja.bind(null, e)) : Wf(Ja.bind(null, e)),
        Pm(function () {
          !(z & 6) && Ut();
        }),
        (r = null);
    else {
      switch (vf(n)) {
        case 1:
          r = Yc;
          break;
        case 4:
          r = mf;
          break;
        case 16:
          r = _l;
          break;
        case 536870912:
          r = xf;
          break;
        default:
          r = _l;
      }
      r = Bd(r, zd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = r);
  }
}
function zd(e, t) {
  if (((Sl = -1), (kl = 0), z & 6)) throw Error(E(327));
  var r = e.callbackNode;
  if (_r() && e.callbackNode !== r) return null;
  var n = Ol(e, e === ne ? ce : 0);
  if (n === 0) return null;
  if (n & 30 || n & e.expiredLanes || t) t = Kl(e, n);
  else {
    t = n;
    var l = z;
    z |= 2;
    var o = $d();
    (ne !== e || ce !== t) && ((et = null), ($r = J() + 500), qt(e, t));
    do
      try {
        Zm();
        break;
      } catch (s) {
        Dd(e, s);
      }
    while (!0);
    ss(), (Vl.current = o), (z = l), Z !== null ? (t = 0) : ((ne = null), (ce = 0), (t = ee));
  }
  if (t !== 0) {
    if ((t === 2 && ((l = Xo(e)), l !== 0 && ((n = l), (t = Ec(e, l)))), t === 1)) throw ((r = Ln), qt(e, 0), vt(e, n), Se(e, J()), r);
    if (t === 6) vt(e, n);
    else {
      if (((l = e.current.alternate), !(n & 30) && !Xm(l) && ((t = Kl(e, n)), t === 2 && ((o = Xo(e)), o !== 0 && ((n = o), (t = Ec(e, o)))), t === 1))) throw ((r = Ln), qt(e, 0), vt(e, n), Se(e, J()), r);
      switch (((e.finishedWork = l), (e.finishedLanes = n), t)) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          Gt(e, ve, et);
          break;
        case 3:
          if ((vt(e, n), (n & 130023424) === n && ((t = ks + 500 - J()), 10 < t))) {
            if (Ol(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & n) !== n)) {
              me(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = lc(Gt.bind(null, e, ve, et), t);
            break;
          }
          Gt(e, ve, et);
          break;
        case 4:
          if ((vt(e, n), (n & 4194240) === n)) break;
          for (t = e.eventTimes, l = -1; 0 < n; ) {
            var c = 31 - He(n);
            (o = 1 << c), (c = t[c]), c > l && (l = c), (n &= ~o);
          }
          if (((n = l), (n = J() - n), (n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * Ym(n / 1960)) - n), 10 < n)) {
            e.timeoutHandle = lc(Gt.bind(null, e, ve, et), n);
            break;
          }
          Gt(e, ve, et);
          break;
        case 5:
          Gt(e, ve, et);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return Se(e, J()), e.callbackNode === r ? zd.bind(null, e) : null;
}
function Ec(e, t) {
  var r = mn;
  return e.current.memoizedState.isDehydrated && (qt(e, t).flags |= 256), (e = Kl(e, t)), e !== 2 && ((t = ve), (ve = r), t !== null && Cc(t)), e;
}
function Cc(e) {
  ve === null ? (ve = e) : ve.push.apply(ve, e);
}
function Xm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var r = t.updateQueue;
      if (r !== null && ((r = r.stores), r !== null))
        for (var n = 0; n < r.length; n++) {
          var l = r[n],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!Ke(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((r = t.child), t.subtreeFlags & 16384 && r !== null)) (r.return = t), (t = r);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function vt(e, t) {
  for (t &= ~Ss, t &= ~mi, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var r = 31 - He(t),
      n = 1 << r;
    (e[r] = -1), (t &= ~n);
  }
}
function Ja(e) {
  if (z & 6) throw Error(E(327));
  _r();
  var t = Ol(e, 0);
  if (!(t & 1)) return Se(e, J()), null;
  var r = Kl(e, t);
  if (e.tag !== 0 && r === 2) {
    var n = Xo(e);
    n !== 0 && ((t = n), (r = Ec(e, n)));
  }
  if (r === 1) throw ((r = Ln), qt(e, 0), vt(e, t), Se(e, J()), r);
  if (r === 6) throw Error(E(345));
  return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), Gt(e, ve, et), Se(e, J()), null;
}
function Es(e, t) {
  var r = z;
  z |= 1;
  try {
    return e(t);
  } finally {
    (z = r), z === 0 && (($r = J() + 500), fi && Ut());
  }
}
function ir(e) {
  wt !== null && wt.tag === 0 && !(z & 6) && _r();
  var t = z;
  z |= 1;
  var r = ze.transition,
    n = $;
  try {
    if (((ze.transition = null), ($ = 1), e)) return e();
  } finally {
    ($ = n), (ze.transition = r), (z = t), !(z & 6) && Ut();
  }
}
function Cs() {
  (Ee = Sr.current), B(Sr);
}
function qt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var r = e.timeoutHandle;
  if ((r !== -1 && ((e.timeoutHandle = -1), Nm(r)), Z !== null))
    for (r = Z.return; r !== null; ) {
      var n = r;
      switch ((is(n), n.tag)) {
        case 1:
          (n = n.type.childContextTypes), n != null && Il();
          break;
        case 3:
          zr(), B(je), B(pe), hs();
          break;
        case 5:
          ps(n);
          break;
        case 4:
          zr();
          break;
        case 13:
          B(H);
          break;
        case 19:
          B(H);
          break;
        case 10:
          as(n.type._context);
          break;
        case 22:
        case 23:
          Cs();
      }
      r = r.return;
    }
  if (((ne = e), (Z = e = bt(e.current, null)), (ce = Ee = t), (ee = 0), (Ln = null), (Ss = mi = lr = 0), (ve = mn = null), Jt !== null)) {
    for (t = 0; t < Jt.length; t++)
      if (((r = Jt[t]), (n = r.interleaved), n !== null)) {
        r.interleaved = null;
        var l = n.next,
          o = r.pending;
        if (o !== null) {
          var c = o.next;
          (o.next = l), (n.next = c);
        }
        r.pending = n;
      }
    Jt = null;
  }
  return e;
}
function Dd(e, t) {
  do {
    var r = Z;
    try {
      if ((ss(), (gl.current = Wl), Bl)) {
        for (var n = Q.memoizedState; n !== null; ) {
          var l = n.queue;
          l !== null && (l.pending = null), (n = n.next);
        }
        Bl = !1;
      }
      if (((nr = 0), (re = q = Q = null), (pn = !1), (Tn = 0), (ws.current = null), r === null || r.return === null)) {
        (ee = 1), (Ln = t), (Z = null);
        break;
      }
      e: {
        var o = e,
          c = r.return,
          s = r,
          a = t;
        if (((t = ce), (s.flags |= 32768), a !== null && typeof a == "object" && typeof a.then == "function")) {
          var u = a,
            f = s,
            d = f.tag;
          if (!(f.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var p = f.alternate;
            p ? ((f.updateQueue = p.updateQueue), (f.memoizedState = p.memoizedState), (f.lanes = p.lanes)) : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var v = Ma(c);
          if (v !== null) {
            (v.flags &= -257), Fa(v, c, s, o, t), v.mode & 1 && $a(o, u, t), (t = v), (a = u);
            var x = t.updateQueue;
            if (x === null) {
              var g = new Set();
              g.add(a), (t.updateQueue = g);
            } else x.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              $a(o, u, t), Ns();
              break e;
            }
            a = Error(E(426));
          }
        } else if (V && s.mode & 1) {
          var j = Ma(c);
          if (j !== null) {
            !(j.flags & 65536) && (j.flags |= 256), Fa(j, c, s, o, t), os(Dr(a, s));
            break e;
          }
        }
        (o = a = Dr(a, s)), ee !== 4 && (ee = 2), mn === null ? (mn = [o]) : mn.push(o), (o = c);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var m = gd(o, a, t);
              Ta(o, m);
              break e;
            case 1:
              s = a;
              var h = o.type,
                y = o.stateNode;
              if (!(o.flags & 128) && (typeof h.getDerivedStateFromError == "function" || (y !== null && typeof y.componentDidCatch == "function" && (Ot === null || !Ot.has(y))))) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var w = jd(o, s, t);
                Ta(o, w);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Fd(r);
    } catch (C) {
      (t = C), Z === r && r !== null && (Z = r = r.return);
      continue;
    }
    break;
  } while (!0);
}
function $d() {
  var e = Vl.current;
  return (Vl.current = Wl), e === null ? Wl : e;
}
function Ns() {
  (ee === 0 || ee === 3 || ee === 2) && (ee = 4), ne === null || (!(lr & 268435455) && !(mi & 268435455)) || vt(ne, ce);
}
function Kl(e, t) {
  var r = z;
  z |= 2;
  var n = $d();
  (ne !== e || ce !== t) && ((et = null), qt(e, t));
  do
    try {
      Jm();
      break;
    } catch (l) {
      Dd(e, l);
    }
  while (!0);
  if ((ss(), (z = r), (Vl.current = n), Z !== null)) throw Error(E(261));
  return (ne = null), (ce = 0), ee;
}
function Jm() {
  for (; Z !== null; ) Md(Z);
}
function Zm() {
  for (; Z !== null && !kh(); ) Md(Z);
}
function Md(e) {
  var t = Ud(e.alternate, e, Ee);
  (e.memoizedProps = e.pendingProps), t === null ? Fd(e) : (Z = t), (ws.current = null);
}
function Fd(e) {
  var t = e;
  do {
    var r = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((r = Hm(r, t)), r !== null)) {
        (r.flags &= 32767), (Z = r);
        return;
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ee = 6), (Z = null);
        return;
      }
    } else if (((r = Vm(r, t, Ee)), r !== null)) {
      Z = r;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Z = t;
      return;
    }
    Z = t = e;
  } while (t !== null);
  ee === 0 && (ee = 5);
}
function Gt(e, t, r) {
  var n = $,
    l = ze.transition;
  try {
    (ze.transition = null), ($ = 1), qm(e, t, r, n);
  } finally {
    (ze.transition = l), ($ = n);
  }
  return null;
}
function qm(e, t, r, n) {
  do _r();
  while (wt !== null);
  if (z & 6) throw Error(E(327));
  r = e.finishedWork;
  var l = e.finishedLanes;
  if (r === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current)) throw Error(E(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = r.lanes | r.childLanes;
  if (
    (Lh(e, o),
    e === ne && ((Z = ne = null), (ce = 0)),
    (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
      ul ||
      ((ul = !0),
      Bd(_l, function () {
        return _r(), null;
      })),
    (o = (r.flags & 15990) !== 0),
    r.subtreeFlags & 15990 || o)
  ) {
    (o = ze.transition), (ze.transition = null);
    var c = $;
    $ = 1;
    var s = z;
    (z |= 4), (ws.current = null), Km(e, r), Ld(r, e), gm(rc), (Tl = !!tc), (rc = tc = null), (e.current = r), Gm(r), Eh(), (z = s), ($ = c), (ze.transition = o);
  } else e.current = r;
  if ((ul && ((ul = !1), (wt = e), (Ql = l)), (o = e.pendingLanes), o === 0 && (Ot = null), Ph(r.stateNode), Se(e, J()), t !== null)) for (n = e.onRecoverableError, r = 0; r < t.length; r++) (l = t[r]), n(l.value, { componentStack: l.stack, digest: l.digest });
  if (Hl) throw ((Hl = !1), (e = Sc), (Sc = null), e);
  return Ql & 1 && e.tag !== 0 && _r(), (o = e.pendingLanes), o & 1 ? (e === kc ? xn++ : ((xn = 0), (kc = e))) : (xn = 0), Ut(), null;
}
function _r() {
  if (wt !== null) {
    var e = vf(Ql),
      t = ze.transition,
      r = $;
    try {
      if (((ze.transition = null), ($ = 16 > e ? 16 : e), wt === null)) var n = !1;
      else {
        if (((e = wt), (wt = null), (Ql = 0), z & 6)) throw Error(E(331));
        var l = z;
        for (z |= 4, _ = e.current; _ !== null; ) {
          var o = _,
            c = o.child;
          if (_.flags & 16) {
            var s = o.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a];
                for (_ = u; _ !== null; ) {
                  var f = _;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      hn(8, f, o);
                  }
                  var d = f.child;
                  if (d !== null) (d.return = f), (_ = d);
                  else
                    for (; _ !== null; ) {
                      f = _;
                      var p = f.sibling,
                        v = f.return;
                      if ((Td(f), f === u)) {
                        _ = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = v), (_ = p);
                        break;
                      }
                      _ = v;
                    }
                }
              }
              var x = o.alternate;
              if (x !== null) {
                var g = x.child;
                if (g !== null) {
                  x.child = null;
                  do {
                    var j = g.sibling;
                    (g.sibling = null), (g = j);
                  } while (g !== null);
                }
              }
              _ = o;
            }
          }
          if (o.subtreeFlags & 2064 && c !== null) (c.return = o), (_ = c);
          else
            e: for (; _ !== null; ) {
              if (((o = _), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    hn(9, o, o.return);
                }
              var m = o.sibling;
              if (m !== null) {
                (m.return = o.return), (_ = m);
                break e;
              }
              _ = o.return;
            }
        }
        var h = e.current;
        for (_ = h; _ !== null; ) {
          c = _;
          var y = c.child;
          if (c.subtreeFlags & 2064 && y !== null) (y.return = c), (_ = y);
          else
            e: for (c = h; _ !== null; ) {
              if (((s = _), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      hi(9, s);
                  }
                } catch (C) {
                  G(s, s.return, C);
                }
              if (s === c) {
                _ = null;
                break e;
              }
              var w = s.sibling;
              if (w !== null) {
                (w.return = s.return), (_ = w);
                break e;
              }
              _ = s.return;
            }
        }
        if (((z = l), Ut(), Je && typeof Je.onPostCommitFiberRoot == "function"))
          try {
            Je.onPostCommitFiberRoot(oi, e);
          } catch {}
        n = !0;
      }
      return n;
    } finally {
      ($ = r), (ze.transition = t);
    }
  }
  return !1;
}
function Za(e, t, r) {
  (t = Dr(r, t)), (t = gd(e, t, 1)), (e = _t(e, t, 1)), (t = me()), e !== null && (An(e, 1, t), Se(e, t));
}
function G(e, t, r) {
  if (e.tag === 3) Za(e, e, r);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Za(t, e, r);
        break;
      } else if (t.tag === 1) {
        var n = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || (typeof n.componentDidCatch == "function" && (Ot === null || !Ot.has(n)))) {
          (e = Dr(r, e)), (e = jd(t, e, 1)), (t = _t(t, e, 1)), (e = me()), t !== null && (An(t, 1, e), Se(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function ex(e, t, r) {
  var n = e.pingCache;
  n !== null && n.delete(t), (t = me()), (e.pingedLanes |= e.suspendedLanes & r), ne === e && (ce & r) === r && (ee === 4 || (ee === 3 && (ce & 130023424) === ce && 500 > J() - ks) ? qt(e, 0) : (Ss |= r)), Se(e, t);
}
function Ad(e, t) {
  t === 0 && (e.mode & 1 ? ((t = el), (el <<= 1), !(el & 130023424) && (el = 4194304)) : (t = 1));
  var r = me();
  (e = ct(e, t)), e !== null && (An(e, t, r), Se(e, r));
}
function tx(e) {
  var t = e.memoizedState,
    r = 0;
  t !== null && (r = t.retryLane), Ad(e, r);
}
function rx(e, t) {
  var r = 0;
  switch (e.tag) {
    case 13:
      var n = e.stateNode,
        l = e.memoizedState;
      l !== null && (r = l.retryLane);
      break;
    case 19:
      n = e.stateNode;
      break;
    default:
      throw Error(E(314));
  }
  n !== null && n.delete(t), Ad(e, r);
}
var Ud;
Ud = function (e, t, r) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || je.current) ge = !0;
    else {
      if (!(e.lanes & r) && !(t.flags & 128)) return (ge = !1), Wm(e, t, r);
      ge = !!(e.flags & 131072);
    }
  else (ge = !1), V && t.flags & 1048576 && Vf(t, $l, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var n = t.type;
      wl(e, t), (e = t.pendingProps);
      var l = Rr(t, pe.current);
      Pr(t, r), (l = xs(null, t, n, e, l, r));
      var o = ys();
      return (t.flags |= 1), typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? ((t.tag = 1), (t.memoizedState = null), (t.updateQueue = null), we(n) ? ((o = !0), zl(t)) : (o = !1), (t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null), fs(t), (l.updater = di), (t.stateNode = l), (l._reactInternals = t), fc(t, n, e, r), (t = hc(null, t, n, !0, o, r))) : ((t.tag = 0), V && o && ls(t), he(null, t, l, r), (t = t.child)), t;
    case 16:
      n = t.elementType;
      e: {
        switch ((wl(e, t), (e = t.pendingProps), (l = n._init), (n = l(n._payload)), (t.type = n), (l = t.tag = lx(n)), (e = Ue(n, e)), l)) {
          case 0:
            t = pc(null, t, n, e, r);
            break e;
          case 1:
            t = Ba(null, t, n, e, r);
            break e;
          case 11:
            t = Aa(null, t, n, e, r);
            break e;
          case 14:
            t = Ua(null, t, n, Ue(n.type, e), r);
            break e;
        }
        throw Error(E(306, n, ""));
      }
      return t;
    case 0:
      return (n = t.type), (l = t.pendingProps), (l = t.elementType === n ? l : Ue(n, l)), pc(e, t, n, l, r);
    case 1:
      return (n = t.type), (l = t.pendingProps), (l = t.elementType === n ? l : Ue(n, l)), Ba(e, t, n, l, r);
    case 3:
      e: {
        if ((Ed(t), e === null)) throw Error(E(387));
        (n = t.pendingProps), (o = t.memoizedState), (l = o.element), Gf(e, t), Al(t, n, null, r);
        var c = t.memoizedState;
        if (((n = c.element), o.isDehydrated))
          if (((o = { element: n, isDehydrated: !1, cache: c.cache, pendingSuspenseBoundaries: c.pendingSuspenseBoundaries, transitions: c.transitions }), (t.updateQueue.baseState = o), (t.memoizedState = o), t.flags & 256)) {
            (l = Dr(Error(E(423)), t)), (t = Wa(e, t, n, r, l));
            break e;
          } else if (n !== l) {
            (l = Dr(Error(E(424)), t)), (t = Wa(e, t, n, r, l));
            break e;
          } else for (Ce = Pt(t.stateNode.containerInfo.firstChild), Ne = t, V = !0, We = null, r = Zf(t, null, n, r), t.child = r; r; ) (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
        else {
          if ((Lr(), n === l)) {
            t = st(e, t, r);
            break e;
          }
          he(e, t, n, r);
        }
        t = t.child;
      }
      return t;
    case 5:
      return qf(t), e === null && sc(t), (n = t.type), (l = t.pendingProps), (o = e !== null ? e.memoizedProps : null), (c = l.children), nc(n, l) ? (c = null) : o !== null && nc(n, o) && (t.flags |= 32), kd(e, t), he(e, t, c, r), t.child;
    case 6:
      return e === null && sc(t), null;
    case 13:
      return Cd(e, t, r);
    case 4:
      return ds(t, t.stateNode.containerInfo), (n = t.pendingProps), e === null ? (t.child = Ir(t, null, n, r)) : he(e, t, n, r), t.child;
    case 11:
      return (n = t.type), (l = t.pendingProps), (l = t.elementType === n ? l : Ue(n, l)), Aa(e, t, n, l, r);
    case 7:
      return he(e, t, t.pendingProps, r), t.child;
    case 8:
      return he(e, t, t.pendingProps.children, r), t.child;
    case 12:
      return he(e, t, t.pendingProps.children, r), t.child;
    case 10:
      e: {
        if (((n = t.type._context), (l = t.pendingProps), (o = t.memoizedProps), (c = l.value), A(Ml, n._currentValue), (n._currentValue = c), o !== null))
          if (Ke(o.value, c)) {
            if (o.children === l.children && !je.current) {
              t = st(e, t, r);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var s = o.dependencies;
              if (s !== null) {
                c = o.child;
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === n) {
                    if (o.tag === 1) {
                      (a = lt(-1, r & -r)), (a.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var f = u.pending;
                        f === null ? (a.next = a) : ((a.next = f.next), (f.next = a)), (u.pending = a);
                      }
                    }
                    (o.lanes |= r), (a = o.alternate), a !== null && (a.lanes |= r), ac(o.return, r, t), (s.lanes |= r);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) c = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((c = o.return), c === null)) throw Error(E(341));
                (c.lanes |= r), (s = c.alternate), s !== null && (s.lanes |= r), ac(c, r, t), (c = o.sibling);
              } else c = o.child;
              if (c !== null) c.return = o;
              else
                for (c = o; c !== null; ) {
                  if (c === t) {
                    c = null;
                    break;
                  }
                  if (((o = c.sibling), o !== null)) {
                    (o.return = c.return), (c = o);
                    break;
                  }
                  c = c.return;
                }
              o = c;
            }
        he(e, t, l.children, r), (t = t.child);
      }
      return t;
    case 9:
      return (l = t.type), (n = t.pendingProps.children), Pr(t, r), (l = De(l)), (n = n(l)), (t.flags |= 1), he(e, t, n, r), t.child;
    case 14:
      return (n = t.type), (l = Ue(n, t.pendingProps)), (l = Ue(n.type, l)), Ua(e, t, n, l, r);
    case 15:
      return wd(e, t, t.type, t.pendingProps, r);
    case 17:
      return (n = t.type), (l = t.pendingProps), (l = t.elementType === n ? l : Ue(n, l)), wl(e, t), (t.tag = 1), we(n) ? ((e = !0), zl(t)) : (e = !1), Pr(t, r), Xf(t, n, l), fc(t, n, l, r), hc(null, t, n, !0, e, r);
    case 19:
      return Nd(e, t, r);
    case 22:
      return Sd(e, t, r);
  }
  throw Error(E(156, t.tag));
};
function Bd(e, t) {
  return hf(e, t);
}
function nx(e, t, r, n) {
  (this.tag = e), (this.key = r), (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null), (this.index = 0), (this.ref = null), (this.pendingProps = t), (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null), (this.mode = n), (this.subtreeFlags = this.flags = 0), (this.deletions = null), (this.childLanes = this.lanes = 0), (this.alternate = null);
}
function Ie(e, t, r, n) {
  return new nx(e, t, r, n);
}
function Ps(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function lx(e) {
  if (typeof e == "function") return Ps(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Qc)) return 11;
    if (e === Kc) return 14;
  }
  return 2;
}
function bt(e, t) {
  var r = e.alternate;
  return r === null ? ((r = Ie(e.tag, t, e.key, e.mode)), (r.elementType = e.elementType), (r.type = e.type), (r.stateNode = e.stateNode), (r.alternate = e), (e.alternate = r)) : ((r.pendingProps = t), (r.type = e.type), (r.flags = 0), (r.subtreeFlags = 0), (r.deletions = null)), (r.flags = e.flags & 14680064), (r.childLanes = e.childLanes), (r.lanes = e.lanes), (r.child = e.child), (r.memoizedProps = e.memoizedProps), (r.memoizedState = e.memoizedState), (r.updateQueue = e.updateQueue), (t = e.dependencies), (r.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), (r.sibling = e.sibling), (r.index = e.index), (r.ref = e.ref), r;
}
function El(e, t, r, n, l, o) {
  var c = 2;
  if (((n = e), typeof e == "function")) Ps(e) && (c = 1);
  else if (typeof e == "string") c = 5;
  else
    e: switch (e) {
      case dr:
        return er(r.children, l, o, t);
      case Hc:
        (c = 8), (l |= 8);
        break;
      case zo:
        return (e = Ie(12, r, t, l | 2)), (e.elementType = zo), (e.lanes = o), e;
      case Do:
        return (e = Ie(13, r, t, l)), (e.elementType = Do), (e.lanes = o), e;
      case $o:
        return (e = Ie(19, r, t, l)), (e.elementType = $o), (e.lanes = o), e;
      case Xu:
        return xi(r, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Gu:
              c = 10;
              break e;
            case Yu:
              c = 9;
              break e;
            case Qc:
              c = 11;
              break e;
            case Kc:
              c = 14;
              break e;
            case mt:
              (c = 16), (n = null);
              break e;
          }
        throw Error(E(130, e == null ? e : typeof e, ""));
    }
  return (t = Ie(c, r, t, l)), (t.elementType = e), (t.type = n), (t.lanes = o), t;
}
function er(e, t, r, n) {
  return (e = Ie(7, e, n, t)), (e.lanes = r), e;
}
function xi(e, t, r, n) {
  return (e = Ie(22, e, n, t)), (e.elementType = Xu), (e.lanes = r), (e.stateNode = { isHidden: !1 }), e;
}
function go(e, t, r) {
  return (e = Ie(6, e, null, t)), (e.lanes = r), e;
}
function jo(e, t, r) {
  return (t = Ie(4, e.children !== null ? e.children : [], e.key, t)), (t.lanes = r), (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }), t;
}
function ix(e, t, r, n, l) {
  (this.tag = t), (this.containerInfo = e), (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null), (this.timeoutHandle = -1), (this.callbackNode = this.pendingContext = this.context = null), (this.callbackPriority = 0), (this.eventTimes = qi(0)), (this.expirationTimes = qi(-1)), (this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0), (this.entanglements = qi(0)), (this.identifierPrefix = n), (this.onRecoverableError = l), (this.mutableSourceEagerHydrationData = null);
}
function _s(e, t, r, n, l, o, c, s, a) {
  return (e = new ix(e, t, r, s, a)), t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0), (o = Ie(3, null, null, t)), (e.current = o), (o.stateNode = e), (o.memoizedState = { element: n, isDehydrated: r, cache: null, transitions: null, pendingSuspenseBoundaries: null }), fs(o), e;
}
function ox(e, t, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: fr, key: n == null ? null : "" + n, children: e, containerInfo: t, implementation: r };
}
function Wd(e) {
  if (!e) return Dt;
  e = e._reactInternals;
  e: {
    if (sr(e) !== e || e.tag !== 1) throw Error(E(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (we(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(E(171));
  }
  if (e.tag === 1) {
    var r = e.type;
    if (we(r)) return Bf(e, r, t);
  }
  return t;
}
function Vd(e, t, r, n, l, o, c, s, a) {
  return (e = _s(r, n, !0, e, l, o, c, s, a)), (e.context = Wd(null)), (r = e.current), (n = me()), (l = Tt(r)), (o = lt(n, l)), (o.callback = t ?? null), _t(r, o, l), (e.current.lanes = l), An(e, l, n), Se(e, n), e;
}
function yi(e, t, r, n) {
  var l = t.current,
    o = me(),
    c = Tt(l);
  return (r = Wd(r)), t.context === null ? (t.context = r) : (t.pendingContext = r), (t = lt(o, c)), (t.payload = { element: e }), (n = n === void 0 ? null : n), n !== null && (t.callback = n), (e = _t(l, t, c)), e !== null && (Qe(e, l, c, o), vl(e, l, c)), c;
}
function Gl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function qa(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var r = e.retryLane;
    e.retryLane = r !== 0 && r < t ? r : t;
  }
}
function Os(e, t) {
  qa(e, t), (e = e.alternate) && qa(e, t);
}
function cx() {
  return null;
}
var Hd =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ts(e) {
  this._internalRoot = e;
}
vi.prototype.render = Ts.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(E(409));
  yi(e, t, null, null);
};
vi.prototype.unmount = Ts.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    ir(function () {
      yi(null, e, null, null);
    }),
      (t[ot] = null);
  }
};
function vi(e) {
  this._internalRoot = e;
}
vi.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = wf();
    e = { blockedOn: null, target: e, priority: t };
    for (var r = 0; r < yt.length && t !== 0 && t < yt[r].priority; r++);
    yt.splice(r, 0, e), r === 0 && kf(e);
  }
};
function bs(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function gi(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable ")));
}
function eu() {}
function sx(e, t, r, n, l) {
  if (l) {
    if (typeof n == "function") {
      var o = n;
      n = function () {
        var u = Gl(c);
        o.call(u);
      };
    }
    var c = Vd(t, n, e, 0, null, !1, !1, "", eu);
    return (e._reactRootContainer = c), (e[ot] = c.current), Cn(e.nodeType === 8 ? e.parentNode : e), ir(), c;
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof n == "function") {
    var s = n;
    n = function () {
      var u = Gl(a);
      s.call(u);
    };
  }
  var a = _s(e, 0, !1, null, null, !1, !1, "", eu);
  return (
    (e._reactRootContainer = a),
    (e[ot] = a.current),
    Cn(e.nodeType === 8 ? e.parentNode : e),
    ir(function () {
      yi(t, a, r, n);
    }),
    a
  );
}
function ji(e, t, r, n, l) {
  var o = r._reactRootContainer;
  if (o) {
    var c = o;
    if (typeof l == "function") {
      var s = l;
      l = function () {
        var a = Gl(c);
        s.call(a);
      };
    }
    yi(t, c, e, l);
  } else c = sx(r, t, e, l, n);
  return Gl(c);
}
gf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var r = ln(t.pendingLanes);
        r !== 0 && (Xc(t, r | 1), Se(t, J()), !(z & 6) && (($r = J() + 500), Ut()));
      }
      break;
    case 13:
      ir(function () {
        var n = ct(e, 1);
        if (n !== null) {
          var l = me();
          Qe(n, e, 1, l);
        }
      }),
        Os(e, 1);
  }
};
Jc = function (e) {
  if (e.tag === 13) {
    var t = ct(e, 134217728);
    if (t !== null) {
      var r = me();
      Qe(t, e, 134217728, r);
    }
    Os(e, 134217728);
  }
};
jf = function (e) {
  if (e.tag === 13) {
    var t = Tt(e),
      r = ct(e, t);
    if (r !== null) {
      var n = me();
      Qe(r, e, t, n);
    }
    Os(e, t);
  }
};
wf = function () {
  return $;
};
Sf = function (e, t) {
  var r = $;
  try {
    return ($ = e), t();
  } finally {
    $ = r;
  }
};
Ko = function (e, t, r) {
  switch (t) {
    case "input":
      if ((Ao(e, r), (t = r.name), r.type === "radio" && t != null)) {
        for (r = e; r.parentNode; ) r = r.parentNode;
        for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== e && n.form === e.form) {
            var l = ui(n);
            if (!l) throw Error(E(90));
            Zu(n), Ao(n, l);
          }
        }
      }
      break;
    case "textarea":
      ef(e, r);
      break;
    case "select":
      (t = r.value), t != null && kr(e, !!r.multiple, t, !1);
  }
};
sf = Es;
af = ir;
var ax = { usingClientEntryPoint: !1, Events: [Bn, xr, ui, of, cf, Es] },
  en = { findFiberByHostInstance: Xt, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" },
  ux = {
    bundleType: en.bundleType,
    version: en.version,
    rendererPackageName: en.rendererPackageName,
    rendererConfig: en.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ut.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = df(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: en.findFiberByHostInstance || cx,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var fl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!fl.isDisabled && fl.supportsFiber)
    try {
      (oi = fl.inject(ux)), (Je = fl);
    } catch {}
}
Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ax;
Oe.createPortal = function (e, t) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!bs(t)) throw Error(E(200));
  return ox(e, t, null, r);
};
Oe.createRoot = function (e, t) {
  if (!bs(e)) throw Error(E(299));
  var r = !1,
    n = "",
    l = Hd;
  return t != null && (t.unstable_strictMode === !0 && (r = !0), t.identifierPrefix !== void 0 && (n = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), (t = _s(e, 1, !1, null, null, r, !1, n, l)), (e[ot] = t.current), Cn(e.nodeType === 8 ? e.parentNode : e), new Ts(t);
};
Oe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0) throw typeof e.render == "function" ? Error(E(188)) : ((e = Object.keys(e).join(",")), Error(E(268, e)));
  return (e = df(t)), (e = e === null ? null : e.stateNode), e;
};
Oe.flushSync = function (e) {
  return ir(e);
};
Oe.hydrate = function (e, t, r) {
  if (!gi(t)) throw Error(E(200));
  return ji(null, e, t, !0, r);
};
Oe.hydrateRoot = function (e, t, r) {
  if (!bs(e)) throw Error(E(405));
  var n = (r != null && r.hydratedSources) || null,
    l = !1,
    o = "",
    c = Hd;
  if ((r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), (t = Vd(t, null, e, 1, r ?? null, l, !1, o, c)), (e[ot] = t.current), Cn(e), n)) for (e = 0; e < n.length; e++) (r = n[e]), (l = r._getVersion), (l = l(r._source)), t.mutableSourceEagerHydrationData == null ? (t.mutableSourceEagerHydrationData = [r, l]) : t.mutableSourceEagerHydrationData.push(r, l);
  return new vi(t);
};
Oe.render = function (e, t, r) {
  if (!gi(t)) throw Error(E(200));
  return ji(null, e, t, !1, r);
};
Oe.unmountComponentAtNode = function (e) {
  if (!gi(e)) throw Error(E(40));
  return e._reactRootContainer
    ? (ir(function () {
        ji(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[ot] = null);
        });
      }),
      !0)
    : !1;
};
Oe.unstable_batchedUpdates = Es;
Oe.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
  if (!gi(r)) throw Error(E(200));
  if (e == null || e._reactInternals === void 0) throw Error(E(38));
  return ji(e, t, r, !1, n);
};
Oe.version = "18.2.0-next-9e3b772b8-20220608";
function Qd() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Qd);
    } catch (e) {
      console.error(e);
    }
}
Qd(), (Wu.exports = Oe);
var Kd = Wu.exports,
  tu = Kd;
(Lo.createRoot = tu.createRoot), (Lo.hydrateRoot = tu.hydrateRoot);
/**
 * @remix-run/router v1.12.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function In() {
  return (
    (In = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    In.apply(this, arguments)
  );
}
var St;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(St || (St = {}));
const ru = "popstate";
function fx(e) {
  e === void 0 && (e = {});
  function t(n, l) {
    let { pathname: o, search: c, hash: s } = n.location;
    return Nc("", { pathname: o, search: c, hash: s }, (l.state && l.state.usr) || null, (l.state && l.state.key) || "default");
  }
  function r(n, l) {
    return typeof l == "string" ? l : Yl(l);
  }
  return px(t, r, null, e);
}
function Y(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Rs(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function dx() {
  return Math.random().toString(36).substr(2, 8);
}
function nu(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Nc(e, t, r, n) {
  return r === void 0 && (r = null), In({ pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" }, typeof t == "string" ? Wr(t) : t, { state: r, key: (t && t.key) || n || dx() });
}
function Yl(e) {
  let { pathname: t = "/", search: r = "", hash: n = "" } = e;
  return r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r), n && n !== "#" && (t += n.charAt(0) === "#" ? n : "#" + n), t;
}
function Wr(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && ((t.hash = e.substr(r)), (e = e.substr(0, r)));
    let n = e.indexOf("?");
    n >= 0 && ((t.search = e.substr(n)), (e = e.substr(0, n))), e && (t.pathname = e);
  }
  return t;
}
function px(e, t, r, n) {
  n === void 0 && (n = {});
  let { window: l = document.defaultView, v5Compat: o = !1 } = n,
    c = l.history,
    s = St.Pop,
    a = null,
    u = f();
  u == null && ((u = 0), c.replaceState(In({}, c.state, { idx: u }), ""));
  function f() {
    return (c.state || { idx: null }).idx;
  }
  function d() {
    s = St.Pop;
    let j = f(),
      m = j == null ? null : j - u;
    (u = j), a && a({ action: s, location: g.location, delta: m });
  }
  function p(j, m) {
    s = St.Push;
    let h = Nc(g.location, j, m);
    r && r(h, j), (u = f() + 1);
    let y = nu(h, u),
      w = g.createHref(h);
    try {
      c.pushState(y, "", w);
    } catch (C) {
      if (C instanceof DOMException && C.name === "DataCloneError") throw C;
      l.location.assign(w);
    }
    o && a && a({ action: s, location: g.location, delta: 1 });
  }
  function v(j, m) {
    s = St.Replace;
    let h = Nc(g.location, j, m);
    r && r(h, j), (u = f());
    let y = nu(h, u),
      w = g.createHref(h);
    c.replaceState(y, "", w), o && a && a({ action: s, location: g.location, delta: 0 });
  }
  function x(j) {
    let m = l.location.origin !== "null" ? l.location.origin : l.location.href,
      h = typeof j == "string" ? j : Yl(j);
    return Y(m, "No window.location.(origin|href) available to create URL for href: " + h), new URL(h, m);
  }
  let g = {
    get action() {
      return s;
    },
    get location() {
      return e(l, c);
    },
    listen(j) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(ru, d),
        (a = j),
        () => {
          l.removeEventListener(ru, d), (a = null);
        }
      );
    },
    createHref(j) {
      return t(l, j);
    },
    createURL: x,
    encodeLocation(j) {
      let m = x(j);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: p,
    replace: v,
    go(j) {
      return c.go(j);
    },
  };
  return g;
}
var lu;
(function (e) {
  (e.data = "data"), (e.deferred = "deferred"), (e.redirect = "redirect"), (e.error = "error");
})(lu || (lu = {}));
function hx(e, t, r) {
  r === void 0 && (r = "/");
  let n = typeof t == "string" ? Wr(t) : t,
    l = zn(n.pathname || "/", r);
  if (l == null) return null;
  let o = Gd(e);
  mx(o);
  let c = null;
  for (let s = 0; c == null && s < o.length; ++s) c = Ex(o[s], Nx(l));
  return c;
}
function Gd(e, t, r, n) {
  t === void 0 && (t = []), r === void 0 && (r = []), n === void 0 && (n = "");
  let l = (o, c, s) => {
    let a = { relativePath: s === void 0 ? o.path || "" : s, caseSensitive: o.caseSensitive === !0, childrenIndex: c, route: o };
    a.relativePath.startsWith("/") && (Y(a.relativePath.startsWith(n), 'Absolute route path "' + a.relativePath + '" nested under path ' + ('"' + n + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), (a.relativePath = a.relativePath.slice(n.length)));
    let u = Rt([n, a.relativePath]),
      f = r.concat(a);
    o.children && o.children.length > 0 && (Y(o.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')), Gd(o.children, t, f, u)), !(o.path == null && !o.index) && t.push({ path: u, score: Sx(u, o.index), routesMeta: f });
  };
  return (
    e.forEach((o, c) => {
      var s;
      if (o.path === "" || !((s = o.path) != null && s.includes("?"))) l(o, c);
      else for (let a of Yd(o.path)) l(o, c, a);
    }),
    t
  );
}
function Yd(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [r, ...n] = t,
    l = r.endsWith("?"),
    o = r.replace(/\?$/, "");
  if (n.length === 0) return l ? [o, ""] : [o];
  let c = Yd(n.join("/")),
    s = [];
  return s.push(...c.map((a) => (a === "" ? o : [o, a].join("/")))), l && s.push(...c), s.map((a) => (e.startsWith("/") && a === "" ? "/" : a));
}
function mx(e) {
  e.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : kx(
          t.routesMeta.map((n) => n.childrenIndex),
          r.routesMeta.map((n) => n.childrenIndex)
        )
  );
}
const xx = /^:\w+$/,
  yx = 3,
  vx = 2,
  gx = 1,
  jx = 10,
  wx = -2,
  iu = (e) => e === "*";
function Sx(e, t) {
  let r = e.split("/"),
    n = r.length;
  return r.some(iu) && (n += wx), t && (n += vx), r.filter((l) => !iu(l)).reduce((l, o) => l + (xx.test(o) ? yx : o === "" ? gx : jx), n);
}
function kx(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, l) => n === t[l]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function Ex(e, t) {
  let { routesMeta: r } = e,
    n = {},
    l = "/",
    o = [];
  for (let c = 0; c < r.length; ++c) {
    let s = r[c],
      a = c === r.length - 1,
      u = l === "/" ? t : t.slice(l.length) || "/",
      f = Pc({ path: s.relativePath, caseSensitive: s.caseSensitive, end: a }, u);
    if (!f) return null;
    Object.assign(n, f.params);
    let d = s.route;
    o.push({ params: n, pathname: Rt([l, f.pathname]), pathnameBase: Tx(Rt([l, f.pathnameBase])), route: d }), f.pathnameBase !== "/" && (l = Rt([l, f.pathnameBase]));
  }
  return o;
}
function Pc(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, n] = Cx(e.path, e.caseSensitive, e.end),
    l = t.match(r);
  if (!l) return null;
  let o = l[0],
    c = o.replace(/(.)\/+$/, "$1"),
    s = l.slice(1);
  return {
    params: n.reduce((u, f, d) => {
      let { paramName: p, isOptional: v } = f;
      if (p === "*") {
        let g = s[d] || "";
        c = o.slice(0, o.length - g.length).replace(/(.)\/+$/, "$1");
      }
      const x = s[d];
      return v && !x ? (u[p] = void 0) : (u[p] = Px(x || "", p)), u;
    }, {}),
    pathname: o,
    pathnameBase: c,
    pattern: e,
  };
}
function Cx(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !0), Rs(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
  let n = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)(\?)?/g, (c, s, a) => (n.push({ paramName: s, isOptional: a != null }), a ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return e.endsWith("*") ? (n.push({ paramName: "*" }), (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$")) : r ? (l += "\\/*$") : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"), [new RegExp(l, t ? void 0 : "i"), n];
}
function Nx(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return Rs(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e;
  }
}
function Px(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (r) {
    return Rs(!1, 'The value for the URL param "' + t + '" will not be decoded because' + (' the string "' + e + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + r + ").")), e;
  }
}
function zn(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length,
    n = e.charAt(r);
  return n && n !== "/" ? null : e.slice(r) || "/";
}
function _x(e, t) {
  t === void 0 && (t = "/");
  let { pathname: r, search: n = "", hash: l = "" } = typeof e == "string" ? Wr(e) : e;
  return { pathname: r ? (r.startsWith("/") ? r : Ox(r, t)) : t, search: bx(n), hash: Rx(l) };
}
function Ox(e, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? r.length > 1 && r.pop() : l !== "." && r.push(l);
    }),
    r.length > 1 ? r.join("/") : "/"
  );
}
function wo(e, t, r, n) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(n) + "].  Please separate it out to the ") + ("`to." + r + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function Xd(e) {
  return e.filter((t, r) => r === 0 || (t.route.path && t.route.path.length > 0));
}
function Jd(e, t, r, n) {
  n === void 0 && (n = !1);
  let l;
  typeof e == "string" ? (l = Wr(e)) : ((l = In({}, e)), Y(!l.pathname || !l.pathname.includes("?"), wo("?", "pathname", "search", l)), Y(!l.pathname || !l.pathname.includes("#"), wo("#", "pathname", "hash", l)), Y(!l.search || !l.search.includes("#"), wo("#", "search", "hash", l)));
  let o = e === "" || l.pathname === "",
    c = o ? "/" : l.pathname,
    s;
  if (c == null) s = r;
  else if (n) {
    let d = t[t.length - 1].replace(/^\//, "").split("/");
    if (c.startsWith("..")) {
      let p = c.split("/");
      for (; p[0] === ".."; ) p.shift(), d.pop();
      l.pathname = p.join("/");
    }
    s = "/" + d.join("/");
  } else {
    let d = t.length - 1;
    if (c.startsWith("..")) {
      let p = c.split("/");
      for (; p[0] === ".."; ) p.shift(), (d -= 1);
      l.pathname = p.join("/");
    }
    s = d >= 0 ? t[d] : "/";
  }
  let a = _x(l, s),
    u = c && c !== "/" && c.endsWith("/"),
    f = (o || c === ".") && r.endsWith("/");
  return !a.pathname.endsWith("/") && (u || f) && (a.pathname += "/"), a;
}
const Rt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Tx = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  bx = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Rx = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Lx(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
const Zd = ["post", "put", "patch", "delete"];
new Set(Zd);
const Ix = ["get", ...Zd];
new Set(Ix);
/**
 * React Router v6.19.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Xl() {
  return (
    (Xl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Xl.apply(this, arguments)
  );
}
const wi = S.createContext(null),
  qd = S.createContext(null),
  ar = S.createContext(null),
  Si = S.createContext(null),
  Bt = S.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  ep = S.createContext(null);
function zx(e, t) {
  let { relative: r } = t === void 0 ? {} : t;
  Vn() || Y(!1);
  let { basename: n, navigator: l } = S.useContext(ar),
    { hash: o, pathname: c, search: s } = ki(e, { relative: r }),
    a = c;
  return n !== "/" && (a = c === "/" ? n : Rt([n, c])), l.createHref({ pathname: a, search: s, hash: o });
}
function Vn() {
  return S.useContext(Si) != null;
}
function Hn() {
  return Vn() || Y(!1), S.useContext(Si).location;
}
function tp(e) {
  S.useContext(ar).static || S.useLayoutEffect(e);
}
function Wt() {
  let { isDataRoute: e } = S.useContext(Bt);
  return e ? Yx() : Dx();
}
function Dx() {
  Vn() || Y(!1);
  let e = S.useContext(wi),
    { basename: t, navigator: r } = S.useContext(ar),
    { matches: n } = S.useContext(Bt),
    { pathname: l } = Hn(),
    o = JSON.stringify(Xd(n).map((a) => a.pathnameBase)),
    c = S.useRef(!1);
  return (
    tp(() => {
      c.current = !0;
    }),
    S.useCallback(
      function (a, u) {
        if ((u === void 0 && (u = {}), !c.current)) return;
        if (typeof a == "number") {
          r.go(a);
          return;
        }
        let f = Jd(a, JSON.parse(o), l, u.relative === "path");
        e == null && t !== "/" && (f.pathname = f.pathname === "/" ? t : Rt([t, f.pathname])), (u.replace ? r.replace : r.push)(f, u.state, u);
      },
      [t, r, o, l, e]
    )
  );
}
function $x() {
  let { matches: e } = S.useContext(Bt),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function ki(e, t) {
  let { relative: r } = t === void 0 ? {} : t,
    { matches: n } = S.useContext(Bt),
    { pathname: l } = Hn(),
    o = JSON.stringify(Xd(n).map((c, s) => (s === n.length - 1 ? c.pathname : c.pathnameBase)));
  return S.useMemo(() => Jd(e, JSON.parse(o), l, r === "path"), [e, o, l, r]);
}
function Mx(e, t) {
  return Fx(e, t);
}
function Fx(e, t, r) {
  Vn() || Y(!1);
  let { navigator: n } = S.useContext(ar),
    { matches: l } = S.useContext(Bt),
    o = l[l.length - 1],
    c = o ? o.params : {};
  o && o.pathname;
  let s = o ? o.pathnameBase : "/";
  o && o.route;
  let a = Hn(),
    u;
  if (t) {
    var f;
    let g = typeof t == "string" ? Wr(t) : t;
    s === "/" || ((f = g.pathname) != null && f.startsWith(s)) || Y(!1), (u = g);
  } else u = a;
  let d = u.pathname || "/",
    p = s === "/" ? d : d.slice(s.length) || "/",
    v = hx(e, { pathname: p }),
    x = Vx(v && v.map((g) => Object.assign({}, g, { params: Object.assign({}, c, g.params), pathname: Rt([s, n.encodeLocation ? n.encodeLocation(g.pathname).pathname : g.pathname]), pathnameBase: g.pathnameBase === "/" ? s : Rt([s, n.encodeLocation ? n.encodeLocation(g.pathnameBase).pathname : g.pathnameBase]) })), l, r);
  return t && x ? S.createElement(Si.Provider, { value: { location: Xl({ pathname: "/", search: "", hash: "", state: null, key: "default" }, u), navigationType: St.Pop } }, x) : x;
}
function Ax() {
  let e = Gx(),
    t = Lx(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
    r = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    o = null;
  return S.createElement(S.Fragment, null, S.createElement("h2", null, "Unexpected Application Error!"), S.createElement("h3", { style: { fontStyle: "italic" } }, t), r ? S.createElement("pre", { style: l }, r) : null, o);
}
const Ux = S.createElement(Ax, null);
class Bx extends S.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, revalidation: t.revalidation, error: t.error });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, r) {
    return r.location !== t.location || (r.revalidation !== "idle" && t.revalidation === "idle") ? { error: t.error, location: t.location, revalidation: t.revalidation } : { error: t.error || r.error, location: r.location, revalidation: t.revalidation || r.revalidation };
  }
  componentDidCatch(t, r) {
    console.error("React Router caught the following error during render", t, r);
  }
  render() {
    return this.state.error ? S.createElement(Bt.Provider, { value: this.props.routeContext }, S.createElement(ep.Provider, { value: this.state.error, children: this.props.component })) : this.props.children;
  }
}
function Wx(e) {
  let { routeContext: t, match: r, children: n } = e,
    l = S.useContext(wi);
  return l && l.static && l.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (l.staticContext._deepestRenderedBoundaryId = r.route.id), S.createElement(Bt.Provider, { value: t }, n);
}
function Vx(e, t, r) {
  var n;
  if ((t === void 0 && (t = []), r === void 0 && (r = null), e == null)) {
    var l;
    if ((l = r) != null && l.errors) e = r.matches;
    else return null;
  }
  let o = e,
    c = (n = r) == null ? void 0 : n.errors;
  if (c != null) {
    let s = o.findIndex((a) => a.route.id && (c == null ? void 0 : c[a.route.id]));
    s >= 0 || Y(!1), (o = o.slice(0, Math.min(o.length, s + 1)));
  }
  return o.reduceRight((s, a, u) => {
    let f = a.route.id ? (c == null ? void 0 : c[a.route.id]) : null,
      d = null;
    r && (d = a.route.errorElement || Ux);
    let p = t.concat(o.slice(0, u + 1)),
      v = () => {
        let x;
        return f ? (x = d) : a.route.Component ? (x = S.createElement(a.route.Component, null)) : a.route.element ? (x = a.route.element) : (x = s), S.createElement(Wx, { match: a, routeContext: { outlet: s, matches: p, isDataRoute: r != null }, children: x });
      };
    return r && (a.route.ErrorBoundary || a.route.errorElement || u === 0) ? S.createElement(Bx, { location: r.location, revalidation: r.revalidation, component: d, error: f, children: v(), routeContext: { outlet: null, matches: p, isDataRoute: !0 } }) : v();
  }, null);
}
var rp = (function (e) {
    return (e.UseBlocker = "useBlocker"), (e.UseRevalidator = "useRevalidator"), (e.UseNavigateStable = "useNavigate"), e;
  })(rp || {}),
  Jl = (function (e) {
    return (e.UseBlocker = "useBlocker"), (e.UseLoaderData = "useLoaderData"), (e.UseActionData = "useActionData"), (e.UseRouteError = "useRouteError"), (e.UseNavigation = "useNavigation"), (e.UseRouteLoaderData = "useRouteLoaderData"), (e.UseMatches = "useMatches"), (e.UseRevalidator = "useRevalidator"), (e.UseNavigateStable = "useNavigate"), (e.UseRouteId = "useRouteId"), e;
  })(Jl || {});
function Hx(e) {
  let t = S.useContext(wi);
  return t || Y(!1), t;
}
function Qx(e) {
  let t = S.useContext(qd);
  return t || Y(!1), t;
}
function Kx(e) {
  let t = S.useContext(Bt);
  return t || Y(!1), t;
}
function np(e) {
  let t = Kx(),
    r = t.matches[t.matches.length - 1];
  return r.route.id || Y(!1), r.route.id;
}
function Gx() {
  var e;
  let t = S.useContext(ep),
    r = Qx(Jl.UseRouteError),
    n = np(Jl.UseRouteError);
  return t || ((e = r.errors) == null ? void 0 : e[n]);
}
function Yx() {
  let { router: e } = Hx(rp.UseNavigateStable),
    t = np(Jl.UseNavigateStable),
    r = S.useRef(!1);
  return (
    tp(() => {
      r.current = !0;
    }),
    S.useCallback(
      function (l, o) {
        o === void 0 && (o = {}), r.current && (typeof l == "number" ? e.navigate(l) : e.navigate(l, Xl({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
function Ae(e) {
  Y(!1);
}
function Xx(e) {
  let { basename: t = "/", children: r = null, location: n, navigationType: l = St.Pop, navigator: o, static: c = !1 } = e;
  Vn() && Y(!1);
  let s = t.replace(/^\/*/, "/"),
    a = S.useMemo(() => ({ basename: s, navigator: o, static: c }), [s, o, c]);
  typeof n == "string" && (n = Wr(n));
  let { pathname: u = "/", search: f = "", hash: d = "", state: p = null, key: v = "default" } = n,
    x = S.useMemo(() => {
      let g = zn(u, s);
      return g == null ? null : { location: { pathname: g, search: f, hash: d, state: p, key: v }, navigationType: l };
    }, [s, u, f, d, p, v, l]);
  return x == null ? null : S.createElement(ar.Provider, { value: a }, S.createElement(Si.Provider, { children: r, value: x }));
}
function Jx(e) {
  let { children: t, location: r } = e;
  return Mx(_c(t), r);
}
new Promise(() => {});
function _c(e, t) {
  t === void 0 && (t = []);
  let r = [];
  return (
    S.Children.forEach(e, (n, l) => {
      if (!S.isValidElement(n)) return;
      let o = [...t, l];
      if (n.type === S.Fragment) {
        r.push.apply(r, _c(n.props.children, o));
        return;
      }
      n.type !== Ae && Y(!1), !n.props.index || !n.props.children || Y(!1);
      let c = { id: n.props.id || o.join("-"), caseSensitive: n.props.caseSensitive, element: n.props.element, Component: n.props.Component, index: n.props.index, path: n.props.path, loader: n.props.loader, action: n.props.action, errorElement: n.props.errorElement, ErrorBoundary: n.props.ErrorBoundary, hasErrorBoundary: n.props.ErrorBoundary != null || n.props.errorElement != null, shouldRevalidate: n.props.shouldRevalidate, handle: n.props.handle, lazy: n.props.lazy };
      n.props.children && (c.children = _c(n.props.children, o)), r.push(c);
    }),
    r
  );
}
/**
 * React Router DOM v6.19.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Zl() {
  return (
    (Zl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Zl.apply(this, arguments)
  );
}
function lp(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    l,
    o;
  for (o = 0; o < n.length; o++) (l = n[o]), !(t.indexOf(l) >= 0) && (r[l] = e[l]);
  return r;
}
function Zx(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function qx(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Zx(e);
}
const ey = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"],
  ty = ["aria-current", "caseSensitive", "className", "end", "style", "to", "unstable_viewTransition", "children"],
  ry = S.createContext({ isTransitioning: !1 }),
  ny = "startTransition",
  ou = th[ny];
function ly(e) {
  let { basename: t, children: r, future: n, window: l } = e,
    o = S.useRef();
  o.current == null && (o.current = fx({ window: l, v5Compat: !0 }));
  let c = o.current,
    [s, a] = S.useState({ action: c.action, location: c.location }),
    { v7_startTransition: u } = n || {},
    f = S.useCallback(
      (d) => {
        u && ou ? ou(() => a(d)) : a(d);
      },
      [a, u]
    );
  return S.useLayoutEffect(() => c.listen(f), [c, f]), S.createElement(Xx, { basename: t, children: r, location: s.location, navigationType: s.action, navigator: c });
}
const iy = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
  oy = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  cy = S.forwardRef(function (t, r) {
    let { onClick: n, relative: l, reloadDocument: o, replace: c, state: s, target: a, to: u, preventScrollReset: f, unstable_viewTransition: d } = t,
      p = lp(t, ey),
      { basename: v } = S.useContext(ar),
      x,
      g = !1;
    if (typeof u == "string" && oy.test(u) && ((x = u), iy))
      try {
        let y = new URL(window.location.href),
          w = u.startsWith("//") ? new URL(y.protocol + u) : new URL(u),
          C = zn(w.pathname, v);
        w.origin === y.origin && C != null ? (u = C + w.search + w.hash) : (g = !0);
      } catch {}
    let j = zx(u, { relative: l }),
      m = ay(u, { replace: c, state: s, target: a, preventScrollReset: f, relative: l, unstable_viewTransition: d });
    function h(y) {
      n && n(y), y.defaultPrevented || m(y);
    }
    return S.createElement("a", Zl({}, p, { href: x || j, onClick: g || o ? n : h, ref: r, target: a }));
  }),
  ke = S.forwardRef(function (t, r) {
    let { "aria-current": n = "page", caseSensitive: l = !1, className: o = "", end: c = !1, style: s, to: a, unstable_viewTransition: u, children: f } = t,
      d = lp(t, ty),
      p = ki(a, { relative: d.relative }),
      v = Hn(),
      x = S.useContext(qd),
      { navigator: g } = S.useContext(ar),
      j = x != null && uy(p) && u === !0,
      m = g.encodeLocation ? g.encodeLocation(p).pathname : p.pathname,
      h = v.pathname,
      y = x && x.navigation && x.navigation.location ? x.navigation.location.pathname : null;
    l || ((h = h.toLowerCase()), (y = y ? y.toLowerCase() : null), (m = m.toLowerCase()));
    const w = m !== "/" && m.endsWith("/") ? m.length - 1 : m.length;
    let C = h === m || (!c && h.startsWith(m) && h.charAt(w) === "/"),
      P = y != null && (y === m || (!c && y.startsWith(m) && y.charAt(m.length) === "/")),
      N = { isActive: C, isPending: P, isTransitioning: j },
      T = C ? n : void 0,
      D;
    typeof o == "function" ? (D = o(N)) : (D = [o, C ? "active" : null, P ? "pending" : null, j ? "transitioning" : null].filter(Boolean).join(" "));
    let b = typeof s == "function" ? s(N) : s;
    return S.createElement(cy, Zl({}, d, { "aria-current": T, className: D, ref: r, style: b, to: a, unstable_viewTransition: u }), typeof f == "function" ? f(N) : f);
  });
var Oc;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"), (e.UseSubmit = "useSubmit"), (e.UseSubmitFetcher = "useSubmitFetcher"), (e.UseFetcher = "useFetcher"), (e.useViewTransitionState = "useViewTransitionState");
})(Oc || (Oc = {}));
var cu;
(function (e) {
  (e.UseFetcher = "useFetcher"), (e.UseFetchers = "useFetchers"), (e.UseScrollRestoration = "useScrollRestoration");
})(cu || (cu = {}));
function sy(e) {
  let t = S.useContext(wi);
  return t || Y(!1), t;
}
function ay(e, t) {
  let { target: r, replace: n, state: l, preventScrollReset: o, relative: c, unstable_viewTransition: s } = t === void 0 ? {} : t,
    a = Wt(),
    u = Hn(),
    f = ki(e, { relative: c });
  return S.useCallback(
    (d) => {
      if (qx(d, r)) {
        d.preventDefault();
        let p = n !== void 0 ? n : Yl(u) === Yl(f);
        a(e, { replace: p, state: l, preventScrollReset: o, relative: c, unstable_viewTransition: s });
      }
    },
    [u, a, f, n, l, r, e, o, c, s]
  );
}
function uy(e, t) {
  t === void 0 && (t = {});
  let r = S.useContext(ry);
  r == null && Y(!1);
  let { basename: n } = sy(Oc.useViewTransitionState),
    l = ki(e, { relative: t.relative });
  if (!r.isTransitioning) return !1;
  let o = zn(r.currentLocation.pathname, n) || r.currentLocation.pathname,
    c = zn(r.nextLocation.pathname, n) || r.nextLocation.pathname;
  return Pc(l.pathname, c) != null || Pc(l.pathname, o) != null;
}
const tn = ({ children: e }) => i.jsx("li", { className: "cursor-pointer hover:underline  transition-all  underline-offset-4 decoration-emerald-500 p-2.5 min-w-[123px] px-4 space-x-2.5 text-black text-base font-medium ", children: e }),
  ht = ({ text: e, color: t, hoverBG: r }) => i.jsx("button", { className: `h-11 p-2.5 cursor-pointer transition duration-200   ease ${r === "emerald" ? "hover:text-white border hover:border-white hover:bg-emerald-500" : "hover:text-emerald-500 hover:bg-white hover:border hover:border-emerald-500"}   ${t === "emerald" ? "text-white bg-emerald-500" : "text-black border border-emerald-500"} rounded-10px rounded min-w-[93px]  mx-2 text-base font-medium `, children: e }),
  Tc = ({ text: e, color: t, hoverBG: r }) => i.jsx("button", { className: `h-11 p-2.5 cursor-pointer transition duration-200   ease ${r === "orange" ? "hover:text-white border hover:border-white hover:bg-orange-500" : "hover:text-orange-500 hover:bg-white hover:border hover:border-orange-500"}   ${t === "orange" ? "text-white bg-orange-500" : "text-black border border-orange-500"} rounded-10px rounded min-w-[93px]  mx-2 text-base font-medium `, children: e });
var ip = { exports: {} },
  op = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mr = S;
function fy(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var dy = typeof Object.is == "function" ? Object.is : fy,
  py = Mr.useState,
  hy = Mr.useEffect,
  my = Mr.useLayoutEffect,
  xy = Mr.useDebugValue;
function yy(e, t) {
  var r = t(),
    n = py({ inst: { value: r, getSnapshot: t } }),
    l = n[0].inst,
    o = n[1];
  return (
    my(
      function () {
        (l.value = r), (l.getSnapshot = t), So(l) && o({ inst: l });
      },
      [e, r, t]
    ),
    hy(
      function () {
        return (
          So(l) && o({ inst: l }),
          e(function () {
            So(l) && o({ inst: l });
          })
        );
      },
      [e]
    ),
    xy(r),
    r
  );
}
function So(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var r = t();
    return !dy(e, r);
  } catch {
    return !0;
  }
}
function vy(e, t) {
  return t();
}
var gy = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? vy : yy;
op.useSyncExternalStore = Mr.useSyncExternalStore !== void 0 ? Mr.useSyncExternalStore : gy;
ip.exports = op;
var jy = ip.exports,
  cp = { exports: {} },
  sp = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ei = S,
  wy = jy;
function Sy(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ky = typeof Object.is == "function" ? Object.is : Sy,
  Ey = wy.useSyncExternalStore,
  Cy = Ei.useRef,
  Ny = Ei.useEffect,
  Py = Ei.useMemo,
  _y = Ei.useDebugValue;
sp.useSyncExternalStoreWithSelector = function (e, t, r, n, l) {
  var o = Cy(null);
  if (o.current === null) {
    var c = { hasValue: !1, value: null };
    o.current = c;
  } else c = o.current;
  o = Py(
    function () {
      function a(v) {
        if (!u) {
          if (((u = !0), (f = v), (v = n(v)), l !== void 0 && c.hasValue)) {
            var x = c.value;
            if (l(x, v)) return (d = x);
          }
          return (d = v);
        }
        if (((x = d), ky(f, v))) return x;
        var g = n(v);
        return l !== void 0 && l(x, g) ? x : ((f = v), (d = g));
      }
      var u = !1,
        f,
        d,
        p = r === void 0 ? null : r;
      return [
        function () {
          return a(t());
        },
        p === null
          ? void 0
          : function () {
              return a(p());
            },
      ];
    },
    [t, r, n, l]
  );
  var s = Ey(e, o[0], o[1]);
  return (
    Ny(
      function () {
        (c.hasValue = !0), (c.value = s);
      },
      [s]
    ),
    _y(s),
    s
  );
};
cp.exports = sp;
var Oy = cp.exports;
function Ty(e) {
  e();
}
let ap = Ty;
const by = (e) => (ap = e),
  Ry = () => ap,
  su = Symbol.for("react-redux-context"),
  au = typeof globalThis < "u" ? globalThis : {};
function Ly() {
  var e;
  if (!S.createContext) return {};
  const t = (e = au[su]) != null ? e : (au[su] = new Map());
  let r = t.get(S.createContext);
  return r || ((r = S.createContext(null)), t.set(S.createContext, r)), r;
}
const $t = Ly();
function Ls(e = $t) {
  return function () {
    return S.useContext(e);
  };
}
const up = Ls(),
  Iy = () => {
    throw new Error("uSES not initialized!");
  };
let fp = Iy;
const zy = (e) => {
    fp = e;
  },
  Dy = (e, t) => e === t;
function $y(e = $t) {
  const t = e === $t ? up : Ls(e);
  return function (n, l = {}) {
    const { equalityFn: o = Dy, stabilityCheck: c = void 0, noopCheck: s = void 0 } = typeof l == "function" ? { equalityFn: l } : l,
      { store: a, subscription: u, getServerState: f, stabilityCheck: d, noopCheck: p } = t();
    S.useRef(!0);
    const v = S.useCallback(
        {
          [n.name](g) {
            return n(g);
          },
        }[n.name],
        [n, d, c]
      ),
      x = fp(u.addNestedSub, a.getState, f || a.getState, v, o);
    return S.useDebugValue(x), x;
  };
}
const ft = $y();
var dp = { exports: {} },
  M = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var le = typeof Symbol == "function" && Symbol.for,
  Is = le ? Symbol.for("react.element") : 60103,
  zs = le ? Symbol.for("react.portal") : 60106,
  Ci = le ? Symbol.for("react.fragment") : 60107,
  Ni = le ? Symbol.for("react.strict_mode") : 60108,
  Pi = le ? Symbol.for("react.profiler") : 60114,
  _i = le ? Symbol.for("react.provider") : 60109,
  Oi = le ? Symbol.for("react.context") : 60110,
  Ds = le ? Symbol.for("react.async_mode") : 60111,
  Ti = le ? Symbol.for("react.concurrent_mode") : 60111,
  bi = le ? Symbol.for("react.forward_ref") : 60112,
  Ri = le ? Symbol.for("react.suspense") : 60113,
  My = le ? Symbol.for("react.suspense_list") : 60120,
  Li = le ? Symbol.for("react.memo") : 60115,
  Ii = le ? Symbol.for("react.lazy") : 60116,
  Fy = le ? Symbol.for("react.block") : 60121,
  Ay = le ? Symbol.for("react.fundamental") : 60117,
  Uy = le ? Symbol.for("react.responder") : 60118,
  By = le ? Symbol.for("react.scope") : 60119;
function be(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Is:
        switch (((e = e.type), e)) {
          case Ds:
          case Ti:
          case Ci:
          case Pi:
          case Ni:
          case Ri:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Oi:
              case bi:
              case Ii:
              case Li:
              case _i:
                return e;
              default:
                return t;
            }
        }
      case zs:
        return t;
    }
  }
}
function pp(e) {
  return be(e) === Ti;
}
M.AsyncMode = Ds;
M.ConcurrentMode = Ti;
M.ContextConsumer = Oi;
M.ContextProvider = _i;
M.Element = Is;
M.ForwardRef = bi;
M.Fragment = Ci;
M.Lazy = Ii;
M.Memo = Li;
M.Portal = zs;
M.Profiler = Pi;
M.StrictMode = Ni;
M.Suspense = Ri;
M.isAsyncMode = function (e) {
  return pp(e) || be(e) === Ds;
};
M.isConcurrentMode = pp;
M.isContextConsumer = function (e) {
  return be(e) === Oi;
};
M.isContextProvider = function (e) {
  return be(e) === _i;
};
M.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Is;
};
M.isForwardRef = function (e) {
  return be(e) === bi;
};
M.isFragment = function (e) {
  return be(e) === Ci;
};
M.isLazy = function (e) {
  return be(e) === Ii;
};
M.isMemo = function (e) {
  return be(e) === Li;
};
M.isPortal = function (e) {
  return be(e) === zs;
};
M.isProfiler = function (e) {
  return be(e) === Pi;
};
M.isStrictMode = function (e) {
  return be(e) === Ni;
};
M.isSuspense = function (e) {
  return be(e) === Ri;
};
M.isValidElementType = function (e) {
  return typeof e == "string" || typeof e == "function" || e === Ci || e === Ti || e === Pi || e === Ni || e === Ri || e === My || (typeof e == "object" && e !== null && (e.$$typeof === Ii || e.$$typeof === Li || e.$$typeof === _i || e.$$typeof === Oi || e.$$typeof === bi || e.$$typeof === Ay || e.$$typeof === Uy || e.$$typeof === By || e.$$typeof === Fy));
};
M.typeOf = be;
dp.exports = M;
var Wy = dp.exports,
  hp = Wy,
  Vy = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
  Hy = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
  mp = {};
mp[hp.ForwardRef] = Vy;
mp[hp.Memo] = Hy;
var F = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $s = Symbol.for("react.element"),
  Ms = Symbol.for("react.portal"),
  zi = Symbol.for("react.fragment"),
  Di = Symbol.for("react.strict_mode"),
  $i = Symbol.for("react.profiler"),
  Mi = Symbol.for("react.provider"),
  Fi = Symbol.for("react.context"),
  Qy = Symbol.for("react.server_context"),
  Ai = Symbol.for("react.forward_ref"),
  Ui = Symbol.for("react.suspense"),
  Bi = Symbol.for("react.suspense_list"),
  Wi = Symbol.for("react.memo"),
  Vi = Symbol.for("react.lazy"),
  Ky = Symbol.for("react.offscreen"),
  xp;
xp = Symbol.for("react.module.reference");
function Me(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case $s:
        switch (((e = e.type), e)) {
          case zi:
          case $i:
          case Di:
          case Ui:
          case Bi:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Qy:
              case Fi:
              case Ai:
              case Vi:
              case Wi:
              case Mi:
                return e;
              default:
                return t;
            }
        }
      case Ms:
        return t;
    }
  }
}
F.ContextConsumer = Fi;
F.ContextProvider = Mi;
F.Element = $s;
F.ForwardRef = Ai;
F.Fragment = zi;
F.Lazy = Vi;
F.Memo = Wi;
F.Portal = Ms;
F.Profiler = $i;
F.StrictMode = Di;
F.Suspense = Ui;
F.SuspenseList = Bi;
F.isAsyncMode = function () {
  return !1;
};
F.isConcurrentMode = function () {
  return !1;
};
F.isContextConsumer = function (e) {
  return Me(e) === Fi;
};
F.isContextProvider = function (e) {
  return Me(e) === Mi;
};
F.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === $s;
};
F.isForwardRef = function (e) {
  return Me(e) === Ai;
};
F.isFragment = function (e) {
  return Me(e) === zi;
};
F.isLazy = function (e) {
  return Me(e) === Vi;
};
F.isMemo = function (e) {
  return Me(e) === Wi;
};
F.isPortal = function (e) {
  return Me(e) === Ms;
};
F.isProfiler = function (e) {
  return Me(e) === $i;
};
F.isStrictMode = function (e) {
  return Me(e) === Di;
};
F.isSuspense = function (e) {
  return Me(e) === Ui;
};
F.isSuspenseList = function (e) {
  return Me(e) === Bi;
};
F.isValidElementType = function (e) {
  return typeof e == "string" || typeof e == "function" || e === zi || e === $i || e === Di || e === Ui || e === Bi || e === Ky || (typeof e == "object" && e !== null && (e.$$typeof === Vi || e.$$typeof === Wi || e.$$typeof === Mi || e.$$typeof === Fi || e.$$typeof === Ai || e.$$typeof === xp || e.getModuleId !== void 0));
};
F.typeOf = Me;
function Gy() {
  const e = Ry();
  let t = null,
    r = null;
  return {
    clear() {
      (t = null), (r = null);
    },
    notify() {
      e(() => {
        let n = t;
        for (; n; ) n.callback(), (n = n.next);
      });
    },
    get() {
      let n = [],
        l = t;
      for (; l; ) n.push(l), (l = l.next);
      return n;
    },
    subscribe(n) {
      let l = !0,
        o = (r = { callback: n, next: null, prev: r });
      return (
        o.prev ? (o.prev.next = o) : (t = o),
        function () {
          !l || t === null || ((l = !1), o.next ? (o.next.prev = o.prev) : (r = o.prev), o.prev ? (o.prev.next = o.next) : (t = o.next));
        }
      );
    },
  };
}
const uu = { notify() {}, get: () => [] };
function Yy(e, t) {
  let r,
    n = uu,
    l = 0,
    o = !1;
  function c(g) {
    f();
    const j = n.subscribe(g);
    let m = !1;
    return () => {
      m || ((m = !0), j(), d());
    };
  }
  function s() {
    n.notify();
  }
  function a() {
    x.onStateChange && x.onStateChange();
  }
  function u() {
    return o;
  }
  function f() {
    l++, r || ((r = t ? t.addNestedSub(a) : e.subscribe(a)), (n = Gy()));
  }
  function d() {
    l--, r && l === 0 && (r(), (r = void 0), n.clear(), (n = uu));
  }
  function p() {
    o || ((o = !0), f());
  }
  function v() {
    o && ((o = !1), d());
  }
  const x = { addNestedSub: c, notifyNestedSubs: s, handleChangeWrapper: a, isSubscribed: u, trySubscribe: p, tryUnsubscribe: v, getListeners: () => n };
  return x;
}
const Xy = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
  Jy = Xy ? S.useLayoutEffect : S.useEffect;
function Zy({ store: e, context: t, children: r, serverState: n, stabilityCheck: l = "once", noopCheck: o = "once" }) {
  const c = S.useMemo(() => {
      const u = Yy(e);
      return { store: e, subscription: u, getServerState: n ? () => n : void 0, stabilityCheck: l, noopCheck: o };
    }, [e, n, l, o]),
    s = S.useMemo(() => e.getState(), [e]);
  Jy(() => {
    const { subscription: u } = c;
    return (
      (u.onStateChange = u.notifyNestedSubs),
      u.trySubscribe(),
      s !== e.getState() && u.notifyNestedSubs(),
      () => {
        u.tryUnsubscribe(), (u.onStateChange = void 0);
      }
    );
  }, [c, s]);
  const a = t || $t;
  return S.createElement(a.Provider, { value: c }, r);
}
function yp(e = $t) {
  const t = e === $t ? up : Ls(e);
  return function () {
    const { store: n } = t();
    return n;
  };
}
const qy = yp();
function e0(e = $t) {
  const t = e === $t ? qy : yp(e);
  return function () {
    return t().dispatch;
  };
}
const Qn = e0();
zy(Oy.useSyncExternalStoreWithSelector);
by(Kd.unstable_batchedUpdates);
function Ve(e) {
  for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
  throw Error(
    "[Immer] minified error nr: " +
      e +
      (r.length
        ? " " +
          r
            .map(function (l) {
              return "'" + l + "'";
            })
            .join(",")
        : "") +
      ". Find the full error at: https://bit.ly/3cXEKWf"
  );
}
function Mt(e) {
  return !!e && !!e[W];
}
function at(e) {
  var t;
  return (
    !!e &&
    ((function (r) {
      if (!r || typeof r != "object") return !1;
      var n = Object.getPrototypeOf(r);
      if (n === null) return !0;
      var l = Object.hasOwnProperty.call(n, "constructor") && n.constructor;
      return l === Object || (typeof l == "function" && Function.toString.call(l) === a0);
    })(e) ||
      Array.isArray(e) ||
      !!e[yu] ||
      !!(!((t = e.constructor) === null || t === void 0) && t[yu]) ||
      Fs(e) ||
      As(e))
  );
}
function or(e, t, r) {
  r === void 0 && (r = !1),
    Vr(e) === 0
      ? (r ? Object.keys : Tr)(e).forEach(function (n) {
          (r && typeof n == "symbol") || t(n, e[n], e);
        })
      : e.forEach(function (n, l) {
          return t(l, n, e);
        });
}
function Vr(e) {
  var t = e[W];
  return t ? (t.i > 3 ? t.i - 4 : t.i) : Array.isArray(e) ? 1 : Fs(e) ? 2 : As(e) ? 3 : 0;
}
function Or(e, t) {
  return Vr(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function t0(e, t) {
  return Vr(e) === 2 ? e.get(t) : e[t];
}
function vp(e, t, r) {
  var n = Vr(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : (e[t] = r);
}
function gp(e, t) {
  return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t;
}
function Fs(e) {
  return c0 && e instanceof Map;
}
function As(e) {
  return s0 && e instanceof Set;
}
function Yt(e) {
  return e.o || e.t;
}
function Us(e) {
  if (Array.isArray(e)) return Array.prototype.slice.call(e);
  var t = wp(e);
  delete t[W];
  for (var r = Tr(t), n = 0; n < r.length; n++) {
    var l = r[n],
      o = t[l];
    o.writable === !1 && ((o.writable = !0), (o.configurable = !0)), (o.get || o.set) && (t[l] = { configurable: !0, writable: !0, enumerable: o.enumerable, value: e[l] });
  }
  return Object.create(Object.getPrototypeOf(e), t);
}
function Bs(e, t) {
  return (
    t === void 0 && (t = !1),
    Ws(e) ||
      Mt(e) ||
      !at(e) ||
      (Vr(e) > 1 && (e.set = e.add = e.clear = e.delete = r0),
      Object.freeze(e),
      t &&
        or(
          e,
          function (r, n) {
            return Bs(n, !0);
          },
          !0
        )),
    e
  );
}
function r0() {
  Ve(2);
}
function Ws(e) {
  return e == null || typeof e != "object" || Object.isFrozen(e);
}
function qe(e) {
  var t = Ic[e];
  return t || Ve(18, e), t;
}
function n0(e, t) {
  Ic[e] || (Ic[e] = t);
}
function bc() {
  return Dn;
}
function ko(e, t) {
  t && (qe("Patches"), (e.u = []), (e.s = []), (e.v = t));
}
function ql(e) {
  Rc(e), e.p.forEach(l0), (e.p = null);
}
function Rc(e) {
  e === Dn && (Dn = e.l);
}
function fu(e) {
  return (Dn = { p: [], l: Dn, h: e, m: !0, _: 0 });
}
function l0(e) {
  var t = e[W];
  t.i === 0 || t.i === 1 ? t.j() : (t.g = !0);
}
function Eo(e, t) {
  t._ = t.p.length;
  var r = t.p[0],
    n = e !== void 0 && e !== r;
  return t.h.O || qe("ES5").S(t, e, n), n ? (r[W].P && (ql(t), Ve(4)), at(e) && ((e = ei(t, e)), t.l || ti(t, e)), t.u && qe("Patches").M(r[W].t, e, t.u, t.s)) : (e = ei(t, r, [])), ql(t), t.u && t.v(t.u, t.s), e !== jp ? e : void 0;
}
function ei(e, t, r) {
  if (Ws(t)) return t;
  var n = t[W];
  if (!n)
    return (
      or(
        t,
        function (s, a) {
          return du(e, n, t, s, a, r);
        },
        !0
      ),
      t
    );
  if (n.A !== e) return t;
  if (!n.P) return ti(e, n.t, !0), n.t;
  if (!n.I) {
    (n.I = !0), n.A._--;
    var l = n.i === 4 || n.i === 5 ? (n.o = Us(n.k)) : n.o,
      o = l,
      c = !1;
    n.i === 3 && ((o = new Set(l)), l.clear(), (c = !0)),
      or(o, function (s, a) {
        return du(e, n, l, s, a, r, c);
      }),
      ti(e, l, !1),
      r && e.u && qe("Patches").N(n, r, e.u, e.s);
  }
  return n.o;
}
function du(e, t, r, n, l, o, c) {
  if (Mt(l)) {
    var s = ei(e, l, o && t && t.i !== 3 && !Or(t.R, n) ? o.concat(n) : void 0);
    if ((vp(r, n, s), !Mt(s))) return;
    e.m = !1;
  } else c && r.add(l);
  if (at(l) && !Ws(l)) {
    if (!e.h.D && e._ < 1) return;
    ei(e, l), (t && t.A.l) || ti(e, l);
  }
}
function ti(e, t, r) {
  r === void 0 && (r = !1), !e.l && e.h.D && e.m && Bs(t, r);
}
function Co(e, t) {
  var r = e[W];
  return (r ? Yt(r) : e)[t];
}
function pu(e, t) {
  if (t in e)
    for (var r = Object.getPrototypeOf(e); r; ) {
      var n = Object.getOwnPropertyDescriptor(r, t);
      if (n) return n;
      r = Object.getPrototypeOf(r);
    }
}
function gt(e) {
  e.P || ((e.P = !0), e.l && gt(e.l));
}
function No(e) {
  e.o || (e.o = Us(e.t));
}
function Lc(e, t, r) {
  var n = Fs(t)
    ? qe("MapSet").F(t, r)
    : As(t)
    ? qe("MapSet").T(t, r)
    : e.O
    ? (function (l, o) {
        var c = Array.isArray(l),
          s = { i: c ? 1 : 0, A: o ? o.A : bc(), P: !1, I: !1, R: {}, l: o, t: l, k: null, o: null, j: null, C: !1 },
          a = s,
          u = $n;
        c && ((a = [s]), (u = cn));
        var f = Proxy.revocable(a, u),
          d = f.revoke,
          p = f.proxy;
        return (s.k = p), (s.j = d), p;
      })(t, r)
    : qe("ES5").J(t, r);
  return (r ? r.A : bc()).p.push(n), n;
}
function i0(e) {
  return (
    Mt(e) || Ve(22, e),
    (function t(r) {
      if (!at(r)) return r;
      var n,
        l = r[W],
        o = Vr(r);
      if (l) {
        if (!l.P && (l.i < 4 || !qe("ES5").K(l))) return l.t;
        (l.I = !0), (n = hu(r, o)), (l.I = !1);
      } else n = hu(r, o);
      return (
        or(n, function (c, s) {
          (l && t0(l.t, c) === s) || vp(n, c, t(s));
        }),
        o === 3 ? new Set(n) : n
      );
    })(e)
  );
}
function hu(e, t) {
  switch (t) {
    case 2:
      return new Map(e);
    case 3:
      return Array.from(e);
  }
  return Us(e);
}
function o0() {
  function e(o, c) {
    var s = l[o];
    return (
      s
        ? (s.enumerable = c)
        : (l[o] = s =
            {
              configurable: !0,
              enumerable: c,
              get: function () {
                var a = this[W];
                return $n.get(a, o);
              },
              set: function (a) {
                var u = this[W];
                $n.set(u, o, a);
              },
            }),
      s
    );
  }
  function t(o) {
    for (var c = o.length - 1; c >= 0; c--) {
      var s = o[c][W];
      if (!s.P)
        switch (s.i) {
          case 5:
            n(s) && gt(s);
            break;
          case 4:
            r(s) && gt(s);
        }
    }
  }
  function r(o) {
    for (var c = o.t, s = o.k, a = Tr(s), u = a.length - 1; u >= 0; u--) {
      var f = a[u];
      if (f !== W) {
        var d = c[f];
        if (d === void 0 && !Or(c, f)) return !0;
        var p = s[f],
          v = p && p[W];
        if (v ? v.t !== d : !gp(p, d)) return !0;
      }
    }
    var x = !!c[W];
    return a.length !== Tr(c).length + (x ? 0 : 1);
  }
  function n(o) {
    var c = o.k;
    if (c.length !== o.t.length) return !0;
    var s = Object.getOwnPropertyDescriptor(c, c.length - 1);
    if (s && !s.get) return !0;
    for (var a = 0; a < c.length; a++) if (!c.hasOwnProperty(a)) return !0;
    return !1;
  }
  var l = {};
  n0("ES5", {
    J: function (o, c) {
      var s = Array.isArray(o),
        a = (function (f, d) {
          if (f) {
            for (var p = Array(d.length), v = 0; v < d.length; v++) Object.defineProperty(p, "" + v, e(v, !0));
            return p;
          }
          var x = wp(d);
          delete x[W];
          for (var g = Tr(x), j = 0; j < g.length; j++) {
            var m = g[j];
            x[m] = e(m, f || !!x[m].enumerable);
          }
          return Object.create(Object.getPrototypeOf(d), x);
        })(s, o),
        u = { i: s ? 5 : 4, A: c ? c.A : bc(), P: !1, I: !1, R: {}, l: c, t: o, k: a, o: null, g: !1, C: !1 };
      return Object.defineProperty(a, W, { value: u, writable: !0 }), a;
    },
    S: function (o, c, s) {
      s
        ? Mt(c) && c[W].A === o && t(o.p)
        : (o.u &&
            (function a(u) {
              if (u && typeof u == "object") {
                var f = u[W];
                if (f) {
                  var d = f.t,
                    p = f.k,
                    v = f.R,
                    x = f.i;
                  if (x === 4)
                    or(p, function (y) {
                      y !== W && (d[y] !== void 0 || Or(d, y) ? v[y] || a(p[y]) : ((v[y] = !0), gt(f)));
                    }),
                      or(d, function (y) {
                        p[y] !== void 0 || Or(p, y) || ((v[y] = !1), gt(f));
                      });
                  else if (x === 5) {
                    if ((n(f) && (gt(f), (v.length = !0)), p.length < d.length)) for (var g = p.length; g < d.length; g++) v[g] = !1;
                    else for (var j = d.length; j < p.length; j++) v[j] = !0;
                    for (var m = Math.min(p.length, d.length), h = 0; h < m; h++) p.hasOwnProperty(h) || (v[h] = !0), v[h] === void 0 && a(p[h]);
                  }
                }
              }
            })(o.p[0]),
          t(o.p));
    },
    K: function (o) {
      return o.i === 4 ? r(o) : n(o);
    },
  });
}
var mu,
  Dn,
  Vs = typeof Symbol < "u" && typeof Symbol("x") == "symbol",
  c0 = typeof Map < "u",
  s0 = typeof Set < "u",
  xu = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u",
  jp = Vs ? Symbol.for("immer-nothing") : (((mu = {})["immer-nothing"] = !0), mu),
  yu = Vs ? Symbol.for("immer-draftable") : "__$immer_draftable",
  W = Vs ? Symbol.for("immer-state") : "__$immer_state",
  a0 = "" + Object.prototype.constructor,
  Tr =
    typeof Reflect < "u" && Reflect.ownKeys
      ? Reflect.ownKeys
      : Object.getOwnPropertySymbols !== void 0
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
        }
      : Object.getOwnPropertyNames,
  wp =
    Object.getOwnPropertyDescriptors ||
    function (e) {
      var t = {};
      return (
        Tr(e).forEach(function (r) {
          t[r] = Object.getOwnPropertyDescriptor(e, r);
        }),
        t
      );
    },
  Ic = {},
  $n = {
    get: function (e, t) {
      if (t === W) return e;
      var r = Yt(e);
      if (!Or(r, t))
        return (function (l, o, c) {
          var s,
            a = pu(o, c);
          return a ? ("value" in a ? a.value : (s = a.get) === null || s === void 0 ? void 0 : s.call(l.k)) : void 0;
        })(e, r, t);
      var n = r[t];
      return e.I || !at(n) ? n : n === Co(e.t, t) ? (No(e), (e.o[t] = Lc(e.A.h, n, e))) : n;
    },
    has: function (e, t) {
      return t in Yt(e);
    },
    ownKeys: function (e) {
      return Reflect.ownKeys(Yt(e));
    },
    set: function (e, t, r) {
      var n = pu(Yt(e), t);
      if (n != null && n.set) return n.set.call(e.k, r), !0;
      if (!e.P) {
        var l = Co(Yt(e), t),
          o = l == null ? void 0 : l[W];
        if (o && o.t === r) return (e.o[t] = r), (e.R[t] = !1), !0;
        if (gp(r, l) && (r !== void 0 || Or(e.t, t))) return !0;
        No(e), gt(e);
      }
      return (e.o[t] === r && (r !== void 0 || t in e.o)) || (Number.isNaN(r) && Number.isNaN(e.o[t])) || ((e.o[t] = r), (e.R[t] = !0)), !0;
    },
    deleteProperty: function (e, t) {
      return Co(e.t, t) !== void 0 || t in e.t ? ((e.R[t] = !1), No(e), gt(e)) : delete e.R[t], e.o && delete e.o[t], !0;
    },
    getOwnPropertyDescriptor: function (e, t) {
      var r = Yt(e),
        n = Reflect.getOwnPropertyDescriptor(r, t);
      return n && { writable: !0, configurable: e.i !== 1 || t !== "length", enumerable: n.enumerable, value: r[t] };
    },
    defineProperty: function () {
      Ve(11);
    },
    getPrototypeOf: function (e) {
      return Object.getPrototypeOf(e.t);
    },
    setPrototypeOf: function () {
      Ve(12);
    },
  },
  cn = {};
or($n, function (e, t) {
  cn[e] = function () {
    return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
  };
}),
  (cn.deleteProperty = function (e, t) {
    return cn.set.call(this, e, t, void 0);
  }),
  (cn.set = function (e, t, r) {
    return $n.set.call(this, e[0], t, r, e[0]);
  });
var u0 = (function () {
    function e(r) {
      var n = this;
      (this.O = xu),
        (this.D = !0),
        (this.produce = function (l, o, c) {
          if (typeof l == "function" && typeof o != "function") {
            var s = o;
            o = l;
            var a = n;
            return function (g) {
              var j = this;
              g === void 0 && (g = s);
              for (var m = arguments.length, h = Array(m > 1 ? m - 1 : 0), y = 1; y < m; y++) h[y - 1] = arguments[y];
              return a.produce(g, function (w) {
                var C;
                return (C = o).call.apply(C, [j, w].concat(h));
              });
            };
          }
          var u;
          if ((typeof o != "function" && Ve(6), c !== void 0 && typeof c != "function" && Ve(7), at(l))) {
            var f = fu(n),
              d = Lc(n, l, void 0),
              p = !0;
            try {
              (u = o(d)), (p = !1);
            } finally {
              p ? ql(f) : Rc(f);
            }
            return typeof Promise < "u" && u instanceof Promise
              ? u.then(
                  function (g) {
                    return ko(f, c), Eo(g, f);
                  },
                  function (g) {
                    throw (ql(f), g);
                  }
                )
              : (ko(f, c), Eo(u, f));
          }
          if (!l || typeof l != "object") {
            if (((u = o(l)) === void 0 && (u = l), u === jp && (u = void 0), n.D && Bs(u, !0), c)) {
              var v = [],
                x = [];
              qe("Patches").M(l, u, v, x), c(v, x);
            }
            return u;
          }
          Ve(21, l);
        }),
        (this.produceWithPatches = function (l, o) {
          if (typeof l == "function")
            return function (u) {
              for (var f = arguments.length, d = Array(f > 1 ? f - 1 : 0), p = 1; p < f; p++) d[p - 1] = arguments[p];
              return n.produceWithPatches(u, function (v) {
                return l.apply(void 0, [v].concat(d));
              });
            };
          var c,
            s,
            a = n.produce(l, o, function (u, f) {
              (c = u), (s = f);
            });
          return typeof Promise < "u" && a instanceof Promise
            ? a.then(function (u) {
                return [u, c, s];
              })
            : [a, c, s];
        }),
        typeof (r == null ? void 0 : r.useProxies) == "boolean" && this.setUseProxies(r.useProxies),
        typeof (r == null ? void 0 : r.autoFreeze) == "boolean" && this.setAutoFreeze(r.autoFreeze);
    }
    var t = e.prototype;
    return (
      (t.createDraft = function (r) {
        at(r) || Ve(8), Mt(r) && (r = i0(r));
        var n = fu(this),
          l = Lc(this, r, void 0);
        return (l[W].C = !0), Rc(n), l;
      }),
      (t.finishDraft = function (r, n) {
        var l = r && r[W],
          o = l.A;
        return ko(o, n), Eo(void 0, o);
      }),
      (t.setAutoFreeze = function (r) {
        this.D = r;
      }),
      (t.setUseProxies = function (r) {
        r && !xu && Ve(20), (this.O = r);
      }),
      (t.applyPatches = function (r, n) {
        var l;
        for (l = n.length - 1; l >= 0; l--) {
          var o = n[l];
          if (o.path.length === 0 && o.op === "replace") {
            r = o.value;
            break;
          }
        }
        l > -1 && (n = n.slice(l + 1));
        var c = qe("Patches").$;
        return Mt(r)
          ? c(r, n)
          : this.produce(r, function (s) {
              return c(s, n);
            });
      }),
      e
    );
  })(),
  _e = new u0(),
  Sp = _e.produce;
_e.produceWithPatches.bind(_e);
_e.setAutoFreeze.bind(_e);
_e.setUseProxies.bind(_e);
_e.applyPatches.bind(_e);
_e.createDraft.bind(_e);
_e.finishDraft.bind(_e);
function Mn(e) {
  "@babel/helpers - typeof";
  return (
    (Mn =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
          }),
    Mn(e)
  );
}
function f0(e, t) {
  if (Mn(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Mn(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function d0(e) {
  var t = f0(e, "string");
  return Mn(t) === "symbol" ? t : String(t);
}
function p0(e, t, r) {
  return (t = d0(t)), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
}
function vu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (l) {
        return Object.getOwnPropertyDescriptor(e, l).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function gu(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? vu(Object(r), !0).forEach(function (n) {
          p0(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : vu(Object(r)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
        });
  }
  return e;
}
function fe(e) {
  return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. ";
}
var ju = (function () {
    return (typeof Symbol == "function" && Symbol.observable) || "@@observable";
  })(),
  Po = function () {
    return Math.random().toString(36).substring(7).split("").join(".");
  },
  ri = {
    INIT: "@@redux/INIT" + Po(),
    REPLACE: "@@redux/REPLACE" + Po(),
    PROBE_UNKNOWN_ACTION: function () {
      return "@@redux/PROBE_UNKNOWN_ACTION" + Po();
    },
  };
function h0(e) {
  if (typeof e != "object" || e === null) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function kp(e, t, r) {
  var n;
  if ((typeof t == "function" && typeof r == "function") || (typeof r == "function" && typeof arguments[3] == "function")) throw new Error(fe(0));
  if ((typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)), typeof r < "u")) {
    if (typeof r != "function") throw new Error(fe(1));
    return r(kp)(e, t);
  }
  if (typeof e != "function") throw new Error(fe(2));
  var l = e,
    o = t,
    c = [],
    s = c,
    a = !1;
  function u() {
    s === c && (s = c.slice());
  }
  function f() {
    if (a) throw new Error(fe(3));
    return o;
  }
  function d(g) {
    if (typeof g != "function") throw new Error(fe(4));
    if (a) throw new Error(fe(5));
    var j = !0;
    return (
      u(),
      s.push(g),
      function () {
        if (j) {
          if (a) throw new Error(fe(6));
          (j = !1), u();
          var h = s.indexOf(g);
          s.splice(h, 1), (c = null);
        }
      }
    );
  }
  function p(g) {
    if (!h0(g)) throw new Error(fe(7));
    if (typeof g.type > "u") throw new Error(fe(8));
    if (a) throw new Error(fe(9));
    try {
      (a = !0), (o = l(o, g));
    } finally {
      a = !1;
    }
    for (var j = (c = s), m = 0; m < j.length; m++) {
      var h = j[m];
      h();
    }
    return g;
  }
  function v(g) {
    if (typeof g != "function") throw new Error(fe(10));
    (l = g), p({ type: ri.REPLACE });
  }
  function x() {
    var g,
      j = d;
    return (
      (g = {
        subscribe: function (h) {
          if (typeof h != "object" || h === null) throw new Error(fe(11));
          function y() {
            h.next && h.next(f());
          }
          y();
          var w = j(y);
          return { unsubscribe: w };
        },
      }),
      (g[ju] = function () {
        return this;
      }),
      g
    );
  }
  return p({ type: ri.INIT }), (n = { dispatch: p, subscribe: d, getState: f, replaceReducer: v }), (n[ju] = x), n;
}
function m0(e) {
  Object.keys(e).forEach(function (t) {
    var r = e[t],
      n = r(void 0, { type: ri.INIT });
    if (typeof n > "u") throw new Error(fe(12));
    if (typeof r(void 0, { type: ri.PROBE_UNKNOWN_ACTION() }) > "u") throw new Error(fe(13));
  });
}
function x0(e) {
  for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
    var l = t[n];
    typeof e[l] == "function" && (r[l] = e[l]);
  }
  var o = Object.keys(r),
    c;
  try {
    m0(r);
  } catch (s) {
    c = s;
  }
  return function (a, u) {
    if ((a === void 0 && (a = {}), c)) throw c;
    for (var f = !1, d = {}, p = 0; p < o.length; p++) {
      var v = o[p],
        x = r[v],
        g = a[v],
        j = x(g, u);
      if (typeof j > "u") throw (u && u.type, new Error(fe(14)));
      (d[v] = j), (f = f || j !== g);
    }
    return (f = f || o.length !== Object.keys(a).length), f ? d : a;
  };
}
function ni() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return t.length === 0
    ? function (n) {
        return n;
      }
    : t.length === 1
    ? t[0]
    : t.reduce(function (n, l) {
        return function () {
          return n(l.apply(void 0, arguments));
        };
      });
}
function y0() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  return function (n) {
    return function () {
      var l = n.apply(void 0, arguments),
        o = function () {
          throw new Error(fe(15));
        },
        c = {
          getState: l.getState,
          dispatch: function () {
            return o.apply(void 0, arguments);
          },
        },
        s = t.map(function (a) {
          return a(c);
        });
      return (o = ni.apply(void 0, s)(l.dispatch)), gu(gu({}, l), {}, { dispatch: o });
    };
  };
}
function Ep(e) {
  var t = function (n) {
    var l = n.dispatch,
      o = n.getState;
    return function (c) {
      return function (s) {
        return typeof s == "function" ? s(l, o, e) : c(s);
      };
    };
  };
  return t;
}
var Cp = Ep();
Cp.withExtraArgument = Ep;
const wu = Cp;
var Np = (function () {
    var e = function (t, r) {
      return (
        (e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (n, l) {
              n.__proto__ = l;
            }) ||
          function (n, l) {
            for (var o in l) Object.prototype.hasOwnProperty.call(l, o) && (n[o] = l[o]);
          }),
        e(t, r)
      );
    };
    return function (t, r) {
      if (typeof r != "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
      e(t, r);
      function n() {
        this.constructor = t;
      }
      t.prototype = r === null ? Object.create(r) : ((n.prototype = r.prototype), new n());
    };
  })(),
  v0 = function (e, t) {
    var r = {
        label: 0,
        sent: function () {
          if (o[0] & 1) throw o[1];
          return o[1];
        },
        trys: [],
        ops: [],
      },
      n,
      l,
      o,
      c;
    return (
      (c = { next: s(0), throw: s(1), return: s(2) }),
      typeof Symbol == "function" &&
        (c[Symbol.iterator] = function () {
          return this;
        }),
      c
    );
    function s(u) {
      return function (f) {
        return a([u, f]);
      };
    }
    function a(u) {
      if (n) throw new TypeError("Generator is already executing.");
      for (; r; )
        try {
          if (((n = 1), l && (o = u[0] & 2 ? l.return : u[0] ? l.throw || ((o = l.return) && o.call(l), 0) : l.next) && !(o = o.call(l, u[1])).done)) return o;
          switch (((l = 0), o && (u = [u[0] & 2, o.value]), u[0])) {
            case 0:
            case 1:
              o = u;
              break;
            case 4:
              return r.label++, { value: u[1], done: !1 };
            case 5:
              r.label++, (l = u[1]), (u = [0]);
              continue;
            case 7:
              (u = r.ops.pop()), r.trys.pop();
              continue;
            default:
              if (((o = r.trys), !(o = o.length > 0 && o[o.length - 1]) && (u[0] === 6 || u[0] === 2))) {
                r = 0;
                continue;
              }
              if (u[0] === 3 && (!o || (u[1] > o[0] && u[1] < o[3]))) {
                r.label = u[1];
                break;
              }
              if (u[0] === 6 && r.label < o[1]) {
                (r.label = o[1]), (o = u);
                break;
              }
              if (o && r.label < o[2]) {
                (r.label = o[2]), r.ops.push(u);
                break;
              }
              o[2] && r.ops.pop(), r.trys.pop();
              continue;
          }
          u = t.call(e, r);
        } catch (f) {
          (u = [6, f]), (l = 0);
        } finally {
          n = o = 0;
        }
      if (u[0] & 5) throw u[1];
      return { value: u[0] ? u[1] : void 0, done: !0 };
    }
  },
  Fr = function (e, t) {
    for (var r = 0, n = t.length, l = e.length; r < n; r++, l++) e[l] = t[r];
    return e;
  },
  g0 = Object.defineProperty,
  j0 = Object.defineProperties,
  w0 = Object.getOwnPropertyDescriptors,
  Su = Object.getOwnPropertySymbols,
  S0 = Object.prototype.hasOwnProperty,
  k0 = Object.prototype.propertyIsEnumerable,
  ku = function (e, t, r) {
    return t in e ? g0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r);
  },
  Lt = function (e, t) {
    for (var r in t || (t = {})) S0.call(t, r) && ku(e, r, t[r]);
    if (Su)
      for (var n = 0, l = Su(t); n < l.length; n++) {
        var r = l[n];
        k0.call(t, r) && ku(e, r, t[r]);
      }
    return e;
  },
  _o = function (e, t) {
    return j0(e, w0(t));
  },
  E0 = function (e, t, r) {
    return new Promise(function (n, l) {
      var o = function (a) {
          try {
            s(r.next(a));
          } catch (u) {
            l(u);
          }
        },
        c = function (a) {
          try {
            s(r.throw(a));
          } catch (u) {
            l(u);
          }
        },
        s = function (a) {
          return a.done ? n(a.value) : Promise.resolve(a.value).then(o, c);
        };
      s((r = r.apply(e, t)).next());
    });
  },
  C0 =
    typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0) return typeof arguments[0] == "object" ? ni : ni.apply(null, arguments);
        };
function N0(e) {
  if (typeof e != "object" || e === null) return !1;
  var t = Object.getPrototypeOf(e);
  if (t === null) return !0;
  for (var r = t; Object.getPrototypeOf(r) !== null; ) r = Object.getPrototypeOf(r);
  return t === r;
}
function It(e, t) {
  function r() {
    for (var n = [], l = 0; l < arguments.length; l++) n[l] = arguments[l];
    if (t) {
      var o = t.apply(void 0, n);
      if (!o) throw new Error("prepareAction did not return an object");
      return Lt(Lt({ type: e, payload: o.payload }, "meta" in o && { meta: o.meta }), "error" in o && { error: o.error });
    }
    return { type: e, payload: n[0] };
  }
  return (
    (r.toString = function () {
      return "" + e;
    }),
    (r.type = e),
    (r.match = function (n) {
      return n.type === e;
    }),
    r
  );
}
var P0 = (function (e) {
    Np(t, e);
    function t() {
      for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
      var l = e.apply(this, r) || this;
      return Object.setPrototypeOf(l, t.prototype), l;
    }
    return (
      Object.defineProperty(t, Symbol.species, {
        get: function () {
          return t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.concat = function () {
        for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
        return e.prototype.concat.apply(this, r);
      }),
      (t.prototype.prepend = function () {
        for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
        return r.length === 1 && Array.isArray(r[0]) ? new (t.bind.apply(t, Fr([void 0], r[0].concat(this))))() : new (t.bind.apply(t, Fr([void 0], r.concat(this))))();
      }),
      t
    );
  })(Array),
  _0 = (function (e) {
    Np(t, e);
    function t() {
      for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
      var l = e.apply(this, r) || this;
      return Object.setPrototypeOf(l, t.prototype), l;
    }
    return (
      Object.defineProperty(t, Symbol.species, {
        get: function () {
          return t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.concat = function () {
        for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
        return e.prototype.concat.apply(this, r);
      }),
      (t.prototype.prepend = function () {
        for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
        return r.length === 1 && Array.isArray(r[0]) ? new (t.bind.apply(t, Fr([void 0], r[0].concat(this))))() : new (t.bind.apply(t, Fr([void 0], r.concat(this))))();
      }),
      t
    );
  })(Array);
function zc(e) {
  return at(e) ? Sp(e, function () {}) : e;
}
function O0(e) {
  return typeof e == "boolean";
}
function T0() {
  return function (t) {
    return b0(t);
  };
}
function b0(e) {
  e === void 0 && (e = {});
  var t = e.thunk,
    r = t === void 0 ? !0 : t;
  e.immutableCheck, e.serializableCheck, e.actionCreatorCheck;
  var n = new P0();
  return r && (O0(r) ? n.push(wu) : n.push(wu.withExtraArgument(r.extraArgument))), n;
}
var R0 = !0;
function L0(e) {
  var t = T0(),
    r = e || {},
    n = r.reducer,
    l = n === void 0 ? void 0 : n,
    o = r.middleware,
    c = o === void 0 ? t() : o,
    s = r.devTools,
    a = s === void 0 ? !0 : s,
    u = r.preloadedState,
    f = u === void 0 ? void 0 : u,
    d = r.enhancers,
    p = d === void 0 ? void 0 : d,
    v;
  if (typeof l == "function") v = l;
  else if (N0(l)) v = x0(l);
  else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
  var x = c;
  typeof x == "function" && (x = x(t));
  var g = y0.apply(void 0, x),
    j = ni;
  a && (j = C0(Lt({ trace: !R0 }, typeof a == "object" && a)));
  var m = new _0(g),
    h = m;
  Array.isArray(p) ? (h = Fr([g], p)) : typeof p == "function" && (h = p(m));
  var y = j.apply(void 0, h);
  return kp(v, f, y);
}
function Pp(e) {
  var t = {},
    r = [],
    n,
    l = {
      addCase: function (o, c) {
        var s = typeof o == "string" ? o : o.type;
        if (!s) throw new Error("`builder.addCase` cannot be called with an empty action type");
        if (s in t) throw new Error("`builder.addCase` cannot be called with two reducers for the same action type");
        return (t[s] = c), l;
      },
      addMatcher: function (o, c) {
        return r.push({ matcher: o, reducer: c }), l;
      },
      addDefaultCase: function (o) {
        return (n = o), l;
      },
    };
  return e(l), [t, r, n];
}
function I0(e) {
  return typeof e == "function";
}
function z0(e, t, r, n) {
  r === void 0 && (r = []);
  var l = typeof t == "function" ? Pp(t) : [t, r, n],
    o = l[0],
    c = l[1],
    s = l[2],
    a;
  if (I0(e))
    a = function () {
      return zc(e());
    };
  else {
    var u = zc(e);
    a = function () {
      return u;
    };
  }
  function f(d, p) {
    d === void 0 && (d = a());
    var v = Fr(
      [o[p.type]],
      c
        .filter(function (x) {
          var g = x.matcher;
          return g(p);
        })
        .map(function (x) {
          var g = x.reducer;
          return g;
        })
    );
    return (
      v.filter(function (x) {
        return !!x;
      }).length === 0 && (v = [s]),
      v.reduce(function (x, g) {
        if (g)
          if (Mt(x)) {
            var j = x,
              m = g(j, p);
            return m === void 0 ? x : m;
          } else {
            if (at(x))
              return Sp(x, function (h) {
                return g(h, p);
              });
            var m = g(x, p);
            if (m === void 0) {
              if (x === null) return x;
              throw Error("A case reducer on a non-draftable value must not return undefined");
            }
            return m;
          }
        return x;
      }, d)
    );
  }
  return (f.getInitialState = a), f;
}
function D0(e, t) {
  return e + "/" + t;
}
function _p(e) {
  var t = e.name;
  if (!t) throw new Error("`name` is a required option for createSlice");
  typeof process < "u";
  var r = typeof e.initialState == "function" ? e.initialState : zc(e.initialState),
    n = e.reducers || {},
    l = Object.keys(n),
    o = {},
    c = {},
    s = {};
  l.forEach(function (f) {
    var d = n[f],
      p = D0(t, f),
      v,
      x;
    "reducer" in d ? ((v = d.reducer), (x = d.prepare)) : (v = d), (o[f] = v), (c[p] = v), (s[f] = x ? It(p, x) : It(p));
  });
  function a() {
    var f = typeof e.extraReducers == "function" ? Pp(e.extraReducers) : [e.extraReducers],
      d = f[0],
      p = d === void 0 ? {} : d,
      v = f[1],
      x = v === void 0 ? [] : v,
      g = f[2],
      j = g === void 0 ? void 0 : g,
      m = Lt(Lt({}, p), c);
    return z0(r, function (h) {
      for (var y in m) h.addCase(y, m[y]);
      for (var w = 0, C = x; w < C.length; w++) {
        var P = C[w];
        h.addMatcher(P.matcher, P.reducer);
      }
      j && h.addDefaultCase(j);
    });
  }
  var u;
  return {
    name: t,
    reducer: function (f, d) {
      return u || (u = a()), u(f, d);
    },
    actions: s,
    caseReducers: o,
    getInitialState: function () {
      return u || (u = a()), u.getInitialState();
    },
  };
}
var $0 = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
  M0 = function (e) {
    e === void 0 && (e = 21);
    for (var t = "", r = e; r--; ) t += $0[(Math.random() * 64) | 0];
    return t;
  },
  F0 = ["name", "message", "stack", "code"],
  Oo = (function () {
    function e(t, r) {
      (this.payload = t), (this.meta = r);
    }
    return e;
  })(),
  Eu = (function () {
    function e(t, r) {
      (this.payload = t), (this.meta = r);
    }
    return e;
  })(),
  A0 = function (e) {
    if (typeof e == "object" && e !== null) {
      for (var t = {}, r = 0, n = F0; r < n.length; r++) {
        var l = n[r];
        typeof e[l] == "string" && (t[l] = e[l]);
      }
      return t;
    }
    return { message: String(e) };
  };
(function () {
  function e(t, r, n) {
    var l = It(t + "/fulfilled", function (u, f, d, p) {
        return { payload: u, meta: _o(Lt({}, p || {}), { arg: d, requestId: f, requestStatus: "fulfilled" }) };
      }),
      o = It(t + "/pending", function (u, f, d) {
        return { payload: void 0, meta: _o(Lt({}, d || {}), { arg: f, requestId: u, requestStatus: "pending" }) };
      }),
      c = It(t + "/rejected", function (u, f, d, p, v) {
        return { payload: p, error: ((n && n.serializeError) || A0)(u || "Rejected"), meta: _o(Lt({}, v || {}), { arg: d, requestId: f, rejectedWithValue: !!p, requestStatus: "rejected", aborted: (u == null ? void 0 : u.name) === "AbortError", condition: (u == null ? void 0 : u.name) === "ConditionError" }) };
      }),
      s =
        typeof AbortController < "u"
          ? AbortController
          : (function () {
              function u() {
                this.signal = {
                  aborted: !1,
                  addEventListener: function () {},
                  dispatchEvent: function () {
                    return !1;
                  },
                  onabort: function () {},
                  removeEventListener: function () {},
                  reason: void 0,
                  throwIfAborted: function () {},
                };
              }
              return (u.prototype.abort = function () {}), u;
            })();
    function a(u) {
      return function (f, d, p) {
        var v = n != null && n.idGenerator ? n.idGenerator(u) : M0(),
          x = new s(),
          g;
        function j(h) {
          (g = h), x.abort();
        }
        var m = (function () {
          return E0(this, null, function () {
            var h, y, w, C, P, N, T;
            return v0(this, function (D) {
              switch (D.label) {
                case 0:
                  return D.trys.push([0, 4, , 5]), (C = (h = n == null ? void 0 : n.condition) == null ? void 0 : h.call(n, u, { getState: d, extra: p })), B0(C) ? [4, C] : [3, 2];
                case 1:
                  (C = D.sent()), (D.label = 2);
                case 2:
                  if (C === !1 || x.signal.aborted) throw { name: "ConditionError", message: "Aborted due to condition callback returning false." };
                  return (
                    (P = new Promise(function (b, ie) {
                      return x.signal.addEventListener("abort", function () {
                        return ie({ name: "AbortError", message: g || "Aborted" });
                      });
                    })),
                    f(o(v, u, (y = n == null ? void 0 : n.getPendingMeta) == null ? void 0 : y.call(n, { requestId: v, arg: u }, { getState: d, extra: p }))),
                    [
                      4,
                      Promise.race([
                        P,
                        Promise.resolve(
                          r(u, {
                            dispatch: f,
                            getState: d,
                            extra: p,
                            requestId: v,
                            signal: x.signal,
                            abort: j,
                            rejectWithValue: function (b, ie) {
                              return new Oo(b, ie);
                            },
                            fulfillWithValue: function (b, ie) {
                              return new Eu(b, ie);
                            },
                          })
                        ).then(function (b) {
                          if (b instanceof Oo) throw b;
                          return b instanceof Eu ? l(b.payload, v, u, b.meta) : l(b, v, u);
                        }),
                      ]),
                    ]
                  );
                case 3:
                  return (w = D.sent()), [3, 5];
                case 4:
                  return (N = D.sent()), (w = N instanceof Oo ? c(null, v, u, N.payload, N.meta) : c(N, v, u)), [3, 5];
                case 5:
                  return (T = n && !n.dispatchConditionRejection && c.match(w) && w.meta.condition), T || f(w), [2, w];
              }
            });
          });
        })();
        return Object.assign(m, {
          abort: j,
          requestId: v,
          arg: u,
          unwrap: function () {
            return m.then(U0);
          },
        });
      };
    }
    return Object.assign(a, { pending: o, rejected: c, fulfilled: l, typePrefix: t });
  }
  return (
    (e.withTypes = function () {
      return e;
    }),
    e
  );
})();
function U0(e) {
  if (e.meta && e.meta.rejectedWithValue) throw e.payload;
  if (e.error) throw e.error;
  return e.payload;
}
function B0(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var Hs = "listenerMiddleware";
It(Hs + "/add");
It(Hs + "/removeAll");
It(Hs + "/remove");
var Cu;
typeof queueMicrotask == "function" && queueMicrotask.bind(typeof window < "u" ? window : typeof global < "u" ? global : globalThis);
o0();
const Op = _p({
    name: "auth",
    initialState: { isLoggedIn: !1, firstName: "", token: localStorage.getItem("token"), expire: localStorage.getItem("expire") },
    reducers: {
      login: (e, t) => {
        (e.isLoggedIn = !0), (e.firstName = t.payload.firstName), (e.token = t.payload.token), t.payload.expire && (e.expire = t.payload.expire);
      },
      logout: (e, t) => {
        (e.isLoggedIn = !1), (e.firstName = ""), (e.token = null), (e.expire = null);
      },
    },
  }),
  W0 = Op.reducer,
  kt = Op.actions,
  Vt = () => {
    const e = Qn(),
      t = ft((s) => s.auth),
      r = Wt(),
      [n, l] = S.useState(!1),
      o = () => {
        l(!1);
      },
      c = async () => {
        try {
          const a = await (await fetch("http://localhost:3000/authorAPI/signout", { method: "POST", credentials: "include", headers: { "Content-Type": "application/json", authorization: t.token } })).json();
          a.logout === !0 ? (localStorage.removeItem("token"), localStorage.removeItem("expire"), e(kt.logout()), r("/")) : console.log(a);
        } catch (s) {
          console.log(s);
        }
      };
    return i.jsx("header", {
      className: "bg-emerald-100 bg-gradient-to-r from-white to-emerald-200     py-5",
      children: i.jsxs("div", {
        className: "container  px-2 md:px-7  mx-auto    flex justify-between items-center",
        children: [
          i.jsx(ke, { to: "/", children: i.jsxs("h1", { className: "flex items-start space-x-1", children: [i.jsx("span", { className: "text-black text-xl font-bold ", children: "Author" }), i.jsx("span", { className: "text-orange-600 text-xl font-bold ", children: "Zone" })] }) }),
          i.jsxs("nav", { className: "lg:flex hidden items-center space-x-30", children: [t.isLoggedIn && i.jsxs("p", { className: "mr-5", children: ["Hello ", t.firstName, "!"] }), t.isLoggedIn && i.jsx(ke, { to: "/new_post", children: i.jsx(ht, { text: "Create a new post", hoverBG: "emerald" }) }), t.isLoggedIn && i.jsx(ke, { to: "/update", children: i.jsx(ht, { text: "Update Profile", color: "emerald" }) }), !t.isLoggedIn && i.jsx(ke, { to: "/login", children: i.jsx(ht, { text: "Login", hoverBG: "emerald" }) }), !t.isLoggedIn && i.jsx(ke, { to: "/signup", children: i.jsx(ht, { text: "Sign Up", color: "emerald" }) }), t.isLoggedIn && i.jsx(ke, { onClick: c, children: i.jsx(Tc, { text: "Logout", color: "orange" }) })] }),
          i.jsx("div", { className: "lg:hidden flex items-center", children: i.jsx("button", { onClick: () => l(!n), className: "text-black text-xl focus:outline-none transition-transform transform", children: n ? i.jsx("span", { children: "×" }) : i.jsx("span", { children: "☰" }) }) }),
          n &&
            i.jsx("nav", {
              className: "lg:hidden fixed z-50 top-16 left-0 h-full w-full bg-fgreen bg-gradient-to-b from-emerald-100 to-emerald-100 ",
              children: i.jsxs("ul", {
                className: " text-center p-4 flex flex-col items-center space-y-4",
                children: [
                  t.isLoggedIn && i.jsxs("p", { className: "mr-5", children: ["Hello ", t.firstName, "!"] }),
                  t.isLoggedIn && i.jsx(tn, { onClick: o, children: i.jsx(ke, { to: "/new_post", children: i.jsx(ht, { text: "Create a new post", hoverBG: "emerald" }) }) }),
                  t.isLoggedIn && i.jsx(tn, { onClick: o, children: i.jsx(ke, { to: "/update", children: i.jsx(ht, { text: "Update Profile", color: "emerald" }) }) }),
                  !t.isLoggedIn && i.jsx(tn, { onClick: o, children: i.jsx(ke, { to: "/login", children: i.jsx(ht, { text: "Login", hoverBG: "emerald" }) }) }),
                  !t.isLoggedIn && i.jsx(tn, { onClick: o, children: i.jsx(ke, { to: "/signup", children: i.jsx(ht, { text: "Sign Up", color: "emerald" }) }) }),
                  t.isLoggedIn && i.jsx(tn, { onClick: o, children: i.jsx(ke, { onClick: c, children: i.jsx(Tc, { text: "Logout", color: "orange" }) }) }),
                ],
              }),
            }),
        ],
      }),
    });
  };
function dt() {
  return i.jsxs("div", { className: "bg-emerald-100 bg-gradient-to-r from-white to-emerald-100 p-5 text-center  ", children: [i.jsxs("strong", { children: ["© 2023 thedailygoodnews.net | Powered by:", " ", i.jsx("a", { href: "https://github.com/syedshaon", target: "_blank", children: "Mashi" })] }), i.jsx("br", {}), "Copyright: Any unauthorized use or reproduction of The Daily Good News content for commercial purposes is strictly prohibited and constitutes copyright infringement liable to legal action."] });
}
function To() {
  const e = ft((f) => f.auth),
    [t, r] = S.useState([]),
    [n, l] = S.useState(""),
    [o, c] = S.useState(null),
    s = Wt(),
    a = async () => {
      try {
        const f = await fetch("http://localhost:3000/authorAPI/posts", { method: "GET", headers: { "Content-Type": "application/json", authorization: e.token } }),
          d = await f.json();
        if (!f.ok) {
          console.log(d.message);
          return;
        }
        if (d.message) {
          console.log(d.message), l(d.message);
          return;
        }
        r(d.posts);
      } catch (f) {
        console.log(f);
      }
    };
  S.useEffect(() => {
    a();
  }, []);
  const u = async (f) => {
    try {
      const d = await fetch("http://localhost:3000/authorAPI/posts/" + f, { method: "DELETE", headers: { "Content-Type": "application/json", authorization: e.token } }),
        p = await d.json();
      if (!d.ok) {
        c(p.message);
        return;
      }
      c(p.message);
      const v = setTimeout(() => {
        s(0);
      }, 2500);
      return () => clearTimeout(v);
    } catch (d) {
      c("Error sending data to backend: " + d.message);
    }
  };
  return i.jsxs(i.Fragment, {
    children: [
      i.jsx(Vt, {}),
      i.jsxs("div", {
        className: "container mx-auto mt-8 mb-16 min-h-[800px]",
        children: [
          i.jsx("h1", { className: "text-3xl font-bold mb-4", children: t.length > 0 ? "Post List" : "You have no posts yet." }),
          o && i.jsx("h3", { className: "response text-orange-500 text-xl font-bold container mx-auto text-center", children: o }),
          i.jsx("div", {
            className: "grid grid-cols-1  gap-4",
            children:
              t.length > 0 &&
              t.map((f) =>
                i.jsxs(
                  "div",
                  {
                    className: "bg-white p-4 rounded shadow",
                    children: [
                      i.jsxs("h2", { className: "text-xl font-bold mb-2", children: [f.title, " -- ", i.jsxs("span", { className: "italic", children: ["(", f.published, ")"] })] }),
                      i.jsxs("div", {
                        className: "mt-2 grid grid-cols-1 xl:grid-cols-4 gap-4  ",
                        children: [i.jsx("div", { className: "text col-span-3  ", dangerouslySetInnerHTML: { __html: f.text } }), i.jsxs("div", { className: "details flex gap-2 items-center  justify-between col-span-1", children: [i.jsxs("p", { className: "ml-auto", children: ["Published On: ", f.timestamp ? new Date(f.timestamp).toISOString().split("T")[0] : "N/A"] }), i.jsx(ke, { to: `/editpost/${f._id}`, children: i.jsx("button", { className: "  bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300", children: "Edit" }) }), i.jsx("button", { onClick: () => u(f._id), className: "bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300", children: "Delete" })] })],
                      }),
                    ],
                  },
                  f._id
                )
              ),
          }),
        ],
      }),
      i.jsx(dt, {}),
    ],
  });
}
function Tp({ parent: e, title: t }) {
  return i.jsxs("div", {
    className: "min-h-[150px] lg:min-h-[370px] bg-slate-50 overflow-hidden   relative",
    children: [
      i.jsx("div", { className: "container absolute top-0 right-0", children: i.jsx("div", { className: "w-[829px] h-[829px] absolute z-10 top-[-450px] right-[-600px]  bg-slate-50   bg-gradient-to-bl from-emerald-100 to-slate-50  rounded-full" }) }),
      i.jsxs("div", { className: "relative z-20 top-0 right-0  ", children: [i.jsx(Vt, {}), i.jsxs("div", { className: "page-title container py-7  px-2 md:px-7 mt-5 lg:mt-28", children: [i.jsx("h2", { className: "text-gray-900 text-[40px] font-semibold  leading-[51px]", children: t }), i.jsxs("nav", { children: [i.jsx(ke, { to: "/", children: i.jsxs("span", { className: "text-gray-900 text-base    leading-[25px]", children: [e, " ", i.jsx("span", { className: "mx-3", children: " > " })] }) }), i.jsx("span", { className: "text-green-500 text-base     leading-[25px]", children: t })] })] })] }),
    ],
  });
}
function V0() {
  return i.jsxs("div", { children: [i.jsx(Tp, { parent: "Home", title: "Team" }), i.jsx(dt, {})] });
}
function dl() {
  const e = Qn(),
    t = ft((f) => f.auth),
    r = Wt();
  S.useEffect(() => {
    t.isLoggedIn && r("/");
  }, [t.isLoggedIn]);
  const [n, l] = S.useState({ email: "", password: "" }),
    [o, c] = S.useState(null),
    s = (f) => {
      const { name: d, value: p } = f.target;
      l({ ...n, [d]: p });
    },
    a = (f) => {
      f.preventDefault(), u(n);
    },
    u = async (f) => {
      try {
        const d = await fetch("http://localhost:3000/authorAPI/signin", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(f), credentials: "include" });
        if (!d.ok) {
          const x = await d.json();
          c(x.message);
          return;
        }
        const p = await d.json();
        console.log("Response from backend:", p), localStorage.setItem("token", p.token), localStorage.setItem("expire", p.expire), e(kt.login({ firstName: p.firstName, token: p.token, expire: p.expire })), c("Logged In Successfully. Redirecting to homepage....");
        const v = setTimeout(() => {
          r("/");
        }, 1500);
        return () => clearTimeout(v);
      } catch (d) {
        c("Error sending data to backend: " + d.message);
      }
    };
  return (
    !t.isLoggedIn &&
    i.jsxs("div", {
      children: [
        i.jsx(Vt, {}),
        i.jsxs("div", {
          className: "bg-emerald-100 h-screen relative lg:py-20",
          children: [
            o && i.jsx("h3", { className: "response text-orange-500 text-xl font-bold container mx-auto text-center", children: o }),
            i.jsx("div", {
              className: `flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl\r
      xl:px-5 lg:flex-row`,
              children: i.jsx("div", {
                className: "flex flex-col items-center justify-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row",
                children: i.jsxs("div", {
                  className: "w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12",
                  children: [
                    i.jsxs("form", {
                      onSubmit: a,
                      className: `flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl\r
            relative z-10`,
                      children: [
                        i.jsx("p", { className: "w-full text-4xl font-medium text-center leading-snug font-serif", children: "Sign In" }),
                        i.jsxs("div", {
                          className: "w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8",
                          children: [
                            i.jsxs("div", {
                              className: "relative",
                              children: [
                                i.jsx("p", { className: "bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute", children: "Email" }),
                                i.jsx("input", {
                                  value: n.email,
                                  onChange: s,
                                  name: "email",
                                  placeholder: "123@ex.com",
                                  type: "email",
                                  className: `border placeholder-gray-400 focus:outline-none\r
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white\r
                  border-gray-300 rounded-md`,
                                }),
                              ],
                            }),
                            i.jsxs("div", {
                              className: "relative",
                              children: [
                                i.jsx("p", {
                                  className: `bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600\r
                  absolute`,
                                  children: "Password",
                                }),
                                i.jsx("input", {
                                  value: n.password,
                                  onChange: s,
                                  name: "password",
                                  placeholder: "Password",
                                  type: "password",
                                  className: `border placeholder-gray-400 focus:outline-none\r
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white\r
                  border-gray-300 rounded-md`,
                                }),
                              ],
                            }),
                            i.jsx("div", {
                              className: "relative",
                              children: i.jsx("button", {
                                className: `w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-emerald-500\r
                  rounded-lg transition duration-200 hover:bg-emerald-600 ease`,
                                children: "Submit",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    i.jsx("svg", {
                      viewBox: "0 0 91 91",
                      className: `absolute top-0 left-0 z-0 w-32 h-32 -mt-12 -ml-12 text-orange-300\r
            fill-current`,
                      children: i.jsx("g", {
                        stroke: "none",
                        strokeWidth: "1",
                        fillRule: "evenodd",
                        children: i.jsx("g", {
                          fillRule: "nonzero",
                          children: i.jsxs("g", {
                            children: [
                              i.jsxs("g", { children: [i.jsx("circle", { cx: "3.261", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "3.445", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "3.445", r: "2.719" })] }),
                              i.jsxs("g", { transform: "translate(0 12)", children: [i.jsx("circle", { cx: "3.261", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "3.525", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "3.525", r: "2.719" })] }),
                              i.jsxs("g", { transform: "translate(0 24)", children: [i.jsx("circle", { cx: "3.261", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "3.605", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "3.605", r: "2.719" })] }),
                              i.jsxs("g", { transform: "translate(0 36)", children: [i.jsx("circle", { cx: "3.261", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "3.686", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "3.686", r: "2.719" })] }),
                              i.jsxs("g", { transform: "translate(0 49)", children: [i.jsx("circle", { cx: "3.261", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "2.767", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "2.767", r: "2.719" })] }),
                              i.jsxs("g", { transform: "translate(0 61)", children: [i.jsx("circle", { cx: "3.261", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "2.846", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "2.846", r: "2.719" })] }),
                              i.jsxs("g", { transform: "translate(0 73)", children: [i.jsx("circle", { cx: "3.261", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "2.926", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "2.926", r: "2.719" })] }),
                              i.jsxs("g", { transform: "translate(0 85)", children: [i.jsx("circle", { cx: "3.261", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "3.006", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "3.006", r: "2.719" })] }),
                            ],
                          }),
                        }),
                      }),
                    }),
                    i.jsx("svg", {
                      viewBox: "0 0 91 91",
                      className: `absolute bottom-0 right-0 z-0 w-32 h-32 -mb-12 -mr-12 text-emerald-500\r
            fill-current`,
                      children: i.jsx("g", {
                        stroke: "none",
                        strokeWidth: "1",
                        fillRule: "evenodd",
                        children: i.jsx("g", {
                          fillRule: "nonzero",
                          children: i.jsxs("g", {
                            children: [
                              i.jsxs("g", { children: [i.jsx("circle", { cx: "3.261", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "3.445", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "3.445", r: "2.719" })] }),
                              i.jsxs("g", { transform: "translate(0 12)", children: [i.jsx("circle", { cx: "3.261", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "3.525", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "3.525", r: "2.719" })] }),
                              i.jsxs("g", { transform: "translate(0 24)", children: [i.jsx("circle", { cx: "3.261", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "3.605", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "3.605", r: "2.719" })] }),
                              i.jsxs("g", { transform: "translate(0 36)", children: [i.jsx("circle", { cx: "3.261", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "3.686", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "3.686", r: "2.719" })] }),
                              i.jsxs("g", { transform: "translate(0 49)", children: [i.jsx("circle", { cx: "3.261", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "2.767", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "2.767", r: "2.719" })] }),
                              i.jsxs("g", { transform: "translate(0 61)", children: [i.jsx("circle", { cx: "3.261", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "2.846", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "2.846", r: "2.719" })] }),
                              i.jsxs("g", { transform: "translate(0 73)", children: [i.jsx("circle", { cx: "3.261", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "2.926", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "2.926", r: "2.719" })] }),
                              i.jsxs("g", { transform: "translate(0 85)", children: [i.jsx("circle", { cx: "3.261", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "3.006", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "3.006", r: "2.719" })] }),
                            ],
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
        i.jsx(dt, {}),
      ],
    })
  );
}
function H0() {
  const e = Wt(),
    t = ft((d) => d.auth);
  S.useEffect(() => {
    t.isLoggedIn && e("/");
  }, [t.isLoggedIn]);
  const [r, n] = S.useState({ firstName: "", lastName: "", email: "", password: "", rpassword: "" }),
    [l, o] = S.useState(!1),
    [c, s] = S.useState(null),
    a = (d) => {
      const { name: p, value: v } = d.target;
      n({ ...r, [p]: v });
    },
    u = (d) => {
      d.preventDefault(), f(r);
    },
    f = async (d) => {
      try {
        const p = await fetch("http://localhost:3000/authorAPI/signup", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(d) });
        if (!p.ok) {
          const g = await p.json();
          s(g.message);
          return;
        }
        const v = await p.json();
        s(v.message);
        const x = setTimeout(() => {
          e("/login");
        }, 2500);
        return () => clearTimeout(x);
      } catch (p) {
        s("Error sending data to backend: " + p.message);
      }
    };
  return i.jsxs(i.Fragment, {
    children: [
      i.jsx(Vt, {}),
      i.jsxs("div", {
        className: "bg-emerald-100 h-screen relative lg:py-20",
        children: [
          c && i.jsx("h3", { className: "response text-orange-500 text-xl font-bold container mx-auto text-center", children: c }),
          i.jsx("div", {
            className: `flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl\r
      xl:px-5 lg:flex-row`,
            children: i.jsx("div", {
              className: "flex flex-col items-center justify-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row",
              children: i.jsxs("div", {
                className: "w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12",
                children: [
                  i.jsxs("form", {
                    onSubmit: u,
                    className: "flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl relative z-10",
                    children: [
                      i.jsx("p", { className: "w-full text-4xl font-medium text-center leading-snug font-serif", children: "Sign up for an account " }),
                      i.jsxs("div", {
                        className: "w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8",
                        children: [
                          i.jsxs("div", {
                            className: "relative",
                            children: [
                              i.jsx("p", {
                                className: `bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600\r
                  absolute`,
                                children: "First Name",
                              }),
                              i.jsx("input", {
                                value: r.firstName,
                                onChange: a,
                                required: !0,
                                name: "firstName",
                                placeholder: "John",
                                type: "text",
                                className: `border placeholder-gray-400 focus:outline-none\r
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white\r
                  border-gray-300 rounded-md`,
                              }),
                            ],
                          }),
                          i.jsxs("div", {
                            className: "relative",
                            children: [
                              i.jsx("p", {
                                className: `bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600\r
                  absolute`,
                                children: "Last Name",
                              }),
                              i.jsx("input", {
                                value: r.lastName,
                                onChange: a,
                                required: !0,
                                name: "lastName",
                                placeholder: "Doe",
                                type: "text",
                                className: `border placeholder-gray-400 focus:outline-none\r
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white\r
                  border-gray-300 rounded-md`,
                              }),
                            ],
                          }),
                          i.jsxs("div", {
                            className: "relative",
                            children: [
                              i.jsx("p", { className: "bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute", children: "Email" }),
                              i.jsx("input", {
                                value: r.email,
                                onChange: a,
                                required: !0,
                                name: "email",
                                placeholder: "123@ex.com",
                                type: "email",
                                className: `border placeholder-gray-400 focus:outline-none\r
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white\r
                  border-gray-300 rounded-md`,
                              }),
                            ],
                          }),
                          i.jsxs("div", {
                            className: "relative",
                            children: [
                              i.jsx("p", {
                                className: `bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600\r
                  absolute`,
                                children: "Password",
                              }),
                              i.jsx("input", {
                                value: r.password,
                                onChange: (d) => {
                                  n({ ...r, password: d.target.value }), d.target.value === r.rpassword ? o(!1) : o(!0);
                                },
                                required: !0,
                                name: "password",
                                placeholder: "Password",
                                type: "password",
                                className: l ? "border-orange-500 border-2 placeholder-gray-400  w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white   rounded-md" : "false border placeholder-gray-400   w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md",
                              }),
                            ],
                          }),
                          i.jsxs("div", {
                            className: "relative",
                            children: [
                              i.jsx("p", {
                                className: `bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600\r
                  absolute`,
                                children: "Repeat Password",
                              }),
                              i.jsx("input", {
                                value: r.rpassword,
                                onChange: (d) => {
                                  n({ ...r, rpassword: d.target.value }), d.target.value === r.password ? o(!1) : o(!0);
                                },
                                required: !0,
                                name: "rpassword",
                                placeholder: "Repeat Password",
                                type: "password",
                                className: l ? "border-orange-500 border-2  placeholder-gray-400  w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white   rounded-md" : "false border placeholder-gray-400   w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md",
                              }),
                            ],
                          }),
                          i.jsx("div", {
                            className: "relative",
                            children: i.jsx("button", {
                              className: `w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-emerald-500\r
                  rounded-lg transition duration-200 hover:bg-emerald-600 ease`,
                              children: "Submit",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  i.jsx("svg", {
                    viewBox: "0 0 91 91",
                    className: `absolute top-0 left-0 z-0 w-32 h-32 -mt-12 -ml-12 text-orange-300\r
            fill-current`,
                    children: i.jsx("g", {
                      stroke: "none",
                      strokeWidth: "1",
                      fillRule: "evenodd",
                      children: i.jsx("g", {
                        fillRule: "nonzero",
                        children: i.jsxs("g", {
                          children: [
                            i.jsxs("g", { children: [i.jsx("circle", { cx: "3.261", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "3.445", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "3.445", r: "2.719" })] }),
                            i.jsxs("g", { transform: "translate(0 12)", children: [i.jsx("circle", { cx: "3.261", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "3.525", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "3.525", r: "2.719" })] }),
                            i.jsxs("g", { transform: "translate(0 24)", children: [i.jsx("circle", { cx: "3.261", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "3.605", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "3.605", r: "2.719" })] }),
                            i.jsxs("g", { transform: "translate(0 36)", children: [i.jsx("circle", { cx: "3.261", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "3.686", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "3.686", r: "2.719" })] }),
                            i.jsxs("g", { transform: "translate(0 49)", children: [i.jsx("circle", { cx: "3.261", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "2.767", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "2.767", r: "2.719" })] }),
                            i.jsxs("g", { transform: "translate(0 61)", children: [i.jsx("circle", { cx: "3.261", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "2.846", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "2.846", r: "2.719" })] }),
                            i.jsxs("g", { transform: "translate(0 73)", children: [i.jsx("circle", { cx: "3.261", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "2.926", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "2.926", r: "2.719" })] }),
                            i.jsxs("g", { transform: "translate(0 85)", children: [i.jsx("circle", { cx: "3.261", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "3.006", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "3.006", r: "2.719" })] }),
                          ],
                        }),
                      }),
                    }),
                  }),
                  i.jsx("svg", {
                    viewBox: "0 0 91 91",
                    className: `absolute bottom-0 right-0 z-0 w-32 h-32 -mb-12 -mr-12 text-emerald-500\r
            fill-current`,
                    children: i.jsx("g", {
                      stroke: "none",
                      strokeWidth: "1",
                      fillRule: "evenodd",
                      children: i.jsx("g", {
                        fillRule: "nonzero",
                        children: i.jsxs("g", {
                          children: [
                            i.jsxs("g", { children: [i.jsx("circle", { cx: "3.261", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "3.445", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "3.445", r: "2.719" })] }),
                            i.jsxs("g", { transform: "translate(0 12)", children: [i.jsx("circle", { cx: "3.261", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "3.525", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "3.525", r: "2.719" })] }),
                            i.jsxs("g", { transform: "translate(0 24)", children: [i.jsx("circle", { cx: "3.261", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "3.605", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "3.605", r: "2.719" })] }),
                            i.jsxs("g", { transform: "translate(0 36)", children: [i.jsx("circle", { cx: "3.261", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "3.686", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "3.686", r: "2.719" })] }),
                            i.jsxs("g", { transform: "translate(0 49)", children: [i.jsx("circle", { cx: "3.261", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "2.767", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "2.767", r: "2.719" })] }),
                            i.jsxs("g", { transform: "translate(0 61)", children: [i.jsx("circle", { cx: "3.261", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "2.846", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "2.846", r: "2.719" })] }),
                            i.jsxs("g", { transform: "translate(0 73)", children: [i.jsx("circle", { cx: "3.261", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "2.926", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "2.926", r: "2.719" })] }),
                            i.jsxs("g", { transform: "translate(0 85)", children: [i.jsx("circle", { cx: "3.261", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "3.006", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "3.006", r: "2.719" })] }),
                          ],
                        }),
                      }),
                    }),
                  }),
                ],
              }),
            }),
          }),
        ],
      }),
      i.jsx(dt, {}),
    ],
  });
}
function Q0() {
  return i.jsxs("div", { children: [i.jsx(Tp, { parent: "Home", title: "Testimonial List" }), i.jsx(dt, {})] });
}
function K0() {
  return i.jsxs("div", {
    children: [
      i.jsx(Vt, {}),
      i.jsx("div", {
        className: "teams container min-h-[800px] flex justify-center items-center px-2 md:px-7  ",
        children: i.jsxs("div", { class: "text-center", children: [i.jsx("h1", { class: "mb-4 text-6xl font-semibold text-orange-600", children: "404" }), i.jsx("p", { class: "mb-4 text-lg text-gray-600", children: "Oops! Looks like you're lost." }), i.jsx("div", { class: "animate-bounce", children: i.jsx("svg", { class: "mx-auto h-16 w-16 text-orange-600", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: i.jsx("path", { "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8" }) }) }), i.jsxs("p", { class: "mt-4 text-gray-600", children: ["Let's get you back", " ", i.jsx("a", { href: "/", class: "text-emerald-500", children: "home" }), "."] })] }),
      }),
      i.jsx(dt, {}),
    ],
  });
}
function G0() {
  const e = Wt(),
    t = ft((x) => x.auth),
    r = Qn(),
    [n, l] = S.useState({ firstName: "", lastName: "", email: "", password: "", rpassword: "" }),
    [o, c] = S.useState(!1),
    [s, a] = S.useState(null),
    u = (x) => {
      const { name: g, value: j } = x.target;
      l({ ...n, [g]: j });
    },
    f = async () => {
      if (confirm("Do you want to delete your account?"))
        try {
          const g = await fetch("http://localhost:3000/authorAPI/delete", { method: "DELETE", credentials: "include", headers: { "Content-Type": "application/json", authorization: t.token } }),
            j = await g.json();
          if ((a(j.message), !g.ok)) return;
          j.delete && (localStorage.removeItem("token"), r(kt.logout()), e("/"));
        } catch (g) {
          console.error("Error fetching data:", g);
        }
      else console.log("User canceled.");
    },
    d = async () => {
      try {
        const x = await fetch("http://localhost:3000/authorAPI/update", { method: "GET", credentials: "include", headers: { "Content-Type": "application/json", authorization: t.token } }),
          g = await x.json();
        if (!x.ok) {
          console.log(g.message);
          return;
        }
        l({ firstName: g.firstName, lastName: g.lastName, email: g.email, password: "", rpassword: "" });
      } catch (x) {
        console.log(x);
      }
    };
  S.useEffect(() => {
    d();
  }, []);
  const p = (x) => {
      x.preventDefault(), v(n);
    },
    v = async (x) => {
      try {
        const g = await fetch("http://localhost:3000/authorAPI/update", { method: "PUT", headers: { "Content-Type": "application/json", authorization: t.token }, body: JSON.stringify(x) });
        if (!g.ok) {
          const h = await g.json();
          a(h.message);
          return;
        }
        const j = await g.json();
        a(j.message), localStorage.removeItem("token"), localStorage.removeItem("expire"), r(kt.logout());
        const m = setTimeout(() => {
          e("/login");
        }, 1500);
        return () => clearTimeout(m);
      } catch (g) {
        a("Error sending data to backend: " + g.message);
      }
    };
  return (
    t.isLoggedIn &&
    i.jsxs(i.Fragment, {
      children: [
        i.jsx(Vt, {}),
        i.jsxs("div", {
          className: "bg-emerald-100 h-screen relative lg:py-20",
          children: [
            i.jsx("div", { className: "  mx-auto text-center", children: i.jsx("span", { onClick: f, children: i.jsx(Tc, { color: "orange", text: "Delete  My Account." }) }) }),
            s && i.jsx("h3", { className: "response my-10 text-orange-500 text-xl font-bold container mx-auto text-center", children: s }),
            i.jsx("div", {
              className: `flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl\r
      xl:px-5 lg:flex-row`,
              children: i.jsx("div", {
                className: "flex flex-col items-center justify-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row",
                children: i.jsxs("div", {
                  className: "w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12",
                  children: [
                    i.jsxs("form", {
                      onSubmit: p,
                      className: "flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl relative z-10",
                      children: [
                        i.jsx("p", { className: "w-full text-4xl font-medium text-center leading-snug font-serif", children: "Update Your account " }),
                        i.jsxs("div", {
                          className: "w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8",
                          children: [
                            i.jsxs("div", {
                              className: "relative",
                              children: [
                                i.jsx("p", {
                                  className: `bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600\r
                  absolute`,
                                  children: "First Name",
                                }),
                                i.jsx("input", {
                                  value: n.firstName,
                                  onChange: u,
                                  required: !0,
                                  name: "firstName",
                                  placeholder: "John",
                                  type: "text",
                                  className: `border placeholder-gray-400 focus:outline-none\r
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white\r
                  border-gray-300 rounded-md`,
                                }),
                              ],
                            }),
                            i.jsxs("div", {
                              className: "relative",
                              children: [
                                i.jsx("p", {
                                  className: `bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600\r
                  absolute`,
                                  children: "Last Name",
                                }),
                                i.jsx("input", {
                                  value: n.lastName,
                                  onChange: u,
                                  required: !0,
                                  name: "lastName",
                                  placeholder: "Doe",
                                  type: "text",
                                  className: `border placeholder-gray-400 focus:outline-none\r
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white\r
                  border-gray-300 rounded-md`,
                                }),
                              ],
                            }),
                            i.jsxs("div", {
                              className: "relative",
                              children: [
                                i.jsx("p", { className: "bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute", children: "Email" }),
                                i.jsx("input", {
                                  value: n.email,
                                  onChange: u,
                                  required: !0,
                                  name: "email",
                                  placeholder: "123@ex.com",
                                  type: "email",
                                  className: `border placeholder-gray-400 focus:outline-none\r
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white\r
                  border-gray-300 rounded-md`,
                                }),
                              ],
                            }),
                            i.jsxs("div", {
                              className: "relative",
                              children: [
                                i.jsx("p", {
                                  className: `bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600\r
                  absolute`,
                                  children: "Password",
                                }),
                                i.jsx("input", {
                                  value: n.password,
                                  onChange: (x) => {
                                    l({ ...n, password: x.target.value }), x.target.value === n.rpassword ? c(!1) : c(!0);
                                  },
                                  required: !0,
                                  name: "password",
                                  placeholder: "Password",
                                  type: "password",
                                  className: o ? "border-orange-500 border-2 placeholder-gray-400  w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white   rounded-md" : "false border placeholder-gray-400   w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md",
                                }),
                              ],
                            }),
                            i.jsxs("div", {
                              className: "relative",
                              children: [
                                i.jsx("p", {
                                  className: `bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600\r
                  absolute`,
                                  children: "Repeat Password",
                                }),
                                i.jsx("input", {
                                  value: n.rpassword,
                                  onChange: (x) => {
                                    l({ ...n, rpassword: x.target.value }), x.target.value === n.password ? c(!1) : c(!0);
                                  },
                                  required: !0,
                                  name: "rpassword",
                                  placeholder: "Repeat Password",
                                  type: "password",
                                  className: o ? "border-orange-500 border-2  placeholder-gray-400  w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white   rounded-md" : "false border placeholder-gray-400   w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md",
                                }),
                              ],
                            }),
                            i.jsx("div", {
                              className: "relative",
                              children: i.jsx("button", {
                                className: `w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-emerald-500\r
                  rounded-lg transition duration-200 hover:bg-emerald-600 ease`,
                                children: "Submit",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    i.jsx("svg", {
                      viewBox: "0 0 91 91",
                      className: `absolute top-0 left-0 z-0 w-32 h-32 -mt-12 -ml-12 text-orange-300\r
            fill-current`,
                      children: i.jsx("g", {
                        stroke: "none",
                        strokeWidth: "1",
                        fillRule: "evenodd",
                        children: i.jsx("g", {
                          fillRule: "nonzero",
                          children: i.jsxs("g", {
                            children: [
                              i.jsxs("g", { children: [i.jsx("circle", { cx: "3.261", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "3.445", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "3.445", r: "2.719" })] }),
                              i.jsxs("g", { transform: "translate(0 12)", children: [i.jsx("circle", { cx: "3.261", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "3.525", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "3.525", r: "2.719" })] }),
                              i.jsxs("g", { transform: "translate(0 24)", children: [i.jsx("circle", { cx: "3.261", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "3.605", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "3.605", r: "2.719" })] }),
                              i.jsxs("g", { transform: "translate(0 36)", children: [i.jsx("circle", { cx: "3.261", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "3.686", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "3.686", r: "2.719" })] }),
                              i.jsxs("g", { transform: "translate(0 49)", children: [i.jsx("circle", { cx: "3.261", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "2.767", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "2.767", r: "2.719" })] }),
                              i.jsxs("g", { transform: "translate(0 61)", children: [i.jsx("circle", { cx: "3.261", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "2.846", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "2.846", r: "2.719" })] }),
                              i.jsxs("g", { transform: "translate(0 73)", children: [i.jsx("circle", { cx: "3.261", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "2.926", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "2.926", r: "2.719" })] }),
                              i.jsxs("g", { transform: "translate(0 85)", children: [i.jsx("circle", { cx: "3.261", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "3.006", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "3.006", r: "2.719" })] }),
                            ],
                          }),
                        }),
                      }),
                    }),
                    i.jsx("svg", {
                      viewBox: "0 0 91 91",
                      className: `absolute bottom-0 right-0 z-0 w-32 h-32 -mb-12 -mr-12 text-emerald-500\r
            fill-current`,
                      children: i.jsx("g", {
                        stroke: "none",
                        strokeWidth: "1",
                        fillRule: "evenodd",
                        children: i.jsx("g", {
                          fillRule: "nonzero",
                          children: i.jsxs("g", {
                            children: [
                              i.jsxs("g", { children: [i.jsx("circle", { cx: "3.261", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "3.445", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "3.445", r: "2.719" })] }),
                              i.jsxs("g", { transform: "translate(0 12)", children: [i.jsx("circle", { cx: "3.261", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "3.525", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "3.525", r: "2.719" })] }),
                              i.jsxs("g", { transform: "translate(0 24)", children: [i.jsx("circle", { cx: "3.261", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "3.605", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "3.605", r: "2.719" })] }),
                              i.jsxs("g", { transform: "translate(0 36)", children: [i.jsx("circle", { cx: "3.261", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "3.686", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "3.686", r: "2.719" })] }),
                              i.jsxs("g", { transform: "translate(0 49)", children: [i.jsx("circle", { cx: "3.261", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "2.767", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "2.767", r: "2.719" })] }),
                              i.jsxs("g", { transform: "translate(0 61)", children: [i.jsx("circle", { cx: "3.261", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "2.846", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "2.846", r: "2.719" })] }),
                              i.jsxs("g", { transform: "translate(0 73)", children: [i.jsx("circle", { cx: "3.261", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "2.926", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "2.926", r: "2.719" })] }),
                              i.jsxs("g", { transform: "translate(0 85)", children: [i.jsx("circle", { cx: "3.261", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "3.006", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "3.006", r: "2.719" })] }),
                            ],
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
        i.jsx(dt, {}),
      ],
    })
  );
}
var bp = { exports: {} },
  Y0 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  X0 = Y0,
  J0 = X0;
function Rp() {}
function Lp() {}
Lp.resetWarningCache = Rp;
var Z0 = function () {
  function e(n, l, o, c, s, a) {
    if (a !== J0) {
      var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
      throw ((u.name = "Invariant Violation"), u);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var r = { array: e, bigint: e, bool: e, func: e, number: e, object: e, string: e, symbol: e, any: e, arrayOf: t, element: e, elementType: e, instanceOf: t, node: e, objectOf: t, oneOf: t, oneOfType: t, shape: t, exact: t, checkPropTypes: Lp, resetWarningCache: Rp };
  return (r.PropTypes = r), r;
};
bp.exports = Z0();
var k = bp.exports,
  Dc = function () {
    return (
      (Dc =
        Object.assign ||
        function (e) {
          for (var t, r = 1, n = arguments.length; r < n; r++) {
            t = arguments[r];
            for (var l in t) Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
          }
          return e;
        }),
      Dc.apply(this, arguments)
    );
  },
  Ip = {
    onActivate: k.func,
    onAddUndo: k.func,
    onBeforeAddUndo: k.func,
    onBeforeExecCommand: k.func,
    onBeforeGetContent: k.func,
    onBeforeRenderUI: k.func,
    onBeforeSetContent: k.func,
    onBeforePaste: k.func,
    onBlur: k.func,
    onChange: k.func,
    onClearUndos: k.func,
    onClick: k.func,
    onContextMenu: k.func,
    onCommentChange: k.func,
    onCopy: k.func,
    onCut: k.func,
    onDblclick: k.func,
    onDeactivate: k.func,
    onDirty: k.func,
    onDrag: k.func,
    onDragDrop: k.func,
    onDragEnd: k.func,
    onDragGesture: k.func,
    onDragOver: k.func,
    onDrop: k.func,
    onExecCommand: k.func,
    onFocus: k.func,
    onFocusIn: k.func,
    onFocusOut: k.func,
    onGetContent: k.func,
    onHide: k.func,
    onInit: k.func,
    onKeyDown: k.func,
    onKeyPress: k.func,
    onKeyUp: k.func,
    onLoadContent: k.func,
    onMouseDown: k.func,
    onMouseEnter: k.func,
    onMouseLeave: k.func,
    onMouseMove: k.func,
    onMouseOut: k.func,
    onMouseOver: k.func,
    onMouseUp: k.func,
    onNodeChange: k.func,
    onObjectResizeStart: k.func,
    onObjectResized: k.func,
    onObjectSelected: k.func,
    onPaste: k.func,
    onPostProcess: k.func,
    onPostRender: k.func,
    onPreProcess: k.func,
    onProgressState: k.func,
    onRedo: k.func,
    onRemove: k.func,
    onReset: k.func,
    onSaveContent: k.func,
    onSelectionChange: k.func,
    onSetAttrib: k.func,
    onSetContent: k.func,
    onShow: k.func,
    onSubmit: k.func,
    onUndo: k.func,
    onVisualAid: k.func,
    onSkinLoadError: k.func,
    onThemeLoadError: k.func,
    onModelLoadError: k.func,
    onPluginLoadError: k.func,
    onIconsLoadError: k.func,
    onLanguageLoadError: k.func,
    onScriptsLoad: k.func,
    onScriptsLoadError: k.func,
  },
  q0 = Dc({ apiKey: k.string, id: k.string, inline: k.bool, init: k.object, initialValue: k.string, onEditorChange: k.func, value: k.string, tagName: k.string, cloudChannel: k.string, plugins: k.oneOfType([k.string, k.array]), toolbar: k.oneOfType([k.string, k.array]), disabled: k.bool, textareaName: k.string, tinymceScriptSrc: k.oneOfType([k.string, k.arrayOf(k.string), k.arrayOf(k.shape({ src: k.string, async: k.bool, defer: k.bool }))]), rollback: k.oneOfType([k.number, k.oneOf([!1])]), scriptLoading: k.shape({ async: k.bool, defer: k.bool, delay: k.number }) }, Ip),
  bo = function (e) {
    return typeof e == "function";
  },
  Nu = function (e) {
    return e in Ip;
  },
  Pu = function (e) {
    return e.substr(2);
  },
  e2 = function (e, t, r, n, l, o, c) {
    var s = Object.keys(l).filter(Nu),
      a = Object.keys(o).filter(Nu),
      u = s.filter(function (d) {
        return o[d] === void 0;
      }),
      f = a.filter(function (d) {
        return l[d] === void 0;
      });
    u.forEach(function (d) {
      var p = Pu(d),
        v = c[p];
      r(p, v), delete c[p];
    }),
      f.forEach(function (d) {
        var p = n(e, d),
          v = Pu(d);
        (c[v] = p), t(v, p);
      });
  },
  t2 = function (e, t, r, n, l) {
    return e2(
      l,
      e.on.bind(e),
      e.off.bind(e),
      function (o, c) {
        return function (s) {
          var a;
          return (a = o(c)) === null || a === void 0 ? void 0 : a(s, e);
        };
      },
      t,
      r,
      n
    );
  },
  _u = 0,
  zp = function (e) {
    var t = Date.now(),
      r = Math.floor(Math.random() * 1e9);
    return _u++, e + "_" + r + _u + String(t);
  },
  Ou = function (e) {
    return e !== null && (e.tagName.toLowerCase() === "textarea" || e.tagName.toLowerCase() === "input");
  },
  Tu = function (e) {
    return typeof e > "u" || e === "" ? [] : Array.isArray(e) ? e : e.split(" ");
  },
  r2 = function (e, t) {
    return Tu(e).concat(Tu(t));
  },
  n2 = function () {
    return window.InputEvent && typeof InputEvent.prototype.getTargetRanges == "function";
  },
  l2 = function (e) {
    if (!("isConnected" in Node.prototype)) {
      for (var t = e, r = e.parentNode; r != null; ) (t = r), (r = t.parentNode);
      return t === e.ownerDocument;
    }
    return e.isConnected;
  },
  bu = function (e, t) {
    e !== void 0 && (e.mode != null && typeof e.mode == "object" && typeof e.mode.set == "function" ? e.mode.set(t) : e.setMode(t));
  },
  $c = function () {
    return (
      ($c =
        Object.assign ||
        function (e) {
          for (var t, r = 1, n = arguments.length; r < n; r++) {
            t = arguments[r];
            for (var l in t) Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
          }
          return e;
        }),
      $c.apply(this, arguments)
    );
  },
  i2 = function (e, t, r) {
    var n,
      l,
      o = e.createElement("script");
    (o.referrerPolicy = "origin"), (o.type = "application/javascript"), (o.id = t.id), (o.src = t.src), (o.async = (n = t.async) !== null && n !== void 0 ? n : !1), (o.defer = (l = t.defer) !== null && l !== void 0 ? l : !1);
    var c = function () {
        o.removeEventListener("load", c), o.removeEventListener("error", s), r(t.src);
      },
      s = function (a) {
        o.removeEventListener("load", c), o.removeEventListener("error", s), r(t.src, a);
      };
    o.addEventListener("load", c), o.addEventListener("error", s), e.head && e.head.appendChild(o);
  },
  o2 = function (e) {
    var t = {},
      r = function (c, s) {
        var a = t[c];
        (a.done = !0), (a.error = s);
        for (var u = 0, f = a.handlers; u < f.length; u++) {
          var d = f[u];
          d(c, s);
        }
        a.handlers = [];
      },
      n = function (c, s, a) {
        var u = function (h) {
          return a !== void 0 ? a(h) : console.error(h);
        };
        if (c.length === 0) {
          u(new Error("At least one script must be provided"));
          return;
        }
        for (
          var f = 0,
            d = !1,
            p = function (h, y) {
              d || (y ? ((d = !0), u(y)) : ++f === c.length && s());
            },
            v = 0,
            x = c;
          v < x.length;
          v++
        ) {
          var g = x[v],
            j = t[g.src];
          if (j) j.done ? p(g.src, j.error) : j.handlers.push(p);
          else {
            var m = zp("tiny-");
            (t[g.src] = { id: m, src: g.src, done: !1, error: null, handlers: [p] }), i2(e, $c({ id: m }, g), r);
          }
        }
      },
      l = function () {
        for (var c, s = 0, a = Object.values(t); s < a.length; s++) {
          var u = a[s],
            f = e.getElementById(u.id);
          f != null && f.tagName === "SCRIPT" && ((c = f.parentNode) === null || c === void 0 || c.removeChild(f));
        }
        t = {};
      },
      o = function () {
        return e;
      };
    return { loadScripts: n, deleteScripts: l, getDocument: o };
  },
  c2 = function () {
    var e = [],
      t = function (l) {
        var o = e.find(function (c) {
          return c.getDocument() === l;
        });
        return o === void 0 && ((o = o2(l)), e.push(o)), o;
      },
      r = function (l, o, c, s, a) {
        var u = function () {
          return t(l).loadScripts(o, s, a);
        };
        c > 0 ? setTimeout(u, c) : u();
      },
      n = function () {
        for (var l = e.pop(); l != null; l = e.pop()) l.deleteScripts();
      };
    return { loadList: r, reinitialize: n };
  },
  s2 = c2(),
  Ro = function (e) {
    var t = e;
    return t && t.tinymce ? t.tinymce : null;
  },
  a2 = (function () {
    var e = function (t, r) {
      return (
        (e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (n, l) {
              n.__proto__ = l;
            }) ||
          function (n, l) {
            for (var o in l) Object.prototype.hasOwnProperty.call(l, o) && (n[o] = l[o]);
          }),
        e(t, r)
      );
    };
    return function (t, r) {
      if (typeof r != "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
      e(t, r);
      function n() {
        this.constructor = t;
      }
      t.prototype = r === null ? Object.create(r) : ((n.prototype = r.prototype), new n());
    };
  })(),
  li = function () {
    return (
      (li =
        Object.assign ||
        function (e) {
          for (var t, r = 1, n = arguments.length; r < n; r++) {
            t = arguments[r];
            for (var l in t) Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
          }
          return e;
        }),
      li.apply(this, arguments)
    );
  },
  u2 = (function (e) {
    a2(t, e);
    function t(r) {
      var n,
        l,
        o,
        c = e.call(this, r) || this;
      return (
        (c.rollbackTimer = void 0),
        (c.valueCursor = void 0),
        (c.rollbackChange = function () {
          var s = c.editor,
            a = c.props.value;
          s &&
            a &&
            a !== c.currentContent &&
            s.undoManager.ignore(function () {
              if ((s.setContent(a), c.valueCursor && (!c.inline || s.hasFocus())))
                try {
                  s.selection.moveToBookmark(c.valueCursor);
                } catch {}
            }),
            (c.rollbackTimer = void 0);
        }),
        (c.handleBeforeInput = function (s) {
          if (c.props.value !== void 0 && c.props.value === c.currentContent && c.editor && (!c.inline || c.editor.hasFocus()))
            try {
              c.valueCursor = c.editor.selection.getBookmark(3);
            } catch {}
        }),
        (c.handleBeforeInputSpecial = function (s) {
          (s.key === "Enter" || s.key === "Backspace" || s.key === "Delete") && c.handleBeforeInput(s);
        }),
        (c.handleEditorChange = function (s) {
          var a = c.editor;
          if (a && a.initialized) {
            var u = a.getContent();
            c.props.value !== void 0 && c.props.value !== u && c.props.rollback !== !1 && (c.rollbackTimer || (c.rollbackTimer = window.setTimeout(c.rollbackChange, typeof c.props.rollback == "number" ? c.props.rollback : 200))), u !== c.currentContent && ((c.currentContent = u), bo(c.props.onEditorChange) && c.props.onEditorChange(u, a));
          }
        }),
        (c.handleEditorChangeSpecial = function (s) {
          (s.key === "Backspace" || s.key === "Delete") && c.handleEditorChange(s);
        }),
        (c.initialise = function (s) {
          var a, u, f;
          s === void 0 && (s = 0);
          var d = c.elementRef.current;
          if (d) {
            if (!l2(d)) {
              if (s === 0)
                setTimeout(function () {
                  return c.initialise(1);
                }, 1);
              else if (s < 100)
                setTimeout(function () {
                  return c.initialise(s + 1);
                }, 100);
              else throw new Error("tinymce can only be initialised when in a document");
              return;
            }
            var p = Ro(c.view);
            if (!p) throw new Error("tinymce should have been loaded into global scope");
            var v = li(li({}, c.props.init), {
              selector: void 0,
              target: d,
              readonly: c.props.disabled,
              inline: c.inline,
              plugins: r2((a = c.props.init) === null || a === void 0 ? void 0 : a.plugins, c.props.plugins),
              toolbar: (u = c.props.toolbar) !== null && u !== void 0 ? u : (f = c.props.init) === null || f === void 0 ? void 0 : f.toolbar,
              setup: function (x) {
                (c.editor = x),
                  c.bindHandlers({}),
                  c.inline &&
                    !Ou(d) &&
                    x.once("PostRender", function (g) {
                      x.setContent(c.getInitialValue(), { no_events: !0 });
                    }),
                  c.props.init && bo(c.props.init.setup) && c.props.init.setup(x);
              },
              init_instance_callback: function (x) {
                var g,
                  j,
                  m = c.getInitialValue();
                (c.currentContent = (g = c.currentContent) !== null && g !== void 0 ? g : x.getContent()), c.currentContent !== m && ((c.currentContent = m), x.setContent(m), x.undoManager.clear(), x.undoManager.add(), x.setDirty(!1));
                var h = (j = c.props.disabled) !== null && j !== void 0 ? j : !1;
                bu(c.editor, h ? "readonly" : "design"), c.props.init && bo(c.props.init.init_instance_callback) && c.props.init.init_instance_callback(x);
              },
            });
            c.inline || (d.style.visibility = ""), Ou(d) && (d.value = c.getInitialValue()), p.init(v);
          }
        }),
        (c.id = c.props.id || zp("tiny-react")),
        (c.elementRef = S.createRef()),
        (c.inline = (o = (n = c.props.inline) !== null && n !== void 0 ? n : (l = c.props.init) === null || l === void 0 ? void 0 : l.inline) !== null && o !== void 0 ? o : !1),
        (c.boundHandlers = {}),
        c
      );
    }
    return (
      Object.defineProperty(t.prototype, "view", {
        get: function () {
          var r, n;
          return (n = (r = this.elementRef.current) === null || r === void 0 ? void 0 : r.ownerDocument.defaultView) !== null && n !== void 0 ? n : window;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.componentDidUpdate = function (r) {
        var n = this,
          l,
          o;
        if ((this.rollbackTimer && (clearTimeout(this.rollbackTimer), (this.rollbackTimer = void 0)), this.editor && (this.bindHandlers(r), this.editor.initialized))) {
          if (((this.currentContent = (l = this.currentContent) !== null && l !== void 0 ? l : this.editor.getContent()), typeof this.props.initialValue == "string" && this.props.initialValue !== r.initialValue)) this.editor.setContent(this.props.initialValue), this.editor.undoManager.clear(), this.editor.undoManager.add(), this.editor.setDirty(!1);
          else if (typeof this.props.value == "string" && this.props.value !== this.currentContent) {
            var c = this.editor;
            c.undoManager.transact(function () {
              var a;
              if (!n.inline || c.hasFocus())
                try {
                  a = c.selection.getBookmark(3);
                } catch {}
              var u = n.valueCursor;
              if ((c.setContent(n.props.value), !n.inline || c.hasFocus()))
                for (var f = 0, d = [a, u]; f < d.length; f++) {
                  var p = d[f];
                  if (p)
                    try {
                      c.selection.moveToBookmark(p), (n.valueCursor = p);
                      break;
                    } catch {}
                }
            });
          }
          if (this.props.disabled !== r.disabled) {
            var s = (o = this.props.disabled) !== null && o !== void 0 ? o : !1;
            bu(this.editor, s ? "readonly" : "design");
          }
        }
      }),
      (t.prototype.componentDidMount = function () {
        var r = this,
          n,
          l,
          o,
          c,
          s;
        if (Ro(this.view) !== null) this.initialise();
        else if (Array.isArray(this.props.tinymceScriptSrc) && this.props.tinymceScriptSrc.length === 0) (l = (n = this.props).onScriptsLoadError) === null || l === void 0 || l.call(n, new Error("No `tinymce` global is present but the `tinymceScriptSrc` prop was an empty array."));
        else if (!((o = this.elementRef.current) === null || o === void 0) && o.ownerDocument) {
          var a = function () {
              var f, d;
              (d = (f = r.props).onScriptsLoad) === null || d === void 0 || d.call(f), r.initialise();
            },
            u = function (f) {
              var d, p;
              (p = (d = r.props).onScriptsLoadError) === null || p === void 0 || p.call(d, f);
            };
          s2.loadList(this.elementRef.current.ownerDocument, this.getScriptSources(), (s = (c = this.props.scriptLoading) === null || c === void 0 ? void 0 : c.delay) !== null && s !== void 0 ? s : 0, a, u);
        }
      }),
      (t.prototype.componentWillUnmount = function () {
        var r = this,
          n = this.editor;
        n &&
          (n.off(this.changeEvents(), this.handleEditorChange),
          n.off(this.beforeInputEvent(), this.handleBeforeInput),
          n.off("keypress", this.handleEditorChangeSpecial),
          n.off("keydown", this.handleBeforeInputSpecial),
          n.off("NewBlock", this.handleEditorChange),
          Object.keys(this.boundHandlers).forEach(function (l) {
            n.off(l, r.boundHandlers[l]);
          }),
          (this.boundHandlers = {}),
          n.remove(),
          (this.editor = void 0));
      }),
      (t.prototype.render = function () {
        return this.inline ? this.renderInline() : this.renderIframe();
      }),
      (t.prototype.changeEvents = function () {
        var r,
          n,
          l,
          o = (l = (n = (r = Ro(this.view)) === null || r === void 0 ? void 0 : r.Env) === null || n === void 0 ? void 0 : n.browser) === null || l === void 0 ? void 0 : l.isIE();
        return o ? "change keyup compositionend setcontent CommentChange" : "change input compositionend setcontent CommentChange";
      }),
      (t.prototype.beforeInputEvent = function () {
        return n2() ? "beforeinput SelectionChange" : "SelectionChange";
      }),
      (t.prototype.renderInline = function () {
        var r = this.props.tagName,
          n = r === void 0 ? "div" : r;
        return S.createElement(n, { ref: this.elementRef, id: this.id });
      }),
      (t.prototype.renderIframe = function () {
        return S.createElement("textarea", { ref: this.elementRef, style: { visibility: "hidden" }, name: this.props.textareaName, id: this.id });
      }),
      (t.prototype.getScriptSources = function () {
        var r,
          n,
          l = (r = this.props.scriptLoading) === null || r === void 0 ? void 0 : r.async,
          o = (n = this.props.scriptLoading) === null || n === void 0 ? void 0 : n.defer;
        if (this.props.tinymceScriptSrc !== void 0)
          return typeof this.props.tinymceScriptSrc == "string"
            ? [{ src: this.props.tinymceScriptSrc, async: l, defer: o }]
            : this.props.tinymceScriptSrc.map(function (u) {
                return typeof u == "string" ? { src: u, async: l, defer: o } : u;
              });
        var c = this.props.cloudChannel,
          s = this.props.apiKey ? this.props.apiKey : "no-api-key",
          a = "https://cdn.tiny.cloud/1/".concat(s, "/tinymce/").concat(c, "/tinymce.min.js");
        return [{ src: a, async: l, defer: o }];
      }),
      (t.prototype.getInitialValue = function () {
        return typeof this.props.initialValue == "string" ? this.props.initialValue : typeof this.props.value == "string" ? this.props.value : "";
      }),
      (t.prototype.bindHandlers = function (r) {
        var n = this;
        if (this.editor !== void 0) {
          t2(this.editor, r, this.props, this.boundHandlers, function (s) {
            return n.props[s];
          });
          var l = function (s) {
              return s.onEditorChange !== void 0 || s.value !== void 0;
            },
            o = l(r),
            c = l(this.props);
          !o && c ? (this.editor.on(this.changeEvents(), this.handleEditorChange), this.editor.on(this.beforeInputEvent(), this.handleBeforeInput), this.editor.on("keydown", this.handleBeforeInputSpecial), this.editor.on("keyup", this.handleEditorChangeSpecial), this.editor.on("NewBlock", this.handleEditorChange)) : o && !c && (this.editor.off(this.changeEvents(), this.handleEditorChange), this.editor.off(this.beforeInputEvent(), this.handleBeforeInput), this.editor.off("keydown", this.handleBeforeInputSpecial), this.editor.off("keyup", this.handleEditorChangeSpecial), this.editor.off("NewBlock", this.handleEditorChange));
        }
      }),
      (t.propTypes = q0),
      (t.defaultProps = { cloudChannel: "6" }),
      t
    );
  })(S.Component);
function Dp({ handleEditorChange: e, initialValue: t }) {
  const r = S.useRef(null);
  return i.jsx(i.Fragment, { children: i.jsx(u2, { tinymceScriptSrc: "/tinymce/tinymce.min.js", onInit: (n, l) => (r.current = l), initialValue: t, init: { height: 500, menubar: !1, plugins: ["advlist", "autolink", "lists", "link", "charmap", "anchor", "searchreplace", "visualblocks", "code", "fullscreen", "insertdatetime", "table", "preview", "help", "wordcount"], toolbar: "undo redo | blocks | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help", content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }" }, onEditorChange: e }) });
}
function f2() {
  const e = Wt(),
    t = ft((v) => v.auth),
    [r, n] = S.useState({ title: "", published: "draft" }),
    [l, o] = S.useState(null),
    c = (v) => {
      const { name: x, value: g } = v.target;
      n({ ...r, [x]: g });
    },
    s = "<p>Write Post Content Here.</p>",
    [a, u] = S.useState(""),
    f = (v, x) => {
      u(v);
    },
    d = (v) => {
      v.preventDefault(), p({ title: r.title, text: a, published: r.published });
    },
    p = async (v) => {
      try {
        const x = await fetch("http://localhost:3000/authorAPI/posts", { method: "POST", headers: { "Content-Type": "application/json", authorization: t.token }, body: JSON.stringify(v) });
        if (!x.ok) {
          const m = await x.json();
          o(m.message);
          return;
        }
        const g = await x.json();
        o(g.message);
        const j = setTimeout(() => {
          e("/");
        }, 2500);
        return () => clearTimeout(j);
      } catch (x) {
        o("Error sending data to backend: " + x.message);
      }
    };
  return i.jsxs(i.Fragment, {
    children: [
      i.jsx(Vt, {}),
      i.jsxs("div", {
        className: "bg-emerald-100 h-screen relative lg:py-20",
        children: [
          l && i.jsx("h3", { className: "response text-orange-500 text-xl font-bold container mx-auto text-center", children: l }),
          i.jsx("div", {
            className: `flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl\r
      xl:px-5 lg:flex-row`,
            children: i.jsx("div", {
              className: "flex flex-col items-center justify-center w-full   ",
              children: i.jsxs("div", {
                className: "relative  mt-5 mr-0 mb-0 ml-0  z-10  lg:mt-0 container",
                children: [
                  i.jsxs("form", {
                    onSubmit: d,
                    className: "flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl relative z-10",
                    children: [
                      i.jsx("p", { className: "w-full text-4xl font-medium text-center leading-snug font-serif", children: "Create a New Post. " }),
                      i.jsxs("div", {
                        className: "w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8",
                        children: [
                          i.jsx("div", {
                            className: "relative",
                            children: i.jsx("input", {
                              value: r.title,
                              onChange: c,
                              required: !0,
                              name: "title",
                              placeholder: "Write Post Title Here.",
                              type: "text",
                              className: `border placeholder-gray-400 focus:outline-none\r
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white\r
                  border-gray-300 rounded-md`,
                            }),
                          }),
                          i.jsx("div", { className: "relative", children: i.jsx(Dp, { initialValue: s, handleEditorChange: f }) }),
                          i.jsxs("div", { className: "flex items-center space-x-2", children: [i.jsx("p", { className: "text-lg", children: "Ready to publish the post?" }), i.jsx("input", { name: "published", type: "radio", id: "option1", value: "published", checked: r.published === "published", onChange: c, className: "text-blue-500 focus:ring-blue-400" }), i.jsx("label", { htmlFor: "option1", className: "text-gray-700", children: "Publish" }), i.jsx("input", { name: "published", type: "radio", id: "option2", value: "draft", checked: r.published === "draft", onChange: c, className: "text-blue-500 focus:ring-blue-400" }), i.jsx("label", { htmlFor: "option2", className: "text-gray-700", children: "Save as Draft" })] }),
                          i.jsx("div", {
                            className: "relative",
                            children: i.jsx("button", {
                              className: `w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-emerald-500\r
                  rounded-lg transition duration-200 hover:bg-emerald-600 ease`,
                              children: "Submit",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  i.jsx("svg", {
                    viewBox: "0 0 91 91",
                    className: `absolute top-0 left-0 z-0 w-32 h-32 -mt-12 -ml-12 text-orange-300\r
            fill-current`,
                    children: i.jsx("g", {
                      stroke: "none",
                      strokeWidth: "1",
                      fillRule: "evenodd",
                      children: i.jsx("g", {
                        fillRule: "nonzero",
                        children: i.jsxs("g", {
                          children: [
                            i.jsxs("g", { children: [i.jsx("circle", { cx: "3.261", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "3.445", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "3.445", r: "2.719" })] }),
                            i.jsxs("g", { transform: "translate(0 12)", children: [i.jsx("circle", { cx: "3.261", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "3.525", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "3.525", r: "2.719" })] }),
                            i.jsxs("g", { transform: "translate(0 24)", children: [i.jsx("circle", { cx: "3.261", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "3.605", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "3.605", r: "2.719" })] }),
                            i.jsxs("g", { transform: "translate(0 36)", children: [i.jsx("circle", { cx: "3.261", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "3.686", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "3.686", r: "2.719" })] }),
                            i.jsxs("g", { transform: "translate(0 49)", children: [i.jsx("circle", { cx: "3.261", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "2.767", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "2.767", r: "2.719" })] }),
                            i.jsxs("g", { transform: "translate(0 61)", children: [i.jsx("circle", { cx: "3.261", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "2.846", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "2.846", r: "2.719" })] }),
                            i.jsxs("g", { transform: "translate(0 73)", children: [i.jsx("circle", { cx: "3.261", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "2.926", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "2.926", r: "2.719" })] }),
                            i.jsxs("g", { transform: "translate(0 85)", children: [i.jsx("circle", { cx: "3.261", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "3.006", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "3.006", r: "2.719" })] }),
                          ],
                        }),
                      }),
                    }),
                  }),
                  i.jsx("svg", {
                    viewBox: "0 0 91 91",
                    className: `absolute bottom-0 right-0 z-0 w-32 h-32 -mb-12 -mr-12 text-emerald-500\r
            fill-current`,
                    children: i.jsx("g", {
                      stroke: "none",
                      strokeWidth: "1",
                      fillRule: "evenodd",
                      children: i.jsx("g", {
                        fillRule: "nonzero",
                        children: i.jsxs("g", {
                          children: [
                            i.jsxs("g", { children: [i.jsx("circle", { cx: "3.261", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "3.445", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "3.445", r: "2.719" })] }),
                            i.jsxs("g", { transform: "translate(0 12)", children: [i.jsx("circle", { cx: "3.261", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "3.525", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "3.525", r: "2.719" })] }),
                            i.jsxs("g", { transform: "translate(0 24)", children: [i.jsx("circle", { cx: "3.261", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "3.605", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "3.605", r: "2.719" })] }),
                            i.jsxs("g", { transform: "translate(0 36)", children: [i.jsx("circle", { cx: "3.261", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "3.686", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "3.686", r: "2.719" })] }),
                            i.jsxs("g", { transform: "translate(0 49)", children: [i.jsx("circle", { cx: "3.261", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "2.767", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "2.767", r: "2.719" })] }),
                            i.jsxs("g", { transform: "translate(0 61)", children: [i.jsx("circle", { cx: "3.261", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "2.846", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "2.846", r: "2.719" })] }),
                            i.jsxs("g", { transform: "translate(0 73)", children: [i.jsx("circle", { cx: "3.261", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "2.926", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "2.926", r: "2.719" })] }),
                            i.jsxs("g", { transform: "translate(0 85)", children: [i.jsx("circle", { cx: "3.261", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "3.006", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "3.006", r: "2.719" })] }),
                          ],
                        }),
                      }),
                    }),
                  }),
                ],
              }),
            }),
          }),
        ],
      }),
      i.jsx(dt, {}),
    ],
  });
}
function d2() {
  const e = Wt(),
    t = ft((j) => j.auth);
  Qn();
  const [r, n] = S.useState({ title: "", published: "draft" }),
    [l, o] = S.useState(""),
    [c, s] = S.useState(""),
    a = (j, m) => {
      s(j), console.log(c);
    },
    [u, f] = S.useState(null),
    d = (j) => {
      const { name: m, value: h } = j.target;
      n({ ...r, [m]: h });
    },
    { postId: p } = $x(),
    v = async () => {
      try {
        const j = await fetch("http://localhost:3000/authorAPI/posts/" + p, { method: "GET", headers: { "Content-Type": "application/json", authorization: t.token } }),
          m = await j.json();
        if ((console.log(m), !j.ok)) {
          console.log(m.message);
          return;
        }
        n({ title: m.title, published: m.published }), o(m.text), s(m.text);
      } catch (j) {
        console.log(j);
      }
    };
  S.useEffect(() => {
    v();
  }, []);
  const x = (j) => {
      j.preventDefault(), g({ title: r.title, text: c, published: r.published });
    },
    g = async (j) => {
      console.log(j);
      try {
        const m = await fetch("http://localhost:3000/authorAPI/posts/" + p, { method: "PUT", headers: { "Content-Type": "application/json", authorization: t.token }, body: JSON.stringify(j) });
        if (!m.ok) {
          const w = await m.json();
          f(w.message);
          return;
        }
        const h = await m.json();
        f(h.message);
        const y = setTimeout(() => {
          e("/");
        }, 2500);
        return () => clearTimeout(y);
      } catch (m) {
        f("Error sending data to backend: " + m.message);
      }
    };
  return i.jsxs(i.Fragment, {
    children: [
      i.jsx(Vt, {}),
      i.jsxs("div", {
        className: "bg-emerald-100 h-screen relative lg:py-20",
        children: [
          u && i.jsx("h3", { className: "response text-orange-500 text-xl font-bold container mx-auto text-center", children: u }),
          i.jsx("div", {
            className: `flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl\r
      xl:px-5 lg:flex-row`,
            children: i.jsx("div", {
              className: "flex flex-col items-center justify-center w-full   ",
              children: i.jsxs("div", {
                className: "relative  mt-5 mr-0 mb-0 ml-0  z-10  lg:mt-0 container",
                children: [
                  i.jsxs("form", {
                    onSubmit: x,
                    className: "flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl relative z-10",
                    children: [
                      i.jsx("p", { className: "w-full text-4xl font-medium text-center leading-snug font-serif", children: "Edit Post. " }),
                      i.jsxs("div", {
                        className: "w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8",
                        children: [
                          i.jsx("div", {
                            className: "relative",
                            children: i.jsx("input", {
                              value: r.title,
                              onChange: d,
                              required: !0,
                              name: "title",
                              placeholder: "Write Post Title Here.",
                              type: "text",
                              className: `border placeholder-gray-400 focus:outline-none\r
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white\r
                  border-gray-300 rounded-md`,
                            }),
                          }),
                          i.jsx("div", { className: "relative", children: i.jsx(Dp, { initialValue: l, handleEditorChange: a }) }),
                          i.jsxs("div", { className: "flex items-center space-x-2", children: [i.jsx("p", { className: "text-lg", children: "Ready to publish the post?" }), i.jsx("input", { name: "published", type: "radio", id: "option1", value: "published", checked: r.published === "published", onChange: d, className: "text-blue-500 focus:ring-blue-400" }), i.jsx("label", { htmlFor: "option1", className: "text-gray-700", children: "Publish" }), i.jsx("input", { name: "published", type: "radio", id: "option2", value: "draft", checked: r.published === "draft", onChange: d, className: "text-blue-500 focus:ring-blue-400" }), i.jsx("label", { htmlFor: "option2", className: "text-gray-700", children: "Save as Draft" })] }),
                          i.jsx("div", {
                            className: "relative",
                            children: i.jsx("button", {
                              className: `w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-emerald-500\r
                  rounded-lg transition duration-200 hover:bg-emerald-600 ease`,
                              children: "Update",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  i.jsx("svg", {
                    viewBox: "0 0 91 91",
                    className: `absolute top-0 left-0 z-0 w-32 h-32 -mt-12 -ml-12 text-orange-300\r
            fill-current`,
                    children: i.jsx("g", {
                      stroke: "none",
                      strokeWidth: "1",
                      fillRule: "evenodd",
                      children: i.jsx("g", {
                        fillRule: "nonzero",
                        children: i.jsxs("g", {
                          children: [
                            i.jsxs("g", { children: [i.jsx("circle", { cx: "3.261", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "3.445", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "3.445", r: "2.719" })] }),
                            i.jsxs("g", { transform: "translate(0 12)", children: [i.jsx("circle", { cx: "3.261", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "3.525", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "3.525", r: "2.719" })] }),
                            i.jsxs("g", { transform: "translate(0 24)", children: [i.jsx("circle", { cx: "3.261", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "3.605", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "3.605", r: "2.719" })] }),
                            i.jsxs("g", { transform: "translate(0 36)", children: [i.jsx("circle", { cx: "3.261", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "3.686", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "3.686", r: "2.719" })] }),
                            i.jsxs("g", { transform: "translate(0 49)", children: [i.jsx("circle", { cx: "3.261", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "2.767", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "2.767", r: "2.719" })] }),
                            i.jsxs("g", { transform: "translate(0 61)", children: [i.jsx("circle", { cx: "3.261", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "2.846", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "2.846", r: "2.719" })] }),
                            i.jsxs("g", { transform: "translate(0 73)", children: [i.jsx("circle", { cx: "3.261", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "2.926", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "2.926", r: "2.719" })] }),
                            i.jsxs("g", { transform: "translate(0 85)", children: [i.jsx("circle", { cx: "3.261", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "3.006", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "3.006", r: "2.719" })] }),
                          ],
                        }),
                      }),
                    }),
                  }),
                  i.jsx("svg", {
                    viewBox: "0 0 91 91",
                    className: `absolute bottom-0 right-0 z-0 w-32 h-32 -mb-12 -mr-12 text-emerald-500\r
            fill-current`,
                    children: i.jsx("g", {
                      stroke: "none",
                      strokeWidth: "1",
                      fillRule: "evenodd",
                      children: i.jsx("g", {
                        fillRule: "nonzero",
                        children: i.jsxs("g", {
                          children: [
                            i.jsxs("g", { children: [i.jsx("circle", { cx: "3.261", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "3.445", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "3.445", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "3.445", r: "2.719" })] }),
                            i.jsxs("g", { transform: "translate(0 12)", children: [i.jsx("circle", { cx: "3.261", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "3.525", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "3.525", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "3.525", r: "2.719" })] }),
                            i.jsxs("g", { transform: "translate(0 24)", children: [i.jsx("circle", { cx: "3.261", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "3.605", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "3.605", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "3.605", r: "2.719" })] }),
                            i.jsxs("g", { transform: "translate(0 36)", children: [i.jsx("circle", { cx: "3.261", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "3.686", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "3.686", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "3.686", r: "2.719" })] }),
                            i.jsxs("g", { transform: "translate(0 49)", children: [i.jsx("circle", { cx: "3.261", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "2.767", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "2.767", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "2.767", r: "2.719" })] }),
                            i.jsxs("g", { transform: "translate(0 61)", children: [i.jsx("circle", { cx: "3.261", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "2.846", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "2.846", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "2.846", r: "2.719" })] }),
                            i.jsxs("g", { transform: "translate(0 73)", children: [i.jsx("circle", { cx: "3.261", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "2.926", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "2.926", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "2.926", r: "2.719" })] }),
                            i.jsxs("g", { transform: "translate(0 85)", children: [i.jsx("circle", { cx: "3.261", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "15.296", cy: "3.006", r: "2.719" }), i.jsx("circle", { cx: "27.333", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "39.369", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "51.405", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "63.441", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "75.479", cy: "3.006", r: "2.72" }), i.jsx("circle", { cx: "87.514", cy: "3.006", r: "2.719" })] }),
                          ],
                        }),
                      }),
                    }),
                  }),
                ],
              }),
            }),
          }),
        ],
      }),
      i.jsx(dt, {}),
    ],
  });
}
const p2 = () => {
  const e = ft((t) => t.auth.isLoggedIn);
  return i.jsx(ly, { children: i.jsxs(Jx, { children: [i.jsx(Ae, { path: "/", element: e ? i.jsx(To, {}) : i.jsx(dl, {}) }), i.jsx(Ae, { path: "/team", element: i.jsx(V0, {}) }), i.jsx(Ae, { path: "/login", element: i.jsx(dl, {}) }), i.jsx(Ae, { path: "/signup", element: i.jsx(H0, {}) }), i.jsx(Ae, { path: "/update", element: e ? i.jsx(G0, {}) : i.jsx(To, {}) }), i.jsx(Ae, { path: "/logout", element: i.jsx(Q0, {}) }), i.jsx(Ae, { path: "/new_post", element: e ? i.jsx(f2, {}) : i.jsx(dl, {}) }), i.jsx(Ae, { path: "/editpost/:postId", element: e ? i.jsx(d2, {}) : i.jsx(dl, {}) }), i.jsx(Ae, { path: "/products/:productId", element: i.jsx(To, {}) }), i.jsx(Ae, { path: "*", element: i.jsx(K0, {}) })] }) });
};
function h2() {
  const e = Qn(),
    t = ft((l) => l.auth),
    r = async () => {
      if (localStorage.getItem("token"))
        try {
          const o = await (await fetch("http://localhost:3000/authorAPI/validateLoginStatus", { method: "POST", headers: { "Content-Type": "application/json", authorization: localStorage.getItem("token") } })).json();
          o.firstName ? e(kt.login({ firstName: o.firstName, token: localStorage.getItem("token"), expire: localStorage.getItem("expire") })) : (localStorage.removeItem("token"), e(kt.logout()));
        } catch {}
    };
  S.useEffect(() => {
    r();
  }, []);
  const n = async () => {
    let o = (new Date(t.expire) - new Date()) / (60 * 1e3);
    if ((console.log("JWT token will get refreshed in " + (o - 1) + "minutes."), t.token && o < 1)) {
      console.log("RefreshJwtToken ran");
      try {
        const s = await (await fetch("http://localhost:3000/authorAPI/refresh", { method: "GET", headers: { "Content-Type": "application/json" }, credentials: "include" })).json();
        s.firstName ? e(kt.login({ firstName: s.firstName, token: s.token, expire: s.expire })) : (localStorage.removeItem("token"), localStorage.removeItem("expire"), e(kt.logout()));
      } catch {}
    }
  };
  return (
    S.useEffect(() => {
      console.log("CONSOLE LOGGING INTENTIONALLY :> "), n();
      const l = setInterval(n, 60 * 1e3);
      return () => clearInterval(l);
    }, [t.expire, t.isLoggedIn]),
    i.jsx(i.Fragment, { children: i.jsx(p2, {}) })
  );
}
const m2 = { number: 0, showCounter: !0 },
  x2 = _p({
    name: "counter",
    initialState: m2,
    reducers: {
      increment(e) {
        e.counter++;
      },
      decrement(e) {
        e.counter--;
      },
      increase(e, t) {
        e.counter += t.payload;
      },
      decrease(e, t) {
        e.counter -= t.payload;
      },
      reset(e) {
        e.counter = 0;
      },
      toggleCounter(e) {
        e.showCounter = !e.showCounter;
      },
    },
  }),
  y2 = x2.reducer,
  v2 = L0({ reducer: { math: y2, auth: W0 } });
Lo.createRoot(document.getElementById("root")).render(i.jsx(Uu.StrictMode, { children: i.jsx(Zy, { store: v2, children: i.jsx(h2, {}) }) }));
