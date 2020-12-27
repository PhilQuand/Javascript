(function($) {
  var MediaPlayerConfig = {
    prefix: 'media',
    lang: {
      play: 'play',
      pause: 'pause',
      mute: 'mute',
      unmute: 'unmute',
      volume: 'volume',
      currentTime: 'current time',
      remainingTime: 'remaining time',
      enterFullscreen: 'enter fullscreen',
      leaveFullscreen: 'leave fullscreen',
      download: 'download'
    },
    svgs: {
      play: '#symbol-play',
      pause: '#symbol-pause',
      mute: '#symbol-mute',
      unmute: '#symbol-unmute',
      volume: '#symbol-volume',
      currentTime: '#symbol-currentTime',
      remainingTime: '#symbol-remainingTime',
      enterFullscreen: '#symbol-enterFullscreen',
      leaveFullscreen: '#symbol-leaveFullscreen',
      download: '#symbol-download'
    },
    timeDir: 'ltr',
    volumeDir: 'ltr'
  };

  function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {
              elmnt.innerHTML = this.responseText;
            }
            if (this.status == 404) {
              elmnt.innerHTML = "Page not found.";
            }
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
      }
    }
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
  Promise.all([
    //  chargements des dépendances css
    load.css('https://philquand.github.io/Javascript/MediaPlayer/MediaPlayer.css'),
    load.css('https://philquand.github.io/Javascript/MediaPlayer/myMediaPlayer.css'),
    //  chargements des dépendances js
    load.js('https://philquand.github.io/Javascript/MediaPlayer/MediaPlayer.js'),
  ]).then(
    function() {
      console.log('Everything has loaded!');
      $('body').append('<div w3-include-html="https://philquand.github.io/Javascript/MediaPlayer/myMediaPlayer.html"></div>');
      $('video').each(function(index, value) {
        $(this).wrap('<div class="cinema-traquage-video-wrapper"><div class="cinema-traquage-video-container"></div></div>');
        $(this).attr('data-options','{"prefix":"media","show":{"fullscreen":true}}');
      });
      $(document).ready(function() {
        includeHTML();
        $('audio, video').each(function() {
          const player = new MediaPlayer(this, MediaPlayerConfig);
        });
        $('video').each(function(index, value) {
          var videoWidth = $(this).css('width');
          var videoHeight = $(this).css('height');
          $(this).parents('.cinema-traquage-video-wrapper').css('width', videoWidth);
          $(this).parents('.cinema-traquage-video-container').css('padding-bottom', videoHeight).css('padding-bottom', '+=50px');
        });

        /*var promise = $('.media-control.media-play').click(); 
        if (promise) {
            //Older browsers may not return a promise, according to the MDN website
            promise.catch(function(error) { console.error(error); });
        }*/

      })

    }).catch(function() {
    console.log('Oh no, epic failure!');
  });
})(jQuery);