const express = require('express');
const route = express.Router();
const User = require('../models/user'); 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const LocalModel = require("../models/user");
const  getResume  = require("../controllers/adminread");
const authController = require("../controllers/authController");


route.use((req,res,next)=>{
    console.log(req.path,'-----------------')
    next()
})
route.post("/register",authController.registerUser);
route.post("/login",authController.loginUser);
route.get("/",authController.fetchuser)
route.post('/logout', authController.logout);

route.get("/all", getResume.getAllResumes); // admin-only ideally
route.patch("/:id/status",getResume.updateResumeStatus);


module.exports = route;
