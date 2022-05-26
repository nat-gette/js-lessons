class UI {
    constructor() {
        this.profile = document.getElementById('profile');
        this.search_container = document.querySelector('.searchContainer')
    }
    // display profile
    showProfile(user) {

    }
    // display pepos
    showRepos(repos) {

    }
    // display alert message
    showAlert(message = '', className = 'alert alert-info') {

        this.clearAlert();
        // cteate tempale
        const alert =`<div class="${className}">${message}</div>`;

        this.search_container.insertAdjacentHTML('afterbegin', alert);

        setTimeout(() => this.clearAlert(), 2000);
    }

    // clear alert
    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        
        if (currentAlert) {
            currentAlert.remove();
        }
    }
}