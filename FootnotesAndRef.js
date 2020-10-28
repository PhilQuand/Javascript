function theReference(e,s) {
  return true;
}
!(function() {
  REFTYP = {
    FOOTNOTE: 1,
    REFERENCE: 2
  };
  var i = /^\([0-9]+\)$/,
    l = /^\[[0-9]+\]$/,
    a = window.onload;

  function f(e, t, n, o, r) {
    var s = document.getElementById(e);
    if (s && s.getElementsByTagName) {
      s.className = t + "s";
      document.createElement("div");
      for (var i = s.getElementsByTagName("li"), l = 0; l < i.length; l++) {
        var a = i[l];
        a.setAttribute("style", "list-style:none; margin: .5em 0;"), c(a), a.parentNode.setAttribute("id", n + o + (l + 1) + r), (a.parentNode.className = t);
        //a.setAttribute("style", "list-style:none; margin: .5em 0;"), c(a), a.setAttribute("id", n + o + (l + 1) + r), (a.parentNode.className = t);
      }
    }
  }

  function c(e) {
    var t = e.parentNode,
      n = document.createElement("div");
    t.replaceChild(n, e), n.appendChild(e);
  }

  function m(o, r, s) {
    var i = null,
      l = null,
      a = null;
    return function() {
      var e = this.parentNode;
      i && ((s.innerHTML = a), e.removeChild(i), (i = null));
      var t = r + this.innerHTML;
      if (l === t) l = null;
      else {
        (l = t), (i = document.createElement("div"));
        var n = document.getElementById(t).innerHTML;
        (i.innerHTML = n),
        (a = s.innerHTML),
        o == REFTYP.FOOTNOTE ? ((i.className = "foot-tooltip"), (s.innerHTML = '(<strong style="font-size: 24px;">x</strong>)')) : ((i.className = "ref-tooltip"), (s.innerHTML = '[<strong style="font-size: 24px;">x</strong>]')),
          e.insertBefore(i, this.nextSibling),
          setTimeout(function() {
            i.style.opacity = "1";
          }, 0);
      }
      event.preventDefault();
    };
  }
  window.onload = function(e) {
    if (document.getElementsByClassName)
      for (var t = 0; t <= 2; t++) {
        if (0 == t) var n = document.getElementsByClassName("ptr");
        else n = document.getElementsByClassName("ptr_" + t);
        for (var o = 0; o < n.length; o++) {
          var r = n[o],
            s = r.innerHTML;
          i.test(s) ?
            footmod == REFTYP.FOOTNOTE ?
            (r.setAttribute("href", "javascript:void(0)"), (r.onclick = m(REFTYP.FOOTNOTE, "footnotes_" + t, r))) :
            r.setAttribute("href", "#footnotes_" + t + s) :
            l.test(s) && (refmod == REFTYP.FOOTNOTE ? (r.setAttribute("href", "javascript:void(0)"), (r.onclick = m(REFTYP.REFERENCE, "references_" + t, r))) : r.setAttribute("href", "#references_" + t + s), (r.setAttribute("onclick", "return theReference(event,'#references_" + t + s + "');"));
        }
        f(0 == t ? "footnotes" : "footnotes_" + t, "footnote", "footnotes_" + t, "(", ")"), f(0 == t ? "references" : "references_" + t, "reference", "references_" + t, "[", "]");
      }
    "function" == typeof a && a(e);
  };
})();