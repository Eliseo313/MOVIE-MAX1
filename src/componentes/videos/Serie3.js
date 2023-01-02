import React from 'react'
import ReactPlayer from 'react-player'

function Serie3() {
    return (
        <>
            <div style={{ width: "100%", height: "100%", position: 'absolute' }}>
                <ReactPlayer
                    url='https://youtu.be/kkEdpbznHAM'
                    width="100%"
                    height="100%"
                    controls
                    playing
                />
            </div>
        </>
    )
}

export default Serie3