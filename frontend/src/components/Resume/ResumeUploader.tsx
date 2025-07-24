// "use client";
// import { useState, useRef } from "react";
// import { motion } from "framer-motion";
// import { UploadCloud, PencilLine, FileText } from "lucide-react";
// import axios from "axios";

// export default function ResumeUploader() {
//   const [file, setFile] = useState<File | null>(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const fileInputRef = useRef<HTMLInputElement | null>(null);

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const selectedFile = e.target.files?.[0];
//     if (selectedFile && selectedFile.type === "application/pdf") {
//       setFile(selectedFile);
//       setIsEditing(false);
//     } else {
//       alert("Please upload a valid PDF file.");
//     }
//   };

//   const handleUpload = async () => {
//     if (!file) return;

//     const formData = new FormData();
//     formData.append("resume", file);

//     try {
//       const res = await axios.post(
//         process.env.API_URL+"resume/upload",
//         formData,
//         {
//           headers: { "Content-Type": "multipart/form-data" },
//           withCredentials: true,
//         }
//       );

//       console.log("✅ Upload success:", res.data);
//       alert("Resume uploaded successfully!");
//     } catch (error: any) {
//       console.error("❌ Upload failed:", error);
//       alert(error.response?.data?.message || "Upload failed");
//     }
//   };

//   const triggerFileSelect = () => {
//     fileInputRef.current?.click();
//   };

//   return (
//     <motion.div
//       className="p-6 rounded-xl shadow-md space-y-4"
//       initial={{ opacity: 0, x: -50 }}
//       animate={{ opacity: 1, x: 0 }}
//     >
//       <h2 className="text-xl font-semibold flex items-center gap-2">
//         <UploadCloud className="w-5 h-5" /> Upload / Edit Resume
//       </h2>

//       {!file && (
//         <>
//           <input
//             type="file"
//             accept="application/pdf"
//             onChange={handleFileChange}
//             ref={fileInputRef}
//             className="hidden"
//           />
//           <button
//             onClick={triggerFileSelect}
//             className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
//           >
//             Upload Resume
//           </button>
//         </>
//       )}

//       {file && (
//         <div className="space-y-2">
//           <div className="flex items-center justify-between px-4 py-2 rounded-md">
//             <span className="flex items-center gap-2 text-sm">
//               <FileText className="w-4 h-4" />
//               {file.name}
//             </span>
//             <button
//               onClick={() => setIsEditing(true)}
//               className="text-blue-600 hover:underline text-sm flex items-center gap-1"
//             >
//               <PencilLine className="w-4 h-4" /> Edit
//             </button>
//           </div>

//           {isEditing && (
//             <>
//               <input
//                 type="file"
//                 accept="application/pdf"
//                 onChange={handleFileChange}
//                 ref={fileInputRef}
//                 className="hidden"
//               />
//               <button
//                 onClick={triggerFileSelect}
//                 className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md"
//               >
//                 Choose New Resume
//               </button>
//             </>
//           )}

//           <button
//             onClick={handleUpload}
//             className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md w-full"
//           >
//             Upload Now
//           </button>
//         </div>
//       )}
//     </motion.div>
//   );
// }
"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { UploadCloud, PencilLine, FileText, Trash2, Loader2 } from "lucide-react";
import axios, { AxiosError } from "axios";

interface ApiErrorResponse {
  message?: string;
}

interface UploadResponse {
  success: boolean;
  message?: string;
  data?: {
    _id: string;
    userId: string;
    file: string;
  };
}

interface ResumeData {
  _id: string;
  userId: string;
  file: string;
}

export default function ResumeUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [existingResume, setExistingResume] = useState<ResumeData | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Fetch existing resume on component mount
  useEffect(() => {
    const fetchResume = async () => {
      try {
        const response = await axios.get<{ data: ResumeData }>(
          `${process.env.API_URL}resume`,
          { withCredentials: true }
        );
        if (response.data.data) {
          setExistingResume(response.data.data);
        }
      } catch (error) {
        console.log("No existing resume found or error fetching resume");
      }
    };
    fetchResume();
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
      setIsEditing(false);
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  const handleDelete = async () => {
    if (!existingResume) return;

    try {
      setIsDeleting(true);
      await axios.delete(
        `${process.env.API_URL}resume/${existingResume._id}`,
        { withCredentials: true }
      );
      setExistingResume(null);
      alert("Resume deleted successfully!");
    } catch (error) {
      const axiosError = error as AxiosError<ApiErrorResponse>;
      console.error("❌ Delete failed:", axiosError);
      alert(axiosError.response?.data?.message || "Delete failed");
    } finally {
      setIsDeleting(false);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("resume", file);

    try {
      setIsUploading(true);
      
      // Delete existing resume if it exists
      if (existingResume) {
        await handleDelete();
      }

      // Upload new resume
      const res = await axios.post<UploadResponse>(
        `${process.env.API_URL}resume/upload`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );

      if (res.data.data) {
        setExistingResume(res.data.data);
      }
      console.log("✅ Upload success:", res.data);
      alert("Resume uploaded successfully!");
      setFile(null);
    } catch (error) {
      const axiosError = error as AxiosError<ApiErrorResponse>;
      console.error("❌ Upload failed:", axiosError);
      alert(axiosError.response?.data?.message || "Upload failed");
    } finally {
      setIsUploading(false);
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  return (
    <motion.div
      className="p-6 rounded-xl shadow-md space-y-4"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <h2 className="text-xl font-semibold flex items-center gap-2">
        <UploadCloud className="w-5 h-5" /> Resume Management
      </h2>

      {existingResume && (
        <div className="space-y-2">
          <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-md">
            <span className="flex items-center gap-2 text-sm">
              <FileText className="w-4 h-4" />
              {existingResume.file.split('/').pop()}
            </span>
            <div className="flex gap-2">
              <a
                href={`http://localhost:8000${existingResume.file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline text-sm flex items-center gap-1"
              >
                 View
              </a>
              <button
                onClick={() => setIsEditing(true)}
                className="text-blue-600 hover:underline text-sm flex items-center gap-1"
              >
                <PencilLine className="w-4 h-4" /> Replace
              </button>
              <button
                onClick={handleDelete}
                disabled={isDeleting}
                className="text-red-600 hover:underline text-sm flex items-center gap-1"
              >
                {isDeleting ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Trash2 className="w-4 h-4" />
                )}
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {(isEditing || !existingResume) && (
        <>
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            ref={fileInputRef}
            className="hidden"
          />
          <div className="space-y-2">
            {file ? (
              <div className="flex items-center justify-between bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-md border border-blue-200 dark:border-blue-800">
                <span className="flex items-center gap-2 text-sm">
                  <FileText className="w-4 h-4" />
                  {file.name}
                </span>
                <button
                  onClick={() => setFile(null)}
                  className="text-red-600 hover:underline text-sm flex items-center gap-1"
                >
                  <Trash2 className="w-4 h-4" /> Remove
                </button>
              </div>
            ) : (
              <button
                onClick={triggerFileSelect}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md w-full"
              >
                Select PDF File
              </button>
            )}

            {file && (
              <button
                onClick={handleUpload}
                disabled={isUploading}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md w-full flex items-center justify-center gap-2"
              >
                {isUploading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Uploading...
                  </>
                ) : (
                  <>
                    <UploadCloud className="w-4 h-4" />
                    {existingResume ? "Replace Resume" : "Upload Resume"}
                  </>
                )}
              </button>
            )}
          </div>
        </>
      )}
    </motion.div>
  );
}