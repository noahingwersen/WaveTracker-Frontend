import { useState } from 'react'
import SubmitButton from '../../../components/SubmitButton'
import useWaveTrackerAxios from '../../../hooks/useWaveTrackerAxios'
import { toast } from 'react-toastify'

const SurfSpotForm = ({ swellBuoys, tideBuoys }) => {
  const [loading, setLoading] = useState(false)
  const waveAxios = useWaveTrackerAxios()

  const submit = async (e) => {
    setLoading(true)
    e.preventDefault()

    try {
      await waveAxios.post('/api/spots/', {
        name: e.target.spotName.value,
        latitude: e.target.latitude.value,
        longitude: e.target.longitude.value,
        swell_buoy: e.target.swellBuoy.value,
        tide_buoy: e.target.tideBuoy.value,
      })

      toast.success('Surf spot added!')
      e.target.spotName.value = ''
      e.target.latitude.value = ''
      e.target.longitude.value = ''
    } catch (error) {
      console.log(error)
      toast.error('Unable to add surf spot')
    }
    setLoading(false)
  }

  return (
    <form onSubmit={submit}>
      <div className='my-4'>
        <label htmlFor='spotNameInput' className='text-lg'>
          Name
        </label>
        <input
          type='text'
          className='w-full rounded border py-1 px-2 mt-2'
          id='spotNameInput'
          name='spotName'
          required
        />
      </div>
      <div className='my-4'>
        <label htmlFor='latitudeInput' className='text-lg'>
          Latitude
        </label>
        <input
          type='number'
          className='w-full rounded border py-1 px-2 mt-2'
          min={-90.0}
          max={90.0}
          step={0.000000001}
          id='latitudeInput'
          name='latitude'
          required
        />
      </div>
      <div className='my-4'>
        <label htmlFor='longitudeInput' className='text-lg'>
          Longitude
        </label>
        <input
          type='number'
          className='w-full rounded border py-1 px-2 mt-2'
          min={-90.0}
          max={90.0}
          step={0.000000001}
          id='longitudeInput'
          name='longitude'
          required
        />
      </div>
      <div className='my-4'>
        <label htmlFor='swellBuoyInput' className='text-lg'>
          Swell Buoy
        </label>
        <select
          className='w-full rounded border py-1 px-2 mt-2 bg-white text-lg'
          id='swellBuoyInput'
          name='swellBuoy'
          required
        >
          {swellBuoys &&
            swellBuoys.map((buoy, index) => (
              <option key={index} value={buoy.id}>
                {buoy.name}
              </option>
            ))}
        </select>
      </div>
      <div className='my-4'>
        <label htmlFor='tideBuoyInput' className='text-lg'>
          Tide Buoy
        </label>
        <select
          className='w-full rounded border py-1 px-2 mt-2 bg-white text-lg'
          id='tideBuoyInput'
          name='tideBuoy'
          required
        >
          {tideBuoys &&
            tideBuoys.map((buoy, index) => (
              <option key={index} value={buoy.id}>
                {buoy.name}
              </option>
            ))}
        </select>
      </div>
      <SubmitButton
        text='Add'
        className='bg-blue-500 hover:bg-blue-400 disabled:bg-gray-500 text-white mb-4 mt-8 py-2'
        loading={loading}
        disabled={loading}
      />
    </form>
  )
}
export default SurfSpotForm
