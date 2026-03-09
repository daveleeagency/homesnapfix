import { useAdmin } from "@/hooks/useAdmin";
import { AdminLogin } from "@/components/admin/AdminLogin";
import { AdminDashboard } from "@/components/admin/AdminDashboard";
import { Loader2 } from "lucide-react";

export default function AdminPage() {
  const { user, isAdmin, loading, signIn, signOut, resetPassword } = useAdmin();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!user || !isAdmin) {
    return <AdminLogin onSignIn={signIn} onResetPassword={resetPassword} />;
  }

  return <AdminDashboard userEmail={user.email} onSignOut={signOut} />;
}
