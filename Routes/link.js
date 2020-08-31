const express = require('express');
const Link = require('../Models/link');
const router = express.Router();

router.post('/link',(req,res,next)=>{
    Link.create({
        title:req.body.title,
        body:req.body.body,
        link:req.body.link
    })
    .then(link=>{
        res.json({status:'News Successfully Created',link})
    })
    .catch((err) => next(err));
});

router.get('/link/:linkId',(req,res,next)=>{
    Link.findById(req.params.linkId)
        .then(link=>{
            res.json(link);
        })
        .catch((err) =>next(err));
    });

router.get('/all',(req,res, next) => {
	Link.find()
		.then((link) => {
			res.json(link);
		})
		.catch((err) => next(err));
});

router.put('/link/:linkId', (req,res,next)=>{
    Link.findByIdAndUpdate(req.params.linkId, {$set:req.body}, {new:true} )
        .then(link=>{
        res.json({status:'Successfully Updated',link});
        })
        .catch(next);
});

router.delete('/:linkId',(req,res,next)=>{
    Link.findByIdAndDelete(req.params.fertilizerId)
    .then(Link=>{
        res.json({status:'News Successfully Deleted',Link});
    })
    .catch(next)
});


module.exports = router;