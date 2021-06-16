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

// // ---------------УСЛОВНЫЕ ОПЕРАТОРЫ--------------

// // Если переменная "hidden", присвоить ей  "visible", иначе "hidden". И тернарным.

// let a;
// a = 'hiden';

// if (a === 'hidden'){
//     a = 'visible',
//     console.log(a)
// } else {
//     a = 'hidden',
//     console.log(a)
// }

// // 1 Если переменная равно 0, то присвоить 1
// // 2 Если меньше нуля, то "less then zero"
// // если больше нуля, то умножить на 10 (короткой записью)
// // То же самое тернарным

// let b = 0;
// if ( b === 0){
//     b = 1;
// } else if ( b < 0) {
//   b = 'less then zero';
// } else {
//     b *= 10;
// }
// console.log(b);

// b = b === 0 ? b = 1 : 
//     b < 0 ? b = 'less then zero' : b*= 10 ;
// console.log(b);


//---------------- Switch case задача----------------

let a = 'none';

switch (a){
    case 'block' : console.log('block'); break;
    case 'none' : console.log('none'); break;
    case 'inline' : console.log('inline'); break;
    default : console.log('other');
}
