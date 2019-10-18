import React from 'react';
import './BigPicture.css';
import Social from '../Social/Social';

const BigPicture = (props) => {
  const { onSetModalStatus, modalValues } = props

  document.addEventListener('keydown', buttonCloseKeydownHandler);

  function buttonCloseKeydownHandler(evt) {

    if (evt.keyCode === 27) {
      evt.preventDefault();
      onSetModalStatus(false);

      document.removeEventListener('keydown', buttonCloseKeydownHandler);
    }
  }

  function setBigPictureOptions(evt) {
    evt.preventDefault();

    onSetModalStatus(false);
  }

  return (

    // Полноэкранный показ изображения
    <section className="Big-picture overlay">
      <h2 className="Big-picture__title  visually-hidden">Просмотр фотографии</h2>
      <div className="Big-picture__preview">

        {/* <!-- Просмотр изображения --> */}
        <div className="Big-picture__img">
          <img src={ modalValues.modalUrl } alt={ modalValues.modalAlt } width="600" height="600"/>
        </div>

        {/* <!-- Информация об изображении. Подпись, комментарии, количество лайков --> */}
        <Social
          // properties
          modalLikes= { modalValues.modalLikes }
          modalDescription={ modalValues.modalDescription }
          modalComments={ modalValues.modalComments }
        />

        {/* <!-- Кнопка для выхода из полноэкранного просмотра изображени --> */}
        <button
          type="reset"
          className="Big-picture__cancel cancel"
          id="picture-cancel"
          onClick={ setBigPictureOptions }
        >
          Закрыть
        </button>
      </div>
    </section>

  );
}

export default BigPicture;
