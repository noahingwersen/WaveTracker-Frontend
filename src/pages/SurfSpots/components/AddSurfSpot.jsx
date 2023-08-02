import BlankForm from '../../../components/BlankForm'
import SurfSpotForm from './SurfSpotForm'
import useApiData from '../../../hooks/useApiData'
import LoadingSpinner from '../../../components/LoadingSpinner'
import { useEffect } from 'react'

const AddSurfSpot = () => {
  const [swellBuoys, swellBuoysLoading, swellBuoysError] =
    useApiData('/api/buoys/swell/')
  const [tideBuoys, tideBuoysLoading, tideBuoysError] =
    useApiData('/api/buoys/tide/')

  const loading = swellBuoysLoading || tideBuoysLoading

  useEffect(() => {
    if (swellBuoysError || tideBuoysError) {
      throw new Error('Unable to get buoy data')
    }
  })

  return loading ? (
    <LoadingSpinner />
  ) : (
    <BlankForm
      header='Add a Surf Spot'
      form={<SurfSpotForm swellBuoys={swellBuoys} tideBuoys={tideBuoys} />}
    />
  )
}
export default AddSurfSpot
