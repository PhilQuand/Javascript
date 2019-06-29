<!-- FancyBox CSS -->
<!-- see documentation at : http://fancyapps.com/fancybox/3/docs/#options -->
<link href="http://cdnjs.cloudflare.com/ajax/libs/fancybox/3.1.25/jquery.fancybox.min.css" rel="stylesheet" type="text/css" />

<!-- jQuery for FancyBox 3-->
<script src='//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script>

<!-- FancyBox 3 -->
<script src='https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.1.25/jquery.fancybox.min.js'></script>
<script type='text/javascript'>
$(document).ready(function() {
  var entryTitle = document.getElementsByClassName("entry-title");
  for( var i=0; i < entryTitle.length; i++) {
  	//entryTitle[i].children[0].style.backgroundColor = "blue";
  	//entryTitle[i].children[0].classList.add("blogPostsTitle");
  	//entryTitle[i].children[0].style.fontSize = "20px";
  };
  $(".post-body a img").each(function() {
    var isImage = /\.(?:jpg|jpeg|gif|png)$/i.test($(this).parent("a").attr("href"));

    if (isImage) {
      $(this).parent("a").attr('data-src', $(this).parent("a").attr("href"));
      $(this).parent("a").attr('data-fancybox', 'fancy-box');
    }

    else {}
  });
  $("[data-fancybox]").fancybox({
    infobar: true,
    arrows: false,
    animationEffect: "fade",
    transitionEffect: "slide",
    speed: 300,
    margin: [40, 20]
  });
});
</script>
<!-- End FancyBox -->

<style>
.PopularPosts .post-title,
.PopularPosts .post-title a,
.PopularPosts .post-title a:visited,
.PopularPosts .post-title a:hover {
  font-size: 24px;
}

.contTitle {
  margin-top: 350px;
}
.sticky .contTitle {
  margin-top: 10px;
}
.blog-posts {
  display: flex;
  flex-wrap: wrap;
  /* Then we define how is distributed the remaining space */
  //justify-content: space-between;
  background: orangered;
}
/* We tell all items to be 100% width, via flex-basis */
.blog-posts > * {
  flex: 1 30%;
  display: flex;
  //flex-direction: column;
  //justify-content: space-between;
  background: lime;
}
.blog-posts > * > *  {
  //flex: 0 0 auto;
  flex: 0 100%;
  background: grey;
  display: flex;
  flex-direction: column;
  //justify-content: space-between;
}
.blog-posts > * > * > * {
  //flex: 0 0 auto;
  flex: 0 100%;
  background: purple;
  display: flex;
  flex-direction: column;
  //justify-content: space-between;
}
.blog-posts > * > * > * > * {
  flex: 0 0 auto;
  background: lime;
}
.post-title {
 //flex: 2 0 5em;
 flex-basis: 5em;
 background: yellow;
}
.post-bottom {
 flex-basis: auto;
 display: flex;
 flex-direction: column;
 background: yellow;
}
.post-bottom > * {
  flex: 0 0 auto;
  background: lime;
}
/*.PopularPosts div div {
  display: flex;
  align-items: stretch;
  //background: green;
  //align-items: stretch;
  //flex-wrap: wrap;
  //align-items: stretch;
}
//We tell all items to be 100% width, via flex-basis 
.PopularPosts div div article {
  flex: 1;
  background: orangered;
  display: flex;
  flex-direction: column;
}
.item-content {
  flex: 1;
  background: yellow;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.item-content .jump-link {
}
.PopularPosts div div article  > * {
	//align-self: flex-end;
  background-color: blue;
}
.item-content  > * {
	//align-self: flex-end;
  //background-color: grey;
}*/
.mySumFeat {
line-height: 1.6;
}
.mySumFeat {
color: black;
font-size: 125%;
}
.mySumReg {
line-height: 1.2;
color: grey;
}
@media screen and (max-width: 425px) {
  .mySumReg div img {
    width: 100%;
  }
}
</style>
<script type='text/javascript'>
  var blogTitle = document.getElementsByClassName("header-widget");
  if( blogTitle.length == 1) {
  	var h1Title = blogTitle[0].children[0].children[0];
  	if(h1Title.children.length == 0){
  	  var contTitle = blogTitle[0].parentNode.parentNode.parentNode.parentNode;
      contTitle.classList.add("contTitle");
    };
  };
$(document).ready(function() {
  var postBottom = document.getElementsByClassName("post-bottom");
  for( var i=0; i<postBottom.length; i++ ) {
    //var div = document.createElement("div");
    //postOuter[i].parentNode.append(div);
    postBottom[i].parentNode.parentNode.appendChild(postBottom[i]);
    postBottom[i].children[0].style.display= "none";
  };
});
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
          if (isTagtoSum(s[i])) {
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

function isTagtoSum(s) {
  if( (s[0] == 'a') || (s.indexOf('/a>') > -1) ) {
    return true;
  } 
  if( s.indexOf('strong') > -1 ) {
    return true;
  } 
  if( s.indexOf('em>') > -1 ) {
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
      //imgtag = '<span style="overflow:hidden; border: none; margin:0 15px 10px 0; float:left; max-width:' + img_thumb_width_reg + 'px;height:auto;"><img src="' + img[0].src + '" height="' + img_thumb_height_reg + 'px" width="auto"/></span>';
      //imgtag = '<span style="overflow:hidden; border: none; margin:0 15px 10px 0; float:left; max-width:' + img_thumb_width_reg + 'px;height:auto;"><img src="' + img[0].src + '" width="' + img_thumb_width_reg + 'px" height="auto"/></span>';
      imgtag = '<img style="float:left; margin: 0 1em 0.5em 0;" src="' + img[0].src + '" width="' + img_thumb_width_reg + 'px" height="auto"/>';
      //imgtag = '<td valign="top" style="border: none; padding:0 15px 10px 0;" width="20%"" ><img src="' + img[0].src + '"/></td>';
      //imgtag = '<span style="overflow:hidden; border: none; margin:0 15px 10px 0; float:left; max-height:' + img_thumb_height_reg + 'px;width:auto;"><img src="' + img[0].src + '" width="' + img_thumb_width_reg + 'px" height="auto"/></span>';
      summ = summary_img_reg;
    }
    else {
      //imgtag = '<center><img src="' + img[0].src + '" width= 50%" height="auto"/></center>';
      imgtag = '<img style="float:left; margin: 0 1em 0.5em 0;" src="' + img[0].src + '" width="' + img_thumb_width_feat + 'px" height="auto"/>';
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