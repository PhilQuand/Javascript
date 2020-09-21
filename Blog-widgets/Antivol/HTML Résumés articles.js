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
.articleFancy {
    padding: 0 0 0 0;
    //min-width: 80%;
    min-width: 800px;
    height: 90vh;
    box-shadow: rgba(0, 0, 0, 0.8) 0px 5px 25px;
    transition: box-shadow .2s;
    display: none;
}
.corpsFancy {
    width: 100%;
    //max-height: calc(80vh - 140px);
    max-height: 100%;
    overflow: auto;
    padding: 10px 15px 10px 15px;
}
.corpsFancy > img {
    width: 100%;
}
.customInlineBaseClass.fancybox-is-open .fancybox-bg {
    opacity: 0.1;
    transition-timing-function: cubic-bezier(.22, .61, .36, 1);
}

.customInlineBaseClass .button-close,
.customInlineBaseClass .button-previous,
.customInlineBaseClass .button-next {
  background: black;
}
@media screen and (max-width: 1100px) {
  .articleFancy {
    min-width: 90%;
  }
}
</style>
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
      imgtag = '<img style="float:left; margin: 0 1em 0.5em 0; max-width: ' + img_thumb_width_reg + 'px; max-height: ' + img_thumb_height_reg + 'px;" src="' + img[0].src + '"/>';
      summ = summary_img_reg;
    }
    else {
      //imgtag = '<img style="float:left; margin: 0 1em 0.5em 0;" src="' + img[0].src + '" width="' + img_thumb_width_feat + 'px" height="auto"/>';
      imgtag = '<img style="float:left; margin: 0 1em 0.5em 0; max-width: ' + img_thumb_width_feat + 'px; max-height: ' + img_thumb_height_feat + 'px;" src="' + img[0].src + '"/>';
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
.header-widget > div > h1 > a img {
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
if ( window.location.pathname == '/' ){
  //banAnim();
  $('.header-widget').addClass('header-widget-home');
  $('.bg-photo').remove();
  $('.header-widget > div > h1').html('<img src="https://1.bp.blogspot.com/-p9LAvp-6A0c/X1EYOuMRJjI/AAAAAAAAnFM/7mrGVj8oPgAzfu7Q_pDKsr1WXLqtMyQGQCLcBGAsYHQ/s320/Logo%2Bl%2527antivol%2Brouge%2Bet%2Bnoir%2BAzo.png"/><center><p>« Être radical, c’est aller à la racine des problèmes et à la hauteur des solutions »</p></center>');
  //$('.header-widget > div').append('<center><img src="https://1.bp.blogspot.com/-ow5Anx1wNTk/X0qX0h2VojI/AAAAAAAAnE8/zdtTf1hbHyI6a8UHLeGoaUcmm_QLtwhNwCLcBGAsYHQ/s722/Logo%2BAzo%2Bv1%2Btransparent.png"/></center>');
} else {
  $('.header-widget > div > h1 > a').html('<img src="https://1.bp.blogspot.com/-p9LAvp-6A0c/X1EYOuMRJjI/AAAAAAAAnFM/7mrGVj8oPgAzfu7Q_pDKsr1WXLqtMyQGQCLcBGAsYHQ/s320/Logo%2Bl%2527antivol%2Brouge%2Bet%2Bnoir%2BAzo.png"/>');
  $(document).ready(function() {
    $('#FeaturedPost1').css('display','none');
  });
}
</script>
<style>
.mySumReg img {
  max-height: 50px;
}
.header {
  font-weight: bold;
}
.incrustation {
  background-color: #e8f6f8;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  padding-left: 1em;
  padding-right: 1em;

}
.incrustation h1 {
  color: red;
  font-size:x-large;
}
.furthermore {
  text-align: right;
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