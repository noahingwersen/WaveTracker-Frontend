import { MapContainer, TileLayer } from 'react-leaflet'
import useApiData from '../../../hooks/useApiData'
import LocationMarker from './LocationMarker'

const Map = () => {
  const { data } = useApiData('/api/markers/')

  return (
    <MapContainer
      center={[34.44519317953651, -70.69021151167628]}
      zoom={6}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {data.map((marker, index) => {
        return <LocationMarker key={index} marker={marker} />
      })}
    </MapContainer>
  )
}
export default Map
