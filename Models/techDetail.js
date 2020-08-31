const mongoose = require('mongoose');
const techDetailSchema = new mongoose.Schema({

    techinfo:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'techinfo',
        require: true,
    },

    techDetail_body:{
        type:String,
        require:true
    },

    techDetail_image:{
        type:String,
        require:true,
    }
});

module.exports= mongoose.model('TechDetail',techDetailSchema);