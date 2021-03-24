import React from "react";
import PropTypes from "prop-types";
import StatisticItem from "./StatisticItem";

const Statistics = ({ title, stats }) => (
  <section class="statistics">
    <h2 class="title">Upload stats</h2>
    <ul class="stat-list">
      {stats.map((stat) => (
        <StatisticItem key={stat.id} stat={stat} />
      ))}
    </ul>
  </section>
);
Statistics.defaultProps = {
  title: null,
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
