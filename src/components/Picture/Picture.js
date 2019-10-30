import React from 'react';
import './Picture.css';

const Picture = (props) => {
  const { url, likes, description, comments } = props;
  const pictureNumber = parseInt(url.split('/')[1]);
  const pictureAlt = `Картинка ${pictureNumber}`;
  const pictureSrc = `/${url}`;

  const modalObj = {
    modalUrl: pictureSrc,
    modalAlt: pictureAlt,
    modalLikes: likes,
    modalDescription: description,
    modalComments: comments
  };

  function setModalOptions(evt) {
    evt.preventDefault();

    const { onSetModalValues } = props;

    onSetModalValues(modalObj);
  };

  return (

    <a href="#s" className="Picture" onClick={ setModalOptions } >

      <img className="Picture__img" src={ pictureSrc } width="182" height="182" alt={ pictureAlt }/>

      <p className="Picture__info">
        <span className="Picture__comments">{ comments.length }</span>
        <span className="Picture__likes">{ likes }</span>
      </p>
    </a>

  );
}

export default Picture;
