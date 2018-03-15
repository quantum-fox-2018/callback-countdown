const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  var intervalId = setInterval(() => {

    let minutes = 0;
    let minutesFormat = "";
    let secondsFormat = "";
    let timeCountdown = seconds;

    while(seconds>=60){
      minutes++;
      seconds-=60;
    }

    if(minutes<10){
      minutesFormat = "0" + minutes;
    }
    else{
      minutesFormat = minutes.toString();
    }

    if(seconds<10){
      secondsFormat = "0" + seconds;
    }
    else{
      secondsFormat = seconds.toString();
    }

    var timeFormat = `${minutesFormat} : ${secondsFormat}`


    displayCountdown(timeFormat);
    timeCountdown--;
    seconds = timeCountdown;
    if(timeCountdown <0){
      clearInterval(intervalId)
    }
  },1000);
};

module.exports = {
  timer
};
