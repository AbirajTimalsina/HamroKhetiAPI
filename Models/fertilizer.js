const mongoose = require('mongoose');
const fertilizerSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true
    },

    image:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Fertilizer', fertilizerSchema);
