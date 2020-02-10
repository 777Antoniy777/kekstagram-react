import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import './Pictures.css';
import ImgUpload from '../ImgUpload/ImgUpload';
import Picture from '../Picture/Picture';
import Preloader from '../Preloader/Preloader'
import { asyncGetPictures } from '../../actions/getDataPictures';

class Pictures extends React.Component {
  componentDidMount() {
    this.props.onGetPictures();
  }

  componentWillUnmount() {
    this.props.onRemovePictures();
  }

  render() {
    const { pictures } = this.props;

    return (
      <React.Fragment>

        { pictures.length === 0 &&
          <Preloader />
        }

        {/* Контейнер для изображений от других пользователей */}
        <section className="Pictures  container">
          <h2 className="Pictures__title  visually-hidden">Фотографии других пользователей</h2>

          {/* Поле для загрузки нового изображения на сайт */}
          <ImgUpload />

          {/* Здесь будут изображения других пользователей */}
          { pictures &&
            pictures.map((elem) =>

              <Picture
                // properties
                key={ elem.url }
                url={ elem.url }
                likes={ elem.likes }
                description={ elem.description }
                comments={ elem.comments }
              />

            )
          }

        </section>

      </React.Fragment>
    );
  }
}

Pictures.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      comments: PropTypes.array.isRequired,
    }),
  ).isRequired,
  onGetPictures: PropTypes.func.isRequired,
  onRemovePictures: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    pictures: state.pictures,
  }),
  dispatch => ({
    onGetPictures: () => {
      dispatch(asyncGetPictures());
    },
    onRemovePictures: () => {
      dispatch({
        type: 'REMOVE_DATA_PICTURES',
        pictures: [],
      })
    }
  })
)(Pictures);
