import React from 'react'
import ReactPlayer from 'react-player'

function Card6() {
    return (
        <>
            <div style={{ width: "100%", height: "100%", position: 'absolute' }}>
                <ReactPlayer
                    url='https://www.youtube.com/watch?v=LRJw5hM13ys'
                    width="100%"
                    height="100%"
                    controls
                    playing
                />
            </div>
        </>
    )
}

export default Card6