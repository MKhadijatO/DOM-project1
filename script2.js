// // DOM MANIPULATION  

// const title = document.querySelector('#main-heading');
// console.log(title);

// title.style.color = 'pink';

// const listItems = document.querySelectorAll('.list-items');

// for (let i = 0; i <listItems.length; i++) {
//     listItems[i].style.color = 'indigo';
//     // listItems[i].style.background = 'pink';
// }

// console.log(listItems);

// // const body = document.querySelector('body');

// // body.style.background = 'red'



// //CREATING ELEMENTS
// const ul = document.querySelector('ul');
// const li = document.createElement('li');

// //Adding elements 
// ul.append(li);

// //Modifying text
// li.innerText = 'Ololade'; //<li>Ololade</li>

// // //Modifying Attributes
// // li.setAttribute('class', 'list-items'); // <li class="list-items>Ololade</li>
// // li.removeAttribute('class'); //<li>Ololade</li>

// // //get element attributes
// // const header = document.querySelector('h1');
// // console.log(header.getAttribute('id'));


// //Modifying Classes

// li.classList.add('list-items')
// // li.classList.remove('list-items')

// console.log(li.classList.contains('list-items'));// returns 'true'


// REMOVE ELEMENTS
// li.remove();
// ul.remove();


//HOW TO TRAVERSE THE DOM

//Parent Node Traversal (traverse upward in the DOM tree)
let ul = document.querySelector('ul');

console.log(ul.parentNode.parentNode);
console.log(ul.parentElement.parentElement);

const html = document.documentElement
console.log(html.parentNode);
console.log(html.parentElement);

//child Node Traversal



//Sibling Node Traversal