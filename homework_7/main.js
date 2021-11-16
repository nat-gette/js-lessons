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
let element = {
    height: 25,
    getHeight: function() {
        return this.height;
    }
};
let getElementHeight = element.getHeight.bind(element) ;
console.log(getElementHeight());