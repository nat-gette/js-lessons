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



// // Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].


// function arrayFill(arg, num) {
//     let arr = [];

//     for (let i = 0; i < num; i += 1) {
//         arr.push(arg);
//     }

//     return arr;
// }

// console.log(arrayFill('x', 5));



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


// const cities = ['moscow', 'london', 'berlin', 'porto'];

// function getElem(arr, index, value = null ) {
//     if (index >= arr.length || index < 0) {
//         return value;
//     }

//     return arr[index];
// }

// console.log( getElem(cities, 1));
// console.log( getElem(cities, 4));
// console.log( getElem(cities, 10, 'paris'));
// console.log( getElem(cities, -1, 'opps'));


// Задача 3. Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход массив и строковой префикс, и возвращает новый массив, в котором к каждому элементу исходного массива добавляется переданный префикс. Функция предназначена для работы со строковыми элементами. После префикса автоматически добавляется пробел.
// import addPrefix from './arrays.js';
 
// const names = ['john', 'smith', 'karl'];
 
// const newNames = addPrefix(names, 'Mr');
// console.log(newNames);
// // => ['Mr john', 'Mr smith', 'Mr karl'];
 
// console.log(names); // Старый массив не меняется!
// // => ['john', 'smith', 'karl'];

// const names = ['john', 'smith', 'karl'];

// function addPrefix(arr, prefix) {
//     const newArr = [];

//     for (i = 0; i < arr.length; i +=1) {
//         let newElem = `${prefix} ${arr[i][0].toUpperCase()}${arr[i].slice(1)}`;
//         newArr.push(newElem);
//     }

//     return newArr;
// }

// const newNames = addPrefix(names, 'Mr');
// console.log(newNames);



// Задача 4. Реализуйте и экспортируйте функцию `reverse()`, которая принимает на вход массив и располагает элементы внутри него в обратном порядке.
// Примеры 
// import { reverse } from './arrays'; 

// const names = ['john', 'smith', 'karl'];

// reverse(names); 
// console.log(names); // => ['karl', 'smith', 'john'] 
// reverse(names); 
// console.log(names); // => ['john', 'smith', 'karl']

// Решение этой задачи подразумевает самостоятельную реализацию функции без использования встроенного метода `reverse()`.
// Подсказки
// Для решения этой задачи, проще всего брать и менять местами элементы стоящие на зеркальных местах: первый и последний, второй и предпоследний и так далее до середины.

// const names = ['john', 'smith', 'karl'];

// function rewerse(arr) {
//     const newNames = [];

//     for (let i = arr.length - 1; i >= 0; i -= 1) {
//         newNames.push(arr[i]);
//     }

//     return newNames;
// }

// console.log(rewerse(names));





// Задача 5. Реализуйте  функцию, которая высчитывает сумму всех элементов массива, которые делятся без остатка на 3 (три).
// Примеры
// const coll1 = [8, 9, 21, 19, 18, 22, 7];
// calculateSum(coll1); // 48
 
// const coll2 = [2, 0, 17, 3, 9, 15, 4];
// calculateSum(coll2); // 27
// В случае пустого массива функция должна вернуть 0 (для этого в коде можно использовать guard expression):
// const coll = [];
// calculateSum(coll);// 0


// const coll1 = [8, 9, 21, 19, 18, 22, 7];
// const coll2 = [2, 0, 17, 3, 9, 15, 4];

// function calculateSum(arr) {
//     if (!arr.length) {
//         return 0;
//     };

//     let result = 0;

//     for (let i = 0; i < arr.length; i += 1) {
//         if (arr[i] % 3 == 0) {
//             result += arr[i];
//         }
//     };

//     return result;
// }

// console.log(calculateSum(coll2));





// Задача 6. Реализуйте функцию, которая высчитывает среднее арифметическое элементов переданного массива. Благодаря этой функции мы наконец-то посчитаем среднюю температуру по больнице :)
// Примеры 
// const temperatures1 = [37.5, 34, 39.3, 40, 38.7, 41.5]; 
// calculateAverage(temperatures1); // 38.5 
// const temperatures2 = [36, 37.4, 39, 41, 36.6]; 
// calculateAverage(temperatures2); // 38
// В случае пустого массива функция должна вернуть значение null (используйте в коде для этого guard expression):
// const temperatures = []; 
// calculateAverage(temperatures); // null


// const temperatures1 = [37.5, 34, 39.3, 40, 38.7, 41.5]; 

// function calculateAverage(arr) {
    
//     let patients = 0;
//     let summ = 0;

//     for (let i = 0; i < arr.length; i +=1) {
//         summ += arr[i];
//         patients +=1;
//     };

//     return summ/patients;
// }

// console.log(calculateAverage(temperatures1));





// Задача 7. Реализуйте функцию getSameParity, которая принимает на вход массив чисел и возвращает новый, состоящий из элементов, у которых такая же чётность, как и у первого элемента входного массива. Экспортируйте функцию по умолчанию.

// Примеры
// getSameParity([]);        // []
// getSameParity([1, 2, 3]); // [1, 3]
// getSameParity([1, 2, 8]); // [1]
// getSameParity([2, 2, 8]); // [2, 2, 8]


// function getSameParity(arr) {
//     let result = [];
//    
//     for (let i = 0; i < arr.length; i += 1) {
//         if (arr[0] % 2 == 0 && arr[i] % 2 == 0) {
//             result.push(arr[i]);
//         } 
//     }
//     for (let i = 0; i < arr.length; i += 1) {
//         if (arr[0] % 2 && arr[i] % 2 ) {
//             result.push(arr[i]);
//         } 
//     }

//     return result;
// }

// console.log( getSameParity([1, 2, 3]));
// console.log( getSameParity([2, 1, 4]));
// console.log( getSameParity([]));


// function getSameParity(arr) {
//     let result = [];
    
//     for (let i = 0; i < arr.length; i += 1) {
//         if (arr[0] % 2 == arr[i] % 2) {
//             result.push(arr[i]);
//         } 
//     }

//     return result;
// }

// console.log( getSameParity([1, 2, 3]));
// console.log( getSameParity([2, 1, 4]));
// console.log( getSameParity([]));





// Задача 8.
// Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход в виде массива кошелёк с деньгами и название валюты и возвращает сумму денег указанной валюты.
// Реализуйте данную функцию используя управляющие инструкции.
// Параметры функции:
// Массив, содержащий купюры разных валют с различными номиналами
// Наименование валюты
// Примеры
// const money1 = [
//   'eur 10', 'usd 1', 'usd 10', 'rub 50', 'usd 5',
// ];
// getTotalAmount(money1, 'usd') // 16

// const money2 = [
//   'eur 10', 'usd 1', 'eur 5', 'rub 100', 'eur 20', 'eur 100', 'rub 200',
// ];
// getTotalAmount(money2, 'eur') // 135


// const money1 = ['eur 10', 'usd 1', 'usd 10', 'rub 50', 'usd 5',];
// const money2 = ['eur 10', 'usd 1', 'eur 5', 'rub 100', 'eur 20', 'eur 100', 'rub 200',];

// function getTotalAmount(arr, currency) {
//     let result = 0;

//     for (let i = 0; i < arr.length; i += 1) {
//         let currencyName = arr[i].slice(0, 3);
//         let amount = arr[i].slice(3);

//         if (currencyName == currency) {
//             result += +amount;
//         };
//     };

//     return result;
// }

// console.log(getTotalAmount(money1, 'usd'));
// console.log(getTotalAmount(money2, 'eur'));





// Задача 9.
// Суперсерия Канада-СССР – это 8 товарищеских хоккейных матчей, проводившихся между командами СССР и Канады в 72 (первая суперсерия) и в 74 годах (вторая суперсерия). В этом задании вам предстоит написать функцию, которая вычисляет команду, выигравшую суперсерию.
// superseries.js
// Реализуйте и экспортируйте по умолчанию функцию, которая находит команду победителя для конкретной суперсерии. Победитель определяется как команда, у которой больше побед (не количество забитых шайб) в конкретной серии. Функция принимает на вход массив, в котором каждый элемент — это массив, описывающий счет в конкретной игре (сколько шайб забила Канада и СССР). Результат функции – название страны: 'canada', 'ussr'. Если суперсерия закончилась в ничью, то нужно вернуть null.
// import getSuperSeriesWinner from './superseries.js'
// // Первое число – сколько забила Канада
// // Второе число – сколько забила СССР

// const scores = [
//   [3, 7], // Первая игра
//   [4, 1], // Вторая игра
//   [4, 4],
//   [3, 5],
//   [4, 5],
//   [3, 2],
//   [4, 3],
//   [6, 5],
// ];

// getSuperSeriesWinner(scores); // 'canada'
// Подсказки
// Решение учителя использует функцию Math.sign

// const scores = [
//     [3, 7], 
//     [4, 1], 
//     [4, 4],
//     [3, 5],
//     [4, 5],
//     [3, 2],
//     [4, 3],
//     [6, 5],
// ];

// function getSuperSeriesWinner(arr) {
//     let kanadaRes = 0;
//     let ussrRes = 0;

//     for (let i = 0; i < arr.length; i += 1) {
//         const kanada = arr[i][0];
//         const ussr = arr[i][1];

//         if (kanada > ussr) {
//             kanadaRes += 1;
//         };

//         if (kanada < ussr) {
//             ussrRes += 1;
//         };
//     }

//     if (kanadaRes > ussrRes) {
//         return "canada";
//     } else if (kanadaRes < ussrRes) {
//         return "ussr"
//     } else {
//         return null;
//     }
// }
// console.log(getSuperSeriesWinner(scores));




// Задача 10.
// Реализуйте функцию buildDefinitionList(), которая генерирует HTML список определений (теги <dl>, <dt> и <dd>) и возвращает получившуюся строку. При отсутствии элементов в массиве функция возвращает пустую строку. Экспортируйте функцию по умолчанию.

// Параметры функции
// Список определений следующего формата:
//  const definitions = [
//   ['definition1', 'description1'],
//   ['definition2', 'description2']
// ];
// То есть каждый элемент входного списка сам является массивом, содержащим два элемента: термин и его определение.

// Пример использования
// const definitions = [
//   ['Блямба', 'Выпуклость, утолщения на поверхности чего-либо'],
//   ['Бобр', 'Животное из отряда грызунов'],
// ];
 
// buildDefinitionList(definitions);
// // '<dl><dt>Блямба</dt><dd>Выпуклость, утолщение на поверхности чего-либо</dd><dt>Бобр</dt><dd>Животное из отряда грызунов</dd></dl>';

// const definitions = [
//     ['Блямба', 'Выпуклость, утолщения на поверхности чего-либо'],
//     ['Бобр', 'Животное из отряда грызунов'],
//     ];

// function buildDefinitionList(arr) {
//     let result = '';

//     for (let i = 0; i < arr.length; i += 1) {
//         result += '<dt>' + arr[i][0] + '</dt>' + '<dd>' + arr[i][1] + '</dd>';
//     }

//     return `<dl>${result}</dl>`
// }
// document.body.innerHTML = buildDefinitionList(definitions);