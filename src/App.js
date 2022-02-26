import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main"
import SearchModelo from "./components/SearchModelo"
import SearchRedireccionado from './components/SearchRedireccionado'
const App = () => {

  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/buscar-redireccion/:nombre" element={<SearchRedireccionado />}></Route>
      <Route path="/busqueda" element={<SearchModelo />}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
