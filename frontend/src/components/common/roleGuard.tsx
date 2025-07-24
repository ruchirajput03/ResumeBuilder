

'use client';

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { selectUserRole } from '@/store/slices/authSlices';
import { AlertTriangle } from 'lucide-react';

interface RoleGuardProps {
  allowedRoles: string[] | string;
  children: React.ReactNode;
  fallback?: React.ReactNode;
  showFallback?: boolean;
  redirectTo?: string;
}

const RoleGuard = ({
  allowedRoles,
  children,
  fallback = null,
  showFallback = true,
  redirectTo,
}: RoleGuardProps) => {
  const router = useRouter();
  const userRole = useSelector(selectUserRole);
  const roles = Array.isArray(allowedRoles) ? allowedRoles : [allowedRoles];
  const hasPermission = userRole ? roles.includes(userRole) : false;

  useEffect(() => {
    if (!hasPermission && redirectTo) {
      router.replace(redirectTo);
    }
  }, [hasPermission, redirectTo, router]);

  if (!hasPermission) {
    if (redirectTo) return null;

    if (!showFallback) return null;

    return fallback || (
      <div className="min-h-96 flex items-center justify-center">
        <div className="text-center p-8">
          <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
            Access Denied
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            You don&apos;t have permission to view this content.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Required role(s): {roles.join(', ')}
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default RoleGuard;
// 'use client';

// import React, { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { useRouter } from 'next/navigation';
// import { selectUserRole } from '@/store/slices/authSlices'; // update path based on your folder structure
// import { AlertTriangle } from 'lucide-react';

// interface RoleGuardProps {
//   allowedRoles: string[] | string;
//   children: React.ReactNode;
//   fallback?: React.ReactNode;
//   showFallback?: boolean;
//   redirectTo?: string; // e.g., "/login" or "/"
// }

// const RoleGuard = ({
//   allowedRoles,
//   children,
//   fallback = null,
//   showFallback = true,
//   redirectTo,
// }: RoleGuardProps) => {
//   const router = useRouter();
//   const userRole = useSelector(selectUserRole);
//   const roles = Array.isArray(allowedRoles) ? allowedRoles : [allowedRoles];
//   const hasPermission = roles.includes(userRole);

//   useEffect(() => {
//     if (!hasPermission && redirectTo) {
//       router.replace(redirectTo);
//     }
//   }, [hasPermission, redirectTo, router]);

//   if (!hasPermission) {
//     if (redirectTo) return null;

//     if (!showFallback) return null;

//     return fallback || (
//       <div className="min-h-96 flex items-center justify-center">
//         <div className="text-center p-8">
//           <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-4" />
//           <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
//             Access Denied
//           </h2>
//           <p className="text-gray-600 dark:text-gray-300">
//             You don&apos;t have permission to view this content.
//           </p>
//           <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
//             Required role(s): {roles.join(', ')}
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return <>{children}</>;
// };

// export default RoleGuard;
