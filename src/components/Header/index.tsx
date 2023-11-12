import React from 'react';
import styles from './index.module.scss';

const Header: React.FC<{}> = () => {
  return (
    <header className={styles.header}>
      <h1>
        <img src={`${process.env.PUBLIC_URL}/logo.svg`} alt="Logo" />
      </h1>
      <span className={styles.title}>LiveLink</span>
    </header>
  );
};

export default Header;
