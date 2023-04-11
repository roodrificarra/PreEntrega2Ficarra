import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, initial, Agregar }) => {
  const [cantidad, setCantidad] = useState(initial);

  const incrementar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const restar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };
  return (
    <div className="contenedor">
      <div className="controles">
        <button className="btn" onClick={restar}>
          -
        </button>
        <h4 className="numero">{cantidad}</h4>
        <button className="btn" onClick={incrementar}>
          +
        </button>
      </div>
      <div>
        <button
          className="btn"
          onClick={() => Agregar(cantidad)}
          disabled={!stock}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
