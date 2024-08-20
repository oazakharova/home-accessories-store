import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from './Categories.module.css';
import ProductCard from './ProductCard';
import { fetchProducts } from '../utils/api';

const Categories = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();

        const categorySet = new Set();
        data.forEach((item) => categorySet.add(item.category));

        setCategories([...categorySet]);
        setProducts(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <section className={`${styles.categoriesWrap} container `}>
      <h2 className={`grechen-fuemen-regular sectionTitle`}>Categories</h2>
      {loading && <div className={styles.message}>Loading...</div>}
      {error && <div className={styles.message}>{error}</div>}
      {categories.length > 0 && (
        <ul>
          {categories.map((category, index) => (
            <li className={`${styles.categoriesTitle} li`} key={index}>
              <Link to={`/category/${category.toLowerCase()}`}>{category}</Link>
              <div className={styles.categoryProducts}>
                {products
                  .filter((product) => product.category === category)
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Categories;
