import { Layout, theme } from "antd";
import React from "react";
import MenuLeft from "./Elements/MenuLeft";
import MiddleFields from "./Elements/MiddleFields";
import Template1 from "./Elements/Templates/T1";

const { Header, Content, Sider } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer, colorText },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          background: colorBgContainer,
          padding: "0 20px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <img src="/title-dark.png" width={100} alt="Logo" />
      </Header>
      <Layout style={{ display: "flex" }}>
        <Sider
          width={80}
          style={{
            background: colorBgContainer,
            boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
          }}
        >
          <MenuLeft />
        </Sider>
        <Layout style={{ flex: 1, display: "flex", flexDirection: "row" }}>
          <Content
            style={{
              padding: "5px 24px",
              margin: 0,
              minHeight: 280,
              height: "calc(100vh - 65px)",
              maxWidth: 400,
              background: "white",
              color: colorText,
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
              marginRight: 16,
              flex: 1,
              overflow: "auto",
            }}
          >
            <MiddleFields />
          </Content>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              color: colorText,
              height: "calc(100vh - 70px)",
              flex: 1,
            }}
            className="flex justify-center items-start "
          >
            <Template1 />

          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default App;
