import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
//importamos componente
import MenuSiderWeb from "../components/Web/MenuSiderWeb";
import MenuTopWeb from "../components/Web/MenuTopWeb";
import Footer from "../components/Web/Footer";

import { Layout} from "antd";

import "../scss/LayoutBasic.scss";

export default function LayoutBasic(props) {
  const [collapsed, setCollapsed] = useState(true);
  const { Content } = Layout;
  const { routes } = props;

  return (
    <>
      <MenuSiderWeb collapsed={collapsed} setCollapsed={setCollapsed} />
      <MenuTopWeb />
      <Layout
        className="layout-basic"
        style={{ marginLeft: collapsed ? "80px" : "200px" }}
      >
        <Content className="content">
          <LoadRoutes routes={routes} />
        </Content>
        <Footer />
      </Layout>
    </>
  );
}

//Componente
function LoadRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
}
