(function($) {
  $.fn.Carrousel_Fancy = function(options) {
    var randGen = new Generator();
    var randNum = 'ID' + randGen.getrand();
    var _this = this;
    Promise.all([
      //  chargements des dépendances css
      load.css('https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css'),
      //load.css('https://philquand.github.io/Javascript/PhotoGaleries/myFancybox/myFancybox.css'),
      //load.css('https://philquand.github.io/Javascript/PhotoGaleries/myFancybox/AlaUne.css'),
      //  chargements des dépendances js
      load.js('https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js'),
      //load.js('https://philquand.github.io/Javascript/PhotoGaleries/myFancybox/myFancybox.js'),
    ]).then(
      function() {
        console.log('Everything has loaded!');

        var myThumbCarousel = $('<div id=' + randNum + ' class="thumbCarousel carousel max-w-xl mx-auto"></div>')
        for (var i = 0; i < options.images.length; i++) {
          var slide = $('<div class="carousel__slide"><img class="panzoom__content" src="' + options.images[i] + '" /></div>')
          myThumbCarousel.append(slide)
        }
        _this.append(myThumbCarousel)

        var myMainCarousel = $('<div id=' + randNum + ' class="mainCarousel carousel w-10/12 max-w-5xl mx-auto"></div>')
        for (var i = 0; i < options.images.length; i++) {
          //var slide = $('<div class="carousel__slide"><img class="panzoom__content" src="' + options.images[i] + '" /></div>')
          var ni = i + 1
          //var slide = $(' <div class="carousel__slide" data-src="' + options.images[i] + '"  data-fancybox="gallery" data-caption="Affiche n°"' + ni + '"><img src="' + options.images[i] + '" /></div>')
          var slide = $(' <div class="carousel__slide" data-src="' + options.images[i] + '"  data-fancybox="gallery"><img src="' + options.images[i] + '" /></div>')
         myMainCarousel.append(slide)
        }
        _this.append(myMainCarousel)

        _this.append('<style>' +
          '#' + randNum + '.mainCarousel { width: ' + options.mainCarouselWidth + '; margin: 0 auto 1rem auto; --carousel-button-color: #170724; --carousel-button-bg: #fff; --carousel-button-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%); --carousel-button-svg-width: 20px; --carousel-button-svg-height: 20px; --carousel-button-svg-stroke-width: 2.5; }\n' +
          '#' + randNum + '.mainCarousel .carousel__slide { width: 100%; padding: 0; }\n' +
          '#' + randNum + '.mainCarousel  .carousel__button.is-prev { left: -1.5rem; }\n' +
          '#' + randNum + '.mainCarousel .carousel__button.is-next { right: -1.5rem; }\n' + 
          '#' + randNum + '.mainCarousel .carousel__button:focus { outline: none; box-shadow: 0 0 0 4px #A78BFA; }\n' +
          '#' + randNum + '.thumbCarousel .carousel__slide { opacity: 0.5; padding: 0; margin: 0.25rem; width: ' + options.thumbCarouselWidth + '; height: 64px; }\n' +
          '#' + randNum + '.thumbCarousel  .carousel__slide img { width: 100%; height: 100%; object-fit: cover; border-radius: 4px; }\n' +
          '#' + randNum + '.thumbCarousel  .carousel__slide.is-nav-selected { opacity: 1; }</style>')

        // Initialise Carousel
        myMainCarousel =  document.querySelector("#" + randNum + ".mainCarousel")
        const mainCarousel = new Carousel(myMainCarousel, {
          Dots: false,
        });
        // Thumbnails
        myThumbCarousel = document.querySelector("#" + randNum + ".thumbCarousel")
        const thumbCarousel = new Carousel(myThumbCarousel, {
          Sync: {
            target: mainCarousel,
            friction: 0,
          },
          Dots: false,
          Navigation: false,
          center: true,
          slidesPerPage: 1,
          infinite: false,
        });
        // Customize Fancybox
        Fancybox.bind('[data-fancybox="gallery"]', {
          Carousel: {
            on: {
              change: (that) => {
                mainCarousel.slideTo(mainCarousel.findPageForSlide(that.page), {
                  friction: 0,
                });
              },
            },
          },
        });

      }
    ).catch(function() {
      console.log('Oh no, epic failure!');
    });
  }
  function Generator() {};

  Generator.prototype.rand = Math.floor(Math.random() * 26) + Date.now();

  Generator.prototype.getrand = function() {
    return this.rand++;
  };
})(jQuery);