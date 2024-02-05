const express = require("express");
var bodyParser = require("body-parser");
const data = require("./data/data.json"),
  path = require("path"),
  app = express(),
  port = 5500;
app.use(bodyParser.json()),
  app.get("/api/restaurants/list/v5", (e, p) => {
    p.json(data);
  }),
  app.get("/hello", (e, p) => {
    p.send("app is working on 5500");
  }),
  app.listen(5500, () => {}),
  app.get("/api/js/app.9e9cdc4db42e535.min.js", (e, p) =>
    p.sendFile(path.join(__dirname, "/public/api/js/app.9e9cdc4db42e535.min.js"))
  ),
  app.get("/api/css/index.css", (e, p) => p.sendFile(path.join(__dirname, "/public/api/css/index.css"))),
  app.get("*", (e, p) => p.sendFile(path.join(__dirname, "/public/index.html")));
