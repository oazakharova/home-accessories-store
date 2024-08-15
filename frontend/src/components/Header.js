import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

import { CartContext } from '../context/CartContext';

import styles from './Header.module.css';

const Header = () => {
  const { cartItems } = useContext(CartContext);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className={`${styles.headerWrap} container`}>
      <div className={styles.logo}>
        <Link to="/">Home Accessories Store</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/cart">
              <FaShoppingCart />
              Cart ({totalItems})
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
