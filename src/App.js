import React from 'react';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import TemplateError from './components/TemplateError/TemplateError';
import TemplateSuccess from './components/TemplateSuccess/TemplateSuccess';

class App extends React.Component {
  state = {
    pictures: null,
    modalStatus: false,
    styles: null,

    modalValues: null,
  }

  styleWrapper = {
    height: '100vh',
    overflow: 'hidden',
  }

  onSetModalStatus = (st) => {
    this.setState({
      modalStatus: st,
    }, this.onSetWrapperStyles);
  }

  // при изменении стр. 21 на !this.state.modalStatus, после нажатия на Esc после клика мышкой, не закрывается модалка.
  // оставил консоль, видно 2 срабатывания Esc (?)
  // оставил пока реализацию через параметр
  onSetWrapperStyles = () => {

    console.log(`modalStatus: ${this.state.modalStatus}`);
    console.log(`styles: ${this.state.styles}`);

    if (this.state.modalStatus) {
      this.setState({
        styles: this.styleWrapper
      });
    } else {
      this.setState({
        styles: null
      });
    }

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
        <div style={ this.state.styles } >

          <Main
            // properties
            pictures={ this.state.pictures }
            modalStatus={ this.state.modalStatus }

            // handlers
            onSetModalStatus={ this.onSetModalStatus }
            onSetWrapperStyles={ this.onSetWrapperStyles }
          />

          <Footer />

          {/* Сообщение с ошибкой загрузки изображения */}
          <TemplateError />

          {/* Сообщение об успешной загрузке изображения */}
          <TemplateSuccess />

        </div>
      </React.Fragment>
    );
  }
}

export default App;
