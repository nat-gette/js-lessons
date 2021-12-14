// //  1 создается пустой объект
// // 2 этот объект устанавливается в качестве this для этой функции
// //  3 функция запускается
// // 4 функция возвращает this  

// function Persone (firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName; 

  
//     // let userAge = age;

//     // this.getUserAge = function () {
//     //     return age;
//     // }

// }
// Persone.prototype.getFullName = function () {
//         return `${this.firstName} ${this.lastName}`;
// }

// Persone.prototype.greeting = function () {
//     return `Hello there ${firstName}`;
// }

// let denis = new Persone('Denis', 'Mescheryakov');


// function Customer (firstName, lastName, phone, membership) {
//     Persone.call(this, firstName, lastName);

//     this.phone = phone;
//     this.membership = membership;

// }

// Customer.prototype = Object.create(Persone.prototype);

// Customer.prototype.constructor = Customer;

// Customer.prototype.greeting = function () {
//     return `Hello there ${firstName}. Welcome`;
// }

// let customer1 = new Customer ('Ivan', 'Ivanov')

// console.log(customer1);



// let objPrototype = {
//     greeting() {
//         return `Hello there ${this.firstName}`
//     }
// }

// let oleg = Object.create(objPrototype);
// oleg.firstName = 'Oleg';
// console.log(oleg);



// ES6 class

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greeting() {
        return `Hello ${this.firstName}`;
    }
    static sumNumbers(x, y) {
        return x + y;
    }
}

class Customer extends Person {
    constructor(firstName, lastName, phone, membership) {
        super(firstName, lastName);

        this.phone = phone;
        this.membership = membership;
    }
    getMembership() {
        return this.membership;
    }
    greeting() {
        return `${super.greeting()} welcome `
    }
}

const denis = new Person('Denis', 'Blabla');
const cust1 = new Customer('Ivan', 'Ivanov', '8930489103', 'Standart');

console.log(denis);
console.log(cust1);