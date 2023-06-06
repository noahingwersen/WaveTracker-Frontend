import { Popup } from 'react-leaflet'
import { Link } from 'react-router-dom'
import { useMap } from 'react-leaflet/hooks'

const SurfSpotPopup = ({ name, swellBuoy, tideBuoy, sessions }) => {
  const map = useMap()
  const buoyClick = (buoy) => {
    map.closePopup()
    map.setView([buoy.latitude, buoy.longitude], 11)
  }

  return (
    <Popup>
      <strong style={{ fontSize: '20px' }}>{name}</strong>
      <br />
      <b>Sessions:</b> {sessions}
      <br />
      <Link to="sessions/" state={{ spotName: name }}>
        Add Surf Session
      </Link>
      <br />
      <br />
      <b>Swell buoy:</b>{' '}
      <Link onClick={() => buoyClick(swellBuoy)}>{swellBuoy.name}</Link>
      <br />
      <b>Tide buoy:</b>{' '}
      <Link onClick={() => buoyClick(tideBuoy)}>{tideBuoy.name}</Link>
    </Popup>
  )
}
export default SurfSpotPopup
