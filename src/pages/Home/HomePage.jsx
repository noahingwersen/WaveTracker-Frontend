import { ErrorBoundary } from 'react-error-boundary'
import Map from './components/Map'
import MapError from './components/MapError'

const HomePage = () => {
  return (
    <ErrorBoundary fallback={<MapError />}>
      <Map />
    </ErrorBoundary>
  )
}
export default HomePage
