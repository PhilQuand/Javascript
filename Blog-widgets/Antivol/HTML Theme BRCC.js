<script>
$(document).ready(function() {
  $('.widget.PageList .widget-content ul li a').css('background-color', '#ACDAE8');
  $('.widget.PageList .widget-content').css('box-shadow', '10px 10px 5px #888');
  $('.sidebar-container.container.sidebar-invisible').css('background-color', '#ACDAE8');
  $('.sidebar-container.container.sidebar-invisible').css('box-shadow', '10px 10px 5px #888');
  $('.sidebar-container.container').css('background', 'transparent');
  $('.widget.PopularPosts').css('background-color', '#FFFFFF');
  $('.widget.PopularPosts h3').css('padding', '0 10px 0 10px');
  $('.widget.PopularPosts article').css('padding', '10px 10px 10px 10px');
  $('.post-wrapper.hero').each(function() {

    let searchParams = new URLSearchParams(window.location.search);
    var mobile = searchParams.has('m');
    if (!mobile) {
      var image = $(this).find('.featuredPostInfo').attr('data-thumbImage');
      $(this).find('.slide').wrap('<div class="myFeaturedPost"></div');
      $(this).find('.slide').before('<div class="divImg"><img src="' + image + '" /></div>');
      $(this).find('.myFeaturedPost').before($(this).find('.labels-outer-container'));
      $(this).find('.myFeaturedPost').after($(this).find('.post-footer.container'));

      $(this).find('.snippet-thumbnail-container').css('visibility', 'hidden');
      $(this).find('.snippet-thumbnail').css('height', '40px');
      $(this).find('.snippet-thumbnail-container').css('height', '40px');
      $(this).find('.labels-outer-container').css('top', '0');
    }

    $(this).css('box-shadow', '10px 10px 5px #888');

  });
});
/*$('.post-wrapper').each(function() {
  $(this).css('box-shadow','10px 10px 5px #888');  
});*/
</script>
<style>
.bg-photo-container {
    visibility: hidden;
}
.myFeaturedPost {
    display: flex; 
    align-items: center;
    width: 100%; 
}
.myFeaturedPost .divImg {
    max-width: 323px; 
    width: 30%; 
    margin-right: 0.5em;
    margin-bottom: 1em;
    //order: 2; 
}
.myFeaturedPost .slide {
    width: 70%; 
    //order: 3; 
}
.myFeaturedPost  .divImg img {
    width: 100%;
}
.post-wrapper.hero .labels-outer-container {
    margin: 0 20px 0 20px; 
}
.post-wrapper.hero .post-footer.container { 
    margin: 0 20px 20px 20px; 
}
/*.myFeaturedPost .labels-outer-container {
  order: 1; 
}
.myFeaturedPost .post-footer.container {
  order: 4; 
}*/
@media (max-width: 1100px) {
    .myFeaturedPost {
        display: block; 
        height: 80%; 
    }
    .myFeaturedPost .divImg {
        display: block;
        margin-left: auto;
        margin-right: auto;
        height: 30%; 
    }
    .myFeaturedPost .divImg img {
        max-height: 100%; 
    }
    .myFeaturedPost .slide {
        display: block;
        height: 60%
    }
    .myFeaturedPost .slide * {
        max-height: 100%; 
    }
}
</style>
