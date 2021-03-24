import React from "react";

const TransactionItem = ({item}) => (<tr>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
        </tr>
        );
export default TransactionItem;