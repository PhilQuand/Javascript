(function($) {
Promise.all([
  //  chargements des dépendances css
  load.css('https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css'),
  load.css('https://philquand.github.io/Javascript/PhotoGaleries/Facebook-like-Photo-Grid/src/images-grid.css'),
  //  chargements des dépendances js
  load.js('https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js'),
]).then(
  function() {
    console.log('Everything has loaded!');
    for (var i = 0; i < dataFancybox.length; i++) {
      $('[data-fancybox=' + dataFancybox[i] + ']').each(function() {
        var thumb = $(this).attr('data-thumb');
        console.log('data-thumb : ' + thumb);
        if (typeof thumb === 'undefined') {
          var thumb = $(this).attr('data-src');
          $(this).attr('data-thumb', thumb);
        }
      });
      Fancybox.bind('[data-fancybox=' + dataFancybox[i] + ']', {
        buttons: [
          'play',
          'download',
          'thumbs',
          'close'
        ]
      });
    }
  }
).catch(function() {
  console.log('Oh no, epic failure!');
});
})(jQuery);