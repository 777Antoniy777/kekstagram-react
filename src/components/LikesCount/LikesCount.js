import React from 'react';
import PropTypes from 'prop-types';
import './LikesCount.css';

const LikesCount = ({likes}) => {
  return (
    <span className="Likes-count">{ likes }</span>
  );
}

LikesCount.propTypes = {
  likes: PropTypes.number.isRequired,
};

export default LikesCount;
