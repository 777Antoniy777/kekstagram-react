import React from 'react';
import './Main.css';
import ImgFilters from '../ImgFilters/ImgFilters';
import Pictures from '../Pictures/Pictures';
import BigPicture from '../BigPicture/BigPicture';

const Main = (props) => {

  return (

    <main className="Main">

      {/* Фильтрация изображений от других пользователей */}
      <ImgFilters />

      {/* Контейнер для изображений от других пользователей */}
      <Pictures pictures={props.pictures}/>
      {/* <Pictures /> */}

      {/* <!-- Полноэкранный показ изображения --> */}
      <BigPicture />

    </main>
  );
}

export default Main;
