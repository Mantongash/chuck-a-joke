import React, {Component}  from 'react';
import './App.css';
import Header from './components/header/Header';
import TopQuote from './components/top-quote/TopQuote';
import Categories from './components/categories/Categories';
import Jokes from './components/jokes/Jokes';

class App extends Component {
  constructor(props){
    super(props)

    this.fetchRandomQuote = this.fetchRandomQuote.bind(this);
  }
  fetchRandomQuote(){
    const jokes=fetch("https://api.chucknorris.io/jokes/random");
    jokes.then(res=>res.json())
    .then(data=>data.value);
  }

  componentDidMount(){
    return this.fetchRandomQuote();
  }
  render(){

    return (
        <div>
        <Header/>
        <main>
        <TopQuote quote={this.fetchRandomQuote()}/>
        <div>
        <Categories/>
        <Jokes/>
        </div>
        </main>
        </div>
    );

  }
}


export default App;
