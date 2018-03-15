const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  let interval = setInterval(function(){
    let tempSeconds = seconds;
    let menit = 0;
    let timeFormat = '00:00';

    while (tempSeconds >= 60) {
      menit += 1;
      tempSeconds -= 60;
    }

    if(menit < 60){
      menit = `0${menit}`
    }

    if(tempSeconds < 10){
      tempSeconds = `0${tempSeconds}`;
    }

    timeFormat = `${menit}:${tempSeconds}`;

    displayCountdown(timeFormat);

    if(seconds == 0){
      clearInterval(interval);
    }
    seconds--;
  }, 1000);

};




module.exports = {
  timer
};
