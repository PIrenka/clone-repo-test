import React from 'react';

import Styles from './styles.module.css';

const Stats = ({ followers, views, likes }) => (
  <ul className={Styles.stats}>
    <li className={Styles.statsItem}>
      <span className={Styles.label}>Followers</span>
      <span className={Styles.quantity}>{followers}</span>
    </li>
    <li className={Styles.statsItem}>
      <span className={Styles.label}>Views</span>
      <span className={Styles.quantity}>{views}</span>
    </li>
    <li className={Styles.statsItem}>
      <span className={Styles.label}>Likes</span>
      <span className={Styles.quantity}>{likes}</span>
    </li>
  </ul>
);

export default Stats;
