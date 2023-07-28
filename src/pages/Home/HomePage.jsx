import Map from "./components/Map"

const HomePage = () => {
    const mapCenter = [34.44519317953651, -70.69021151167628]
    const mapZoom = 6

  return (
    <div>
        <Map center={mapCenter} zoom={mapZoom}/>
    </div>
  )
}
export default HomePage