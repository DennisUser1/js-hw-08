import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

// lodash.throttle, що дозволить нам обмежити частоту оновлення часу відтворення.

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

const onPlayer = function (data) {
    const playedTime = data.seconds;
    localStorage.setItem("videoplayer-current-time", playedTime)
}

const saveTime = localStorage.getItem("videoplayer-current-time"); 


player.on('timeupdate', throttle(onPlayer, 1000));
if(saveTime) {
    player.setCurrentTime(saveTime);
}
