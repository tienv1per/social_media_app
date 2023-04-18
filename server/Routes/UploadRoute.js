const express = require('express');
const multer = require('multer');

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, res, callback) => {
        callback(null, "public/images"); // specify the directory to save the file
    },
    filename: (req, res, callback) => {
        callback(null, req.body.name); // generate a unique filename
    }
})

const upload = multer({storage: storage});

router.post("/", upload.single("file"), (req, res) => {
    try {
        return res.status(200).json("Filed Uploaded Successfully");
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;