import React from 'react';
// import logo from '../img/svg/logo.svg';
import '../css/blocks/Main.css';

function Main() {
  return (

    <main className="Main">

      {/* <!-- Фильтрация изображений от других пользователей --> */}
      {/* убрал класс .Img-filters--inactive */}
      <section className="Img-filters Container">
        <h2 className="Img-filters__title visually-hidden">Фильтр фотографий</h2>
        <form className="Img-filters__form" action="index.html" method="get" autoComplete="off">
          <button type="button" className="Img-filters__button Img-filters__button--active" id="filter-popular">Популярные</button>
          <button type="button" className="Img-filters__button" id="filter-new">Новые</button>
          <button type="button" className="Img-filters__button" id="filter-discussed">Обсуждаемые</button>
        </form>
      </section>

      {/* <!-- Контейнер для изображений от других пользователей --> */}
      <section className="Pictures  Container">
        <h2 className="Pictures__title  visually-hidden">Фотографии других пользователей</h2>

        {/* <!-- Поле для загрузки нового изображения на сайт --> */}
        <section className="Img-upload">
          <div className="Img-upload__wrapper">
            <h2 className="Img-upload__title  visually-hidden">Загрузка фотографии</h2>
            <form className="Img-upload__form" id="upload-select-image" method="post" encType="multipart/form-data" autoComplete="off">

              {/* <!-- Изначальное состояние поля для загрузки изображения --> */}
              <fieldset className="Img-upload__start">
                <input type="file" id="upload-file" className="Img-upload__input  visually-hidden" name="filename" required/>
                {/* for="upload-file" */}
                <label className="Img-upload__label  Img-upload__control">Загрузить</label>
              </fieldset>

              {/* <!-- Форма редактирования изображения --> */}
              <div className="Img-upload__overlay  hidden">
                <div className="Img-upload__wrapper">
                  <div className="Img-upload__preview-container">

                  {/* <!-- Изменение размера изображения --> */}
                  <fieldset className="Img-upload__scale  Scale">
                    <button type="button" className="Scale__control  Scale__control--smaller">Уменьшить</button>
                    <input type="text" className="Scale__control  Scale__control--defaultValue" defaultValue="55%" title="Image Scale" name="scale" readOnly/>
                    <button type="button" className="Scale__control  Scale__control--bigger">Увеличить</button>
                  </fieldset>

                  {/* <!-- Предварительный просмотр изображения --> */}
                  <div className="Img-upload__preview">
                    <img src="../img/upload-default-image.jpg" alt="Предварительный просмотр фотографии"/>
                  </div>

                  {/* <!-- Изменение глубины эффекта, накладываемого на изображение --> */}
                  <fieldset className="Img-upload__effect-level  Effect-level">
                    <input className="Effect-level__defaultValue" type="number" name="effect-level" defaultValue="20"/>
                    <div className="Effect-level__line">
                      <div className="Effect-level__pin" tabIndex="0">Кнопка изменения глубины эффекта фотографии</div>
                      <div className="Effect-level__depth">Глубина эффекта фотографии</div>
                    </div>
                  </fieldset>

                  {/* <!-- Кнопка для закрытия формы редактирования изображения --> */}
                    <button type="reset" className="Img-upload__cancel  cancel" id="upload-cancel">Закрыть</button>
                  </div>

                  {/* <!-- Наложение эффекта на изображение --> */}
                  <fieldset className="Img-upload__effects  Effects">
                    <ul className="Effects__list">
                      <li className="Effects__item">
                        <input type="radio" className="Effects__radio  visually-hidden" name="effect" id="effect-none" defaultValue="none"/>
                        {/* for="effect-none" */}
                        <label className="Effects__label">
                          <span className="Effects__preview  Effects__preview--none">Превью фото без эффекта</span>
                          Оригинал
                        </label>
                      </li>
                      <li className="Effects__item">
                        <input type="radio" className="Effects__radio  visually-hidden" name="effect" id="effect-chrome" defaultValue="chrome"/>
                        {/* for="effect-chrome" */}
                        <label className="Effects__label">
                          <span className="Effects__preview  Effects__preview--chrome">Превью эффекта Хром</span>
                          Хром
                        </label>
                      </li>
                      <li className="Effects__item">
                        <input type="radio" className="Effects__radio  visually-hidden" name="effect" id="effect-sepia" defaultValue="sepia"/>
                        {/* for="effect-sepia" */}
                        <label className="Effects__label">
                          <span className="Effects__preview  Effects__preview--sepia">Превью эффекта Сепия</span>
                          Сепия
                        </label>
                      </li>
                      <li className="Effects__item">
                        <input type="radio" className="Effects__radio  visually-hidden" name="effect" id="effect-marvin" defaultValue="marvin"/>
                        {/* for="effect-marvin" */}
                        <label className="Effects__label">
                          <span className="Effects__preview  Effects__preview--marvin">Превью эффекта Марвин</span>
                          Марвин
                        </label>
                      </li>
                      <li className="Effects__item">
                        <input type="radio" className="Effects__radio  visually-hidden" name="effect" id="effect-phobos" defaultValue="phobos"/>
                        {/* for="effect-phobos" */}
                        <label className="Effects__label">
                          <span className="Effects__preview  effects__preview--phobos">Превью эффекта Фобос</span>
                          Фобос
                        </label>
                      </li>
                      <li className="Effects__item">
                        <input type="radio" className="Effects__radio  visually-hidden" name="effect" id="effect-heat" defaultValue="heat" defaultChecked/>
                        {/* for="effect-heat" */}
                        <label className="Effects__label">
                          <span className="Effects__preview  Effects__preview--heat">Превью эффекта Зной</span>
                          Зной
                        </label>
                      </li>
                    </ul>
                  </fieldset>

                  {/* <!-- Добавление хэш-тегов и комментария к изображению --> */}
                  <fieldset className="Img-upload__text Text">
                    <input className="Text__hashtags" name="hashtags" placeholder="#хэш-тег"/>
                    <textarea className="Text__description" name="description" placeholder="Ваш комментарий..."></textarea>
                  </fieldset>

                  {/* <!-- Кнопка для отправки данных на сервер --> */}
                  <button type="submit" className="Img-upload__submit" id="upload-submit">Опубликовать</button>
                </div>
              </div>
            </form>
          </div>
        </section>

        {/* <!-- Здесь будут изображения других пользователей --> */}

      </section>

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
