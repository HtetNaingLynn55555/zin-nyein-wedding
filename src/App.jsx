import reactLogo from "./assets/react.svg";
import UserLayout from "./components/Layouts/UserLayout";
import Home from "./components/pages/users/Home";
import About from "./components/pages/users/About";

import viteLogo from "/vite.svg";

import { Routes, Route } from "react-router-dom";
import AdminLayout from "./components/Layouts/AdminLayout";
import User from "./components/pages/admin/User";
import Dashboard from "./components/pages/admin/Dashboard";
import UserNotFound from "./components/pages/users/UserNotFound";
import AdminNotFound from "./components/pages/admin/AdminNotFound";

function App() {
  return (
    <>
      <Routes>
        {/* User Route */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>

        {/* Admin Route */}

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="user" element={<User />} />
          {/* <Route path="*" element={<AdminNotFound />} /> */}
        </Route>
        <Route path="/admin/*" element={<AdminNotFound />} />
        <Route path="*" element={<UserNotFound />} />
      </Routes>
    </>
  );
}

export default App;
