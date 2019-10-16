import React from 'react';
import './Main.css';
import ImgFilters from '../ImgFilters/ImgFilters';
import Pictures from '../Pictures/Pictures';
import BigPicture from '../BigPicture/BigPicture';

const Main = (props) => {
  const state = {
    modalStatus: false,
  };

  function handleSetStatus(st) {
    state.modalStatus = st;
    console.log(st)
    console.log(state)
  }

  return (

    <main className="Main">

      {/* Фильтрация изображений от других пользователей */}
      <ImgFilters />

      {/* Контейнер для изображений от других пользователей */}
      <Pictures
        pictures={ props.pictures }
        modalStatus={ state.modalStatus }
        onSetStatus= { handleSetStatus }
      />

      {/* Полноэкранный показ изображения */}
      { state.modalStatus &&

        <BigPicture />

      }



      {/* <BigPicture /> */}

    </main>
  );
}

export default Main;
