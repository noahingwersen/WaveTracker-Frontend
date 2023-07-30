import Map from "./components/Map"
import LoadingSpinner from "../../components/LoadingSpinner"
import { ErrorBoundary } from "react-error-boundary"
import MapError from "./components/MapError"

const HomePage = () => {
    
  return (
    <>
    <ErrorBoundary fallback={<MapError />}>
      <Map />
    </ErrorBoundary>
    </>
  )
}
export default HomePage