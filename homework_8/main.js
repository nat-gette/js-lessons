// ----------дата и время
// 1

// function getDay(year) {
//     const day = new Date(year, 0);
//     const numberDay = day.getDay();
//     const dayOfweek = {
//         0: 'вс',
//         1: 'пн',
//         2: 'вт',
//         3: 'ср',
//         4: 'чт',
//         5: 'пт',
//         6: 'сб',
//     };

//     return dayOfweek[numberDay];
// };
// console.log(getDay(2021));

// 2

// function getDay(date) {
//     let num = date.split('.').reverse().join('.');
//     const day = new Date(num);
//     const numberDay = day.getDay();
//     const dayOfweek = {
//         0: 'вс',
//         1: 'пн',
//         2: 'вт',
//         3: 'ср',
//         4: 'чт',
//         5: 'пт',
//         6: 'сб',
//     };
    
//     return dayOfweek[numberDay]; 
// };

// console.log(getDay('29.03.1985'));

// 3

// let days = Date.now() - new Date('2021.11.01');
// let weeks = Math.floor(days/1000/60/60/24/7);
// console.log(weeks);
