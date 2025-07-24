const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");

const db = require("./config/db");
const resumeRoutes = require("./Routes/resumeRoutes");
const authRoutes = require("./Routes/auth");

dotenv.config(); // ✅ Load env variables early

const app = express();
const PORT = process.env.PORT || 3001;

// ✅ Middleware
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ✅ Debugging Logger
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`, req.body);
  next();
});

// ✅ Static folder for uploaded files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/resume", resumeRoutes);

// ✅ Start server
app.listen(PORT, "0.0.0.0", async () => {
  await db();
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
