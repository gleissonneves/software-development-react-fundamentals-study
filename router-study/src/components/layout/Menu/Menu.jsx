import { Link } from "react-router-dom";
import "./Menu.css";
import React from "react";

const Menu = (props) => (
  <aside className="Menu">
    <nav>
      <ul>
        <li>
          <Link to="/" >Inicio</Link>
        </li>
        <li>
          <Link to="/about" >Sobre</Link>
        </li>
        <li>
          <Link to="/param/123" >param 123</Link>
        </li>
      </ul>
    </nav>
  </aside>
);

export default Menu;
