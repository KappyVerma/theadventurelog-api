const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 3030;

app.use(cors());

app.get("/", (_req, res) => {
  res.send("Hitting the server");
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
