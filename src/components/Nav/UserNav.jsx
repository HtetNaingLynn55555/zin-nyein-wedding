import { NavLink } from "react-router-dom";

import { Link } from "react-scroll";
import { useState } from "react";
import { Layout, Menu, Drawer, Button, theme } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const { Header } = Layout;
const items = Array.from({ length: 3 }).map((_, index) => ({
  key: index + 1,
  label: `home ${index + 1}`,
}));

const menuItems = [
  { key: "home", label: "Home" },
  { key: "story", label: "Story" },
  { key: "gallery", label: "Invitation" },
  { key: "contact", label: "Gallery" },
];

const sections = ["Home", "Story", "Invitation", "Gallery"];
const UserNav = () => {
  const [current, setCurrent] = useState("Home");

  const [open, setOpen] = useState(false);
  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  const handleSetActive = (key) => {
    setCurrent(key);
  };
  return (
    <Layout>
      {/* Desktop Menu */}
      <div className="hidden md:block">
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
          <div className=" w-8 hidden sm:block">
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
      </div>

      <div className="md:hidden fixed top-0 left-0 w-full z-[1000] bg-white/90 backdrop-blur-md shadow-sm flex justify-between items-center px-4 py-2">
        <div className="w-5">
          <img src="/images/wedding.png" alt="wedding logo" />
        </div>
        <Button type="text" icon={<MenuOutlined />} onClick={showDrawer} />
      </div>
      <Button type="text" icon={<MenuOutlined />} onClick={showDrawer} />

      <Drawer title="Menu" placement="right" onClose={onClose} open={open}>
        <Menu
          selectedKeys={[current]}
          mode="vertical"
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
                onClick={onClose}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </Menu.Item>
          ))}
        </Menu>
      </Drawer>
    </Layout>
  );
};

export default UserNav;
