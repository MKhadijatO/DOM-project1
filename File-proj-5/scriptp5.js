// DOM MANIPULATION

// EVENT DELEGATION

const list = document.querySelector('.items');

function change() {
    list.style.backgroundColor = "white";
    list.style.color = "black";
    list.style.fontWeight = "bold";
};


list.addEventListener('click', change);


document.querySelector('#word').addEventListener('click', function () {
    console.log('Word clicked');
});
document.querySelector('#powerpoint').addEventListener('click', function () {
    console.log('Powerpoint clicked');
});
document.querySelector('#excel').addEventListener('click', function () {
    console.log('Excel clicked');
});
document.querySelector('#paint').addEventListener('click', function () {
    console.log('Paint clicked');
});
document.querySelector('#access').addEventListener('click', function () {
    console.log('Access clicked');
});