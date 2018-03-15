/*jshint esversion:6*/
const {
  displayCountdown
} = require("./views");

const timer = seconds => {
  // Your code here...
  var myTime = setInterval(() => {

    displayCountdown(seconds);
    seconds--;
    if (seconds < 0) {
      clearInterval(myTime);
    }
  }, 1000);

};

module.exports = {
  timer
};
