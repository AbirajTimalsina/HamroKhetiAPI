const express = require('express');
const TechDetail = require('../Models/techDetail');
const router = express.Router();

router.post('/techDetail',(req,res,next)=>{
    TechDetail.create({
        techinfo: req.body.techinfo,
        techDetail_body: req.body.techDetail_body,
        techDetail_image: req.body.techDetail_image,
    })
    .then(techDetail=>{
        res.json({ status:'Technology Details Successfully Inserted', techDetail: req.body });
    })
    .catch(next);
});

router.get('/techDetail/:techinfoId',(req,res,next)=>{
    TechDetail.find({techDetail:req.params.techDetailId })
    .then(techDetail=>{
        res.json(techDetail);
    })
    .catch(next);
});

router.get('/all', (req, res, next) => {
	TechDetail.find()
		.then((techDetail) => {
			res.json(techDetail);
		})
		.catch(next);
});

router.put('/techDetail/:techinfoId', (req,res,next)=>{
    // res.json("ABcd");
    // return;
    TechDetail.findOneAndUpdate({
        techDetail_body: req.body.techDetail_body,
        techDetail_image: req.body.techDetail_image })
    .then(techDetail=>{
        res.json({status:'Sucessfullly updated',techDetail});
    })
    .catch(next);
});

router.delete('/:techDetailId',(req,res,next)=>{
    TechDetail.findByIdAndDelete(req.params.techDetailId)
    .then(techDetail=>{
        res.json({status:'Technology Detail Successfully Deleted',techDetail});
    });
})

module.exports = router;