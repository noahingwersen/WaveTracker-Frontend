import { axiosPrivate } from "./axios";

const waveTrackerFetcher = async url => {
    // axiosPrivate.get(url).then(response => response.data)
    try {
        const response = await axiosPrivate.get(url)
        return response.data
    } catch (error) {
        error.showToast = true
        error.toastMessage = "Unable to load data from the server!"

        throw error
    }
}
export default waveTrackerFetcher