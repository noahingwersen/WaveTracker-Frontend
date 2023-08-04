import { useState } from 'react'
import SubmitButton from '../../../components/SubmitButton'
import useWaveTrackerAxios from '../../../hooks/useWaveTrackerAxios'
import { toast } from 'react-toastify'

const SurfSessionForm = ({ surfSpots }) => {
  const waveAxios = useWaveTrackerAxios()
  const [loading, setLoading] = useState(false)
  const [rating, setRating] = useState(0)

  const submit = async (e) => {
    setLoading(true)
    e.preventDefault()
    const id = e.target.surfSpot.value
    try {
      await waveAxios.post(`/api/spots/${id}/sessions/`, {
        start_date: e.target.start.value,
        end_date: e.target.end.value,
        rating: e.target.rating.value,
      })

      toast.success('Surf session added!')
      e.target.start.value = null
      e.target.end.value = null
      setRating(0)
    } catch (error) {
      console.log(error)
      toast.error('Unable to add surf session')
    }
    setLoading(false)
  }

  return (
    <form onSubmit={submit}>
      <div className='my-4'>
        <label htmlFor='surfSpotInput' className='text-lg'>
          Surf Spot
        </label>
        <select
          className='w-full rounded border py-1 px-2 mt-2 bg-white text-lg'
          id='surfSpotInput'
          name='surfSpot'
          required
        >
          {surfSpots?.map((spot, index) => (
            <option key={index} value={spot.id}>
              {spot.name}
            </option>
          ))}
        </select>
      </div>
      <div className='my-4'>
        <label htmlFor='startInput' className='text-lg'>
          Start
        </label>
        <input
          type='datetime-local'
          className='w-full rounded border py-1 px-2 mt-2'
          id='startInput'
          name='start'
        />
      </div>
      <div className='my-4'>
        <label htmlFor='stopInput' className='text-lg'>
          End
        </label>
        <input
          type='datetime-local'
          className='w-full rounded border py-1 px-2 mt-2'
          id='endInput'
          name='end'
        />
      </div>
      <div>
        <label htmlFor='ratingInput' className='text-lg'>
          Rating (0-10)
        </label>
        <input
          type='range'
          className='w-full rounded border py-1 px-2 mt-2'
          min='0'
          max='10'
          id='ratingInput'
          name='rating'
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <p className='text-sm text-gray-500'>Current value: {rating}</p>
      </div>
      <SubmitButton
        text='Add'
        className='w-full bg-blue-500 hover:bg-blue-400 disabled:bg-gray-500 text-white mb-4 mt-8 py-2'
        loading={loading}
        disabled={loading}
      />
    </form>
  )
}
export default SurfSessionForm
