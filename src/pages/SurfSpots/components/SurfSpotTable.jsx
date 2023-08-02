import { useEffect } from 'react'
import LoadingSpinner from '../../../components/LoadingSpinner'
import useApiData from '../../../hooks/useApiData'
import SurfSpotRow from './SurfSpotRow'

const SurfSpotTable = () => {
  const [data, loading, error] = useApiData('/api/spots/')

  useEffect(() => {
    if (error) {
      throw error
    }
  }, [error])

  return loading ? (
    <LoadingSpinner />
  ) : (
    <div className='w-full h-full bg-white'>
      <div className='w-full p-8'>
        <h1 className='text-4xl font-medium mb-4'>Surf Spots</h1>
        <table className='table-auto w-full border border-slate-300 text-left'>
          <thead>
            <tr>
              <th className='border py-2 px-4'>Name</th>
              <th className='border py-2 px-4'> Latitude (deg)</th>
              <th className='border py-2 px-4'>Longitude (deg)</th>
              <th className='border py-2 px-4'>Swell Buoy</th>
              <th className='border py-2 px-4'>Tide Buoy</th>
              <th className='border py-2 px-4'>Surf Sessions</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((surfSpot, index) => (
                <SurfSpotRow key={index} spot={surfSpot} index={index} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default SurfSpotTable
