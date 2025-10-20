import { Outlet } from "react-router-dom";
import UserFooter from "../Footer/UserFooter";
import UserNav from "../Nav/UserNav";
const UserLayout = () => {
  return (
    <div className="m-0 p-0">
      <UserNav />
      User layout
      <Outlet />
      <UserFooter />
    </div>
  );
};

export default UserLayout;
