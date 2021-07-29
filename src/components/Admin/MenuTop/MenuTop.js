import React from "react";
import { Button } from "antd";
import {
  MenuUnfoldOutlined,
  PoweroffOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import RegionalLogo from "../../../assets/img/svg/Regionalonair.svg";
import "antd/dist/antd.css";
//funcion de descoexion
import { logout } from "../../../api/auth";

import "../../../scss/MenuTop.scss";

export default function MenuTop(props) {
  const { menuCollapsed, setMenuCollapsed } = props;

  const logoutUser = () => {
    logout();
    window.location.reload();
  };

  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <Button type="link" style={{ width: "80px" }} onClick={() => setMenuCollapsed(!menuCollapsed)}>
          {React.createElement(
            menuCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined
          )}
        </Button>
        <img
          className="menu-top__left-logo"
          src={RegionalLogo}
          alt="Regional On Air"
        />
      </div>
      <div className="menu-top__right">
        <Button type="link" onClick={logoutUser}>
          <PoweroffOutlined />
        </Button>
      </div>
    </div>
  );
}
