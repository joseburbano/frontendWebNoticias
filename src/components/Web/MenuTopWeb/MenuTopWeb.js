import React from "react";
import "antd/dist/antd.css";
import SocialLinks from "../SocialLinks";
import LogoLinks from "../LogoLinks";

import "../../../scss/MenuTopWeb.scss";

export default function MenuTopWeb() {

  return (
    <div className="menu-top-web">
        <LogoLinks className="menu-top-web__left-web"/>
      <SocialLinks className="menu-top-web__right-web " />
    </div>
  );
}
