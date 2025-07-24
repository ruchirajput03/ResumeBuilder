// controllers/resumeController.js
const Resume = require("../models/resume");
const uploadResume = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });
    const userId = req.user._id;
    if (!userId) return res.status(400).json({ message: "userId is required" });

    // Check if resume already exists for this user
    const existingResume = await Resume.findOne({ userId });

    let resume;
    if (existingResume) {
      // Update existing resume
      existingResume.file = `/uploads/${req.file.filename}`;
      existingResume.status = "pending"; // Reset status if needed
      resume = await existingResume.save();
    } else {
      // Create new resume
      resume = new Resume({
        userId,
        file: `/uploads/${req.file.filename}`
      });
      await resume.save();
    }

    return res.status(200).json({
      message: existingResume ? "Resume updated successfully" : "Resume uploaded successfully",
      data: resume
    });

  } catch (err) {
    console.error("Upload error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};
// const uploadResume = async (req, res) => {
//   try {
//     if (!req.file) return res.status(400).json({ message: "No file uploaded" });

//     const userId = req.user._id;
//     if (!userId) return res.status(400).json({ message: "userId is required" });

//     const resume = new Resume({
//       userId,
//       file: `/uploads/${req.file.filename}`
//     });

//     await resume.save();

//     return res.status(201).json({
//       message: "Resume uploaded and saved successfully",
//       data: resume
//     });

//   } catch (err) {
//     console.error("Upload error:", err);
//     return res.status(500).json({ message: "Server error" });
//   }
// };

module.exports = { uploadResume };
