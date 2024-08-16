import React from 'react';

import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => (
  <div className={styles.productCard}>
    <img
      className={styles.productImg}
      src={`http://localhost:5000/${product.image}`}
      alt={product.name}
    />
    <h5 className={styles.productName}>{product.name}</h5>
    <h6 className={styles.productPrice}>Price: ${product.price}</h6>
  </div>
);

export default ProductCard;
