import React from 'react';

import Profile from './Profile/Profile';
import Statistics from './Statistics';
import FriendList from './FriendsList';
import TransactionHistory from './Transactions';

import user from '../data/user.json';
import statisticalData from '../data/statistical-data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

const App = () => {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />
      {/* <Statistics stats={statisticalData} /> */}

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
