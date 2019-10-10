import React from 'react';
import '../css/blocks/Main.css';
import ImgFilters from './Img-filters';
import Pictures from './Pictures';

function Main() {
  return (

    <main className="Main">

      {/* Фильтрация изображений от других пользователей */}
      <ImgFilters />
      
      {/* Контейнер для изображений от других пользователей */}
      <Pictures />

      {/* <!-- Полноэкранный показ изображения --> */}
      <section className="Big-picture  Overlay  hidden">
        <h2 className="Big-picture__title  visually-hidden">Просмотр фотографии</h2>
        <div className="Big-picture__preview">

          {/* <!-- Просмотр изображения --> */}
          <div className="Big-picture__img">
            <img src="img/logo-background-3.jpg" alt="Девушка в купальнике" width="600" height="600"/>
          </div>

          {/* <!-- Информация об изображении. Подпись, комментарии, количество лайков --> */}
          <div className="Big-picture__social  Social">
            <div className="Social__header">
              <img className="Social__picture" src="img/avatar-1.svg" alt="Аватар автора фотографии" width="35" height="35"/>
              <p className="Social__caption">Тестим новую камеру! =)</p>
              <p className="Social__likes">Нравится <span className="likes-count">356</span></p>
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
            <button type="button" className="Social__comments-loader  Comments-loader">Загрузить еще</button>

            {/* <!-- Форма для отправки комментария --> */}
            <div className="Social__footer">
              <img className="Social__picture" src="img/avatar-6.svg" alt="Аватар комментатора фотографии" width="35" height="35"/>
              <input type="text" className="Social__footer-text" placeholder="Ваш комментарий..."/>
              <button type="button" className="Social__footer-btn" name="button">Отправить</button>
            </div>
          </div>

          {/* <!-- Кнопка для выхода из полноэкранного просмотра изображени --> */}
          <button type="reset" className="Big-picture__cancel  Cancel" id="picture-cancel">Закрыть</button>
        </div>
      </section>

    </main>
  );
}

export default Main;
