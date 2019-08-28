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

/*function loadDeptFranceJSONN(map, getColor, getFilter) {
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
};*/
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
</script>