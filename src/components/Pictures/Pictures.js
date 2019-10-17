import React from 'react';
import './Pictures.css';
import ImgUpload from '../ImgUpload/ImgUpload';
import Picture from '../Picture/Picture';
import Preloader from '../Preloader/Preloader'

const Pictures = (props) => {

  return (

    <React.Fragment>

      { !props.pictures &&
        <Preloader />
      }

      {/* Контейнер для изображений от других пользователей */}
      <section className="Pictures  container">
        <h2 className="Pictures__title  visually-hidden">Фотографии других пользователей</h2>

        {/* Поле для загрузки нового изображения на сайт */}
        <ImgUpload />

        {/* Здесь будут изображения других пользователей */}
        { props.pictures &&
          props.pictures.map((elem, index) =>

            <Picture
              key={ index }
              url={ elem.url }
              likes={ elem.likes }
              description={ elem.description }
              comments={ elem.comments }
              onSetStatus={ props.onSetStatus }
              onSetValues={ props.onSetValues }

              onBodyStatus={ props.onBodyStatus }
            />

          )
        }

      </section>

    </React.Fragment>

  );
}

export default Pictures;
