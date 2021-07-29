import React from 'react';
import { ReactComponent as LogoIcon } from "../../../assets/img/svg/Regionalonair.svg";

import "../../../scss/LogoLinks.scss";

export default function LogoLinks() {
  return (
    <div className="logo-links">
      <a href="/" target="_blank" rel="noopener noreFerrer">
        <LogoIcon />
      </a>
    </div>
  );
}
