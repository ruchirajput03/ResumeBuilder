"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ThemeOption } from "@/components/types/theme";

interface Props {
  onChange: (theme: ThemeOption) => void;
}

const themes: ThemeOption[] = ["light", "dark", "ocean", "forest"];

export default function ThemeSelector({ onChange }: Props) {
  const [selected, setSelected] = useState<ThemeOption>("light");

  const handleChange = (theme: ThemeOption) => {
    setSelected(theme);
    onChange(theme);
  };

  return (
    <motion.div
      className="flex gap-3 flex-wrap items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <span className="font-medium">Select Theme:</span>
      {themes.map((theme) => (
        <button
          key={theme}
          onClick={() => handleChange(theme)}
          className={`px-3 py-1 rounded-full border text-sm capitalize ${
            selected === theme
              ? "bg-blue-600 text-white"
              : "bg-gray-200 dark:bg-gray-700 dark:text-gray-100"
          }`}
        >
          {theme}
        </button>
      ))}
    </motion.div>
  );
}
