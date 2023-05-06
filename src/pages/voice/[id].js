import { useRouter } from 'next/router'
import React, { useEffect, useRef } from 'react'

const Voice = (props) => {
  const { query } = useRouter()
  const audioRef = useRef(null)
  useEffect(() => {
    if (navigator.getAutoplayPolicy('mediaelement') === 'allowed') {
      if (audioRef) {
        audioRef.current.play()
      }
    }else{
      if (audioRef) {
        audioRef.current.play()
      }
    }
  }, [audioRef])
  return (
    <div className="bg-white h-screen max-w-lg w-full mx-auto flex flex-col ">
      <img
        src="/assets/voices/logo.png"
        className="shadow-xl object-cover overflow-hidden rounded-full w-60 h-60 border mx-auto mt-20"
      />

      <div className="flex-1 flex justify-center items-center">
        <audio
          autoPlay
          ref={audioRef}
          src={`/assets/voices/${query.id}.mp3`}
          controls
        ></audio>
      </div>
    </div>
  )
}

export default Voice
