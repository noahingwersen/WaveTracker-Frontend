import waveTrackerFetcher from "../api/fetcher"
import useSWR from 'swr'

function useApiData(url) {
    const {data, error, isLoading} = useSWR(url, waveTrackerFetcher, {suspense: true})

    return {data: data, error: error, isLoading: isLoading}

}
export default useApiData