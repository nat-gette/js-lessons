// 1 Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const arr3 = arr1.concat(arr2);
// console.log(arr3);


// 2 Дан массив [3, 4, 1, 2, 7, 11, 15]. Отсортируйте его.

// const arr = [3, 4, 1, 2, 7, 11, 15];

// arr.sort((prev, next) => prev - next );

// console.log(arr);


// 3  Дана строка. Сделайте заглавным первый символ этой строки не используя цикл. Найдите два решения

// const str = "name";

// const newName = str[0].toUpperCase() + str.slice(1);
// console.log(newName);

// 4  Дана строка, например, '123456'. Переверните эту строку (сделайте из нее '654321') не используя цикл. Показать решение.

// const str = "123456";

// let strNew = str.split('').sort((a, b) => b - a ).join('');
// console.log(strNew);

// let strNew = str.split('').reverse().join('');
// console.log(strNew);


// 5

// let str = "http://qwerty";

// if( str.slice(0, 7) == "http://" ) {
//     console.log('correct');
// }



//  С помощью двух вложенных циклов нарисуйте спирамидку

// for (let i = 1; i < 10; i++) {
//     let num = '';
//     for (let j = 1; j <= i; j++ ) {
//         num += i;
        
//     }
    
//     console.log(num);
// }


// 6. Нарисуйте пирамиду, воспользовавшись циклом 

// for (let i = 1; i < 10; i++) {
//     let str = '';
//     for( let j = 1; j <= i; j++) {
//         if (i % 2 == 0) {
//             str += 'x';
//         }
//     }
//     if (str.length) {
//         console.log(str);
//     }
// }

// 3

// let str1 = '';

// for (let i = 1; i < 10; i++) {
//     if ( i === 1) {
//         str1 += '-';
//     }

//     str1 += i + '-';
// }

// console.log(str1);



//каждая последняя буква в предложении большая, пробелы убрать сделать функцией, которая принимает аргументом  предложение (и i-n) , а вторым номер символа от пробела



// Реализуйте и экспортируйте по умолчанию функцию, которая высчитывает среднее арифметическое элементов переданного массива. Благодаря этой функции мы наконец-то посчитаем среднюю температуру по больнице :)
// В случае пустого массива функция должна вернуть значение null (используйте в коде для этого guard expression):



// const calculateAverage = (arrTemperatures) => {
//     if (!arrTemperatures.length) {
//         return null;
//     }

//     // let summTemp = 0;
//     // for (i = 0; i < arrTemperatures.length; i++) {
        
//     //     summTemp += arrTemperatures[i];
//     // }
//     // for (const value of arrTemperatures) {
//     //     summTemp += value;
//     // }
    
//     return arrTemperatures.reduce((sum, item) => sum += item, 0)/ arrTemperatures.length;

//     // return summTemp / arrTemperatures.length;
// };

// const temperatures1 = [37.5, 34, 39.3, 40, 38.7, 41.5];
// console.log(calculateAverage(temperatures1)); // 38.5
// const temperatures2 = [36, 37.4, 39, 41, 36.6];
// console.log(calculateAverage(temperatures2)); // 38



// Дано неотрицательное целое число num. Складывать все входящие в него цифры до тех пор, пока не останется одна цифра.
// Для числа 38 процесс будет выглядеть так:
// 1. 3 + 8 = 11
// 2. 1 + 1 = 2
// Результат: 2

// function sum(num) {
//     if (String(num).length == 1) {
//         return num;
//     } else {
//         return sum(culcArg(num));
//     }
// }

// function culcArg(num) {
//     let args = String(num);
//     let res = 0;

//     for (let i = 0; i < args.length; i += 1) {
//         res+= +args[i];
//     }

//     return res;
// }

// console.log(sum(1259));

// 
// // Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].

// function arrayFill(value, length) {
//     let array = [];

//     for (let i = 0; i < length; i += 1) {
//         array.push(value);
//     }

//     return array;
// }

// console.log(arrayFill('x', 5));


// // Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти

// function moreThan(arr, minNum) {
//     let sumRes = 0;
//     let elemNum = 0;

//     for (let i = 0; i < arr.length; i += 1){
//         sumRes += arr[i];
//         elemNum += 1;

//         if (sumRes > minNum) {
//             return elemNum;
//         } 
//     }
// }

// console.log(moreThan([1,2,3,4,5,6,7,8,9], 10));



// // Задача 1. Реализуйте swap(), которая меняет местами первый и последний элемент массива. Если массив содержит меньше двух элементов, то он возвращается как есть.
// // Примеры вызова:
// // swap([]); // []
// // swap([1]); // [1]
// // swap([1, 2]); // [2, 1]
// // swap(['one', 'two', 'three']); // ['three', 'two', 'one']


// function swap(arr) {
//     let changedArr = [];

//     if (arr.length < 2) {
//         return arr;
//     } else {
//         let arrMid = arr.slice(1, arr.length-1);
        
//         changedArr.push(arr[arr.length - 1]);

//         for(let i = 0; i < arrMid.length; i += 1) {
//             changedArr.push(arrMid[i]);
//         };

//         changedArr.push(arr[0]);

//         return changedArr;
//     }
// }

// function swap2(arr) {

//     if (arr.length < 2) {
//         return arr;
//     }       

//     let changedArr = [];
//     changedArr.push(arr[arr.length - 1]);

//     let arrMid = arr.slice(1, arr.length-1);
//     for(let i = 0; i < arrMid.length; i += 1) {
//         changedArr.push(arrMid[i]);
//     };

//     changedArr.push(arr[0]);
//     return changedArr;
    
// }

// console.log(swap2y([1, 'two', 3, '4']))




// Задача 2. Реализуйте функцию, которая извлекает из массива элемент по указанному индексу, если индекс существует, либо возвращает значение по умолчанию. Функция принимает на вход три аргумента:
// Массив
// Индекс
// Значение по умолчанию (равно null)
// const cities = ['moscow', 'london', 'berlin', 'porto'];
 
// get(cities, 1); // 'london'
// get(cities, 4); // null
// get(cities, 10, 'paris'); // 'paris'
// get(cities, -1, 'oops'); // 'oops'
// Подсказки
// Для параметров функции можно указывать значения по умолчанию прям при объявлении: (param = 'default value')
