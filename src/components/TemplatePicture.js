import React from 'react';
import '../css/blocks/TemplatePicture.css';

function TemplatePicture() {
  return (

    // Шаблон изображения случайного пользователя
    <template id="picture">

      {/* eslint-disable-next-line */}
      <a href="#" className="Picture">
        <img className="Picture__img" src="" width="182" height="182" alt="Случайная фотография"/>
        <p className="Picture__info">
          <span className="Picture__comments"></span>
          <span className="Picture__likes"></span>
        </p>
      </a>

    </template>

  );
}

export default TemplatePicture;
