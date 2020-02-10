import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import './BigPicture.css';
import Social from '../Social/Social';

class BigPicture extends React.Component {
  onPictureEsc = (evt) => {
    const { onRemovePicture, onResetCommentsCount } = this.props;

    if (evt.keyCode === 27) {
      evt.preventDefault();

      onRemovePicture();
      onResetCommentsCount();
    }
  }
  componentDidMount(){
    document.addEventListener("keydown", this.onPictureEsc, false);
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.onPictureEsc, false);
  }

  setBigPictureOptions = (evt) => {
    const { onRemovePicture, onResetCommentsCount } = this.props;

    evt.preventDefault();

    onRemovePicture();
    onResetCommentsCount();
  }

  render() {
    const { picture } = this.props;
    const { url, alt, likes, description, comments } = picture;

    return (

      // Полноэкранный показ изображения
      <section className="Big-picture overlay">
        <h2 className="Big-picture__title  visually-hidden">Просмотр фотографии</h2>
        <div className="Big-picture__preview">

          {/* Просмотр изображения */}
          <div className="Big-picture__img">
            <img src={ url } alt={ alt } width="600" height="600"/>
          </div>

          {/* Информация об изображении. Подпись, комментарии, количество лайков */}
          <Social
            // properties
            likes={ likes }
            description={ description }
            comments={ comments }
          />

          {/* Кнопка для выхода из полноэкранного просмотра изображения */}
          <button
            type="reset"
            className="Big-picture__cancel cancel"
            id="picture-cancel"
            onClick={ this.setBigPictureOptions }
          >
            Закрыть
          </button>
        </div>
      </section>

    );
  }
}

BigPicture.propTypes = {
  picture: PropTypes.exact({
    url: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  onRemovePicture: PropTypes.func,
  onResetCommentsCount: PropTypes.func,
};

export default connect(
  state => ({
    picture: state.picture,
  }),
  dispatch => ({
    onRemovePicture: () => {
      dispatch({
        type: 'REMOVE_DATA_PICTURE',
        picture: {},
      })
    },
    onResetCommentsCount: () => {
      dispatch({
        type: 'RESET_COUNT',
        count: 5,
      })
    }
  })
)(BigPicture);
