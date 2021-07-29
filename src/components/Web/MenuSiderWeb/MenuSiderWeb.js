import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { Menu, Button } from "antd";
import { getMenuApi } from "../../../api/menu";
import { getSubMenuApi } from "../../../api/submenu";
import {
  EnvironmentOutlined,
  PushpinOutlined,
  RightOutlined,
  HomeOutlined,
  PhoneOutlined,
  MenuUnfoldOutlined,
  MenuOutlined,
} from "@ant-design/icons";

import "../../../scss/MenuSiderWeb.scss";

const { SubMenu } = Menu;

function MenuSiderWeb(props) {
  const { collapsed, setCollapsed } = props;
  const [menuData, setMenuData] = useState([]);
  const [subMenuData, setSubMenuData] = useState([]);
  const { location } = props;

  useEffect(() => {
    getMenuApi().then((response) => {
      const arrayMenu = [];
      response.menu.forEach((item) => {
        item.active && arrayMenu.push(item);
      });
      setMenuData(arrayMenu);
    });
  }, []);

  useEffect(() => {
    getSubMenuApi().then((response) => {
      const arraySubMenu = [];
      response.submenu.forEach((item) => {
        item.active && arraySubMenu.push(item);
      });
      setSubMenuData(arraySubMenu);
    });
  }, []);

  return (
    <div className="web-sider-web">
      <Button onClick={() => setCollapsed(!collapsed)}>
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuOutlined)}
      </Button>
      <Menu
        theme="light"
        defaultSelectedKeys={[location.pathname]}
        inlineCollapsed={collapsed}
      >
        <Menu.Item key="1">
          <Link to={"/"}>
            <HomeOutlined />
            <span className="nav-text">Inicio</span>
          </Link>
        </Menu.Item>
        <SubMenu
          title={
            <span>
              <EnvironmentOutlined />
              <span>Departamentos</span>
            </span>
          }
        >
          {subMenuData.map((item) => {
            return (
              <Menu.Item key={item._id} className="menu-sider-web__item">
                <PushpinOutlined />
                <a href={item.url}>{item.title}</a>
              </Menu.Item>
            );
          })}
        </SubMenu>
        {menuData.map((item) => {
          return (
            <Menu.Item key={item._id} className="menu-sider-web__item">
              <RightOutlined />
              <span className="nac-text">
                <a href={item.url}>{item.title}</a>
              </span>
            </Menu.Item>
          );
        })}
        <Menu.Item key="/Contact">
          <Link to={"/Contac"}>
            <PhoneOutlined />
            <span className="nac-text">Contacto</span>
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default withRouter(MenuSiderWeb);
