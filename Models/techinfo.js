const mongoose = require('mongoose');
const techinfoSchema = new mongoose.Schema({

techinfo_title:{
    required:true,
    type: String
},

techinfo_image:{
    type: String,
    required:true
}

});

module.exports = mongoose.model('Techinfo',techinfoSchema);