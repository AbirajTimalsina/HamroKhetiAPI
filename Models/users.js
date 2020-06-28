const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Fullname:{
        type: String,
        required: true,
        
    },

    Pasword:{
        type: String,
        required:true,
        maxlength:8
    },

    image:{
        type: String,
    },
});

module.exports = mongoose.model('User',userSchema);
