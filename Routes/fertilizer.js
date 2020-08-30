const express = require('express');
const Fertilizer = require('../Models/fertilizer');
const router = express.Router();

router.post('/fertilizer',(req,res,next)=>{
    Fertilizer.create({
        title:req.body.title,
        image:req.body.image
    })
    .then(fertilizer=>{
        res.json({status:'Fertilizer Successfully Created',fertilizer})
    })
    .catch(next)
});

router.get('/fertilizer/:fertilizerId',(req,res,next)=>{
    Fertilizer.find({fertilizer:req.params.fertilizerId })
    .then(fertilizer=>{
        res.json(fertilizer);
    })
    .catch(next);
});

router.put('/fertilizer/:fertilizerId', (req,res,next)=>{
    // res.json("ABcd");
    // return;
    Fertilizer.findOneAndUpdate({
        title:req.body.title,
        image:req.body.image })
    .then(fertilizer=>{
        res.json({status:'Sucessfullly updated',fertilizer});
    })
    .catch(next);
});


router.delete('/:fertilizerId',(req,res,next)=>{
    Fertilizer.findByIdAndDelete(req.params.fertilizerId)
    .then(fertilizer=>{
        res.json({status:'Fertilizer Category Successfully Deleted',fertilizer});
    });
})

router.get('/all', (req, res, next) => {
	Fertilizer.find()
		.then((fertilizer) => {
			res.json(fertilizer);
		})
		.catch(next);
});

module.exports = router;