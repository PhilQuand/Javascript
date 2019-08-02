$(document).ready(function() {
  $("#page_body").find("a img").each(function() {
      var isImage = /\.(?:jpg|jpeg|gif|png)$/i.test($(this).parent("a").attr("href"));

      if (isImage) {
        var aFancy = $(this).parent("a").attr('data-fancybox');
        //var aClass = $(this).parent("a").attr('class');
        //var aId = $(this).parent("a").attr('id');
        //if((typeof aClass ==='undefined') && (typeof aId ==='undefined') && (typeof aFancy ==='undefined')) {
        if(typeof aFancy ==='undefined') {
          $(this).parent("a").attr('data-src', $(this).parent("a").attr("href"));
          $(this).parent("a").attr('data-fancybox', 'fancy-box');
          $(this).parent("a").attr('href', 'javascript:;');
        }
        var hasDataFancybox = $(this).parent("a").hasClass('data-fancybox');
        var hasDataFancyboxInline = $(this).parent("a").hasClass('data-fancybox-inline');
        if((!hasDataFancybox) && (!(hasDataFancyboxInline))) {
          $(this).parent("a").addClass('data-fancybox');
        }
      }

      else {}
  });
  $(".data-fancybox").fancybox({
    buttons : [
      'download',
      'thumbs',
      'close'
    ]
    /*infobar: true,
    arrows: false,
    animationEffect: "fade",
    transitionEffect: "slide",
    speed: 300,
    margin: [40, 20]*/               
  });
  $(".data-fancybox-inline").fancybox({
	  toolbar  : true,
    infobar: true,
    arrows: false,
    animationEffect: "fade",
    transitionEffect: "slide",
    speed: 300,
    margin: [40, 20],
    buttons: false,
	  thumbs : {
      autoStart   : false, // Display thumbnails on opening
      hideOnClose : true   // Hide thumbnail grid when closing animation starts
 	  },
    buttons : [
      'thumbs'
    ],
    baseClass : 'customInlineBaseCass',
    afterLoad: function(instance, current) {
      if (instance.group.length > 1 && current.$content) {
        if( current.index == 0 ) current.$content.append('<a data-fancybox-next class="button-next" href="javascript:;">→</a>');
        else if( current.index == (instance.group.length - 1) ) current.$content.append('<a data-fancybox-prev class="button-previous" href="javascript:;">←</a>');
        else current.$content.append('<a data-fancybox-next class="button-next" href="javascript:;">→</a><a data-fancybox-prev class="button-previous" href="javascript:;">←</a>');
      }
      /*if ( instance.group.length > 1 && current.$content ) {
        current.$content.append('<a data-fancybox-next class="button-next" href="javascript:;">→</a><a data-fancybox-previous class="button-previous" href="javascript:;">←</a>');
      }*/

      //current.$content.append('<a data-fancybox-close class="button-close" href="javascript:;">×</a>');
    }

  });
});