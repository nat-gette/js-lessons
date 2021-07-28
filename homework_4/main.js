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


// 3. Создать функцию, кот принимает N и возвращает массив, заполненный числами от 1 до N : getArray(10); [1,2,3,4,5,6,7,8,9,10]

// function getArray(num) {
//     let newArr = [];
//     for ( i = 1; i <= num; i++)
//     newArr.push(i);
//     return newArr;{
// }
// console.log(getArray(10))


//4. Функция, которая принимает любое число массивов и возвращает массивы из тех же значений - 1 элемент. 

// function changeCollection ( ...args) {

//         for (let i = 0; i < args.length; i++) {
//         args[i].shift();

//     }
//     return args;
//  }

//  console.log(changeCollection([1,3,5], ['z','d']));




//  Задачи

//1. "bcdaeflmjkhi" отсортировать и перевернуть

// function reversiveSort (arg) {
  
//     return arg.split('').sort().reverse().join();
    
// };
// console.log(reversiveSort("bcdaeflmjkhi"));


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

//4. удвоить все элементы массива, не используя циклы

// function doubleArray(arr, handler) {
    
//     console.log(handler(arr));
//     return handler(arr);
// }

// doubleArray (['one',2,'three',4], function (array){
//     return array.concat(array);
// });

// 5. удалить из [1,2,3,4,5] (3,4)

// arr = [1,2,3,4,5];
// console.log(arr.splice(2,2));
// console.log(arr);

// 6. удалить из [1,2,3,4,5] (3,4) и вставить на их местщ 'three','four'

function