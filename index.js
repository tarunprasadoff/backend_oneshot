var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");

var app = express();

mongoose.connect("mongodb+srv://tarun:tarun123@cluster0.jtyg8.mongodb.net/assignmentDatabase?retryWrites=true&w=majority");
mongoose.Promise = global.Promise;

app.use(cors());
// handle the post request content
app.use(bodyParser.json());

app.use(express.static("public"));

app.use("/api", require("./routes/api"));

// handle error
app.use(function (err, req, res, next) {
  res.status(422).send({ error: err.message });
});

// Listen to the port
app.listen(process.env.port || 4000, function () {
  console.log("now listening to requests");
});
