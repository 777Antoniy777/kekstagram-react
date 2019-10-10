import React from 'react';
import '../css/blocks/Text.css';

function Text() {
  return (

    // Добавление хэш-тегов и комментария к изображению
    <fieldset className="Img-upload__text Text">
      <input className="Text__hashtags" name="hashtags" placeholder="#хэш-тег"/>
      <textarea className="Text__description" name="description" placeholder="Ваш комментарий..."></textarea>
    </fieldset>

  );
}

export default Text;
