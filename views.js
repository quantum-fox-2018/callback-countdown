/*jshint esversion:6*/

const clear = require('clear');
const figlet = require('figlet');
const chalk = require('chalk');

const displayCountdown = seconds => {
  clear();
  console.log(chalk.green(figlet.textSync('Countdown  App')));
  // Your code here...

  let min = Math.floor(seconds / 60);
  let sec = Math.floor(seconds % 60);

  if (seconds == 0) {
    console.log(chalk.white(figlet.textSync(`0${min}:0${sec}`)));
  } else if (seconds < 10) {
    console.log(chalk.red(figlet.textSync(`0${min}:0${sec}`)));
  } else if (seconds < 60) {
      console.log(chalk.yellow(figlet.textSync(`0${min}:${sec}`)));
  } else if (seconds >= 60) {
    if (sec < 10) {
      console.log(chalk.cyan(figlet.textSync(`0${min}:0${sec}`)));
    } else if (min < 10) {
      console.log(chalk.cyan(figlet.textSync(`0${min}:${sec}`)));
    }
  }
};

module.exports = {
  displayCountdown
};
