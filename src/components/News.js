import React from 'react';

import Article from './Article'

class News extends React.Component {

  
    renderNews = () => {
  
      const { data } = this.props;
      let newsTemplate;
      if (data.length) {
        newsTemplate = this.props.data.map((item) => {
          return <Article key={item.id} data={item} />
        })
      } else {
        newsTemplate = <p>К сожалению новостей нет</p>
      }
      return newsTemplate;
    }
    render() {
  
      const { data } = this.props;
  
      return <div className="news">
        {this.renderNews()}
        {data.length ? <strong onClick={this.handlerNewsCountClick}>Количество новостей:  {data.length}</strong> : null}
  
      </div>
    }
  }

  export default News