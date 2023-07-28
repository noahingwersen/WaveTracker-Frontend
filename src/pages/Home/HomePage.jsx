import { Suspense } from "react"
import Map from "./components/Map"

const HomePage = () => {
    const mapCenter = [34.44519317953651, -70.69021151167628]
    const mapZoom = 6
    
  return (
    <div>
        <Suspense fallback={<p>Loading...</p>}>
            <Map center={mapCenter} zoom={mapZoom} />
        </Suspense>
    </div>
  )
}
export default HomePage