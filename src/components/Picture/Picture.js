import React from 'react';
import './Picture.css';

const Picture = (props) => {
  const pictureNumber = parseInt(props.url.split('/')[1]);
  const pictureAlt = `Картинка ${pictureNumber}`;
  const pictureSrc = `/${props.url}`;
  const pictureLikes = props.likes;
  const pictureDescription = props.description
  const pictureComments = props.comments;

  function setModalOptions(evt) {
    evt.preventDefault();

    const { onSetModalStatus, onSetModalValues } = props;

    onSetModalStatus(true);

    onSetModalValues(
      pictureSrc,
      pictureAlt,
      pictureLikes,
      pictureDescription,
      pictureComments
    );
  };

  return (

    <a href="#s" className="Picture" onClick={ setModalOptions } >

      <img className="Picture__img" src={ pictureSrc } width="182" height="182" alt={ pictureAlt }/>

      <p className="Picture__info">
        <span className="Picture__comments">{ pictureComments.length }</span>
        <span className="Picture__likes">{ pictureLikes }</span>
      </p>
    </a>

  );
}

export default Picture;
