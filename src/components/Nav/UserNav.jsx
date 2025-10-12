import { NavLink } from "react-router-dom";
const UserNav = () => {
  return (
    <div>
      Nav Bar for User
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/about"}>About</NavLink>
    </div>
  );
};

export default UserNav;
