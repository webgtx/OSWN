const textbarFrom = document.querySelector('.textbar__from')
const textbarText = document.querySelector('.textbar__text')
const heroImg = document.querySelector('.content__hero')
// Text interactive

function ContentForm(img, name, message) {
    this.img = img
    this.name = name;
    this.message = message;
}


const storyPages = [
    new ContentForm (
        `<img class="content__hero" src="../img/game-hero.png" alt="">`,
        'Alisa',
        'Something'
    ),
    new ContentForm (
        `<img class="content__hero" src="../img/game-hero.png" alt="">`,
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
        heroImg.innerHTML = storyPages[i].img;
        textbarFrom.innerText = storyPages[i].name;
        textbarText.innerText = storyPages[i].message;
        console.log(i);
    }
}, 10000);