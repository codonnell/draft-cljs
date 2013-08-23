function e(a) {
  throw a;
}
var g = void 0, k = !0, m = null, n = !1;
function aa() {
  return function(a) {
    return a
  }
}
function q(a) {
  return function() {
    return this[a]
  }
}
function r(a) {
  return function() {
    return a
  }
}
var t, ba = this;
function ca(a, b) {
  var c = a.split("."), d = ba;
  !(c[0] in d) && d.execScript && d.execScript("var " + c[0]);
  for(var f;c.length && (f = c.shift());) {
    !c.length && b !== g ? d[f] = b : d = d[f] ? d[f] : d[f] = {}
  }
}
function v(a) {
  var b = typeof a;
  if("object" == b) {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }
      if(a instanceof Object) {
        return b
      }
      var c = Object.prototype.toString.call(a);
      if("[object Window]" == c) {
        return"object"
      }
      if("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if("function" == b && "undefined" == typeof a.call) {
      return"object"
    }
  }
  return b
}
function da(a) {
  return"string" == typeof a
}
var ea = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36), fa = 0;
function ga(a) {
  for(var b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296
  }
  return b
}
;function ha(a, b) {
  var c = Array.prototype.slice.call(arguments), d = c.shift();
  "undefined" == typeof d && e(Error("[goog.string.format] Template required"));
  return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(a, b, d, j, l, p, s, u) {
    if("%" == p) {
      return"%"
    }
    var A = c.shift();
    "undefined" == typeof A && e(Error("[goog.string.format] Not enough arguments"));
    arguments[0] = A;
    return ha.aa[p].apply(m, arguments)
  })
}
ha.aa = {};
ha.aa.s = function(a, b, c) {
  return isNaN(c) || "" == c || a.length >= c ? a : a = -1 < b.indexOf("-", 0) ? a + Array(c - a.length + 1).join(" ") : Array(c - a.length + 1).join(" ") + a
};
ha.aa.f = function(a, b, c, d, f) {
  d = a.toString();
  isNaN(f) || "" == f || (d = a.toFixed(f));
  var h;
  h = 0 > a ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
  0 <= a && (d = h + d);
  if(isNaN(c) || d.length >= c) {
    return d
  }
  d = isNaN(f) ? Math.abs(a).toString() : Math.abs(a).toFixed(f);
  a = c - d.length - h.length;
  return d = 0 <= b.indexOf("-", 0) ? h + d + Array(a + 1).join(" ") : h + Array(a + 1).join(0 <= b.indexOf("0", 0) ? "0" : " ") + d
};
ha.aa.d = function(a, b, c, d, f, h, i, j) {
  return ha.aa.f(parseInt(a, 10), b, c, d, 0, h, i, j)
};
ha.aa.i = ha.aa.d;
ha.aa.u = ha.aa.d;
function ja(a, b) {
  a != m && this.append.apply(this, arguments)
}
ja.prototype.oa = "";
ja.prototype.append = function(a, b, c) {
  this.oa += a;
  if(b != m) {
    for(var d = 1;d < arguments.length;d++) {
      this.oa += arguments[d]
    }
  }
  return this
};
ja.prototype.toString = q("oa");
var ka;
ca("cljs.core.set_print_fn_BANG_", aa());
function w(a) {
  return a != m && a !== n
}
function la(a) {
  var b = da(a);
  return b ? "\ufdd0" !== a.charAt(0) : b
}
function x(a, b) {
  return a[v(b == m ? m : b)] ? k : a._ ? k : n
}
function y(a, b) {
  var c = b == m ? m : b.constructor, c = w(w(c) ? c.ab : c) ? c.mb : v(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""))
}
var ma = {}, na = {};
function z(a) {
  if(a ? a.A : a) {
    return a.A(a)
  }
  var b;
  var c = z[v(a == m ? m : a)];
  c ? b = c : (c = z._) ? b = c : e(y("ICounted.-count", a));
  return b.call(m, a)
}
function oa(a, b) {
  if(a ? a.C : a) {
    return a.C(a, b)
  }
  var c;
  var d = oa[v(a == m ? m : a)];
  d ? c = d : (d = oa._) ? c = d : e(y("ICollection.-conj", a));
  return c.call(m, a, b)
}
var pa = {}, B, qa = m;
function ra(a, b) {
  if(a ? a.F : a) {
    return a.F(a, b)
  }
  var c;
  var d = B[v(a == m ? m : a)];
  d ? c = d : (d = B._) ? c = d : e(y("IIndexed.-nth", a));
  return c.call(m, a, b)
}
function sa(a, b, c) {
  if(a ? a.O : a) {
    return a.O(a, b, c)
  }
  var d;
  var f = B[v(a == m ? m : a)];
  f ? d = f : (f = B._) ? d = f : e(y("IIndexed.-nth", a));
  return d.call(m, a, b, c)
}
qa = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return ra.call(this, a, b);
    case 3:
      return sa.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
qa.b = ra;
qa.e = sa;
B = qa;
function C(a) {
  if(a ? a.P : a) {
    return a.P(a)
  }
  var b;
  var c = C[v(a == m ? m : a)];
  c ? b = c : (c = C._) ? b = c : e(y("ISeq.-first", a));
  return b.call(m, a)
}
function E(a) {
  if(a ? a.Q : a) {
    return a.Q(a)
  }
  var b;
  var c = E[v(a == m ? m : a)];
  c ? b = c : (c = E._) ? b = c : e(y("ISeq.-rest", a));
  return b.call(m, a)
}
var ta = {}, ua, va = m;
function wa(a, b) {
  if(a ? a.L : a) {
    return a.L(a, b)
  }
  var c;
  var d = ua[v(a == m ? m : a)];
  d ? c = d : (d = ua._) ? c = d : e(y("ILookup.-lookup", a));
  return c.call(m, a, b)
}
function xa(a, b, c) {
  if(a ? a.B : a) {
    return a.B(a, b, c)
  }
  var d;
  var f = ua[v(a == m ? m : a)];
  f ? d = f : (f = ua._) ? d = f : e(y("ILookup.-lookup", a));
  return d.call(m, a, b, c)
}
va = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return wa.call(this, a, b);
    case 3:
      return xa.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
va.b = wa;
va.e = xa;
ua = va;
function ya(a, b, c) {
  if(a ? a.da : a) {
    return a.da(a, b, c)
  }
  var d;
  var f = ya[v(a == m ? m : a)];
  f ? d = f : (f = ya._) ? d = f : e(y("IAssociative.-assoc", a));
  return d.call(m, a, b, c)
}
var za = {}, Aa = {};
function Ba(a) {
  if(a ? a.Xa : a) {
    return a.Xa(a)
  }
  var b;
  var c = Ba[v(a == m ? m : a)];
  c ? b = c : (c = Ba._) ? b = c : e(y("IMapEntry.-key", a));
  return b.call(m, a)
}
function Da(a) {
  if(a ? a.Ya : a) {
    return a.Ya(a)
  }
  var b;
  var c = Da[v(a == m ? m : a)];
  c ? b = c : (c = Da._) ? b = c : e(y("IMapEntry.-val", a));
  return b.call(m, a)
}
var Ea = {}, Fa = {};
function Ga(a) {
  if(a ? a.M : a) {
    return a.M(a)
  }
  var b;
  var c = Ga[v(a == m ? m : a)];
  c ? b = c : (c = Ga._) ? b = c : e(y("IMeta.-meta", a));
  return b.call(m, a)
}
var Ha = {};
function Ia(a, b) {
  if(a ? a.K : a) {
    return a.K(a, b)
  }
  var c;
  var d = Ia[v(a == m ? m : a)];
  d ? c = d : (d = Ia._) ? c = d : e(y("IWithMeta.-with-meta", a));
  return c.call(m, a, b)
}
var Ja = {}, Ka, La = m;
function Ma(a, b) {
  if(a ? a.ra : a) {
    return a.ra(a, b)
  }
  var c;
  var d = Ka[v(a == m ? m : a)];
  d ? c = d : (d = Ka._) ? c = d : e(y("IReduce.-reduce", a));
  return c.call(m, a, b)
}
function Na(a, b, c) {
  if(a ? a.sa : a) {
    return a.sa(a, b, c)
  }
  var d;
  var f = Ka[v(a == m ? m : a)];
  f ? d = f : (f = Ka._) ? d = f : e(y("IReduce.-reduce", a));
  return d.call(m, a, b, c)
}
La = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Ma.call(this, a, b);
    case 3:
      return Na.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
La.b = Ma;
La.e = Na;
Ka = La;
function Oa(a, b) {
  if(a ? a.D : a) {
    return a.D(a, b)
  }
  var c;
  var d = Oa[v(a == m ? m : a)];
  d ? c = d : (d = Oa._) ? c = d : e(y("IEquiv.-equiv", a));
  return c.call(m, a, b)
}
function Pa(a) {
  if(a ? a.I : a) {
    return a.I(a)
  }
  var b;
  var c = Pa[v(a == m ? m : a)];
  c ? b = c : (c = Pa._) ? b = c : e(y("IHash.-hash", a));
  return b.call(m, a)
}
var Qa = {};
function Ra(a) {
  if(a ? a.z : a) {
    return a.z(a)
  }
  var b;
  var c = Ra[v(a == m ? m : a)];
  c ? b = c : (c = Ra._) ? b = c : e(y("ISeqable.-seq", a));
  return b.call(m, a)
}
var Sa = {}, Ta = {};
function Ua(a) {
  if(a ? a.Ra : a) {
    return a.Ra(a)
  }
  var b;
  var c = Ua[v(a == m ? m : a)];
  c ? b = c : (c = Ua._) ? b = c : e(y("IReversible.-rseq", a));
  return b.call(m, a)
}
function G(a, b) {
  if(a ? a.$a : a) {
    return a.$a(0, b)
  }
  var c;
  var d = G[v(a == m ? m : a)];
  d ? c = d : (d = G._) ? c = d : e(y("IWriter.-write", a));
  return c.call(m, a, b)
}
function Va(a) {
  if(a ? a.kb : a) {
    return m
  }
  var b;
  var c = Va[v(a == m ? m : a)];
  c ? b = c : (c = Va._) ? b = c : e(y("IWriter.-flush", a));
  return b.call(m, a)
}
function Wa(a) {
  if(a ? a.pa : a) {
    return a.pa(a)
  }
  var b;
  var c = Wa[v(a == m ? m : a)];
  c ? b = c : (c = Wa._) ? b = c : e(y("IEditableCollection.-as-transient", a));
  return b.call(m, a)
}
function Xa(a, b) {
  if(a ? a.ua : a) {
    return a.ua(a, b)
  }
  var c;
  var d = Xa[v(a == m ? m : a)];
  d ? c = d : (d = Xa._) ? c = d : e(y("ITransientCollection.-conj!", a));
  return c.call(m, a, b)
}
function Ya(a) {
  if(a ? a.ya : a) {
    return a.ya(a)
  }
  var b;
  var c = Ya[v(a == m ? m : a)];
  c ? b = c : (c = Ya._) ? b = c : e(y("ITransientCollection.-persistent!", a));
  return b.call(m, a)
}
function Za(a, b, c) {
  if(a ? a.la : a) {
    return a.la(a, b, c)
  }
  var d;
  var f = Za[v(a == m ? m : a)];
  f ? d = f : (f = Za._) ? d = f : e(y("ITransientAssociative.-assoc!", a));
  return d.call(m, a, b, c)
}
function $a(a) {
  if(a ? a.Va : a) {
    return a.Va()
  }
  var b;
  var c = $a[v(a == m ? m : a)];
  c ? b = c : (c = $a._) ? b = c : e(y("IChunk.-drop-first", a));
  return b.call(m, a)
}
function ab(a) {
  if(a ? a.Ca : a) {
    return a.Ca(a)
  }
  var b;
  var c = ab[v(a == m ? m : a)];
  c ? b = c : (c = ab._) ? b = c : e(y("IChunkedSeq.-chunked-first", a));
  return b.call(m, a)
}
function bb(a) {
  if(a ? a.xa : a) {
    return a.xa(a)
  }
  var b;
  var c = bb[v(a == m ? m : a)];
  c ? b = c : (c = bb._) ? b = c : e(y("IChunkedSeq.-chunked-rest", a));
  return b.call(m, a)
}
function cb(a) {
  this.qb = a;
  this.t = 0;
  this.h = 1073741824
}
cb.prototype.$a = function(a, b) {
  return this.qb.append(b)
};
cb.prototype.kb = r(m);
function db(a) {
  var b = new ja, c = new cb(b);
  a.J(a, c, eb(["\ufdd0:flush-on-newline", k, "\ufdd0:readably", k, "\ufdd0:meta", n, "\ufdd0:dup", n]));
  Va(c);
  return"" + H(b)
}
function I(a) {
  if(a == m) {
    return m
  }
  var b;
  if(b = a) {
    b = (b = a.h & 8388608) ? b : a.ta
  }
  if(b) {
    return a.z(a)
  }
  if(a instanceof Array || la(a)) {
    return 0 === a.length ? m : new fb(a, 0)
  }
  if(x(ta, a)) {
    return Ra(a)
  }
  e(Error([H(a), H("is not ISeqable")].join("")))
}
function J(a) {
  if(a == m) {
    return m
  }
  var b;
  if(b = a) {
    b = (b = a.h & 64) ? b : a.Za
  }
  if(b) {
    return a.P(a)
  }
  a = I(a);
  return a == m ? m : C(a)
}
function K(a) {
  if(a != m) {
    var b;
    if(b = a) {
      b = (b = a.h & 64) ? b : a.Za
    }
    if(b) {
      return a.Q(a)
    }
    a = I(a);
    return a != m ? E(a) : M
  }
  return M
}
function O(a) {
  if(a == m) {
    a = m
  }else {
    var b;
    if(b = a) {
      b = (b = a.h & 128) ? b : a.vb
    }
    a = b ? a.ha(a) : I(K(a))
  }
  return a
}
var P, gb = m;
function hb(a, b) {
  var c = a === b;
  return c ? c : Oa(a, b)
}
function ib(a, b, c) {
  for(;;) {
    if(w(gb.b(a, b))) {
      if(O(c)) {
        a = b, b = J(c), c = O(c)
      }else {
        return gb.b(b, J(c))
      }
    }else {
      return n
    }
  }
}
function jb(a, b, c) {
  var d = m;
  2 < arguments.length && (d = Q(Array.prototype.slice.call(arguments, 2), 0));
  return ib.call(this, a, b, d)
}
jb.q = 2;
jb.k = function(a) {
  var b = J(a), a = O(a), c = J(a), a = K(a);
  return ib(b, c, a)
};
jb.j = ib;
gb = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return k;
    case 2:
      return hb.call(this, a, b);
    default:
      return jb.j(a, b, Q(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
gb.q = 2;
gb.k = jb.k;
gb.a = r(k);
gb.b = hb;
gb.j = jb.j;
P = gb;
Pa["null"] = r(0);
na["null"] = k;
z["null"] = r(0);
Oa["null"] = function(a, b) {
  return b == m
};
Ha["null"] = k;
Ia["null"] = r(m);
Fa["null"] = k;
Ga["null"] = r(m);
za["null"] = k;
Date.prototype.D = function(a, b) {
  var c = b instanceof Date;
  return c ? a.toString() === b.toString() : c
};
Pa.number = function(a) {
  return Math.floor(a) % 2147483647
};
Oa.number = function(a, b) {
  return a === b
};
Pa["boolean"] = function(a) {
  return a === k ? 1 : 0
};
Fa["function"] = k;
Ga["function"] = r(m);
ma["function"] = k;
Pa._ = function(a) {
  return a[ea] || (a[ea] = ++fa)
};
var kb, lb = m;
function mb(a, b) {
  var c = z(a);
  if(0 === c) {
    return b.r ? b.r() : b.call(m)
  }
  for(var d = B.b(a, 0), f = 1;;) {
    if(f < c) {
      d = b.b ? b.b(d, B.b(a, f)) : b.call(m, d, B.b(a, f)), f += 1
    }else {
      return d
    }
  }
}
function nb(a, b, c) {
  for(var d = z(a), f = 0;;) {
    if(f < d) {
      c = b.b ? b.b(c, B.b(a, f)) : b.call(m, c, B.b(a, f)), f += 1
    }else {
      return c
    }
  }
}
function ob(a, b, c, d) {
  for(var f = z(a);;) {
    if(d < f) {
      c = b.b ? b.b(c, B.b(a, d)) : b.call(m, c, B.b(a, d)), d += 1
    }else {
      return c
    }
  }
}
lb = function(a, b, c, d) {
  switch(arguments.length) {
    case 2:
      return mb.call(this, a, b);
    case 3:
      return nb.call(this, a, b, c);
    case 4:
      return ob.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
lb.b = mb;
lb.e = nb;
lb.p = ob;
kb = lb;
var pb, qb = m;
function rb(a, b) {
  var c = a.length;
  if(0 === a.length) {
    return b.r ? b.r() : b.call(m)
  }
  for(var d = a[0], f = 1;;) {
    if(f < c) {
      d = b.b ? b.b(d, a[f]) : b.call(m, d, a[f]), f += 1
    }else {
      return d
    }
  }
}
function sb(a, b, c) {
  for(var d = a.length, f = 0;;) {
    if(f < d) {
      c = b.b ? b.b(c, a[f]) : b.call(m, c, a[f]), f += 1
    }else {
      return c
    }
  }
}
function tb(a, b, c, d) {
  for(var f = a.length;;) {
    if(d < f) {
      c = b.b ? b.b(c, a[d]) : b.call(m, c, a[d]), d += 1
    }else {
      return c
    }
  }
}
qb = function(a, b, c, d) {
  switch(arguments.length) {
    case 2:
      return rb.call(this, a, b);
    case 3:
      return sb.call(this, a, b, c);
    case 4:
      return tb.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
qb.b = rb;
qb.e = sb;
qb.p = tb;
pb = qb;
function ub(a) {
  if(a) {
    var b = a.h & 2, a = (b ? b : a.Da) ? k : a.h ? n : x(na, a)
  }else {
    a = x(na, a)
  }
  return a
}
function vb(a) {
  if(a) {
    var b = a.h & 16, a = (b ? b : a.qa) ? k : a.h ? n : x(pa, a)
  }else {
    a = x(pa, a)
  }
  return a
}
function fb(a, b) {
  this.c = a;
  this.m = b;
  this.t = 0;
  this.h = 166199550
}
t = fb.prototype;
t.I = function(a) {
  return wb.a ? wb.a(a) : wb.call(m, a)
};
t.ha = function() {
  return this.m + 1 < this.c.length ? new fb(this.c, this.m + 1) : m
};
t.C = function(a, b) {
  return R.b ? R.b(b, a) : R.call(m, b, a)
};
t.Ra = function(a) {
  var b = a.A(a);
  return 0 < b ? new xb(a, b - 1, m) : M
};
t.toString = function() {
  return db(this)
};
t.ra = function(a, b) {
  return pb.p(this.c, b, this.c[this.m], this.m + 1)
};
t.sa = function(a, b, c) {
  return pb.p(this.c, b, c, this.m)
};
t.z = aa();
t.A = function() {
  return this.c.length - this.m
};
t.P = function() {
  return this.c[this.m]
};
t.Q = function() {
  return this.m + 1 < this.c.length ? new fb(this.c, this.m + 1) : yb.r ? yb.r() : yb.call(m)
};
t.D = function(a, b) {
  return S.b ? S.b(a, b) : S.call(m, a, b)
};
t.F = function(a, b) {
  var c = b + this.m;
  return c < this.c.length ? this.c[c] : m
};
t.O = function(a, b, c) {
  a = b + this.m;
  return a < this.c.length ? this.c[a] : c
};
var zb, Ab = m;
function Bb(a) {
  return Ab.b(a, 0)
}
function Cb(a, b) {
  return b < a.length ? new fb(a, b) : m
}
Ab = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Bb.call(this, a);
    case 2:
      return Cb.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ab.a = Bb;
Ab.b = Cb;
zb = Ab;
var Q, Db = m;
function Eb(a) {
  return zb.b(a, 0)
}
function Fb(a, b) {
  return zb.b(a, b)
}
Db = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Eb.call(this, a);
    case 2:
      return Fb.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Db.a = Eb;
Db.b = Fb;
Q = Db;
na.array = k;
z.array = function(a) {
  return a.length
};
function xb(a, b, c) {
  this.Ba = a;
  this.m = b;
  this.n = c;
  this.t = 0;
  this.h = 31850574
}
t = xb.prototype;
t.I = function(a) {
  return wb.a ? wb.a(a) : wb.call(m, a)
};
t.C = function(a, b) {
  return R.b ? R.b(b, a) : R.call(m, b, a)
};
t.toString = function() {
  return db(this)
};
t.z = aa();
t.A = function() {
  return this.m + 1
};
t.P = function() {
  return B.b(this.Ba, this.m)
};
t.Q = function() {
  return 0 < this.m ? new xb(this.Ba, this.m - 1, m) : M
};
t.D = function(a, b) {
  return S.b ? S.b(a, b) : S.call(m, a, b)
};
t.K = function(a, b) {
  return new xb(this.Ba, this.m, b)
};
t.M = q("n");
function Gb(a) {
  return J(O(a))
}
Oa._ = function(a, b) {
  return a === b
};
var Hb, Ib = m;
function Jb(a, b) {
  return a != m ? oa(a, b) : yb.a ? yb.a(b) : yb.call(m, b)
}
function Kb(a, b, c) {
  for(;;) {
    if(w(c)) {
      a = Ib.b(a, b), b = J(c), c = O(c)
    }else {
      return Ib.b(a, b)
    }
  }
}
function Lb(a, b, c) {
  var d = m;
  2 < arguments.length && (d = Q(Array.prototype.slice.call(arguments, 2), 0));
  return Kb.call(this, a, b, d)
}
Lb.q = 2;
Lb.k = function(a) {
  var b = J(a), a = O(a), c = J(a), a = K(a);
  return Kb(b, c, a)
};
Lb.j = Kb;
Ib = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Jb.call(this, a, b);
    default:
      return Lb.j(a, b, Q(arguments, 2))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ib.q = 2;
Ib.k = Lb.k;
Ib.b = Jb;
Ib.j = Lb.j;
Hb = Ib;
function Mb(a) {
  if(ub(a)) {
    a = z(a)
  }else {
    a: {
      for(var a = I(a), b = 0;;) {
        if(ub(a)) {
          a = b + z(a);
          break a
        }
        a = O(a);
        b += 1
      }
      a = g
    }
  }
  return a
}
var Nb, Ob = m;
function Pb(a, b) {
  for(;;) {
    a == m && e(Error("Index out of bounds"));
    if(0 === b) {
      if(I(a)) {
        return J(a)
      }
      e(Error("Index out of bounds"))
    }
    if(vb(a)) {
      return B.b(a, b)
    }
    if(I(a)) {
      var c = O(a), d = b - 1, a = c, b = d
    }else {
      e(Error("Index out of bounds"))
    }
  }
}
function Qb(a, b, c) {
  for(;;) {
    if(a == m) {
      return c
    }
    if(0 === b) {
      return I(a) ? J(a) : c
    }
    if(vb(a)) {
      return B.e(a, b, c)
    }
    if(I(a)) {
      a = O(a), b -= 1
    }else {
      return c
    }
  }
}
Ob = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Pb.call(this, a, b);
    case 3:
      return Qb.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ob.b = Pb;
Ob.e = Qb;
Nb = Ob;
var Rb, Sb = m;
function Ub(a, b) {
  var c;
  if(a == m) {
    c = m
  }else {
    if(c = a) {
      c = (c = a.h & 16) ? c : a.qa
    }
    c = c ? a.F(a, Math.floor(b)) : a instanceof Array ? b < a.length ? a[b] : m : la(a) ? b < a.length ? a[b] : m : Nb.b(a, Math.floor(b))
  }
  return c
}
function Vb(a, b, c) {
  if(a != m) {
    var d;
    if(d = a) {
      d = (d = a.h & 16) ? d : a.qa
    }
    a = d ? a.O(a, Math.floor(b), c) : a instanceof Array ? b < a.length ? a[b] : c : la(a) ? b < a.length ? a[b] : c : Nb.e(a, Math.floor(b), c)
  }else {
    a = c
  }
  return a
}
Sb = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Ub.call(this, a, b);
    case 3:
      return Vb.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Sb.b = Ub;
Sb.e = Vb;
Rb = Sb;
var Wb, Xb = m;
function Yb(a, b) {
  var c;
  if(a == m) {
    c = m
  }else {
    if(c = a) {
      c = (c = a.h & 256) ? c : a.fb
    }
    c = c ? a.L(a, b) : a instanceof Array ? b < a.length ? a[b] : m : la(a) ? b < a.length ? a[b] : m : x(ta, a) ? ua.b(a, b) : m
  }
  return c
}
function Zb(a, b, c) {
  if(a != m) {
    var d;
    if(d = a) {
      d = (d = a.h & 256) ? d : a.fb
    }
    a = d ? a.B(a, b, c) : a instanceof Array ? b < a.length ? a[b] : c : la(a) ? b < a.length ? a[b] : c : x(ta, a) ? ua.e(a, b, c) : c
  }else {
    a = c
  }
  return a
}
Xb = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Yb.call(this, a, b);
    case 3:
      return Zb.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Xb.b = Yb;
Xb.e = Zb;
Wb = Xb;
function $b(a) {
  var b = "function" == v(a);
  return b ? b : a ? w(w(m) ? m : a.bb) ? k : a.Ab ? n : x(ma, a) : x(ma, a)
}
var cc = function ac(b, c) {
  var d;
  if(d = $b(b)) {
    d = b ? ((d = b.h & 262144) ? d : b.zb) || (b.h ? 0 : x(Ha, b)) : x(Ha, b), d = !d
  }
  if(d) {
    if(g === ka) {
      ka = {};
      ka = function(b, c, d, f) {
        this.n = b;
        this.Ta = c;
        this.sb = d;
        this.pb = f;
        this.t = 0;
        this.h = 393217
      };
      ka.ab = k;
      ka.mb = "cljs.core/t3679";
      ka.lb = function(b) {
        return G(b, "cljs.core/t3679")
      };
      var f = function(b, c) {
        return bc.b ? bc.b(b.Ta, c) : bc.call(m, b.Ta, c)
      };
      d = function(b, c) {
        var b = this, d = m;
        1 < arguments.length && (d = Q(Array.prototype.slice.call(arguments, 1), 0));
        return f.call(this, b, d)
      };
      d.q = 1;
      d.k = function(b) {
        var c = J(b), b = K(b);
        return f(c, b)
      };
      d.j = f;
      ka.prototype.call = d;
      ka.prototype.apply = function(b, c) {
        b = this;
        return b.call.apply(b, [b].concat(c.slice()))
      };
      ka.prototype.bb = k;
      ka.prototype.M = q("pb");
      ka.prototype.K = function(b, c) {
        return new ka(this.n, this.Ta, this.sb, c)
      }
    }
    d = new ka(c, b, ac, m);
    d = ac(d, c)
  }else {
    d = Ia(b, c)
  }
  return d
};
function dc(a) {
  var b;
  b = a ? ((b = a.h & 131072) ? b : a.hb) || (a.h ? 0 : x(Fa, a)) : x(Fa, a);
  return b ? Ga(a) : m
}
var ec = {}, fc = 0, T, gc = m;
function hc(a) {
  return gc.b(a, k)
}
function ic(a, b) {
  var c = da(a);
  (c ? b : c) ? (255 < fc && (ec = {}, fc = 0), c = ec[a], "number" !== typeof c && (c = ga(a), ec[a] = c, fc += 1)) : c = Pa(a);
  return c
}
gc = function(a, b) {
  switch(arguments.length) {
    case 1:
      return hc.call(this, a);
    case 2:
      return ic.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
gc.a = hc;
gc.b = ic;
T = gc;
function jc(a) {
  if(a) {
    var b = a.h & 16384, a = (b ? b : a.yb) ? k : a.h ? n : x(Ea, a)
  }else {
    a = x(Ea, a)
  }
  return a
}
function kc(a) {
  var b = a instanceof lc;
  return b ? b : a instanceof mc
}
function nc(a, b, c, d, f) {
  for(;0 !== f;) {
    c[d] = a[b], d += 1, f -= 1, b += 1
  }
}
function oc(a) {
  var b = da(a);
  return b ? "\ufdd0" === a.charAt(0) : b
}
function pc(a, b) {
  if(a === b) {
    return 0
  }
  if(a == m) {
    return-1
  }
  if(b == m) {
    return 1
  }
  if((a == m ? m : a.constructor) === (b == m ? m : b.constructor)) {
    var c;
    if(c = a) {
      c = (c = a.t & 2048) ? c : a.cb
    }
    return c ? a.eb(a, b) : a > b ? 1 : a < b ? -1 : 0
  }
  e(Error("compare on non-nil objects of different types"))
}
var qc, rc = m;
function sc(a, b) {
  var c = Mb(a), d = Mb(b);
  return c < d ? -1 : c > d ? 1 : rc.p(a, b, c, 0)
}
function tc(a, b, c, d) {
  for(;;) {
    var f = pc(Rb.b(a, d), Rb.b(b, d)), h = 0 === f;
    if(h ? d + 1 < c : h) {
      d += 1
    }else {
      return f
    }
  }
}
rc = function(a, b, c, d) {
  switch(arguments.length) {
    case 2:
      return sc.call(this, a, b);
    case 4:
      return tc.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
rc.b = sc;
rc.p = tc;
qc = rc;
var uc, vc = m;
function wc(a, b) {
  var c = I(b);
  return c ? xc.e ? xc.e(a, J(c), O(c)) : xc.call(m, a, J(c), O(c)) : a.r ? a.r() : a.call(m)
}
function yc(a, b, c) {
  for(c = I(c);;) {
    if(c) {
      b = a.b ? a.b(b, J(c)) : a.call(m, b, J(c)), c = O(c)
    }else {
      return b
    }
  }
}
vc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return wc.call(this, a, b);
    case 3:
      return yc.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
vc.b = wc;
vc.e = yc;
uc = vc;
var xc, zc = m;
function Ac(a, b) {
  var c;
  if(c = b) {
    c = (c = b.h & 524288) ? c : b.jb
  }
  return c ? b.ra(b, a) : b instanceof Array ? pb.b(b, a) : la(b) ? pb.b(b, a) : x(Ja, b) ? Ka.b(b, a) : uc.b(a, b)
}
function Bc(a, b, c) {
  var d;
  if(d = c) {
    d = (d = c.h & 524288) ? d : c.jb
  }
  return d ? c.sa(c, a, b) : c instanceof Array ? pb.e(c, a, b) : la(c) ? pb.e(c, a, b) : x(Ja, c) ? Ka.e(c, a, b) : uc.e(a, b, c)
}
zc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Ac.call(this, a, b);
    case 3:
      return Bc.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
zc.b = Ac;
zc.e = Bc;
xc = zc;
function Cc(a) {
  return 0 <= a ? Math.floor.a ? Math.floor.a(a) : Math.floor.call(m, a) : Math.ceil.a ? Math.ceil.a(a) : Math.ceil.call(m, a)
}
function Dc(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24
}
var Ec, Fc = m;
function Gc(a) {
  return a == m ? "" : a.toString()
}
function Hc(a, b) {
  return function(a, b) {
    for(;;) {
      if(w(b)) {
        var f = a.append(Fc.a(J(b))), h = O(b), a = f, b = h
      }else {
        return Fc.a(a)
      }
    }
  }.call(m, new ja(Fc.a(a)), b)
}
function Ic(a, b) {
  var c = m;
  1 < arguments.length && (c = Q(Array.prototype.slice.call(arguments, 1), 0));
  return Hc.call(this, a, c)
}
Ic.q = 1;
Ic.k = function(a) {
  var b = J(a), a = K(a);
  return Hc(b, a)
};
Ic.j = Hc;
Fc = function(a, b) {
  switch(arguments.length) {
    case 0:
      return"";
    case 1:
      return Gc.call(this, a);
    default:
      return Ic.j(a, Q(arguments, 1))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Fc.q = 1;
Fc.k = Ic.k;
Fc.r = r("");
Fc.a = Gc;
Fc.j = Ic.j;
Ec = Fc;
var H, Jc = m;
function Kc(a) {
  return oc(a) ? Ec.j(":", Q([a.substring(2, a.length)], 0)) : a == m ? "" : a.toString()
}
function Lc(a, b) {
  return function(a, b) {
    for(;;) {
      if(w(b)) {
        var f = a.append(Jc.a(J(b))), h = O(b), a = f, b = h
      }else {
        return Ec.a(a)
      }
    }
  }.call(m, new ja(Jc.a(a)), b)
}
function Mc(a, b) {
  var c = m;
  1 < arguments.length && (c = Q(Array.prototype.slice.call(arguments, 1), 0));
  return Lc.call(this, a, c)
}
Mc.q = 1;
Mc.k = function(a) {
  var b = J(a), a = K(a);
  return Lc(b, a)
};
Mc.j = Lc;
Jc = function(a, b) {
  switch(arguments.length) {
    case 0:
      return"";
    case 1:
      return Kc.call(this, a);
    default:
      return Mc.j(a, Q(arguments, 1))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Jc.q = 1;
Jc.k = Mc.k;
Jc.r = r("");
Jc.a = Kc;
Jc.j = Mc.j;
H = Jc;
var Nc, Oc = m, Oc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return a.substring(b);
    case 3:
      return a.substring(b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Oc.b = function(a, b) {
  return a.substring(b)
};
Oc.e = function(a, b, c) {
  return a.substring(b, c)
};
Nc = Oc;
function S(a, b) {
  var c;
  c = b ? ((c = b.h & 16777216) ? c : b.xb) || (b.h ? 0 : x(Sa, b)) : x(Sa, b);
  if(c) {
    a: {
      c = I(a);
      for(var d = I(b);;) {
        if(c == m) {
          c = d == m;
          break a
        }
        if(d != m && P.b(J(c), J(d))) {
          c = O(c), d = O(d)
        }else {
          c = n;
          break a
        }
      }
      c = g
    }
  }else {
    c = m
  }
  return w(c) ? k : n
}
function Pc(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2)
}
function wb(a) {
  return xc.e(function(a, c) {
    return Pc(a, T.b(c, n))
  }, T.b(J(a), n), O(a))
}
function Qc(a) {
  for(var b = 0, a = I(a);;) {
    if(a) {
      var c = J(a), b = (b + (T.a(U.a ? U.a(c) : U.call(m, c)) ^ T.a(V.a ? V.a(c) : V.call(m, c)))) % 4503599627370496, a = O(a)
    }else {
      return b
    }
  }
}
function Rc(a, b, c, d, f) {
  this.n = a;
  this.va = b;
  this.ca = c;
  this.count = d;
  this.l = f;
  this.t = 0;
  this.h = 65413358
}
t = Rc.prototype;
t.I = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = wb(a)
};
t.ha = function() {
  return 1 === this.count ? m : this.ca
};
t.C = function(a, b) {
  return new Rc(this.n, b, a, this.count + 1, m)
};
t.toString = function() {
  return db(this)
};
t.z = aa();
t.A = q("count");
t.P = q("va");
t.Q = function() {
  return 1 === this.count ? M : this.ca
};
t.D = function(a, b) {
  return S(a, b)
};
t.K = function(a, b) {
  return new Rc(b, this.va, this.ca, this.count, this.l)
};
t.M = q("n");
function Sc(a) {
  this.n = a;
  this.t = 0;
  this.h = 65413326
}
t = Sc.prototype;
t.I = r(0);
t.ha = r(m);
t.C = function(a, b) {
  return new Rc(this.n, b, m, 1, m)
};
t.toString = function() {
  return db(this)
};
t.z = r(m);
t.A = r(0);
t.P = r(m);
t.Q = function() {
  return M
};
t.D = function(a, b) {
  return S(a, b)
};
t.K = function(a, b) {
  return new Sc(b)
};
t.M = q("n");
var M = new Sc(m), yb;
function Tc(a) {
  var b;
  if(a instanceof fb) {
    b = a.c
  }else {
    a: {
      for(b = [];;) {
        if(a != m) {
          b.push(a.P(a)), a = a.ha(a)
        }else {
          break a
        }
      }
      b = g
    }
  }
  for(var a = b.length, c = M;;) {
    if(0 < a) {
      var d = a - 1, c = c.C(c, b[a - 1]), a = d
    }else {
      return c
    }
  }
}
function Uc(a) {
  var b = m;
  0 < arguments.length && (b = Q(Array.prototype.slice.call(arguments, 0), 0));
  return Tc.call(this, b)
}
Uc.q = 0;
Uc.k = function(a) {
  a = I(a);
  return Tc(a)
};
Uc.j = Tc;
yb = Uc;
function Vc(a, b, c, d) {
  this.n = a;
  this.va = b;
  this.ca = c;
  this.l = d;
  this.t = 0;
  this.h = 65405164
}
t = Vc.prototype;
t.I = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = wb(a)
};
t.ha = function() {
  return this.ca == m ? m : Ra(this.ca)
};
t.C = function(a, b) {
  return new Vc(m, b, a, this.l)
};
t.toString = function() {
  return db(this)
};
t.z = aa();
t.P = q("va");
t.Q = function() {
  return this.ca == m ? M : this.ca
};
t.D = function(a, b) {
  return S(a, b)
};
t.K = function(a, b) {
  return new Vc(b, this.va, this.ca, this.l)
};
t.M = q("n");
function R(a, b) {
  var c = b == m;
  if(!c && (c = b)) {
    c = (c = b.h & 64) ? c : b.Za
  }
  return c ? new Vc(m, a, b, m) : new Vc(m, a, I(b), m)
}
na.string = k;
z.string = function(a) {
  return a.length
};
Pa.string = function(a) {
  return ga(a)
};
function Wc(a) {
  this.Sa = a;
  this.t = 0;
  this.h = 1
}
var Xc = m, Xc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      var d;
      d = a;
      d = this;
      if(b == m) {
        d = m
      }else {
        var f = b.ja;
        d = f == m ? ua.e(b, d.Sa, m) : f[d.Sa]
      }
      return d;
    case 3:
      return b == m ? c : ua.e(b, this.Sa, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Wc.prototype.call = Xc;
Wc.prototype.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
var Yc = m, Yc = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return Wb.b(b, this.toString());
    case 3:
      return Wb.e(b, this.toString(), c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
String.prototype.call = Yc;
String.prototype.apply = function(a, b) {
  return a.call.apply(a, [a].concat(b.slice()))
};
String.prototype.apply = function(a, b) {
  return 2 > b.length ? Wb.b(b[0], a) : Wb.e(b[0], a, b[1])
};
function Zc(a) {
  var b = a.x;
  if(a.Ua) {
    return b
  }
  a.x = b.r ? b.r() : b.call(m);
  a.Ua = k;
  return a.x
}
function $c(a, b, c, d) {
  this.n = a;
  this.Ua = b;
  this.x = c;
  this.l = d;
  this.t = 0;
  this.h = 31850700
}
t = $c.prototype;
t.I = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = wb(a)
};
t.ha = function(a) {
  return Ra(a.Q(a))
};
t.C = function(a, b) {
  return R(b, a)
};
t.toString = function() {
  return db(this)
};
t.z = function(a) {
  return I(Zc(a))
};
t.P = function(a) {
  return J(Zc(a))
};
t.Q = function(a) {
  return K(Zc(a))
};
t.D = function(a, b) {
  return S(a, b)
};
t.K = function(a, b) {
  return new $c(b, this.Ua, this.x, this.l)
};
t.M = q("n");
function ad(a, b) {
  this.Aa = a;
  this.end = b;
  this.t = 0;
  this.h = 2
}
ad.prototype.A = q("end");
ad.prototype.add = function(a) {
  this.Aa[this.end] = a;
  return this.end += 1
};
ad.prototype.ga = function() {
  var a = new bd(this.Aa, 0, this.end);
  this.Aa = m;
  return a
};
function bd(a, b, c) {
  this.c = a;
  this.w = b;
  this.end = c;
  this.t = 0;
  this.h = 524306
}
t = bd.prototype;
t.ra = function(a, b) {
  return pb.p(this.c, b, this.c[this.w], this.w + 1)
};
t.sa = function(a, b, c) {
  return pb.p(this.c, b, c, this.w)
};
t.Va = function() {
  this.w === this.end && e(Error("-drop-first of empty chunk"));
  return new bd(this.c, this.w + 1, this.end)
};
t.F = function(a, b) {
  return this.c[this.w + b]
};
t.O = function(a, b, c) {
  return((a = 0 <= b) ? b < this.end - this.w : a) ? this.c[this.w + b] : c
};
t.A = function() {
  return this.end - this.w
};
var cd, dd = m;
function ed(a) {
  return new bd(a, 0, a.length)
}
function fd(a, b) {
  return new bd(a, b, a.length)
}
function gd(a, b, c) {
  return new bd(a, b, c)
}
dd = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return ed.call(this, a);
    case 2:
      return fd.call(this, a, b);
    case 3:
      return gd.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
dd.a = ed;
dd.b = fd;
dd.e = gd;
cd = dd;
function lc(a, b, c, d) {
  this.ga = a;
  this.fa = b;
  this.n = c;
  this.l = d;
  this.h = 31850604;
  this.t = 1536
}
t = lc.prototype;
t.I = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = wb(a)
};
t.C = function(a, b) {
  return R(b, a)
};
t.toString = function() {
  return db(this)
};
t.z = aa();
t.P = function() {
  return B.b(this.ga, 0)
};
t.Q = function() {
  return 1 < z(this.ga) ? new lc($a(this.ga), this.fa, this.n, m) : this.fa == m ? M : this.fa
};
t.Wa = function() {
  return this.fa == m ? m : this.fa
};
t.D = function(a, b) {
  return S(a, b)
};
t.K = function(a, b) {
  return new lc(this.ga, this.fa, b, this.l)
};
t.M = q("n");
t.Ca = q("ga");
t.xa = function() {
  return this.fa == m ? M : this.fa
};
function hd(a) {
  for(var b = [];;) {
    if(I(a)) {
      b.push(J(a)), a = O(a)
    }else {
      return b
    }
  }
}
function id(a, b) {
  if(ub(a)) {
    return Mb(a)
  }
  for(var c = a, d = b, f = 0;;) {
    var h;
    h = (h = 0 < d) ? I(c) : h;
    if(w(h)) {
      c = O(c), d -= 1, f += 1
    }else {
      return f
    }
  }
}
var kd = function jd(b) {
  return b == m ? m : O(b) == m ? I(J(b)) : R(J(b), jd(O(b)))
}, ld, md = m;
function nd(a, b, c) {
  return R(a, R(b, c))
}
function od(a, b, c, d) {
  return R(a, R(b, R(c, d)))
}
function pd(a, b, c, d, f) {
  return R(a, R(b, R(c, R(d, kd(f)))))
}
function qd(a, b, c, d, f) {
  var h = m;
  4 < arguments.length && (h = Q(Array.prototype.slice.call(arguments, 4), 0));
  return pd.call(this, a, b, c, d, h)
}
qd.q = 4;
qd.k = function(a) {
  var b = J(a), a = O(a), c = J(a), a = O(a), d = J(a), a = O(a), f = J(a), a = K(a);
  return pd(b, c, d, f, a)
};
qd.j = pd;
md = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 1:
      return I(a);
    case 2:
      return R(a, b);
    case 3:
      return nd.call(this, a, b, c);
    case 4:
      return od.call(this, a, b, c, d);
    default:
      return qd.j(a, b, c, d, Q(arguments, 4))
  }
  e(Error("Invalid arity: " + arguments.length))
};
md.q = 4;
md.k = qd.k;
md.a = function(a) {
  return I(a)
};
md.b = function(a, b) {
  return R(a, b)
};
md.e = nd;
md.p = od;
md.j = qd.j;
ld = md;
function sd(a, b, c) {
  var d = I(c);
  if(0 === b) {
    return a.r ? a.r() : a.call(m)
  }
  var c = C(d), f = E(d);
  if(1 === b) {
    return a.a ? a.a(c) : a.a ? a.a(c) : a.call(m, c)
  }
  var d = C(f), h = E(f);
  if(2 === b) {
    return a.b ? a.b(c, d) : a.b ? a.b(c, d) : a.call(m, c, d)
  }
  var f = C(h), i = E(h);
  if(3 === b) {
    return a.e ? a.e(c, d, f) : a.e ? a.e(c, d, f) : a.call(m, c, d, f)
  }
  var h = C(i), j = E(i);
  if(4 === b) {
    return a.p ? a.p(c, d, f, h) : a.p ? a.p(c, d, f, h) : a.call(m, c, d, f, h)
  }
  i = C(j);
  j = E(j);
  if(5 === b) {
    return a.H ? a.H(c, d, f, h, i) : a.H ? a.H(c, d, f, h, i) : a.call(m, c, d, f, h, i)
  }
  var a = C(j), l = E(j);
  if(6 === b) {
    return a.$ ? a.$(c, d, f, h, i, a) : a.$ ? a.$(c, d, f, h, i, a) : a.call(m, c, d, f, h, i, a)
  }
  var j = C(l), p = E(l);
  if(7 === b) {
    return a.ka ? a.ka(c, d, f, h, i, a, j) : a.ka ? a.ka(c, d, f, h, i, a, j) : a.call(m, c, d, f, h, i, a, j)
  }
  var l = C(p), s = E(p);
  if(8 === b) {
    return a.Pa ? a.Pa(c, d, f, h, i, a, j, l) : a.Pa ? a.Pa(c, d, f, h, i, a, j, l) : a.call(m, c, d, f, h, i, a, j, l)
  }
  var p = C(s), u = E(s);
  if(9 === b) {
    return a.Qa ? a.Qa(c, d, f, h, i, a, j, l, p) : a.Qa ? a.Qa(c, d, f, h, i, a, j, l, p) : a.call(m, c, d, f, h, i, a, j, l, p)
  }
  var s = C(u), A = E(u);
  if(10 === b) {
    return a.Ea ? a.Ea(c, d, f, h, i, a, j, l, p, s) : a.Ea ? a.Ea(c, d, f, h, i, a, j, l, p, s) : a.call(m, c, d, f, h, i, a, j, l, p, s)
  }
  var u = C(A), D = E(A);
  if(11 === b) {
    return a.Fa ? a.Fa(c, d, f, h, i, a, j, l, p, s, u) : a.Fa ? a.Fa(c, d, f, h, i, a, j, l, p, s, u) : a.call(m, c, d, f, h, i, a, j, l, p, s, u)
  }
  var A = C(D), F = E(D);
  if(12 === b) {
    return a.Ga ? a.Ga(c, d, f, h, i, a, j, l, p, s, u, A) : a.Ga ? a.Ga(c, d, f, h, i, a, j, l, p, s, u, A) : a.call(m, c, d, f, h, i, a, j, l, p, s, u, A)
  }
  var D = C(F), L = E(F);
  if(13 === b) {
    return a.Ha ? a.Ha(c, d, f, h, i, a, j, l, p, s, u, A, D) : a.Ha ? a.Ha(c, d, f, h, i, a, j, l, p, s, u, A, D) : a.call(m, c, d, f, h, i, a, j, l, p, s, u, A, D)
  }
  var F = C(L), N = E(L);
  if(14 === b) {
    return a.Ia ? a.Ia(c, d, f, h, i, a, j, l, p, s, u, A, D, F) : a.Ia ? a.Ia(c, d, f, h, i, a, j, l, p, s, u, A, D, F) : a.call(m, c, d, f, h, i, a, j, l, p, s, u, A, D, F)
  }
  var L = C(N), Y = E(N);
  if(15 === b) {
    return a.Ja ? a.Ja(c, d, f, h, i, a, j, l, p, s, u, A, D, F, L) : a.Ja ? a.Ja(c, d, f, h, i, a, j, l, p, s, u, A, D, F, L) : a.call(m, c, d, f, h, i, a, j, l, p, s, u, A, D, F, L)
  }
  var N = C(Y), ia = E(Y);
  if(16 === b) {
    return a.Ka ? a.Ka(c, d, f, h, i, a, j, l, p, s, u, A, D, F, L, N) : a.Ka ? a.Ka(c, d, f, h, i, a, j, l, p, s, u, A, D, F, L, N) : a.call(m, c, d, f, h, i, a, j, l, p, s, u, A, D, F, L, N)
  }
  var Y = C(ia), Ca = E(ia);
  if(17 === b) {
    return a.La ? a.La(c, d, f, h, i, a, j, l, p, s, u, A, D, F, L, N, Y) : a.La ? a.La(c, d, f, h, i, a, j, l, p, s, u, A, D, F, L, N, Y) : a.call(m, c, d, f, h, i, a, j, l, p, s, u, A, D, F, L, N, Y)
  }
  var ia = C(Ca), Tb = E(Ca);
  if(18 === b) {
    return a.Ma ? a.Ma(c, d, f, h, i, a, j, l, p, s, u, A, D, F, L, N, Y, ia) : a.Ma ? a.Ma(c, d, f, h, i, a, j, l, p, s, u, A, D, F, L, N, Y, ia) : a.call(m, c, d, f, h, i, a, j, l, p, s, u, A, D, F, L, N, Y, ia)
  }
  Ca = C(Tb);
  Tb = E(Tb);
  if(19 === b) {
    return a.Na ? a.Na(c, d, f, h, i, a, j, l, p, s, u, A, D, F, L, N, Y, ia, Ca) : a.Na ? a.Na(c, d, f, h, i, a, j, l, p, s, u, A, D, F, L, N, Y, ia, Ca) : a.call(m, c, d, f, h, i, a, j, l, p, s, u, A, D, F, L, N, Y, ia, Ca)
  }
  var rd = C(Tb);
  E(Tb);
  if(20 === b) {
    return a.Oa ? a.Oa(c, d, f, h, i, a, j, l, p, s, u, A, D, F, L, N, Y, ia, Ca, rd) : a.Oa ? a.Oa(c, d, f, h, i, a, j, l, p, s, u, A, D, F, L, N, Y, ia, Ca, rd) : a.call(m, c, d, f, h, i, a, j, l, p, s, u, A, D, F, L, N, Y, ia, Ca, rd)
  }
  e(Error("Only up to 20 arguments supported on functions"))
}
var bc, td = m;
function ud(a, b) {
  var c = a.q;
  if(a.k) {
    var d = id(b, c + 1);
    return d <= c ? sd(a, d, b) : a.k(b)
  }
  return a.apply(a, hd(b))
}
function vd(a, b, c) {
  b = ld.b(b, c);
  c = a.q;
  if(a.k) {
    var d = id(b, c + 1);
    return d <= c ? sd(a, d, b) : a.k(b)
  }
  return a.apply(a, hd(b))
}
function wd(a, b, c, d) {
  b = ld.e(b, c, d);
  c = a.q;
  return a.k ? (d = id(b, c + 1), d <= c ? sd(a, d, b) : a.k(b)) : a.apply(a, hd(b))
}
function xd(a, b, c, d, f) {
  b = ld.p(b, c, d, f);
  c = a.q;
  return a.k ? (d = id(b, c + 1), d <= c ? sd(a, d, b) : a.k(b)) : a.apply(a, hd(b))
}
function yd(a, b, c, d, f, h) {
  b = R(b, R(c, R(d, R(f, kd(h)))));
  c = a.q;
  return a.k ? (d = id(b, c + 1), d <= c ? sd(a, d, b) : a.k(b)) : a.apply(a, hd(b))
}
function zd(a, b, c, d, f, h) {
  var i = m;
  5 < arguments.length && (i = Q(Array.prototype.slice.call(arguments, 5), 0));
  return yd.call(this, a, b, c, d, f, i)
}
zd.q = 5;
zd.k = function(a) {
  var b = J(a), a = O(a), c = J(a), a = O(a), d = J(a), a = O(a), f = J(a), a = O(a), h = J(a), a = K(a);
  return yd(b, c, d, f, h, a)
};
zd.j = yd;
td = function(a, b, c, d, f, h) {
  switch(arguments.length) {
    case 2:
      return ud.call(this, a, b);
    case 3:
      return vd.call(this, a, b, c);
    case 4:
      return wd.call(this, a, b, c, d);
    case 5:
      return xd.call(this, a, b, c, d, f);
    default:
      return zd.j(a, b, c, d, f, Q(arguments, 5))
  }
  e(Error("Invalid arity: " + arguments.length))
};
td.q = 5;
td.k = zd.k;
td.b = ud;
td.e = vd;
td.p = wd;
td.H = xd;
td.j = zd.j;
bc = td;
function Ad(a, b) {
  for(;;) {
    if(I(b) == m) {
      return k
    }
    if(w(a.a ? a.a(J(b)) : a.call(m, J(b)))) {
      var c = a, d = O(b), a = c, b = d
    }else {
      return n
    }
  }
}
function Bd(a) {
  return a
}
var Cd, Dd = m;
function Ed(a, b) {
  function c(a, b, c, f) {
    var p = m;
    3 < arguments.length && (p = Q(Array.prototype.slice.call(arguments, 3), 0));
    return d.call(this, a, b, c, p)
  }
  function d(c, d, f, l) {
    return a.a ? a.a(bc.H(b, c, d, f, l)) : a.call(m, bc.H(b, c, d, f, l))
  }
  var f = m;
  c.q = 3;
  c.k = function(a) {
    var b = J(a), a = O(a), c = J(a), a = O(a), f = J(a), a = K(a);
    return d(b, c, f, a)
  };
  c.j = d;
  f = function(d, f, j, l) {
    switch(arguments.length) {
      case 0:
        return a.a ? a.a(b.r ? b.r() : b.call(m)) : a.call(m, b.r ? b.r() : b.call(m));
      case 1:
        return a.a ? a.a(b.a ? b.a(d) : b.call(m, d)) : a.call(m, b.a ? b.a(d) : b.call(m, d));
      case 2:
        return a.a ? a.a(b.b ? b.b(d, f) : b.call(m, d, f)) : a.call(m, b.b ? b.b(d, f) : b.call(m, d, f));
      case 3:
        return a.a ? a.a(b.e ? b.e(d, f, j) : b.call(m, d, f, j)) : a.call(m, b.e ? b.e(d, f, j) : b.call(m, d, f, j));
      default:
        return c.j(d, f, j, Q(arguments, 3))
    }
    e(Error("Invalid arity: " + arguments.length))
  };
  f.q = 3;
  f.k = c.k;
  return f
}
function Fd(a, b, c) {
  function d(a, b, c, d) {
    var h = m;
    3 < arguments.length && (h = Q(Array.prototype.slice.call(arguments, 3), 0));
    return f.call(this, a, b, c, h)
  }
  function f(d, f, h, p) {
    return a.a ? a.a(b.a ? b.a(bc.H(c, d, f, h, p)) : b.call(m, bc.H(c, d, f, h, p))) : a.call(m, b.a ? b.a(bc.H(c, d, f, h, p)) : b.call(m, bc.H(c, d, f, h, p)))
  }
  var h = m;
  d.q = 3;
  d.k = function(a) {
    var b = J(a), a = O(a), c = J(a), a = O(a), d = J(a), a = K(a);
    return f(b, c, d, a)
  };
  d.j = f;
  h = function(f, h, l, p) {
    switch(arguments.length) {
      case 0:
        return a.a ? a.a(b.a ? b.a(c.r ? c.r() : c.call(m)) : b.call(m, c.r ? c.r() : c.call(m))) : a.call(m, b.a ? b.a(c.r ? c.r() : c.call(m)) : b.call(m, c.r ? c.r() : c.call(m)));
      case 1:
        return a.a ? a.a(b.a ? b.a(c.a ? c.a(f) : c.call(m, f)) : b.call(m, c.a ? c.a(f) : c.call(m, f))) : a.call(m, b.a ? b.a(c.a ? c.a(f) : c.call(m, f)) : b.call(m, c.a ? c.a(f) : c.call(m, f)));
      case 2:
        return a.a ? a.a(b.a ? b.a(c.b ? c.b(f, h) : c.call(m, f, h)) : b.call(m, c.b ? c.b(f, h) : c.call(m, f, h))) : a.call(m, b.a ? b.a(c.b ? c.b(f, h) : c.call(m, f, h)) : b.call(m, c.b ? c.b(f, h) : c.call(m, f, h)));
      case 3:
        return a.a ? a.a(b.a ? b.a(c.e ? c.e(f, h, l) : c.call(m, f, h, l)) : b.call(m, c.e ? c.e(f, h, l) : c.call(m, f, h, l))) : a.call(m, b.a ? b.a(c.e ? c.e(f, h, l) : c.call(m, f, h, l)) : b.call(m, c.e ? c.e(f, h, l) : c.call(m, f, h, l)));
      default:
        return d.j(f, h, l, Q(arguments, 3))
    }
    e(Error("Invalid arity: " + arguments.length))
  };
  h.q = 3;
  h.k = d.k;
  return h
}
function Gd(a, b, c, d) {
  function f(a) {
    var b = m;
    0 < arguments.length && (b = Q(Array.prototype.slice.call(arguments, 0), 0));
    return h.call(this, b)
  }
  function h(a) {
    for(var a = bc.b(J(i), a), b = O(i);;) {
      if(b) {
        a = J(b).call(m, a), b = O(b)
      }else {
        return a
      }
    }
  }
  var i;
  b = (a = ld.p(a, b, c, d)) ? ((b = a.h & 134217728) ? b : a.wb) || (a.h ? 0 : x(Ta, a)) : x(Ta, a);
  i = b ? Ua(a) : xc.e(Hb, M, a);
  f.q = 0;
  f.k = function(a) {
    a = I(a);
    return h(a)
  };
  f.j = h;
  return f
}
function Hd(a, b, c, d) {
  var f = m;
  3 < arguments.length && (f = Q(Array.prototype.slice.call(arguments, 3), 0));
  return Gd.call(this, a, b, c, f)
}
Hd.q = 3;
Hd.k = function(a) {
  var b = J(a), a = O(a), c = J(a), a = O(a), d = J(a), a = K(a);
  return Gd(b, c, d, a)
};
Hd.j = Gd;
Dd = function(a, b, c, d) {
  switch(arguments.length) {
    case 0:
      return Bd;
    case 1:
      return a;
    case 2:
      return Ed.call(this, a, b);
    case 3:
      return Fd.call(this, a, b, c);
    default:
      return Hd.j(a, b, c, Q(arguments, 3))
  }
  e(Error("Invalid arity: " + arguments.length))
};
Dd.q = 3;
Dd.k = Hd.k;
Dd.r = function() {
  return Bd
};
Dd.a = aa();
Dd.b = Ed;
Dd.e = Fd;
Dd.j = Hd.j;
Cd = Dd;
var Id, W = m;
function Jd(a, b) {
  return new $c(m, n, function() {
    var c = I(b);
    if(c) {
      if(kc(c)) {
        for(var d = ab(c), f = Mb(d), h = new ad(Array(f), 0), i = 0;;) {
          if(i < f) {
            var j = a.a ? a.a(B.b(d, i)) : a.call(m, B.b(d, i));
            h.add(j);
            i += 1
          }else {
            break
          }
        }
        d = h.ga();
        c = W.b(a, bb(c));
        return 0 === z(d) ? c : new lc(d, c, m, m)
      }
      return R(a.a ? a.a(J(c)) : a.call(m, J(c)), W.b(a, K(c)))
    }
    return m
  }, m)
}
function Kd(a, b, c) {
  return new $c(m, n, function() {
    var d = I(b), f = I(c);
    return(d ? f : d) ? R(a.b ? a.b(J(d), J(f)) : a.call(m, J(d), J(f)), W.e(a, K(d), K(f))) : m
  }, m)
}
function Ld(a, b, c, d) {
  return new $c(m, n, function() {
    var f = I(b), h = I(c), i = I(d);
    return(f ? h ? i : h : f) ? R(a.e ? a.e(J(f), J(h), J(i)) : a.call(m, J(f), J(h), J(i)), W.p(a, K(f), K(h), K(i))) : m
  }, m)
}
function Md(a, b, c, d, f) {
  return W.b(function(b) {
    return bc.b(a, b)
  }, function i(a) {
    return new $c(m, n, function() {
      var b = W.b(I, a);
      return Ad(Bd, b) ? R(W.b(J, b), i(W.b(K, b))) : m
    }, m)
  }(Hb.j(f, d, Q([c, b], 0))))
}
function Nd(a, b, c, d, f) {
  var h = m;
  4 < arguments.length && (h = Q(Array.prototype.slice.call(arguments, 4), 0));
  return Md.call(this, a, b, c, d, h)
}
Nd.q = 4;
Nd.k = function(a) {
  var b = J(a), a = O(a), c = J(a), a = O(a), d = J(a), a = O(a), f = J(a), a = K(a);
  return Md(b, c, d, f, a)
};
Nd.j = Md;
W = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 2:
      return Jd.call(this, a, b);
    case 3:
      return Kd.call(this, a, b, c);
    case 4:
      return Ld.call(this, a, b, c, d);
    default:
      return Nd.j(a, b, c, d, Q(arguments, 4))
  }
  e(Error("Invalid arity: " + arguments.length))
};
W.q = 4;
W.k = Nd.k;
W.b = Jd;
W.e = Kd;
W.p = Ld;
W.j = Nd.j;
Id = W;
function Od(a, b) {
  var c;
  if(a != m) {
    if(c = a) {
      c = (c = a.t & 4) ? c : a.tb
    }
    c ? (c = xc.e(Xa, Wa(a), b), c = Ya(c)) : c = xc.e(oa, a, b)
  }else {
    c = xc.e(Hb, M, b)
  }
  return c
}
function Pd(a, b) {
  this.o = a;
  this.c = b
}
function Qd(a) {
  a = a.g;
  return 32 > a ? 0 : a - 1 >>> 5 << 5
}
function Rd(a, b, c) {
  for(;;) {
    if(0 === b) {
      return c
    }
    var d = new Pd(a, Array(32));
    d.c[0] = c;
    c = d;
    b -= 5
  }
}
var Td = function Sd(b, c, d, f) {
  var h = new Pd(d.o, d.c.slice()), i = b.g - 1 >>> c & 31;
  5 === c ? h.c[i] = f : (d = d.c[i], b = d != m ? Sd(b, c - 5, d, f) : Rd(m, c - 5, f), h.c[i] = b);
  return h
};
function Ud(a, b) {
  var c = 0 <= b;
  if(c ? b < a.g : c) {
    if(b >= Qd(a)) {
      return a.G
    }
    for(var c = a.root, d = a.shift;;) {
      if(0 < d) {
        var f = d - 5, c = c.c[b >>> d & 31], d = f
      }else {
        return c.c
      }
    }
  }else {
    e(Error([H("No item "), H(b), H(" in vector of length "), H(a.g)].join("")))
  }
}
var Wd = function Vd(b, c, d, f, h) {
  var i = new Pd(d.o, d.c.slice());
  if(0 === c) {
    i.c[f & 31] = h
  }else {
    var j = f >>> c & 31, b = Vd(b, c - 5, d.c[j], f, h);
    i.c[j] = b
  }
  return i
};
function X(a, b, c, d, f, h) {
  this.n = a;
  this.g = b;
  this.shift = c;
  this.root = d;
  this.G = f;
  this.l = h;
  this.t = 4;
  this.h = 167668511
}
t = X.prototype;
t.pa = function() {
  return new Xd(this.g, this.shift, Yd.a ? Yd.a(this.root) : Yd.call(m, this.root), Zd.a ? Zd.a(this.G) : Zd.call(m, this.G))
};
t.I = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = wb(a)
};
t.L = function(a, b) {
  return a.O(a, b, m)
};
t.B = function(a, b, c) {
  return a.O(a, b, c)
};
t.da = function(a, b, c) {
  var d = 0 <= b;
  if(d ? b < this.g : d) {
    return Qd(a) <= b ? (a = this.G.slice(), a[b & 31] = c, new X(this.n, this.g, this.shift, this.root, a, m)) : new X(this.n, this.g, this.shift, Wd(a, this.shift, this.root, b, c), this.G, m)
  }
  if(b === this.g) {
    return a.C(a, c)
  }
  e(Error([H("Index "), H(b), H(" out of bounds  [0,"), H(this.g), H("]")].join("")))
};
var $d = m, $d = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.L(this, b);
    case 3:
      return this.B(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
t = X.prototype;
t.call = $d;
t.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
t.C = function(a, b) {
  if(32 > this.g - Qd(a)) {
    var c = this.G.slice();
    c.push(b);
    return new X(this.n, this.g + 1, this.shift, this.root, c, m)
  }
  var d = this.g >>> 5 > 1 << this.shift, c = d ? this.shift + 5 : this.shift;
  if(d) {
    d = new Pd(m, Array(32));
    d.c[0] = this.root;
    var f = Rd(m, this.shift, new Pd(m, this.G));
    d.c[1] = f
  }else {
    d = Td(a, this.shift, this.root, new Pd(m, this.G))
  }
  return new X(this.n, this.g + 1, c, d, [b], m)
};
t.Ra = function(a) {
  return 0 < this.g ? new xb(a, this.g - 1, m) : M
};
t.Xa = function(a) {
  return a.F(a, 0)
};
t.Ya = function(a) {
  return a.F(a, 1)
};
t.toString = function() {
  return db(this)
};
t.ra = function(a, b) {
  return kb.b(a, b)
};
t.sa = function(a, b, c) {
  return kb.e(a, b, c)
};
t.z = function(a) {
  return 0 === this.g ? m : 32 > this.g ? Q.a(this.G) : Z.e ? Z.e(a, 0, 0) : Z.call(m, a, 0, 0)
};
t.A = q("g");
t.D = function(a, b) {
  return S(a, b)
};
t.K = function(a, b) {
  return new X(b, this.g, this.shift, this.root, this.G, this.l)
};
t.M = q("n");
t.F = function(a, b) {
  return Ud(a, b)[b & 31]
};
t.O = function(a, b, c) {
  var d = 0 <= b;
  return(d ? b < this.g : d) ? a.F(a, b) : c
};
var ae = new Pd(m, Array(32)), be = new X(m, 0, 5, ae, [], 0);
function ce(a) {
  var b = a.length;
  if(32 > b) {
    return new X(m, b, 5, ae, a, m)
  }
  for(var c = a.slice(0, 32), d = 32, f = Wa(new X(m, 32, 5, ae, c, m));;) {
    if(d < b) {
      c = d + 1, f = Xa(f, a[d]), d = c
    }else {
      return Ya(f)
    }
  }
}
function de(a) {
  return Ya(xc.e(Xa, Wa(be), a))
}
function ee(a) {
  var b = m;
  0 < arguments.length && (b = Q(Array.prototype.slice.call(arguments, 0), 0));
  return de(b)
}
ee.q = 0;
ee.k = function(a) {
  a = I(a);
  return de(a)
};
ee.j = function(a) {
  return de(a)
};
function mc(a, b, c, d, f, h) {
  this.U = a;
  this.T = b;
  this.m = c;
  this.w = d;
  this.n = f;
  this.l = h;
  this.h = 31719660;
  this.t = 1536
}
t = mc.prototype;
t.I = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = wb(a)
};
t.ha = function(a) {
  return this.w + 1 < this.T.length ? (a = Z.p ? Z.p(this.U, this.T, this.m, this.w + 1) : Z.call(m, this.U, this.T, this.m, this.w + 1), a == m ? m : a) : a.Wa(a)
};
t.C = function(a, b) {
  return R(b, a)
};
t.toString = function() {
  return db(this)
};
t.z = aa();
t.P = function() {
  return this.T[this.w]
};
t.Q = function(a) {
  return this.w + 1 < this.T.length ? (a = Z.p ? Z.p(this.U, this.T, this.m, this.w + 1) : Z.call(m, this.U, this.T, this.m, this.w + 1), a == m ? M : a) : a.xa(a)
};
t.Wa = function() {
  var a = this.T.length, a = this.m + a < z(this.U) ? Z.e ? Z.e(this.U, this.m + a, 0) : Z.call(m, this.U, this.m + a, 0) : m;
  return a == m ? m : a
};
t.D = function(a, b) {
  return S(a, b)
};
t.K = function(a, b) {
  return Z.H ? Z.H(this.U, this.T, this.m, this.w, b) : Z.call(m, this.U, this.T, this.m, this.w, b)
};
t.Ca = function() {
  return cd.b(this.T, this.w)
};
t.xa = function() {
  var a = this.T.length, a = this.m + a < z(this.U) ? Z.e ? Z.e(this.U, this.m + a, 0) : Z.call(m, this.U, this.m + a, 0) : m;
  return a == m ? M : a
};
var Z, fe = m;
function ge(a, b, c) {
  return new mc(a, Ud(a, b), b, c, m, m)
}
function he(a, b, c, d) {
  return new mc(a, b, c, d, m, m)
}
function ie(a, b, c, d, f) {
  return new mc(a, b, c, d, f, m)
}
fe = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 3:
      return ge.call(this, a, b, c);
    case 4:
      return he.call(this, a, b, c, d);
    case 5:
      return ie.call(this, a, b, c, d, f)
  }
  e(Error("Invalid arity: " + arguments.length))
};
fe.e = ge;
fe.p = he;
fe.H = ie;
Z = fe;
function Yd(a) {
  return new Pd({}, a.c.slice())
}
function Zd(a) {
  var b = Array(32);
  nc(a, 0, b, 0, a.length);
  return b
}
var ke = function je(b, c, d, f) {
  var d = b.root.o === d.o ? d : new Pd(b.root.o, d.c.slice()), h = b.g - 1 >>> c & 31;
  if(5 === c) {
    b = f
  }else {
    var i = d.c[h], b = i != m ? je(b, c - 5, i, f) : Rd(b.root.o, c - 5, f)
  }
  d.c[h] = b;
  return d
};
function Xd(a, b, c, d) {
  this.g = a;
  this.shift = b;
  this.root = c;
  this.G = d;
  this.h = 275;
  this.t = 88
}
var le = m, le = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.L(this, b);
    case 3:
      return this.B(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
t = Xd.prototype;
t.call = le;
t.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
t.L = function(a, b) {
  return a.O(a, b, m)
};
t.B = function(a, b, c) {
  return a.O(a, b, c)
};
t.F = function(a, b) {
  if(this.root.o) {
    return Ud(a, b)[b & 31]
  }
  e(Error("nth after persistent!"))
};
t.O = function(a, b, c) {
  var d = 0 <= b;
  return(d ? b < this.g : d) ? a.F(a, b) : c
};
t.A = function() {
  if(this.root.o) {
    return this.g
  }
  e(Error("count after persistent!"))
};
t.la = function(a, b, c) {
  var d;
  a: {
    if(a.root.o) {
      var f = 0 <= b;
      if(f ? b < a.g : f) {
        Qd(a) <= b ? a.G[b & 31] = c : (d = function i(d, f) {
          var p = a.root.o === f.o ? f : new Pd(a.root.o, f.c.slice());
          if(0 === d) {
            p.c[b & 31] = c
          }else {
            var s = b >>> d & 31, u = i(d - 5, p.c[s]);
            p.c[s] = u
          }
          return p
        }.call(m, a.shift, a.root), a.root = d);
        d = a;
        break a
      }
      if(b === a.g) {
        d = a.ua(a, c);
        break a
      }
      e(Error([H("Index "), H(b), H(" out of bounds for TransientVector of length"), H(a.g)].join("")))
    }
    e(Error("assoc! after persistent!"))
  }
  return d
};
t.ua = function(a, b) {
  if(this.root.o) {
    if(32 > this.g - Qd(a)) {
      this.G[this.g & 31] = b
    }else {
      var c = new Pd(this.root.o, this.G), d = Array(32);
      d[0] = b;
      this.G = d;
      if(this.g >>> 5 > 1 << this.shift) {
        var d = Array(32), f = this.shift + 5;
        d[0] = this.root;
        d[1] = Rd(this.root.o, this.shift, c);
        this.root = new Pd(this.root.o, d);
        this.shift = f
      }else {
        this.root = ke(a, this.shift, this.root, c)
      }
    }
    this.g += 1;
    return a
  }
  e(Error("conj! after persistent!"))
};
t.ya = function(a) {
  if(this.root.o) {
    this.root.o = m;
    var a = this.g - Qd(a), b = Array(a);
    nc(this.G, 0, b, 0, a);
    return new X(m, this.g, this.shift, this.root, b, m)
  }
  e(Error("persistent! called twice"))
};
function me() {
  this.t = 0;
  this.h = 2097152
}
me.prototype.D = r(n);
var ne = new me;
function oe(a, b) {
  var c;
  c = b == m ? 0 : b ? ((c = b.h & 1024) ? c : b.ub) || (b.h ? 0 : x(za, b)) : x(za, b);
  c = c ? Mb(a) === Mb(b) ? Ad(Bd, Id.b(function(a) {
    return P.b(Wb.e(b, J(a), ne), Gb(a))
  }, a)) : m : m;
  return w(c) ? k : n
}
function pe(a, b) {
  for(var c = b.length, d = 0;;) {
    if(d < c) {
      if(a === b[d]) {
        return d
      }
      d += 1
    }else {
      return m
    }
  }
}
function qe(a, b) {
  var c = T.a(a), d = T.a(b);
  return c < d ? -1 : c > d ? 1 : 0
}
function re(a, b, c) {
  for(var d = a.keys, f = d.length, h = a.ja, a = dc(a), i = 0, j = Wa(se);;) {
    if(i < f) {
      var l = d[i], i = i + 1, j = Za(j, l, h[l])
    }else {
      return d = cc, b = Za(j, b, c), b = Ya(b), d(b, a)
    }
  }
}
function te(a, b) {
  for(var c = {}, d = b.length, f = 0;;) {
    if(f < d) {
      var h = b[f];
      c[h] = a[h];
      f += 1
    }else {
      break
    }
  }
  return c
}
function ue(a, b, c, d, f) {
  this.n = a;
  this.keys = b;
  this.ja = c;
  this.za = d;
  this.l = f;
  this.t = 4;
  this.h = 16123663
}
t = ue.prototype;
t.pa = function(a) {
  a = Od(ve.r ? ve.r() : ve.call(m), a);
  return Wa(a)
};
t.I = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = Qc(a)
};
t.L = function(a, b) {
  return a.B(a, b, m)
};
t.B = function(a, b, c) {
  return((a = da(b)) ? pe(b, this.keys) != m : a) ? this.ja[b] : c
};
t.da = function(a, b, c) {
  if(da(b)) {
    var d = this.za > we;
    if(d ? d : this.keys.length >= we) {
      return re(a, b, c)
    }
    if(pe(b, this.keys) != m) {
      return a = te(this.ja, this.keys), a[b] = c, new ue(this.n, this.keys, a, this.za + 1, m)
    }
    a = te(this.ja, this.keys);
    d = this.keys.slice();
    a[b] = c;
    d.push(b);
    return new ue(this.n, d, a, this.za + 1, m)
  }
  return re(a, b, c)
};
var xe = m, xe = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.L(this, b);
    case 3:
      return this.B(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
t = ue.prototype;
t.call = xe;
t.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
t.C = function(a, b) {
  return jc(b) ? a.da(a, B.b(b, 0), B.b(b, 1)) : xc.e(oa, a, b)
};
t.toString = function() {
  return db(this)
};
t.z = function() {
  var a = this;
  return 0 < a.keys.length ? Id.b(function(b) {
    return ee.j(Q([b, a.ja[b]], 0))
  }, a.keys.sort(qe)) : m
};
t.A = function() {
  return this.keys.length
};
t.D = function(a, b) {
  return oe(a, b)
};
t.K = function(a, b) {
  return new ue(b, this.keys, this.ja, this.za, this.l)
};
t.M = q("n");
var ye = new ue(m, [], {}, 0, 0), we = 8;
function ze(a, b) {
  var c = a.c, d = da(b);
  if(d ? d : "number" === typeof b) {
    a: {
      for(var d = c.length, f = 0;;) {
        if(d <= f) {
          c = -1;
          break a
        }
        if(b === c[f]) {
          c = f;
          break a
        }
        f += 2
      }
      c = g
    }
  }else {
    if(n) {
      a: {
        for(var d = c.length, f = b.rb, h = 0;;) {
          if(d <= h) {
            c = -1;
            break a
          }
          var i = c[h], j = n;
          if(j ? f === i.rb : j) {
            c = h;
            break a
          }
          h += 2
        }
        c = g
      }
    }else {
      if(b == m) {
        a: {
          d = c.length;
          for(f = 0;;) {
            if(d <= f) {
              c = -1;
              break a
            }
            if(c[f] == m) {
              c = f;
              break a
            }
            f += 2
          }
          c = g
        }
      }else {
        a: {
          d = c.length;
          for(f = 0;;) {
            if(d <= f) {
              c = -1;
              break a
            }
            if(P.b(b, c[f])) {
              c = f;
              break a
            }
            f += 2
          }
          c = g
        }
      }
    }
  }
  return c
}
function Ae(a, b, c, d) {
  this.n = a;
  this.g = b;
  this.c = c;
  this.l = d;
  this.t = 4;
  this.h = 16123663
}
t = Ae.prototype;
t.pa = function() {
  return new Be({}, this.c.length, this.c.slice())
};
t.I = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = Qc(a)
};
t.L = function(a, b) {
  return a.B(a, b, m)
};
t.B = function(a, b, c) {
  a = ze(a, b);
  return-1 === a ? c : this.c[a + 1]
};
t.da = function(a, b, c) {
  var d = ze(a, b);
  if(-1 === d) {
    if(this.g < Ce) {
      for(var d = a.c, a = d.length, f = Array(a + 2), h = 0;;) {
        if(h < a) {
          f[h] = d[h], h += 1
        }else {
          break
        }
      }
      f[a] = b;
      f[a + 1] = c;
      return new Ae(this.n, this.g + 1, f, m)
    }
    return Ia(ya(Od(se, a), b, c), this.n)
  }
  if(c === this.c[d + 1]) {
    return a
  }
  b = this.c.slice();
  b[d + 1] = c;
  return new Ae(this.n, this.g, b, m)
};
var De = m, De = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.L(this, b);
    case 3:
      return this.B(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
t = Ae.prototype;
t.call = De;
t.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
t.C = function(a, b) {
  return jc(b) ? a.da(a, B.b(b, 0), B.b(b, 1)) : xc.e(oa, a, b)
};
t.toString = function() {
  return db(this)
};
t.z = function() {
  var a = this, b;
  if(0 < a.g) {
    var c = a.c.length;
    b = function f(b) {
      return new $c(m, n, function() {
        return b < c ? R(ce([a.c[b], a.c[b + 1]]), f(b + 2)) : m
      }, m)
    }(0)
  }else {
    b = m
  }
  return b
};
t.A = q("g");
t.D = function(a, b) {
  return oe(a, b)
};
t.K = function(a, b) {
  return new Ae(b, this.g, this.c, this.l)
};
t.M = q("n");
var Ce = 8;
function eb(a) {
  return new Ae(m, a.length / 2, a, m)
}
function Be(a, b, c) {
  this.ma = a;
  this.ba = b;
  this.c = c;
  this.t = 56;
  this.h = 258
}
t = Be.prototype;
t.la = function(a, b, c) {
  if(w(this.ma)) {
    var d = ze(a, b);
    if(-1 === d) {
      if(this.ba + 2 <= 2 * Ce) {
        return this.ba += 2, this.c.push(b), this.c.push(c), a
      }
      a = Ee.b ? Ee.b(this.ba, this.c) : Ee.call(m, this.ba, this.c);
      return Za(a, b, c)
    }
    c !== this.c[d + 1] && (this.c[d + 1] = c);
    return a
  }
  e(Error("assoc! after persistent!"))
};
t.ua = function(a, b) {
  if(w(this.ma)) {
    var c;
    c = b ? ((c = b.h & 2048) ? c : b.gb) || (b.h ? 0 : x(Aa, b)) : x(Aa, b);
    if(c) {
      return a.la(a, U.a ? U.a(b) : U.call(m, b), V.a ? V.a(b) : V.call(m, b))
    }
    c = I(b);
    for(var d = a;;) {
      var f = J(c);
      if(w(f)) {
        c = O(c), d = d.la(d, U.a ? U.a(f) : U.call(m, f), V.a ? V.a(f) : V.call(m, f))
      }else {
        return d
      }
    }
  }else {
    e(Error("conj! after persistent!"))
  }
};
t.ya = function() {
  if(w(this.ma)) {
    return this.ma = n, new Ae(m, Cc((this.ba - this.ba % 2) / 2), this.c, m)
  }
  e(Error("persistent! called twice"))
};
t.L = function(a, b) {
  return a.B(a, b, m)
};
t.B = function(a, b, c) {
  if(w(this.ma)) {
    return a = ze(a, b), -1 === a ? c : this.c[a + 1]
  }
  e(Error("lookup after persistent!"))
};
t.A = function() {
  if(w(this.ma)) {
    return Cc((this.ba - this.ba % 2) / 2)
  }
  e(Error("count after persistent!"))
};
function Ee(a, b) {
  for(var c = Wa(ye), d = 0;;) {
    if(d < a) {
      c = Za(c, b[d], b[d + 1]), d += 2
    }else {
      return c
    }
  }
}
function Fe() {
  this.Z = n
}
function Ge(a, b) {
  return da(a) ? a === b : P.b(a, b)
}
var He, Ie = m;
function Je(a, b, c) {
  a = a.slice();
  a[b] = c;
  return a
}
function Ke(a, b, c, d, f) {
  a = a.slice();
  a[b] = c;
  a[d] = f;
  return a
}
Ie = function(a, b, c, d, f) {
  switch(arguments.length) {
    case 3:
      return Je.call(this, a, b, c);
    case 5:
      return Ke.call(this, a, b, c, d, f)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Ie.e = Je;
Ie.H = Ke;
He = Ie;
var Le, Me = m;
function Ne(a, b, c, d) {
  a = a.na(b);
  a.c[c] = d;
  return a
}
function Oe(a, b, c, d, f, h) {
  a = a.na(b);
  a.c[c] = d;
  a.c[f] = h;
  return a
}
Me = function(a, b, c, d, f, h) {
  switch(arguments.length) {
    case 4:
      return Ne.call(this, a, b, c, d);
    case 6:
      return Oe.call(this, a, b, c, d, f, h)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Me.p = Ne;
Me.$ = Oe;
Le = Me;
function Pe(a, b, c) {
  this.o = a;
  this.v = b;
  this.c = c
}
t = Pe.prototype;
t.W = function(a, b, c, d, f, h) {
  var i = 1 << (c >>> b & 31), j = Dc(this.v & i - 1);
  if(0 === (this.v & i)) {
    var l = Dc(this.v);
    if(2 * l < this.c.length) {
      a = this.na(a);
      b = a.c;
      h.Z = k;
      a: {
        c = 2 * (l - j);
        h = 2 * j + (c - 1);
        for(l = 2 * (j + 1) + (c - 1);;) {
          if(0 === c) {
            break a
          }
          b[l] = b[h];
          l -= 1;
          c -= 1;
          h -= 1
        }
      }
      b[2 * j] = d;
      b[2 * j + 1] = f;
      a.v |= i;
      return a
    }
    if(16 <= l) {
      j = Array(32);
      j[c >>> b & 31] = Qe.W(a, b + 5, c, d, f, h);
      for(f = d = 0;;) {
        if(32 > d) {
          0 !== (this.v >>> d & 1) && (j[d] = this.c[f] != m ? Qe.W(a, b + 5, T.a(this.c[f]), this.c[f], this.c[f + 1], h) : this.c[f + 1], f += 2), d += 1
        }else {
          break
        }
      }
      return new Re(a, l + 1, j)
    }
    b = Array(2 * (l + 4));
    nc(this.c, 0, b, 0, 2 * j);
    b[2 * j] = d;
    b[2 * j + 1] = f;
    nc(this.c, 2 * j, b, 2 * (j + 1), 2 * (l - j));
    h.Z = k;
    a = this.na(a);
    a.c = b;
    a.v |= i;
    return a
  }
  l = this.c[2 * j];
  i = this.c[2 * j + 1];
  if(l == m) {
    return l = i.W(a, b + 5, c, d, f, h), l === i ? this : Le.p(this, a, 2 * j + 1, l)
  }
  if(Ge(d, l)) {
    return f === i ? this : Le.p(this, a, 2 * j + 1, f)
  }
  h.Z = k;
  return Le.$(this, a, 2 * j, m, 2 * j + 1, Se.ka ? Se.ka(a, b + 5, l, i, c, d, f) : Se.call(m, a, b + 5, l, i, c, d, f))
};
t.wa = function() {
  return Te.a ? Te.a(this.c) : Te.call(m, this.c)
};
t.na = function(a) {
  if(a === this.o) {
    return this
  }
  var b = Dc(this.v), c = Array(0 > b ? 4 : 2 * (b + 1));
  nc(this.c, 0, c, 0, 2 * b);
  return new Pe(a, this.v, c)
};
t.V = function(a, b, c, d, f) {
  var h = 1 << (b >>> a & 31), i = Dc(this.v & h - 1);
  if(0 === (this.v & h)) {
    var j = Dc(this.v);
    if(16 <= j) {
      i = Array(32);
      i[b >>> a & 31] = Qe.V(a + 5, b, c, d, f);
      for(d = c = 0;;) {
        if(32 > c) {
          0 !== (this.v >>> c & 1) && (i[c] = this.c[d] != m ? Qe.V(a + 5, T.a(this.c[d]), this.c[d], this.c[d + 1], f) : this.c[d + 1], d += 2), c += 1
        }else {
          break
        }
      }
      return new Re(m, j + 1, i)
    }
    a = Array(2 * (j + 1));
    nc(this.c, 0, a, 0, 2 * i);
    a[2 * i] = c;
    a[2 * i + 1] = d;
    nc(this.c, 2 * i, a, 2 * (i + 1), 2 * (j - i));
    f.Z = k;
    return new Pe(m, this.v | h, a)
  }
  j = this.c[2 * i];
  h = this.c[2 * i + 1];
  if(j == m) {
    return j = h.V(a + 5, b, c, d, f), j === h ? this : new Pe(m, this.v, He.e(this.c, 2 * i + 1, j))
  }
  if(Ge(c, j)) {
    return d === h ? this : new Pe(m, this.v, He.e(this.c, 2 * i + 1, d))
  }
  f.Z = k;
  return new Pe(m, this.v, He.H(this.c, 2 * i, m, 2 * i + 1, Se.$ ? Se.$(a + 5, j, h, b, c, d) : Se.call(m, a + 5, j, h, b, c, d)))
};
t.ia = function(a, b, c, d) {
  var f = 1 << (b >>> a & 31);
  if(0 === (this.v & f)) {
    return d
  }
  var h = Dc(this.v & f - 1), f = this.c[2 * h], h = this.c[2 * h + 1];
  return f == m ? h.ia(a + 5, b, c, d) : Ge(c, f) ? h : d
};
var Qe = new Pe(m, 0, []);
function Re(a, b, c) {
  this.o = a;
  this.g = b;
  this.c = c
}
t = Re.prototype;
t.W = function(a, b, c, d, f, h) {
  var i = c >>> b & 31, j = this.c[i];
  if(j == m) {
    return a = Le.p(this, a, i, Qe.W(a, b + 5, c, d, f, h)), a.g += 1, a
  }
  b = j.W(a, b + 5, c, d, f, h);
  return b === j ? this : Le.p(this, a, i, b)
};
t.wa = function() {
  return Ue.a ? Ue.a(this.c) : Ue.call(m, this.c)
};
t.na = function(a) {
  return a === this.o ? this : new Re(a, this.g, this.c.slice())
};
t.V = function(a, b, c, d, f) {
  var h = b >>> a & 31, i = this.c[h];
  if(i == m) {
    return new Re(m, this.g + 1, He.e(this.c, h, Qe.V(a + 5, b, c, d, f)))
  }
  a = i.V(a + 5, b, c, d, f);
  return a === i ? this : new Re(m, this.g, He.e(this.c, h, a))
};
t.ia = function(a, b, c, d) {
  var f = this.c[b >>> a & 31];
  return f != m ? f.ia(a + 5, b, c, d) : d
};
function Ve(a, b, c) {
  for(var b = 2 * b, d = 0;;) {
    if(d < b) {
      if(Ge(c, a[d])) {
        return d
      }
      d += 2
    }else {
      return-1
    }
  }
}
function We(a, b, c, d) {
  this.o = a;
  this.ea = b;
  this.g = c;
  this.c = d
}
t = We.prototype;
t.W = function(a, b, c, d, f, h) {
  if(c === this.ea) {
    b = Ve(this.c, this.g, d);
    if(-1 === b) {
      if(this.c.length > 2 * this.g) {
        return a = Le.$(this, a, 2 * this.g, d, 2 * this.g + 1, f), h.Z = k, a.g += 1, a
      }
      c = this.c.length;
      b = Array(c + 2);
      nc(this.c, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = f;
      h.Z = k;
      h = this.g + 1;
      a === this.o ? (this.c = b, this.g = h, a = this) : a = new We(this.o, this.ea, h, b);
      return a
    }
    return this.c[b + 1] === f ? this : Le.p(this, a, b + 1, f)
  }
  return(new Pe(a, 1 << (this.ea >>> b & 31), [m, this, m, m])).W(a, b, c, d, f, h)
};
t.wa = function() {
  return Te.a ? Te.a(this.c) : Te.call(m, this.c)
};
t.na = function(a) {
  if(a === this.o) {
    return this
  }
  var b = Array(2 * (this.g + 1));
  nc(this.c, 0, b, 0, 2 * this.g);
  return new We(a, this.ea, this.g, b)
};
t.V = function(a, b, c, d, f) {
  return b === this.ea ? (a = Ve(this.c, this.g, c), -1 === a ? (a = this.c.length, b = Array(a + 2), nc(this.c, 0, b, 0, a), b[a] = c, b[a + 1] = d, f.Z = k, new We(m, this.ea, this.g + 1, b)) : P.b(this.c[a], d) ? this : new We(m, this.ea, this.g, He.e(this.c, a + 1, d))) : (new Pe(m, 1 << (this.ea >>> a & 31), [m, this])).V(a, b, c, d, f)
};
t.ia = function(a, b, c, d) {
  a = Ve(this.c, this.g, c);
  return 0 > a ? d : Ge(c, this.c[a]) ? this.c[a + 1] : d
};
var Se, Xe = m;
function Ye(a, b, c, d, f, h) {
  var i = T.a(b);
  if(i === d) {
    return new We(m, i, 2, [b, c, f, h])
  }
  var j = new Fe;
  return Qe.V(a, i, b, c, j).V(a, d, f, h, j)
}
function Ze(a, b, c, d, f, h, i) {
  var j = T.a(c);
  if(j === f) {
    return new We(m, j, 2, [c, d, h, i])
  }
  var l = new Fe;
  return Qe.W(a, b, j, c, d, l).W(a, b, f, h, i, l)
}
Xe = function(a, b, c, d, f, h, i) {
  switch(arguments.length) {
    case 6:
      return Ye.call(this, a, b, c, d, f, h);
    case 7:
      return Ze.call(this, a, b, c, d, f, h, i)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Xe.$ = Ye;
Xe.ka = Ze;
Se = Xe;
function $e(a, b, c, d, f) {
  this.n = a;
  this.X = b;
  this.m = c;
  this.Y = d;
  this.l = f;
  this.t = 0;
  this.h = 31850572
}
t = $e.prototype;
t.I = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = wb(a)
};
t.C = function(a, b) {
  return R(b, a)
};
t.toString = function() {
  return db(this)
};
t.z = aa();
t.P = function() {
  return this.Y == m ? ce([this.X[this.m], this.X[this.m + 1]]) : J(this.Y)
};
t.Q = function() {
  return this.Y == m ? Te.e ? Te.e(this.X, this.m + 2, m) : Te.call(m, this.X, this.m + 2, m) : Te.e ? Te.e(this.X, this.m, O(this.Y)) : Te.call(m, this.X, this.m, O(this.Y))
};
t.D = function(a, b) {
  return S(a, b)
};
t.K = function(a, b) {
  return new $e(b, this.X, this.m, this.Y, this.l)
};
t.M = q("n");
var Te, af = m;
function bf(a) {
  return af.e(a, 0, m)
}
function cf(a, b, c) {
  if(c == m) {
    for(c = a.length;;) {
      if(b < c) {
        if(a[b] != m) {
          return new $e(m, a, b, m, m)
        }
        var d = a[b + 1];
        if(w(d) && (d = d.wa(), w(d))) {
          return new $e(m, a, b + 2, d, m)
        }
        b += 2
      }else {
        return m
      }
    }
  }else {
    return new $e(m, a, b, c, m)
  }
}
af = function(a, b, c) {
  switch(arguments.length) {
    case 1:
      return bf.call(this, a);
    case 3:
      return cf.call(this, a, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
af.a = bf;
af.e = cf;
Te = af;
function df(a, b, c, d, f) {
  this.n = a;
  this.X = b;
  this.m = c;
  this.Y = d;
  this.l = f;
  this.t = 0;
  this.h = 31850572
}
t = df.prototype;
t.I = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = wb(a)
};
t.C = function(a, b) {
  return R(b, a)
};
t.toString = function() {
  return db(this)
};
t.z = aa();
t.P = function() {
  return J(this.Y)
};
t.Q = function() {
  return Ue.p ? Ue.p(m, this.X, this.m, O(this.Y)) : Ue.call(m, m, this.X, this.m, O(this.Y))
};
t.D = function(a, b) {
  return S(a, b)
};
t.K = function(a, b) {
  return new df(b, this.X, this.m, this.Y, this.l)
};
t.M = q("n");
var Ue, ef = m;
function ff(a) {
  return ef.p(m, a, 0, m)
}
function gf(a, b, c, d) {
  if(d == m) {
    for(d = b.length;;) {
      if(c < d) {
        var f = b[c];
        if(w(f) && (f = f.wa(), w(f))) {
          return new df(a, b, c + 1, f, m)
        }
        c += 1
      }else {
        return m
      }
    }
  }else {
    return new df(a, b, c, d, m)
  }
}
ef = function(a, b, c, d) {
  switch(arguments.length) {
    case 1:
      return ff.call(this, a);
    case 4:
      return gf.call(this, a, b, c, d)
  }
  e(Error("Invalid arity: " + arguments.length))
};
ef.a = ff;
ef.p = gf;
Ue = ef;
function hf(a, b, c, d, f, h) {
  this.n = a;
  this.g = b;
  this.root = c;
  this.R = d;
  this.S = f;
  this.l = h;
  this.t = 4;
  this.h = 16123663
}
t = hf.prototype;
t.pa = function() {
  return new jf({}, this.root, this.g, this.R, this.S)
};
t.I = function(a) {
  var b = this.l;
  return b != m ? b : this.l = a = Qc(a)
};
t.L = function(a, b) {
  return a.B(a, b, m)
};
t.B = function(a, b, c) {
  return b == m ? this.R ? this.S : c : this.root == m ? c : this.root.ia(0, T.a(b), b, c)
};
t.da = function(a, b, c) {
  if(b == m) {
    var d = this.R;
    return(d ? c === this.S : d) ? a : new hf(this.n, this.R ? this.g : this.g + 1, this.root, k, c, m)
  }
  d = new Fe;
  c = (this.root == m ? Qe : this.root).V(0, T.a(b), b, c, d);
  return c === this.root ? a : new hf(this.n, d.Z ? this.g + 1 : this.g, c, this.R, this.S, m)
};
var kf = m, kf = function(a, b, c) {
  switch(arguments.length) {
    case 2:
      return this.L(this, b);
    case 3:
      return this.B(this, b, c)
  }
  e(Error("Invalid arity: " + arguments.length))
};
t = hf.prototype;
t.call = kf;
t.apply = function(a, b) {
  a = this;
  return a.call.apply(a, [a].concat(b.slice()))
};
t.C = function(a, b) {
  return jc(b) ? a.da(a, B.b(b, 0), B.b(b, 1)) : xc.e(oa, a, b)
};
t.toString = function() {
  return db(this)
};
t.z = function() {
  if(0 < this.g) {
    var a = this.root != m ? this.root.wa() : m;
    return this.R ? R(ce([m, this.S]), a) : a
  }
  return m
};
t.A = q("g");
t.D = function(a, b) {
  return oe(a, b)
};
t.K = function(a, b) {
  return new hf(b, this.g, this.root, this.R, this.S, this.l)
};
t.M = q("n");
var se = new hf(m, 0, m, n, m, 0);
function jf(a, b, c, d, f) {
  this.o = a;
  this.root = b;
  this.count = c;
  this.R = d;
  this.S = f;
  this.t = 56;
  this.h = 258
}
t = jf.prototype;
t.la = function(a, b, c) {
  return lf(a, b, c)
};
t.ua = function(a, b) {
  var c;
  a: {
    if(a.o) {
      c = b ? ((c = b.h & 2048) ? c : b.gb) || (b.h ? 0 : x(Aa, b)) : x(Aa, b);
      if(c) {
        c = lf(a, U.a ? U.a(b) : U.call(m, b), V.a ? V.a(b) : V.call(m, b));
        break a
      }
      c = I(b);
      for(var d = a;;) {
        var f = J(c);
        if(w(f)) {
          c = O(c), d = lf(d, U.a ? U.a(f) : U.call(m, f), V.a ? V.a(f) : V.call(m, f))
        }else {
          c = d;
          break a
        }
      }
    }else {
      e(Error("conj! after persistent"))
    }
    c = g
  }
  return c
};
t.ya = function(a) {
  var b;
  a.o ? (a.o = m, b = new hf(m, a.count, a.root, a.R, a.S, m)) : e(Error("persistent! called twice"));
  return b
};
t.L = function(a, b) {
  return b == m ? this.R ? this.S : m : this.root == m ? m : this.root.ia(0, T.a(b), b)
};
t.B = function(a, b, c) {
  return b == m ? this.R ? this.S : c : this.root == m ? c : this.root.ia(0, T.a(b), b, c)
};
t.A = function() {
  if(this.o) {
    return this.count
  }
  e(Error("count after persistent!"))
};
function lf(a, b, c) {
  if(a.o) {
    if(b == m) {
      a.S !== c && (a.S = c), a.R || (a.count += 1, a.R = k)
    }else {
      var d = new Fe, b = (a.root == m ? Qe : a.root).W(a.o, 0, T.a(b), b, c, d);
      b !== a.root && (a.root = b);
      d.Z && (a.count += 1)
    }
    return a
  }
  e(Error("assoc! after persistent!"))
}
var ve;
function mf(a) {
  for(var b = I(a), c = Wa(se);;) {
    if(b) {
      var a = O(O(b)), d = J(b), b = Gb(b), c = Za(c, d, b), b = a
    }else {
      return Ya(c)
    }
  }
}
function nf(a) {
  var b = m;
  0 < arguments.length && (b = Q(Array.prototype.slice.call(arguments, 0), 0));
  return mf.call(this, b)
}
nf.q = 0;
nf.k = function(a) {
  a = I(a);
  return mf(a)
};
nf.j = mf;
ve = nf;
function U(a) {
  return Ba(a)
}
function V(a) {
  return Da(a)
}
function of(a) {
  if(a && w(w(m) ? m : a.ib)) {
    return a.name
  }
  if(la(a)) {
    return a
  }
  if(oc(a)) {
    var b = a.lastIndexOf("/", a.length - 2);
    return 0 > b ? Nc.b(a, 2) : Nc.b(a, b + 1)
  }
  e(Error([H("Doesn't support name: "), H(a)].join("")))
}
function pf(a) {
  if(a && w(w(m) ? m : a.ib)) {
    return a.Bb
  }
  if(oc(a)) {
    var b = a.lastIndexOf("/", a.length - 2);
    return-1 < b ? Nc.e(a, 2, b) : m
  }
  e(Error([H("Doesn't support namespace: "), H(a)].join("")))
}
var qf, rf = m;
function sf(a) {
  for(;;) {
    if(I(a)) {
      a = O(a)
    }else {
      return m
    }
  }
}
function tf(a, b) {
  for(;;) {
    var c = I(b);
    if(w(c ? 0 < a : c)) {
      var c = a - 1, d = O(b), a = c, b = d
    }else {
      return m
    }
  }
}
rf = function(a, b) {
  switch(arguments.length) {
    case 1:
      return sf.call(this, a);
    case 2:
      return tf.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
rf.a = sf;
rf.b = tf;
qf = rf;
var uf, vf = m;
function wf(a) {
  qf.a(a);
  return a
}
function xf(a, b) {
  qf.b(a, b);
  return b
}
vf = function(a, b) {
  switch(arguments.length) {
    case 1:
      return wf.call(this, a);
    case 2:
      return xf.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
vf.a = wf;
vf.b = xf;
uf = vf;
function yf(a, b) {
  var c = a.exec(b);
  return c == m ? m : 1 === Mb(c) ? J(c) : de(c)
}
function $(a, b, c, d, f, h, i) {
  G(a, c);
  I(i) && (b.e ? b.e(J(i), a, h) : b.call(m, J(i), a, h));
  for(var c = I(O(i)), i = m, j = 0, l = 0;;) {
    if(l < j) {
      var p = i.F(i, l);
      G(a, d);
      b.e ? b.e(p, a, h) : b.call(m, p, a, h);
      l += 1
    }else {
      if(c = I(c)) {
        i = c, kc(i) ? (c = ab(i), l = bb(i), i = c, j = Mb(c), c = l) : (c = J(i), G(a, d), b.e ? b.e(c, a, h) : b.call(m, c, a, h), c = O(i), i = m, j = 0), l = 0
      }else {
        break
      }
    }
  }
  return G(a, f)
}
function zf(a, b) {
  for(var c = I(b), d = m, f = 0, h = 0;;) {
    if(h < f) {
      var i = d.F(d, h);
      G(a, i);
      h += 1
    }else {
      if(c = I(c)) {
        d = c, kc(d) ? (c = ab(d), f = bb(d), d = c, i = Mb(c), c = f, f = i) : (i = J(d), G(a, i), c = O(d), d = m, f = 0), h = 0
      }else {
        return m
      }
    }
  }
}
function Af(a, b) {
  var c = m;
  1 < arguments.length && (c = Q(Array.prototype.slice.call(arguments, 1), 0));
  return zf.call(this, a, c)
}
Af.q = 1;
Af.k = function(a) {
  var b = J(a), a = K(a);
  return zf(b, a)
};
Af.j = zf;
var Bf = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"}, Df = function Cf(b, c, d) {
  if(b == m) {
    return G(c, "nil")
  }
  if(g === b) {
    return G(c, "#<undefined>")
  }
  var f;
  f = Wb.b(d, "\ufdd0:meta");
  w(f) && (f = b ? ((f = b.h & 131072) ? f : b.hb) ? k : b.h ? n : x(Fa, b) : x(Fa, b), f = w(f) ? dc(b) : f);
  w(f) && (G(c, "^"), Cf(dc(b), c, d), G(c, " "));
  if(b == m) {
    return G(c, "nil")
  }
  if(b.ab) {
    return b.lb(c)
  }
  if(f = b) {
    f = (f = b.h & 2147483648) ? f : b.N
  }
  return f ? b.J(b, c, d) : ((f = (b == m ? m : b.constructor) === Boolean) ? f : "number" === typeof b) ? G(c, "" + H(b)) : b instanceof Array ? $(c, Cf, "#<Array [", ", ", "]>", d, b) : da(b) ? oc(b) ? (G(c, ":"), d = pf(b), w(d) && Af.j(c, Q(["" + H(d), "/"], 0)), G(c, of(b))) : n ? (d = pf(b), w(d) && Af.j(c, Q(["" + H(d), "/"], 0)), G(c, of(b))) : w((new Wc("\ufdd0:readably")).call(m, d)) ? G(c, [H('"'), H(b.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(b) {
    return Bf[b]
  })), H('"')].join("")) : G(c, b) : $b(b) ? Af.j(c, Q(["#<", "" + H(b), ">"], 0)) : b instanceof Date ? (d = function(b, c) {
    for(var d = "" + H(b);;) {
      if(Mb(d) < c) {
        d = [H("0"), H(d)].join("")
      }else {
        return d
      }
    }
  }, Af.j(c, Q(['#inst "', "" + H(b.getUTCFullYear()), "-", d(b.getUTCMonth() + 1, 2), "-", d(b.getUTCDate(), 2), "T", d(b.getUTCHours(), 2), ":", d(b.getUTCMinutes(), 2), ":", d(b.getUTCSeconds(), 2), ".", d(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0))) : w(b instanceof RegExp) ? Af.j(c, Q(['#"', b.source, '"'], 0)) : Af.j(c, Q(["#<", "" + H(b), ">"], 0))
};
fb.prototype.N = k;
fb.prototype.J = function(a, b, c) {
  return $(b, Df, "(", " ", ")", c, a)
};
lc.prototype.N = k;
lc.prototype.J = function(a, b, c) {
  return $(b, Df, "(", " ", ")", c, a)
};
Ae.prototype.N = k;
Ae.prototype.J = function(a, b, c) {
  return $(b, function(a) {
    return $(b, Df, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
$c.prototype.N = k;
$c.prototype.J = function(a, b, c) {
  return $(b, Df, "(", " ", ")", c, a)
};
xb.prototype.N = k;
xb.prototype.J = function(a, b, c) {
  return $(b, Df, "(", " ", ")", c, a)
};
$e.prototype.N = k;
$e.prototype.J = function(a, b, c) {
  return $(b, Df, "(", " ", ")", c, a)
};
mc.prototype.N = k;
mc.prototype.J = function(a, b, c) {
  return $(b, Df, "(", " ", ")", c, a)
};
hf.prototype.N = k;
hf.prototype.J = function(a, b, c) {
  return $(b, function(a) {
    return $(b, Df, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
X.prototype.N = k;
X.prototype.J = function(a, b, c) {
  return $(b, Df, "[", " ", "]", c, a)
};
Rc.prototype.N = k;
Rc.prototype.J = function(a, b, c) {
  return $(b, Df, "(", " ", ")", c, a)
};
Sc.prototype.N = k;
Sc.prototype.J = function(a, b) {
  return G(b, "()")
};
Vc.prototype.N = k;
Vc.prototype.J = function(a, b, c) {
  return $(b, Df, "(", " ", ")", c, a)
};
df.prototype.N = k;
df.prototype.J = function(a, b, c) {
  return $(b, Df, "(", " ", ")", c, a)
};
ue.prototype.N = k;
ue.prototype.J = function(a, b, c) {
  return $(b, function(a) {
    return $(b, Df, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
X.prototype.cb = k;
X.prototype.eb = function(a, b) {
  return qc.b(a, b)
};
function Ef(a, b, c) {
  if(la(b)) {
    return a.replace(RegExp(String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), c)
  }
  if(w(b.hasOwnProperty("source"))) {
    return a.replace(RegExp(b.source, "g"), c)
  }
  e([H("Invalid match arg: "), H(b)].join(""))
}
;var Ff, Gf, Hf, If;
function Jf() {
  return ba.navigator ? ba.navigator.userAgent : m
}
If = Hf = Gf = Ff = n;
var Kf;
if(Kf = Jf()) {
  var Lf = ba.navigator;
  Ff = 0 == Kf.indexOf("Opera");
  Gf = !Ff && -1 != Kf.indexOf("MSIE");
  Hf = !Ff && -1 != Kf.indexOf("WebKit");
  If = !Ff && !Hf && "Gecko" == Lf.product
}
var Mf = Ff, Nf = Gf, Of = If, Pf = Hf, Qf;
a: {
  var Rf = "", Sf;
  if(Mf && ba.opera) {
    var Tf = ba.opera.version, Rf = "function" == typeof Tf ? Tf() : Tf
  }else {
    if(Of ? Sf = /rv\:([^\);]+)(\)|;)/ : Nf ? Sf = /MSIE\s+([^\);]+)(\)|;)/ : Pf && (Sf = /WebKit\/(\S+)/), Sf) {
      var Uf = Sf.exec(Jf()), Rf = Uf ? Uf[1] : ""
    }
  }
  if(Nf) {
    var Vf, Wf = ba.document;
    Vf = Wf ? Wf.documentMode : g;
    if(Vf > parseFloat(Rf)) {
      Qf = String(Vf);
      break a
    }
  }
  Qf = Rf
}
var Xf = {};
function Yf(a) {
  var b;
  if(!(b = Xf[a])) {
    b = 0;
    for(var c = String(Qf).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), f = Math.max(c.length, d.length), h = 0;0 == b && h < f;h++) {
      var i = c[h] || "", j = d[h] || "", l = RegExp("(\\d*)(\\D*)", "g"), p = RegExp("(\\d*)(\\D*)", "g");
      do {
        var s = l.exec(i) || ["", "", ""], u = p.exec(j) || ["", "", ""];
        if(0 == s[0].length && 0 == u[0].length) {
          break
        }
        b = ((0 == s[1].length ? 0 : parseInt(s[1], 10)) < (0 == u[1].length ? 0 : parseInt(u[1], 10)) ? -1 : (0 == s[1].length ? 0 : parseInt(s[1], 10)) > (0 == u[1].length ? 0 : parseInt(u[1], 10)) ? 1 : 0) || ((0 == s[2].length) < (0 == u[2].length) ? -1 : (0 == s[2].length) > (0 == u[2].length) ? 1 : 0) || (s[2] < u[2] ? -1 : s[2] > u[2] ? 1 : 0)
      }while(0 == b)
    }
    b = Xf[a] = 0 <= b
  }
  return b
}
var Zf = {};
function $f() {
  return Zf[9] || (Zf[9] = Nf && !!document.documentMode && 9 <= document.documentMode)
}
;!Nf || $f();
!Nf || $f();
Nf && Yf("8");
!Pf || Yf("528");
Of && Yf("1.9b") || Nf && Yf("8") || Mf && Yf("9.5") || Pf && Yf("528");
Of && !Yf("8") || Nf && Yf("9");
!Nf || $f();
!Of && !Nf || Nf && $f() || Of && Yf("1.9.1");
Nf && Yf("9");
var ag = document.createElement("div");
ag.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
var bg = P.b(ag.firstChild.nodeType, 3), cg = P.b(ag.getElementsByTagName("tbody").length, 0);
P.b(ag.getElementsByTagName("link").length, 0);
function dg(a) {
  var b = a.type;
  if(b === g) {
    return m
  }
  switch(b.toLowerCase()) {
    case "checkbox":
    ;
    case "radio":
      return a.checked ? a.value : m;
    case "select-one":
      return b = a.selectedIndex, 0 <= b ? a.options[b].value : m;
    case "select-multiple":
      for(var b = [], c, d = 0;c = a.options[d];d++) {
        c.selected && b.push(c.value)
      }
      return b.length ? b : m;
    default:
      return a.value !== g ? a.value : m
  }
}
function eg(a, b) {
  var c = a.type;
  if(c !== g) {
    switch(c.toLowerCase()) {
      case "checkbox":
      ;
      case "radio":
        a.checked = b ? "checked" : m;
        break;
      case "select-one":
        a.selectedIndex = -1;
        if(da(b)) {
          for(var d = 0;c = a.options[d];d++) {
            if(c.value == b) {
              c.selected = k;
              break
            }
          }
        }
        break;
      case "select-multiple":
        c = b;
        da(c) && (c = [c]);
        for(var f = 0;d = a.options[f];f++) {
          if(d.selected = n, c) {
            for(var h, i = 0;h = c[i];i++) {
              d.value == h && (d.selected = k)
            }
          }
        }
        break;
      default:
        a.value = b != m ? b : ""
    }
  }
}
;var fg = /<|&#?\w+;/, gg = /^\s+/, hg = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i, ig = /<([\w:]+)/, jg = /<tbody/i, kg = ce([1, "<select multiple='multiple'>", "</select>"]), lg = ce([1, "<table>", "</table>"]), mg = ce([3, "<table><tbody><tr>", "</tr></tbody></table>"]), ng;
a: {
  for(var og = "col \ufdd0:default tfoot caption optgroup legend area td thead th option tbody tr colgroup".split(" "), pg = [ce([2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"]), ce([0, "", ""]), lg, lg, kg, ce([1, "<fieldset>", "</fieldset>"]), ce([1, "<map>", "</map>"]), mg, lg, mg, kg, lg, ce([2, "<table><tbody>", "</tbody></table>"]), lg], qg = og.length, rg = 0, sg = Wa(se);;) {
    if(rg < qg) {
      var tg = rg + 1, ug = Za(sg, og[rg], pg[rg]), rg = tg, sg = ug
    }else {
      ng = Ya(sg);
      break a
    }
  }
  ng = g
}
function vg(a) {
  var a = Ef(a, hg, "<$1></$2>"), b = ("" + H(Gb(yf(ig, a)))).toLowerCase(), c = Wb.e(ng, b, (new Wc("\ufdd0:default")).call(m, ng)), d = Rb.e(c, 0, m), f = Rb.e(c, 1, m), c = Rb.e(c, 2, m);
  a: {
    var h = document.createElement("div");
    h.innerHTML = [H(f), H(a), H(c)].join("");
    for(c = h;;) {
      if(0 < d) {
        d -= 1, c = c.lastChild
      }else {
        d = c;
        break a
      }
    }
    d = g
  }
  if(w(cg)) {
    a: {
      c = d;
      h = yf(jg, a);
      h = w(h) ? n : k;
      ((b = P.b(b, "table")) ? h : b) ? (f = c.firstChild, f = w(f) ? c.firstChild.childNodes : f) : f = ((f = P.b(f, "<table>")) ? h : f) ? divchildNodes : be;
      for(var f = I(f), c = m, i = h = 0;;) {
        if(i < h) {
          var b = c.F(c, i), j = P.b(b.nodeName, "tbody");
          (j ? P.b(b.childNodes.length, 0) : j) && b.parentNode.removeChild(b);
          i += 1
        }else {
          if(f = I(f)) {
            kc(f) ? (c = ab(f), f = bb(f), b = c, h = Mb(c), c = b) : (b = J(f), ((c = P.b(b.nodeName, "tbody")) ? P.b(b.childNodes.length, 0) : c) && b.parentNode.removeChild(b), f = O(f), c = m, h = 0), i = 0
          }else {
            break a
          }
        }
      }
    }
  }
  f = (f = w(bg) ? n : k) ? yf(gg, a) : f;
  w(f) && d.insertBefore(document.createTextNode(J(yf(gg, a))), d.firstChild);
  return d.childNodes
}
function wg(a) {
  if(a ? a.nb : a) {
    return a.nb(a)
  }
  var b;
  var c = wg[v(a == m ? m : a)];
  c ? b = c : (c = wg._) ? b = c : e(y("DomContent.nodes", a));
  return b.call(m, a)
}
function xg(a) {
  if(a ? a.ob : a) {
    return a.ob(a)
  }
  var b;
  var c = xg[v(a == m ? m : a)];
  c ? b = c : (c = xg._) ? b = c : e(y("DomContent.single-node", a));
  return b.call(m, a)
}
function yg(a) {
  a = of(a);
  return da(a) ? document.getElementById(a) : a
}
function zg(a) {
  return dg(xg(a))
}
var Ag, Bg = m;
function Cg(a) {
  return Bg.b(a, 0)
}
function Dg(a, b) {
  return b < a.length ? new $c(m, n, function() {
    return R(a.item(b), Bg.b(a, b + 1))
  }, m) : m
}
Bg = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Cg.call(this, a);
    case 2:
      return Dg.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Bg.a = Cg;
Bg.b = Dg;
Ag = Bg;
var Eg, Fg = m;
function Gg(a) {
  return Fg.b(a, 0)
}
function Hg(a, b) {
  return b < a.length ? new $c(m, n, function() {
    return R(a[b], Fg.b(a, b + 1))
  }, m) : m
}
Fg = function(a, b) {
  switch(arguments.length) {
    case 1:
      return Gg.call(this, a);
    case 2:
      return Hg.call(this, a, b)
  }
  e(Error("Invalid arity: " + arguments.length))
};
Fg.a = Gg;
Fg.b = Hg;
Eg = Fg;
function Ig(a) {
  return w(a.item) ? Ag.a(a) : Eg.a(a)
}
function Jg(a) {
  if(w(a)) {
    var b = w(a.name) ? n : k;
    return b ? a.length : b
  }
  return a
}
wg._ = function(a) {
  if(a == m) {
    a = M
  }else {
    var b;
    b = a ? ((b = a.h & 8388608) ? b : a.ta) || (a.h ? 0 : x(Qa, a)) : x(Qa, a);
    a = b ? I(a) : w(Jg(a)) ? Ig(a) : I(ce([a]))
  }
  return a
};
xg._ = function(a) {
  if(a == m) {
    a = m
  }else {
    var b;
    b = a ? ((b = a.h & 8388608) ? b : a.ta) || (a.h ? 0 : x(Qa, a)) : x(Qa, a);
    a = b ? J(a) : w(Jg(a)) ? a.item(0) : a
  }
  return a
};
wg.string = function(a) {
  return uf.a(wg(w(yf(fg, a)) ? vg(a) : document.createTextNode(a)))
};
xg.string = function(a) {
  return xg(w(yf(fg, a)) ? vg(a) : document.createTextNode(a))
};
w("undefined" != typeof NodeList) && (t = NodeList.prototype, t.ta = k, t.z = function(a) {
  return Ig(a)
}, t.qa = k, t.F = function(a, b) {
  return a.item(b)
}, t.O = function(a, b, c) {
  return a.length <= b ? c : Rb.b(a, b)
}, t.Da = k, t.A = function(a) {
  return a.length
});
w("undefined" != typeof StaticNodeList) && (t = StaticNodeList.prototype, t.ta = k, t.z = function(a) {
  return Ig(a)
}, t.qa = k, t.F = function(a, b) {
  return a.item(b)
}, t.O = function(a, b, c) {
  return a.length <= b ? c : Rb.b(a, b)
}, t.Da = k, t.A = function(a) {
  return a.length
});
w("undefined" != typeof HTMLCollection) && (t = HTMLCollection.prototype, t.ta = k, t.z = function(a) {
  return Ig(a)
}, t.qa = k, t.F = function(a, b) {
  return a.item(b)
}, t.O = function(a, b, c) {
  return a.length <= b ? c : Rb.b(a, b)
}, t.Da = k, t.A = function(a) {
  return a.length
});
var Kg = eb(["reserved", 0.003, "normal", 0.006, "aggressive", 0.01, "emergency", 0.015]);
function Lg() {
  var a = Cd.b(zg, yg), b = Cd.b(parseFloat, function(a) {
    return Ef(a, /[^\d]/, "")
  }), c = b.a ? b.a(a.a ? a.a("total_pop") : a.call(m, "total_pop")) : b.call(m, a.a ? a.a("total_pop") : a.call(m, "total_pop")), d = b.a ? b.a(a.a ? a.a("mil_pop") : a.call(m, "mil_pop")) : b.call(m, a.a ? a.a("mil_pop") : a.call(m, "mil_pop")), f = b.a ? b.a(a.a ? a.a("pes_pop") : a.call(m, "pes_pop")) : b.call(m, a.a ? a.a("pes_pop") : a.call(m, "pes_pop"));
  b.a ? b.a(a.a ? a.a("wiz_pop") : a.call(m, "wiz_pop")) : b.call(m, a.a ? a.a("wiz_pop") : a.call(m, "wiz_pop"));
  for(var h = a.a ? a.a("patriotism") : a.call(m, "patriotism"), b = a.a ? a.a("target_draft") : a.call(m, "target_draft"), a = (w(h) ? 1.3 : 1) * (Kg.a ? Kg.a(a.a ? a.a("draft_rate") : a.call(m, "draft_rate")) : Kg.call(m, a.a ? a.a("draft_rate") : a.call(m, "draft_rate"))), c = f - (c * (b / 100) - d), d = -(a - 1), f = (Math.log.a ? Math.log.a(c / f) : Math.log.call(m, c / f)) / (Math.log.a ? Math.log.a(d) : Math.log.call(m, d)), c = yg("hours"), f = Math.ceil.a ? Math.ceil.a(f) : Math.ceil.call(m, 
  f), c = I(wg(c)), d = m, b = a = 0;;) {
    if(b < a) {
      h = d.F(d, b), eg(h, f), b += 1
    }else {
      if(c = I(c)) {
        d = c, kc(d) ? (c = ab(d), b = bb(d), d = c, a = Mb(c), c = b) : (c = J(d), eg(c, f), c = O(d), d = m, a = 0), b = 0
      }else {
        break
      }
    }
  }
  return n
}
ca("draft_cljs.calculator.init", function() {
  var a = document;
  return w(w(a) ? document.getElementById : a) ? (a = document.getElementById("draftForm"), console.log(a), a.onsubmit = Lg) : m
});
