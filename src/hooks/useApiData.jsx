import useSWR from 'swr'
import useWaveTrackerAxios from './useWaveTrackerAxios'

function useApiData(url) {
  const waveAxios = useWaveTrackerAxios()
  const fetcher = async (url) => {
    try {
      const response = await waveAxios.get(url)
      return response.data
    } catch (error) {
      error.showToast = true
      error.toastMessage = 'Unable to load data from the server!'

      throw error
    }
  }

  const { data, error, isLoading } = useSWR(url, fetcher, {
    suspense: true,
  })

  return { data: data, error: error, isLoading: isLoading }
}
export default useApiData
