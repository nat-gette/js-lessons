class Github {
    constructor() {
        this.client_id = '5cf882287abd29d1f836';
        this.client_secret = '8a7d713c1231db8fb9cda9eaea4e496b9d16ae98';
    }
    // get user by name
    getUser(name) {
        return new Promise((resolve, reject) => {
            fetch(`https://api.github.com/users/${name}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
                .then(res => res.json())
                .then(user => resolve(user))
                .catch(err => reject(err))
        })
    }
}