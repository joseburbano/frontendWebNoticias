import React from "react";
import { ReactComponent as YoutubeIcon } from "../../../assets/img/svg/youtube.svg";
import { ReactComponent as FacebookIcon } from "../../../assets/img/svg/facebook.svg";
import { ReactComponent as InstagramIcon } from "../../../assets/img/svg/instagram.svg";
import { ReactComponent as TwitterIcon } from "../../../assets/img/svg/twitter.svg";
import { ReactComponent as TelegramaIcon } from "../../../assets/img/svg/telegrama.svg";

import "../../../scss/SocialLinks.scss";

export default function SocialLinks() {
  return (
    <div className="social-links">
      <a href="https://t.me/regionalonair" target="_blank" rel="noopener noreFerrer">
        <TelegramaIcon />
      </a>
      <a href="#" target="_blank" rel="noopener noreFerrer">
        <YoutubeIcon />
      </a>
      <a href="https://www.facebook.com/regionalonair/" target="_blank" rel="noopener noreFerrer">
        <FacebookIcon />
      </a>
      <a href="https://www.instagram.com/regionalonair/?hl=en" target="_blank" rel="noopener noreFerrer">
        <InstagramIcon />
      </a>
      <a href="https://twitter.com/Regionalonair" target="_blank" rel="noopener noreFerrer">
        <TwitterIcon />
      </a>
    </div>
  );
}
