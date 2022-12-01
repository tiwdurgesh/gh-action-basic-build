//code comment for new push
//code comment for new push and adding thi somment again for testing purpose
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/hello", (req, res) => {
    res.status(200).send({hello: "world"})
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});