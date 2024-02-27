<!-- jQuery for FancyBox 3-->
<script src='//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script>

<!-- Add fancyBox 3 -->
<!-- see documentation at : http://fancyapps.com/fancybox/3/docs/#options -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.js"></script>
<link href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.css" rel="stylesheet" type="text/css" />

<!--Add fancyBox 4 voir documentation https://fancyapps.com -->
<!--script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js"></script-->
<!--link href="https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css" rel="stylesheet" type="text/css" /-->

<!-- Add myFancybox-->
<link href="https://philquand.github.io/Javascript/PhotoGaleries/myFancybox/myFancybox.css" rel="stylesheet" type="text/css" />
<script src='https://philquand.github.io/Javascript/PhotoGaleries/myFancybox/myFancybox.js'></script>
<!-- End FancyBox -->

<script src='https://philquand.github.io/Javascript/Blog-widgets/Antivol/BibliothequeRadicale.js'></script>

<!-- Add myTimeLine -->
<script src='https://philquand.github.io/Javascript/Blog-widgets/myTimeLine.js'></script>
<!-- End myTimeLinex -->
<!-- Add audio toolbar -->
<script src='https://philquand.github.io/Javascript/MediaPlayer/myMediaPlayer.js'></script>
<!-- Fin audio toolbar -->
<link href="https://philquand.github.io/Javascript/Blog-widgets/All-Blogs-Style.css" rel="stylesheet" type="text/css" />
<script src='https://philquand.github.io/Javascript/Blog-widgets/All-Blogs-Scripts.js'></script>
<!-- Add footnotes ressources -->
<!script src='https://philquand.github.io/Javascript/FootnotesAndRef.js' type='text/javascript'></script-->
<!-- Fin footnotes ressources -->
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
  font-size: 20px;
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
$(document).ready(function() {
  $('.jump-link.flat-button.ripple a').each(function() {
    var href = $(this).attr('href');
    if (href.indexOf('#more') > -1) {
      href = href.split('#more')[0];
    }
    $(this).attr('href', href);
  });
});

if (postTyp() == 'post') $('nav').css('display', 'none')

function postTyp() {
  //var pathname = window.location.origin + window.location.pathname;
  var pathname = window.location.pathname;
  if ((pathname == "/") || (pathname == "/search")) {
    return 'home';
  }
  if (pathname.indexOf("/p/") > -1) {
    return 'page';
  }
  return 'post';
}
</script>
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
<style>
#inscription_tooltip, #inscription_tooltip * {
    background-color: #F5F5F5;
}

button.subscribe-button.pill-button .tooltiptext {
  //font-size; 12px;
  text-transform: none;
  visibility: hidden;
  width: 120px;
  background-color: #F4F4F4;
  color: black;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  /* Position the tooltip */
  position: absolute;
  z-index: 1;
}

button.subscribe-button.pill-button:hover .tooltiptext {
  visibility: visible;
}
</style>

<!--script>
// tooltip du bouton s'inscrire
$('button.subscribe-button.pill-button').append('<span class="tooltiptext">Pour recevoir notre lettre d'+ "'" + 'information</span>')
</script-->
<!--style>
.bg-photo-overlay {
    background-image: url("https://1.bp.blogspot.com/-opaaRwNbCfA/XgNT-fyxG8I/AAAAAAAAkrk/TDWOtKZ4BoU__SfluVUzrYej6tKInUzoQCLcBGAsYHQ/s1600/Bord%2Bde%2BLoire%2B1200.png");
/*background-color: #FFFCE5;*/
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

  hasMultipleTitle();
  
  if (window.location.pathname != '/' && window.location.pathname.indexOf("/search") == -1 && window.location.pathname.indexOf("/p/") == -1) {
    $('.post .post-share-buttons.post-share-buttons-top').addClass('invisible');
    $('.post .post-share-buttons.post-share-buttons-bottom').removeClass('invisible');
    $('.post .post-share-buttons.post-share-buttons-bottom').wrap('<div class="post-share-buttons-conteneurFlex"></div>');
    //$('.post-share-buttons-conteneurFlex').prepend('<div class="post-share-buttons-enfantFlex_1"><h1 style="color: white">Vous trouvez cet article intéressant ?</h1><h2 style="color: white">Faites-le savoir et partagez-le</h2></div>');
    //$('.post-share-buttons-conteneurFlex').prepend('<div class="post-share-buttons-enfantFlex_1"><h2 style="color: white">partager cet article</h2></div>');
    $('.post-share-buttons-conteneurFlex').prepend('<div class="post-share-buttons-enfantFlex_1"><p style="margin-bottom: 0; margin-top: 10px; color: white; font-size: 24px;">Vous avez apprécié cet article ?</p><p style="margin-bottom: 10px; margin-top: 0; color: white; font-size: 24px;">Faites-le savoir et partagez-le</p></div>');
    $('.post .post-share-buttons.post-share-buttons-bottom').wrap('<div class="post-share-buttons-enfantFlex_2"></div>');
    $('.post-share-buttons-conteneurFlex .post-share-buttons.post-share-buttons-bottom').addClass('post-share-buttons-enfantFlex_3');
    $('.post-share-buttons-conteneurFlex').closest('.main.section').addClass('articleComplet');
  }
  else {
    $('.post .post-share-buttons.post-share-buttons-top').addClass('visible');
    $('.post .post-share-buttons.post-share-buttons-bottom').removeClass('visible');
  }

});
</script>
<style>
.articleComplet .jump-link.flat-button.ripple{
   font: normal bold 15px Calibri;
}
.articleComplet .post-body.entry-content.float-container{
  margin-bottom: 0;
}
.articleComplet .post-bottom{
  flex-direction: column;
}
.articleComplet .post-footer.float-container{
  width:100%;
}
.articleComplet .post-share-buttons-conteneurFlex{
  display:flex;
  flex-direction:row; /* par défaut axe horizontal */
  align-items: center; /* aligne les éléments de menu au centre verticalement */
  /* ou */
  /*flex-direction: column;*/ /* axe vertical  enfants seront l'un en dessous des autres */
  /*flex-direction:row;*/ /* par défaut axe horizontal */
  /*flex-direction: row-reverse;*/ /* ordre inversé */
  /*flex-direction: column-reverse;*/
  /*width: 430px;*/
  //margin-top: 1.5em;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2em;
  box-sizing: border-box;
  border-radius: 50px;
  /*background-image: linear-gradient(90deg, rgb(105, 111, 133), rgb(173, 178, 194));
  background-image: linear-gradient(90deg,rgba(76, 54, 255, 1), rgba(76, 54, 255, 0.5));*/
  background-color: #6F4BFF;
  color: rgb(24, 27, 31);
}
.articleComplet .post-share-buttons-conteneurFlex .post-share-buttons-enfantFlex_1 {
  flex-grow:1;
  /*flex:1 0 200px;*/   /* cette ligne est un raccourci de la suite */
  /*flex-grow:1;*/ /* l'élément peut s'agrandir, s'étendre au reste de la page */
  /*flex-shrink:0;*/ /* l'élément ne peut pas de réduire */
  /*flex-basis:200px;*/ /* l'élément fait 200px sauf s’il reste de la place */
}
.articleComplet .post-share-buttons-conteneurFlex .post-share-buttons-enfantFlex_2 {
  flex-basis:48px;
  background-color: white;/*Gris*/
  box-sizing: border-box;
  height: 48px;
  width: 48px;
  margin-right: 30px;    
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  /*flex:1 0 200px;*/   /* cette ligne est un raccourci de la suite */
  /*flex-grow:1;*/ /* l'élément peut s'agrandir, s'étendre au reste de la page */
  /*flex-shrink:0;*/ /* l'élément ne peut pas de réduire */
  /*flex-basis:200px;*/ /* l'élément fait 200px sauf s’il reste de la place */
}
.articleComplet .post-share-buttons-conteneurFlex .post-share-buttons-enfantFlex_3 {
    margin-right: 5px;
    margin-top: 8px;
}
.mySumReg img {
  max-height: 50px;
}
</style>
<style>
.header {
  text-align: justify;
  font-family: "Arial Rounded MT Bold"; 
  font-size:18px;
  color: #666666;
  line-height: 1.4;
  /*font-style: italic;
  background-color: #FEFEE2;
  padding-top: 0.5em;*/
  padding-bottom: 0.5em;
  /*padding-left: 1em;
  padding-right: 1em;*/
  margin-bottom: 0.5em;
}
.author {
  font-weight: bold;
}
.corps {
  text-align: justify;
  /*padding: 1em;
  background-color: rgba(0, 0, 0, 0.04);*/
  background-color: #F4F4F4;
}
.incrustation {
  background-color: #e8f6f8;
}
.incrustation, .corps {
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  padding-left: 1em;
  padding-right: 1em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}
h1 {
  color: #D52C1E;
}
.furthermore {
  text-align: right;
  font-style: italic;
}
</style>
<script>
var printNavHash = function() {
  $(".corpsBR").wrapInner("<div class='innerWrapBR'></div>");
  var navCorpsBR = $('<nav id="navCorpsBR"></nav>');
  $(".corpsBR article").each(function(index) {
    var idArtcle = $(this).attr('id');
    if (jQuery.type(idArtcle) == 'undefined') {
      $(this).attr('id', 'article-' + index);
      navCorpsBR.append('<li><a href="#article-' + index + '"><byline-label viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="transparent" stroke="#4a00ff"></circle></svg></a></li>');
    }
    else {
      navCorpsBR.append('<li><a href="#' + idArtcle + '"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="transparent" stroke="#4a00ff"></circle></svg></a></li>');
    }
  })
  if (navCorpsBR.has('li').length > 0) {
    navCorpsBR.wrapInner('<ul></ul>"');
    $(".corpsBR").append(navCorpsBR);
  }
  $(document).ready(function() {

    $(".corpsBR").css('position','relative');
    $(".corpsBR").css('display','grid');
    $(".corpsBR").css('grid-template-columns','1fr min-content ');

    var nbArticles = $(".corpsBR article").length;
    var navHeight = nbArticles * 30 + 30;
    $(".corpsBR #navCorpsBR").css('height', navHeight + 'px')
    $(".corpsBR #navCorpsBR ul li a").hover(function() {
      $(this).find("circle").css('fill', '#4a00ff');
      $(this).find("circle").css('opacity', '0.3');
    }, function() {
      printHash();
    });
    $(".corpsBR #navCorpsBR ul li a").click(function() {
      $(".corpsBR nav ul li a circle").css('fill', 'transparent')
      $(this).find("circle").css('fill', '#4a00ff');
    });
    /*articleFancy.afterClose = function(instance, current) {
      $(".corpsBR #navCorpsBR ul li a").first().click();
    };*/
    var printHash = function() {
      $(".corpsBR nav ul li a circle").css('opacity', '1')
      if (window.location.hash == '' || window.location.hash == '#more') $(".corpsBR #navCorpsBR ul li a").first().click();
      else $(".corpsBR #navCorpsBR ul li a[href$='" + window.location.hash + "']").click();
    };

    // Print initial hash
    printHash();

    window.onhashchange = printHash;
  });

};
</script>
<style>
/*.corpsBR {
  margin: 0;
  font-family: system-ui, sans-serif;
}*/
.corpsBR nav ul li a circle:hover {
    fill: #4a00ff;
}
.corpsBR .innerWrapBR {
  grid-column: 1 / 2;
  padding-right: 1.5em;
}
.corpsBR .innerWrapBR article:before {
  display: block; 
  content: " "; 
  margin-top: -100px; 
  height: 100px; 
  visibility: hidden; 
}
.corpsBR #navCorpsBR {
/*position: -webkit-sticky;
height: 200px;*/
position: sticky !important;
top: 150px;
margin-top: 50px;
}
.corpsBR #navCorpsBR svg {
  width: 15px;
  height: 15px;
}
.corpsBR #navCorpsBR span {
  display: none;
}
.corpsBR #navCorpsBR ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>