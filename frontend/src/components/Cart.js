import React from 'react';
import { useCart } from '../context/CartContext';
import CartItem from './CartItem';

import styles from './Cart.module.css';

const Cart = () => {
  const { cartItems } = useCart();

  return (
    <div className={styles.cart}>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className={styles.cartList}>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
