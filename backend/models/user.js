// models/user.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,

  },
  email: { 
    type: String, 
    required: true, 
    unique: true
   },
  password: { 
    type: String, 
    required: true 
  },
  role:{
    type: String, 
    default:"user",
    enum: ["user", "admin"],
    required: true

  },

 
  // any other fields (name, createdAt, etc.)
  resetOTP: String,
  resetOTPExpiry: Date,
  isOTPVerified: { type: Boolean, default: false },
});



// 2️⃣ Create a model from the schema
const User = mongoose.model("User", userSchema);

// 3️⃣ Export the model
module.exports = User;

