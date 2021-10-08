let tasks = JSON.parse( localStorage.getItem('tasks') )|| [];


let ul = document.querySelector('.list-group');
let form = document.forms['addTodoItem'];
let inputText = form.elements['todoText'];
let tasksSuccessAlert = document.querySelector('.alert-tasks');
let emptyListAlert = document.querySelector('.alert-tasks-list')


function listTemplate(task) {
    let li = document.createElement('li');
    li.className = 'list-group-item d-flex align-items-center';

    let span = document.createElement('span');
    span.textContent = task;


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
    for (let i = 0; i < tasks.length; i++) {
        let li = listTemplate(tasksArray[i]);
        ul.appendChild(li);

        // либо так 
        // ul.appendChild(listTemplate(tasksArray[i]))
    }
    if (tasks.length == 0) {

        emptyListAlert.classList.add('alert-tasks-active');
        emptyListAlert.classList.add('alert-info');
        emptyListAlert.textContent = 'Empty list';
        // как очистить лист до конца? если удалить все элементы, то они не удалятся из хранилища, перезапись произойдет только при добавлении какого-либо таска в список
    }
    // setDeleteEvent();
}

function addLists(list) {
    tasks.push(list);
    ul.insertAdjacentElement('afterbegin', listTemplate(list));
    // add to localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function deliteListItem(target) {

    let parent = target.closest('li');
    let text = parent.textContent;
    let index = tasks.indexOf(text);
    tasks.splice(index, 1);
    parent.remove();
    console.log(tasks);
}

ul.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-item')) {
        deliteListItem( e.target);

        showAlert('alert-danger', 'Task has been removed success');
    } else if (e.target.classList.contains('edit-item')) {
        let span = e.target.closest('li').querySelector('span');
        span.setAttribute('contenteditable', true);
        span.focus();
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
    console.log(inputText.value);
    // if ( )
})


// generate list
generateList(tasks);




