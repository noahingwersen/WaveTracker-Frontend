import { useEffect } from 'react'
import BlankForm from '../../../components/BlankForm'
import LoadingSpinner from '../../../components/LoadingSpinner'
import useApiData from '../../../hooks/useApiData'
import SurfSessionForm from './SurfSessionForm'

const AddSurfSession = () => {
  const [surfSpots, loading, error] = useApiData('/api/spots/')

  useEffect(() => {
    if (error) {
      throw error
    }
  }, [error])

  return loading ? (
    <LoadingSpinner />
  ) : (
    <BlankForm
      header='Add a Surf Session'
      form={<SurfSessionForm surfSpots={surfSpots} />}
    />
  )
}
export default AddSurfSession
