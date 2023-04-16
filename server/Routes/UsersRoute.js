const express = require('express');
const UsersController = require("../Controllers/UsersController");

const router = express.Router();

router.get("/", (req, res, next) => {
    res.send("Hello DCMM");
})

router.get("/:id", UsersController.getUser);

router.put("/:id", UsersController.updateUser);

module.exports = router;