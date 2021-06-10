// ---------------ПЕРЕМЕННЫЕ, задача 1---------------

 let prise;
 const maxNumber = 10;
const userName = 'Alex';
 let userInfo;

// ---------------ПЕРЕМЕННЫЕ, задача 2---------------
console.log(test);
var test = 'string';
// выдает undefined , тк переменная объвлена ниже? А как же всплывание?

var x = 'string';
var x = 'string №2';
console.log(x);
// выдаст string №2 , тк переменная была перехзаписана.

// ---------------ПЕРЕМЕННЫЕ, задача 3---------------
console.log(test);
let test = 'string';
// ошибка, тк обьявление переменной должно быть выше.


const x = 'string';
x = 'string №2';
console.log(x);
//ошибка, константу нельзя переназначать.

let someVariable = 15;
let someVariable = 10;
//  тут мне не понятно в чем прикол, просто два раза объявлена та же переменная, не знаю что должно произойти.



// ---------------СТРОКИ задачи---------------
//Получить первую и последнюю буквы строки
let string = 'some test string';
let value;
console.log(string.length);
console.log(string[0]);
console.log(string[15]);
// либо так
value = string.length;
console.log(value);
value = string[0];
console.log(value);
value = string[string.length -1];
console.log(value);

//Сделать первую и посл. буквы в верхнем регистре
value = string[0].toUpperCase() + string[15].toUpperCase();
console.log(value);
// либо так, если нужна строка целиком
value = string[0].toUpperCase() +string.slice(1, -1) +string[15].toUpperCase();
console.log(value);

//Найти положение слова "string"  в строке
value = string.indexOf('string');
console.log(value);

//Найти положение второго пробела 
value = string.lastIndexOf(' ');
console.log(value);

//Получить строку с 5ого символа длиной в 4 буквы
value = string.substr(5, 4);
console.log(value);

// Получить строку с 5ого по  9 символы
value = string.substring(5, 9);
console.log(value);

// Получить новую строку , удалив прследние 6 символов
value = string.slice(0, -6);
console.log(value);

// Из а=20 и b= 16 получить текст в переменной string "2016"
let a = 20;
let b = 16;
value = a.toString() + b.toString();
console.log(value);


// ---------------ЧИСЛА задачи---------------

// 1 Получить число  pi  из Math и округлить его до 2х знаков после точки
let num;
num = Math.PI.toFixed(2);
console.log(num);

// 2 Используя Math , найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 13, 13, 51
num = Math.max(15, 11, 16, 12, 51, 13, 13, 51);
console.log(num);

num = Math.min(15, 11, 16, 12, 51, 13, 13, 51);
console.log(num);

// 2 Работа с Math. random а) Получить случайное число и округлить его до двух цифр после запятой; b) получить случайное целое число от 0 до х
num = Math.random().toFixed(2);
console.log(num);

num = Math.random().toFixed(0);
console.log(num);

// 3 Получить число из строки '100$'
num = parseFloat("100$");
console.log(num);



// --------------- ОБЪЕКТ задачи---------------
// 1 Создать объект с полем product, равным 'iphone'
// 2 Добавить в объект из предыдущей задачи поле price , равное 1000 и поле currency, равное ' dollar';
// 3 Добавить поле details, которое будет содержать  объект с полями model и color (значения этим полям придумать самостоятельно)
let info = {
    product: 'iphone',
    price: 1000,
    currency: 'dollar'
    details:{
        model: 11,
        color: 'red'
    }
};

