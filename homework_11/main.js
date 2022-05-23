// 1. Решить задание из 11й задачи лекции No 7 “Массивы” с
// использованием filter() (вместо цикла)
// Создать функцию, которая будет принимать массив продуктов и две цены. Функция должна вернуть все продукты, 
// цена которых находится в указанном диапазоне, и отсортировать от дешевых к дорогим
// const products = [
//     {title: 'prod1', price: 5.2},
//     {title: 'prod2', price: 0.18},
//     {title: 'prod3', price: 15},
//     {title: 'prod4', price: 25},
//     {title: 'prod5', price: 18.9},
//     {title: 'prod6', price: 8},
//     {title: 'prod7', price: 19},
//     {title: 'prod8', price: 63},
// ];

// function sortBy(products, priceFrom, priceTo) {
//     products.sort((prev, next) => prev.price - next.price);
    
//     return products.filter((product) => {
//         return product.price > priceFrom  &&  product.price < priceTo;
//     });
// }

// console.log(sortBy(products, 5, 20));


// 2. На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
// каждый элемент которого будет хранить информацию о числе и его
// четности:
// [{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]

// const arrNumbers = [1, 2, 3, 5, 8, 9, 10];
// const newArr = arrNumbers.map(num => {
//     return {
//         digit: num, 
//         odd: num % 2 === 0 ? false : true,
//     }
// });

// console.log(newArr);



// 3. Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы,
// равные нулю. Если да - вернуть false

// const arr = [12, 4, 50, 1, 0, 18, 40].some(num => num === 0 && false)
// console.log(arr)

// let result = [12, 4, 50, 1, 0, 18, 40].some((element) => {
//   if (element === 0) {
//     return false;
//   }
// });

// let result = [12, 4, 50, 1, 0, 18, 40].every((element) => element > 0 );

// 4. Проверить, содержит ли массив ['yes', 'hello', 'no', 'easycode', 'what']
// хотя бы одно слово длиной больше 3х букв. Если да - вернуть true

// const arr = ['yes', 'hello', 'no', 'easycode', 'what'].some(element => {
//     return element.length > 3;
// })
// console.log(arr)

// let arr = ['yes', 'hello', 'no', 'easycode', 'what'].some((element) => element.length > 3 );


// 5. Дан массив объектов, где каждый объект содержит информацию о букве и 
// месте её расположения в строке {буква: "a", позиция_в_предложении: 1}. 
// Напишите функцию, которая из элементов массива соберет и вернет строку, 
// основываясь на index каждой буквы.
// Как можно решить эту же задачу, не используя сортировку и reduce()?

// let listLetters = [
//     { char: "a", index: 12 },
//     { char: "w", index: 8 },
//     { char: "Y", index: 10 },
//     { char: "p", index: 3 },
//     { char: "p", index: 2 },
//     { char: "N", index: 6 },
//     { char: " ", index: 5 },
//     { char: "y", index: 4 },
//     { char: "r", index: 13 },
//     { char: "H", index: 0 },
//     { char: "e", index: 11 },
//     { char: "a", index: 1 },
//     { char: " ", index: 9 },
//     { char: "!", index: 14 },
//     { char: "e", index: 7 }
//     ];

//   // const sortObj = listLetters.sort((prev, next) => prev.index - next.index);
//   // const result = sortObj.reduce((sum, current) => sum += current.char, '');
//   // console.log(result)

//     function newArr (listLetters) {
//         const arr = [];
//         for (let i = 0; i < listLetters.length; i += 1) {
//             arr[listLetters[i].index] = listLetters[i].char;
//         }
//         return arr.join('');   
//     }

//     console.log(newArr(listLetters))




//                              ЗАДАЧИ ИЗ УЧЕБНИКА 

//         Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.
//         Функция должна возвращать новый массив и не изменять исходный.

// let arr = [5, 3, 8, 1];

// function filterRange (arr, from, before) {
//     let result = arr.filter(function(item) {
//         return from < item && item < before;
//     })
//     return result;
// }

// let filtered = filterRange(arr, 1, 4);

// console.log(filtered);
// console.log(arr);



//         Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
// //         Функция должна изменять принимаемый массив и ничего не возвращать.

// let arr = [5, 3, 8, 1];

// function filterRangeInPlace (arr, from, before) {
//     for(let i = 0; i < arr.length; i += 1) {
//         if (arr[i] < from || arr[i] > before) {
//             arr.splice(i, 1)
//         }
//     }
// }


// filterRangeInPlace(arr, 1, 4); 
// console.log(arr);

// //          У вас есть массив объектов user, и в каждом из них есть user.name. 
// //          Напишите код, который преобразует их в массив имён.

// let users = [
//     { name: "Вася", age: 25 },
//     { name: "Петя", age: 30 },
//     { name: "Маша", age: 28 },
// ];

// let names = users.map(item => item.name);
// console.log(names);

// // or

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users1= [ vasya, petya, masha ];

// let names1= users.map(function(item) {
//     return item.name;
// })
// console.log(names1);


// //          Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
// //          Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.


// let vasya1 = { name: "Вася", age: 20 };
// let petya1 = { name: "Петя", age: 30 };
// let masha1 = { name: "Маша", age: 40 };

// let arr1 = [ vasya1, petya1, masha1 ];

// function getAverageAge(arr) {
//     let allAge = arr.reduce((sum, item) => sum + item.age, 0);

//     return allAge / arr.length;
// }

// console.log( getAverageAge(arr1));



// Promise: tasks
// 1. Создать функцию, которая возвращает промис. Функция принимает два аргумента - время, через которое промис должен 
// выполниться, и значение, с которым промис будет выполнен

// function promiseCreator(time, answer) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(answer);
//         }, time);
//     })
// }

// const prom = promiseCreator(500, 'Ok!')
//     .then(console.log);


// 2. Используя fetch метод, создать get запрос к адресу https://jsonplaceholder.typicode.com/posts
// Отобразить в списке ul полученные поля из response. Показывать только id и title поля
// let posts;
// const promise = fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'GET',
// })

// promise.then(response => response.json()).then(data => {
//     generateList(data);
// })


// --или
// promise.then(async function (response) {
//     let data = await response.json();
//     generateList(data);
// })
// ---

// function generateList(data) {
//     console.log(data)
// }

// function generateTemplate(item) {
//     let elem = document.createElement('li')
//     li.innerText = item.id + ' - ' + item.title;    
// }


// 3.Выполнить два запроса: 
// - https://jsonplaceholder.typicode.com/posts  
// - https://jsonplaceholder.typicode.com/users. 

// Вывести в консоль информацию о количестве постов и юзеров.
// Запросы должны выполняться одновременно, информацию выводить только после того, как будут обработаны оба запроса.

let urls = [
    'https://jsonplaceholder.typicode.com/posts',  
    'https://jsonplaceholder.typicode.com/users',
]

// Преобразуем каждый URL в промис, возвращённый fetch
// let requests = urls.map(url => fetch(url).then(function (response) {
//     console.log(response.url, response.data);
//     return response.json();
// }));

// let requests = urls.map(url => fetch(url).then(responce => responce.json()));

// console.log(requests);
// // Promise.all будет ожидать выполнения всех промисов
// Promise.all(requests).then(res => res.forEach(r => console.log(r)));

// Promise.all([
//     fetch(urls[0]),
//     fetch(urls[1])
// ]).then(function (responseList) {
//     postResponse = responseList[0];
//     userResponse = responseList[1];
//     postResponse.json().then(data => console.log(`We have ${data.length} posts`));
//     userResponse.json().then(data => console.log(`We have ${data.length} users`));
// })



// Одновременно выполнить запросы, одновременно получить данные с помощью .json(). Только после всего вывести результат
// .then(responseList => responseList.map(response => response.json())).then(promiseList => Promise.all(promiseList)).then(
//     function (postsAndUrls) {
//         let posts = postsAndUrls[0];
//         let users = postsAndUrls[1];
//         console.log(`Users = ${users.length}, Posts = ${posts.length}`);
//     }
// )

// Просто получить цифры
// .then(responseList => responseList.forEach(resp => resp.json().then(data => console.log(data.length))))
// 

// Promise.all([
//     fetch(urls[0]),
//     fetch(urls[1])
// ]).then(async function (responseList) {
//     postResponse = responseList[0];
//     userResponse = responseList[1];
//     let postMessage = await postResponse.json().then(data => `We have ${data.length} posts`);
//     let userMessage = await userResponse.json().then(data => `We have ${data.length} users`);
//     console.log(postMessage, userMessage)
// })



// ---Решение Никиты

// let getPosts = function() {
//     return new Promise((resolve, reject) => {
//       fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'GET'
//       })
//         .then((res) => resolve(res.json()))
//         .catch(err => reject(err))
//     })
//   };
  
//   let getUsers = function() {
//     return new Promise((resolve, reject) => {
//       fetch('https://jsonplaceholder.typicode.com/users', {
//         method: 'GET'
//       })
//         .then((res) => resolve(res.json()))
//         .catch(err => reject(err))
//     })
//   };
  
//   // getPosts().then(data => console.log(data));
  
//   Promise.all([
//     getPosts()
//       // .then(data => data)
//       .then(data => {
//         let countPosts = 'Количество постов = ' + data.length;
//         return countPosts;
//       }),
//     getUsers()
//       // .then(data => data)
//       .then(data => {
//         let countUsers = 'Количество пользователей = ' + data.length;
//         return countUsers;
//       })
//   ])
//     .then(data => console.log(data));


// и еще один Никиты

// const posts = fetch('https://jsonplaceholder.typicode.com/posts', { method: 'GET' });
// const users = fetch('https://jsonplaceholder.typicode.com/users', { method: 'GET' });

// Promise.all([
//     new Promise(response => {
//     posts
//         .then(res => res.json())
//         .then(posts => response('posts: ' + posts.length))
//     }),
//     new Promise(response => {
//     users
//         .then(res => res.json())
//         .then(users => response('users: ' + users.length))
//     })
// ]).then(data => console.log(data))




///1

// const prom = async () => {
//     await setTimeout(() => {
//         console.cog('ok');
//     }, 3000)
// };

// prom();



// // 2

// const prom = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(function() {
//             reject('err')
//         }, 3000);
//     });
// }

// prom().then().catch(console.log)


//              3 Задача : Сделайте функцию, которая будет генерировать случайные числа от 1 до 10. 
// Сделайте так, чтобы сгенерированное число было задержкой функции setTimeout в секундах.
//  Оберните все это в промис. Пусть промис выполнится успешно, если сгенерировано число от 1 до 5, и с ошибкой - если от 6 до 10.


// let prom = new Promise ((resolve, reject) => {

//     function randomNum(min, max) {
//         return Math.floor(Math.random() * (max - min + 1 )) + min;
//     }
//     let succesNum;

//     function res() {
//         let num = randomNum(1, 10);
        
//         if (num <= 5) {
//             stm(num);
//             resolve("success");
//         } else {
//             reject('err');
//             // console.log(`it's ${num}`);
//             // res();
//         }
//     }
//     res();
//     function stm (num) {
//         setTimeout (() => {
//             console.log(`it's ${num}`);
//         }, num * 1000); 
//     }

// })

// prom.then(r => console.log(r)).catch(er => console.log(er, `it's ${num}`));



//             Сделайте промис, который через 5 секунд случайным образом выполнится или с успехом, или с ошибкой.

// function randomBool() {
//     return (Math.floor(Math.random() * 2) === 0);
// }
// randomBool();

// let prom = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(randomBool() === true) {
//             resolve('res')
//         } else (
//             reject('err')
//         )
//     }, 5000)
// })

// prom
//     .then( res => console.log(res))
//     .catch( err => console.log(err))


//                 Сделайте цепочку из трех промисов. Пусть первый промис возвращает число. 
//                 Сделайте так, чтобы каждый последующий промис через 3 секунды возводил в квадрат результат предыдущего промиса.
//                 После окончания манипуляций выведите число алертом на экран.

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(3);
//     }, 3000)
// })

// promise
//     .then (
//         function(res) {
//             return new Promise((resolve, reject) => {
//                 setTimeout(() => { 
//                     resolve (res * res);
//                 }, 3000)
//             })
//         }
//     )
//     .then (
//         function(res) {
//             return new Promise((resolve, reject) => {
//                 setTimeout(() => { 
//                     resolve (res * res);
//                 }, 3000)
//             })
//         }
//     )
//     .then( res => console.log(res))  //81


//                    Переделайте предыдущую задачу так, чтобы один из промисов в цепочке выполнился с ошибкой.
//                     В конце цепочки расположите метод catch, который поймает эту ошибку.

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(3);
//     }, 3000)
// })

// promise
//     .then (
//         function(res) {
//             return new Promise((resolve, reject) => {
//                 setTimeout(() => { 
//                     resolve (res * res);
//                 }, 3000)
//             })
//         }
//     )
//     .then (
//         function(res) {
//             return new Promise((resolve, reject) => {
//                 setTimeout(() => { 
//                     reject('err');
//                 }, 3000)
//             })
//         }
//     )
//     .then( res => console.log(res))  
//     .catch(err => console.log(err))



//                    Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайно задержкой от 1 до 5 секунд. 
//                    Пусть каждый промис своим результатом возвращает эту задержку. 
//                    С помощью Promise.all получите массив результатов, найдите его сумму, выведите на экран.



// function randomNum(min, max) {
//     return Math.floor(Math.random() * (max - min + 1 )) + min;
// }


// Promise.all([
//     new Promise((resolve, reject) => {
//         let num = randomNum(1, 5);
//         setTimeout((num) => {
//             resolve(num);
//         }, num * 1000, num )
//     }),
//     new Promise((resolve, reject) => {
//         let num = randomNum(1, 5);
//         setTimeout((num) => {
//             resolve(num);
//         }, num * 1000, num )
//     }),
//     new Promise((resolve, reject) => {
//         let num = randomNum(1, 5);
//         setTimeout((num) => {
//             resolve(num);
//         }, num * 1000 , num)
//     }),
// ])
//     .then( res => console.log(res.reduce((sum, current) => sum + current, 0)))


//                        Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайно задержкой от 1 до 5 секунд.
//                        Пусть первый промис возвращает число 1, второй - число 2, третий - число 3.
//                        С помощью Promise.race дождитесь загрузки первого сработавшего промиса и выведите результат его работы на экран.

// function randomNum(min, max) {
//     return Math.floor(Math.random() * (max - min + 1 )) + min;
// }

// Promise.race([
//     new Promise((resolve, reject) => {
//         let num = randomNum(1, 5);
//         setTimeout(() => {
//             resolve("1");
//         }, num * 1000, num )
//     }),
//     new Promise((resolve, reject) => {
//         let num = randomNum(1, 5);
//         setTimeout(() => {
//             resolve("2");
//         }, num * 1000, num )
//     }),
//     new Promise((resolve, reject) => {
//         let num = randomNum(1, 5);
//         setTimeout(() => {
//             resolve("3");
//         }, num * 1000 , num)
//     }),
// ])
//     .then( res => console.log(res))




//                      Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5. 
//                      Создайте async функцию, которая с помощью await будет дожидаться результата getNum, затем возводить его в квадрат и выводить на экран.

// function randomNum(min, max) {
//     return Math.floor(Math.random() * (max - min + 1 )) + min;
// }

// function getNum () {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             resolve(randomNum(1, 5));
//         }, 3000)
//     });
// }

// async function func () {
//     let num = await getNum();
//     console.log(num*num);
// }
// func();


//                    Сделайте функцию getNum1, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5.
//                     Сделайте также функцию getNum2, которая возвращает промис, который с задержкой в 5 секунд выведет случайное число от 6 до 10. 
//                     Создайте async функцию, которая с помощью await будет дожидаться результата getNum1, затем будет дожидаться результата getNum2, 
//                     а затем найдет сумму полученных чисел и выведет на экран.


// function randomNum(min, max) {
//     return Math.floor(Math.random() * (max - min + 1 )) + min;
// }

// function getNum1 () {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             resolve(randomNum(1, 5));
//         }, 3000)
//     });
// }

// function getNum2 () {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             resolve(randomNum(6, 10));
//         }, 3000)
//     });
// }

// async function func () {
//     let num1 = await getNum1();
//     let num2 = await getNum2();

//     console.log(num1 + num2);
// }
// func();


//               Даны 3 картинки. С помощью Promise.all дождитесь окончания загрузки всех картинок и выведите их на экран.

let imgs = [
    'img/1.png',
    'img/2.png',
    'img/3.png',
]

function loadImage(path) {
    return new Promise((resolve, rejedt) => {
        let image = new Image();
        image.src = path;
        image.onload = () => resolve(image);
        image.onerror =  () => rejedt(path);
    })
}

Promise.all(imgs.map(loadImage)).then(
    imgs => {
        for(let image of imgs) {
            document.body.appendChild(image);
        }
    }
)