import { NavLink } from "react-router-dom";

import { Link } from "react-scroll";
import { useState } from "react";
import { Layout, Menu, theme } from "antd";
const { Header } = Layout;
const items = Array.from({ length: 3 }).map((_, index) => ({
  key: index + 1,
  label: `home ${index + 1}`,
}));

const sections = ["Home", "Story", "Invitation", "Gallery"];
const UserNav = () => {
  const [current, setCurrent] = useState("Home");

  const handleSetActive = (key) => {
    setCurrent(key);
  };
  return (
    <Layout>
      <Header
        style={{
          position: "fixed",
          opacity: 0.9,
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          background: "white",
          color: "black",
        }}
      >
        <div className=" w-8">
          <img src="/public/images/wedding.png" alt="" />
        </div>
        <Menu
          selectedKeys={[current]}
          mode="horizontal"
          style={{
            flex: 1,
            fontFamily: "Poppins",

            justifyContent: "end",
            alignItems: "end",
            minWidth: 0,
            border: 0,
          }}
        >
          {sections.map((section) => (
            <Menu.Item key={section}>
              <Link
                to={section}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onSetActive={handleSetActive}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </Menu.Item>
          ))}
        </Menu>
      </Header>
    </Layout>
  );
};

export default UserNav;
