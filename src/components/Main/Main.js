import React from 'react';
import './Main.css';
import ImgFilters from '../ImgFilters/ImgFilters';
import Pictures from '../Pictures/Pictures';
import BigPicture from '../BigPicture/BigPicture';

class Main extends React.Component {
  state = {
    shownCommentsCount: 5,
  }

  /**
   * Adds + 5 when button is pressed
   *
   * @this {App}
   * @param {number} num - count of comments
   */
  onSetCommentsValue = (num) => {
    num = num + 5;

    this.setState({
      shownCommentsCount: num
    });

  }

  /**
   * Reset when modal is closed
   *
   * @this {App}
   */
  onResetCommentsValue = () => {

    this.setState({
      shownCommentsCount: 5
    });

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
          onSetModalValues={ this.props.onSetModalValues }
        />

        {/* Полноэкранный показ изображения */}
        { this.props.modalValues &&

          <BigPicture
            // properties
            modalValues={ this.props.modalValues }
            shownCommentsCount={ this.state.shownCommentsCount }

            // handlers
            onSetModalValues={ this.props.onSetModalValues }
            onSetCommentsValue={ this.onSetCommentsValue }
            onResetCommentsValue={ this.onResetCommentsValue }
          />

        }

      </main>
    );
  }
}

export default Main;
