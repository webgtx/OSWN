const textbarFrom = document.querySelector('.textbar__from')
const textbarText = document.querySelector('.textbar__text')
// Text interactive

const storyPages = ['Welcome to OSWN', ''];

let autoText = setInterval(() => {
    let i = -1;
    if ( i == storyPages.length - 1 ) {
        clearInterval(autoText);
        console.log('Finished');
    } else {
        i++;
        textbarText.innerText = storyPages[i];
    }
}, 10000);