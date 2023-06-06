import { Popup } from 'react-leaflet'
import { useEffect } from 'react'
import useApiData from '../hooks/useApiData'
import { toast } from 'react-toastify'

const SwellBuoyPopup = ({ id, name, buoyId }) => {
  const meters_to_feet = 3.28084
  const [loading, data, errors] = useApiData(
    `/api/buoys/swell/${id}/data/?timezone=local`
  )

  useEffect(() => {
    if (errors) {
      toast.error(
        `Unexpected error while fetching data for swell buoy: ${name}`
      )
    }
  }, [errors])

  return !loading ? (
    data ? (
      <Popup>
        <strong style={{ fontSize: '20px' }}>{name}</strong>
        <br />
        <b>Buoy ID:</b> {buoyId}
        <br />
        {data.date}
        <br />
        <br />
        <b>Wave Height:</b> {(data.wave_height * meters_to_feet).toFixed(2)} ft
        <br />
        <b>Average Period:</b> {parseFloat(data.average_period).toFixed(2)} sec
        <br />
        <br />
        <b>Swell Height:</b> {(data.swell_height * meters_to_feet).toFixed(2)}{' '}
        ft
        <br />
        <b>Swell Period:</b> {parseFloat(data.swell_avg_period).toFixed(2)} sec
        <br />
        <b>Swell Direction:</b> {parseFloat(data.swell_direction).toFixed(2)}{' '}
        deg
        <br />
        <b>Sea Height:</b> {(data.sea_height * meters_to_feet).toFixed(2)} ft
        <br />
        <b>Sea Period:</b> {parseFloat(data.sea_avg_period).toFixed(2)} sec
        <br />
        <b>Sea Direction:</b> {parseFloat(data.sea_direction).toFixed(2)} deg
      </Popup>
    ) : (
      <Popup>Error fetching data</Popup>
    )
  ) : (
    <Popup>Loading...</Popup>
  )
}
export default SwellBuoyPopup
