const express = require('express');
const Bugsinfo = require('../Models/bugsinfo');
const router = express.Router();

router.post('/bugsinfo',(req,res,next)=>{
    Bugsinfo.create({
        title:req.body.title,
        bugsinfo_image:req.body.bugsinfo_image
    })
    .then(bugsinfo=>{
        res.json({status:'Bugsinfo list Successfully Created',bugsinfo})
    })
    .catch(next)
});

router.get('/bugsinfo/:bugsinfoId',(req,res,next)=>{
    Bugsinfo.find({bugsinfo:req.params.bugsinfoId })
    .then(bugsinfo=>{
        res.json(bugsinfo);
    })
    .catch(next);
});

router.put('/bugsinfo/:bugsinfoId', (req,res,next)=>{
    // res.json("ABcd");
    // return;
    Bugsinfo.findOneAndUpdate(req.params.bugsinfoId,{$set:req.body}, {new:true})
        .then(bugsinfo=>{
        res.json({status:'Sucessfullly updated',bugsinfo: req.body});
        })
        .catch(next);
});

router.delete('/:bugsinfoId',(req,res,next)=>{
    Bugsinfo.findByIdAndDelete(req.params.bugsinfoId)
    .then(bugsinfo=>{
        res.json({status:'Category Successfully Deleted',bugsinfo});
    });
})

router.get('/all', (req, res, next) => {
	Bugsinfo.find()
		.then((bugsinfo) => {
			res.json(bugsinfo);
		})
		.catch(next);
});

module.exports = router;