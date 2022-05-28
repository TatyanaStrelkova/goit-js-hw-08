import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const STORAGE_KEY = 'videoplayer-current-time';

const player = new Player(iframe);

const onPlay = data => {
    const playingTime = data.seconds;
    localStorage.setItem(STORAGE_KEY, playingTime)
};

player.on('timeupdate', throttle(onPlay, 1000))
player.setCurrentTime(localStorage.getItem(STORAGE_KEY))

