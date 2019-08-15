$(document).ready(function() {
  $("#page_body").find("a img").each(function() {
    var isImage = /\.(?:jpg|jpeg|gif|png)$/i.test($(this).parent("a").attr("href"));

    if (isImage) {
      var aFancy = $(this).parent("a").attr('data-fancybox');
      //var aClass = $(this).parent("a").attr('class');
      //var aId = $(this).parent("a").attr('id');
      //if((typeof aClass ==='undefined') && (typeof aId ==='undefined') && (typeof aFancy ==='undefined')) {
      if (typeof aFancy === 'undefined') {
        $(this).parent("a").attr('data-src', $(this).parent("a").attr("href"));
        $(this).parent("a").attr('data-fancybox', 'fancy-box');
        $(this).parent("a").attr('href', 'javascript:;');
      }
      var hasDataFancybox = $(this).parent("a").hasClass('data-fancybox');
      var hasDataFancyboxInline = $(this).parent("a").hasClass('data-fancybox-inline');
      if ((!hasDataFancybox) && (!(hasDataFancyboxInline))) {
        $(this).parent("a").addClass('data-fancybox');
      }
    }

    else {}
  });
  goFancy();
});

function goFancy() {
  $(".data-fancybox").fancybox({
    buttons: [
      'play',
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
    toolbar: true,
    infobar: true,
    arrows: false,
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
    baseClass: 'customInlineBaseClass',
    afterLoad: function(instance, current) {
      if (instance.group.length > 1 && current.$content) {
        if (current.index == 0) current.$content.append('<a data-fancybox-next class="button-next" href="javascript:;">→</a>');
        else if (current.index == (instance.group.length - 1)) current.$content.append('<a data-fancybox-prev class="button-previous" href="javascript:;">←</a>');
        else current.$content.append('<a data-fancybox-next class="button-next" href="javascript:;">→</a><a data-fancybox-prev class="button-previous" href="javascript:;">←</a>');
      }
      /*if ( instance.group.length > 1 && current.$content ) {
        current.$content.append('<a data-fancybox-next class="button-next" href="javascript:;">→</a><a data-fancybox-previous class="button-previous" href="javascript:;">←</a>');
      }*/

      //current.$content.append('<a data-fancybox-close class="button-close" href="javascript:;">×</a>');
    }

  });
}

<script src='https://philquand.github.io/Javascript/Hi-base64/hi-base64.js'></script>
$.fn.iFrameGallery = function(options) {

  if (typeof options !== 'undefined' && typeof options.archi !== 'undefined' && options.archi.length > 0) {

    var divArchi = $('<div id="divArchi" style="display: flex; flex-wrap: wrap;"></div>').insertAfter($(this))

    for (i = 0; i < options.archi.length; i++) {
      var svgInfos = options.archi[i].svgInfos;
      var idG = options.archi[i].idG;
      if (idG.split("id=").length > 1) {
        idG = idG.split("id=")[1];
        idG = "https://docs.google.com/file/d/" + idG + "/preview"
      } else if (idG.split("file/d/").length > 1) {
        idG = idG.split("file/d/")[1];
        idG = idG.split("/view")[0];
        idG = "https://docs.google.com/file/d/" + idG + "/preview"
      }
      addInfos(svgInfos, idG, divArchi);
    }

  }

  if (typeof options !== 'undefined' && typeof options.accessmode !== 'undefined' && options.accessmode == 'link') {
   	$(this).click(function(){$("#divArchi").find("a").first().trigger("click");});
    	$(this).attr('href','javascript:;');
      $("#divArchi").attr('style','display: none');
  }

  function addInfos(svgInfos, idG, divArchi) {
     var svgTemp = $('<svg width="60" height="60" viewBox="0 0 400 400" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><rect x="10" y="10" width="100%" height="100%" stroke="blue" fill="white" stroke-opacity="0.8" fill-opacity="0.5"/> <g transform="matrix(0.622762,0,0,0.695394,-73.9671,-168.06)"> <text x="187.961px" y="471px" style="' + "font-family:'ArialMT', 'Arial', sans-serif;font-size:96px;fill:rgb(0,12,255);" + '" id="l1"></text> <text x="310.68px" y="549.099px" style="' + "font-family:'ArialMT', 'Arial', sans-serif;font-size:64px;fill:rgb(0,12,255);" + '" id="l2"></text> <text x="319.57px" y="615.193px" style="' + "font-family:'ArialMT', 'Arial', sans-serif;font-size:64px;fill:rgb(0,12,255);" + '" id="l3"></text> <text x="372.945px" y="693.292px" style="' + "font-family:'ArialMT', 'Arial', sans-serif;font-size:64px;fill:rgb(0,12,255);" + '" id="l4"></text> </g></svg>');
    for (var i = 0; i < svgInfos.length; i++) {
      svgTemp.find('#l' + (i+1).toString()).html(svgInfos[i]);
    }
    //divArchi.append(svgTemp, '<br/>');
    var svgInfosstr = svgTemp.get(0).outerHTML;
    //divArchi.append('<p>' + svgInfosstr + '</p>')
    var svgInfosbase64r = base64.encode(svgInfosstr);
    //divArchi.append('<p>' + svgInfosbase64r + '</p>')

     var imgBase64 = 'data:image/svg+xml;base64,' + svgInfosbase64r;

      if( idG[0] != '#')  divArchi.append('<a class="data-fancybox-inline" data-fancybox="inlineProgram"  data-type="iframe" data-src="' + idG + '" href="javascript:;" data-thumb=' + "'" + '&#39;' + imgBase64 + '&#39;' + "'" + '><img style="width: 5.8vw; height: 6.0vw; max-width: 87px; max-height: 90px; min-width: 58px; min-height: 60px;" src="' + imgBase64 + '" /><!/a>', '<br/>')
    else  divArchi.append('<a class="data-fancybox-inline" data-fancybox="inlineProgram"  data-type="inline" data-src="' + idG + '" href="javascript:;" data-thumb=' + "'" + '&#39;' + imgBase64 + '&#39;' + "'" + '><img style="width: 5.8vw; height: 6.0vw; max-width: 87px; max-height: 90px; min-width: 58px; min-height: 60px;" src="' + imgBase64 + '" /></a>', '<br/>')
  }

}