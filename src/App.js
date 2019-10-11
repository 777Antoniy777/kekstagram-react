import React from 'react';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import TemplatePicture from './components/TemplatePicture/TemplatePicture';
import TemplateError from './components/TemplateError/TemplateError';
import TemplateSuccess from './components/TemplateSuccess/TemplateSuccess';

class App extends React.Component {
  state = {
    pictures: [],
  }

  componentDidMount() {
    fetch('https://js.dump.academy/kekstagram/data')
      .then(response => response.json())
      .then(data => {
        this.setState({
          pictures: data
        });
      })
      .catch(error => console.log(error))
  }

  render() {
    return (

      <React.Fragment>

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
          <div className="Img-upload__message Img-upload__message--loading">Загружаем....</div>
        </template>

      </React.Fragment>
    );
  }
}

export default App;
