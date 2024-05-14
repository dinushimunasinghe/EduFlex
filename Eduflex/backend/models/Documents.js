const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

 const documents = new Schema({
    DocumentType: {
        type: String
    },

    Document: {
        type: String
    },
    
 },{
 collection: 'documents'
 });

 module.exports = mongoose.model('Documents', documents);