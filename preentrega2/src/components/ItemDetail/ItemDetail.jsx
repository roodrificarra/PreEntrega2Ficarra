import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({
  id,
  nombre,
  img,
  categoria,
  descripcion,
  precio,
  stock,
}) => {
  return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">{nombre}</h2>
      </header>
      <picture>
        <img src="{img}" alt="{nombre}" className="ItemImg" />
      </picture>
      <section>
        <p className="Info">Categoria: {categoria}</p>
        <p className="Info">Descripción: {descripcion}</p>
        <p className="Info">Precio: {precio}</p>
      </section>
      <footer className="ItemFooter">
        <ItemCount
          initial={1}
          stock={stock}
          Agregar={(cantidad) => ("Cantidad agregada", cantidad)}
        />
      </footer>
    </article>
  );
};

export default ItemDetail;
