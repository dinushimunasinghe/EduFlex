const mongoose = require('mongoose');
 const Schema = mongoose.Schema;

 const Courses = new Schema({
    UploadVideo: {
        type: String
    },
   
    UploadThubnail: {
        type: String
    },

    VideoTittle: {
        type: String
    },
   
    CoursesType: {
        type: String
    },
    
 },{
 collection: 'Courses'
 });

 module.exports = mongoose.model('Courses', Courses);