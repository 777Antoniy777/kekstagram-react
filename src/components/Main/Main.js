import React from 'react';
import './Main.css';
import ImgFilters from '../ImgFilters/ImgFilters';
import Pictures from '../Pictures/Pictures';
import BigPicture from '../BigPicture/BigPicture';

class Main extends React.Component {
  state = {
    // modalUrl: '',
    // modalAlt: '',
    // modalLikes: null,
    // modalDescription: '',
    // modalComments: [],

    // modalValues: null
  };

  onSetModalValues = (url, alt, likes, desc, com) => {
    const obj = {
      modalUrl: url,
      modalAlt: alt,
      modalLikes: likes,
      modalDescription: desc,
      modalComments: com
    }

    this.setState({
      modalValues: obj,
    });

    // this.setState({
    //   modalValues.url = url,

    //   modalUrl: url,
    //   modalAlt: alt,
    //   modalLikes: likes,
    //   modalDescription: desc,
    //   modalComments: com
    // });
  }

  render() {
    return (

      <main className="Main">

        {/* Фильтрация изображений от других пользователей */}
        <ImgFilters />

        {/* Контейнер для изображений от других пользователей */}
        <Pictures
          // properties
          pictures={ this.props.pictures }

          // handlers
          onSetModalStatus={ this.props.onSetModalStatus }
          onSetModalValues={ this.onSetModalValues }
        />

        {/* Полноэкранный показ изображения */}
        { this.props.modalValues &&

          <BigPicture
            // properties
            // modalUrl= { this.state.modalUrl }
            // modalAlt={ this.state.modalAlt }
            // modalLikes= { this.state.modalLikes }
            // modalDescription={ this.state.modalDescription }
            // modalComments={ this.state.modalComments }


            modalValues={ this.state.modalValues }

            // handlers
            onSetModalStatus={ this.props.onSetModalStatus }
          />

        }

      </main>
    );
  }
}

export default Main;
