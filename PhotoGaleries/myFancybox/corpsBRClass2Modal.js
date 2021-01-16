(function($) {
  $.fn.corpsBRClass2Modal = function(options) {
    var _this = this;
    Promise.all([
      //  chargements des dépendances css
      //  chargements des dépendances js
      load.js('https://philquand.github.io/Javascript/PhotoGaleries/myFancybox/AlaUne.js'),
      load.js('https://philquand.github.io/Javascript/Hi-base64/hi-base64.js'),
    ]).then(
      function() {
        //var _options = { fancyClass: articleFancy, Num: "SCTLP" };
        var _options = {
          Num: "SCTLP"
        };
        if (jQuery.type(options.fancyClass) != 'undefined') _options.fancyClass = options.fancyClass;
        if (jQuery.type(options.src) != 'undefined') _options.src = options.src;
        var href = [];
        var hrefURL = options.href;
        _options.href = href;
        for (var i = 0; i < hrefURL.length; i++) {
          var result = getMyInnerLinkContent(hrefURL[i]);
          //var corpsBR = result.corpsBR.wrap('<div class="corpsFancy corpsBR"></div>');
          var corpsBR = result.corpsBR;
          corpsBR.addClass('corpsFancy ');
          //var title = result.title.html().split(",")[1];
          if (jQuery.type(corpsBR.attr('data-title')) != 'undefined') {
            var title = corpsBR.attr('data-title');
            var date = title;
          }
          else {
            var title = result.title.html();
            var date = title.split(",")[1];
          }
          corpsBR = corpsBR.prepend('<div class="titreFancy">' + title + ' </div>');
          var hrefItem = {
            dataType: "inline",
            dataSrc: corpsBR.html(),
            dataCaption: '<a href=&#34;' + hrefURL[i] + '&#34;>L&#39;article d&#39;origine</a>'
          };
          if (jQuery.type(corpsBR.attr('data-thumb')) != 'undefined') {
            hrefItem.dataThumb = corpsBR.attr('data-thumb');
          }
          else {
            var imgBase = getIMG(date.split(' '));
            hrefItem.dataThumb = imgBase;
          }
          href.push(hrefItem);
        }

        $(_this).AlaUne(_options);

        function getIMG(svgInfos) {
          var svgTemp = $('<svg width="100%" height="100%" viewBox="0 0 400 400" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><rect x="10" y="10" width="100%" height="100%" stroke="blue" fill=white stroke-opacity="1.0" fill-opacity="0.8"/> <g transform="matrix(0.622762,0,0,0.695394,-73.9671,-168.06)"> <text x="187.961px" y="471px" style="' + "font-family:'ArialMT', 'Arial', sans-serif;font-size:96px;fill:rgb(244,60,61);" + '" id="l1"></text> <text x="310.68px" y="549.099px" style="' + "font-family:'ArialMT', 'Arial', sans-serif;font-size:64px;fill:rgb(244,60,61);" + '" id="l2"></text> <text x="319.57px" y="615.193px" style="' + "font-family:'ArialMT', 'Arial', sans-serif;font-size:64px;fill:rgb(244,60,61);" + '" id="l3"></text> <text x="372.945px" y="693.292px" style="' + "font-family:'ArialMT', 'Arial', sans-serif;font-size:64px;fill:rgb(244,60,61);" + '" id="l4"></text> </g></svg>');
          if (typeof svgInfos !== 'undefined') {
            for (var i = 0; i < svgInfos.length; i++) {
              svgTemp.find('#l' + (i + 1).toString()).html(svgInfos[i]);
            }
          }
          //divArchi.append(svgTemp, '<br/>');
          var svgInfosstr = svgTemp.get(0).outerHTML;
          //divArchi.append('<p>' + svgInfosstr + '</p>')
          var svgInfosbase64r = base64.encode(svgInfosstr);
          //divArchi.append('<p>' + svgInfosbase64r + '</p>')

          var imgBase = 'data:image/svg+xml;base64,' + svgInfosbase64r;
          return imgBase;
        }

        function getMyInnerLinkContent(theURL) {
          var xmlhttp = false;
          loadXMLDoc(theURL);
          if (xmlhttp == false) {
            //alert("timeout");
            return '';
          }
          else {
            var allText = xmlhttp.responseText;
            return getBody(allText);
          }

          function getBody(content) {
            var result = {
              title: '',
              corpsBR: ''
            };
            var other = $("<div>").html(content);
            var post = $("<div>").append(other.find('.Blog').find('.post'));
            result.title = post.find('.post-title');
            result.corpsBR = post.find('.corpsBR');
            return result;
          }

          function loadXMLDoc(theURL) {
            if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari, SeaMonkey
              xmlhttp = new XMLHttpRequest();
            }
            else { // code for IE6, IE5
              xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange = function() {
              if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                //alert(xmlhttp.responseText);
              }
            }
            xmlhttp.open("GET", theURL, false);
            xmlhttp.send();
          }
        }
      }
    ).catch(function() {
      console.log('Oh no, epic failure!');
    });
  }

  function Generator() {};

  Generator.prototype.rand = Math.floor(Math.random() * 26) + Date.now();

  Generator.prototype.getrand = function() {
    return this.rand++;
  };
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
              element.type = 'module';
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
})(jQuery);