const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  setInterval(function(){
    if (seconds < 0) {
      clearInterval(this)
    }else{
      displayCountdown(seconds)
      seconds--
    }
  }, 1000)

};

module.exports = {
  timer
};
