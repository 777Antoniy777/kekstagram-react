import React from 'react';
import './Picture.css';

const Picture = (props) => {
  // const state = {
  //   status: null
  // };

  const pictureNumber = parseInt(props.url.split('/')[1]);
  const pictureAlt = `Картинка ${pictureNumber}`;
  const pictureSrc = `/${props.url}`;

  function setModalStatus() {
    props.onSetStatus(true);
    // state.status = true;
  }

  console.log(props.modalStatus)
  return (

      <a href="#s" className="Picture" key={ props.key } onClick={ setModalStatus }>

        <img className="Picture__img" src={ pictureSrc } width="182" height="182" alt={ pictureAlt }/>

        <p className="Picture__info">
          <span className="Picture__comments">{ props.comments.length }</span>
          <span className="Picture__likes">{ props.likes }</span>
        </p>
      </a>

  );
}

export default Picture;
