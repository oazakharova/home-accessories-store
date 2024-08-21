import React from 'react';
import { Link } from 'react-router-dom';
import { RiArrowLeftLine } from 'react-icons/ri';

import styles from './Cart.module.css';
import { useCart } from '../context/CartContext';
import CartItem from './CartItem';

const Cart = () => {
  const { cartItems } = useCart();

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalSum = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
    <section className={`${styles.cartWrap} container mb`}>
      <h2 className={`grechen-fuemen-regular sectionTitle`}>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <div className={styles.message}>
          <p className="mb">Your cart is empty.</p>
          <Link to="/">
            <button className={styles.goHomeButton}>
              <RiArrowLeftLine /> <span>Return to Home</span>
            </button>
          </Link>
        </div>
      ) : (
        <div className={styles.shoppingCartWrap}>
          <div className={`${styles.buttonWrap} mb`}>
            <Link to="/">
              <button className={styles.goHomeButton}>
                <RiArrowLeftLine /> <span>Return to Home</span>
              </button>
            </Link>
          </div>
          <div className={styles.mainWrap}>
            <ul className={`${styles.shoppingCartUl} mb`}>
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </ul>
            <div className={styles.totalInfo}>
              <h4 className={styles.totalTitle}>In your cart:</h4>
              <div className={styles.totalQuantityWrap}>
                <h6 className={styles.totalQuantity}>Items:</h6>
                <span>{totalQuantity}</span>
              </div>
              <div className={styles.totalSumWrap}>
                <h6 className={styles.totalSum}>Total sum:</h6>
                <span>${totalSum.toFixed(2)}</span>
              </div>
              <button className={styles.toBuyButton} type="submit">
                buy
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
