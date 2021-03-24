import React from "react";
import Profile from "./components/Profile/Profile";
import user from "./components/Profile/user.json";
import statisticalData from "./components/Statistics/statistical-data.json";
import Statistics from "./components/Statistics";
import friends from "./components/FriendsList/friends.json";
import FriendList from "./components/FriendsList";
import transactions from "./components/Transactions/transactions.json";
import TransactionHistory from "./components/Transactions";

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
