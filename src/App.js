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
      randomquote:""
    }

    this.fetchRandomQuote = this.fetchRandomQuote.bind(this);
  }
  fetchRandomQuote() {
    const url = "https://api.chucknorris.io/jokes/random";
    return fetch(url)
      .then((res) => res.json())
      .then((data) => this.setState({ randomJoke: data.value }));
  }

  componentDidMount() {
    console.log(this.state);
    return this.fetchRandomQuote();
  }
  render() {
    return (
      <div>
        <Header />
        <main>
          <TopQuote quote={this.state.randomJoke} />
          <div>
            <Categories />
            <Jokes />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
