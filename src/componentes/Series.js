import React from 'react'
import serie1 from '../img/serie1.jpg'
import serie2 from '../img/serie2.jpg'
import serie3 from '../img/serie3.jpg'
import serie4 from '../img/serie4.jpg'
import serie5 from '../img/serie5.jpg'
import serie6 from '../img/serie6.jpg'
import './estilos/series.css'

export const Series = () => {
    return (
        <>
            <div className='contenedor'>
                <div className='div'>
                    <img className='imagen' src={serie1} alt="..." />
                    <h5 className='titulo'>El Señor de los Cielos</h5>
                    <a className='reproducir' href="https://youtu.be/F35DWv8KVfg">REPRODUCIR</a>
                </div>
                <div className='div'>
                    <img className='imagen' src={serie2} alt="..." />
                    <h5 className='titulo'>Justicia Joven</h5>
                    <a className='reproducir' href="https://youtu.be/sLmIiYEWqOw" role="button">REPRODUCIR</a>
                </div>
                <div className='div'>
                    <img className='imagen' src={serie3} alt="..." />
                    <h5 className='titulo'>Rick y Morty</h5>
                    <a className='reproducir' href="https://youtu.be/kkEdpbznHAM" role="button">REPRODUCIR</a>
                </div>
                <div className='div'>
                    <img className='imagen' src={serie4} alt="..." />
                    <h5 className='titulo'>Anne With An E</h5>
                    <a className='reproducir' href="https://youtu.be/S5qJXYNNINo" role="button">REPRODUCIR</a>
                </div>
                <div className='div'>
                    <img className='imagen' src={serie5} alt="..." />
                    <h5 className='titulo'>Lucifer</h5>
                    <a className='reproducir' href="https://youtu.be/DaxEHaUNLp8" role="button">REPRODUCIR</a>
                </div>
                <div className='div'>
                    <img className='imagen' src={serie6} alt="..." />
                    <h5 className='titulo'>Sabrina</h5>
                    <a className='reproducir' href="https://youtu.be/51fOujPcgIE" role="button">REPRODUCIR</a>
                </div>
            </div>
        </>
    )
}

