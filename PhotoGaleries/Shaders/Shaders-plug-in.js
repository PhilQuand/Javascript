import ShadersGallery from 'https://philquand.github.io/Javascript/PhotoGaleries/Shaders/Shaders17.js';
(function($) {
  $.fn.Shaders = function(options) {
    if (jQuery.type(options) != 'undefined') {
      if (jQuery.type(options.images) == 'undefined' ||
        jQuery.type(options.imageSize) == 'undefined' ||
        jQuery.type(options.imageSize.x) == 'undefined' ||
        jQuery.type(options.imageSize.y) == 'undefined') return false;

      var ShaderGalleryTarget = options.GalleryLink;
      var imageSize = options.imageSize;
      var randGen = new Generator();
      var CLthis = 'CL' + randGen.getrand();
      $(this).addClass(CLthis);
      CLthis = '.' + CLthis;
      calcHeight();
      $(window).resize(function() {
        calcHeight();
      });

      function calcHeight() {
        var galWidth = $(CLthis).css('width');
        if (typeof galWidth === 'undefined') return;
        //var galHeight = $(galContainer).css('height');
        var galHeight = Number(galWidth.split("px")[0]) * imageSize.y / imageSize.x;
        $(CLthis).css('height', galHeight + 'px');
        //galHeight = $(galContainer).css('height');
      }
      var randGen = new Generator();
      window.myGallery = {};
      $(this).each(function() {
        var randNum = 'FB' + randGen.getrand();
        const ShadersGalleryoptions = {
          container: this,
          urls: options.images,
          imageSize: options.imageSize,
          callbacks: {
            onGalleryCreated: function() {
              console.log('It\'s time to remove preloader!');
              window.myGallery[randNum].goToNextSlide();
              var timer = setInterval("window.myGallery['" + randNum + "'].goToNextSlide()", 5000);
            }
          }
        };
        //$.getScript('https://cdnjs.cloudflare.com/ajax/libs/animejs/3.1.0/anime.min.js', function() {
        //$.getMultiScripts(script_arr,'').done(function() {
        var _this = this;
        Promise.all([
          //  chargements des dépendances css
          load.css('https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.css'),
          load.css('https://philquand.github.io/Javascript/PhotoGaleries/myFancybox/myFancybox.css'),
          load.css('https://philquand.github.io/Javascript/PhotoGaleries/myFancybox/AlaUne.css'),
          //  chargements des dépendances js
          load.js('https://cdnjs.cloudflare.com/ajax/libs/animejs/3.1.0/anime.min.js'),
          load.js('https://cdnjs.cloudflare.com/ajax/libs/three.js/110/three.min.js'),
          load.js('https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.js'),
          load.js('https://philquand.github.io/Javascript/PhotoGaleries/myFancybox/myFancybox.js'),
        ]).then(function() {
          console.log('Everything has loaded!');
          window.myGallery[randNum] = new ShadersGallery(ShadersGalleryoptions);
          var myGalleryTarget = window.location.href + '#' + randNum + '-1';
          $(_this).wrapInner('<a href="' + myGalleryTarget + '"></a>');
          if (jQuery.type(ShaderGalleryTarget) != 'undefined') {
            $('.' + ShaderGalleryTarget).attr("href", myGalleryTarget);
          }
        }).catch(function() {
          console.log('Oh no, epic failure!');
        });
        console.log(window.myGallery[randNum]);
        $(this).append('<div class="fancyData" style="display:none"></div>');
        for (var i = 0; i < ShadersGalleryoptions.urls.length; i++) {
          $(this).find('.fancyData').append('<a class="fancyboxTestSoignants" data-fancybox="' + randNum + '" data-src="' + ShadersGalleryoptions.urls[i] + '" data-thumb="' + ShadersGalleryoptions.urls[i] + '" href="javascript:;">' + randNum + ' #' + i + '</a>');
        }
        $(this).find('a').css("cursor", "pointer");
      });
      return;
    };
  };

  function Generator() {};

  Generator.prototype.rand = Math.floor(Math.random() * 26) + Date.now();

  Generator.prototype.getrand = function() {
    return this.rand++;
  };
  /*var script_arr = [
      'https://cdnjs.cloudflare.com/ajax/libs/animejs/3.1.0/anime.min.js', 
      'https://cdnjs.cloudflare.com/ajax/libs/three.js/110/three.min.js'
    ];
    $.getMultiScripts = function(arr, path) {
      var _arr = $.map(arr, function(scr) {
          return $.getScript( (path||"") + scr );
      });

      _arr.push($.Deferred(function( deferred ){
          $( deferred.resolve );
      }));

      return $.when.apply($, _arr);
    }*/
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