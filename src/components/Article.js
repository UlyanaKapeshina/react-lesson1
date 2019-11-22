import React from 'react';
import PropTypes from 'prop-types';

class Article extends React.Component {
    state = {
      visible: false,
    }
    handleMoreClick = (e) => {
      e.preventDefault()
      this.setState({ visible: true })
    }
    render() {
      const { author, text, bigText } = this.props.data
      const { visible } = this.state
      console.log('render', this); // добавили console.log
  
      return <div className="article">
        <p className="news__author">{author}:</p>
        <p className="news__text">{text}</p>
        {!visible && <a href="#sasa" className="news__redMore" onClick={this.handleMoreClick}>Подробнее</a>}
        {visible && <p className="news__big-text">{bigText}</p>}
      </div>
  
    }
  }
  Article.propTypes = {
    data: PropTypes.shape({
      author: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      bigText: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  }

  export default Article