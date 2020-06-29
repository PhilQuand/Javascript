$('[data-fancybox]').fancybox({
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