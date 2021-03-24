import React from "react";
import PropTypes from "prop-types";

const Profile = ({ name, tag, location, avatar, stats }) => (
  <div class="profile">
    <div class="description">
      <img
        src={avatar}
        alt="Аватар пользователя"
        class="avatar"
      />
      <p class="name">{name}</p>
      <p class="tag">@{tag}</p>
      <p class="location">{location}</p>
    </div>

    <ul class="stats">
      <li>
        <span class="label">Followers</span>
        <span class="quantity">{stats["followers"]}</span>
      </li>
      <li>
        <span class="label">Views</span>
        <span class="quantity">{stats["views"]}</span>
      </li>
      <li>
        <span class="label">Likes</span>
        <span class="quantity">{stats["likes"]}</span>
      </li>
    </ul>
  </div>
);

Profile.defaultProps = {
  avatar:
    // "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
    "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg",
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
