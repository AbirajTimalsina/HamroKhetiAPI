const express = require('express');
const Category = require('../Models/category');
const router = express.Router();

router.post('/category',(req,res,next)=>{
    Category.create({
        category:req.body.category
    })
    .then(category=>{
        res.json({status:'Category Successfully Created'})
    })
    .catch(next)
});

router.get('/category',(req,res,next)=>{
    Category.find({category:req.params.categoryId })
    .then(category=>{
        res.json(quiz);
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