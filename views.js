const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = timeFormat => {
  clear();

  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  // Your code here...
  let minutesFormat = "";
  let secondsFormat = "";

  if(timeFormat[0]<10){
    minutesFormat = "0" + timeFormat[0];
  }
  else{
    minutesFormat = timeFormat[0].toString();
  }
  if(timeFormat[1]<10){
    secondsFormat = "0" + timeFormat[1];
  }
  else{
    secondsFormat = timeFormat[1].toString();
  }
  let countdownTime = `${minutesFormat} : ${secondsFormat}`
  console.log(chalk.red(figlet.textSync(countdownTime)));

};

module.exports = { displayCountdown };
