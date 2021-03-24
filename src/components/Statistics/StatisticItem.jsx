import React from "react";

const StatisticItem = ({ stat }) => (
  <li class="item">
    <span class="label">{stat.label}</span>
    <span class="percentage">{stat.percentage}</span>
  </li>
);
export default StatisticItem;
