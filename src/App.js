import React from 'react';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import TemplateError from './components/TemplateError/TemplateError';
import TemplateSuccess from './components/TemplateSuccess/TemplateSuccess';

class App extends React.Component {
  state = {
    pictures: null,
    modalValues: null,
    styles: null,

    // test
    shownCommentsCount: 5,
  }

  styleWrapper = {
    height: '100vh',
    overflow: 'hidden',
  };

  onSetModalValues = (obj, amount) => {

    this.setState({
      modalValues: obj
    }, this.onSetWrapperStyles);

  }

  onSetCommentsValue = (num) => {
    num = num + 5;

    this.setState({
      shownCommentsCount: num
    });

  }

  onResetCommentsValue = () => {

    this.setState({
      shownCommentsCount: 5
    });

  }

  onSetWrapperStyles() {

    if (this.state.modalValues) {
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
            modalValues={ this.state.modalValues }
            shownCommentsCount={ this.state.shownCommentsCount }

            // handlers
            onSetModalValues={ this.onSetModalValues }
            onSetCommentsValue={ this.onSetCommentsValue }
            onResetCommentsValue={ this.onResetCommentsValue }
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
