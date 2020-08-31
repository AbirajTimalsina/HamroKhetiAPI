const express = require('express');
const multer = require('multer');
const path = require("path");
const uploadRouter = express.Router();

const storage = multer.diskStorage({
    destination: "./public/uploads",
    filename: (req, file, callback) => {
        let ext = path.extname(file.originalname);
        callback(null, `${file.fieldname}-${Date.now()}${ext}`);
    }
});

const imageFileFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif|JPEG|JPG|PNG|jfif|webp)$/)) {
        return cb(new Error("You can upload only image files!"), false);
    }
    cb(null, true);
};

const upload = multer({
    storage: storage,
    fileFilter: imageFileFilter
})

uploadRouter.route('/')
    .post(upload.single('image'), (req, res) => {
        res.json(req.file);
    });

module.exports = uploadRouter;