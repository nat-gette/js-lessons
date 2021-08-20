// ---------------ДОСТУП К DOM задачи---------------
//  получить  в консоль : 1.head; 2.body;

let head = document.head;
console.log(head);

let body = document.body;
console.log(body);

// вывести в консоль все дочерние элементы body

let bodyChildren = document.body.children;
console.log(bodyChildren);

let bodyChildren1 = document.body.childNodes;
console.log(bodyChildren1);

// вывести в консоль все дочерние узлы первого дива
let firstDivChild = document.body.firstElementChild;
console.log(firstDivChild);

// вывести в консоль все дочерние узлы первого дива, кроме первого и последнего

let children = document.body.children;

for (var i = 1; i < children.length - 1; ++i) {
    console.log(children[i])
}

