import Player from '@vimeo/player';
var throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const callback = throttle(() => {
  player.getCurrentTime().then(function (seconds) {
    localStorage.setItem('timeStop', JSON.stringify(seconds));
  });
}, 1000);

player.on('timeupdate', callback);

player
  .setCurrentTime(JSON.parse(localStorage.getItem('timeStop')) || 0)
  .then(function (seconds) {});
