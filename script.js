const elements = document.getElementsByClassName('hidden');

// Changes search bar to current url
function searchbar() {
  document.getElementById('searchbar').innerHTML = window.location.href;
}
// Makes the section visible
function loopin(pa) {
  elements[0].style.display = 'none';
  elements[pa].style.display = 'block';
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
    elements[0].style.display = '';
  }
}
// Fixes a weird bug when going back a page
function idk() {
  elements[0].style.display = 'none';
  elements[1].style.display = 'none';
  elements[2].style.display = 'none';
  elements[3].style.display = 'none';
  handleHashChange();
}
// Event Listeners
document.addEventListener("DOMContentLoaded", hashtag); window.addEventListener('popstate', idk);
window.addEventListener('hashchange', hashtag);

