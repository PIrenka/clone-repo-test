import React from 'react';

import Stats from './Stats';
import PropTypes from 'prop-types';
import Styles from './styles.module.css';

const Profile = ({ name, tag, location, avatar, stats }) => (
  <div className={Styles.profile}>
    <div className={Styles.description}>
      <img src={avatar} alt="Аватар пользователя" className={Styles.avatar} />
      <p className={Styles.name}>{name}</p>
      <p className={Styles.tag}>@{tag}</p>
      <p className={Styles.location}>{location}</p>
    </div>

    {/* лучше вынести в новый Компонент:
    <ul className={Styles.stats}>
      <li className={Styles.statsItem}>
        <span className={Styles.label}>Followers</span>
        <span className={Styles.quantity}>{stats['followers']}</span>
      </li>
      <li className={Styles.statsItem}>
        <span className={Styles.label}>Views</span>
        <span className={Styles.quantity}>{stats['views']}</span>
      </li>
      <li className={Styles.statsItem}>
        <span className={Styles.label}>Likes</span>
        <span className={Styles.quantity}>{stats['likes']}</span>
      </li>
    </ul> */}

    <Stats {...stats} />
  </div>
);

Profile.defaultProps = {
  avatar:
    // "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
    'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
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
