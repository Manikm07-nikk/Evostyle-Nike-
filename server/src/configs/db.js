const mongoose = require('mongoose');
require('dotenv').config();

module.exports = () => {
    return mongoose.connect('mongodb+srv://Manik1002:yYffK8UBnwMsWySL@cluster0.z0nmcwm.mongodb.net/');
};

