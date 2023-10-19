const express = require("express");
const router = express.Router()
const dir = "/home/albert/JavaScriptProjects/favorite-music-site" // - исправить костыль
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function(req, file, callback){
    callback(null, dir + "/uploads");
  },

  filename: function(req, file, callback){
    callback(null, file.originalname);
  }
})

const uploads = multer({storage: storage});

router.get('/', function (req, res) {
  res.sendFile(dir + "/public/html/index.html");
  });

router.post('/uploads', uploads.array("files"), function (req, res) {
  res.json({starus: "files recieved"});
})

module.exports = router;