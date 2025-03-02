import { Outlet, ScrollRestoration } from "react-router-dom";
import { PageContainer } from "../Layout.styles";
import AdminHeader from "../header/admin/AdminHeader";

function AdminLayout({ theme, toggleTheme }) {
  return (
    <PageContainer>
      <ScrollRestoration />
      <AdminHeader theme={theme} toggleTheme={toggleTheme} />
      <Outlet context={theme} />
    </PageContainer>
  );
}

export default AdminLayout;
