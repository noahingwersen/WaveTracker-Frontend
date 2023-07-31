import { MapContainer, TileLayer } from 'react-leaflet'
import useApiData from '../../../hooks/useApiData'
import LocationMarker from './LocationMarker'
import { Suspense } from 'react'
import LoadingSpinner from '../../../components/LoadingSpinner'

const Map = () => {
    const {data} = useApiData('/api/buoys/')

    return (
    <div className='w-full h-[93vh]'>
    <MapContainer center={[34.44519317953651, -70.69021151167628]} zoom={6} scrollWheelZoom={true} >
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Suspense fallback={<LoadingSpinner />}>
                {data.map((marker, index) => {
                    return <LocationMarker key={index} data={marker} />
                })}
        </Suspense>
    </MapContainer>
    </div>
    )
}
export default Map