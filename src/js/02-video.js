import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeEl = document.querySelector('#vimeo-player');
const STORAGE_KEY = 'videoplayer-current-time';

const player = new Player(iframeEl);

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(currentTime) {
  localStorage.setItem(STORAGE_KEY, currentTime.seconds);
}

player.setCurrentTime(localStorage.getItem(STORAGE_KEY));
