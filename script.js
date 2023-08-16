const discover = document.getElementById("Discover");
const myLib = document.getElementById("my-lib");
const radio = document.getElementById("Radio");
const artists = document.getElementById("artists");
const popular_songs = document.getElementById("popular_song");
const spanElement = discover.querySelector("span");
const myLibContent = document.getElementById("my-lib-content");
const radioContent = document.getElementById("Radio-content");
/*Menu Bar Buttons*/
const recommendedBtn = document.getElementById('recommendedBtn');
const topPicksBtn = document.getElementById('topPicks');
const podcastBtn = document.getElementById('podcast');
/*Menu Recommended Songs */
const recommendedSongs = document.getElementById("recommended-songs");
const topPickSongs = document.getElementById("topPickSongs");
const podcast = document.getElementById("podcast-cont");
/*Playlist Functions */
const lib_playlist = document.getElementById("lib-playlist");
const telugu = document.getElementById("telugu-playlist");
const hindi = document.getElementById("hind-playlist");
/*Playlist Btns */
const teluguBtn = document.getElementById("teluguBtn");
const hindiBtn = document.getElementById("hindiBtn");


recommendedBtn.addEventListener('click', () => {
    recommendedBtn.classList.add('active');
    topPicksBtn.classList.remove('active');
    podcastBtn.classList.remove('active');
    recommendedSongs.style.display="block";
    topPickSongs.style.display="none"
    podcast.style.display="none"

});

topPicksBtn.addEventListener('click', () => {
    recommendedBtn.classList.remove('active');
    topPicksBtn.classList.add('active');
    podcastBtn.classList.remove('active');
    recommendedSongs.style.display="none"
    topPickSongs.style.display="block";
    podcast.style.display="none"

});

podcastBtn.addEventListener('click', () => {
    recommendedBtn.classList.remove('active');
    topPicksBtn.classList.remove('active');
    podcastBtn.classList.add('active');
    recommendedSongs.style.display="none";
    topPickSongs.style.display="none"
    podcast.style.display="block"

});


discover.addEventListener("click", function() {
  artists.style.display="block";
  popular_songs.style.display="block";
  myLibContent.style.display="none";
  radioContent.style.display="none";
  lib_playlist.style.display="none"
  discover.style.color="#fff";
  myLib.style.color="#4c5262";
  radio.style.color="#4c5262";
  let span = document.createElement('span');
  discover.appendChild(spanElement);
  myLib.removeChild(spanElement);
  radio.removeChild(spanElement);
 
});

myLib.addEventListener("click", function() {
  myLibContent.style.display="block"
  artists.style.display="none";
  popular_songs.style.display="none"
  myLibContent.style.display="block";
  radioContent.style.display="none"
  lib_playlist.style.display="none"
  myLib.style.color="#fff";
  discover.style.color="#4c5262";
  radio.style.color="#4c5262";
  let span = document.createElement('span');
  myLib.appendChild(spanElement);
  discover.removeChild(spanElement);
  radio.removeChild(spanElement);
  
});

radio.addEventListener("click", function(){
  radioContent.style.display="block";
  artists.style.display="none";
  popular_songs.style.display="none";
  myLibContent.style.display="none";
  radio.style.color="#fff";
  discover.style.color="#4c5262";
  myLib.style.color="#4c5262";
  let span = document.createElement('span');
  radio.appendChild(spanElement);
  discover.removeChild(spanElement)
  myLib.removeChild(spanElement);
});

const libPlaylist = document.querySelector(".lib-playlist");
const liElements = libPlaylist.querySelectorAll("li");

teluguBtn.addEventListener("click", () => {
  libPlaylist.style.display = "block";
  telugu.style.display = "block";
  hindi.style.display="none";
});

hindiBtn.addEventListener("click", () => {
  libPlaylist.style.display = "block";
  telugu.style.display = "none";
  hindi.style.display="block";
  
});







