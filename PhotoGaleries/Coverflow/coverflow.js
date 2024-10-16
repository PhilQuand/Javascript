  /*Coverflow Image Gallery By Dynamic Drive
   * Created: Jan 14th', 2015 by DynamicDrive.com.
   * Dependencies: jQuery, Sly scrolling lib https://github.com/darsain/sly
   * Visit http://www.dynamicdrive.com/ for full source code
   */


  document.getElementsByTagName('html')[0].className += ' ' +
    ("ActiveXObject" in window ? 'ie' : 'no-ie')


  function coverflowimages(options) {
    if (!document.getElementById('coverflowoverlay')) {
      var $overlay = $('<div id="coverflowoverlay" />').appendTo(document.body)
      var $enlargearea = $('<div id="coverenlargearea" />').appendTo(document.body)
    }
    else {
      var $overlay = $('#coverflowoverlay')
      var $enlargearea = $('#coverenlargearea')
    }
    var $body = $(document.body)
    var $overlayenlarge = $overlay.add($enlargearea)
    //var $wrap  = $('#' + options.coverid)
    if (typeof options.coverid !== 'undefined') var $wrap = $('#' + options.coverid)
    else var $wrap = options.wrap;
    var $frame = $wrap.find('div.frame:eq(0)')
    var frameinnerHTML = ''
    var activeitem = -1
    var onselecteditemclick = options.onselecteditemclick || selecteditemaction

    var preloadimages = []
    for (var i = 0; i < options.images.length; i++) {
      if (options.images[i][1]) {
        if (options.preloadlarge) {
          preloadimages[i] = new Image()
          preloadimages[i].src = options.images[i][1]
        }
      }
      frameinnerHTML += '<li style="background-image:url(' + options.images[i][0] + ')" data-itemindex="' + i + '"></li>\n'
    }
    $frame.find('ul:eq(0)').html(frameinnerHTML)

    function selecteditemaction(e, activeitem) { // default call back function for onselecteditemclick, showing enlarged image
      $overlay.css({
        opacity: .9,
        zIndex: 1000
      })
      $enlargearea.html('<img src="' + options.images[activeitem][1] + '"/>' +
        ((options.images[activeitem][2]) ? '<div id="desc">' + options.images[activeitem][2] + '</div>' : '')
      )

      var maxheight = $(window).height()
      $enlargearea.css({
          opacity: 1,
          zIndex: 1001
        })
        .data('isvisible', true)
        .find('img:eq(0)')
        .css({
          maxWidth: $(window).width() * .95,
          maxHeight: $(window).height()
        })
      e.stopPropagation()

    }

    // Call Sly on frame. See https://github.com/darsain/sly/blob/master/docs/Options.md
    $frame.sly({
      horizontal: 1,
      itemNav: 'forceCentered',
      smart: 1,
      activateMiddle: 1,
      activateOn: 'click',
      mouseDragging: 1,
      touchDragging: 1,
      releaseSwing: 1,
      startAt: 1,
      scrollBar: $wrap.find('.scrollbar'),
      scrollBy: 1,
      speed: 300,
      elasticBounds: 1,
      easing: 'swing',
      dragHandle: 1,
      dynamicHandle: 1,
      clickBar: 1,
      // Navigation buttons
      pagesBar: $wrap.find('.pages'),
      activatePageOn: 'click'
    })


    $(window).on('resize', function() {
      $frame.sly("reload");
    })

    $frame.on('mousedown', function(e) { // test during 'mousedown' phase if distination LI is active item, before 'onclick'
      if ($(e.target).hasClass('active')) {
        activeitem = $(e.target).data('itemindex')
      }
    })

    $frame.on('click', function(e) { // onclick the main cover flow container
      var $target = $(e.target)
      if ($(e.target).data('itemindex') == activeitem) {
        onselecteditemclick(e, activeitem)
      }
    })

    $overlayenlarge.unbind().on('click', function() {
      if ($enlargearea.data('isvisible')) {
        $overlayenlarge.css({
          opacity: 0,
          zIndex: -1
        })
        $enlargearea.data('isvisible', false)
      }
    })

  }
  ///////// Initialization code ////////////////

  /*coverflowimages({
  	coverid: 'coverflow1',
  	images: [
  						['angelinasmall.jpg', 'angelina.jpg', 'Angelina Jolie, is an American actress and filmmaker, and an Academy Award winner'],
  						['millasmall.jpg', 'milla.jpg', 'Milla Jovovich was born in Ukraine and immigrated with her parents to the United States when she\'s five.'],
  						['josiesmall.jpg', 'josie.jpg'],
  						['haydensmall.jpg', 'hayden.jpg', 'Hayden Panettiere is a native of New York, and first appeared in a commercial at the age of 11 months.'],
  						['ashleysmall.jpg', 'ashley.jpg', 'Ashley was born in Granada Hills, California. She is the daughter of Naomi Judd, a country music singer and motivational speaker'] // <-- no comma after last image
  					] // <-- no comma after last option
  })*/
(function($) {
  $.fn.coverflowimages = function(options) {
    var i = 0;
    $(this).each(function() {
      idCover = 'TESTcoverflow' + i++;
      //if( idCover == 'TESTcoverflow1') {
      if (!$(this).find('.wrap').length) {
        $(this).append('<div class="wrap"><div class="scrollbar"><div class="handle"><div class="mousearea"></div></div></div><div class="frame coverflow"><ul class="clearfix"><li>Holder</li></div><ul class="pages"></ul></div></div>');
        options.wrap = $(this).find('.wrap');
        options.wrap.attr('id', idCover);
        //options.coverid = idCover;
        coverflowimages(options);
      }
      //}
    });
  };
})(jQuery);
/*$(document).ready(function() {
$('.testImages').coverflowimages({
	images: [
						['http://coordination-defense-sante.org/wp-content/uploads/2020/05/image009-1.jpg',
						 'http://coordination-defense-sante.org/wp-content/uploads/2020/05/image009-1.jpg'],
						['http://coordination-defense-sante.org/wp-content/uploads/2020/05/image011.jpg',
						'http://coordination-defense-sante.org/wp-content/uploads/2020/05/image011.jpg'],
						['http://coordination-defense-sante.org/wp-content/uploads/2020/05/image013.jpg',
						'http://coordination-defense-sante.org/wp-content/uploads/2020/05/image013.jpg'],
						['http://coordination-defense-sante.org/wp-content/uploads/2020/05/image015.jpg',
						'http://coordination-defense-sante.org/wp-content/uploads/2020/05/image015.jpg'],
						['http://coordination-defense-sante.org/wp-content/uploads/2020/05/image017.jpg',
						'http://coordination-defense-sante.org/wp-content/uploads/2020/05/image017.jpg'],
 						['http://coordination-defense-sante.org/wp-content/uploads/2020/05/image019.jpg',
						'http://coordination-defense-sante.org/wp-content/uploads/2020/05/image019.jpg'],
						['http://coordination-defense-sante.org/wp-content/uploads/2020/05/image021.jpg',
						'http://coordination-defense-sante.org/wp-content/uploads/2020/05/image021.jpg'],
						['http://coordination-defense-sante.org/wp-content/uploads/2020/05/image023.jpg',
						'http://coordination-defense-sante.org/wp-content/uploads/2020/05/image023.jpg'] // <-- no comma after last image
					] // <-- no comma after last option
})
})*/