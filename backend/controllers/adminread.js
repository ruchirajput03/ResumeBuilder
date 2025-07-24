const Resume = require("../models/resume");

const getAllResumes = async (req, res) => {
  try {
    const resumes = await Resume.find().populate("userId", "name email");
    res.status(200).json({ data: resumes });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

const updateResumeStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!["approved", "rejected"].includes(status)) {
    return res.status(400).json({ message: "Invalid status value" });
  }

  try {
    let updatedResume = await Resume.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    ).populate("userId", "name email"); // repopulate to get name/email again

    if (!updatedResume) {
      return res.status(404).json({ message: "Resume not found" });
    }

    return res.status(200).json({
      message: `Resume status updated to ${status}`,
      data: updatedResume,
    });
  } catch (error) {
    console.error("Error updating resume status:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getAllResumes,
  updateResumeStatus,
};
