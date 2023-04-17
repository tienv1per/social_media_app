const express = require('express');
const bcrypt = require('bcrypt');
const UserModel = require("../Models/usersModel");

module.exports.getUser = async(req, res, next) => {
    const id = req.params.id;

    try {
        const user = await UserModel.findById(id);
        if(user) {
            const {password, ...otherDetails} = user._doc;
            return res.status(200).json(otherDetails);
        }
        else {
            return res.status(404).json({message: 'User not exist, same length ID'});
        }
    } catch (error) {
        return res.status(500).json({message: "User not exist, different length ID"});
    }
}

module.exports.updateUser = async (req, res, next) => {
    const id = req.params.id;
    const { currentUserId, currentUserAdminStatus, password } = req.body;
  
    if (id === currentUserId || currentUserAdminStatus) {
        try {
            if (password) {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(password, salt);
            }
  
            const user = await UserModel.findByIdAndUpdate(id, req.body, {
                new: true,
            });
  
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json("NGU");
        }
    } else {
        res.status(403).json("Access Denied! you can only update your own profile");
    }
};

module.exports.deleteUser = async (req, res, next) => {
    const id = req.params.id;
    const {currentUserId, currentUserAdminStatus} = req.body;

    if(currentUserId === id) {
        console.log(123);
        try {
            const user = await UserModel.findByIdAndDelete(id);
            return res.status(200).json("User deleted successfully");
        } catch (error) {
            return res.status(500).json(error);
        }
    }
    else {
        return res.status(403).json("Access Denied");
    }
}

module.exports.followUser = async(req, res, next) => {
    const id = req.params.id;
    const {currentUserFollowId} = req.body;

    if(id === currentUserFollowId) {
        return res.status(403).json("Access Forbidden");
    }
    else {
        try {
            const followUser = await UserModel.findById(id);
            const followingUser = await UserModel.findById(currentUserFollowId);

            // console.log(!followUser);
            // console.log(!followingUser);

            // if(!followUser || !followingUser) {
            //     return request.status(404).json("Not Found User");
            // }
            // else {
            if(!followUser.followers.includes(currentUserFollowId)) {
                await followUser.updateOne({$push: {followers: currentUserFollowId}});
                await followingUser.updateOne({$push: {followings: id}});
                return res.status(200).json("User followed");
            }
            else {
                return res.status(403).json("User is Already Follow By You");
                // }
            }

        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

module.exports.unfollowUser = async(req, res, next) => {
    const id = req.params.id;
    const {currentUserFollowId} = req.body;

    if(id === currentUserFollowId) {
        return res.status(403).json("Action Forbidden");
    }

    try {
        const followedUser = await UserModel.findById(id);
        const followingUser = await UserModel.findById(currentUserFollowId);

        if(followedUser.followers.includes(currentUserFollowId)) {
            await followedUser.updateOne({$pull: {followers: currentUserFollowId}});
            await followingUser.updateOne({$pull: {followings: id}});
            return res.status(200).json("User unfollowed");
        }
        
        else {
            return res.status(403).json("User is Already Unfollow By You");
        }
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports.getUsers = async (req, res, next) => {
    try {
        const users = await UserModel.find();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}