// // ---------------ПРИСВАИВАНИЕ ЗАДАЧИ--------------

// // 1 Записать в коротком виде:  a = a+10, b=b*18, c=c-10, x=a+x, y=y*z, i=i*5*y;
// a += 10;
// b *= 18;
// c -= 10;
// x += a;
// y *= z;
// i *= 5 * y;

// // 2 Возвести переменную в квадрат
// let a;
// a = 3;
// a *= a;
// console.log(a);

// // ---------------АРИФМЕТИЧЕСКИЕ ОПЕРАТОРЫ--------------

// //1 Сравнить зписи
// let a = 5;
// console.log(a++);
// // Отложенное увеличение а
// let a = 5;
// console.log(++a);
// // Увеличит а сразу

// // 2 Узнать четное ли число
// let number;
// number = 3 % 2;
// console.log(number);

// ---------------УСЛОВНЫЕ ОПЕРАТОРЫ--------------

// Если переменная "hidden", присвоить ей  "visible", иначе "hidden". И тернарным.

let a;
a = '1';

if (a = 'hidden'){
    // a = 'visible',
    console.log(a = 'visible')
} else {
    // a = 'hidden',
    console.log(a = 'hidden')
}

// 1 Если переменная равно 0, то присвоить 1
// 2 Если меньше нуля, то "less then zero"
// если больше нуля, то умножить на 10 (короткой записью)
// То же самое тернарным
