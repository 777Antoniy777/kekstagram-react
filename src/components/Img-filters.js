import React from 'react';
import '../css/blocks/Img-filters.css';

function ImgFilters() {
  return (

    // Фильтрация изображений от других пользователей
    // убрал класс .Img-filters--inactive
    <section className="Img-filters Container">
      <h2 className="Img-filters__title visually-hidden">Фильтр фотографий</h2>
      <form className="Img-filters__form" action="index.html" method="get" autoComplete="off">
        <button type="button" className="Img-filters__button Img-filters__button--active" id="filter-popular">Популярные</button>
        <button type="button" className="Img-filters__button" id="filter-new">Новые</button>
        <button type="button" className="Img-filters__button" id="filter-discussed">Обсуждаемые</button>
      </form>
    </section>
  );
}

export default ImgFilters;
