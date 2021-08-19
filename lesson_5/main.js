// DOM
let divs = document.getElementsByTagName('div');
let divsByClass = document.getElementsByClassName('box');
let divById = document.getElementById('element');//получаем не коллекцию, а один элемент, тк id считается уникальным идентификатором

let divsQuery = document.querySelectorAll('body');// получим нодлист, "снимок", которая является "не живой" (не обнавляется, если что-то удалить).
let divQuery = document.querySelector('div'); //вернет первый див


console.log(divsQuery);
// console.dir  выводит  обьект

// .nextElementSibling  
// .previusElementSibling
// .children


let link = document.querySelector('ul a');
console.dir(link);

// let parent = link.closest('ul'); 
console.dir(parent);