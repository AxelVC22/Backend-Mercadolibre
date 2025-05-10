const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

app.get("/", (req, res) => {
  res.send('Hello World!');
});

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is running on port ${process.env.SERVER_PORT}`);
});