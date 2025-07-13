import { Outlet, ScrollRestoration } from "react-router-dom";
import { PageContainer } from "./Layout.styles";

function AdminLayout() {
  return (
    <PageContainer>
      <ScrollRestoration />
      <Outlet />
    </PageContainer>
  );
}

export default AdminLayout;
