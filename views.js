const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = (seconds,callback) => {
  clear();
  //saya bikin prosses convert disini biar enggak otak atik parameter
  let min = 0;
  let secs = 0;
  if(seconds >= 60){
    min = Math.floor(seconds/60);
    sec = seconds % 60;
  }else{
    sec = seconds;
  }

  if(min < 10) min = '0'+min;
  if(sec < 10) sec = '0'+sec;

  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  console.log(chalk.green(figlet.textSync(`${min} : ${sec} `)));
  sleep(1000);

  if(seconds-1 >= 0){
    callback(seconds-1);
  }

};

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

module.exports = { displayCountdown };
