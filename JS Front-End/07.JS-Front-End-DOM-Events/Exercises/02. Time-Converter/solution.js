function attachEventsListeners() {

    let days = document.getElementById('days');
    let daysBtn = document.getElementById('daysBtn');

    let hours = document.getElementById('hours');
    let hoursBtn = document.getElementById('hoursBtn');

    let mintues = document.getElementById('minutes');
    let mintuesBtn = document.getElementById('minutesBtn');

    let seconds = document.getElementById('seconds');
    let secondsBtn = document.getElementById('secondsBtn');

    daysBtn.addEventListener('click', daysCalc);
    hoursBtn.addEventListener('click', hoursCalc);
    mintuesBtn.addEventListener('click', minutesCalc);
    secondsBtn.addEventListener('click', secondsCalc);



    function daysCalc() {
        hours.value = days.value * 24;
        minutes.value = hours.value * 60;
        seconds.value = minutes.value * 60
    }
    function hoursCalc() {
        days.value = hours.value / 24;
        minutes.value = hours.value * 60;
        seconds.value = mintues.value * 60;
    }

    function minutesCalc() {
        hours.value = mintues.value / 60;
        days.value = hours.value / 24;
        seconds.value = mintues.value * 60;
    }

    function secondsCalc() {
        mintues.value = seconds.value / 60;
        hours.value = mintues.value / 60;
        days.value = hours.value / 24;
        
    }


}