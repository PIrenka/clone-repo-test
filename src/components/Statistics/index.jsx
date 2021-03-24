import React from "react";
import StatisticItem from "./StatisticItem"

const Statistics = ({ title, stats }) => (
    <section class="statistics">
        <h2 class="title">{title}</h2>
        <ul class="stat-list">{stats.map((stat) => <StatisticItem stat={stat} key={stat.id} />)}</ul>
    </section>
);
export default Statistics