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

// function returnWidth() {
//     if (newWidth == '200px') {
//         return revealButton.style.width = '500px';
//     }
// }

// revealButton.addEventListener('click', returnWidth)