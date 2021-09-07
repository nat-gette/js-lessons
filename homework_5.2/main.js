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

let list = document.querySelector('ul');

console.log(list.previousSibling, list.nextSibling);


// 4. Посчитать кол-во эл-в li в списке

let ollLi = document.querySelectorAll('li')

console.log(ollLi.length)

// --------------Nodes --------------

// 1 Найти параграф и получить его текстовое содержимое
// 2 Создать функцию, которая принимает в кач-ве аргумента узел DOM и возвращает инф-цию в виде объекта о типе узла, имени узла и колличестве дочерних узлов (если их нет, то 0)
// 3 Получить массив, кот состоит из текстового содержимого ссылок внутри списка : getTextFormUl(ul)   -->   ["Link1", 'Link 2', "Link 3"]
// 4 В параграфе заменить все дочерние текстовые узлы на "-text-" (вложенные теги должны остаться) 
