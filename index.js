const express = require("express");
const bodyParser = require("body-parser");

const ddata = require("./data/ddata.json");
const mdata = require("./data/mdata.json");
const useragent = require('express-useragent');

(path = require("path")), (app = express()), (port = 5500);
app.use(bodyParser.json()),
app.use(useragent.express());

  app.get("/api/restaurants/list/v5", (e, p) => {
    // console.log("e", e);
    p.json(ddata);
  }),
  app.post("/api/restaurants/list/update", (e, p) => {
    // console.log("e", e);
    p.json(mdata);
  });
app.get("/api/homepage/getCards", (e, p) => {
  // console.log("e", e);
  p.json(mdata);
});
app.get("/hello", (e, p) => {
  p.send("app is working on 5500");
}),
  app.listen(5500, () => {}),
  app.get("/api/js/app.9e9cdc4db42e535.min.js", (e, p) =>
    p.sendFile(path.join(__dirname, "/public/api/js/app.9e9cdc4db42e535.min.js"))
  ),

  app.get("/api/js/es5-app.e94d64c6e2c0b3e6.js", (e, p) =>
    p.sendFile(path.join(__dirname, "/public/api/js/es5-app.e94d64c6e2c0b3e6.js"))
  ),
  
  app.get("/api/css/index.css", (e, p) => p.sendFile(path.join(__dirname, "/public/api/css/index.css"))),
  app.get("*", (e, p) => {
    const result = e.useragent;
    // console.log(result, "device");
    p.sendFile(path.join(__dirname, result.isMobile?"/public/index-m.html":"/public/index.html"));
  });
