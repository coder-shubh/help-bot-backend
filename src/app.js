const express = require("express");
const cors = require("cors");

const botRoutes = require("./routes/bot.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/bot", botRoutes);

module.exports = app;
