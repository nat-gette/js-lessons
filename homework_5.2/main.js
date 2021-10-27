// --------------- DOM задачи---------------
// 1.Создать функцию, кот принимает 2 элемента. Функция проверяет, является ли первый элемент родителем для второго: isPArent(parent,child)

// function isParent (parent, child) {
//     // debugger
//     return !!child.closest(parent.tagName)
// }
// console.log(isParent(document.body.children[0], document.querySelector('mark')));
// console.log(isParent(document.querySelector('ul'), document.querySelector('mark')));

// 2. Получить список всех ссылок внутри ul;

// let links = document.querySelectorAll('a');

// let linksSort = [];
// for (let i = 0; i < links.length; i++) {
//     if(!links[i].closest('ul')) {
//         linksSort.push(links[i])
//     }
// }
//  console.log(linksSort);

// 3. Найти эл-т, кот находится перед и после списка ul

// let list = document.querySelector('ul');

// console.log(list.previousSibling, list.nextSibling);


// // 4. Посчитать кол-во эл-в li в списке

// let ollLi = document.querySelectorAll('li')

// console.log(ollLi.length)

// --------------Nodes --------------

// // 1 Найти параграф и получить его текстовое содержимое

// const paragraph = document.querySelector('p');
// const paragraphText = paragraph.textContent;
// console.log(paragraphText);


// // 2 Создать функцию, которая принимает в кач-ве аргумента узел DOM и возвращает инф-цию в виде объекта о типе узла, имени узла и колличестве дочерних узлов (если их нет, то 0)

// function getNodeTypes(nodeElement) {
    
//     const infoNode = {
//         typeNode: "",
//         nameNode: nodeElement.nodeName,
//         countchildrenNode: nodeElement.children.length,
//     };
//     // debugger

//     let info = nodeElement.nodeType;
//     if (info == 1 ) {
//         infoNode.typeNode = "element node";
//     } else if (info == 3) {
//         infoNode.typeNode ="text node";
//     } else if (info == 8) {
//         infoNode.typeNode ="comment node";
//     };

//     return infoNode;

// }

// console.log(getNodeTypes(document.querySelector('p')));

// // 3 Получить массив, кот состоит из текстового содержимого ссылок внутри списка : getTextFormUl(ul)   -->   ["Link1", 'Link 2', "Link 3"]

// function getTextFormUl(tag){
//     let arr = [];
    
//     for (let i = 0; i < tag.children.length; i++) {
//         arr.push(tag.children[i].textContent);
//     }
//     return arr;
// }

// console.log(getTextFormUl(document.querySelector('ul')));


// 4 В параграфе заменить все дочерние текстовые узлы на "-text-" (вложенные теги должны остаться) 


// let paragraph = document.querySelector('p');
// let paragraphChild = paragraph.childNodes;
// // console.log(paragraphChild);

// for(i = 0; i < paragraphChild.length; i ++) {
//     if(paragraphChild[i].nodeType == 3) {
//         paragraphChild[i].textContent = "-text-"
//     }
// }
// paragraph.textContent= '-text-';




// -------------- NODES задачи-------------------
// // 1 Найти в коде список ul и добавить класс "list"

// const ul = document.querySelector('ul');

// let classAdd= ul.classList.add("list");

// console.log(ul.className); 

// // 2 Найти в коде ссылку, находящуюся после списка ul , добавить  id = link

// const link = ul.nextElementSibling.nextElementSibling; // все перерыла но так и не поняла как еще обратиться к этой ссылке через sibling-ов, ты вроде как одобрил этот путь, по-другому не могу придумать как найти эту ссылку после ul.
// console.log(link);
// let linkAdd = link.setAttribute('id','link');
// console.log(link.hasAttribute)

// let lastLink = document.getElementsByTagName('a');
// // lastLink[lastLink.length - 1].id = 'link';
// lastLink[lastLink.length - 1].setAttribute('id', 'link');
// console.log(lastLink);


// // 3 На li через один установаить класс "item"

// let li = document.querySelectorAll('li');
// // debugger
// for(let i = 0; i < li.length; i++) {
//     if(i % 2 == 0){
//         li[i].classList.add("item");
//     }
// }
// console.log(li);

// // 4 На все ссылки в примере, установить класс " custom-link"

// let a = document.querySelectorAll('a');
//  debugger
// for(let i = 0; i < a.length; i++){
//     let aClass = a[i].classList.add("custom-link"); 
// }

// console.log(a);




// -------------------- Манипкуляция содержимым. презентация 24--------------

// 1. Добавить в список несколько li с классом 'new-item' и текстом 'item i'

// li.className = 'new-item';
// li.insertAdjacentHTML('afterbegin', 'item');
// ul.appendChild(li);

// function createItems (itemNum) {

//   let ul = document.querySelector('ul');
//   let ulPreviousChild = ul.children;
//   let ulPreviousChildNum =  ulPreviousChild.length;
//   // console.log(ulPreviousChildNum);

//   for(let i = ulPreviousChildNum + 1; i <= ulPreviousChildNum + itemNum; i++) {
//     let li = document.createElement('li');

//     itemText = 'item' + " " + i ;
//     li.className = 'new-item';
//     li.insertAdjacentText('beforeend', itemText);
//     ul.appendChild(li);
//   }  
// }

// createItems (2);

// 2. Создать 3 элемента strong и добавить их в конец ссылок, которые находятся внутри списка

// let aList = document.querySelectorAll('ul a');

// for(i = 0; i < 3; i++) {
//     let strong = document.createElement('strong');
//     strong.innerText = aList[i].textContent;
//     aList[i].innerHTML = '';

//     aList[i].insertAdjacentElement("beforeend", strong);
// }



// 3. В начало документа (body) добавить картинку img  с атрибутами src и alt.

// var img = document.createElement('img');
// img.setAttribute('src', 'https://www.1zoom.ru/prev2/254/253234.jpg');
// img.setAttribute('alt', 'кот следит за целью');
// document.body.insertBefore(img, document.body.firstChild);


// // 4. Найти на странице элемент mark , добавить в конец содержимого текст "green " и на эл-т установить класс green

// let mark = document.querySelector('mark');

// mark.insertAdjacentText('beforeend', ' green');
// mark.className = 'green';




// 5. отсортировать li внутри списка в обратном порядке по тексту внутри

let ul = document.querySelector('ul');
let liList = ul.children;


let textArr = [];

for (i = 0; i < liList.length; i++) {
    textArr += liList[i].innerText + ' ,' ;
}

ul.textContent = '';

for(i = 0; i < textArr.length; i--) {
debugger
    ul.insertAdjacentHtml("beforeend", '<li> textArr[i] </li>' );
   
}





