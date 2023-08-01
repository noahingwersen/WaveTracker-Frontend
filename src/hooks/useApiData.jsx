import useSWR from 'swr'
import { useCallback } from 'react'
import axiosPrivate from '../api/axios'
import useAuth from './useAuth'

function useApiData(apiUrl) {
  const { authTokens } = useAuth()

  const fetcher = useCallback(
    async (url) => {
      try {
        const response = await axiosPrivate.get(url, {
          headers: { Authorization: `Bearer ${authTokens.access}` },
        })
        return await response.data
      } catch (error) {
        error.showToast = true
        error.toastMessage = 'Unable to fetch data from the server!'

        throw error
      }
    },
    [authTokens],
  )

  const { data, error, isLoading } = useSWR(apiUrl, fetcher)

  return { data: data, error: error, isLoading: isLoading }
}
export default useApiData
