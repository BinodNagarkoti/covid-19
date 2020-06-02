import React from 'react';
import { Typography, Link } from '@material-ui/core';
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <Typography>
        By{' '}
        <Link underline="none" color="primary" href="https://github.com/BinodNagarkoti">
          Binod Nagarkoti
        </Link>
      </Typography>
      <Typography className={styles.social_link}>
        <IconContext.Provider value={{ color: '#385898', size: '25px' }}>
          <Link underline="none" href="https://www.facebook.com/Binodb/" name="facebook">
            <FaFacebook />
          </Link>
        </IconContext.Provider>
        <IconContext.Provider value={{ color: 'rgb(29, 161, 242)', size: '25px' }}>
          <Link underline="none" href="https://twitter.com/binod1365" name="Twitter">
            <FaTwitter />
          </Link>
        </IconContext.Provider>
        <IconContext.Provider value={{ color: '#003f67', size: '25px' }}>
          <Link
            underline="none"
            href="https://www.linkedin.com/in/binod-nagarkoti-496245128?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B0rrxJXsqT0SQGAfwBMDI7A%3D%3D"
            name="LinkedIn"
          >
            <FaLinkedin />
          </Link>
        </IconContext.Provider>
        <IconContext.Provider value={{ color: 'black', size: '25px' }}>
          <Link underline="none" href="https://github.com/BinodNagarkoti" name="Github">
            <FaGithub />
          </Link>
        </IconContext.Provider>
      </Typography>
      <Typography color="textSecondary"> May 31 2020 </Typography>
    </div>
  );
};
export default Footer;
