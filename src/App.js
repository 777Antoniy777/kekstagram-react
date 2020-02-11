import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import TemplateError from './components/TemplateError/TemplateError';
import TemplateSuccess from './components/TemplateSuccess/TemplateSuccess';

class App extends React.Component {
  state = {
    styles: {
      height: '100vh',
      overflow: 'hidden',
    },
  }

  render() {
    const { picture } = this.props;
    let style;

    if (Object.keys(picture).length > 0) {
      style = this.state.styles;
    } else {
      style = null;
    }

    return (
      <div style={ style } >

        <Main />

        <Footer />

        {/* Сообщение с ошибкой загрузки изображения */}
        <TemplateError />

        {/* Сообщение об успешной загрузке изображения */}
        <TemplateSuccess />

      </div>
    );
  }
}

App.propTypes = {
  picture: PropTypes.shape({
    url: PropTypes.string,
    likes: PropTypes.number,
    description: PropTypes.string,
    comments: PropTypes.array,
    alt: PropTypes.string,
  }).isRequired,
};

export default connect(
  state => ({
    picture: state.picture,
  })
)(App);

