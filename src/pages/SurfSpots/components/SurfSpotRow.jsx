import { useEffect, useState } from 'react'

const SurfSpotRow = ({
  index,
  spot,
  swellBuoys,
  tideBuoys,
  updateSpot,
  deleteSpot,
}) => {
  const background = index % 2 == 0 ? 'bg-slate-100' : 'bg-transparent'

  // We don't need to track everything in "spot", just the updatables
  const initialValue = {
    id: spot.id,
    name: spot.name,
    latitude: spot.latitude,
    longitude: spot.longitude,
    swell_buoy: spot.swell_buoy.id.toString(),
    tide_buoy: spot.tide_buoy.id.toString(),
  }
  const [surfSpot, setSurfSpot] = useState(initialValue)

  useEffect(() => {
    updateSpot({ ...surfSpot }, initialValue)
    // Adding "updateSpot" to the dependency array causes infinite re-render
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [surfSpot])

  return (
    <tr className={background}>
      <td className='border py-2 px-2'>
        <input
          type='text'
          className={`w-full px-2 ${background}`}
          value={surfSpot.name}
          onChange={(e) => setSurfSpot({ ...surfSpot, name: e.target.value })}
        />
      </td>
      <td className='border py-2 px-2'>
        <input
          type='number'
          className={`w-full px-2 ${background}`}
          min={-90.0}
          max={90.0}
          step={0.000000001}
          value={surfSpot.latitude}
          onChange={(e) =>
            setSurfSpot({ ...surfSpot, latitude: e.target.value })
          }
        />
      </td>
      <td className='border py-2 px-2'>
        <input
          type='number'
          className={`w-full px-2 ${background}`}
          min={-90.0}
          max={90.0}
          step={0.000000001}
          value={surfSpot.longitude}
          onChange={(e) =>
            setSurfSpot({ ...surfSpot, longitude: e.target.value })
          }
        />
      </td>
      <td className='border py-2 px-2'>
        <select
          className={`w-full px-2 ${background}`}
          value={surfSpot.swell_buoy}
          onChange={(e) =>
            setSurfSpot({ ...surfSpot, swell_buoy: e.target.value })
          }
        >
          {swellBuoys &&
            swellBuoys.map((buoy, index) => (
              <option key={index} value={buoy.id}>
                {buoy.name}
              </option>
            ))}
        </select>
      </td>
      <td className='border py-2 px-4'>
        <select
          className={`w-full px-2 ${background}`}
          value={surfSpot.tide_buoy}
          onChange={(e) =>
            setSurfSpot({ ...surfSpot, tide_buoy: e.target.value })
          }
        >
          {tideBuoys &&
            tideBuoys.map((buoy, index) => (
              <option key={index} value={buoy.id}>
                {buoy.name}
              </option>
            ))}
        </select>
      </td>
      <td className='border py-2 px-4'>{spot.surf_sessions.length}</td>
      <td className='border py-2 px-4'>
        <button
          className='border rounded-md px-2 py-1 border-red-500 text-red-500 hover:bg-red-500 hover:text-white'
          onClick={() => {
            if (
              window.confirm(
                'Are you sure you want to delete this surf spot? This action will also delete all surf sessions associated with this spot and cannot be undone.',
              )
            ) {
              deleteSpot(spot.id)
            }
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  )
}
export default SurfSpotRow
