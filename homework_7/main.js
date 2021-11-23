// // --------задачи по this . презентация 12------
// // 1 

// const rectangle = {
//     width: 20,
//     heidht: 30,
//     getSquare() {
//         return this.width * this.heidht;
//     },
// };

// console.log(rectangle.getSquare());

// // 2

// const price = {
//     price: 10,
//     discount: '15%',
//     getpPrice() {
//         return this.price;
//     },
//     getPriceWithDiscount() {
//         return this.price / 100 * (100 - parseInt(this.discount));
//     },
// };

// console.log(price.getPriceWithDiscount());

// // 3

// const user = {
//     name: 'Abraham',
//     getUserName: getUserName,
// };

// function getUserName() {
//     return this.name ;
// }

// console.log(user.getUserName());

// // 4
// const module = {
//     height: 10,
//     plusCounter() {
//         return ++this.height;
//     },
// };

// console.log(module.plusCounter());
// console.log(module.height);

// // 5
// const numerator = {
//     value: 5,
//     double() {
//         this.value += this.value;
//         console.log(this);
//         return this;
        
//     },
//     plusOne() {
//         ++this.value;
//         return this; 
//     },
//     minusOne() {
//         --this.value;
//         return this;
//     },
// };

// console.log(numerator.double());
// console.log(numerator.value);



// -------- задачи по this (2)-------

// 1. 
// getList(); не выведет никакого результата,тк нет обращения к обьекту какому-либо, мб это будет undefiend
// users.Getlist(); скорее всего выведет список имен,  не поняла зачем выше сделано приравнивание
// getList.call(users); веррнет список имен  

// // проверка:
// function getList() { return this.list; } ;
// let users = {
//     length: 4,
//     list: ['Abraham', 'James', 'John', 'Steven']
// };

// console.log(getList()); 

// users.getList = getList;
// console.log(users.getList());
// console.log( getList.call(users));

// let bainded = getLis.bind(users);
// console.log(binded());
// ничего не вывелось ни в одном из вызовов ( не правильно что-то переписала?)


// 2.

// const products = {
//     price: 20,
//     prodCount: 30,
//     generalPrice(){
//        return this.price * this.prodCount; 
//     },
// };

// 3. 

// const products = {
//     price: 20,
//     prodCount: 30,
//     generalPrice(){
//        return this.price * this.prodCount; 
//     },
// };

// const details = {
//     price: 20,
//     prodCount: 30,
// };

// details.generalPrice = products.generalPrice;
// console.log(details.generalPrice());

// // 4.
// let sizes = {
//     width: 5,
//     height: 10,
// };
// let getSquare = function () {
//     return this.width * this.height;
// };

// console.log(getSquare.call(sizes));
// console.log(getSquare.apply(sizes));

// console.log(getSquare.bind(sizes)());

// // 5.

// let numbers = [4, 12, 0, 10, -2, 4];
// console.log(Math.min.apply(null, numbers )); //или console.log(Math.min(...numbers));

// // 6.

// const element = {
//     height: '15px',
//     marginTop: '5px',
//     marginBottom: '5px',
//     getFullHeigth: function() {
//         return parseInt(this.height) + parseInt(this.marginTop) + parseInt(this.marginBottom);
//     },
// };

// const block = {height: '5px', marginTop: '3px', marginBottom: '3px'};

// console.log(element.getFullHeigth.call(block));

// console.log(element.getFullHeigth());

//7.
// let element = {
//     height: 25,
//     getHeight: function() {
//         return this.height;
//     }
// };
// let getElementHeight = element.getHeight.bind(element) ;
// console.log(getElementHeight());

// ---- лексическое окружение задачи---------

// 1 

// var userName = 'Ivan';

// console.log(getBigName(userName));

// function getBigName(name) {
//     name = name + "";
//     return name.toUpperCase();
// }

// 2

// function test() {
//     var name = 'Vasiliy';
//     return getBigName(userName);
// };


// function getBigName(name) {
//     name = name + '';
//     return name.toUpperCase();    
// };

// var userName = 'Ivan';
// console.log(test());


// 3

// let food = 'cucamber';

// (function () {
//     var food = 'bread';
//     getFood();
// })();

// function getFood() {
//     console.log(food);
// };


// -----1. замыкание функции-----

// function someFunction(x){
//     return x * x;
// };

// function bar(fun, arg){
//     console.log(arg);
//     res = fun(arg);
//     console.log(res);
// };

// 1.

// var dollar,
//     getDollar;

// (function() {
//     var dollar = 0;
//     getDollar = function() {
//         return dollar;
//     }
// })();

// dollar = 30;
// console.log(getDollar());


// 2.

// var greet = "Hello";

// (function (){
//     var text = "World";
//     console.log(greet + text);
// })();
// console.log(greet + text);

// 3

// function minus(arg1 = 0) {
//     return function fn(arg2 = 0) {
//         return arg1 - arg2;
//     }
// }
// console.log(minus(10)(6));

// 4

// function MultyplyMaker(arg1) {
//     let num = arg1;
//     return function(arg2) {
//         return num *= arg2;

//     } 
// }

// // console.log(MultyplyMaker(2));
// const multiply = MultyplyMaker(2);
// console.log(multiply(2));
// console.log(multiply(3));


// 5

// const module = (function() {

//     let str = null ;

//     function strSet(arg) {
//         str =  String(arg);
//     };

//     function strGet(){
//         return str;
//     };

//     function strLength() {
//         return str.length;
//     };
    
//     function strRevers() {
//         str.split('').reverse().join('');
//     };

//     return {
//         strSet,
//         strGet: strGet,
//         strLength: strLength,
//         strRevers: strRevers,
//     };
// })();

// module.strSet('abc');

// console.log(module.strGet());

// 6


const calculator = (function() {

    let num = 0;

    function setValue(val) {
        num = val;
        return this;
    };
    
    function addValue(added) {
        num += added;
        return this;
    };

    function subtrValue(subtrahend) {
        num -= subtrahend;
        return this;
    }

    function multiplyValue(multiplied) {
        num *= multiplied;
        return this;
    };

    function divideValue(divided) {
        num /= divided;
        return this;
    };

    function exponentiationValue(expon) {
        num **= expon;
        return this;
    };


    function getValue() {
        num = parseFloat(num.toFixed(2));
        return num;
    }

    return {
        setValue,
        addValue, 
        subtrValue,
        divideValue,
        multiplyValue,
        exponentiationValue,
        getValue,

    }
})();

calculator.setValue(5.21334);

// console.log(calculator.multiplyValue(4));
// console.log(calculator.divideValue(2));
// console.log(calculator.exponentiationValue(2));
// console.log(calculator.getValue());

console.log(calculator.addValue(10).divideValue(2).getValue());