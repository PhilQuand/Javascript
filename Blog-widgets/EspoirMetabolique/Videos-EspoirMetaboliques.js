$('[data-fancybox-video]').fancybox({
  baseClass: 'customInlineBaseClass',
  smallBtn: false,
  toolbar: false,
  afterClose: function(instance, current) {
    if ('parentIFrame' in window) {
      parentIFrame.scrollTo(0, 0);
    }
  },
  beforeClose: function(instance, current) {
    if ('parentIFrame' in window) {
      parentIFrame.autoResize(true);
    }
  },
  afterShow: function(instance, current) {
    var fancybox_content = $(".iFrameGalleryClass .fancybox-content");
    fancybox_content.prop("style", "");
  },
  afterLoad: function(instance, current) {
    if ('parentIFrame' in window) {
      if (parentIFrameSize[instance.currentHash] > 0) {
        parentIFrame.autoResize(false);
        parentIFrame.size(parentIFrameSize[instance.currentHash]); // Set height to parentIFrameSize
      }
      else parentIFrame.size();
      //parentIFrame.scrollToOffset(0,0);
      parentIFrame.scrollTo(0, 0);
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
  }
});