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



const calculateAverage = (arrTemperatures) => {
    if (!arrTemperatures.length) {
        return null;
    }

    // let summTemp = 0;
    // for (i = 0; i < arrTemperatures.length; i++) {
        
    //     summTemp += arrTemperatures[i];
    // }
    // for (const value of arrTemperatures) {
    //     summTemp += value;
    // }
    
    return arrTemperatures.reduce((sum, item) => sum += item, 0)/ arrTemperatures.length;

    // return summTemp / arrTemperatures.length;
};

const temperatures1 = [37.5, 34, 39.3, 40, 38.7, 41.5];
console.log(calculateAverage(temperatures1)); // 38.5
const temperatures2 = [36, 37.4, 39, 41, 36.6];
console.log(calculateAverage(temperatures2)); // 38