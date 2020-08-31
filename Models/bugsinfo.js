const mongoose = require('mongoose');
const bugsinfoSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
      },

      bugsinfo_image:{
        type: String,
        required:true
      }
});

module.exports = mongoose.model('Bugsinfo',bugsinfoSchema);