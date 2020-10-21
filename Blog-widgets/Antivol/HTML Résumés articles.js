<!-- jQuery for FancyBox 3-->
<script src='//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script>

<!-- Add fancyBox 3 -->
<!-- see documentation at : http://fancyapps.com/fancybox/3/docs/#options -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.css" rel="stylesheet" type="text/css" />
<link href="https://philquand.github.io/Javascript/PhotoGaleries/myFancybox/myFancybox.css" rel="stylesheet" type="text/css" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.js"></script>
<script src='https://philquand.github.io/Javascript/PhotoGaleries/myFancybox/myFancybox.js'></script>
<!-- End FancyBox -->

<!-- Add myTimeLine -->
<script src='https://philquand.github.io/Javascript/Blog-widgets/myTimeLine.js'></script>
<!-- End myTimeLinex -->
<!-- Add a modal window -->
<div class="articleFancy" id="hidden-content-1">
<div class="corpsFancy">
<!--img src="https://1.bp.blogspot.com/-hQwJFeC-ncU/Xd-JPD7ZEFI/AAAAAAAAkjI/-zBgSYCKR9Qgj4d-lz814YdzCpa1mhMpACLcBGAsYHQ/s1600/76646845_1690669684403742_3913454117124571136_o.jpg" /-->
<img src="https://1.bp.blogspot.com/-BdLFiwH5jes/XgM-KcHMp2I/AAAAAAAAkqM/OjrrBrQGtTAIIqqZFrHYkmD_5QHpsvwAACLcBGAsYHQ/s1600/Manifeste%2BCATDP2020.jpeg" />
</div>
</div>
<a style="display:none" class="trgImgUL" data-src="#hidden-content-1" data-fancybox="images" data-width="1132" data-height="1600">TEST Fancy</a>
<div class="articleFancy" id="hidden-content-2">
<div class="corpsFancy">
<!--img src="https://1.bp.blogspot.com/-m66JTk-a1oY/Xd9_VShqHFI/AAAAAAAAki8/YgooSCCzwAEPv236ldJ8Qj-4ES3HezXBwCK4BGAYYCw/s1600/Appel-5-Dec.jpeg" /-->
<img src="https://1.bp.blogspot.com/-_JLf5kaM85s/XgM-LpS6OjI/AAAAAAAAkqQ/cqGBAqkHnQEQbrHDjGJ1jdXQO7M-oDYzwCLcBGAsYHQ/s1600/Points%2Bclefs%2BCATDP2020.jpg" />
</div>
</div>
<a style="display:none" class="trgImgUL" data-src="#hidden-content-2" data-fancybox="images" data-width="1132" data-height="1600">TEST Fancy</a>
<!--a style="display:none" class="trgImgUL" href="https://1.bp.blogspot.com/-m66JTk-a1oY/Xd9_VShqHFI/AAAAAAAAki8/YgooSCCzwAEPv236ldJ8Qj-4ES3HezXBwCK4BGAYYCw/s1600/Appel-5-Dec.jpeg" data-fancybox="images" data-width="679" data-height="960">TEST Fancy</a-->
<style>
.customInlineBaseClass.fancybox-is-open .fancybox-bg {
    opacity: 0.1;
    //transition-timing-function: cubic-bezier(.22, .61, .36, 1);
}
.customInlineBaseClass .button-close,
.customInlineBaseClass .button-previous,
.customInlineBaseClass .button-next {
  background: black;
}
</style>
<style>
.articleFancyClass {
    position: absolute;
}  
/* Background color */
.articleFancyClass .fancybox-bg {
  background-color: #fff;
  opacity: 1;
}
.articleFancyClass.fancybox-show-toolbar.fancybox-show-infobar.fancybox-show-nav.fancybox-is-open.fancybox-can-swipe .fancybox-inner {
    margin: 20px 20px 20px 20px;
    box-shadow: rgba(0, 0, 0, 0.8) 0px 5px 25px;
    transition: box-shadow .2s;
}  
/*.articleFancyClass .fancybox-content {
    padding: 20px 20px 20px 20px;
    width: 100%;
} */
.articleFancyClass .button-close,
.articleFancyClass .button-previous,
.articleFancyClass .button-next {
  display:block;
  position: absolute;
  width: 30px;
  height: 30px;
  background: black;
  text-align: center;
  line-height: 30px;
  color: white;
  text-decoration: none;
  border-radius: 50%;
  font-size: 16px;
}
.articleFancyClass .button-previous,
.articleFancyClass .button-next  {
  top: 50%;
  margin-top: -22px;
  line-height: 30px;
}
.articleFancyClass .button-previous.inside {
    left: 0px;
}
.articleFancyClass .button-next.inside {
    right: 0px;
}
.articleFancyClass .button-close.inside {
  top: 22px;
  right: 22px;
  font-size: 22px;
}
.articleFancyClass .button-previous.outside {
    left: -30px;
}
.articleFancyClass .button-next.outside  {
    right: -30px;
}
.articleFancyClass .button-close.outside {
  top: -22px;
  right: -22px;
  font-size: 22px;
}
.articleFancyClass .fancybox-button.fancybox-button--close,
.articleFancyClass .fancybox-button.fancybox-button--arrow_left > div,
.articleFancyClass .fancybox-button.fancybox-button--arrow_right > div,
.articleFancyClass .fancybox-button.fancybox-button--thumbs {
    background: #808080;
}
.articleFancyClass .button-close {
    display: none;
}
.articleFancyClass .fancybox-button.fancybox-button--arrow_left,
.articleFancyClass .fancybox-button.fancybox-button--arrow_right {
    display: block;
    //display: none;
}
.articleFancyClass .button-previous,
.articleFancyClass .button-next {
    //display: block;
    display: none;
}
.articleFancy {
    width: 100%;
    display: none;
}
.fontFancy {
    font-family: Arial, Helvetica, sans-serif;;
    font-size: 18px;
    line-height: 1.4;
    height: 100%;
    padding: 0 0 0 0;
}
.titreFancy {
    //height: 55px;
    font-weight: bold;
    font-style: italic;
    color: #027ffd;
    font-size: 24px;
    letter-spacing: 2px;
    padding: 20px 10px 10px 10px;
}
.footFancy {
    height: 100px;
    text-align: center;
    font-style: italic;
    font-size: 14px;
    letter-spacing: 2px;
    padding: 10px 10px 10px 10px;
}
.titreFancy a:link, .footFancy a:link {
   color:inherit;
}
.corpsFancy {
    width: 100%;
    max-height: calc(100vh - 200px);
    overflow: auto;
    padding: 10px 30px 10px 30px;
    text-align: justify;
    text-justify: inter-word;

}

@media screen and (max-width: 600px) {
  .articleFancyClass .fancybox-navigation .fancybox-button {
    top: calc(15% - 50px);
  }
  .articleFancyClass .fancybox-inner {
    margin: 0 0 0 0;
	box-shadow: none;
    transition: none;
  }  
  .corpsFancy {
    max-height: none;
    padding: 10px 10px 10px 10px;
  }
  .titreFancy {
    font-size: 18px;
    line-height: 1.;
    margin-left: 60px;
  }
}
</style>
<script>
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
  baseClass: 'articleFancyClass',
  onActivate: function(instance, current) {},
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
</script>
<script>
// pour déclencher: https://latouraineinsoumise.blogspot.com/#images-1
$('.trgImgUL').fancybox({
    baseClass: 'customInlineBaseClass',
    smallBtn: false,
    toolbar: false,
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
        current.$content.append('<a data-fancybox-close class="button-close" href="javascript:;">x</a>');
    }
});
</script>
<!-- End of modal window -->
<style>
.mySumFeat, .mySumReg {
line-height: 1.6;
}
.mySumFeat {
color: black;
font-size: 125%;
}
.mySumReg {
color: grey;
}
@media screen and (max-width: 425px) {
  .mySumReg div img {
    width: 100%;
  }
}
</style>
<script>
function compSumAndImg(strx, chop, imgtag) {
  var result = {
    img: '',
    summary: ''
  };
  var chopIn = chop;
  var chopCount = 0;
  msg = '';
  if (strx.indexOf("<") != -1) {
    var s = strx.split("<");
    var news = [];
    if( imgtag == '' ) {
      news.push('<br/>');
      chop += 5;
    }
    var isToDelete = 0;
    var isFinished = false;
    for (var i = 0; i < s.length; i++) {
      if (result.img == '') {
        var myTag = s[i].substring(0, s[i].indexOf(">"));
        if ((myTag.indexOf('img') != -1) && (myTag.indexOf('src=') != -1)) {
          var mySrc = myTag.split('src');
          var myDelim = mySrc[1].substring(mySrc[1].indexOf("http") - 1, mySrc[1].indexOf("http"));
          var myHref = mySrc[1].split(myDelim);
          result.img = myHref[1];
        }
      }
      var isdebDiv = debDiv(s[i]);
      if (isdebDiv) {
        var debToDelete = debDivToDelete(s[i]);
        if((isToDelete != 0) || debToDelete) {
          isToDelete++;
        }
      } 
      if (s[i].indexOf(">") != -1) {
        var isendDiv = endDiv(s[i]);
        if ((isToDelete > 0) && isendDiv) {
          isToDelete--;
        }
        if (!(isToDelete > 0)) {
          var curS = '';
          if (isTagtoSum(s,i)) {
            //if(chopCount < chopIn) chop += s[i].indexOf(">") + 1
            curS = '<' + s[i];
            if(chopCount < chopIn) {
              chop += s[i].indexOf(">") + 2;
            } else isFinished = true;
          }
          else {
            curS = s[i].substring(s[i].indexOf(">") + 1, s[i].length);
          }
          chopCount += (s[i].length - s[i].indexOf(">")-1);
          // insert two line breaks after authors
          if ((i > 1) && (s[i - 2] == '/span>') && (s[i - 1] == '/strong>') && (s[i].indexOf('/p>') == 0)) {
            news.push('<br/>');
            chop += 5;
          }
          news.push(curS);
        }
      }
      //if( isFinished ) i = s.length;
    }
    strx = news.join("");
  }

  if (msg != '') alert('news.length : ' + news.length + '\ns.length : ' + s.length + '\nmsg : \n' + msg);
  chop = (chop < strx.length - 1) ? chop : strx.length - 1;
  if(chop != strx.length - 1) while (strx.charAt(chop) != ' ') chop--;
  strx = strx.substring(0, chop);
  result.summary = strx + '...';
  return result;
}

function isTagtoSum(s,i) {
  //if(s[i][0] == 'a' || s[i].indexOf('/a>') > -1) {
  if( s[i][0] == 'a' && s[i+1].indexOf('img') != 0 ) {
      return true; 
  } 
  if( s[i].indexOf('/a>') > -1 && s[i-1].indexOf('img') != 0 ) {
      return true; 
  } 
  if( s[i].indexOf('strong') > -1 ) {
    return true;
  } 
  if( s[i].indexOf('em>') > -1 ) {
    return true;
  } 
  return false;
}
function debDivToDelete(s) {
  var myTag = s.substring(0, s.indexOf(">"));
  if ((myTag.indexOf('div') > -1) && (myTag.indexOf('data-summary="no"') > -1)) {
    return true;
  }
  if ( (myTag.indexOf('script') == 0) ) {
    return true;
  }
  if ( myTag.indexOf('style') == 0 ) {
    return true;
  }
  return false;
}

function debDiv(s) {
  var myTag = s.substring(0, s.indexOf(">"));
  if (myTag.indexOf('div') > -1 && !(myTag.indexOf('/') > -1)) {
    return true;
  }
  if ( (myTag.indexOf('script') == 0) && !((myTag.indexOf('/script') > -1) || (myTag[myTag.length-1] == '/'))) {
    return true;
  }
  if ( (myTag.indexOf('style') == 0) && !((myTag.indexOf('/style') > -1) || (myTag[myTag.length-1] == '/'))) {
    return true;
  }
  return false;
}

function endDiv(s) {
  var myTag = s.substring(0, s.indexOf(">"));
  if (myTag.indexOf('div') > -1 && myTag.indexOf('/') > -1) {
    return true;
  }
  if (myTag.indexOf('/script') == 0 ) {
    return true;
  }
  if (myTag.indexOf('/style') == 0 ) {
    return true;
  }
  return false;
}

img_thumb_width_reg = 180; // Image Thumbnail Width
img_thumb_height_reg = 180; // Image Thumbnail Height
img_thumb_width_feat = 360; // Image Thumbnail Width
img_thumb_height_feat = 360; // Image Thumbnail Height
summary_noimg = 500; // Length of Summary Text if no image is Used
summary_img_reg = 400; // Length of Summary Text if post has Image Thumbnail
summary_img_feat = 400; // Length of Summary Text if post has Image Thumbnail

function createSummaryAndThumb(pID, isRegular) {
  var div = document.getElementById(pID);
  var imgtag = "";
  var img = div.getElementsByTagName("img");
  var summ = summary_noimg;
  /*if (isRegular && (img.length >= 1)) {
    imgtag = '<span style="overflow:hidden; border: none; margin:0 15px 10px 0; float:left; max-height:' + img_thumb_height + 'px;width:auto;"><img src="' + img[0].src + '" width="' + img_thumb_width + 'px" height="auto"/></span>';
    summ = summary_img;
  }*/
  if( img.length >= 1 ) {
    if (isRegular) {
      //imgtag = '<img style="float:left; margin: 0 1em 0.5em 0;" src="' + img[0].src + '" width="' + img_thumb_width_reg + 'px" height="auto"/>';
      imgtag = '<img style="float:left; margin: 0 1em 0.5em 0; padding-top: 5px; max-width: ' + img_thumb_width_reg + 'px; max-height: ' + img_thumb_height_reg + 'px;" src="' + img[0].src + '"/>';
      summ = summary_img_reg;
    }
    else {
      //imgtag = '<img style="float:left; margin: 0 1em 0.5em 0;" src="' + img[0].src + '" width="' + img_thumb_width_feat + 'px" height="auto"/>';
      imgtag = '<img style="float:left; margin: 0 1em 0.5em 0; padding-top: 5px; max-width: ' + img_thumb_width_feat + 'px; max-height: ' + img_thumb_height_feat + 'px;" src="' + img[0].src + '"/>';
      summ = summary_img_feat;
    }
  }
  var resul = compSumAndImg(div.innerHTML, summ, imgtag)
  var summary;
  //if( isRegular ) summary = '<table><tr>' + imgtag + '<td valign="top"><div class="mySumReg">' + resul.summary + '</div></td></tr></table>';
  //if( isRegular ) summary = imgtag + '<div class="mySumReg">' + resul.summary + '</div>';
  if( isRegular ) summary = '<div style="position: 0;" class="mySumReg"><div style="display: inline-block; margin: 1em 0 1em 0;">' + imgtag + resul.summary + '</div></div>';
  else summary = '<div style="position: 0;" class="mySumFeat"><div style="display: inline-block; margin: 1em 0 1em 0;">' + imgtag + resul.summary + '</div></div>';
  div.innerHTML = summary;
}
</script>
<!--style>
.bg-photo-overlay {
    background-image: url("https://1.bp.blogspot.com/-opaaRwNbCfA/XgNT-fyxG8I/AAAAAAAAkrk/TDWOtKZ4BoU__SfluVUzrYej6tKInUzoQCLcBGAsYHQ/s1600/Bord%2Bde%2BLoire%2B1200.png");
//background-color: #FFFCE5;
}
</style-->
<style>
.html2pdf {
  display: none;
}
.video-foreground,
.video-background iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.header-widget-home {
    //display: flex;
    align-items: center; 
    justify-content: center;
    width: 100%; 
}
.header-widget-home img {
    //max-width: 60px; 
    //width: 30%; 
    margin-right: 0.5em;
    margin-bottom: 20px;
}
/*.header-widget-home div {
    max-width: 500px; 
    width: 70%; 
}
.header-widget-home div h1 span {
  padding-bottom: 10px;
  border-bottom: thick solid #3FF60A;
  line-height: 48px;
}*/
.header-widget > div > h1 > img {
    //width: 100%; 
    max-width:300px;
    max-height:200px;
}
.header-widget > div > h1 p {
  font-family: "Arial Rounded MT Bold"; 
  font-size: 24px; 
  font-style: italic; 
  font-variant: normal; 
  font-weight: 400; 
  line-height: 1.1; 
  max-width: 500px;
}
.tabs .overflow-button a, .tabs li a {
  font-family: "Arial Rounded MT Bold"; 
}
/*.header-widget > div > h1 p, .overflowable-item {
  font-family: "Arial Rounded MT Bold"; 
}*/
.tabs .selected {
  border-bottom:4px solid #ff0000
}
.tabs .selected a{
  color:#ff0000
}
.sticky .header-widget > div > h1 img, 
.header-widget > div > h1 > a > img {
    //width: 100%; 
    max-width:300px;
    max-height:30px;
}
@media (max-width: 1100px) {
    .header-widget-home {
        display: block; 
    }
    .header-widget-home img {
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    .header-widget-home div {
        max-width: 100%;
        width: 100%; 
    }
}
</style>
<script>
if (window.location.pathname == '/') {
  banAnim();
  $('.header-widget').addClass('header-widget-home');
  $('.bg-photo').remove();
  $('.header-widget > div > h1').html('<img src="https://1.bp.blogspot.com/-p9LAvp-6A0c/X1EYOuMRJjI/AAAAAAAAnFM/7mrGVj8oPgAzfu7Q_pDKsr1WXLqtMyQGQCLcBGAsYHQ/s320/Logo%2Bl%2527antivol%2Brouge%2Bet%2Bnoir%2BAzo.png"/><center><p>« Être radical, c’est aller à la racine des problèmes et à la hauteur des solutions »</p></center>');
  //$('.header-widget > div').append('<center><img src="https://1.bp.blogspot.com/-ow5Anx1wNTk/X0qX0h2VojI/AAAAAAAAnE8/zdtTf1hbHyI6a8UHLeGoaUcmm_QLtwhNwCLcBGAsYHQ/s722/Logo%2BAzo%2Bv1%2Btransparent.png"/></center>');
  function banAnim() {
    //$('.page_body .centered-top').append('<div class="video-background"><div class="video-foreground"><iframe style="width:100%;height:100%;" src="http://127.0.0.1:8887/LAntivol.html" frameborder="0" allowfullscreen></iframe></div></div>');
    if (document.referrer == null || document.referrer.indexOf(window.location.hostname) < 0) {
      $('.header-widget').css('visibility', 'hidden');
      $('.page_body .centered-top').append('<div class="video-background"><div class="video-foreground"><iframe style="width:100%;height:100%;" src="https://philquand.github.io/Javascript/Blog-widgets/Antivol/Lantivol.html" frameborder="0" allowfullscreen></iframe></div></div>');
    }
    else {
      $('.header-widget').css('visibility', 'visible');
    }
  };
}
else {
  $('.header-widget > div > h1 > a').html('<img src="https://1.bp.blogspot.com/-p9LAvp-6A0c/X1EYOuMRJjI/AAAAAAAAnFM/7mrGVj8oPgAzfu7Q_pDKsr1WXLqtMyQGQCLcBGAsYHQ/s320/Logo%2Bl%2527antivol%2Brouge%2Bet%2Bnoir%2BAzo.png"/>');
  $(document).ready(function() {
    $('#FeaturedPost1').css('display', 'none');
    /*var head = $('div#header.container.section')
    head.append($('section.subscribe-section-container'));
    head.css('display', 'flex')
    head.css('align-items', 'center')
    head.children().first().css('margin-bottom', '0')*/
  });
}
$(document).ready(function() {
  $('.widget.BlogArchive > details').attr('open', 'open');
  $('.widget.Label > details').attr('open', 'open');
  $('.widget.Label > details > summary > .collapsible-title  > .title').html('Mots-clefs');
  $('.widget.Attribution').css('display', 'none');
  $('.widget.Attribution').css('display', 'none');
});
</script>
<style>
.mySumReg img {
  max-height: 50px;
}
.header {
  font-family: "Arial Rounded MT Bold"; 
  font-size:18px;
  color: #666666;
  line-height: 1.4;
  //font-style: italic;
  //background-color: #FEFEE2;
  //padding-top: 0.5em;
  padding-bottom: 0.5em;
  //padding-left: 1em;
  //padding-right: 1em;
  margin-bottom: 0.5em;
}
.author {
  font-weight: bold;
}
.incrustation {
  background-color: #e8f6f8;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  padding-left: 1em;
  padding-right: 1em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}
h1 {
  color: red;
  font-size:x-large;
}
.furthermore {
  text-align: right;
  font-style: italic;
}
</style>
<style>
.flex-image-text {
    display: flex; 
    align-items: center;
    width: 100%; 
}
.flex-image-text  .divImg {
    max-width: 323px; 
    width: 30%; 
    margin-bottom: 1em;
}
.flex-image-text  .divImg.right {
    margin-left: 0.5em;
}
.flex-image-text  .divImg.left {
    margin-right: 0.5em;
}
.flex-image-text  .divText {
    width: 70%; 
}
.flex-image-text  .divImg img {
    width: 100%;
}
@media (max-width: 1100px) {
    .flex-image-text {
        display: block; 
    }
    .flex-image-text .divImg {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 80%; 
    }
    .flex-image-text  .divText {
        width: 100%; 
    }
}
</style>