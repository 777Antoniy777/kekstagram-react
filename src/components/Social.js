import React from 'react';
import '../css/blocks/Social.css';
import CommentsLoader from './CommentsLoader';
import LikesCount from './LikesCount';

function Social() {
  return (

    // Информация об изображении. Подпись, комментарии, количество лайков
    <div className="Big-picture__social  Social">
      <div className="Social__header">
        <img className="Social__picture" src="img/avatar-1.svg" alt="Аватар автора фотографии" width="35" height="35"/>
        <p className="Social__caption">Тестим новую камеру! =)</p>
        <p className="Social__likes">Нравится

          {/* Количество лайков комментария */}
          <LikesCount />
        </p>
      </div>

      {/* <!-- Комментарии к изображению --> */}
      <div className="Social__comment-count"><span className="current-comments-count">5</span> из <span className="comments-count">125</span> комментариев</div>
      <ul className="Social__comments">
        <li className="Social__comment">
          <img className="Social__picture" src="img/avatar-4.svg" alt="Аватар комментатора фотографии" width="35" height="35"/>
          <p className="Social__text">Мега фото! Просто обалдеть. Как вам так удалось?</p>
        </li>
        <li className="Social__comment">
          <img className="Social__picture" src="img/avatar-3.svg" alt="Аватар комментатора фотографии" width="35" height="35"/>
          <p className="Social__text">Да это фоташоп!!!!!!!!</p>
        </li>
      </ul>

      {/* <!-- Кнопка для загрузки новой порции комментариев --> */}
      <CommentsLoader />

      {/* <!-- Форма для отправки комментария --> */}
      <div className="Social__footer">
        <img className="Social__picture" src="img/avatar-6.svg" alt="Аватар комментатора фотографии" width="35" height="35"/>
        <input type="text" className="Social__footer-text" placeholder="Ваш комментарий..."/>
        <button type="button" className="Social__footer-btn" name="button">Отправить</button>
      </div>
    </div>

  );
}

export default Social;
