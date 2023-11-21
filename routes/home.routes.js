const express = require("express");
const router = express.Router();
const dir = "/home/albert/JavaScriptProjects/favorite-music-site"; // - исправить на __dirname
const multer = require("multer");
const AudioFile = require("../models/audio_file.model");

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
  const song = await AudioFile.findAll({
    attributes: ["name_of_song"],
  });
  let data =  {song: song};
  res.render("index",data );
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
