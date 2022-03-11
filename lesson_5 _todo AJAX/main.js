ajax.send({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/todos',
    success: function(data) {
        let tasks = JSON.parse(data);
        generateList(tasks);

    },
    error: (data) => {
        console.log(data);
    } ,
})

// let tasks = JSON.parse( localStorage.getItem('tasks') )|| [];

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
    if (task.completed) {
        li.classList.add('item-copleted');
    }
    li.setAttribute('data-id', task.id);

    let span = document.createElement('span');
    span.textContent = task.title;


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
    console.log(tasksArray);
    clearList();
    
    for (let i = 0; i < tasksArray.length; i++) {
        let li = listTemplate(tasksArray[i]);
        ul.appendChild(li);
    }

    return ul;
    // setDeleteEvent();
}

function addLists(id, text) {
    let newTask = {
        id,
        title: text,
    };

    // console.log(newTask);

    // tasks.unshift(newTask);

    ul.insertAdjacentElement('afterbegin', listTemplate(newTask));
    // add to localStorage
    // localStorage.setItem('tasks', JSON.stringify(tasks));
}

function deliteListItem(id) {
    // for (let i = 0; i < tasks.length; i ++) {
    //     if (tasks[i].id === id) {
    //         tasks.splice(i, 1);
    //         break;
    //     }
    // }

    // localStorage.setItem('tasks', JSON.stringify(tasks));

    ajax.send({
        method: 'DELETE',
        url: `https://jsonplaceholder.typicode.com/todos/${id}`,
        success: function(data) {
            console.log(data);
            message( {
                text: ' Task delited succes',
                cssClass: 'alert-warning',
                timeout: 4000
            });
        },
        error: (data) => {
            console.log(data);
        },
    })

}
function editListItem(id, newValue) {
    // for (let i = 0; i < tasks.length; i ++) {
    //     if (tasks[i].id === id) {
    //         tasks[i].text = newValue;
    //         break;
    //     }
    // }

    // localStorage.setItem('tasks', JSON.stringify(tasks));

    ajax.send({
        method: 'PUT',
        url: `https://jsonplaceholder.typicode.com/todos/${id}`,
        data: JSON.stringify({
            title: newValue,
        }),
        success: function(data) {
            console.log(data);
            message({
                text: 'success edit',
                cssClass: 'alert-success',
                timeout: 40000
            });
        },
        error: (data) => {
            console.log(data);
        },
    })
}

function message(settings) {
    notificationAlert.classList.add(settings.cssClass);
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
        
        // showAlert('alert-danger', 'Task has been removed success');
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
            editListItem(id, span.textContent);
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
    
    if(!inputText.value) {
        inputText.classList.add('is-invalid');
    } else {
      // inputText.classList.remove('is-invalid');
    
        const text = inputText.value;
        ajax.send({
            method: 'POST',
            url: `https://jsonplaceholder.typicode.com/todos`,
            data: JSON.stringify({
                title: text,
                completed: false,
            }),
            success: function(data) {
                const response = JSON.parse(data)
                addLists(response.id, text);
                message({
                    text: 'Task added success!',
                    cssClass: 'alert-success',
                    timeout: 40000
                });
            },
            error: (data) => {
                console.log(data);
            },
        })

        form.reset();
    }

});

inputText.addEventListener('keyup', function (e){
    
})


// generate list
// generateList(tasks);
// console.log(data);
