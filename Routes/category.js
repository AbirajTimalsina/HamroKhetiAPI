const express = require('express');
const Category = require('../Models/category');
const router = express.Router();

router.post('/category',(req,res,next)=>{
    Category.create({
        category:req.body.category,
        category_image:req.body.category_image
    })
    .then(category=>{
        res.json({status:'Category Successfully Created',category})
    })
    .catch(next)
});
router.put('/category/:categoryId', (req,res,next)=>{
    // res.json("ABcd");
    // return;
    categoryId.findOneAndUpdate({
        category: req.body.category,
        category_image: req.body.category_image })
    .then(productList=>{
        res.json({status:'Sucessfullly updated',category});
    })
    .catch(next);
});
router.get('/category',(req,res,next)=>{
    Category.find({category:req.params.categoryId })
    .then(category=>{
        res.json(category);
    })
    .catch(next);
});

router.delete('/:categoryId',(req,res,next)=>{
    Category.findByIdAndDelete(req.params.categoryId)
    .then(category=>{
        res.json({status:'Category Successfully Deleted'});
    });
})

router.get('/all', (req, res, next) => {
	Category.find()
		.then((category) => {
			res.json(category);
		})
		.catch(next);
});

module.exports = router;