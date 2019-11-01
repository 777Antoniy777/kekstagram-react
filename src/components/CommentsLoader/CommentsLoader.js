import React from 'react';
import './CommentsLoader.css';

const CommentsLoader = (props) => {

  /**
   * Handler of pressing comments loader
   */
  function setRealCommentsValue() {
    const { shownCommentsCount, onSetCommentsValue } = props;

    onSetCommentsValue(shownCommentsCount);
  }

  return (

    // Кнопка для загрузки новой порции комментариев
    <button className="Social__comments-loader  Comments-loader" onClick={ setRealCommentsValue } type="button">Загрузить еще</button>

  );
}

export default CommentsLoader;
