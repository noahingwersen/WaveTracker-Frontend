import { MapContainer, TileLayer } from 'react-leaflet'
import LocationMarker from './LocationMarker'
import { useNavigate } from 'react-router-dom'
import 'leaflet-contextmenu'
import 'leaflet-contextmenu/dist/leaflet.contextmenu.css'

const Map = ({ center, zoom, markerData }) => {
  const navigate = useNavigate()

  const addSpot = (e) => {
    navigate('/spots/add', {
      state: {
        latitude: e.latlng.lat,
        longitude: e.latlng.lng,
      },
    })
  }

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      contextmenu={true}
      contextmenuItems={[
        {
          text: 'Add surf spot',
          callback: addSpot,
        },
      ]}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markerData?.map((marker) => (
        <LocationMarker key={marker.id} marker={marker} />
      ))}
    </MapContainer>
  )
}

Map.defaultProps = {
  center: [39.76829, -73.77037],
  zoom: 5,
}

export default Map
