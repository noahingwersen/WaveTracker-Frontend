import { useEffect, useState } from 'react'
import LoadingSpinner from '../../../components/LoadingSpinner'
import useApiData from '../../../hooks/useApiData'
import SurfSpotRow from './SurfSpotRow'
import SubmitButton from '../../../components/SubmitButton'
import useWaveTrackerAxios from '../../../hooks/useWaveTrackerAxios'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

const SurfSpotTable = () => {
  const waveAxios = useWaveTrackerAxios()
  const [saving, setSaving] = useState(false)
  const [data, dataLoading, dataError] = useApiData(
    '/api/spots/',
    'Unable to load surf spots!',
  )
  const [swellBuoys, swellBuoysLoading, swellBuoysError] = useApiData(
    '/api/buoys/swell/',
    'Unable to load swell buoys!',
  )
  const [tideBuoys, tideBuoysLoading, tideBuoysError] = useApiData(
    '/api/buoys/tide/',
    'Unable to load tide buoys!',
  )

  const loading = dataLoading || swellBuoysLoading || tideBuoysLoading
  const [updatedSpots, setUpdatedSpots] = useState([])
  const [surfSpots, setSurfSpots] = useState([])

  useEffect(() => {
    setSurfSpots(data)
  }, [data])

  useEffect(() => {
    if (dataError || swellBuoysError || tideBuoysError) {
      throw new Error('Unable to load surf spot data')
    }
  }, [dataError, swellBuoysError, tideBuoysError])

  const updateSpot = (spot, initialValue) => {
    const changed = JSON.stringify(spot) !== JSON.stringify(initialValue)
    const inUpdatedSpots = updatedSpots.some((s) => s.id === spot.id)

    if (changed) {
      if (!inUpdatedSpots) {
        // Add to array
        setUpdatedSpots([...updatedSpots, spot])
      } else {
        // Update entry in array
        setUpdatedSpots(
          updatedSpots.map((s) => {
            if (s.id === spot.id) {
              return { ...spot }
            } else {
              return s
            }
          }),
        )
      }
    } else {
      if (inUpdatedSpots) {
        // Remove entry from array
        setUpdatedSpots(updatedSpots.filter((s) => s.id !== spot.id))
      }
    }
  }

  const saveChanges = async (e) => {
    e.preventDefault()
    setSaving(true)
    try {
      const response = await waveAxios.put('/api/spots/', updatedSpots)
      setSurfSpots(await response.data)
      setUpdatedSpots([])
      toast.success('Surf spots saved!')
    } catch (error) {
      console.log(error)
      toast.error('Unable to save surf spots')
    }
    setSaving(false)
  }

  const deleteSpot = async (id) => {
    try {
      await waveAxios.delete('/api/spots/', { data: { id: id } })
      setSurfSpots(surfSpots.filter((s) => s.id !== id))
      toast.success('Surf spot removed')
    } catch (error) {
      console.log(error)
      toast.error('Unable to remove surf spot')
    }
  }

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
            {surfSpots &&
              surfSpots.map((surfSpot, index) => (
                <SurfSpotRow
                  key={index}
                  spot={surfSpot}
                  index={index}
                  swellBuoys={swellBuoys}
                  tideBuoys={tideBuoys}
                  updateSpot={updateSpot}
                  deleteSpot={deleteSpot}
                />
              ))}
          </tbody>
        </table>
        <div className='flex items-center justify-between'>
          <form onSubmit={saveChanges}>
            <SubmitButton
              text='Save'
              className='bg-green-500 hover:bg-green-400 disabled:bg-gray-500 text-white mt-4 py-2 w-24'
              disabled={updatedSpots.length === 0 || saving}
              loading={saving}
            />
          </form>
          <Link
            className='text-center w-24 rounded-md px-3 bg-blue-500 hover:bg-blue-400 disabled:bg-gray-500 text-white mt-4 py-2'
            to='/spots/add'
          >
            Add
          </Link>
        </div>
      </div>
    </div>
  )
}
export default SurfSpotTable
