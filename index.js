const express = require("express");
const app = express();

const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 3030;

app.use(cors());
app.use(express.static("uploads"));
app.use(middleware);
app.use(express.json());

function middleware(req, _res, next) {
  console.log(new Date().toLocaleDateString());
  console.log(req.url);
  next();
}

const userRoute = require("./routes/user");
const bucketListRoute = require("./routes/bucketList");
const venueRoute = require("./routes/venue");
const loginRoute = require("./routes/login");
const todo = require("./routes/todo");

app.use("/user", userRoute);
app.use("/bucketlist", bucketListRoute);
app.use("/venue", venueRoute);
app.use("/login", loginRoute);
app.use("/todo", todo);

app.use("/", (_req, res) => {
  res.send("Hitting the server");
});

app.listen(PORT, () => {
  console.log(`listening on PORT: ${PORT}`);
});
