import { useEffect } from "react";
import { useState } from "react";
import { getProductos, getProductosById } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

  const { categoriaId } = useParams();

  useEffect(() => {
    const asyncFunc = categoriaId ? getProductosByCategory : getProductos;
    asyncFunc(categoriaId)
      .then((response) => {
        setProductos(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoriaId]);

  useEffect(() => {
    getProductos()
      .then((response) => {
        setProductos(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className="main_title">
      <h1>{greeting}</h1>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
