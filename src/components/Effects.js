import React from 'react';
import '../css/blocks/Effects.css';

function Effects() {
  return (

    // Наложение эффекта на изображение
    <fieldset className="Img-upload__effects  Effects">

      <ul className="Effects__list">

        <li className="Effects__item">
          <input type="radio" className="Effects__radio  visually-hidden" name="effect" id="effect-none" defaultValue="none"/>
          {/* for="effect-none" */}
          <label className="Effects__label">
            <span className="Effects__preview  Effects__preview--none">Превью фото без эффекта</span>
            Оригинал
          </label>
        </li>

        <li className="Effects__item">
          <input type="radio" className="Effects__radio  visually-hidden" name="effect" id="effect-chrome" defaultValue="chrome"/>
          {/* for="effect-chrome" */}
          <label className="Effects__label">
            <span className="Effects__preview  Effects__preview--chrome">Превью эффекта Хром</span>
            Хром
          </label>
        </li>

        <li className="Effects__item">
          <input type="radio" className="Effects__radio  visually-hidden" name="effect" id="effect-sepia" defaultValue="sepia"/>
          {/* for="effect-sepia" */}
          <label className="Effects__label">
            <span className="Effects__preview  Effects__preview--sepia">Превью эффекта Сепия</span>
            Сепия
          </label>
        </li>

        <li className="Effects__item">
          <input type="radio" className="Effects__radio  visually-hidden" name="effect" id="effect-marvin" defaultValue="marvin"/>
          {/* for="effect-marvin" */}
          <label className="Effects__label">
            <span className="Effects__preview  Effects__preview--marvin">Превью эффекта Марвин</span>
            Марвин
          </label>
        </li>

        <li className="Effects__item">
          <input type="radio" className="Effects__radio  visually-hidden" name="effect" id="effect-phobos" defaultValue="phobos"/>
          {/* for="effect-phobos" */}
          <label className="Effects__label">
            <span className="Effects__preview  effects__preview--phobos">Превью эффекта Фобос</span>
            Фобос
          </label>
        </li>

        <li className="Effects__item">
          <input type="radio" className="Effects__radio  visually-hidden" name="effect" id="effect-heat" defaultValue="heat" defaultChecked/>
          {/* for="effect-heat" */}
          <label className="Effects__label">
            <span className="Effects__preview  Effects__preview--heat">Превью эффекта Зной</span>
            Зной
          </label>
        </li>

      </ul>
      
    </fieldset>

  );
}

export default Effects;
