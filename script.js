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
    displayName: 'Electric Chill Machine',
    artist: 'Jacinto' 
  },
  {
    name: 'song2',
    displayName: 'Seven Nation Army(Remix)',
    artist: 'White Stripes'
  },
  {
    name: 'song3',
    displayName: 'Goodnight Disco Queen',
    artist: 'Donna Summer'
  },
  {
    name: 'metric-1',
    displayName: 'Front Row(Remix)',
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

// Current Song
let songIndex = 1;

// Previous Song
function prevSong() {
  songIndex--;
  if(songIndex < 0) {
    songIndex = songs.length -1;
  }
  loadSong(songs[songIndex]);
  playSong();
}

// Next Song
function nextSong() {
  songIndex++;
  if(songIndex > songs.length -1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playSong();
}

// On Load - select first song
loadSong(songs[songIndex]);

// Event listeners
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);