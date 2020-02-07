import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

const Comment = (props) => {
  const { url, name, message } = props;

  const commentUrl = url.split('/')[1];
  const src = `avatars/${commentUrl}`;
  const alt = `Аватар ${name}`;

  return (

    <li className="Social__comment">
      <img className="Social__picture" src={ src } alt={ alt } width="35" height="35"/>
      <p className="Social__text">{ message }</p>
    </li>

  );
}

Comment.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  message: PropTypes.string,
};

export default Comment;
