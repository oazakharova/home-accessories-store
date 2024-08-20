import React from 'react';
import Cart from '../components/Cart';

import styles from './CartPage.module.css';

const CartPage = () => {
  return (
    <div className={styles.cartPageWrap}>
      <Cart />
    </div>
  );
};

export default CartPage;
