import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });

player.on('play', function () {
  player.getCurrentTime().then(function (seconds) {
    console.log('Current time:', seconds);
  });
});
