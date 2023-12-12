//DOM MANIPULATION

// EVENTS

const button = document.querySelector('.reveal-button');

const hiddenContent = document.querySelector('.box');

function revealContent () {
    if (hiddenContent.classList.contains('reveal-button')){
        hiddenContent.classList.remove('reveal-button');
    } else {
        hiddenContent.classList.add('reveal-button');
    }
}

button.addEventListener('click', revealContent)