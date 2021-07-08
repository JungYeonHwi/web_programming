const date = new Date();

function printMsg(tag, msg) {
  console.log(`${tag}:::${msg}`);
}

function printDate() {
  print(date);
}

exports.date = date;
exports.printMessage = printMsg;
exports.printDate = printDate;