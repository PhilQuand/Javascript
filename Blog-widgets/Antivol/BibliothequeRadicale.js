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
var printNavHash = function() {
  $(".corpsBR").wrapInner("<div class='innerWrapBR'></div>");
  var navCorpsBR = $('<nav id="navCorpsBR"></nav>');
  $('.newBRMedia').each(function(index) {
    $(this).attr('id', 'newBRMedia-' + index)
    navCorpsBR.append('<li><a href="#newBRMedia-' + index + '"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="transparent" stroke="#4a00ff"></circle></svg></a></li>');
  })
  navCorpsBR.wrapInner('<ul></ul>"');
  $(".corpsBR").append(navCorpsBR);
  $(document).ready(function() {
    $(".corpsBR #navCorpsBR ul li a").hover(function() {
      $(this).find("circle").css('fill', '#4a00ff');
      $(this).find("circle").css('opacity', '0.3');
    }, function() {
      printHash();
    });
    $(".corpsBR #navCorpsBR ul li a").click(function() {
      $(".corpsBR nav ul li a circle").css('fill', 'transparent')
      $(this).find("circle").css('fill', '#4a00ff');
    });
    articleFancy.afterClose = function(instance, current) {
      $(".corpsBR #navCorpsBR ul li a").first().click();
    };
    var printHash = function() {
      $(".corpsBR nav ul li a circle").css('opacity', '1')
      if (window.location.hash == '' || window.location.hash == '#more') $(".corpsBR #navCorpsBR ul li a").first().click();
      else $(".corpsBR #navCorpsBR ul li a[href$='" + window.location.hash + "']").click();
    };

    // Print initial hash
    printHash();

    window.onhashchange = printHash;
  });
};