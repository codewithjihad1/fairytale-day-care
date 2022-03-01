let body = document.querySelector('body');
let menuBar = document.querySelector('.hamburger');

menuBar.addEventListener('click', () => {
    body.classList.toggle('navShow');
})