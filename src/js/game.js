const background = document.querySelector('.background');
const textbarFrom = document.querySelector('.textbar__from');
const textbarText = document.querySelector('.textbar__text');
const actionBtn = document.querySelector('.textbar__action');
const heroImg = document.querySelector('.content__hero');

const storyData = JSON.stringify(
  [
    {
      bg: 'url(https://wallpapercave.com/wp/wp4920588.jpg)',
      img: 'media/img/game-hero.png',
      name: 'Whonix',
      msg: 'Hey, how are you?',
      pos: 0
    },
    {
      bg: 'url(https://wallpapercave.com/wp/wp4920588.jpg)',
      img: 'media/img/game-hero.png',
      name: 'Whonix',
      msg: 'u know? i tired do that always.',
      pos: 100 + '%'
    },
    {
      bg: 'red',
      img: 'https://64.media.tumblr.com/5503e6631056023ccbcbc4bfe62ec635/tumblr_p07xc7auso1ur8xiso1_1280.png',
      name: 'Killer',
      msg: 'AND I WILL KILL YOU!',
      pos: 0
    }
  ]
)

// Dynamic Engine

const storyPages = new Array;
for (const item of JSON.parse(storyData)) {
  storyPages.push(Object.assign(item));
}

// Hover button

// function fadeOut(event) {
//     event.target.style.transition = '.5s ease'
//     event.target.style.opacity = '0%';
//     setTimeout(() => {
//         event.target.style.opacity = '100%';
//     }, 1000);
// }

actionBtn.addEventListener('mouseover', event => {
    event.target.setAttribute('src', 'https://www.svgrepo.com/show/138324/arrow-pointing-to-right-in-a-circle.svg');
})

actionBtn.addEventListener('mouseout', event => event.target.setAttribute('src', 'https://www.svgrepo.com/show/941/right-arrow.svg'))


let counter = -1;
restart = () => {
  counter = -1;
  nextPage();
}
function nextPage(timeout) {
	storyPages.length <= counter + 1 ? null
	: counter++
    setTimeout(() => {
      background.style.background = storyPages[counter].bg;
      heroImg.setAttribute('src', storyPages[counter].img);
      heroImg.style.transform =`translate(${storyPages[counter]?.pos}, 0)`;
      textbarFrom.innerText = storyPages[counter].name;
      textbarText.innerText = storyPages[counter].msg;
      // nextPage(3000);
      // console.log(counter);
    }, timeout);
}