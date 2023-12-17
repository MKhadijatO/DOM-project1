// DOM MANIPULATION

// EVENT DELEGATION

const list = document.querySelector('.items');

function change() {
    list.style.backgroundColor = "white";
    list.style.color = "black";
    list.style.fontWeight = "bold";
};


list.addEventListener('click', change);


