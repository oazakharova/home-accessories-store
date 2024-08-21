import React from 'react';
import { RiYoutubeLine, RiTelegramLine, RiVkLine } from 'react-icons/ri';

import styles from './SocialLinks.module.css';

const SocialLinks = () => {
  return (
    <section className={`${styles.socialLinksWrap} container mb`}>
      <h2 className={`grechen-fuemen-regular sectionTitle`}>Our socials</h2>
      <div>
        <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
          <RiVkLine />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <RiYoutubeLine />
        </a>
        <a
          href="https://telegram.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiTelegramLine />
        </a>
      </div>
    </section>
  );
};

export default SocialLinks;
