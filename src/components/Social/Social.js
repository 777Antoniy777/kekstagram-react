import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import './Social.css';
import CommentsLoader from '../CommentsLoader/CommentsLoader';
import LikesCount from '../LikesCount/LikesCount';
import Comment from '../Comment/Comment';

const Social = (props) => {
  const avatarOne = 'avatars/avatar-1.svg';
  const avatarTwo = 'avatars/avatar-6.svg';
  const { likes, description, comments, count } = props;
  const commentsLength = comments.length;
  const commentValues = setCommentValues();
  const visibleComments = showComments();
  const { commentsVisibleCount, commentsVisibleName } = commentValues;

  function showComments() {
    const visibleComments = comments.filter((elem, i) => {
      return i < count;
    });

    return visibleComments;
  }

  function setCommentValues() {
    const partCommentsName = 'комментари';
    let commentsVisibleCount = commentsLength;
    let commentsVisibleName;

    if (count - commentsLength > 0) {
      commentsVisibleName = `${partCommentsName}ев`;

      if (commentsLength >= 2 && commentsLength <= 4) {
        commentsVisibleName = `${partCommentsName}я`;
      }

      if (commentsLength === 1) {
        commentsVisibleName = `${partCommentsName}й`;
      }

    } else {
      commentsVisibleCount = count;
      commentsVisibleName = `${partCommentsName}ев`;
    }

    return {
      commentsVisibleCount,
      commentsVisibleName,
    }
  }

  return (
    // Информация об изображении. Подпись, комментарии, количество лайков
    <div className="Big-picture__social  Social">
      <div className="Social__header">
        <img className="Social__picture" src={ avatarOne } alt="Аватар автора фотографии" width="35" height="35"/>
        <p className="Social__caption">{ description }</p>
        <p className="Social__likes">Нравится

          {/* Количество лайков комментария */}
          <LikesCount likes={ likes } />
        </p>
      </div>

      {/* Комментарии к изображению */}
      <div className="Social__comment-count"><span className="current-comments-count">{ commentsVisibleCount  }</span> из <span className="comments-count">{ commentsLength }</span> { commentsVisibleName }</div>

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
      { count - commentsLength < 0 &&

        <CommentsLoader />

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

Social.propTypes = {
  likes: PropTypes.number,
  description: PropTypes.string,
  comments: PropTypes.array,
  count: PropTypes.number,
};

export default connect(
  state => ({
    count: state.commentsCount,
  })
)(Social);
