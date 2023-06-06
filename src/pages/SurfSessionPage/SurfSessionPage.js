import { Circles } from 'react-loader-spinner'
import { useState, useEffect } from 'react'
import useWaveTrackerAxios from '../../hooks/useWaveTrackerAxios'
import useApiData from '../../hooks/useApiData'
import SurfSessionForm from './components/SurfSessionForm'
import { toast } from 'react-toastify'

const SurfSessionPage = () => {
  const waveAxios = useWaveTrackerAxios()
  const [loading, setLoading] = useState(false)
  const [surfSpotsLoading, surfSpots, surfSpotErrors] =
    useApiData('/api/spots/')

  useEffect(() => {
    setLoading(surfSpotsLoading)
  }, [surfSpotsLoading, setLoading])

  useEffect(() => {
    if (surfSpotErrors) {
      toast.error('Unable to load surf spots.')
    }
  }, [surfSpotErrors])

  const submit = async (e) => {
    setLoading(true)
    e.preventDefault()
    const id = e.target.surfSpot.value

    try {
      await waveAxios.post(`/api/spots/${id}/sessions/`, {
        start_date: e.target.startDate.value,
        end_date: e.target.endDate.value,
        rating: e.target.rating.value,
      })

      toast.success('Surf session added!')
      e.target.startDate.value = null
      e.target.endDate.value = null
      e.target.rating.value = 0
    } catch (error) {
      toast.error('Unable to add surf session.')
    }

    setLoading(false)
  }

  return (
    <div className="form-wrapper">
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperClass="loader"
        visible={loading}
      />
      <div className="form-inner">
        <SurfSessionForm
          loading={loading}
          submit={submit}
          surfSpots={surfSpots}
        />
      </div>
    </div>
  )
}
export default SurfSessionPage
