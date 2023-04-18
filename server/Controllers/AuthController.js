const UserModel = require("../Models/usersModel");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

dotenv.config();

const JWT_TOKEN = process.env.JWT_TOKEN;

module.exports.registerUser = async(req, res, next) => {
    const {username, password, firstname, lastname} = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    const newUser = new UserModel({username, password:hashed, firstname, lastname});

    try {
        const oldUser = await UserModel.findOne({username: username});
        if(oldUser) {
            return res.status(400).json("Username already in use");
        }
        const savedUser = await newUser.save();

        const token = jwt.sign({
            username: savedUser.username,
            id: savedUser._id
        }, JWT_TOKEN);
        return res.status(200).json({savedUser, token});
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
                const token = jwt.sign({
                    username: user.username,
                    id: user._id,
                    isAdmin: user.isAdmin
                }, JWT_TOKEN);
                
                return res
                        .cookie("token_dcmm", token, {
                            httpOnly: true,
                        })
                        .status(200)
                        .json({user, token});
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