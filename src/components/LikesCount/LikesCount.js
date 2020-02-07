import React from 'react';
import PropTypes from 'prop-types';
import './LikesCount.css';

const LikesCount = (props) => {
  const { likes } = props;

  return (
    <span className="Likes-count">{ likes }</span>
  );
}

LikesCount.propTypes = {
  likes: PropTypes.number,
};

export default LikesCount;
