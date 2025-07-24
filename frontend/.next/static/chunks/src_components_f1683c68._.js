(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/Resume/ResumeUploader.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
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
__turbopack_context__.s({
    "default": ()=>ResumeUploader
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UploadCloud$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud-upload.js [app-client] (ecmascript) <export default as UploadCloud>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PencilLine$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil-line.js [app-client] (ecmascript) <export default as PencilLine>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ResumeUploader() {
    _s();
    const [file, setFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [existingResume, setExistingResume] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isEditing, setIsEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isUploading, setIsUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDeleting, setIsDeleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Fetch existing resume on component mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ResumeUploader.useEffect": ()=>{
            const fetchResume = {
                "ResumeUploader.useEffect.fetchResume": async ()=>{
                    try {
                        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("".concat(("TURBOPACK compile-time value", "http://localhost:8000/api/"), "resume"), {
                            withCredentials: true
                        });
                        if (response.data.data) {
                            setExistingResume(response.data.data);
                        }
                    } catch (error) {
                        console.log("No existing resume found or error fetching resume");
                    }
                }
            }["ResumeUploader.useEffect.fetchResume"];
            fetchResume();
        }
    }["ResumeUploader.useEffect"], []);
    const handleFileChange = (e)=>{
        var _e_target_files;
        const selectedFile = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0];
        if (selectedFile && selectedFile.type === "application/pdf") {
            setFile(selectedFile);
            setIsEditing(false);
        } else {
            alert("Please upload a valid PDF file.");
        }
    };
    const handleDelete = async ()=>{
        if (!existingResume) return;
        try {
            setIsDeleting(true);
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete("".concat(("TURBOPACK compile-time value", "http://localhost:8000/api/"), "resume/").concat(existingResume._id), {
                withCredentials: true
            });
            setExistingResume(null);
            alert("Resume deleted successfully!");
        } catch (error) {
            var _axiosError_response_data, _axiosError_response;
            const axiosError = error;
            console.error("❌ Delete failed:", axiosError);
            alert(((_axiosError_response = axiosError.response) === null || _axiosError_response === void 0 ? void 0 : (_axiosError_response_data = _axiosError_response.data) === null || _axiosError_response_data === void 0 ? void 0 : _axiosError_response_data.message) || "Delete failed");
        } finally{
            setIsDeleting(false);
        }
    };
    const handleUpload = async ()=>{
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
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("".concat(("TURBOPACK compile-time value", "http://localhost:8000/api/"), "resume/upload"), formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                withCredentials: true
            });
            if (res.data.data) {
                setExistingResume(res.data.data);
            }
            console.log("✅ Upload success:", res.data);
            alert("Resume uploaded successfully!");
            setFile(null);
        } catch (error) {
            var _axiosError_response_data, _axiosError_response;
            const axiosError = error;
            console.error("❌ Upload failed:", axiosError);
            alert(((_axiosError_response = axiosError.response) === null || _axiosError_response === void 0 ? void 0 : (_axiosError_response_data = _axiosError_response.data) === null || _axiosError_response_data === void 0 ? void 0 : _axiosError_response_data.message) || "Upload failed");
        } finally{
            setIsUploading(false);
        }
    };
    const triggerFileSelect = ()=>{
        var _fileInputRef_current;
        (_fileInputRef_current = fileInputRef.current) === null || _fileInputRef_current === void 0 ? void 0 : _fileInputRef_current.click();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "p-6 rounded-xl shadow-md space-y-4",
        initial: {
            opacity: 0,
            x: -50
        },
        animate: {
            opacity: 1,
            x: 0
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-semibold flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UploadCloud$3e$__["UploadCloud"], {
                        className: "w-5 h-5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Resume/ResumeUploader.tsx",
                        lineNumber: 254,
                        columnNumber: 9
                    }, this),
                    " Resume Management"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Resume/ResumeUploader.tsx",
                lineNumber: 253,
                columnNumber: 7
            }, this),
            existingResume && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex items-center gap-2 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Resume/ResumeUploader.tsx",
                                    lineNumber: 261,
                                    columnNumber: 15
                                }, this),
                                existingResume.file.split('/').pop()
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Resume/ResumeUploader.tsx",
                            lineNumber: 260,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "http://localhost:8000".concat(existingResume.file),
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "text-blue-600 hover:underline text-sm flex items-center gap-1",
                                    children: "View"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Resume/ResumeUploader.tsx",
                                    lineNumber: 265,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsEditing(true),
                                    className: "text-blue-600 hover:underline text-sm flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PencilLine$3e$__["PencilLine"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Resume/ResumeUploader.tsx",
                                            lineNumber: 277,
                                            columnNumber: 17
                                        }, this),
                                        " Replace"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Resume/ResumeUploader.tsx",
                                    lineNumber: 273,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleDelete,
                                    disabled: isDeleting,
                                    className: "text-red-600 hover:underline text-sm flex items-center gap-1",
                                    children: [
                                        isDeleting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "w-4 h-4 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Resume/ResumeUploader.tsx",
                                            lineNumber: 285,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Resume/ResumeUploader.tsx",
                                            lineNumber: 287,
                                            columnNumber: 19
                                        }, this),
                                        "Delete"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Resume/ResumeUploader.tsx",
                                    lineNumber: 279,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Resume/ResumeUploader.tsx",
                            lineNumber: 264,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Resume/ResumeUploader.tsx",
                    lineNumber: 259,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Resume/ResumeUploader.tsx",
                lineNumber: 258,
                columnNumber: 9
            }, this),
            (isEditing || !existingResume) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "file",
                        accept: "application/pdf",
                        onChange: handleFileChange,
                        ref: fileInputRef,
                        className: "hidden"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Resume/ResumeUploader.tsx",
                        lineNumber: 298,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            file ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-md border border-blue-200 dark:border-blue-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-2 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Resume/ResumeUploader.tsx",
                                                lineNumber: 309,
                                                columnNumber: 19
                                            }, this),
                                            file.name
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Resume/ResumeUploader.tsx",
                                        lineNumber: 308,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setFile(null),
                                        className: "text-red-600 hover:underline text-sm flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Resume/ResumeUploader.tsx",
                                                lineNumber: 316,
                                                columnNumber: 19
                                            }, this),
                                            " Remove"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Resume/ResumeUploader.tsx",
                                        lineNumber: 312,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Resume/ResumeUploader.tsx",
                                lineNumber: 307,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: triggerFileSelect,
                                className: "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md w-full",
                                children: "Select PDF File"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Resume/ResumeUploader.tsx",
                                lineNumber: 320,
                                columnNumber: 15
                            }, this),
                            file && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleUpload,
                                disabled: isUploading,
                                className: "bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md w-full flex items-center justify-center gap-2",
                                children: isUploading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "w-4 h-4 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Resume/ResumeUploader.tsx",
                                            lineNumber: 336,
                                            columnNumber: 21
                                        }, this),
                                        "Uploading..."
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UploadCloud$3e$__["UploadCloud"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Resume/ResumeUploader.tsx",
                                            lineNumber: 341,
                                            columnNumber: 21
                                        }, this),
                                        existingResume ? "Replace Resume" : "Upload Resume"
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Resume/ResumeUploader.tsx",
                                lineNumber: 329,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Resume/ResumeUploader.tsx",
                        lineNumber: 305,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Resume/ResumeUploader.tsx",
        lineNumber: 248,
        columnNumber: 5
    }, this);
}
_s(ResumeUploader, "/pNkcY1sZIED9hhM5rv6hjyDQx8=");
_c = ResumeUploader;
var _c;
__turbopack_context__.k.register(_c, "ResumeUploader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Resume/ThemeSelector.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>ThemeSelector
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const themes = [
    "light",
    "dark",
    "ocean",
    "forest"
];
function ThemeSelector(param) {
    let { onChange } = param;
    _s();
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("light");
    const handleChange = (theme)=>{
        setSelected(theme);
        onChange(theme);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "flex gap-3 flex-wrap items-center",
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-medium",
                children: "Select Theme:"
            }, void 0, false, {
                fileName: "[project]/src/components/Resume/ThemeSelector.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            themes.map((theme)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>handleChange(theme),
                    className: "px-3 py-1 rounded-full border text-sm capitalize ".concat(selected === theme ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-gray-700 dark:text-gray-100"),
                    children: theme
                }, theme, false, {
                    fileName: "[project]/src/components/Resume/ThemeSelector.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Resume/ThemeSelector.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(ThemeSelector, "W3n9y27+k4z1UeldnzuowC5XLco=");
_c = ThemeSelector;
var _c;
__turbopack_context__.k.register(_c, "ThemeSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/lib/resumeThemes.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "themeStyles": ()=>themeStyles
});
const themeStyles = {
    light: "bg-white text-black border-gray-200",
    dark: "bg-gray-800 text-white border-gray-600",
    ocean: "bg-blue-100 text-blue-900 border-blue-400",
    forest: "bg-green-100 text-green-900 border-green-400"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Admin/pdf.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// "use client";
// import { useEffect, useRef, useState } from "react";
// import type * as PDFJS from "pdfjs-dist";
// interface Props {
//   fileUrl: string;
// }
// export default function PDFViewer({ fileUrl }: Props) {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [pdfjsLib, setPdfjsLib] = useState<typeof PDFJS | null>(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
//   const [pdfDoc, setPdfDoc] = useState<any>(null);
//   useEffect(() => {
//     const loadPdfjs = async () => {
//       try {
//         const pdfjs = await import("pdfjs-dist");
//         // Try multiple worker sources
//         const workerSources = [
//           `/pdf.worker.min.js`, // Local worker (you'll need to copy this to public folder)
//           `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`,
//           `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`
//         ];
//         // Try to set worker, fallback if needed
//         let workerSet = false;
//         for (const workerSrc of workerSources) {
//           try {
//             pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;
//             workerSet = true;
//             break;
//           } catch (err) {
//             console.log(err)
//             console.warn(`Failed to set worker: ${workerSrc}`);
//           }
//         }
//         if (!workerSet) {
//           console.warn("No worker could be set, PDF.js might not work properly");
//         }
//         setPdfjsLib(pdfjs);
//       } catch (err) {
//         console.error("Failed to load PDF.js:", err);
//         setError("Failed to load PDF library");
//       }
//     };
//     loadPdfjs();
//   }, []);
//   const renderPage = async (pageNum: number) => {
//     if (!pdfDoc) return;
//     try {
//       const page = await pdfDoc.getPage(pageNum);
//       const viewport = page.getViewport({ scale: 1.2 });
//       const canvas = canvasRef.current;
//       if (!canvas) {
//         setError("Canvas not available");
//         return;
//       }
//       const context = canvas.getContext("2d");
//       canvas.height = viewport.height;
//       canvas.width = viewport.width;
//       const renderContext = {
//         canvasContext: context!,
//         viewport: viewport,
//       };
//       await page.render(renderContext).promise;
//     } catch (err: any) {
//       console.error("Error rendering page:", err);
//       setError(`Failed to render page: ${err.message}`);
//     }
//   };
//   useEffect(() => {
//     if (!pdfjsLib || !fileUrl) return;
//     const loadPDF = async () => {
//       try {
//         setLoading(true);
//         setError(null);
//         const loadingTask = pdfjsLib.getDocument({
//           url: fileUrl,
//           verbosity: 0,
//           // Add CORS headers if needed
//           httpHeaders: {
//             'Access-Control-Allow-Origin': '*',
//           },
//         });
//         const pdf = await loadingTask.promise;
//         setPdfDoc(pdf);
//         setTotalPages(pdf.numPages);
//         setCurrentPage(1);
//         // Render first page
//         const page = await pdf.getPage(1);
//         const viewport = page.getViewport({ scale: 1.2 });
//         const canvas = canvasRef.current;
//         if (!canvas) {
//           setError("Canvas not available");
//           return;
//         }
//         const context = canvas.getContext("2d");
//         canvas.height = viewport.height;
//         canvas.width = viewport.width;
//         const renderContext = {
//           canvasContext: context!,
//           viewport: viewport,
//         };
//         await page.render(renderContext).promise;
//         setLoading(false);
//       } catch (err: any) {
//         console.error("Error loading PDF:", err);
//         setError(`Failed to load PDF: ${err.message}`);
//         setLoading(false);
//       }
//     };
//     loadPDF();
//   }, [pdfjsLib, fileUrl]);
//   const goToPage = (pageNum: number) => {
//     if (pageNum >= 1 && pageNum <= totalPages) {
//       setCurrentPage(pageNum);
//       renderPage(pageNum);
//     }
//   };
//   if (!pdfjsLib) {
//     return <div style={{ padding: "20px", textAlign: "center" }}>Loading PDF library...</div>;
//   }
//   return (
//     <div style={{ maxWidth: "800px", margin: "0 auto" }}>
//       {loading && (
//         <div
//           style={{
//             padding: "20px",
//             textAlign: "center",
//             border: "1px solid #ccc",
//             borderRadius: "4px",
//             marginBottom: "10px",
//           }}
//         >
//           Loading PDF...
//         </div>
//       )}
//       {error && (
//         <div
//           style={{
//             padding: "20px",
//             textAlign: "center",
//             color: "red",
//             border: "1px solid red",
//             borderRadius: "4px",
//             margin: "10px 0",
//           }}
//         >
//           <p>{error}</p>
//           <p>
//             Try opening directly:
//             <a
//               href={fileUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{ color: "#007bff", textDecoration: "underline", marginLeft: "5px" }}
//             >
//               Open PDF
//             </a>
//           </p>
//         </div>
//       )}
//       {totalPages > 0 && (
//         <div
//           style={{
//             padding: "10px",
//             textAlign: "center",
//             border: "1px solid #ccc",
//             borderRadius: "4px",
//             marginBottom: "10px",
//             backgroundColor: "#f8f9fa",
//           }}
//         >
//           <button
//             onClick={() => goToPage(currentPage - 1)}
//             disabled={currentPage <= 1}
//             style={{
//               padding: "5px 10px",
//               marginRight: "10px",
//               backgroundColor: currentPage <= 1 ? "#ccc" : "#007bff",
//               color: "white",
//               border: "none",
//               borderRadius: "3px",
//               cursor: currentPage <= 1 ? "not-allowed" : "pointer",
//             }}
//           >
//             Previous
//           </button>
//           <span style={{ margin: "0 15px", fontWeight: "bold" }}>
//             Page {currentPage} of {totalPages}
//           </span>
//           <button
//             onClick={() => goToPage(currentPage + 1)}
//             disabled={currentPage >= totalPages}
//             style={{
//               padding: "5px 10px",
//               marginLeft: "10px",
//               backgroundColor: currentPage >= totalPages ? "#ccc" : "#007bff",
//               color: "white",
//               border: "none",
//               borderRadius: "3px",
//               cursor: currentPage >= totalPages ? "not-allowed" : "pointer",
//             }}
//           >
//             Next
//           </button>
//         </div>
//       )}
//       <canvas
//         ref={canvasRef}
//         style={{
//           border: "1px solid #000",
//           maxWidth: "100%",
//           display: error ? "none" : "block",
//           borderRadius: "4px",
//           boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
//         }}
//       />
//     </div>
//   );
// } 
__turbopack_context__.s({
    "default": ()=>PDFViewer
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function PDFViewer(param) {
    let { fileUrl } = param;
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pdfjsLib, setPdfjsLib] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [totalPages, setTotalPages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [pdfDoc, setPdfDoc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PDFViewer.useEffect": ()=>{
            const loadPdfjs = {
                "PDFViewer.useEffect.loadPdfjs": async ()=>{
                    try {
                        const pdfjs = await __turbopack_context__.r("[project]/node_modules/pdfjs-dist/build/pdf.mjs [app-client] (ecmascript, async loader)")(__turbopack_context__.i);
                        // Try multiple worker sources
                        const workerSources = [
                            "/pdf.worker.min.js",
                            "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(pdfjs.version, "/pdf.worker.min.js"),
                            "https://unpkg.com/pdfjs-dist@".concat(pdfjs.version, "/build/pdf.worker.min.js")
                        ];
                        // Try to set worker, fallback if needed
                        let workerSet = false;
                        for (const workerSrc of workerSources){
                            try {
                                pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;
                                workerSet = true;
                                break;
                            } catch (e) {
                                console.log(e);
                                console.warn("Failed to set worker: ".concat(workerSrc));
                            }
                        }
                        if (!workerSet) {
                            console.warn("No worker could be set, PDF.js might not work properly");
                        }
                        setPdfjsLib(pdfjs);
                    } catch (err) {
                        console.error("Failed to load PDF.js:", err);
                        setError("Failed to load PDF library");
                    }
                }
            }["PDFViewer.useEffect.loadPdfjs"];
            loadPdfjs();
        }
    }["PDFViewer.useEffect"], []);
    const renderPage = async (pageNum)=>{
        if (!pdfDoc) return;
        try {
            const page = await pdfDoc.getPage(pageNum);
            const viewport = page.getViewport({
                scale: 1.2
            });
            const canvas = canvasRef.current;
            if (!canvas) {
                setError("Canvas not available");
                return;
            }
            const context = canvas.getContext("2d");
            if (!context) {
                setError("Could not get canvas context");
                return;
            }
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            const renderContext = {
                canvasContext: context,
                viewport: viewport
            };
            await page.render(renderContext).promise;
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : "Unknown error";
            console.error("Error rendering page:", err);
            setError("Failed to render page: ".concat(errorMessage));
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PDFViewer.useEffect": ()=>{
            if (!pdfjsLib || !fileUrl) return;
            const loadPDF = {
                "PDFViewer.useEffect.loadPDF": async ()=>{
                    try {
                        setLoading(true);
                        setError(null);
                        const loadingTask = pdfjsLib.getDocument({
                            url: fileUrl,
                            verbosity: 0,
                            // Add CORS headers if needed
                            httpHeaders: {
                                'Access-Control-Allow-Origin': '*'
                            }
                        });
                        const pdf = await loadingTask.promise;
                        setPdfDoc(pdf);
                        setTotalPages(pdf.numPages);
                        setCurrentPage(1);
                        // Render first page
                        const page = await pdf.getPage(1);
                        const viewport = page.getViewport({
                            scale: 1.2
                        });
                        const canvas = canvasRef.current;
                        if (!canvas) {
                            setError("Canvas not available");
                            return;
                        }
                        const context = canvas.getContext("2d");
                        if (!context) {
                            setError("Could not get canvas context");
                            return;
                        }
                        canvas.height = viewport.height;
                        canvas.width = viewport.width;
                        const renderContext = {
                            canvasContext: context,
                            viewport: viewport
                        };
                        await page.render(renderContext).promise;
                        setLoading(false);
                    } catch (err) {
                        const errorMessage = err instanceof Error ? err.message : "Unknown error";
                        console.error("Error loading PDF:", err);
                        setError("Failed to load PDF: ".concat(errorMessage));
                        setLoading(false);
                    }
                }
            }["PDFViewer.useEffect.loadPDF"];
            loadPDF();
        }
    }["PDFViewer.useEffect"], [
        pdfjsLib,
        fileUrl
    ]);
    const goToPage = (pageNum)=>{
        if (pageNum >= 1 && pageNum <= totalPages) {
            setCurrentPage(pageNum);
            renderPage(pageNum);
        }
    };
    if (!pdfjsLib) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                padding: "20px",
                textAlign: "center"
            },
            children: "Loading PDF library..."
        }, void 0, false, {
            fileName: "[project]/src/components/Admin/pdf.tsx",
            lineNumber: 416,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            maxWidth: "800px",
            margin: "0 auto"
        },
        children: [
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "20px",
                    textAlign: "center",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    marginBottom: "10px"
                },
                children: "Loading PDF..."
            }, void 0, false, {
                fileName: "[project]/src/components/Admin/pdf.tsx",
                lineNumber: 422,
                columnNumber: 9
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "20px",
                    textAlign: "center",
                    color: "red",
                    border: "1px solid red",
                    borderRadius: "4px",
                    margin: "10px 0"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/components/Admin/pdf.tsx",
                        lineNumber: 446,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "Try opening directly:",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: fileUrl,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                style: {
                                    color: "#007bff",
                                    textDecoration: "underline",
                                    marginLeft: "5px"
                                },
                                children: "Open PDF"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Admin/pdf.tsx",
                                lineNumber: 449,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Admin/pdf.tsx",
                        lineNumber: 447,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Admin/pdf.tsx",
                lineNumber: 436,
                columnNumber: 9
            }, this),
            totalPages > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "10px",
                    textAlign: "center",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    marginBottom: "10px",
                    backgroundColor: "#f8f9fa"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>goToPage(currentPage - 1),
                        disabled: currentPage <= 1,
                        style: {
                            padding: "5px 10px",
                            marginRight: "10px",
                            backgroundColor: currentPage <= 1 ? "#ccc" : "#007bff",
                            color: "white",
                            border: "none",
                            borderRadius: "3px",
                            cursor: currentPage <= 1 ? "not-allowed" : "pointer"
                        },
                        children: "Previous"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Admin/pdf.tsx",
                        lineNumber: 472,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            margin: "0 15px",
                            fontWeight: "bold"
                        },
                        children: [
                            "Page ",
                            currentPage,
                            " of ",
                            totalPages
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Admin/pdf.tsx",
                        lineNumber: 488,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>goToPage(currentPage + 1),
                        disabled: currentPage >= totalPages,
                        style: {
                            padding: "5px 10px",
                            marginLeft: "10px",
                            backgroundColor: currentPage >= totalPages ? "#ccc" : "#007bff",
                            color: "white",
                            border: "none",
                            borderRadius: "3px",
                            cursor: currentPage >= totalPages ? "not-allowed" : "pointer"
                        },
                        children: "Next"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Admin/pdf.tsx",
                        lineNumber: 492,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Admin/pdf.tsx",
                lineNumber: 462,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                style: {
                    border: "1px solid #000",
                    maxWidth: "100%",
                    display: error ? "none" : "block",
                    borderRadius: "4px",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/Admin/pdf.tsx",
                lineNumber: 510,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Admin/pdf.tsx",
        lineNumber: 420,
        columnNumber: 5
    }, this);
}
_s(PDFViewer, "4DrTG1/pPNG4aTCkdG4hPnL5zBc=");
_c = PDFViewer;
var _c;
__turbopack_context__.k.register(_c, "PDFViewer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Resume/ResumePreview.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// "use client";
// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { motion } from "framer-motion";
// import { FileText, Loader2, AlertCircle, Eye, ExternalLink } from "lucide-react";
// import ThemeSelector from "@/components/Resume/ThemeSelector";
// import { ThemeOption } from "@/components/types/theme";
// import { themeStyles } from "@/components/lib/resumeThemes";
// import PDFViewer from "@/components/Admin/pdf";
// import { 
//   fetchUser, 
//   selectUser, 
//   selectAuthLoading, 
//   selectAuthError,
//   selectIsAuthenticated 
// } from "@/store/slices/authSlices";
// import type { AppDispatch } from "@/store/store";
// // Define more specific types
// interface ResumeObject {
//   _id: string;
//   file?: string;
//   [key: string]: any;
// }
// interface User {
//   id: string;
//   name: string;
//   email: string;
//   role?: string;
//   resume?: string | ResumeObject;
//   [key: string]: any;
// }
// // Type guard for ResumeObject
// function isResumeObject(resume: any): resume is ResumeObject {
//   return typeof resume === 'object' && '_id' in resume;
// }
// // Type guard for ResumeObject with file
// function hasFile(resume: any): resume is { file: string } & ResumeObject {
//   return isResumeObject(resume) && 'file' in resume && typeof resume.file === 'string';
// }
// export default function ResumePreview() {
//   const [theme, setTheme] = useState<ThemeOption>("light");
//   const [showPDFViewer, setShowPDFViewer] = useState(false);
//   const dispatch = useDispatch<AppDispatch>();
//   const user = useSelector(selectUser) as User | null;
//   const isLoading = useSelector(selectAuthLoading);
//   const error = useSelector(selectAuthError);
//   const isAuthenticated = useSelector(selectIsAuthenticated);
//   const getPDFUrl = (filePath: string) => {
//     const baseUrl = process.env.API_URL || 'http://localhost:8000';
//     return filePath.startsWith('http') ? filePath : `${baseUrl}${filePath}`;
//   };
//   useEffect(() => {
//     if (isAuthenticated && !user) {
//       dispatch(fetchUser());
//     }
//   }, [dispatch, isAuthenticated, user]);
//   const renderResumeContent = () => {
//     if (isLoading) {
//       return (
//         <div className="flex items-center justify-center gap-2">
//           <Loader2 className="w-5 h-5 animate-spin" />
//           <p className="text-sm opacity-80">Loading resume...</p>
//         </div>
//       );
//     }
//     if (error) {
//       return (
//         <div className="flex items-center justify-center gap-2 text-red-500">
//           <AlertCircle className="w-5 h-5" />
//           <p className="text-sm">Error loading resume: {error}</p>
//         </div>
//       );
//     }
//     if (!isAuthenticated) {
//       return (
//         <div className="text-center">
//           <p className="text-sm opacity-80">Please log in to view your resume</p>
//         </div>
//       );
//     }
//     if (user?.resume) {
//       const resumeContent = typeof user.resume === 'string' 
//         ? user.resume 
//         : hasFile(user.resume) 
//           ? user.resume.file 
//           : JSON.stringify(user.resume, null, 2);
//       const isPDF = hasFile(user.resume) && user.resume.file.toLowerCase().endsWith('.pdf');
//       return (
//         <div className="text-left space-y-4 overflow-auto max-h-full">
//           <div className="text-sm font-medium">Resume Content:</div>
//           {isResumeObject(user.resume) ? (
//             <div className="space-y-3">
//               <div className="text-xs text-gray-600 bg-gray-50 dark:bg-gray-800 p-2 rounded">
//                 <strong>Resume ID:</strong> {user.resume._id}
//               </div>
//               {hasFile(user.resume) ? (
//                 <div className="space-y-2">
//                   <div className="flex items-center justify-between bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg border border-blue-200 dark:border-blue-800">
//                     <div className="flex items-center gap-2">
//                       <FileText className="w-4 h-4 text-blue-600" />
//                       <span className="text-sm font-medium text-blue-800 dark:text-blue-200">
//                         {user.resume.file.split('/').pop() || 'Resume File'}
//                       </span>
//                     </div>
//                     <div className="flex gap-2">
//                       {isPDF && (
//                         <button
//                           onClick={() => setShowPDFViewer(true)}
//                           className="flex items-center gap-1 px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded transition-colors"
//                         >
//                           <Eye className="w-3 h-3" />
//                           Preview
//                         </button>
//                       )}
//                       <a
//                         href={getPDFUrl(user.resume.file)}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="flex items-center gap-1 px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-xs rounded transition-colors"
//                       >
//                         <ExternalLink className="w-3 h-3" />
//                         Open
//                       </a>
//                     </div>
//                   </div>
//                   <div className="text-xs text-gray-500">
//                     File Path: <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">{user.resume.file}</code>
//                   </div>
//                 </div>
//               ) : (
//                 <div className="text-xs bg-gray-50 dark:bg-gray-800 p-3 rounded">
//                   <div className="font-medium">Resume Object:</div>
//                   <pre className="mt-1 text-xs">{JSON.stringify(user.resume, null, 2)}</pre>
//                 </div>
//               )}
//             </div>
//           ) : (
//             <div className="text-xs bg-gray-50 dark:bg-gray-800 p-3 rounded whitespace-pre-wrap">
//               {resumeContent}
//             </div>
//           )}
//         </div>
//       );
//     }
//     return (
//       <div className="text-center">
//         <p className="text-sm opacity-80">
//           No resume found. Upload or create your resume to see the preview.
//         </p>
//         <p className="text-xs opacity-60 mt-2">
//           Theme: <strong>{theme}</strong>
//         </p>
//       </div>
//     );
//   };
//   if (showPDFViewer && user?.resume && hasFile(user.resume)) {
//     return (
//       <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//         <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
//           <div className="flex items-center justify-between p-4 border-b">
//             <h3 className="text-lg font-semibold">Resume Preview</h3>
//             <button
//               onClick={() => setShowPDFViewer(false)}
//               className="text-gray-500 hover:text-gray-700 text-xl font-bold"
//             >
//               ×
//             </button>
//           </div>
//           <div className="p-4 overflow-auto max-h-[calc(90vh-80px)]">
//             <PDFViewer fileUrl={getPDFUrl(user.resume.file)} />
//           </div>
//         </div>
//       </div>
//     );
//   }
//   return (
//     <motion.div
//       className="p-6 rounded-xl shadow-md space-y-4 h-full"
//       initial={{ opacity: 0, x: 50 }}
//       animate={{ opacity: 1, x: 0 }}
//     >
//       <div className="flex items-center justify-between">
//         <h2 className="text-xl font-semibold flex items-center gap-2">
//           <FileText className="w-5 h-5" /> Resume Preview
//         </h2>
//         <div className="flex items-center gap-2">
//           {user && (
//             <span className="text-sm text-gray-600">
//               {user.name}
//             </span>
//           )}
//           <ThemeSelector onChange={setTheme} />
//         </div>
//       </div>
//       <div
//         className={`rounded-lg border p-4 h-96 flex items-center justify-center transition-all duration-300 ease-in-out ${themeStyles[theme]}`}
//       >
//         {renderResumeContent()}
//       </div>
//       {process.env.NODE_ENV === 'development' && (
//         <div className="text-xs text-gray-500 space-y-1">
//           <div>Auth Status: {isAuthenticated ? 'Authenticated' : 'Not authenticated'}</div>
//           <div>User: {user ? 'Loaded' : 'Not loaded'}</div>
//           <div>Resume: {user?.resume ? (typeof user.resume === 'string' ? 'String format' : 'Object format') : 'Not available'}</div>
//         </div>
//       )}
//     </motion.div>
//   );
// };
__turbopack_context__.s({
    "default": ()=>ResumePreview
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Resume$2f$ThemeSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Resume/ThemeSelector.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lib$2f$resumeThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/lib/resumeThemes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$pdf$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Admin/pdf.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$authSlices$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/slices/authSlices.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function isResumeObject(resume) {
    return typeof resume === 'object' && resume !== null && '_id' in resume;
}
function hasFile(resume) {
    return isResumeObject(resume) && 'file' in resume && typeof resume.file === 'string';
}
function ResumePreview() {
    _s();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("light");
    const [showPDFViewer, setShowPDFViewer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$authSlices$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectUser"]);
    const isLoading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$authSlices$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectAuthLoading"]);
    const error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$authSlices$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectAuthError"]);
    const isAuthenticated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$authSlices$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectIsAuthenticated"]);
    const getPDFUrl = (filePath)=>{
        const baseUrl = 'http://localhost:8000';
        return filePath.startsWith('http') ? filePath : "".concat(baseUrl).concat(filePath);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ResumePreview.useEffect": ()=>{
            if (isAuthenticated && !user) {
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$slices$2f$authSlices$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchUser"])());
            }
        }
    }["ResumePreview.useEffect"], [
        dispatch,
        isAuthenticated,
        user
    ]);
    const renderResumeContent = ()=>{
        if (isLoading) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        className: "w-5 h-5 animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Resume/ResumePreview.tsx",
                        lineNumber: 303,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm opacity-80",
                        children: "Loading resume..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/Resume/ResumePreview.tsx",
                        lineNumber: 304,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Resume/ResumePreview.tsx",
                lineNumber: 302,
                columnNumber: 9
            }, this);
        }
        if (error) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center gap-2 text-red-500",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                        className: "w-5 h-5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Resume/ResumePreview.tsx",
                        lineNumber: 312,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm",
                        children: [
                            "Error loading resume: ",
                            error
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Resume/ResumePreview.tsx",
                        lineNumber: 313,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Resume/ResumePreview.tsx",
                lineNumber: 311,
                columnNumber: 9
            }, this);
        }
        if (!isAuthenticated) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm opacity-80",
                    children: "Please log in to view your resume"
                }, void 0, false, {
                    fileName: "[project]/src/components/Resume/ResumePreview.tsx",
                    lineNumber: 321,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Resume/ResumePreview.tsx",
                lineNumber: 320,
                columnNumber: 9
            }, this);
        }
        if (user === null || user === void 0 ? void 0 : user.resume) {
            let resumeContent;
            let isPDF = false;
            if (typeof user.resume === 'string') {
                resumeContent = user.resume;
            } else if (hasFile(user.resume)) {
                resumeContent = user.resume.file;
                isPDF = user.resume.file.toLowerCase().endsWith('.pdf');
            } else {
                resumeContent = JSON.stringify(user.resume, null, 2);
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-left space-y-4 overflow-auto max-h-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm font-medium",
                        children: "Resume Content:"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Resume/ResumePreview.tsx",
                        lineNumber: 341,
                        columnNumber: 11
                    }, this),
                    isResumeObject(user.resume) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-gray-600 bg-gray-50 dark:bg-gray-800 p-2 rounded",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Resume ID:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Resume/ResumePreview.tsx",
                                        lineNumber: 346,
                                        columnNumber: 17
                                    }, this),
                                    " ",
                                    user.resume._id
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Resume/ResumePreview.tsx",
                                lineNumber: 345,
                                columnNumber: 15
                            }, this),
                            hasFile(user.resume) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg border border-blue-200 dark:border-blue-800",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                        className: "w-4 h-4 text-blue-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Resume/ResumePreview.tsx",
                                                        lineNumber: 353,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-medium text-blue-800 dark:text-blue-200",
                                                        children: user.resume.file.split('/').pop() || 'Resume File'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Resume/ResumePreview.tsx",
                                                        lineNumber: 354,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Resume/ResumePreview.tsx",
                                                lineNumber: 352,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2",
                                                children: [
                                                    isPDF && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setShowPDFViewer(true),
                                                        className: "flex items-center gap-1 px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded transition-colors",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                className: "w-3 h-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Resume/ResumePreview.tsx",
                                                                lineNumber: 365,
                                                                columnNumber: 27
                                                            }, this),
                                                            "Preview"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Resume/ResumePreview.tsx",
                                                        lineNumber: 361,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: getPDFUrl(user.resume.file),
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "flex items-center gap-1 px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-xs rounded transition-colors",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                className: "w-3 h-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Resume/ResumePreview.tsx",
                                                                lineNumber: 376,
                                                                columnNumber: 25
                                                            }, this),
                                                            "Open"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Resume/ResumePreview.tsx",
                                                        lineNumber: 370,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Resume/ResumePreview.tsx",
                                                lineNumber: 359,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Resume/ResumePreview.tsx",
                                        lineNumber: 351,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-gray-500",
                                        children: [
                                            "File Path: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                className: "bg-gray-100 dark:bg-gray-800 px-1 rounded",
                                                children: user.resume.file
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Resume/ResumePreview.tsx",
                                                lineNumber: 383,
                                                columnNumber: 32
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Resume/ResumePreview.tsx",
                                        lineNumber: 382,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Resume/ResumePreview.tsx",
                                lineNumber: 350,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs bg-gray-50 dark:bg-gray-800 p-3 rounded",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-medium",
                                        children: "Resume Object:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Resume/ResumePreview.tsx",
                                        lineNumber: 388,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                        className: "mt-1 text-xs",
                                        children: resumeContent
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Resume/ResumePreview.tsx",
                                        lineNumber: 389,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Resume/ResumePreview.tsx",
                                lineNumber: 387,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Resume/ResumePreview.tsx",
                        lineNumber: 344,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs bg-gray-50 dark:bg-gray-800 p-3 rounded whitespace-pre-wrap",
                        children: resumeContent
                    }, void 0, false, {
                        fileName: "[project]/src/components/Resume/ResumePreview.tsx",
                        lineNumber: 394,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Resume/ResumePreview.tsx",
                lineNumber: 340,
                columnNumber: 9
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm opacity-80",
                    children: "No resume found. Upload or create your resume to see the preview."
                }, void 0, false, {
                    fileName: "[project]/src/components/Resume/ResumePreview.tsx",
                    lineNumber: 404,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs opacity-60 mt-2",
                    children: [
                        "Theme: ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: theme
                        }, void 0, false, {
                            fileName: "[project]/src/components/Resume/ResumePreview.tsx",
                            lineNumber: 408,
                            columnNumber: 18
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Resume/ResumePreview.tsx",
                    lineNumber: 407,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Resume/ResumePreview.tsx",
            lineNumber: 403,
            columnNumber: 7
        }, this);
    };
    if (showPDFViewer && (user === null || user === void 0 ? void 0 : user.resume) && isResumeObject(user.resume) && hasFile(user.resume)) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between p-4 border-b",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold",
                                children: "Resume Preview"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Resume/ResumePreview.tsx",
                                lineNumber: 419,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowPDFViewer(false),
                                className: "text-gray-500 hover:text-gray-700 text-xl font-bold",
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Resume/ResumePreview.tsx",
                                lineNumber: 420,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Resume/ResumePreview.tsx",
                        lineNumber: 418,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 overflow-auto max-h-[calc(90vh-80px)]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Admin$2f$pdf$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            fileUrl: getPDFUrl(user.resume.file)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Resume/ResumePreview.tsx",
                            lineNumber: 428,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Resume/ResumePreview.tsx",
                        lineNumber: 427,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Resume/ResumePreview.tsx",
                lineNumber: 417,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Resume/ResumePreview.tsx",
            lineNumber: 416,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "p-6 rounded-xl shadow-md space-y-4 h-full",
        initial: {
            opacity: 0,
            x: 50
        },
        animate: {
            opacity: 1,
            x: 0
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Resume/ResumePreview.tsx",
                                lineNumber: 443,
                                columnNumber: 11
                            }, this),
                            " Resume Preview"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Resume/ResumePreview.tsx",
                        lineNumber: 442,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-gray-600",
                                children: user.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/Resume/ResumePreview.tsx",
                                lineNumber: 447,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Resume$2f$ThemeSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                onChange: setTheme
                            }, void 0, false, {
                                fileName: "[project]/src/components/Resume/ResumePreview.tsx",
                                lineNumber: 451,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Resume/ResumePreview.tsx",
                        lineNumber: 445,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Resume/ResumePreview.tsx",
                lineNumber: 441,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border p-4 h-96 flex items-center justify-center transition-all duration-300 ease-in-out ".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$lib$2f$resumeThemes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeStyles"][theme]),
                children: renderResumeContent()
            }, void 0, false, {
                fileName: "[project]/src/components/Resume/ResumePreview.tsx",
                lineNumber: 455,
                columnNumber: 7
            }, this),
            ("TURBOPACK compile-time value", "development") === 'development' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xs text-gray-500 space-y-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            "Auth Status: ",
                            isAuthenticated ? 'Authenticated' : 'Not authenticated'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Resume/ResumePreview.tsx",
                        lineNumber: 463,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            "User: ",
                            user ? 'Loaded' : 'Not loaded'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Resume/ResumePreview.tsx",
                        lineNumber: 464,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            "Resume: ",
                            (user === null || user === void 0 ? void 0 : user.resume) ? typeof user.resume === 'string' ? 'String format' : 'Object format' : 'Not available'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Resume/ResumePreview.tsx",
                        lineNumber: 465,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Resume/ResumePreview.tsx",
                lineNumber: 462,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Resume/ResumePreview.tsx",
        lineNumber: 436,
        columnNumber: 5
    }, this);
}
_s(ResumePreview, "BZLxTlpoXHJyY+x4Ws2gc1Hu3aU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = ResumePreview;
var _c;
__turbopack_context__.k.register(_c, "ResumePreview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_f1683c68._.js.map