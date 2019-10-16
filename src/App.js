import React from 'react';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import TemplateError from './components/TemplateError/TemplateError';
import TemplateSuccess from './components/TemplateSuccess/TemplateSuccess';

class App extends React.Component {
  state = {
    pictures: null,
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

        <Main pictures={ this.state.pictures } />

        <Footer />

        {/* Сообщение с ошибкой загрузки изображения */}
        <TemplateError />

        {/* Сообщение об успешной загрузке изображения */}
        <TemplateSuccess />

      </React.Fragment>
    );
  }
}

export default App;
