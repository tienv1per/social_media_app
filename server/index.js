const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const AuthRoute = require("./Routes/AuthRoute.js");
const UserRoute = require("./Routes/UsersRoute.js");

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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/auth", AuthRoute);
app.use("/user", UserRoute);

app.listen(PORT, (req, res) => {
    connect();
    console.log(`Listening on ${PORT}`);
})