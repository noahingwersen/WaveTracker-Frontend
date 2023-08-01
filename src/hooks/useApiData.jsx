import { useState, useEffect } from 'react'
import useWaveTrackerAxios from './useWaveTrackerAxios'
import { toast } from 'react-toastify'

function useApiData(endpoint) {
  const waveAxios = useWaveTrackerAxios()

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(null)
      try {
        const response = await waveAxios.get(endpoint)
        setData(await response.data)
      } catch (error) {
        setError(error)
        toast.error('Unable to fetch data from the server!')
      }
      setLoading(false)
    }

    fetchData()
  }, [endpoint, waveAxios])

  return [data, loading, error]
}
export default useApiData
