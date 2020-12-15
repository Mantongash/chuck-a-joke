import React, {Component}  from 'react';
import './App.css';
import Header from './components/header/Header';
import TopQuote from './components/top-quote/TopQuote';
import Categories from './components/categories/Categories';
import Jokes from './components/jokes/Jokes';

class App extends Component {
  render(){

    return (
        <div>
        <Header/>
        <main>
        <TopQuote/>
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
