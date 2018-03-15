const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...

    var myVar = setInterval(function(){

    seconds--

    displayCountdown(seconds)

    if (seconds < 1) {

      clearInterval(myVar)

    }

   }, 1000);

  };


module.exports = {
  timer
};
