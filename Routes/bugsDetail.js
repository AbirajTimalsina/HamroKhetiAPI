const express = require('express');
const Bugsdetail= require('../Models/bugsDetail');
const router = express.Router();

router.post('/bugsDetail',(req,res,next)=>{
    Bugsdetail.create({
        bugsinfo: req.body.bugsinfo,
        bugsDetail_body: req.body.bugsDetail_body,
        bugsDetail_image: req.body.bugsDetail_image,
    })
    .then(bugsDetail=>{
        res.json({ status:'Bugs Detail Successfully Inserted', bugsDetail: req.body });
    })
    .catch(next);
});

router.get('/bugsDetail/:bugsinfoId',(req,res,next)=>{
    Bugsdetail.find({bugsinfo:req.params.bugsinfoId})
        .then(bugsDetail=>{
                    res.json(bugsDetail);
        })
        .catch((err) =>next(err));
    });

router.get('/all', (req, res, next) => {
	Bugsdetail.find()
		.then((bugsDetail) => {
			res.json(bugsDetail);
		})
		.catch(next);
});


// router.put('/bugsDetail/:bugsDetailId', (req,res,next)=>{
//     // res.json("ABcd");
//     // return;
//     Bugsdetail.findByIdAndUpdate(req.params.bugsDetailId, {$set:req.body}, {new:true} )
//         .then(bugsDetail=>{
//         res.json(bugsDetail);
//         })
//         .catch(next);
// });

router.put('/bugsDetail/:bugsinfoId', (req,res,next)=>{
    // res.json("ABcd");
    // return;
    Bugsdetail.findOneAndUpdate({Bugsdetail:req.params.bugsDetailId,
        bugsDetail_body: req.body.bugsDetail_body,
        bugsDetail_image: req.body.bugsDetail_image, })
    .then(bugsDetail=>{
        res.json({status:'Sucessfullly updated',bugsDetail: req.body});
    })
    .catch(next);
});

router.delete('/:bugsDetailId',(req,res,next)=>{
    Bugsdetail.findByIdAndDelete(req.params.bugsDetailId)
    .then(bugsDetail=>{
        res.json({status:'Bugsdetail Successfully Deleted',bugsDetail});
    });
})

module.exports = router;