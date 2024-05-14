const mongoose = require('mongoose');

const connectDB = async () => {
    mongoose.connect(process.env.MONGO_URL)
        .then(() => console.log('MongoDB Connected...'))
        .catch((err) => console.log(err));
}

module.exports = connectDB;