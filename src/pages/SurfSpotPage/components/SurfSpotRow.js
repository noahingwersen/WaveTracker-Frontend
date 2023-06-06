import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import useWaveTrackerAxios from '../../../hooks/useWaveTrackerAxios'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

const SurfSpotRow = ({
  spot,
  swellBuoys,
  tideBuoys,
  setEdited,
  allSpots,
  setAllSpots,
  updatedSpots,
  setUpdatedSpots,
}) => {
  const waveAxios = useWaveTrackerAxios()
  const [name, setName] = useState(spot.name)
  const [latitude, setLatitude] = useState(spot.latitude)
  const [longitude, setLongitude] = useState(spot.longitude)
  const [swellBuoy, setSwellBuoy] = useState(spot.swell_buoy.id)
  const [tideBuoy, setTideBuoy] = useState(spot.tide_buoy.id)

  const deleteSpot = async (spot) => {
    try {
      await waveAxios.delete('api/spots/', {
        data: {
          id: spot.id,
        },
      })

      setAllSpots(
        allSpots.filter((thisSpot) => {
          return thisSpot.id !== spot.id
        })
      )
      toast.success('Surf spot removed.')
    } catch (errors) {
      toast.error('Unable to delete surf spot.')
    }
  }

  useEffect(() => {
    const updatedSpot = {
      id: spot.id,
      name: name,
      latitude: latitude,
      longitude: longitude,
      swell_buoy: swellBuoy,
      tide_buoy: tideBuoy,
    }

    let newSpots
    if (updatedSpots.some((s) => s.id === spot.id)) {
      newSpots = updatedSpots.map((item) => {
        if (item.id === spot.id) {
          return updatedSpot
        } else {
          return item
        }
      })
    } else {
      newSpots = [...updatedSpots, updatedSpot]
    }

    setUpdatedSpots(newSpots)
  }, [name, latitude, longitude, swellBuoy, tideBuoy])

  return (
    <tr>
      <td>
        <Form.Control
          type="text"
          plaintext
          value={name}
          onChange={(e) => {
            setEdited(true)
            setName(e.target.value)
          }}
        />
      </td>
      <td>
        <Form.Control
          type="number"
          min={-90.0}
          max={90.0}
          step={0.000000001}
          plaintext
          value={latitude}
          onChange={(e) => {
            setEdited(true)
            setLatitude(e.target.value)
          }}
        />
      </td>
      <td>
        <Form.Control
          type="number"
          min={-180.0}
          max={180.0}
          step={0.000000001}
          plaintext
          value={longitude}
          onChange={(e) => {
            setEdited(true)
            setLongitude(e.target.value)
          }}
        />
      </td>
      <td className="select">
        <Form.Select
          value={swellBuoy}
          onChange={(e) => {
            setEdited(true)
            setSwellBuoy(e.target.value)
          }}
        >
          {swellBuoys &&
            swellBuoys.map((buoy) => (
              <option key={buoy.id} value={buoy.id}>
                {buoy.name}
              </option>
            ))}
        </Form.Select>
      </td>
      <td className="select">
        <Form.Select
          value={tideBuoy}
          onChange={(e) => {
            setEdited(true)
            setTideBuoy(e.target.value)
          }}
        >
          {tideBuoys &&
            tideBuoys.map((buoy) => (
              <option key={buoy.id} value={buoy.id}>
                {buoy.name}
              </option>
            ))}
        </Form.Select>
      </td>
      <td>{spot.surf_sessions.length}</td>
      <td>
        <Button
          variant="outline-danger"
          onClick={() => {
            if (
              window.confirm(
                'Are you sure you want to delete this surf spot? This action will also delete all surf sessions associated with this spot and cannot be undone.'
              )
            ) {
              deleteSpot(spot)
            }
          }}
        >
          Delete
        </Button>
      </td>
    </tr>
  )
}
export default SurfSpotRow
