/*
    IntersectionObserver api
    https://stackoverflow.com/a/55181673/17816012
    https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry

*/

const navBar = document.querySelector('.navbar');
const header = document.querySelector('.header');
const suggestArticles = document.querySelector('.suggest-article-list');

let pageJustLoaded = true;

const toggleNavbarPin = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.target.isSameNode(header)) {
      if (pageJustLoaded) {
        pageJustLoaded = false;
        return;
      }
      navBar.classList.toggle('pin-top-fixed');
      suggestArticles.classList.toggle('pin-suggest-article');
    }
  });
});

toggleNavbarPin.observe(header);
