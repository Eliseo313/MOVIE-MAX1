import React from 'react'
import './estilos/footer.css'

export const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <ul>
                    <li>
                        <a className='redes' href="https://es-la.facebook.com/">
                            Facebook
                        </a>  
                    </li>
                    <li>
                        <a className='redes' href="https://www.instagram.com/accounts/login/">
                            Instagram
                        </a>
                    </li>
                    <li>
                        <a className='redes' href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZXMifQ%3D%3D%22%7D">
                            Twitter
                        </a>
                    </li>
                </ul>
                <p> &copy; 2022 Movie Max</p>
            </footer>
        </>
    )
}
