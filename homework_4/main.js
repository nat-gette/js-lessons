// ---------------ЗАДАЧИ МАССИВЫ--------------
//Задачи на методы
// 1. Функция, которая принимает массив, а возвращает новый массив с дублир эл-ми исходного массива

// function doubleArray(arr, handler) {
    
//     console.log(handler(arr));
//     return handler(arr);
// }

// doubleArray ([1,2,3], function (array){
//     return array.concat(array);
// });

// или

// function doubleArray(arr, handler) {
    
//     let newArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(handler(arr[i]));
//   
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(handler(arr[i]));
//     }
//     console.log(newArr);
//     return newArr; 
// }

// doubleArray([1,2,3], function(array) {
//     return array ;
// })

// // или

// function simpleDoubleArray(arr) {
//     return arr.concat(arr);
// }

// console.log(simpleDoubleArray([1, 2, 3]))

// 2.Получить последний элемент массива (массив не менять). Использовать функцию.

// function arrLast (array) {
//     return array.slice(-1);
// }; 
// console.log(arrLast([1,2,3,4,5]));








// Задачи

// 2. Отсортировать массив [2,4,7,-2,10,-9] в обратном порядке. использовать функцию

// let num = [2,4,7,-2,10,-9];
// num.sort(function(prev, next) {
//     console.log(prev, next);
    
//     return next - prev;
// });

// console.log(num);
 
// или

// let num = [2,4,7,-2,10,-9];
// num.sort(function(prev, next) {
//     console.log(prev, next);
    
//     return prev - next;
// });

// console.log(num.reverse());


// 3. написать функцию, кот сделает  getNewArray(['a','b','c','d','e','f'], 2,4) = ['c','d','e']. Не менять сходный массив и не использовать циклы.

// function getNewArray(array, start, end) {
//     return array.slice(start, end);
// };

// let arr = ['a','b','c','d','e','f'];
// console.log(getNewArray( arr, 2, 4));
// console.log(arr);
