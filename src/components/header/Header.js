import "./Header.css"
import norris from "./images/Norris.svg"
function Header() {
  return (
    <header>
      <img src={norris} alt="Chuck Norris Picture" className="norris"/>
    </header>
  );
}

export default Header;
