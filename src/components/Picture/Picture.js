import React from 'react';
import './Picture.css';

const Picture = (props) => {
  let pictureNumber = parseInt(props.url.split('/')[1]);

  return (

      <a href="#s" className="Picture" key={props.key}>

        <img className="Picture__img" src={`/${props.url}`} width="182" height="182" alt={`Картинка ${pictureNumber}`}/>

        <p className="Picture__info">
          <span className="Picture__comments">{props.comments.length}</span>
          <span className="Picture__likes">{props.likes}</span>
        </p>
      </a>

  );
}

export default Picture;
