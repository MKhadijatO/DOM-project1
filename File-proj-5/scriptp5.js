// DOM MANIPULATION

// EVENT DELEGATION

// const list = document.querySelector('.items');

// function change() {
//     list.style.backgroundColor = "white";
    // list.style.color = "black";
    // list.style.fontWeight = "bold";
// };


// list.addEventListener('click', change);


/*document.querySelector('#word').addEventListener('click', function (e) {
    console.log('Word clicked');

    const target = e.target;
    
    if (target.matches('li')) {
        target.style.backgroundColor = "white";
        target.style.color = "black";
        target.style.fontWeight = "bold";
    }    

});

document.querySelector('#powerpoint').addEventListener('click', function (e) {
    console.log('Powerpoint clicked');

    const target = e.target;
    
    if (target.matches('li')) {
        target.style.backgroundColor = "white";
        target.style.color = "black";
        target.style.fontWeight = "bold";
    } 
});
document.querySelector('#excel').addEventListener('click', function (e) {
    console.log('Excel clicked');

    const target = e.target;
    
    if (target.matches('li')) {
        target.style.backgroundColor = "white";
        target.style.color = "black";
        target.style.fontWeight = "bold";
    } 
});

document.querySelector('#paint').addEventListener('click', function (e) {
    console.log('Paint clicked');

    const target = e.target;
    
    if (target.matches('li')) {
        target.style.backgroundColor = "white";
        target.style.color = "black";
        target.style.fontWeight = "bold";
    } 
});

document.querySelector('#access').addEventListener('click', function (e) {
    console.log('Access clicked');

    const target = e.target;
    
    if (target.matches('li')) {
        target.style.backgroundColor = "white";
        target.style.color = "black";
        target.style.fontWeight = "bold";
    } 
});*/


document.querySelector('#office').addEventListener
('click', function (e) {
    console.log( e.target.getAttribute('id') + ' is clicked');
    
    const target = e.target;
    if(target.matches('li')) {
        target.style.backgroundColor = "white";
        target.style.color = "black";
        target.style.fontWeight = "bold";
    }
});

const office = document.querySelector('#office');
const newOffice = document.createElement('li');

newOffice.innerHTML = 'Docment';
newOffice.setAttribute('id', 'office');

office.appendChild(newOffice);