const express = require('express');
const AuthController = require('../Controllers/AuthController');

const router = express.Router();

router.get("/", (req, res, next) => {
    res.send("Hello DCMM");
})

router.post("/register", AuthController.registerUser);
router.post("/login", AuthController.loginUser);

module.exports = router;