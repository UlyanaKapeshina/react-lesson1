import React from 'react';
import News from './components/News';


import './App.css';
import Add from './components/Add';


class App extends React.Component {
  state = {
    news: null,
    isLoading: false,
  }
  
  static getDerivedStateFromProps(props, state) {
    if(Array.isArray(state.news)) {

      let filteredNews = state.news
      console.log(filteredNews)
      filteredNews.forEach((it) => {
       
        if(it.bigText.toLowerCase().includes('pubg')) {
          it.bigText = 'СПАМ'
        }
      })
      return {
        news: filteredNews
      }
    }
    return null   
    
  }
  componentDidMount() {
    this.setState({isLoading: true})
    fetch('http://localhost:3000/data/newsData.json')
    .then((response) => response.json())
    .then((data) => {    
      setTimeout(() => {
        this.setState({isLoading: false, news: data})
      }, 3000)  
            
    })
  }
  handleAddNews = (data) => {    
    const nextNews = [data, ...this.state.news]
    this.setState({news: nextNews})
  }
  render() {
    console.log(this.state.news)
    return <div>
      <Add onAddNews={this.handleAddNews} />
      <h3>Новости</h3>
      {this.state.isLoading && <p>Загружаю...</p>}
      {Array.isArray(this.state.news) && <News data={this.state.news} />}
    </div>
  }
}
export default App;
