const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear ();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  // Your code here...
  
  minutes = Math.floor(seconds/60);
  seconds = Math.floor(seconds%60);
  if(minutes>=10 && seconds>=10){
    figlet(minutes+':'+seconds,function(err, data){
      if(!err){
        console.log(data);
      }
    })
  }else if(minutes >= 10 && seconds<10){
    figlet(minutes+':0'+seconds,function(err, data){
      if(!err){
        console.log(data);
      }
    })
  }else if(minutes<10 && seconds>=10){
    figlet('0'+minutes+':'+seconds,function(err, data){
      if(!err){
        console.log(data);
      }
    })
  }else{
    figlet('0'+minutes+':0'+seconds,function(err, data){
      if(!err){
        console.log(data);
      }
    })

  }
};

module.exports = { displayCountdown };
