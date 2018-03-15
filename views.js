const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.red(figlet.textSync("Countdown App")));
  // Your code here...
  let minutes = Math.floor(seconds/60)+"";
  let sec = seconds % 60+"";

  if (minutes.length < 2) {
    minutes = `0${minutes}`;
  }

  if (sec.length < 2) {
    sec = `0${sec}`;
  }

  let countdownTimer = `${minutes} : ${sec}`;

  console.log(chalk.yellow(figlet.textSync(countdownTimer)));  



};

module.exports = { displayCountdown };
