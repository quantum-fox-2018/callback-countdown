const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...
  setInterval(() =>{
    
    let min = Math.floor(seconds/60)
    let sec = seconds - min * 60

    if(min < 10){
      min = '0' + min
    }
    if(sec < 10){
      sec = '0' + sec
    }
    if(seconds < 0){
      process.exit()
    }

    displayCountdown(min, sec)
    seconds--
    // console.log(min+':'+sec)
  } ,1000)
  



  
};

module.exports = {
  timer
};
