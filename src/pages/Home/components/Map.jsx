import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import useApiData from '../../../hooks/useApiData'

const Map = ({center, zoom, markerData}) => {
    const {data} = useApiData('/api/buoys/')

  return (
    <div className='w-full h-[93vh]'>
    <MapContainer center={center} zoom={zoom} scrollWheelZoom={true} >
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[35.22444726910905, -75.61264265368455]}>
            <Popup>
                <p>Test</p>
            </Popup>
        </Marker>
    </MapContainer>
    </div>
  )
}
export default Map