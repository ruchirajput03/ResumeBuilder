"use client";
import { CheckCircle2, XCircle, Palette } from "lucide-react";

type Props = {
  user: {
    id: string;
    name: string;
    email: string;
    resumeStatus: "pending" | "approved" | "rejected";
    selectedTheme: string;
  };
  onStatusChange: (id: string, status: "approved" | "rejected") => void;
  onThemeAssign: (id: string, theme: string) => void;
};

const themes = ["light", "dark", "ocean", "forest"];

export default function UserCard({
  user,
  onStatusChange,
  onThemeAssign,
}: Props) {
  return (
    <div className="border rounded-lg p-4 shadow-sm ">
      <h3 className="font-semibold text-lg">{user.name}</h3>
      <p className="text-sm ">{user.email}</p>

      <div className="mt-3 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm">Resume Status:</span>
          <span
            className={`text-xs px-2 py-1 rounded-full ${
              user.resumeStatus === "approved"
                ? "bg-green-100 text-green-700"
                : user.resumeStatus === "rejected"
                ? "bg-red-100 text-red-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {user.resumeStatus}
          </span>
        </div>

        <div className="flex gap-2">
          <button
            className="flex-1 bg-green-600 hover:bg-green-700 text-white text-sm px-2 py-1 rounded-md"
            onClick={() => onStatusChange(user.id, "approved")}
          >
            <CheckCircle2 size={16} className="inline-block mr-1" />
            Approve
          </button>
          <button
            className="flex-1 bg-red-600 hover:bg-red-700 text-white text-sm px-2 py-1 rounded-md"
            onClick={() => onStatusChange(user.id, "rejected")}
          >
            <XCircle size={16} className="inline-block mr-1" />
            Reject
          </button>
        </div>

        <div className="mt-3">
          <label className="text-sm flex items-center gap-1 font-medium mb-1">
            <Palette size={16} /> Assign Theme
          </label>
          <select
            value={user.selectedTheme}
            onChange={(e) => onThemeAssign(user.id, e.target.value)}
            className="w-full border px-2 py-1 rounded-md "
          >
            {themes.map((theme) => (
              <option key={theme} value={theme}>
                {theme}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
