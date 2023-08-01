import { Popup } from 'react-leaflet'
import { Link } from 'react-router-dom'
import { useMap } from 'react-leaflet/hooks'

const SurfSpotPopup = ({ spot }) => {
  const map = useMap()
  const buoyClick = (buoy) => {
    map.closePopup()
    map.setView([buoy.latitude, buoy.longitude], 11)
  }

  return (
    <Popup>
      <div>
        <h3 className='text-lg font-bold'>{spot.name}</h3>
        <b>Sessions:</b> {spot.surf_sessions.length}
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
      </div>
    </Popup>
  )
}
export default SurfSpotPopup
