const express = require("express");
const router = express.Router();
const dir = "/home/albert/JavaScriptProjects/favorite-music-site"; // - исправить костыль
const multer = require("multer");
const AudioFile = require("../models/audio_file.model");
const sequelize = require("sequelize");

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, dir + "/uploads");
  },

  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});

const uploads = multer({ storage: storage });

router.get("/", async function (req, res) {
  res.sendFile(dir + "/public/html/index.html");
});

router.post("/uploads", uploads.array("files"), async function (req, res) {
  console.log(req.files[0]);
  res.json({ starus: "files recieved" });

  await AudioFile.create({
    name_of_song: req.files[0].originalname,
    link: req.files[0].path,
    format: req.files[0].mimetype,
  });
});

module.exports = router;
