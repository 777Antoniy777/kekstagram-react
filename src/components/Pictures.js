import React from 'react';
import '../css/blocks/Pictures.css';
import ImgUpload from './ImgUpload';

function Pictures() {
  return (

    // Контейнер для изображений от других пользователей
    <section className="Pictures  Container">
      <h2 className="Pictures__title  visually-hidden">Фотографии других пользователей</h2>

      {/* <!-- Поле для загрузки нового изображения на сайт --> */}
      <ImgUpload />

      {/* <!-- Здесь будут изображения других пользователей --> */}

    </section>
  );
}

export default Pictures;
