import { Outlet } from "react-router-dom";
import AdminFooter from "../Footer/AdminFooter";
import AdminNav from "../Nav/AdminNav";
const AdminLayout = () => {
  return (
    <div>
      <AdminNav />
      <Outlet />
      <AdminFooter />
    </div>
  );
};

export default AdminLayout;
