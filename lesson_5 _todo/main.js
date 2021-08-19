let tasks = [
    "выучить js",
    "выучить Angular 4",
    "сходить на конфу"
];


// let ul = document.querySelector('.list-group');

//как создать один эл-к списка

// let ul = document.querySelector('.list-group');

// let li = document.createElement('li');
// li.textContent = 'выучить js';
// li.className = "list-group-item"

// console.log(li);
// ul.appendChild(li);

 
//как создать  список через цикл

// let ul = document.querySelector('.list-group');

// for (let i = 0; i < tasks.length; i++) {
//     let li = document.createElement('li');
//     li.textContent = tasks[i];
//     li.className = "list-group-item"

//     ul.appendChild(li);
// }

//как создать список функцией 
// let ul = document.querySelector('.list-group');

// function generateList(tasksArray) {
//     for (let i = 0; i < tasks.length; i++) {
//         let li = document.createElement('li');
//         li.textContent = tasks[i];
//         li.className = "list-group-item"
    
//         ul.appendChild(li);
//     }
// }

// generateList(tasks);

//как создать список ( несколько функций)

let ul = document.querySelector('.list-group');

function listTemplate(task) {
    let li = document.createElement('li');
    li.textContent = task;
    li.className = "list-group-item"

    return li;
}

function clearList() {
    ul.innerHTML = '';
}

function generateList(tasksArray) {
    for (let i = 0; i < tasks.length; i++) {
        let li = listTemplate(tasksArray[i]);
        ul.appendChild(li);

        // либо так 
        // ul.appendChild(listTemplate(tasksArray[i]))
    }
}

function addLists(list) {
    tasks.push(list);
    generateList(tasks);
}


generateList(tasks);