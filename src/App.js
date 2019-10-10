import React from 'react';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import TemplatePicture from './components/TemplatePicture/TemplatePicture';
import TemplateError from './components/TemplateError/TemplateError';
import TemplateSuccess from './components/TemplateSuccess/TemplateSuccess';

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
