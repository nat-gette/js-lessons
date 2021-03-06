



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

let tasks = JSON.parse( localStorage.getItem('tasks') )|| [];
// let tasks = [];


let ul = document.querySelector('.list-group');
let form = document.forms['addTodoItem'];
let inputText = form.elements['todoText'];
let tasksSuccessAlert = document.querySelector('.alert-tasks');
let notificationAlert = document.querySelector('.notification-alert')


function generateId() {
    let id = '';
    let words = "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";

    for (let i = 0; i < 15; i ++) {
        let position = Math.floor( Math.random() * words.length );
        id += words[position];
    }
    return id;
}

function listTemplate(task) {
    let li = document.createElement('li');
    li.className = 'list-group-item d-flex align-items-center';
    li.setAttribute('data-id', task.id);

    let span = document.createElement('span');
    span.textContent = task.text;


    let iDelete = document.createElement('i');
    iDelete.className = 'fas fa-trash-alt delete-item ml-4';

    let iEdit = document.createElement('i');
    iEdit.className = 'fas fa-edit edit-item ml-auto';

    li.appendChild(span);
    li.appendChild(iEdit);
    li.appendChild(iDelete);

    return li;
}

function clearList() {
    ul.innerHTML = '';
}

function generateList(tasksArray) {
    clearList();
    
    for (let i = 0; i < tasks.length; i++) {
        let li = listTemplate(tasksArray[i]);
        ul.appendChild(li);

        // либо так 
        // ul.appendChild(listTemplate(tasksArray[i]))
    }

    return ul;
    // setDeleteEvent();
}

function addLists(list) {
    let newTask = {
        id: generateId(),
        text: list
    };

    tasks.unshift(newTask);

    ul.insertAdjacentElement('afterbegin', listTemplate(newTask));
    // add to localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function deliteListItem(id) {
    for (let i = 0; i < tasks.length; i ++) {
        if (tasks[i].id === id) {
            tasks.splice(i, 1);
            break;
        }
    }

    localStorage.setItem('tasks', JSON.stringify(tasks));

    message( {
        text: ' Task delited succes',
        cssClass: 'alert-warning',
        timeout: 4000
    });
}
function editListItem(id, newValue) {
    for (let i = 0; i < tasks.length; i ++) {
        if (tasks[i].id === id) {
            tasks[i].text = newValue;
            break;
        }
    }

    localStorage.setItem('tasks', JSON.stringify(tasks));
    
    message( {
        text: '',
        cssClass: 'alert-success',
        timeout: 4000
    });

}

function message (settings) {
    notificationAlert.classList.add('settings.cssClass');
    notificationAlert.textContent = settings.text;
    notificationAlert.classList.add('show');
    setTimeout (function () {
        notificationAlert.classList.remove('show');
    }, settings.timeout);
    
}


ul.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-item')) {
        let parent = e.target.closest('li');
        let id = parent.dataset.id;
        deliteListItem( id);
        parent.remove();
        
        showAlert('alert-danger', 'Task has been removed success');
    } else if (e.target.classList.contains('edit-item')) {
        e.target.classList.toggle('fa-save');
        let id = e.target.closest('li').dataset.id;
        let span = e.target.closest('li').querySelector('span');

        if (e.target.classList.contains('fa-save')) {
            span.setAttribute('contenteditable', true);
            span.focus(); 
        } else {
            span.setAttribute('contenteditable', false);
            span.blur(); 
            editListItem( id, span.textContent);
        }
    }
});

function showAlert(className, textAlert) {

    tasksSuccessAlert.classList.add('alert-tasks-active');
    tasksSuccessAlert.classList.add(className);
    tasksSuccessAlert.textContent = textAlert;
    
    setTimeout(() => {
        tasksSuccessAlert.classList.remove('alert-tasks-active');
        tasksSuccessAlert.classList.remove(className);
        tasksSuccessAlert.textContent = '';

    }, 3000);

}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    // console.log(inputText.value);
    if(!inputText.value) {
        inputText.classList.add('is-invalid');
    } else {
        inputText.classList.remove('is-invalid')
        addLists(inputText.value);
        form.reset();

        showAlert('alert-success', 'Task added success!')
        // tasksSuccessAlert.classList.add('alert-tasks-active');
        // tasksSuccessAlert.classList.add('alert-success');
        // tasksSuccessAlert.textContent = 'Task added success!';
        
        // setTimeout(() => {
        //     tasksSuccessAlert.classList.remove('alert-tasks-active');
        //     tasksSuccessAlert.classList.remove('alert-success');
        //     tasksSuccessAlert.textContent = '';

        // }, 3000);
        
    }

});

inputText.addEventListener('keyup', function (e){
    // inputText.value;
    // if ( )
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

//--------------------- Cобытия
// let body = document.body;
// let taskWrap = document.querySelector('.tasks-wrap');
// let container  = document.querySelector('.container');
// let listCard = document.querySelector('.list-card');
// let cardBody = document.querySelector('.list-card .card-body');
// let listGroup = document.querySelector('.list-group');

// // погружение события
// listGroup.addEventListener('click', function (e) {
//     console.log('.list-group');
// }, true);

// cardBody.addEventListener('click', function (e) {
//     console.log('.list-card .card-body');
// }, true);

// listCard.addEventListener('click', function (e) {
//     // e.stopImmediatePropagation();
//     console.log('.list-card');
// }, true);

// container.addEventListener('click', function (e) {
//     console.log('.container');
// }, true);

// taskWrap.addEventListener('click', function (e) {
//     console.log('.tasks-wrap');
// }, true);

// body.addEventListener('click', function (e) {
//     console.log('body');
// }, true);


// // всплытие события

// listGroup.addEventListener('click', function (e) {
//     console.log('.list-group');
// });

// cardBody.addEventListener('click', function (e) {
//     console.log('.list-card .card-body');
// });

// listCard.addEventListener('click', function (e) {
//     e.stopImmediatePropagation();
//     console.log('.list-card');
// });

// container.addEventListener('click', function (e) {
//     console.log('.container');
// });

// taskWrap.addEventListener('click', function (e) {
//     console.log('.tasks-wrap');
// });

// body.addEventListener('click', function (e) {
//     console.log('body');
// });