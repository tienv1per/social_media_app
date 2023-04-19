const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const AuthRoute = require("./Routes/AuthRoute.js");
const UserRoute = require("./Routes/UsersRoute.js");
const PostRoute = require("./Routes/PostsRoute.js");
const UploadRoute = require("./Routes/UploadRoute.js");

dotenv.config();

const PORT = process.env.PORT;
const MONGO = process.env.MONGO;

const connect = async () => {
    try {
        await mongoose.connect(MONGO);
        console.log("Connected to mongoDB");
    }
    catch(err) {
        console.log(err.message);
        throw err;
    }
}

const app = express();

// to serve images for public
app.use(express.static("public"));
app.use("/images", express.static("images"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(cors());

app.use("/auth", AuthRoute);
app.use("/user", UserRoute);
app.use("/post", PostRoute);
app.use("/upload", UploadRoute);

app.listen(PORT, (req, res) => {
    connect();
    console.log(`Listening on ${PORT}`);
})