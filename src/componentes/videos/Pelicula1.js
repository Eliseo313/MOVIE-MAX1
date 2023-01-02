import React from 'react'
import ReactPlayer from 'react-player'

function Pelicula1() {
    return (
        <>
            <div style={{ width: "100%", height: "100%", position: 'absolute' }}>
                <ReactPlayer
                    url='https://youtu.be/hcD9I3ckqnA'
                    width="100%"
                    height="100%"
                    controls
                    playing
                />
            </div>
        </>
    )
}
export default Pelicula1