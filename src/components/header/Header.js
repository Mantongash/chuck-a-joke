import "./Header.css"
import norris from "./images/Norris.svg"
function Header() {
  return (
    <header>
      <img src={norris} alt="Chuck Norris Picture" className="norris"/>
      <h1 className="heading">CHUCK a JOKE</h1>
      <p className="subheading">Filter Chuck Norris Jokes by category.</p>
    </header>
  );
}

export default Header;
