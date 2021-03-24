import React from "react";
import TransactionItem from './TransactionItem';
import PropTypes from "prop-types";

const TransactionHistory = ({items}) => (<table class="transaction-history">
    <thead>
        <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
        </tr>
    </thead>

    <tbody>
        {items.map((item) => <TransactionItem key={item.id} item={item}/>)}
      </tbody>
</table>);

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