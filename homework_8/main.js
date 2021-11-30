// ----------дата и время
// 1

// function getDay(year) {
//     const day = new Date(year, 0);
//     const numberDay = day.getDay();
//     const dayOfweek = {
//         0: 'вс',
//         1: 'пн',
//         2: 'вт',
//         3: 'ср',
//         4: 'чт',
//         5: 'пт',
//         6: 'сб',
//     };

//     return dayOfweek[numberDay];
// };
// console.log(getDay(2021));

// 2

// function getDay(date) {
//     let num = date.split('.').reverse().join('.');
//     const day = new Date(num);
//     const numberDay = day.getDay();
//     const dayOfweek = {
//         0: 'вс',
//         1: 'пн',
//         2: 'вт',
//         3: 'ср',
//         4: 'чт',
//         5: 'пт',
//         6: 'сб',
//     };
    
//     return dayOfweek[numberDay]; 
// };

// console.log(getDay('29.03.1985'));

// 3

// let days = Date.now() - new Date('2021.11.01');
// let weeks = Math.floor(days/1000/60/60/24/7);
// console.log(weeks);

// -------------Таймеры-------------

// 1



// let str = 'test';
// let i = 0;
// let res = '';

// let timer = setInterval(() => {

//     if(i < str.length) {
//         res += str[i];
//         i++;
        
//         console.log(res);
//     } else {
//         clearInterval(timer);
//     }
//     console.log(1);
// }, 1000);


// 2 

// function myFunc(str, time) {
//     setTimeout(() => {
//         console.log(str);
//     }, time);
// }

// myFunc('test', 1000);

// 3

// let startDate = +new Date();
// var index = 1000;

// setTimeout(function countDown() {
//     if(index--) {
//         // console.log(index + '...');
//         setTimeout(countDown, 1);
//     } else {
//         console.log('Boom');
//         let endDate = +new Date();
//         console.log(endDate - startDate);
//     }
// }, 1);


// let startDate = +new Date();

// var index = 1000;

// var timer = setInterval(function countDown() {
//     if(index--) {
//         console.log(index + '...');
//     } else {
//         console.log('Boom');
//         let endDate = +new Date();
//         console.log(endDate - startDate);
//         clearInterval(timer);
//     }
// }, 1);

// одинаковые функции, опервая с рекурсией, но выводит одно и то же

