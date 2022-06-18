// Init github
const github = new Github();

// Init UI
const ui = new UI();

// Init search input
const searchInput = document.getElementById('searchUser');

// Add Event Listener
searchInput.addEventListener('keyup', (e) => {
    // Get Input text
    const userText = e.target.value;

    if (userText !== '') { 
        // make http request
        github.getUser(userText)
            .then(user => {
                console.log(user);
                if (user.message == 'Not Found') {
                    // alert
                    ui.showAlert(`User ${userText} not found`, 'alert alert-danger');

                } else {
                    // profile
                    ui.showProfile(user);
                }
            })
            .catch(err => console.log(err))
    } else {
        // clear profile

    }
});
