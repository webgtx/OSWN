const background = document.querySelector('.background')
const textbarFrom = document.querySelector('.textbar__from')
const textbarText = document.querySelector('.textbar__text')
const heroImg = document.querySelector('.content__hero')

const storyData = JSON.stringify(
  [
    {
      bg: 'url(https://wallpapercave.com/wp/wp4920588.jpg)',
      img: '../../media/img/game-hero.png',
      name: 'Whonix',
      msg: 'Something',
    },
    {
      bg: 'url(https://wallpapercave.com/wp/wp4920588.jpg)',
      img: '../../media/img/game-hero.png',
      name: 'Whonix',
      msg: 'u know? i tired do that always.'
    },
    {
      bg: 'red',
      img: 'https://64.media.tumblr.com/5503e6631056023ccbcbc4bfe62ec635/tumblr_p07xc7auso1ur8xiso1_1280.png',
      name: 'Killer',
      msg: 'AND I WILL KILL YOU!'
    }
  ]
)

// Dynamic Engine

const storyPages = new Array;
for (const item of JSON.parse(storyData)) {
  storyPages.push(Object.assign(item));
}


let counter = -1;
restart = () => counter = -1;
function nextPage(timeout) {
	storyPages.length <= counter + 1 ? console.log('Done')
	: counter++
    setTimeout(() => {
      background.style.background = storyPages[counter].bg;
      heroImg.setAttribute('src', storyPages[counter].img);
      textbarFrom.innerText = storyPages[counter].name;
      textbarText.innerText = storyPages[counter].msg;
      // nextPage(3000)
      // console.log(counter);
    }, timeout);
}


