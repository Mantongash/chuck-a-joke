import './App.css';
import Header from './components/header/Header';
import TopQuote from './components/top-quote/TopQuote';
import Categories from './components/categories';
import Jokes from './components/jokes';

function App() {
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

export default App;
