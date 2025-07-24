"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className=" text-center text-sm py-4 border-t "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      © {new Date().getFullYear()} Resume Builder. All rights reserved.
    </motion.footer>
  );
}
