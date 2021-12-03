//  1 создается пустой объект
// 2 этот объект устанавливается в качестве this для этой функции
//  3 функция запускается
// 4 функция возвращает this  

function Persone (firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName; 

  
    // let userAge = age;

    // this.getUserAge = function () {
    //     return age;
    // }

}
Persone.prototype.getFullName = function () {
        return `${this.firstName} ${this.lastName}`;
}

Persone.prototype.greeting = function () {
    return `Hello there ${firstName}`;
}

let denis = new Persone('Denis', 'Mescheryakov');


function Customer (firstName, lastName, phone, membership) {
    Persone.call(this, firstName, lastName);

    this.phone = phone;
    this.membership = membership;

}

Customer.prototype = Object.create(Persone.prototype);

Customer.prototype.constructor = Customer;

Customer.prototype.greeting = function () {
    return `Hello there ${firstName}. Welcome`;
}

let customer1 = new Customer ('Ivan', 'Ivanov')

console.log(customer1);







