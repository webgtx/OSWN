const menuButton = document.getElementById('menu');
const menuBlock = document.querySelector('.intro__menu');
const exitButton = document.querySelector('.exit-button')
const mainBlock = document.querySelector('.intro__main');

menuButton.addEventListener('click', () => {
    if (menuButton.classList.contains('menuBtn-active')) {
        menuButton.classList.remove('menuBtn-active');
        menuBlock.classList.remove('menuBtn-active');
    } else {
        menuButton.classList.add('menuBtn-active');
        menuBlock.classList.add('menuBtn-active');
    }
});
exitButton.addEventListener('click', () => {
    if (menuButton.classList.contains('menuBtn-active')) {
        menuButton.classList.remove('menuBtn-active');
        menuBlock.classList.remove('menuBtn-active');
    }
});