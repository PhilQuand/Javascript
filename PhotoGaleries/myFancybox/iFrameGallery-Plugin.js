(function($) {
  $.fn.iFrameGallery = function(options) {

    var _this = this;
    Promise.all([
      //  chargements des dépendances css
      load.css('https://philquand.github.io/Javascript/PhotoGaleries/myFancybox/iFrameGallery-Plugin.css'),
      load.css('https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.css'),
      load.css('https://philquand.github.io/Javascript/PhotoGaleries/myFancybox/myFancybox.css'),
      //  chargements des dépendances js
      load.js('https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.js'),
      load.js('https://philquand.github.io/Javascript/PhotoGaleries/myFancybox/myFancybox.js'),
      load.js('https://philquand.github.io/Javascript/Hi-base64/hi-base64.js'),
    ]).then(function() {
      console.log('Everything has loaded!');
      if (typeof options !== 'undefined' && typeof options.archi !== 'undefined' && options.archi.length > 0) {

        var indexInlineHTML = 0;
        var divLinkID = 'none';
        var divCont;
        var thumbs;
        if (options.accessmode !== 'undefined') {
          var divLinkID = $('#' + options.accessmode);
          /*var divLinkID = $('#' + options.accessmode).clone();
          $(_this).append(divLinkID);
          $('#' + options.accessmode).removeAttr('id');*/
        }
        var noneBgImage = 'none';
        if (typeof options.noneBgImage !== 'undefined') noneBgImage = options.noneBgImage;

        if (typeof options.thumbs === 'undefined') thumbs = true;
        else thumbs = options.thumbs;

        var divArchi = $('<div id="divArchi" style="display: flex; flex-wrap: wrap;"></div>');
        $(_this).append(divArchi);

        var parentIFrameSize = {};
        var iFrameNum = {};
        for (i = 0; i < options.archi.length; i++) {

          var imgID = options.archi[i].imgID;
          var svgInfos = options.archi[i].svgInfos;
          var idG = options.archi[i].idG;
          var idGtyp = options.archi[i].idGtyp;
          var idGlinkID = options.archi[i].idGlinkID;
          var idGExt = options.archi[i].idGExt;
          var pdfLink = options.archi[i].pdfLink;
          var inlineProgram = options.archi[i].inlineProgram;
          if (typeof inlineProgram === 'undefined') inlineProgram = 'inlineProgram';
          if (typeof iFrameNum[inlineProgram] === 'undefined') iFrameNum[inlineProgram] = 0;
          var inlineProgramIndex = inlineProgram + '-' + ++iFrameNum[inlineProgram];
          if (typeof options.parentIFrameSize !== 'undefined') parentIFrameSize[inlineProgramIndex] = parseInt(options.parentIFrameSize);
          if (typeof options.archi[i].parentIFrameSize !== 'undefined') {
            parentIFrameSize[inlineProgramIndex] = parseInt(options.archi[i].parentIFrameSize);
          }
          if (iFrameNum[inlineProgram] == 1) parentIFrameSize[inlineProgram] = parentIFrameSize[inlineProgramIndex];

          if (idG.split("id=").length > 1) {
            idG = idG.split("id=")[1];
            idG = "https://docs.google.com/file/d/" + idG + "/preview"
          }
          else if (idG.split("file/d/").length > 1) {
            idG = idG.split("file/d/")[1];
            idG = idG.split("/view")[0];
            idG = "https://docs.google.com/file/d/" + idG + "/preview"
          }
          addInfos(imgID, svgInfos, idG, idGtyp, idGlinkID, idGExt, pdfLink, divArchi, divLinkID, inlineProgram, thumbs, options.archi.length);
        }

      }

      function addInfos(imgID, svgInfos, idG, idGtyp, idGlinkID, idGExt, pdfLink, divArchi, divLinkID, inlineProgram, thumbs, archiLength) {
        imgBase = getIMG(imgID, svgInfos);
        if (idGtyp == 'inlined') {
          if (indexInlineHTML == 0) divCont = $('<div id="contInlineHTML"></div>').insertAfter(divArchi);
          idG = inlineHTML(idG, divCont, pdfLink);
        }
        var inputLink = linkBuild(idG, inlineProgram, imgBase, thumbs);
        if (typeof idGExt !== 'undefined') {
          var innerLink = inputLink.clone();
          divArchi.append(innerLink);
          innerLink.wrap('<div style="display: none"></div>');
          inputLink = $('<a href="' + idGExt + '">' + inputLink.html() + '</a>');
        }
        if (divLinkID != 'none') {
          var IDlink = divLinkID.find('#' + idGlinkID);
          if (IDlink.length > 0) {
            var hrefInit = window.location.href;
            hrefInit = hrefInit.split("#")[0];
            if (archiLength > 1) {
              var inlineProgramNum = divArchi.prevAll().length + 1;
              //IDlink.wrapInner('<a href="' + window.location.href + '#inlineProgram-' + inlineProgramNum.toString() + '"></a>');
              IDlink.wrapInner('<a href="' + hrefInit + '#inlineProgram-' + inlineProgramNum.toString() + '"></a>');
            }
            else {
              //IDlink.wrapInner('<a href="' + window.location.href + '#inlineProgram"></a>');
              IDlink.wrapInner('<a href="' + hrefInit + '#inlineProgram"></a>');
            }
          }
          inputLink.insertBefore(divArchi);
          inputLink.wrap('<div style="display: none"></div>')
        }
        else {
          if (typeof idGlinkID !== 'undefined') {
            if (idGlinkID.length > 4 && idGlinkID.substring(0, 4) == 'http') {
              inputLink.find("img").attr("src", idGlinkID);
            }
            else {
              inputLink.find("img").attr("src", $("#" + idGlinkID).attr("src"));
            }
          }
          divArchi.append(inputLink, '<br/>');
        }
        if (idGtyp != 'inlined' && idG[0] == '#') {
          var inpLinkidG = $(idG);
          var divLinkidG = inpLinkidG.clone();
          divArchi.append(divLinkidG);
          inpLinkidG.removeAttr('id');
          if (typeof idGlinkID === 'undefined') divLinkidG.wrap('<div style="display: none"></div>')
        }

        function getIMG(imgID, svgInfos) {
          if (typeof imgID !== 'undefined') {
            if (imgID.length > 4 && imgID.substring(0, 4) == 'http') {
              return imgID;
            }
            else {
              imgTag = $("#" + imgID);
              if (imgTag.is('img')) {
                imgBase = $("#" + imgID).attr('src');
                return imgBase;
              }
              else {
                var svgTemp = imgTag.html();
                svgTemp = $('<svg width="100%" height="100%" viewBox="0 0 400 400" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">' + svgTemp + '</svg>');
              }
            }
          }
          else if (typeof svgInfos === 'undefined') return noneBgImage;
          else {
            var svgTemp = $('<svg width="100%" height="100%" viewBox="0 0 400 400" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><rect x="10" y="10" width="100%" height="100%" stroke="blue" fill=white stroke-opacity="1.0" fill-opacity="0.8"/> <g transform="matrix(0.622762,0,0,0.695394,-73.9671,-168.06)"> <text x="187.961px" y="471px" style="' + "font-family:'ArialMT', 'Arial', sans-serif;font-size:96px;fill:rgb(244,60,61);" + '" id="l1"></text> <text x="310.68px" y="549.099px" style="' + "font-family:'ArialMT', 'Arial', sans-serif;font-size:64px;fill:rgb(244,60,61);" + '" id="l2"></text> <text x="319.57px" y="615.193px" style="' + "font-family:'ArialMT', 'Arial', sans-serif;font-size:64px;fill:rgb(244,60,61);" + '" id="l3"></text> <text x="372.945px" y="693.292px" style="' + "font-family:'ArialMT', 'Arial', sans-serif;font-size:64px;fill:rgb(244,60,61);" + '" id="l4"></text> </g></svg>');
          }
          if (typeof svgInfos !== 'undefined') {
            for (var i = 0; i < svgInfos.length; i++) {
              svgTemp.find('#l' + (i + 1).toString()).html(svgInfos[i]);
            }
          }
          //divArchi.append(svgTemp, '<br/>');
          var svgInfosstr = svgTemp.get(0).outerHTML;
          //divArchi.append('<p>' + svgInfosstr + '</p>')
          var svgInfosbase64r = base64.encode(svgInfosstr);
          //divArchi.append('<p>' + svgInfosbase64r + '</p>')

          var imgBase = 'data:image/svg+xml;base64,' + svgInfosbase64r;
          return imgBase;
        }

        function linkBuild(idG, inlineProgram, imgBase, thumbs) {
          if (thumbs) {
            if (idG[0] != '#') var myLink = $('<a class="data-fancybox-inline" data-fancybox="' + inlineProgram + '" data-slide-class="customVid" data-type="iframe" data-src="' + idG + '" href="javascript:;" data-thumb=' + "'" + '&#39;' + imgBase + '&#39;' + "'" + '><img class="iFrameGalleryIMG" src="' + imgBase + '" /></a>')
            else {
              var myLink = $('<a class="data-fancybox-inline" data-fancybox="' + inlineProgram + '" data-slide-class="customVid" data-type="inline" data-src="' + idG + '" href="javascript:;" data-thumb=' + "'" + '&#39;' + imgBase + '&#39;' + "'" + '><img class="iFrameGalleryIMG" src="' + imgBase + '" /></a>');
            }
          }
          else {
            if (idG[0] != '#') var myLink = $('<a class="data-fancybox-inline" data-fancybox="' + inlineProgram + '" data-slide-class="customVid" data-type="iframe" data-src="' + idG + '" href="javascript:;" ><img class="iFrameGalleryIMG" src="' + imgBase + '" /></a>')
            else {
              var myLink = $('<a class="data-fancybox-inline" data-fancybox="' + inlineProgram + '" data-slide-class="customVid" data-type="inline" data-src="' + idG + '" href="javascript:;" ><img class="iFrameGalleryIMG" src="' + imgBase + '" /></a>');
            }
          }
          return myLink;
        }

        function inlineHTML(idG, divCont, pdfLink) {
          indexInlineHTML++;
          var article = 'article-' + indexInlineHTML;
          var result = getMyInnerLinkContent(idG);
          var title = $.trim(result.title.html());
          var pdfImage = "https://1.bp.blogspot.com/-TI4G_l6BEOc/XSdAHVMoDPI/AAAAAAAAjck/DBWbre-z2mk3QLeZ1xUwUsJO4ofxFjURwCLcBGAs/s1600/pdf%2Bicon.jpg";
          var item = $('<div class="incrustation articleFancy" id="' + article + '" ></div>').append(
            $('<div class="incrustation fontFancy"></div>').append(
              $('<center></center>').append(
                $('<a class="pdfref" href="' + pdfLink + '"><img style="float: right; width: 40px;" border="0" data-original-height="122" data-original-width="98" src="' + pdfImage + '" /></a>'), $('<div class="titreFancy" ></div>')
              ), $('<div class="corpsFancy" ></div>')
            )
          );

          item.find('.titreFancy').html(title);
          item.find('.corpsFancy').append(result.body);
          item.find('.fancyNotInlined').css('display', 'none');
          divCont.append(item);
          return '#' + article;
        }
      }
      $(document).ready(function() {
        $(".data-fancybox-inline").fancybox({
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
            'thumbs',
            'prev',
            'next'
          ],
          /*iframe: {
            preload: false
          },*/
          baseClass: 'iFrameGalleryClass',

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
            //console.info( instance.Thumbs );
            //console.info( instance.Thumbs.$button[0]  );
            $("button.fancybox-button.fancybox-button--thumbs").click(function() {
              var elements = $(".iFrameGalleryClass .fancybox-thumbs__list").find("a").filter(function() {
                $(this).prop("target", "_self");
                // only keep the elements that have the correct background image
                return $(this).css("backgroundImage").indexOf(noneBgImage) > -1;
              });
              elements.css("display", "none");
            });
            if (instance.group.length > 1 && current.$content) {
              var arrow_left = $(".iFrameGalleryClass .fancybox-button.fancybox-button--arrow_left");
              arrow_left.css("display", "block");
              var arrow_right = $(".iFrameGalleryClass .fancybox-button.fancybox-button--arrow_right");
              arrow_right.css("display", "block");
              if (current.index == 0) arrow_left.css("display", "none");
              else if (current.index == (instance.group.length - 1)) arrow_right.css("display", "none");
            }
            /*if ( instance.group.length > 1 && current.$content ) {
              if (current.index == 0) current.$content.append('<a data-fancybox-next class="button-next" href="javascript:;">→</a>');
              else if (current.index == (instance.group.length - 1)) current.$content.append('<a data-fancybox-prev class="button-previous" href="javascript:;">←</a>');
              else current.$content.append('<a data-fancybox-next class="button-next" href="javascript:;">→</a><a data-fancybox-prev class="button-previous" href="javascript:;">←</a>');
            }*/
            /*if ( instance.group.length > 1 && current.$content ) {
              current.$content.append('<a data-fancybox-next class="button-next" href="javascript:;">→</a><a data-fancybox-previous class="button-previous" href="javascript:;">←</a>');
            }*/

            //current.$content.append('<a data-fancybox-close class="button-close" href="javascript:;">×</a>');
          }

        });
      });
    }).catch(function() {
      console.log('Oh no, epic failure!');
    });
  };
  var load = (function() {
    // Function which returns a function: https://davidwalsh.name/javascript-functions
    function _load(tag) {
      return function(url) {
        // This promise will be used by Promise.all to determine success or failure
        return new Promise(function(resolve, reject) {
          var element = document.createElement(tag);
          var parent = 'body';
          var attr = 'src';

          // Important success and error for the promise
          element.onload = function() {
            resolve(url);
          };
          element.onerror = function() {
            reject(url);
          };

          // Need to set different attributes depending on tag type
          switch (tag) {
            case 'script':
              element.async = true;
              break;
            case 'link':
              element.type = 'text/css';
              element.rel = 'stylesheet';
              attr = 'href';
              parent = 'head';
          }

          // Inject into document to kick off loading
          element[attr] = url;
          document[parent].appendChild(element);
        });
      };
    }

    return {
      css: _load('link'),
      js: _load('script'),
      img: _load('img')
    }
  })();
})(jQuery);