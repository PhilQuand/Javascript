<style>
body {
  background: #aedce9;
}
</style>
<script>
$(document).ready(function() {
  let searchParams = new URLSearchParams(window.location.search);
  var mobile = searchParams.has('m');
  if (!mobile) {
    //var bgColor = '#ececec';
    var opacHover1 = '1';
    var opacHover2 = '0.7';
    var bgColor = '#ffffff';
    var textColor = '#d67f3f'

    $('body').css('background', '#aedce9 url(https://1.bp.blogspot.com/-3mZ1hwNXX0o/Xx2awnL5LhI/AAAAAAAAnDI/55zF-S7w-Lw5SPOg_0IorE3M4_aU94OCgCLcBGAsYHQ/s1600/karim-manjra-advTG1XH9nk-unsplash.jpg) no-repeat fixed top center');
    $('aside.sidebar-container.sidebar-invisible').css('opacity', opacHover2);
    $('aside.sidebar-container.sidebar-invisible').hover(function() {
      $(this).css('opacity', opacHover1)
    }, function() {
      $(this).css('opacity', opacHover2)
    });
    $('div.widget.FeaturedPost h3').css('color', textColor);
    $('div.widget.FeaturedPost').css('opacity', opacHover2);
    $('div.widget.FeaturedPost').hover(function() {
      $(this).css('opacity', opacHover1)
    }, function() {
      $(this).css('opacity', opacHover2)
    });

    $('div#Blog1.widget.Blog article').css('background-color', bgColor);
    $('div#Blog1.widget.Blog .shown-ad').css('display', 'none');
    $('div#Blog1.widget.Blog .feed-message').css('color', textColor);
    if ($('div.widget.PopularPosts .snippet-thumbnail').length == 0) {
      $('div#Blog1.widget.Blog article').css('margin', '0 0 20px 120px');
      $('div#Blog1.widget.Blog article').css('padding-left', '20px');
      $('div#Blog1.widget.Blog article').css('opacity', opacHover2);
      $('div#Blog1.widget.Blog article').hover(function() {
        $(this).css('opacity', opacHover1)
      }, function() {
        $(this).css('opacity', opacHover2)
      });
    }

    $('div.widget.PopularPosts').css('margin-left', '120px');
    $('div.widget.PopularPosts h3').css('color', textColor);
    $('div.widget.PopularPosts h3').css('padding', '20px 0 20px 20px');
    $('div.widget.PopularPosts article').css('background-color', bgColor);
    $('div.widget.PopularPosts article').css('margin', '0 0 20px 0');
    $('div.widget.PopularPosts article').css('padding', '20px 0 20px 20px');
    $('div.widget.PopularPosts article').css('opacity', opacHover2);
    $('div.widget.PopularPosts article').hover(function() {
      $(this).css('opacity', opacHover1)
    }, function() {
      $(this).css('opacity', opacHover2)
    });
  };
});
</script>