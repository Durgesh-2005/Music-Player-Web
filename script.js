const discover = document.getElementById("Discover");
const myLib = document.getElementById("my-lib");
const radio = document.getElementById("Radio");
const artists = document.getElementById("artists");
const popular_songs = document.getElementById("popular_song");
const spanElement = discover.querySelector("span");
const myLibContent = document.getElementById("my-lib-content");
const radioContent = document.getElementById("Radio-content");

discover.addEventListener("click", function() {
  artists.style.display="block";
  popular_songs.style.display="block";
  myLibContent.style.display="none";
  radioContent.style.display="none";
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
