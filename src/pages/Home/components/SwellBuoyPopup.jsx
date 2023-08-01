import { Popup } from 'react-leaflet'
import useApiData from '../../../hooks/useApiData'
import { useEffect } from 'react'

const SwellBuoyPopup = ({ buoy }) => {
  const meters_to_feet = 3.28084
  const [data, loading, error] = useApiData(`/api/buoys/swell/${buoy.id}/data`)

  useEffect(() => {
    if (error) {
      throw error
    }
  }, [error])

  return (
    <Popup>
      {loading ? (
        <p>Loading...</p>
      ) : (
        data && (
          <div>
            <strong style={{ fontSize: '20px' }}>{buoy.name}</strong>
            <br />
            <b>Buoy ID:</b> {buoy.buoy_id}
            <br />
            {data.date}
            <br />
            <br />
            <b>Wave Height:</b> {(data.wave_height * meters_to_feet).toFixed(2)}{' '}
            ft
            <br />
            <b>Average Period:</b> {parseFloat(data.average_period).toFixed(2)}{' '}
            sec
            <br />
            <br />
            <b>Swell Height:</b>{' '}
            {(data.swell_height * meters_to_feet).toFixed(2)} ft
            <br />
            <b>Swell Period:</b> {parseFloat(data.swell_avg_period).toFixed(2)}{' '}
            sec
            <br />
            <b>Swell Direction:</b>{' '}
            {parseFloat(data.swell_direction).toFixed(2)} deg
            <br />
            <b>Sea Height:</b> {(data.sea_height * meters_to_feet).toFixed(2)}{' '}
            ft
            <br />
            <b>Sea Period:</b> {parseFloat(data.sea_avg_period).toFixed(2)} sec
            <br />
            <b>Sea Direction:</b> {parseFloat(data.sea_direction).toFixed(2)}{' '}
            deg
          </div>
        )
      )}
    </Popup>
  )
}
export default SwellBuoyPopup
