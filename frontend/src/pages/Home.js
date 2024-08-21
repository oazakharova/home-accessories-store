import React from 'react';

import styles from './Home.module.css';
import WelcomeInfo from '../components/WelcomeInfo';
import Categories from '../components/Categories';
import NewArrivals from '../components/NewArrivals';
import EmailForm from '../components/EmailForm';
import SocialLinks from '../components/SocialLinks';

const Home = () => {
  return (
    <div className={`${styles.homeWrap}`}>
      <WelcomeInfo />
      <NewArrivals />
      <Categories />
      <EmailForm />
      <SocialLinks />
    </div>
  );
};

export default Home;
