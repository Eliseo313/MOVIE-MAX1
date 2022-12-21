import { Header } from './componentes/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './componentes/Home';
import { Series } from './componentes/Series';
import { Peliculas } from './componentes/Peliculas';
import React, { useEffect } from "react";
import { app } from "./componentes/fb";
import  Login  from "./componentes/Login";

function App() {
  const [usuario, setUsuario] = React.useState(null);
  useEffect(() => {
    app.auth().onAuthStateChanged((usuarioFirebase) => {
      setUsuario(usuarioFirebase);
    });
  }, []);
  return <>
    {usuario ? 
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/series" element={<Series/>}/>
            <Route path="/peliculas" element={<Peliculas/>}/>
          </Routes>
      </BrowserRouter>    : <Login setUsuario={setUsuario} />
    }
  </>;
}

export default App;
