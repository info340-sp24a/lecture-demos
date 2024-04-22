'use strict';

const songArray = [
  { artist: "Queen", title: "Don't Stop Me Now", youtubeUrl: "https://www.youtube.com/watch?v=HgzGwKwLmgM" },
  { artist: "David Bowie", title: "Starman", youtubeUrl: "https://www.youtube.com/watch?v=rpO1U-nEgRU"
  },
  { artist: "Taylor Swift", title: "Cruel Summer", youtubeUrl: "https://www.youtube.com/watch?v=ic8j13piAhQ"
  },
  { artist: "Rick Astley", title: "Never Gonna Give You Up", url: ""}
];

//state variable
let puppyIsBig = false;

//selecting elements
const h1Elem = document.querySelector('h1');
const puppyPicElem = document.querySelector('#puppySection img');

// console.log(h1Elem);
// console.log(puppyPicElem);

//modify eleme nts
h1Elem.textContent = "I'm changed!";
// puppyPicElem.src = "img/husky.jpg";
// puppyPicElem.alt = "a grown husky";
// puppyPicElem.classList.add('rounded');

const headerElem = document.querySelector('header');
headerElem.classList.add('bg-dark');

function createSongItem(songObj) {
  const aElem = document.createElement('a');
  aElem.textContent = songObj.artist + " - " + songObj.title;
  aElem.href = songObj.url;

  const newLiElem = document.createElement('li');
  newLiElem.appendChild(aElem);
  // console.log(newLiElem);

  return newLiElem; //returns an element!
}

function renderSongArray(aSongArray) {
  //add new elements
  for(const song of aSongArray) {
    const songLiElem = createSongItem(song);
    
    const songListElem = document.querySelector('#dataSection ol');
    songListElem.appendChild(songLiElem);
  }
}

renderSongArray(songArray); //call the function! show the stuff!

//interactivity
const puppyButton = document.querySelector('#puppySection button');

function whatToDoWhenClicked(event){
  console.log("You clicked me!");
  if(puppyIsBig) {
    //if he's big currently, make him small
    puppyPicElem.src = "img/puppy.jpg";
    puppyPicElem.alt = "a puppy";
  } else {
    //if he's small currently, make him big
    puppyPicElem.src = "img/husky.jpg";
    puppyPicElem.alt = "a grown husky";
  }

  puppyIsBig = !puppyIsBig; //switch the state variable
}

puppyButton.addEventListener('click', whatToDoWhenClicked);

//form!
const addSongForm = document.querySelector('#formSection form');
addSongForm.addEventListener('submit', function(event) {
  event.preventDefault();

  /* 1. update the state data */
  const artistInput = document.querySelector('#artistInput');
  const titleInput = document.querySelector('#titleInput')
  console.log(artistInput.value);
  console.log(titleInput.value);

  //making a new object from the user values
  const newSongObj = {
    artist: artistInput.value,
    title: titleInput.value,
    youtubeUrl: "",
  }
  songArray.push(newSongObj);

  /* 2. re-render content */
  //delete the old list
  const songListElem = document.querySelector('#dataSection ol');
  songListElem.innerHTML = "";

  //add the song items
  renderSongArray(songArray);

  console.log("submitted");
});


