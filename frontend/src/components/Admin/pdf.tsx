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
"use client";

import { useEffect, useRef, useState } from "react";
import type * as PDFJS from "pdfjs-dist";

interface Props {
  fileUrl: string;
}

type PDFDocumentProxy = PDFJS.PDFDocumentProxy;

export default function PDFViewer({ fileUrl }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [pdfjsLib, setPdfjsLib] = useState<typeof PDFJS | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [pdfDoc, setPdfDoc] = useState<PDFDocumentProxy | null>(null);

  useEffect(() => {
    const loadPdfjs = async () => {
      try {
        const pdfjs = await import("pdfjs-dist");
        
        // Try multiple worker sources
        const workerSources = [
          `/pdf.worker.min.js`, // Local worker (you'll need to copy this to public folder)
          `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`,
          `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`
        ];

        // Try to set worker, fallback if needed
        let workerSet = false;
        for (const workerSrc of workerSources) {
          try {
            pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;
            workerSet = true;
            break;
          } catch (e) {
            console.log(e)
            console.warn(`Failed to set worker: ${workerSrc}`);
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
    };

    loadPdfjs();
  }, []);

  const renderPage = async (pageNum: number) => {
    if (!pdfDoc) return;

    try {
      const page = await pdfDoc.getPage(pageNum);
      const viewport = page.getViewport({ scale: 1.2 });
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
        viewport: viewport,
      };

      await page.render(renderContext).promise;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      console.error("Error rendering page:", err);
      setError(`Failed to render page: ${errorMessage}`);
    }
  };

  useEffect(() => {
    if (!pdfjsLib || !fileUrl) return;

    const loadPDF = async () => {
      try {
        setLoading(true);
        setError(null);

        const loadingTask = pdfjsLib.getDocument({
          url: fileUrl,
          verbosity: 0,
          // Add CORS headers if needed
          httpHeaders: {
            'Access-Control-Allow-Origin': '*',
          },
        });

        const pdf = await loadingTask.promise;
        setPdfDoc(pdf);
        setTotalPages(pdf.numPages);
        setCurrentPage(1);
        
        // Render first page
        const page = await pdf.getPage(1);
        const viewport = page.getViewport({ scale: 1.2 });
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
          viewport: viewport,
        };

        await page.render(renderContext).promise;
        setLoading(false);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Unknown error";
        console.error("Error loading PDF:", err);
        setError(`Failed to load PDF: ${errorMessage}`);
        setLoading(false);
      }
    };

    loadPDF();
  }, [pdfjsLib, fileUrl]);

  const goToPage = (pageNum: number) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
      renderPage(pageNum);
    }
  };

  if (!pdfjsLib) {
    return <div style={{ padding: "20px", textAlign: "center" }}>Loading PDF library...</div>;
  }

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      {loading && (
        <div
          style={{
            padding: "20px",
            textAlign: "center",
            border: "1px solid #ccc",
            borderRadius: "4px",
            marginBottom: "10px",
          }}
        >
          Loading PDF...
        </div>
      )}

      {error && (
        <div
          style={{
            padding: "20px",
            textAlign: "center",
            color: "red",
            border: "1px solid red",
            borderRadius: "4px",
            margin: "10px 0",
          }}
        >
          <p>{error}</p>
          <p>
            Try opening directly:
            <a
              href={fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#007bff", textDecoration: "underline", marginLeft: "5px" }}
            >
              Open PDF
            </a>
          </p>
        </div>
      )}

      {totalPages > 0 && (
        <div
          style={{
            padding: "10px",
            textAlign: "center",
            border: "1px solid #ccc",
            borderRadius: "4px",
            marginBottom: "10px",
            backgroundColor: "#f8f9fa",
          }}
        >
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage <= 1}
            style={{
              padding: "5px 10px",
              marginRight: "10px",
              backgroundColor: currentPage <= 1 ? "#ccc" : "#007bff",
              color: "white",
              border: "none",
              borderRadius: "3px",
              cursor: currentPage <= 1 ? "not-allowed" : "pointer",
            }}
          >
            Previous
          </button>
          
          <span style={{ margin: "0 15px", fontWeight: "bold" }}>
            Page {currentPage} of {totalPages}
          </span>
          
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage >= totalPages}
            style={{
              padding: "5px 10px",
              marginLeft: "10px",
              backgroundColor: currentPage >= totalPages ? "#ccc" : "#007bff",
              color: "white",
              border: "none",
              borderRadius: "3px",
              cursor: currentPage >= totalPages ? "not-allowed" : "pointer",
            }}
          >
            Next
          </button>
        </div>
      )}

      <canvas
        ref={canvasRef}
        style={{
          border: "1px solid #000",
          maxWidth: "100%",
          display: error ? "none" : "block",
          borderRadius: "4px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      />
    </div>
  );
}