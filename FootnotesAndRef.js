function theReference(e, s) {
  return true;
}
(function($) {
  REFTYP = {
    FOOTNOTE: 1,
    REFERENCE: 2
  }
  
  var footmod = REFTYP.FOOTNOTE;
  var refmod = REFTYP.REFERENCE;
  
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
    //return function() {
    var str = s.innerHTML;
    str = "tooltip-" + r + "-" + str.substring(1, str.length - 1);
    s.dataset.tooltipContent = "#" + str;
    s.className = 'ptr tooltip';
    var mythis = s;
    var e = mythis.parentNode;
    i && ((s.innerHTML = a), e.removeChild(i), (i = null));
    var t = r + mythis.innerHTML;
    if (l === t) l = null;
    else {
      (l = t), (i = document.createElement("div"));
      //i.id = "tooltip-" + r + s.innerHTML;
      var n = document.getElementById(t).children[0].innerHTML;
      (i.innerHTML = '<span id="' + str + '" class="tooltipStyle">' + n + '</span>'),
      (a = s.innerHTML),
      e.insertBefore(i, mythis.nextSibling),
        setTimeout(function() {
          i.style.opacity = "1";
          i.style.display = "none";
        }, 0);
    }
    //event.preventDefault();
    //};
  }
  
  window.onload = function(e) {
    if (document.getElementsByClassName)
      for (var t = 0; t <= 2; t++) {
        if (0 == t) var n = document.getElementsByClassName("ptr");
        else n = document.getElementsByClassName("ptr_" + t);
        f(0 == t ? "footnotes" : "footnotes_" + t, "footnote", "footnotes_" + t, "(", ")"), f(0 == t ? "references" : "references_" + t, "reference", "references_" + t, "[", "]");
        for (var o = 0; o < n.length; o++) {
          var r = n[o],
            s = r.innerHTML;
          if (i.test(s))
            if (footmod == REFTYP.FOOTNOTE) r.setAttribute("href", "javascript:void(0)"), m(REFTYP.FOOTNOTE, "footnotes_" + t, r)
          else r.setAttribute("href", "#footnotes_" + t + s), r.setAttribute("onclick", "return theReference(event,'#footnotes_" + t + s + "');")
          else
          if (l.test(s) && refmod == REFTYP.FOOTNOTE) r.setAttribute("href", "javascript:void(0)"), m(REFTYP.REFERENCE, "references_" + t, r)
          else r.setAttribute("href", "#references_" + t + s), r.setAttribute("onclick", "return theReference(event,'#references_" + t + s + "');")
        }
      }
    "function" == typeof a && a(e);
  };
})();