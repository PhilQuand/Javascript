$(document).ready(function() {
  $(".post-body").find("a img").each(function() {
      var isImage = /\.(?:jpg|jpeg|gif|png)$/i.test($(this).parent("a").attr("href"));

      if (isImage) {
        var aClass = $(this).parent("a").attr('class');
        var aId = $(this).parent("a").attr('id');
        var aFancy = $(this).parent("a").attr('data-fancybox');
        if((typeof aClass ==='undefined') && (typeof aId ==='undefined') && (typeof aFancy ==='undefined')) {
          $(this).parent("a").attr('data-src', $(this).parent("a").attr("href"));
          $(this).parent("a").attr('data-fancybox', 'fancy-box');
          $(this).parent("a").attr('href', 'javascript:;');
          $(this).parent("a").addClass('data-fancybox');
        }
      }

      else {}
  });
  $(".data-fancybox").fancybox({
    /*infobar: true,
    arrows: false,
    animationEffect: "fade",
    transitionEffect: "slide",
    speed: 300,
    margin: [40, 20]*/               
  });
  $(".data-fancybox-inline").fancybox({
    infobar: true,
    arrows: false,
    animationEffect: "fade",
    transitionEffect: "slide",
    speed: 300,
    margin: [40, 20],               
    buttons : false,
    afterLoad : function( instance, current ) {
    if ( instance.group.length > 1 && current.$content ) {
      current.$content.append('<a data-fancybox-next class="button-next" href="javascript:;">→</a><a data-fancybox-prev class="button-previous" href="javascript:;">←</a>');
    }
    /*if ( instance.group.length > 1 && current.$content ) {
      current.$content.append('<a data-fancybox-next class="button-next" href="javascript:;">→</a><a data-fancybox-previous class="button-previous" href="javascript:;">←</a>');
    }*/
    
    //current.$content.append('<a data-fancybox-close class="button-close" href="javascript:;">×</a>');
  }

  });
});