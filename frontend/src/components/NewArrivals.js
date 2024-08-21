import React, { useContext } from 'react';

import styles from './NewArrivals.module.css';
import { ProductsContext } from '../context/ProductsContext';
import ProductCard from './ProductCard';

const NewArrivals = () => {
  const { products, loading, error } = useContext(ProductsContext);
  const newProducts = products.filter((product) => product.isNew);

  return (
    <section className={`${styles.newArrivalsWrap} container mb`}>
      <h2 className={`grechen-fuemen-regular sectionTitle`}>NewArrivals</h2>
      {loading && <div className={styles.message}>Loading...</div>}
      {error && <div className={styles.message}>{error}</div>}
      {newProducts.length > 0 && (
        <ul className={styles.wrap}>
          {newProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default NewArrivals;
