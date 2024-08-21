import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './ProductCard.module.css';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [showGoToCart, setShowGoToCart] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setShowGoToCart(true);
    setTimeout(() => {
      setShowGoToCart(false);
    }, 4000);
  };

  return (
    <li className={styles.productCard}>
      <img
        className={styles.productImg}
        src={`http://localhost:5000/${product.image}`}
        alt={product.name}
      />
      <h5 className={styles.productName}>{product.name}</h5>
      <h6 className={styles.productPrice}>Price: ${product.price}</h6>
      {/* <button onClick={handleAddToCart} className={styles.productButton}>
        Add to card
      </button> */}
      {showGoToCart ? (
        <button className={styles.productButton}>
          <Link to="/cart">Go to cart </Link>
        </button>
      ) : (
        <button onClick={handleAddToCart} className={styles.productButton}>
          Add to cart
        </button>
      )}
      {product.isNew && <div className={styles.isNew}>NEW</div>}
    </li>
  );
};

export default ProductCard;
