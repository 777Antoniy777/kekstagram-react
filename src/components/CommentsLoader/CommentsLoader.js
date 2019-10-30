import React from 'react';
import './CommentsLoader.css';

const CommentsLoader = (props) => {

  // test
  let val = 0;

  function setCommentsValue(val) {
    const { onSetCommentsValue } = props;
    val = val + 5;
    console.log(val)

    onSetCommentsValue(val)

    return val
  }
  val = setCommentsValue;

  return (

    // Кнопка для загрузки новой порции комментариев
    <button className="Social__comments-loader  Comments-loader" onClick={ setCommentsValue } type="button">Загрузить еще</button>

  );
}

export default CommentsLoader;
