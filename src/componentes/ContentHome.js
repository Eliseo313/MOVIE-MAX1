import React from 'react'
import card1 from '../img/card1.jpg'
import card2 from '../img/card2.jpg'
import card3 from '../img/card3.jpg'
import card4 from '../img/card4.jpg'
import card5 from '../img/card5.jpg'
import card6 from '../img/card6.jpg'
import './estilos/contentHome.css'

export const ContentHome = () => {
    return (
        <>
            <div className='contenedor'>
                <div className='div'>
                    <img className='imagen' src={card1} alt="..." />
                    <h5 className='titulo'>La Escuela del Bien y del Mal</h5>
                    <a className='reproducir' href="https://www.youtube.com/watch?v=_Xtd-76kZjQ">REPRODUCIR</a>
                </div>
                <div className='div'>
                    <img className='imagen' src={card2} alt="..." />
                    <h5 className='titulo'>Shrek</h5>
                    <a className='reproducir' href="https://www.youtube.com/watch?v=qhFPeFv4znA" role="button">REPRODUCIR</a>
                </div>
                <div className='div'>
                    <img className='imagen' src={card3} alt="..." />
                    <h5 className='titulo'>Corazones Malheridos</h5>
                    <a className='reproducir' href="https://www.youtube.com/watch?v=sbNbeSCQfX8" role="button">REPRODUCIR</a>
                </div>
                <div className='div'>
                    <img className='imagen' src={card4} alt="..." />
                    <h5 className='titulo'>Jefe en Pañalaes</h5>
                    <a className='reproducir' href="https://www.youtube.com/watch?v=Si_Ja9lBP54" role="button">REPRODUCIR</a>
                </div>
                <div className='div'>
                    <img className='imagen' src={card5} alt="..." />
                    <h5 className='titulo'>Aterrizaje de Emergencia</h5>
                    <a className='reproducir' href="https://www.youtube.com/watch?v=M9xi7nosVas" role="button">REPRODUCIR</a>
                </div>
                <div className='div'>
                    <img className='imagen' src={card6} alt="..." />
                    <h5 className='titulo'>Las Chicas del Cable</h5>
                    <a className='reproducir' href="https://www.youtube.com/watch?v=LRJw5hM13ys" role="button">REPRODUCIR</a>
                </div>
            </div>
        </>
    )
}
