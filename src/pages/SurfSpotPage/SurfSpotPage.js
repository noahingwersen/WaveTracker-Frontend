import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import useBuoys from '../../hooks/useBuoys'
import { Circles } from 'react-loader-spinner'
import SurfSpotForm from './components/SurfSpotForm'
import useLinkProps from '../../hooks/useLinkProps'
import SurfSpotView from './components/SurfSpotView'
import useWaveTrackerAxios from '../../hooks/useWaveTrackerAxios'
import { toast } from 'react-toastify'

const SurfSpotPage = () => {
  const [loading, setLoading] = useState(false)
  const [buoysLoading, swellBuoys, tideBuoys, buoyErrors] = useBuoys()
  const waveAxios = useWaveTrackerAxios()
  const location = useLinkProps()

  useEffect(() => {
    setLoading(buoysLoading)
  }, [buoysLoading, setLoading])

  useEffect(() => {
    if (buoyErrors) {
      toast.error('Error loading buoys')
    }
  }, [buoyErrors])

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      await waveAxios.post('/api/spots/', {
        name: e.target.name.value,
        latitude: e.target.latitude.value,
        longitude: e.target.longitude.value,
        swell_buoy: e.target.swellBuoy.value,
        tide_buoy: e.target.tideBuoy.value,
      })

      toast.success('Surf spot added!')
      e.target.name.value = ''
      e.target.latitude.value = ''
      e.target.longitude.value = ''
    } catch (error) {
      toast.error('Unable to add surf spot.')
    }
    setLoading(false)
  }

  return (
    <>
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperClass="loader"
        visible={loading}
      />
      <Routes>
        <Route
          element={
            <SurfSpotForm
              loading={loading}
              submit={submit}
              swellBuoys={swellBuoys}
              tideBuoys={tideBuoys}
              location={location ? location : { latitude: '', longitude: '' }}
            />
          }
          path="/add"
        />
        <Route
          element={
            <SurfSpotView
              setLoading={setLoading}
              swellBuoys={swellBuoys}
              tideBuoys={tideBuoys}
            />
          }
          path="/"
          exact
        />
      </Routes>
    </>
  )
}
export default SurfSpotPage
