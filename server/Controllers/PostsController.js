const express = require('express');
const PostModel = require("../Models/postsModel");

module.exports.createPost = async (req, res, next) => {
    const newPost = req.body;
    const post = new PostModel(newPost);

    try {
        await post.save();
        return res.status(200).json({
            message: "post created successfully",
            post: post,
        });
    } catch (error) {
        return res.status(500).json(error.message);
    }
}