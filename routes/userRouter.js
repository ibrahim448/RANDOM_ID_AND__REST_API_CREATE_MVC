const express = require("express");
const router = express.Router();

const {getHome,getUser,createUser, updateUser} = require("../controller/userController");

// home router
router.get("/", getHome);
router.get("/user", getUser);
router.post("/user", createUser);
router.put("/user/:id", updateUser);



module.exports = router;