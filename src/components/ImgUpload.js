import React from 'react';
import '../css/blocks/ImgUpload.css';
import Scale from './Scale';
import EffectLevel from './EffectLevel';
import Cancel from './Cancel';
import Effects from './Effects';
import Text from './Text';

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
              <Effects />

              {/* <!-- Добавление хэш-тегов и комментария к изображению --> */}
              <Text />

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
