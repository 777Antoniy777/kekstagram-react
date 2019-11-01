import React from 'react';
import './Social.css';
import CommentsLoader from '../CommentsLoader/CommentsLoader';
import LikesCount from '../LikesCount/LikesCount';
import Comment from '../Comment/Comment';

const Social = (props) => {
  const avatarOne = 'avatars/avatar-1.svg';
  const avatarTwo = 'avatars/avatar-6.svg';
  const { modalLikes, modalDescription, modalComments, shownCommentsCount, onSetCommentsValue } = props;
  const modalCommentsLength = modalComments.length;
  const commentValues = setCommentValues();
  const visibleComments = showComments();

  /**
   * Set write comments name and comments value
   *
   * @return {object} - object of write values after the condition
   */
  function setCommentValues() {

    let commentsVisibleCount = modalCommentsLength;
    let commentsVisibleName = 'комментариев';

    if (shownCommentsCount - modalCommentsLength > 0) {

      if (modalCommentsLength >= 2 && modalCommentsLength <= 4) {
        commentsVisibleName = 'комментария';
      }

      if (modalCommentsLength === 1) {
        commentsVisibleName = 'комментарий';
      }

    } else {
      commentsVisibleCount = shownCommentsCount;
    }

    return {
      commentsVisibleCount,
      commentsVisibleName,
    }
  }

  /**
   * Add comments into modal
   *
   * @return {array} - array of added comments
   */
  function showComments() {
    const visibleCommentsArr = [];

    if (shownCommentsCount - modalCommentsLength > 0) {
      for (let i = 0; i < modalCommentsLength; i++) {
        let comment = modalComments[i];
        visibleCommentsArr.push(comment)
      }
    } else {
      for (let i = 0; i < shownCommentsCount; i++) {
        let comment = modalComments[i];
        visibleCommentsArr.push(comment)
      }
    }

    return visibleCommentsArr;
  }

  return (

    // Информация об изображении. Подпись, комментарии, количество лайков
    <div className="Big-picture__social  Social">
      <div className="Social__header">
        <img className="Social__picture" src={ avatarOne } alt="Аватар автора фотографии" width="35" height="35"/>
        <p className="Social__caption">{ modalDescription }</p>
        <p className="Social__likes">Нравится

          {/* Количество лайков комментария */}
          <LikesCount modalLikes={ modalLikes } />
        </p>
      </div>

      {/* Комментарии к изображению */}
      <div className="Social__comment-count"><span className="current-comments-count">{ commentValues.commentsVisibleCount }</span> из <span className="comments-count">{ modalCommentsLength }</span> { commentValues.commentsVisibleName }</div>

      <ul className="Social__comments">

        { visibleComments.map((elem, index) =>

          <Comment
            // properties
            key={ index }
            url={ elem.avatar }
            name={ elem.name }
            message={ elem.message }
          />

          )
        }

      </ul>

      {/* Кнопка для загрузки новой порции комментариев */}
      { modalCommentsLength > 5 &&
        shownCommentsCount - modalCommentsLength < 0 &&

        <CommentsLoader
          // properties
          shownCommentsCount={ shownCommentsCount }

          // handlers
          onSetCommentsValue={ onSetCommentsValue }
        />

      }

      {/* Форма для отправки комментария */}
      <div className="Social__footer">
        <img className="Social__picture" src={ avatarTwo } alt="Аватар комментатора фотографии" width="35" height="35"/>
        <input type="text" className="Social__footer-text" placeholder="Ваш комментарий..."/>
        <button type="button" className="Social__footer-btn" name="button">Отправить</button>
      </div>
    </div>

  );
}

export default Social;
