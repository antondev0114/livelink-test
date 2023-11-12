import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import axios from 'axios';
import styles from './index.module.scss';
import { ListItemProps } from '../../types';

const AVATAR_URL = 'https://randomuser.me/api/';

const ListItem: React.FC<ListItemProps> = ({ name, role, description }) => {
  const [isDescriptionShown, setIsDescriptionShown] = useState<boolean>(false);
  const [userAvatar, setUserAvatar] = useState<any>(null);

  const handleToggle = () => {
    setIsDescriptionShown((prev) => !prev);
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(AVATAR_URL);
        const userData = response.data.results[0];
        setUserAvatar(userData);
      } catch (err) {
        console.error('Error fetching random user data:', err);
      }
    })();
  }, []);

  return (
    <section className={styles.item}>
      <button
        onClick={handleToggle}
        aria-expanded={isDescriptionShown}
        className={styles.header}
      >
        <img
          src={userAvatar?.picture?.medium || 'default-avatar.svg'}
          className={styles.avatar}
          alt={`${name}'s avatar`}
        />
        <section className={styles.content}>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.role}>{role}</p>
        </section>
      </button>
      <section
        className={classnames(styles.description, {
          [styles.show]: isDescriptionShown,
        })}
        aria-hidden={!isDescriptionShown}
      >
        {description}
      </section>
    </section>
  );
};

export default ListItem;
