import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import './CommentsLoader.css';

const CommentsLoader = (props) => {
  const { onSetCommentsCount } = props;

  return (
    // Кнопка для загрузки новой порции комментариев
    <button className="Social__comments-loader Comments-loader" onClick={ onSetCommentsCount } type="button">Загрузить еще</button>
  );
}

CommentsLoader.propTypes = {
  onSetCommentsCount: PropTypes.func,
};

export default connect(
  state => ({
    count: state.commentsCount,
  }),
  dispatch => ({
    onSetCommentsCount: () => {
      dispatch({
        type: 'SET_COUNT',
        count: 5,
      })
    }
  })
)(CommentsLoader);
