import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { MapContainer, TileLayer } from 'react-leaflet'
import useApiData from '../../../hooks/useApiData'
import LocationMarker from './LocationMarker'
import LoadingSpinner from '../../../components/LoadingSpinner'
import 'leaflet-contextmenu'
import 'leaflet-contextmenu/dist/leaflet.contextmenu.css'

const Map = () => {
  const [markers, markersLoading, error] = useApiData(
    '/api/markers/',
    'Unable to load marker data!',
  )
  const navigate = useNavigate()

  const addSurfSpot = (e) => {
    navigate('/spots/add', {
      state: {
        latitude: e.latlng.lat,
        longitude: e.latlng.lng,
      },
    })
  }

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
      contextmenu={true}
      contextmenuWidth={140}
      contextmenuItems={[
        {
          text: 'Add surf spot',
          callback: addSurfSpot,
        },
      ]}
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
