import React from 'react';
import '../css/blocks/App.css';
import Main from './Main';
import Footer from './Footer';
import TemplatePicture from './TemplatePicture';

function App() {
  return (
    <div>
      <Main />
      <Footer />

      {/* Шаблон изображения случайного пользователя */}
      <TemplatePicture />
    </div>
  );
}

export default App;
