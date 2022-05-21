// // forEach, filter, map, every, some, reduce


// let numbers = [10, 20, -10, 2, -5];
// let users = [
//     {
//         name: 'Nat',
//         age: 24,
//         gen: 'fem',
//         balance: 200,
//     },
//     {
//         name: 'Denis',
//         age: 29,
//         gen: 'male',
//         balance: 100,

//     },
//     {
//         name: 'Olga',
//         age: 22,
//         gen: 'fem',
//         balance: 300,
//     },
// ]


// //                filter
// let res = numbers.filter((item, i, arr) => {
//     return item >= 0;
// });

// res = users.filter(user => user.gen === 'fem')
// // console.log(res );



// //                  Map
// let mapRes = users.map(user => {
//     return user.name;
// })

// mapRes = users.map(user => {
//     user.age = user.age + 'yo';
//     return user;
// })
// // console.log(mapRes);



// //                Reduse

// let total = users.reduce((sum, user) => {
//     console.log(sum, user.balance);
//     return sum += user.balance;
// }, 0);

// total = users.reduce((sum, user) => sum += user.balance, 0);
// console.log(total);



// //                 Promises

// // let post;
// // let comments;
// // let id = 1;

// // ajax.send({
// //     method: 'GET',
// //     url:`https://jsonplaceholder.typicode.com/posts/${id}`,
// //     success: function(res) {
// //         post = JSON.parse(res);

// //         ajax.send({
// //             method: 'GET',
// //             url:`https://jsonplaceholder.typicode.com/posts/${id}/comments`,
// //             success: function(res) {
// //                 comments = JSON.parse(res);
// //             }
// //         })
// //     },
// //     error: function(err) {
// //         console.log(err);
// //     },
// // });


// // const promise1 = new Promise(function(resolve, reject) {
// //     setTimeout(function () {
// //         reject('err')
// //         resolve('First step');
// //     }, 2000);
// // });

// // promise1
// //     .then(data => {
// //         console.log(data);
// //         return 'new info'
// //     })
// //     .then((data) => {
// //         console.log(data);
// //     })
// //     .catch(err => {
// //         console.log(err);
// //     })




// // function promise1 () {
// //     return new Promise(function(resolve, reject) {
// //         setTimeout(function () {
// //             console.log("1");
// //             resolve('First step');
// //         }, 2000);
// //     })
// // }

// // function promise2 (data) {
// //     return new Promise(function(resolve, reject) {
// //         setTimeout(function () {
// //             console.log(data,'2');
// //             reject( 'ERR Second step');
// //         }, 2000);
// //     })
// // }
// // function promise3 (data) {
// //     return new Promise(function(resolve, reject) {
// //         setTimeout(function () {
// //             console.log(data, '3');
// //             resolve('Third step');
// //         }, 2000);
// //     })
// // }

// // promise1()
// //     .then(promise2)
// //     .then(promise3)
// //     .catch(err => {
// //         console.log(err);
// //     });


// let post;
// let comments;


// function getPostById(id) {
//     return new Promise (function(resolve, reject) {
//         ajax.send({
//             method: 'GET',
//             url: `https://jsonplaceholder.typicode.com/posts/${id}`,
//             success: resolve,
//             error: reject,
//         })
//     })
// }

// function getCommentsById(id) {
//     return new Promise (function(resolve, reject) {
//         ajax.send({
//             method: 'GET',
//             url: `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
//             success: resolve,
//             error: reject,
//         })
//     })
// }

// function generateTemplate(comments) { 
//     comments.forEach(comments => {

//     })
// }

// getPostById(1)
//     .then(res => {
//         post = JSON.parse(res);
//         return post.id
//     })
//     .then(getCommentsById)
//     .then(res => {
//         comments = JSON.parse(res);
//         console.log(comments);
//     })
//     .then(generateTemplate)
//     .catch(err => {
//         console.log(err);
//     })



// //                 Fetch

// fetch('https://jsonplaceholder.typicode.com/posts/1/comments', {
//     method: 'GET'
// })

//     .then(res => {
//         console.log(res.status);
//         console.log(res.headers.get('Content-type'));
//         console.log(res.json());
//         return res.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     });


// const server = new JsonPlaceholder();

// server.getPosts(1) 
//     .then(data => data.id)
//     .then(server.getCommentsById)
//     .then(comments => console.log(comments));