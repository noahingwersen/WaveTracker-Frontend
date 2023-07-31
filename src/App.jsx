import HomePage from './pages/Home/HomePage'
import './App.css'
import Navbar from './components/Navbar'
import NotFound from './components/NotFound'
import GlobalConfig from './components/GlobalConfig'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <GlobalConfig>
      <>
        <Navbar />
        <div className='box-border pt-16 h-full'>
          <Routes>
            <Route element={<NotFound />} path='*' />
            <Route element={<HomePage />} path='/' exact />
          </Routes>
        </div>
      </>
    </GlobalConfig>
  )
}

export default App
