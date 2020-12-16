import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/Header";
import TopQuote from "./components/top-joke/TopJoke";
import Categories from "./components/categories/Categories";
import Jokes from "./components/jokes/Jokes";
import Footer from "./components/footer/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomJoke:"",
      categories: [],
      jokes:"",
      
    }

    this.fetchRandomQuote = this.fetchRandomQuote.bind(this);
    this.fetchCategories = this.fetchCategories.bind(this);
    this.fetchJokes = this.fetchJokes.bind(this);

    this.handleClickCategory = this.handleClickCategory.bind(this);
  }

  fetchCategories() {
    const url = "https://api.chucknorris.io/jokes/categories";
    return fetch(url)
    .then((res) => res.json())
    .then((data) => this.setState({ categories: data}));

  }
  fetchRandomQuote() {
    const url = "https://api.chucknorris.io/jokes/random";
    return fetch(url)
      .then((res) => res.json())
      .then((data) => this.setState({ randomJoke: data.value }));
  }

  fetchJokes(category){
    const url = `https://api.chucknorris.io/jokes/random?category=${category}`;
    return fetch(url)
      .then((res) => res.json())
      .then((data) => this.setState({jokes: data.value}));
  }

  handleClickCategory(category){

    this.fetchJokes(category);
    console.log(category);

  }


  componentDidMount() {
    
    this.fetchRandomQuote();
    this.fetchCategories();
    this.fetchJokes("animal");
    
  }
  render() {
    return (
      <div>
        <Header />
        <main>
          <TopQuote joke={this.state.randomJoke} />
          <div className="main-content">
          <div className="flex container">
          <div>
            <Categories categories={this.state.categories} handleClickCategory={this.handleClickCategory} jokes={this.state.jokes}/>
            </div>
            <Jokes jokes={this.state.jokes}/>
          </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
