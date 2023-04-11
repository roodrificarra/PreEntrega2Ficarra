import Carrito from "./CartWidget/Cart.Widget";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <h3 className="brand_name">Rodritech </h3>
      <div>
        <button className="boton">PCS Armadas</button>
        <button className="boton">Placas de Video</button>
        <button className="boton">Procesadores</button>
      </div>
      <Carrito />
    </nav>
  );
};

export default Navbar;
