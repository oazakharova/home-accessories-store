import React from 'react';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={`${styles.footerWrap} container`}>
      <p>&copy; 2024 Home Accessories Store. All rights reserved.</p>
    </div>
  );
};

export default Footer;
