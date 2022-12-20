const express = require("express");
const router = express.Router();

const {getHome,getUser,createUser} = require("../controller/userController");

// home router
router.get("/", getHome);
// getUser router
router.get("/user", getUser);
// getUser router
router.get("/user", getUser);
// create user router
router.post("/user", createUser);



module.exports = router;