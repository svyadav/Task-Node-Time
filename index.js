var express = require("express");
var app = express();
var fs = require("fs");
const PORT = process.env.PORT || 8000;

let timeStamp = new Date();
let date = timeStamp.toDateString();
let hours = timeStamp.getHours();
let minutes = timeStamp.getMinutes();
let seconds = timeStamp.getSeconds();
let currDateTime = `${date} - ${hours};${minutes};${seconds}`;
fs.appendFile(`./timeStamp/${currDateTime}`, `${timeStamp}`, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Check the time");
  }
});

fs.readdir("./timeStamp", (err, files) => {
  if (err) {
    console.log(err);
  } else {
    app.get("/file", (req, res) => {
      res.send(files);
    });
  }
});
app.listen(PORT, () => console.log("Server is listening port:" + 8000));
