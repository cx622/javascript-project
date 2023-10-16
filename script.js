const sections = document.getElementsByClassName('hidden');

// Wallpaper randomizer
const wallpapers = ["unsplash","1","2","3","4"];
const rng = Math.ceil(Math.random() * wallpapers.length) - 1;
console.log(rng);
document.getElementById("html").style.backgroundImage = `url('assets/wallpapers/${wallpapers[rng]}.jpg')`;

// Changes search bar to current url
function searchbar() {
  document.getElementById('searchbar').innerHTML = window.location.href;
}
// Makes the section visible
function loopin(pa) {
  sections[0].style.display = 'none';
  sections[pa].style.display = 'block';
}
// Checks for the hashtag
function hashtag() {
  searchbar();
  if (window.location.hash === "#achievements") {
    loopin(1);
  }
  else if (window.location.hash === "#skills") {
    loopin(2);
  }
  else if (window.location.hash === "#contact") {
    loopin(3);
  }
  else {
    sections[0].style.display = '';
  }
}
// Fixes a weird bug when going back a page
function idk() {
  sections[0].style.display = 'none';
  sections[1].style.display = 'none';
  sections[2].style.display = 'none';
  sections[3].style.display = 'none';
  hashtag();
}
// Event Listeners
document.addEventListener("DOMContentLoaded", function() {
  hashtag();
}); window.addEventListener('popstate', idk);
window.addEventListener('hashchange', hashtag);

