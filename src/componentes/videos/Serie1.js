import React from 'react'
import ReactPlayer from 'react-player'

function Serie1() {
    return (
        <>
            <div style={{ width: "100%", height: "100%", position: 'absolute' }}>
                <ReactPlayer
                    url='https://youtu.be/F35DWv8KVfg'
                    width="100%"
                    height="100%"
                    controls
                    playing
                />
            </div>
        </>
    )
}
export default Serie1