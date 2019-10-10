import React from 'react';
import './Pictures.css';
import ImgUpload from '../ImgUpload/ImgUpload';
class Pictures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'https://js.dump.academy/kekstagram/data',
      pictures: []
    };
  }

  componentDidUpdate(prevProps) {
    if(prevProps.myProps !== this.props.myProp) {
      this.fetchData(this.props.url)
        .then(response => response.json)
        .then(pictures => console.log(pictures))
      // const arr = fetch('https://js.dump.academy/kekstagram/data')
      //   .then(response => response.json)
      //   .then(pictures => console.log(pictures))
      // console.log(arr);

      // this.setState({
      //   pictures: arr
      // })пш
    }
  }

  render() {
    return (

      // Контейнер для изображений от других пользователей
      <section className="Pictures  container">
        <h2 className="Pictures__title  visually-hidden">Фотографии других пользователей</h2>

        {/* <!-- Поле для загрузки нового изображения на сайт --> */}
        <ImgUpload />

        {/* <!-- Здесь будут изображения других пользователей --> */}

      </section>
    );
  }
}

export default Pictures;
