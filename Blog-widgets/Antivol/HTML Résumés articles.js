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
<!-- Add audio toolbar -->
<script src='https://philquand.github.io/Javascript/MediaPlayer/myMediaPlayer.js'></script>
<!-- Fin audio toolbar -->
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
// fonction de vérification du type de navigateur et numéro de version principal
// console.log(myBrowser.join(' ')); // outputs: `Chrome 62`
// if( myBrowser[0]  == "Firefox" && eval(myBrowser[1])  <= 48) caractérise la version du navigateur de Pierre...
navigator.sayswho = (function() {
  var ua = navigator.userAgent,
    tem,
    M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
  if (/trident/i.test(M[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
    return 'IE ' + (tem[1] || '');
  }
  if (M[1] === 'Chrome') {
    tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
    if (tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
  }
  M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
  if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
  return M;
})();
</script>
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
  color: #D52C1E;
  font-size:x-large;
}
.furthermore {
  text-align: right;
  font-style: italic;
}
</style>
<style>
.VignetteBR.flex {
    display: flex; 
    align-items: flex-start;
    width: 100%; 
}
.VignetteBR.flex .divImg {
    max-width: 200px; 
    width: 30%; 
    //margin-bottom: 1em;
}
.VignetteBR.flex.left .divImg {
    margin-right: 1em;
}
.VignetteBR.flex.right {
    flex-direction: row-reverse;
}
.VignetteBR.flex.right .divImg {
    margin-left: 0.5em;
}
.VignetteBR.flex .divText, .VignetteBR.flex .divImg img {
    width: 100%;
}
.VignetteBR.flex .divImg img {
    box-shadow: rgba(0, 0, 0, 0.8) 10px 5px 25px;
}
@media (max-width: 1100px) {
    .VignetteBR.flex {
        display: block; 
    }
    .VignetteBR.flex .divText, .VignetteBR.flex .divImg {
        display: block;
        width: 100%; 
        max-width: 100%;
        margin-bottom: 1em;
    }
    .VignetteBR.flex .divImg img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 80%; 
    }
}
</style>
<style>
.VignetteBR.float {
    display: block; 
}
.VignetteBR.float .divImg {
    max-width: 200px; 
    width: 40%; 
    margin-top: 0.5em;
    //margin-bottom: 0.5em;
}
.VignetteBR.float.left .divImg {
    margin-right: 1em;
    float: left;
}
.VignetteBR.float.right .divImg {
    margin-left: 0.5em;
    float: right;
}
.VignetteBR.float .divText, .VignetteBR.float .divImg img {
    width: 100%; 
}
.VignetteBR.float .divImg img {
    box-shadow: rgba(0, 0, 0, 0.8) 10px 5px 25px;
}
@media (max-width: 1100px) {
    .VignetteBR.float .divText, .VignetteBR.float .divImg {
        display: block;
        width: 100%; 
        max-width: 100%;
        margin-bottom: 1em;
    }
    .VignetteBR.float .divImg img {
        display: block;
        max-width: 200px; 
        margin-left: auto;
        margin-right: auto;
        width: 80%; 
    }
}
</style>
<!--style>
/* pour création pdf */
/*.fr-FR, .en-EN, .de-DE, .es-ES, .it-IT, .pt-PT {
 display: none;
}*/
.VignetteBR {
    display: block; 
}
.VignetteBR .divImg {
    max-width: 200px; 
    width: 40%; 
    margin-top: 0.5em;
    //margin-bottom: 0.5em;
}
.VignetteBR.left .divImg {
    margin-right: 1em;
    float: left;
}
.VignetteBR.right .divImg {
    margin-left: 0.5em;
    float: right;
}
.VignetteBR .divText, .VignetteBR .divImg img {
    width: 100%; 
}
.VignetteBR .divImg img {
    box-shadow: rgba(0, 0, 0, 0.8) 10px 5px 25px;
</style-->