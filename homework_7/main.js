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
const module = {
    height: 10,
    plusCounter() {
        return ++this.height;
    },
};

console.log(module.plusCounter());
console.log(module.height);

// 5
const numerator = {
    value: 5,
    double() {
        this.value += this.value;
        console.log(this);
        return this;
        
    },
    plusOne() {
        ++this.value;
        return this; 
    },
    minusOne() {
        --this.value;
        return this;
    },
};

console.log(numerator.double());
console.log(numerator.value);

