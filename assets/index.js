  import MediaPlayer from './MediaPlayer.js';
  import Autoplay from './plugins/AutoPlay.js';

  const video = document.querySelector('video');
  const player = new MediaPlayer({ el: video, plugins: [ new Autoplay ] });

  const buttonPlay = document.getElementById('playButton');
  const buttonMute = document.getElementById('muteButton');
  buttonPlay.onclick = () => player.togglePlay();
  buttonMute.onclick = () => player.toggleMute();

