import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import './Main.css';
import ImgFilters from '../ImgFilters/ImgFilters';
import Pictures from '../Pictures/Pictures';
import BigPicture from '../BigPicture/BigPicture';

const Main = ({picture}) => {
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

Main.propTypes = {
  picture: PropTypes.shape({
    url: PropTypes.string,
    likes: PropTypes.number,
    description: PropTypes.string,
    comments: PropTypes.array,
    alt: PropTypes.string,
  }).isRequired,
};

export default connect(
  state => ({
    picture: state.picture,
  }),
)(Main);
