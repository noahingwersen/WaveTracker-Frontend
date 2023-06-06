import useApiData from './useApiData'
import { useState, useEffect } from 'react'

function useBuoys() {
  const [swellBuoys, setSwellBuoys] = useState([])
  const [tideBuoys, setTideBuoys] = useState([])
  const [loading, buoys, errors] = useApiData('/api/buoys/')

  useEffect(() => {
    if (Array.isArray(buoys) && buoys.length > 0) {
      const tempSwellBuoys = []
      const tempTideBuoys = []
      for (let buoy of buoys) {
        if (buoy.marker_type === 'SwellBuoy') {
          tempSwellBuoys.push(buoy)
        } else if (buoy.marker_type === 'TideBuoy') {
          tempTideBuoys.push(buoy)
        }
      }

      setSwellBuoys(tempSwellBuoys)
      setTideBuoys(tempTideBuoys)
    }
  }, [buoys])

  return [loading, swellBuoys, tideBuoys, errors]
}
export default useBuoys
