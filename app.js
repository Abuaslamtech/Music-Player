var player = document.getElementById("player");
var playPauseButton = document.getElementById("play-pause");
var seekBar = document.getElementById("seek");
var currentTime = document.getElementById("current-time");
var totalTime = document.getElementById("total-time");
var muteButton = document.getElementById("mute");
var volumeBar = document.getElementById("volume");

// Play/Pause function
function playPause() {
  if (player.paused) {
    player.play();
    playPauseButton.innerHTML = `<i class="fa-solid fa-pause"></i>`;
  } else {
    player.pause();
    playPauseButton.innerHTML = `<i class="fa-solid fa-play"></i>`;
  }
}

// Seek function
function seek() {
  var seekto = player.duration * (seekBar.value / 100);
  player.currentTime = seekto;
}

// Update current time function
function updateCurrentTime() {
  currentTime.innerHTML = formatTime(player.currentTime);
  seekBar.value = (player.currentTime / player.duration) * 100;
}

// Update total time function
function updateTotalTime() {
  totalTime.innerHTML = formatTime(player.duration);
}

// Format time function
function formatTime(time) {
  var minutes = Math.floor(time / 60);
  var seconds = Math.floor(time % 60);
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return minutes + ":" + seconds;
}

// Mute function
function mute() {
  if (player.muted) {
    player.muted = false;
    muteButton.innerHTML = `<i class="fa-solid fa-play"></i>`;
  } else {
    player.muted = true;
    muteButton.innerHTML = `<i class="fa-solid fa-volume-high"></i>`;
  }
}

// Change volume function
function changeVolume() {
  player.volume = volumeBar.value / 100;
}

// Event listeners
player.addEventListener("timeupdate", updateCurrentTime);
player.addEventListener("loadedmetadata", updateTotalTime);
player.addEventListener("ended", function () {
  playPauseButton.innerHTML = "Play";
});
