import React from 'react';
import './Social.css';
import CommentsLoader from '../CommentsLoader/CommentsLoader';
import LikesCount from '../LikesCount/LikesCount';
import Comment from '../Comment/Comment';

const Social = (props) => {
  const avatarOne = 'avatars/avatar-1.svg';
  const avatarTwo = 'avatars/avatar-6.svg';

  return (

    // Информация об изображении. Подпись, комментарии, количество лайков
    <div className="Big-picture__social  Social">
      <div className="Social__header">
        <img className="Social__picture" src={ avatarOne } alt="Аватар автора фотографии" width="35" height="35"/>
        <p className="Social__caption">{ props.modalDescription }</p>
        <p className="Social__likes">Нравится

          {/* Количество лайков комментария */}
          <LikesCount modalLikes={ props.modalLikes } />
        </p>
      </div>

      {/* <!-- Комментарии к изображению --> */}
      <div className="Social__comment-count"><span className="current-comments-count">5</span> из <span className="comments-count">{ props.modalComments.length }</span> комментариев</div>

      <ul className="Social__comments">

        { props.modalComments.map((elem, index) =>

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

      {/* <!-- Кнопка для загрузки новой порции комментариев --> */}
      <CommentsLoader />

      {/* <!-- Форма для отправки комментария --> */}
      <div className="Social__footer">
        <img className="Social__picture" src={ avatarTwo } alt="Аватар комментатора фотографии" width="35" height="35"/>
        <input type="text" className="Social__footer-text" placeholder="Ваш комментарий..."/>
        <button type="button" className="Social__footer-btn" name="button">Отправить</button>
      </div>
    </div>

  );
}

export default Social;
