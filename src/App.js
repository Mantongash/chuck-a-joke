import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/Header";
import TopQuote from "./components/top-joke/TopJoke";
import CategoryList from "./components/categories/Categories";
import Jokes from "./components/jokes/Jokes";
import Footer from "./components/footer/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomJoke:"",
      categories: [],
    }

    this.fetchRandomQuote = this.fetchRandomQuote.bind(this);
    this.fetchCategories = this.fetchCategories.bind(this);
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

  componentDidMount() {
    
    this.fetchRandomQuote();
    this.fetchCategories();
    console.log(this.state.categories);
  }
  render() {
    return (
      <div>
        <Header />
        <main>
          <TopQuote joke={this.state.randomJoke} />
          <div className="flex">
            <CategoryList categories={this.state.categories}/>
            <Jokes />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
