const express = require('express');
const PostsController = require("../Controllers/PostsController");

const router = express.Router();

router.get("/", (req, res, next) => {
    res.send("Hello DCMM");
})

router.post("/", PostsController.createPost);

module.exports = router;