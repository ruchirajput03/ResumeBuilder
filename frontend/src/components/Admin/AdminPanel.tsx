"use client";
import { useState } from "react";
import UserCard from "@/components/Admin/UserCard";

type User = {
  id: string;
  name: string;
  email: string;
  resumeStatus: "pending" | "approved" | "rejected";
  selectedTheme: string;
};

export default function AdminPanel() {
  // Dummy user data
  const [users, setUsers] = useState<User[]>([
    {
      id: "1",
      name: "Riya Sharma",
      email: "riya@example.com",
      resumeStatus: "pending",
      selectedTheme: "light",
    },
    {
      id: "2",
      name: "Aryan Mehta",
      email: "aryan@example.com",
      resumeStatus: "approved",
      selectedTheme: "dark",
    },
    {
      id: "3",
      name: "Nisha Patel",
      email: "nisha@example.com",
      resumeStatus: "rejected",
      selectedTheme: "ocean",
    },
  ]);

  const handleStatusChange = (id: string, status: User["resumeStatus"]) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, resumeStatus: status } : user
      )
    );
  };

  const handleThemeAssign = (id: string, theme: string) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, selectedTheme: theme } : user
      )
    );
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold mb-4">Admin Dashboard</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onStatusChange={handleStatusChange}
            onThemeAssign={handleThemeAssign}
          />
        ))}
      </div>
    </div>
  );
}
