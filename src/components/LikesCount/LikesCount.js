import React from 'react';
import './LikesCount.css';

const LikesCount = (props) => {
  return (

    <span className="Likes-count">{ props.modalLikes }</span>

  );
}

export default LikesCount;
