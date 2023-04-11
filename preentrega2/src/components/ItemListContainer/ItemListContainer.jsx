import { useEffect } from "react";
import { useState } from "react";
import { getProductos } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

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
