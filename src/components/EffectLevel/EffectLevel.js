import React from 'react';
import './EffectLevel.css';

function EffectLevel() {
  return (

    // Изменение глубины эффекта, накладываемого на изображение
    <fieldset className="Img-upload__effect-level  Effect-level">
      <input className="Effect-level__value" type="number" name="effect-level" defaultValue="20"/>
      <div className="Effect-level__line">
        <div className="Effect-level__pin" tabIndex="0">Кнопка изменения глубины эффекта фотографии</div>
        <div className="Effect-level__depth">Глубина эффекта фотографии</div>
      </div>
    </fieldset>

  );
}

export default EffectLevel;
