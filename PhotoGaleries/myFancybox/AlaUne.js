import ShadersGallery from 'https://philquand.github.io/Javascript/PhotoGaleries/Shaders/Shaders17.js';
(function($) {
  var randGen = new Generator();
  var relPageCoords = {};
  $.fn.AlaUne = function(options) {
    var _this = this;
    Promise.all([
      //  chargements des dépendances css
      //load.css('https://philquand.github.io/Javascript/PhotoGaleries/myFancybox/AlaUne.css'),
      load.css('https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.css'),
      load.css('https://philquand.github.io/Javascript/PhotoGaleries/myFancybox/myFancybox.css'),
      //  chargements des dépendances js
      load.js('https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.js'),
      load.js('https://philquand.github.io/Javascript/PhotoGaleries/myFancybox/myFancybox.js'),
    ]).then(function() {
      console.log('Everything has loaded!');
      if (jQuery.type(options) == 'undefined' || jQuery.type(options.src) == 'undefined') return false;
      var src = options.src;
      switch (jQuery.type(src)) {
        case "string":
          if (src.indexOf('http') == 0) src = ('<img class="img-AlaUne" src="' + src + '" />');
          break;
        default:
          log('AlaUne plugin error src');
      }
      if (jQuery.type(options.href) == 'undefined') {
        $(_this).append(src);
        return;
      }
      var randNum = 'FB' + randGen.getrand();
      var randHid = 'HD' + randGen.getrand();
      switch (jQuery.type(options.href)) {
        case "string":
          $(_this).append('<a href="' + options.href + '">' + src + '</a>');
          break;
        case "array":
          break;
        case "object":
          options.href = [options.href]
          break;
        default:
          log('AlaUne plugin error options.href = ' + options.href);
      }
      var relPageCoords = options.offSet;
      if (jQuery.type(options.href) == 'undefined') {
        $(_this).append(src);
        return;
      }
      for (var i = 0; i < options.href.length; i++) {
        if (jQuery.type(options.href[i].dataType) == 'string') {
          if (jQuery.type(options.href[i].dataSrc) == 'undefined') log('for href[' + i + '] dataSrc is undefined');
          else {
            switch (options.href[i].dataType) {
              case "inlineId":
                $('"#' + options.href[i].dataSrc + '"').wrap('<div class="articleFancy" id="' + randHid + i + '"> \
                              <div class="corpsFancy"> \
                              </div></div>');
                $(_this).append('<a style="display:none" class="' + randNum + '" data-src="#' + randHid + i + '" data-fancybox="' + randNum + '" data-width="1132" data-height="1600">inline ' + i + '</a>');
                //<a style="display:none" class="' + randNum + ' fancybox.inline" data-src="#hidden-content-1" data-fancybox="' + randNum + '" data-width="50%" data-height="800">inline ' + i + '</a>');
                break;
              case "inline":
                $(_this).append('<div class="articleFancy" id="' + randHid + i + '"> \
                              <div class="corpsFancy"> \
                              ' + options.href[i].dataSrc + ' \
                              </div></div>');
                $(_this).append('<a style="display:none" class="' + randNum + '" data-src="#' + randHid + i + '" data-fancybox="' + randNum + '" data-width="1132" data-height="1600">inline ' + i + '</a>');
                //<a style="display:none" class="' + randNum + ' fancybox.inline" data-src="#hidden-content-1" data-fancybox="' + randNum + '" data-width="50%" data-height="800">inline ' + i + '</a>');
                break;
              case "iframe":
                //$(this).append('<a style="display:none" class="fancybox fancybox.iframe" data-type="iframe" data-fancybox="FB' + randNum + '" data-src="' + options.href[i].dataSrc + '" href="javascript:;" >iframe ' + i +'</a>');
                $(_this).append('<a style="display:none" class="' + randNum + ' fancybox.iframe" data-type="iframe" data-fancybox="' + randNum + '" data-src="' + options.href[i].dataSrc + '" href="javascript:;" data-width="1132" data-height="1600">iframe ' + i + '</a>');
                break;
              case "images":
                //$(this).append('<a style="display:none" class="fancybox" data-fancybox="FB' + randNum + '" href="' + options.href[i].dataSrc + '" >images ' + i +'</a>');
                $(_this).append('<a style="display:none" class="' + randNum + ' fancybox.images" data-fancybox="' + randNum + '" href="' + options.href[i].dataSrc + '" data-width="1132" data-height="1600">images ' + i + '</a>');
                break;
              case "video":
                //$(this).append('<a style="display:none" class="fancybox" data-fancybox="FB' + randNum + '" href="' + options.href[i].dataSrc + '" >images ' + i +'</a>');
                $(_this).append('<a style="display:none" class="' + randNum + ' fancybox.video" data-fancybox="' + randNum + '" href="' + options.href[i].dataSrc + '">video ' + i + '</a>');
                break;
              default:
                console.log('AlaUne plugin error options.href = ' + options.href);
            }
          }
        }
      }
      var loc = window.location.href;
      loc = loc.split('#');
      loc = loc[0];
      if (options.href.length > 1)
        $(_this).append('<a href="' + loc + '#' + randNum + '-1">' + src + '</a>');
      else
        $(_this).append('<a href="' + loc + '#' + randNum + '">' + src + '</a>');
      // pour déclencher: https://latouraineinsoumise.blogspot.com/#images-1
      switch (jQuery.type(options.fancyClass)) {
        case "string":
          $('.' + randNum).fancybox({
            baseClass: 'customInlineBaseClass',
            smallBtn: false,
            toolbar: false,
            afterLoad: function(instance, current) {

              if (jQuery.type(relPageCoords) != 'undefined' && jQuery.type(relPageCoords.Y) == 'string' ) {
                var top = relPageCoords.Y;
                //var frameSize = Math.max(relPageCoords.Y + 550, $("body").height());
                $('.customInlineBaseClass .fancybox-content').css('top', top);
              }
              
              var pixelRatio = window.devicePixelRatio || 1;

              /*if (pixelRatio > 1.5) {
                current.width = current.width / pixelRatio;
                current.height = current.height / pixelRatio;
              }*/

              if (instance.group.length > 1 && current.$content) {
                if (current.index == 0) current.$content.append('<a data-fancybox-next class="button-next" href="javascript:;">→</a>');
                else if (current.index == (instance.group.length - 1)) current.$content.append('<a data-fancybox-prev class="button-previous" href="javascript:;">←</a>');
                else current.$content.append('<a data-fancybox-next class="button-next" href="javascript:;">→</a><a data-fancybox-prev class="button-previous" href="javascript:;">←</a>');
              }
              current.$content.append('<a data-fancybox-close class="button-close" href="javascript:;">x</a>');
            }
          });
          break;
        case "object":
          $('.' + randNum).fancybox(options.fancyClass);
          break;
      }
      /*$('.fancybox')
      .attr('rel', 'gallery')
      .fancybox({
          baseClass: 'customIframeBaseClass customInlineBaseClass',
          //arrows: true,
          smallBtn: false,
          toolbar: true,
          buttons: [
            'close'
          ],
          afterLoad : function(instance, current) {
              
              var pixelRatio = window.devicePixelRatio || 1;

              if ( pixelRatio > 1.5 ) {
                  current.width  = current.width  / pixelRatio;
                  current.height = current.height / pixelRatio;
              }
              
              if (instance.group.length > 1 && current.$content) {
                if (current.index == 0) current.$content.append('<a data-fancybox-next class="button-next" href="javascript:;">→</a>');
                else if (current.index == (instance.group.length - 1)) current.$content.append('<a data-fancybox-prev class="button-previous" href="javascript:;">←</a>');
                else current.$content.append('<a data-fancybox-next class="button-next" href="javascript:;">→</a><a data-fancybox-prev class="button-previous" href="javascript:;">←</a>');
              }
              var url = window.location.href;
              indexFancy = url.indexOf('#');
              if( indexFancy > 1 ) {
                var url = url.substr(0, indexFancy-1);
              }
              current.$content.append('<a data-fancybox-close class="button-close" href="' + url + '">x</a>');
          }
      })*/
    }).catch(function() {
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