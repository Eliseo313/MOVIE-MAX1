import React from 'react'
import pelicula1 from '../img/pelicula1.jpg'
import pelicula2 from '../img/pelicula2.jpg'
import pelicula3 from '../img/pelicula3.jpg'
import pelicula4 from '../img/pelicula4.jpg'
import pelicula5 from '../img/pelicula5.jpg'
import pelicula6 from '../img/pelicula6.jpg'
import './estilos/peliculas.css'

export const Peliculas = () => {
    return (
        <>
            <div className='contenedor'>
                <div className='div'>
                    <img className='imagen' src={pelicula1} alt="..." />
                    <h5 className='titulo'>Black Adam</h5>
                    <a className='reproducir' href="https://youtu.be/hcD9I3ckqnA">REPRODUCIR</a>
                </div>
                <div className='div'>
                    <img className='imagen' src={pelicula2} alt="..." />
                    <h5 className='titulo'>Vertigo</h5>
                    <a className='reproducir' href="https://youtu.be/_snnyypPf08" role="button">REPRODUCIR</a>
                </div>
                <div className='div'>
                    <img className='imagen' src={pelicula3} alt="..." />
                    <h5 className='titulo'>Dragon Ball</h5>
                    <a className='reproducir' href="https://youtu.be/lrCFmYD4114" role="button">REPRODUCIR</a>
                </div>
                <div className='div'>
                    <img className='imagen' src={pelicula4} alt="..." />
                    <h5 className='titulo'>Sonic</h5>
                    <a className='reproducir' href="https://youtu.be/OGca96afgtM" role="button">REPRODUCIR</a>
                </div>
                <div className='div'>
                    <img className='imagen' src={pelicula5} alt="..." />
                    <h5 className='titulo'>La Laguna Azul</h5>
                    <a className='reproducir' href="https://youtu.be/d_kpkTjHhoA" role="button">REPRODUCIR</a>
                </div>
                <div className='div'>
                    <img className='imagen' src={pelicula6} alt="..." />
                    <h5 className='titulo'>Matilda</h5>
                    <a className='reproducir' href="https://youtu.be/7i-hSS2xYTI" role="button">REPRODUCIR</a>
                </div>
            </div>
        </>
    )
}
