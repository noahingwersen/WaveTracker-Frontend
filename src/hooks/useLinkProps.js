import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function useLinkProps() {
  const { state } = useLocation()
  const [data, setData] = useState()

  useEffect(() => {
    if (state) {
      setData(state)
    }
  }, [state])

  return data
}
