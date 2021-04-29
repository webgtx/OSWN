const background = document.querySelector('.background')
const textbarFrom = document.querySelector('.textbar__from')
const textbarText = document.querySelector('.textbar__text')
const heroImg = document.querySelector('.content__hero')
// Text interactive

function ContentForm(bg, img, name, message) {
    this.bg = background;
    this.img = img;
    this.name = name;
    this.message = message;
}


const storyPages = [
    new ContentForm (
        'rgb(47, 145, 120)',
        '../img/game-hero.png',
        'Alisa',
        'Something'
    ),
    new ContentForm (
        'rgb(47, 145, 120)',
        '../img/game-hero.png',
        'Alisa',
        'Here i wanna teach you some'
    )
];
let i = -1;

let autoText = setInterval(() => {
    if ( i == storyPages.length - 1 ) {
        clearInterval(autoText);
        console.log('Finished');
    } else {
        i++;
        background.style.background = 'rgb(47, 145, 120)';
        img.setAttribute('src', storyPages[i].img);
        textbarFrom.innerText = storyPages[i].name;
        textbarText.innerText = storyPages[i].message;
        console.log(i);
    }
}, 5000);