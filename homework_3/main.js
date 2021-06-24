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

