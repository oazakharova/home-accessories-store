import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductsContext } from '../context/ProductsContext';

import styles from './ProductDetail.module.css';
import { useCart } from '../context/CartContext';
import NotFound from './NotFound';

const ProductDetail = () => {
  const { id } = useParams();
  const { products } = useContext(ProductsContext);
  const { addToCart } = useCart();

  const product = products.find((product) => product.id === parseInt(id));
  if (!product) {
    return <NotFound />;
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className={`${styles.productDetailWrap} container`}>
      <div className={styles.productImages}>
        <img
          className={styles.productImg}
          src={`http://localhost:5000/${product.image}`}
          alt={product.name}
        />
        <img
          className={styles.productImg}
          src={`http://localhost:5000/${product.image}`}
          alt={product.name}
        />
        <img
          className={styles.productImg}
          src={`http://localhost:5000/${product.image}`}
          alt={product.name}
        />
        <img
          className={styles.productImg}
          src={`http://localhost:5000/${product.image}`}
          alt={product.name}
        />
      </div>
      <div className={styles.productInfo}>
        <h1 className={styles.productName}>{product.name}</h1>
        <p className={styles.productDescription}>{product.fullDescription}</p>
        <h2 className={styles.productPrice}>${product.price}</h2>
        <button
          onClick={handleAddToCart}
          className={styles.productButton}
          disabled={product.quantity === 0}
        >
          {product.quantity > 0 ? 'Add to cart' : 'Out of stock'}
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
