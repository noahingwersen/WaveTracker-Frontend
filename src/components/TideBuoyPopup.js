import { Popup } from 'react-leaflet'
import { useEffect } from 'react'
import useApiData from '../hooks/useApiData'
import { toast } from 'react-toastify'

const TideBuoyPopup = ({ id, name, buoyId }) => {
  const [loading, data, errors] = useApiData(
    `/api/buoys/tide/${id}/data/?timezone=local`
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
        <b>Height:</b> {data.height} ft
      </Popup>
    ) : (
      <Popup>Error fetching data</Popup>
    )
  ) : (
    <Popup>Loading...</Popup>
  )
}
export default TideBuoyPopup
