import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './componentes/Home';
import { Series } from './componentes/Series';
import { Peliculas } from './componentes/Peliculas';
import React, { useEffect } from "react";
import { app } from "./componentes/fb";
import  Login  from "./componentes/Login";
import Mostrar from './componentes/Mostrar';
import Crear from './componentes/Crear';
import Editar from './componentes/Editar';
import { Header } from './componentes/Header';
import Card1 from './componentes/videos/Card1';
import Card2 from './componentes/videos/Card2';
import Card3 from './componentes/videos/Card3';
import Card4 from './componentes/videos/Card4';
import Card5 from './componentes/videos/Card5';
import Card6 from './componentes/videos/Card6';
import Pelicula1 from './componentes/videos/Pelicula1';
import Pelicula2 from './componentes/videos/Pelicula2';
import Pelicula3 from './componentes/videos/Pelicula3';
import Pelicula4 from './componentes/videos/Pelicula4';
import Pelicula5 from './componentes/videos/Pelicula5';
import Pelicula6 from './componentes/videos/Pelicula6';
import Serie1 from './componentes/videos/Serie1';
import Serie2 from './componentes/videos/Serie2';
import Serie3 from './componentes/videos/Serie3';
import Serie4 from './componentes/videos/Serie4';
import Serie5 from './componentes/videos/Serie5';
import Serie6 from './componentes/videos/Serie6';

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
            <Route path="/" element={<Mostrar/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/series" element={<Series/>}/>
            <Route path="/peliculas" element={<Peliculas/>}/>
            <Route path="/crear" element={<Crear/>}/>
            <Route path="/editar/:id" element={<Editar/>}/>
            <Route path="/card1" element={<Card1/>}/>
            <Route path="/card2" element={<Card2/>}/>
            <Route path="/card3" element={<Card3/>}/>
            <Route path="/card4" element={<Card4/>}/>
            <Route path="/card5" element={<Card5/>}/>
            <Route path="/card6" element={<Card6/>}/>
            <Route path="/pelicula1" element={<Pelicula1/>}/>
            <Route path="/pelicula2" element={<Pelicula2/>}/>
            <Route path="/pelicula3" element={<Pelicula3/>}/>
            <Route path="/pelicula4" element={<Pelicula4/>}/>
            <Route path="/pelicula5" element={<Pelicula5/>}/>
            <Route path="/pelicula6" element={<Pelicula6/>}/>
            <Route path="/serie1" element={<Serie1/>}/>
            <Route path="/serie2" element={<Serie2/>}/>
            <Route path="/serie3" element={<Serie3/>}/>
            <Route path="/serie4" element={<Serie4/>}/>
            <Route path="/serie5" element={<Serie5/>}/>
            <Route path="/serie6" element={<Serie6/>}/>
          </Routes>
      </BrowserRouter>    : <Login setUsuario={setUsuario} />
    }
  </>;
}

export default App;
