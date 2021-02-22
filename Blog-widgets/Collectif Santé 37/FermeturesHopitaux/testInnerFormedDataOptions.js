this["options"] = {
  //data: 'https://philquand.github.io/Javascript/Blog-widgets/Collectif Santé 37/FermeturesHopitaux/testInnerFormedData.json',
    popupData : {
      title: 'COMMUNE',
      properties: ["LIEUX", "SUPPRESSIONS", "MENACES", "Pertes lits", "Pertes postes"]
    },
    tableData: {
      properties: [{
        name: 'COMMUNE',
        filter: 'selection'
      }, {
        name: 'LIEUX',
        filter: 0
      }, {
        name: 'SUPPRESSIONS',
        filter: 0
      }, {
        name: 'MENACES',
        filter: 0
      }, {
        name: 'Pertes lits',
        filter: 0
      }, {
        name: 'Pertes postes',
        filter: 0
      }],
      filters: [{
        data: [{
          value: 'avec valeur',
          label: 'Avec valeur'
        }, {
          value: 'sans valeur',
          label: 'Sans valeur'
        }],
        func: (filterVal, columnVal) => {
          switch (filterVal) {
            case 'sans valeur':
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
      }]
    },
    controlLayers: {
      controlMaps: true,
      controlOverlays: {
        title: 'Établissements avec',
        overlays: [{
            title: 'suppressions',
            isInGroup: data => {
              return isOKString(data['SUPPRESSIONS']);
            }
          },
          {
            title: 'menaces',
            isInGroup: function(data) {
              return isOKString(data['MENACES']);
            }
          },
          {
            title: 'autres',
            isInGroup: data => {
              if (!isOKString(data['SUPPRESSIONS']) && !isOKString(data['MENACES'])) {
                return true;
              }
              else return false;
            }
          },
        ]
      }
    },
    legend: {
      title: 'Établissements avec',
      test: function(){},
      affect: function(data) {
        if (isOKString(data['SUPPRESSIONS']) || isOKString(data['MENACES'])) {
          return 0;
        }
        else {
          return 1;
        }
      },
      icons: [{
        icon: {leaflet: new L.Icon({
          iconUrl: 'https://philquand.github.io/Javascript/LeafLet/Leaflet-color-markers/img/marker-icon-2x-violet.png',
          shadowUrl: 'https://philquand.github.io/Javascript/LeafLet/Leaflet-color-markers/img/marker-shadow.png',
          iconSize: [13, 20],
          iconAnchor: [6, 20],
          popupAnchor: [1, -17],
          shadowSize: [20, 20]
        })},
        title: 'suppressions ou menaces',
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
        colorBG: '#2781CA',
        colorFG: '#FFFFFF',
      }]
    },
  }; 