import "./Header.css"
import norris from "./images/Norris.svg"
function Header() {
  return (
    <header>
      <img src={norris} alt="Chuck Norris Picture" className="norris"/>
      <h1 className="heading">CHUCK a JOKE</h1>
    </header>
  );
}

export default Header;
