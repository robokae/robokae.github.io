import { Outlet, ScrollRestoration } from "react-router-dom";
import { PageContainer } from "../Layout.styles";
import AdminHeader from "../header/admin/AdminHeader";

function AdminLayout() {
  return (
    <PageContainer>
      <ScrollRestoration />
      <AdminHeader />
      <Outlet />
    </PageContainer>
  );
}

export default AdminLayout;
