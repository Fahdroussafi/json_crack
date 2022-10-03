const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(express.json());
app.use(cors());

app.use(bodyParser.json());

const db = require("./models");

const usersRouter = require("./routes/users");
app.use("/auth", usersRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server is running on port 3001.");
  });
});
