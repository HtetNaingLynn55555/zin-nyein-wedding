import { Outlet } from "react-router-dom";
import UserFooter from "../Footer/UserFooter";
import UserNav from "../Nav/UserNav";
const UserLayout = () => {
  return (
    <div>
      <UserNav />
      User layout
      <Outlet />
      <UserFooter />
    </div>
  );
};

export default UserLayout;
