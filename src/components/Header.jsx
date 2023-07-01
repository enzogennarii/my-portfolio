import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h3 id="nickname">enzogennarii</h3>
      <nav className="navegation">
        <Link to="#home">Home</Link>
        <Link to="#about-me">Sobre mim</Link>
        <Link to="#projects">Projetos</Link>
        <Link to="#contact">Contato</Link>
      </nav>
    </header>
  );
}

export default Header;
