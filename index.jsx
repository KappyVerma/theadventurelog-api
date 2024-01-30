require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 3030;
const userRoute = require("./routes/user");
const bucketListRoute = require("./routes/bucketList");
const destinationRoute = require("./routes/destinations");

app.use(cors());
app.use(express.json());
app.use("/user", userRoute);
app.use("/bucketList", bucketListRoute);
app.use("/destinations", destinationRoute);

app.use("/", (_req, res) => {
  res.send("Hitting the server");
});

app.listen(PORT, () => {
  console.log(`listening on PORT: ${PORT}`);
});
