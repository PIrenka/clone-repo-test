import React from 'react';

import Styles from './statisticItem.module.css';
import randomBgrColor from './getRandomBgrColor';

const StatisticItem = ({ stat }) => (
  <li
    className={Styles.item}
    style={{
      backgroundColor: randomBgrColor(),
    }}
  >
    <span className={Styles.label}>{stat.label}</span>
    <span className={Styles.percentage}>{stat.percentage}%</span>
  </li>
);
export default StatisticItem;
