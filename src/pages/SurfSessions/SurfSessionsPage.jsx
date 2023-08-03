import { Routes, Route } from 'react-router-dom'
import AddSurfSession from './components/AddSurfSession'

const SurfSessionsPage = () => {
  return (
    <Routes>
      <Route element={<AddSurfSession />} path='/add' />
    </Routes>
  )
}
export default SurfSessionsPage
