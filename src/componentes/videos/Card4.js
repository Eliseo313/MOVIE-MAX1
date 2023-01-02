import React from 'react'
import ReactPlayer from 'react-player'

function Card4() {
    return (
        <>
            <div style={{ width: "100%", height: "100%", position: 'absolute' }}>
                <ReactPlayer
                    url='https://www.youtube.com/watch?v=Si_Ja9lBP54'
                    width="100%"
                    height="100%"
                    controls
                    playing
                />
            </div>
        </>
    )
}

export default Card4