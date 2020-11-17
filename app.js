const express = require("express");
const path = require("path");
const logger = require("morgan");

const app = express();

app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "public")));

const listener = app.listen(8080, function () {
  console.log("Listening on port " + listener.address().port);
});
