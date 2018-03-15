const { displayCountdown } = require("./views");

const timer = seconds => {
  displayCountdown(seconds,loopCountdown)
};

function loopCountdown(seconds){
  displayCountdown(seconds,loopCountdown);
};

module.exports = {
  timer
};
