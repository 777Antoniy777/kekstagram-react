import React from 'react';
import '../css/blocks/TemplateSuccess.css';

function TemplateSuccess() {
  return (

    // Сообщение об успешной загрузке изображения
    <template id="success">

      <section className="Success">
        <div className="Success__inner">
          <h2 className="Success__title">Изображение успешно загружено</h2>
          <button type="button" className="Success__button">Круто!</button>
        </div>
      </section>

    </template>

  );
}

export default TemplateSuccess;
