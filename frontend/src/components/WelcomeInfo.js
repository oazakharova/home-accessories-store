import React from 'react';

import styles from './WelcomeInfo.module.css';
import welcomeVideo from '../assets/images/welcomeVideo.mp4';

const WelcomeInfo = () => {
  return (
    <div className={styles.welcomeInfoWrap}>
      <h2 className={`grechen-fuemen-regular sectionTitle`}>Enjoy your home</h2>
      <video
        src={welcomeVideo}
        autoPlay
        loop
        muted
        playsInline
        className={styles.welcomeVideo}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default WelcomeInfo;
