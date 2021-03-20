import React from "react";
import PropTypes from "prop-types";
// import defaultImage from "./default.jpg"

const Profile = ({ name, tag, location, avatar, stats }) => (
  <div class="profile">
    <div class="description">
      <img
        src="https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg"
        alt="Аватар пользователя"
        class="avatar"
      />
      <p class="name">Petra Marica</p>
      <p class="tag">@pmarica</p>
      <p class="location">Salvador, Brasil</p>
    </div>

    <ul class="stats">
      <li>
        <span class="label">Followers</span>
        <span class="quantity">1000</span>
      </li>
      <li>
        <span class="label">Views</span>
        <span class="quantity">2000</span>
      </li>
      <li>
        <span class="label">Likes</span>
        <span class="quantity">3000</span>
      </li>
    </ul>
  </div>
);

Profile.defaultProps = {
  avatar:
    "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape,
  //???????????????????????????
  //   PropTypes.shape({
  //     optionalProperty: PropTypes.string,
  //     requiredProperty: PropTypes.number.isRequired
  //   }),
};

export default Profile;
