import { Routes, Route } from 'react-router-dom'
import SurfSpotTable from './components/SurfSpotTable'
import AddSurfSpot from './components/AddSurfSpot'
import NotFound from '../../components/NotFound'

const SurfSpotsPage = () => {
  return (
    <Routes>
      <Route element={<NotFound />} path='*' />
      <Route element={<SurfSpotTable />} path='/' exact />
      <Route element={<AddSurfSpot />} path='/add' />
    </Routes>
  )
}
export default SurfSpotsPage
