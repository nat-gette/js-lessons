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


// //---------------- Switch case задача----------------

// let a = 'none';

// switch (a){
//     case 'block' : console.log('block'); break;
//     case 'none' : console.log('none'); break;
//     case 'inline' : console.log('inline'); break;
//     default : console.log('other');
// }

// //---------------- Задачи на ЦИКЛЫ ----------------
// // Сделать строку перевертыш
// let string = 'tseb eht ma i';
// let srtingRev = '';
// for ( let i = string.length - 1; i >= 0; i--){
//     srtingRev += string[i] ;
//     // console.log(string[i]);
// }
// console.log(srtingRev);

// Дана строка "I am an the easycode". Сделать первые буквы каждого слова в верхнем регистре.

let string = "I am an easycode";
let new_string = string[0];
for (let i = 0; i < string.length - 1; i++ ){
    if (string[i] == " ") {
        new_string += string[i + 1].toUpperCase();
    } else {
        new_string += string[i + 1];
    }
}
console.log(new_string);


let string1="I am stupid";
let stringNew1 = string1[0];
for (let i = 0; i < string1.length -1; i++) {
    if(string1[i] == ' '){
        stringNew1 += string1[i + 1].toUpperCase(); 
    } else {
        stringNew1 += string1[i + 1]; 
    }
}
console.log(stringNew1);

let i = 0;
let stringNew2 = string[0];
while (i < string.length - 1){
    if(string[i] == ' '){
        stringNew2 += string[i + 1].toUpperCase(); 
    } else {
        stringNew2 += string[i + 1]; 
    }
    i++;
}
console.log(stringNew2);

// Вычислить факториал числа 10

let number = 10;

for(i = number - 1; i >= 1; i--) {
 number *= i ;
}
console.log( number);

while(i >=1){
    number*= i;
    i--;
}
console.log(number);

// Создать строку "Считаем до 10и: 1,2,3,4,5,6,7,8,9,10"

let string2 = "Считаем до 10и: ";

for(i = 1; i <= 10; i ++) {
    if (i < 10) {
        string2 += i + ",";
    }
    else{ 
        string2 += i ;
    }
}
console.log(string2);

let string3 = "Считаем до 10и: ";

let q = 1;
while( q <= 10 ) {
    if (q < 10) {
        string3 += q + ",";
    }
    else{ 
        string3 += q ;
    }
    q ++;
}
console.log(string3);


// Создать строку "JavaScript is a pretty good language" : каждая первая буква большая, пробелы удалить

let string4 = "JavaScript is a pretty good language";
let stringNew3 = string4[0];
let w = 0;
while (w < string4.length - 1){
    if(string4[w] == ' '){
        stringNew3 += string4[w + 1].toUpperCase(); 
    } else {
        stringNew3 += string4[w + 1]; 
    }
    w++;
}
console.log(stringNew3.split(' ').join(''));

let string5 = "JavaScript is a pretty good language";
let stringNew4 = string4[0];


for (let e = 0; e < string5.length - 1;  e++){
    if(string4[e] == ' '){
        stringNew4 += string5[e + 1].toUpperCase(); 
    } else {
        stringNew4 += string5[e + 1]; 
    }

}
console.log(stringNew4.split(' ').join(''));

let string6 = "JavaScript is a pretty good language";
let stringNew5 = string4[0];


// найти все нечетные числа от 1 до 15 и вывести в консоль
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0){
        console.log(arr[i]);
    }
}