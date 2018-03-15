const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = timeFormat => {
  clear();

  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  // Your code here...
  console.log(chalk.red(figlet.textSync(timeFormat)));

};

module.exports = { displayCountdown };
