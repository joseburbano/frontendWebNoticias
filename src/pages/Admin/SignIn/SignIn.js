import React from "react";
import { Layout, Tabs } from "antd";
import { Redirect } from "react-router-dom";
import Logo from "../../../assets/img/svg/Regionalonair.svg";
import { getAccessTokenApi } from "../../..//api/auth";

import "../../../scss/SignIn.scss";
import LoginForm from "../../../components/Admin/LoginForm";

export default function SignIn() {
  const { Content } = Layout;
  const { TabPane } = Tabs;

  if (getAccessTokenApi()) {
    return <Redirect to="/admin" />;
  }

  return (
    <Layout className="sign-in">
      <Content className="sign-in__content">
        <h1 className="sign-in__content-logo">
          <img src={Logo} alt="Regionalonair" />
        </h1>
        <div className="sign-in__content-tabs">
          <Tabs type="card">
            <TabPane tab={<span>Iniciar Sesión</span>} key="1">
              <LoginForm />
            </TabPane>
          </Tabs>
        </div>
      </Content>
    </Layout>
  );
}
