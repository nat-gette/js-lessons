let num;
let str = 'Hello';

num = +'20';
num = 10;
num = num +20;
num += 20;
str += 'world';
num = 5 % 2;

console.log(num);
console.log(str);
console.log(2 <= 0 );


// || &&
let user = {
    name: 'Denis',
    age:28
};

let userName = user.name || 'User';

user.fullInfo = user.name && user.age;

Boolean(undefined);

console.log(userName);
console.log(user);
console.log( !'' );


// if else
let a = 1;
if( a >= 1) {
    console.log(' a >= 1'); 
} else if (a > 10){
    console.log('a > 10');
} else {
    console.log ('a <=1')
}


let userName2 = 'Denis';

if (userName2) {
    console.log('Hello ${userName2}');
} else{
    console.log('hi!');
}

let arr = [1, 2, 3];

if ( arr.length){
    console.log(arr);
} else {
    console.log('arr emp');
}

// тернарный оператор 

userName2 ? console.log('Hello ${userName2}') : console.log('hi!');

a >= 1 ? console.log(' a >= 1') :
     a > 10 ? console.log('a > 10') : console.log ('a <=1');
