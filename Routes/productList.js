const express = require('express');
const ProductList = require('../Models/productList');
const router = express.Router();

router.post('/productList',(req,res,next)=>{
    ProductList.create({
        category: req.body.category,
        product_name: req.body.product_name,
        product_Price: req.body.product_Price,
        product_image: req.body.product_image
    })
    .then(productList=>{
        res.json({ status:'ProductList Successfully Inserted', productList: req.body });
    })
    .catch(next);
});

router.get('/productList/:categoryId', (req,res,next)=>{
    //console.log(req.params.categoryId);
    ProductList.find({ category: req.params.categoryId })
    .then(productList=>{
      //  console.log(productList);
        res.json(productList);
    })
    .catch(next);
});

router.get('/all', (req,res,next)=>{
    ProductList.find()
    .then(productList=>{
        res.json(productList);
    })
    .catch(next);
});

router.put('/productList/:categoryId', (req,res,next)=>{
    // res.json("ABcd");
    // return;
    ProductList.findOneAndUpdate({
        product_name: req.body.product_name,
        product_MaxPrice: req.body.product_MaxPrice,
        product_MinPrice:req.body.product_MinPrice,
        product_image: req.body.product_image })
    .then(productList=>{
        res.json({status:'Sucessfullly updated',productList: req.body});
    })
    .catch(next);
});

router.delete('/:productListId', (req,res,next)=>{
    ProductList.findByIdAndDelete(req.params.productListId)
    .then(productList=>{
        res.json({status: 'ProductList Deleted Successfully',productList: req.body});
    });
});

module.exports = router;

