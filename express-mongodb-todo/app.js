const express = require('express');
const app = express();

app.use(express.json()); // POST body(JSON) 파싱
const chatRouter = require("./routes/ChatRouter");

app.use("/", chatRouter);
// const countRouter = require('./routes/CountRouter');

// app.use('/', countRouter);

module.exports = app;