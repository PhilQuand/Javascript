this["options"] = {
  "storedData": "https://philquand.github.io/Javascript/Blog-widgets/Collectif Santé 37/FermeturesHopitaux/testInnerFormedData.json",
  "popupData": {
    "title": "COMMUNE",
    "hidden": [
      "LATITUDE",
      "LONGITUDE",
      "INSEE",
      "lat",
      "lng",
      "iconMarker"
    ]
  },
  "controlOverlays": {
    "title": "Établissements avec",
    "overlays": [
      {
        "title": "suppressions",
        "isInGroup": data =&gt; {
            return isOKString(data['SUPPRESSIONS']);
          }
      },
      {
        "title": "menaces",
        "isInGroup": function (data) {
            return isOKString(data['MENACES']);
          }
      },
      {
        "title": "autres",
        "isInGroup": data =&gt; {
            if (!isOKString(data['SUPPRESSIONS']) &amp;&amp; !isOKString(data['MENACES'])) {
              return true;
            }
            else return false;
          }
      }
    ]
  },
  "legend": {
    "title": "Établissements avec",
    "test": function (){},
    "affect": function (data) {
        if (isOKString(data['SUPPRESSIONS']) || isOKString(data['MENACES'])) {
          return 0;
        }
        else {
          return 1;
        }
      },
    "icons": [
      {
        "icon": {
          "options": {
            "iconUrl": "https://philquand.github.io/Javascript/LeafLet/Leaflet-color-markers/img/marker-icon-2x-violet.png",
            "shadowUrl": "https://philquand.github.io/Javascript/LeafLet/Leaflet-color-markers/img/marker-shadow.png",
            "iconSize": [
              13,
              20
            ],
            "iconAnchor": [
              6,
              20
            ],
            "popupAnchor": [
              1,
              -17
            ],
            "shadowSize": [
              20,
              20
            ]
          },
          "_initHooksCalled": true
        },
        "title": "suppressions ou menaces"
      },
      {
        "icon": {
          "options": {
            "iconUrl": "https://philquand.github.io/Javascript/LeafLet/Leaflet-color-markers/img/marker-icon-2x-blue.png",
            "shadowUrl": "https://philquand.github.io/Javascript/LeafLet/Leaflet-color-markers/img/marker-shadow.png",
            "iconSize": [
              13,
              20
            ],
            "iconAnchor": [
              6,
              20
            ],
            "popupAnchor": [
              1,
              -17
            ],
            "shadowSize": [
              20,
              20
            ]
          },
          "_initHooksCalled": true
        },
        "title": "autres"
      }
    ]
  }
}