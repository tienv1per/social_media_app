const express = require('express');
const UsersController = require("../Controllers/UsersController");

const router = express.Router();

router.get("/:id", UsersController.getUser);

router.put("/:id", UsersController.updateUser);

router.delete("/:id", UsersController.deleteUser);

router.put("/follow/:id", UsersController.followUser);

router.put("/unfollow/:id", UsersController.unfollowUser);

module.exports = router;