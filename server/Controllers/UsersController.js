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