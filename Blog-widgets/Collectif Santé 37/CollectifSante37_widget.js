<!-- jQuery for FancyBox 3-->
<script src='//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script>

<!-- Add fancyBox 3 -->
<!-- see documentation at : http://fancyapps.com/fancybox/3/docs/#options -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.css" rel="stylesheet" type="text/css" />
<link href="https://philquand.github.io/Javascript/PhotoGaleries/myFancybox/myFancybox.css" rel="stylesheet" type="text/css" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.js"></script>
<script src='https://philquand.github.io/Javascript/PhotoGaleries/myFancybox/myFancybox.js'></script>
<!-- End FancyBox -->


<link crossorigin='' href='https://unpkg.com/leaflet@1.4.0/dist/leaflet.css' integrity='sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA==' rel='stylesheet'/>
<script crossorigin='' integrity='sha512-QVftwZFqvtRNi0ZyCtsznlKSWOStnDORoefr1enyq5mVL4tmKB3S/EnC3rRJcxCPavG10IcrVGSmPh6Qw5lwrg==' src='https://unpkg.com/leaflet@1.4.0/dist/leaflet.js'></script>
<style>
.post-body img {
    background: transparent !important;
    /*box-shadow: none !important;*/ /*this remove shadow*/
}
</style>
<script>
// Ressources pour cartes LeafLet
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
    img: _load('img')
  }
})();
// Constructeur de la carte LeafLet
function loadMap() {
  L.map('map').remove();
  var map = L.map('map');

  map.createPane('labels');

  // This pane is above markers but below popups
  map.getPane('labels').style.zIndex = 650;

  // Layers in this pane are non-interactive and do not obscure mouse/touch events
  map.getPane('labels').style.pointerEvents = 'none';


  /*var cartodbAttribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>';

  var positron = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
    attribution: cartodbAttribution
  }).addTo(map);

  var positronLabels = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
    attribution: cartodbAttribution,
    pane: 'labels'
  }).addTo(map);*/

  return map;

};

function add2Layer(myLayer, inputCollection, setCallBack, iconSize) {

  // définition de la classe FlagIcon
  var FlagIcon = L.Icon.extend({
    options: {
      iconSize: iconSize, // size of the icon
      iconAnchor: [15, 15], // point of the icon which will correspond to marker's location
      popupAnchor: [-3, -15] // point from which the popup should open relative to the iconAnchor
    }
  });

  for (var i = 0; i < inputCollection.length; i++) {
    var input = inputCollection[i];

    // définition des lieux (icons)
    var myIcon = new FlagIcon({
      iconUrl: input.flag
    });

    // définition des markers associés au groupe météo des luttes
    var marker = L.marker([input.lat, input.lng], {
      icon: myIcon
    }).addTo(myLayer);

    marker.bindPopup(input.doc).openPopup();
    marker.getPopup().on('remove', function() {
      setCallBack();
    });
  }
};

function zoomRemove( map ) {
  //remove zoom functions
  map.removeControl(map.zoomControl);
  map.touchZoom.disable();
  map.doubleClickZoom.disable();
  map.scrollWheelZoom.disable();
  map.boxZoom.disable();
  map.keyboard.disable();
}

// Copyright (c) 2013 Ryan Clark
// https://gist.github.com/rclark/5779673
L.TopoJSON = L.GeoJSON.extend({
  addData: function(jsonData) {
    if (jsonData.type === "Topology") {
      for (key in jsonData.objects) {
        geojson = topojson.feature(jsonData, jsonData.objects[key]);
        L.GeoJSON.prototype.addData.call(this, geojson);
      }
    }
    else {
      L.GeoJSON.prototype.addData.call(this, jsonData);
    }
  }
});

// Constructeur de la carte TopoJSON avec pays pour LeafLet
function loadMapTopoJSON(map, colorDeb, colorFin, colorStyle) {
  // Usage:  Load different file types with one callback
  Promise.all([
    //load.css('lib/highlighter.css'),
    //load.img('images/logo.png')
    //load.js('lib/main.js'), 

    // Début ressources utilisées pour construire la carte mondiale colorée TopoJSON
    // ressources chroma.js utilisées pour construire la carte TopoJSON colorée
    //load.js('https://drive.google.com/uc?export=download&id=1vAhVcT9intE5QEkcuu3UQOBEutYjKtaO'),
    load.js('https://philquand.github.io/Javascript/LeafLet/chroma.min.js'),
    // ressources utilisées pour construire la carte TopoSJON
    load.js('https://d3js.org/topojson.v1.min.js'),
    // données de la carte TopoSJON
    //load.js('https://drive.google.com/uc?export=download&id=1WZyHrCgJmR3mCAdQMHicqT0yjKASiJpE')
    load.js('https://philquand.github.io/Javascript/LeafLet/countries.topo.json')
    // Fint ressources utilisées pour construire la carte mondiale colorée TopoJSON

  ]).then(function() {
    console.log('Everything has loaded!');

    topoLayer = new L.TopoJSON(),
      colorScale = chroma
      //.scale(['#D5E3FF', '#003171'])
      .scale([colorDeb, colorFin])
      .domain([0, 1]);

    addTopoData(worldCountries);

    function addTopoData(topoData) {
      topoLayer.addData(topoData);
      topoLayer.addTo(map);
      topoLayer.eachLayer(handleLayer);
    }

    function handleLayer(layer) {
      var randomValue = Math.random(),
        fillColor = colorScale(randomValue).hex();

      layer.setStyle({
        fillColor: fillColor,
        fillOpacity: 1,
        color: colorStyle,
        weight: 1,
        opacity: .5
      });

    }
  }).catch(function() {
    console.log('Oh no, epic failure!');
  });
};

// Constructeur de la planisphère openstreetmap pour LeafLet
function loadOpenStreetWorld(map) {

  var cartodbAttribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>';

  var positron = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    attribution: cartodbAttribution
  }).addTo(map);

  /*var positronLabels = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
    attribution: cartodbAttribution,
    pane: 'labels'
  }).addTo(map);*/

};

// Constructeur de la carte Mapbox pour LeafLet
function loadMapBox(map) {
  var mapboxAccessToken = 'pk.eyJ1IjoicGhpbHF1YW5kIiwiYSI6ImNqcmZlOWFwMjBuMnQ0NW1qN3VhczNhMW4ifQ.OSyAGC_JQQUISRiSuc8ghg';

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    //id: 'mapbox.light',
    accessToken: mapboxAccessToken
  }).addTo(map);

};

// Constructeur de la carte GeoJSON des régions françaises pour LeafLet
function loadRegFranceJSONN(map, getColor) {
  // Usage:  Load different file types with one callback
  Promise.all([
    // GeoJSON des régions françaises
    //load.js('https://drive.google.com/uc?export=download&id=1hrJGwENimzW4gmf812yAZQk1z1KivZSU')
    load.js('https://philquand.github.io/Javascript/LeafLet/regionsFranceData.js')
  ]).then(function() {
    console.log('Everything has loaded!');

    function styleReg(feature) {
      return {
        fillColor: getColor(feature.properties.nom),
        weight: 2,
        opacity: 1,
        color: 'white',
        fillOpacity: 0.7
      };
    }

    L.geoJson(regionsFranceData, {
      style: styleReg
    }).addTo(map);

  }).catch(function() {
    console.log('Oh no, epic failure!');
  });
};

// Constructeur de la carte GeoJSON des départements françaises pour LeafLet
function loadDeptFranceJSONN(map, getColor, getFilter) {
  // Usage:  Load different file types with one callback
  Promise.all([
    // GeoJSON des régions françaises
    //load.js('https://drive.google.com/uc?export=download&id=1D_ajtPoOkMWqaz8o8LkKPYjRd-LuxjJw')
    load.js('https://philquand.github.io/Javascript/LeafLet/deptsFranceData.js')
  ]).then(function() {
    console.log('Everything has been loaded!');

    function styleReg(feature) {
      return {
        fillColor: getColor(feature.properties.nom),
        weight: 2,
        opacity: 1,
        color: 'white',
        fillOpacity: 0.5
      };
    }

    function filterReg(feature, layer) {
      return getFilter(feature.properties.nom);
    }

    L.geoJson(deptsFranceData, {
      style: styleReg,
      filter: filterReg
    }).addTo(map);

  }).catch(function() {
    console.log('Oh no, epic failure!');
  });
};

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
        var y = content.lastIndexOf("</"  + 'body' + ">");
        var z = content.slice(x + 1, y);
        alert('getBody for ' + element + ' :\ni = ' + i + '\n' + z);
      }
    }
    var x = indices[iIndex];
    x = content.indexOf(">", x + 1);
    var y = content.lastIndexOf("</"  + 'body' + ">");
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
</script>
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

<!-- styles de paragraphe -->
<style>
h1 { 
  display: block;
  color: #D52C1E;
  font-size: 2em;
  //font-size:x-large;
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
/*.mySumReg img {
  max-height: 50px;
}*/
.header {
  text-align: justify;
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
.corps {
  text-align: justify;
  //padding: 1em;
  //background-color: rgba(0, 0, 0, 0.04);
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
  font-size:x-large;
}
.furthermore {
  text-align: right;
  font-style: italic;
}
</style>
<!-- alignement de deux images de même taille -->
<style>
/*.avatar-image-container {
    max-width: 40px;
}*/
.img2align {
    display: flex; 
    align-items: center;
    width: 100%; 
}
.img2align .divImg {
    max-width: 600px; 
    width: 50%; 
    margin-right: 0.5em;
    margin-bottom: 1em;
}
.img2align  .divImg img {
    width: 100%;
}
@media (max-width: 1100px) {
    .img2align {
        display: block; 
    }
    .img2align  .divImg {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 80%; 
    }
}
</style>
<!-- alignement vignette et texte -->
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
.VignetteBR.flex .divImg.relief img {
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
    margin-left: 1em;
    float: right;
}
.VignetteBR.float .divText, .VignetteBR.float .divImg img {
    width: 100%; 
}
.VignetteBR.float .divImg.relief img {
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
        //max-width: 200px; 
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
.VignetteBR .divImg.relief img {
    box-shadow: rgba(0, 0, 0, 0.8) 10px 5px 25px;
</style-->
<style>
/* pour rendre les vidéo "responsive" (voir sbipsetlab...) */
.video-wrapper {
	width: 560px;
	max-width: 100%;
    margin: 2em auto 2em auto;
}
.video-container {
	position: relative;
	padding-bottom: 56.25%;
	//padding-top: 30px;
	height: 0;
	overflow: hidden;
}

.video-container iframe,  
.video-container object,  
.video-container embed {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
</style>

<!-- Add a modal window -->

<!--a style="display:none" class="fancybox fancybox.iframe" data-type="iframe" data-fancybox="iframes" data-src="https://geodes.santepubliquefrance.fr/index.php#bbox=-162564,6318414,679313,535880&c=indicator&f=0&i=covid_hospit.hosp&t=a01&view=map2" href="javascript:;" >iframe 1</a>
<a style="display:none" class="fancybox fancybox.iframe" data-type="iframe" data-fancybox="iframes" data-src="https://geodes.santepubliquefrance.fr/index.php#bbox=-162564,6318414,679313,535880&c=indicator&f=0&i=covid_hospit.rea&t=a01&view=map2" href="javascript:;" >iframe 2</a>
<a style="display:none" class="fancybox fancybox.iframe" data-type="iframe" data-fancybox="iframes" data-src="https://geodes.santepubliquefrance.fr/index.php#bbox=-162564,6318414,679313,535880&c=indicator&f=0&i=covid_hospit.dc&t=a01&view=map2" href="javascript:;" >iframe 3</a>
<a style="display:none" class="fancybox fancybox.iframe" data-type="iframe" data-fancybox="iframes" data-src="https://geodes.santepubliquefrance.fr/index.php#bbox=-162564,6318414,679313,535880&c=indicator&f=0&i=covid_hospit.rad&t=a01&view=map2" href="javascript:;" >iframe 4</a>
<a style="display:none" class="fancybox fancybox.iframe" data-type="iframe" data-fancybox="iframes" data-src="https://thevirustracker.com/" href="javascript:;" >iframe 5</a-->

<!--div class="articleFancy" id="hidden-content-1">
<div class="corpsFancy">
<img src="https://1.bp.blogspot.com/-FJDjMPOenx4/XuIfoidV9BI/AAAAAAAAmYI/tSp1eLB5URw75B9UAHIkpUkeCAJGxwiZQCK4BGAsYHg/s1600/Capture%2Bd%25E2%2580%2599e%25CC%2581cran%2B2020-06-11%2Ba%25CC%2580%2B14.11.22.jpg" />
</div>
</div>
<a style="display:none" class="trgImgUL" data-src="#hidden-content-1" data-fancybox="images" data-width="1132" data-height="1600">TEST Fancy</a>
<div class="articleFancy" id="hidden-content-2">
<div class="corpsFancy">
<img src="https://1.bp.blogspot.com/-VKgaKWKbOq8/Xkq4tDRM-kI/AAAAAAAAlBc/aDkpX-FLoEoRpOXMi_ScH5QIjNNrWUicgCPcBGAYYCw/s1600/Capture%2Bd%25E2%2580%2599e%25CC%2581cran%2B2020-02-17%2Ba%25CC%2580%2B16.59.53.png" />
</div>
</div>
<a style="display:none" class="trgImgUL" data-src="#hidden-content-2" data-fancybox="images" data-width="1132" data-height="1600">TEST Fancy</a>
<div class="articleFancy" id="hidden-content-3">
<div class="corpsFancy">
<img src="https://1.bp.blogspot.com/-lcApAQdxneQ/Xkq4sQKFAlI/AAAAAAAAlBY/qRqji_Dp9w0-n9bGxCBj1lrA3ih_oD6KwCPcBGAYYCw/s1600/Capture%2Bd%25E2%2580%2599e%25CC%2581cran%2B2020-02-17%2Ba%25CC%2580%2B16.59.20.png" />
</div>
</div>
<a style="display:none" class="trgImgUL" data-src="#hidden-content-3" data-fancybox="images" data-width="1132" data-height="1600">TEST Fancy</a>
<div class="articleFancy" id="hidden-content-4">
<div class="corpsFancy">
<img src="https://1.bp.blogspot.com/-r4UZygiIxfo/Xkq4rkiwgUI/AAAAAAAAlBY/IBOahb50pnUBYAM37xxp3VO3WO6tpsRGACPcBGAYYCw/s1600/Capture%2Bd%25E2%2580%2599e%25CC%2581cran%2B2020-02-17%2Ba%25CC%2580%2B16.59.39.png" />
</div>
</div>
<a style="display:none" class="trgImgUL" data-src="#hidden-content-4" data-fancybox="images" data-width="1132" data-height="1600">TEST Fancy</a>
<a style="display:none" class="trgImgUL" href="https://1.bp.blogspot.com/-m66JTk-a1oY/Xd9_VShqHFI/AAAAAAAAki8/YgooSCCzwAEPv236ldJ8Qj-4ES3HezXBwCK4BGAYYCw/s1600/Appel-5-Dec.jpeg" data-fancybox="images" data-width="679" data-height="960">TEST Fancy</a-->

<div class="articleFancy" id="hidden-content-1">
<div class="corpsFancy">
<div style="font-size:24px; text-align: center; line-height: 150%; margin-top: 2em">
Le 16 juin sera une journée historique de mobilisation dans  la santé<br/>
après l’épidémie du coronavirus au début de laquelle <br/>
les personnels dans les hôpitaux, les EHPAD et les services à domicile ont pris soin des malades et des personnes dépendantes sans protection.

<p style="color:red"><b>Rendez-vous le mardi 16 juin à 15H place Jean Jaurès</b></p>
</div>
</div>
</div>
<a style="display:none" class="trgImgUL" data-src="#hidden-content-1" data-fancybox="images" data-width="1132" data-height="1600">TEST Fancy</a>
<div class="articleFancy" id="hidden-content-2">
<div class="corpsFancy">
<img src="https://1.bp.blogspot.com/-FJDjMPOenx4/XuIfoidV9BI/AAAAAAAAmYI/tSp1eLB5URw75B9UAHIkpUkeCAJGxwiZQCK4BGAsYHg/s1600/Capture%2Bd%25E2%2580%2599e%25CC%2581cran%2B2020-06-11%2Ba%25CC%2580%2B14.11.22.jpg" />
</div>
</div>
<a style="display:none" class="trgImgUL" data-src="#hidden-content-2" data-fancybox="images" data-width="1132" data-height="1600">TEST Fancy</a>
<!--div class="articleFancy" id="hidden-content-3">
<div class="corpsFancy">
<img src="https://1.bp.blogspot.com/-G3PSWiGvqf8/XskUGfVQM-I/AAAAAAAAmEw/s2upFEbjY5YgNsq4k1xUJvkk9fcMI8tBgCK4BGAsYHg/s1600/98306570_1286226648246897_920476663366549504_n.jpg" />
</div>
</div>
<a style="display:none" class="trgImgUL" data-src="#hidden-content-3" data-fancybox="images" data-width="1132" data-height="1600">TEST Fancy</a-->

<!-- End of modal window -->
<style>
.bg-photo-overlay {
  background-image: url("https://1.bp.blogspot.com/-irCxDcyeGC4/XZXsscPP4kI/AAAAAAAAkKM/8rvF00Lvr1Y_iF5BOWT7hOXoqeaXvRJogCPcBGAYYCw/s320/Capture%2Bd%25E2%2580%2599e%25CC%2581cran%2B2019-10-03%2Ba%25CC%2580%2B14.41.46.png");
}
</style>
<style>
.img-foreground {
  position: absolute;
  //top: 75px;
  top: 1em;
  left: 1em;
  width: 20%;
  max-width: 600px;
  //height: 100%;
  //pointer-events: none;
  cursor:pointer;
}
.img-foreground {
  //background-color: red;
  animation-name: stretch;
  animation-duration: 2.5s; 
  //animation-timing-function: ease-out; 
  animation-delay: 0;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-fill-mode: none;
  animation-play-state: running;
}

@keyframes stretch {
  0% {
    transform: scale(.2);
    //background-color: red;
    border-radius: 100%;
  }
  10% {
    transform: scale(1.);
    border-radius: 0%;
    //background-color: orange;
  }
  100% {
    transform: scale(2.);
    //transform: scale(0.8);
    //background-color: yellow;
  }
}
</style>
<!--link href="https://philquand.github.io/Javascript/PhotoGaleries/myFancybox/AlaUne.css" rel="stylesheet" type="text/css" /-->
<script type='module' src='https://philquand.github.io/Javascript/PhotoGaleries/myFancybox/AlaUne.js'></script>
<style>
.articleFancy {
  display: none;
}
</style>
<script>
if ( window.location.pathname == '/' ){
  // pétition change.org sur la réanimation pédiatrie
  //$('.page_body').append('<a href="https://www.change.org/p/emmanuel-macron-agn%C3%A8s-buzyn-sauvons-la-r%C3%A9animation-p%C3%A9diatrique-l-appel-des-parents"><img class="img-foreground" border="0" data-original-height="512" data-original-width="512" src="https://4.bp.blogspot.com/-oAseGH4-Rmg/XjbyJbrWCvI/AAAAAAAAk7I/1vgAZGlYieAsQ9j9lz5mETgq60UGBo8nACLcBGAsYHQ/s1600/Pe%25CC%2581tition%2BPe%25CC%2581diatrie.jpg" /></a>');
  //$('.page_body').append('<a href="https://youtu.be/7tO2IkLDNlk"><img class="img-foreground" src="https://1.bp.blogspot.com/-4c9MRQiEeb8/Xka1VOFAoFI/AAAAAAAAk-c/j8BJiF1bV1wABPVcnicsgbs9ouZ2nKMVwCLcBGAsYHQ/s1600/Capture%2Bd%25E2%2580%2599e%25CC%2581cran%2B2020-02-14%2Ba%25CC%2580%2B15.56.33.png" /></a>');
  //$('.page_body').append('<a href="https://youtu.be/7tO2IkLDNlk"><img class="img-foreground" src="https://1.bp.blogspot.com/-hxTYiKnKI1A/XklzVPvsmJI/AAAAAAAAk_g/8vb0ElqOgdgLKvjT17apdQ9CP779ZtPlwCLcBGAsYHQ/s1600/Capture%2Bd%25E2%2580%2599e%25CC%2581cran%2B2020-02-14%2Ba%25CC%2580%2B15.56.33.jpg" /></a>');
  
  //$('.page_body').append('<a href="https://collectifsante37.blogspot.com/#iframes-1"><img class="img-foreground" src="https://1.bp.blogspot.com/-DYdZzA-CRZU/XoHet8_fCWI/AAAAAAAAlRg/R4T6v1XagJ0ckuzhD8MDG6H6IQddEdDrwCLcBGAsYHQ/s1600/coronavirus_generic.png" /></a>');
  //$('.page_body').append('<a href="https://collectifsante37.blogspot.com/#iframes-1"><div class="img-foreground gallery-container"></div></a>');
  //$('.page_body').append('<a href="https://collectifsante37.blogspot.com/#images-1"><img class="img-foreground" src="https://1.bp.blogspot.com/-q2VTR14q1qk/Xsj-_RM40jI/AAAAAAAAmD4/fgtSYY6FmVMETIbHuAsUYchU696jBXofACK4BGAsYHg/s1600/Azo%2B2020%2B03%2B01%2BMe%25CC%2581gaphone%252Bpetit.png" /></a>');

  //$('.page_body').append('<div class="img-foreground" id="AlaUne"></div>');
  $('.page_body').append('<div class="img-foreground gallery-container"></div>');
}
</script>
<script>
$(document).ready(function() {
  $('#AlaUne').AlaUne({
      src: '<iframe width="100%" height="120" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FDemainLeGrandSoir%2Femission-sur-la-situation-de-lh%C3%B4pital-public%2F" frameborder="0" ></iframe>',
      //src: "https://thumbnailer.mixcloud.com/unsafe/600x600/defaults/cloudcasts/7.png",
      fancyClass: {
            baseClass: 'demain20200923AlaUneBaseClass',
      },
      href: [
        /*{
          dataType: "inline",
          dataSrc: '<div style="font-size:24px; text-align: center; line-height: 150%; margin-top: 2em">Après le succès de la mobilisation du 16 à Tours et nationalement, il faut enfoncer le clou pour obtenir satisfaction aux réelles revendications des personnels et usagers que le Ségur de la santé ne prend pas en compte: embauches supplémentaires, réouverture de services et ou d&#39;hôpitaux fermés, arrêt du « dézingage » des statuts des personnels hospitaliers... \
                 <p style="color:red"><b>Mardi 30 juin 2020, <br/>Toutes et Tous en grève<br/>Rassemblement à Tours, à 15H devant l&#39;ARS<br/>et Manifestation</b>.</p></div>'
        },*/
        /*{
          dataType: "inline",
          dataSrc: '<img src="https://1.bp.blogspot.com/-jKqQHNaVL34/X29erAHnc_I/AAAAAAAAnKw/ojxM3Qp_5O0ycDTdE8BNF_VTJKiWp0AZQCLcBGAsYHQ/s0/1600935189987_report%2B3%2Boct.jpg" />'
        },*/ 
        {
          dataType: "iframe",
          dataSrc: "https://www.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2FDemainLeGrandSoir%2Femission-sur-la-situation-de-lh%C3%B4pital-public%2F"
        },
        /*{
          dataType: "images",
          dataSrc: "https://1.bp.blogspot.com/-q2VTR14q1qk/Xsj-_RM40jI/AAAAAAAAmD4/fgtSYY6FmVMETIbHuAsUYchU696jBXofACK4BGAsYHg/s1600/Azo%2B2020%2B03%2B01%2BMe%25CC%2581gaphone%252Bpetit.png"
        }*/
        /*{
          dataType: "video",
          dataSrc: "https://www.youtube.com/watch?v=OdPaf_H5On4&amp;autoplay=1&amp;rel=0&amp;controls=0&amp;showinfo=0"
        },*/
    ]
  });
});
</script>
<style>
.demain20200923AlaUneBaseClass  .fancybox-slide.fancybox-slide--iframe .fancybox-content {
    max-width: calc(100% - 80px);
    max-height: 180px;
    overflow: visible;
    width: 100%;
    margin-top: 40px;
    margin-bottom: 40px;
}
</style>
<!-- 
Mutualisation de la gallerie de photos du post "Des protections et des tests pour toutes et tous les soignant.es !" 
-->
<style>
.gallery-container {
    width: 30vw;
}
@media screen and (max-width: 1100px) {
    .gallery-container {
         width: 60vw;
    }
}
</style>
<script type='module' src='https://philquand.github.io/Javascript/PhotoGaleries/Shaders/Shaders-plug-in.js'></script>
<script>
$(document).ready(function() {
  $('.gallery-container').Shaders({
        images: [
          "https://1.bp.blogspot.com/-0HZlOUs3e_o/X8FxrXLHJKI/AAAAAAAAnbY/DO_WVoEt7hMa7_JYaIQ7ppff774ltltzgCLcBGAsYHQ/s16000/Image%2B27-11-2020%2Ba%25CC%2580%2B22.36.jpeg",
          "https://1.bp.blogspot.com/-1cKRsisDK4Y/X8FxUi5CVMI/AAAAAAAAnbM/V-FUZI4AiQoopZUjfRCMkw77QRGRnodqQCLcBGAsYHQ/s0/appel%2B28%2Bnovembre%2B2020%2Bplus%2Bp1.jpg",
          "https://1.bp.blogspot.com/-RudJAxImUwA/X8FxUm-T6WI/AAAAAAAAnbI/M04AWaYHGhIxi5Lgqil9drbGPvkeCk4QwCLcBGAsYHQ/s0/appel%2B28%2Bnovembre%2B2020%2Bplus%2Bp2.jpg",
          "https://1.bp.blogspot.com/-gI9-jWEmJyM/X8Zhr_YXr1I/AAAAAAAAndA/1FVLztezz_ArhoYsJeyu2cDrCvrbmF60gCLcBGAsYHQ/s0/DSC05114.jpg",
          "https://1.bp.blogspot.com/-H8PceU5KJU0/X8Zhr4I0gjI/AAAAAAAAnc8/XswNBkCR4lQfyQTnPSW0ronJlOeKSCmjgCLcBGAsYHQ/s0/DSC05127.jpg",
          "https://1.bp.blogspot.com/-LJN7Le2NwxU/X8ZhrgLj5VI/AAAAAAAAnc4/6mQOsGgMoF4W7DHmtJIa-8uyvOIBIa30wCLcBGAsYHQ/s0/DSC05148.jpg",
          "https://1.bp.blogspot.com/-Nj7DcRzUbkM/X8ZhsZUY7LI/AAAAAAAAndE/6WUAqEpP_yEt5c86c94aNfwYF9M5hBUhACLcBGAsYHQ/s0/DSC05149.jpg",
          "https://1.bp.blogspot.com/-wRD5WuBJtRQ/X8ZhsoB0rgI/AAAAAAAAndI/Y2ng7SI5bMkXdIS759jbyVyMrl_VMmkSACLcBGAsYHQ/s0/DSC05153.jpg",
          "https://1.bp.blogspot.com/-49yIM1y-7-c/X8ZhslNCFxI/AAAAAAAAndM/FAn8fl9bIikEXEV1JZJi_HsT3DbsVF3hQCLcBGAsYHQ/s0/DSC05157.jpg",
          "https://1.bp.blogspot.com/-FKUk-ntzXPY/X8ZhtCbddnI/AAAAAAAAndU/Ih35w3634RstIvF2f_sSpSDfUYkM3MaWwCLcBGAsYHQ/s0/DSC05173.jpg"
        ],
        imageSize: {
          x: 1600,
          y: 1200
        }
  });
});
</script>
