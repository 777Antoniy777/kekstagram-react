import React from 'react';
import '../css/blocks/Main.css';
import ImgFilters from './ImgFilters';
import Pictures from './Pictures';
import BigPicture from './BigPicture';

function Main() {
  return (

    <main className="Main">

      {/* Фильтрация изображений от других пользователей */}
      <ImgFilters />

      {/* Контейнер для изображений от других пользователей */}
      <Pictures />

      {/* <!-- Полноэкранный показ изображения --> */}
      <BigPicture />

    </main>
  );
}

export default Main;
