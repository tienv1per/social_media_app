const express = require('express');
const PostModel = require("../Models/postsModel");
const UserModel = require("../Models/usersModel");
const { default: mongoose } = require('mongoose');

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

module.exports.getPost = async (req, res, next) => {
    const id = req.params.id;

    try {
        const post = await PostModel.findById(id);
        if(post) {
            return res.status(200).json(post);
        }
        else {
            return res.status(404).json("Post not found, same length ID");
        }
    } catch (error) {
        return res.status(500).json("Post not found, different length ID");
    }
}

module.exports.updatePost = async (req, res, next) => {
    const postId = req.params.id;
    const {userId} = req.body;

    try {
        const post = await PostModel.findById(postId);
        if(post.userId === userId) {
            const updatePost = await PostModel.findByIdAndUpdate(postId, req.body, {new: true});
            return res.status(200).json(updatePost);
        }
        else {
            return res.status(403).json("Access Denied! You cannot update someone's posts");
        }
    } catch (error) {
        return res.status(500).json("ID Post Not Found");
    }
}

module.exports.deletePost = async (req, res, next) => {
    const postId = req.params.id;
    const {userId} = req.body;

    try {
        const post = await PostModel.findById(postId);
        if(post.userId === userId) {
            await PostModel.findByIdAndDelete(postId);
            // await post.deleteOne();
            return res.status(200).json({
                message: "POST DELETED SUCCESSFULLY",
                post: post,
            });
        }
        else {
            return res.status(403).json("Access Denied! You cannot delete someone's posts");
        }
    } catch (error) {
        return res.status(500).json("ID Post Not Found");
    }
}

module.exports.likePost = async (req, res, next) => {
    const postId = req.params.id;
    const {userId} = req.body;

    try {
        const post = await PostModel.findById(postId);
        if(!post.likes.includes(userId)) {
            await post.updateOne({$push: {likes: userId}});
            return res.status(200).json("LIKED POST");
        }
        else {
            await post.updateOne({$pull: {likes: userId}});
            return res.status(200).json("DISLIKED POST");
        }
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

module.exports.getPosts = async (req, res, next) => {
    try {
        const posts = await PostModel.find();
        return res.status(200).json(posts);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

module.exports.getTimelinePosts = async (req, res, next) => {
    const userId = req.params.id;

    try {
        const currentUserPosts = await PostModel.find({userId: userId});
        const followingPosts = await UserModel.aggregate([
            {
                $match: {
                    _id: new mongoose.Types.ObjectId(userId),

                }
            }, 
            {
                // tim kiem trong table posts xem co userId nao nam trong followings at table users ko => dat ten la followingPosts
                $lookup: {
                    from: "posts",
                    localField: "followings",
                    foreignField: "userId",
                    as: "followingPosts",
                }
            },
            {
                $project: {
                    followingPosts: 1,
                    _id: 0,
                }
            }
        ])

        return res
            .status(200)
            .json(currentUserPosts.concat(followingPosts[0].followingPosts)
            .sort((a, b) => {
                return b.createdAt - a.createdAt;
        }))

    } catch (error) {
        return res.status(500).json(error.message);
    }
}