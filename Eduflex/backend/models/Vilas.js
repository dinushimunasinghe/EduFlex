const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

 const Vilas = new Schema({
    PreacherName: {
        type: String
    },

    PreacherEmail: {
        type: String
    },
   
    VialsSubject: {
        type: String
    },

    Date: {
        type: String
    },

    Link: {
        type: String
    },
    
 },{
 collection: 'Vilas'
 });

 module.exports = mongoose.model('Vilas', Vilas);