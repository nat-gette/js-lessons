// // date

// let date = new Date();
// let methods;

// date.setMinutes(date.getMinutes() + 10);
// date = date.toLocaleString('ru-RU', {
//     year: '2-digit',
//     month: 'short',
//     weekday: 'long',
// });

// console.log(date);


// // let timer = setInterval(() => {
// //     console.log(Date.now());
// // }, 500);

// Timet

const buttons =  document.querySelectorAll('[data-time]');

const timer = (function() {
    
    let countdown;
    let timerDisplay;
    let endTime;

    function init(settings) {

    };

    function start(seconds) {

    };

    function displayTimeLeft(seconds) {

    };

    function displayEndTime(timestamp) {

    };

    function stop() {

    };

    function playSound() {

    };

    return{
        init,
        start,
        stop,
    }
}());


// Init timer

timer.init({
    timeLeftSelector: ".display__time-left",
    timeEndSelector: 'display__end-time',
    alarmSound: 'audio/bell.mp3'
});















