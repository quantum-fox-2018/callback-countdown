const { timer } = require("./controllers");

const main = () => {
  const seconds = parseInt(process.argv[2]) || 15;
  timer(seconds);
};

main();
