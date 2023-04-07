import Player from '@vimeo/player';

const videoEl = document.getElementById('vimeo-player');
const player = new Player(videoEl);
const throttle = require('lodash.throttle');

const onPlay = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
