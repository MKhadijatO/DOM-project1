//DOM MANIPULATION

//EVENT LISTENERS

//element.eventlistener('click', function)

const boxOne = document.querySelector('.two');

function changeBackground () {
    boxOne.style.backgroundColor = "red"
}

function color() {
    boxOne.style.backgroundColor = "#190280"
    boxOne.style.color = "#44f0d9"

}

boxOne.addEventListener('mouseover', changeBackground);
boxOne.addEventListener('mouseout', color); // how do I return to the original color


const btn3 = document.querySelector('.btn-3');

function popUp() {
    alert("You are doing well")
 }

 function changeBckgrdClr() {
    btn3.style.backgroundColor = "white";
 }


btn3.addEventListener('click', popUp);
btn3.addEventListener('mouseover', changeBckgrdClr);