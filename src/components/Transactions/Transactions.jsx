import React from 'react';

import TransactionItem from './TransactionItem';
import PropTypes from 'prop-types';

import Styles from './transactionStyles.module.css';

const TransactionHistory = ({ items }) => (
  <table className={Styles.transactionHistory}>
    <thead>
      <tr className={Styles.tableTitles}>
        <th className={Styles.tableTitle}>Type</th>
        <th className={Styles.tableTitle}>Amount</th>
        <th className={Styles.tableTitle}>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(item => (
        <TransactionItem key={item.id} item={item} />
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};

export default TransactionHistory;
