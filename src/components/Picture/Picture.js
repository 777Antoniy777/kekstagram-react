import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import './Picture.css';

const Picture = (props) => {
  const { likes, description, comments, onGetPicture } = props;
  let { url } = props;
  const number = parseInt(url.split('/')[1]);
  const alt = `Картинка ${number}`;
  url = `/${url}`;

  const modalObj = {
    url,
    alt,
    likes,
    description,
    comments,
  };

  function setModalOptions(evt) {
    evt.preventDefault();

    onGetPicture(modalObj);
  };

  return (

    <a href="#s" className="Picture" onClick={ setModalOptions } >

      <img className="Picture__img" src={ url } width="182" height="182" alt={ alt }/>

      <p className="Picture__info">
        <span className="Picture__comments">{ comments.length }</span>
        <span className="Picture__likes">{ likes }</span>
      </p>
    </a>

  );
}

Picture.propTypes = {
  likes: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
  onGetPicture: PropTypes.func,
};

export default connect(
  state => ({
    picture: state.picture,
  }),
  dispatch => ({
    onGetPicture: (obj) => {
      dispatch({
        type: 'GET_DATA_PICTURE',
        picture: obj,
      })
    }
  })
)(Picture);
