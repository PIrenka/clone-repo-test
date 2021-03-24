import React from "react";
import TransactionItem from './TransactionItem';

const TransactionHistory = (items) => (<table class="transaction-history">
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

export default TransactionHistory;