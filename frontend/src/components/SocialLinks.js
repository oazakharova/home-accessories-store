import React from 'react';
import { RiYoutubeLine, RiTelegramLine, RiVkLine } from 'react-icons/ri';

import styles from './SocialLinks.module.css';

const SocialLinks = () => {
  return (
    <div className={`${styles.socialLinksWrap} container`}>
      <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
        <RiVkLine />
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
        <RiYoutubeLine />
      </a>
      <a href="https://telegram.org/" target="_blank" rel="noopener noreferrer">
        <RiTelegramLine />
      </a>
    </div>
  );
};

export default SocialLinks;
