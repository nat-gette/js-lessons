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

// // 3 На li через один установаить класс "item"

let li = document.querySelectorAll('li');
// debugger
for(let i = 0; i < li.length; i++) {
    if(i % 2 == 0){
        li[i].classList.add("item");
    }
}
console.log(li);

// 4 На все ссылки в примере, установить класс " custom-link"
debugger
let a = document.querySelectorAll('a');

let aClass = a[0].classList.add("custom-link");  //сделать цикл

console.log(a);

