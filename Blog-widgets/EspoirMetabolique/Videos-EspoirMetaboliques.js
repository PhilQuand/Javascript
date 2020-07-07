var relPageCoords = {};
$("body").mousemove(function(event) {
  relPageCoords.X = event.pageX;
  relPageCoords.Y = event.pageY;
});
$('[data-fancybox-video]').fancybox({
  baseClass: 'customInlineBaseClass',
  smallBtn: false,
  toolbar: false,
  afterClose: function(instance, current) {
    if ('parentIFrame' in window) {
      //parentIFrame.scrollTo(0, 0);
    }
  },
  beforeClose: function(instance, current) {
    if ('parentIFrame' in window) {
      parentIFrame.autoResize(true);
    }
  },
  afterShow: function(instance, current) {
    var fancybox_content = $(".customInlineBaseClass .fancybox-content");
    //fancybox_content.prop("style", "");
  },
  afterLoad: function(instance, current) {
    /*var numItems = $('[data-fancybox-video]').length;
    var numItem = current.opts.$orig[0].dataset.imgNum;
    var top = 0;
    var numArticles = numItems - numItem;
    var Articles = $('article');
    for( var i = 0; i < numArticles; i++) {
      top = top + $('article').eq(i).height();
    }
    top = top + $('article').eq(numArticles).height()*0.5;
    $('.customInlineBaseClass .fancybox-content').css('top', top);*/

    var frameSize = Math.max(relPageCoords.Y + 550, $("body").height());
    if ('parentIFrame' in window) {
      parentIFrame.autoResize(false);
      parentIFrame.size(frameSize); // Set height to parentIFrameSize
      //parentIFrame.scrollToOffset(0,0);
      //parentIFrame.scrollTo(0, 0);
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
  },
  onUpdate: function(opts, obj) {
    var top = 0;
    var orig = obj.opts.$orig[0];
    var closestTop = orig.closest('article');
    var offsetTop = closestTop.offsetTop;
    var top = offsetTop + 'px';
    //var offsetHeight = closestTop.offsetHeight;
    $('.customInlineBaseClass').css('top', top);
  },
});