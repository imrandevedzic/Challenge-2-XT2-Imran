
function digitalClock(){
  var today = new Date();
  var seconds = today.getSeconds();
  var minutes = today.getMinutes();
  var hours = today.getHours();

  if(seconds < 10) {
    seconds = '0' + seconds;
  }

  if(minutes < 10) {
    minutes = '0' + minutes;
  }

  if(hours < 10) {
    hours = '0' + hours;
  }

  document.getElementById('digitalclock').innerHTML = hours + ':' + minutes + ':' + seconds;
}

var today = new Date();

var maanden = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
document.getElementById('date').innerHTML = maanden[today.getMonth()];

var jaar = 2031;

var dagenWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
document.getElementById('date').innerHTML = dagenWeek[today.getDay()] + ' ' + today.getDate() + ' ' + maanden[today.getMonth()] + ' ' + jaar;

digitalClock();
setInterval(digitalClock, 1000);

setInterval(setClock,1000);

const HOURHAND = document.querySelector('#date-hour-hand');
const MINUTEHAND = document.querySelector('#date-minute-hand');
const SECONDHAND = document.querySelector('#date-second-hand');

function setClock(){
  var currentDate = new Date();
  var secondsRatio = currentDate.getSeconds() / 60;
  var minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  var hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
  setRotation(SECONDHAND, secondsRatio);
  setRotation(MINUTEHAND, minutesRatio);
  setRotation(HOURHAND, hoursRatio);

}

function setRotation(element, rotationRatio){
  element.style.setProperty('--rotation', rotationRatio * 360);
}

setClock();

function changeColor(){
  var today = new Date();
  var hours = today.getHours();

  if (hours >= 12 && hours < 18){
    document.getElementById('analogclock').classList.add('middag');
} else if (hours >= 18 && hours <=23){
    document.getElementById('analogclock').classList.remove('middag');
    document.getElementById('analogclock').classList.add('avond');
} else if (hours >=0 && hours < 6){
    document.getElementById('analogclock').classList.remove('avond');
    document.getElementById('analogclock').classList.add('nacht');
} else{
    document.getElementById('analogclock').classList.remove('nacht');
    document.getElementById('analogclock').classList.add('ochtend');
}

}

changeColor();