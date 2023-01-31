this["options"] = {
  //changeControls: false,	
  mapPresentation: '<center><p style="font-weight:bold; margin-bottom: 0">Des urgences malmenées sur les 20 dernières années 2003-2023</p><p style="font-weight:bold; margin-top: 0">(données soumises actuellement à modifications et enrichissements)</p><p>Ce n&rsquo;est qu&rsquo;un exemple de ce que les cartes interactives des atteintes au service public hospitalier de la Coordination mettent en &eacute;vidence.</p><p>Allez voir sur notre site&nbsp;: <a href="http://coordination-defense-sante.org/la-carte-des-fermetures-de-services-hospitaliers/">carte des fermetures de services hospitaliers</a></p></center>',
  //mapPresentation: '<center><p style="font-weight:bold">Carte des établissements hospitaliers dont le service des urgences a été dégradé (suppresions, interruptions, menaces de fermeture)</p><p>Ce n&rsquo;est qu&rsquo;un exemple de ce que les cartes interactives des atteintes au service public hospitalier de la Coordination mettent en &eacute;vidence.</p><p>Allez voir sur notre site&nbsp;: <a href="http://coordination-defense-sante.org/la-carte-des-fermetures-de-services-hospitaliers/">carte des fermetures de services hospitaliers</a></p></center>',
  //mapBounds : {northEast: {lat: 48.60385760823255, lng: 1.549072265625},southWest: {lat: 46.09228143052649, lng: -2.8454589843750004}}, 
  tableAccess: false,
  legend: [{
    //tableAccess: false,
    title: "services d'urgences",
    filter: {
      func: function(data, optionsSearch) {
        if (typeof optionsSearch !== 'undefined' && data['services'].length > 0) {
          for (var i = 0; i < data['services'].length; i++) {
            var myService = optionsSearch[data['services'][i]]['properties'];
            if(isOKString(myService['service']) && isOKString(myService['etat']) && (myService['annee_etat'] >= 2003) && (myService['annee_etat'] <= 2023) && myService['service'].toUpperCase().indexOf('URGENCE') > -1 && (myService['etat'] == 'fermé' || myService['etat'] == 'interrompu' || myService['etat'] == 'menacé' || myService['etat'].indexOf('réduit') > -1)) {
              return 1
            };
          }
          return 0;
        }
        else {
          if (((isOKString(data['suppressions']) && data['suppressions'].toUpperCase().indexOf('URGENCES') > -1)) || ((isOKString(data['fermetures_mef']) && data['fermetures_mef'].toUpperCase().indexOf('URGENCES') > -1))) {
            return 1;
          }
          return 0;
        };
      }
    },
    affect: function(data, optionsSearch) {
      if (typeof optionsSearch !== 'undefined' && data['services'].length > 0) {
        var etatFermé = false;
        var etatInterrompu = false;
        var etatMenacé = false;
        var etatRéduit = false;
        for (var i = 0; i < data['services'].length; i++) {
          var myService = optionsSearch[data['services'][i]]['properties'];
          if (isOKString(myService['service']) && myService['service'].toUpperCase().indexOf('URGENCE') > -1) {
            if (isOKString(myService['etat']) && myService['etat'] == 'fermé') etatFermé = true;
            if (isOKString(myService['etat']) && myService['etat'] == 'interrompu') etatInterrompu = true;
            if (isOKString(myService['etat']) && myService['etat'] == 'menacé') etatMenacé = true;
            if (isOKString(myService['etat']) && myService['etat'].indexOf('réduit') > -1) etatRéduit = true;
          }
        }
        if (etatFermé) return 0
        else if (etatInterrompu || etatRéduit) return 1
        else if (etatMenacé) return 2
        else return 3
      }
      else {
        if ((
            ((isOKString(data['suppressions']) && data['suppressions'].toUpperCase().indexOf('RÉDUCTION DES URGENCES') > -1)) || ((isOKString(data['fermetures_mef']) && data['fermetures_mef'].toUpperCase().indexOf('RÉDUCTION DES URGENCES') > -1)) ||
            ((isOKString(data['suppressions']) && data['suppressions'].toUpperCase().indexOf('RÉDUCTION DE URGENCES') > -1)) || ((isOKString(data['fermetures_mef']) && data['fermetures_mef'].toUpperCase().indexOf('RÉDUCTION DE URGENCES') > -1)) ||
            ((isOKString(data['suppressions']) && data['suppressions'].toUpperCase().indexOf('RÉDUCTION URGENCES') > -1)) || ((isOKString(data['fermetures_mef']) && data['fermetures_mef'].toUpperCase().indexOf('RÉDUCTION URGENCES') > -1)) ||
            (isOKString(data['suppressions']) && data['suppressions'].toUpperCase().indexOf('INTERRUPTION DES URGENCES') > -1)) || ((isOKString(data['fermetures_mef']) && data['fermetures_mef'].toUpperCase().indexOf('INTERRUPTION DES URGENCES') > -1)) ||
          ((isOKString(data['suppressions']) && data['suppressions'].toUpperCase().indexOf('INTERRUPTION DE URGENCES') > -1)) || ((isOKString(data['fermetures_mef']) && data['fermetures_mef'].toUpperCase().indexOf('INTERRUPTION DE URGENCES') > -1)) ||
          ((isOKString(data['suppressions']) && data['suppressions'].toUpperCase().indexOf('INTERRUPTION URGENCES') > -1)) || ((isOKString(data['fermetures_mef']) && data['fermetures_mef'].toUpperCase().indexOf('INTERRUPTION URGENCES') > -1))
        ) {
          return 1;
        }
        else return 0;
      }
    },
    icons: [{
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
        exalPopup: (champ) => {
          jQuery.expr[':'].icontains = function(a, i, m) {
            return jQuery(a).text().toUpperCase()
              .indexOf(m[3].toUpperCase()) >= 0;
          };
          if (isOKString(champ) && champ.toUpperCase().indexOf('URGENCES') > -1 &&
            champ.toUpperCase().indexOf('RÉDUCTION DES URGENCES') == -1 &&
            champ.toUpperCase().indexOf('RÉDUCTION DE URGENCES') == -1 &&
            champ.toUpperCase().indexOf('RÉDUCTION URGENCES') == -1 &&
            champ.toUpperCase().indexOf('INTERRUPTION DES URGENCES') == -1 &&
            champ.toUpperCase().indexOf('INTERRUPTION DE URGENCES') == -1 &&
            champ.toUpperCase().indexOf('INTERRUPTION URGENCES') == -1) {
            var myItem = $('<div>' + champ + '</div>')
            $('* :icontains("urgences")', myItem).filter(function(index) {
              return $('*', this).length == 0;
            }).addClass('exalPopup');
            return myItem;
          }
          else return $('<div>' + champ + '</div>');
        },
        title: 'fermetures',
        //colorBG: '#FFD326',
        //colorFG: '#0E0E0E',
        colorBG: '#B42D3D',
        colorFG: '#FFFFFF',
      },
      {
        icon: {
          leaflet: new L.Icon({
            iconUrl: 'https://philquand.github.io/Javascript/LeafLet/Leaflet-color-markers/img/marker-icon-2x-blue.png',
            shadowUrl: 'https://philquand.github.io/Javascript/LeafLet/Leaflet-color-markers/img/marker-shadow.png',
            iconSize: [13, 20],
            iconAnchor: [6, 20],
            popupAnchor: [1, -17],
            shadowSize: [20, 20]
          })
        },
        exalPopup: (champ) => {
          jQuery.expr[':'].icontains = function(a, i, m) {
            return jQuery(a).text().toUpperCase()
              .indexOf(m[3].toUpperCase()) >= 0;
          };
          if (isOKString(champ) && champ.toUpperCase().indexOf('URGENCES') > -1 &&
            (champ.toUpperCase().indexOf('RÉDUCTION DES URGENCES') > -1 ||
              champ.toUpperCase().indexOf('RÉDUCTION DE URGENCES') > -1 ||
              champ.toUpperCase().indexOf('RÉDUCTION URGENCES') > -1 ||
              champ.toUpperCase().indexOf('INTERRUPTION DES URGENCES') > -1 ||
              champ.toUpperCase().indexOf('INTERRUPTION DE URGENCES') > -1 ||
              champ.toUpperCase().indexOf('INTERRUPTION URGENCES') > -1)) {
            var myItem = $('<div>' + champ + '</div>')
            $('* :icontains("urgences")', myItem).filter(function(index) {
              return $('*', this).length == 0;
            }).addClass('exalPopup');
            return myItem;
          }
          else return $('<div>' + champ + '</div>');
        },
        title: 'réduits/interrompus',
        colorBG: '#2C82CA',
        colorFG: '#FFFFFF',
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
        title: 'menacés',
        colorBG: '#29AD27',
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
        title: 'autres',
        colorBG: '#9C2BCB',
        colorFG: '#F8F8F8',
      },
    ]
  }]
};
