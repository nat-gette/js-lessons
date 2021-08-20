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

//     for ( i = 1; i <= num; i++) {
//         newArr.push(i);
//     }

//     return newArr;
// }

// console.log(getArray(10));


//4. Функция, которая принимает любое число массивов и возвращает массивы из тех же значений - 1 элемент. 

// function changeCollection (a, ...args) {

//     let newArr = [];

//     for (let i = a; i < args.length; i++) {
//         newArr.push(args[i]);
//     }
   
//     return args;
//  }

// let ts = [1, 2, 3]; 
// let ts2 = [4, 5, 6]; 

//  console.log(changeCollection(1, ts, ts2));

//  console.log(ts);
//  console.log(ts2);




//  Задачи

//1. "bcdaeflmjkhi" отсортировать и перевернуть

// function reversiveSort (arg) {
  
//     return arg.split('').sort().reverse().join('');
    
// };


// const reversiveSort = (arg) => arg.split('').sort().reverse().join('');
    
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

// let arr = [1,2,3,4,5];
// console.log(arr.splice(2,2));
// console.log(arr);



// 1. (исправленное) Функция, которая принимает массив, а возвращает новый массив с дублир эл-ми исходного массива

// function doubleArray(arr, handler) {

//     let newArr = [];

//     for (let i = 0, j = arr.length; i < arr.length; i++, j++) {
//         newArr[i] = arr[i];
//         newArr[j] = arr[i];
  
//     }

//     return newArr; 
// }

// console.log(doubleArray([1,2,3]));


// 6. удалить из [1,2,3,4,5] (3,4) и вставить на их месте 'three','four'

// let arr = [1,2,3,4,5];
// console.log(arr.splice(2,2, 'three','four'));
// console.log(arr);


// 7. Вставить в произвольный массив после третьего элемента любое значение
 
// let arr = ['I', 'am', 'an','array'];

// console.log(arr.splice(3, 0, 'awesome'));
// console.log(arr);

// 8. Отсортировать массив массивов так, чтобы вначале располагались наименьшие по длине массивы

// let masterArr = [[14,45], [1], ['a', 'c', 'd']];

// masterArr.sort(function(prev, next) {
//     // console.log(prev, next);
    
//     return prev.length - next.length;
// });

// console.log(masterArr);


// 9. создать копию произвольного массива

// let copiedArr = [].concat(masterArr); 
// console.log(copiedArr);


// 10. отсортировать массив объектов по возрастающему колличеству ядер 

// let arr = [
//     {cpu:'intel', 
//     info:{cores:2, cache:3}},

//     {cpu:'intel',
//      info:{cores:4, cache:4}},

//     {cpu:'amd', 
//     info:{cores:1, cache:1}},

//     {cpu:'intel', 
//     info:{cores:3, cache:2}},
    
//     {cpu:'amd', 
//     info:{cores:4, cache:2}},
// ]

// arr.sort((prev, next) => prev.info.cores - next.info.cores); 

// console.log(arr);


// 11. Создать функцию, кот будет принимать массив продуктов и две цены  и возвращает все продукты в указанном ценовом диапазоне, отсортировать от дешевых к дорогим.

const products = [
    {title: 'prod1', price: 5.2},
    {title: 'prod2', price: 0.18},
    {title: 'prod3', price: 15},
    {title: 'prod4', price: 25},
    {title: 'prod5', price: 18.9},
    {title: 'prod6', price: 8},
    {title: 'prod7', price: 19},
    {title: 'prod8', price: 63}
];

function productsSort (arr, min, max) {
   
    let prod = [];
    for (let i = 0; i < arr.length; i++) {
        
        if (min <= arr[i].price & arr[i].price <= max ) {
            prod.push(arr[i]);
        };
        
    }
    console.log(prod);
    prod.sort(function(prev, next) {
         return prev.price - next.price;
    });
    console.log(prod);
    return prod;
}

console.log(productsSort(products, 10, 50));




