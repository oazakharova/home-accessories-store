import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from './Categories.module.css';
import ProductCard from './ProductCard';

const Categories = ({ products, loading, error }) => {
  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <section className={`${styles.categoriesWrap} container `}>
      <h2 className={`grechen-fuemen-regular sectionTitle`}>Categories</h2>
      {loading && <div className={styles.message}>Loading...</div>}
      {error && <div className={styles.message}>{error}</div>}
      {categories.length > 0 && (
        <ul className={styles.categoriesContainer}>
          {categories.map((category, index) => (
            <li className={`${styles.categoryOuterWrap} li mb`} key={index}>
              <Link to={`/category/${category.toLowerCase()}`}>
                <h3>{category}</h3>
              </Link>
              <ul className={styles.categoryInnerWrap}>
                {products
                  .filter((product) => product.category === category)
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Categories;
