<!-- jQuery for FancyBox 3-->
<script src='//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script>

<!-- Add fancyBox 3 -->
<!-- see documentation at : http://fancyapps.com/fancybox/3/docs/#options -->
<!--link href="http://cdnjs.cloudflare.com/ajax/libs/fancybox/3.1.25/jquery.fancybox.min.css" rel="stylesheet" type="text/css" /-->
<link href="https://philquand.github.io/Javascript/PhotoGaleries/fancybox-master/dist/jquery.fancybox.min.css" rel="stylesheet" type="text/css" />
<link href="https://philquand.github.io/Javascript/PhotoGaleries/fancybox-master/src/css/myFancybox.css" rel="stylesheet" type="text/css" />
<!--script src='https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.1.25/jquery.fancybox.min.js'></script-->
<script src='https://philquand.github.io/Javascript/PhotoGaleries/fancybox-master/dist/jquery.fancybox.min.js'></script>
<script src='https://philquand.github.io/Javascript/PhotoGaleries/fancybox-master/src/js/myFancybox.js'></script>
<!-- End FancyBox -->


<style>
/*.header-widget {
  padding-bottom : 1em;
}
.header-widget div h1 {
  line-height : 0.8;
}*/
.Attribution {
  display: none;
}
#sidebar_bottom {
  font-family: 'Crimson text';
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
      var h1Title = blogTitle[0].children[0].children[0];
    if (s[1] == '') {
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

<!-- Début des modifications pour Accueil sur deux colonnes -->
<!--style>
.Blog1 .blog-posts {
  display:none;
}
.Blog1 .blog-posts-table {
    display:block;
}
.classTable {
  width: 100%;
  margin: 1em;
  //border: solid;
}
.classTable tbody tr td {
  width: 50%;
  //border-right: solid;
  //border-left: solid;
  padding-right: 0.5em;
  padding-left: 0.5em;
}
.classTable tbody tr {
  vertical-align: top;
}
.jumpLink div {
  margin-right: 3em;
  //margin-left: auto;
  float: right;
}
@media screen and (max-width: 900px) {
  .Blog1 .blog-posts {
    display:block;
  }
  .Blog1 .blog-posts-table {
    display:none;
  }
}
</style>
<script type='text/javascript'>
$(document).ready(function() {
breakCode : {
var href = "https://catdp37.blogspot.com/";
var actHref = window.location.href;
var s = actHref.split(href);
if( s[1] != '') break breakCode;

  var idBlog1 = document.getElementById('Blog1');
  idBlog1.classList.add('Blog1');
  var idTable = document.createElement("div");
  idTable.classList.add('blog-posts-table');
  idBlog1.appendChild(idTable);
  //var dataTable = [['R1C1','R1C2','R1C3'],['R2C1','R2C2','R2C3'],['R3C1','R3C2','R3C3']];
  var contArticles = idBlog1.children[0];
  var postTitle = contArticles.getElementsByClassName('post-title')
  var postShareButtons = contArticles.getElementsByClassName('post-share-buttons')
  var postHeader = contArticles.getElementsByClassName('post-header')
  var likebtnWrapper = contArticles.getElementsByClassName('likebtn-wrapper')
  var postBody = contArticles.getElementsByClassName('post-body')
  var postFooterLine1 = contArticles.getElementsByClassName('post-footer-line-1')
  var jumpLink = contArticles.getElementsByClassName('jump-link')
  for( var i=0; i<postTitle.length; i+=2 ) {
    var dataTable = [];
    if(i<postTitle.length-1) {
      dataTable.push(addRowTable(postTitle[i],postTitle[i+1],'postTitle'));
      dataTable.push(addRowTable(postShareButtons[i],postShareButtons[i+1],'postShareButtons'));
      dataTable.push(addRowTable(postHeader[i],postHeader[i+1],'postHeader'));
      dataTable.push(addRowTable(likebtnWrapper[i],likebtnWrapper[i+1],'likebtnWrapper'));
      dataTable.push(addRowTable(postBody[i],postBody[i+1],'postBody'));
      dataTable.push(addRowTable(postFooterLine1[i],postFooterLine1[i+1],'postFooterLine1'));
      dataTable.push(addRowTable(jumpLink[i],jumpLink[i+1],'jumpLink'));
    } else {
      dataTable.push(addRowTable(postTitle[i],'','postTitle'));
      dataTable.push(addRowTable(postShareButtons[i],'','postShareButtons'));
      dataTable.push(addRowTable(postHeader[i],'','postHeader'));
      dataTable.push(addRowTable(likebtnWrapper[i],'','likebtnWrapper'));
      dataTable.push(addRowTable(postBody[i],'','postBody'));
      dataTable.push(addRowTable(postFooterLine1[i],'','postFooterLine1'));
      dataTable.push(addRowTable(jumpLink[i],'','jumpLink'));
    }
    writeTable(idTable, dataTable,'classTable');
  }
  //accueilRemoveClass("jump-link");
  //accueilRemoveClass("post-footer");
}
});
function addRowTable(cell1, cell2, classRow) {
  var newRow = [];
  newRow.push(classRow);
  var newCell1 = cell1.cloneNode(true);
  newRow.push(newCell1);
  if( cell2 != '') {
    var newCell2 = cell2.cloneNode(true);
    newRow.push(newCell2);
  }
  return newRow;
}
function writeTable(parent, data, classTable) {
    var TBtbody = document.createElement("table");
    TBtbody.classList.add(classTable);
    parent.appendChild(TBtbody);
    var tbody = document.createElement("tbody");
    TBtbody.appendChild(tbody);

    for (var r = 0; r < data.length; r++) {
        drawRow(tbody, data[r]);
    }

    function drawRow(table, rowData) {
    	if (rowData == null) return null;
        if (rowData.length == 0) return null;
        //var tr = $("<tr style='width: 100%;'/>");
        var tr = document.createElement("tr");
        //tr.classList.add(rowData[0]);
        table.appendChild(tr);
        for (var c = 1; c < rowData.length; c++) {
            drawCell(tr, rowData[c], rowData[0]);
        }
        return tr;

        function drawCell(tr, val, cellClass) {
            var td = document.createElement("td");
            td.classList.add(cellClass);
            tr.appendChild(td);
            td.appendChild(val);
            return td;
        }
    }

}                                       
function accueilRemoveClass(oldClass) {
	var div = document.getElementsByClassName(oldClass);
    while (div[0]) {
      div[0].className = 'accueil-' + oldClass;
    }
}
</script-->
<!-- Fin des modifications pour Accueil sur deux colonnes -->

<style>
.mySumFeat {
line-height: 1.6;
}
.mySumFeat {
color: black;
font-size: 125%;
}
.mySumReg {
//line-height: 1.2;
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