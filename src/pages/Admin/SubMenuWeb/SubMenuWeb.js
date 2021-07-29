import React, { useState, useEffect } from "react";
import { getSubMenuApi } from "../../../api/submenu";

//importamos componente
import SubMenuWebList from "../../../components/Admin/SubMenuWeb/SubMenuWebList";

export default function SubMenuWeb() {
  const [submenu, setSubMenu] = useState([]);
  const [reloadSubMenuWeb, setReloadSubMenuWeb] = useState(false);

  useEffect(() => {
    getSubMenuApi().then((response) => {
      setSubMenu(response.submenu);
    });
    setReloadSubMenuWeb(false);
  }, [reloadSubMenuWeb]);

  return (
    <div className="sub-menu-web">
      <SubMenuWebList submenu={submenu} setReloadSubMenuWeb={setReloadSubMenuWeb} />
    </div>
  );
}
