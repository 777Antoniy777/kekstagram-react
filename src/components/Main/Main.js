import React from 'react';
import './Main.css';
import ImgFilters from '../ImgFilters/ImgFilters';
import Pictures from '../Pictures/Pictures';
import BigPicture from '../BigPicture/BigPicture';

class Main extends React.Component {
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
          onSetModalValues={ this.props.onSetModalValues }
        />

        {/* Полноэкранный показ изображения */}
        { this.props.modalValues &&

          <BigPicture
            // properties
            modalValues={ this.props.modalValues }
            shownCommentsCount={ this.props.shownCommentsCount }

            // handlers
            onSetModalValues={ this.props.onSetModalValues }
            onSetCommentsValue={ this.props.onSetCommentsValue }
            onResetCommentsValue={ this.props.onResetCommentsValue }
          />

        }

      </main>
    );
  }
}

export default Main;
