console.clear();
// Example project express server
const express = require("express");
const env = require("./src/configs/env.js");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(env.PORT, () => {
  console.log(`✅ http://14.172.105.203:${env.PORT}`);
});
