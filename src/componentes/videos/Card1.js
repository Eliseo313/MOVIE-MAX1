import React from 'react'
import ReactPlayer from 'react-player'

function Card1() {
  return (
    <>
      <div style={{ width: "100%", height: "100%", position: 'absolute' }}>
        <ReactPlayer
          url='https://youtu.be/_Xtd-76kZjQ'
          width="100%"
          height="100%"
          controls
          playing
        />
      </div>
    </>
  )
}

export default Card1
