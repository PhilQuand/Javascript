<!-- jQuery for FancyBox 3-->
<script src='//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script>

<!-- Add fancyBox 3 -->
<!-- see documentation at : http://fancyapps.com/fancybox/3/docs/#options -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.css" rel="stylesheet" type="text/css" />
<link href="https://philquand.github.io/Javascript/PhotoGaleries/myFancybox/myFancybox.css" rel="stylesheet" type="text/css" />
<link href="https://philquand.github.io/Javascript/PhotoGaleries/myFancybox/AlaUne.css" rel="stylesheet" type="text/css" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.js"></script>
<script src='https://philquand.github.io/Javascript/PhotoGaleries/myFancybox/myFancybox.js'></script>
<script src='https://philquand.github.io/Javascript/PhotoGaleries/myFancybox/AlaUne.js'></script>
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

<!-- alignement de deux images de même taille -->
<style>
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
<style>
.bg-photo-overlay {
  background-image: url("https://1.bp.blogspot.com/-irCxDcyeGC4/XZXsscPP4kI/AAAAAAAAkKM/8rvF00Lvr1Y_iF5BOWT7hOXoqeaXvRJogCPcBGAYYCw/s320/Capture%2Bd%25E2%2580%2599e%25CC%2581cran%2B2019-10-03%2Ba%25CC%2580%2B14.41.46.png");
}
</style>
<style>
.img-foreground {
  position: absolute;
  top: 75px;
  left: 1em;
  width: 20%;
  max-width: 300px;
  //height: 100%;
  //pointer-events: none;
  cursor:pointer;
}
.img-foreground {
  //background-color: red;
  animation-name: stretch;
  animation-duration: 2.5s; 
  animation-timing-function: ease-out; 
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
    transform: scale(1.2);
    //transform: scale(0.8);
    //background-color: yellow;
  }
}
</style>
<!-- Add a modal window AlaUne -->

<script>
if ( window.location.pathname == '/' ){
  // pétition change.org sur la réanimation pédiatrie
  //$('.page_body').append('<a href="https://www.change.org/p/emmanuel-macron-agn%C3%A8s-buzyn-sauvons-la-r%C3%A9animation-p%C3%A9diatrique-l-appel-des-parents"><img class="img-foreground" border="0" data-original-height="512" data-original-width="512" src="https://4.bp.blogspot.com/-oAseGH4-Rmg/XjbyJbrWCvI/AAAAAAAAk7I/1vgAZGlYieAsQ9j9lz5mETgq60UGBo8nACLcBGAsYHQ/s1600/Pe%25CC%2581tition%2BPe%25CC%2581diatrie.jpg" /></a>');
  //$('.page_body').append('<a href="https://youtu.be/7tO2IkLDNlk"><img class="img-foreground" src="https://1.bp.blogspot.com/-4c9MRQiEeb8/Xka1VOFAoFI/AAAAAAAAk-c/j8BJiF1bV1wABPVcnicsgbs9ouZ2nKMVwCLcBGAsYHQ/s1600/Capture%2Bd%25E2%2580%2599e%25CC%2581cran%2B2020-02-14%2Ba%25CC%2580%2B15.56.33.png" /></a>');
  //$('.page_body').append('<a href="https://youtu.be/7tO2IkLDNlk"><img class="img-foreground" src="https://1.bp.blogspot.com/-hxTYiKnKI1A/XklzVPvsmJI/AAAAAAAAk_g/8vb0ElqOgdgLKvjT17apdQ9CP779ZtPlwCLcBGAsYHQ/s1600/Capture%2Bd%25E2%2580%2599e%25CC%2581cran%2B2020-02-14%2Ba%25CC%2580%2B15.56.33.jpg" /></a>');
  
  //$('.page_body').append('<a href="https://collectifsante37.blogspot.com/#iframes-1"><img class="img-foreground" src="https://1.bp.blogspot.com/-DYdZzA-CRZU/XoHet8_fCWI/AAAAAAAAlRg/R4T6v1XagJ0ckuzhD8MDG6H6IQddEdDrwCLcBGAsYHQ/s1600/coronavirus_generic.png" /></a>');
  //$('.page_body').append('<a href="https://collectifsante37.blogspot.com/#iframes-1"><div class="img-foreground gallery-container"></div></a>');
  //$('.page_body').append('<a href="https://collectifsante37.blogspot.com/#images-1"><img class="img-foreground" src="https://1.bp.blogspot.com/-q2VTR14q1qk/Xsj-_RM40jI/AAAAAAAAmD4/fgtSYY6FmVMETIbHuAsUYchU696jBXofACK4BGAsYHg/s1600/Azo%2B2020%2B03%2B01%2BMe%25CC%2581gaphone%252Bpetit.png" /></a>');
  //$('.page_body').append('<a href="https://collectifsante37.blogspot.com/#images-1"><img class="img-foreground" src="https://1.bp.blogspot.com/-FJDjMPOenx4/XuIfoidV9BI/AAAAAAAAmYI/tSp1eLB5URw75B9UAHIkpUkeCAJGxwiZQCK4BGAsYHg/s1600/Capture%2Bd%25E2%2580%2599e%25CC%2581cran%2B2020-06-11%2Ba%25CC%2580%2B14.11.22.jpg" /></a>');
  $('.page_body').append('<div id="AlaUne"></div>');
}
$(document).ready(function() {
  $('#AlaUne').AlaUne({
    //src: '<a href="http://monsitetest123.blogspot.com/2020/06/pour-l-aux-soins-de-toutes-et-tous-dans.html"><img class="img-foreground" src="https://1.bp.blogspot.com/-q2VTR14q1qk/Xsj-_RM40jI/AAAAAAAAmD4/fgtSYY6FmVMETIbHuAsUYchU696jBXofACK4BGAsYHg/s1600/Azo%2B2020%2B03%2B01%2BMe%25CC%2581gaphone%252Bpetit.png" /></a>',
    src: "https://1.bp.blogspot.com/-FJDjMPOenx4/XuIfoidV9BI/AAAAAAAAmYI/tSp1eLB5URw75B9UAHIkpUkeCAJGxwiZQCK4BGAsYHg/s1600/Capture%2Bd%25E2%2580%2599e%25CC%2581cran%2B2020-06-11%2Ba%25CC%2580%2B14.11.22.jpg",
    fancyClass: "default",
    /*fancyClass: {
          baseClass: 'customAlaUneBaseClass',
    },*/
    href: [
    {
       dataType: "inline",
       dataSrc: '<div style="font-size:24px; text-align: center; line-height: 150%; margin-top: 2em"> \
                 Le 16 juin sera une journée historique de mobilisation dans  la santé<br/> \
                 après l’épidémie du coronavirus au début de laquelle <br/> \
                 les personnels dans les hôpitaux, les EHPAD et les services à domicile ont pris soin des malades et des personnes dépendantes sans protection. \
                 <p style="color:red"><b>Rendez-vous le mardi 16 juin à 15H place Jean Jaurès</b></p> \
                 </div>'
    },
    {
       dataType: "inline",
       dataSrc: '<img src="https://1.bp.blogspot.com/-FJDjMPOenx4/XuIfoidV9BI/AAAAAAAAmYI/tSp1eLB5URw75B9UAHIkpUkeCAJGxwiZQCK4BGAsYHg/s1600/Capture%2Bd%25E2%2580%2599e%25CC%2581cran%2B2020-06-11%2Ba%25CC%2580%2B14.11.22.jpg" />'
    },
    /*{
       dataType: "iframe",
       dataSrc: "https://geodes.santepubliquefrance.fr/index.php#bbox=-162564,6318414,679313,535880&c=indicator&f=0&i=covid_hospit.hosp&t=a01&view=map2"
    },
    {
       dataType: "images",
       dataSrc: "https://1.bp.blogspot.com/-q2VTR14q1qk/Xsj-_RM40jI/AAAAAAAAmD4/fgtSYY6FmVMETIbHuAsUYchU696jBXofACK4BGAsYHg/s1600/Azo%2B2020%2B03%2B01%2BMe%25CC%2581gaphone%252Bpetit.png"
    }*/
    ]
  });
});
</script>

<!-- End of modal window -->
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
<!-- 
Mutualisation de la gallerie de photos du post "Des protections et des tests pour toutes et tous les soignant.es !" 
-->
<script>
var galContainer  = 'gallery-container';
var urls = [
  'https://1.bp.blogspot.com/-I8DWf9bvcWc/XoN3n_o348I/AAAAAAAAlUg/sxkCTaH5q_4Bp8VWAFaxliMonmeCTqLxgCK4BGAsYHg/s1600/DSC04968-NEW.jpg',
  'https://1.bp.blogspot.com/-y_lWmVRxJN0/Xq7JQdWvx-I/AAAAAAAAlv4/mJ1zkMt78wQAsK1B9WNWpNFNt_5dflNZwCK4BGAsYHg/s1600/ClaudeD.jpg',
  'https://1.bp.blogspot.com/-X0f6JyJKK04/Xoyq6DEy6EI/AAAAAAAAlfQ/mrjMvg_iMXEYRm9wOT4iokeWshUZqIoMQCK4BGAsYHg/s1600/20200407_163610.jpg',
  'https://1.bp.blogspot.com/-ECV4PtoBlcE/Xqk-84gHY5I/AAAAAAAAlo4/iloeN45EKtEUrBvHXauSZtF23IEwB9u9ACK4BGAsYHg/s1600/Sauvons-Hopital-Pas_Capital.jpg',
  'https://1.bp.blogspot.com/-kxft1_1SpNQ/Xqw4-1pw46I/AAAAAAAAluo/xZgKdKiP9bsI_waqkI9c93ivcTnv19GnwCK4BGAsYHg/s1600/P1030228.jpg',
  'https://1.bp.blogspot.com/-au2EZAXNfDQ/Xqw4_lRN7II/AAAAAAAAlus/d6Jei9N8lyUpphPfqcauSLi03C5z4QT-QCK4BGAsYHg/s1600/P1030226.jpg',
  'https://1.bp.blogspot.com/-7JEF_2lu5C4/XoNxc2OtDcI/AAAAAAAAlTw/VGlsjryM9FAkr_lmge5lh-lBAElnW8lBwCK4BGAsYHg/s1600/IMG_1522-NEW.jpg',
  'https://1.bp.blogspot.com/-sdREiSAnKdk/XoN3ReIz_sI/AAAAAAAAlUM/aJSoL9GmP-42F3NAINdz8fF8WxvcRyTDgCK4BGAsYHg/s1600/IMG_1519-NEW.jpg',
  'https://1.bp.blogspot.com/-YMfAm9AdFQQ/XoN4KxvGBnI/AAAAAAAAlVI/Uc3XnfQP50wRZcgAgZfSS5YMUeFJG6osACK4BGAsYHg/s1600/P1030025-New.jpg',
  'https://1.bp.blogspot.com/-Om5lJzeDn4Y/Xo4PYlVmYOI/AAAAAAAAlgQ/CeiQykpYW2sBRX80DBlmTyUOb0goKSuTwCK4BGAsYHg/s1600/IMG_1538.JPG',
  'https://1.bp.blogspot.com/-cZDLcWMtTNU/Xobkb0Ei_oI/AAAAAAAAlZ0/UcyYFSJ5lv0wL4KwWbRrMkU3pBMsUBnLQCK4BGAsYHg/s1600/IMG_20200402_192429.jpg',
  'https://1.bp.blogspot.com/-hLh_7qprf3U/XoS_ms_xC5I/AAAAAAAAlX8/H7QDXub99Ng6lX6QCiSerTKuZ9bdKdZ9wCK4BGAsYHg/s1600/panneau-1-CP.jpeg',
  'https://1.bp.blogspot.com/-OjuU1WVxDG0/XoS9yAUa84I/AAAAAAAAlXY/BnHjdIVSGoQInslgudU0H5zW2QNVF2ksQCK4BGAsYHg/s1600/panneau%2B2.jpg',
  'https://1.bp.blogspot.com/-O7hnL8dbzM8/XoTTFONhBpI/AAAAAAAAlZY/KTizzghJdeg0xldk_g72Gm5lu26teQZ9QCK4BGAsYHg/s1600/IMG_1530-NEW.jpg',
  'https://1.bp.blogspot.com/-d875dZB417Q/XoGdZpgWaJI/AAAAAAAAlQ8/C8r3Hi_7LXgA3LPOfCZeeGxB86oyobo8ACLcBGAsYHQ/s1600/20200328_195330-NEW.jpg',
  'https://1.bp.blogspot.com/-sJYaRkhsK6I/XoGcueEEE3I/AAAAAAAAlQ0/twnESkBSgAgwl3ZYkFPB9zx2pmI9Em6hgCLcBGAsYHQ/s1600/IMG_3180.jpg',
  'https://1.bp.blogspot.com/-smsO2gcV6sI/XoGe4ZiXXNI/AAAAAAAAlRI/TItFtmypAho_q3SeEf_EO3F5n6i4khmeACLcBGAsYHQ/s1600/IMG-20200327-WA0000-NEW.jpg',
  'https://1.bp.blogspot.com/-qp7YM3Imf0Y/XoN35CsF8tI/AAAAAAAAlU0/QdeXXfm7m4QEpjGkIhyoNnmjx59rddkZgCK4BGAsYHg/s16000/B2E890A9-C6D5-4562-B081-New.jpg',
  'https://1.bp.blogspot.com/-eLTOdsVwHPg/XoLuBKZfsMI/AAAAAAAAlSQ/2tItUxnjMssKjbAC2N774FUAfUND_DbPgCK4BGAsYHg/s1600/IMAG2300-NEW.jpg',
  'https://1.bp.blogspot.com/-3GW_0nPtHNE/XoNtr7POc3I/AAAAAAAAlTE/Oh10masdyuQznmcojrVDeiBDvnvU_FFEQCK4BGAsYHg/s1600/IMG_20200330_160758-NEW.jpg',
  'https://1.bp.blogspot.com/-fr_GYi06S48/XoNte-JtP1I/AAAAAAAAlSs/6FPiMVfG4EoaRIdl1Nl9GC3yjvD_O5GpgCK4BGAsYHg/s1600/IMG_0861-NEW.jpg',
  'https://1.bp.blogspot.com/-v1aRuElutSY/XoOdex9e4II/AAAAAAAAlWU/ytud8uyE2qMMEGE-BjUm1wbaD-19ImkXwCK4BGAsYHg/s16000/IMG_1527.jpg',
  'https://1.bp.blogspot.com/-IE-pmEVlINQ/XomeUhtPpXI/AAAAAAAAla8/ivqYJqK_baQqKEDHnIC1FZdiLS2U2k1wgCK4BGAsYHg/s1600/IMG_1531.jpg',
  'https://1.bp.blogspot.com/-6_QUOOVpVi8/Xor-vZivymI/AAAAAAAAlcs/ePaYbw2khX8IkLJoEEORKPZ-un8MrvgjgCK4BGAsYHg/s1600/20200401_204050-NEW.jpg',
  'https://1.bp.blogspot.com/-E-qledZQuYo/XpNh2IgHFdI/AAAAAAAAliA/0mHlq0VcctoRWmfD6A5mHAS934Jj98o7wCK4BGAsYHg/s16000/IMG_1543.jpg',
  'https://1.bp.blogspot.com/-ARhfmWXuEVI/XpgIzLE55-I/AAAAAAAAljg/i6yNlE44HtAxnQsRSnrAn0r_-buPjdoNwCK4BGAsYHg/s16000/image001.jpg',
  'https://1.bp.blogspot.com/-nZ2Vi0ejpJo/Xp2S9kKzv9I/AAAAAAAAllI/Kpii4vJlJ3oVEO2_0UgM9WyiHfwq6NrXwCK4BGAsYHg/s1600/IMG_1545.jpg'
]
var imageSize = {
  x: 1600,
  y: 1200
};
</script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/three.js/110/three.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/animejs/3.1.0/anime.min.js'></script>
<script type='module'>
import ShadersGallery from 'https://philquand.github.io/Javascript/PhotoGaleries/Shaders/Shaders17.js';
galContainer = '.' + galContainer;
if ($(galContainer).length > 0) {
  calcHeight();
  $(window).resize(function() {
    calcHeight();
  });

  function calcHeight() {
    var galWidth = $(galContainer).css('width');
    if (typeof galWidth === 'undefined') return;
    //var galHeight = $(galContainer).css('height');
    var galHeight = Number(galWidth.split("px")[0]) * imageSize.y / imageSize.x;
    $(galContainer).css('height', galHeight + 'px');
    //galHeight = $(galContainer).css('height');
  }
  const options = {
    container: document.querySelector(galContainer),
    urls: urls,
    imageSize: imageSize,
    callbacks: {
      onGalleryCreated: function() {
        console.log('It\'s time to remove preloader!');
        window.myGallery.goToNextSlide();
        var timer = setInterval("window.myGallery.goToNextSlide()", 5000);
      }
    }
  };
  window.myGallery = new ShadersGallery(options);
  console.log(window.myGallery);
  $(galContainer).wrapInner('<a href="' + window.location.href + '#imageTS-1"></a>')
  $(galContainer).append('<div class="fancyData" style="display:none"></div>')
  for (var i = 0; i < options.urls.length; i++) {
    $(galContainer + ' .fancyData').append('<a class="fancyboxTestSoignants" data-fancybox="imageTS" data-src="' + options.urls[i] + '" data-thumb="' + options.urls[i] + '" href="javascript:;">imageTS #' + i + '</a>');
  }
  $(galContainer + ' a').css("cursor", "pointer");
}
</script>