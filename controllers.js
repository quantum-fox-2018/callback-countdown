const { displayCountdown } = require("./views");

const timer = seconds => {
  let countdown = setInterval(() => {
    displayCountdown(konversiMenit(seconds));
    seconds--;
    if(seconds < 0) {
      clearInterval(countdown);
    }
  }, 1000)
};

const konversiMenit = seconds => {
  var jam = ("0" + Math.floor(seconds/60)).slice(-2);
  var menit = ("0" + seconds%60).slice(-2);
  return jam + ":" + menit;
};

module.exports = {
  timer
};
