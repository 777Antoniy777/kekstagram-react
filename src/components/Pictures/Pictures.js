import React from 'react';
import './Pictures.css';
import ImgUpload from '../ImgUpload/ImgUpload';
import Picture from '../Picture/Picture';

const Pictures = (props) => {
  // static contextType = ColorContext;
  console.log(props.pictures)

  return (

    <React.Fragment>

      { !props.pictures &&
        <div>Picture is loading...</div>
      }

      {/* Контейнер для изображений от других пользователей */}
      <section className="Pictures  container">
        <h2 className="Pictures__title  visually-hidden">Фотографии других пользователей</h2>

        {/* Поле для загрузки нового изображения на сайт */}
        <ImgUpload />

        {/* Здесь будут изображения других пользователей */}
        { props.pictures &&
          props.pictures.map(elem =>

            <Picture
              key={parseInt(elem.url.split('/')[1])}
              url={elem.url}
              likes={elem.likes}
              description={elem.description}
            />
            
          )
          // <Picture pictures={this.context}/>
        }

      </section>

    </React.Fragment>

  );
}

export default Pictures;
