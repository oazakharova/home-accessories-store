import React from 'react';

import styles from './WelcomeInfo.module.css';

const WelcomeInfo = () => {
  return (
    <div className={styles.welcomeInfoWrap}>
      <video
        src="https://videocdn.cdnpk.net/videos/b7b624de-07a7-426f-ab0b-70742b900bbc/horizontal/previews/clear/large.mp4?token=exp=1723742839~hmac=a88c56277a7cb2ff047a6dc1fb5ca10dee9248b272e43e160b8141a9220f4155"
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
