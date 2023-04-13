(function($) {
  var randGen = new Generator();
  $.fn.AlaUneFB4 = function(options) {
    var _this = this;
    Promise.all([
  //  chargements des dépendances css
  load.css('https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css'),
  //  chargements des dépendances js
  load.js('https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js'),
  load.js('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js'),
    ]).then(
    function() {
      console.log('Everything has loaded!');
      if (jQuery.type(options) == 'undefined') return false;
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
            var dataOptions = '';
            if (jQuery.type(options.href[i].dataCaption) != 'undefined') dataOptions += 'data-caption="'+  options.href[i].dataCaption + '" ';
            if (jQuery.type(options.href[i].dataWidth) != 'undefined') dataOptions += 'data-width="'+  options.href[i].dataWidth + '" ';
            if (jQuery.type(options.href[i].dataHeight) != 'undefined') dataOptions += 'data-height="'+  options.href[i].dataHeight + '" ';
            if (jQuery.type(options.href[i].dataThumb) != 'undefined') dataOptions += 'data-thumb="'+  options.href[i].dataThumb + '"' ;
             switch (options.href[i].dataType) {
              case "inlineId":
                if (jQuery.type(options.href[i].dataThumb) == 'undefined') $(_this).append('<a style="display:none" class="' + randNum + '" data-src="#' + options.href[i].dataSrc + '" data-fancybox="' + randNum + '">inline ' + i + '</a>');
                else $(_this).append('<a style="display:none" class="' + randNum + '" data-src="#' + options.href[i].dataSrc + '" data-fancybox="' + randNum + '" '+ '  ' + dataOptions + '>inline ' + i + '</a>');
                break;
              case "inline":
                 var convertMeToImg = '<div class="defaultFancyWrapper" style="display:none;" id="' + randHid + i + '"> \
                              <div class="fontFancy defaultFancy"> \
                              ' + options.href[i].dataSrc + ' \
                              </div></div>';
                 $(_this).append(convertMeToImg);

                if (jQuery.type(options.href[i].dataThumb) == 'undefined') dataOptions += 'data-thumb="https://blogger.googleusercontent.com/img/a/AVvXsEjMWxblwgtmKTWNF_fJjbBus9KzMH1RKOrZiSzW2wv3nxFBAlV3gpc77oYJHo05s8QbCiyxnSQ5rVtbRwoeBAKlKqak4ifKKJR6EugSQmQdXilvW7vgOWLgxmPk6bKKn9SbLCy61YbjJtEpeoEizWoPfN0RZq-Ern7NywqYMzss64bc0lvcxDR_zv_z"' ;
                $(_this).append('<a style="display:none" class="' + randNum + '" data-src="#' + randHid + i + '" data-fancybox="' + randNum + '" '+ '  ' + dataOptions + '>inline ' + i + '</a>');
                break;
              case "iframe":
                $(_this).append('<a style="display:none" class="' + randNum + ' fancybox.iframe" data-type="iframe" data-fancybox="' + randNum + '" data-src="' + options.href[i].dataSrc + '" href="javascript:;" '+ '  ' + dataOptions + '>iframe ' + i + '</a>');
                break;
              case "images":
                if (jQuery.type(options.href[i].dataThumb) == 'undefined') dataOptions += 'data-thumb="'+  options.href[i].dataSrc + '"' ;
                $(_this).append('<a style="display:none" class="' + randNum + ' fancybox.images" data-fancybox="' + randNum + '" href="' + options.href[i].dataSrc + '" ' + '  ' + dataOptions + '>images ' + i + '</a>');
                break;
              case "video":
                if (jQuery.type(options.href[i].dataRatio) != 'undefined') dataOptions += 'data-ratio="'+  options.href[i].dataRatio + '"  ';
                $(_this).append('<a style="display:none" class="' + randNum + ' fancybox.video" data-fancybox="' + randNum + '" href="' + options.href[i].dataSrc+ '" ' + '  ' + dataOptions + '>video ' + i + '</a>');
                break;
              default:
                console.log('AlaUne plugin error options.href = ' + options.href);
            }
          }
        }
      }
      var src = options.src;
      switch (jQuery.type(src)) {
        case "undefined":
          $(_this).wrap('<div class="alaUneWrapper"/>');
          _this = _this.parent();
          break;
        case "string":
          if (src.indexOf('http') == 0) src = ('<img class="img-AlaUne" src="' + src + '" />');
          $(_this).find('.' + randNum + ':first').html(src);
          break;
        default:
          log('AlaUne plugin error src');
      }
      $(_this).find('.' + randNum + ':first').css('display','block');
      $(_this).find('.' + randNum + ':first').css('cursor','grab');
    /*}).catch(function() {
      console.log('Oh no, epic failure!');*/
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