(function($) {
$.fn.mapAllBlogs = function() {

  var isOKNumber = data => {
  if (jQuery.type(data) === 'number' && data != '') return true;
  else return false;
}

  var optionsPlugIn = {
    data: {
        base: 'https://philquand.github.io/Javascript/Blog-widgets/Collectif Santé 37/FermeturesHopitaux/Distribution v6/FermeturesHopitaux-v6.02.json',
        geolocData: function geolocData(iData, iVar) {
        if (typeof iData[iVar].LATITUDE !== 'undefined') {
          if(iData[iVar].LATITUDE != '') iData[iVar].lat = iData[iVar].LATITUDE;
          delete iData[iVar].LATITUDE;
        }
        if (typeof iData[iVar].LONGITUDE !== 'undefined') {
          if(iData[iVar].LONGITUDE != '') iData[iVar].lng = iData[iVar].LONGITUDE;
          delete iData[iVar].LONGITUDE;
        }
        if (isValidCoord(iData[iVar].lat, iData[iVar].lng)) return;
        /*var lieux = iData[iVar].nom_commune + ',' + iData[iVar].INSEE_COM;
        if (!isNaN(iData[iVar])) lieux += ', France';*/
        return lieux;
      },
      //INSEE_KEY: "INSEE_COM",
      checkIfStoreNeedsUpdate: false,
      dataTransformer: false,
      /*dataTransformer: function(inputData, setCallBack) {
      var outputData = 'https://philquand.github.io/Javascript/Blog-widgets/Collectif Santé 37/FermeturesHopitaux/Applications/AnalyseCN/export_Tous_les_établissements_concernés-2021_02_23.js';
      loadFromJS(outputData,
        (procData) => {
         procData = window["data"];
         if (typeof procData !== 'undefined') {
           var outputData = []
           for (var j = 0; j < procData["features"].length; j++) {
             outputData.push(j);
           }
           for (var i = 0; i < inputData.length; i++) {
             const inputDataId = inputData[i]["id"];
             for (var j = 0; j < outputData.length; j++) {
               if (inputDataId == procData["features"][outputData[j]]["properties"]["id"]) {
                 inputData[i]["lng"] = procData["features"][outputData[j]]["geometry"]["coordinates"][0]
                 inputData[i]["lat"] = procData["features"][outputData[j]]["geometry"]["coordinates"][1]
                 outputData.splice(j, 1)
                 break;
               }
             }
           };
           setCallBack(inputData);
         }
         else console.log('error in dataTransformer...');
        },
        (err) => {
          console.log(err.message);
          //loading.html(err.message);
        }
      );
      }*/
    },
    fondCarte : 'IGN',
    maxClusterRadius : 5,
    brChar: ";",
    popupData : {
      title: 'nom_hopital',
      //properties: ["LIEUX", "SUPPRESSIONS", "MENACES", "victoire"],
      hidden: ['id', 'nom_hopital', 'INSEE_COM', 'département', 'région', 'departement', 'code_region','selected'],
      label: [{
          value: 'suppressions'
        }, {
          value: 'menaces'
        }, {
          value: 'victoires'
        }, {
          value: 'ght_nom',
          label: 'nom du ght'
        }, {
          value: 'ghi_nom',
          label: 'nom ghi'
        }
      ],
    },
    tableData: {
      properties: [{
        name: 'nom_hopital',
        title:'hôpital',
        filter: 'selection'
      }, {
        name: 'département',
        filter: 'selection'
      }, {
        name: 'région',
        filter: 'selection'
      }, {
        name: 'suppressions',
        filter: 1,
        min_width: '250px'
      }, {
        name: 'menaces',
        filter: 1,
        min_width: '250px'
      }, {
        name: 'victoires',
        filter: 1,
        min_width: '250px'
      }, {
        name: 'ght_nom',
        title:'nom du ght',
        filter: 'selection'
      }, {
        name: 'ghi_nom',
        title:'nom du ghi',
        filter: 'selection'
      }],
      filters: [{
        //Les valeurs possibles doivent être précédées de l'index du filtre suivi de : (pour faire le lien avec la collection Filters de runTable)
        data: [{
          value: '0: avec valeur',
          label: 'Avec valeur'
        }, {
          value: '0: sans valeur',
          label: 'Sans valeur'
        }],
        func: (filterVal, columnVal, rowValues, stateVal) => {
          switch (filterVal) {
            case '0: sans valeur':
              if (columnVal === '') {
                return true;
              }
              else return false;
              break;
            default:
              if (columnVal !== '') {
                return true;
              }
              else return false;
              break;
          }
        }
      },
      {
        //Les valeurs possibles doivent être précédées de l'index du filtre suivi de : (pour faire le lien avec la collection Filters de runTable)
        data: [{
          value: '1: avec valeur',
          label: 'Avec valeur'
        }, {
          value: '1: sans valeur',
          label: 'Sans valeur'
        }, {
          value: '1: avec maternité',
          label: 'Avec maternité'
        }, {
          value: '1: avec chirurgie',
          label: 'Avec chirurgie'
        }, {
          value: '1: avec psychiatrie',
          label: 'Avec psychiatrie'
        }, {
          value: '1: avec pédiatrie',
          label: 'Avec pédiatrie'
        }, {
          value: '1: avec réanimation',
          label: 'Avec réanimation'
        }, {
          value: '1: avec cardiologie',
          label: 'Avec cardiologie'
        }, {
          value: '1: avec radiothérapie',
          label: 'Avec radiothérapie'
        }, {
          value: '1: avec pneumologie',
          label: 'Avec pneumologie'
        }, {
          value: '1: avec ophtalmologie',
          label: 'Avec ophtalmologie'
        }, {
          value: '1: avec otorhinolaryngologie',
          label: 'Avec otorhinolaryngologie'
        }, {
          value: '1: avec stomatologie',
          label: 'Avec stomatologie'
        }, {
          value: '1: avec urologie',
          label: 'Avec urologie'
        }, {
          value: '1: avec endocrinologie',
          label: 'Avec endocrinologie'
        }, {
          value: '1: avec addictologie',
          label: 'Avec addictologie'
        }, {
          value: '1: avec gérontologie',
          label: 'Avec gérontologie'
        }, {
          value: '1: avec nettoyage',
          label: 'Avec nettoyage'
        }, {
          value: '1: avec entretien',
          label: 'Avec entretien'
        }],
        func: (filterVal, columnVal, rowValues, stateVal) => {
          switch (filterVal) {
            case '1: avec valeur':
              if (columnVal !== '') {
                return true;
              }
              else return false;
              break;
            case '1: sans valeur':
              if (columnVal === '') {
                return true;
              }
              else return false;
              break;
            default:
              var filterLastVal = filterVal.split(' ');
              filterLastVal = filterLastVal[filterLastVal.length - 1];
              if (isOKString(columnVal) && columnVal.toUpperCase().indexOf(filterLastVal.toUpperCase()) > -1) {
                return true;
              }
              else return false;
              break;
          }
        }
      },
      {
        //Les valeurs possibles doivent être précédées de l'index du filtre suivi de : (pour faire le lien avec la collection Filters de runTable)
        data: [{
          value: '2: avec valeur',
          label: 'Avec valeur'
        }, {
          value: '2: sans valeur',
          label: 'Sans valeur'
        }, {
          value: '2: privé',
          label: 'privé'
        }, {
          value: '2: public',
          label: 'public'
        }],
        func: (filterVal, columnVal, rowValues, stateVal) => {
          switch (filterVal) {
            case '2: sans valeur':
              if (columnVal === '') {
                return true;
              }
              else return false;
              break;
            case '2: privé':
              if (isOKString(columnVal) && columnVal.toUpperCase().indexOf('PRIV') > -1) {
                return true;
              }
              else return false;
              break;
            case '2: public':
              if (isOKString(columnVal) && columnVal.toUpperCase().indexOf('PUBLI') > -1) {
                return true;
              }
              else return false;
              break;
            default:
              if (columnVal !== '') {
                return true;
              }
              else return false;
              break;
          }
        }
      }
    ]
    },
    controlLayers: {
      controlMaps: {on: true},
      /*controlOverlays: {
        title: 'Type de gestion',
        overlays: ['non défini', 'public', 'privé'],
        affect: function(data) {
          if (data["publ_priv"] == 'privé') {
            return 1;
          } else if (data["publ_priv"] == 'public') {
            return 2;
          } else return 0;
        },
      }*/
    },
    /*legend: [
    {
      title: 'Établissements',
      test: function(){},
      affect: function(data) {
        if ( isOKString(data["victoire"])  ) {
          return 0;
        }
        else if ( jQuery.type(data['SUPPRESSIONS']) === 'string' && data['SUPPRESSIONS'].indexOf('uppression') >= 0  ) {
          return 1;
        }
        else if ( (jQuery.type(data['SUPPRESSIONS']) === 'string' && data['SUPPRESSIONS'].indexOf('Fermeture') >= 0) || (jQuery.type(data['SUPPRESSIONS']) === 'string' && data['SUPPRESSIONS'].indexOf('fermeture') >= 0) || isOKString(data["an_ferm_mater"]) || isOKString(data["an_ferm_urgences"]) || isOKString(data["an_ferm_chirur"]) || isOKString(data["an_ferm_cardio"]) || isOKString(data["an_ferm_ivg"]) ) {
          return 2;
        }
        else if ( isOKString(data['SUPPRESSIONS']) || isOKString(data['MENACES']) ) {
          return 3;
        }
        else return 4;
      },
      icons: [
        {
          icon: {leaflet: new L.Icon({
            iconUrl: 'https://philquand.github.io/Javascript/LeafLet/Leaflet-color-markers/img/marker-icon-2x-blue.png',
            shadowUrl: 'https://philquand.github.io/Javascript/LeafLet/Leaflet-color-markers/img/marker-shadow.png',
            iconSize: [13, 20],
            iconAnchor: [6, 20],
            popupAnchor: [1, -17],
            shadowSize: [20, 20]
          })},
          title: 'une victoire',
          colorBG: '#FFD326',
          colorFG: '#0E0E0E',
        },
        {
          icon: {
            leaflet: new L.Icon({
              iconUrl: 'https://philquand.github.io/Javascript/LeafLet/Leaflet-color-markers/img/marker-icon-2x-red.png',
              shadowUrl: 'https://philquand.github.io/Javascript/LeafLet/Leaflet-color-markers/img/marker-shadow.png',
              iconSize: [13, 20],
              iconAnchor: [6, 20],
              popupAnchor: [1, -17],
              shadowSize: [20, 20]
            })
          },
          title: 'étab. fermés',
          colorBG: '#2781CA',
          colorFG: '#FFFFFF',
        },
        {
          icon: {
            leaflet: new L.Icon({
              iconUrl: 'https://philquand.github.io/Javascript/LeafLet/Leaflet-color-markers/img/marker-icon-2x-violet.png',
              shadowUrl: 'https://philquand.github.io/Javascript/LeafLet/Leaflet-color-markers/img/marker-shadow.png',
              iconSize: [13, 20],
              iconAnchor: [6, 20],
              popupAnchor: [1, -17],
              shadowSize: [20, 20]
            })
          },
          title: 'étab. avec fermetures',
          colorBG: '#9C2BCB',
          colorFG: '#F8F8F8',
        },
        {
          icon: {
            leaflet: new L.Icon({
              iconUrl: 'https://philquand.github.io/Javascript/LeafLet/Leaflet-color-markers/img/marker-icon-2x-green.png',
              shadowUrl: 'https://philquand.github.io/Javascript/LeafLet/Leaflet-color-markers/img/marker-shadow.png',
              iconSize: [13, 20],
              iconAnchor: [6, 20],
              popupAnchor: [1, -17],
              shadowSize: [20, 20]
            })
          },
          title: 'étab. avec menaces',
          colorBG: '#29AD27',
          colorFG: '#FFFFFF',
        },
        {
          icon: {
            leaflet: new L.Icon({
              iconUrl: 'https://philquand.github.io/Javascript/LeafLet/Leaflet-color-markers/img/marker-icon-2x-orange.png',
              shadowUrl: 'https://philquand.github.io/Javascript/LeafLet/Leaflet-color-markers/img/marker-shadow.png',
              iconSize: [13, 20],
              iconAnchor: [6, 20],
              popupAnchor: [1, -17],
              shadowSize: [20, 20]
            })
          },
          title: 'autres',
          colorBG: '#1E77C8',
          colorFG: '#FFFFFF',
        },
      ]
    },
    {
      title: 'Ferm. de maternités',
      //test: function(){},
      filter: {
        func: function(data) {
          if (isOKNumber(data["an_ferm_mater"])) {
            return 1;
          }
          else {
            return 0;
          }
        },
      },
      affect: function(data) {
        if (data["an_ferm_mater"] == 1111) {
          return 0;
        }
        else if (data["an_ferm_mater"] > 1111 && data["an_ferm_mater"] < 1997) {
          return 1;
        }
        else if (data["an_ferm_mater"] > 1111 && data["an_ferm_mater"] <= 2009) {
          return 2;
        }
        else if (data["an_ferm_mater"] > 2009) {
          return 3;
        }
        else {
          return 4;
        }
      },
      icons: [{
        icon: {leaflet: new L.Icon({
          iconUrl: 'https://philquand.github.io/Javascript/LeafLet/Leaflet-color-markers/img/marker-icon-2x-green.png',
          shadowUrl: 'https://philquand.github.io/Javascript/LeafLet/Leaflet-color-markers/img/marker-shadow.png',
          iconSize: [13, 20],
          iconAnchor: [6, 20],
          popupAnchor: [1, -17],
          shadowSize: [20, 20]
        })},
        title: 'date inconnue',
        colorBG: '#2781CA',
        colorFG: '#FFFFFF',
      }, {
        icon: {leaflet: new L.Icon({
          iconUrl: 'https://philquand.github.io/Javascript/LeafLet/Leaflet-color-markers/img/marker-icon-2x-blue.png',
          shadowUrl: 'https://philquand.github.io/Javascript/LeafLet/Leaflet-color-markers/img/marker-shadow.png',
          iconSize: [13, 20],
          iconAnchor: [6, 20],
          popupAnchor: [1, -17],
          shadowSize: [20, 20]
        })},
        title: 'avant 1997',
        colorBG: '#9A26CA',
        colorFG: '#F8F8F8',
      }, {
        icon: {leaflet: new L.Icon({
          iconUrl: 'https://philquand.github.io/Javascript/LeafLet/Leaflet-color-markers/img/marker-icon-2x-violet.png',
          shadowUrl: 'https://philquand.github.io/Javascript/LeafLet/Leaflet-color-markers/img/marker-shadow.png',
          iconSize: [13, 20],
          iconAnchor: [6, 20],
          popupAnchor: [1, -17],
          shadowSize: [20, 20]
        })},
        title: 'entre 1997 et 2009',
        colorBG: '#9A26CA',
        colorFG: '#F8F8F8',
      }, {
        icon: {leaflet: new L.Icon({
          iconUrl: 'https://philquand.github.io/Javascript/LeafLet/Leaflet-color-markers/img/marker-icon-2x-red.png',
          shadowUrl: 'https://philquand.github.io/Javascript/LeafLet/Leaflet-color-markers/img/marker-shadow.png',
          iconSize: [13, 20],
          iconAnchor: [6, 20],
          popupAnchor: [1, -17],
          shadowSize: [20, 20]
        })},
        title: 'depuis 2010',
        colorBG: '#9A26CA',
        colorFG: '#F8F8F8',
      }, {
        icon: {leaflet: new L.Icon({
          iconUrl: 'https://philquand.github.io/Javascript/LeafLet/Leaflet-color-markers/img/marker-icon-2x-blue.png',
          shadowUrl: 'https://philquand.github.io/Javascript/LeafLet/Leaflet-color-markers/img/marker-shadow.png',
          iconSize: [13, 20],
          iconAnchor: [6, 20],
          popupAnchor: [1, -17],
          shadowSize: [20, 20]
        })},
        title: 'autres',
        colorBG: '#9A26CA',
        colorFG: '#F8F8F8',
      }]
    },
    ],*/
    banner: '<img border="0" data-original-height="200" data-original-width="600" src="https://4.bp.blogspot.com/-WgwJsMGzYPE/WkoKfP1TJDI/AAAAAAAAAG0/7vLne-Wtd3cjxFK4Qm-NOJPFBeWShhlKwCLcBGAs/s400/AE8A2A5A-3BDA-4D84-82D5-B34D7215D364.png"/>',
  };  

  var loading = $('<div id="loading"/>');
  loading.append('<p>Chargement ...</p>');
  
  $(this).append(loading);

  var infoMapWrapper = $('<div id="infoMap-wrapper"><div id="infoMap" class="dispInfoMap"></div><div id="star_filter"><span style="font-size: x-large; font-weight: bold; color: red; ">* <i></span>les données ont été  filtrées dans l' + "'" + 'onglet Données</div></div>');
  $(this).append(infoMapWrapper);

  var dataTable = $('<table id="table" class="table table-striped table-bordered" />');
  $(this).append(dataTable);

  var dataAide = $('<div id="dataAide" style="display:none"></div>');
  $(this).append(dataAide);
  $(function() {
    dataAide.imagesGrid({
      images: [
        "https://philquand.github.io/Javascript/Blog-widgets/Collectif Santé 37/FermeturesHopitaux/Distribution v6/fichiersAide/Diapo_1.jpg",
        "https://philquand.github.io/Javascript/Blog-widgets/Collectif Santé 37/FermeturesHopitaux/Distribution v6/fichiersAide/Diapo_2.jpg",
        "https://philquand.github.io/Javascript/Blog-widgets/Collectif Santé 37/FermeturesHopitaux/Distribution v6/fichiersAide/Diapo_3.jpg",
        "https://philquand.github.io/Javascript/Blog-widgets/Collectif Santé 37/FermeturesHopitaux/Distribution v6/fichiersAide/Diapo_4.jpg",
        "https://philquand.github.io/Javascript/Blog-widgets/Collectif Santé 37/FermeturesHopitaux/Distribution v6/fichiersAide/Diapo_5.jpg",
        "https://philquand.github.io/Javascript/Blog-widgets/Collectif Santé 37/FermeturesHopitaux/Distribution v6/fichiersAide/Diapo_6.jpg",
        "https://philquand.github.io/Javascript/Blog-widgets/Collectif Santé 37/FermeturesHopitaux/Distribution v6/fichiersAide/Diapo_7.jpg",
        "https://philquand.github.io/Javascript/Blog-widgets/Collectif Santé 37/FermeturesHopitaux/Distribution v6/fichiersAide/Diapo_8.jpg",
        "https://philquand.github.io/Javascript/Blog-widgets/Collectif Santé 37/FermeturesHopitaux/Distribution v6/fichiersAide/Diapo_9.jpg",
        "https://philquand.github.io/Javascript/Blog-widgets/Collectif Santé 37/FermeturesHopitaux/Distribution v6/fichiersAide/Diapo_10.jpg",
      ],
      fancybox: true,
      align: true,
      //href: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEivAyL4RSZUBgdSbXd-AQ2UXVn5_3Z6z5Qi-YOIgbmI4sl07n1BfqjQ_sIVq1jfZD7WkDbhXVFX3CdUPOCxOctPXo_hIvtxNb7uYXDeJSh-NNUSfR97uy8CYwx8nYxfF8JSDTZR48TU6_o6NoNB3N8ils4OnmNiwIYXdu_xHTVVWtvICYSMMs6QR7Dm/s1600/Acces.jpg",
      //getViewAllText: function(imgsCount) { return 'View all' }
    });
  });
  
  var iconMarkersBuilder, legendTitle, objectOverlays;

  var optionsData = readUrlParam('options');
  if (typeof optionsData !== 'undefined') {
    loadFromJS(optionsData,
      () => {
        runMapandTable(options);
      },
      (optionsData) => {
        loading.html(optionsData + " :<br>ne semble pas être l'adresse d'un fichier accessible");
      }
    );
  }
  else runMapandTable(optionsPlugIn);

  function runMapandTable(options) {

    if (typeof options == 'undefined' ) var options = {};
    if (typeof options.popupData == 'undefined' ) options.popupData = {};
    

    if (typeof options['legend'] == 'undefined') {
      options['legend'] = [{
        icons: [{
          icon: {leaflet: new L.Icon({
            iconUrl: 'https://philquand.github.io/Javascript/LeafLet/Leaflet-color-markers/img/marker-icon-2x-blue.png',
            shadowUrl: 'https://philquand.github.io/Javascript/LeafLet/Leaflet-color-markers/img/marker-shadow.png',
            iconSize: [13, 20],
            iconAnchor: [6, 20],
            popupAnchor: [1, -17],
            shadowSize: [20, 20]
          })},
          title: 'établissements',
          colorBG: '#FFD326',
          colorFG: '#0E0E0E',
        }],
        title: '',        
        affect: function(data) {
          return 0;
        }
      }];
    }
    if (typeof options['legend'][0].title !== 'undefined') legendTitle = options['legend'][0].title;
    else legendTitle = '';
    iconMarkersBuilder = data => {
      for (var i = 0; i < data.length; i++) {
        data[i].iconMarker = options['legend'][0]['affect'](data[i]);
      }
      return options['legend'][0].icons;
    }  
      
    objectOverlays = {};
     if (typeof options.controlLayers === 'undefined' || typeof options.controlLayers.controlOverlays === 'undefined' ) {
      objectOverlays["overlayTitle"] = 'Autres';
      objectOverlays["controlOverlays"] = {"Autres" : new L.layerGroup()};
      objectOverlays["affect"] = data => {return 0;};
      objectOverlays["overlays"] = [{title: 'Autres', isVisible: true }];
    }
    else {
      if (typeof options.controlLayers.controlOverlays.title !== 'undefined') objectOverlays["overlayTitle"] = options.controlLayers.controlOverlays.title;
      else objectOverlays["overlayTitle"] = '';
      objectOverlays["controlOverlays"] = {};
      objectOverlays["overlays"] = [];
      for (var i = 0; i < options.controlLayers.controlOverlays.overlays.length; i++) {
        objectOverlays["controlOverlays"][options.controlLayers.controlOverlays.overlays[i]] = new L.layerGroup();
        objectOverlays["affect"] = options.controlLayers.controlOverlays.affect;
        objectOverlays["overlays"].push({
          title: options.controlLayers.controlOverlays.overlays[i],
          isVisible: true,
        });
      }
    }


    var storedData = readUrlParam('data');
    if (typeof storedData === 'undefined') {
      if (typeof options.data === 'string') var storedData = options.data;
      else if (typeof options.data === 'object' && typeof options.data.base === 'string') var storedData = options.data.base;
    };
    if (typeof storedData !== 'undefined') {
      if (typeof storedData === 'string') {
        if(storedData.startsWith('https://docs.google.com/spreadsheets')) {
          loadDataFromGoogle(storedData);
        }
        else if (storedData.endsWith(".json") || storedData.endsWith(".geojson")) {
          loadFromJSON(storedData,
            (procData) => {
              var isGeoJSON = (file) => {
                if (file.type == "FeatureCollection" && file.features[0].hasOwnProperty('geometry') && file.features[0]['geometry'] != null) return true;
                else return false;
              }
              var data = getDataFromJSON(procData);
              if (typeof data !== 'undefined') {
                if (typeof options.data.dataTransformer === 'function') {
                  options.data.dataTransformer(data, geolocData)
                }
                else if (typeof options.data.dataTransformer !== 'undefined' || !isGeoJSON(procData)) {
                  geolocData(data);
                }
                else {
                  runData(data);
                }
              };
            },
            (err) => {
              loading.html(err.message);
            }
          );
        }
        else if (storedData.endsWith(".js")) {
          loadFromJS(storedData,
            (procData) => {
              if (typeof this['data'] !== 'undefined') {
                geolocData(this['data']);
              }
            },
            (err) => {
              loading.html(err.message);
            }
          );
        }
      }
      else {
        if (typeof options.data.checkIfStoreNeedsUpdate !== 'undefined' && options.data.checkIfStoreNeedsUpdate) geolocData(storedData);
        else runData(storedData);
      }
    }
    else {
      if ($('#dataStore').length == 1) {
        storedData = $('#dataStore').html();
      };
      if (!storedData ) storedData = options.data.base;
      else storedData = JSON.parse(storedData);
      storedData = getDataFromJSON(storedData);
      if (typeof options.data.checkIfStoreNeedsUpdate !== 'undefined' && options.data.checkIfStoreNeedsUpdate) geolocData(storedData);
      else runData(storedData);
      //runData(storedData);
    }
    
    function getDataFromJSON(storedData) {
      if (jQuery.isArray(storedData)) {
        //fichier au format interne
        console.log("fichier de données au format interne.")
        return storedData
      }
      else {
        try {
          //fichier au format GeoJson
          //throw "trying to read file as GeoJSON : erreur n°0";
          if (storedData.type != "FeatureCollection") throw "trying to read file as GeoJSON : erreur n°1";
          if (!jQuery.isArray(storedData.features)) throw "trying to read file as GeoJSON : erreur n°2";
          var data = [];
          var features = storedData.features;
          for (var i = 0; i < features.length; i++) {
            var newItem = {};
            if (features[i]["geometry"] != null) {
              newItem["lng"] = features[i]["geometry"]["coordinates"][0];
              newItem["lat"] = features[i]["geometry"]["coordinates"][1];
            };
            var properties = features[i]["properties"];
            for (var prop in properties) {
              newItem[prop] = properties[prop];
            }
            data.push(newItem);
          }
          console.log("fichier de données au format GeoJSON.")
          return data;
        }
        catch (err) { //We can also throw from try block and catch it here
          console.log(err);
          var data = options.data;
          if (typeof data === 'object') data = options.data.base;
          loading.html(data + " :<br>n'est pas un fichier de données d'un format reconnu");
        }
        finally {
          //code for finally block
        }
      }
    };

    function loadDataFromGoogle(dataFromGoogle) {
      // Table des Fermetures
      //var SHEET_ID = 'https://docs.google.com/spreadsheets/d/1XBQe8JiZ5cepr-s_TBjBqQcaBx4Y83SQS4PaNoXnNjM/edit?usp=sharing';
      // Table de test (10 lignes)
      //var SHEET_ID = 'https://docs.google.com/spreadsheets/d/1PbgwjD-HodM0JdnlRtQvmTlagE3CzBExjfpCua6-dh4/edit?usp=sharing';

      Tabletop.init({
        key: dataFromGoogle,
        callback: geolocData,
        simpleSheet: true
      });
    };

    function geolocData(data) {
          if (typeof options.data === 'object' && typeof options.data.INSEE_KEY !== 'undefined') geolocDataWithINSEE(data);
          else geolocDataWithoutINSEE(data);
 
      function geolocDataWithoutINSEE(data) {
        var indexCal = 0;
        var indexRes = 0;
        var indexEnd = data.length;

        if (indexEnd < data.length) {
          data.splice(indexEnd, data.length - 1)
        }
        else if (indexEnd > data.length) indexEnd = data.length;

        var makeLocation = function(iData, iVar) {
          if (typeof options.data === 'object' && typeof options.data.geolocData !== 'undefined') {
            return options.data.geolocData(iData, iVar);
          }
          else {
            if (typeof options.data === 'string') var storedData = options.data;
            else if (typeof options.data === 'object' && typeof options.data.base === 'string') var storedData = options.data.base;
            else var storedData = 'options.data';
            loading.html(storedData + "<br>contient des objets qui ont besoin d'être géolocalisés<br>mais la fonction de géolocalisation options.data.geolocData n'est pas définie...");
            return false;
          }
        };

        add2Layer(indexCal);

        function add2Layer(indexLoc) {
          indexCal++;
          var lieux = makeLocation(data, indexLoc);
          if (!isValidCoord(data[indexLoc].lat, data[indexLoc].lng)) {
            L.esri.Geocoding.geocode({
                requestParams: {
                  maxLocations: 1
                }
              })
              .text(lieux)
              .run(function(error, results, response) {
                var _this = this
                if (error) {
                  if (typeof options.geolocError === 'function') options.geolocError(error, data[indexLoc])
                  else {
                    console.log(error);
                    console.log(lieux);
                  };
                  //return;
                }
                else {
                  //if (!error && typeof results.results !== 'undefined') {
                  if (!error && results.results.length > 0) {
                    indexRes++;
                    data[indexLoc].lat = results.results[0].latlng.lat;
                    data[indexLoc].lng = results.results[0].latlng.lng;
                  }
                  else {
                    if (typeof options.geolocError === 'function') options.geolocError("Problème d'accés au résultat de géolocalisation :", data[indexLoc])
                    else {
                      console.log(error);
                      console.log(lieux);
                    };
                  }
                }
                checkIfEnd(indexCal, indexEnd, add2Layer);
              });
          }
          else checkIfEnd(indexCal, indexEnd, add2Layer);

        }
      };

      function geolocDataWithINSEE(data) {
        var villesINSEE = 'https://philquand.github.io/Javascript/LeafLet/json/cities.json'
        Promise.all([
          // chargement du code INSEE des villes
          // d'après https://www.data.gouv.fr/fr/datasets/regions-departements-villes-et-villages-de-france-et-doutre-mer/
          load.json(villesINSEE),
        ]).then(
          function(values) {
            console.log('Everything has been loaded!');
            villesINSEE = loadVal(values, villesINSEE)
            //villesINSEE = values[0]['val'];
            //var output = [];
            var indexCal = 0;
            var indexRes = 0;
            var indexEnd = data.length;
            var INSEE_key = options.data.INSEE_KEY;
            //var indexEnd = 10;

            if (indexEnd < data.length) {
              data.splice(indexEnd, data.length - 1)
            }
            else if (indexEnd > data.length) indexEnd = data.length;

            /*if (storedData !== '') {
              var storedDataHasChanged = checkStoredData();
              if (storedDataHasChanged) loading.find('p').html('storedData et data sont différents');
              else loading.find('p').html('storedData et data sont identiques');
              return;
            }
            function checkStoredData() {
              if (storedData !== '') {
                if (data.length !== storedData.length) {
                  console.log('storedData and data have different length')
                  return true;
                }
                var dataJSON = $('<div></div>')
                dataJSON.html(JSON.stringify(data));
                dataJSON = JSON.parse(dataJSON.html());
                for (var i = 0; i < data.length; i++) {
                  delete storedData[i].iconMarker;
                  delete storedData[i].lat;
                  delete storedData[i].lng;
                  if (!deepEqual(storedData[i], dataJSON[i])) {
                    console.log('storedData and data are different on (at least) rank ' + eval(i + 2))
                    return true;
                  }
                }
                return false;
              }
              else return false;
            }*/

            var makeLocation = function(iData, iVar) {
              if (typeof options.data === 'object' && typeof options.data.geolocData !== 'undefined') {
                return options.data.geolocData(iData, iVar);
              }
              else {
                if (typeof options.data === 'string') var storedData = options.data;
                else if (typeof options.data === 'object' && typeof options.data.base === 'string') var storedData = options.data.base;
                else var storedData = 'options.data';
                loading.html(storedData + "<br>contient des objets qui ont besoin d'être géolocalisés<br>mais la fonction de géolocalisation options.data.geolocData n'est pas définie...");
                return false;
              }
            };
            var allreadyGeoLoc = checkAllreadyGeoLoc();
            if (!allreadyGeoLoc) return false

            function checkAllreadyGeoLoc() {
              var allreadyGeoLoc = {};
              for (var i = 0; i < data.length; i++) {
                if (!isValidCoord(data[i].lat, data[i].lng)) {
                  var lieux = makeLocation(data, i);
                  if (typeof lieux !== 'undefined') {
                    if (!lieux) return false
                    if (typeof allreadyGeoLoc[lieux] == 'undefined') {
                      var coordLatLng = getGPSfromVillesINSEE(data[i][INSEE_key]);
                      if (typeof coordLatLng !== 'undefined') {
                        allreadyGeoLoc[lieux] = {};
                        allreadyGeoLoc[lieux].lat = coordLatLng.lat;
                        allreadyGeoLoc[lieux].lng = coordLatLng.lng;
                        allreadyGeoLoc[lieux].INSEEname = coordLatLng.INSEEname;
                        allreadyGeoLoc[lieux].INSEEzip = coordLatLng.INSEEzip;
                        allreadyGeoLoc[lieux].INSEEcode = coordLatLng.INSEEcode;
                        allreadyGeoLoc[lieux].INSEEdept = coordLatLng.INSEEdept;
                      };
                    };
                  };
                };
              };
              return allreadyGeoLoc;

              function getGPSfromVillesINSEE(locData) {
                for (var i = 0; i < villesINSEE.length; i++) {
                  var zip = villesINSEE[i]["zip_code"];
                  var insee = villesINSEE[i]["insee_code"];
                  var name = villesINSEE[i]["name"].toUpperCase();
                  /*if (locData == 987 && (zip == null || insee == null)) {
                    console.log(locData)
                  }*/
                  var isMatched = false;
                  var department = parseInt(villesINSEE[i]["department_code"]);
                  if (zip == null || insee == null) {
                    if (department == locData) isMatched = true;
                  }
                  else {
                    var zipInt = parseInt(zip);
                    var inseeInt = parseInt(insee);
                    if (zipInt == locData || inseeInt == locData || insee == locData) isMatched = true;
                  }
                  if (isMatched) {
                    //var nameLoc = locData.COMMUNE.toUpperCase();
                    //var splitedLocName = nameLoc.split(" ");
                    //var debName = splitedLocName[0];
                    //if (name.indexOf(debName) > -1) {
                    var coordLatLng = {};
                    coordLatLng.lat = villesINSEE[i]["gps_lat"];
                    coordLatLng.lng = villesINSEE[i]["gps_lng"];
                    coordLatLng.INSEEname = villesINSEE[i]["name"];
                    coordLatLng.INSEEzip = villesINSEE[i]["zip_code"];
                    coordLatLng.INSEEcode = villesINSEE[i]["insee_code"];
                    coordLatLng.INSEEdept = villesINSEE[i]["department_code"];
                    return coordLatLng;
                    //}
                  }
                }
                return;
              }
            }

            add2Layer(indexCal);

            function add2Layer(indexLoc) {
              /*var lieux = data[indexLoc].COMMUNE + ',' + data[indexLoc].INSEE;
              if (!isNaN(data[indexLoc].INSEE)) lieux += ', France';*/
              indexCal++;
              if (!isValidCoord(data[indexLoc].lat, data[indexLoc].lng)) {
                var lieux = makeLocation(data, indexLoc);
                if (!lieux) return false
                if ((typeof allreadyGeoLoc[lieux] == 'undefined' || typeof allreadyGeoLoc[lieux].lat == 'undefined' || typeof allreadyGeoLoc[lieux].lng == 'undefined')) {
                  L.esri.Geocoding.geocode({
                      requestParams: {
                        maxLocations: 1
                      }
                    })
                    .text(lieux)
                    .run(function(error, results, response) {
                      var _this = this
                      if (error) {
                        console.log(error);
                        console.log(lieux);
                        return;
                      }
                      //if (!error && typeof results.results !== 'undefined') {
                      if (!error && results.results.length > 0) {
                        indexRes++;
                        data[indexLoc].lat = results.results[0].latlng.lat;
                        data[indexLoc].lng = results.results[0].latlng.lng;
                      }
                      else {
                        data[indexLoc].doc = 'Failed geoloc';
                      }
                      checkIfEnd(indexCal, indexEnd, add2Layer);
                    });
                }
                else {
                  if (typeof allreadyGeoLoc[lieux] !== 'undefined') {
                    data[indexLoc].lat = allreadyGeoLoc[lieux].lat;
                    data[indexLoc].lng = allreadyGeoLoc[lieux].lng;
                    if (typeof allreadyGeoLoc[lieux].INSEEname !== 'undefined') data[indexLoc].INSEEname = allreadyGeoLoc[lieux].INSEEname;
                    if (typeof allreadyGeoLoc[lieux].INSEEzip !== 'undefined') data[indexLoc].INSEEzip = allreadyGeoLoc[lieux].INSEEzip;
                    if (typeof allreadyGeoLoc[lieux].INSEEcode !== 'undefined') data[indexLoc].INSEEcode = allreadyGeoLoc[lieux].INSEEcode;
                    if (typeof allreadyGeoLoc[lieux].INSEEdept !== 'undefined') data[indexLoc].INSEEdept = allreadyGeoLoc[lieux].INSEEdept;
                  }
                  checkIfEnd(indexCal, indexEnd, add2Layer);
                }
              }
              else checkIfEnd(indexCal, indexEnd, add2Layer);

            };

          }
          /*).catch(function() {
            console.log('Oh no, epic failure!');
          }*/
        );
      }

      function checkIfEnd(indexCal, indexEnd, add2Layer) {
        if (indexCal < indexEnd) {
          add2Layer(indexCal)
        }
        else if (indexEnd > 0) {
          for (var i = 0; i < data.length; i++) {
            if (typeof data[i].INSEEname !== 'undefined') delete data[i].INSEEname;
            if (typeof data[i].INSEEzip !== 'undefined') delete data[i].INSEEzip;
            if (typeof data[i].INSEEcode !== 'undefined') delete data[i].INSEEcode;
            if (typeof data[i].INSEEdept !== 'undefined') delete data[i].INSEEdept;
          }
          setDeptsAndRegs(data, "builDepts")

          function setDeptsAndRegs(data, option) {
            // Usage:  Load different file types with one callback
            // Copyright (c) 2013 Ryan Clark
            // https://gist.github.com/rclark/5779673
            L.TopoJSON = L.GeoJSON.extend({
              addData: function(jsonData) {
                if (jsonData.type === "Topology") {
                  for (var key in jsonData.objects) {
                    var geojson = topojson.feature(jsonData, jsonData.objects[key]);
                    L.GeoJSON.prototype.addData.call(this, geojson);
                  }
                }
                else {
                  L.GeoJSON.prototype.addData.call(this, jsonData);
                }
              }
            });
            if (option == "builDepts") {
              for (var i = 0; i < data.length; i++) data[i]["département"] = "non défini";
              var topoFile = 'https://philquand.github.io/Javascript/LeafLet/json/deptsFranceData.json';
            }
            else {
              for (var i = 0; i < data.length; i++) data[i]["région"] = "non définie";
              var topoFile = 'https://philquand.github.io/Javascript/LeafLet/json/regsFranceData.json';
            }
            Promise.all([
              // GeoJSON des départements et régions françaises
              // d'après https://france-geojson.gregoiredavid.fr
              load.json(topoFile),
            ]).then(
              function(values) {
                console.log('Everything has been loaded!');

                topoVal = loadVal(values, topoFile);

                var topoLayer = new L.TopoJSON();

                addTopoData(topoVal);

                function addTopoData(topoData) {

                  topoLayer.addData(topoData);
                  //topoLayer.addTo(map);
                  topoLayer.eachLayer(handleLayer);
                }

                function handleLayer(layer) {
                  //var randomValue = Math.random(),

                  var areaBounds = layer.getBounds();
                  var areaCode = layer.feature.properties.code;
                  var areaGeometry = layer.feature.geometry;
                  var areaName = layer.feature.properties.nom;
                  var areaNum = getNumItems();

                  function getNumItems() {
                    var d = 0;
                    for (var idx = 0; idx < data.length; idx++) {
                      if (inside([data[idx].lng, data[idx].lat], areaGeometry)) {
                        if (option == "builDepts") data[idx].département = areaName;
                        else data[idx].région = areaName;
                        d += 1;
                      }
                    }
                    return d;

                    function inside(point, TopoGeom) {
                      var insideVal = false;
                      if (TopoGeom["type"] == "MultiPolygon") {
                        for (var i = 0; i < TopoGeom["coordinates"].length; i++) {
                          var polygon = TopoGeom["coordinates"][i][0];
                          // Le point est-il dans le polygone
                          if (isInsidePolygon(point, polygon)) {
                            insideVal = true;
                            for (var j = 1; j < TopoGeom["coordinates"][i].length; j++) {
                              var polygon = TopoGeom["coordinates"][i][j];
                              // Le point est-il dans l'un des trous du polygone
                              if (isInsidePolygon(point, polygon)) {
                                insideVal = false;
                              }
                            }
                          }
                        }
                      }
                      else {
                        var polygon = TopoGeom["coordinates"][0];
                        // Le point est-il dans le polygone
                        if (isInsidePolygon(point, polygon)) {
                          insideVal = true;
                          for (var j = 1; j < TopoGeom["coordinates"].length; j++) {
                            var polygon = TopoGeom["coordinates"][j];
                            // Le point est-il dans l'un des trous du polygone
                            if (isInsidePolygon(point, polygon)) {
                              insideVal = false;
                            }
                          }
                        }
                      }

                      return insideVal;
                      // ray-casting algorithm based on
                      // https://github.com/substack/point-in-polygon/blob/master/index.js

                      function isInsidePolygon(point, vs) {
                        var x = point[0],
                          y = point[1];

                        var inside = false;
                        for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
                          var xi = vs[i][0],
                            yi = vs[i][1];
                          var xj = vs[j][0],
                            yj = vs[j][1];

                          var intersect = ((yi > y) != (yj > y)) &&
                            (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
                          if (intersect) inside = !inside;
                        }

                        return inside;

                      }
                    }
                  }

                }

                if (option == "builDepts") setDeptsAndRegs(data, "builRegs");
                else {
            /*var iconMarkers = iconMarkersBuilder(data);
            for (var i = 0; i < data.length; i++) {
              var popupContent = $('<div></div>');
              var popupBody = $("<div class='popBody'></div>");
              popupContent.append(popupBody);
              if (typeof options.popupData.title !== 'undefined') {
                var title = options.popupData.title;
                //if (typeof data !== 'undefined' && typeof data[title] !== 'undefined') {
                popupBody.append("<div class='popLieux' style='color:" + data[i].iconMarker.colorFG + "; background-color:" + data[i].iconMarker.colorBG + ";'>" + data[i][title] + "</div>");
                //}
              }
              if (typeof options.popupData.properties !== 'undefined') {
                var properties = options.popupData.properties;
              }
              else {
                var hidden = [];
                if (typeof options.popupData.hidden !== 'undefined') hidden = options.popupData.hidden;
                //hidden = hidden.concat(["lat", "lng", "iconMarker", "LATITUDE", "LONGITUDE"]);
                hidden = hidden.concat(["lat", "lng", "iconMarker"]);
                if (typeof options.popupData.title !== 'undefined' && typeof data[popupStruc.title] !== 'undefined') hidden.push([opupStrucData.title])
                var dataKeys = Object.getOwnPropertyNames(indexEvent)
                var properties = [];
                for (var j = 0; j < dataKeys.length; j++) {
                  var keyStatus = true;
                  for (var k = 0; k < hidden.length; k++) {
                    if (dataKeys[j] == hidden[k]) keyStatus = false;
                  }
                  if (keyStatus == true) properties.push(dataKeys[j]);
                }
              }
              for (var j = 0; j < properties.length; j++) {
                var item = properties[j];
                if (data[i][item] != '') popupBody.append("<div class='popItem'><span class='popTitle'>" + item + "</span><br>" + data[i][item] + "</div>");
              }
              var content = JSON.stringify(popupContent.html());
              data[i].doc = content;
              }*/
                runData(data, true);
                }

              }
            )
            /*.catch(function() {
                            console.log('Oh no, epic failure!');
                          });*/
          };


          /*function dataPopUp(data) {
            var iconMarkers = iconMarkersBuilder(data);
            for (var i = 0; i < data.length; i++) {
              var popupContent = $('<div></div>');
              var popupBody = $('<div class="popBody"></div>');
              popupContent.append(popupBody);
              if (typeof options.popupData.title !== 'undefined') {
                var title = options.popupData.title;
                //if (typeof data !== 'undefined' && typeof data[title] !== 'undefined') {
                popupBody.append('<div class="popLieux" style="color:' + data[i].iconMarker.colorFG + '; background-color:' + data[i].iconMarker.colorBG + ';">' + data[i][title] + '</div>');
                //}
              }
              if (typeof options.popupData.properties !== 'undefined') {
                var properties = options.popupData.properties;
              }
              else {
                var hidden = [];
                if (typeof options.popupData.hidden !== 'undefined') hidden = options.popupData.hidden;
                //hidden = hidden.concat(["lat", "lng", "iconMarker", "LATITUDE", "LONGITUDE"]);
                hidden = hidden.concat(["lat", "lng", "iconMarker"]);
                if (typeof options.popupData.title !== 'undefined' && typeof data[popupStruc.title] !== 'undefined') hidden.push([opupStrucData.title])
                var dataKeys = Object.getOwnPropertyNames(indexEvent)
                var properties = [];
                for (var j = 0; j < dataKeys.length; j++) {
                  var keyStatus = true;
                  for (var k = 0; k < hidden.length; k++) {
                    if (dataKeys[j] == hidden[k]) keyStatus = false;
                  }
                  if (keyStatus == true) properties.push(dataKeys[j]);
                }
              }
              for (var j = 0; j < properties.length; j++) {
                var item = properties[j];
                if (data[i][item] != '') popupBody.append('<div class="popItem"><span class="popTitle">' + item + '</span><br>' + data[i][item] + '</div>');
              }
              data[i].doc = popupContent.html();
            };
          //if (asyncCompTableData) {
          //  for (var i = 0; i < indexEvent.length; i++) {
          //    indexEvent[i]["département"] = "non défini";
          //    indexEvent[i]["région"] = "non définie";
          // };
          //}
          }*/
        }
      };
    };

    function runData(indexEvent, isToSaveData) {
      // À conserver pour exporter des données...
      /*exportData(indexEvent)
      //return;
      function exportData(indexEvent) {
        var expCOMMUNE = indexEvent[0].COMMUNE;
          if(indexEvent[0].INSEEcode == null) var expINSEE = indexEvent[0].INSEEdept;
          else var expINSEE = indexEvent[0].INSEEcode;
        for (i = 1; i < indexEvent.length; i++) {
          expCOMMUNE += ',' + indexEvent[i].INSEEname;
          if(indexEvent[i].INSEEcode == null) expINSEE += ',' + indexEvent[i].INSEEdept;
          else expINSEE += ',' + indexEvent[i].INSEEcode;
        }
        $('#exportCOMMUNE').html(expCOMMUNE);
        $('#exportINSEE').html(expINSEE);
        for (i = 1; i < indexEvent.length; i++) {
          delete indexEvent[i].INSEEname;
          delete indexEvent[i].INSEEzip;
          delete indexEvent[i].INSEEcode;
          delete indexEvent[i].INSEEdept;
        }      
        $('#dataStore').html(JSON.stringify(indexEvent));
        console.log('achieved');
        loading.find('p').html('Les données de type COMMUNE et INSEE ont été exportées avec succés');
      }*/
      if (isToSaveData) {
        if ($('#dataStore').length == 0) {
          var dataStore = $('<div id="dataStore" style="display:none"></div>')
          $('#infoMap-wrapper').prepend(dataStore)
        }
        else var dataStore = $('#dataStore');

        var valGeoJSON = getGeoJSONFromData(indexEvent);
        for (i = 0; i < valGeoJSON["features"].length; i++) {
          //delete valGeoJSON["features"][i]["properties"]["iconMarker"];
          delete valGeoJSON["features"][i]["properties"]["marker"];
          for (var prop in valGeoJSON["features"][i]["properties"]) {
            if (valGeoJSON["features"][i]["properties"][prop] == null) {
              delete valGeoJSON["features"][i]["properties"][prop];
            }

          }
          //delete valGeoJSON["features"][i]["properties"]["doc"];
        };
        dataStore.html(JSON.stringify(valGeoJSON));

        if ($('#optStore').length == 0) {
          var optStore = $('<div id="optStore" style="display:none"></div>')
          $('#infoMap-wrapper').prepend(optStore)
        }
        else var optStore = $('#optStore');
        var optStoreSTR = stringifyJSO2V(options, 'options');
        optStore.html(optStoreSTR);

        function getGeoJSONFromData(indexEvent) {
          var valGeoJSON = {};
          valGeoJSON["type"] = "FeatureCollection";
          valGeoJSON["features"] = [];
          for (var i = 0; i < indexEvent.length; i++) {
            var newItem = {
              "type": "Feature",
              "geometry": {
                "type": "Point"
              }
            };
            newItem["geometry"]["coordinates"] = [indexEvent[i]["lng"], indexEvent[i]["lat"]];
            newItem["properties"] = clone(indexEvent[i]);
            delete newItem["properties"].lng;
            delete newItem["properties"].lat;
            valGeoJSON["features"].push(newItem);
          }
          return valGeoJSON;
        };
      };
      console.log('achieved');
      
      loading.css('display', 'none');
      if (jQuery.type(options['brChar']) !== 'undefined') var regForBR = new RegExp(options['brChar'], 'g')
      for (var i = 0; i < indexEvent.length; i++) {
        if (jQuery.type(options['brChar']) !== 'undefined') {
          for (var prop in indexEvent[i]) {
            var propVal = indexEvent[i][prop];
            if (typeof propVal === 'string') {
              propVal = propVal.replace(regForBR, "</li><li>");
              if (propVal.indexOf('</li><li>') > -1) {
                propVal = '<ul class="popListe"><li>' + propVal + '</li></ul>'
              }
            }
            indexEvent[i][prop] = propVal;
          }
        }
        if (jQuery.type(options['legend']) !== 'undefined' && jQuery.type(options['legend'][0].filter) !== 'undefined' && jQuery.type(options['legend'][0].filter.func) !== 'undefined') {
          if (options['legend'][0].filter.func(indexEvent[i])) {
            indexEvent[i]["selected"] = true;
          }
          else {
            indexEvent[i]["selected"] = false;
          }
        }
        else {
          indexEvent[i]["selected"] = true;
        }
      }
      var map_invalidateSize = runMap(indexEvent);

      var menuLegend = -1;
      var indexEventTable;
      var tableFilterOn = false;
      function runMap(indexEvent) {

        var stateChangingButton ;
        var iconMarkers = iconMarkersBuilder(indexEvent);
        var iconMarkersLength = iconMarkers.length;
        var map, onSetDefaultMapView, refreshIndexEvent, boundsSetDefaultMapView;
        var clickedMarker;

        /*function removeAreaMarkers() {
          for (var i = 0; i < indexEvent.length; i++) {
            markers.removeLayer(indexEvent[i].marker);
          }
        }*/
        function setDefaultMapView() {

          //map.setView(new L.LatLng(47, 2), 6);
          
          if (typeof boundsSetDefaultMapView === 'undefined') {
            /*map.fitBounds([
              [51.10, 2.47],
              [48.37, -5.16],
              [42.38, -1.85],
              [42.47, 3.16],
              [43.80, 7.96],
              [49.03, 8.08],
            ]);*/
            map.fitBounds([
              [50.10, 2.47],
              [48.37, -4.16],
              [43.38, -1.85],
              [42.47, 3.16],
              [43.80, 7.96],
              [47.03, 8.08]
            ]);
          } else if (boundsSetDefaultMapView.length == 1) {
            map.flyTo(new L.LatLng(
              boundsSetDefaultMapView[0][0],
              boundsSetDefaultMapView[0][1]
            ), 6);
          } else {
            map.fitBounds(boundsSetDefaultMapView)
          };
          //if (typeof onSetDefaultMapView !== 'undefined') onSetDefaultMapView();
        }

        function setMapView() {
          setDefaultMapView()
          return;
        }

        function dataPopUp(data) {
          var popupContent = $('<div></div>');
          var popupBody = $('<div class="popBody"></div>');
          popupContent.append(popupBody);
          if (typeof options.popupData.title !== 'undefined') {
            var title = options.popupData.title;
            if (typeof data !== 'undefined' && typeof data[title] !== 'undefined') {
              popupBody.append('<div class="popLieux" style="color:' + data.iconMarker.colorFG +'; background-color:' + data.iconMarker.colorBG +';">' + data[title] + '</div>');
            }
          }
          if (typeof options.popupData.properties !== 'undefined') {
            var properties = options.popupData.properties;
          }
          else {
            var hidden = [];
            if (typeof options.popupData.hidden !== 'undefined') hidden = options.popupData.hidden;
            //hidden = hidden.concat(["lat", "lng", "iconMarker", "LATITUDE", "LONGITUDE"]);
            hidden = hidden.concat(["lat", "lng", "iconMarker"]);
            //if (typeof options.popupData.title !== 'undefined' && typeof data[popupStruc.title] !== 'undefined') hidden.push([opupStrucData.title])
            var dataKeys = Object.getOwnPropertyNames(data)
            var properties = [];
            for (var i = 0; i < dataKeys.length; i++) {
              var keyStatus = true;
              for (var j = 0; j < hidden.length; j++) {
                if (dataKeys[i] == hidden[j]) keyStatus = false;
              }
              if (keyStatus == true) properties.push(dataKeys[i]);
            }
          }
          if (typeof options.popupData.label !== 'undefined') {
            var label = [];
            for (var i = 0; i < options.popupData.label.length; i++) {
              label[options.popupData.label[i].value] = options.popupData.label[i].label
            }
          }
          for (var i = 0; i < properties.length; i++) {
              var item = properties[i];
              var itemLabel = item;
             if(jQuery.type(label[item]) === 'string') {
                itemLabel = label[item];
              }
              if (typeof data[item] !== 'undefined' && data[item] != '' && data[item] != null && data[item] != 'NULL') popupBody.append('<div class="popItem"><span class="popTitle">' + itemLabel + '</span><div>' + data[item] + '</div></div>');
            }
          return popupContent.html();
        }
        if (typeof options.maxClusterRadius !== 'undefined') var maxClusterRadius = options.maxClusterRadius;
        else var maxClusterRadius = 20;
        var markers = L.markerClusterGroup({
          maxClusterRadius: maxClusterRadius,
          removeOutsideVisibleBounds: true,
          spiderfyDistanceMultiplier: 2,

          disableClusteringAtZoom: 13,
          spiderfyOnMaxZoom: false,
          zoomToBoundsOnClick: false,
          animate: false,
          iconCreateFunction: function(cluster) {
            const clusterChildMarkers = cluster.getAllChildMarkers(); // list of all markers
            var clLatLong = clusterChildMarkers[0].getLatLng()
            var clusterSize = "small", locLat = clLatLong.lat, locLng = clLatLong.lng;
            for (i = 0; i < clusterChildMarkers.length; i++) {
              clLatLong = clusterChildMarkers[i].getLatLng();
              if( (clLatLong.lat !== locLat) || (clLatLong.lng !== locLng) ) clusterSize = "medium";
            }
            return new L.DivIcon({
              html: '<div><span>' + clusterChildMarkers.length + '</span></div>',
              className: 'marker-cluster marker-cluster-' + clusterSize,
              iconSize: new L.Point(1, 1)
            });
          }
        });
// markers is the markerClusterGroup
/*markers.on('animationend', function(a){
  console.log('animationend zoom level: ', map.getZoom())
})

markers.on('clusterclick', function(a){
  console.log('clusterclick zoom level: ', map.getZoom())
})*/
        for (i = 0; i < indexEvent.length; i++) {
          indexEvent[i].iconMarker = iconMarkers[indexEvent[i].iconMarker];
          indexEvent[i].doc = dataPopUp(indexEvent[i]);
          //indexEvent[i].doc = JSON.parse(indexEvent[i].doc);
          indexEvent[i].marker = makePopUp(indexEvent[i], setMapView);
        }

        map = initMap('infoMap', indexEvent);
        markers.addTo(map);
clickedMarker="";
map.on('zoomend', function() {
    if (clickedMarker!=="" && map.getZoom()>=map.options.maxZoom) {
        clickedMarker.__parent.spiderfy();
        clickedMarker="";
    }
});

markers.on('clusterclick', function (a) {
    if (a.layer._childCount>0) {
        clusterMarkers = a.layer.getAllChildMarkers();
        clickedMarker=clusterMarkers[0];
    }
    if (map.getZoom()>=map.options.maxZoom) {
        a.layer.spiderfy();
    } else {
        a.layer.zoomToBounds({padding: [20, 20]});
    }
});        

        endMarkerBuild(indexEvent);

        function makePopUp(input, setCallBack) {

          if (typeof input.iconMarker === 'undefined' || typeof input.iconMarker.icon === 'undefined' || input.iconMarker.icon == '') {
            var marker = L.marker([input.lat, input.lng]);
          }
          else {
            if (typeof input.lat === 'undefined' || typeof input.lng === 'undefined') {
              console.log('error in makePopUp');
            }
            var marker = L.marker([input.lat, input.lng], {
              icon: input.iconMarker.icon.leaflet
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

        function initMap(idMap, indexEvent) {

          'use strict'

          map = loadMap(idMap);

          //zoomRemove(map);
          map.options.minZoom = 6;
          map.options.maxZoom = 8;
          //map.options.minZoom = 5;
          //map.options.maxZoom = 12;
          map.scrollWheelZoom.disable();

          setDefaultMapView();

          var baseMaps = {
            'par défaut': L.tileLayer('')
          };
          baseMaps['par défaut'].addTo(map);
          var legendMaps = {}

          // Constructeur du contrôle de carte LeafLet
          addControlLayer();          
          function addControlLayer() {
            // Constructeur du contrôle de carte LeafLet
            if (typeof options.controlLayers === 'undefined' ){
              //var legendAllMarkers = addLegend()
            } else if (typeof options.controlLayers.controlMaps === 'undefined' || options.controlLayers.controlMaps.on != true) {
              // Ajout de la seule carte de fond
              var option = {
                baseMaps: null,
                legend: legendMaps,
                map: map,
              };
              buildBaseMaps(option);
            }
            else {
              // Ajout du contrôle
              loadMapPicture({
                typMap: "builDepts",
                baseMaps: baseMaps,
                legend: legendMaps,
                data: indexEvent,
                map: map,
                callback: builDeptsCallback
                //callback: buildBaseMaps
              });
            }

            function builDeptsCallback(option) {
              loadMapPicture({
                typMap: "builRegs",
                baseMaps: baseMaps,
                legend: legendMaps,
                data: indexEvent,
                map: map,
                callback: buildBaseMaps
              });
            }

            function buildBaseMaps(option) {
              var controlBasemapsAndOverlays = new L.control.layers(option["baseMaps"], objectOverlays["controlOverlays"]).addTo(option["map"]);
              for (var i = 0; i < objectOverlays["overlays"].length; i++) {
                objectOverlays["controlOverlays"][objectOverlays["overlays"][i].title].addTo(map);
              }

              var controlBasemapsAndOverlaysHTML = $(controlBasemapsAndOverlays.getContainer());
              var controlMapsDiv = controlBasemapsAndOverlaysHTML.find(".leaflet-control-layers-base").first();
              if (option["baseMaps"] !== null) controlMapsDiv.prepend('<div class="legendTitle" style="display:block; text-align:center;">Métropole</div>')
              var controlOverlaysDiv = controlBasemapsAndOverlaysHTML.find(".leaflet-control-layers-overlays").first();
              if (objectOverlays["overlayTitle"] != '') {
                controlOverlaysDiv.prepend('<div class="legendTitle" style="display:block; text-align:center;">' + objectOverlays["overlayTitle"] + '</div>')
              };
              if (objectOverlays["overlays"].length == 1) {
                controlBasemapsAndOverlaysHTML.find(".leaflet-control-layers-separator").css("display", "none");
                controlBasemapsAndOverlaysHTML.find(".leaflet-control-layers-overlays").css("display", "none");
              };
              var baselayerName = 'par défaut';
              var legendAllMarkers = addLegend()
              map.on('baselayerchange', function(eventLayer) {
                baselayerName = eventLayer.name;
                //map.removeControl(legendAllMarkers);
                $('#menuLegend').prop('disabled',true)
                $('#btData').css('display','none')
                map.removeControl(option["legend"]["départements"]);
                map.removeControl(option["legend"]["régions"]);
                setDefaultMapView();
                if (baselayerName == 'par défaut') {
                  //legendAllMarkers = addLegend();
                  $('#menuLegend').prop('disabled',false)
                  contentLegend();
                  $('#btData').css('display','block')
                  stateChangingButton.enable();
                }
                else {
                  map.addControl(option["legend"][eventLayer.name]);
                  refreshIndexEvent = [];
                  stateChangingButton.disable();
                }
                refreshMarkers(refreshIndexEvent);
              });
              map.on('overlayadd', function(eventLayer) {
                console.log('adding : ' + eventLayer.name)
                if (baselayerName == 'par défaut') {
                  for (var k = 0; k < objectOverlays["overlays"].length; k++) {
                    if (objectOverlays["overlays"][k].title == eventLayer.name) {
                      objectOverlays["overlays"][k].isVisible = true;
                    };
                  };
                  /*var iconNum = refreshMarkers(refreshIndexEvent);
                  map.removeControl(legendAllMarkers);
                  legendAllMarkers = addLegend(iconNum)
                  map.addControl(legendAllMarkers);*/
                  $('#contentLegend').html(contentLegend());
                };
              });
              map.on('overlayremove', function(eventLayer) {
                console.log('removing : ' + eventLayer.name)
                if (baselayerName == 'par défaut') {
                  for (var k = 0; k < objectOverlays["overlays"].length; k++) {
                    if (objectOverlays["overlays"][k].title == eventLayer.name) {
                      objectOverlays["overlays"][k].isVisible = false;
                    };
                  };
                  /*var iconNum = refreshMarkers(refreshIndexEvent);
                  map.removeControl(legendAllMarkers);
                  legendAllMarkers = addLegend(iconNum)
                  map.addControl(legendAllMarkers);*/
                  $('#contentLegend').html(contentLegend());
                };
              });

              /*function updateLegend() {
                var iconNum = refreshMarkers(refreshIndexEvent);
                map.removeControl(legendAllMarkers);
                legendAllMarkers = addLegend(iconNum)
                map.addControl(legendAllMarkers);
              }*/
            };
            
          };

          function addLegend() {
            var legendAllMarkers = L.control({
              position: 'bottomleft'
            });

            legendAllMarkers.onAdd = function(map) {

              var divlegendAllMarkers = L.DomUtil.create('div', 'info legend');
              divlegendAllMarkers.innerHTML = '';

              var menuLegendOptions = ''
              for (var i = 0; i < options['legend'].length; i++) {
                if(i== menuLegend) menuLegendOptions += '<option selected="selected" data-path=' + i + '>' + options['legend'][i].title + '</option>'
                else menuLegendOptions += '<option data-path=' + i + '>' + options['legend'][i].title + '</option>'
              }
              divlegendAllMarkers.innerHTML += '<select id="menuLegend" style="margin-bottom: 1em">' + menuLegendOptions + '</select>';
              if(options['legend'].length == 1) divlegendAllMarkers.innerHTML = '<div style="display:none">' + divlegendAllMarkers.innerHTML + '</div>';
              if( menuLegend == -1) {
                menuLegend = 0;
                divlegendAllMarkers.innerHTML += '<div id="contentLegend" >' + contentLegend(true) + '</div>';
              }
              else divlegendAllMarkers.innerHTML += '<div id="contentLegend" >' + contentLegend() + '</div>';

              if ($('#btData').length == 0) runButtonForTable();
              
              return divlegendAllMarkers;
            };

            legendAllMarkers.addTo(map);
            L.DomEvent.on(
              document.getElementById('menuLegend'), // HTMLElement
              'change', // String with event names
              function(e) {
                L.DomEvent.stop(e);
                menuLegend = $('#menuLegend option:selected').data("path");
                $('#contentLegend').html(contentLegend(true));
                //runTable();
              } // Handler function
            );
            return legendAllMarkers;
          }

          function contentLegend(needsRefresh) {
            if (typeof options['legend'][menuLegend].title !== 'undefined') legendTitle = options['legend'][menuLegend].title;
            else legendTitle = '';
            iconMarkersBuilder = data => {
              for (var i = 0; i < data.length; i++) {
                data[i].iconMarker = options['legend'][menuLegend].icons[options['legend'][menuLegend]['affect'](data[i])];
              }
              return options['legend'][menuLegend].icons;
            }
            iconMarkers = iconMarkersBuilder(indexEvent);
            iconMarkersLength = iconMarkers.length;
            for (var i = 0; i < indexEvent.length; i++) {
              markers.removeLayer(indexEvent[i].marker);
            }
            refreshIndexEvent = [];
            for (i = 0; i < indexEvent.length; i++) {
              refreshIndexEvent.push(i)
            }
            if (jQuery.type(needsRefresh) !== 'undefined' && needsRefresh) {
              indexEventTable = [];
              var j = 0;
              for (i = 0; i < indexEvent.length; i++) {
                if (jQuery.type(options['legend']) !== 'undefined' && jQuery.type(options['legend'][menuLegend].filter) !== 'undefined' && jQuery.type(options['legend'][menuLegend].filter.func) !== 'undefined') {
                  if (options['legend'][menuLegend].filter.func(indexEvent[i])) {
                    indexEvent[i]["selected"] = true;
                    indexEventTable.push(indexEvent[i]);
                    //indexEventTable[j++]['indirect'] = i;

                  }
                  else {
                    indexEvent[i]["selected"] = false;
                  }
                }
                else {
                  indexEvent[i]["selected"] = true;
                  indexEventTable.push(indexEvent[i]);
                  //indexEventTable[j++]['indirect'] = i;
                }
              }
              runTable();
             
            }
            var iconNum = refreshMarkers(refreshIndexEvent);

            if (typeof iconNum === 'undefined') {
              iconNum = [];
              for (i = 0; i < indexEvent.length; i++) {
                iconNum.push(true)
              }
            }
            for (var k = 0; k < iconMarkersLength; k++) {
              iconMarkers[k].nbMapEvents = 0;
            }
            for (var i = 0; i < indexEvent.length; i++) {
              if (iconNum[i]) {
                for (var k = 0; k < iconMarkersLength; k++) {
                  //if (indexEvent[i]["selected"] && indexEvent[i].iconMarker.title == iconMarkers[k].title) {
                  if (indexEvent[i]["selected"] && (indexEvent[i].iconMarker == k || indexEvent[i].iconMarker.title == iconMarkers[k].title)) {
                    indexEvent[i].iconMarker = iconMarkers[k];
                    iconMarkers[k].nbMapEvents++;
                  }
                }
              }
            }
            var totalEvents = 0
            for (var k = 0; k < iconMarkersLength; k++) {
              totalEvents = totalEvents + iconMarkers[k].nbMapEvents;
            }
            checkautresDepts(map, indexEvent)
            var contentLegendHtml = ''
            if (legendTitle != '') {
              if(totalEvents == 0) contentLegendHtml += 'aucun élément';
              else if(totalEvents == 1) contentLegendHtml += totalEvents + ' élément';
              else if(totalEvents > 1) contentLegendHtml += totalEvents + ' éléments';
              if (tableFilterOn) {
                var selectNW = {lat: -1000000, lng: 1000000};
                var selectNE = {lat: -1000000, lng: -1000000};
                var selectSW = {lat: 1000000, lng: 1000000};
                var selectSE = {lat: 1000000, lng: -1000000};
                for (var i = 0; i < indexEvent.length; i++) {
                  if (indexEvent[i]["selected"]) {
                    if (selectNW.lat < indexEventTable[i]["lat"]) selectNW.lat = indexEventTable[i]["lat"];
                    if (selectNW.lng > indexEventTable[i]["lng"]) selectNW.lng = indexEventTable[i]["lng"];
                    if (selectNE.lat < indexEventTable[i]["lat"]) selectNE.lat = indexEventTable[i]["lat"];
                    if (selectNE.lng < indexEventTable[i]["lng"]) selectNE.lng = indexEventTable[i]["lng"];
                    if (selectSW.lat > indexEventTable[i]["lat"]) selectSW.lat = indexEventTable[i]["lat"];
                    if (selectSW.lng > indexEventTable[i]["lng"]) selectSW.lng = indexEventTable[i]["lng"];
                    if (selectSE.lat > indexEventTable[i]["lat"]) selectSE.lat = indexEventTable[i]["lat"];
                    if (selectSE.lng < indexEventTable[i]["lng"]) selectSE.lng = indexEventTable[i]["lng"];
                    if (selectSW.lat < 0) {
                      console.log('négative lat...')
                    }
                  }
                }
               if (selectNW.lat !== selectSW.lat && selectNW.lng !== selectNE.lng && selectNW.lat !== -1000000 && isInMet(selectNW) && isInMet(selectNE) && isInMet(selectSW) && isInMet(selectSE)) {
                boundsSetDefaultMapView = [
                  [selectNW.lat, selectNW.lng],
                  [selectNE.lat, selectNE.lng],
                  [selectSE.lat, selectSE.lng],
                  [selectSW.lat, selectSW.lng],
                ]
                map.fitBounds(boundsSetDefaultMapView);
                }
                else setDefaultMapView();
                contentLegendHtml += '<span style="font-size: x-large; font-weight: bold; color: red; "> *</span>'
              }
              else setDefaultMapView();
              contentLegendHtml = '<span class="legendTitle" style="display:block; text-align:center;">' + contentLegendHtml + '</span>';
            }
            for (var k = 0; k < iconMarkersLength; k++) {
              if (typeof iconMarkers[k].title !== 'undefined' && iconMarkers[k].nbMapEvents > 0) {
                if (typeof iconMarkers[k].icon.leaflet === 'undefined') {
                  contentLegendHtml += '<img src="https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon-2x.png"> ' + iconMarkers[k].nbMapEvents + ' ' + iconMarkers[k].title;
                }
                else {
                  var iconVal = iconMarkers[k].icon.leaflet;
                  contentLegendHtml += '<img src="' + iconMarkers[k].icon.leaflet.options.iconUrl + '"> ' + iconMarkers[k].nbMapEvents + ' ' + iconMarkers[k].title
                }
                if (legendTitle !== '') contentLegendHtml += '<br>'
              }
            }
            if( contentLegendHtml == '' ) contentLegendHtml = "aucun élément"
            if (legendTitle == '' && tableFilterOn) {
              contentLegendHtml += '<span style="font-size: x-large; font-weight: bold; color: red; "> *</span><br>'
              var selectNW = {lat: -1000000, lng: 1000000};
              var selectNE = {lat: -1000000, lng: -1000000};
              var selectSW = {lat: 1000000, lng: 1000000};
              var selectSE = {lat: 1000000, lng: -1000000};
              for (var i = 0; i < indexEvent.length; i++) {
                if (indexEvent[i]["selected"]) {
                  if (selectNW.lat < indexEventTable[i]["lat"]) selectNW.lat = indexEventTable[i]["lat"];
                  if (selectNW.lng > indexEventTable[i]["lng"]) selectNW.lng = indexEventTable[i]["lng"];
                  if (selectNE.lat < indexEventTable[i]["lat"]) selectNE.lat = indexEventTable[i]["lat"];
                  if (selectNE.lng < indexEventTable[i]["lng"]) selectNE.lng = indexEventTable[i]["lng"];
                  if (selectSW.lat > indexEventTable[i]["lat"]) selectSW.lat = indexEventTable[i]["lat"];
                  if (selectSW.lng > indexEventTable[i]["lng"]) selectSW.lng = indexEventTable[i]["lng"];
                  if (selectSE.lat > indexEventTable[i]["lat"]) selectSE.lat = indexEventTable[i]["lat"];
                  if (selectSE.lng < indexEventTable[i]["lng"]) selectSE.lng = indexEventTable[i]["lng"];
                  if (selectSW.lat < 0) {
                    console.log('négative lat...')
                  }
                }
              }
              if (selectNW.lat !== selectSW.lat && selectNW.lng !== selectNE.lng && selectNW.lat !== -1000000 && isInMet(selectNW) && isInMet(selectNE) && isInMet(selectSW) && isInMet(selectSE)) {
                boundsSetDefaultMapView = [
                  [selectNW.lat, selectNW.lng],
                  [selectNE.lat, selectNE.lng],
                  [selectSE.lat, selectSE.lng],
                  [selectSW.lat, selectSW.lng],
                ]
                map.fitBounds(boundsSetDefaultMapView);
              }
              else setDefaultMapView();
            }
            else setDefaultMapView();
            function isInMet(selectPoint) {
              if(selectPoint.lat > 40 && selectPoint.lat < 50 && selectPoint.lng > -10 && selectPoint.lng < 10) return true;
              else return false;
            }
            if (tableFilterOn) $('#star_filter').css('display', 'block');
            else $('#star_filter').css('display', 'none');
            return contentLegendHtml;
          }
          if(typeof options.banner !== 'undefined') bannerCoord();
          function bannerCoord() {
            bannerCoord = L.control({
              //position: 'topright'
              position: 'bottomleft'
            });

            bannerCoord.onAdd = function(map) {
              var divBannerCoord = L.DomUtil.create('div', 'bannerCoord');
              divBannerCoord.innerHTML = options.banner;
              return divBannerCoord;
            };

            bannerCoord.addTo(map);
          }

          refreshMarkers();
          function refreshMarkers(refreshIndexEvent) {
            for (var i = 0; i < indexEvent.length; i++) {
              markers.removeLayer(indexEvent[i].marker);
            }
            if (typeof refreshIndexEvent === 'undefined') {
              refreshIndexEvent = [];
              for (i = 0; i < indexEvent.length; i++) {
                refreshIndexEvent.push(i)
                /*if (indexEvent[i]["selected"]) {
                  refreshIndexEvent.push(i)
                }*/
              }
            }
            var iconNum = [];
            for (var i = 0; i < refreshIndexEvent.length; i++) {
              iconNum.push(false);
              for (var k = 0; k < objectOverlays["overlays"].length; k++) {
                if (indexEvent[refreshIndexEvent[i]]["selected"] && objectOverlays["overlays"][k].isVisible && objectOverlays["affect"](indexEvent[refreshIndexEvent[i]]) == k) {
                  iconNum[i] = true;
                }
              }
              var marker = indexEvent[refreshIndexEvent[i]].marker
              //var icon = new L.Icon(indexEvent[refreshIndexEvent[i]].iconMarker)
              var icon = indexEvent[refreshIndexEvent[i]].iconMarker.icon.leaflet;
              marker.setIcon(icon);
              if (iconNum[i]) {
                markers.addLayer(marker);
              }
              else {
                markers.removeLayer(marker);
              }
            }
            return iconNum;
          }

          function loadMapPicture(option) {
            switch (option["typMap"]) {
              case "builDepts":
                loadClustering(option, option["data"]);
                break;
              case "builRegs":
                loadClustering(option, option["data"]);
                break;
              default:
                option["baseMaps"]['par défaut'] = L.tileLayer('');
            };
            function loadClustering(option) {
              // Constructeur de la carte TopoJSON avec pays pour LeafLet
              // ajout de l'échelle des couleurs pour les cartes TopoJSON
              if (option["typMap"] == "builDepts") {
                if (typeof options.controlLayers === 'undefined' || typeof options.controlLayers.controlMaps === 'undefined' || typeof options.controlLayers.controlMaps.gradeDepts === 'undefined')
                  //var grades = [0, 1, 3, 5, 7, 10, 15, 20];
                  var grades = [0, 20, 30, 40, 55, 60, 80, 90];
                else
                  var grades = options.controlLayers.controlMaps.gradeDepts;
                  var colorDeb = '#FFFF00';
                  var colorFin = '#FF0000';
                  var colorStyle = '#555';
              }
              else {
                if (typeof options.controlLayers === 'undefined' || typeof options.controlLayers.controlMaps === 'undefined' || typeof options.controlLayers.controlMaps.gradeRegs === 'undefined')
                  var grades = [0, 30, 50, 60, 70, 80, 90, 95];
                else
                  var grades = options.controlLayers.controlMaps.gradeRegs;
                  var colorDeb = '#91F3C8';
                  var colorFin = '#0260C6';
                  var colorStyle = '#555';
              }
              // ajout des couche départements et régions colorées TopoJSON
              loadMapTopoJSON(option);

              function loadMapTopoJSON(option) {
                // Usage:  Load different file types with one callback
                // Copyright (c) 2013 Ryan Clark
                // https://gist.github.com/rclark/5779673
                L.TopoJSON = L.GeoJSON.extend({
                  addData: function(jsonData) {
                    if (jsonData.type === "Topology") {
                      for (var key in jsonData.objects) {
                        var geojson = topojson.feature(jsonData, jsonData.objects[key]);
                        L.GeoJSON.prototype.addData.call(this, geojson);
                      }
                    }
                    else {
                      L.GeoJSON.prototype.addData.call(this, jsonData);
                    }
                  }
                });
                if (option["typMap"] == "builDepts") {
                  var topoFile = 'https://philquand.github.io/Javascript/LeafLet/json/deptsFranceData.json';
                }
                else {
                  var topoFile = 'https://philquand.github.io/Javascript/LeafLet/json/regsFranceData.json';
                }
                Promise.all([
                  // ressources utilisées pour construire la carte TopoSJON
                  load.js('https://philquand.github.io/Javascript/LeafLet/chroma.min.js'),
                  load.js('https://d3js.org/topojson.v1.min.js'),
                  // GeoJSON des départements et régions françaises
                  // d'après https://france-geojson.gregoiredavid.fr
                  load.json(topoFile),
                ]).then(
                  function(values) {
                    console.log('Everything has been loaded!');

                    var topoVal = loadVal(values, topoFile);

                    var topoLayer = new L.TopoJSON();
                    var colorScale = chroma
                      //.scale(['#D5E3FF', '#003171'])
                      .scale([colorDeb, colorFin])
                      .domain([0, 1]);
                    
                    var color_grades = []
                    for (var i = 0; i < grades.length; i++) {
                      color_grades.push(colorScale(i / grades.length).hex());
                      //console.log(color_grades[i]);
                    }
                    var enterPopup = 0;

                    var areaNumItems = {};
                    if (option["typMap"] == "builDepts") {
                       for (var idx = 0; idx < option["data"].length; idx++) {
                        if (typeof option["data"][idx]["département"] !== 'undefined') {
                          if (typeof areaNumItems[option["data"][idx]["département"]] === 'undefined') {
                            areaNumItems[option["data"][idx]["département"]] = [];
                          }
                          areaNumItems[option["data"][idx]["département"]].push(idx);
                        }
                      }
                      var areaType = "département"
                      var baseMapsName = "départements";
                    }
                    else {
                       for (var idx = 0; idx < option["data"].length; idx++) {
                        if (typeof option["data"][idx]["région"] !== 'undefined') {
                          if (typeof areaNumItems[option["data"][idx]["région"]] === 'undefined') {
                            areaNumItems[option["data"][idx]["région"]] = [];
                          }
                          areaNumItems[option["data"][idx]["région"]].push(idx);
                        }
                      }
                      var areaType = "région"
                      var baseMapsName = "régions";
                    }
                    addTopoData(topoVal);
                                        

                    function addTopoData(topoData) {

                       
                      topoLayer.addData(topoData);
                      //topoLayer.addTo(map);
                      
                      topoLayer.eachLayer(handleLayer);

                      option["legend"][baseMapsName] = L.control({
                        position: 'topright'
                      });
                      option["legend"][baseMapsName].onAdd = function(map) {

                        var min_areaNum = 10000000000, max_areaNum = 0, min_areaName, max_areaName;
                        topoLayer.eachLayer(MinMaxleLayer);
                        function MinMaxleLayer(layer) {
                          var areaName = layer.feature.properties.nom;
                          var inMarkers = getNumItems(areaName);
                          var areaNum = inMarkers.length;
                          if(areaNum > max_areaNum) {
                            max_areaNum = areaNum;
                            max_areaName = areaName;
                          } 
                          if(areaNum < min_areaNum) {
                            min_areaNum = areaNum;
                            min_areaName = areaName;
                          }
                        }  
                                              
                        topoLayer.eachLayer(colorleLayer);
                        function colorleLayer(layer) {
                          var areaName = layer.feature.properties.nom;
                          var inMarkers = getNumItems(areaName);
                          var areaNum = inMarkers.length;
                          var areaNum_loc = (areaNum - min_areaNum) * (100 / max_areaNum)
                          var fillColor = thisColor(areaNum_loc);
                          layer.setStyle({
                            fillColor: fillColor,
                            fillOpacity: 1,
                            color: colorStyle,
                            weight: 1,
                            opacity: .5
                          });
                        } 
                                               
                        var grades_loc = []
                        for (var i = 0; i < grades.length; i++) {
                          grades_loc.push(Math.floor(min_areaNum + grades[i]*(max_areaNum/100)));
                        }
                        
                        var div = L.DomUtil.create('div', 'info legend'), labels = [];

                        // loop through our density intervals and generate a label with a colored square for each interval
                        for (var i = grades.length - 1; i >= 0; i--) {
                          //for (var i = 0; i < grades.length; i++) {
                          //var legColor = thisColor(grades[i] + 1)
                          var legColor = thisColor(grades[i]);
                          div.innerHTML +=
                            '<i style="background-color:' + legColor + '"></i><span>' +
                            grades_loc[i] + (grades_loc[i + 1] ? '&ndash;' + grades_loc[i + 1] + '</span><br>' : '+</span><br>');
                        }
                        return div;
                      };

                    }

                    function thisColor(d) {
                      var nbMax = grades.length;
                      for (var i = nbMax - 1; i >= 0; i--) {
                        if (d >= grades[i]) {
                          /*var retColor = colorScale(i / nbMax).hex();
                          return retColor;*/
                          return color_grades[i]
                        }
                      }
                      return 'white';
                    }

                    /*map.on('overlayadd', function(eventLayer) {
                      if (eventLayer.name == 'départements' || eventLayer.name == 'régions') {
                        console.log('TEST : overlayadd : ' + eventLayer.name);
                      }
                    });
                    map.on('overlayremove', function(eventLayer) {
                      if (eventLayer.name == 'départements' || eventLayer.name == 'régions') {
                        console.log('TEST : overlayremove : ' + eventLayer.name);
                      }
                    });*/
                    map.on('baselayerchange', function(eventLayer) {
                      if (eventLayer.name !== 'départements' && eventLayer.name !== 'régions') {
                        //console.log('TEST : baselayerchange changing min_max : ' + eventLayer.name);
                      } else {
                        //console.log('TEST : baselayerchange : ' + eventLayer.name);
                      }
                    });
                    
                    function handleLayer(layer) {
                      //var randomValue = Math.random(),
                      var areaName = layer.feature.properties.nom;
                      var areaBounds = layer.getBounds();
                      // Create an element to hold all your text and markup
                      var container = $('<div />');
                      var areaEnterCode, areaBindPopup, inMarkers;

                      function handleLayer_maj(layer) {
                        var areaCode = layer.feature.properties.code;
                        var areaGeometry = layer.feature.geometry;
                        inMarkers = getNumItems(areaName);
                        var areaNum = inMarkers.length;
 

                        // Delegate all event handling for the container itself and its contents to the container
                        container.on('click', '.smallPolygonLink', function() {
                          enterPopup = areaName;
                          var myevent = layer["_events"];
                          var myclick = layer["_events"]["click"][0];
                          myclick["fn"]();
                        layer.unbindPopup();
                        });

                        container.html(dataPopUp);
                        function dataPopUp() {
                          if (baseMapsName === "départements") var banColor = '#FFDF04';
                          else var banColor = '#91F3C8';
                          var popupContent = $("<div></div>");
                          var popupBody = $("<div class='popBody'></div>");
                          popupContent.append(popupBody);
                          popupBody.append("<div class='popLieux' style='background-color:" + banColor + "'>" + areaName + "</div>");
                          //var popupLegend = $('#contentLegend span');
                          //var popupLegend = $('span.legendTitle');
                          var popupLegend = $('#menuLegend option:selected');
                          if (popupLegend.length > 0) {
                            popupLegend = popupLegend.text();
                            if(popupLegend === '') popupLegend='Établissements'
                            //popupLegend = popupLegend.substring(popupLegend.indexOf(' ') + 1);
                            popupLegend = popupLegend.toLowerCase();
                            switch (areaNum) {
                              case 0:
                                popupLegend = toSingular(popupLegend);
                                popupLegend = "<div class='popItem'><span class='popTitle'>Aucun " + popupLegend + " concern&#232;</span><br></div>"
                                break;
                              case 1:
                                popupLegend = toSingular(popupLegend);
                                popupLegend = "<div class='popItem'><span class='popTitle'>Un " + popupLegend + " concern&#232;</span><br></div>"
                                break;
                              default:
                                if (isFirstCons(popupLegend)) {
                                  popupLegend = "<div class='popItem'><span class='popTitle'>Nombre de " + popupLegend + " concern&#232;s</span><br><span class='popNum'>" + areaNum + "</span><br><span class='popNote'><a href='#infoMap-wrapper' class='smallPolygonLink'>clickez pour plus de détails</a></span></div>"
                                }
                                else {
                                  popupLegend = "<div class='popItem'><span class='popTitle'>Nombre d&#39;" + popupLegend + " concern&#232;s</span><br><span class='popNum'>" + areaNum + "</span><br><span class='popNote'><a href='#infoMap-wrapper' class='smallPolygonLink'>clickez pour plus de détails</a></span></div>"
                                }
                            };
                          }
                          else popupLegend = '';
                          popupBody.append(popupLegend);                          
                          return popupContent.html();
                        } 
                                               
                        function toSingular(popupLegend) {
                          popupLegend = popupLegend.replace("s ", " ");
                          if(popupLegend.endsWith("s")) popupLegend = popupLegend.slice(0, -1);
                          return popupLegend;
                        }
                        function isFirstCons(popupLegend){
                          var cons = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"]
                          for( var i in cons) {
                            if(popupLegend.startsWith(cons[i])) return true;
                          }
                          return false;
                        }
                        
                        // Insert whatever you want into the container, using whichever approach you prefer
                        //container.html(dataPopUp);
                        //var areaDataPopUp = container[0];

                        /*var fillColor = thisColor(areaNum);
                        layer.setStyle({
                          fillColor: fillColor,
                          //fillColor: getColor,
                          fillOpacity: 1,
                          color: colorStyle,
                          weight: 1,
                          opacity: .5
                        });*/

                      }
    
                      if ("ontouchstart" in document.documentElement) {
                        layer.on({
                          click: touchLayer,
                        });
                      }
                      else {
                        layer.on({
                          click: clickLayer,
                          //mouseover: enterLayer,
                          //mouseout: leaveLayer,
                         });
                      }

                      map.on('overlayadd', function(eventLayer) {
                        addingOverlay(eventLayer);
                      });
                      map.on('overlayremove', function(eventLayer) {
                        removingOverlay(eventLayer);
                      });
                      map.on('baselayerchange', function(eventLayer) {
                        changingOverlay(eventLayer);
                      });

                      function addingOverlay(eventLayer) {
                        //console.log('in loadMapTopoJSON adding : ' + eventLayer.name);
                        for (var k = 0; k < objectOverlays["overlays"].length; k++) {
                          if (objectOverlays["overlays"][k].title == eventLayer.name) {
                            objectOverlays["overlays"][k].isVisible = true;
                          };
                        };
                        handleLayer_maj(layer);
                        if (layer.options.fillOpacity == 0) refreshMarkers(refreshIndexEvent);
                      }

                      function removingOverlay(eventLayer) {
                        //console.log('in loadMapTopoJSON removing : ' + eventLayer.name);
                        for (var k = 0; k < objectOverlays["overlays"].length; k++) {
                          if (objectOverlays["overlays"][k].title == eventLayer.name) {
                            objectOverlays["overlays"][k].isVisible = false;
                          };
                        };
                        handleLayer_maj(layer);
                        if (layer.options.fillOpacity == 0) refreshMarkers(refreshIndexEvent);
                      }

                      function changingOverlay(eventLayer) {
                        //console.log('in loadMapTopoJSON adding : ' + eventLayer.name);
                        handleLayer_maj(layer);
                        if (layer.options.fillOpacity == 0) refreshMarkers(refreshIndexEvent);
                      }
                      
                      function touchLayer() {

                        //clickLayer()
                        this.bindPopup(areaPopup, {
                          setLatLng: areaBounds.getCenter(),
                          sticky: true,
                          maxHeight: 160,
                          maxWidth: 400,
                          minWidth: 250
                        }).openPopup();
                        this.getPopup().on('remove', function() {});
                      }

                      //function enterLayer() {}

                      function clickLayer() {
                        if (typeof onSetDefaultMapView !== 'undefined') onSetDefaultMapView();
                        if (enterPopup != areaName) {
                          //areaNum = getNumItems();
                          // Insert whatever you want into the container, using whichever approach you prefer
                          this.bindPopup(container[0]).openPopup();
                          var areaPopup = this.getPopup();
                          areaPopup.setLatLng(areaBounds.getCenter());
                          return;
                        }
                        map.closePopup();
                        refreshIndexEvent = inMarkers;
                        refreshMarkers(refreshIndexEvent);
                        layer.setStyle({
                          fillOpacity: 0
                        });
                        areaBindPopup = this['unbindPopup'];
                        if (typeof areaBindPopup !== 'undefined') {
                          this.unbindPopup();
                        }
                        enterPopup = 0;
                        option["map"].fitBounds(areaBounds, {
                          padding: [100, 100]
                        });
                        var _this = layer;
                        onSetDefaultMapView = function() {
                          //_this.getPopup().remove();
                          _this.setStyle({
                            fillOpacity: 1
                          });
                          //removeAreaMarkers();
                          refreshMarkers([]);
                        }
                      }

                      function leaveLayer() {
                        console.log('TEST leave layer');
                      }
                    }

                    function getNumItems(areaName) {
                      var inMarkers = [];
                      if (typeof areaNumItems !== 'undefined') {
                        if (typeof areaNumItems[areaName] !== 'undefined') {
                          for (var idx = 0; idx < areaNumItems[areaName].length; idx++) {
                            if (indexEvent[areaNumItems[areaName][idx]]["selected"]) inMarkers.push(areaNumItems[areaName][idx]);
                          }
                        }
                      }
                      else {
                        for (var idx = 0; idx < option["data"].length; idx++) {
                          if (indexEvent[idx]["selected"] && inside([option["data"][idx].lng, option["data"][idx].lat], areaGeometry)) {
                            inMarkers.push(idx);
                            d += 1;
                          }
                        }
                      }
                      return inMarkers;

                      function inside(point, TopoGeom) {
                        var insideVal = false;
                        if (TopoGeom["type"] == "MultiPolygon") {
                          for (var i = 0; i < TopoGeom["coordinates"].length; i++) {
                            var polygon = TopoGeom["coordinates"][i][0];
                            // Le point est-il dans le polygone
                            if (isInsidePolygon(point, polygon)) {
                              insideVal = true;
                              for (var j = 1; j < TopoGeom["coordinates"][i].length; j++) {
                                var polygon = TopoGeom["coordinates"][i][j];
                                // Le point est-il dans l'un des trous du polygone
                                if (isInsidePolygon(point, polygon)) {
                                  insideVal = false;
                                }
                              }
                            }
                          }
                        }
                        else {
                          var polygon = TopoGeom["coordinates"][0];
                          // Le point est-il dans le polygone
                          if (isInsidePolygon(point, polygon)) {
                            insideVal = true;
                            for (var j = 1; j < TopoGeom["coordinates"].length; j++) {
                              var polygon = TopoGeom["coordinates"][j];
                              // Le point est-il dans l'un des trous du polygone
                              if (isInsidePolygon(point, polygon)) {
                                insideVal = false;
                              }
                            }
                          }
                        }

                        return insideVal;
                        // ray-casting algorithm based on
                        // https://github.com/substack/point-in-polygon/blob/master/index.js

                        function isInsidePolygon(point, vs) {
                          var x = point[0],
                            y = point[1];

                          var inside = false;
                          for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
                            var xi = vs[i][0],
                              yi = vs[i][1];
                            var xj = vs[j][0],
                              yj = vs[j][1];

                            var intersect = ((yi > y) != (yj > y)) &&
                              (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
                            if (intersect) inside = !inside;
                          }

                          return inside;

                        }
                      }
                    }

                    option["baseMaps"][baseMapsName] = topoLayer;
                    if (typeof option["callback"] == 'undefined') {
                      if (option["typMap"] == "builDepts") {
                        if (typeof option["map"] !== 'undefined') option["baseMaps"]['départements'].addTo(option["map"]);
                      }
                      else {
                        if (typeof option["map"] !== 'undefined') option["baseMaps"]['régions'].addTo(option["map"]);
                      }
                    }
                    else option["callback"](option);

                  }
                )
                /*.catch(function() {
                                console.log('Oh no, epic failure!');
                              });*/
              };
            };
          };

          var searchControl = L.esri.Geocoding.geosearch().addTo(map);

          var results = L.layerGroup().addTo(map);

          var redIcon = new L.Icon({
            iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [13, 20],
            iconAnchor: [6, 20],
            popupAnchor: [1, -17],
            shadowSize: [20, 20]
          });
          searchControl.on('results', function(data) {
            results.clearLayers();
            for (var i = data.results.length - 1; i >= 0; i--) {
              results.addLayer(L.marker(data.results[i].latlng, {
                icon: redIcon
              }));
            }
          });

          return map;
          // Constructeur de la carte LeafLet
          function loadMap(idMap) {
            L.map(idMap).remove();
            var map = L.map(idMap);
            switch (options.fondCarte) {
              case 'IGN':
                loadIGN();

                function loadIGN() {
                  var layer = L.tileLayer('https://wxs.ign.fr/{ignApiKey}/geoportail/wmts?' +
                    '&REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&TILEMATRIXSET=PM' +
                    '&LAYER={ignLayer}&STYLE={style}&FORMAT={format}' +
                    '&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}', {
                      ignApiKey: 'decouverte',
                      ignLayer: 'GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2',
                      style: 'normal',
                      format: 'image/png',
                      service: 'WMTS',
                      opacity: 1.
                    });
                  layer.addTo(map);
                };                
                break;
              case 'mapbox':
                loadMapbox();

                function loadMapbox() {
                  // Usage:  Load different file types with one callback
                  Promise.all([
                    // Début ressources utilisées pour construire la carte MapBox
                    load.js('https://api.mapbox.com/mapbox-gl-js/v2.0.1/mapbox-gl.js'),
                    load.css('https://api.mapbox.com/mapbox-gl-js/v2.0.1/mapbox-gl.css'),
                    load.js('https://unpkg.com/mapbox-gl-leaflet/leaflet-mapbox-gl.js'),
                    // Fin ressources utilisées pour construire la carte mondiale colorée MapBox

                  ]).then(
                    function() {
                      console.log('Everything has loaded!');

                      var mapboxAccessToken = 'pk.eyJ1IjoicGhpbHF1YW5kIiwiYSI6ImNraTRyZ2d0ZTBzamEycXN5dzcybW00OHQifQ.wAs5l5LUQbq7lcSBNwHOLA';

                      /*
                      // Downsample tiles for faster load times on slow internet connections by
                      // adjusting the format property in styleLayer. See
                      // https://docs.mapbox.com/api/maps/#static-tiles for all format options.
                      L.mapbox.styleLayer('mapbox://styles/mapbox/streets-v11', {
                        tileLayer: {
                          format: 'jpg70'
                        }
                      }).addTo(map);
                      */
                      var layer = L.mapboxGL({
                        accessToken: mapboxAccessToken,
                        // get your own MapTiler token at https://cloud.maptiler.com/ or use MapBox style
                        //style: 'https://api.maptiler.com/maps/basic/style.json?key=gbetYLSD5vR8MdtZ88AQ'
                        style: 'mapbox://styles/mapbox/streets-v11',
                      });
                      layer.addTo(map);
                    }).catch(function() {
                    console.log('Oh no, epic failure!');
                  });
                };
                break;
              default:
                var layer = new L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                  attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                })
                layer.addTo(map);
            }

            map.addControl(new L.Control.Fullscreen({
              title: {
                'false': 'Voir en plein écran',
                'true': 'Quitter le plein écran'
              }
            }));

            // `fullscreenchange` Event that's fired when entering or exiting fullscreen.
            map.on('fullscreenchange', function() {
              if (map.isFullscreen()) {
                map.setZoom(7);
              }
              else {
                setDefaultMapView();
              }
            });
            
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

        function endMarkerBuild(indexEvent) {
          /*for (i = 0; i < indexEvent.length; i++) {
            for (k = 0; k < iconMarkersLength; k++) {
              if (indexEvent[i].iconMarker.class == iconMarkers[k].class) {
                iconMarkers[k].nbMapEvents++;
              }
            }
            marker = makePopUp(indexEvent[i], setCallBack);
            markers.addLayer(marker);
          }*/

          Promise.all([
            //  chargements des dépendances css
            load.css('https://cdn.jsdelivr.net/npm/leaflet-easybutton@2/src/easy-button.css'),
            load.css('https://use.fontawesome.com/releases/v5.0.6/css/all.css'),
            //  chargements des dépendances js
            load.js('https://cdn.jsdelivr.net/npm/leaflet-easybutton@2/src/easy-button.js'),
            //load.js('https://philquand.github.io/Javascript/LeafLet/leaflet-button/L.Control.Button.js'),
          ]).then(
            function() {
              console.log('Everything has loaded!');

              var defaultViewButton = L.easyButton({
                states: [{
                  stateName: 'default-view', // name the state
                  icon: 'fa-home', // and define its properties
                  title: 'vue par défaut', // like its title
                  onClick: function(btn, map) { // and its callback
                    setDefaultMapView();
                  }
                }]
              });
              defaultViewButton.addTo(map);

              checkautresDepts(map, indexEvent);

            }
          ).catch(function() {
            console.log('Oh no, epic failure!');
          });
        };

        function checkautresDepts(map, indexEvent) {
          var autresDepts = [{
              name: 'Corse',
              bounds: L.latLngBounds([
                [43.07, 8.39],
                [41.29, 9.74]
              ]),
              hasevents: false
            },
            {
              name: 'Martinique',
              bounds: L.latLngBounds([
                [14.905, -61.500],
                [14.377, -60.762]
              ]),
              hasevents: false
            },
            {
              name: 'Guadeloupe',
              bounds: L.latLngBounds([
                [16.5572, -61.971],
                [15.7881, -60.946]
              ]),
              hasevents: false
            },
            {
              name: 'Guyane',
              bounds: L.latLngBounds([
                [6.16, -55.08],
                [1.88, -51.16]
              ]),
              hasevents: false
            },
            {
              name: 'LaRéunion',
              bounds: L.latLngBounds([
                [-19.6496, 54.5825],
                [-21.6107, 58.1036]
              ]),
              hasevents: false
            },
            {
              name: 'Hexagone',
              bounds: L.latLngBounds([
                [50.10, 2.47],
                [48.37, -4.16],
                [43.38, -1.85],
                [42.47, 3.16],
                [43.80, 7.96],
                [47.03, 8.08]
              ]),
              hasevents: false
            }
          ];
          autresDepts = checkautresDeptsBounds(autresDepts, indexEvent);
          var states = [];
          boundsSetDefaultMapView = [];
          //$('.leaflet-control-layers.leaflet-control').css('visibility', 'hidden');
          for (var i = 0; i < autresDepts.length; i++) {
            if (!autresDepts[i].hasevents) continue

            if (autresDepts[i].name == 'Hexagone') $('.leaflet-control-layers.leaflet-control').css('visibility', 'visible');

            /*var northEast = autresDepts[i].bounds.getNorthEast();
            var southWest = autresDepts[i].bounds.getSouthWest();
            boundsSetDefaultMapView = [
              [northEast.lat, northEast.lng],
              [southWest.lat, southWest.lng]
            ];*/

            var localState = {};
            localState.stateName = autresDepts[i].name; // name the state
            j = i;
            do {
              j = j + 1;
              if (j == autresDepts.length) j = 0;
            }
            while (!autresDepts[j].hasevents);
            localState.nextStateName = autresDepts[j].name; // name of the next state
            localState.icon = 'fa-plane'; // and define its properties
            switch (autresDepts[i].name) {
              case 'Corse':
                boundsSetDefaultMapView = [
                  [42.19, 9.08]
                ];
                localState.title = 'vol vers la Corse'; // like its title
                localState.onClick = function(btn, map) { // and its callback
                  /*boundsSetDefaultMapView = [
                    [43.07, 9.74],
                    [41.29, 8.39]
                  ];*/
                  $('.leaflet-control-layers.leaflet-control').css('visibility', 'hidden');
                  boundsSetDefaultMapView = [
                    [42.19, 9.08]
                  ];
                  setMapView();
                  for (var j = 0; j < btn.options.states.length; j++) {
                    if (btn._currentState.stateName == btn.options.states[j].stateName) {
                      btn.state(btn.options.states[j].nextStateName); // change state on click!
                      break;
                    }
                  }
                };
                break;
              case 'Martinique':
                boundsSetDefaultMapView = [
                  [14.7297, -60.9655]
                ];
                localState.title = 'vol vers la Martinique'; // like its title
                localState.onClick = function(btn, map) { // and its callback
                  /*boundsSetDefaultMapView = [
                    [14.90, -60.76],
                    [14.38, -61.50]
                  ];*/
                  $('.leaflet-control-layers.leaflet-control').css('visibility', 'hidden');
                  boundsSetDefaultMapView = [
                    [14.7297, -60.9655]
                  ];
                  setMapView();
                  for (var j = 0; j < btn.options.states.length; j++) {
                    if (btn._currentState.stateName == btn.options.states[j].stateName) {
                      btn.state(btn.options.states[j].nextStateName); // change state on click!
                      break;
                    }
                  }
                };
                break;
              case 'Guadeloupe':
                boundsSetDefaultMapView = [
                  [16.228, -61.526]
                ];
                localState.title = 'vol vers la Guadeloupe'; // like its title
                localState.onClick = function(btn, map) { // and its callback
                  /*boundsSetDefaultMapView = [
                    [16.56, -60.95],
                    [15.79, -61.97]
                  ];*/
                  $('.leaflet-control-layers.leaflet-control').css('visibility', 'hidden');
                  boundsSetDefaultMapView = [
                    [16.228, -61.526]
                  ];
                  setMapView();
                  for (var j = 0; j < btn.options.states.length; j++) {
                    if (btn._currentState.stateName == btn.options.states[j].stateName) {
                      btn.state(btn.options.states[j].nextStateName); // change state on click!
                      break;
                    }
                  }
                };
                break;
              case 'Guyane':
                boundsSetDefaultMapView = [
                  [3.945, -53.13]
                ];
                localState.title = 'vol vers la Guyane'; // like its title
                localState.onClick = function(btn, map) { // and its callback
                  /*boundsSetDefaultMapView = [
                    [6.16, -51.16],
                    [1.88, -55.03]
                  ];*/
                  $('.leaflet-control-layers.leaflet-control').css('visibility', 'hidden');
                  boundsSetDefaultMapView = [
                    [3.945, -53.13]
                  ];
                  setMapView();
                  for (var j = 0; j < btn.options.states.length; j++) {
                    if (btn._currentState.stateName == btn.options.states[j].stateName) {
                      btn.state(btn.options.states[j].nextStateName); // change state on click!
                      break;
                    }
                  }
                };
                break;
              case 'LaRéunion':
                boundsSetDefaultMapView = [
                  [-20.887, 55.455]
                ];
                localState.title = 'vol vers la Réunion'; // like its title
                localState.onClick = function(btn, map) { // and its callback
                  /*boundsSetDefaultMapView = [
                    [-19.65, 58.10],
                    [-21.61, 54.58]
                  ];*/
                  $('.leaflet-control-layers.leaflet-control').css('visibility', 'hidden');
                  boundsSetDefaultMapView = [
                    [-20.887, 55.455]
                  ];
                  setMapView();
                  for (var j = 0; j < btn.options.states.length; j++) {
                    if (btn._currentState.stateName == btn.options.states[j].stateName) {
                      btn.state(btn.options.states[j].nextStateName); // change state on click!
                      break;
                    }
                  }
                };
                break;
              default:
                boundsSetDefaultMapView = [
                  [50.10, 8.08],
                  [42.47, -4.16]
                ];
                localState.title = "retour vers l'Hexagone"; // like its title
                localState.bounds = autresDepts[i].bounds;
                localState.onClick = function(btn, map) { // and its callback
                  $('.leaflet-control-layers.leaflet-control').css('visibility', 'visible');
                  boundsSetDefaultMapView = [
                    [50.10, 8.08],
                    [42.47, -4.16]
                  ];
                  setMapView();
                  for (var j = 0; j < btn.options.states.length; j++) {
                    if (btn._currentState.stateName == btn.options.states[j].stateName) {
                      btn.state(btn.options.states[j].nextStateName); // change state on click!
                      map.flyToBounds(btn.options.states[j].bounds);
                      break;
                    }
                  }
                };
            }
            states.push(localState);
          }
          if (typeof stateChangingButton !== 'undefined') stateChangingButton.remove()
          if (states.length > 1) {
            stateChangingButton = L.easyButton({
              states: states
              /*[{
                      stateName: 'zoom-to-forest',        // name the state
                      icon:      'fa-plane',               // and define its properties
                      title:     'zoom to a forest',      // like its title
                      onClick: function(btn, map) {       // and its callback
                          map.setView([46.25,-121.8],10);
                          btn.state('zoom-to-school');    // change state on click!
                      }
                  }, {
                      stateName: 'zoom-to-school',
                      icon:      'fa-paper-plane',
                      title:     'zoom to a school',
                      onClick: function(btn, map) {
                          map.setView([42.3748204,-71.1161913],16);
                          btn.state('zoom-to-forest');
                      }
              }]*/
            });

            stateChangingButton.addTo(map);
          }
          else if (states[0].stateName !== 'Hexagone') $('.leaflet-control-layers.leaflet-control').css('visibility', 'hidden');


          function checkautresDeptsBounds(autresDepts, indexEvent) {
            for (i = 0; i < indexEvent.length; i++) {
              for (k = 0; k < autresDepts.length; k++) {
                if (indexEvent[i]["selected"] && autresDepts[k].bounds.contains(indexEvent[i])) {
                  autresDepts[k].hasevents = true;
                }
              }
            }
            return autresDepts;
          };

        };
        var map_invalidateSize = function() {
          map.invalidateSize();
          $('.leaflet-control-layers-overlays .leaflet-control-layers-selector').trigger('click')
          $('.leaflet-control-layers-overlays .leaflet-control-layers-selector').trigger('click')
        }
        $('.leaflet-control-zoom').wrap('<div class="topLeftControls"></div>');
        $('.geocoder-control.leaflet-control').appendTo($('.topLeftControls'));
        return map_invalidateSize
      }

      var runButtonForTable = function() {
        if (typeof options.popupData.properties !== 'undefined' || typeof options.tableData !== 'undefined') {
          var btData = $('<button type="button" class="styled" id="btData"></button>')
          $("#infoMap-wrapper").prepend(btData);
          btData.click(function(e) {
            if ($('#btData').html() == 'Carte') {
              btDataCarte(map_invalidateSize);
            }
            else {
              btDataTable();
            }
          });
          btDataCarte(map_invalidateSize);

          function btDataTable() {
            $('#btData').html('Carte');
            //$('#infoMap-wrapper > :not(#btData)').css('display', 'none')
            $('#infoMap-wrapper > #infoMap').css('display', 'none')
            $('#table_wrapper').css('display', 'block')
            //if(tableFilterOn) $('.dt-button.reinitBT').css('visibility', 'visible');
            $('#star_filter').css('display', 'none');
            //$('#table').css('display', 'block')
          }

          function btDataCarte(map_invalidateSize) {
            $('#btData').html('Données');
            //$('#infoMap-wrapper > :not(#btData)').css('display', 'block')
            $('#infoMap-wrapper > #infoMap').css('display', 'block')
            map_invalidateSize();
            $('#table_wrapper').css('display', 'none')
            //$('.dt-button.reinitBT').css('visibility', 'hidden')
          }
          $('#infoMap-wrapper').prepend('<a href="#fancy-box-dataAide-1"><button type="button" class="styled helpBT" id="btAide">Aide</button></a>');
          /*$('#btAide').click(function(e) {
            $.fancybox.open({
              src: 'https://philquand.github.io/Javascript/Blog-widgets/Collectif%20Sant%C3%A9%2037/FermeturesHopitaux/Distributions%20v5/Doc%20version%205.06.html',
              type: 'iframe',
              //modal: true
            });
          });*/          
          //runTable();
        }
      };
      function runTable() {

        var tableColums = [];
        if (jQuery.type(options.tableData) !== 'undefined' && jQuery.type(options.tableData.properties) !== 'undefined') {
          var columns = [];
          var Filters = [];
          var properties = options.tableData.properties;
          for (var i = 0; i < properties.length; i++) {
            if (jQuery.type(properties[i]['name']) === 'string') {
              if (jQuery.type(properties[i]['title']) === 'string') {    
                var title = properties[i]['title'];
              } else {
                var title = properties[i]['name'];
              }
              columns.push({
                data: properties[i]['name'],
                title: title,
                defaultContent: '',
                //selectable: false
              });
              if (jQuery.type(properties[i]['filter']) !== 'undefined') {
                var item = {};
                if (properties[i]['filter'] == 'selection') {
                  item['column_number'] = i;
                  item['omit_default_label'] = true;
                  item['data'] = ["Sélectionnez"];
                  item['append_data_to_table_data'] = "before";
                  item['filter_match_mode'] = "exact";
                  item['filter_reset_button_text'] = false;
                  item['filter_type'] = 'custom_func';
                  item['custom_func'] = (filterVal, columnVal, rowValues, stateVal) => {
                    /*if(filterVal !== "Sélectionnez" || columnVal === "-1") {
                      console.log('test...');
                    }*/
                    if (columnVal === filterVal || "Sélectionnez" === filterVal) {
                      var myFilter = true;
                    }
                    else {
                      var myFilter = false;
                    };
                    for (var i = 0; i < indexEventTable.length; i++) {
                      if (indexEventTable[i]["id"] === stateVal["id"]) {
                        indexEventTable[i]["selected"] = myFilter;
                        $('.dt-button.reinitBT').css('visibility', 'visible');
                        tableFilterOn = true;
                      }
                    }
                    return myFilter;
                  };
                }
                else if (jQuery.isNumeric(properties[i]['filter']) && jQuery.isArray(options.tableData['filters']) && (properties[i]['filter'] < options.tableData['filters'].length)) {
                  if (jQuery.isFunction(options.tableData['filters'][properties[i]['filter']]['func']) && jQuery.isArray(options.tableData['filters'][properties[i]['filter']]['data'])) {
                    item['column_number'] = i;
                    item['filter_reset_button_text'] = false;
                    item['filter_type'] = 'custom_func';
                    Filters[properties[i]['filter']] = options.tableData['filters'][properties[i]['filter']];
                    item['custom_func'] = (filterVal, columnVal, rowValues, stateVal) => {
                    var myFilter = Filters[parseInt(filterVal.split(":")[0])]['func'];
                    if(myFilter(filterVal, columnVal, rowValues, stateVal)) {
                      var myFilterValue = myFilter(filterVal, columnVal, rowValues, stateVal);
                    } else {
                      var myFilterValue = myFilter(filterVal, columnVal, rowValues, stateVal);
                    }
                    for (var i = 0; i < indexEventTable.length; i++) {
                      if (indexEventTable[i]["id"] === stateVal["id"]) {
                        indexEventTable[i]["selected"] = myFilterValue;
                        $('.dt-button.reinitBT').css('visibility', 'visible');
                        tableFilterOn = true;
                      }
                    }
                    return myFilterValue;
                    };
                    item['data'] = options.tableData['filters'][properties[i]['filter']]['data'];
                  }
                } else {
                    item['column_number'] = i;
                    item['select_type'] = "chosen";
                }
                if (jQuery.type(item) !== 'undefined') {
                  item['defaultContent'] = '';
                  tableColums.push(item);
                }
              };
            }
          };
        }
        else {
          var item = options.popupData.title;
          if (typeof item === 'undefined') {
            var columns = [];
          }
          else {
            var columns = [{
              data: item,
              title: item,
              defaultContent: '',
              //selectable: true
            }];
          }
          for (i = 0; i < options.popupData.properties.length; i++) {
            var item = options.popupData.properties[i];
            columns.push({
              data: item,
              title: item,
              defaultContent: '',
              //selectable: false
            });
          }
        }
        var initComplete = function() {
          //New datatable API (capital "D")
          var myTable = $(this).DataTable();
          yadcf.init(myTable, tableColums);
          //$("#table_length label select").appendTo("#table_length label");
          $("#table_length label select").appendTo("#table_length");
          $("#table_length label").text("Nb. d'éléments affichés");
          if (tableFilterOn) $('.dt-button.reinitBT').css('visibility', 'visible');
          else $('.dt-button.reinitBT').css('visibility', 'hidden');
          $('.dt-button.helpBT').css('display', 'none');

          var properties = options.tableData.properties;
          for (var i = 0; i < properties.length; i++) {
            var min_width = properties[i]['min_width']
            if (jQuery.type(min_width) !== 'undefined' && jQuery.type(properties[i]['name']) === 'string') {
              if (jQuery.type(properties[i]['title']) === 'string') {
                var title = properties[i]['title'];
              }
              else {
                var title = properties[i]['name'];
              }
             $('#table th:contains('+ title + ')').css('min-width', min_width);
            }
          }
        }       

        tableFilterOn = false;
        $('#table').DataTable({
          destroy: true,
          data: indexEventTable,
          "language": {
            "url": "//cdn.datatables.net/plug-ins/1.10.22/i18n/French.json"
          },
          columns: columns,
          initComplete: initComplete,
          dom: 'Blfrtip',
          buttons: [{
              text: 'aide',
              className: 'helpBT',
              action: function(e, dt, node, config) {
                // voir https://obu.edu/_resources/ldp/galleries/fancybox/#usage                   
                //$.fancybox.open('<div class="message"><h2>Hello!</h2><p>You are awesome!</p></div>');
                /*$.fancybox.open({
                  src: '<div class="message"><h2>Lorem ipsum</h2><p>Praesent ut sapien ultricies, lobortis lorem a, viverra odio. Cras dapibus, tellus sed volutpat dignissim, mi augue finibus libero, sit amet sollicitudin arcu velit id diam. Aliquam placerat, dui a ultrices malesuada, libero tortor varius felis, ultrices fermentum arcu mauris in odio. Cras fermentum justo ac tortor bibendum molestie.</p></div>',
                  type: 'html',
                  smallBtn: false
                });*/              
                /*$.fancybox.open({
                  src: '<div class="message"><h2>Lorem ipsum</h2><p>Praesent ut sapien ultricies, lobortis lorem a, viverra odio. Cras dapibus, tellus sed volutpat dignissim, mi augue finibus libero, sit amet sollicitudin arcu velit id diam. Aliquam placerat, dui a ultrices malesuada, libero tortor varius felis, ultrices fermentum arcu mauris in odio. Cras fermentum justo ac tortor bibendum molestie.</p><p><button data-fancybox-close class="btn">Close me</button></p></div>',
                  type: 'html',
                  modal: true
                });*/              
                $.fancybox.open({
                  src: '<div class="message"><h2>Lorem ipsum</h2><p>Praesent ut sapien ultricies, lobortis lorem a, viverra odio. Cras dapibus, tellus sed volutpat dignissim, mi augue finibus libero, sit amet sollicitudin arcu velit id diam. Aliquam placerat, dui a ultrices malesuada, libero tortor varius felis, ultrices fermentum arcu mauris in odio. Cras fermentum justo ac tortor bibendum molestie.</p><p><button data-fancybox-close class="btn">Close me</button></p></div>',
                  type: 'html',
                  modal: true
                });              
              }
            },
            {
              extend: 'csv',
              //Name the CSV
              filename: 'file_name',
              //text: 'Export CSV',
              className: 'csvBT',
              //Function which customize the CSV (input : csv is the object that you can preprocesss)
              customize: function(csv) {
                //Split the csv to get the rows
                var split_csv = csv.split("\n");

                //Remove the row one to personnalize the headers
                //split_csv[0] = '"Latitude","Longitude","Site Name","Description","Antenna Height","Antenna gain","Env loss","Candidate"';
                split_csv[0] = ''
                for (var i = 0; i < properties.length; i++) {
                  if (jQuery.type(properties[i]['name']) === 'string') {
                    if (jQuery.type(properties[i]['title']) === 'string') {
                      var title = properties[i]['title'];
                    }
                    else {
                      var title = properties[i]['name'];
                    }
                  }
                  if (i == 0) split_csv[0] += '"' + title + '"'
                  else split_csv[0] += ',"' + title + '"'
                }

                //For each row except the first one (header)
                $.each(split_csv.slice(1), function(index, csv_row) {
                  //Split on quotes and comma to get each cell
                  var csv_cell_array = csv_row.split('","');

                  //Join the table on the quotes and comma; add back the quotes at the beginning and end
                  csv_cell_array_quotes = csv_cell_array.join('","');

                  //Insert the new row into the rows array at the previous index (index +1 because the header was sliced)
                  split_csv[index + 1] = csv_cell_array_quotes;
                });

                //Join the rows with line breck and return the final csv (datatables will take the returned csv and process it)
                csv = split_csv.join("\n");
                return csv;
              }
            },
            {
              text: 'réinit.',
              className: 'reinitBT',
              action: function(e, dt, node, config) {

                for (var i = 0; i < indexEventTable.length; i++) {
                  if (jQuery.type(options.legend) !== 'undefined' && jQuery.type(options['legend'][menuLegend].filter) !== 'undefined' && jQuery.type(options['legend'][menuLegend].filter.func) !== 'undefined') {
                    if (options['legend'][menuLegend].filter.func(indexEventTable[i])) {
                      indexEventTable[i]["selected"] = true;
                    }
                    else {
                      indexEventTable[i]["selected"] = false;
                    }
                  }
                  else {
                    indexEventTable[i]["selected"] = true;
                  }
                }
                yadcf.exResetAllFilters(dt);
                for (var i = 0; i < properties.length; i++) {
                  if (jQuery.type(properties[i]['filter']) !== 'undefined') {
                    if (properties[i]['filter'] == 'selection') {
                      yadcf.exFilterColumn(dt, [
                        [i, "Sélectionnez"]
                      ]);
                    }
                  }
                }
                tableFilterOn = false;
                $('.dt-button.reinitBT').css('visibility', 'hidden');
              }
            },
          ],
        });
      };
    };
  }
};
})(jQuery);