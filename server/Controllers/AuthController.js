// import UserModel from "../Models/usersModel.js";
const UserModel = require("../Models/usersModel");
const bcrypt = require("bcrypt");

module.exports.registerUser = async(req, res, next) => {
    const {username, password, firstname, lastname} = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    const newUser = new UserModel({username, password:hashed, firstname, lastname});

    try {
        const savedUser = await newUser.save();
        return res.status(200).json(savedUser);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

module.exports.loginUser = async(req, res, next) => {
    const { username, password } = req.body;
    try {
        const user = await UserModel.findOne({ username: username});
        if(user) {
            const isValid = await bcrypt.compare(password, user.password);
            if(isValid) {
                return res.status(200).json(user);
            }
            else {
                return res.status(400).json({ message: "Wrong password"});
            }
        }
        else {
            return res.status(400).json({ message: "User not found"});
        }
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}