import { useState, useEffect } from 'react'
import useWaveTrackerAxios from './useWaveTrackerAxios'

function useApiData(url) {
  const waveAxios = useWaveTrackerAxios()
  const controller = new AbortController()
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState()

  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      try {
        const response = await waveAxios.get(url, {
          signal: controller.signal,
        })
        setData(await response.data)
      } catch (err) {
        console.log(err)
        setErrors(err)
      }
      setLoading(false)
    }
    getData()

    return () => {
      controller.abort()
    }
  }, [url])

  return [loading, data, errors]
}
export default useApiData
