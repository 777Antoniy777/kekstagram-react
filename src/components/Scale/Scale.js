import React from 'react';
import './Scale.css';

function Scale() {
  return (

    // Изменение размера изображения
    <fieldset className="Img-upload__scale  Scale">
      <button type="button" className="Scale__control  Scale__control--smaller">Уменьшить</button>
      <input type="text" className="Scale__control  Scale__control--value" defaultValue="55%" title="Image scale" name="scale" readOnly/>
      <button type="button" className="Scale__control  Scale__control--bigger">Увеличить</button>
    </fieldset>

  );
}

export default Scale;
