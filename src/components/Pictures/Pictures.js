import React from 'react';
import './Pictures.css';
import ImgUpload from '../ImgUpload/ImgUpload';

function Pictures() {
  return (

    // Контейнер для изображений от других пользователей
    <section className="Pictures  container">
      <h2 className="Pictures__title  visually-hidden">Фотографии других пользователей</h2>

      {/* <!-- Поле для загрузки нового изображения на сайт --> */}
      <ImgUpload />

      {/* <!-- Здесь будут изображения других пользователей --> */}

    </section>

  );
}

export default Pictures;
