const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  setInterval(function(){
    displayCountdown(seconds);
    seconds -=1;
  }, 1000)
};

module.exports = {
  timer
};
