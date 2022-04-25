const mongoose = require("mongoose");
const connect = require("./config/db");
const app = require("./index");
require("dotenv").config();
const port = process.env.PORT || 5000;

app.listen(port, async (res, req) => {
  await connect();
  console.log(`Db Connected Successfully on port ${port}`);
});
