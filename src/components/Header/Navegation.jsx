import React from 'react';
import { Link } from 'react-router-dom';

function Navegation() {
  const navList = [
    ['home', 'Home'],
    ['about-me', 'Sobre mim'],
    ['projects', 'Projetos'],
    ['contact', 'Contato'],
  ]

  return (
    <nav className="navegation">
        <ul className="nav-list">
          { navList.map((item) => (
            <li key={ item[0] } className="nav-item">
              <Link to={ `#${item[0]}` }>{ item[1] }</Link>
            </li>
          )) }
        </ul>
      </nav>
  );
}

export default Navegation;
