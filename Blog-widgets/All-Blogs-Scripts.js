var load = (function() {
  // Function which returns a function: https://davidwalsh.name/javascript-functions
  function _load(tag) {
    return function(url) {
      // This promise will be used by Promise.all to determine success or failure
      return new Promise(function(resolve, reject) {
        var element = document.createElement(tag);
        var parent = 'body';
        var attr = 'src';

        // Important success and error for the promise
        element.onload = function() {
          resolve(url);
        };
        element.onerror = function() {
          reject(url);
        };

        // Need to set different attributes depending on tag type
        switch (tag) {
          case 'script':
            element.async = true;
            break;
          case 'link':
            element.type = 'text/css';
            element.rel = 'stylesheet';
            attr = 'href';
            parent = 'head';
            break;
          case 'json':
            let xhr = new XMLHttpRequest();

            xhr.open('GET', url);
            xhr.onreadystatechange = handler;
            xhr.responseType = 'json';
            xhr.setRequestHeader('Accept', 'application/json');
            xhr.send();

            function handler() {
              if (this.readyState === this.DONE) {
                if (this.status === 200) {
                  resolve({
                    url: url,
                    val: this.response
                  });
                }
                else {
                  reject(
                    new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']')
                  );
                }
              }
            };
        }

        // Inject into document to kick off loading
        element[attr] = url;
        document[parent].appendChild(element);
      });
    };
  }

  return {
    css: _load('link'),
    js: _load('script'),
    img: _load('img'),
    json: _load('json')
  }
})();

var loadVal = function(values, url) {
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] === 'object' && values[i]["url"] === url) return values[i]["val"]
  }
  return 'not found'
}

var isValidUrl = function validURL(url) {
   /*
   var urlTest = url;
   var re = / /gi;
   var urlTest = urlTest.replace(re, "");
   return /^(https?|s?file):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(urlTest);
   */
   return url.startsWith('https://') || url.startsWith('http://') || url.startsWith('file:///') ;
}

var deepEqual = function(x, y) {
  if (x === y) {
    return true;
  }
  else if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) {
    if (Object.keys(x).length != Object.keys(y).length)
      return false;

    for (var prop in x) {
      if (y.hasOwnProperty(prop)) {
        if (!deepEqual(x[prop], y[prop]))
          return false;
      }
      else
        return false;
    }

    return true;
  }
  else
    return false;
  /*var obj = {here: {is: "an", other: "3"}, object: 2};
  console.log(deepEqual(obj, obj));
  // → true
  console.log(deepEqual(obj, {here: 1, object: 2}));
  // → false
  console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
  // → false
  console.log(deepEqual(obj, {here: {is: "an", other: "2"}, object: 2}));
  // → false
  console.log(deepEqual(obj, {here: {is: "an", other: "3"}, object: 2}));
  // → true
  return*/
}

/*var clone = originalObject => {
  if ((typeof originalObject !== 'object') || originalObject === null) {
    throw new TypeError("originalObject parameter must be an object which is not null");
  }

  var deepCopy = JSON.parse(JSON.stringify(originalObject));

  // Une petite récursivité 
  function deepProto(originalObject, deepCopy) {
    deepCopy.__proto__ = Object.create(originalObject.constructor.prototype);
    for (var attribute in originalObject) {
      if (typeof originalObject[attribute] === 'object' && originalObject[attribute] !== null) {
        deepProto(originalObject[attribute], deepCopy[attribute]);
      }
    }
  }
  deepProto(originalObject, deepCopy);

  return deepCopy;
}*/ 
var clone = originalObject => { return jQuery.extend(true, {}, originalObject); }
  
//exemples of use in Fermeture.html map object
function loadFromJSON(storedData, setCallBack, setOntError) {
  if (typeof storedData !== 'undefined') {
    try {
      //jQuery.error('Coucou');
      if (!isValidUrl(storedData)) {
        jQuery.error(storedData + '<br> ne semble pas être une adresse correcte...');
      }
      else {
        console.log('loading data from file : ' + storedData)
        Promise.all([
          // chargement des données au format Geojson
          load.json(storedData),
        ]).then(
          values => {
            var getJSONFromFile = data => {
              return data;
            }
            //console.log('Everything has been loaded!');
            storedData = loadVal(values, storedData);
            storedData = getJSONFromFile(storedData);
            //if (typeof checkIfStoreNeedsUpdate !== 'undefined' && checkIfStoreNeedsUpdate) loadData();
            //else {
            //return setCallBack(storedData);
            return setCallBack(storedData);
            //}
          },
          reason => {
            //console.log(reason);
            if(typeof setOntError !== 'undefined' ) setOntError(reason);
          }
        );
      }
    }
    catch (err) { //We can also throw from try block and catch it here
      if(typeof setOntError !== 'undefined' ) setOntError(err);
    }
  }
};
function loadFromJS(storedData, setCallBack, setOntError) {
  if (typeof storedData !== 'undefined') {
    try {
      //jQuery.error('Coucou');
      if (!isValidUrl(storedData)) {
        jQuery.error(storedData + '<br> ne semble pas être une adresse correcte...');
      }
      else {
        console.log('loading data from file : ' + storedData)
        Promise.all([
          // chargement des données Javascript
          load.js(storedData),
        ]).then(
          values => {
            return setCallBack();
          },
          reason => {
            //console.log(reason);
            if (typeof setOntError !== 'undefined') setOntError(reason);
          }
        );
      }
    }
    catch (err) { //We can also throw from try block and catch it here
      if (typeof setOntError !== 'undefined') setOntError(err);
    }
  }
};

var readUrlParam = name => {
  var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
  if(results != null) return results[1] || 0;
  // example.com?someparam=name&otherparam=8&id=6
  // readUrlParam('someparam'); // name
  // readUrlParam('id');        // 6
  // readUrlParam('notavar');   // null*/
};

// necessary to Fermeture.html map object
var stringifyJSO2V = function(obj, prop) {
  var placeholder = '____PLACEHOLDER____';
  var fns = [];
  var json = JSON.stringify(obj, function(key, value) {
    if (typeof value === 'function') {
      fns.push(value);
      return placeholder;
    }
    return value;
  }, 2);
  json = json.replace(new RegExp('"' + placeholder + '"', 'g'), function(_) {
    return fns.shift();
  });
  return 'this["' + prop + '"] = ' + json + ';';
};
var isOKString = data => {
  if (jQuery.type(data) === 'string' && data != '') return true;
  else return false;
}
var isValidCoord = function(lat, lng) {
  if (typeof lat === 'undefined') return false;
  else if (lat == '') return false;
  else if (typeof lng === 'undefined') return false;
  else if (lng == '') return false;
  return true;
};
// end of necessary to Fermeture.html map object

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
  createSummaryAndThumbfromDiv(div, isRegular);
}
function createSummaryAndThumbfromDiv(div, isRegular) {
//function createSummaryAndThumb(pID, isRegular) {
//  var div = document.getElementById(pID);
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