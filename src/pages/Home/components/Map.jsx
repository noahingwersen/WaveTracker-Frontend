import { MapContainer, TileLayer } from 'react-leaflet'
import useApiData from '../../../hooks/useApiData'
import LocationMarker from './LocationMarker'
import LoadingSpinner from '../../../components/LoadingSpinner'
import { useEffect } from 'react'

const Map = () => {
  const [markers, markersLoading, error] = useApiData('/api/markers/')

  useEffect(() => {
    if (error) {
      throw error
    }
  }, [error])

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
      {markersLoading ? (
        <LoadingSpinner />
      ) : (
        markers &&
        markers.map((marker, index) => {
          return <LocationMarker key={index} marker={marker} />
        })
      )}
    </MapContainer>
  )
}
export default Map
