(function($) {

  //var checkIfStoreNeedsUpdate = true;

  // spécial pour le site de la CN
	$('.widget_text.so-panel.widget.widget_custom_html h3:contains(Ressources Carte)').css('display', 'none');
	$('.widget_text.so-panel.widget.widget_custom_html h3:contains(Style Carte)').css('display', 'none');
	$('.widget_text.so-panel.widget.widget_custom_html h3:contains(Presentation Carte)').css('display', 'none');
	$('.widget_text.so-panel.widget.widget_custom_html h3:contains(Geojson Carte)').css('display', 'none');
	$('.widget_text.so-panel.widget.widget_custom_html h3:contains(Code Carte)').css('display', 'none');
	$('.widget_text.so-panel.widget.widget_custom_html h3:contains(Données Carte)').css('display', 'none');
  // fin spécial pour le site de la CN
  $(document).ready(function() {
    $('#Fermetures').mapAllBlogs(/*{ 
    legend: [
    {
      title: 'Urgences sup.',
      //test: function(){},
      filter: {
        func: function(data) {
        //if ( (isOKString(data['suppressions']) && data['suppressions'].toUpperCase().indexOf('URGENCE') > -1) || (isOKString(data['menaces']) && data['menaces'].toUpperCase().indexOf('URGENCE') > -1) ) {
        if ( ((isOKString(data['suppressions']) && data['suppressions'].toUpperCase().indexOf('URGENCES') > -1)) || ((isOKString(data['fermetures_mef']) && data['fermetures_mef'].toUpperCase().indexOf('URGENCES') > -1)) ) {
          return 1;
        }
        return 0;
        }
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
          title: 'urgences sup.',
          //title: 'une victoire',
          colorBG: '#FFD326',
          colorFG: '#0E0E0E',
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
          title: 'non renseignés',
          colorBG: '#29AD27',
          colorFG: '#FFFFFF',
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
      ]
    },
    ] 
    }*/);
  });
})(jQuery);