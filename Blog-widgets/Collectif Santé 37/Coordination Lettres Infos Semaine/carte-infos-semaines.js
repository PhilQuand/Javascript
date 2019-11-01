(function($) {
  $.fn.InfosComités = function(options) {

    //if (typeof options === 'undefined' || typeof options.href === 'undefined') return;
    if (typeof options === 'undefined' || typeof options.href === 'undefined') {
        var hrefLength = 0;
    } else  {
        var href = options.href;
        var hrefLength = href.length;
        if(typeof href[hrefLength - 1].svgInfosCarte === 'undefined' && href[hrefLength - 1].svgInfos.length < 4) hrefLength--
    }
    var iFrameGalleryOpt = {};
    iFrameGalleryOpt.archi = [];
    var infoRows = $(this).find('.infoEvents-wrapper');
    if (infoRows.length == 0) {
      var infoRows = $('<div class="infoEvents-wrapper"></div>');
      $(this).append(infoRows);
    }
    for (i = 0; i < hrefLength; i++) {
      if(typeof href[i].svgInfosCarte === 'undefined') href[i].weekInfos = href[i].svgInfos[0] + ', ' + href[i].svgInfos[1] + ' ' + href[i].svgInfos[2] + ' ' + href[i].svgInfos[3];
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
      var strMapTitle = '';
      if (typeof options.mapTitle !== 'undefined') strMapTitle = options.mapTitle;
      var dateDeb = href[hrefAfDeb].dateDeb;
      var strDeb = href[hrefAfDeb].dateDeb.getFullYear() + "-" + ("0" + (href[hrefAfDeb].dateDeb.getMonth() + 1)).slice(-2) + "-" + ("0" + href[hrefAfDeb].dateDeb.getDate()).slice(-2);
      var dateFin = href[0].dateFin;
      var strFin = href[0].dateFin.getFullYear() + "-" + ("0" + (href[0].dateFin.getMonth() + 1)).slice(-2) + "-" + ("0" + href[0].dateFin.getDate()).slice(-2);
      var dateDeb = href[hrefLength - 1].dateDeb;
      infoMapWrap.append('<div id="infoMap-wrapper"><div class="DateRange-wrapper"><span>' + strMapTitle + '</span><label for="from"> du : </label><input type="text" class="datepick" id="from" name="from" value="' + strDeb + '"> <label for="to"> au : </label><input type="text" class="datepick" id="to" name="to" value="' + strFin + '"> <button class="getFancyFocus  ui-button ui-widget ui-corner-all">OK</button></div></div>');
    }

    if (typeof options === 'undefined' || typeof options.iFrameGallery === 'undefined') {
        if(  hrefLength == 0 ) var iFrameGallery = false;
        else var iFrameGallery = true;
    } else iFrameGallery = options.iFrameGallery;

    if (iFrameGallery) {
      $(this).append('<div id="linkMapID"><div id="MapLetters"><svg width="100%" height="100%" viewBox="0 0 650 621" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="https://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;"><g transform="matrix(1,0,0,1,-316.691,-56.7425)"><g transform="matrix(0.90598,0,0,0.985225,85.301,2.32331)"><path d="M967.734,669.87L966.823,338.503L904.275,367.365L891.997,380.877L890.514,446.137" style="fill:none;stroke:black;stroke-width:7.4px;"/></g><g transform="matrix(0.0273775,0.771394,-0.714296,0.025351,1171.36,221.814)"><path d="M135.195,299.497L164.379,370.473L89.913,370.473L135.195,299.497Z" style="fill:rgb(33,10,10);stroke:black;stroke-width:5.38px;"/></g><g transform="matrix(-0.00462607,-0.775534,0.628174,-0.00374707,134.852,433.178)"><path d="M127.146,299.497L164.379,370.473L89.913,370.473L127.146,299.497Z" style="fill:rgb(33,10,10);stroke:black;stroke-width:5.67px;"/></g><g transform="matrix(1.91433,0.0348383,-0.0180636,0.992577,405.386,-242.96)"><path d="M127.146,299.497L164.379,370.473L89.913,370.473L127.146,299.497Z" style="fill:rgb(33,10,10);stroke:black;stroke-width:2.62px;"/></g><g transform="matrix(0.983677,0,0,1.01056,7.35674,-8.77642)"><path d="M318.537,665.59L341.569,449.785L947.575,448.054L970.947,674.897L318.025,672.194L320.629,341.979L378.463,371.661L388.558,380.433L392.425,390.996L394.731,449.633" style="fill:none;stroke:black;stroke-width:7.02px;"/></g><path d="M368.563,354.974L369.883,140.556L380.152,130.651L772.218,130.703L907.865,266.05L910.49,357.604" style="fill:none;stroke:black;stroke-width:7px;"/><g transform="matrix(0.877185,0,0,0.877185,465.273,148.966)"><text x="51.233px" y="240.544px" style="font-family:' + "' ArialMT', 'Arial'" + ', sans-serif;font-size:288px;">@</text></g><g transform="matrix(1,0,0,1,-68.7214,27.1855)"><text x="573.93px" y="506.263px" style="font-family:' + "'ArialMT', 'Arial'" + ', sans-serif;font-size:96px;fill:rgb(197,33,33);">Accès</text><text x="456.485px" y="605.403px" style="font-family:' + "'ArialMT', 'Arial'" + ', sans-serif;font-size:96px;fill:rgb(197,33,33);">aux lettres</text></g></g></svg></div></div></div></div>');

      setCoordMapInfos("CoordMapInfos", iFrameGalleryOpt);
    }

    var infoMap = $('<div id="infoMap"></div>');
    infoMapWrap.append(infoMap);
    var map = initMap('infoMap');

    function setMapView() {
      map.setView({
        lat: 46.390,
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
    var nbMapEvents = 0;
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
      if( hrefLength == 0 ) {
        if (isLinkContent('')) return;
        var allText  = $('.corpsLettre');
        var allText  = $('.corpsLettre')[0].innerHTML;
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
                var doc = $(this).find('.markerPopUp').html();
                var infoPopUps = [{
                  lat: $(this).find('.latitude').html(),
                  lng: $(this).find('.longitude').html(),
                  doc: doc
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
        if (result.length > 0) {
          var newWeek = $('<div class="inforWeek"></div>');
          if( hrefLength > 0 ) newWeek.attr('data-weekInfos', href[indIndex[indexCal]].weekInfos)
          infoRows.append(newWeek);
          result.each(function() {
            var newItem = $('<div class="inforEvent"></div>');
            newWeek.append(newItem);
            var newItemPopup = $('<div class="markerPopUp"></div>');
            var newItemLocation = $('<div class="markerLocation"></div>');
            newItem.append(newItemPopup, newItemLocation);
            newItemPopup.append($(this));
            var inpLocation = $(this).find('span').first().html();
            var doc = setMarkerPopup($(this))
            getLocationCoord(inpLocation, doc, newItemLocation, result.length);
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
        var popupHead = $('<div class="popupHead"></div>');
        _this.before(popupHead);
        popupHead.append(_this.find('p').first());
        if( hrefLength > 0 ) {
            var weekInfos = $('<center>' + href[indIndex[indexCal]].weekInfos + '</center>');
            popupHead.append(weekInfos);
        }
         _this.addClass('popupBody');
        return _this.parent().html();
      }

      function getLocationCoord(inpLocation, doc, newItemLocation, itemsLength) {
        for (i = 0; i < inpAddress.length; i++) {
          //if (inpAddress[i].inpText.indexOf(inpLocation) > -1) {
          if (inpLocation.indexOf(inpAddress[i].inpText) > -1) {
            newItemLocation.append(`<div class="inpLoc">${inpLocation}</div>`, `<div class="latitude">${inpAddress[i].lat}</div>`, `<div class="longitude">${inpAddress[i].lng}</div>`);
            var infoPopUps = [{
              lat: inpAddress[i].lat,
              lng: inpAddress[i].lng,
              doc: doc
            }];
            var output = add2Layer(infoPopUps, setMapView, itemsLength);
            return;
          }
        }
        var infoPopUps = [{
          adresse: inpLocation,
          doc: doc
        }];
        var output = add2Layer(infoPopUps, setMapView, itemsLength);
        newItemLocation.append(`<div class="inpLoc">${inpLocation}</div>`, `<div class="latitude">${output[0].lat}</div>`, `<div class="longitude">${output[0].lng}</div>`);
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
            nbMapEvents++;
            marker = makePopUp(indexEvent[i][j], setCallBack);
            markers.addLayer(marker);
          }
        }
        divLegend.innerHTML = '<img src="https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon-2x.png"> ' + nbMapEvents + ' « échos »'
        divBannerCoord.innerHTML = '<img border="0" data-original-height="510" data-original-width="1246" src="https://1.bp.blogspot.com/-xZr9da-vFx4/XZCsqI4CqMI/AAAAAAAAkBk/ohNk8U3SAjMs_Ab4tVLg_fN1TyT_wRzRwCLcBGAsYHQ/s320/Bannie%25CC%2580re%2BCoordination%2BNationale.png" width="320" /><img border="0" data-original-height="200" data-original-width="600" src="https://1.bp.blogspot.com/-pXVkNpYJIk8/XZCohoeh7eI/AAAAAAAAkBQ/v2KhWtV8COg6VS95lEZOfl0TkbSVuvXSgCLcBGAsYHQ/s320/L%2527e%25CC%2581cho%2Bdes%2Bcomite%25CC%2581s.png"/>';
      };

      function makePopUp(input, setCallBack) {

        var marker = L.marker([input.lat, input.lng]);

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
          lat: 46.390,
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
        divLegend.innerHTML = '<img src="https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon-2x.png"> ' + nbMapEvents + ' « échos »'
        divBannerCoord.innerHTML = '<img border="0" data-original-height="510" data-original-width="1246" src="https://1.bp.blogspot.com/-xZr9da-vFx4/XZCsqI4CqMI/AAAAAAAAkBk/ohNk8U3SAjMs_Ab4tVLg_fN1TyT_wRzRwCLcBGAsYHQ/s320/Bannie%25CC%2580re%2BCoordination%2BNationale.png" width="320" /><img border="0" data-original-height="200" data-original-width="600" src="https://1.bp.blogspot.com/-pXVkNpYJIk8/XZCohoeh7eI/AAAAAAAAkBQ/v2KhWtV8COg6VS95lEZOfl0TkbSVuvXSgCLcBGAsYHQ/s320/L%2527e%25CC%2581cho%2Bdes%2Bcomite%25CC%2581s.png"/>';
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
        nbMapEvents = 0;
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
          var firstDate = new Date(moment(getDate(this), 'yy-mm-dd').day(1));
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
          var lastDate = new Date(moment(getDate(this), 'yy-mm-dd').day(7));
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
})(jQuery);