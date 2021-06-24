// // -----function declaration-----
// function sum () {
//     let a = 2;
//     let b = 3;
//     console.log ( a + b);
// }

// sum();

// // -----function expression-----

// let num = function () {
//     console.log('function');
// }
// num();

// // -----анонимная самовызывающаяся функция-----

// (function(){
//     console.log('S I function');
// })();

// //----- arrow function-----

// let arrow = () => {
//     onsole.log ('Arr F');
// };

// arrow();

// // -----return-----

// function sum () {
//     let a = 2;
//     let b = 3;
//     console.log ( a + b);
//     return a + b;
// }

// sum();

// let res = sum() + 20;
// console.log(res); 

// // -----аргументы -----

// function sum (x = 0 , y = 0) {
//     // if ( x === undefined) return new Error ('нет параметра x')
//     let a = x;
//     let b = y;
//     console.log ( x, y);
//     return a + b;
// }

// sum();

// let res = sum( ) + 20;
// console.log(res); 

// function sum (x = 0 , y = 0, ...args) {
//     // if ( x === undefined) return new Error ('нет параметра x')
  
//     console.log ( arguments);
//     return x + y;
// }



// let res = sum(2, 3, 4, 6 ) ;
// console.log(res); 

// let arr = ['first', 'second', 9, 6, 6];
// let [one, two, ...last] = arr;

// console.log(one, two, last);

// // ---users
// let users = [ 
//     {
//         id: 1,
//         name: 'Denis',
//         age: 28
//     }, 
//     {
//         id: 2,
//         name: 'Olga',
//         age: 25
//     }, 
//     {
//         id: 3,
//         name: 'Ivan',
//         age: 18
//     }, 
// ];

// // add user
// //delete user


// function addUser(name, age) {
//     if ( !name ) return new Error (' Нет name');
//     if ( !age ) return new Error (' Нет age');

//     //push
//     users.push({name: name, age: age, id: Math.round(Math.random() * 10)});
//     return users;

// }

// function deleteUser(id) {
    
//     if (!users.length ) return console.info('Пользователей  нет')
//     for ( let i = 0; i < users.length; i++ ) {
//         if  (users[i].id === id ) {
//             users.splice(i, 1);
//             break;
//         }
//     }
//     return users;
// }

// // -----функции высшего порядка-----

// function hightFunction( func) {
//     console.log(func);
//     func();
// }

// hightFunction(function (){
//     console.log("Hi");
// });

// let func = function (){
//     console.log("Hi");
// }
// hightFunction(func)

// hightFunction(function (){
//     console.log("Hi2");
// });

// hightFunction(function (){
//     console.log("H3");
// });

// function anotherHightF() {
//     return function () {
//         return 'Im a func';
//     }
// }

// let funcRes = anotherHightF();



let str = 'Hello';
 
function rewreireString( string, handler) {
    let newString = '';
    
    for ( let i = 0; i < string.length; i++){
        newString += handler(string[i]); // передаем в хендлер каждый элемент  записываем результат его работы в ньюстринг
    }
    console.log(newString);
    return newString;
}

rewreireString ('easycode', function (symbol){
    return symbol + '$';
});

//some every

let someArr = [ 1, 2, ' some str'];
let methodRes = someArr.some(function (value){
    return typeof value === 'string';
});
console.log(methodRes);


