(function($) {
  $.fn.myGoogleCalendar = function(options) {
    if (typeof options === 'undefined' || typeof options.calendar === 'undefined' || options.calendar.length == 0) return;
    var d = new Date();
    var strDate = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
    if (typeof options.strDate !== 'undefined') strDate = options.strDate;
    var strMapTitle = '';
    if (typeof options.mapTitle !== 'undefined') strMapTitle = options.mapTitle;
    var strCalendarTitle = '';
    if (typeof options.calendarTitle !== 'undefined') strCalendarTitle = options.calendarTitle;
    var calendarMapWrap = $('<div id="calendarMap-wrapper"><div class="DateRange-wrapper"><span>' + strMapTitle + '</span><label for="from"> de : </label><input type="text" class="datepick" id="from" name="from" value="indéfini"> <label for="to"> à : </label><input type="text" class="datepick" id="to" name="to" value="indéfini"> <button class="getFancyFocus ui-button ui-widget ui-corner-all">OK</button></div></div>');
    var calendarRows = $('<div class="calendarEvents-wrapper"></div>');
    $(this).append(calendarMapWrap, calendarRows);
    var calendarTime = setCalendarTime(options);
    $(this).append(calendarTime);
    var calendarMap = $('<div id="calendarMap"></div>');
    calendarMapWrap.append(calendarMap);
    var map = initMap('calendarMap');

    function setMapView() {
      map.setView({
        lat: 47.390,
        lng: 0.689
      }, 14);
    }
    var indexEvent = [
      []
    ];
    var divLegend, markers, calendarLegend, greenIcon, yellowIcon, blueIcon;
    var defTimeMax = '2059-09-01T23:59:00-07:00';
    var timeMax = defTimeMax;
    //var timeMin = (new Date()).toISOString();
    var timeMin = strDate;
    timeMin += 'T00:00:00-07:00';
    var timeEntryMax = timeMin;
    var indexCal = 0;

    loadCalendar();

    function initMap(idMap) {

      'use strict'

      var map = loadMap(idMap);

      //zoomRemove(map);
      map.options.minZoom = 13;
      map.options.maxZoom = 16;

      function setMapView() {
        map.setView({
          lat: 47.390,
          lng: 0.689
        }, 14);
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
    function loadCalendar() {
      // The "Calendar ID" from your calendar settings page, "Calendar Integration" secion:
      var calendarId = options.calendar[indexCal].ID;
      var calendarColor = ''
      if (options.calendar[indexCal].color !== 'undefined') calendarColor = options.calendar[indexCal].color;
      calendarLegend = ''
      if (options.calendar[indexCal].legend !== 'undefined') calendarLegend = options.calendar[indexCal].legend;
      // Loads the JavaScript client library and invokes `start` afterwards.
      gapi.load('client', printCalendar);

      function printCalendar() {

        // 1. Create a project using google's wizzard: https://console.developers.google.com/start/api?id=calendar
        // 2. Create credentials:
        //    a) Go to https://console.cloud.google.com/apis/credentials
        //    b) Create Credentials / API key
        //    c) Since your key will be called from any of your users' browsers, set "Application restrictions" to "None",
        //       leave "Website restrictions" blank; you may optionally set "API restrictions" to "Google Calendar API"
        var apiKey = 'AIzaSyA325-RxDsfV-YMIcPSvCwbSzqowjzjHJ0';
        // You can get a list of time zones from here: http://www.timezoneconverter.com/cgi-bin/zonehelp
        var userTimeZone = "Europe/Paris";

        // Initializes the client with the API key and the Translate API.
        gapi.client.init({
          'apiKey': apiKey,
          // Discovery docs docs: https://developers.google.com/api-client-library/javascript/features/discovery
          'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
        }).then(function() {
          // Use Google's "apis-explorer" for research: https://developers.google.com/apis-explorer/#s/calendar/v3/
          // Events: list API docs: https://developers.google.com/calendar/v3/reference/events/list
          return gapi.client.calendar.events.list({
            'calendarId': calendarId,
            'timeZone': userTimeZone,
            'singleEvents': true,
            //'timeMin': (new Date()).toISOString(), //gathers only events not happened yet
            'timeMin': timeMin,
            'timeMax': timeMax,
            'maxResults': 20,
            'orderBy': 'startTime'
          });
        }).then(function(response) {
          if (response.result.items) {
            if (response.result.items.length > 0) {
              response.result.items.forEach(function(entry) {
                var newItem = $('<div class="calendarEvent"></div>');
                calendarRows.append(newItem);
                var newItemPopup = $('<div class="markerPopUp"></div>');
                var newItemLocation = $('<div class="markerLocation"></div>');
                newItem.append(newItemPopup, newItemLocation);
                var doc = setMarkerPopup(newItemPopup, entry);
                if (entry.start.dateTime > timeEntryMax) timeEntryMax = entry.start.dateTime;
                getLocationCoord(entry.location, doc, newItemLocation, options.calendar.length, response.result.items.length);
              });
            }
            else {
              if (indexCal < (options.calendar.length - 1)) {
                indexEvent.push([]);
                indexCal++;
                loadCalendar();
              }
              endMarkerBuild(indexEvent, setMapView);
            }
          }
        }, function(reason) {
          console.log('Error: ' + reason.result.error.message);
        });


        function setMarkerPopup(newItemPopup, entry) {
          var dayAt = moment(entry.start.dateTime).locale('fr').format('ddd');
          var dateAt = moment(entry.start.dateTime).locale('fr').format('DD MMMM');
          var startsAt = moment(entry.start.dateTime).locale('fr').format('HH:mm');
          var endsAt = moment(entry.end.dateTime).locale('fr').format('HH:mm');
          newItemPopup.append(`<center><strong><a href=${entry.htmlLink}>${entry.summary}</a></strong></center>`);
          var options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          };
          newItemPopup.append(`<div class='popupRow'><div class='popupCol1'>Date</div><div class='popupCol2'>${dayAt}, ${dateAt}, ${startsAt}  - ${endsAt}</div></div>`);
          newItemPopup.append(`<div class='popupRow'><div class='popupCol1'>Lieu</div><div class='popupCol2'>${entry.location}</div></div>`);
          if (typeof entry.description !== 'undefined') {
            var description = entry.description.replace(/\n/g, "<br />");
            newItemPopup.append(`<div class='popupRow'><div class='popupCol1'>Description</div><div class='popupCol2'>${description}</div></div>`);
          }
          var doc = newItemPopup[0].outerHTML;
          return doc;
        }

        function getLocationCoord(inpLocation, doc, newItemLocation, calendarLength, itemsLength) {
          for (i = 0; i < inpAddress.length; i++) {
            if (inpAddress[i].inpText.indexOf(inpLocation) > -1) {
              newItemLocation.append(`<div class="inpLoc">${inpLocation}</div>`, `<div clas="latitude">${inpAddress[i].lat}</div>`, `<div clas="longitude">${inpAddress[i].long}</div>`);
              var catdp2020PopUps = [{
                lat: inpAddress[i].lat,
                lng: inpAddress[i].lng,
                doc: doc
              }];
              add2Layer(catdp2020PopUps, setMapView, calendarColor, calendarLegend, calendarLength, itemsLength);
              return;
            }
          }
          var catdp2020PopUps = [{
            adresse: inpLocation,
            doc: doc
          }];
          var output = add2Layer(catdp2020PopUps, setMapView, calendarColor, calendarLegend, calendarLength, itemsLength);
          newItemLocation.append(`<div class="inpLoc">${inpLocation}</div>`, `<div clas="latitude">${output[0].lat}</div>`, `<div clas="longitude">${output[0].lng}</div>`);
        };
      };

    function add2Layer(inputCollection, setCallBack, iconColor, iconLegend, calendarLength, itemsLength) {

      var output = [];
      for (var i = 0; i < inputCollection.length; i++) {
        var input = inputCollection[i];
        if (typeof input.adresse !== 'undefined') {
          L.esri.Geocoding.geocode({
              requestParams: {
                maxLocations: 1
              }
            })
            .text(input.adresse)
            .run(function(error, results, response) {
              console.log('input adresse:', input.adresse);
              console.log('results:', results);
              console.log('first result lat', results.results[0].latlng.lat);
              console.log('first result lng', results.results[0].latlng.lng);
              input = {
                lat: results.results[0].latlng.lat,
                lng: results.results[0].latlng.lng,
                doc: input.doc,
                iconColor: iconColor,
                iconLegend: iconLegend
              }
              indexEvent[indexCal].push(input);
              output.push(input);
              if (indexEvent[indexCal].length < itemsLength) return output;
              if (indexCal < (calendarLength - 1)) {
                indexEvent.push([]);
                indexCal++;
                loadCalendar();
                return output;
              }
              endMarkerBuild(indexEvent, setCallBack);
              return output;
            });
        }
        else {
          input.iconColor = iconColor;
          input.iconLegend = iconLegend;
          indexEvent[indexCal].push(input);
          output.push(input);
          if (indexEvent[indexCal].length < itemsLength) return output;
          if (indexCal < (calendarLength - 1)) {
            indexEvent.push([]);
            indexCal++;
            loadCalendar();
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
      if (from[0].value == "indéfini") {
        from.datepicker("option", "minDate", new Date(strDate));
        from.datepicker("option", "maxDate", new Date(timeEntryMax));
        from[0].value = strDate.split("T")[0];
      }
      if (to[0].value == "indéfini") {
        to.datepicker("option", "minDate", new Date(strDate));
        to.datepicker("option", "maxDate", new Date(timeEntryMax));
        to[0].value = timeEntryMax.split("T")[0];
      }
      blueIcon = new L.Icon({
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });
      greenIcon = new L.Icon({
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });
      yellowIcon = new L.Icon({
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });
      markers = L.markerClusterGroup({
        maxClusterRadius: 5
      }).addTo(map);

      calendarLegend = [];
      for (i = 0; i < indexEvent.length; i++) {
        console.log('calendar n°', i, " n° events ", indexEvent[i].length);

        if (indexEvent[i].length > 0) {
          var iconColor = indexEvent[i][0].iconColor;
          var iconLegend = indexEvent[i][0].iconLegend
          if (iconColor == 'green') var iconUrl = greenIcon.options.iconUrl;
          else if (iconColor == 'yellow') var iconUrl = yellowIcon.options.iconUrl;
          else if (iconColor == 'blue') var iconUrl = blueIcon.options.iconUrl;
          else var iconUrl = blueIcon.options.iconUrl;
          calendarLegend.push({
            iconUrl: iconUrl,
            iconLegend: iconLegend,
            nbEvents: indexEvent[i].length
          });
        }

        for (j = 0; j < indexEvent[i].length; j++) {
          marker = makePopUp(indexEvent[i][j], setCallBack);
          markers.addLayer(marker);
        }
      }
      divLegend.innerHTML = '';
      for (i = 0; i < calendarLegend.length; i++) {
        divLegend.innerHTML += '<img src="' + calendarLegend[i].iconUrl + '">' + calendarLegend[i].nbEvents + ' ' + calendarLegend[i].iconLegend + '<br>'
      }
    };

    function makePopUp(input, setCallBack) {

      var iconColor = input.iconColor;

      if (iconColor == 'green') var marker = L.marker([input.lat, input.lng], {
        icon: greenIcon
      });
      else if (iconColor == 'yellow') var marker = L.marker([input.lat, input.lng], {
        icon: yellowIcon
      });
      else if (iconColor == 'blue') var marker = L.marker([input.lat, input.lng], {
        icon: blueIcon
      });
      else var marker = L.marker([input.lat, input.lng]);

      marker.bindPopup(input.doc, {
        maxWidth: 400,
        minWidth: 250,
        maxHeight: 160,
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

    }
    $(".DateRange-wrapper button").click(function(event) {
      event.preventDefault();
      timeMin = from.datepicker({
        dateFormat: 'yy-mm-dd'
      }).val();
      timeMin += 'T00:00:00-07:00';
      timeMax = to.datepicker({
        dateFormat: 'yy-mm-dd'
      }).val();
      if (timeMax != '') timeMax += 'T23:59:00-07:00';
      console.log("A new date selection was made: " + timeMin + ' to ' + timeMax);
      map.removeLayer(markers)
      indexEvent = [
        []
      ];
      divLegend.innerHTML = '';
      for (i = 0; i < calendarLegend.length; i++) {
        divLegend.innerHTML += '<img src="' + calendarLegend[i].iconUrl + '"> 0 ' + calendarLegend[i].iconLegend + '<br>'
      }
      indexCal = 0;
      loadCalendar();
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
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1
      })
      .on("change", function() {
        to.datepicker("option", "minDate", getDate(this));
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
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1
      })
      .on("change", function() {
        from.datepicker("option", "maxDate", getDate(this));
      });
    //$("button").focus();

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
     function setCalendarTime(options) {
      var calendarTime = $('<div id="calendarTime"><center>' + strCalendarTitle + '</center></div>');
      calendarTime.append('<div class="big-container"><iframe src="' + options.iframe.big + '" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"></iframe></div>');
      calendarTime.append('<div class="medium-container"><iframe src="' + options.iframe.medium + '" style="border-width:0" width="500" height="400" frameborder="0" scrolling="no"></iframe></div>');
      calendarTime.append('<div class="small-container"><iframe src="' + options.iframe.small + '" style="border-width:0" width="400" height="400" frameborder="0" scrolling="no"></iframe></div>');
      return calendarTime;
    }
 };
})(jQuery);
