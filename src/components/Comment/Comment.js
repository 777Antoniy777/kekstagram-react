import React from 'react';
import './Comment.css';

const Comment = (props) => {
  const commentUrl = props.url.split('/')[1];
  const commentSrc = `avatars/${commentUrl}`;
  const commentAlt = `Аватар ${props.name}`;

  return (

    <li className="Social__comment">
      <img className="Social__picture" src={ commentSrc } alt={ commentAlt } width="35" height="35"/>
      <p className="Social__text">{ props.message }</p>
    </li>

  );
}

export default Comment;
