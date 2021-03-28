import React from 'react';

import Styles from './transactionStyles.module.css';

const TransactionItem = ({ item }) => (
  <tr className={Styles.transaction}>
    <td className={Styles.transactionText}>{item.type}</td>
    <td className={Styles.transactionText}>{item.amount}</td>
    <td className={Styles.transactionText}>{item.currency}</td>
  </tr>
);
export default TransactionItem;
