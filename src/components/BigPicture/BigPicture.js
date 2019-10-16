import React from 'react';
import './BigPicture.css';
import Social from '../Social/Social';

const BigPicture = (props) => {
  return (

    // Полноэкранный показ изображения
    <section className="Big-picture overlay">
      <h2 className="Big-picture__title  visually-hidden">Просмотр фотографии</h2>
      <div className="Big-picture__preview">

        {/* <!-- Просмотр изображения --> */}
        <div className="Big-picture__img">
          <img src={ props.modalUrl } alt="Девушка в купальнике" width="600" height="600"/>
        </div>

        {/* <!-- Информация об изображении. Подпись, комментарии, количество лайков --> */}
        <Social
          modalLikes= { props.modalLikes }
          modalDescription={ props.modalDescription }
          modalComments={ props.modalComments }
        />

        {/* <!-- Кнопка для выхода из полноэкранного просмотра изображени --> */}
        <button type="reset" className="Big-picture__cancel  cancel" id="picture-cancel">Закрыть</button>
      </div>
    </section>

  );
}

export default BigPicture;
