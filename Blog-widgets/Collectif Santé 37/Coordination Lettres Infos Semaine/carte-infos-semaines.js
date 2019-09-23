(function($) {
  $.fn.InfosComités = function(options) {

    if (typeof options === 'undefined' || typeof options.href === 'undefined') return;
    var href = options.href;
    var strMapTitle = '';
    if (typeof options.mapTitle !== 'undefined') strMapTitle = options.mapTitle;
    var hrefLength = href.length;
    var indIndex = [];
    for (i = 0; i < hrefLength; i++) {
      indIndex.push(i);
      href[i].dateDeb = getDateDeb(href[i].weekInfos);
      href[i].dateFin = getDateFin(href[i].weekInfos);
    }
    var dateDeb = href[hrefLength - 1].dateDeb;
    var strDeb = href[hrefLength - 1].dateDeb.getFullYear() + "-" + ("0" + (href[hrefLength - 1].dateDeb.getMonth() + 1)).slice(-2) + "-" + ("0" + href[hrefLength - 1].dateDeb.getDate()).slice(-2);
    var dateFin = href[0].dateFin;
    var strFin = href[0].dateFin.getFullYear() + "-" + ("0" + (href[0].dateFin.getMonth() + 1)).slice(-2) + "-" + ("0" + href[0].dateFin.getDate()).slice(-2);
    var infoMapWrap = $('<div id="infoMap-wrapper"><div class="DateRange-wrapper"><span>' + strMapTitle + '</span><label for="from"> du : </label><input type="text" class="datepick" id="from" name="from" value="' + strDeb + '"> <label for="to"> au : </label><input type="text" class="datepick" id="to" name="to" value="' + strFin + '"> <button class="getFancyFocus  ui-button ui-widget ui-corner-all">OK</button></div></div>');
    var infoRows = $(this).find('.infoEvents-wrapper');
    if (infoRows.length == 0) {
      var infoRows = $('<div class="infoEvents-wrapper"></div>');
      $(this).append(infoRows);
    }
    $(this).append(infoMapWrap);
    var infoMap = $('<div id="infoMap"></div>');
    infoMapWrap.append(infoMap);
    var map = initMap('infoMap');

    function setMapView() {
      map.setView({
        lat: 47.390,
        lng: 0.689
      }, 6);
    }
    var indexEvent = [
      []
    ];
    var indexCal = 0;
    var indexEnd = href.length - 1;
    var nbMapEvents = 0;
    var divLegend;
    var result = getMyInnerLinkContent();

    function getDateDeb(weekInfos) {
      var weekinfos = weekInfos[0];
      var date = weekinfos.split("du")[1].split("au")[0] + weekinfos.substr(weekinfos.length - 5, weekinfos.length - 1);
      date = date.replace("août", "august");
      var frDate = new Date(date);
      return frDate;
    }

    function getDateFin(weekInfos) {
      var weekinfos = weekInfos[0]
      var date = weekinfos.split("au")[1];
      date = date.replace("août", "august");
      var frDate = new Date(date);
      return frDate;
    }

    function getMyInnerLinkContent() {
      if (isLinkContent(href[indIndex[indexCal]].weekInfos)) return;
      var theURL = href[indIndex[indexCal]].ID;
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
          if (weekInfos == $(this).attr('data-weekInfos')) {
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
                endMarkerBuild(indexEvent, setCallBack);
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
          newWeek.attr('data-weekInfos', href[indIndex[indexCal]].weekInfos)
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
            return output;
          }
          endMarkerBuild(indexEvent, setCallBack);
          return output;
        }
      }

      function setMarkerPopup(_this) {
        var weekInfos = $('<center>' + href[indIndex[indexCal]].weekInfos + '</center>');
        _this.wrap($('<div class="popup-wrapper"></div>'));
        var popupHead = $('<div class="popupHead"></div>');
        _this.before(popupHead);
        popupHead.append(_this.find('p').first(), weekInfos);
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
        divLegend.innerHTML = '<img src="https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon-2x.png"> ' + nbMapEvents + ' « flash infos »'
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
          lat: 47.390,
          lng: 0.689
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
    //$(document).ready(function() {
    $("button").click(function(event) {
      event.preventDefault();
      var timeMin = new Date(from.datepicker({
        dateFormat: 'yy-mm-dd'
      }).val());
      var timeMax = new Date(to.datepicker({
        dateFormat: 'yy-mm-dd'
      }).val());
      console.log("A new date selection was made: " + timeMin + ' to ' + timeMax);
      divLegend.innerHTML = '<img src="https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon-2x.png"> ' + nbMapEvents + ' « flash infos »'
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
      from = $("#from")
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
      to = $("#to").datepicker({
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
    $("button").focus();
    //});

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
  }
})(jQuery);