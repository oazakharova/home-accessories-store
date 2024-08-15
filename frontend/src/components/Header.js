import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RiShoppingCart2Line, RiHeartLine } from 'react-icons/ri';

import { CartContext } from '../context/CartContext';

import styles from './Header.module.css';

const Header = () => {
  const { cartItems } = useContext(CartContext);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className={`${styles.headerWrap} container`}>
      <div className={`${styles.logo} grechen-fuemen-regular`}>
        <Link to="/">Home Accessories Store</Link>
      </div>
      <nav>
        <ul className={styles.cartList}>
          <li className={styles.cartLi}>
            <Link to="/favorites">
              <RiHeartLine />
            </Link>
          </li>
          <li className={styles.cartLi}>
            <Link to="/cart">
              <RiShoppingCart2Line />
              <span className={styles.cartQuantity}>{totalItems}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
