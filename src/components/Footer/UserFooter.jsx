import { Layout } from "antd";
let { Footer } = Layout;
const UserFooter = () => {
  return (
    <Layout>
      <Footer
        style={{ background: "white", color: "gray", textAlign: "center" }}
      >
        <span className="font-secondary">
          Copyright 2025 @ htetnainglynnhnl@gmail.com
        </span>
      </Footer>
    </Layout>
  );
};

export default UserFooter;
