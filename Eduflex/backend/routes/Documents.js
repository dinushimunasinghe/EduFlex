const express = require("express");
const mongoose = require("mongoose");
const multer = require('multer');
const Schema = mongoose.Schema;
const app = express();
app.use(express.json());
const Documentsroute = express.Router();

// Multer storage configuration for documents
const documentStorage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, 'Uploads/documents/') // Directory where document files will be stored
  },
  filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname) // Filename will be timestamp + original filename
  }
});

// Multer upload instance for documents
const documentUpload = multer({ storage: documentStorage });

// Mongoose schema for documents
const DocumentsSchema = new Schema({
  Document: String,
  DocumentType: String,
});

// Mongoose model for documents
const Documentsmodel = mongoose.model("Documents", DocumentsSchema);

// Route for inserting documents
Documentsroute.post("/insert", documentUpload.single('document'), async function (req, res) {
  try {
    const DocumentType = req.body.documentType;
    const Document = req.file.filename; // Use req.file.filename to get the filename of the uploaded document

    let selection;
    if (DocumentType === "Books") {
      selection = "Books";
    } else if (DocumentType === "Notes") {
      selection = "Notes";
    } else if (DocumentType === "PastPapers") {
      selection = "PastPapers";
    }

    console.log("selection:", selection);

    const doc = new Documentsmodel({ Document, DocumentType: selection });
    await doc.save();

    res.status(200).json("Insert Success");
  } catch (err) {
    console.log(err);
    res.status(400).send("Error in Saving");
  }
});

Documentsroute.route('/view').get(async function (req, res) {
  try {
    const employees = await Documentsmodel.find();
    res.json(employees);
  } catch (err) {
    console.log(err);
  }
});

//display books

Documentsroute.route('/view/books').get(async function (req, res) {
  try {
    const books = await Documentsmodel.find({ DocumentType: "Books" });
    res.json(books);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

//display Notes

Documentsroute.route('/view/notes').get(async function (req, res) {
  try {
    const notes = await Documentsmodel.find({ DocumentType: "Notes" });
    res.json(notes);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

//display PastPapers

Documentsroute.route('/view/pastpapers').get(async function (req, res) {
  try {
    const pastPapers = await Documentsmodel.find({ DocumentType: "PastPapers" });
    res.json(pastPapers);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});



Documentsroute.route('/delete/:id').delete(async function (req, res) {
  try {
    const documentId = req.params.id;
    const deletedDocument = await Documentsmodel.findByIdAndDelete(documentId);
    
    if (!deletedDocument) {
      return res.status(404).json({ message: "Document not found" });
    }

    res.status(200).json({ message: "Document deleted successfully", deletedDocument });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = Documentsroute;

//define user view