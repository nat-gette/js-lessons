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
    let alarmSound;

    function init(settings) {
        
        timerDisplay = document.querySelector(settings.timeLeftSelector);
        endTime = document.querySelector(settings.timeEndSelector);

        if (settings.alarmSound) {
            alarmSound = new Audio(settings.alarmSound);
        }
    };

    function start(seconds) {
        
        if (!timerDisplay || !endTime) return console.log('Please init module first.');
        if (!seconds || typeof seconds !== 'number') return console.log('Please provide seconds.');

        // reset timer
        clearInterval(countdown);
        // reset sound
        alarmSound.pause();
        alarmSound.currentTime = 0;

        const now = Date.now();
        const then = now + seconds * 1000;

        displayTimeLeft(seconds);
        displayEndTime(then);

        countdown = setInterval(() => {
            const secondsLeft = Math.round((then - Date.now()) / 1000);

            if (secondsLeft < 0) {
                clearInterval(countdown);
                playSound();
                return;
            }

            displayTimeLeft(secondsLeft);
        }, 1000);
    };

    function displayTimeLeft(seconds) {
        const minutes = Math.floor(seconds / 60);
        const reminderSeconds = seconds % 60;

        const display = `${minutes}:${reminderSeconds < 10 ? '0' : ''}${reminderSeconds}`;
        document.title = display;
        timerDisplay.textContent = display;
    };

    function displayEndTime(timestamp) {
        const end = new Date(timestamp);
        const hour = end.getHours();
        const minutes = end.getMinutes();

        endTime.textContent = `Be back at ${hour}:${minutes < 10 ? '0' : ''}${minutes}`;
    };

    function stop() {

    };

    function playSound() {
        alarmSound.play();
    };

    return {
        init,
        start,
        stop,
    }
}());


// Init timer

timer.init({
    timeLeftSelector: ".display__time-left",
    timeEndSelector: '.display__end-time',
    alarmSound: 'audio/message_sound.mp3' ,
});

// start timer by click
function startTimer(e) {
    const seconds = parseInt(this.dataset.time);
    timer.start(seconds);

    
};

buttons.forEach(btn => btn.addEventListener('click', startTimer));















