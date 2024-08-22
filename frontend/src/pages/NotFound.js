import React from 'react';
import { Link } from 'react-router-dom';
import { RiArrowLeftLine } from 'react-icons/ri';

import styles from './NotFound.module.css';
import notFoundGif from '../assets/images/errorGif.gif';

const NotFound = () => {
  return (
    <div className={`${styles.notFoundWrap} container`}>
      <h1 className={`${styles.notFoundTitle} mb`}>
        Sorry, we can't find this page or something has gone wrong...
      </h1>
      <img className={`${styles.notFoundImg}`} src={notFoundGif} alt=""></img>
      {/* <nav>
        <Link to="/">Home</Link>
        {' | '}
        <Link to="/products">Products</Link>
        {' | '}
        <Link to="/about">About</Link>
      </nav> */}
      <h2>
        <Link to="/">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <RiArrowLeftLine style={{ marginTop: '4px' }} />
            <span style={{ marginLeft: '5px' }}>Go back</span>
          </div>
        </Link>
      </h2>
    </div>
  );
};

export default NotFound;
