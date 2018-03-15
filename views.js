/*jshint esversion:6*/

const clear = require('clear');
const figlet = require('figlet');
const chalk = require('chalk');

const displayCountdown = timeFormat => {
  clear();
  console.log(chalk.yellow(figlet.textSync('Countdown  App')));
  // Your code here...
  if (timeFormat == 0) {
    console.log(chalk.white(figlet.textSync('00 : 0' + timeFormat)));
  } else if (timeFormat < 10) {
    console.log(chalk.red(figlet.textSync('00 : 0' + timeFormat)));
  } else if (timeFormat < 60) {
    console.log(chalk.cyan(figlet.textSync('00 : ' + timeFormat)));
  } else if(timeFormat < 60){
    console.log(chalk.yellow(figlet.textSync('00 : ' + timeFormat)));
  }
};

module.exports = {
  displayCountdown
};
