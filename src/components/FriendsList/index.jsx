import React from 'react';
import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => (
  <ul class="friend-list">
    {friends.map(friend => (
      <FriendListItem key={friend.id} friend={friend} />
    ))}
  </ul>
);

// FriendList.defaultProps = {
//     friend: PropTypes.shape({
//         avatar: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg",
//     })};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
  friend: PropTypes.shape({
    id: PropTypes.number.isRequired,
    // avatar: PropTypes.string,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};

export default FriendList;
