const mongoose = require('mongoose');
const bugsdetailSchema = new mongoose.Schema({

    bugsinfo: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'bugsinfo',
        required: true
      },

    bugsDetail_body:{
        type:String,
        required:true
    },

    bugsDetail_image:{
          type:String,
          required:true
      }
})

module.exports = mongoose.model('Bugsdetail',bugsdetailSchema);

