import { axiosPrivate } from "./axios";

const waveTrackerFetcher = url => axiosPrivate.get(url).then(response => response.data)

export default waveTrackerFetcher