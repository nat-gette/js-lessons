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

// function StringClass (str) {
//     this.str = str;

//     this.setStr = function(newStr) {
//         this.str = newStr;
//     }

//     this.getStr = function(str) {
//         return this.str;
//     }

//     this.strLength = function(str) {
//         return this.str.length;
//     }

//     this.toString = function() {
//         return this.str = String(this.str);
//     }

//     this.valueOf = function() {
//         return this.str.length;
//     }

// }

// let str1 = new StringClass('test');

// str1.setStr(123);
// console.log(str1.toString());;
// console.log(str1.getStr());
// console.log(+str1);



// ------------ ооп
// 1

// function Planet(name) {
//     this.name = name;
//     this.getName = function() {
//         return 'Planet name is ' + this.name +'. ';
//     }
// }

// function PlanetWithSatellite(name, sattelite) {
//     Planet.call(this, name);

//     this.sattelite = sattelite;

//     let origin = this.getName;

//     this.getName = function() {
//         return origin.call(this) + 'The sattellite is ' + this.sattelite;
//     }
// }

// let earth = new PlanetWithSatellite('earth', 'moon');
// console.log(earth.getName());


// 2

// function Building(name, floors) {
//     this.name = name;
//     this.floors = floors;

//     this.getFloors = function() {
//         return this.floors;
//     }

//     this.setFloors = function(count) {
//         this.floors = count;
//     }
// }

// function House(name, floors, countOfFlats) {
//     Building.call(this, name, floors);

//     this.countOfFlats = countOfFlats;

//     let origin = this.getFloors;

//     this.getFloors = function() {
//         const floors = origin.call(this)

//         return {
//             floors,
//             ollFlats:floors * this.countOfFlats,
//         }
//     }
// }

// function Mall(name, floors, countOfFlats) {
//     House.call(this, name, floors, countOfFlats);

// }

// let newBuild = new Building('Trump', 100);
// let newFlats = new House('My sweet Home', 5, 6);
// let newShops = new Mall('New Mall', 3, 100);

// console.log(newShops.getFloors());




// 3  
function Furniture(name, price) {
    this.name = name;
    this.price = price;
}

Furniture.prototype.getInfo =  function() {
    return {
        name : this.name,
        price: this.price,
    }
}

function OfficeFurniture(name, price, height) {
    Furniture.call(this, name, price);
    this.height = height;
}

OfficeFurniture.prototype = Object.create(Furniture.prototype);
OfficeFurniture.prototype.constructor = OfficeFurniture;

OfficeFurniture.prototype.getInfo = function() {
    let originInfo = Furniture.prototype.getInfo.call(this);
    originInfo.height = this.height;
    return originInfo;
}

function HomeFurniture(name, price, color) {
    Furniture.call(this, name, price);
    this.color = color;
}

HomeFurniture.prototype = Object.create(Furniture.prototype);
HomeFurniture.prototype.constructor = HomeFurniture;

HomeFurniture.prototype.getInfo = function() {
    let originInfo = Furniture.prototype.getInfo.call(this);
    originInfo.color = this.color;
    return originInfo;
}


let table1 = new Furniture('table1', 1120);
console.log(table1.getInfo());


let table = new OfficeFurniture('table', 120, 60);
console.log(table.getInfo());

let table2 = new HomeFurniture('table2', 120, 'red');
console.log(table2.getInfo());

