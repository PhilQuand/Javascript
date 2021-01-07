<!-- jQuery for FancyBox 3-->
<script src='//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script>

<!-- Add fancyBox 3 -->
<!-- see documentation at : http://fancyapps.com/fancybox/3/docs/#options -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.css" rel="stylesheet" type="text/css" />
<link href="https://philquand.github.io/Javascript/PhotoGaleries/myFancybox/myFancybox.css" rel="stylesheet" type="text/css" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.js"></script>
<script src='https://philquand.github.io/Javascript/PhotoGaleries/myFancybox/myFancybox.js'></script>
<!-- End FancyBox -->
<link href="https://philquand.github.io/Javascript/Blog-widgets/All-Blogs-Style.css" rel="stylesheet" type="text/css" />
<script src='https://philquand.github.io/Javascript/Blog-widgets/All-Blogs-Scripts.js'></script>

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
<style>
.bg-photo-overlay {
    background-image: url("https://1.bp.blogspot.com/-opaaRwNbCfA/XgNT-fyxG8I/AAAAAAAAkrk/TDWOtKZ4BoU__SfluVUzrYej6tKInUzoQCLcBGAsYHQ/s1600/Bord%2Bde%2BLoire%2B1200.png");
//background-color: #FFFCE5;
}
</style>
<style>
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
    display: flex;
    align-items: center; 
    justify-content: center;
    width: 100%; 
}
.header-widget-home img {
    max-width: 60px; 
    width: 30%; 
    margin-right: 0.5em;
    margin-bottom: 1em;
}
.header-widget-home div {
    max-width: 500px; 
    width: 70%; 
}
.header-widget-home div h1 span {
  padding-bottom: 10px;
  border-bottom: thick solid #3FF60A;
  line-height: 48px;
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
  banAnim();
  $('.header-widget').addClass('header-widget-home');
  $('.header-widget h1').wrapInner('<span />');
  $('.header-widget > div').append($('.header-widget > p'));
  $('.header-widget').prepend('<img src="https://1.bp.blogspot.com/-q3glREgFdhc/XgNs4Ds753I/AAAAAAAAkrw/BMiVS8ldeIgFST_88L5A5mlL-XvVZkEOgCLcBGAsYHQ/s1600/Double%2BPHI%2Bclair.png"/>');
  $('.bg-photo').remove();
  function banAnim() {
    //$('.bg-photo-overlay').append('<div class="video-background"><div class="video-foreground"><iframe style="width:100%;height:100%;" src="https://philquand.github.io/Javascript/Blog-widgets/Touraine%20Insoumise/Animation-ban/Montgolfiere-ban.html" frameborder="0" allowfullscreen></iframe></div></div>');
    $('.page_body').append('<div class="video-background"><div class="video-foreground"><iframe style="width:100%;height:100%;" src="https://philquand.github.io/Javascript/Blog-widgets/Touraine%20Insoumise/Animation-ban/Montgolfiere-ban.html" frameborder="0" allowfullscreen></iframe></div></div>');
    /*$('.header-widget').css('visibility', 'hidden');
    $('.subscribe-section-container').css('visibility', 'hidden');
    setTimeout(function() {
      $('.header-widget').css('visibility', 'visible');
      $('.subscribe-section-container').css('visibility', 'visible');
    }, 5000);*/
  }}
</script>