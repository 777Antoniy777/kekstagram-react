import React from 'react';
import { connect } from "react-redux";
import './Main.css';
import ImgFilters from '../ImgFilters/ImgFilters';
import Pictures from '../Pictures/Pictures';
import BigPicture from '../BigPicture/BigPicture';

const Main = (props) => {
  const { picture } = props;

  return (
    <main className="Main">

      {/* Фильтрация изображений от других пользователей */}
      <ImgFilters />

      {/* Контейнер для изображений от других пользователей */}
      <Pictures />

      {/* Полноэкранный показ изображения */}
      { Object.keys(picture).length > 0 &&

        <BigPicture />

      }

    </main>
  );
}

export default connect(
  state => ({
    picture: state.picture,
  }),
)(Main);
