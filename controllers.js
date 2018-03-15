const { displayCountdown } = require("./views");

const timer = seconds => {
  
  let timing = setInterval(function(){

    let second = seconds % 60;
    let minutes = Math.floor(seconds/60)
    
    if(minutes < 9){
      displayCountdown(`0${minutes}:${second}`)
    } else {
      displayCountdown(`${minutes}:${second}`)
    }

    if(second <= 9){
      displayCountdown(`0${minutes}:0${second}`)
    }

    if(seconds == 0){
      clearInterval(timing)
    }
    seconds--;
  }, 1000)
  
};


module.exports = {
  timer
};
