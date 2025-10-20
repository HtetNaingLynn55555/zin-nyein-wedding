import { Layout } from "antd";
let { Footer } = Layout;
const UserFooter = () => {
  console.log("footer render")
  return (
    <Layout>
      <Footer
        style={{ background: "white", color: "gray", textAlign: "center" }}
      >
        2025 @ htetnainglynnhnl@gmail.com
      </Footer>
    </Layout>
  );
};

export default UserFooter;
