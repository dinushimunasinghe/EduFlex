const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const app = express();
app.use(express.json());
const Coursesroute = express.Router();

var Coursesmodel = mongoose.model(
  "Courses",
  new Schema({ UploadVideo: String, UploadThubnail: String, VideoTittle: String, CoursesType: String, })
); //insert
const doc = new Coursesmodel();

Coursesroute.route("/insert").post(async function (req, res) {
  try {
    console.log(req.body);
    doc.UploadVideo = req.body.UploadVideo;
    doc.UploadThubnail = req.body.UploadThubnail;
    doc.VideoTittle = req.body.VideoTittle;
    doc.CoursesType = req.body.CoursesType;

    var selection = "";

    if (req.body.CoursesType == "1") {
      selection = "1";
    } else if (req.body.CoursesType == "2") {
      selection = "2";
    } else if (req.body.CoursesType == "3") {
      selection = "3";
    } else if (req.body.CoursesType == "4") {
        selection = "4";
    } else if (req.body.CoursesType == "5") {
        selection = "5";
    } else if (req.body.CoursesType == "6") {
      selection = "6";
    } else if (req.body.CoursesType == "7") {
      selection = "7";
    } else if (req.body.CoursesType == "8") {
      selection = "8";
    } else if (req.body.CoursesType == "9") {
      selection = "9";
    }

    console.log("selection:", selection);

    doc.CoursesType = selection;

    await doc.save();

    doc.save().then((doc) => {
      doc === doc; // true
    });

    res.status(200).json("Insert Success");
  } catch (err) {
    console.log(err);
    res.status(400).send("Error in Saving");
  }
});

Coursesroute.route('/view').get(async function (req, res) {
  try {
    const employees = await Coursesmodel.find();
    res.json(employees);
  } catch (err) {
    console.log(err);
  }
});

module.exports = Coursesroute;