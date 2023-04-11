import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/categoria/:categoriaId"
            element={<ItemListContainer />}
          />
          <Route path="/Item/:ItemId" element={<ItemDetailContainer />} />
          <Route path="*" element={<h1>No encontrado</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

/*
 <ItemCount
          initial={1}
          stock={10}
          Agregar={(cantidad) => console.log("Cantidad agregada", cantidad)}
        />
        */
