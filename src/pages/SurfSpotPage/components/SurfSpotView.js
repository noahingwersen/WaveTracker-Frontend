import { useState, useEffect } from 'react'
import SurfSpotRow from './SurfSpotRow'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import useApiData from '../../../hooks/useApiData'
import useWaveTrackerAxios from '../../../hooks/useWaveTrackerAxios'
import { toast } from 'react-toastify'

const SurfSpotView = ({ setLoading, swellBuoys, tideBuoys }) => {
  const waveAxios = useWaveTrackerAxios()
  const [edited, setEdited] = useState(false)
  const [surfSpotsLoading, surfSpots, surfSpotErrors] =
    useApiData('/api/spots/')
  const [updatedSpots, setUpdatedSpots] = useState([])
  const [allSpots, setAllSpots] = useState([])

  useEffect(() => {
    setAllSpots(surfSpots)
  }, [surfSpots, setAllSpots])

  useEffect(() => {
    setLoading(surfSpotsLoading)
  }, [surfSpotsLoading, setLoading])

  useEffect(() => {
    if (surfSpotErrors) {
      toast.error('Unable to load surf spots.')
    }
  }, [surfSpotErrors])

  const submit = async () => {
    setEdited(false)
    setLoading(true)

    try {
      await waveAxios.put('/api/spots/', updatedSpots)
      toast.success('Surf spots saved!')
    } catch (errors) {
      setEdited(true)
      toast.error('Unable to save changes.')
    }
    setLoading(false)
  }

  return (
    <div className="page-view">
      <h1>Surf Spots</h1>
      <Table striped bordered>
        <thead>
          <tr>
            <th>Name</th>
            <th>Latitude (deg)</th>
            <th>Longitude (deg)</th>
            <th>Swell Buoy</th>
            <th>Tide Buoy</th>
            <th>Surf Sessions</th>
          </tr>
        </thead>
        <tbody>
          {allSpots &&
            allSpots.map((spot) => (
              <SurfSpotRow
                key={spot.id}
                spot={spot}
                swellBuoys={swellBuoys}
                tideBuoys={tideBuoys}
                setEdited={setEdited}
                allSpots={allSpots}
                setAllSpots={setAllSpots}
                updatedSpots={updatedSpots}
                setUpdatedSpots={setUpdatedSpots}
              />
            ))}
        </tbody>
      </Table>
      <Button
        variant="success"
        className="right-btn"
        onClick={submit}
        disabled={!edited}
      >
        Save
      </Button>
    </div>
  )
}
export default SurfSpotView
