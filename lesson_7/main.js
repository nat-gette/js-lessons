// function getPrice  (currency) {
//     console.log(`этот товар стоит ${intel.price} `);
//     return `этот товар стоит ${currency}${intel.price} `
// }

// let intel = {
//     name:'Intel i7 3.5Ghz',
//     price: 100,
//     discount: 10,
//     count: 50,
//     getPrice: getPrice
// };

// let amd = {
//     name:'Amd A9 3.5Ghz',
//     price: 75,
//     discount: 10,
//     count: 50,
//     // getPrice: getPrice,
//     // calcTotalPrice: function () {
//     //     this.totalPrice = this.count * this.price;
//     //     return this;
//     // },
//     // getTotalPrice: function () {
//     //     return this.totalPrice;
//     // }
// };

// // getPrice.call(amd, '$');
// // getPrice.apply(amd, ['$', 'price']);

// intel.getPrice = getPrice.bind(intel);

// setTimeout(intel.getPrice, 1000);




// let name  = 'Denis';

// function getName(secondName) {

//     let text = 'My name is ';

//     function getFullName(secondName) {
//         return  name + ' ' + secondName;
        
//     }
//     return text + getFullName('Mescheryacov');
// };

// console.log(getName(name)); 




function makeCounter() {
    let counter = 0;
    
    return function() {
        return ++counter;
    }
}

let counterState = makeCounter();

let module = (function() {
    let counter = 0;
    function setCounter(value) {
        counter = value;
    }
    function plusCounter() {
        counter++;
    }
    function getCounter() {
        return counter; 
    }
    function reset() {
        counter = 0;
    }
    return{
        setCounter: setCounter,
        getCounter: getCounter,
        plusCounter: plusCounter,
        reset: reset,
    }

})();
let copy = module;

console.log(copy);