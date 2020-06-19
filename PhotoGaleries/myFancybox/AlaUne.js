import ShadersGallery from 'https://philquand.github.io/Javascript/PhotoGaleries/Shaders/Shaders17.js';
(function($) {
  $.fn.AlaUne = function(options) {
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
      $(this).append(src);
      return;
    }
    var randGen = new Generator();
    var randNum = 'FB' + randGen.getrand();
    var randHid = 'HD' + randGen.getrand();
    switch (jQuery.type(options.href)) {
      case "string":
        $(this).append('<a href="' + options.href + '">' + src + '</a>');
        break;
      case "array":
        break;
      case "object":
        options.href = [options.href]
        break;
      default:
        log('AlaUne plugin error options.href = ' + options.href);
    }
    for (var i = 0; i < options.href.length; i++) {
      if (jQuery.type(options.href[i].dataType) == 'string') {
        if (jQuery.type(options.href[i].dataSrc) == 'undefined') log('for href[' + i + '] dataSrc is undefined');
        else {
          switch (options.href[i].dataType) {
            case "inline":
              $(this).append('<div class="articleFancy" id="' + randHid + i + '"> \
                              <div class="corpsFancy"> \
                              ' + options.href[i].dataSrc + ' \
                              </div></div>  \
                              <a style="display:none" class="' + randNum + '" data-src="#' + randHid + i + '" data-fancybox="' + randNum + '" data-width="1132" data-height="1600">inline ' + i + '</a>');
              //<a style="display:none" class="' + randNum + ' fancybox.inline" data-src="#hidden-content-1" data-fancybox="' + randNum + '" data-width="50%" data-height="800">inline ' + i + '</a>');
              break;
            case "iframe":
              //$(this).append('<a style="display:none" class="fancybox fancybox.iframe" data-type="iframe" data-fancybox="FB' + randNum + '" data-src="' + options.href[i].dataSrc + '" href="javascript:;" >iframe ' + i +'</a>');
              $(this).append('<a style="display:none" class="' + randNum + ' fancybox.iframe" data-type="iframe" data-fancybox="' + randNum + '" data-src="' + options.href[i].dataSrc + '" href="javascript:;" data-width="1132" data-height="1600">iframe ' + i + '</a>');
              break;
            case "images":
              //$(this).append('<a style="display:none" class="fancybox" data-fancybox="FB' + randNum + '" href="' + options.href[i].dataSrc + '" >images ' + i +'</a>');
              $(this).append('<a style="display:none" class="' + randNum + ' fancybox.images" data-fancybox="' + randNum + '" href="' + options.href[i].dataSrc + '" data-width="1132" data-height="1600">images ' + i + '</a>');
              break;
            case "video":
              //$(this).append('<a style="display:none" class="fancybox" data-fancybox="FB' + randNum + '" href="' + options.href[i].dataSrc + '" >images ' + i +'</a>');
              $(this).append('<a style="display:none" class="' + randNum + ' fancybox.video" data-fancybox="' + randNum + '" href="' + options.href[i].dataSrc + '">video ' + i + '</a>');
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
      $(this).append('<a href="' + loc + '#' + randNum + '-1">' + src + '</a>');
    else
      $(this).append('<a href="' + loc + '#' + randNum + '">' + src + '</a>');
    // pour déclencher: https://latouraineinsoumise.blogspot.com/#images-1
    switch (jQuery.type(options.fancyClass)) {
      case "string":
        $('.' + randNum).fancybox({
          baseClass: 'customInlineBaseClass',
          smallBtn: false,
          toolbar: false,
          afterLoad: function(instance, current) {

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
  }

  function Generator() {};

  Generator.prototype.rand = Math.floor(Math.random() * 26) + Date.now();

  Generator.prototype.getrand = function() {
    return this.rand++;
  };
})(jQuery);