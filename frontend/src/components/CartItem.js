import React from 'react';
import { useCart } from '../context/CartContext';

import styles from './CartItem.module.css';

const CartItem = ({ item }) => {
  const { removeFromCart } = useCart();

  return (
    <li className={`${styles.cartItem} li`}>
      <img
        className={styles.cartItemImg}
        src={`http://localhost:5000/${item.image}`}
        alt={item.name}
      />
      {/* <div className={styles.cartItemDetails}> */}
      <div>
        <h5 className={styles.cartItemName}>
          <span>{item.name}</span>
        </h5>
        <h6 className={styles.cartItemPrice}>
          Price: <span>${item.price}</span>
        </h6>
        <h6 className={styles.cartItemQuantity}>
          Quantity: <span>{item.quantity}</span>
        </h6>
      </div>
      <button
        className={styles.removeButton}
        onClick={() => removeFromCart(item.id)}
      >
        x
      </button>
      {/* </div> */}
    </li>
  );
};

export default CartItem;
