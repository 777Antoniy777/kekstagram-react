import React from 'react';
import '../css/blocks/ImgUpload.css';
import Scale from './Scale';
import EffectLevel from './EffectLevel';
import Cancel from './Cancel';

function ImgUpload() {
  return (

    // Поле для загрузки нового изображения на сайт
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
                <Scale />

                {/* <!-- Предварительный просмотр изображения --> */}
                <div className="Img-upload__preview">
                  <img src="../img/upload-default-image.jpg" alt="Предварительный просмотр фотографии"/>
                </div>

                {/* <!-- Изменение глубины эффекта, накладываемого на изображение --> */}
                <EffectLevel />

                {/* <!-- Кнопка для закрытия формы редактирования изображения --> */}
                <Cancel />
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

  );
}

export default ImgUpload;
