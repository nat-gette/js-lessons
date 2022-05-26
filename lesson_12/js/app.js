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
                if (user.massage === 'Not Found' || user.message === "API rate limit exceeded for 78.109.73.101. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)") {
                    // alert
                    ui.showAlert(`User ${userText} not found`, 'alert alert-danger');

                } else {
                    // profile
                }
            })
            .catch(err => console.log(err))
    } else {
        // clear profile

    }
});
