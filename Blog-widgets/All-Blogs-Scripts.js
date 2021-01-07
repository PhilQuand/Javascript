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
    if (imgtag == '') {
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
        if ((isToDelete != 0) || debToDelete) {
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
          if (isTagtoSum(s, i)) {
            //if(chopCount < chopIn) chop += s[i].indexOf(">") + 1
            curS = '<' + s[i];
            if (chopCount < chopIn && !isTagMore(s, i)) {
              chop += s[i].indexOf(">") + 2;
            }
            else isFinished = true;
          }
          else {
            curS = s[i].substring(s[i].indexOf(">") + 1, s[i].length);
          }
          chopCount += (s[i].length - s[i].indexOf(">") - 1);
          // insert two line breaks after authors
          if ((i > 1) && (s[i - 2] == '/span>') && (s[i - 1] == '/strong>') && (s[i].indexOf('/p>') == 0)) {
            news.push('<br/>');
            chop += 5;
          }
          if(!isFinished) news.push(curS);
        }
      }
      //if( isFinished ) i = s.length;
      if (isFinished) break;
    }
    strx = news.join("");
  }

  if (msg != '') alert('news.length : ' + news.length + '\ns.length : ' + s.length + '\nmsg : \n' + msg);
  chop = (chop < strx.length - 1) ? chop : strx.length - 1;
  if (chop != strx.length - 1)
    while (strx.charAt(chop) != ' ') chop--;
  strx = strx.substring(0, chop);
  result.summary = strx + '...';
  return result;

  function isTagtoSum(s, i) {
    //if(s[i][0] == 'a' || s[i].indexOf('/a>') > -1) {
    if (s[i][0] == 'a' && s[i + 1].indexOf('img') != 0) {
      return true;
    }
    if (s[i].indexOf('/a>') > -1 && s[i - 1].indexOf('img') != 0) {
      return true;
    }
    if (s[i].indexOf('strong') > -1) {
      return true;
    }
    if (s[i].indexOf('em>') > -1) {
      return true;
    }
    return false;
  }

  function isTagMore(s, i) {
    if (s[i].indexOf('name="more"') > -1) {
      return true;
    }
    return false;
  }

  function debDivToDelete(s) {
    var myTag = s.substring(0, s.indexOf(">"));
    if ((myTag.indexOf('div') > -1) && (myTag.indexOf('data-summary="no"') > -1)) {
      return true;
    }
    if ((myTag.indexOf('script') == 0)) {
      return true;
    }
    if (myTag.indexOf('style') == 0) {
      return true;
    }
    return false;
  }

  function debDiv(s) {
    var myTag = s.substring(0, s.indexOf(">"));
    if (myTag.indexOf('div') > -1 && !(myTag.indexOf('/') > -1)) {
      return true;
    }
    if ((myTag.indexOf('script') == 0) && !((myTag.indexOf('/script') > -1) || (myTag[myTag.length - 1] == '/'))) {
      return true;
    }
    if ((myTag.indexOf('style') == 0) && !((myTag.indexOf('/style') > -1) || (myTag[myTag.length - 1] == '/'))) {
      return true;
    }
    return false;
  }

  function endDiv(s) {
    var myTag = s.substring(0, s.indexOf(">"));
    if (myTag.indexOf('div') > -1 && myTag.indexOf('/') > -1) {
      return true;
    }
    if (myTag.indexOf('/script') == 0) {
      return true;
    }
    if (myTag.indexOf('/style') == 0) {
      return true;
    }
    return false;
  }
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