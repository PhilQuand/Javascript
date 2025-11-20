function theReference(e, s) {
  return true;
}
/*function theReference(e,s) {
    //à utiliser à l'intérieur d'une fenêtre modale de type articleFancyClass générée avec le plugin ALaUne.js 
    if( !window.location.href.includes("#references_") ) e.currentTarget.dataset.donotclose = "true";
    window.location.href = s;

    var documentInnerHeight = windowParent.window.innerHeight;
    $('.articleFancyClass').css('height', documentInnerHeight + 'px');
    var titreFancyHeight = $('.titreFancy').height();
    var footFancyHeight = $('.footFancy').height();
    var fancyboxInnerMT = eval($('.articleFancyClass .fancybox-inner').css('margin-top').split("px")[0]);
    var fancyboxInnerMB = eval($('.articleFancyClass .fancybox-inner').css('margin-bottom').split("px")[0]);

    var corpsFancyHeight = documentInnerHeight - fancyboxInnerMT - fancyboxInnerMB - 80;
    if (jQuery.type(titreFancyHeight) != 'undefined') corpsFancyHeight = corpsFancyHeight - titreFancyHeight;
    if (jQuery.type(footFancyHeight) != 'undefined') corpsFancyHeight = corpsFancyHeight - footFancyHeight;
    $('.articleFancyClass .corpsFancy').css('height', corpsFancyHeight + 'px');
    windowParent.window.scrollTo(0, 0);
    return false;
};*/
(function($) {
  var load = (function() {
    // Function which returns a function: https://davidwalsh.name/javascript-functions
    function _load(tag) {
      return function(url) {
        // This promise will be used by Promise.all to determine success or failure
        return new Promise(function(resolve, reject) {
          var element = document.createElement(tag);
          var parent = 'body';
          var attr = 'src';

          // Important success and error for the promise
          element.onload = function() {
            resolve(url);
          };
          element.onerror = function() {
            reject(url);
          };

          // Need to set different attributes depending on tag type
          switch (tag) {
            case 'script':
              element.async = true;
              break;
            case 'link':
              element.type = 'text/css';
              element.rel = 'stylesheet';
              attr = 'href';
              parent = 'head';
          }

          // Inject into document to kick off loading
          element[attr] = url;
          document[parent].appendChild(element);
        });
      };
    }

    return {
      css: _load('link'),
      js: _load('script'),
      img: _load('img')
    }
  })();
  Promise.all([
    //  chargements des dépendances css
    load.css('https://philquand.github.io/Javascript/FootnotesAndRef.css'),
    load.css('https://philquand.github.io/Javascript/PopUps/tooltipster-master/dist/css/tooltipster.bundle.min.css'),
    load.css('https://philquand.github.io/Javascript/PopUps/tooltipster-master/dist/css/plugins/tooltipster/sideTip/themes/tooltipster-sideTip-shadow.min.css'),
    //  chargements des dépendances js
    load.js('https://philquand.github.io/Javascript/PopUps/tooltipster-master/dist/js/tooltipster.bundle.min.js'),
  ]).then(
    function() {
      console.log('Everything has loaded!');
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
            a.setAttribute("style", "list-style:none; margin:0;"), c(a), a.parentNode.setAttribute("id", n + o + (l + 1) + r), (a.parentNode.className = t);
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

        setTimeout(function() {
          $('.tooltip').tooltipster({
            theme: 'tooltipster-shadow',
            interactive: true,
            contentAsHTML: true,
            maxWidth: 400
            /*,
              side: 'right'*/
          });
        }, 0);

      };
    }).catch(function() {
    console.log('Oh no, epic failure!');
  });
})(jQuery);