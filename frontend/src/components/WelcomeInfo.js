import React from 'react';

import styles from './WelcomeInfo.module.css';

const WelcomeInfo = () => {
  return (
    <div className={styles.welcomeInfoWrap}>
      <h2 className={`grechen-fuemen-regular sectionTitle`}>Enjoy your home</h2>
      <video
        // src="https://videocdn.cdnpk.net/videos/b7b624de-07a7-426f-ab0b-70742b900bbc/horizontal/previews/clear/large.mp4?token=exp=1723742839~hmac=a88c56277a7cb2ff047a6dc1fb5ca10dee9248b272e43e160b8141a9220f4155"
        src="https://videocdn.cdnpk.net/videos/0779359b-08b3-4ea8-b8f6-f19f19316b59/horizontal/previews/clear/large.mp4?token=exp=1724154606~hmac=a1b04bebf57c9e920ddaf9f75e4aa9d104eaec4730e9d90ffcc73af442aad558"
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
