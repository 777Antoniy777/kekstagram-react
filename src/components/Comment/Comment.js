import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

const Comment = ({url, name, message}) => {
  const commentUrl = url.split('/')[1];
  const src = `img/avatars/${commentUrl}`;
  const alt = `Аватар ${name}`;

  return (
    <li className="Social__comment">
      <img className="Social__picture" src={ src } alt={ alt } width="35" height="35"/>
      <p className="Social__text">{ message }</p>
    </li>
  );
}

Comment.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Comment;
