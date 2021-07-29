import React from 'react';
import LogoWhithe from '../../../../assets/img/svg/Regionalonair.svg';
import SocialLinks from '../../SocialLinks';

import ".././../../../scss/MyInfo.scss";

export default function MyInfo() {
    return (
        <div className="my-info">
        <img src={LogoWhithe} alt="Regional On Air" />
            <h4>Entra en el mundo informativo, todas las noticias de nuestra regiones.</h4>
            <SocialLinks />
        </div>
    )
}