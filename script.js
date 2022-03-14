function digitalClock() {
    var date = new Date;
    var hours = date.getHours() + ''; //the ' ' converts these numbers to strings
    var minutes = date.getMinutes() + '';
    var seconds = date.getSeconds() + '';
    var day = date.getDay() + '';

    // append 0 if value is one digit
    if (hours.length < 2) {
        hours = '0' + hours;
    }

    if (minutes.length < 2) {
        minutes = '0' + minutes;
    }

    if (seconds.length < 2) {
        seconds = '0' + seconds;
    }
var weekdays = ['Sun ','Mon ','Tue ', 'wed ', 'Thu ', 'Fri ', 'sat'];    
var clock = weekdays[day] +  hours + ':' + minutes + ':' + seconds;
document.getElementById('clock').innerHTML = clock;
console.log(clock);
}
digitalClock();
setInterval(digitalClock,1000);