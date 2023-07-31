import { Marker } from 'react-leaflet'

const LocationMarker = ({ data }) => {
  const position = [data.latitude, data.longitude]

  return <Marker position={position}></Marker>
}
export default LocationMarker
