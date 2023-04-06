import { createContext, useContext, useState } from 'react';

const VideoPlayerContext = createContext(null);

export function VideoPlayerProvider({ children }) {
  const [currentPlayer, setCurrentPlayer] = useState(null);

  return (
    <VideoPlayerContext.Provider value={{ currentPlayer, setCurrentPlayer }}>
      {children}
    </VideoPlayerContext.Provider>
  );
}

export function useVideoPlayer() {
  const context = useContext(VideoPlayerContext);

  if (!context) {
    throw new Error('useVideoPlayer must be used within a VideoPlayerProvider');
  }

  return context;
}
