"use client";

import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "@/store/slices/authSlices";
import { RootState, AppDispatch } from "@/store/store";
import { useState,useEffect } from "react";
  import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const auth = useSelector((state: RootState) => state.auth);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(registerUser(formData));

  };

  const router = useRouter();

  useEffect(() => {
    if (auth.user) {
      router.push("/login");
    }
  }, [auth.user, router]);

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-8 rounded-xl shadow-md w-full max-w-md"
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="border p-2 w-full"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Register
      </button>

      {/* Display loading/error/success */}
      {auth.isLoading && <p>Loading...</p>}
      {auth.error && <p className="text-red-500">{auth.error}</p>}
      {auth.user && <p className="text-green-600">Welcome {auth.user.name}!</p>}
    </form>
  );
};

export default RegisterForm;
