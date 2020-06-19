import ShadersGallery from 'https://philquand.github.io/Javascript/PhotoGaleries/Shaders/Shaders17.js';
(function($) {
  $.fn.Shaders = function(options) {
    if (jQuery.type(options) != 'undefined') {
      if (jQuery.type(options.urls) == 'undefined' ||
        jQuery.type(options.imageSize) == 'undefined' ||
        jQuery.type(options.imageSize.x) == 'undefined' ||
        jQuery.type(options.imageSize.y) == 'undefined') return false;

      var imageSize = options.imageSize;
      var randGen = new Generator();
      var CLthis =  'CL' + randGen.getrand();
      $(this).addClass(CLthis);
      CLthis =  '.' + CLthis;
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
          urls: options.urls,
          imageSize: options.imageSize,
          callbacks: {
            onGalleryCreated: function() {
              console.log('It\'s time to remove preloader!');
              window.myGallery[randNum].goToNextSlide();
              var timer = setInterval("window.myGallery['" + randNum + "'].goToNextSlide()", 5000);
            }
          }
        };
        window.myGallery[randNum] = new ShadersGallery(ShadersGalleryoptions);
        console.log(window.myGallery[randNum]);
        $(this).wrapInner('<a href="' + window.location.href + '#' + randNum + '-1"></a>');
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
})(jQuery);