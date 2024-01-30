require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 3030;

app.use(cors());

app.use(express.static("public/images"));

app.use(middleware);

app.use(express.json());

function middleware(req, _res, next) {
  console.log(new Date().toLocaleDateString());
  console.log(req.url);
  next();
}

const userRoute = require("./routes/user");
const bucketListRoute = require("./routes/bucketList");
const destinationRoute = require("./routes/destinations");

app.use("/user", userRoute);
app.use("/bucketlist", bucketListRoute);
app.use("/destinations", destinationRoute);

app.use("/", (_req, res) => {
  res.send("Hitting the server");
});

app.listen(PORT, () => {
  console.log(`listening on PORT: ${PORT}`);
});
