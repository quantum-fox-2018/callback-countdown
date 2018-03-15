const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  var myVar = setInterval(function(){
    let minute=Math.floor(seconds/60)
    let fixSecond=Math.floor(seconds%60)
    if(minute<10){
      minute='0'+minute
    }
    if(fixSecond<10){
      fixSecond='0'+fixSecond
    }
    fixFormat=minute+':'+fixSecond
    displayCountdown(fixFormat);
    seconds--
    if(seconds===-1){
      clearInterval(myVar)
    }
  }, 1000);


};

module.exports = {
  timer
};
