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
      $(document).ready(function() {
        /*$('.audioFancy').find('audio').each(function() {
          const $target = this;
          const player = new MediaPlayer(
            $target, {
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
            }
          );*/

          /*var promise = $('.media-control.media-play').click(); 
          if (promise) {
              //Older browsers may not return a promise, according to the MDN website
              promise.catch(function(error) { console.error(error); });
          }*/

        });
        $('audio, video').each(function() {
          const player = new MediaPlayer(this, MediaPlayerConfig);
        });

      })

    }).catch(function() {
    console.log('Oh no, epic failure!');
  });
})(jQuery);