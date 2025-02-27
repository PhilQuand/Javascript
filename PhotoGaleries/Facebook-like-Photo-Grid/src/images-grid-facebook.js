(function($) {
    $.fn.Facebook_Fancy = function(options) {
      var args = arguments;
      var _this = this;
      Promise.all([
        load.css('https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css'),
        load.css('https://philquand.github.io/Javascript/PhotoGaleries/Facebook-like-Photo-Grid/src/images-grid.css'),
        load.js('https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js'),
      ]).then(function() {
        console.log('Everything has loaded!');

        return _this.each(function() {

          // If options is plain object - destroy previous instance and create new
          if ($.isPlainObject(options)) {

            if (_this._imgGrid instanceof Facebook_Fancy) {
              _this._imgGrid.destroy();
              delete _this._imgGrid;
            }

            var opts = $.extend({}, $.fn.Facebook_Fancy.defaults, options);
            opts.element = $(_this);
            _this._imgGrid = new Facebook_Fancy(opts);

            return;
          }

          // If options is string - execute method
          if (typeof options === 'string' && _this._imgGrid instanceof Facebook_Fancy) {
            switch (options) {
              case 'modal.open':
                _this._imgGrid.modal.open(args[1]);
                break;
              case 'modal.close':
                _this._imgGrid.modal.close();
                break;
              case 'destroy':
                _this._imgGrid.destroy();
                delete _this._imgGrid;
                break;
            }
          }

        });

        //}).catch(function() {
        //  console.log('Oh no, epic failure!');
      });
    };

    /**
     * Plugin default options
     */

    $.fn.Facebook_Fancy.defaults = {
      images: [],
      href: '',
      fancybox: true,
      cells: 5,
      align: true,
      nextOnClick: true,
      showViewAll: 'more',
      viewAllStartIndex: 'auto',
      loading: 'loading...',
      getViewAllText: function(imagesCount) {
        return 'Voir les ' + imagesCount + ' images';
      },
      onGridRendered: $.noop,
      onGridItemRendered: $.noop,
      onGridLoaded: $.noop,
      onGridImageLoaded: $.noop,
      onModalOpen: $.noop,
      onModalClose: $.noop,
      onModalImageClick: $.noop,
      onModalImageUpdate: $.noop
    };

    /**
     * Facebook_Fancy
     *   opts                    - Grid options 
     *   opts.element            - Element where to render images grid
     *   opts.images             - Array of images. Array item can be string or object { src, alt, title, caption, thumbnail }
     *   opts.align              - Align images with different height
     *   opts.cells              - Maximum number of cells (from 1 to 6)
     *   opts.showViewAll        - Show view all text:
     *                                'more'   - show if number of images greater than number of cells
     *                                'always' - always show
     *                                false    - never show
     *   opts.viewAllStartIndex  - Start image index when view all link clicked
     *   opts.getViewAllText     - Callback function returns text for "view all images" link
     *   opts.onGridRendered     - Callback function fired when grid items added to the DOM
     *   opts.onGridItemRendered - Callback function fired when grid item added to the DOM
     *   opts.onGridLoaded       - Callback function fired when grid images loaded
     *   opts.onGridImageLoaded  - Callback function fired when grid image loaded
     */

    function Facebook_Fancy(opts) {

      this.opts = opts || {};

      if (this.opts.fancybox && this.opts.element.find('div').first().length > 0) {
        var element = this.opts.element.find("div");
        var lastPicture = element.find('.imgs-grid-image:last .image-wrap');
        lastPicture.find('span').click(
          this.onImageClick.bind(this)
        );
        return;
      }

      this.$window = $(window);
      var element = this.opts.element.append("<div></div>");
      this.$element = element.find("div");
      this.$gridItems = [];

      this.modal = null;
      this.imageLoadCount = 0;

      var href = this.opts.href;
      var cells = this.opts.cells;
      this.opts.cells = (href != '') ? 0 : (cells < 1) ? 1 : (cells > 6) ? 6 : cells;

      this.onWindowResize = this.onWindowResize.bind(this);
      this.onImageClick = this.onImageClick.bind(this);

      this.init();
    }

    Facebook_Fancy.prototype.init = function() {

      this.setGridClass();
      this.renderGridItems();
      if (!this.opts.fancybox) this.createModal();

      this.$window.on('resize', this.onWindowResize);
    }

    Facebook_Fancy.prototype.createModal = function() {

      var opts = this.opts;

      this.modal = new Facebook_FancyModal({
        loading: opts.loading,
        images: opts.images,
        nextOnClick: opts.nextOnClick,
        onModalOpen: opts.onModalOpen,
        onModalClose: opts.onModalClose,
        onModalImageClick: opts.onModalImageClick,
        onModalImageUpdate: opts.onModalImageUpdate
      });
    }

    Facebook_Fancy.prototype.setGridClass = function() {

      var opts = this.opts,
        imgsLen = opts.images.length,
        cellsCount = (imgsLen < opts.cells) ? imgsLen : opts.cells;

      this.$element.addClass('imgs-grid imgs-grid-' + cellsCount);
    }

    Facebook_Fancy.prototype.renderGridItems = function() {

      var opts = this.opts,
        href = opts.href,
        imgs = opts.images,
        imgsLen = imgs.length;

      if (!imgs) {
        return;
      }

      this.$element.empty();
      this.$gridItems = [];

      if (href != '') this.renderGridItem(href, -1);

      for (var i = 0; i < imgsLen; ++i) {
        if (i === opts.cells) {
          break;
        }
        this.renderGridItem(imgs[i], i);
      }

      if (opts.showViewAll === 'always' ||
        (opts.showViewAll === 'more' && imgsLen > opts.cells)
      ) {
        this.renderViewAll();
      }

      var element = this.opts.element.append('<div class="hiddenPictures" style="display: none;"></div>');
      if (opts.fancybox) {
        for (var i = opts.cells; i < imgsLen; ++i) {
          this.renderGridHiddenItem(imgs[i], i);
        }
      }

      opts.onGridRendered(this.$element);
    }

    Facebook_Fancy.prototype.renderGridItem = function(image, index) {

      var src = image,
        alt = '',
        title = '',
        opts = this.opts,
        _this = this;

      if ($.isPlainObject(image)) {
        src = image.thumbnail || image.src;
        alt = image.alt || '';
        title = image.title || '';
      }

      if (opts.fancybox) {
        item = $('<div>', {
          class: 'imgs-grid-image'
        });
        item.attr('data-index', index)
      }
      else {
        item = $('<div>', {
          class: 'imgs-grid-image',
          click: this.onImageClick,
          data: {
            index: index
          }
        });
      }

      item.append(
        $('<div>', {
          class: 'image-wrap'
        }).append(
          $('<img>', {
            src: src,
            alt: alt,
            title: title,
            on: {
              load: function(event) {
                _this.onImageLoaded(event, $(this), image);
              }
            }
          })
        )
      );

      this.$gridItems.push(item);
      this.$element.append(item);

      if (index > -1 && opts.fancybox) item.find("div img").wrap('<a  href="javascript:;" data-src="' + src + '" data-fancybox="fancy-box-' + opts.element.attr("id") + '" data-caption="' + title + '"></a>')
      //if(opts.fancybox) item.find("div img").wrap('<a href="' + src+ '"></a>') 
      opts.onGridItemRendered(item, image);
    }

    Facebook_Fancy.prototype.renderGridHiddenItem = function(image, index) {

      var src = image,
        alt = '',
        title = '',
        opts = this.opts,
        _this = this;
      var item;

      if ($.isPlainObject(image)) {
        src = image.thumbnail || image.src;
        alt = image.alt || '';
        title = image.title || '';
      }

      item = $('<div>', {
        class: 'imgs-hidden-image',
        data: {
          index: index
        }
      });

      item.append(
        $('<div>', {
          class: 'image-wrap'
        }).append(
          $('<img>', {
            src: src,
            alt: alt,
            title: title,
            on: {
              load: function(event) {
                _this.onImageLoaded(event, $(this), image);
              }
            }
          })
        )
      );

      $('.hiddenPictures').append(item);
      if (opts.fancybox) item.find("div img").wrap('<a  href="javascript:;" data-src="' + src + '" data-fancybox="fancy-box-' + opts.element.attr("id") + '" data-caption="' + title + '"></a>')
      //if(opts.fancybox) item.find("div img").wrap('<a href="' + src+ '"></a>') 
      opts.onGridItemRendered(item, image);
    }

    Facebook_Fancy.prototype.renderViewAll = function() {

      var opts = this.opts;
      _this = this;

      var lastPicture = this.$element.find('.imgs-grid-image:last');
      var lastPictureIndex = lastPicture.data('index');
      var lastPictureWrap = lastPicture.find('.image-wrap a');
      if (lastPictureIndex > -1) {
        lastPictureWrap.append(
          $('<div>', {
            class: 'view-all'
          }).append(
            $('<span>', {
              class: 'view-all-cover',
            })
          ).append(
            $('<span>', {
              class: 'view-all-text',
              text: opts.getViewAllText(opts.images.length)
            })
          )
        );
      }
      var firstPicture = this.$element.find('.imgs-grid-image:first');
      var firstPictureIndex = firstPicture.data('index');
      var firstPictureWrap = firstPicture.find('.image-wrap a');
      var firstDataSrc = firstPictureWrap.attr("data-src")
      //console.log('firstDataSrc : ' + firstDataSrc);
      lastPictureWrap.attr("data-src", firstDataSrc);
      if (jQuery.type(opts.GalleryLink) != 'undefined') {
        $('.' + opts.GalleryLink).attr("href", "javascript:;");
        $('.' + opts.GalleryLink).wrap(
          $('<span>', {
            class: 'view-all-text',
            click: function(event) {
              $("[data-fancybox='fancy-box-" + opts.element.attr('id') + "']").eq(0).find("img").trigger("click");
            },
          })
        );
      }
    }

    Facebook_Fancy.prototype.onWindowResize = function(event) {
      if (this.opts.align) {
        this.align();
      }
    }

    Facebook_Fancy.prototype.onImageClick = function(event) {

      var opts = this.opts,
        img = $(event.currentTarget),
        imageIndex;
      if (opts.fancybox) img = img.parent().parent().parent();

      if (img.find('.view-all').length > 0 &&
        typeof opts.viewAllStartIndex === 'number') {
        imageIndex = opts.viewAllStartIndex;
      }
      else {
        imageIndex = img.data('index');
      }

      imageIndex = (imageIndex < 0) ? 0 : imageIndex;

      if (opts.fancybox) {
        //var fancybox1 = $("[data-fancybox='fancy-box-" + opts.element.attr('id') + "']");
        $("[data-fancybox='fancy-box-" + opts.element.attr('id') + "']").eq(imageIndex).find("img").trigger("click");
      }
      else this.modal.open(imageIndex);
    }

    Facebook_Fancy.prototype.onImageLoaded = function(event, imageEl, image) {

      var opts = this.opts;

      ++this.imageLoadCount;

      opts.onGridImageLoaded(event, imageEl, image);

      if (this.imageLoadCount === this.$gridItems.length) {
        this.imageLoadCount = 0;
        this.onAllImagesLoaded()
      }
    }

    Facebook_Fancy.prototype.onAllImagesLoaded = function() {

      var opts = this.opts;

      if (opts.align) {
        this.align();
      }

      opts.onGridLoaded(this.$element);
    }

    Facebook_Fancy.prototype.align = function() {

      var itemsLen = this.$gridItems.length;

      switch (itemsLen) {
        case 2:
        case 3:
          this.alignItems(this.$gridItems);
          break;
        case 4:
          this.alignItems(this.$gridItems.slice(0, 2));
          this.alignItems(this.$gridItems.slice(2));
          break;
        case 5:
        case 6:
          this.alignItems(this.$gridItems.slice(0, 3));
          this.alignItems(this.$gridItems.slice(3));
          break;
      }
    }

    Facebook_Fancy.prototype.alignItems = function(items) {

      var itemsHeight = items.map(function(item) {
        return item.find('img').height();
      });

      var normalizedHeight = Math.min.apply(null, itemsHeight);

      $(items).each(function() {

        var item = $(this),
          imgWrap = item.find('.image-wrap'),
          img = item.find('img'),
          imgHeight = img.height();

        imgWrap.height(normalizedHeight);

        if (imgHeight > normalizedHeight) {
          var top = Math.floor((imgHeight - normalizedHeight) / 2);
          img.css({
            top: -top
          });
        }
      });
    }

    Facebook_Fancy.prototype.destroy = function() {

      this.$window.off('resize', this.onWindowResize);

      this.$element.empty()
        .removeClass('imgs-grid imgs-grid-' + this.$gridItems.length);

      this.modal.destroy();
    }

    /**
     * Facebook_FancyModal 
     *  opts                    - Modal options
     *  opts.images             - Array of images
     *  opts.nextOnClick        - Show next image when click on modal image
     *  opts.loading            - Image loading text
     *  opts.onModalOpen        - Callback function called when modal opened
     *  opts.onModalClose       - Callback function called when modal closed
     *  opts.onModalImageClick  - Callback function called on modal image click
     */

    function Facebook_FancyModal(opts) {

      this.opts = opts || {};

      this.imageIndex = null;

      this.$document = $(document);
      this.$modal = null;
      this.$indicator = null;

      this.close = this.close.bind(this);
      this.prev = this.prev.bind(this);
      this.next = this.next.bind(this);
      this.onIndicatorClick = this.onIndicatorClick.bind(this);
      this.onImageLoaded = this.onImageLoaded.bind(this);
      this.onKeyUp = this.onKeyUp.bind(this);

      this.$document.on('keyup', this.onKeyUp);
    }

    Facebook_FancyModal.prototype.open = function(imageIndex) {

      if (this.isOpened()) {
        return;
      }

      this.imageIndex = parseInt(imageIndex) || 0;
      this.render();
    }

    Facebook_FancyModal.prototype.close = function(event) {

      if (!this.$modal) {
        return;
      }

      var opts = this.opts;

      this.$modal.animate({
        opacity: 0
      }, {
        duration: 100,
        complete: function() {
          this.$modal.remove();
          this.$modal = null;
          this.$indicator = null;
          this.imageIndex = null;
          opts.onModalClose();
        }.bind(this)
      });
    }

    Facebook_FancyModal.prototype.isOpened = function() {
      return (this.$modal && this.$modal.is(':visible'));
    }

    Facebook_FancyModal.prototype.render = function() {

      var opts = this.opts;

      this.renderModal();
      this.renderCaption();
      this.renderCloseButton();
      this.renderInnerContainer();
      this.renderIndicatorContainer();

      this.$modal.animate({
        opacity: 1
      }, {
        duration: 100,
        complete: function() {
          opts.onModalOpen(this.$modal, opts.images[this.imageIndex]);
        }.bind(this)
      });
    }

    Facebook_FancyModal.prototype.renderModal = function() {
      this.$modal = $('<div>', {
        class: 'imgs-grid-modal'
      }).appendTo('body');
    }

    Facebook_FancyModal.prototype.renderCaption = function() {
      this.$caption = $('<div>', {
        class: 'modal-caption',
        text: this.getImageCaption(this.imageIndex)
      }).appendTo(this.$modal);
    }

    Facebook_FancyModal.prototype.renderCloseButton = function() {
      this.$modal.append($('<div>', {
        class: 'modal-close',
        click: this.close
      }));
    }

    Facebook_FancyModal.prototype.renderInnerContainer = function() {

        var opts = this.opts,
          image = this.getImage(this.imageIndex);

        this.$modal.append(
          $('<div>', {
            class: 'modal-inner'
          }).append(
            $('<div>', {
              class: 'modal-image'
            }).append(
              $('<img>', {
                src: image.src,
                alt: image.alt,
                title: image.title,
                on: {
                  load: this.onImageLoaded,
                  click: function(event) {
                    this.onImageClick(event, $(this), image);
                  }.bind(this)
                }
              }),
              $('<div>', {
                class: 'modal-loader',
                html: opts.loading
              })
            ),
            $('<div>', {
              class: 'modal-control left',
              click: this.prev
            }).append(
              $('<div>', {
                class: 'arrow left'
              })
            ),
            $('<div>', {
              class: 'modal-control right',
              click: this.next
            }).append(
              $('<div>', {
                class: 'arrow right'
              })
            )
          )
        );

        if (opts.images.length<= 1) {
  this.$modal.find('.modal-control').hide();
}
}

Facebook_FancyModal.prototype.renderIndicatorContainer = function() {

  var opts = this.opts,
    imgsLen = opts.images.length;

  if (imgsLen == 1) {
    return;
  }

  this.$indicator = $('<div>', {
    class: 'modal-indicator'
  });

  var list = $('<ul>'),
    i;
  for (i = 0; i < imgsLen; ++i) {
    list.append($('<li>', {
      class: this.imageIndex == i ? 'selected' : '',
      click: this.onIndicatorClick,
      data: {
        index: i
      }
    }));
  }

  this.$indicator.append(list);
  this.$modal.append(this.$indicator);
}

Facebook_FancyModal.prototype.prev = function() {

  var imgsLen = this.opts.images.length;

  if (this.imageIndex > 0) {
    --this.imageIndex;
  }
  else {
    this.imageIndex = imgsLen - 1;
  }

  this.updateImage();
}

Facebook_FancyModal.prototype.next = function() {

  var imgsLen = this.opts.images.length;

  if (this.imageIndex < imgsLen - 1) {
    ++this.imageIndex;
  }
  else {
    this.imageIndex = 0;
  }

  this.updateImage();
}

Facebook_FancyModal.prototype.updateImage = function() {

  var opts = this.opts,
    image = this.getImage(this.imageIndex),
    imageEl = this.$modal.find('.modal-image img');

  imageEl.attr({
    src: image.src,
    alt: image.alt,
    title: image.title
  });

  this.$modal.find('.modal-caption').text(
    this.getImageCaption(this.imageIndex));

  if (this.$indicator) {
    var indicatorList = this.$indicator.find('ul');
    indicatorList.children().removeClass('selected');
    indicatorList.children().eq(this.imageIndex).addClass('selected');
  }

  this.showLoader();

  opts.onModalImageUpdate(imageEl, image);
}

Facebook_FancyModal.prototype.onImageClick = function(event, imageEl, image) {

  var opts = this.opts;

  if (opts.nextOnClick) {
    this.next();
  }

  opts.onModalImageClick(event, imageEl, image);
}

Facebook_FancyModal.prototype.onImageLoaded = function() {
  this.hideLoader();
}

Facebook_FancyModal.prototype.onIndicatorClick = function(event) {
  var index = $(event.target).data('index');
  this.imageIndex = index;
  this.updateImage();
}

Facebook_FancyModal.prototype.onKeyUp = function(event) {

  if (!this.$modal) {
    return;
  }

  switch (event.keyCode) {
    case 27: // Esc
      this.close();
      break;
    case 37: // Left arrow
      this.prev();
      break;
    case 39: // Right arrow
      this.next();
      break;
  }
}

Facebook_FancyModal.prototype.getImage = function(index) {

  var opts = this.opts,
    image = opts.images[index];

  if ($.isPlainObject(image)) {
    return image;
  }
  else {
    return {
      src: image,
      alt: '',
      title: ''
    }
  }
}

Facebook_FancyModal.prototype.getImageCaption = function(imgIndex) {
  var img = this.getImage(imgIndex);
  return img.caption || '';
}

Facebook_FancyModal.prototype.showLoader = function() {
  if (this.$modal) {
    this.$modal.find('.modal-image img').hide();
    this.$modal.find('.modal-loader').show();
  }
}

Facebook_FancyModal.prototype.hideLoader = function() {
  if (this.$modal) {
    this.$modal.find('.modal-image img').show();
    this.$modal.find('.modal-loader').hide();
  }
}

Facebook_FancyModal.prototype.destroy = function() {
  this.$document.off('keyup', this.onKeyUp);
  this.close();
}

var load = (function() {
// Function which returns a function: https://davidwalsh.name/javascript-functions
function _load(tag) {
  return function(url) {
    // This promise will be used by Promise.all to determine success or failure
    return new Promise(function(resolve, reject) {
      var element = document.createElement(tag);
      var parent = 'body';
      var attr = 'src';

      // Important success and error for the promise
      element.onload = function() {
        resolve(url);
      };
      element.onerror = function() {
        reject(url);
      };

      // Need to set different attributes depending on tag type
      switch (tag) {
        case 'script':
          element.async = true;
          break;
        case 'link':
          element.type = 'text/css';
          element.rel = 'stylesheet';
          attr = 'href';
          parent = 'head';
      }

      // Inject into document to kick off loading
      element[attr] = url;
      document[parent].appendChild(element);
    });
  };
}

return {
  css: _load('link'),
  js: _load('script'),
  img: _load('img')
}
})();
})(jQuery);