import React from 'react';
import '../css/blocks/TemplateError.css';

function TemplateError() {
  return (

    // Сообщение с ошибкой загрузки изображения
    <template id="error">

      <section className="Error">
        <div className="Error__inner">
          <h2 className="Error__title">Ошибка загрузки файла</h2>
          <div className="Error__buttons">
            <button type="button" className="Error__button">Попробовать снова</button>
            <button type="button" className="Error__button">Загрузить другой файл</button>
          </div>
        </div>
      </section>

    </template>

  );
}

export default TemplateError;
