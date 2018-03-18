const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  function setTime(){
    displayCountdown(seconds);
    seconds -= 1;
  }
  if(seconds>0){
    setInterval(setTime, 1000)
  }else{
    clearInterval(setInterval(setTime, 1000))
  }
};

module.exports = {
  timer
};
