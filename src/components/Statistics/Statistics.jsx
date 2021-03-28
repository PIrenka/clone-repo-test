import React from 'react';

import StatisticItem from './StatisticItem';
import PropTypes from 'prop-types';
import Styles from './statistics.module.css';

const Statistics = ({ title, stats }) => (
  <section className={Styles.statistics}>
    <h2 className={Styles.title}>{title}</h2>
    <ul className={Styles.statList}>
      {stats.map(stat => (
        <StatisticItem stat={stat} key={stat.id} />
      ))}
    </ul>
  </section>
);

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object),
  stat: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};

export default Statistics;
