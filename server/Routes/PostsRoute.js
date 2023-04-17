const express = require('express');
const PostsController = require("../Controllers/PostsController");

const router = express.Router();

router.get("/", PostsController.getPosts);

router.post("/", PostsController.createPost);

router.get("/:id", PostsController.getPost);

router.put("/:id", PostsController.updatePost);

router.delete("/:id", PostsController.deletePost);

router.put("/like/:id", PostsController.likePost);

router.get("/timeline/:id", PostsController.getTimelinePosts);

module.exports = router;