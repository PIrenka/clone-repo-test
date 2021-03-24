import React from "react";
import FriendListItem from "./FriendListItem"

const FriendList = ({ friends }) =>(
    <ul class="friend-list" >{friends.map((friend) => <FriendListItem key={friend.id} friend={friend}/>)}</ul>);

export default FriendList
