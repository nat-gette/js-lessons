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

// 2

// function Coder(string) {
//     let newString = string;

//     this.getSrting = function() {
//         return newString;
//     }

//     this.reverseString = function() {
//         return newString.split('').reverse().join('');
    

//     this.clearString = function() {
//         return newString = '';
//     }
// }

// let str = new Coder('Nataly');

// console.log(str.clearString());
// console.log(str.getSrting());

// 3

function StringClass (str) {
    this.str = str;

    this.setStr = function(newStr) {
        this.str = newStr;
    }

    this.getStr = function(str) {
        return this.str;
    }

    this.strLength = function(str) {
        return this.str.length;
    }

    this.toString = function() {
        return this.str = String(this.str);
    }

    this.valueOf = function() {
        return this.str.length;
    }

}

let str1 = new StringClass('test');

str1.setStr(123);
console.log(str1.toString());;
console.log(str1.getStr());
console.log(+str1);

