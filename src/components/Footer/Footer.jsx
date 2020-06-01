import React, { Component } from "react";
import {Typography} from '@material-ui/core'
import styles from './Footer.module.css'

import { FaFacebook,FaTwitter,FaGithub,FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";
const Footer=()=>{
return (

    <div className={styles.container}>
        <Typography> By <a href='https://github.com/BinodNagarkoti'>Binod Nagarkoti</a></Typography>
        <Typography className={styles.social_link}>
            <IconContext.Provider value={{ color: "#385898", size:'25px'}}>
            <a href="https://www.facebook.com/Binodb/"><FaFacebook/></a>
            </IconContext.Provider >
            <IconContext.Provider value={{ color: "rgb(29, 161, 242)", size:'25px'}}>
            <a href="https://twitter.com/binod1365"><FaTwitter/></a>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "#003f67", size:'25px'}}>
            <a href="https://www.linkedin.com/in/binod-nagarkoti-496245128?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B0rrxJXsqT0SQGAfwBMDI7A%3D%3D"><FaLinkedin /></a>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "black", size:'25px'}}>
            <a href="https://github.com/BinodNagarkoti"><FaGithub /></a>
            </IconContext.Provider>
            </Typography>
            <Typography color='textSecondary' > May 31 2020 </Typography>
    </div>
)

}
export default Footer