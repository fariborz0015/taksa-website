import React from 'react'

const useDelayState = ({ callback, delay }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      callback()
    }, delay)
    return () => clearTimeout(timer)
  }, [delay])
}

export default useDelayState
