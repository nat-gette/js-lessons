// // ---------------МЕТОДЫ МАССИВОВ-------------

// let colors = ['yellow', 'blue', 'white'];

// colors.push('red'); //добавляет эл-т
// console.log(colors);

// colors.pop(); //удаляет эл-т
// console.log(colors);

// colors.unshift(); // добавлякт эл-т в начало массива
// console.log(colors);

// colors.shift(); // удаляет эл-т из начала массива
// console.log(colors);

// // join() - делает из маасива строку, в скобки можно добавить разделитель
// // split() -  делает массив, делится по символу, указанному в скобках

// // concat
// let numbers = [10, 4, 5];

// let joinedArr = numbers.concat(colors); //  в скобках можно передать так же числа, буквы которые нужно добавить (в конец)
// console.log(joinedArr);

// let copied = [].concat(colors); // копия массива colors
// console.log(copied);

// // splice

// copied.splice(1, 1, 11, 22, 33); // ["blue", 11, 22, 33] изменяет исходный массив
// console.log(copied);

// reverse переворачивает массив

//sort метод сортировки массивов (по алфавиту напр)

let num = [10, 2, 15, 7, 1, 3, 28];
// num.sort(function(prev, next) {
//     // console.log(prev, next);
//     // console.log(num);
//     return prev - next;
// });

//или
 
num.sort((prev, next) => prev - next);

console.log(num);

// сортировка массива пользователей 
let users = [
    {
        id: 1,
        name: 'Denis',
        age: 28,
    },
    {
        id: 2,
        name: 'Olga',
        age: 25,
    },
    {
        id: 3,
        name: 'Ivan',
        age: 18,
    },
];

users.sort((prev, next) => prev.age - next.age);

console.log(users);

//---------------DOM-------------

