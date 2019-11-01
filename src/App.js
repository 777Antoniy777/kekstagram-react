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
  }

  styleWrapper = {
    height: '100vh',
    overflow: 'hidden',
  };

  /**
   * Set values for modal
   *
   * @this  {App}
   * @param {object} obj - modal data
   */
  onSetModalValues = (obj) => {

    this.setState({
      modalValues: obj
    }, this.onSetWrapperStyles);

  }

  /**
   * Set styles when modal is shown
   *
   * @this {App}
   */
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

  /**
   * Get all data for landing
   *
   * @this  {App}
   */
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

            // handlers
            onSetModalValues={ this.onSetModalValues }
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
