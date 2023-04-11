import CartWidget from "./CartWidget/Cart.Widget";

import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <Link to="/">
        <h3 className="brand_name">Rodritech</h3>
      </Link>
      <div className="Categorias">
        <NavLink
          to={`/categoria/celular`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Celulares
        </NavLink>
        <NavLink
          to={`/categoria/celular`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Tablets
        </NavLink>
        <NavLink
          to={`/categoria/celular`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
        >
          Notebooks
        </NavLink>
      </div>
      <CartWidget />
    </nav>
  );
};

export default Navbar;
