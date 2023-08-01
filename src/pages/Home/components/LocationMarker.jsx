/* eslint-disable react/jsx-key */
import { Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import SurfSpotPopup from './SurfSpotPopup'

const LocationMarker = ({ marker }) => {
  const position = [marker.latitude, marker.longitude]

  const defineMarker = (type) => {
    switch (type) {
      case 'SurfSpot':
        return ['/icons/surfSpot.png', <SurfSpotPopup spot={marker} />]
      case 'SwellBuoy':
        return ['/icons/swellBuoy.png', <Popup>Swell Buoy</Popup>]
      case 'TideBuoy':
        return ['/icons/tideBuoy.png', <Popup>Tide Buoy</Popup>]
      default:
        return ['/icons/buoy.png', <Popup>Marker</Popup>]
    }
  }

  const [iconURL, popup] = defineMarker(marker.marker_type)

  return (
    <Marker
      position={position}
      icon={L.icon({ iconUrl: iconURL, iconSize: 30 })}
    >
      {popup}
    </Marker>
  )
}
export default LocationMarker
