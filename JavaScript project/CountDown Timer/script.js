const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const springTime = '20 mar 2023';

function countdown() {
    const springTimeDate = new Date(springTime);
    const currentDate = new Date (); 

    const totalSeconds = (springTimeDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds/ 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) %60 ;
 
    console.log(days, hours, minutes, seconds);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;

}
//initial call
countdown();

setInterval(countdown, 1000);
