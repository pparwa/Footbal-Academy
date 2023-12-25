import React from "react";
import { Citylogo } from "./Utils/Citylogo";


const Footer = () => {
    return(
        <footer className="bck_blue">
            <div className="footer_logo">
                <Citylogo
                    link={true}
                    linkTo={'/'}
                    width="70px"
                    height="70px"
                />
            </div>
            <div className="footer_descl">
                Manchester city 2021.All rights reserved
            </div>
        </footer> 
    )
}

export default Footer;


