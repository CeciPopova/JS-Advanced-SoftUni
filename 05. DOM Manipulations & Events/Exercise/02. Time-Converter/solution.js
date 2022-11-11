function attachEventsListeners() {
    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    let buttons = document.querySelectorAll('input[type="button"]');
    for (const button of buttons) {
        button.addEventListener('click', convert);
    }
    let rations = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    };

    function calculate(value, unit) {
       
       let days = value / rations[unit];
       return {
        days: days,
        hours: days * rations.hours,
        minutes: days * rations.minutes,
        seconds: days * rations.seconds
       }
    }
    function convert(e) {
        let input = e.target.parentElement.querySelector('input[type="text"]');
        
        let time = calculate(Number(input.value), input.id)
       days.value = time.days;
       hours.value = time.hours;
       minutes.value = time.minutes;
       seconds.value = time.seconds;
    }
}