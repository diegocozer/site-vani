import { Link } from "react-router-dom";
import "./NavBar.css";
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default () => {
    function toggleMenu() {
        const nav = document.getElementById("nav");
        nav.classList.toggle('active')
      }
     


  return (
    <header id="header">
      <a href="" id="logo">
        Logo
      </a>
      <nav id="nav">
          <button id="btn-mobile" onClick={toggleMenu.bind(this)}>Menu<span id="hamburguer"></span></button>
        <ul id="menu">
          <li>
              <Link to='/Home'>Home</Link>
          </li>
          <li>
              <Link to='/fotos'>Fotos</Link>
          </li>
          <li>
          <AnchorLink offset={100} href="#texto-secao">Sobre nos</AnchorLink>
          </li>
          <li>
              <AnchorLink href="#contato" offset={100}>Contato</AnchorLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
