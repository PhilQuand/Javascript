var windowParent = window.parent;
var articleFancy = {
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
  beforeClose: function(instance, current) {
    var doNotClose = false;
    $('a.ptr').each(function() {
      var thisdonotclose = $(this).attr("data-donotclose");
      if (thisdonotclose == "true") {
        $(this).attr("data-donotclose", "false");
        doNotClose = true;
        return false;
      }
    })
    if (doNotClose) {
      return false;
    }
  },
  baseClass: 'articleFancyClass',
    afterLoad: function(instance, current) {
    $(".getFancyFocus").focus();
    if (instance.group.length > 1 && current.$content) {
      if (current.index == 0) current.$content.append('<a data-fancybox-next class="button-next inside" href="javascript:;">→</a>');
      else if (current.index == (instance.group.length - 1)) current.$content.append('<a data-fancybox-prev class="button-previous inside" href="javascript:;">←</a>');
      else current.$content.append('<a data-fancybox-next class="button-next inside" href="javascript:;">→</a><a data-fancybox-prev class="button-previous inside" href="javascript:;">←</a>');
    }
    current.$content.append('<a data-fancybox-close class="button-close inside" href="javascript:;"><span  style="font-family: Arial">x</span></a>');
    //if (current.$content.find('.footFancy').length == 0)
    //  $(current.$content).find('.fontFancy').append('<div class="footFancy">pour naviguer dans les différentes pages utilisez les flèches latérales <br/>ou le navigateur de pages (icône en haut à gauche).</div>')
    $('.articleFancyClass .fancybox-button.fancybox-button--thumbs').attr('title', 'navigateur de pages');
    $('.articleFancyClass .fancybox-button.fancybox-button--close').attr('title', 'fermeture de la page');
    $('.articleFancyClass .fancybox-button.fancybox-button--arrow_right').attr('title', 'page suivante');
    $('.articleFancyClass .fancybox-button.fancybox-button--arrow_left').attr('title', 'page précédente');
    $('.articleFancyClass .fancybox-button:enabled').css('visibility', 'visible');
    $('.articleFancyClass .fancybox-button:disabled').css('visibility', 'hidden');
  },
  onUpdate: function(opts, obj) {

    var documentInnerHeight = windowParent.window.innerHeight;
    $('.articleFancyClass').css('height', documentInnerHeight + 'px');
    var titreFancyHeight = $('.titreFancy').height();
    var footFancyHeight = $('.footFancy').height();
    var fancyboxInnerMT = eval($('.articleFancyClass .fancybox-inner').css('margin-top').split("px")[0]);
    var fancyboxInnerMB = eval($('.articleFancyClass .fancybox-inner').css('margin-bottom').split("px")[0]);

    var corpsFancyHeight = documentInnerHeight - titreFancyHeight - fancyboxInnerMT - fancyboxInnerMB - 80;
    if (jQuery.type(footFancyHeight) != 'undefined') corpsFancyHeight = corpsFancyHeight - footFancyHeight;
    $('.articleFancyClass .corpsFancy').css('height', corpsFancyHeight + 'px');
    windowParent.window.scrollTo(0, 0);
  }
};