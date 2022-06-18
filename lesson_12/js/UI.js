class UI {
    constructor() {
        this.profile = document.getElementById('profile');
        this.search_container = document.querySelector('.searchContainer')
    }
    // display profile
    showProfile(user) {
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img src="${user.avatar_url}" alt=""  class ="img-fluid mb-2">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                </div>
            </div>
        </div>
        `
    }
    // display pepos
    showRepos(repos) {

    }
    // display alert message
    showAlert(message = '', className = 'alert alert-info') {

        this.clearAlert();
        // cteate tempale
        const alert =`<div class="${className}" >${message}</div>`;

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