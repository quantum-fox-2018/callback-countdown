const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  // var myVar = setInterval(function(){
  //   displayCountdown(seconds)
  //   var seconds = seconds
  // }, 1000);
  let interval = setInterval(function(){
  displayCountdown(seconds);
  seconds--;
  if (seconds < 0) {
    clearInterval(interval);
  }}, 1000);
};

module.exports = {
  timer
};
