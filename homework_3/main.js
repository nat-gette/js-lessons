// ---------------Задачи ФУНКЦИИ
// 1. Создать функцию , кот принимает значение и умножает их, если нет аргумента, то 0

function multiply (a, ...args) {
    if (a === undefined) return 0 ;
    let argsMultiply = a;
    for (let i = 0; i < args.length; i++){
        argsMultiply = argsMultiply * args[i];
    }
    return argsMultiply;
}

console.log(multiply());
console.log(multiply(2));
console.log(multiply(1, 2, 3));

// 2. вычеслить факториал 10 -ти с помощью рекурсии

function fact(a) {
    if (a >  0) {
       return a * fact(a - 1);
    }
   return 1;
}

console.log(fact (10));

// Функция, которая возвращает строку перевертыш reverseString('test')="tset"


function reverseString( string, handler) {
    let newString = '';
    
    for ( let i = string.length -1; i >= 0; i--){
        newString += handler(string[i]); 
    }
    console.log(newString);
    return newString;
}

reverseString ('test', function (symbol){
    return  symbol;
});

// Функция, которая принимает строку из букв, а возвращает строку из юникода букв через пробел

 
function rewreireString( string, handler) {
    let newString = '';
    
    for ( let i = 0; i < string.length; i++){
        newString += handler(string[i]); 
    }
    console.log(newString);
    return newString;
}

rewreireString ('hello', function (symbol){
    return symbol.charCodeAt() + ' ';
});



// 6 

function changeArr ( arr, handler ){
    let newValue = 'New value: ';
    for  ( let i = 0; i< arr.length; i++){
        newValue +=  handler(arr[i]);
    }

    return newValue.slice(0, -2);
}


// console.log(changeArr(['my', 'name', 'is', 'Trinity'], function(collBackFunc){
//     return collBackFunc[0].toUpperCase() + collBackFunc.slice(1);
// }));


// console.log(changeArr([10, 20, 30], function(collBackFunc){
//     return collBackFunc * 10 + ', ';
// }));

console.log(changeArr([{age: 45, name:'Jhon'}, {age: 20, name:'Aaron'}], function(collBackFunc){
    return `${collBackFunc.name} is ${collBackFunc.age}, ` ;
}));

console.log(changeArr(['abc', '123'], function(collBackFunc){
    return collBackFunc.split('').reverse().join('') + ', ' ;
}));

console.log(changeArr([1, 2, 3], function(collBackFunc){
    return collBackFunc + 5 + ', ' ;
}));