const express = require('express');
const PostsController = require("../Controllers/PostsController");

const router = express.Router();

router.get("/", (req, res, next) => {
    res.send("Hello DCMM");
})

router.post("/", PostsController.createPost);

router.get("/:id", PostsController.getPost);

router.put("/:id", PostsController.updatePost);

router.delete("/:id", PostsController.deletePost);

router.put("/like/:id", PostsController.likePost);

module.exports = router;