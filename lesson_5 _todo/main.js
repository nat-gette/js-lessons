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
let form = document.forms['addTodoItem'];
let inputText = form.elements['todoText'];


function listTemplate(task) {
    let li = document.createElement('li');
    li.textContent = task;
    li.className = 'list-group-item d-flex align-items-center';

    let iDelete = document.createElement('i');
    iDelete.className = 'fas fa-trash-alt delete-item ml-auto';

    li.appendChild(iDelete);

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
    // setDeleteEvent();
}

function addLists(list) {
    tasks.push(list);
    ul.insertAdjacentElement('afterbegin', listTemplate(list));
}

function delrtrListItem(target) {

    let parent = target.closest('li');
    let text = parent.textContent;
    let index = tasks.indexOf(text);
    tasks.splice(index, 1);
    parent.remove();
    console.log(tasks);
}

ul.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-item')) {
        delrtrListItem( e.target);

    }
});

form.addEventListener('submit', function (e) {
    e.preventDefault();
    // console.log(inputText.value);
    if(!inputText.value) {
        inputText.classList.add('is-invalid');
    } else {
        inputText.classList.remove('is-invalid')
        addLists(inputText.value);
        form.reset();
    }

});

inputText.addEventListener('keyup', function (e){
    console.log(inputText.value);
    if ( )
})


// generate list
generateList(tasks);

// // прослушивание событий

//  let btn = document.querySelector('.clear-btn');

//  function onClick(e) {
//     console.log('click1', e); 
// }
// function onClick2(e) {
//     console.log('click2', e); 
// }

//  btn.addEventListener("click", onClick);

//  btn.addEventListener('click', onClick2)

//  btn.removeEventListener('click', onClick2)
//  console.dir(btn);





// console.log(deleteBtns);

// for (let i = 0; i < deleteBtns.length; i++) {
//     deleteBtns[i].addEventListener('click', function (e) {
//         console.log('click');
//     });
// }

