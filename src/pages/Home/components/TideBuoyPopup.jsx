import { Popup } from 'react-leaflet'
import useApiData from '../../../hooks/useApiData'
import { useEffect } from 'react'

const TideBuoyPopup = ({ buoy }) => {
  const [data, loading, error] = useApiData(
    `/api/buoys/tide/${buoy.id}/data/?timezone=local`,
    `Unable to load data for tide buoy: ${buoy.name}`,
  )

  useEffect(() => {
    if (error) {
      throw error
    }
  })

  return (
    <Popup>
      <div>
        <h3 className='text-lg font-bold'>{buoy.name}</h3>
        {loading ? (
          <p>Loading data...</p>
        ) : (
          data && (
            <>
              <b>Buoy ID:</b> {buoy.buoy_id}
              <br />
              {data.date}
              <br />
              <br />
              <b>Height:</b> {data.height} ft
            </>
          )
        )}
      </div>
    </Popup>
  )
}
export default TideBuoyPopup
