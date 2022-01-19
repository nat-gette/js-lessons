// AJAX
// FETCH
// Socket

// request, responce - запрос на сервер и ответ
// methods:
// get/Get - получение данных отт сервера
// post/Post - передача данных серверу
// put - обновление данных (может быть и post);
// delite - удаление



// const xhr = new XMLHttpRequest();

// // xhr.addEventListener('readystatechange', function (e) {
// //     console.log(xhr.readyState);
// //     if (xhr.readyState === 4) {
// //         console.log(xhr.responseText);
// //     }
// // })
// xhr.addEventListener('load', function (e) {
//     console.log(xhr.responseText);
// });

// xhr.addEventListener('error', function (e) {
//     console.log(xhr.responseText);
// });

// xhr.addEventListener('timeout', function (e) {
//     console.log('timeout');
// })

// xhr.open('GET','https://jsonplaceholder.typicode.com/posts');

// xhr.timeout = 50;

// xhr.setRequestHeader('Content-type', 'application/json');

// // xhr.getResponseHeader('Content-type')
// // xhr.getAllResponseHeader()


// xhr.send();





//get all posts

// debugger
ajax.send({ 

    method: 'GET', 
    url: 'https://jsonplaceholder.typicode.com/posts',
    success: function(res) {
        let responce = JSON.parse(res);
        console.log(responce);
    },
    error: function(err) {
        console.log(err);
    },
});


ajax.send({ 

    method: 'POST', 
    url: 'https://jsonplaceholder.typicode.com/posts',
    data: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'applications/json; charset=UTF-8',
    },
    success: function(res) {
        let responce = JSON.parse(res);
        console.log(responce);
    },
    error: function(err) {
        console.log(err);
    },
});

