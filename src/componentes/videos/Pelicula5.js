import React from 'react'
import ReactPlayer from 'react-player'

function Pelicula5() {
    return (
        <>
            <div style={{ width: "100%", height: "100%", position: 'absolute' }}>
                <ReactPlayer
                    url='https://youtu.be/d_kpkTjHhoA'
                    width="100%"
                    height="100%"
                    controls
                    playing
                />
            </div>
        </>
    )
}

export default Pelicula5