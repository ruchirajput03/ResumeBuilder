import AdminPanel from "@/components/Admin/AdminPanel";
import RoleGuard from "@/components/common/roleGuard";

export default function AdminPage() {
  return (
    <RoleGuard allowedRoles="admin" redirectTo="/login">
      <AdminPanel />
      </RoleGuard>
  );
}
