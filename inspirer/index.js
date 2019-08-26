const express = require("express");
const inspirers = require("./inspirers.json");
const moment = require("moment");
const cors = require("cors");

const app = express();
const PORT = 3005;

app.use(cors());

app.get("/", (req, res) => {
  const date = moment().format("DD.MM.YYYY");
  console.log(date);
  res.send({ ...inspirers[date], date });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})