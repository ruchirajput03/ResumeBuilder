"use client";

import { useEffect, useState } from "react";
import axios from "axios";
// Removed PDFViewer import since we're opening PDFs directly

const apiUrl = process.env.API_URL;

interface Resume {
  _id: string;
  file: string;
  status: "pending" | "approved" | "rejected";
  userId?: {
    name?: string;
    email?: string;
  };
}

export default function Resumes() {
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  // Removed viewingPDF state since we're opening PDFs directly

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const response = await axios.get(`${apiUrl}auth/all`);
        setResumes(response.data.data);
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Failed to load resumes");
      } finally {
        setLoading(false);
      }
    };

    fetchResumes();
  }, []);

  const updateStatus = async (id: string, status: "approved" | "rejected") => {
    try {
      const response = await axios.patch(`${apiUrl}auth/${id}/status`, { status });

      setResumes((prev) =>
        prev.map((r) => (r._id === id ? response.data.data : r))
      );
    } catch (err) {
      console.error("Status update error:", err);
      alert("Failed to update status");
    }
  };

  const handleViewPDF = (filePath: string) => {
    const fullUrl = `http://localhost:8000${filePath}`;
    // Open PDF directly in new tab instead of using PDF viewer
    window.open(fullUrl, '_blank');
  };

  // Removed closePDFViewer function since we're opening PDFs directly

  if (loading) return <div className="p-5">Loading...</div>;
  if (error) return <div className="p-5 text-red-500">{error}</div>;

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">All Uploaded Resumes</h1>

      {resumes.length === 0 ? (
        <p>No resumes found.</p>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {resumes.map((resume) => (
            <div
              key={resume._id}
              className="border border-gray-300 p-4 rounded-lg shadow-sm"
            >
              <p className="mb-2"><span className="font-bold">User:</span> {resume.userId?.name || "Unknown"}</p>
              <p className="mb-2"><span className="font-bold">Email:</span> {resume.userId?.email || "Unknown"}</p>
              <p className="mb-2">
                <span className="font-bold">Status:</span>{" "}
                <span className={`font-bold ${
                  resume.status === "approved"
                    ? "text-green-600"
                    : resume.status === "rejected"
                    ? "text-red-600"
                    : "text-orange-600"
                }`}>
                  {resume.status}
                </span>
              </p>
              <p className="mb-4"><span className="font-bold">File:</span> {resume.file}</p>

              <div className="space-y-2">
                <button
                  onClick={() => handleViewPDF(resume.file)}
                  className="w-full bg-blue-500 text-white px-4 py-2 rounded border-none cursor-pointer hover:bg-blue-600"
                >
                  View PDF
                </button>

                <button
                  onClick={() => updateStatus(resume._id, "approved")}
                  disabled={resume.status === "approved"}
                  className={`w-full px-4 py-2 rounded border-none text-white ${
                    resume.status === "approved"
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-green-500 cursor-pointer hover:bg-green-600"
                  }`}
                >
                  Approve
                </button>

                <button
                  onClick={() => updateStatus(resume._id, "rejected")}
                  disabled={resume.status === "rejected"}
                  className={`w-full px-4 py-2 rounded border-none text-white ${
                    resume.status === "rejected"
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-red-500 cursor-pointer hover:bg-red-600"
                  }`}
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}