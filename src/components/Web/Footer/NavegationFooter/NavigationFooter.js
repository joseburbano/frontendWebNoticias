import React from "react";
import { Row } from "antd";
//importamos los componentes
import { ReactComponent as PlayStoreIcon } from "../../../../assets/img/svg/google-play-download-android-app.svg";
import { ReactComponent as IosStoreIcon } from "../../../../assets/img/svg/available-on-the-app-store.svg";

import "../../../../scss/NavigationFooter.scss";

export default function NavigationFooter() {
  return (
    <Row className="navigation-footer">
        <h3>Disponible en</h3>
        <RenderListLeft />
        <RenderListRight />
      
    </Row>
  );
}

function RenderListLeft() {
  return (
    <div>
      <PlayStoreIcon className="logo-tienda" />
    </div>
  );
}

function RenderListRight() {
  return (
    <div>
      <IosStoreIcon className="logo-tienda"/>
    </div>
  );
}
