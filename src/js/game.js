const background = document.querySelector('.background')
const textbarFrom = document.querySelector('.textbar__from')
const textbarText = document.querySelector('.textbar__text')
const heroImg = document.querySelector('.content__hero')

const storyData = JSON.stringify(
  [
    {
      bg: 'rgb(23, 234, 453)',
      img: '../../media/img/game-hero.png',
      name: 'Whonix',
      msg: 'Something'
    },
    {
      bg: 'rgb(23, 234, 453)',
      img: '../../media/img/game-hero.png',
      name: 'Whonix',
      msg: 'u know? i tired do that always.'
    },
    {
      bg: 'red',
      img: '../../media/img/game-hero.png',
      name: 'Whonix',
      msg: 'AND I WILL KILL YOU!'
    }
  ]
)

// Text interactive

const storyPages = new Array;
for (const item of JSON.parse(storyData)) {
  storyPages.push(Object.assign(item));
}


let counter = -1;
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
