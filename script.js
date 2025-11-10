const clips = [
  'audio/alcaholic.mp3',
  'audio/ipfreely.mp3',
  'audio/jaquesstrap.mp3'
  'audio/kissmyownbutt.mp3'
  'audio/mikerotch.mp3'
  'audio/seymourbutts.mp3'
];

let currentAudio = null;

document.getElementById('playButton').addEventListener('click', () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  const randomIndex = Math.floor(Math.random() * clips.length);
  const randomClip = clips[randomIndex];

  currentAudio = new Audio(randomClip);
  currentAudio.play();

  document.getElementById('nowPlaying').textContent = `Now playing: ${randomClip}`;
});
