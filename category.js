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
    Category.findByIdAndUpdate(req.params.categoryId, {$set:req.body}, {new:true} )
        .then(category=>{
        res.json(category);
        })
        .catch(next);
});

router.get('/category/:categoryId',(req,res,next)=>{
    Category.findById(req.params.categoryId)
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