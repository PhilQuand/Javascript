import ShadersGallery from 'https://philquand.github.io/Javascript/PhotoGaleries/Shaders/Shaders17.js';
(function($) {
  var randGen = new Generator();
  $.fn.AlaUne = function(options) {
    var _this = this;
    Promise.all([
      //  chargements des dépendances css
      load.css('https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.css'),
      load.css('https://philquand.github.io/Javascript/PhotoGaleries/myFancybox/myFancybox.css'),
      load.css('https://philquand.github.io/Javascript/PhotoGaleries/myFancybox/AlaUne.css'),
      //  chargements des dépendances js
      load.js('https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.js'),
      load.js('https://philquand.github.io/Javascript/PhotoGaleries/myFancybox/myFancybox.js'),
    ]).then(function() {
      console.log('Everything has loaded!');
      if (jQuery.type(options) == 'undefined') return false;
      var src = options.src;
      switch (jQuery.type(src)) {
        case "undefined":
          $(_this).wrap('<div class="alaUneWrapper"/>');
          _this = _this.parent();
          break;
        case "string":
          if (src.indexOf('http') == 0) src = ('<img class="img-AlaUne" src="' + src + '" />');
          $(_this).append(src);
          break;
        default:
          log('AlaUne plugin error src');
      }
      if (jQuery.type(options.href) == 'undefined') {
        return;
      }
      if (jQuery.type(options.Num) != 'undefined') var randNum = 'HD' + options.Num;
      else var randNum = 'FB' + randGen.getrand();
      var randHid = 'HD' + randGen.getrand();
      switch (jQuery.type(options.href)) {
        case "string":
          $(_this).children(":first").wrap('<a href="' + options.href + '"></a>');
          break;
        case "array":
          break;
        case "object":
          options.href = [options.href]
          break;
        default:
          log('AlaUne plugin error options.href = ' + options.href);
      }
      if (jQuery.type(options.top) != 'undefined') var relTop = options.top;
      if (jQuery.type(options.offSet) != 'undefined') var relPageCoords = options.offSet;
      if (jQuery.type(options.width) != 'undefined') var relPageWidth = options.width;
      if (jQuery.type(options.height) != 'undefined') var relPageHeight = options.height;
      if (jQuery.type(options.href) == 'undefined') {
        return;
      }
      for (var i = 0; i < options.href.length; i++) {
        if (jQuery.type(options.href[i].dataType) == 'string') {
          if (jQuery.type(options.href[i].dataSrc) == 'undefined') log('for href[' + i + '] dataSrc is undefined');
          else {
            if (jQuery.type(options.href[i].dataWidth) == 'undefined') options.href[i].dataWidth = ''
            else options.href[i].dataWidth = 'data-width="'+  options.href[i].dataWidth + '"'
            if (jQuery.type(options.href[i].dataHeight) == 'undefined') options.href[i].dataHeight = ''
            else options.href[i].dataHeight = 'data-height="'+  options.href[i].dataHeight + '"'
            switch (options.href[i].dataType) {
              case "inlineId":
                if (jQuery.type(options.href[i].dataThumb) == 'undefined') $(_this).append('<a style="display:none" class="' + randNum + '" data-src="#' + options.href[i].dataSrc + '" data-fancybox="' + randNum + '">inline ' + i + '</a>');
                else $(_this).append('<a style="display:none" class="' + randNum + '" data-src="#' + options.href[i].dataSrc + '" data-fancybox="' + randNum + '" data-thumb="' + options.href[i].dataThumb + '">inline ' + i + '</a>');
                break;
              case "inline":
                $(_this).append('<div class="defaultFancyWrapper" style="display:none;" id="' + randHid + i + '"> \
                              <div class="fontFancy defaultFancy"> \
                              ' + options.href[i].dataSrc + ' \
                              </div></div>');
                $(_this).append('<a style="display:none" class="' + randNum + '" data-src="#' + randHid + i + '" data-fancybox="' + randNum + '" ' + options.href[i].dataWidth + '  ' + options.href[i].dataHeight + '>inline ' + i + '</a>');
                break;
              case "iframe":
                $(_this).append('<a style="display:none" class="' + randNum + ' fancybox.iframe" data-type="iframe" data-fancybox="' + randNum + '" data-src="' + options.href[i].dataSrc + '" href="javascript:;" ' + options.href[i].dataWidth + '  ' + options.href[i].dataHeight + '>iframe ' + i + '</a>');
                break;
              case "images":
                $(_this).append('<a style="display:none" class="' + randNum + ' fancybox.images" data-fancybox="' + randNum + '" href="' + options.href[i].dataSrc + '" ' + options.href[i].dataWidth + '  ' + options.href[i].dataHeight + '>images ' + i + '</a>');
                break;
              case "video":
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
        $(_this).children(":first").wrap('<a href="' + loc + '#' + randNum + '-1"></a>');
      else
        $(_this).children(":first").wrap('<a href="' + loc + '#' + randNum + '"></a>');
      // pour déclencher: https://latouraineinsoumise.blogspot.com/#images-1
      switch (jQuery.type(options.fancyClass)) {
        case "object":
          $('.' + randNum).fancybox(options.fancyClass);
          break;
        default:
          switch (options.fancyClass) {
            case "defaultInline":
              $('.' + randNum).fancybox({
                idleTime: false,
                smallBtn: false,
                toolbar: true,
                infobar: true,
                arrows: true,
                animationEffect: "fade",
                transitionEffect: "slide",
                speed: 300,
                margin: [40, 20],
                buttons: false,
                thumbs: {
                  autoStart: false, // Display thumbnails on opening
                  hideOnClose: true // Hide thumbnail grid when closing animation starts
                },
                buttons: [
                  'close',
                  'thumbs'
                ],
                baseClass: 'fancyAlaUneDefaultInline  fancyAlaUneDefaultButton',
                afterLoad: function(instance, current) {
                  $(".getFancyFocus").focus();
                  /*if (instance.group.length > 1 && current.$content) {
                    if (current.index == 0) current.$content.append('<a data-fancybox-next class="button-next inside" href="javascript:;">→</a>');
                    else if (current.index == (instance.group.length - 1)) current.$content.append('<a data-fancybox-prev class="button-previous inside" href="javascript:;">←</a>');
                    else current.$content.append('<a data-fancybox-next class="button-next inside" href="javascript:;">→</a><a data-fancybox-prev class="button-previous inside" href="javascript:;">←</a>');
                  }
                  current.$content.append('<a data-fancybox-close class="button-close inside" href="javascript:;"><span  style="font-family: Arial">x</span></a>');*/
                  $('.fancyAlaUneDefaultInline .fancybox-button.fancybox-button--close').css('display', 'block');
                  $('.fancyAlaUneDefaultInline .fancybox-button.fancybox-button--arrow_left').css('display', 'block');
                  $('.fancyAlaUneDefaultInline .fancybox-button.fancybox-button--arrow_right').css('display', 'block');
                },
                onUpdate: function(opts, obj) {

                  var documentInnerHeight = window.innerHeight;
                  $('.fancyAlaUneDefaultInline').css('height', documentInnerHeight + 'px');

                  /*var fancyboxInnerMT = eval($('.fancyAlaUneDefaultInline .fancybox-inner').css('margin-top').split("px")[0]);
                  var fancyboxInnerMB = eval($('.fancyAlaUneDefaultInline .fancybox-inner').css('margin-bottom').split("px")[0]);
                  var corpsFancyHeight = documentInnerHeight - fancyboxInnerMT - fancyboxInnerMB - 80;
                  var titreFancyHeight = $('.titreFancy').height();
                  if (jQuery.type(titreFancyHeight) != 'undefined') corpsFancyHeight = corpsFancyHeight - titreFancyHeight;
                  var footFancyHeight = $('.footFancy').height();
                  if (jQuery.type(footFancyHeight) != 'undefined') corpsFancyHeight = corpsFancyHeight - footFancyHeight;
                  $('.fancyAlaUneDefaultInline .corpsFancy').css('height', corpsFancyHeight + 'px');*/

                  window.scrollTo(0, 0);

                },
              });
              break;
            default:
              $('.' + randNum).fancybox({
                baseClass: 'fancyAlaUneDefault fancyAlaUneDefaultButton',
                smallBtn: false,
                toolbar: false,
                afterLoad: function(instance, current) {

                  /*var pixelRatio = window.devicePixelRatio || 1;

                  if (pixelRatio > 1.5) {
                    current.width = current.width / pixelRatio;
                    current.height = current.height / pixelRatio;
                  }*/

                  if (instance.group.length > 1 && current.$content) {
                    if (current.index == 0) current.$content.append('<a data-fancybox-next class="button-next outside" href="javascript:;">→</a>');
                    else if (current.index == (instance.group.length - 1)) current.$content.append('<a data-fancybox-prev class="button-previous outside" href="javascript:;">←</a>');
                    else current.$content.append('<a data-fancybox-next class="button-next outside" href="javascript:;">→</a><a data-fancybox-prev class="button-previous outside" href="javascript:;">←</a>');
                  }
                  current.$content.append('<a data-fancybox-close class="button-close outside" href="javascript:;"><span  style="font-family: Arial">x</span></a>');
                }
              });
          }
      }
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