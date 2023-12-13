//DOM MANIPULATION

// EVENTS

const revealButton = document.querySelector('.reveal-button');



const hiddenContent = document.querySelector('.box');

function revealContent () {
    if (hiddenContent.classList.contains('reveal-button')){
        hiddenContent.classList.remove('reveal-button');
    } else {
        hiddenContent.classList.add('reveal-button');
        const newWidth = revealButton.style.width = '200px';
        return newWidth;
    }
}

revealButton.addEventListener('click', revealContent)

// function returnWidth(newWidth === '200px') {
//     revealContent
// }

// revealButton.addEventListener('click', )