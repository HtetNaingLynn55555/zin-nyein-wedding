import UserNav from "../Nav/UserNav";
import UserFooter from "../Footer/UserFooter";
import { Outlet } from "react-router-dom";
export default function UserLayout() {
  return (
    <div>
      <UserNav />
      <Outlet />
      <UserFooter />
    </div>
  );
}
