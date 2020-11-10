const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// Music
const songs = [
  {
    name: 'song1',
    display: 'Electric Chill Machine',
    artist: 'Jacinto' 
  },
  {
    name: 'song2',
    display: 'Seven Nation Army(Remix)',
    artist: 'White Stripes'
  },
  {
    name: 'song3',
    display: 'Goodnight Disco Queen',
    artist: 'Donna Summer'
  },
  {
    name: 'metric-1',
    display: 'Front Row(Remix)',
    artist: 'Metric'
  }
];

// Check if playing
let isPlaying = false;

// Play
function playSong() {
  isPlaying = true;
  playBtn.classList.replace('fa-play-circle', 'fa-pause-circle');
  playBtn.setAttribute('title', 'Pause');
  music.play();
}

// Pause
function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace('fa-pause-circle', 'fa-play-circle');
  playBtn.setAttribute('title', 'Play');
  music.pause();
}

// Play || Pause
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

// Update DOM
function loadSong(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `music/${song.name}.mp3`;
  image.src = `img/${song.name}.jpg`;
}

// On Load - select first song
loadSong(songs[1]);