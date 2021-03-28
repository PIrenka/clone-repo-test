import React from 'react';

import Styles from './friendsListStyles.module.css';
const status = status => {
  return status ? Styles.statusGreen : Styles.statusRed;
};
const FriendListItem = ({ friend }) => (
  <li className={Styles.item}>
    <span className={status(friend.isOnline)}>{friend.isOnline}</span>
    <img
      className={Styles.avatar}
      src={friend.avatar}
      alt={friend.name}
      width="48"
    />
    <p className={Styles.name}>{friend.name}</p>
  </li>
);
export default FriendListItem;
