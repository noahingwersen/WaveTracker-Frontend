import { Marker, Popup } from 'react-leaflet'
import { getIcon } from '../utils/Helpers'
import SurfSpotPopup from './SurfSpotPopup'
import SwellBuoyPopup from './SwellBuoyPopup'
import TideBuoyPopup from './TideBuoyPopup'

const LocationMarker = ({ marker }) => {
  // Markers will have different icon and popup based on type
  const defineMarker = (marker) => {
    switch (marker.marker_type) {
      case 'SurfSpot':
        return [
          'surfSpot',
          <SurfSpotPopup
            name={marker.name}
            swellBuoy={marker.swell_buoy}
            tideBuoy={marker.tide_buoy}
            sessions={marker.surf_sessions.length}
          />,
        ]
      case 'SwellBuoy':
        return [
          'swellBuoy',
          <SwellBuoyPopup
            id={marker.id}
            name={marker.name}
            buoyId={marker.buoy_id}
          />,
        ]
      case 'TideBuoy':
        return [
          'tideBuoy',
          <TideBuoyPopup
            id={marker.id}
            name={marker.name}
            buoyId={marker.buoy_id}
          />,
        ]
      default:
        return [
          'icon',
          <Popup>
            <h3>{marker.name}</h3>
            <p>Type: {marker.marker_type}</p>
          </Popup>,
        ]
    }
  }

  const [icon, popup] = defineMarker(marker)

  return (
    <Marker
      key={marker.id}
      position={[marker.latitude, marker.longitude]}
      icon={getIcon(icon)}
    >
      {popup}
    </Marker>
  )
}
export default LocationMarker
