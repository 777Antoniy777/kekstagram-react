import React from 'react';
import Main from './Main';
import Footer from './Footer';
import TemplatePicture from './TemplatePicture';
import TemplateError from './TemplateError';
import TemplateSuccess from './TemplateSuccess';

function App() {
  return (
    <div>
      <Main />
      <Footer />

      {/* Шаблон изображения случайного пользователя */}
      <TemplatePicture />

      {/* Сообщение с ошибкой загрузки изображения */}
      <TemplateError />

      {/* Сообщение об успешной загрузке изображения */}
      <TemplateSuccess />

      {/* Экран загрузки изображения */}
      <template id="messages">
        <div className="Img-upload__message Img-upload__message--loading">Загружаем...</div>
      </template>
    </div>
  );
}

export default App;
