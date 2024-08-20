import React from 'react';

import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => (
  <li className={styles.productCard}>
    <img
      className={styles.productImg}
      src={`http://localhost:5000/${product.image}`}
      alt={product.name}
    />
    <h5 className={styles.productName}>{product.name}</h5>
    <h6 className={styles.productPrice}>Price: ${product.price}</h6>
    <button className={styles.productButton}>Add to card</button>
    {product.isNew && <div className={styles.isNew}>NEW</div>}
  </li>
);

export default ProductCard;
