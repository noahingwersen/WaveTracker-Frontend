import { Routes, Route } from 'react-router-dom'
import SurfSpotTable from './components/SurfSpotTable'

const SurfSpotsPage = () => {
  return (
    <Routes>
      <Route element={<SurfSpotTable />} path='/' exact />
    </Routes>
  )
}
export default SurfSpotsPage
