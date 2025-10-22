import reactLogo from "./assets/react.svg";
import UserLayout from "./components/Layouts/UserLayout";
import Home from "./components/pages/users/Home";
import About from "./components/pages/users/About";

import { Routes, Route } from "react-router-dom";
import UserNotFound from "./components/pages/users/UserNotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
        </Route>

        <Route path="*" element={<UserNotFound />} />
      </Routes>
    </>
  );
}

export default App;
