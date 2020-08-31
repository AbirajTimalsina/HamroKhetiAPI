const express = require('express');
const Techinfo = require('../Models/techinfo');
const router = express.Router();

router.post('/techinfo',(req,res,next)=>{
    Techinfo.create({
        techinfo_title:req.body.techinfo_title,
        techinfo_image:req.body.techinfo_image
    })
    .then(techinfo=>{
        res.json({status:'Techinfo list Successfully Created',techinfo})
    })
    .catch(next)
});

router.get('/techinfo/:techinfoId',(req,res,next)=>{
    Techinfo.findById(req.params.techinfoId)
    .then(techinfo=>{
        res.json(techinfo);
    })
    .catch(next);
});

router.put('/techinfo/:techinfoId', (req,res,next)=>{
    // res.json("ABcd");
    // return;
    techinfoId.findByIdAndUpdate(req.params.techinfoId, {$set:req.body}, {new:true})
    .then(techinfo=>{
        res.json({status:'Sucessfullly updated',techinfo});
    })
    .catch(next);
});

router.delete('/:techinfoId',(req,res,next)=>{
    Techinfo.findByIdAndDelete(req.params.techinfoId)
    .then(techinfo=>{
        res.json({status:'Techinfo Successfully Deleted',techinfo});
    });
})

router.get('/all', (req, res, next) => {
	Techinfo.find()
		.then((techinfo) => {
			res.json(techinfo);
		})
		.catch(next);
});

module.exports = router;