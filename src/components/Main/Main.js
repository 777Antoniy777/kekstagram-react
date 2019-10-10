import React from 'react';
import './Main.css';
import ImgFilters from '../ImgFilters/ImgFilters';
import Pictures from '../Pictures/Pictures';
import BigPicture from '../BigPicture/BigPicture';

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
