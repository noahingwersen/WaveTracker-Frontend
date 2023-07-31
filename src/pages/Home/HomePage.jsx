import Map from "./components/Map"
import LoadingSpinner from "../../components/LoadingSpinner"
import { ErrorBoundary } from "react-error-boundary"
import MapError from "./components/MapError"
import { Suspense } from "react"

const HomePage = () => {
    
  return (
    <>
    <ErrorBoundary fallback={<MapError />}>
      <Suspense fallback={<LoadingSpinner />}>
        <Map />  
      </Suspense>
    </ErrorBoundary>
    </>
  )
}
export default HomePage