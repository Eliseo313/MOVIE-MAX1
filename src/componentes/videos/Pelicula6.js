import React from 'react'
import ReactPlayer from 'react-player'

function Pelicula6() {
    return (
        <>
            <div style={{ width: "100%", height: "100%", position: 'absolute' }}>
                <ReactPlayer
                    url='https://youtu.be/7i-hSS2xYTI'
                    width="100%"
                    height="100%"
                    controls
                    playing
                />
            </div>
        </>
    )
}

export default Pelicula6