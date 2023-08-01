import { Popup } from 'react-leaflet'
import { Link } from 'react-router-dom'
import { useMap } from 'react-leaflet/hooks'
import { ErrorBoundary } from 'react-error-boundary'

const SurfSpotPopup = ({ spot }) => {
  const map = useMap()
  const buoyClick = (buoy) => {
    map.closePopup()
    map.setView([buoy.latitude, buoy.longitude], 11)
  }

  return (
    <Popup>
      <ErrorBoundary fallback={<p>Error</p>}>
        <strong style={{ fontSize: '20px' }}>{spot.name}</strong>
        <br />
        <b>Sessions:</b> {spot.sessions}
        <br />
        <Link to='sessions/' state={{ spotName: spot.name }}>
          Add Surf Session
        </Link>
        <br />
        <br />
        <b>Swell buoy:</b>{' '}
        <Link onClick={() => buoyClick(spot.swell_buoy)}>
          {spot.swell_buoy.name}
        </Link>
        <br />
        <b>Tide buoy:</b>{' '}
        <Link onClick={() => buoyClick(spot.tide_buoy)}>
          {spot.tide_buoy.name}
        </Link>
      </ErrorBoundary>
    </Popup>
  )
}
export default SurfSpotPopup
