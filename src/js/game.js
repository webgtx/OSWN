const background = document.querySelector('.background')
const textbarFrom = document.querySelector('.textbar__from')
const textbarText = document.querySelector('.textbar__text')
const heroImg = document.querySelector('.content__hero')
// Text interactive

function ContentForm(bg, img, name, message) {
    this.bg = bg;
    this.img = img;
    this.name = name;
    this.message = message;
}


const storyPages = [
    new ContentForm (
        'rgb(47, 145, 120)',
        '../../media/img/game-hero.png',
        'Alisa',
        'Something'
    ),
    new ContentForm (
        'rgb(23, 234, 453)',
        '../../media/img/game-hero.png',
        'Alisa',
        'Here i wanna teach you some'
    )
];

let counter = -1;

function nextPage(timeout) {
	storyPages.length <= counter + 1 ? console.log('Done')
	: counter++
    setTimeout(() => {
      background.style.background = storyPages[counter].bg;
      heroImg.setAttribute('src', storyPages[counter].img);
      textbarFrom.innerText = storyPages[counter].name;
      textbarText.innerText = storyPages[counter].message;
      console.log(counter);
    }, timeout);
}
