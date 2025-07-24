// components/ProtectedRoute.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { fetchUser } from "@/store/slices/authSlices";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function  ProtectedRoute({ 
  children 
}: ProtectedRouteProps) {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { user, isLoading } = useSelector((state: RootState) => state.auth);
  const [isChecking, setIsChecking] = useState(true);
  const [retryCount, setRetryCount] = useState(0);
console.log(user,"checking user available")
  useEffect(() => {
    const checkAuth = async () => {
      try {
        if (!user) {
            console.log("can't find the admin now i am fetching admin details")
          await dispatch(fetchUser()).unwrap();
        }else{
            console.log("we have already admin details")
        }
        setIsChecking(false);
      } catch (error) {

        console.log(error)
        if (retryCount < 3) {
          setTimeout(() => {
            setRetryCount(prev => prev + 1);
          }, 1000);
        } else {
         console.log(user)
          setIsChecking(false);
          router.push("/login");
        }
      }
    };
    
    if (isChecking) {
      checkAuth();
    }else{
        console.log("can't check becouse limit exceed")
    }
  }, [user, dispatch, router, isChecking, retryCount]);
  
  if (isChecking || isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#215979]"></div>
      </div>
    );
  }
  
  // If authenticated, render the children without role checking
  return <>{children}</>;
}

// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { useDispatch, useSelector } from "react-redux";
// import { AppDispatch, RootState } from "@/redux/store";
// import { fetchUser } from "@/redux/action/authAction";

// interface ProtectedRouteProps {
//   children: React.ReactNode;
// }

// export default function ProtectedRoute({ children }: ProtectedRouteProps) {
//   const router = useRouter();
//   const dispatch = useDispatch<AppDispatch>();
//   const { admin, loading } = useSelector((state: RootState) => state.admin);
//   const [isChecking, setIsChecking] = useState(true);
//   const [retryCount, setRetryCount] = useState(0);
  
//   useEffect(() => {
//     const checkAuth = async () => {
//       try {
//         // Always attempt to fetch user data
//         await dispatch(fetchUser()).unwrap();
        
//         // If we successfully fetched user but don't have admin data,
//         // we might need to retry
//         if (!admin && retryCount < 3) {
//           console.log(`Retry attempt ${retryCount + 1}: Waiting for admin data...`);
//           setTimeout(() => {
//             setRetryCount(prev => prev + 1);
//           }, 1000);
//           return; // Don't finish checking yet
//         }
        
//         setIsChecking(false);
//       } catch (error) {
//         console.log("Auth error:", error);
        
//         // On error, retry a few times (might be temporary)
//         if (retryCount < 3) {
//           console.log(`Retry attempt ${retryCount + 1}: Error fetching user`);
//           setTimeout(() => {
//             setRetryCount(prev => prev + 1);
//           }, 1000);
//         } else {
//           // After max retries, finish checking and redirect
//           console.log("Max retries reached, redirecting to login");
//           setIsChecking(false);
//           router.push("/login");
//         }
//       }
//     };
    
//     if (isChecking) {
//       checkAuth();
//     }
//   }, [admin, dispatch, router, isChecking, retryCount]);
  
//   // Show loading while checking
//   if (isChecking || loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#215979]"></div>
//       </div>
//     );
//   }
  
//   // After checking is complete, verify we have admin data
//   if (!admin) {
//     console.log("No admin data after all checks, redirecting to login");
//     router.push("/login");
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#215979]"></div>
//       </div>
//     );
//   }
  
//   // If we have admin data, render the protected content
//   return <>{children}</>;
// }