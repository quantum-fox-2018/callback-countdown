const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  var intervalId = setInterval(() => {

    let minutes = 0;
    let timeCountdown = seconds;

    while(seconds>=60){
      minutes++;
      seconds-=60;
    }

    var timeFormat = [minutes,seconds];


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
