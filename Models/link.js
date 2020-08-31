const mongoose = require('mongoose');
const linkSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true
    },

    body:{
        type:String,
        required:true
    },

    link:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Link', linkSchema);
