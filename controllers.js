const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  setInterval(function(){
    if (seconds === 0) {
      console.log(seconds)
      console.log("stop di 0");
      clearInterval(this)
    }else{
      console.log(seconds)
      seconds--
    }
  }, 1000)

};

module.exports = {
  timer
};
