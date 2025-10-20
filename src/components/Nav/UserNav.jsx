import { NavLink } from "react-router-dom";

import { Layout, Menu, theme } from "antd";
const { Header } = Layout;
const items = Array.from({ length: 3 }).map((_, index) => ({
  key: index + 1,
  label: `home ${index + 1}`,
}));

const UserNav = () => {
  console.log(items);
  return (
    <Layout>
      <Header
        style={{
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
          mode="horizontal"
          items={[
            { key: 1, label: "home" },
            { key: 2, label: "story" },
            { key: 3, label: "gallary" },
          ]}
          style={{
            flex: 1,
            background: "",
            justifyContent: "end",
            alignItems: "end",
            minWidth: 0,
            border: 0,
          }}
        />
      </Header>
    </Layout>
  );
};

export default UserNav;
