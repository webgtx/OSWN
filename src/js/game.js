const textbarFrom = document.querySelector('.textbar__from')
const textbarText = document.querySelector('.textbar__text')
// Text interactive

const storyPages = ['Welcome to OSWN', 'Here i wanna teach, how to play'];
let i = -1;

let autoText = setInterval(() => {
    if ( i == storyPages.length - 1 ) {
        clearInterval(autoText);
        console.log('Finished');
    } else {
        i++;
        textbarText.innerText = storyPages[i];
        console.log(i);
        
    }
}, 10000);