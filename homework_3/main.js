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

// Функция-рекурсия, которая выдает каждый символ строки в консоль

function rec() {
    if (a >  0) {
       return  rec(a);
    }
   return 1;
}

console.log(rec (a));
