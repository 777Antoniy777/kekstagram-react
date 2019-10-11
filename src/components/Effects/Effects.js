import React from 'react';
import './Effects.css';

function Effects() {
  return (

    // Наложение эффекта на изображение
    <fieldset className="Img-upload__effects  Effects">

      <ul className="Effects__list">

        <li className="Effects__item">
          <input type="radio" className="Effects__radio  visually-hidden" name="effect" id="effect-none" defaultValue="none"/>

          <label className="Effects__label" htmlFor="effect-none">
            <span className="Effects__preview  Effects__preview--none">Превью фото без эффекта</span>
            Оригинал
          </label>
        </li>

        <li className="Effects__item">
          <input type="radio" className="Effects__radio  visually-hidden" name="effect" id="effect-chrome" defaultValue="chrome"/>

          <label className="Effects__label" htmlFor="effect-chrome">
            <span className="Effects__preview  Effects__preview--chrome">Превью эффекта Хром</span>
            Хром
          </label>
        </li>

        <li className="Effects__item">
          <input type="radio" className="Effects__radio  visually-hidden" name="effect" id="effect-sepia" defaultValue="sepia"/>

          <label className="Effects__label" htmlFor="effect-sepia">
            <span className="Effects__preview  Effects__preview--sepia">Превью эффекта Сепия</span>
            Сепия
          </label>
        </li>

        <li className="Effects__item">
          <input type="radio" className="Effects__radio  visually-hidden" name="effect" id="effect-marvin" defaultValue="marvin"/>

          <label className="Effects__label" htmlFor="effect-marvin">
            <span className="Effects__preview  Effects__preview--marvin">Превью эффекта Марвин</span>
            Марвин
          </label>
        </li>

        <li className="Effects__item">
          <input type="radio" className="Effects__radio  visually-hidden" name="effect" id="effect-phobos" defaultValue="phobos"/>

          <label className="Effects__label" htmlFor="effect-phobos">
            <span className="Effects__preview  effects__preview--phobos">Превью эффекта Фобос</span>
            Фобос
          </label>
        </li>

        <li className="Effects__item">
          <input type="radio" className="Effects__radio  visually-hidden" name="effect" id="effect-heat" defaultValue="heat" defaultChecked/>
         
          <label className="Effects__label" htmlFor="effect-heat">
            <span className="Effects__preview  Effects__preview--heat">Превью эффекта Зной</span>
            Зной
          </label>
        </li>

      </ul>

    </fieldset>

  );
}

export default Effects;
