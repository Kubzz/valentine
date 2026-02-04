const express = require("express");
const cors = require("cors");
const parser = require("body-parser");
const {text} = require("express");

const port = 5050;
const app = express()

app.use(cors())

const json = parser.json();

app.post("/", json, (req, res) => {
    const body = req.body;

    console.log(body.log)

    res.statusCode = 200;
    res.send();
})

app.listen(port, () => {
    console.log('server is running on http://localhost:' + port);
});