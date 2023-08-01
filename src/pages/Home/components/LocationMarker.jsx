/* eslint-disable react/jsx-key */
import { Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import SurfSpotPopup from './SurfSpotPopup'
import SwellBuoyPopup from './SwellBuoyPopup'
import { ErrorBoundary } from 'react-error-boundary'

const LocationMarker = ({ marker }) => {
  const position = [marker.latitude, marker.longitude]

  const defineMarker = (type) => {
    switch (type) {
      case 'SurfSpot':
        return ['/icons/surfSpot.png', <SurfSpotPopup spot={marker} />]
      case 'SwellBuoy':
        return ['/icons/swellBuoy.png', <SwellBuoyPopup buoy={marker} />]
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
      <ErrorBoundary fallback={<Popup>Error</Popup>}>{popup}</ErrorBoundary>
    </Marker>
  )
}
export default LocationMarker
