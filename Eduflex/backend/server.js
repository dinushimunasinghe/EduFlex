const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path"); // Import path module

const app = express();

require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());
app.use('/uploads/documents', express.static(path.join(__dirname, 'Uploads/documents')));


const URL = process.env.MONGODB_URL;

const PORT = process.env.PORT || 5000;

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("MongoDB connection successful !!!");
}).catch((err) => {
  console.log("MongoDB connection error: ", err);
});

app.listen(PORT, () =>{
  console.log(`Server is up and running on port number: ${PORT}`);
});

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE,PATCH');
  res.setHeader('Access-Control-Allow-Headers', 'authorization, Content-Type');

  next();
});
// routes
app.use("/auth", require("./routes/Auth"));
app.use("/documents", require("./routes/Documents"));
app.use("/Vilasroute", require("./routes/Vilas"));
app.use("/Coursesroute", require("./routes/Courses"));

module.exports.app = app;