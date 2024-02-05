const express = require("express");
var bodyParser = require("body-parser");
const data = require("./data/data.json");
const path = require("path");

const app = express();
const port = 5500;

app.use(bodyParser.json());

app.get("/api/restaurants/list/v5", (_, res) => {
  res.json(data);
});

app.get("/hello", (_, res) => {
  res.send("app is working on " + port);
});
app.listen(port, () => {
  console.log(` app listening on port ${port}`);
});

app.get("/api/js/app.9e9cdc4db42e535.min.js", (_, res) =>
  res.sendFile(path.join(__dirname, "/public/api/js/app.9e9cdc4db42e535.min.js"))
);
app.get("*", (_, res) => res.sendFile(path.join(__dirname, "/public/index.html")));
