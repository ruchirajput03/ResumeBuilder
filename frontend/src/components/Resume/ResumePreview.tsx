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

"use client";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { FileText, Loader2, AlertCircle, Eye, ExternalLink } from "lucide-react";
import ThemeSelector from "@/components/Resume/ThemeSelector";
import { ThemeOption } from "@/components/types/theme";
import { themeStyles } from "@/components/lib/resumeThemes";
import PDFViewer from "@/components/Admin/pdf";
import { 
  fetchUser, 
  selectUser, 
  selectAuthLoading, 
  selectAuthError,
  selectIsAuthenticated 
} from "@/store/slices/authSlices";
import type { AppDispatch } from "@/store/store";

interface ResumeObject {
  _id: string;
  file?: string;
  // Add other known properties here if they exist
  [key: string]: unknown; // Use unknown instead of any for additional properties
}

interface User {
  id: string;
  name: string;
  email: string;
  role?: string;
  resume?: string | ResumeObject;
  // Add other known properties here if they exist
  [key: string]: unknown; // Use unknown instead of any for additional properties
}

function isResumeObject(resume: unknown): resume is ResumeObject {
  return typeof resume === 'object' && resume !== null && '_id' in resume;
}

function hasFile(resume: unknown): resume is { file: string } & ResumeObject {
  return isResumeObject(resume) && 'file' in resume && typeof resume.file === 'string';
}

export default function ResumePreview() {
  const [theme, setTheme] = useState<ThemeOption>("light");
  const [showPDFViewer, setShowPDFViewer] = useState(false);
  
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector(selectUser) as User | null;
  const isLoading = useSelector(selectAuthLoading);
  const error = useSelector(selectAuthError);
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const getPDFUrl = (filePath: string) => {
    const baseUrl =  'http://localhost:8000';
    return filePath.startsWith('http') ? filePath : `${baseUrl}${filePath}`;
  };

  useEffect(() => {
    if (isAuthenticated && !user) {
      dispatch(fetchUser());
    }
  }, [dispatch, isAuthenticated, user]);

  const renderResumeContent = () => {
    if (isLoading) {
      return (
        <div className="flex items-center justify-center gap-2">
          <Loader2 className="w-5 h-5 animate-spin" />
          <p className="text-sm opacity-80">Loading resume...</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="flex items-center justify-center gap-2 text-red-500">
          <AlertCircle className="w-5 h-5" />
          <p className="text-sm">Error loading resume: {error}</p>
        </div>
      );
    }

    if (!isAuthenticated) {
      return (
        <div className="text-center">
          <p className="text-sm opacity-80">Please log in to view your resume</p>
        </div>
      );
    }

    if (user?.resume) {
      let resumeContent: string;
      let isPDF = false;

      if (typeof user.resume === 'string') {
        resumeContent = user.resume;
      } else if (hasFile(user.resume)) {
        resumeContent = user.resume.file;
        isPDF = user.resume.file.toLowerCase().endsWith('.pdf');
      } else {
        resumeContent = JSON.stringify(user.resume, null, 2);
      }

      return (
        <div className="text-left space-y-4 overflow-auto max-h-full">
          <div className="text-sm font-medium">Resume Content:</div>
          
          {isResumeObject(user.resume) ? (
            <div className="space-y-3">
              <div className="text-xs text-gray-600 bg-gray-50 dark:bg-gray-800 p-2 rounded">
                <strong>Resume ID:</strong> {user.resume._id}
              </div>
              
              {hasFile(user.resume) ? (
                <div className="space-y-2">
                  <div className="flex items-center justify-between bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-800 dark:text-blue-200">
                        {user.resume.file.split('/').pop() || 'Resume File'}
                      </span>
                    </div>
                    
                    <div className="flex gap-2">
                      {isPDF && (
                        <button
                          onClick={() => setShowPDFViewer(true)}
                          className="flex items-center gap-1 px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded transition-colors"
                        >
                          <Eye className="w-3 h-3" />
                          Preview
                        </button>
                      )}
                      
                      <a
                        href={getPDFUrl(user.resume.file)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-xs rounded transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Open
                      </a>
                    </div>
                  </div>
                  
                  <div className="text-xs text-gray-500">
                    File Path: <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">{user.resume.file}</code>
                  </div>
                </div>
              ) : (
                <div className="text-xs bg-gray-50 dark:bg-gray-800 p-3 rounded">
                  <div className="font-medium">Resume Object:</div>
                  <pre className="mt-1 text-xs">{resumeContent}</pre>
                </div>
              )}
            </div>
          ) : (
            <div className="text-xs bg-gray-50 dark:bg-gray-800 p-3 rounded whitespace-pre-wrap">
              {resumeContent}
            </div>
          )}
        </div>
      );
    }

    return (
      <div className="text-center">
        <p className="text-sm opacity-80">
          No resume found. Upload or create your resume to see the preview.
        </p>
        <p className="text-xs opacity-60 mt-2">
          Theme: <strong>{theme}</strong>
        </p>
      </div>
    );
  };

  if (showPDFViewer && user?.resume && isResumeObject(user.resume) && hasFile(user.resume)) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="text-lg font-semibold">Resume Preview</h3>
            <button
              onClick={() => setShowPDFViewer(false)}
              className="text-gray-500 hover:text-gray-700 text-xl font-bold"
            >
              ×
            </button>
          </div>
          <div className="p-4 overflow-auto max-h-[calc(90vh-80px)]">
            <PDFViewer fileUrl={getPDFUrl(user.resume.file)} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="p-6 rounded-xl shadow-md space-y-4 h-full"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <FileText className="w-5 h-5" /> Resume Preview
        </h2>
        <div className="flex items-center gap-2">
          {user && (
            <span className="text-sm text-gray-600">
              {user.name}
            </span>
          )}
          <ThemeSelector onChange={setTheme} />
        </div>
      </div>

      <div
        className={`rounded-lg border p-4 h-96 flex items-center justify-center transition-all duration-300 ease-in-out ${themeStyles[theme]}`}
      >
        {renderResumeContent()}
      </div>

      {process.env.NODE_ENV === 'development' && (
        <div className="text-xs text-gray-500 space-y-1">
          <div>Auth Status: {isAuthenticated ? 'Authenticated' : 'Not authenticated'}</div>
          <div>User: {user ? 'Loaded' : 'Not loaded'}</div>
          <div>Resume: {user?.resume ? (typeof user.resume === 'string' ? 'String format' : 'Object format') : 'Not available'}</div>
        </div>
      )}
    </motion.div>
  );
}