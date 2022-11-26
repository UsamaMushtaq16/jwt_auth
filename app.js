require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const http = require("http");
const auth = require("./middleware/auth");

const authRouter = require("./router/authRouter");

const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

const app = express();
app.use(express.json());
app.use("/auth", authRouter);

app.post("/welcome", auth, (req, res) => {
  res.status(200).send("Welcome 🙌 ");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
