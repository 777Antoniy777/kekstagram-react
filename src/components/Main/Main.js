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
      modalAlt: '',
      modalLikes: null,
      modalDescription: '',
      modalComments: [],
    };

    this.onSetStatus = this.onSetStatus.bind(this);
    this.onSetValues = this.onSetValues.bind(this);
    this.onBodyStatus = this.onBodyStatus.bind(this);
  }

  onSetStatus(st) {
    this.setState({
      modalStatus: st,
    });
  }

  onSetValues(url, alt, likes, desc, com) {
    this.setState({
      modalUrl: url,
      modalAlt: alt,
      modalLikes: likes,
      modalDescription: desc,
      modalComments: com
    });
  }

  onBodyStatus(evt) {
    const target = evt.target;
    const body = target.closest('body');
    console.log(this.state.modalStatus, body.classList.contains('modal-open'))

    if (this.state.modalStatus) {
      body.classList.remove('modal-open');
    } else {
      body.classList.add('modal-open');
    }

    console.log(this.state.modalStatus, body.classList.contains('modal-open'))

    // if (body.classList.contains('modal-open')) {
    //   body.classList.remove('modal-open');
    // } else {
    //   body.classList.add('modal-open');
    // }

    // body.classList.toggle('modal-open');
  }

  render() {
    return (

      <main className="Main">

        {/* Фильтрация изображений от других пользователей */}
        <ImgFilters />

        {/* Контейнер для изображений от других пользователей */}
        <Pictures
          pictures={ this.props.pictures }
          onSetStatus={ this.onSetStatus }
          onSetValues={ this.onSetValues }

          onBodyStatus={ this.onBodyStatus }
        />

        {/* Полноэкранный показ изображения */}
        { this.state.modalStatus &&

          <BigPicture
            onSetStatus={ this.onSetStatus }
            onBodyStatus={ this.onBodyStatus }

            modalUrl= { this.state.modalUrl }
            modalAlt={ this.state.modalAlt }
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
