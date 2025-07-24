"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock } from "lucide-react";
import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  loginUser,
  clearError,
  selectAuth,
} from "../../store/slices/authSlices";
import type { AppDispatch } from "../../store/store";

export default function LoginForm() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const { isAuthenticated, isLoading, error, user } = useSelector(selectAuth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [localError, setLocalError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setLocalError("Email and password are required.");
      return;
    }

    dispatch(
      loginUser({
        email,
        password,
        role: "user", 
      })
    );
  };

  useEffect(() => {
    if (error) {
      setLocalError(error);
    }
  }, [error]);

  useEffect(() => {
    if (isAuthenticated && user) {
      const role = user.role;
      const redirectPath =
        role === "admin" ? "/admin/dashboard" : "/dashboard";
      router.push(redirectPath);
    }
  }, [isAuthenticated, user, router]);

  useEffect(() => {
    // Clear error on mount
    dispatch(clearError());
  }, [dispatch]);

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="p-8 rounded-xl shadow-md w-full max-w-md space-y-4"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2 className="text-2xl font-semibold text-center">Login</h2>

      <Input
        icon={<Mail />}
        type="email"
        placeholder="Email"
        value={email}
        onChange={setEmail}
      />
      <Input
        icon={<Lock />}
        type="password"
        placeholder="Password"
        value={password}
        onChange={setPassword}
      />

      {localError && <p className="text-red-500 text-sm">{localError}</p>}

      <Button
        type="submit"
        label={isLoading ? "Logging in..." : "Login"}
      />
    </motion.form>
  );
}
