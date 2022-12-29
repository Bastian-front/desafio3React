import { useState } from "react";
import { BaseColaboradores } from './BaseColaboradores.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from "./Componentes/Formulario";
import Header from "./Componentes/Header.jsx";
import ListaColaboradores from "./Componentes/ListaColaboradores";



function App() {

  const [lstColaboradores, setlstColaboradores] = useState (BaseColaboradores);
  const [listaFiltrada, setListaFiltrada] = useState (BaseColaboradores);

  return (
    <div className="App">
    <Header 
    listaFiltrada={listaFiltrada}
    lstColaboradores ={lstColaboradores}
    setListaFiltrada={setListaFiltrada}
    ></Header>
    <Formulario 
    setlstColaboradores={setlstColaboradores}
    lstColaboradores ={lstColaboradores}
    setListaFiltrada={setListaFiltrada}
    ></Formulario>

    <ListaColaboradores 

    lstColaboradores ={listaFiltrada} 
    setlstColaboradores={setlstColaboradores}>

    </ListaColaboradores>
    
    </div>
  );
}

export default App;
