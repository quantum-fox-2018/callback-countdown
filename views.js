const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  // Your code here...
  let menit = Math.floor(seconds/60)
  let detik = seconds%60

  if(menit >= 10 && detik >= 10){
    figlet(`${menit} : ${detik}`,function(err, data){
      if(!err){
        console.log(data);
      }
    })
  }else if(menit >= 10 && detik < 10){
    figlet(`${menit} : 0${detik}`,function(err, data){
      if(!err){
        console.log(data);
      }
    })
  }else if(menit < 10 && detik >= 10){
    figlet(`0${menit} : ${detik}`,function(err, data){
      if(!err){
        console.log(data);
      }
    })
  }else if(menit < 10 && detik < 10){
    figlet(`0${menit} : 0${detik}`,function(err, data){
      if(!err){
        console.log(data);
      }
    })
  }

};

module.exports = { displayCountdown };
