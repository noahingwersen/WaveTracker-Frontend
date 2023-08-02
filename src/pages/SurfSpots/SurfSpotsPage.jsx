import { Routes, Route } from 'react-router-dom'
import SurfSpotTable from './components/SurfSpotTable'
import AddSurfSpot from './components/AddSurfSpot'

const SurfSpotsPage = () => {
  return (
    <Routes>
      <Route element={<SurfSpotTable />} path='/' exact />
      <Route element={<AddSurfSpot />} path='/add' />
    </Routes>
  )
}
export default SurfSpotsPage
