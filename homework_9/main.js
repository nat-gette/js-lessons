// ---------------- Конструкторы задачи-----------

// 1

// function Car(name, age) {

//     this.name = name;
//     this.age = age;


//     this.getName = function() {
//         return this.name[0].toUpperCase() + this.name.slice(1);
//     }
//     this.getAge = function() {
//         return new Date().getFullYear() - this.age;
//     }
// }

// let lexus = new Car('lexus', 2);
// console.log(lexus.getAge());
// console.log(lexus.getName());
// console.log(lexus.name);


function Coder(string) {
    let newString = string;

    this.getSrting = function() {
        return newString;
    }

    this.reverseString = function() {
        return newString.split('').reverse().join('');
    

    this.clearString = function() {
        return newString = '';
    }
}

let str = new Coder('Nataly');

console.log(str.clearString());
console.log(str.getSrting());