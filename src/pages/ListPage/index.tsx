import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import ListItem from '../../components/ListItem';
import { IListItem } from '../../types';
import styles from './index.module.scss';

import data from './data.json';

export const ListPage: React.FC<{}> = () => {
  const [items, setItems] = useState<IListItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setItems(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return (
      <div className={styles.loading}>
        <ReactLoading type="bubbles" color="#fff" />
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      {items.map((item, index) => (
        <ListItem key={`${item.name}-${index}`} {...item} />
      ))}
    </div>
  );
};
