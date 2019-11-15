(function($) {
  $.fn.InfosComités = function(options) {

    //if (typeof options === 'undefined' || typeof options.href === 'undefined') return;

    var strMapTitle = '';
    if (typeof options !== 'undefined' && typeof options.mapTitle !== 'undefined') strMapTitle = options.mapTitle;
    var strMapRef = '<div class="refComiteTours"><center><i>carte développée en collaboration avec le <a href="https://collectifsante37.blogspot.com">comité de Tours</a></i></center></div>';
    //if (typeof options !== 'undefined' && typeof options.mapRef !== 'undefined') strMapRef = options.mapRef;*/

    if (typeof options === 'undefined' || typeof options.href === 'undefined') {
      var hrefLength = 0;
    }
    else {
      var href = options.href;
      var hrefLength = href.length;
      if (typeof href[hrefLength - 1].svgInfosCarte === 'undefined' && href[hrefLength - 1].svgInfos.length < 4) hrefLength--
    }
    var iFrameGalleryOpt = {};
    iFrameGalleryOpt.archi = [];
    var infoRows = $(this).find('.infoEvents-wrapper');
    if (infoRows.length == 0) {
      var infoRows = $('<div class="infoEvents-wrapper"></div>');
      $(this).append(infoRows);
    }
    for (i = 0; i < hrefLength; i++) {
      if (typeof href[i].svgInfosCarte === 'undefined') href[i].weekInfos = href[i].svgInfos[0] + ', ' + href[i].svgInfos[1] + ' ' + href[i].svgInfos[2] + ' ' + href[i].svgInfos[3];
      else href[i].weekInfos = href[i].svgInfosCarte[0] + ', ' + href[i].svgInfosCarte[1] + ' ' + href[i].svgInfosCarte[2] + ' ' + href[i].svgInfosCarte[3];
    }
    for (i = 0; i < hrefLength; i++) {
      href[i].dateDeb = getDateDeb(href[i].weekInfos);
      href[i].dateFin = getDateFin(href[i].weekInfos);
      iFrameGalleryOpt.archi.push({
        svgInfos: href[i].svgInfos,
        idG: href[i].idG,
        inlineProgram: "inlineMap"
      })
    }
    if (iFrameGalleryOpt.archi.length > 0) iFrameGalleryOpt.archi[0].idGlinkID = 'MapLetters';
    iFrameGalleryOpt.accessmode = 'linkMapID';
    var infoMapWrap = $('<div id="infoMap-wrapper">');
    $(this).append(infoMapWrap);
    var hrefAfDeb = 3;
    if (hrefLength < 4) hrefAfDeb = hrefLength - 1;
    if (hrefLength > 1) {
      var dateDeb = href[hrefAfDeb].dateDeb;
      var strDeb = href[hrefAfDeb].dateDeb.getFullYear() + "-" + ("0" + (href[hrefAfDeb].dateDeb.getMonth() + 1)).slice(-2) + "-" + ("0" + href[hrefAfDeb].dateDeb.getDate()).slice(-2);
      var dateFin = href[0].dateFin;
      var strFin = href[0].dateFin.getFullYear() + "-" + ("0" + (href[0].dateFin.getMonth() + 1)).slice(-2) + "-" + ("0" + href[0].dateFin.getDate()).slice(-2);
      var dateDeb = href[hrefLength - 1].dateDeb;
      infoMapWrap.append('<div class="DateRange-wrapper"><span>' + strMapTitle + '</span><label for="from"> du : </label><input type="text" class="datepick" id="from" name="from" value="' + strDeb + '"> <label for="to"> au : </label><input type="text" class="datepick" id="to" name="to" value="' + strFin + '"> <button class="getFancyFocus  ui-button ui-widget ui-corner-all">OK</button></div>');
    }
    else {
      infoMapWrap.append('<button type="button" class="styled" id="btData">Données</button></p>', '<div class="dispInfoMap">' + strMapTitle + '</div>');
    }

    $(document).ready(function() {
      $('.infosComités').css('display', 'none');
      $('#btData').click(function(e) {
        var blockData = $('.infosComités').css('display');
        if (blockData == 'block') {
          $('#btData').html('Données');
          $('.dispInfoMap').css('display', 'block')
          $('.infosComités').css('display', 'none')
        }
        else {
          $('#btData').html('Carte');
          $('.dispInfoMap').css('display', 'none')
          $('.infosComités').css('display', 'block')
        }
      });
    });

    if (typeof options === 'undefined' || typeof options.iFrameGallery === 'undefined') {
      if (hrefLength == 0) var iFrameGallery = false;
      else var iFrameGallery = true;
    }
    else iFrameGallery = options.iFrameGallery;

    if (iFrameGallery) {
      $(this).append('<div id="linkMapID"><div id="MapLetters"><svg width="100%" height="100%" viewBox="0 0 650 621" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="https://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;"><g transform="matrix(1,0,0,1,-316.691,-56.7425)"><g transform="matrix(0.90598,0,0,0.985225,85.301,2.32331)"><path d="M967.734,669.87L966.823,338.503L904.275,367.365L891.997,380.877L890.514,446.137" style="fill:none;stroke:black;stroke-width:7.4px;"/></g><g transform="matrix(0.0273775,0.771394,-0.714296,0.025351,1171.36,221.814)"><path d="M135.195,299.497L164.379,370.473L89.913,370.473L135.195,299.497Z" style="fill:rgb(33,10,10);stroke:black;stroke-width:5.38px;"/></g><g transform="matrix(-0.00462607,-0.775534,0.628174,-0.00374707,134.852,433.178)"><path d="M127.146,299.497L164.379,370.473L89.913,370.473L127.146,299.497Z" style="fill:rgb(33,10,10);stroke:black;stroke-width:5.67px;"/></g><g transform="matrix(1.91433,0.0348383,-0.0180636,0.992577,405.386,-242.96)"><path d="M127.146,299.497L164.379,370.473L89.913,370.473L127.146,299.497Z" style="fill:rgb(33,10,10);stroke:black;stroke-width:2.62px;"/></g><g transform="matrix(0.983677,0,0,1.01056,7.35674,-8.77642)"><path d="M318.537,665.59L341.569,449.785L947.575,448.054L970.947,674.897L318.025,672.194L320.629,341.979L378.463,371.661L388.558,380.433L392.425,390.996L394.731,449.633" style="fill:none;stroke:black;stroke-width:7.02px;"/></g><path d="M368.563,354.974L369.883,140.556L380.152,130.651L772.218,130.703L907.865,266.05L910.49,357.604" style="fill:none;stroke:black;stroke-width:7px;"/><g transform="matrix(0.877185,0,0,0.877185,465.273,148.966)"><text x="51.233px" y="240.544px" style="font-family:' + "' ArialMT', 'Arial'" + ', sans-serif;font-size:288px;">@</text></g><g transform="matrix(1,0,0,1,-68.7214,27.1855)"><text x="573.93px" y="506.263px" style="font-family:' + "'ArialMT', 'Arial'" + ', sans-serif;font-size:96px;fill:rgb(197,33,33);">Accès</text><text x="456.485px" y="605.403px" style="font-family:' + "'ArialMT', 'Arial'" + ', sans-serif;font-size:96px;fill:rgb(197,33,33);">aux lettres</text></g></g></svg></div></div></div></div>');

      setCoordMapInfos("CoordMapInfos", iFrameGalleryOpt);
    }

    var infoMap = $('<div id="infoMap" class="dispInfoMap"></div>');
    infoMapWrap.append(infoMap);
    var map = initMap('infoMap');
    if (strMapRef != '') infoMapWrap.append('<div class="dispInfoMap">' + strMapRef + '</div>');

    if (typeof options === 'undefined' || typeof options.inpLocationClass === 'undefined') var inpLocationClass = '';
    else var inpLocationClass = options.inpLocationClass;

    //if (typeof options === 'undefined' || typeof options.divBannerCoordHTML === 'undefined') var divBannerCoordHTML = '<img border="0" data-original-height="510" data-original-width="1246" src="https://1.bp.blogspot.com/-xZr9da-vFx4/XZCsqI4CqMI/AAAAAAAAkBk/ohNk8U3SAjMs_Ab4tVLg_fN1TyT_wRzRwCLcBGAsYHQ/s320/Bannie%25CC%2580re%2BCoordination%2BNationale.png" width="320" /><img border="0" data-original-height="200" data-original-width="600" src="https://1.bp.blogspot.com/-pXVkNpYJIk8/XZCohoeh7eI/AAAAAAAAkBQ/v2KhWtV8COg6VS95lEZOfl0TkbSVuvXSgCLcBGAsYHQ/s320/L%2527e%25CC%2581cho%2Bdes%2Bcomite%25CC%2581s.png"/>';
    var divBannerCoordHTML = '';
    if (typeof options !== 'undefined' && typeof options.divBannerCoordHTML !== 'undefined') var divBannerCoordHTML = options.divBannerCoordHTML;
    var divBannerCoordImgCount = (divBannerCoordHTML.match(/<img/g) || []).length;

    if (typeof options === 'undefined' || typeof options.popupHeadClass === 'undefined') var popupHeadClass = '';
    else var popupHeadClass = options.popupHeadClass;

    if (typeof options === 'undefined' || typeof options.iconMarkers === 'undefined') {
      var iconMarkersLength = 0;
    }
    else {
      var iconMarkers = options.iconMarkers;
      var iconMarkersLength = iconMarkers.length;
    }

    function setMapView() {
      map.setView({
        lat: 47,
        lng: 1.689
      }, 6);
    }
    var indexEvent = [
      []
    ];
    var indexCal = 0;
    var indexEnd = hrefAfDeb;
    var indIndex = [];
    for (i = 0; i <= hrefAfDeb; i++) {
      indIndex.push(i);
    }
    for (i = 0; i < iconMarkersLength; i++) {
      iconMarkers[i].nbMapEvents = 0;
    }
    var divBannerCoord, divLegend;
    var result = getMyInnerLinkContent();

    function getDateDeb(weekInfos) {
      var date = weekInfos.split("du")[1].split("au")[0] + weekInfos.substr(weekInfos.length - 5, weekInfos.length - 1);
      date = monthFR2EN(date);
      var frDate = new Date(date);
      return frDate;
    }

    function getDateFin(weekInfos) {
      var date = weekInfos.split("au")[1];
      date = monthFR2EN(date);
      var frDate = new Date(date);
      return frDate;
    }

    function monthFR2EN(inpDate) {
      inpDate = inpDate.replace("janvier", "january");
      inpDate = inpDate.replace("février", "february");
      inpDate = inpDate.replace("mars", "march");
      inpDate = inpDate.replace("avril", "april");
      inpDate = inpDate.replace("mair", "may");
      inpDate = inpDate.replace("juin", "june");
      inpDate = inpDate.replace("juillet", "july");
      inpDate = inpDate.replace("août", "august");
      inpDate = inpDate.replace("septembre", "september");
      inpDate = inpDate.replace("octobre", "october");
      inpDate = inpDate.replace("novembre", "november");
      inpDate = inpDate.replace("décembre", "december");
      return inpDate;
    }

    function getMyInnerLinkContent() {
      if (hrefLength == 0) {
        if (isLinkContent('')) return;
        /*var allText = $('.corpsLettre');
        var allText = $('.corpsLettre')[0].innerHTML;*/
        var allText = $('.corpsLettre').html();
        return getBody(allText);
      }
      if (isLinkContent(href[indIndex[indexCal]].weekInfos)) return;
      var theURL = href[indIndex[indexCal]].idG;
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

      function isLinkContent(weekInfos) {
        var retVal = false;
        $('.infoEvents-wrapper').find('.inforWeek').each(function() {
          if (weekInfos == '' || weekInfos == $(this).attr('data-weekInfos')) {
            var result = $(this).find('.inforEvent');
            var itemsLength = result.length
            if (itemsLength > 0) {
              result.each(function() { 
                //var doc = $(this).find('.markerPopUp').html();
                var iconMarker = JSON.parse($(this).find('.iconMarker').html());
                if(  typeof iconMarker.icon !== 'undefined' ) {
                    iconMarker.icon = new L.Icon(iconMarker.icon.options);
                }
                var infoPopUps = [{
                  lat: $(this).find('.latitude').html(),
                  lng: $(this).find('.longitude').html(),
                  doc: $(this).find('.markerPopUp').html(),
                  iconMarker: iconMarker
                }];
                var output = add2Layer(infoPopUps, setMapView, itemsLength);
              });
            }
            else {
              if (indexCal < indexEnd) {
                indexEvent.push([]);
                indexCal++;
                var result = getMyInnerLinkContent();
                retVal = true;
              }
              else {
                endMarkerBuild(indexEvent, setMapView);
              }
            }
            retVal = true;
          }
        });
        return retVal;
      }

      function getBody(content) {
        var other = $("<div>").html(content);
        var post = $("<div>").append(other);
        var result = post.find('.infoComité');
        if( result.length == 0) {
            other.CNLetterParser();
            post = $("<div>").append(other);
            result = post.find('.infoComité');
        }
        if (result.length > 0) {
          var newWeek = $('<div class="inforWeek"></div>');
          if (hrefLength > 0) newWeek.attr('data-weekInfos', href[indIndex[indexCal]].weekInfos)
          infoRows.append(newWeek);
          result.each(function() {
            var newItem = $('<div class="inforEvent"></div>');
            newWeek.append(newItem);
            var newItemPopup = $('<div class="markerPopUp"></div>');
            var newItemLocation = $('<div class="markerLocation"></div>');
            newItem.append(newItemPopup, newItemLocation);
            newItemPopup.append($(this));
            if (inpLocationClass == '') var inpLocation = $(this).find('span').first().html();
            else var inpLocation = $(this).find('.' + inpLocationClass).first().html();
            var iconMarker = '';
            for (i = 0; i < iconMarkersLength; i++) {
              if ($(this).hasClass(iconMarkers[i].class)) {
                iconMarker = iconMarkers[i];
              }
            }
            var doc = setMarkerPopup($(this))
            getLocationCoord(inpLocation, doc, iconMarker, newItemLocation, result.length);
          });
          return result;
        }
        else {
          if (indexCal < indexEnd) {
            indexEvent.push([]);
            indexCal++;
            var result = getMyInnerLinkContent();
            //return output;
            return;
          }
          endMarkerBuild(indexEvent, setMapView);
          //return output;
          return;
        }
      }

      function setMarkerPopup(_this) {
        _this.wrap($('<div class="popup-wrapper"></div>'));
        var popupHead = $('<div class="popupHead ' + popupHeadClass + '"></div>');
        _this.before(popupHead);
        popupHead.append(_this.find('p').first());
        if (hrefLength > 0) {
          var weekInfos = $('<center>' + href[indIndex[indexCal]].weekInfos + '</center>');
          popupHead.append(weekInfos);
        }
        _this.addClass('popupBody');
        return _this.parent().html();
      }

      function getLocationCoord(inpLocation, doc, iconMarker, newItemLocation, itemsLength) {
        var inpLocationUP = inpLocation.toUpperCase();
        for (i = 0; i < inpAddress.length; i++) {
          //if (inpAddress[i].inpText.indexOf(inpLocation) > -1) {
          if (inpLocationUP.indexOf(inpAddress[i].inpText.toUpperCase()) > -1) {
            newItemLocation.append(`<div class="inpLoc">${inpLocation}</div>`, `<div class="latitude">${inpAddress[i].lat}</div>`, `<div class="longitude">${inpAddress[i].lng}</div>`, `<div class="iconMarker">${JSON.stringify(iconMarker)}</div>`);
            if( typeof iconMarker.icon !== 'undefined' ) {
                newItemLocation.append(`<div class="iconMarker-icon">${iconMarker.icon}</div>`);
            }
            var infoPopUps = [{
              lat: inpAddress[i].lat,
              lng: inpAddress[i].lng,
              doc: doc,
              iconMarker: iconMarker,
            }];
            var output = add2Layer(infoPopUps, setMapView, itemsLength);
            return;
          }
        }
        var infoPopUps = [{
          adresse: inpLocation,
          doc: doc,
          iconMarker: iconMarker
        }];
        var output = add2Layer(infoPopUps, setMapView, itemsLength);
            newItemLocation.append(`<div class="inpLoc">${inpLocation}</div>`, `<div class="latitude">${inpAddress[i].lat}</div>`, `<div class="longitude">${inpAddress[i].lng}</div>`, `<div class="iconMarker">${JSON.stringify(iconMarker)}</div>`);
            if( typeof iconMarker.icon !== 'undefined' ) {
                newItemLocation.append(`<div class="iconMarker-icon">${iconMarker.icon}</div>`);
            }
      };


      function add2Layer(inputCollection, setCallBack, itemsLength) {

        var output = [];
        for (var i = 0; i < inputCollection.length; i++) {
          var input = inputCollection[i];
          var inpLocation = input.adresse;
          if (typeof input.adresse !== 'undefined') {
            input.adresse = input.adresse.replace("-", ",") + ', France';
            L.esri.Geocoding.geocode({
                requestParams: {
                  maxLocations: 1
                }
              })
              .text(input.adresse)
              .run(function(error, results, response) {
                console.log('input adresse:', inpLocation);
                console.log('input adresse:', input.adresse);
                console.log('results:', results);
                console.log('first result lat', results.results[0].latlng.lat);
                console.log('first result lng', results.results[0].latlng.lng);
                input = {
                  lat: results.results[0].latlng.lat,
                  lng: results.results[0].latlng.lng,
                  doc: input.doc,
                  iconMarker: input.iconMarker,
                }
                indexEvent[indexCal].push(input);
                output.push(input);
                if (indexEvent[indexCal].length < itemsLength) return output;
                if (indexCal < indexEnd) {
                  indexEvent.push([]);
                  indexCal++;
                  var result = getMyInnerLinkContent();
                  return output;
                }
                endMarkerBuild(indexEvent, setCallBack);
                return output;
              });
          }
          else {
            indexEvent[indexCal].push(input);
            output.push(input);
            if (indexEvent[indexCal].length < itemsLength) return output;
            if (indexCal < indexEnd) {
              indexEvent.push([]);
              indexCal++;
              var result = getMyInnerLinkContent();
              return output;
            }
            endMarkerBuild(indexEvent, setCallBack);
            return output;
          }
          output.push(input);
        }
        return output;
      };

      function endMarkerBuild(indexEvent, setCallBack) {
        markers = L.markerClusterGroup({
          maxClusterRadius: 5
        }).addTo(map);

        for (i = 0; i < indexEvent.length; i++) {
          console.log('href n°', i, " n° events ", indexEvent[i].length);

          for (j = 0; j < indexEvent[i].length; j++) {
            for (k = 0; k < iconMarkersLength; k++) {
              if (indexEvent[i][j].iconMarker.class == iconMarkers[k].class) {
                iconMarkers[k].nbMapEvents++;
              }
            }
            marker = makePopUp(indexEvent[i][j], setCallBack);
            markers.addLayer(marker);
          }
        }
        divLegend.innerHTML = '';
        for (k = 0; k < iconMarkersLength; k++) {
          if (typeof iconMarkers[k].title !== 'undefined') {
            if (typeof iconMarkers[k].icon === 'undefined') {
              divLegend.innerHTML += '<img src="https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon-2x.png"> ' + iconMarkers[k].nbMapEvents + ' ' + iconMarkers[k].title + '<br>'
            }
            else {
              divLegend.innerHTML += '<img src="' + iconMarkers[k].icon.options.iconUrl + '"> ' + iconMarkers[k].nbMapEvents + ' ' + iconMarkers[k].title + '<br>'
            }
          }
        }
        if (divLegend.innerHTML == '') $('.legend.leaflet-control').css('display', 'none');
        divBannerCoord.innerHTML = divBannerCoordHTML;
        $('.bannerCoord').addClass('bannerCoord-' + divBannerCoordImgCount)
      };

      function makePopUp(input, setCallBack) {

        if (typeof input.iconMarker === 'undefined' || typeof input.iconMarker.icon === 'undefined' || input.iconMarker.icon == '') {
          var marker = L.marker([input.lat, input.lng]);
        }
        else {
          var marker = L.marker([input.lat, input.lng], {
            icon: input.iconMarker.icon
          });
        }
        marker.bindPopup(input.doc, {
          maxWidth: 400,
          minWidth: 250,
          maxHeight: 300,
          className: 'popupCustom',
          autoPan: true,
          closeButton: true,
          autoPanPadding: [5, 5]
        });
        marker.getPopup().on('remove', function() {
          setCallBack();
        });
        return marker;
      }

      function getPart(content, element, iIndex, iShow) {
        var indices = [];
        var idx = content.indexOf(element);
        while (idx != -1) {
          indices.push(idx);
          idx = content.indexOf(element, idx + 1);
        }
        if (iShow == 'yes') {
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
    };

    function initMap(idMap) {

      'use strict'

      var map = loadMap(idMap);

      //zoomRemove(map);
      map.options.minZoom = 6;
      map.options.maxZoom = 9;

      function setMapView() {
        map.setView({
          lat: 47,
          lng: 1.689
        }, 6);
      }
      setMapView();

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      var searchControl = L.esri.Geocoding.geosearch().addTo(map);

      var results = L.layerGroup().addTo(map);

      var redIcon = new L.Icon({
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });
      searchControl.on('results', function(data) {
        results.clearLayers();
        for (var i = data.results.length - 1; i >= 0; i--) {
          results.addLayer(L.marker(data.results[i].latlng, {
            icon: redIcon
          }));
        }
      });

      var bannerCoord = L.control({
        //position: 'topright'
        position: 'bottomleft'
      });

      bannerCoord.onAdd = function(map) {
        divBannerCoord = L.DomUtil.create('div', 'bannerCoord');
        return divBannerCoord;
      };

      bannerCoord.addTo(map);

      var legend = L.control({
        position: 'bottomright'
      });

      legend.onAdd = function(map) {
        divLegend = L.DomUtil.create('div', 'legend');
        return divLegend;
      };

      legend.addTo(map);

      return map;
      // Constructeur de la carte LeafLet
      function loadMap(idMap) {
        L.map(idMap).remove();
        var map = L.map(idMap);

        map.createPane('labels');

        // This pane is above markers but below popups
        map.getPane('labels').style.zIndex = 650;

        // Layers in this pane are non-interactive and do not obscure mouse/touch events
        map.getPane('labels').style.pointerEvents = 'none';


        return map;

      };

      function zoomRemove(map) {
        //remove zoom functions
        map.removeControl(map.zoomControl);
        map.touchZoom.disable();
        map.doubleClickZoom.disable();
        map.scrollWheelZoom.disable();
        map.boxZoom.disable();
        map.keyboard.disable();
      }
    }
    if (hrefLength > 1) {
      $(".DateRange-wrapper button").click(function(event) {
        event.preventDefault();
        var timeMin = new Date(from.datepicker({
          dateFormat: 'yy-mm-dd'
        }).val());
        var timeMax = new Date(to.datepicker({
          dateFormat: 'yy-mm-dd'
        }).val());
        console.log("A new date selection was made: " + timeMin + ' to ' + timeMax);
        divLegend.innerHTML = '';
        for (k = 0; k < iconMarkersLength; k++) {
          if (typeof iconMarkers[k].title !== 'undefined') {
            if (typeof iconMarkers[k].icon === 'undefined') {
              divLegend.innerHTML += '<img src="https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon-2x.png"> ' + iconMarkers[k].nbMapEvents + ' ' + iconMarkers[k].title + '<br>'
            }
            else {
              divLegend.innerHTML += '<img src="' + iconMarkers[k].icon.options.iconUrl + '"> ' + iconMarkers[k].nbMapEvents + ' ' + iconMarkers[k].title + '<br>'
            }
          }
        }
        if (divLegend.innerHTML == '') $('.legend.leaflet-control').css('display', 'none');
        divBannerCoord.innerHTML = divBannerCoordHTML;
        $('.bannerCoord').addClass('bannerCoord-' + divBannerCoordImgCount)
        for (i = 0; i < hrefLength; i++) {
          if (timeMin <= href[i].dateFin) {
            indexEnd = i;
          }
        }
        for (i = hrefLength - 1; i >= 0; i--) {
          if (timeMax >= href[i].dateDeb) {
            indexCal = i;
          }
        }
        indIndex = []
        for (i = indexCal; i <= indexEnd; i++) {
          indIndex.push(i);
        }
        indexCal = 0;
        indexEnd = indIndex.length - 1;
        map.removeLayer(markers)
        indexEvent = [
          []
        ];
        for (i = 0; i < iconMarkersLength; i++) {
          iconMarkers[i].nbMapEvents = 0;
        }
        var result = getMyInnerLinkContent();
      });

      var dateFormat = "yy-mm-dd",
        from = $(".DateRange-wrapper #from")
        .datepicker({
          autoOpen: false,
          altField: ".datepicker",
          closeText: 'Fermer',
          prevText: 'Précédent',
          nextText: 'Suivant',
          currentText: 'Aujourd\'hui',
          monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
          monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
          dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
          dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
          dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
          weekHeader: 'Sem.',
          dateFormat: 'yy-mm-dd',
          showWeek: true,
          firstDay: 1,
          defaultDate: "+1w",
          changeMonth: true,
          minDate: dateDeb,
          maxDate: dateFin,
          numberOfMonths: 1
        })
        .on("change", function() {
          to.datepicker("option", "minDate", getDate(this));
          //var firstDate = new Date(moment(getDate(this), 'yy-mm-dd').day(1));
          if( getDate(this).getDay() ) var firstDate = new Date(moment(getDate(this), 'yy-mm-dd').day(1));
          else var firstDate = new Date(moment(getDate(this), 'yy-mm-dd').day(-6));
          from.val(firstDate.getFullYear() + "-" + ("0" + (firstDate.getMonth() + 1)).slice(-2) + "-" + ("0" + firstDate.getDate()).slice(-2));
        }),
        to = $(".DateRange-wrapper #to").datepicker({
          autoOpen: false,
          altField: ".datepicker",
          closeText: 'Fermer',
          prevText: 'Précédent',
          nextText: 'Suivant',
          currentText: 'Aujourd\'hui',
          monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
          monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
          dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
          dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
          dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
          weekHeader: 'Sem.',
          dateFormat: 'yy-mm-dd',
          showWeek: true,
          firstDay: 1,
          defaultDate: "+1w",
          changeMonth: true,
          minDate: dateDeb,
          maxDate: dateFin,
          numberOfMonths: 1
        })
        .on("change", function() {
          from.datepicker("option", "maxDate", getDate(this));
          //var lastDate = new Date(moment(getDate(this), 'yy-mm-dd').day(7));
          if( getDate(this).getDay() ) var lastDate = new Date(moment(getDate(this), 'yy-mm-dd').day(7));
          else var lastDate = new Date(moment(getDate(this), 'yy-mm-dd').day(0));
          to.val(lastDate.getFullYear() + "-" + ("0" + (lastDate.getMonth() + 1)).slice(-2) + "-" + ("0" + lastDate.getDate()).slice(-2));
        });
      //$(".DateRange-wrapper button").focus();
    }

    function maxDate(element) {
      var elDate = getDate(element);
      if (elDate < dateFin) {
        return elDate;
      }
      else {
        return dateFin;
      }
    }

    function minDate(element) {
      var elDate = getDate(element);
      if (elDate > dateDeb) {
        return elDate;
      }
      else {
        return dateDeb;
      }
    }

    function getDate(element) {
      var date;
      try {
        date = $.datepicker.parseDate(dateFormat, element.value);
      }
      catch (error) {
        date = null;
      }

      return date;
    }

    function setCoordMapInfos(idCoordMapInfos, Options) {
      //$(document).ready(function() {
      $('#' + idCoordMapInfos).iFrameGallery(Options);
      //});
    }
  }
  
  $.fn.CNLetterParser = function(options) {

    // structuration de corpsLettre
    if( $(this).find('.corpsLettre').length > 0) {
        var corpsLettre = $(this).find('.corpsLettre').first();
        $(this).html(corpsLettre.html());        
    }
    $(this).addClass('corpsLettre');
    var corpsLettre = $(this);

    if (corpsLettre.find('html').length > 0) {
      var contBody = corpsLettre.find('body').html();
      corpsLettre.html(contBody);
    }

    var curElem = corpsLettre.children().first();

    var banDiv = $('<div class="allBans"/>')
    corpsLettre.prepend(banDiv)
    curElem = fillBan(banDiv, curElem, 'Édito');

    var banDiv = $('<div class="Edito" />').insertAfter(banDiv);
    curElem = fillDiv(banDiv, curElem, 'Sommaire');

    var banDiv = $('<div class="sumComité" />').insertAfter(banDiv);
    curElem = fillDiv(banDiv, curElem, 'écho des comités');

    var banDiv = $('<div id="idInfosComités" />').insertAfter(banDiv);

    var banDiv = $('<div class="infosComités" />').insertAfter(banDiv);
    curElem = fillDiv(banDiv, curElem, 'Dossier');

    var banDiv = $('<div class="infoDoc" />').insertAfter(banDiv);
    curElem = fillDiv(banDiv, curElem, '');

    // structuration de infosComités
    var infosComités = $(this).find('.infosComités').first();
    var curElem = infosComités.children().first();

    var banDiv = $('<div class="echoCom" />').insertAfter(curElem);
    curElem = banDiv.next();
    curElem = fillDiv(banDiv, curElem, 'Autres infos locales');

    var banDiv = $('<div class="autresInfo" />').insertAfter(curElem)
    curElem = banDiv.next();
    curElem = fillDiv(banDiv, curElem, '');

    // structuration de echoCom
    fillComitéDiv($(this).find('.echoCom').first(), "infoComité marker-1");

    // structuration de autresInfo
    fillComitéDiv($(this).find('.autresInfo').first(), "infoComité marker-2");

    // ajout des images
    fillPictures();

    $(this).find('sdfield').first().css('display', 'none')

    function fillDiv(curDiv, curElem, strKey) {
      var strKeyComp = strKey.replace(/[\n\r]+/g, '').replace(/\s/g, '');
      var curNextAll = curElem.nextAll();
      curElem.appendTo(curDiv);
      curNextAll.each(function() {
        var curHtmk = $(this).html().replace(/[\n\r]+/g, '').replace(/\s/g, '')
        if (strKey != '' && $(this).prop("tagName") != "UL" && curHtmk.search(strKeyComp) > -1) {
          curElem = $(this);
          return false;
        };
        $(this).appendTo(curDiv);
      });
      curDiv.find('br').each(function() { // For each element
        if ($(this).text().trim() === '')
          $(this).remove(); // is it is empty, it removes it
      });
      return curElem;
    };

    function fillBan(curDiv, curElem, strKey) {

      var nextElem = fillDiv(curDiv, curElem, strKey);

      var infoWeek = [];
      curDiv.find('b').each(function() { // For each element
        if ($(this).text().trim() !== '')
          infoWeek.push($(this).text());
      });

      if ($('.corpsLettrePDF  a').length > 0) {
        var curHTML = '<a href="' + $('.corpsLettrePDF  a').attr('href') + '"><img style="float: right; width: 40px;" border="0" data-original-width="98" src="https://1.bp.blogspot.com/-fPuNmgIRUKs/XbbUdRTf-BI/AAAAAAAAkSs/fBtJBo3fYgQUxPnZkZB43xiqgYxT67boACLcBGAsYHQ/s1600/pdf%2Bicon-2.jpg" data-original-height="122"/></a>';
        $('.corpsLettrePDF').css('display', 'none');
      }
      else var curHTML = '';
      if (infoWeek.length == 3) curHTML += '<div style="display: flex; flex-wrap: nowrap; justify-content: space-between; align-items: flex-end;" data-summary="no"><img border="0" style="width: 400px; max-width: 40%;" id="banCoord" alt="banCoord.png" src="https://4.bp.blogspot.com/-WgwJsMGzYPE/WkoKfP1TJDI/AAAAAAAAAG0/7vLne-Wtd3cjxFK4Qm-NOJPFBeWShhlKwCLcBGAs/s400/AE8A2A5A-3BDA-4D84-82D5-B34D7215D364.png" class="banInfos" width="400px"/><div><p style="text-align: center;"><span style="font-size: 24pt; font-family: ' + "'Century Schoolbook'" + ', serif; color: #0070c0;">L’INFO</span><br/><span style="font-size: 20pt; font-family: ' + "'Century Schoolbook'" + ', serif; color: #0070c0;">' + infoWeek[1] + '</span><br/><span style="font-size: 20pt; font-family: ' + "'Century Schoolbook'" + ', serif; color: #0070c0;">' + infoWeek[2] + '</span></p></div></div>';

      curDiv.html(curHTML);

      return nextElem;
    };

    function fillComitéDiv(curDiv, curClass) {
      var curCity = '';
      var curNextAll = curDiv.children().first().nextAll();
      curNextAll.each(function() {
        if ((($(this).html().search('background:') > -1) || (typeof $(this).attr("style") !== 'undefined' && ~$(this).attr("style").indexOf("background:"))) && $(this).find('b').length > 0) {
          //console.log($(this).find('b').html());
          $(this).find('b').wrap('<span />');
          curCity = $(this).wrap('<div class="' + curClass + '" />').parent();
          formCurCity(curCity);
        }
        else if (curCity !== '') $(this).appendTo(curCity);
      });

      function formCurCity(curCity) {
        var cityName = curCity.find('b').html();
        var cityColor = curCity.html().split('background:');
        if (cityColor.length == 1) cityColor = curCity.html().split('background-color:');
        //cityColor= cityColor[cityColor.length-1].split(';')[0];
        cityColor = cityColor[1].split(';')[0];
        cityColor = cityColor.split('"')[0];
        /*curCity.html('<p class="western" style="margin-bottom: 0.28cm; direction: ltr; line-height: 15.84000015258789px; background: ' +  cityColor + '; font-family: Calibri, serif; font-size: 11pt;" align="center"><span style="font-family: Arial, serif;"><span style="font-size: 14pt;"><b>' + cityName + '</b></span></span></p>');*/
        curCity.html('<p class="western" style="paddin: 5px; background: ' + cityColor + ';" align="center"><span style="font-family: Arial, serif; font-size: 14pt;"><b>' + cityName + '</b></span></p>');
      }
    };

    function fillPictures() {
      var pictures = $('.corpsLettrePictures img')
      if (pictures.length > 0) {
        var hrefImg;
        pictures.each(function() {
          var textPicture = $(this).prev().text().split(" ");
          textPicture = textPicture[textPicture.length - 1];
          hrefImg = $(this).attr('src');
          $('.corpsLettre img').each(function() {
            if (~$(this).attr('src').indexOf(textPicture)) {
              console.log(hrefImg);
              /*$(this).after('<img src="' + hrefImg + '" style="width: 640px; max-width: 90%;" />');
              $(this).remove();*/
              $(this).attr('src', hrefImg);
            }
          });
        });
        var lastIMG = $('.corpsLettre img').last();
        lastIMG.after('<img src="' + hrefImg + '" style="width: 640px; max-width: 90%;" />');
        lastIMG.remove();
        $('.corpsLettrePictures').css('display', 'none');
      }
    }

  }

  $.fn.CNLetter = function(options) {

    $(this).CNLetterParser();

    //$(document).ready(function() {
      if ($("#idInfosComités").length) {
        $('#idInfosComités').InfosComités({
          iconMarkers: [{
            class: "marker-1",
            title: 'Échos'
          }, {
            class: "marker-2",
            icon: simpleGreenIcon,
            title: 'Autres Infos'
          }],
          //iconMarkers: [{class: "infoComité", title: 'Échos'}],
          mapTitle: '<p align="center"><b><span style="font-size: 22pt; line-height: 30.799999237060547px; font-family: Arial, sans-serif; color: #0070c0;"><br/>L’écho des comités <br/>et autres informations locales</span></b></p>',
          //divBannerCoordHTML: '<img border="0" data-original-height="200" data-original-width="600" src="https://1.bp.blogspot.com/-pXVkNpYJIk8/XZCohoeh7eI/AAAAAAAAkBQ/v2KhWtV8COg6VS95lEZOfl0TkbSVuvXSgCLcBGAsYHQ/s320/L%2527e%25CC%2581cho%2Bdes%2Bcomite%25CC%2581s.png"/>'
        });
        $('.corpsLettre > .infosComités').css('display', 'none');
        $('.sumComité').css('display', 'none');
      }
    //});

  }

})(jQuery);