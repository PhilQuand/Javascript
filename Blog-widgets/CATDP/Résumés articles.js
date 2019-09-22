<!-- jQuery for FancyBox 3-->
<script src='//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script>

<!-- Add fancyBox 3 -->
<!-- see documentation at : http://fancyapps.com/fancybox/3/docs/#options -->
<!--link href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.4.0/jquery.fancybox.css" rel="stylesheet" type="text/css" /-->
<link href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.css" rel="stylesheet" type="text/css" />
<link href="https://philquand.github.io/Javascript/PhotoGaleries/myFancybox/myFancybox.css" rel="stylesheet" type="text/css" />
<!--script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.4.0/jquery.fancybox.js"></script-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.js"></script>
<script src='https://philquand.github.io/Javascript/PhotoGaleries/myFancybox/myFancybox.js'></script>
<script src='https://philquand.github.io/Javascript/PhotoGaleries/myFancybox/iFrameGallery-Plugin.js'></script>
<!-- End FancyBox -->


<style>
.show-more.pill-button,
.show-less.pill-button {
  color: white
}
.reprise {
  /*background-color: #E6E6BE;*/
  background-color: #F2F2C9;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  padding-left: 1em;
  padding-right: 1em;
}

blockquote {
   text-align: left;
   font-size: 20px; 
   line-height: 22pt;
}


.tractTableCATDP {
  border-collapse: collapse;
  width: 100%;
}

.tractTableCATDP td {
  border: 1px solid black;
  padding: 8px;
}

//.tractTableCATDP tr:nth-child(even){background-color: #f2f2f2;}

//.tractTableCATDP tr:hover {background-color: #ddd;}
.tractTableCATDP tr:hover {color: white; background-color: #999933;}

.tractTableCATDPTitle td {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
}
@media screen and (max-width: 425px) {
  ul{padding:20px;}
  li{padding:0;}
}
</style>
<style>
.floatLeftImg {
  float: left;
  margin-top: 0.5em;
  margin-right: 1vw;
  width: 30%;
}
.floatRightImg {
  float: right;
  margin-top: 0.5em;
  margin-left: 1vw;
  width: 30%;
}
.centerImg50, .centerImg30 {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.centerImg50 {
  width: 50%;
}
.centerImg30 {
  width: 30%;
}
.floatLeftImg img, .floatRightImg img, .centerImg50 img, .centerImg30 img {
    width: 100%
}
@media screen and (max-width: 1000px) {
  .floatLeftImg, .floatRightImg, .centerImg30 {
    width: 50%;
  }
}
@media screen and (max-width: 800px) {
  .floatLeftImg, .floatRightImg, .centerImg50, .centerImg30 {
    width: 100%;
  }
  .floatLeftImg img, .floatRightImg img, .centerImg50 img, .centerImg30 img {
    float: none;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
  }
}
</style>
<style>
.rejoindreCATDP {
  padding: 15px 0;
}
.rejoindreCATDP hr {
  border-top: 1px dotted black;
}
.rejoindreCATDP p {
  text-align: right;
  font-style: italic;
  font-weight: bold;
}
</style>
<style>
.Attribution {
  display: none;
}
#sidebar_bottom {
  //font-family: 'Crimson text';
  line-height: 0.8;
}
.archivedate a, .archivedate .post-count, .archivedate .post-count::before, .archivedate .post-count::after {
  color: white;
}
#Image2_img {
  //height: 325px;
}
.PopularPosts .post-title,
.PopularPosts .post-title a,
.PopularPosts .post-title a:visited,
.PopularPosts .post-title a:hover {
  font-size: 24px;
}
.contTitle {
  margin-top: 300px;
}
.sticky .contTitle {
  margin-top: 10px;
}
</style>
<script type='text/javascript'>
//$(document).ready(function() {
  breakCode: {
    var href = "https://catdp37.blogspot.com/";
    var actHref = window.location.href;
    var s = actHref.split(href);
    //if (s[1] != '') break breakCode;
    var blogTitle = document.getElementsByClassName("header-widget");
    if (blogTitle.length == 1) {
      if(blogTitle[0].children.length > 1) {
        var plusP = blogTitle[0].children[1]
        plusP.remove();
      }
      var h1Title = blogTitle[0].children[0].children[0];
      if (s[1] == '' || s[1] == '#loadCATDPTimeLine') {
        blogTitle[0].style.paddingBottomt = "1em";
        h1Title.style.lineHeight = "0.8";
      } else {
        var title = h1Title.children[0].innerHTML;
        //title.replace(/br/gi, "");
        h1Title.children[0].innerHTML = "C’est au Tour(s) du Peuple !<br>Municipales 2020";
      }
    };
  }
//});
</script>

<script type='text/javascript'>
$(document).ready(function() {
  breakCode: {
    var href = "https://www.catdp2020.com/";
    var actHref = window.location.href;
    var s = actHref.indexOf(href + 'search');
    if (href == actHref || actHref.indexOf(href + 'search') > -1) {
      $('.blog-posts').find('.post-outer').each(function(){ 
        $(this).append('<hr style="border-top: 1px dashed;">')
      })
      $('.FeaturedPost').find('.post').each(function(){ 
        $(this).append('<hr style="border-top: 1px dashed;">')
      })
    };
    $('.PopularPosts').find('.post').each(function(){ 
      $(this).append('<hr style="border-top: 1px dashed;">')
    })
  }
});
</script>

<script>
/*$(document).ready(function() {
  $('.PageList').find('li').each(function() {
    var link = $(this).find('a')
    if (link.html() == 'Nos Actions') {
      var actHref = window.location.href;
      link.click(function(e) {
        e.preventDefault(); 
        //loadCATDPTimeLine()
        $('#myTimeLineEntries').find('a').first().click();
        return false;
      });
    }
  });
});
function loadCATDPTimeLine() {
  var href = "https://catdp37.blogspot.com/p/nos-actions_24.html";
  var result = getMyInnerLinkContent(href);
  $('body').append(result.body.find('style').first());
  $('body').append(result.body.find('#myTimeLine'));

  $.fancybox.open({
    src: "#myTimeLine",
    type: "inline",
    opts: {
      infobar: true,
      arrows: false,
      animationEffect: "fade",
      transitionEffect: "slide",
      speed: 300,
      margin: [40, 20],
      buttons: false,
      slideClass: 'customActions',
      afterLoad: function(instance, current) {

        $(function() {
          $('.corpsFancy').scroll(function() {
            $('.year').each(function() {
              var year = $(this).find('h2').first().text();
              if ($(this).offset().top < $(document).scrollTop() + 250) {
                $(this).find('.date').addClass('activeYear');
                $('#dataYear').html('Actions de « C’est au Tour(s) du Peuple »');
              }
              else {
                $(this).find('.date').removeClass('activeYear');
              }
            });
          });
        });
        $(document).ready(function() {
          var year = $('.year').find('h2').first().text();
          $('#dataYear').html('Actions de « C’est au Tour(s) du Peuple »');
          $('.year').first().find('.date').addClass('activeYear');
        });

      }

    }
  });
}*/
</script>
<style>
h1 { 
  display: block;
  color: black;
  font-size: 2em;
  margin-top: 0.67em;
  margin-bottom: 0.67em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
}
h2 {
  display: block;
  color: black;
  font-size: 1.5em;
  margin-top: 0.83em;
  margin-bottom: 0.83em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
}
h3 { 
  display: block;
  color: black;
  font-size: 1.17em;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
}
h4 { 
  display: block;
  color: black;
  font-size: 1em;
  margin-top: 1.33em;
  margin-bottom: 1.33em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
}
h5 { 
  display: block;
  color: black;
  font-size: .83em;
  margin-top: 1.67em;
  margin-bottom: 1.67em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
}
h6 { 
  display: block;
  color: black;
  font-size: .67em;
  margin-top: 2.33em;
  margin-bottom: 2.33em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
}
</style>
<style>
.mySumFeat {
line-height: 1.6;
}
.mySumFeat {
  color: black;
  font-size: 125%;
  margin: 1em 0 1em 0;
  display: inline-block; 
}
.mySumReg {
//line-height: 1.2;
  color: grey;
  margin: 1em 0 1em 0;
  display: inline-block; 
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

/*function getInnerLinkContent(theURL) {
  var xmlhttp = false;
  loadXMLDoc(theURL);
  if (xmlhttp == false) {
    //alert("timeout");
    return '';
  }
  else {
    var allText = xmlhttp.responseText;
    return getBody(allText);
  }

  function getBody(content) {
    return getPart(content, 'post-body entry-content float-container', 0, 'no').split("widget PopularPosts")[0].split("post-bottom")[0] ;
  }

  function getPart(content, element, iIndex, iShow) {
    var indices = [];
    var idx = content.indexOf(element);
    while (idx != -1) {
      indices.push(idx);
      idx = content.indexOf(element, idx + 1);
    }
    if( iShow == 'yes' ) {
      for (var i = 0; i < indices.length; i++) {
        var x = indices[i];
        x = content.indexOf(">", x + 1);
        var y = content.lastIndexOf("</body>");
        var z = content.slice(x + 1, y);
        alert('getBody for ' + element + ' :\ni = ' + i + '\n' + z);
      }
    }
    var x = indices[iIndex];
    x = content.indexOf(">", x + 1);
    var y = content.lastIndexOf("</body>");
    return content.slice(x + 1, y);
  }

  function loadXMLDoc(theURL) {
    if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari, SeaMonkey
      xmlhttp = new XMLHttpRequest();
    }
    else { // code for IE6, IE5
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        //alert(xmlhttp.responseText);
      }
    }
    xmlhttp.open("GET", theURL, false);
    xmlhttp.send();
  }
}*/

img_thumb_width_reg = 180; // Image Thumbnail Width
img_thumb_height_reg = 180; // Image Thumbnail Height
img_thumb_width_feat = 360; // Image Thumbnail Width
img_thumb_height_feat = 360; // Image Thumbnail Height
summary_noimg = 500; // Length of Summary Text if no image is Used
summary_img_reg = 400; // Length of Summary Text if post has Image Thumbnail
summary_img_feat = 400; // Length of Summary Text if post has Image Thumbnail

function createSummaryAndThumb(pID, isRegular) {
  var div = document.getElementById(pID);
  createSummaryAndThumbfromDiv(div, isRegular);
}
function createSummaryAndThumbfromDiv(div, isRegular) {
  //var div = document.getElementById(pID);
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
      imgtag = '<img style="float:left; margin: 0.5em 1em 0 0;" src="' + img[0].src + '" width="' + img_thumb_width_reg + 'px" height="auto"/>';
      //imgtag = '<td valign="top" style="border: none; padding:0 15px 10px 0;" width="20%"" ><img src="' + img[0].src + '"/></td>';
      //imgtag = '<span style="overflow:hidden; border: none; margin:0 15px 10px 0; float:left; max-height:' + img_thumb_height_reg + 'px;width:auto;"><img src="' + img[0].src + '" width="' + img_thumb_width_reg + 'px" height="auto"/></span>';
      summ = summary_img_reg;
    }
    else {
      //imgtag = '<center><img src="' + img[0].src + '" width= 50%" height="auto"/></center>';
      imgtag = '<img style="float:left; margin: 0.5em 1em 0 0;" src="' + img[0].src + '" width="' + img_thumb_width_feat + 'px" height="auto"/>';
      summ = summary_img_feat;
    }
  }
  var resul = compSumAndImg(div.innerHTML, summ, imgtag)
  var summary;
  //if( isRegular ) summary = '<div style="position: 0;" class="mySumReg"><div style="display: inline-block; margin: 1em 0 1em 0;">' + imgtag + resul.summary + '</div></div>';
  //else summary = '<div style="position: 0;" class="mySumFeat"><div style="display: inline-block; margin: 1em 0 1em 0;">' + imgtag + resul.summary + '</div></div>';
  if( isRegular ) summary = '<div style="position: 0;" class="mySumReg">' + imgtag + resul.summary + '</div>';
  else summary = '<div style="position: 0;" class="mySumFeat">' + imgtag + resul.summary + '</div>';
  div.innerHTML = summary;
}

function getMyInnerLinkContent(theURL) {
  var xmlhttp = false;
  loadXMLDoc(theURL);
  if (xmlhttp == false) {
    //alert("timeout");
    return '';
  }
  else {
    var allText = xmlhttp.responseText;
    return getBody(allText);
  }

  function getBody(content) {
    var result = {title: '', authors: '',body: ''};
    var other = $("<div>").html(content);
    var post = $("<div>").append(other.find('.Blog').find('.post'));
    result.title = post.find('.post-title');
    result.header = post.find('.post-header');
    result.body = post.find('.post-body');
    return result;
  }


  function getPart(content, element, iIndex, iShow) {
    var indices = [];
    var idx = content.indexOf(element);
    while (idx != -1) {
      indices.push(idx);
      idx = content.indexOf(element, idx + 1);
    }
    if( iShow == 'yes' ) {
      for (var i = 0; i < indices.length; i++) {
        var x = indices[i];
        x = content.indexOf(">", x + 1);
        var y = content.lastIndexOf("</body>");
        var z = content.slice(x + 1, y);
        alert('getBody for ' + element + ' :\ni = ' + i + '\n' + z);
      }
    }
    var x = indices[iIndex];
    x = content.indexOf(">", x + 1);
    var y = content.lastIndexOf("</body>");
    return content.slice(x + 1, y);
  }

  function loadXMLDoc(theURL) {
    if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari, SeaMonkey
      xmlhttp = new XMLHttpRequest();
    }
    else { // code for IE6, IE5
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        //alert(xmlhttp.responseText);
      }
    }
    xmlhttp.open("GET", theURL, false);
    xmlhttp.send();
  }
}
$.fn.myTimeLine = function(options) {

  if ($(this).find('div').length == 0) {
    this.append(
      $('<div class="wrap"  ></div>').append(
        $('<div class="timeline"  ></div>')
      ), $('<div id="myTimeLineEntries"  ></div>')
    );
  }
  else options.href = checkHrefOption(this, options.href);

  var _this = this.find('.timeline');

  for (var i = 0; i < options.href.length; i++) addHrefToTimeLine(_this, options.href[i]);

  if ($(this).find('#divActivityReport').length == 0) {
    var divReports = addActivityReports('divActivityReport');
    $(this).append(divReports);
  }

  function addActivityReports(idName) {
    var divReports = $('<div id="' + idName + '"></div>');
    divReports.append('<p>Pour télécharger nos rapports d' + "'" + 'activité :</p><div style="display: flex; flex-wrap: wrap;"><a href="https://philquand.github.io/Javascript/Blog-widgets/CATDP/RapportsAct/Rapport-1.pdf"><img class="iFrameGalleryIMG" src="https://1.bp.blogspot.com/-zjupOB2LaFM/XVww7Td7rYI/AAAAAAAAjz8/u8JbzXgqz3sNss-B71sXFtMiQzbF5HzNwCLcBGAs/s1600/icon-png%2Bv3%2BRap1%2Bv2.png"></a><br><a href="https://philquand.github.io/Javascript/Blog-widgets/CATDP/RapportsAct/Rapport-2.pdf"><img class="iFrameGalleryIMG" src="https://1.bp.blogspot.com/-pufN_Ora744/XVww7VaF1BI/AAAAAAAAjz4/1TiVFHF1Cs0WC-Cw-7nO4g22qGq-mQ4-ACLcBGAs/s1600/icon-png%2Bv3%2BRap2%2Bv2.png"></a><br><a href="https://philquand.github.io/Javascript/Blog-widgets/CATDP/RapportsAct/Rapport-3.pdf"><img class="iFrameGalleryIMG" src="https://1.bp.blogspot.com/-I-YrJQ5e2X0/XVww7TBRw7I/AAAAAAAAj0A/MrzFMGimSo00jeA9dyLxCKQyhuztGyWcgCLcBGAs/s1600/icon-png%2Bv3%2BRap3%2Bv2.png"></a><br>')
    return divReports;
  };  
  
  function checkHrefOption(_this, inputHref) {
    var pubHref = [];
    _this.find('.in > a').each(function() {
      var href = $(this).attr('href');
      pubHref.push(href);
    })
    outputHref = [];
    for (var i = 0; i < inputHref.length; i++) {
      var isHref = true;
      for (var j = 0; j < pubHref.length; j++) {
        if (inputHref[i] == pubHref[j]) {
          isHref = false;
          break;
        }
      }
      if (isHref) outputHref.push(inputHref[i]);
    }
    return outputHref;
  };

  function addHrefToTimeLine(_this, href) {
    var result = getMyInnerLinkContent(href);

    var title = result.title.html();

    var date = result.header.find(".published").html();
    var inpdate = readDate(date, 0);
    var inpday = inpdate.day;
    var inpmonth = inpdate.month;
    var inpyear = inpdate.year;

    var summary = result.body[0];
    createSummaryAndThumbfromDiv(summary, true);
    summary = summary.innerHTML;

    var item = $('<div class="evt"  ></div>').append(
      $('<div class="in"  ></div>').append(
        $('<a href="' + href + '">' + title + '</a>'), $('<div class="date">' + inpday + ' ' + inpmonth + ', ' + inpyear + '</div>'), $('<div class="data">' + summary + '</div>'), $('<hr style="border-top: 1px dashed;">')
      )
    );
    var year = getYear(_this, inpyear);
    addItem(year, item, inpmonth, inpday);
  }

  function readDate(date, format) {
    var result = {
      day: '',
      month: '',
      year: ''
    };
    date = date.split(' ');
    if (format == 0) {
      result.month = $.trim(date[0]);
      result.day = parseInt(date[1].split(',')[0]);
      result.year = parseInt(date[2]);
    }
    else {
      result.day = parseInt(date[0]);
      result.month = date[1].split(',')[0];
      result.year = parseInt(date[2]);
    }
    return result;
  }

  function addItem(year, item, month, day) {
    var itemIn = true;
    year.find('.evt').each(function() {
      //var isMonth = $(this).find('.month').html();
      //var isDay = $(this).find('.day').html();
      var result = readDate($(this).find('.date').html(), 1);
      var isDay = result.day;
      var isMonth = result.month;
      if (isGreaterDay(month, day, isMonth, isDay)) {
        $(this).before(item);
        itemIn = false;
      }
      return itemIn;
    });
    if (itemIn) {
      year.append(item);
    }
  }

  function isGreaterDay(month, day, isMonth, isDay) {
    if ((month2num(month) > month2num(isMonth)) || ((month2num(month) == month2num(isMonth)) && (day > isDay))) {
      return true;
    }
    else {
      return false;
    }

    function month2num(month) {
      var monthN;
      switch (month) {
        case 'janvier':
          monthN = 1;
          break;
        case 'février':
          monthN = 2;
          break;
        case 'mars':
          monthN = 3;
          break;
        case 'avril':
          monthN = 4;
          break;
        case 'mai':
          monthN = 5;
          break;
        case 'juin':
          monthN = 6;
          break;
        case 'juillet':
          monthN = 7;
          break;
        case 'août':
          monthN = 8;
          break;
        case 'septembre':
          monthN = 9;
          break;
        case 'octobre':
          monthN = 10;
          break;
        case 'novembre':
          monthN = 11;
          break;
        case 'décembre':
          monthN = 12;
          break;

        case 'Janvier':
          monthN = 1;
          break;
        case 'Février':
          monthN = 2;
          break;
        case 'Mars':
          monthN = 3;
          break;
        case 'Avril':
          monthN = 4;
          break;
        case 'Mai':
          monthN = 5;
          break;
        case 'Juin':
          monthN = 6;
          break;
        case 'Juillet':
          monthN = 7;
          break;
        case 'Août':
          monthN = 8;
          break;
        case 'Septembre':
          monthN = 9;
          break;
        case 'Octobre':
          monthN = 10;
          break;
        case 'Novembre':
          monthN = 11;
          break;
        case 'Décembre':
          monthN = 12;
          break;

        default:
          monthN = 13;
      }

      return monthN
    }

  }

  function getYear(_this, year) {
    var newyear = '';
    _this.find('.year').each(function() {
      var isYear = $(this).find('h2').html();
      if (year == isYear) {
        newyear = $(this);
        return false;
      }
      else if (year > isYear) {
        $('#art-' + isYear).before(
          $('<a class="data-fancybox-inline-test" data-fancybox="inlineActions"  data-slide-class="customActions" data-src="#' + year + '" href="javascript:;" style="display: none" id=art-' + year + '>' + year + '</a>')
        );
        newyear = $('<div class="articleACFancy" id=' + year + '  ></div>').append($('<div class="fontACFancy"  ></div>').append($('<div class="corpsACFancy"  ></div>').append($('<div class="year"  ></div>').append($('<i><h2>' + year + '</h2></i>')))));
        $('#' + isYear).before(newyear);
        newyear = newyear.find('.year');
        return false;
      }
    });
    if (newyear == '') {
      $('#myTimeLineEntries').append(
        $('<a class="data-fancybox-inline-test" data-fancybox="inlineActions"  data-slide-class="customActions" data-src="#' + year + '" href="javascript:;" style="display: none" id=art-' + year + '>' + year + '</a>')
      );
      newyear = $('<div class="articleACFancy" id=' + year + '  ></div>').append($('<div class="fontACFancy"  ></div>').append($('<div class="corpsACFancy"  ></div>').append($('<div class="year"  ></div>').append($('<i><h2>' + year + '</h2></i>')))));
      _this.append(newyear);
      newyear = newyear.find('.year');
    }
    return newyear;
  }
}
</script>
<!-- Début Calendrier spatio-temporel -->
<div id="myCalendar"></div>
<style>
.customVid .fancybox-button.fancybox-close-small {
  display: none;
}
@media screen and (max-width: 500px) {
    .popupCustom {
        max-width: 300px; 
    }
}
@media screen and (max-width: 400px) {
    .popupCustom {
        max-width: 250px; 
    }
}
</style>
<!-- Load Leaflet -->
<link crossorigin='' href='https://unpkg.com/leaflet@1.4.0/dist/leaflet.css' integrity='sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA==' rel='stylesheet'/>
<script crossorigin='' integrity='sha512-QVftwZFqvtRNi0ZyCtsznlKSWOStnDORoefr1enyq5mVL4tmKB3S/EnC3rRJcxCPavG10IcrVGSmPh6Qw5lwrg==' src='https://unpkg.com/leaflet@1.4.0/dist/leaflet.js'></script>
<!-- For google calendar integration -->
<script src="https://momentjs.com/downloads/moment-with-locales.js"></script>
<script src="https://apis.google.com/js/api.js"></script>
  <!-- Load Esri Leaflet from CDN -->
  <script src="https://unpkg.com/esri-leaflet@2.3.0/dist/esri-leaflet.js"
  integrity="sha512-1tScwpjXwwnm6tTva0l0/ZgM3rYNbdyMj5q6RSQMbNX6EUMhYDE3pMRGZaT41zHEvLoWEK7qFEJmZDOoDMU7/Q=="
  crossorigin=""></script>
  <!-- Load Esri Leaflet Geocoder from CDN -->
  <link rel="stylesheet" href="https://unpkg.com/esri-leaflet-geocoder@2.2.14/dist/esri-leaflet-geocoder.css"
    integrity="sha512-v5YmWLm8KqAAmg5808pETiccEohtt8rPVMGQ1jA6jqkWVydV5Cuz3nJ9fQ7ittSxvuqsvI9RSGfVoKPaAJZ/AQ=="
    crossorigin="">
  <script src="https://unpkg.com/esri-leaflet-geocoder@2.2.14/dist/esri-leaflet-geocoder.js"
    integrity="sha512-uK5jVwR81KVTGe8KpJa1QIN4n60TsSV8+DPbL5wWlYQvb0/nYNgSOg9dZG6ViQhwx/gaMszuWllTemL+K+IXjg=="
    crossorigin=""></script>
<!--Load markerclusters -->
    <link href='https://philquand.github.io/Javascript/LeafLet/MarkerCluster/MarkerCluster.css' rel='stylesheet' type='text/css'/>
    <link href='https://philquand.github.io/Javascript/LeafLet/MarkerCluster/MarkerCluster.Default.css' rel='stylesheet' type='text/css'/>
    <script src="https://philquand.github.io/Javascript/LeafLet/MarkerCluster/leaflet.markercluster-src.js" type='text/javascript'></script>
    <script src="https://unpkg.com/leaflet.markercluster.freezable@1.0.0/dist/leaflet.markercluster.freezable.js" type='text/javascript'></script>

<!--Load datepicker -->
  <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css">
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<!--Load my Time-Space-Calendar -->
    <link href='https://philquand.github.io/Javascript/PhotoGaleries/myFancybox/Time-Space-Calendar.css' rel='stylesheet' type='text/css'/>
    <script src="https://philquand.github.io/Javascript/PhotoGaleries/myFancybox/Time-Space-Calendar.js" type='text/javascript'></script>
    <script src="https://philquand.github.io/Javascript/PhotoGaleries/myFancybox/Time-Space-Calendar-Address.js" type='text/javascript'></script>

<script>
$(document).ready(function() {
  $('#myCalendar').myGoogleCalendar({
    calendar: [{
        ID: 'tv6kte34tohi4h8rf0gh963rdc@group.calendar.google.com',
        color: 'yellow',
        legend: 'actions'
      },
      {
        ID: 'g4hmtl6ito4djonm11dl4lec4k@group.calendar.google.com',
        color: 'blue',
        legend: 'réunions'
      }
    ],
    iframe: {
      big: "https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FParis&amp;src=ZzRobXRsNml0bzRkam9ubTExZGw0bGVjNGtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=dHY2a3RlMzR0b2hpNGg4cmYwZ2g5NjNyZGNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%234285F4&amp;color=%23E4C441&amp;showTitle=0&amp;showPrint=0&amp;showCalendars=0&amp;showTz=0",
      medium: "https://calendar.google.com/calendar/embed?height=400&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FParis&amp;src=ZzRobXRsNml0bzRkam9ubTExZGw0bGVjNGtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=dHY2a3RlMzR0b2hpNGg4cmYwZ2g5NjNyZGNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%234285F4&amp;color=%23E4C441&amp;showTitle=0&amp;showPrint=0&amp;showCalendars=0&amp;showTz=0",
      small: "https://calendar.google.com/calendar/embed?height=400&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FParis&amp;src=ZzRobXRsNml0bzRkam9ubTExZGw0bGVjNGtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=dHY2a3RlMzR0b2hpNGg4cmYwZ2g5NjNyZGNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%234285F4&amp;color=%23E4C441&amp;showTitle=0&amp;showPrint=0&amp;showCalendars=0&amp;showTz=0&amp;mode=AGENDA&amp;showTabs=0"
   },
    mapTitle: 'Actions et réunions',
    calendarTitle: 'Actions et réunions',
    strDate: '2019-09-01'
  });
  $('#myCalendar').css('display', 'none');
});
</script>
<!-- Fin Calendrier spatio-temporel -->