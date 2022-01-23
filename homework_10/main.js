const btnUsers = document.querySelector('.btn_users');
const usersList = document.querySelector('.users_list');
const modal = document.querySelector('.modal');
const modalUl = modal.querySelector('ul');
const btnModal = document.querySelector('.btn--modal')

btnUsers.addEventListener('click', () => {
    ajax.send({
        method: 'GET', 
        url: "user.json",
        success: function(res) {

            let responce = JSON.parse(res);
            generateList(responce);
        },
        error: function(err) {
            console.log(err);
        },
    });
});

const generateList = (users) => {
    clearList();
    for (let i = 0; i < users.length; i++) {
        const li = getliTemplate(users[i]);
        li.setAttribute('data-gender', users[i].gender);
        li.setAttribute('data-job', users[i].job);

        li.addEventListener('click', (e) => {
            // console.log(e.currentTarget);
            showModal(e.currentTarget, e.clientX, e.clientY)
        })
        usersList.append(li);

        btnModal.addEventListener('click', (e) => {
            closeModal();
        })

    }
};

const showModal = (user, x, y) => {
    modalUl.innerHTML = "";
    modal.classList.add('modal--active');
    // modal.style.left = `${y}px` ;
    // modal.style.right = `${x}px` ;

    let name = generateItemModal('name', user.textContent);
    let gender = generateItemModal('gender', user.dataset.gender);
    let job = generateItemModal('job', user.dataset.job);

    modalUl.append(name);
    modalUl.append(gender);
    modalUl.append(job);
}

const generateItemModal = (key, text) => {
    const li = document.createElement('li');
    li.innerText = `${key}: ${text}`;
    return li;
}

const getliTemplate = (user) => {
    let li = document.createElement('li');
    li.innerHTML = user.name;
    return li;
};

const clearList = () => {
    usersList.innerHTML = "";
};

const closeModal = () => {
    modal.classList.remove('modal--active')
}
// очищать список модалки (сделала)
// крестик у модалки (сделала, возможно будешь ругать за его внешний вид, но я намеренно не заморачивалась)
//  сделать отображение модалки рядом с именем на кот кликаю через (e) у прослушивателя событий (приблизительно что смогла сделала)