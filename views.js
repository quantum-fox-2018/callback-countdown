const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  let menit = Math.floor(seconds/60)
  let detik = seconds%60
  let formatMenit
  let formatDetik
  if(menit>=10){
    formatMenit = `${menit}`
  } else {
    formatMenit = `0${menit}`
  }
  if(detik>=10){
    formatDetik = `${detik}`
  } else {
    formatDetik = `0${detik}`
  }
  let dataType = typeof seconds
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  if(dataType=='number'){
    console.log(chalk.cyan(figlet.textSync(`${formatMenit}:${formatDetik}`)));
  } else {
    console.log(chalk.cyan(figlet.textSync(seconds)));
  }
};

module.exports = { displayCountdown };
