import { Routes, Route } from 'react-router-dom'
import AddSurfSession from './components/AddSurfSession'
import NotFound from '../../components/NotFound'

const SurfSessionsPage = () => {
  return (
    <Routes>
      <Route element={<NotFound />} path='*' />
      <Route element={<AddSurfSession />} path='/add' />
    </Routes>
  )
}
export default SurfSessionsPage
