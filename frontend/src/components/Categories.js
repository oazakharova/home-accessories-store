import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from './Categories.module.css';
import ProductCard from './ProductCard';
import { fetchProducts } from '../utils/api';

const Categories = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();

      const categorySet = new Set();
      data.forEach((item) => categorySet.add(item.category));
      setCategories([...categorySet]);
      setProducts(data);
    };
    loadProducts();
  }, []);

  return (
    <section className={`${styles.categoriesWrap} container `}>
      <h2 className={`grechen-fuemen-regular sectionTitle`}>Categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li className={`${styles.categoriesTitle} li`} key={index}>
            <Link to={`/category/${category.toLowerCase()}`}>{category}</Link>
            <div className="category-products">
              {products
                .filter((product) => product.category === category)
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Categories;
