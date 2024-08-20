import React, { useContext } from 'react';

import styles from './Home.module.css';
import WelcomeInfo from '../components/WelcomeInfo';
import Categories from '../components/Categories';
import NewArrivals from '../components/NewArrivals';
import EmailForm from '../components/EmailForm';
import SocialLinks from '../components/SocialLinks';
import { ProductsContext } from '../context/ProductsContext';

const Home = () => {
  const { products, loading, error } = useContext(ProductsContext);

  return (
    <div className={`${styles.homeWrap}`}>
      <WelcomeInfo />
      <Categories products={products} loading={loading} error={error} />
      <NewArrivals products={products.filter((product) => product.isNew)} />
      <EmailForm />
      <SocialLinks />
    </div>
  );
};

export default Home;
