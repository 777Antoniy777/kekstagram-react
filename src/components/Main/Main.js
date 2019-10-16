import React from 'react';
import './Main.css';
import ImgFilters from '../ImgFilters/ImgFilters';
import Pictures from '../Pictures/Pictures';
import BigPicture from '../BigPicture/BigPicture';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalStatus: false,
      modalUrl: '',
      modalLikes: null,
      modalDescription: '',
      modalComments: [],
    };

    this.handleSetStatus = this.handleSetStatus.bind(this);
  }

  handleSetStatus(st, url, likes, desc, com) {
    this.setState({
      modalStatus: st,
      modalUrl: url,
      modalLikes: likes,
      modalDescription: desc,
      modalComments: com
    });
  }

  render() {
    return (

      <main className="Main">

        {/* Фильтрация изображений от других пользователей */}
        <ImgFilters />

        {/* Контейнер для изображений от других пользователей */}
        <Pictures
          pictures={ this.props.pictures }
          onSetStatus={ this.handleSetStatus }
        />

        {/* Полноэкранный показ изображения */}
        { this.state.modalStatus &&

          <BigPicture
            modalUrl= { this.state.modalUrl }
            modalLikes= { this.state.modalLikes }
            modalDescription={ this.state.modalDescription }
            modalComments={ this.state.modalComments }
          />

        }

      </main>
    );
  }
}

export default Main;
