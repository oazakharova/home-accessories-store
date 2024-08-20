import React from 'react';
import { useCart } from '../context/CartContext';

import styles from './CartItem.module.css';

const CartItem = ({ item }) => {
  const { removeFromCart } = useCart();

  return (
    <li className={styles.cartItem}>
      <img
        className={styles.cartItemImg}
        src={`http://localhost:5000/${item.image}`}
        alt={item.name}
      />
      <div className={styles.cartItemDetails}>
        <h5 className={styles.cartItemName}>{item.name}</h5>
        <h6 className={styles.cartItemPrice}>Price: ${item.price}</h6>
        <p className={styles.cartItemQuantity}>Quantity: {item.quantity}</p>
      </div>
      <button
        className={styles.removeButton}
        onClick={() => removeFromCart(item.id)} // Удаление товара из корзины
      >
        Remove
      </button>
    </li>
  );
};

export default CartItem;
