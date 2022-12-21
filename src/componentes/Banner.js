import React from 'react'
import banner1 from '../img/banner1.jpg'
import banner2 from '../img/banner2.jpg'
import banner3 from '../img/banner3.jpeg'
import './estilos/banner.css'

export const Banner = () => {
    return (
        <div className='slider'>
            <ul>
                <li>
                    <a href="https://www.youtube.com/watch?v=tNU3ToSfrHg">
                        <img src={banner1} height={500} alt="..." />
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/watch?v=d0JYlUTbv1A">
                        <img src={banner2} height={500} alt="..." />
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/watch?v=7dWs0_yqm-0">
                        <img src={banner3} height={500} alt="..." />
                    </a>
                </li>
            </ul>
        </div>
    )
}
