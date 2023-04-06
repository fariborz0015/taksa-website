import { useVideoPlayer } from '@/providers/utils/VideoPlayerProvider'
import { useRef } from 'react'

function VideoPlayer(props) {
  const videoRef = useRef(null)
  const { currentPlayer, setCurrentPlayer } = useVideoPlayer()

  function handlePlay() {
    if (currentPlayer && currentPlayer !== videoRef.current) {
      currentPlayer.pause()
    }
    setCurrentPlayer(videoRef.current)
    videoRef.current.play()
  }

  return <video ref={videoRef} {...props} onPlay={handlePlay} />
}

export default VideoPlayer