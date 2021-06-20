// // let num;
// // let str = 'Hello';

// // num = +'20';
// // num = 10;
// // num = num +20;
// // num += 20;
// // str += 'world';
// // num = 5 % 2;

// // console.log(num);
// // console.log(str);
// // console.log(2 <= 0 );


// // // || &&
// // let user = {
// //     name: 'Denis',
// //     age:28
// // };

// // let userName = user.name || 'User';

// // user.fullInfo = user.name && user.age;

// // Boolean(undefined);

// // console.log(userName);
// // console.log(user);
// // console.log( !'' );


// // // if else
// // let a = 1;
// // if( a >= 1) {
// //     console.log(' a >= 1'); 
// // } else if (a > 10){
// //     console.log('a > 10');
// // } else {
// //     console.log ('a <=1')
// // }


// // let userName2 = 'Denis';

// // if (userName2) {
// //     console.log(`Hello ${userName2}`);
// // } else{
// //     console.log('hi!');
// // }

// // let arr = [1, 2, 3];

// // if ( arr.length){
// //     console.log(arr);
// // } else {
// //     console.log('arr emp');
// // }

// // // тернарный оператор 

// // userName2 ? console.log('Hello ${userName2}') : console.log('hi!');

// // a >= 1 ? console.log(' a >= 1') :
// //      a > 10 ? console.log('a > 10') : console.log ('a <=1');


// // //switch case
// // let val = 1;     
// // switch(val){
// //     case 1 : console.log(1); break;
// //     case 10 : console.log(10); break;
// //     case 3 : console.log(3); break;
// //     default : console.log('default');
// // }

// // //преобразование типов (к строкам, к числам, логические)

// // let c = 20,
// //     b = 18;
// // let string = '' + c + b;
// // console.log(string);
// // // 2018

// // // Циклы while , do while, for, for of , for in

// let str ='Hello';
// let is = str.length;

// while (--is){
//     console.log(str[is], is);
// }

// let isFinish;
// let i = 10;

// while (!isFinish){
//     console.log(i);
//     isFinish = !i--;
// }

// let index;

// do {
//     console.log(`Index = ${index}`);
// } while (index)

// // for (init; condition; i++){}
// // break, continue

// let colors = ['black', 'white', 'yellow'];

// for (let i = 0; i < colors.length; i++) {
//     if( colors[i]=== 'white'){
//     continue
//     }
//     console.log(colors[i]);
// }

// let obj = {
//     name: 'Denis',
//     age: 28
// }
// for (let key in  obj ){
//     console.log(key);
// }

// for (let value of colors ){
//     console.log(value);
// }

// debugger  почитать

let val = [1, 2, 3, 4, 5];
for (let i = 0; i < val.length; i++) {
    console.log(val[i]);
}
