import React from 'react';

import { useCart } from '../context/CartContext';
import styles from './CartItem.module.css';

const CartItem = ({ item }) => {
  const { removeFromCart, updateCartItemQuantity } = useCart();

  const increaseQuantity = () => {
    updateCartItemQuantity(item.id, item.quantity + 1);
  };

  const decreaseQuantity = () => {
    if (item.quantity > 1) {
      updateCartItemQuantity(item.id, item.quantity - 1);
    }
  };

  return (
    <li className={`${styles.cartItem} li`}>
      <img
        className={styles.cartItemImg}
        src={`http://localhost:5000/${item.image}`}
        alt={item.name}
      />
      <div>
        <h5 className={styles.cartItemName}>
          <span>{item.name}</span>
        </h5>
        <h6 className={styles.cartItemPrice}>
          Price: <span>${item.price}</span>
        </h6>
        <h6 className={styles.cartItemQuantity}>
          <div className={styles.cartQuantityOuterWrap}>
            Quantity:
            <div className={styles.cartQuantityInnerWrap}>
              <button
                className={styles.quantityButton}
                onClick={decreaseQuantity}
                disabled={item.quantity === 1}
              >
                -
              </button>
              <input
                type="text"
                className={styles.quantityInput}
                value={item.quantity}
                readOnly
              />
              <button
                className={styles.quantityButton}
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
          </div>
        </h6>
      </div>
      <button
        className={styles.removeButton}
        onClick={() => removeFromCart(item.id)}
      >
        x
      </button>
    </li>
  );
};

export default CartItem;
