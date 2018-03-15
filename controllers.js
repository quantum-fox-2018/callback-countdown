const { displayCountdown } = require("./views");

const timer = seconds => {
  // Your code here...

  
  let testvar = setInterval(function(){
    
    let menit = Math.floor(seconds/60);
    let detik = seconds - (menit*60);

    if (menit < 10 && detik < 10) {
      // console.log(`0${menit}:0${detik}`);
      displayCountdown(`0${menit}:0${detik}`);
    } else if (menit < 10 && detik >= 10) {
      // console.log(`0${menit}:${detik}`);
      displayCountdown(`0${menit}:${detik}`);
    } else if (menit >= 10 && detik < 10) {
      // console.log(`${menit}:0${detik}`);
      displayCountdown(`${menit}:0${detik}`);
    } else if (menit >= 10 && detik >= 10) {
      // console.log(`${menit}:${detik}`);
      displayCountdown(`${menit}:${detik}`);
    }

    // console.log(`00:0${seconds}`);
    seconds--;
    if (seconds < 0) {
      clearInterval(testvar);
    }

  }, 1000);


  
};

module.exports = {
  timer
};
