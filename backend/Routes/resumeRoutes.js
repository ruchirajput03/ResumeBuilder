// routes/resumeRoutes.js
const express = require("express");
const router = express.Router();
const { authUser } = require("../middlewares/authMiddleware");
const upload = require("../middlewares/upload");
const { uploadResume } = require("../controllers/resumeController");

// POST /api/resume/upload
router.post("/upload", authUser, upload.single("resume"), uploadResume);

module.exports = router;
