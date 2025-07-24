const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Resume = require("../models/resume");



exports.registerUser = async (req, res) => {
  const { name, email, password, } = req.body;
  try {
    console.log(name,email,password,'creadentials for register')
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({name, email, password: hashedPassword });
  const token = jwt.sign(
    {
      userId: newUser._id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );

  res.cookie("token", token, {
    httpOnly: true,
    
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  });


    res.status(201).json({ message: "User created", userId: newUser._id });
  } catch (err) {
    console.log("Register error",err)
    res.status(500).json({ message: "Registration failed", error: err.message });
  }

};




exports.fetchuser = async (req, res) => {
  try {
    const user = req.user;

    // 🔍 Find resume by user ID
    const resume = await Resume.findOne({ userId: user._id }).select("file");

    // Optional: If you want to handle case where resume isn't found
    if (!resume) {
      return res.status(200).json({
        message: "User data fetched, but no resume uploaded",
        data: {
          user,
          resume: null
        }
      });
    }

    // ✅ Respond with both user data and resume file
    return res.status(200).json({
      message: "User data and resume fetched successfully",
      data: {
        user,
        resume
      }
    });

  } catch (err) {
    console.error("Fetch error:", err);
   return res.status(500).json({ message: "Fetching failed", error: err.message });
  }
};



exports.loginUser = async (req, res) => {
  const { email, password, } = req.body;
  try {
    console.log(email,password)
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({
      userId: user._id,
      email: user.email,     
      role: user.role,     
    }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
        const resume = await Resume.findOne({ userId: user._id }).select("file");

    return res.json({ message: "Login successful",data:{email,role:user.role,name:user.name,resume} });
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: "Login failed", error: err.message });
  }
};

exports.logout = (req, res) => {
  res.clearCookie('token'); 
  return res.status(200).json({ message: 'Logged out successfully' });
};