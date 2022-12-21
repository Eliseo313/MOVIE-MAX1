import React from 'react'
import logo from '../img/movie_max.png'
import { NavLink } from 'react-router-dom'
import './estilos/header.css'
import { app } from "./fb";

export const Header = () => {
    const cerrarSesion = () => {
        app.auth().signOut();
      };
  return (
    <>
        <header className='header'>
            <NavLink  to="/home">
                 <img src={logo} className="logo" alt=""/>
            </NavLink>
            <h1 className='nombre'> MOVIE MAX</h1>
            <input type="checkbox" id="check" /> 
            <label for="check" className="mostrar-menu">
                &#8801;
            </label>
            <nav className='menu'>
                <NavLink to="/home" className='opciones-menu'>Inicio</NavLink>
                <NavLink to="/series" className='opciones-menu'>Series</NavLink>
                <NavLink to="/peliculas" className='opciones-menu'>Peliculas</NavLink>
                <button onClick={cerrarSesion}>Cerrar Sesión</button>
                <form className='formulario' role="search">
                    <input type="search" placeholder="Titulo"/>
                    <button type="submit">Buscar</button>
                </form> 
                <label for="check" className="esconder-menu">
                    &#215;
                </label>
            </nav>
        </header>
    </>
  )
}
