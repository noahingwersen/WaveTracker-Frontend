import useWaveTrackerAxios from '../../../hooks/useWaveTrackerAxios'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import Graph from './Graph'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const SimilarSession = ({ loading, surfSpots }) => {
  const waveAxios = useWaveTrackerAxios()
  const [surfSpot, setSurfSpot] = useState()
  const [sessionData, setSessionData] = useState()
  const [sessionLoading, setSessionLoading] = useState(false)

  useEffect(() => {
    // Make sure surfSpot has inital value after data loads
    surfSpots && setSurfSpot(surfSpots[0].id)
  }, [surfSpots])

  const getSimilarSession = async (spotId) => {
    setSessionLoading(true)
    try {
      const response = await waveAxios.get(
        `/api/spots/${spotId}/sessions/closest/?date_format=standard`
      )

      setSessionData(response.data)
    } catch (error) {
      toast.error('Unable to get session data.')
    }
    setSessionLoading(false)
  }

  return (
    <>
      <div className="similar-session-input">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <Form.Select
              value={surfSpot}
              onChange={(e) => {
                setSurfSpot(e.target.value)
              }}
            >
              {surfSpots &&
                surfSpots.map((spot) => (
                  <option key={spot.id} value={spot.id}>
                    {spot.name}
                  </option>
                ))}
            </Form.Select>
            <Button
              variant="success"
              className="ms-3"
              disabled={sessionLoading}
              onClick={() => getSimilarSession(surfSpot)}
            >
              Go
            </Button>{' '}
          </>
        )}
      </div>
      <>
        {!sessionLoading &&
          (sessionData && sessionData.similar_session.swell_data.length > 0 ? (
            <div>
              <h3>{`${sessionData.similar_session.start_date.split(' ')[0]} ${
                sessionData.similar_session.start_date.split(' ')[1]
              } - ${sessionData.similar_session.end_date.split(' ')[1]} ${
                sessionData.timezone
              }`}</h3>
              <h4>Tide Height</h4>
              <Graph
                data={sessionData.similar_session.tide_data}
                xAxisKey="date"
                xAxisLabel="Date (UTC)"
                yAxisKey="height"
                yAxisLabel="Height (ft)"
              />
              <h4>Swell Height</h4>
              <Graph
                data={sessionData.similar_session.swell_data}
                xAxisKey="date"
                xAxisLabel="Date (UTC)"
                yAxisLabel="Swell Height (ft)"
                yAxisKey="swell_height"
              />
              <h4>Swell Period</h4>
              <Graph
                data={sessionData.similar_session.swell_data}
                xAxisKey="date"
                xAxisLabel="Date (UTC)"
                yAxisLabel="Swell Period (sec)"
                yAxisKey="swell_avg_period"
              />
            </div>
          ) : (
            <h3>No data to display</h3>
          ))}
      </>
    </>
  )
}
export default SimilarSession
