const express = require("express");
const router = express.Router()
const dir = "/home/albert/JavaScriptProjects/favorite-music-site" // - исправить костыль

router.get('/', function (req, res) {
  res.sendfile(dir + "/public/html/index.html");
  });

module.exports = router;