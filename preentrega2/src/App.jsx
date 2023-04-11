import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <ItemListContainer greeting={"Bienvenidos a Rodritech"} />
        <ItemCount
          initial={1}
          stock={10}
          Agregar={(cantidad) => console.log("Cantidad agregada", cantidad)}
        />
        <ItemListContainer />
      </div>
    </div>
  );
}

export default App;
