import React from 'react';
import StatisticItem from './StatisticItem';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => (
  <section class="statistics">
    <h2 class="title">{title}</h2>
    <ul class="stat-list">
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
