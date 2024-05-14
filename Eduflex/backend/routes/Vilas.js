const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
// const { Schema } = require('mongoose');
const Schema = mongoose.Schema;



const app = express();
app.use(express.json());
const Vilasroute = express.Router();

// var Vilasmodel = mongoose.model(
//     "Vilas",
//     new Schema({ PreacherName: String, PreacherEmail: String, VialsSubject: String, Date: String, Link: String, })
//   ); //insert
//   const doc = new Vilasmodel();

  const VilasSchema = new Schema({
    PreacherName: String, 
    PreacherEmail: String, 
    VialsSubject: String, 
    Date: String, 
    Link: String,
  });

  const Vilasmodel = mongoose.model("Vilas", VilasSchema);

  Vilasroute.route('/Vilas').post(async function (req, res) {
    try {
      const PreacherName = req.body.PreacherName;
      const PreacherEmail = req.body.PreacherEmail;
      const VialsSubject = req.body.VialsSubject;
      const Date = req.body.Date;
      const Link = req.body.Link;
  
      const doc = new Vilasmodel({
        PreacherName,
        PreacherEmail,
        VialsSubject,
        Date,
        Link,
      });
      console.log(doc);
  
      await doc.save();
  
      res.status(200).json("Insert Success");
  
    } catch (err) {
      console.log(err);
      res.status(400).send("Error in Saving");
    }
  });

  Vilasroute.route('/view').get(async function (req, res) {
    try {
      const employees = await Vilasmodel.find();
      res.json(employees);
    } catch (err) {
      console.log(err);
    }
  });

  module.exports = Vilasroute;