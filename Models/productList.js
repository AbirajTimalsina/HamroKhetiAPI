const mongoose = require('mongoose');
const productListSchema = new mongoose.Schema({

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'category',
        required: true
      },

    product_name:{
        type:String,
        required:true
    },

    product_price:{
        type:String,
        required:true
    },

    product_image:{
        type:String
    }
})

module.exports = mongoose.model('ProductList',productListSchema);