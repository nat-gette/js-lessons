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




// // 3  
// function Furniture(name, price) {
//     this.name = name;
//     this.price = price;
// }

// Furniture.prototype.getInfo =  function() {
//     return {
//         name : this.name,
//         price: this.price,
//     }
// }

// function OfficeFurniture(name, price, height) {
//     Furniture.call(this, name, price);
//     this.height = height;
// }

// OfficeFurniture.prototype = Object.create(Furniture.prototype);
// OfficeFurniture.prototype.constructor = OfficeFurniture;

// OfficeFurniture.prototype.getInfo = function() {
//     let originInfo = Furniture.prototype.getInfo.call(this);
//     originInfo.height = this.height;
//     return originInfo;
// }

// function HomeFurniture(name, price, color) {
//     Furniture.call(this, name, price);
//     this.color = color;
// }

// HomeFurniture.prototype = Object.create(Furniture.prototype);
// HomeFurniture.prototype.constructor = HomeFurniture;

// HomeFurniture.prototype.getInfo = function() {
//     let originInfo = Furniture.prototype.getInfo.call(this);
//     originInfo.color = this.color;
//     return originInfo;
// }


// let table1 = new Furniture('table1', 1120);
// console.log(table1.getInfo());


// let table = new OfficeFurniture('table', 120, 60);
// console.log(table.getInfo());

// let table2 = new HomeFurniture('table2', 120, 'red');
// console.log(table2.getInfo());


// // 4

// function User(name, registrationDate) {
//     this.name = name;
//     this.registrationDate = registrationDate;
// }

// User.prototype.getInfo = function() {
//     return {
//         name: this.name,
//         registrationDate: this.registrationDate,
//     }
// }



// function Administrator(name, registrationDate, superAdmin) {
//     User.call(this, name, registrationDate);
//     this._superAdmin = superAdmin;
// }

// Administrator.prototype = Object.create(User.prototype);
// Administrator.prototype.constructor = Administrator;

// Administrator.prototype.getInfo = function() {
//     let originInfo = User.prototype.getInfo.call(this);
//     originInfo['superAdmin'] = superAdmin;
//     return originInfo;
// }



// function Guest (name, registrationDate) {
//     User.call(this, name, registrationDate);
//     this._validDate = new Date( +new Date(this.registrationDate) + 604800000).toLocaleDateString();
// }

// Guest.prototype = Object.create(User.prototype);
// Guest.prototype.constructor = Guest;

// Guest.prototype.getInfo = function() {
//     let originInfo = User.prototype.getInfo.call(this);
//     originInfo['validDate'] = validDate;
//     return originInfo;
// }


// let newUser = new User('Nik', '06.06.21');
// let newAdmin = new Administrator('Nik2', '07.07.21', true);
// let newGuest = new Guest('Nik3', '08.08.21');


// // 1.

// function General() {
//     this.test = true;
//     this.parent = true;
//     this.getInfo = function() {
//         return {
//             test: this.test, 
//             parent: this.parent,
//         };
//     }
// }


// function GeneralChild() {
//     General.call(this);
//     this.parent = false;
//     this.child = true;
    

//     let original = this.getInfo();

//     this.getInfo = function() {
//         original.child = this.child;
//         return original;
//     }

// }

// let child = new GeneralChild();


// // 2
// function Boy(name) {
//     this.name = name;
//     this.good = true;

//     this.getName = function() {
//         return `This boy's name is ${this.name}. He is ${this.good === true ? 'good':'bad'}.`
//     }
// }

// function BadBoy(name) {
//     Boy.call(this, name);
//     this.good = false;

//     let origin = this.getName();

//     this.getName = function() {
//         return ` ${origin} Don't be friends with him!`
//     }
// }

// let vanya = new Boy('Vanya');
// let lenya = new BadBoy('Lenya');

// // 3

// function Fruit(name, color) {
//     this.name = name;
//     this.color = color;

//     this.getInfo = function() {
//         return `Fruit - ${this.name}, color - ${this.color} `
//     }
// }

// function SweetFruit(name, color) {
//     Fruit.call(this, name, color); 
//     this.sweetness = true;

//     let origin = this.getInfo();

//     this.getInfo = function() {
//         return `${origin} , sweetness - ${this.sweetness === true? 'sweet':'not sweet'}`
//     }

//     this.setSweetness = function(newSweetness) {
//         this.sweetness = newSweetness;
//     }
// }

// let orange = new SweetFruit('aple', 'red');
// orange.setSweetness(false);


// прототипное наследование

// 1
// Дан класс User. Создать наследника NewUser, у которого метод setNewName будет ко всему создавать новое свойство this.changed = “The field ‘name’ was changed!”.

// function User(name, age) {
//     this.name = name || 'Unknown';
//     this.age = age || 0;
// }

// User.prototype.setNewName = function (name) {
//     this.name = name;
// };

// function NewUser(name, age ) {
//     User.call(this, name, age)
// }

// NewUser.prototype = Object.create(User.prototype);
// NewUser.prototype.constructor = NewUser;

// NewUser.prototype.setNewName = function(name) {
//     const oldName = this.name;
//     User.prototype.setNewName.call(this, name);
//     this.changed = `The fieled name ${oldName} was changed on ${this.name}`;
// }



// // 2
// // Дан абстрактный класс Module. 
// // Разобраться, что он делает и как работает.
// // Создать наследника NewModule. Его setGlobalName должен делать всё то же самое, что и родительская функция, + устанавливать this.length = this.name.length.


// function Module(name) {
//     if (typeof name !== 'string') {
//         throw 'Enter a name!';
//     }
    
//     this.getName = function () {
//         return name;
//     };
// };
    
// Module.prototype.getPrettyName = function () {
//     let name = this.getName();  
//     name = name.replace(/\s+/, '_');  
//     return 'The module name is ' + name[0].toUpperCase() + name.substr(1);
// };
    
// Module.prototype.setGlobalName = function (prefix) {
//     let name = this.getName();
//     this.name = prefix ? prefix + '_' + name : name; 
// };
    

// function NewModule(name) {
//     Module.call(this, name);
// }

// NewModule.prototype = Object.create(Module.prototype);
// NewModule.prototype.constructor = NewModule;

// NewModule.prototype.setGlobalName = function (prefix) {
//     Module.prototype.setGlobalName.call(this, prefix);
//     this.length = this.name.length;
// }

// let module = new NewModule('nat');

// console.log(module.getPrettyName());
// console.log(module.setGlobalName('g'));
// console.log(module.getName());

