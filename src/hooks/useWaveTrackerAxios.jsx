import { axiosPrivate } from '../api/axios'
import { useEffect } from 'react'
import useAuth from './useAuth'
import { toast } from 'react-toastify'

const useWaveTrackerAxios = () => {
  const { authTokens, updateToken, logoutUser } = useAuth()

  useEffect(() => {
    // Add access token to any request that is missing it
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers['Authorization']) {
          config.headers['Authorization'] = `Bearer ${authTokens?.access}`
        }
        return config
      },
      (error) => Promise.reject(error),
    )

    // If the response is 401 (unauthorized) or 403 (forbidden), try refreshing the access token and resend
    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config
        if (
          (error?.response?.status === 403 ||
            error?.response?.status === 401) &&
          !prevRequest?.sent
        ) {
          prevRequest.sent = true
          const newToken = await updateToken()
          prevRequest.headers['Authorization'] = `Bearer ${newToken}`
          return axiosPrivate(prevRequest)
        }
        if (error?.name === 'CanceledError') {
          // Canceled from useEffect return
          return Promise.resolve(error)
        }

        if (error.config.url.includes('token')) {
          toast.error('An unkown authentication error has occurred.')
          logoutUser()
        }

        return Promise.reject(error)
      },
    )

    // Remove interceptors when unloaded
    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept)
      axiosPrivate.interceptors.response.eject(responseIntercept)
    }
  }, [authTokens, logoutUser, updateToken])

  return axiosPrivate
}

export default useWaveTrackerAxios
